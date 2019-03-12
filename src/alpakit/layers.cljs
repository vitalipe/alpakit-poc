(ns alpakit.layers
  (:require
    [reagent.core :as r]
    [alpakit.widget :refer-macros [defwidget]]
    [alpakit.css    :as css]

    [popper.js :as popper]))


(defwidget popover-layer
  ""
  :props {popover       {:default nil    :spec vector?}
          anchor        {:default nil    :spec vector?}
          showing       {:default true   :spec boolean?}
          transform     {:default #{}    :spec #{:sync-width :sync-height}}
          placement     {:default :left  :spec #{:left   :left-start   :left-end
                                                 :right  :right-start  :right-end
                                                 :top    :top-start    :top-end
                                                 :bottom :bottom-start :bottom-end}}}
  (let [last-props  (atom -props)
        state       (atom {:anchor-dom  nil
                           :popover-dom nil
                           :handle      nil})
        geom-sync! (fn [_]
                    (let [{:keys [anchor-dom popover-dom]} @state
                          {transform :transform :or {transform #{}}} @last-props]

                      (when (or (transform :sync-width) (transform :sync-height))
                        (let [bounds   (.getBoundingClientRect anchor-dom)
                              computed (js/getComputedStyle popover-dom)]
                          (when (transform :sync-width)
                            (set!
                              (.. popover-dom -style -width)
                              (str
                                (- (.-width bounds)
                                   (js/parseFloat (.-paddingLeft computed))
                                   (js/parseFloat (.-paddingRight computed))
                                   (js/parseFloat (.-borderLeft computed))
                                   (js/parseFloat (.-borderRight computed)))
                                "px")))

                          (when (transform :sync-height)
                            (set!
                              (.. popover-dom -style -height)
                              (str
                                (- (.-height bounds)
                                   (js/parseFloat (.-paddingTop computed))
                                   (js/parseFloat (.-paddingBottom computed))
                                   (js/parseFloat (.-borderTop computed))
                                   (js/parseFloat (.-borderBottom computed)))
                                "px")))))))

        sync! (fn [{prv-place :placement prv-showing :showing} {place :placement showing :showing}]
                (let [{:keys [anchor-dom popover-dom handle]} @state
                      popper-config-changed (not= #{prv-place prv-showing} #{showing place})]

                  (when popper-config-changed
                    (when handle
                      (.destroy handle))

                    (when (not= prv-showing showing) ;; minimize dom changes
                      (set! (.. popover-dom -style -display) (if showing "" "none")))

                    (when showing
                      (swap! state assoc :handle
                        (new (.-default popper)
                             anchor-dom
                             popover-dom
                             (clj->js {:placement (name place)
                                       :onUpdate geom-sync!})))))))]

    (r/create-class {:reagent-render (fn [& {:keys [popover anchor]}]
                                        [:div.alpakit-popover-wrapper  {:style {:display "flex"}
                                                                        :class  (css/css! [(css/->style ["> :first-child" {:flex 1}])])}
                                           anchor
                                           popover])

                      :component-will-unmount (fn [_]
                                                 (.destroy (:handle @state))
                                                 (reset! state nil))

                      :component-will-update (fn [_ [_ & {:as props}]]
                                              (sync! @last-props props)
                                              (reset! last-props props)
                                              (geom-sync! nil))

                      :component-did-mount  (fn [this]
                                              (let [dom-children (.-children (r/dom-node this))]
                                                 (swap! state assoc :anchor-dom  (aget dom-children 0)
                                                                    :popover-dom (aget dom-children 1))
                                                 (sync! {} -props)
                                                 (geom-sync! nil)))})))
