(ns cards.layout.grid
  (:require
    [devcards.core :refer-macros [defcard-rg]]
    [alpakit.layout :refer [grid-layout]]))


(defn box [color]
  [:div {:style {:background-color color}} "..."])


(defcard-rg header-menu-footer-layout
  [grid-layout :areas ["1fr"     "1fr"      "1fr"
                       [:header  :header   :header ] "40px"
                       [:menu    :content  :content] "200px"
                       [:menu    :content  :content] "200px"
                       [:footer  :footer   :footer ] "40px"]

               :header  [box "blue"]
               :content [box "gold"]
               :menu    [box "pink"]
               :footer [box "grey"]])


(defcard-rg layout-with-gaps
  [grid-layout  :gap ["20px" "50px"]
                :areas ["1fr"     "1fr"      "1fr"
                        [:header  :header   :header ] "40px"
                        [:c0      :c1        :c2    ] "200px"
                        [:footer  :footer   :footer ] "40px"]

                :header [box "blue"]
                :c1     [box "red"]
                :c2     [box "gold"]
                :c0     [box "pink"]
                :footer [box "grey"]])
