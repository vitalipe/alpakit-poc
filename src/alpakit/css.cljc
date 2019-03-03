(ns alpakit.css
  (:require
    [clojure.set :as set]
    [clojure.string :as string]

    [garden.core :refer [css]]
    [reagent.core :as r]
    [alpakit.util :refer [map-vals]]))


(defn- rules->class-name [rules]
   (str "alpakit-" (.toString (hash rules) 36)))



;; global style registry
(def css-registry (atom {}))

(defn reset-css! []
  (reset! css-registry {}))


(defn register-css! [items]
  (->> items
    (group-by :class-name)
    (map-vals first)
    (swap! css-registry merge)))


#?(:cljs
    (defn style-sheet []
      "style container element"
      (let [my-id (random-uuid)
            sync-styles! (fn [prv next sheet]
                          (cond
                            ;; at this point we don't really care about removing styles, only handle `reset!`
                            (empty? next) (while (pos? (.. sheet -cssRules -length)) (.deleteRule sheet 0))
                            :otherwise    (let [new-rules (select-keys
                                                            next
                                                            (set/difference
                                                              (into #{} (keys next))
                                                              (into #{} (keys prv))))]
                                              (doall
                                                (->> (vals new-rules)
                                                  (map :css)
                                                  (map #(.insertRule sheet %)))))))]

        (r/create-class { :render (fn []
                                    [:style.alpakit-css])
                          :componentWillUnmount #(remove-watch css-registry my-id)
                          :component-did-mount (fn [this]
                                                 (let [css-shit (.-sheet (r/dom-node this))]
                                                   ;; add all known styles
                                                   (doall
                                                     (->> (vals @css-registry)
                                                       (map :css)
                                                       (map #(.insertRule css-shit %))))
                                                   ;; register sync
                                                   (add-watch
                                                     css-registry
                                                     my-id
                                                     (fn [_ _ prv next]
                                                       (sync-styles! prv next css-shit)))))}))))


(defn ->style [& rules]
  "style factory"
  (let [class-name (rules->class-name rules)]
    {:css   (css (into [(str "." class-name)] rules))
     :style rules
     :class-name class-name}))


(defmacro defstyle [name spec]
  "def style and register it"
  (let [style-sym (gensym "style")]
    `(let [~style-sym (->style ~spec)]
       (register-css! [~style-sym])
       (def ~(symbol name) ~style-sym))))



(defn css! [styles]
  "register css and return class names as a string"
  (register-css! styles)
  (->> styles
    (map :class-name)
    (string/join " ")))
