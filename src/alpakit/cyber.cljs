(ns alpakit.cyber
  (:require
    [clojure.set :as set]
    [reagent.core :as r]

    [alpakit.widget :refer-macros [defwidget]]
    [alpakit.css    :as css :refer [->style] :refer-macros [defstyle]]
    [alpakit.props :as props]
    [alpakit.elements :as base :refer [surface]]))



(defstyle glow-on-focus
  [:&:focus {:box-shadow "inset 0 1px 1px rgba(0,0,0,0.075), 0 0 8px rgba(102,175,233,0.6)"}])

(defstyle cyber-border
  {:border (str "1px solid " "#2f3647")})

(defwidget input-text
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

    [base/input-text :disabled?           disabled?
                     :on-change           on-change
                     :on-edit             on-edit
                     :value               value
                     :placeholder         placeholder
                     :auto-select-text?   auto-select-text?
                     :blur-on-enter-key?  blur-on-enter-key?
                     :-attr              -attr
                     :-css               -css

                    :styles (concat
                             [glow-on-focus]
                             [cyber-border]
                             [(->style {:color "#bcc4e6"
                                        :font-size "15px"})]
                             styles)])



(defwidget button

  :props {label {:default ""  :spec string?}
          icon  {:default nil :spec keyword?}

          type      {:default :normal :spec #{:normal}}
          disabled? {:default false :spec boolean}

          -attr {:default {}     :spec props/html-attr-map}
          -css  {:default {}     :spec props/css-style-map}

          styles {:default []     :spec seq?}}


  [surface :element :button
           :-css -css
           :-attr  (merge
                     {:disabled disabled?}
                     ;; override
                     -attr)

           :styles (concat
                     [(if disabled?
                        (->style {:cursor "not-allowed"
                                  :opacity ".65"})
                        (->style [:&:hover
                                    {:cursor "pointer"}
                                    {:border-color "#f3f6fa"
                                     :color "#f3f6fa"}]))

                      (->style {:border-radius "2px"
                                :border-color "rgb(154, 161, 189)"
                                :border-style "solid"
                                :border-width "1px"

                                :color "rgb(190, 196, 232)"
                                :text-transform "capitalize"
                                :font-size "16px"
                                :text-align "center"

                                :padding-top    "5px"
                                :padding-bottom "5px"
                                :padding-left   "12px"
                                :padding-right  "12px"})]
                     ;; override
                     styles)
        label])



(defwidget cyber-panel
  :props {-attr {:default {}     :spec props/html-attr-map}
          -css  {:default {}     :spec props/css-style-map}

          styles {:default []     :spec seq?}}

  (let []
    (into
      [surface :-attr -attr
                   :-css  -css
                   :styles (concat
                             [(->style {:background-color "#161922"
                                        ;:padding    "15px"

                                        :border-color "#333d56"
                                        :border-style "solid"
                                        :border-width "1px"

                                        :position "relative"})
                              (->style [:&:before
                                        :&:after
                                        :&>:first-child:before
                                        :&>:first-child:after
                                                             {:content   "\" \""
                                                              :position "relative"
                                                              :display   "block"
                                                              :width     "20px"
                                                              :height    "20px"
                                                              :border-color "#77809d"
                                                              :border-style "solid"}])
                              (->style
                                    [:&:before {:top "-1px"
                                                :left "-1px"
                                                :border-width "1px 0 0 1px"}])
                              (->style
                                    [:&:after  {:top   "-1px"
                                                :right "-1px"
                                                :border-width "1px 1px 0 0"}])
                              (->style
                                    [:&>:first-child:before {:bottom "-1px"
                                                             :right  "-1px"
                                                             :border-width "0 1px 1px 0"}])
                              (->style
                                    [:&>:first-child:after {:bottom "-1px"
                                                            :left "-1px"
                                                            :border-width "0 0 1px 1px"}])]

                             styles)]
      (concat
        [[surface :css {:position "relative"}]]
        children))))
