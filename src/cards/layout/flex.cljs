(ns cards.layout.flex
  (:require
    [devcards.core :refer-macros [defcard-rg]]
    [alpakit.layout :refer [h-box v-box]]))


(defn box [color text]
  [:div {:style {:background-color color}} text])


(defcard-rg simple-h-box
  "
  to layout widgets horizontaly use h-box

  ```
   [h-box
    [child-one]
    [child-two]
    [child-three]]
  ```

  "
   [h-box
    [box "gold" "child-one"]
    [box "pink" "child-two"]
    [box "brown" "child-three"]])


(defcard-rg space-around-h-box
  "
  here's how `space-around` looks:

    ```
    [h-box :justify :space-around
     [child-one]
     [child-two]
     [child-three]]
    ```

  "
   [h-box :justify :space-around
    [box "gold" "child-one"]
    [box "pink" "child-two"]
    [box "brown" "child-three"]])


(defcard-rg space-between-h-box
  "
  here's how `space-between` looks:

    ```
    [h-box :justify :space-between
     [child-one]
     [child-two]
     [child-three]]
    ```

  "
   [h-box :justify :space-between
    [box "gold" "child-one"]
    [box "pink" "child-two"]
    [box "brown" "child-three"]])


(defcard-rg reverse-h-box
  "
  you can reverse boxes

    ```
    [h-box  :reverse? true
     [child-one]
     [child-two]
     [child-three]]
    ```

  "
   [h-box :reverse? true
    [box "gold" "child-one"]
    [box "pink" "child-two"]
    [box "brown" "child-three"]])


(defcard-rg v-box
  "
  `v-box` works the same as `h-box`

    ```
    [v-box
     [child-one]
     [child-two]
     [child-three]]
    ```

  "
   [v-box
    [box "gold" "child-one"]
    [box "pink" "child-two"]
    [box "brown" "child-three"]])
