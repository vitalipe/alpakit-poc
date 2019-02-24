// Compiled by ClojureScript 1.10.520 {}
goog.provide('alpakit.widget');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('reagent.core');
alpakit.widget.collect_kv_args = (function alpakit$widget$collect_kv_args(arg_list){

var rest_index = (function (){var G__38244 = arg_list;
var vec__38245 = G__38244;
var seq__38246 = cljs.core.seq.call(null,vec__38245);
var first__38247 = cljs.core.first.call(null,seq__38246);
var seq__38246__$1 = cljs.core.next.call(null,seq__38246);
var arg = first__38247;
var other = seq__38246__$1;
var index = (0);
var G__38244__$1 = G__38244;
var index__$1 = index;
while(true){
var vec__38248 = G__38244__$1;
var seq__38249 = cljs.core.seq.call(null,vec__38248);
var first__38250 = cljs.core.first.call(null,seq__38249);
var seq__38249__$1 = cljs.core.next.call(null,seq__38249);
var arg__$1 = first__38250;
var other__$1 = seq__38249__$1;
var index__$2 = index__$1;
if((arg__$1 instanceof cljs.core.Keyword)){
var G__38251 = cljs.core.rest.call(null,other__$1);
var G__38252 = ((2) + index__$2);
G__38244__$1 = G__38251;
index__$1 = G__38252;
continue;
} else {
return index__$2;

}
break;
}
})();
var kv_args = cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.subvec.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,arg_list),(0),rest_index));
var rest_list = cljs.core.subvec.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,arg_list),rest_index,cljs.core.count.call(null,arg_list));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kv_args,rest_list], null);
});
alpakit.widget.collect_kv_args_into_props = (function alpakit$widget$collect_kv_args_into_props(arg_list,defaults,children_key){

var vec__38253 = alpakit.widget.collect_kv_args.call(null,arg_list);
var props = cljs.core.nth.call(null,vec__38253,(0),null);
var children = cljs.core.nth.call(null,vec__38253,(1),null);
return cljs.core.merge.call(null,defaults,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.apply.call(null,cljs.core.list,children)], null));
});
alpakit.widget.map_kv = (function alpakit$widget$map_kv(k_fn,v_fn,a_map){

return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__38256_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[k_fn.call(null,cljs.core.first.call(null,p1__38256_SHARP_)),v_fn.call(null,cljs.core.second.call(null,p1__38256_SHARP_))],null));
}),a_map));
});
alpakit.widget.deref_atom_access = (function alpakit$widget$deref_atom_access(body,symbols){

var atom_operation_QMARK_ = (function (p1__38257_SHARP_){
var and__4120__auto__ = cljs.core.list_QMARK_.call(null,p1__38257_SHARP_);
if(and__4120__auto__){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"reset!","reset!",527275632,null),null,new cljs.core.Symbol("cljs.core","reset!","cljs.core/reset!",657404621,null),null,new cljs.core.Symbol("cljs.core","swap!","cljs.core/swap!",-2144679919,null),null,new cljs.core.Symbol(null,"swap!","swap!",-655677516,null),null], null), null).call(null,cljs.core.first.call(null,p1__38257_SHARP_));
} else {
return and__4120__auto__;
}
});
var target_symbol_QMARK_ = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,symbols);
return clojure.walk.postwalk.call(null,((function (atom_operation_QMARK_,target_symbol_QMARK_){
return (function (form){
if(cljs.core.truth_(target_symbol_QMARK_.call(null,form))){
return (new cljs.core.List(null,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),(new cljs.core.List(null,form,null,(1),null)),(2),null));
} else {
if(cljs.core.truth_(atom_operation_QMARK_.call(null,form))){
var vec__38258 = form;
var seq__38259 = cljs.core.seq.call(null,vec__38258);
var first__38260 = cljs.core.first.call(null,seq__38259);
var seq__38259__$1 = cljs.core.next.call(null,seq__38259);
var f = first__38260;
var first__38260__$1 = cljs.core.first.call(null,seq__38259__$1);
var seq__38259__$2 = cljs.core.next.call(null,seq__38259__$1);
var vec__38261 = first__38260__$1;
var _ = cljs.core.nth.call(null,vec__38261,(0),null);
var a = cljs.core.nth.call(null,vec__38261,(1),null);
var args = seq__38259__$2;
return cljs.core.concat.call(null,(new cljs.core.List(null,f,(new cljs.core.List(null,a,null,(1),null)),(2),null)),args);
} else {
return form;

}
}
});})(atom_operation_QMARK_,target_symbol_QMARK_))
,body);
});
var ret__4776__auto___38273 = (function (){
alpakit.widget.widget = (function alpakit$widget$widget(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38274 = arguments.length;
var i__4731__auto___38275 = (0);
while(true){
if((i__4731__auto___38275 < len__4730__auto___38274)){
args__4736__auto__.push((arguments[i__4731__auto___38275]));

var G__38276 = (i__4731__auto___38275 + (1));
i__4731__auto___38275 = G__38276;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return alpakit.widget.widget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

alpakit.widget.widget.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,spec){
var vec__38268 = ((typeof cljs.core.first.call(null,spec) === 'string')?cljs.core.cons.call(null,cljs.core.first.call(null,spec),alpakit.widget.collect_kv_args.call(null,cljs.core.rest.call(null,spec))):cljs.core.cons.call(null,"",alpakit.widget.collect_kv_args.call(null,spec)));
var docstring = cljs.core.nth.call(null,vec__38268,(0),null);
var map__38271 = cljs.core.nth.call(null,vec__38268,(1),null);
var map__38271__$1 = (((((!((map__38271 == null))))?(((((map__38271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38271):map__38271);
var props = cljs.core.get.call(null,map__38271__$1,new cljs.core.Keyword(null,"props","props",453281727));
var state = cljs.core.get.call(null,map__38271__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var body = cljs.core.nth.call(null,vec__38268,(2),null);
var state_specs = alpakit.widget.map_kv.call(null,cljs.core.keyword,cljs.core.identity,state);
var prop_defaults = alpakit.widget.map_kv.call(null,cljs.core.keyword,new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.filter.call(null,((function (state_specs,vec__38268,docstring,map__38271,map__38271__$1,props,state,body){
return (function (p1__38264_SHARP_){
return cljs.core.contains_QMARK_.call(null,cljs.core.val.call(null,p1__38264_SHARP_),new cljs.core.Keyword(null,"default","default",-1987822328));
});})(state_specs,vec__38268,docstring,map__38271,map__38271__$1,props,state,body))
,props));
var prop_specs = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),((function (state_specs,prop_defaults,vec__38268,docstring,map__38271,map__38271__$1,props,state,body){
return (function() { 
var G__38277__delegate = function (_){
return true;
};
var G__38277 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__38278__i = 0, G__38278__a = new Array(arguments.length -  0);
while (G__38278__i < G__38278__a.length) {G__38278__a[G__38278__i] = arguments[G__38278__i + 0]; ++G__38278__i;}
  _ = new cljs.core.IndexedSeq(G__38278__a,0,null);
} 
return G__38277__delegate.call(this,_);};
G__38277.cljs$lang$maxFixedArity = 0;
G__38277.cljs$lang$applyTo = (function (arglist__38279){
var _ = cljs.core.seq(arglist__38279);
return G__38277__delegate(_);
});
G__38277.cljs$core$IFn$_invoke$arity$variadic = G__38277__delegate;
return G__38277;
})()
;})(state_specs,prop_defaults,vec__38268,docstring,map__38271,map__38271__$1,props,state,body))
], null),alpakit.widget.map_kv.call(null,cljs.core.identity,new cljs.core.Keyword(null,"spec","spec",347520401),props));
var prop_names = cljs.core.conj.call(null,cljs.core.keys.call(null,props),cljs.core.symbol.call(null,"children"));
var arg_list_sym = cljs.core.gensym.call(null,"arg-list");
var no_state = cljs.core.empty_QMARK_.call(null,cljs.core.keys.call(null,state));
var no_props = cljs.core.empty_QMARK_.call(null,cljs.core.keys.call(null,props));
var only_body = ((no_state) && (no_props));
if(only_body){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),arg_list_sym], null),(new cljs.core.List(null,docstring,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"keys","keys",1068423698),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,prop_names)))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("alpakit.widget","collect-kv-args-into-props","alpakit.widget/collect-kv-args-into-props",-349707337,null),null,(1),null)),(new cljs.core.List(null,arg_list_sym,null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"children","children",-940561982),null,(1),null))))),null,(1),null)))))),null,(1),null)),body))),null,(1),null)),(2),null)),(3),null)),(4),null));
} else {
if(no_state){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),arg_list_sym], null),(new cljs.core.List(null,docstring,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"keys","keys",1068423698),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,prop_names)))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("alpakit.widget","collect-kv-args-into-props","alpakit.widget/collect-kv-args-into-props",-349707337,null),null,(1),null)),(new cljs.core.List(null,arg_list_sym,null,(1),null)),(new cljs.core.List(null,prop_defaults,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"children","children",-940561982),null,(1),null))))),null,(1),null)))))),null,(1),null)),body))),null,(1),null)),(2),null)),(3),null)),(4),null));
} else {
if(no_props){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),arg_list_sym], null),(new cljs.core.List(null,docstring,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"keys","keys",1068423698),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,prop_names)))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("alpakit.widget","collect-kv-args-into-props","alpakit.widget/collect-kv-args-into-props",-349707337,null),null,(1),null)),(new cljs.core.List(null,arg_list_sym,null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"children","children",-940561982),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("reagent.core","with-let","reagent.core/with-let",-1625899993,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"keys","keys",1068423698),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.keys.call(null,state))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("alpakit.widget","map-kv","alpakit.widget/map-kv",1019169325,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","identity","cljs.core/identity",725118887,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("reagent.core","atom","reagent.core/atom",1748890217,null),null,(1),null)),(new cljs.core.List(null,state_specs,null,(1),null))))),null,(1),null)))))),null,(1),null)),alpakit.widget.deref_atom_access.call(null,body,cljs.core.keys.call(null,state))))),null,(1),null))))),null,(1),null)),(2),null)),(3),null)),(4),null));
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),arg_list_sym], null),(new cljs.core.List(null,docstring,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"keys","keys",1068423698),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,prop_names)))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("alpakit.widget","collect-kv-args-into-props","alpakit.widget/collect-kv-args-into-props",-349707337,null),null,(1),null)),(new cljs.core.List(null,arg_list_sym,null,(1),null)),(new cljs.core.List(null,prop_defaults,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"children","children",-940561982),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("reagent.core","with-let","reagent.core/with-let",-1625899993,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"keys","keys",1068423698),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.keys.call(null,state))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("alpakit.widget","map-kv","alpakit.widget/map-kv",1019169325,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","identity","cljs.core/identity",725118887,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("reagent.core","atom","reagent.core/atom",1748890217,null),null,(1),null)),(new cljs.core.List(null,state_specs,null,(1),null))))),null,(1),null)))))),null,(1),null)),alpakit.widget.deref_atom_access.call(null,body,cljs.core.keys.call(null,state))))),null,(1),null))))),null,(1),null)),(2),null)),(3),null)),(4),null));

}
}
}
});

