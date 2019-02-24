(ns cards.core
  (:require
    [devcards.core]
    [reagent.core :as r]
    [alpakit.widget :refer-macros [widget]])

  (:require-macros
   [devcards.core :as dc :refer [defcard-rg]]))


(def demo-widget
  (widget
    "just a demo!"

    :props
      {label-dec {:default "wat" :spec string?}
       label-inc {:default "wat" :spec string?}}
    :state
      {count 0}

    [:div
     [:button {:on-click #(swap! count inc)} label-inc]
     " "
     [:label count]
     " "
     [:button {:on-click #(swap! count dec)} label-dec]

     [:h4 "my children:"
      (first children)
      (last  children)]]))


(enable-console-print!)

(defcard-rg widget-demo
  "it works!"
  [demo-widget :label-inc "++ alpaaaakaa!!!"
               :label-dec "-- alpaaaakaa!!!"
   [:div "child 1"]
   [:div "child 2"]])


(defn main []) ;; noop
