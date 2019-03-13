(ns alpakit.layers
  (:require
    [reagent.core :as r]
    [alpakit.widget :refer-macros [defwidget]]
    [alpakit.css    :as css]

    [popper.js :as popper]))




(defwidget popover-layer
  ""
  :props {popover       {:default nil     :spec vector?}
          anchor        {:default nil     :spec vector?}
          showing       {:default true    :spec boolean?}
          transform     {:default #{}     :spec #{:sync-edges :no-flip}}
          placement     {:default :left   :spec #{:left   :left-start   :left-end
                                                  :right  :right-start  :right-end
                                                  :top    :top-start    :top-end
                                                  :bottom :bottom-start :bottom-end}}}

  (let [last-props  (atom -props)
        state       (atom {:anchor-dom  nil
                           :popover-dom nil
                           :handle      nil})
        at-y-axis? #{:left :left-start :left-end :right :right-start :right-end}
        geom-sync! (fn [_]
                    (let [{:keys [anchor-dom popover-dom]} @state
                          {transform :transform
                           placement :placement :or {transform #{}}} @last-props
                          sync-dir (when (transform :sync-edges)
                                      (if (at-y-axis? placement) :height :width))]

                      (when (= sync-dir :width)
                        (let [bounds   (.getBoundingClientRect anchor-dom)
                              computed (js/getComputedStyle popover-dom)]
                            (set!
                              (.. popover-dom -style -width)
                              (str
                                (- (.-width bounds)
                                   (js/parseFloat (.-paddingLeft computed))
                                   (js/parseFloat (.-paddingRight computed))
                                   (js/parseFloat (.-borderLeft computed))
                                   (js/parseFloat (.-borderRight computed)))
                                "px"))))

                      (when (= sync-dir :height)
                        (let [bounds   (.getBoundingClientRect anchor-dom)
                              computed (js/getComputedStyle popover-dom)]
                            (set!
                              (.. popover-dom -style -height)
                              (str
                                (- (.-height bounds)
                                   (js/parseFloat (.-paddingTop computed))
                                   (js/parseFloat (.-paddingBottom computed))
                                   (js/parseFloat (.-borderTop computed))
                                   (js/parseFloat (.-borderBottom computed)))
                                "px"))))))

        sync! (fn [{prv-place :placement prv-showing :showing prv-transform :transform}
                   {place :placement showing :showing transform :transform}]
                (let [{:keys [anchor-dom popover-dom handle]} @state
                      popper-config-changed (not= #{prv-place prv-showing prv-transform}
                                                  #{showing place transform})]

                  ;; toggle hidden
                  (when (not= prv-showing showing) ;; minimize dom changes
                    (set! (.. popover-dom -style -display) (if showing "" "none")))

                  ;; update popper
                  (when popper-config-changed
                    (when handle
                      (.destroy handle)
                      (swap! state assoc :handle nil))

                    (when showing
                      (swap! state assoc :handle
                        (new (.-default popper)
                             anchor-dom
                             popover-dom
                             (clj->js {:placement (name place)
                                       :modifiers {:flip {:enabled (not (contains? transform :no-flip))}}
                                       :onUpdate geom-sync!})))))))]

    (r/create-class {:reagent-render (fn [& {:keys [popover anchor]}]
                                        [:div.alpakit-popover-wrapper  {:style {:display "flex"}
                                                                        :class  (css/css! [(css/->style ["> :first-child" {:flex 1}])])}
                                           anchor
                                           popover])

                      :component-will-unmount (fn [this]
                                                (when-let [handle (:handle @state)]
                                                   (.destroy handle)
                                                 (reset! state nil)))

                      :component-will-update (fn [_ [_ & {:as props}]]
                                              (sync! @last-props props)
                                              (reset! last-props props))

                      :component-did-update (fn [_]
                                              (geom-sync! nil))

                      :component-did-mount  (fn [this]
                                              (let [dom-children (.-children (r/dom-node this))]
                                                 (swap! state assoc :anchor-dom  (aget dom-children 0)
                                                                    :popover-dom (aget dom-children 1))
                                                 (sync! {} -props)
                                                 (geom-sync! nil)))})))
