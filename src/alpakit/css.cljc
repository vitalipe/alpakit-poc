(ns alpakit.css
  (:require
    [clojure.string :as string]
    
    [garden.core :refer [css]]
    [alpakit.util :refer [map-vals]]))


(defn- rules->class-name [rules]
   (str "alpakit-" (.toString (hash rules) 36)))



;; global style registry
(def registry (atom {}))

(defn reset-css! []
  (reset! registry {}))


(defn register-css! [items]
  (->> items
    (group-by :class-name)
    (map-vals first)
    (swap! registry merge)))



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
