(ns alpakit.layers
  (:require
    [reagent.core :as r]
    [alpakit.widget :refer-macros [defwidget]]
    [popper.js :as popper]))




(defwidget popover-layer
  ""
  :props {popover   {:default nil    :spec vector?}
          anchor    {:default nil    :spec vector?}
          placement {:default :left  :spec #{:left   :left-start   :left-end
                                             :right  :right-start  :right-end
                                             :top    :top-start    :top-end
                                             :bottom :bottom-start :bottom-end}}}
  (let [last-props  (atom -props)
        state       (atom {:anchor-dom  nil
                           :popover-dom nil
                           :handle      nil})

        sync! (fn [{last-placement :placement} {next-placement :placement}]
                (let [{:keys [anchor-dom popover-dom handle]} @state]
                  (when (not= last-placement next-placement)
                    (when handle
                      (.destroy handle))
                    (swap! state assoc :handle (new (.-default popper)
                                                    anchor-dom
                                                    popover-dom
                                                    (clj->js {:placement (name next-placement)}))))))]

    (r/create-class {:reagent-render (fn [& {:keys [popover anchor]}]
                                        [:div.alpakit-popover-wrapper
                                           popover
                                           anchor])

                      :component-will-unmount (fn [_]
                                                 (.destroy (:handle @state))
                                                 (reset! state nil))

                      :component-will-update (fn [_ [_ & {:as props}]]
                                              (sync! @last-props props)
                                              (reset! last-props props))

                      :component-did-mount  (fn [this]
                                              (let [dom-children (.-children (r/dom-node this))]
                                                 (swap! state assoc :anchor-dom  (aget dom-children 1)
                                                                    :popover-dom (aget dom-children 0))
                                                 (sync! {} -props)))})))
