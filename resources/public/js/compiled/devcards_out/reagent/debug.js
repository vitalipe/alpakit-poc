// Compiled by ClojureScript 1.10.520 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__22217__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__22217 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22218__i = 0, G__22218__a = new Array(arguments.length -  0);
while (G__22218__i < G__22218__a.length) {G__22218__a[G__22218__i] = arguments[G__22218__i + 0]; ++G__22218__i;}
  args = new cljs.core.IndexedSeq(G__22218__a,0,null);
} 
return G__22217__delegate.call(this,args);};
G__22217.cljs$lang$maxFixedArity = 0;
G__22217.cljs$lang$applyTo = (function (arglist__22219){
var args = cljs.core.seq(arglist__22219);
return G__22217__delegate(args);
});
G__22217.cljs$core$IFn$_invoke$arity$variadic = G__22217__delegate;
return G__22217;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__22220__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__22220 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22221__i = 0, G__22221__a = new Array(arguments.length -  0);
while (G__22221__i < G__22221__a.length) {G__22221__a[G__22221__i] = arguments[G__22221__i + 0]; ++G__22221__i;}
  args = new cljs.core.IndexedSeq(G__22221__a,0,null);
} 
return G__22220__delegate.call(this,args);};
G__22220.cljs$lang$maxFixedArity = 0;
G__22220.cljs$lang$applyTo = (function (arglist__22222){
var args = cljs.core.seq(arglist__22222);
return G__22220__delegate(args);
});
G__22220.cljs$core$IFn$_invoke$arity$variadic = G__22220__delegate;
return G__22220;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1551004815092
