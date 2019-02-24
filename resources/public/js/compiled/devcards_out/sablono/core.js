// Compiled by ClojureScript 1.10.520 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__28821__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__28818 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__28819 = cljs.core.seq.call(null,vec__28818);
var first__28820 = cljs.core.first.call(null,seq__28819);
var seq__28819__$1 = cljs.core.next.call(null,seq__28819);
var tag = first__28820;
var body = seq__28819__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__28821 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28822__i = 0, G__28822__a = new Array(arguments.length -  0);
while (G__28822__i < G__28822__a.length) {G__28822__a[G__28822__i] = arguments[G__28822__i + 0]; ++G__28822__i;}
  args = new cljs.core.IndexedSeq(G__28822__a,0,null);
} 
return G__28821__delegate.call(this,args);};
G__28821.cljs$lang$maxFixedArity = 0;
G__28821.cljs$lang$applyTo = (function (arglist__28823){
var args = cljs.core.seq(arglist__28823);
return G__28821__delegate(args);
});
G__28821.cljs$core$IFn$_invoke$arity$variadic = G__28821__delegate;
return G__28821;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4523__auto__ = (function sablono$core$update_arglists_$_iter__28824(s__28825){
return (new cljs.core.LazySeq(null,(function (){
var s__28825__$1 = s__28825;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__28825__$1);
if(temp__5720__auto__){
var s__28825__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28825__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__28825__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__28827 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__28826 = (0);
while(true){
if((i__28826 < size__4522__auto__)){
var args = cljs.core._nth.call(null,c__4521__auto__,i__28826);
cljs.core.chunk_append.call(null,b__28827,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__28828 = (i__28826 + (1));
i__28826 = G__28828;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28827),sablono$core$update_arglists_$_iter__28824.call(null,cljs.core.chunk_rest.call(null,s__28825__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28827),null);
}
} else {
var args = cljs.core.first.call(null,s__28825__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__28824.call(null,cljs.core.rest.call(null,s__28825__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4736__auto__ = [];
var len__4730__auto___28834 = arguments.length;
var i__4731__auto___28835 = (0);
while(true){
if((i__4731__auto___28835 < len__4730__auto___28834)){
args__4736__auto__.push((arguments[i__4731__auto___28835]));

var G__28836 = (i__4731__auto___28835 + (1));
i__4731__auto___28835 = G__28836;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4523__auto__ = (function sablono$core$iter__28830(s__28831){
return (new cljs.core.LazySeq(null,(function (){
var s__28831__$1 = s__28831;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__28831__$1);
if(temp__5720__auto__){
var s__28831__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28831__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__28831__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__28833 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__28832 = (0);
while(true){
if((i__28832 < size__4522__auto__)){
var style = cljs.core._nth.call(null,c__4521__auto__,i__28832);
cljs.core.chunk_append.call(null,b__28833,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__28837 = (i__28832 + (1));
i__28832 = G__28837;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28833),sablono$core$iter__28830.call(null,cljs.core.chunk_rest.call(null,s__28831__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28833),null);
}
} else {
var style = cljs.core.first.call(null,s__28831__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__28830.call(null,cljs.core.rest.call(null,s__28831__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
sablono.core.include_css.cljs$lang$applyTo = (function (seq28829){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28829));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to28838 = (function sablono$core$link_to28838(var_args){
var args__4736__auto__ = [];
var len__4730__auto___28841 = arguments.length;
var i__4731__auto___28842 = (0);
while(true){
if((i__4731__auto___28842 < len__4730__auto___28841)){
args__4736__auto__.push((arguments[i__4731__auto___28842]));

var G__28843 = (i__4731__auto___28842 + (1));
i__4731__auto___28842 = G__28843;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to28838.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

sablono.core.link_to28838.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to28838.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.link_to28838.cljs$lang$applyTo = (function (seq28839){
var G__28840 = cljs.core.first.call(null,seq28839);
var seq28839__$1 = cljs.core.next.call(null,seq28839);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28840,seq28839__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to28838);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to28844 = (function sablono$core$mail_to28844(var_args){
var args__4736__auto__ = [];
var len__4730__auto___28851 = arguments.length;
var i__4731__auto___28852 = (0);
while(true){
if((i__4731__auto___28852 < len__4730__auto___28851)){
args__4736__auto__.push((arguments[i__4731__auto___28852]));

var G__28853 = (i__4731__auto___28852 + (1));
i__4731__auto___28852 = G__28853;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to28844.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

sablono.core.mail_to28844.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__28847){
var vec__28848 = p__28847;
var content = cljs.core.nth.call(null,vec__28848,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4131__auto__ = content;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to28844.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.mail_to28844.cljs$lang$applyTo = (function (seq28845){
var G__28846 = cljs.core.first.call(null,seq28845);
var seq28845__$1 = cljs.core.next.call(null,seq28845);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28846,seq28845__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to28844);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list28854 = (function sablono$core$unordered_list28854(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4523__auto__ = (function sablono$core$unordered_list28854_$_iter__28855(s__28856){
return (new cljs.core.LazySeq(null,(function (){
var s__28856__$1 = s__28856;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__28856__$1);
if(temp__5720__auto__){
var s__28856__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28856__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__28856__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__28858 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__28857 = (0);
while(true){
if((i__28857 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__28857);
cljs.core.chunk_append.call(null,b__28858,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__28859 = (i__28857 + (1));
i__28857 = G__28859;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28858),sablono$core$unordered_list28854_$_iter__28855.call(null,cljs.core.chunk_rest.call(null,s__28856__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28858),null);
}
} else {
var x = cljs.core.first.call(null,s__28856__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list28854_$_iter__28855.call(null,cljs.core.rest.call(null,s__28856__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list28854);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list28860 = (function sablono$core$ordered_list28860(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4523__auto__ = (function sablono$core$ordered_list28860_$_iter__28861(s__28862){
return (new cljs.core.LazySeq(null,(function (){
var s__28862__$1 = s__28862;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__28862__$1);
if(temp__5720__auto__){
var s__28862__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28862__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__28862__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__28864 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__28863 = (0);
while(true){
if((i__28863 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__28863);
cljs.core.chunk_append.call(null,b__28864,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__28865 = (i__28863 + (1));
i__28863 = G__28865;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28864),sablono$core$ordered_list28860_$_iter__28861.call(null,cljs.core.chunk_rest.call(null,s__28862__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28864),null);
}
} else {
var x = cljs.core.first.call(null,s__28862__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list28860_$_iter__28861.call(null,cljs.core.rest.call(null,s__28862__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list28860);
/**
 * Create an image element.
 */
sablono.core.image28866 = (function sablono$core$image28866(var_args){
var G__28868 = arguments.length;
switch (G__28868) {
case 1:
return sablono.core.image28866.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image28866.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image28866.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image28866.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image28866.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image28866);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__28870_SHARP_,p2__28871_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28870_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__28871_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__28872_SHARP_,p2__28873_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28872_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__28873_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__28875 = arguments.length;
switch (G__28875) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Creates a color input field.
 */
sablono.core.color_field28877 = (function sablono$core$color_field28877(var_args){
var G__28879 = arguments.length;
switch (G__28879) {
case 1:
return sablono.core.color_field28877.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field28877.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field28877.cljs$core$IFn$_invoke$arity$1 = (function (name__28808__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__28808__auto__);
});

sablono.core.color_field28877.cljs$core$IFn$_invoke$arity$2 = (function (name__28808__auto__,value__28809__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__28808__auto__,value__28809__auto__);
});

sablono.core.color_field28877.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field28877);

/**
 * Creates a date input field.
 */
sablono.core.date_field28880 = (function sablono$core$date_field28880(var_args){
var G__28882 = arguments.length;
switch (G__28882) {
case 1:
return sablono.core.date_field28880.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field28880.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field28880.cljs$core$IFn$_invoke$arity$1 = (function (name__28808__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__28808__auto__);
});

sablono.core.date_field28880.cljs$core$IFn$_invoke$arity$2 = (function (name__28808__auto__,value__28809__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__28808__auto__,value__28809__auto__);
});

sablono.core.date_field28880.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field28880);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field28883 = (function sablono$core$datetime_field28883(var_args){
var G__28885 = arguments.length;
switch (G__28885) {
case 1:
return sablono.core.datetime_field28883.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field28883.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field28883.cljs$core$IFn$_invoke$arity$1 = (function (name__28808__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__28808__auto__);
});

sablono.core.datetime_field28883.cljs$core$IFn$_invoke$arity$2 = (function (name__28808__auto__,value__28809__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__28808__auto__,value__28809__auto__);
});

sablono.core.datetime_field28883.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field28883);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field28886 = (function sablono$core$datetime_local_field28886(var_args){
var G__28888 = arguments.length;
switch (G__28888) {
case 1:
return sablono.core.datetime_local_field28886.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field28886.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field28886.cljs$core$IFn$_invoke$arity$1 = (function (name__28808__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__28808__auto__);
});

sablono.core.datetime_local_field28886.cljs$core$IFn$_invoke$arity$2 = (function (name__28808__auto__,value__28809__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__28808__auto__,value__28809__auto__);
});

sablono.core.datetime_local_field28886.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field28886);

/**
 * Creates a email input field.
 */
sablono.core.email_field28889 = (function sablono$core$email_field28889(var_args){
var G__28891 = arguments.length;
switch (G__28891) {
case 1:
return sablono.core.email_field28889.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field28889.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field28889.cljs$core$IFn$_invoke$arity$1 = (function (name__28808__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__28808__auto__);
});

sablono.core.email_field28889.cljs$core$IFn$_invoke$arity$2 = (function (name__28808__auto__,value__28809__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__28808__auto__,value__28809__auto__);
});

sablono.core.email_field28889.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field28889);

/**
 * Creates a file input field.
 */
sablono.core.file_field28892 = (function sablono$core$file_field28892(var_args){
var G__28894 = arguments.length;
switch (G__28894) {
case 1:
return sablono.core.file_field28892.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field28892.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field28892.cljs$core$IFn$_invoke$arity$1 = (function (name__28808__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__28808__auto__);
});

sablono.core.file_field28892.cljs$core$IFn$_invoke$arity$2 = (function (name__28808__auto__,value__28809__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__28808__auto__,value__28809__auto__);
});

sablono.core.file_field28892.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field28892);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field28895 = (function sablono$core$hidden_field28895(var_args){
var G__28897 = arguments.length;
switch (G__28897) {
case 1:
return sablono.core.hidden_field28895.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field28895.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field28895.cljs$core$IFn$_invoke$arity$1 = (function (name__28808__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__28808__auto__);
});

sablono.core.hidden_field28895.cljs$core$IFn$_invoke$arity$2 = (function (name__28808__auto__,value__28809__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__28808__auto__,value__28809__auto__);
});

sablono.core.hidden_field28895.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field28895);

/**
 * Creates a month input field.
 */
sablono.core.month_field28898 = (function sablono$core$month_field28898(var_args){
var G__28900 = arguments.length;
switch (G__28900) {
case 1:
return sablono.core.month_field28898.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field28898.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field28898.cljs$core$IFn$_invoke$arity$1 = (function (name__28808__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__28808__auto__);
});

sablono.core.month_field28898.cljs$core$IFn$_invoke$arity$2 = (function (name__28808__auto__,value__28809__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__28808__auto__,value__28809__auto__);
});

sablono.core.month_field28898.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field28898);

/**
 * Creates a number input field.
 */
sablono.core.number_field28901 = (function sablono$core$number_field28901(var_args){
var G__28903 = arguments.length;
switch (G__28903) {
case 1:
return sablono.core.number_field28901.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field28901.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field28901.cljs$core$IFn$_invoke$arity$1 = (function (name__28808__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__28808__auto__);
});

sablono.core.number_field28901.cljs$core$IFn$_invoke$arity$2 = (function (name__28808__auto__,value__28809__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__28808__auto__,value__28809__auto__);
});

sablono.core.number_field28901.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field28901);

/**
 * Creates a password input field.
 */
sablono.core.password_field28904 = (function sablono$core$password_field28904(var_args){
var G__28906 = arguments.length;
switch (G__28906) {
case 1:
return sablono.core.password_field28904.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field28904.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field28904.cljs$core$IFn$_invoke$arity$1 = (function (name__28808__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__28808__auto__);
});

sablono.core.password_field28904.cljs$core$IFn$_invoke$arity$2 = (function (name__28808__auto__,value__28809__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__28808__auto__,value__28809__auto__);
});

sablono.core.password_field28904.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field28904);

/**
 * Creates a range input field.
 */
sablono.core.range_field28907 = (function sablono$core$range_field28907(var_args){
var G__28909 = arguments.length;
switch (G__28909) {
case 1:
return sablono.core.range_field28907.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field28907.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field28907.cljs$core$IFn$_invoke$arity$1 = (function (name__28808__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__28808__auto__);
});

sablono.core.range_field28907.cljs$core$IFn$_invoke$arity$2 = (function (name__28808__auto__,value__28809__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__28808__auto__,value__28809__auto__);
});

sablono.core.range_field28907.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field28907);

/**
 * Creates a search input field.
 */
sablono.core.search_field28910 = (function sablono$core$search_field28910(var_args){
var G__28912 = arguments.length;
switch (G__28912) {
case 1:
return sablono.core.search_field28910.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field28910.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field28910.cljs$core$IFn$_invoke$arity$1 = (function (name__28808__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__28808__auto__);
});

sablono.core.search_field28910.cljs$core$IFn$_invoke$arity$2 = (function (name__28808__auto__,value__28809__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__28808__auto__,value__28809__auto__);
});

sablono.core.search_field28910.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field28910);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field28913 = (function sablono$core$tel_field28913(var_args){
var G__28915 = arguments.length;
switch (G__28915) {
case 1:
return sablono.core.tel_field28913.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field28913.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field28913.cljs$core$IFn$_invoke$arity$1 = (function (name__28808__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__28808__auto__);
});

sablono.core.tel_field28913.cljs$core$IFn$_invoke$arity$2 = (function (name__28808__auto__,value__28809__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__28808__auto__,value__28809__auto__);
});

sablono.core.tel_field28913.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field28913);

/**
 * Creates a text input field.
 */
sablono.core.text_field28916 = (function sablono$core$text_field28916(var_args){
var G__28918 = arguments.length;
switch (G__28918) {
case 1:
return sablono.core.text_field28916.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field28916.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field28916.cljs$core$IFn$_invoke$arity$1 = (function (name__28808__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__28808__auto__);
});

sablono.core.text_field28916.cljs$core$IFn$_invoke$arity$2 = (function (name__28808__auto__,value__28809__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__28808__auto__,value__28809__auto__);
});

sablono.core.text_field28916.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field28916);

/**
 * Creates a time input field.
 */
sablono.core.time_field28919 = (function sablono$core$time_field28919(var_args){
var G__28921 = arguments.length;
switch (G__28921) {
case 1:
return sablono.core.time_field28919.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field28919.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field28919.cljs$core$IFn$_invoke$arity$1 = (function (name__28808__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__28808__auto__);
});

sablono.core.time_field28919.cljs$core$IFn$_invoke$arity$2 = (function (name__28808__auto__,value__28809__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__28808__auto__,value__28809__auto__);
});

sablono.core.time_field28919.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field28919);

/**
 * Creates a url input field.
 */
sablono.core.url_field28922 = (function sablono$core$url_field28922(var_args){
var G__28924 = arguments.length;
switch (G__28924) {
case 1:
return sablono.core.url_field28922.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field28922.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field28922.cljs$core$IFn$_invoke$arity$1 = (function (name__28808__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__28808__auto__);
});

sablono.core.url_field28922.cljs$core$IFn$_invoke$arity$2 = (function (name__28808__auto__,value__28809__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__28808__auto__,value__28809__auto__);
});

sablono.core.url_field28922.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field28922);

/**
 * Creates a week input field.
 */
sablono.core.week_field28925 = (function sablono$core$week_field28925(var_args){
var G__28927 = arguments.length;
switch (G__28927) {
case 1:
return sablono.core.week_field28925.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field28925.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field28925.cljs$core$IFn$_invoke$arity$1 = (function (name__28808__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__28808__auto__);
});

sablono.core.week_field28925.cljs$core$IFn$_invoke$arity$2 = (function (name__28808__auto__,value__28809__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__28808__auto__,value__28809__auto__);
});

sablono.core.week_field28925.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field28925);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box28945 = (function sablono$core$check_box28945(var_args){
var G__28947 = arguments.length;
switch (G__28947) {
case 1:
return sablono.core.check_box28945.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box28945.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box28945.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box28945.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.check_box28945.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box28945.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box28945.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box28945);
/**
 * Creates a radio button.
 */
sablono.core.radio_button28949 = (function sablono$core$radio_button28949(var_args){
var G__28951 = arguments.length;
switch (G__28951) {
case 1:
return sablono.core.radio_button28949.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button28949.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button28949.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button28949.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
});

sablono.core.radio_button28949.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button28949.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button28949.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button28949);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options28953 = (function sablono$core$select_options28953(coll){
var iter__4523__auto__ = (function sablono$core$select_options28953_$_iter__28954(s__28955){
return (new cljs.core.LazySeq(null,(function (){
var s__28955__$1 = s__28955;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__28955__$1);
if(temp__5720__auto__){
var s__28955__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28955__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__28955__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__28957 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__28956 = (0);
while(true){
if((i__28956 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__28956);
cljs.core.chunk_append.call(null,b__28957,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__28958 = x;
var text = cljs.core.nth.call(null,vec__28958,(0),null);
var val = cljs.core.nth.call(null,vec__28958,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__28958,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options28953.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__28964 = (i__28956 + (1));
i__28956 = G__28964;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28957),sablono$core$select_options28953_$_iter__28954.call(null,cljs.core.chunk_rest.call(null,s__28955__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28957),null);
}
} else {
var x = cljs.core.first.call(null,s__28955__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__28961 = x;
var text = cljs.core.nth.call(null,vec__28961,(0),null);
var val = cljs.core.nth.call(null,vec__28961,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__28961,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options28953.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options28953_$_iter__28954.call(null,cljs.core.rest.call(null,s__28955__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options28953);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down28965 = (function sablono$core$drop_down28965(var_args){
var G__28967 = arguments.length;
switch (G__28967) {
case 2:
return sablono.core.drop_down28965.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down28965.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down28965.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down28965.call(null,name,options,null);
});

sablono.core.drop_down28965.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down28965.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down28965);
/**
 * Creates a text area element.
 */
sablono.core.text_area28969 = (function sablono$core$text_area28969(var_args){
var G__28971 = arguments.length;
switch (G__28971) {
case 1:
return sablono.core.text_area28969.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area28969.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area28969.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.text_area28969.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area28969.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area28969);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label28973 = (function sablono$core$label28973(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label28973);
/**
 * Creates a submit button.
 */
sablono.core.submit_button28974 = (function sablono$core$submit_button28974(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button28974);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button28975 = (function sablono$core$reset_button28975(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button28975);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to28976 = (function sablono$core$form_to28976(var_args){
var args__4736__auto__ = [];
var len__4730__auto___28983 = arguments.length;
var i__4731__auto___28984 = (0);
while(true){
if((i__4731__auto___28984 < len__4730__auto___28983)){
args__4736__auto__.push((arguments[i__4731__auto___28984]));

var G__28985 = (i__4731__auto___28984 + (1));
i__4731__auto___28984 = G__28985;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to28976.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

sablono.core.form_to28976.cljs$core$IFn$_invoke$arity$variadic = (function (p__28979,body){
var vec__28980 = p__28979;
var method = cljs.core.nth.call(null,vec__28980,(0),null);
var action = cljs.core.nth.call(null,vec__28980,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to28976.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.form_to28976.cljs$lang$applyTo = (function (seq28977){
var G__28978 = cljs.core.first.call(null,seq28977);
var seq28977__$1 = cljs.core.next.call(null,seq28977);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28978,seq28977__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to28976);

//# sourceMappingURL=core.js.map?rel=1551004819763
