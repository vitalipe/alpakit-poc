(ns cards.layout.grid
  (:require
    [devcards.core :refer-macros [defcard-rg]]
    [alpakit.layout :refer [grid-layout]]))


(defn box [color text]
  [:div {:style {:background-color color}} text])

(defcard-rg simple-grid-layout
  "
    to define nice looking grid layouts, simply add named `:areas` and provide `:rows` and `:cols`
  ```
  :areas [[:A  :A  :C]
          [:B  :B  :C]]
  :cols [\"40px\" \"1fr\" \"1fr\"]
  :rows [\"60px\" \"40px\"]

  :A [...]
  :B [...])
  :C [...]])

  ```

  "
  [grid-layout :areas [[:A  :A  :C]
                       [:B  :B  :C]]
               :cols ["40px" "1fr" "1fr"]
               :rows ["60px" "40px"]

               :A [box "#0086b3" "A"]
               :B [box "gold" "B"]
               :C [box "pink" "C"]])

(defcard-rg simple-inline-grid-layout
  "
    it's also possible to define `:rows` and/or `:cols` inside `:areas`
  ```
  :areas [\"40px\" \"1fr\" \"1fr\"
          [:A    :A    :C] \"60px\"
          [:B    :B    :C] \"40px\"]
  ```

  "
  [grid-layout :areas ["40px" "1fr" "1fr"
                       [:A    :A    :C] "60px"
                       [:B    :B    :C] "40px"]

               :A [box "#0086b3" "A"]
               :B [box "gold" "B"]
               :C [box "pink" "C"]])



(defcard-rg header-menu-footer-layout
  "
  ```
  :areas [\"1fr\"     \"1fr\"      \"1fr\"
          [:header  :header   :header ] \"40px\"
          [:menu    :content  :content] \"200px\"
          [:menu    :content  :content] \"200px\"
          [:footer  :footer   :footer ] \"40px\"]
  ```

  "
  [grid-layout :areas ["1fr"     "1fr"      "1fr"
                       [:header  :header   :header ] "40px"
                       [:menu    :content  :content] "200px"
                       [:menu    :content  :content] "200px"
                       [:footer  :footer   :footer ] "40px"]

               :header  [box "#0086b3" "header"]
               :content [box "gold" "content"]
               :menu    [box "pink" "menu"]
               :footer  [box "brown" "footer"]])

(defcard-rg grid-layout-with-holes
  "
  set areas to `nil` to make great art!
  ```
  :areas [\"1fr\"     \"1fr\"      \"1fr\"
          [:header  :header   :header ] \"40px\"
          [:menu      nil       nil   ] \"200px\"
          [nil        nil     :content] \"200px\"
          [nil      :footer     nil   ] \"40px\"]

  ```

  "
  [grid-layout :areas ["1fr"     "1fr"      "1fr"
                       [:header  :header   :header ] "40px"
                       [:menu      nil       nil   ] "200px"
                       [nil        nil     :content] "200px"
                       [nil      :footer     nil   ] "40px"]

               :header  [box "#0086b3" "header"]
               :content [box "gold" "content"]
               :menu    [box "pink" "menu"]
               :footer  [box "brown" "footer"]])


(defcard-rg grid-layout-with-gaps
  "
  to add gaps between rows and cols use the `:gap` prop
  ```
  :gap [\"20px\" \"50px\"]
  ```
  "
  [grid-layout  :gap ["20px" "50px"]
                :areas ["1fr"     "1fr"      "1fr"
                        [:header  :header   :header ] "40px"
                        [:c0      :c1        :c2    ] "200px"
                        [:footer  :footer   :footer ] "40px"]

                :header [box "#0086b3" "header"]
                :c1     [box "red" "c1"]
                :c2     [box "gold" "c2"]
                :c0     [box "pink" "c0"]
                :footer [box "grey" "footer"]])


(defcard-rg layout-with-autoflow
  "
  children without an area key are inserted automatically.

  see `:auto-sizes` and `:auto-flow` for more options.

  ```
   :areas [\"1fr\"     \"1fr\"      \"1fr\"
           [:A        :B         :C ] \"40px\"
           [:D        :E         :F ] \"60px\"]
    :B [box ...]

    [box \"gold\"  ...
    [box \"pink\"  ...]
    [box \"grey\"  ...]
    [box \"brown\" ...]])

  ```
  "
  [grid-layout  :areas ["1fr"     "1fr"      "1fr"
                        [:A        :B         :C ] "40px"
                        [:D        :E         :F ] "60px"]
    :B [box "#0086b3"    "B"]

    [box "gold"    "A (child 1 auto fill)"]
    [box "pink"    "C (child 2 auto fill)"]
    [box "grey"    "D (child 3 auto fill)"]
    [box "brown"   "E (child 4 auto fill)"]])
