(ns alpakit.widget
  (:require
    #?(:cljs [cljs.spec.alpha :as spec])
    #?(:clj  [clojure.spec.alpha :as spec])
    [reagent.core :as r]
    [alpakit.util :refer [map-kv
                          map-vals
                          map-keys
                          collect-kv-args
                          collect-kv-args-into-props]]))



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
    (let [state-specs  (map-keys keyword state)
          prop-defaults (->> props
                          (filter #(contains? (val %) :default))
                          (map-kv keyword :default))

          prop-specs  (merge {:children (fn [& _] true)} (map-vals :spec props))
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
               `(let [{:keys [~@prop-names] :as ~(symbol "-props")} (collect-kv-args-into-props ~arg-list-sym {})]
                  ~@body))

        no-state
             (list 'fn ['& arg-list-sym]
               docstring
               ;;  props & children
               `(let [{:keys [~@prop-names] :as ~(symbol "-props")} (collect-kv-args-into-props ~arg-list-sym
                                                                                                ~prop-defaults)]
                  ;; FIXME: fix in cljs  TODO make nice errors
                  ;(doseq [[~(symbol "p") ~(symbol "spec-info")] ~prop-specs]
                    ;(spec/assert ~(symbol "spec-info") ~(symbol "p"))

                  ~@body))

        no-props
             (list 'fn ['& arg-list-sym]
              docstring
               ;; children
               `(let [{:keys [~@prop-names] :as ~(symbol "-props")} (collect-kv-args-into-props ~arg-list-sym {})]
                  ;; FIXME: fix in cljs TODO make nice errors
                  ;(doseq [[~(symbol "p") ~(symbol "spec-info")] ~prop-specs]
                    ;(spec/assert ~(symbol "spec-info") ~(symbol "p"))
                  ;; state
                  (r/with-let [{:keys [~@(keys state)]} (map-vals r/atom ~state-specs)]
                    ~@(deref-atom-access body (keys state)))))

        :state+props
             (list 'fn ['& arg-list-sym]
               docstring
                ;; props & children
               `(let [{:keys [~@prop-names] :as ~(symbol "-props")} (collect-kv-args-into-props ~arg-list-sym
                                                                                                ~prop-defaults)]
                  ;; FIXME: fix in cljs TODO make nice errors
                  ;(doseq [[~(symbol "p") ~(symbol "spec-info")] ~prop-specs]
                    ;(spec/assert ~(symbol "spec-info") ~(symbol "p"))
                     ;; state
                  (r/with-let [{:keys [~@(keys state)]} (map-vals r/atom ~state-specs)]
                    ~@(deref-atom-access body (keys state)))))))))


(defmacro defwidget [name & spec]
  `(def ~(symbol name) (widget ~@spec)))
