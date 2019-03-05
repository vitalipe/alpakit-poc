(ns alpakit.cyber
  (:require
    [clojure.set :as set]
    [clojure.string :as string]

    [reagent.core :as r]

    [alpakit.widget :refer-macros [defwidget]]
    [alpakit.css    :as css :refer [->style] :refer-macros [defstyle]]
    [alpakit.props :as props]
    [alpakit.layout :as layout]
    [alpakit.elements :as base :refer [surface]]))


(defstyle glow-on-focus
  [:&:focus {:box-shadow "inset 0 1px 1px rgba(0,0,0,0.075), 0 0 8px rgba(102,175,233,0.6)"}])

(defstyle cyber-border
  {:border (str "1px solid " "#2f3647")})


(defwidget text-icon
    :props {name        {:default :steam-square :spec keyword?}
            size        {:default 1             :spec #{0.5 1 2 3 4 5}}
            color       {:default nil           :spec string?}
            effects     {:default #{}           :spec #{:spin :reverse-spin}}
            transform   {:default #{}           :spec #{:fixed-width :rotate-90 :rotate-180 :rotate-270
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



(defwidget input-text
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

    [base/input-text :disabled           disabled
                     :on-change           on-change
                     :on-edit             on-edit
                     :value               value
                     :placeholder         placeholder
                     :auto-select-text   auto-select-text
                     :blur-on-enter-key  blur-on-enter-key
                     :-attr              -attr
                     :-css               -css

                    :styles (concat
                             [glow-on-focus]
                             [cyber-border]
                             [(->style {:color "#bcc4e6"
                                        :font-size "15px"})]
                             styles)])



(defwidget button

  :props {label     {:default ""  :spec string?}
          icon      {:default nil   :spec keyword?}
          gap       {:default "5px" :spec string?}

          type      {:default :normal :spec #{:normal}}
          on-click  {:default #()     :spec fn?}

          disabled  {:default false :spec boolean?}
          reverse   {:default false :spec boolean?}

          -attr {:default {}     :spec props/html-attr-map}
          -css  {:default {}     :spec props/css-style-map}

          styles {:default []     :spec seq?}}


  [base/button
           :-css -css
           :-attr -attr
           :disabled disabled
           :reverse  reverse
           :on-click on-click
           :label    label
           :icon     icon
           :gap      gap
           :styles (concat
                     [(if disabled
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
                     styles)])


(defwidget cyber-panel
  :props {-attr {:default {}     :spec props/html-attr-map}
          -css  {:default {}     :spec props/css-style-map}

          styles {:default []     :spec seq?}}

  (into
    [surface :-attr -attr
                 :-css  -css
                 :styles (concat
                           [(->style {:background-color "#161922"
                                      :padding    "15px 5px"

                                      :border-color "#333d56"
                                      :border-style "solid"
                                      :border-width "1px"

                                      :position "relative"})
                            (->style [:&:before
                                      :&:after
                                      :&>:first-child:before
                                      :&>:first-child:after
                                                           {:content   "\" \""
                                                            :position "absolute"
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
      children)))
