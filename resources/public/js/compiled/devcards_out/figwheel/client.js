// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.18";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e31731){if((e31731 instanceof Error)){
var e = e31731;
return "Error: Unable to stringify";
} else {
throw e31731;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__31734 = arguments.length;
switch (G__31734) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__31732_SHARP_){
if(typeof p1__31732_SHARP_ === 'string'){
return p1__31732_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__31732_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___31737 = arguments.length;
var i__4731__auto___31738 = (0);
while(true){
if((i__4731__auto___31738 < len__4730__auto___31737)){
args__4736__auto__.push((arguments[i__4731__auto___31738]));

var G__31739 = (i__4731__auto___31738 + (1));
i__4731__auto___31738 = G__31739;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq31736){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31736));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___31741 = arguments.length;
var i__4731__auto___31742 = (0);
while(true){
if((i__4731__auto___31742 < len__4730__auto___31741)){
args__4736__auto__.push((arguments[i__4731__auto___31742]));

var G__31743 = (i__4731__auto___31742 + (1));
i__4731__auto___31742 = G__31743;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq31740){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31740));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31744){
var map__31745 = p__31744;
var map__31745__$1 = (((((!((map__31745 == null))))?(((((map__31745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31745):map__31745);
var message = cljs.core.get.call(null,map__31745__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31745__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4131__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4120__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4120__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4120__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__25046__auto___31824 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25046__auto___31824,ch){
return (function (){
var f__25047__auto__ = (function (){var switch__22049__auto__ = ((function (c__25046__auto___31824,ch){
return (function (state_31796){
var state_val_31797 = (state_31796[(1)]);
if((state_val_31797 === (7))){
var inst_31792 = (state_31796[(2)]);
var state_31796__$1 = state_31796;
var statearr_31798_31825 = state_31796__$1;
(statearr_31798_31825[(2)] = inst_31792);

(statearr_31798_31825[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31797 === (1))){
var state_31796__$1 = state_31796;
var statearr_31799_31826 = state_31796__$1;
(statearr_31799_31826[(2)] = null);

(statearr_31799_31826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31797 === (4))){
var inst_31749 = (state_31796[(7)]);
var inst_31749__$1 = (state_31796[(2)]);
var state_31796__$1 = (function (){var statearr_31800 = state_31796;
(statearr_31800[(7)] = inst_31749__$1);

return statearr_31800;
})();
if(cljs.core.truth_(inst_31749__$1)){
var statearr_31801_31827 = state_31796__$1;
(statearr_31801_31827[(1)] = (5));

} else {
var statearr_31802_31828 = state_31796__$1;
(statearr_31802_31828[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31797 === (15))){
var inst_31756 = (state_31796[(8)]);
var inst_31771 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31756);
var inst_31772 = cljs.core.first.call(null,inst_31771);
var inst_31773 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31772);
var inst_31774 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31773)].join('');
var inst_31775 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31774);
var state_31796__$1 = state_31796;
var statearr_31803_31829 = state_31796__$1;
(statearr_31803_31829[(2)] = inst_31775);

(statearr_31803_31829[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31797 === (13))){
var inst_31780 = (state_31796[(2)]);
var state_31796__$1 = state_31796;
var statearr_31804_31830 = state_31796__$1;
(statearr_31804_31830[(2)] = inst_31780);

(statearr_31804_31830[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31797 === (6))){
var state_31796__$1 = state_31796;
var statearr_31805_31831 = state_31796__$1;
(statearr_31805_31831[(2)] = null);

(statearr_31805_31831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31797 === (17))){
var inst_31778 = (state_31796[(2)]);
var state_31796__$1 = state_31796;
var statearr_31806_31832 = state_31796__$1;
(statearr_31806_31832[(2)] = inst_31778);

(statearr_31806_31832[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31797 === (3))){
var inst_31794 = (state_31796[(2)]);
var state_31796__$1 = state_31796;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31796__$1,inst_31794);
} else {
if((state_val_31797 === (12))){
var inst_31755 = (state_31796[(9)]);
var inst_31769 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31755,opts);
var state_31796__$1 = state_31796;
if(inst_31769){
var statearr_31807_31833 = state_31796__$1;
(statearr_31807_31833[(1)] = (15));

} else {
var statearr_31808_31834 = state_31796__$1;
(statearr_31808_31834[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31797 === (2))){
var state_31796__$1 = state_31796;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31796__$1,(4),ch);
} else {
if((state_val_31797 === (11))){
var inst_31756 = (state_31796[(8)]);
var inst_31761 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31762 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31756);
var inst_31763 = cljs.core.async.timeout.call(null,(1000));
var inst_31764 = [inst_31762,inst_31763];
var inst_31765 = (new cljs.core.PersistentVector(null,2,(5),inst_31761,inst_31764,null));
var state_31796__$1 = state_31796;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31796__$1,(14),inst_31765);
} else {
if((state_val_31797 === (9))){
var inst_31756 = (state_31796[(8)]);
var inst_31782 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31783 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31756);
var inst_31784 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31783);
var inst_31785 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31784)].join('');
var inst_31786 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31785);
var state_31796__$1 = (function (){var statearr_31809 = state_31796;
(statearr_31809[(10)] = inst_31782);

return statearr_31809;
})();
var statearr_31810_31835 = state_31796__$1;
(statearr_31810_31835[(2)] = inst_31786);

(statearr_31810_31835[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31797 === (5))){
var inst_31749 = (state_31796[(7)]);
var inst_31751 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31752 = (new cljs.core.PersistentArrayMap(null,2,inst_31751,null));
var inst_31753 = (new cljs.core.PersistentHashSet(null,inst_31752,null));
var inst_31754 = figwheel.client.focus_msgs.call(null,inst_31753,inst_31749);
var inst_31755 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31754);
var inst_31756 = cljs.core.first.call(null,inst_31754);
var inst_31757 = figwheel.client.autoload_QMARK_.call(null);
var state_31796__$1 = (function (){var statearr_31811 = state_31796;
(statearr_31811[(9)] = inst_31755);

(statearr_31811[(8)] = inst_31756);

return statearr_31811;
})();
if(cljs.core.truth_(inst_31757)){
var statearr_31812_31836 = state_31796__$1;
(statearr_31812_31836[(1)] = (8));

} else {
var statearr_31813_31837 = state_31796__$1;
(statearr_31813_31837[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31797 === (14))){
var inst_31767 = (state_31796[(2)]);
var state_31796__$1 = state_31796;
var statearr_31814_31838 = state_31796__$1;
(statearr_31814_31838[(2)] = inst_31767);

(statearr_31814_31838[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31797 === (16))){
var state_31796__$1 = state_31796;
var statearr_31815_31839 = state_31796__$1;
(statearr_31815_31839[(2)] = null);

(statearr_31815_31839[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31797 === (10))){
var inst_31788 = (state_31796[(2)]);
var state_31796__$1 = (function (){var statearr_31816 = state_31796;
(statearr_31816[(11)] = inst_31788);

return statearr_31816;
})();
var statearr_31817_31840 = state_31796__$1;
(statearr_31817_31840[(2)] = null);

(statearr_31817_31840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31797 === (8))){
var inst_31755 = (state_31796[(9)]);
var inst_31759 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31755,opts);
var state_31796__$1 = state_31796;
if(cljs.core.truth_(inst_31759)){
var statearr_31818_31841 = state_31796__$1;
(statearr_31818_31841[(1)] = (11));

} else {
var statearr_31819_31842 = state_31796__$1;
(statearr_31819_31842[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25046__auto___31824,ch))
;
return ((function (switch__22049__auto__,c__25046__auto___31824,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22050__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22050__auto____0 = (function (){
var statearr_31820 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31820[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22050__auto__);

(statearr_31820[(1)] = (1));

return statearr_31820;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22050__auto____1 = (function (state_31796){
while(true){
var ret_value__22051__auto__ = (function (){try{while(true){
var result__22052__auto__ = switch__22049__auto__.call(null,state_31796);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22052__auto__;
}
break;
}
}catch (e31821){if((e31821 instanceof Object)){
var ex__22053__auto__ = e31821;
var statearr_31822_31843 = state_31796;
(statearr_31822_31843[(5)] = ex__22053__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31796);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31821;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31844 = state_31796;
state_31796 = G__31844;
continue;
} else {
return ret_value__22051__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22050__auto__ = function(state_31796){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22050__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22050__auto____1.call(this,state_31796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__22050__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22050__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22050__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22050__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22050__auto__;
})()
;})(switch__22049__auto__,c__25046__auto___31824,ch))
})();
var state__25048__auto__ = (function (){var statearr_31823 = f__25047__auto__.call(null);
(statearr_31823[(6)] = c__25046__auto___31824);

return statearr_31823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25048__auto__);
});})(c__25046__auto___31824,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31845_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31845_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_31851 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_31851){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31847 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31848 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31849 = true;
var _STAR_print_fn_STAR__temp_val__31850 = ((function (_STAR_print_newline_STAR__orig_val__31847,_STAR_print_fn_STAR__orig_val__31848,_STAR_print_newline_STAR__temp_val__31849,sb,base_path_31851){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__31847,_STAR_print_fn_STAR__orig_val__31848,_STAR_print_newline_STAR__temp_val__31849,sb,base_path_31851))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31849;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31850;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31848;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31847;
}}catch (e31846){if((e31846 instanceof Error)){
var e = e31846;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31851], null));
} else {
var e = e31846;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_31851))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31852){
var map__31853 = p__31852;
var map__31853__$1 = (((((!((map__31853 == null))))?(((((map__31853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31853.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31853):map__31853);
var opts = map__31853__$1;
var build_id = cljs.core.get.call(null,map__31853__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__31853,map__31853__$1,opts,build_id){
return (function (p__31855){
var vec__31856 = p__31855;
var seq__31857 = cljs.core.seq.call(null,vec__31856);
var first__31858 = cljs.core.first.call(null,seq__31857);
var seq__31857__$1 = cljs.core.next.call(null,seq__31857);
var map__31859 = first__31858;
var map__31859__$1 = (((((!((map__31859 == null))))?(((((map__31859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31859.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31859):map__31859);
var msg = map__31859__$1;
var msg_name = cljs.core.get.call(null,map__31859__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31857__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__31856,seq__31857,first__31858,seq__31857__$1,map__31859,map__31859__$1,msg,msg_name,_,map__31853,map__31853__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__31856,seq__31857,first__31858,seq__31857__$1,map__31859,map__31859__$1,msg,msg_name,_,map__31853,map__31853__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__31853,map__31853__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31861){
var vec__31862 = p__31861;
var seq__31863 = cljs.core.seq.call(null,vec__31862);
var first__31864 = cljs.core.first.call(null,seq__31863);
var seq__31863__$1 = cljs.core.next.call(null,seq__31863);
var map__31865 = first__31864;
var map__31865__$1 = (((((!((map__31865 == null))))?(((((map__31865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31865):map__31865);
var msg = map__31865__$1;
var msg_name = cljs.core.get.call(null,map__31865__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31863__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31867){
var map__31868 = p__31867;
var map__31868__$1 = (((((!((map__31868 == null))))?(((((map__31868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31868):map__31868);
var on_compile_warning = cljs.core.get.call(null,map__31868__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31868__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__31868,map__31868__$1,on_compile_warning,on_compile_fail){
return (function (p__31870){
var vec__31871 = p__31870;
var seq__31872 = cljs.core.seq.call(null,vec__31871);
var first__31873 = cljs.core.first.call(null,seq__31872);
var seq__31872__$1 = cljs.core.next.call(null,seq__31872);
var map__31874 = first__31873;
var map__31874__$1 = (((((!((map__31874 == null))))?(((((map__31874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31874):map__31874);
var msg = map__31874__$1;
var msg_name = cljs.core.get.call(null,map__31874__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31872__$1;
var pred__31876 = cljs.core._EQ_;
var expr__31877 = msg_name;
if(cljs.core.truth_(pred__31876.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31877))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31876.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31877))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__31868,map__31868__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__25046__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25046__auto__,msg_hist,msg_names,msg){
return (function (){
var f__25047__auto__ = (function (){var switch__22049__auto__ = ((function (c__25046__auto__,msg_hist,msg_names,msg){
return (function (state_31966){
var state_val_31967 = (state_31966[(1)]);
if((state_val_31967 === (7))){
var inst_31886 = (state_31966[(2)]);
var state_31966__$1 = state_31966;
if(cljs.core.truth_(inst_31886)){
var statearr_31968_32015 = state_31966__$1;
(statearr_31968_32015[(1)] = (8));

} else {
var statearr_31969_32016 = state_31966__$1;
(statearr_31969_32016[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31967 === (20))){
var inst_31960 = (state_31966[(2)]);
var state_31966__$1 = state_31966;
var statearr_31970_32017 = state_31966__$1;
(statearr_31970_32017[(2)] = inst_31960);

(statearr_31970_32017[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31967 === (27))){
var inst_31956 = (state_31966[(2)]);
var state_31966__$1 = state_31966;
var statearr_31971_32018 = state_31966__$1;
(statearr_31971_32018[(2)] = inst_31956);

(statearr_31971_32018[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31967 === (1))){
var inst_31879 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31966__$1 = state_31966;
if(cljs.core.truth_(inst_31879)){
var statearr_31972_32019 = state_31966__$1;
(statearr_31972_32019[(1)] = (2));

} else {
var statearr_31973_32020 = state_31966__$1;
(statearr_31973_32020[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31967 === (24))){
var inst_31958 = (state_31966[(2)]);
var state_31966__$1 = state_31966;
var statearr_31974_32021 = state_31966__$1;
(statearr_31974_32021[(2)] = inst_31958);

(statearr_31974_32021[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31967 === (4))){
var inst_31964 = (state_31966[(2)]);
var state_31966__$1 = state_31966;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31966__$1,inst_31964);
} else {
if((state_val_31967 === (15))){
var inst_31962 = (state_31966[(2)]);
var state_31966__$1 = state_31966;
var statearr_31975_32022 = state_31966__$1;
(statearr_31975_32022[(2)] = inst_31962);

(statearr_31975_32022[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31967 === (21))){
var inst_31915 = (state_31966[(2)]);
var inst_31916 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31917 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31916);
var state_31966__$1 = (function (){var statearr_31976 = state_31966;
(statearr_31976[(7)] = inst_31915);

return statearr_31976;
})();
var statearr_31977_32023 = state_31966__$1;
(statearr_31977_32023[(2)] = inst_31917);

(statearr_31977_32023[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31967 === (31))){
var inst_31945 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31966__$1 = state_31966;
if(inst_31945){
var statearr_31978_32024 = state_31966__$1;
(statearr_31978_32024[(1)] = (34));

} else {
var statearr_31979_32025 = state_31966__$1;
(statearr_31979_32025[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31967 === (32))){
var inst_31954 = (state_31966[(2)]);
var state_31966__$1 = state_31966;
var statearr_31980_32026 = state_31966__$1;
(statearr_31980_32026[(2)] = inst_31954);

(statearr_31980_32026[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31967 === (33))){
var inst_31941 = (state_31966[(2)]);
var inst_31942 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31943 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31942);
var state_31966__$1 = (function (){var statearr_31981 = state_31966;
(statearr_31981[(8)] = inst_31941);

return statearr_31981;
})();
var statearr_31982_32027 = state_31966__$1;
(statearr_31982_32027[(2)] = inst_31943);

(statearr_31982_32027[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31967 === (13))){
var inst_31900 = figwheel.client.heads_up.clear.call(null);
var state_31966__$1 = state_31966;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31966__$1,(16),inst_31900);
} else {
if((state_val_31967 === (22))){
var inst_31921 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31922 = figwheel.client.heads_up.append_warning_message.call(null,inst_31921);
var state_31966__$1 = state_31966;
var statearr_31983_32028 = state_31966__$1;
(statearr_31983_32028[(2)] = inst_31922);

(statearr_31983_32028[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31967 === (36))){
var inst_31952 = (state_31966[(2)]);
var state_31966__$1 = state_31966;
var statearr_31984_32029 = state_31966__$1;
(statearr_31984_32029[(2)] = inst_31952);

(statearr_31984_32029[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31967 === (29))){
var inst_31932 = (state_31966[(2)]);
var inst_31933 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31934 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31933);
var state_31966__$1 = (function (){var statearr_31985 = state_31966;
(statearr_31985[(9)] = inst_31932);

return statearr_31985;
})();
var statearr_31986_32030 = state_31966__$1;
(statearr_31986_32030[(2)] = inst_31934);

(statearr_31986_32030[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31967 === (6))){
var inst_31881 = (state_31966[(10)]);
var state_31966__$1 = state_31966;
var statearr_31987_32031 = state_31966__$1;
(statearr_31987_32031[(2)] = inst_31881);

(statearr_31987_32031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31967 === (28))){
var inst_31928 = (state_31966[(2)]);
var inst_31929 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31930 = figwheel.client.heads_up.display_warning.call(null,inst_31929);
var state_31966__$1 = (function (){var statearr_31988 = state_31966;
(statearr_31988[(11)] = inst_31928);

return statearr_31988;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31966__$1,(29),inst_31930);
} else {
if((state_val_31967 === (25))){
var inst_31926 = figwheel.client.heads_up.clear.call(null);
var state_31966__$1 = state_31966;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31966__$1,(28),inst_31926);
} else {
if((state_val_31967 === (34))){
var inst_31947 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31966__$1 = state_31966;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31966__$1,(37),inst_31947);
} else {
if((state_val_31967 === (17))){
var inst_31906 = (state_31966[(2)]);
var inst_31907 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31908 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31907);
var state_31966__$1 = (function (){var statearr_31989 = state_31966;
(statearr_31989[(12)] = inst_31906);

return statearr_31989;
})();
var statearr_31990_32032 = state_31966__$1;
(statearr_31990_32032[(2)] = inst_31908);

(statearr_31990_32032[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31967 === (3))){
var inst_31898 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31966__$1 = state_31966;
if(inst_31898){
var statearr_31991_32033 = state_31966__$1;
(statearr_31991_32033[(1)] = (13));

} else {
var statearr_31992_32034 = state_31966__$1;
(statearr_31992_32034[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31967 === (12))){
var inst_31894 = (state_31966[(2)]);
var state_31966__$1 = state_31966;
var statearr_31993_32035 = state_31966__$1;
(statearr_31993_32035[(2)] = inst_31894);

(statearr_31993_32035[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31967 === (2))){
var inst_31881 = (state_31966[(10)]);
var inst_31881__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31966__$1 = (function (){var statearr_31994 = state_31966;
(statearr_31994[(10)] = inst_31881__$1);

return statearr_31994;
})();
if(cljs.core.truth_(inst_31881__$1)){
var statearr_31995_32036 = state_31966__$1;
(statearr_31995_32036[(1)] = (5));

} else {
var statearr_31996_32037 = state_31966__$1;
(statearr_31996_32037[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31967 === (23))){
var inst_31924 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31966__$1 = state_31966;
if(inst_31924){
var statearr_31997_32038 = state_31966__$1;
(statearr_31997_32038[(1)] = (25));

} else {
var statearr_31998_32039 = state_31966__$1;
(statearr_31998_32039[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31967 === (35))){
var state_31966__$1 = state_31966;
var statearr_31999_32040 = state_31966__$1;
(statearr_31999_32040[(2)] = null);

(statearr_31999_32040[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31967 === (19))){
var inst_31919 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31966__$1 = state_31966;
if(inst_31919){
var statearr_32000_32041 = state_31966__$1;
(statearr_32000_32041[(1)] = (22));

} else {
var statearr_32001_32042 = state_31966__$1;
(statearr_32001_32042[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31967 === (11))){
var inst_31890 = (state_31966[(2)]);
var state_31966__$1 = state_31966;
var statearr_32002_32043 = state_31966__$1;
(statearr_32002_32043[(2)] = inst_31890);

(statearr_32002_32043[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31967 === (9))){
var inst_31892 = figwheel.client.heads_up.clear.call(null);
var state_31966__$1 = state_31966;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31966__$1,(12),inst_31892);
} else {
if((state_val_31967 === (5))){
var inst_31883 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31966__$1 = state_31966;
var statearr_32003_32044 = state_31966__$1;
(statearr_32003_32044[(2)] = inst_31883);

(statearr_32003_32044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31967 === (14))){
var inst_31910 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31966__$1 = state_31966;
if(inst_31910){
var statearr_32004_32045 = state_31966__$1;
(statearr_32004_32045[(1)] = (18));

} else {
var statearr_32005_32046 = state_31966__$1;
(statearr_32005_32046[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31967 === (26))){
var inst_31936 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31966__$1 = state_31966;
if(inst_31936){
var statearr_32006_32047 = state_31966__$1;
(statearr_32006_32047[(1)] = (30));

} else {
var statearr_32007_32048 = state_31966__$1;
(statearr_32007_32048[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31967 === (16))){
var inst_31902 = (state_31966[(2)]);
var inst_31903 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31904 = figwheel.client.heads_up.display_exception.call(null,inst_31903);
var state_31966__$1 = (function (){var statearr_32008 = state_31966;
(statearr_32008[(13)] = inst_31902);

return statearr_32008;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31966__$1,(17),inst_31904);
} else {
if((state_val_31967 === (30))){
var inst_31938 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31939 = figwheel.client.heads_up.display_warning.call(null,inst_31938);
var state_31966__$1 = state_31966;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31966__$1,(33),inst_31939);
} else {
if((state_val_31967 === (10))){
var inst_31896 = (state_31966[(2)]);
var state_31966__$1 = state_31966;
var statearr_32009_32049 = state_31966__$1;
(statearr_32009_32049[(2)] = inst_31896);

(statearr_32009_32049[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31967 === (18))){
var inst_31912 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31913 = figwheel.client.heads_up.display_exception.call(null,inst_31912);
var state_31966__$1 = state_31966;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31966__$1,(21),inst_31913);
} else {
if((state_val_31967 === (37))){
var inst_31949 = (state_31966[(2)]);
var state_31966__$1 = state_31966;
var statearr_32010_32050 = state_31966__$1;
(statearr_32010_32050[(2)] = inst_31949);

(statearr_32010_32050[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31967 === (8))){
var inst_31888 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31966__$1 = state_31966;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31966__$1,(11),inst_31888);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25046__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__22049__auto__,c__25046__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22050__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22050__auto____0 = (function (){
var statearr_32011 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32011[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22050__auto__);

(statearr_32011[(1)] = (1));

return statearr_32011;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22050__auto____1 = (function (state_31966){
while(true){
var ret_value__22051__auto__ = (function (){try{while(true){
var result__22052__auto__ = switch__22049__auto__.call(null,state_31966);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22052__auto__;
}
break;
}
}catch (e32012){if((e32012 instanceof Object)){
var ex__22053__auto__ = e32012;
var statearr_32013_32051 = state_31966;
(statearr_32013_32051[(5)] = ex__22053__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31966);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32012;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32052 = state_31966;
state_31966 = G__32052;
continue;
} else {
return ret_value__22051__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22050__auto__ = function(state_31966){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22050__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22050__auto____1.call(this,state_31966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22050__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22050__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22050__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22050__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22050__auto__;
})()
;})(switch__22049__auto__,c__25046__auto__,msg_hist,msg_names,msg))
})();
var state__25048__auto__ = (function (){var statearr_32014 = f__25047__auto__.call(null);
(statearr_32014[(6)] = c__25046__auto__);

return statearr_32014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25048__auto__);
});})(c__25046__auto__,msg_hist,msg_names,msg))
);

return c__25046__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__25046__auto___32081 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25046__auto___32081,ch){
return (function (){
var f__25047__auto__ = (function (){var switch__22049__auto__ = ((function (c__25046__auto___32081,ch){
return (function (state_32067){
var state_val_32068 = (state_32067[(1)]);
if((state_val_32068 === (1))){
var state_32067__$1 = state_32067;
var statearr_32069_32082 = state_32067__$1;
(statearr_32069_32082[(2)] = null);

(statearr_32069_32082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32068 === (2))){
var state_32067__$1 = state_32067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32067__$1,(4),ch);
} else {
if((state_val_32068 === (3))){
var inst_32065 = (state_32067[(2)]);
var state_32067__$1 = state_32067;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32067__$1,inst_32065);
} else {
if((state_val_32068 === (4))){
var inst_32055 = (state_32067[(7)]);
var inst_32055__$1 = (state_32067[(2)]);
var state_32067__$1 = (function (){var statearr_32070 = state_32067;
(statearr_32070[(7)] = inst_32055__$1);

return statearr_32070;
})();
if(cljs.core.truth_(inst_32055__$1)){
var statearr_32071_32083 = state_32067__$1;
(statearr_32071_32083[(1)] = (5));

} else {
var statearr_32072_32084 = state_32067__$1;
(statearr_32072_32084[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32068 === (5))){
var inst_32055 = (state_32067[(7)]);
var inst_32057 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_32055);
var state_32067__$1 = state_32067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32067__$1,(8),inst_32057);
} else {
if((state_val_32068 === (6))){
var state_32067__$1 = state_32067;
var statearr_32073_32085 = state_32067__$1;
(statearr_32073_32085[(2)] = null);

(statearr_32073_32085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32068 === (7))){
var inst_32063 = (state_32067[(2)]);
var state_32067__$1 = state_32067;
var statearr_32074_32086 = state_32067__$1;
(statearr_32074_32086[(2)] = inst_32063);

(statearr_32074_32086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32068 === (8))){
var inst_32059 = (state_32067[(2)]);
var state_32067__$1 = (function (){var statearr_32075 = state_32067;
(statearr_32075[(8)] = inst_32059);

return statearr_32075;
})();
var statearr_32076_32087 = state_32067__$1;
(statearr_32076_32087[(2)] = null);

(statearr_32076_32087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__25046__auto___32081,ch))
;
return ((function (switch__22049__auto__,c__25046__auto___32081,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22050__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22050__auto____0 = (function (){
var statearr_32077 = [null,null,null,null,null,null,null,null,null];
(statearr_32077[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22050__auto__);

(statearr_32077[(1)] = (1));

return statearr_32077;
});
var figwheel$client$heads_up_plugin_$_state_machine__22050__auto____1 = (function (state_32067){
while(true){
var ret_value__22051__auto__ = (function (){try{while(true){
var result__22052__auto__ = switch__22049__auto__.call(null,state_32067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22052__auto__;
}
break;
}
}catch (e32078){if((e32078 instanceof Object)){
var ex__22053__auto__ = e32078;
var statearr_32079_32088 = state_32067;
(statearr_32079_32088[(5)] = ex__22053__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32089 = state_32067;
state_32067 = G__32089;
continue;
} else {
return ret_value__22051__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22050__auto__ = function(state_32067){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22050__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22050__auto____1.call(this,state_32067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__22050__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22050__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22050__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22050__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22050__auto__;
})()
;})(switch__22049__auto__,c__25046__auto___32081,ch))
})();
var state__25048__auto__ = (function (){var statearr_32080 = f__25047__auto__.call(null);
(statearr_32080[(6)] = c__25046__auto___32081);

return statearr_32080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25048__auto__);
});})(c__25046__auto___32081,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__25046__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25046__auto__){
return (function (){
var f__25047__auto__ = (function (){var switch__22049__auto__ = ((function (c__25046__auto__){
return (function (state_32095){
var state_val_32096 = (state_32095[(1)]);
if((state_val_32096 === (1))){
var inst_32090 = cljs.core.async.timeout.call(null,(3000));
var state_32095__$1 = state_32095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32095__$1,(2),inst_32090);
} else {
if((state_val_32096 === (2))){
var inst_32092 = (state_32095[(2)]);
var inst_32093 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_32095__$1 = (function (){var statearr_32097 = state_32095;
(statearr_32097[(7)] = inst_32092);

return statearr_32097;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32095__$1,inst_32093);
} else {
return null;
}
}
});})(c__25046__auto__))
;
return ((function (switch__22049__auto__,c__25046__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__22050__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__22050__auto____0 = (function (){
var statearr_32098 = [null,null,null,null,null,null,null,null];
(statearr_32098[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22050__auto__);

(statearr_32098[(1)] = (1));

return statearr_32098;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22050__auto____1 = (function (state_32095){
while(true){
var ret_value__22051__auto__ = (function (){try{while(true){
var result__22052__auto__ = switch__22049__auto__.call(null,state_32095);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22052__auto__;
}
break;
}
}catch (e32099){if((e32099 instanceof Object)){
var ex__22053__auto__ = e32099;
var statearr_32100_32102 = state_32095;
(statearr_32100_32102[(5)] = ex__22053__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32095);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32099;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32103 = state_32095;
state_32095 = G__32103;
continue;
} else {
return ret_value__22051__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22050__auto__ = function(state_32095){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22050__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22050__auto____1.call(this,state_32095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__22050__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22050__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22050__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22050__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22050__auto__;
})()
;})(switch__22049__auto__,c__25046__auto__))
})();
var state__25048__auto__ = (function (){var statearr_32101 = f__25047__auto__.call(null);
(statearr_32101[(6)] = c__25046__auto__);

return statearr_32101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25048__auto__);
});})(c__25046__auto__))
);

return c__25046__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5720__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5720__auto__)){
var figwheel_version = temp__5720__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__25046__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25046__auto__,figwheel_version,temp__5720__auto__){
return (function (){
var f__25047__auto__ = (function (){var switch__22049__auto__ = ((function (c__25046__auto__,figwheel_version,temp__5720__auto__){
return (function (state_32110){
var state_val_32111 = (state_32110[(1)]);
if((state_val_32111 === (1))){
var inst_32104 = cljs.core.async.timeout.call(null,(2000));
var state_32110__$1 = state_32110;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32110__$1,(2),inst_32104);
} else {
if((state_val_32111 === (2))){
var inst_32106 = (state_32110[(2)]);
var inst_32107 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_32108 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_32107);
var state_32110__$1 = (function (){var statearr_32112 = state_32110;
(statearr_32112[(7)] = inst_32106);

return statearr_32112;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32110__$1,inst_32108);
} else {
return null;
}
}
});})(c__25046__auto__,figwheel_version,temp__5720__auto__))
;
return ((function (switch__22049__auto__,c__25046__auto__,figwheel_version,temp__5720__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22050__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22050__auto____0 = (function (){
var statearr_32113 = [null,null,null,null,null,null,null,null];
(statearr_32113[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22050__auto__);

(statearr_32113[(1)] = (1));

return statearr_32113;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22050__auto____1 = (function (state_32110){
while(true){
var ret_value__22051__auto__ = (function (){try{while(true){
var result__22052__auto__ = switch__22049__auto__.call(null,state_32110);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22052__auto__;
}
break;
}
}catch (e32114){if((e32114 instanceof Object)){
var ex__22053__auto__ = e32114;
var statearr_32115_32117 = state_32110;
(statearr_32115_32117[(5)] = ex__22053__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32110);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32114;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32118 = state_32110;
state_32110 = G__32118;
continue;
} else {
return ret_value__22051__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22050__auto__ = function(state_32110){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22050__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22050__auto____1.call(this,state_32110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22050__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22050__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22050__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22050__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22050__auto__;
})()
;})(switch__22049__auto__,c__25046__auto__,figwheel_version,temp__5720__auto__))
})();
var state__25048__auto__ = (function (){var statearr_32116 = f__25047__auto__.call(null);
(statearr_32116[(6)] = c__25046__auto__);

return statearr_32116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25048__auto__);
});})(c__25046__auto__,figwheel_version,temp__5720__auto__))
);

return c__25046__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__32119){
var map__32120 = p__32119;
var map__32120__$1 = (((((!((map__32120 == null))))?(((((map__32120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32120):map__32120);
var file = cljs.core.get.call(null,map__32120__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__32120__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__32120__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__32122 = "";
var G__32122__$1 = (cljs.core.truth_(file)?[G__32122,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__32122);
var G__32122__$2 = (cljs.core.truth_(line)?[G__32122__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__32122__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__32122__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__32122__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__32123){
var map__32124 = p__32123;
var map__32124__$1 = (((((!((map__32124 == null))))?(((((map__32124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32124):map__32124);
var ed = map__32124__$1;
var exception_data = cljs.core.get.call(null,map__32124__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__32124__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_32127 = (function (){var G__32126 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32126)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__32126;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_32127);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__32128){
var map__32129 = p__32128;
var map__32129__$1 = (((((!((map__32129 == null))))?(((((map__32129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32129):map__32129);
var w = map__32129__$1;
var message = cljs.core.get.call(null,map__32129__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/devcards_out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/devcards_out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4120__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__32131 = cljs.core.seq.call(null,plugins);
var chunk__32132 = null;
var count__32133 = (0);
var i__32134 = (0);
while(true){
if((i__32134 < count__32133)){
var vec__32141 = cljs.core._nth.call(null,chunk__32132,i__32134);
var k = cljs.core.nth.call(null,vec__32141,(0),null);
var plugin = cljs.core.nth.call(null,vec__32141,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32147 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32131,chunk__32132,count__32133,i__32134,pl_32147,vec__32141,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_32147.call(null,msg_hist);
});})(seq__32131,chunk__32132,count__32133,i__32134,pl_32147,vec__32141,k,plugin))
);
} else {
}


var G__32148 = seq__32131;
var G__32149 = chunk__32132;
var G__32150 = count__32133;
var G__32151 = (i__32134 + (1));
seq__32131 = G__32148;
chunk__32132 = G__32149;
count__32133 = G__32150;
i__32134 = G__32151;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__32131);
if(temp__5720__auto__){
var seq__32131__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32131__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__32131__$1);
var G__32152 = cljs.core.chunk_rest.call(null,seq__32131__$1);
var G__32153 = c__4550__auto__;
var G__32154 = cljs.core.count.call(null,c__4550__auto__);
var G__32155 = (0);
seq__32131 = G__32152;
chunk__32132 = G__32153;
count__32133 = G__32154;
i__32134 = G__32155;
continue;
} else {
var vec__32144 = cljs.core.first.call(null,seq__32131__$1);
var k = cljs.core.nth.call(null,vec__32144,(0),null);
var plugin = cljs.core.nth.call(null,vec__32144,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32156 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32131,chunk__32132,count__32133,i__32134,pl_32156,vec__32144,k,plugin,seq__32131__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_32156.call(null,msg_hist);
});})(seq__32131,chunk__32132,count__32133,i__32134,pl_32156,vec__32144,k,plugin,seq__32131__$1,temp__5720__auto__))
);
} else {
}


var G__32157 = cljs.core.next.call(null,seq__32131__$1);
var G__32158 = null;
var G__32159 = (0);
var G__32160 = (0);
seq__32131 = G__32157;
chunk__32132 = G__32158;
count__32133 = G__32159;
i__32134 = G__32160;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__32162 = arguments.length;
switch (G__32162) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__32163_32168 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__32164_32169 = null;
var count__32165_32170 = (0);
var i__32166_32171 = (0);
while(true){
if((i__32166_32171 < count__32165_32170)){
var msg_32172 = cljs.core._nth.call(null,chunk__32164_32169,i__32166_32171);
figwheel.client.socket.handle_incoming_message.call(null,msg_32172);


var G__32173 = seq__32163_32168;
var G__32174 = chunk__32164_32169;
var G__32175 = count__32165_32170;
var G__32176 = (i__32166_32171 + (1));
seq__32163_32168 = G__32173;
chunk__32164_32169 = G__32174;
count__32165_32170 = G__32175;
i__32166_32171 = G__32176;
continue;
} else {
var temp__5720__auto___32177 = cljs.core.seq.call(null,seq__32163_32168);
if(temp__5720__auto___32177){
var seq__32163_32178__$1 = temp__5720__auto___32177;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32163_32178__$1)){
var c__4550__auto___32179 = cljs.core.chunk_first.call(null,seq__32163_32178__$1);
var G__32180 = cljs.core.chunk_rest.call(null,seq__32163_32178__$1);
var G__32181 = c__4550__auto___32179;
var G__32182 = cljs.core.count.call(null,c__4550__auto___32179);
var G__32183 = (0);
seq__32163_32168 = G__32180;
chunk__32164_32169 = G__32181;
count__32165_32170 = G__32182;
i__32166_32171 = G__32183;
continue;
} else {
var msg_32184 = cljs.core.first.call(null,seq__32163_32178__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_32184);


var G__32185 = cljs.core.next.call(null,seq__32163_32178__$1);
var G__32186 = null;
var G__32187 = (0);
var G__32188 = (0);
seq__32163_32168 = G__32185;
chunk__32164_32169 = G__32186;
count__32165_32170 = G__32187;
i__32166_32171 = G__32188;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4736__auto__ = [];
var len__4730__auto___32193 = arguments.length;
var i__4731__auto___32194 = (0);
while(true){
if((i__4731__auto___32194 < len__4730__auto___32193)){
args__4736__auto__.push((arguments[i__4731__auto___32194]));

var G__32195 = (i__4731__auto___32194 + (1));
i__4731__auto___32194 = G__32195;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__32190){
var map__32191 = p__32190;
var map__32191__$1 = (((((!((map__32191 == null))))?(((((map__32191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32191):map__32191);
var opts = map__32191__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq32189){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32189));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e32196){if((e32196 instanceof Error)){
var e = e32196;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e32196;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__32197){
var map__32198 = p__32197;
var map__32198__$1 = (((((!((map__32198 == null))))?(((((map__32198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32198):map__32198);
var msg_name = cljs.core.get.call(null,map__32198__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1551004821719
