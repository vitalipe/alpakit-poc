(ns alpakit.layout
  (:require
    [clojure.string :refer [join]]
    [alpakit.widget :refer-macros [widget]]
    [alpakit.props :as props]))


(defn- map-when [test effect coll]
  (map #(if (test %) (effect %) %)  coll))


(defn areas->css [areas]
  "
     [20%     1fr    2fr    100px
      [:A      :A     :A     :A]  10%
      [:B      :C     :C     nil] 1fr
      [:B      :C     :C     nil] 200px]

     =>

    {:grid-template-areas [[A A A A]
                           [B C C .]
                           [B C C .]]
     :grid-template-rows    10% 1fr 200px
     :grid-template-columns 20%   1fr  2fr 100px
  "
  {:grid-template-areas (->> areas
                          (filter vector?)
                          (mapv (partial map-when nil? (constantly :.))) ;; dot means an empty gird cell
                          (mapv (partial map name))
                          (mapv (partial join " "))
                          (mapv #(str "\"" % "\""))
                          (join " "))

   :grid-template-columns (->> areas
                            (take-while string?)
                            (join " "))
   :grid-template-rows (->> areas
                            (drop-while string?)
                            (drop 1)
                            (take-nth 2)
                            (join " "))})


(defn rows+cols->css [rows cols]
  (merge {}
    (when-not (empty? cols) {:grid-template-columns (join " " cols)})
    (when-not (empty? rows) {:grid-template-rows    (join " " rows)})))


(defn gap->css [gap]
  (let [[row-gap col-gap] (if (string? gap) [gap gap] gap)]
    {:grid-column-gap col-gap
     :grid-row-gap    row-gap}))


(defn place-content->css [[align justify]]
  ;; edge has no support for "place-items", so let's split
  {:align-content (name align)
   :justify-content (name justify)})


(defn place-items->css [[align justify]]
  ;; edge has no support for "place-items", so let's split
  {:align-items (name align)
   :justify-items (name justify)})


(defn auto-sizes->css [[row col]]
  {:grid-auto-columns col
   :grid-auto-rows row})


(defn auto-flow->css [flow]
  {:grid-auto-flow (name flow)})



(def grid-layout
  (widget
    "CSS grid layout"
    :props {areas         {:default [] :spec vector?}
            gap           {:default nil :spec [vector? | string?]}
            place-items   {:default [:stretch :stretch] :spec #{:start :end :center :stretch}}
            place-content {:default [:stretch :stretch] :spec #{:start :end :center :stretch
                                                                :space-around :space-between :space-evenly}}
            auto-sizes  {:default []   :spec vector?}
            auto-flow   {:default :row :spec #{:row :column :dense}}

            rows        {:default nil :spec vector?}
            cols        {:default nil :spec vector?}

            -attr       {:default {} :spec props/html-attr-map}
            -style      {:default {} :spec props/css-style-map}}

    :state {id (random-uuid)}

    (let [grid-styles (into {}
                        (remove (comp nil? val)
                          (merge {:display "grid"}
                                 (areas->css areas)
                                 (rows+cols->css rows cols)
                                 (gap->css gap)
                                 (place-items->css place-items)
                                 (place-content->css place-content)
                                 (auto-sizes->css auto-sizes)
                                 (auto-flow->css auto-flow)

                                 ;; custom overrides take over everything!
                                 -style)))

          grid-area-names (->> (flatten areas)
                            (filter keyword?)
                            (into #{}))
          grid-children   (->> grid-area-names
                            (select-keys -props)
                            (into []))]

      (into
          [:div (merge {:class [(str "alpakit-grid-" id)]
                        :style grid-styles}
                  -attr)
           [:style
            (->> grid-children
              (map first)
              (map-indexed #(str ".alpakit-grid-" id "> *:nth-child(" (+ 2 %1) ") {grid-area: " (name %2) "}"))
              (join "\n"))]]

         (map second grid-children)))))
