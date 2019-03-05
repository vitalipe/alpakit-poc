(ns alpakit.elements
  (:require
    [clojure.set :as set]
    [clojure.string :as string]

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
  "buttons are clickable surfaces, and usually have a label and/or icon"

  :props {label    {:default ""  :spec string?}
          icon     {:default nil   :spec keyword?}
          layout   {:default :label-right :spec #{:icon-left :icon-right :icon-top :icon-bottom
                                                  :label-left :label-right :label-top :label-bottom}}
          gap      {:default "5px" :spec string?}

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
            (nil? icon)          label
            (empty? label)       icon
            :both-icon-and-label (condp contains? layout
                                   #{:icon-left
                                     :icon-right
                                     :label-left
                                     :label-right} [layout/h-box :justify :center
                                                                 :align   :baseline
                                                                 :reverse (contains? #{:icon-right :label-left} layout)
                                                      icon
                                                      [surface :-css {:display "inline" :padding gap}]
                                                      label]
                                   #{:label-top
                                     :label-bottom
                                     :icon-top
                                     :icon-bottom} [layout/v-box :justify :center
                                                                 :align  :center
                                                                 :reverse (contains? #{:icon-bottom :label-top} layout)
                                                      icon
                                                      [surface :-css {:display "inline" :padding gap}]
                                                      label]))])


(defwidget text-icon
  "handles all the nasty css crap behind the awosme material-design-iconic font icons :)
   make sure that you load the css+font files (see http://zavoloklom.github.io).

   for a complete icon list see: http://zavoloklom.github.io/material-design-iconic-font/icons.html
   "
    :props {name        {:default :coffee :spec keyword?}
            size        {:default 1       :spec #{0.5 1 2 3 4 5}}
            color       {:default nil     :spec string?}
            effects     {:default #{}     :spec #{:spin :reverse-spin}}
            transform   {:default #{}     :spec #{:fixed-width :rotate-90 :rotate-180 :rotate-270
                                                  :flip-vertical :flip-horizontal}}

            -attr {:default {}     :spec props/html-attr-map}
            -css  {:default {}     :spec props/css-style-map}

            styles {:default []     :spec seq?}}

  [surface :element :i
           :-css (merge {:color color} -css)
           :-attr  (merge
                     {:class (string/join " "
                               ["zmdi"
                                (str "zmdi-"  (clojure.core/name name))
                                (case size
                                  0.5 ""
                                  1   "zmdi-hc-lg"
                                  2   "zmdi-hc-2x"
                                  3   "zmdi-hc-3x"
                                  4   "zmdi-hc-4x"
                                  5   "zmdi-hc-5x")

                                (when (effects :spin)         "zmdi-hc-spin")
                                (when (effects :reverse-spin) "zmdi-hc-spin-reverse")

                                (when (transform :fixed-width) "zmdi-hc-fw")
                                (when (transform :rotate-90) "zmdi-hc-rotate-90")
                                (when (transform :rotate-180) "zmdi-hc-rotate-18")
                                (when (transform :rotate-270) "zmdi-hc-rotate-270")

                                (when (transform :flip-horizontal) "zmdi-hc-flip-horizontal")
                                (when (transform :flip-vertical)   "zmdi-hc-flip-vertical")])}
                     ;; override
                     -attr)])


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
