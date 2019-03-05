(ns alpakit.elements
  (:require
    [clojure.set :as set]
    [reagent.core :as r]

    [alpakit.widget :refer-macros [defwidget]]
    [alpakit.css    :as css]
    [alpakit.props :as props]
    [alpakit.layout :as layout]))




(defwidget surface
  "a building block for more complex widgets"

  :props {-attr       {:default {}     :spec props/html-attr-map}
          -css        {:default {}     :spec props/css-style-map}

          element     {:default :div   :spec keyword?}
          styles      {:default []     :spec seq?}}

    (into [element (merge {:style -css :class (css/css! styles)} -attr)]
          children))


(defwidget input-text
  "basic text based input control, it handles most of the nasty dom event logic.
   it works both in controlled and uncontrolled mode.

    `on-change` will fire on blur (uncontrolled)
    `on-edit`   will fire on any input change (controlled)

    you can set both callbacks, but once you set `on-change` the
    component is in uncontrolled mode.
  "

  :props {disabled   {:default false :spec boolean?}

          on-change {:default nil  :spec fn?}
          on-edit   {:default #()  :spec fn?}

          value            {:default ""    :spec string?}
          placeholder      {:default ""    :spec string?}

          auto-select-text {:default false :spec boolean?}
          blur-on-enter-key  {:default true  :spec boolean?}

          -attr {:default {}     :spec props/html-attr-map}
          -css  {:default {}     :spec props/css-style-map}

          styles {:default []     :spec seq?}
          type   {:default :text  :spec #{:text :password :email}}}


  :state {value* value
          text   value}

  (let [controlled (nil? on-change)]
    (when-not controlled
      ;; in uncontrolled mode, make sure that we override
      ;; `text` with `value` when a new value prop is set
      (when-not (= value* value)
        (reset! text   value)
        (reset! value* value)))

    [surface :element :input
             :styles styles
             :-css -css
             :-attr (merge
                       { :type (name type)
                         :value (if controlled value text)
                         :placeholder placeholder
                         :disabled disabled

                         :on-blur #(when-not controlled
                                     (reset! value* text)
                                     (on-change text))

                         :on-change #(let [v (.. % -target -value)]
                                       (when-not controlled
                                         (reset! text v))
                                       (on-edit v))}

                       (when auto-select-text
                         {:on-click #(.select (.-target %))})
                       (when blur-on-enter-key
                         {:on-key-down #(when (= 13 (.-keyCode %)) (.blur (.-target %)))})

                       ;; manual override
                       -attr)]))


(defwidget button
  "buttons are clickable surface, and usually have a label and/or icon"

  :props {label     {:default ""  :spec string?}
          icon      {:default nil   :spec keyword?}
          gap       {:default "5px" :spec string?}

          reverse   {:default :false :spec boolean?}
          disabled  {:default false :spec boolean?}

          on-click {:default #()  :spec fn?}

          -attr {:default {}     :spec props/html-attr-map}
          -css  {:default {}     :spec props/css-style-map}

          styles {:default []     :spec seq?}}


  [surface :element :button
           :-css -css
           :-attr  (merge
                     {:disabled disabled
                      :on-click #(on-click)}
                     ;; override
                     -attr)

           :styles styles

          (cond
            (and icon label) [layout/h-box :justify :center
                                           :align   :baseline
                                (if reverse label icon)
                                [surface :-css {:display "inline" :padding gap}]
                                (if reverse icon label)]
            (nil? icon)       label
            (nil? label)      icon)])


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

    (r/create-class { :render (fn [] [:style.alpakit-css])
                      :componentWillUnmount #(remove-watch css/registry my-id)
                      :component-did-mount (fn [this]
                                             (let [css-shit (.-sheet (r/dom-node this))]
                                               ;; add all known styles
                                               (doall
                                                 (->> (vals @css/registry)
                                                   (map :css)
                                                   (map #(.insertRule css-shit %))))
                                               ;; register sync
                                               (add-watch
                                                 css/registry
                                                 my-id
                                                 (fn [_ _ prv next]
                                                   (sync-styles! prv next css-shit)))))})))
