(ns alpakit.widget
  (:require
    #?(:cljs [cljs.spec.alpha :as spec])
    #?(:clj  [clojure.spec.alpha :as spec])
    [reagent.core :as r]))



;; util
(defn collect-kv-args [arg-list]
  "takes a seq of keyword args followed by n positional args
   and returns a map and a vector (positional args).

     for example:

        [:x 42 :y false 1 2 3 4 5] => [{:x 42 :y false} [1 2 3 4 5]]
        [1 2 3 4 5]                => [{} [1 2 3 4 5]]
        [:x 42 :y false]           => [{:x 42 :y false} []]
"
  (let [rest-index (loop [[arg & other] arg-list index 0]
                      (cond
                        (keyword? arg) (recur (rest other) (+ 2 index))
                        :otherwise     index))
        kv-args   (apply hash-map (subvec (into [] arg-list) 0 rest-index))
        rest-list (subvec (into [] arg-list) rest-index (count arg-list))]

      [kv-args rest-list]))


(defn collect-kv-args-into-props [arg-list defaults children-key]
  "collect-kv into a map with defaults, useful for props+children"
  (let [[props children] (collect-kv-args arg-list)]
    (merge defaults props {:children (apply list children)})))


(defn map-kv [k-fn v-fn a-map]
  "map over a seq of [k v] pairs, returns a map"
  (->> a-map
    (map #(vector (k-fn (first %)) (v-fn (second %))))
    (into {})))


(defn deref-atom-access [body symbols]
  "walk over body and deref all symbols from symbols, unless it's a swap!/reset! call"
  (let [atom-operation? #(and (list? %) (#{'swap! 'reset! `swap! `reset!} (first %)))
        target-symbol?  (into #{} symbols)]
    (clojure.walk/postwalk
        (fn [form]
          (cond
            (target-symbol? form)  (list 'cljs.core/deref form)
            ;; this will be called on the way up (postwalk),
            ;; it's a great place to remove derefs on swap! reset! etc..
            (atom-operation? form)  (let [[f [_ a] & args] form] (concat (list f a) args))
            :otherwise              form))
        body)))


(defmacro widget [& spec]
  (let [[docstring {:keys [props state]} body] (if (string? (first spec)) ;; docstring?
                                                 (cons (first spec) (collect-kv-args (rest spec)))
                                                 (cons "" (collect-kv-args spec)))]
    (let [state-specs  (->> state
                         (map-kv keyword identity))
          prop-defaults (->> props
                          (filter #(contains? (val %) :default))
                          (map-kv keyword :default))

          prop-specs  (merge {:children (fn [& _] true)} (map-kv identity :spec props))
          prop-names  (conj (keys props) (symbol "children"))

          arg-list-sym (gensym "arg-list")

          no-state (empty? (keys state))
          no-props (empty? (keys props))
          only-body (and no-state no-props)]

      (cond
        only-body
             (list 'fn ['& arg-list-sym]
               docstring
               ;; children
               `(let [{:keys [~@prop-names] :as ~(symbol "-props")} (collect-kv-args-into-props ~arg-list-sym {} :children)]
                  ~@body))

        no-state
             (list 'fn ['& arg-list-sym]
               docstring
               ;;  props & children
               `(let [{:keys [~@prop-names] :as ~(symbol "-props")} (collect-kv-args-into-props ~arg-list-sym
                                                                                                ~prop-defaults
                                                                                                :children)]
                  ;; FIXME: fix in cljs  TODO make nice errors
                  ;(doseq [[~(symbol "p") ~(symbol "spec-info")] ~prop-specs]
                    ;(spec/assert ~(symbol "spec-info") ~(symbol "p"))

                  ~@body))

        no-props
             (list 'fn ['& arg-list-sym]
              docstring
               ;; children
               `(let [{:keys [~@prop-names] :as ~(symbol "-props")} (collect-kv-args-into-props ~arg-list-sym {} :children)]
                  ;; FIXME: fix in cljs TODO make nice errors
                  ;(doseq [[~(symbol "p") ~(symbol "spec-info")] ~prop-specs]
                    ;(spec/assert ~(symbol "spec-info") ~(symbol "p"))
                  ;; state
                  (r/with-let [{:keys [~@(keys state)]} (map-kv identity r/atom ~state-specs)]
                    ~@(deref-atom-access body (keys state)))))

        :state+props
             (list 'fn ['& arg-list-sym]
               docstring
                ;; props & children
               `(let [{:keys [~@prop-names] :as ~(symbol "-props")} (collect-kv-args-into-props ~arg-list-sym
                                                                                                ~prop-defaults
                                                                                                :children)]
                  ;; FIXME: fix in cljs TODO make nice errors
                  ;(doseq [[~(symbol "p") ~(symbol "spec-info")] ~prop-specs]
                    ;(spec/assert ~(symbol "spec-info") ~(symbol "p"))
                     ;; state
                  (r/with-let [{:keys [~@(keys state)]} (map-kv identity r/atom ~state-specs)]
                    ~@(deref-atom-access body (keys state)))))))))


;; FIXME: how can I make this work in cljs? (without loading eval)
(defmacro defwidget [name & spec]
  (eval `(def ~(symbol name) (widget ~@spec))))