alpakit.widget.widget.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
alpakit.widget.widget.cljs$lang$applyTo = (function (seq38265){
var G__38266 = cljs.core.first.call(null,seq38265);
var seq38265__$1 = cljs.core.next.call(null,seq38265);
var G__38267 = cljs.core.first.call(null,seq38265__$1);
var seq38265__$2 = cljs.core.next.call(null,seq38265__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38266,G__38267,seq38265__$2);
});

return null;
})()
;
alpakit.widget.widget.cljs$lang$macro = true;

var ret__4776__auto___38284 = (function (){
alpakit.widget.defwidget = (function alpakit$widget$defwidget(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38285 = arguments.length;
var i__4731__auto___38286 = (0);
while(true){
if((i__4731__auto___38286 < len__4730__auto___38285)){
args__4736__auto__.push((arguments[i__4731__auto___38286]));

var G__38287 = (i__4731__auto___38286 + (1));
i__4731__auto___38286 = G__38287;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return alpakit.widget.defwidget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

alpakit.widget.defwidget.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,spec){
return cljs.core.eval.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.call(null,name),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("alpakit.widget","widget","alpakit.widget/widget",-232809520,null),null,(1),null)),spec))),null,(1),null))))));
});

alpakit.widget.defwidget.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
alpakit.widget.defwidget.cljs$lang$applyTo = (function (seq38280){
var G__38281 = cljs.core.first.call(null,seq38280);
var seq38280__$1 = cljs.core.next.call(null,seq38280);
var G__38282 = cljs.core.first.call(null,seq38280__$1);
var seq38280__$2 = cljs.core.next.call(null,seq38280__$1);
var G__38283 = cljs.core.first.call(null,seq38280__$2);
var seq38280__$3 = cljs.core.next.call(null,seq38280__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38281,G__38282,G__38283,seq38280__$3);
});

return null;
})()
;
alpakit.widget.defwidget.cljs$lang$macro = true;


//# sourceMappingURL=widget.js.map?rel=1551005141636
