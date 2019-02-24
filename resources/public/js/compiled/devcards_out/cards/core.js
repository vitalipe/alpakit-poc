// Compiled by ClojureScript 1.10.520 {}
goog.provide('cards.core');
goog.require('cljs.core');
goog.require('devcards.core');
goog.require('reagent.core');
goog.require('alpakit.widget');
/**
 * @param {...*} var_args
 */
cards.core.demo_widget = (function() { 
var cards$core$demo_widget__delegate = function (arg_list38482){

var map__38483 = alpakit.widget.collect_kv_args_into_props.call(null,arg_list38482,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label-dec","label-dec",1847894776),"wat",new cljs.core.Keyword(null,"label-inc","label-inc",542361202),"wat"], null),new cljs.core.Keyword(null,"children","children",-940561982));
var map__38483__$1 = (((((!((map__38483 == null))))?(((((map__38483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38483.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38483):map__38483);
var children = cljs.core.get.call(null,map__38483__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var label_inc = cljs.core.get.call(null,map__38483__$1,new cljs.core.Keyword(null,"label-inc","label-inc",542361202));
var label_dec = cljs.core.get.call(null,map__38483__$1,new cljs.core.Keyword(null,"label-dec","label-dec",1847894776));
var with_let38485 = reagent.ratom.with_let_values.call(null,new cljs.core.Keyword(null,"with-let38485","with-let38485",712966498));
var temp__5724__auto___38489 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5724__auto___38489 == null)){
} else {
var c__22438__auto___38490 = temp__5724__auto___38489;
if((with_let38485.generation === c__22438__auto___38490.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let38485.generation = c__22438__auto___38490.ratomGeneration;
}


var init38486 = (with_let38485.length === (0));
var map__38487 = ((init38486)?(with_let38485[(0)] = alpakit.widget.map_kv.call(null,cljs.core.identity,reagent.core.atom,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),(0)], null))):(with_let38485[(0)]));
var map__38487__$1 = (((((!((map__38487 == null))))?(((((map__38487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38487):map__38487);
var count = cljs.core.get.call(null,map__38487__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var res__22439__auto__ = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (init38486,map__38487,map__38487__$1,count,with_let38485,map__38483,map__38483__$1,children,label_inc,label_dec){
return (function (){
return cljs.core.swap_BANG_.call(null,count,cljs.core.inc);
});})(init38486,map__38487,map__38487__$1,count,with_let38485,map__38483,map__38483__$1,children,label_inc,label_dec))
], null),label_inc], null)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.deref.call(null,count)], null)," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (init38486,map__38487,map__38487__$1,count,with_let38485,map__38483,map__38483__$1,children,label_inc,label_dec){
return (function (){
return cljs.core.swap_BANG_.call(null,count,cljs.core.dec);
});})(init38486,map__38487,map__38487__$1,count,with_let38485,map__38483,map__38483__$1,children,label_inc,label_dec))
], null),label_dec], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"my children:",cljs.core.first.call(null,children),cljs.core.last.call(null,children)], null)], null);

return res__22439__auto__;
};
var cards$core$demo_widget = function (var_args){
var arg_list38482 = null;
if (arguments.length > 0) {
var G__38491__i = 0, G__38491__a = new Array(arguments.length -  0);
while (G__38491__i < G__38491__a.length) {G__38491__a[G__38491__i] = arguments[G__38491__i + 0]; ++G__38491__i;}
  arg_list38482 = new cljs.core.IndexedSeq(G__38491__a,0,null);
} 
return cards$core$demo_widget__delegate.call(this,arg_list38482);};
cards$core$demo_widget.cljs$lang$maxFixedArity = 0;
cards$core$demo_widget.cljs$lang$applyTo = (function (arglist__38492){
var arg_list38482 = cljs.core.seq(arglist__38492);
return cards$core$demo_widget__delegate(arg_list38482);
});
cards$core$demo_widget.cljs$core$IFn$_invoke$arity$variadic = cards$core$demo_widget__delegate;
return cards$core$demo_widget;
})()
;
cljs.core.enable_console_print_BANG_.call(null);
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards.core","cards.core",-1115897867),new cljs.core.Keyword(null,"widget-demo","widget-demo",514241640)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"widget-demo",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"it works!",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof cards !== 'undefined') && (typeof cards.core !== 'undefined') && (typeof cards.core.t_cards$core38493 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
cards.core.t_cards$core38493 = (function (meta38494){
this.meta38494 = meta38494;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cards.core.t_cards$core38493.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38495,meta38494__$1){
var self__ = this;
var _38495__$1 = this;
return (new cards.core.t_cards$core38493(meta38494__$1));
});

cards.core.t_cards$core38493.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38495){
var self__ = this;
var _38495__$1 = this;
return self__.meta38494;
});

cards.core.t_cards$core38493.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

cards.core.t_cards$core38493.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__29635__auto__,devcard_opts__29636__auto__){
var self__ = this;
var this__29635__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__29636__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__29654__auto__ = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cards.core.demo_widget,new cljs.core.Keyword(null,"label-inc","label-inc",542361202),"++ alpaaaakaa!!!",new cljs.core.Keyword(null,"label-dec","label-dec",1847894776),"-- alpaaaakaa!!!",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"child 1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"child 2"], null)], null);
if(cljs.core.fn_QMARK_.call(null,v__29654__auto__)){
return ((function (v__29654__auto__,this__29635__auto____$1){
return (function (data_atom__29655__auto__,owner__29656__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__29654__auto__,data_atom__29655__auto__,owner__29656__auto__], null));
});
;})(v__29654__auto__,this__29635__auto____$1))
} else {
return reagent.core.as_element.call(null,v__29654__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__29636__auto__))));
});

cards.core.t_cards$core38493.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta38494","meta38494",-1559812948,null)], null);
});

cards.core.t_cards$core38493.cljs$lang$type = true;

cards.core.t_cards$core38493.cljs$lang$ctorStr = "cards.core/t_cards$core38493";

cards.core.t_cards$core38493.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cards.core/t_cards$core38493");
});

/**
 * Positional factory function for cards.core/t_cards$core38493.
 */
cards.core.__GT_t_cards$core38493 = (function cards$core$__GT_t_cards$core38493(meta38494){
return (new cards.core.t_cards$core38493(meta38494));
});

}

return (new cards.core.t_cards$core38493(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
cards.core.main = (function cards$core$main(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1551005513468
