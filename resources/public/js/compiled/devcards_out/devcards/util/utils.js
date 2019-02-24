// Compiled by ClojureScript 1.10.520 {}
goog.provide('devcards.util.utils');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('cljs.pprint');
devcards.util.utils.html_env_QMARK_ = (function devcards$util$utils$html_env_QMARK_(){
var temp__5718__auto__ = goog.global.document;
if(cljs.core.truth_(temp__5718__auto__)){
var doc = temp__5718__auto__;
return goog.object.get(doc,"write");
} else {
return null;
}
});
devcards.util.utils.node_env_QMARK_ = (function devcards$util$utils$node_env_QMARK_(){
return (!((goog.nodeGlobalRequire == null)));
});
devcards.util.utils.pprint_str = (function devcards$util$utils$pprint_str(obj){
try{var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__24991_24995 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__24992_24996 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__24993_24997 = true;
var _STAR_print_fn_STAR__temp_val__24994_24998 = ((function (_STAR_print_newline_STAR__orig_val__24991_24995,_STAR_print_fn_STAR__orig_val__24992_24996,_STAR_print_newline_STAR__temp_val__24993_24997,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__24991_24995,_STAR_print_fn_STAR__orig_val__24992_24996,_STAR_print_newline_STAR__temp_val__24993_24997,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__24993_24997;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__24994_24998;

try{cljs.pprint.pprint.call(null,obj);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__24992_24996;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__24991_24995;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
}catch (e24989){if((e24989 instanceof Error)){
var e1 = e24989;
try{return obj.toString();
}catch (e24990){if((e24990 instanceof Error)){
var e2 = e24990;
return "<<Un-printable Type>>";
} else {
throw e24990;

}
}} else {
throw e24989;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR__orig_val__24999 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pprint_dispatch_STAR__temp_val__25000 = cljs.pprint.code_dispatch;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__temp_val__25000;

try{return devcards.util.utils.pprint_str.call(null,code);
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__orig_val__24999;
}});

//# sourceMappingURL=utils.js.map?rel=1551004818305
