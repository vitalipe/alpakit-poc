// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31384){
var map__31385 = p__31384;
var map__31385__$1 = (((((!((map__31385 == null))))?(((((map__31385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31385):map__31385);
var m = map__31385__$1;
var n = cljs.core.get.call(null,map__31385__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__31385__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31387_31419 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31388_31420 = null;
var count__31389_31421 = (0);
var i__31390_31422 = (0);
while(true){
if((i__31390_31422 < count__31389_31421)){
var f_31423 = cljs.core._nth.call(null,chunk__31388_31420,i__31390_31422);
cljs.core.println.call(null,"  ",f_31423);


var G__31424 = seq__31387_31419;
var G__31425 = chunk__31388_31420;
var G__31426 = count__31389_31421;
var G__31427 = (i__31390_31422 + (1));
seq__31387_31419 = G__31424;
chunk__31388_31420 = G__31425;
count__31389_31421 = G__31426;
i__31390_31422 = G__31427;
continue;
} else {
var temp__5720__auto___31428 = cljs.core.seq.call(null,seq__31387_31419);
if(temp__5720__auto___31428){
var seq__31387_31429__$1 = temp__5720__auto___31428;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31387_31429__$1)){
var c__4550__auto___31430 = cljs.core.chunk_first.call(null,seq__31387_31429__$1);
var G__31431 = cljs.core.chunk_rest.call(null,seq__31387_31429__$1);
var G__31432 = c__4550__auto___31430;
var G__31433 = cljs.core.count.call(null,c__4550__auto___31430);
var G__31434 = (0);
seq__31387_31419 = G__31431;
chunk__31388_31420 = G__31432;
count__31389_31421 = G__31433;
i__31390_31422 = G__31434;
continue;
} else {
var f_31435 = cljs.core.first.call(null,seq__31387_31429__$1);
cljs.core.println.call(null,"  ",f_31435);


var G__31436 = cljs.core.next.call(null,seq__31387_31429__$1);
var G__31437 = null;
var G__31438 = (0);
var G__31439 = (0);
seq__31387_31419 = G__31436;
chunk__31388_31420 = G__31437;
count__31389_31421 = G__31438;
i__31390_31422 = G__31439;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31440 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_31440);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_31440)))?cljs.core.second.call(null,arglists_31440):arglists_31440));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31391_31441 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31392_31442 = null;
var count__31393_31443 = (0);
var i__31394_31444 = (0);
while(true){
if((i__31394_31444 < count__31393_31443)){
var vec__31405_31445 = cljs.core._nth.call(null,chunk__31392_31442,i__31394_31444);
var name_31446 = cljs.core.nth.call(null,vec__31405_31445,(0),null);
var map__31408_31447 = cljs.core.nth.call(null,vec__31405_31445,(1),null);
var map__31408_31448__$1 = (((((!((map__31408_31447 == null))))?(((((map__31408_31447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31408_31447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31408_31447):map__31408_31447);
var doc_31449 = cljs.core.get.call(null,map__31408_31448__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31450 = cljs.core.get.call(null,map__31408_31448__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31446);

cljs.core.println.call(null," ",arglists_31450);

if(cljs.core.truth_(doc_31449)){
cljs.core.println.call(null," ",doc_31449);
} else {
}


var G__31451 = seq__31391_31441;
var G__31452 = chunk__31392_31442;
var G__31453 = count__31393_31443;
var G__31454 = (i__31394_31444 + (1));
seq__31391_31441 = G__31451;
chunk__31392_31442 = G__31452;
count__31393_31443 = G__31453;
i__31394_31444 = G__31454;
continue;
} else {
var temp__5720__auto___31455 = cljs.core.seq.call(null,seq__31391_31441);
if(temp__5720__auto___31455){
var seq__31391_31456__$1 = temp__5720__auto___31455;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31391_31456__$1)){
var c__4550__auto___31457 = cljs.core.chunk_first.call(null,seq__31391_31456__$1);
var G__31458 = cljs.core.chunk_rest.call(null,seq__31391_31456__$1);
var G__31459 = c__4550__auto___31457;
var G__31460 = cljs.core.count.call(null,c__4550__auto___31457);
var G__31461 = (0);
seq__31391_31441 = G__31458;
chunk__31392_31442 = G__31459;
count__31393_31443 = G__31460;
i__31394_31444 = G__31461;
continue;
} else {
var vec__31410_31462 = cljs.core.first.call(null,seq__31391_31456__$1);
var name_31463 = cljs.core.nth.call(null,vec__31410_31462,(0),null);
var map__31413_31464 = cljs.core.nth.call(null,vec__31410_31462,(1),null);
var map__31413_31465__$1 = (((((!((map__31413_31464 == null))))?(((((map__31413_31464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31413_31464.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31413_31464):map__31413_31464);
var doc_31466 = cljs.core.get.call(null,map__31413_31465__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31467 = cljs.core.get.call(null,map__31413_31465__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31463);

cljs.core.println.call(null," ",arglists_31467);

if(cljs.core.truth_(doc_31466)){
cljs.core.println.call(null," ",doc_31466);
} else {
}


var G__31468 = cljs.core.next.call(null,seq__31391_31456__$1);
var G__31469 = null;
var G__31470 = (0);
var G__31471 = (0);
seq__31391_31441 = G__31468;
chunk__31392_31442 = G__31469;
count__31393_31443 = G__31470;
i__31394_31444 = G__31471;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__31415 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31416 = null;
var count__31417 = (0);
var i__31418 = (0);
while(true){
if((i__31418 < count__31417)){
var role = cljs.core._nth.call(null,chunk__31416,i__31418);
var temp__5720__auto___31472__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___31472__$1)){
var spec_31473 = temp__5720__auto___31472__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31473));
} else {
}


var G__31474 = seq__31415;
var G__31475 = chunk__31416;
var G__31476 = count__31417;
var G__31477 = (i__31418 + (1));
seq__31415 = G__31474;
chunk__31416 = G__31475;
count__31417 = G__31476;
i__31418 = G__31477;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__31415);
if(temp__5720__auto____$1){
var seq__31415__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31415__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__31415__$1);
var G__31478 = cljs.core.chunk_rest.call(null,seq__31415__$1);
var G__31479 = c__4550__auto__;
var G__31480 = cljs.core.count.call(null,c__4550__auto__);
var G__31481 = (0);
seq__31415 = G__31478;
chunk__31416 = G__31479;
count__31417 = G__31480;
i__31418 = G__31481;
continue;
} else {
var role = cljs.core.first.call(null,seq__31415__$1);
var temp__5720__auto___31482__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___31482__$2)){
var spec_31483 = temp__5720__auto___31482__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31483));
} else {
}


var G__31484 = cljs.core.next.call(null,seq__31415__$1);
var G__31485 = null;
var G__31486 = (0);
var G__31487 = (0);
seq__31415 = G__31484;
chunk__31416 = G__31485;
count__31417 = G__31486;
i__31418 = G__31487;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__31488 = cljs.core.conj.call(null,via,t);
var G__31489 = cljs.core.ex_cause.call(null,t);
via = G__31488;
t = G__31489;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__31492 = datafied_throwable;
var map__31492__$1 = (((((!((map__31492 == null))))?(((((map__31492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31492):map__31492);
var via = cljs.core.get.call(null,map__31492__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__31492__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__31492__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__31493 = cljs.core.last.call(null,via);
var map__31493__$1 = (((((!((map__31493 == null))))?(((((map__31493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31493):map__31493);
var type = cljs.core.get.call(null,map__31493__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__31493__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__31493__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__31494 = data;
var map__31494__$1 = (((((!((map__31494 == null))))?(((((map__31494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31494):map__31494);
var problems = cljs.core.get.call(null,map__31494__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__31494__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__31494__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__31495 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__31495__$1 = (((((!((map__31495 == null))))?(((((map__31495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31495):map__31495);
var top_data = map__31495__$1;
var source = cljs.core.get.call(null,map__31495__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__31500 = phase;
var G__31500__$1 = (((G__31500 instanceof cljs.core.Keyword))?G__31500.fqn:null);
switch (G__31500__$1) {
case "read-source":
var map__31501 = data;
var map__31501__$1 = (((((!((map__31501 == null))))?(((((map__31501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31501):map__31501);
var line = cljs.core.get.call(null,map__31501__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__31501__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__31503 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__31503__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__31503,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31503);
var G__31503__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__31503__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31503__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__31503__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31503__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__31504 = top_data;
var G__31504__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__31504,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31504);
var G__31504__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__31504__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31504__$1);
var G__31504__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__31504__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31504__$2);
var G__31504__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__31504__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31504__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__31504__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31504__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__31505 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__31505,(0),null);
var method = cljs.core.nth.call(null,vec__31505,(1),null);
var file = cljs.core.nth.call(null,vec__31505,(2),null);
var line = cljs.core.nth.call(null,vec__31505,(3),null);
var G__31508 = top_data;
var G__31508__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__31508,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__31508);
var G__31508__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__31508__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__31508__$1);
var G__31508__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__31508__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__31508__$2);
var G__31508__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__31508__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31508__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__31508__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31508__$4;
}

break;
case "execution":
var vec__31509 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__31509,(0),null);
var method = cljs.core.nth.call(null,vec__31509,(1),null);
var file = cljs.core.nth.call(null,vec__31509,(2),null);
var line = cljs.core.nth.call(null,vec__31509,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__31509,source__$1,method,file,line,G__31500,G__31500__$1,map__31492,map__31492__$1,via,trace,phase,map__31493,map__31493__$1,type,message,data,map__31494,map__31494__$1,problems,fn,caller,map__31495,map__31495__$1,top_data,source){
return (function (p1__31491_SHARP_){
var or__4131__auto__ = (p1__31491_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__31491_SHARP_);
}
});})(vec__31509,source__$1,method,file,line,G__31500,G__31500__$1,map__31492,map__31492__$1,via,trace,phase,map__31493,map__31493__$1,type,message,data,map__31494,map__31494__$1,problems,fn,caller,map__31495,map__31495__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__31512 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__31512__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__31512,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__31512);
var G__31512__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__31512__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31512__$1);
var G__31512__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__31512__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__31512__$2);
var G__31512__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__31512__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__31512__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__31512__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31512__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31500__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__31516){
var map__31517 = p__31516;
var map__31517__$1 = (((((!((map__31517 == null))))?(((((map__31517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31517):map__31517);
var triage_data = map__31517__$1;
var phase = cljs.core.get.call(null,map__31517__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__31517__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__31517__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__31517__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__31517__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__31517__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__31517__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__31517__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__31519 = phase;
var G__31519__$1 = (((G__31519 instanceof cljs.core.Keyword))?G__31519.fqn:null);
switch (G__31519__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31520_31529 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31521_31530 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31522_31531 = true;
var _STAR_print_fn_STAR__temp_val__31523_31532 = ((function (_STAR_print_newline_STAR__orig_val__31520_31529,_STAR_print_fn_STAR__orig_val__31521_31530,_STAR_print_newline_STAR__temp_val__31522_31531,sb__4661__auto__,G__31519,G__31519__$1,loc,class_name,simple_class,cause_type,format,map__31517,map__31517__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__31520_31529,_STAR_print_fn_STAR__orig_val__31521_31530,_STAR_print_newline_STAR__temp_val__31522_31531,sb__4661__auto__,G__31519,G__31519__$1,loc,class_name,simple_class,cause_type,format,map__31517,map__31517__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31522_31531;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31523_31532;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__31520_31529,_STAR_print_fn_STAR__orig_val__31521_31530,_STAR_print_newline_STAR__temp_val__31522_31531,_STAR_print_fn_STAR__temp_val__31523_31532,sb__4661__auto__,G__31519,G__31519__$1,loc,class_name,simple_class,cause_type,format,map__31517,map__31517__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__31520_31529,_STAR_print_fn_STAR__orig_val__31521_31530,_STAR_print_newline_STAR__temp_val__31522_31531,_STAR_print_fn_STAR__temp_val__31523_31532,sb__4661__auto__,G__31519,G__31519__$1,loc,class_name,simple_class,cause_type,format,map__31517,map__31517__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__31514_SHARP_){
return cljs.core.dissoc.call(null,p1__31514_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__31520_31529,_STAR_print_fn_STAR__orig_val__31521_31530,_STAR_print_newline_STAR__temp_val__31522_31531,_STAR_print_fn_STAR__temp_val__31523_31532,sb__4661__auto__,G__31519,G__31519__$1,loc,class_name,simple_class,cause_type,format,map__31517,map__31517__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__31520_31529,_STAR_print_fn_STAR__orig_val__31521_31530,_STAR_print_newline_STAR__temp_val__31522_31531,_STAR_print_fn_STAR__temp_val__31523_31532,sb__4661__auto__,G__31519,G__31519__$1,loc,class_name,simple_class,cause_type,format,map__31517,map__31517__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31521_31530;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31520_31529;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31524_31533 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31525_31534 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31526_31535 = true;
var _STAR_print_fn_STAR__temp_val__31527_31536 = ((function (_STAR_print_newline_STAR__orig_val__31524_31533,_STAR_print_fn_STAR__orig_val__31525_31534,_STAR_print_newline_STAR__temp_val__31526_31535,sb__4661__auto__,G__31519,G__31519__$1,loc,class_name,simple_class,cause_type,format,map__31517,map__31517__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__31524_31533,_STAR_print_fn_STAR__orig_val__31525_31534,_STAR_print_newline_STAR__temp_val__31526_31535,sb__4661__auto__,G__31519,G__31519__$1,loc,class_name,simple_class,cause_type,format,map__31517,map__31517__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31526_31535;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31527_31536;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__31524_31533,_STAR_print_fn_STAR__orig_val__31525_31534,_STAR_print_newline_STAR__temp_val__31526_31535,_STAR_print_fn_STAR__temp_val__31527_31536,sb__4661__auto__,G__31519,G__31519__$1,loc,class_name,simple_class,cause_type,format,map__31517,map__31517__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__31524_31533,_STAR_print_fn_STAR__orig_val__31525_31534,_STAR_print_newline_STAR__temp_val__31526_31535,_STAR_print_fn_STAR__temp_val__31527_31536,sb__4661__auto__,G__31519,G__31519__$1,loc,class_name,simple_class,cause_type,format,map__31517,map__31517__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__31515_SHARP_){
return cljs.core.dissoc.call(null,p1__31515_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__31524_31533,_STAR_print_fn_STAR__orig_val__31525_31534,_STAR_print_newline_STAR__temp_val__31526_31535,_STAR_print_fn_STAR__temp_val__31527_31536,sb__4661__auto__,G__31519,G__31519__$1,loc,class_name,simple_class,cause_type,format,map__31517,map__31517__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__31524_31533,_STAR_print_fn_STAR__orig_val__31525_31534,_STAR_print_newline_STAR__temp_val__31526_31535,_STAR_print_fn_STAR__temp_val__31527_31536,sb__4661__auto__,G__31519,G__31519__$1,loc,class_name,simple_class,cause_type,format,map__31517,map__31517__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31525_31534;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31524_31533;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31519__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1551004821461
