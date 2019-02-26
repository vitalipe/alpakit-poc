(ns alpakit.surface
  (:require
    [alpakit.widget :refer-macros [widget]]
    [alpakit.props :as props]))




(def surface
  (widget
    "a simple building block for more complex widgets"

    :props {background  {:default ""  :spec props/css-background}
            border      {:default ""  :spec props/css-border}
            padding     {:default ""  :spec props/css-size}

            hidden?     {:default false :spec boolean?}
            disabled?   {:default false :spec boolean?}
            on-click    {:default nil   :spec props/on-click-fn}

            -attr       {:default {}     :spec props/html-attr-map}
            -style      {:default {}     :spec props/css-style-map}}))
