(ns alpakit.elements
  (:require
    [alpakit.widget :refer-macros [defwidget]]
    [alpakit.css    :refer [css!]]
    [alpakit.props :as props]))




(defwidget surface
  "a building block for more complex widgets"

  :props {-attr       {:default {}     :spec props/html-attr-map}
          -css        {:default {}     :spec props/css-style-map}

          element     {:default :div   :spec keyword?}
          styles      {:default []     :spec seq?}}

    (into [element (merge {:style -css :class (css! styles)} -attr)]
          children))


(defwidget input-text
  "basic text based input control, it handles most of the nasty dom event logic.
   it works both in controlled and uncontrolled mode.

    `on-change` will fire on blur (uncontrolled)
    `on-edit`   will fire on any input change (controlled)

    you can set both callbacks, but once you set `on-change` the
    component is in uncontrolled mode.
  "

  :props {disabled?   {:default false :spec boolean?}

          on-change {:default nil  :spec fn?}
          on-edit   {:default #()  :spec fn?}

          value            {:default ""    :spec string?}
          placeholder      {:default ""    :spec string?}

          auto-select-text? {:default false :spec boolean?}
          blur-on-enter-key?  {:default true  :spec boolean?}

          -attr {:default {}     :spec props/html-attr-map}
          -css  {:default {}     :spec props/css-style-map}

          styles {:default []     :spec seq?}
          type   {:default :text  :spec #{:text :password :email}}}


  :state {value* value
          text   value}



  (let [controlled? (nil? on-change)]
    (when-not controlled?
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
                         :value (if controlled? value text)
                         :placeholder placeholder
                         :disabled disabled?

                         :on-blur #(when-not controlled?
                                     (reset! value* text)
                                     (on-change text))

                         :on-change #(let [v (.. % -target -value)]
                                       (when-not controlled?
                                         (reset! text v))
                                       (on-edit v))}

                       (when auto-select-text?
                         {:on-click #(.select (.-target %))})
                       (when blur-on-enter-key?
                         {:on-key-down #(when (= 13 (.-keyCode %)) (.blur (.-target %)))})

                       ;; manual override
                       -attr)]))
