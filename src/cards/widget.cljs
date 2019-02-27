(ns cards.widget
  (:require
    [devcards.core :refer-macros [defcard-rg]]
    [reagent.core :as r]
    [cljs.spec.alpha :as spec]
    [alpakit.widget :refer-macros [defwidget]]))



(defwidget demo-widget
  "just a demo!"

  :props
    {label+ {:default "wat" :spec string?}
     label- {:default "wat" :spec string?}}

  :state
    {count 0
     open? false}

  [:div
   [:button {:on-click #(swap! count inc)} label+]
   [:label " " count " "]
   [:button {:on-click #(swap! count dec)} label-]
   [:div
    [:button {:on-click #(swap! open? not)} (if open? "hide" "show") " children"]
    (when open?
      [:h4 "my children:"
       (first children)
       (last  children)])]])


(defn demo-raw [& {:keys [label- label+ children] :or {label- "wat" label+ "wat"}}]
  :pre [(spec/valid? string? label+) (spec/valid? string? label-)]
  "just a demo!"

  (r/with-let [count (r/atom 0)
               open? (r/atom false)]

    [:div
     [:button {:on-click #(swap! count inc)} label+]
     [:label " " @count " "]
     [:button {:on-click #(swap! count dec)} label-]
     [:div
      [:button {:on-click #(swap! open? not)} (if @open? "hide" "show") " children"]
      (when @open?
        [:h4 "my children:"
         (first children)
         (last  children)])]]))


(defcard-rg widget-demo
  [demo-widget :label+ "++ alpaaaakaa!!!"
               :label- "-- alpaaaakaa!!!"
   [:div "child 1"]
   [:div "child 2"]])

(defcard-rg raw-fn-demo
  [demo-raw    :label+ "++ alpaaaakaa!!!"
               :label- "-- alpaaaakaa!!!"
               :children [[:div "child 1"]
                          [:div "child 2"]]])


(defn main []) ;; noop
