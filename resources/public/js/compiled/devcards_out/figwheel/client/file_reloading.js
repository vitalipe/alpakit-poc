// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4131__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__30708_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__30708_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__30709 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__30710 = null;
var count__30711 = (0);
var i__30712 = (0);
while(true){
if((i__30712 < count__30711)){
var n = cljs.core._nth.call(null,chunk__30710,i__30712);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__30713 = seq__30709;
var G__30714 = chunk__30710;
var G__30715 = count__30711;
var G__30716 = (i__30712 + (1));
seq__30709 = G__30713;
chunk__30710 = G__30714;
count__30711 = G__30715;
i__30712 = G__30716;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__30709);
if(temp__5720__auto__){
var seq__30709__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30709__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__30709__$1);
var G__30717 = cljs.core.chunk_rest.call(null,seq__30709__$1);
var G__30718 = c__4550__auto__;
var G__30719 = cljs.core.count.call(null,c__4550__auto__);
var G__30720 = (0);
seq__30709 = G__30717;
chunk__30710 = G__30718;
count__30711 = G__30719;
i__30712 = G__30720;
continue;
} else {
var n = cljs.core.first.call(null,seq__30709__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__30721 = cljs.core.next.call(null,seq__30709__$1);
var G__30722 = null;
var G__30723 = (0);
var G__30724 = (0);
seq__30709 = G__30721;
chunk__30710 = G__30722;
count__30711 = G__30723;
i__30712 = G__30724;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__30725){
var vec__30726 = p__30725;
var _ = cljs.core.nth.call(null,vec__30726,(0),null);
var v = cljs.core.nth.call(null,vec__30726,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__30729){
var vec__30730 = p__30729;
var k = cljs.core.nth.call(null,vec__30730,(0),null);
var v = cljs.core.nth.call(null,vec__30730,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__30742_30750 = cljs.core.seq.call(null,deps);
var chunk__30743_30751 = null;
var count__30744_30752 = (0);
var i__30745_30753 = (0);
while(true){
if((i__30745_30753 < count__30744_30752)){
var dep_30754 = cljs.core._nth.call(null,chunk__30743_30751,i__30745_30753);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_30754;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_30754));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_30754,(depth + (1)),state);
} else {
}


var G__30755 = seq__30742_30750;
var G__30756 = chunk__30743_30751;
var G__30757 = count__30744_30752;
var G__30758 = (i__30745_30753 + (1));
seq__30742_30750 = G__30755;
chunk__30743_30751 = G__30756;
count__30744_30752 = G__30757;
i__30745_30753 = G__30758;
continue;
} else {
var temp__5720__auto___30759 = cljs.core.seq.call(null,seq__30742_30750);
if(temp__5720__auto___30759){
var seq__30742_30760__$1 = temp__5720__auto___30759;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30742_30760__$1)){
var c__4550__auto___30761 = cljs.core.chunk_first.call(null,seq__30742_30760__$1);
var G__30762 = cljs.core.chunk_rest.call(null,seq__30742_30760__$1);
var G__30763 = c__4550__auto___30761;
var G__30764 = cljs.core.count.call(null,c__4550__auto___30761);
var G__30765 = (0);
seq__30742_30750 = G__30762;
chunk__30743_30751 = G__30763;
count__30744_30752 = G__30764;
i__30745_30753 = G__30765;
continue;
} else {
var dep_30766 = cljs.core.first.call(null,seq__30742_30760__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_30766;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_30766));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_30766,(depth + (1)),state);
} else {
}


var G__30767 = cljs.core.next.call(null,seq__30742_30760__$1);
var G__30768 = null;
var G__30769 = (0);
var G__30770 = (0);
seq__30742_30750 = G__30767;
chunk__30743_30751 = G__30768;
count__30744_30752 = G__30769;
i__30745_30753 = G__30770;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__30746){
var vec__30747 = p__30746;
var seq__30748 = cljs.core.seq.call(null,vec__30747);
var first__30749 = cljs.core.first.call(null,seq__30748);
var seq__30748__$1 = cljs.core.next.call(null,seq__30748);
var x = first__30749;
var xs = seq__30748__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__30747,seq__30748,first__30749,seq__30748__$1,x,xs,get_deps__$1){
return (function (p1__30733_SHARP_){
return clojure.set.difference.call(null,p1__30733_SHARP_,x);
});})(vec__30747,seq__30748,first__30749,seq__30748__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__30771 = cljs.core.seq.call(null,provides);
var chunk__30772 = null;
var count__30773 = (0);
var i__30774 = (0);
while(true){
if((i__30774 < count__30773)){
var prov = cljs.core._nth.call(null,chunk__30772,i__30774);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30783_30791 = cljs.core.seq.call(null,requires);
var chunk__30784_30792 = null;
var count__30785_30793 = (0);
var i__30786_30794 = (0);
while(true){
if((i__30786_30794 < count__30785_30793)){
var req_30795 = cljs.core._nth.call(null,chunk__30784_30792,i__30786_30794);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30795,prov);


var G__30796 = seq__30783_30791;
var G__30797 = chunk__30784_30792;
var G__30798 = count__30785_30793;
var G__30799 = (i__30786_30794 + (1));
seq__30783_30791 = G__30796;
chunk__30784_30792 = G__30797;
count__30785_30793 = G__30798;
i__30786_30794 = G__30799;
continue;
} else {
var temp__5720__auto___30800 = cljs.core.seq.call(null,seq__30783_30791);
if(temp__5720__auto___30800){
var seq__30783_30801__$1 = temp__5720__auto___30800;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30783_30801__$1)){
var c__4550__auto___30802 = cljs.core.chunk_first.call(null,seq__30783_30801__$1);
var G__30803 = cljs.core.chunk_rest.call(null,seq__30783_30801__$1);
var G__30804 = c__4550__auto___30802;
var G__30805 = cljs.core.count.call(null,c__4550__auto___30802);
var G__30806 = (0);
seq__30783_30791 = G__30803;
chunk__30784_30792 = G__30804;
count__30785_30793 = G__30805;
i__30786_30794 = G__30806;
continue;
} else {
var req_30807 = cljs.core.first.call(null,seq__30783_30801__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30807,prov);


var G__30808 = cljs.core.next.call(null,seq__30783_30801__$1);
var G__30809 = null;
var G__30810 = (0);
var G__30811 = (0);
seq__30783_30791 = G__30808;
chunk__30784_30792 = G__30809;
count__30785_30793 = G__30810;
i__30786_30794 = G__30811;
continue;
}
} else {
}
}
break;
}


var G__30812 = seq__30771;
var G__30813 = chunk__30772;
var G__30814 = count__30773;
var G__30815 = (i__30774 + (1));
seq__30771 = G__30812;
chunk__30772 = G__30813;
count__30773 = G__30814;
i__30774 = G__30815;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__30771);
if(temp__5720__auto__){
var seq__30771__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30771__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__30771__$1);
var G__30816 = cljs.core.chunk_rest.call(null,seq__30771__$1);
var G__30817 = c__4550__auto__;
var G__30818 = cljs.core.count.call(null,c__4550__auto__);
var G__30819 = (0);
seq__30771 = G__30816;
chunk__30772 = G__30817;
count__30773 = G__30818;
i__30774 = G__30819;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30771__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30787_30820 = cljs.core.seq.call(null,requires);
var chunk__30788_30821 = null;
var count__30789_30822 = (0);
var i__30790_30823 = (0);
while(true){
if((i__30790_30823 < count__30789_30822)){
var req_30824 = cljs.core._nth.call(null,chunk__30788_30821,i__30790_30823);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30824,prov);


var G__30825 = seq__30787_30820;
var G__30826 = chunk__30788_30821;
var G__30827 = count__30789_30822;
var G__30828 = (i__30790_30823 + (1));
seq__30787_30820 = G__30825;
chunk__30788_30821 = G__30826;
count__30789_30822 = G__30827;
i__30790_30823 = G__30828;
continue;
} else {
var temp__5720__auto___30829__$1 = cljs.core.seq.call(null,seq__30787_30820);
if(temp__5720__auto___30829__$1){
var seq__30787_30830__$1 = temp__5720__auto___30829__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30787_30830__$1)){
var c__4550__auto___30831 = cljs.core.chunk_first.call(null,seq__30787_30830__$1);
var G__30832 = cljs.core.chunk_rest.call(null,seq__30787_30830__$1);
var G__30833 = c__4550__auto___30831;
var G__30834 = cljs.core.count.call(null,c__4550__auto___30831);
var G__30835 = (0);
seq__30787_30820 = G__30832;
chunk__30788_30821 = G__30833;
count__30789_30822 = G__30834;
i__30790_30823 = G__30835;
continue;
} else {
var req_30836 = cljs.core.first.call(null,seq__30787_30830__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30836,prov);


var G__30837 = cljs.core.next.call(null,seq__30787_30830__$1);
var G__30838 = null;
var G__30839 = (0);
var G__30840 = (0);
seq__30787_30820 = G__30837;
chunk__30788_30821 = G__30838;
count__30789_30822 = G__30839;
i__30790_30823 = G__30840;
continue;
}
} else {
}
}
break;
}


var G__30841 = cljs.core.next.call(null,seq__30771__$1);
var G__30842 = null;
var G__30843 = (0);
var G__30844 = (0);
seq__30771 = G__30841;
chunk__30772 = G__30842;
count__30773 = G__30843;
i__30774 = G__30844;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__30845_30849 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30846_30850 = null;
var count__30847_30851 = (0);
var i__30848_30852 = (0);
while(true){
if((i__30848_30852 < count__30847_30851)){
var ns_30853 = cljs.core._nth.call(null,chunk__30846_30850,i__30848_30852);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30853);


var G__30854 = seq__30845_30849;
var G__30855 = chunk__30846_30850;
var G__30856 = count__30847_30851;
var G__30857 = (i__30848_30852 + (1));
seq__30845_30849 = G__30854;
chunk__30846_30850 = G__30855;
count__30847_30851 = G__30856;
i__30848_30852 = G__30857;
continue;
} else {
var temp__5720__auto___30858 = cljs.core.seq.call(null,seq__30845_30849);
if(temp__5720__auto___30858){
var seq__30845_30859__$1 = temp__5720__auto___30858;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30845_30859__$1)){
var c__4550__auto___30860 = cljs.core.chunk_first.call(null,seq__30845_30859__$1);
var G__30861 = cljs.core.chunk_rest.call(null,seq__30845_30859__$1);
var G__30862 = c__4550__auto___30860;
var G__30863 = cljs.core.count.call(null,c__4550__auto___30860);
var G__30864 = (0);
seq__30845_30849 = G__30861;
chunk__30846_30850 = G__30862;
count__30847_30851 = G__30863;
i__30848_30852 = G__30864;
continue;
} else {
var ns_30865 = cljs.core.first.call(null,seq__30845_30859__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30865);


var G__30866 = cljs.core.next.call(null,seq__30845_30859__$1);
var G__30867 = null;
var G__30868 = (0);
var G__30869 = (0);
seq__30845_30849 = G__30866;
chunk__30846_30850 = G__30867;
count__30847_30851 = G__30868;
i__30848_30852 = G__30869;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4131__auto__ = goog.require__;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__30870__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30870 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30871__i = 0, G__30871__a = new Array(arguments.length -  0);
while (G__30871__i < G__30871__a.length) {G__30871__a[G__30871__i] = arguments[G__30871__i + 0]; ++G__30871__i;}
  args = new cljs.core.IndexedSeq(G__30871__a,0,null);
} 
return G__30870__delegate.call(this,args);};
G__30870.cljs$lang$maxFixedArity = 0;
G__30870.cljs$lang$applyTo = (function (arglist__30872){
var args = cljs.core.seq(arglist__30872);
return G__30870__delegate(args);
});
G__30870.cljs$core$IFn$_invoke$arity$variadic = G__30870__delegate;
return G__30870;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__30873_SHARP_,p2__30874_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30873_SHARP_)),p2__30874_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__30875_SHARP_,p2__30876_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30875_SHARP_),p2__30876_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__30877 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__30877.addCallback(((function (G__30877){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__30877))
);

G__30877.addErrback(((function (G__30877){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__30877))
);

return G__30877;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e30878){if((e30878 instanceof Error)){
var e = e30878;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30878;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e30879){if((e30879 instanceof Error)){
var e = e30879;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30879;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30880 = cljs.core._EQ_;
var expr__30881 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30880.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30881))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__30880.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30881))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__30880.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__30881))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__30880,expr__30881){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__30880,expr__30881))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30883,callback){
var map__30884 = p__30883;
var map__30884__$1 = (((((!((map__30884 == null))))?(((((map__30884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30884):map__30884);
var file_msg = map__30884__$1;
var request_url = cljs.core.get.call(null,map__30884__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__30884,map__30884__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30884,map__30884__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__25046__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25046__auto__){
return (function (){
var f__25047__auto__ = (function (){var switch__22049__auto__ = ((function (c__25046__auto__){
return (function (state_30922){
var state_val_30923 = (state_30922[(1)]);
if((state_val_30923 === (7))){
var inst_30918 = (state_30922[(2)]);
var state_30922__$1 = state_30922;
var statearr_30924_30950 = state_30922__$1;
(statearr_30924_30950[(2)] = inst_30918);

(statearr_30924_30950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (1))){
var state_30922__$1 = state_30922;
var statearr_30925_30951 = state_30922__$1;
(statearr_30925_30951[(2)] = null);

(statearr_30925_30951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (4))){
var inst_30888 = (state_30922[(7)]);
var inst_30888__$1 = (state_30922[(2)]);
var state_30922__$1 = (function (){var statearr_30926 = state_30922;
(statearr_30926[(7)] = inst_30888__$1);

return statearr_30926;
})();
if(cljs.core.truth_(inst_30888__$1)){
var statearr_30927_30952 = state_30922__$1;
(statearr_30927_30952[(1)] = (5));

} else {
var statearr_30928_30953 = state_30922__$1;
(statearr_30928_30953[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (15))){
var inst_30901 = (state_30922[(8)]);
var inst_30903 = (state_30922[(9)]);
var inst_30905 = inst_30903.call(null,inst_30901);
var state_30922__$1 = state_30922;
var statearr_30929_30954 = state_30922__$1;
(statearr_30929_30954[(2)] = inst_30905);

(statearr_30929_30954[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (13))){
var inst_30912 = (state_30922[(2)]);
var state_30922__$1 = state_30922;
var statearr_30930_30955 = state_30922__$1;
(statearr_30930_30955[(2)] = inst_30912);

(statearr_30930_30955[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (6))){
var state_30922__$1 = state_30922;
var statearr_30931_30956 = state_30922__$1;
(statearr_30931_30956[(2)] = null);

(statearr_30931_30956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (17))){
var inst_30909 = (state_30922[(2)]);
var state_30922__$1 = state_30922;
var statearr_30932_30957 = state_30922__$1;
(statearr_30932_30957[(2)] = inst_30909);

(statearr_30932_30957[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (3))){
var inst_30920 = (state_30922[(2)]);
var state_30922__$1 = state_30922;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30922__$1,inst_30920);
} else {
if((state_val_30923 === (12))){
var state_30922__$1 = state_30922;
var statearr_30933_30958 = state_30922__$1;
(statearr_30933_30958[(2)] = null);

(statearr_30933_30958[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (2))){
var state_30922__$1 = state_30922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30922__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30923 === (11))){
var inst_30893 = (state_30922[(10)]);
var inst_30899 = figwheel.client.file_reloading.blocking_load.call(null,inst_30893);
var state_30922__$1 = state_30922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30922__$1,(14),inst_30899);
} else {
if((state_val_30923 === (9))){
var inst_30893 = (state_30922[(10)]);
var state_30922__$1 = state_30922;
if(cljs.core.truth_(inst_30893)){
var statearr_30934_30959 = state_30922__$1;
(statearr_30934_30959[(1)] = (11));

} else {
var statearr_30935_30960 = state_30922__$1;
(statearr_30935_30960[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (5))){
var inst_30888 = (state_30922[(7)]);
var inst_30894 = (state_30922[(11)]);
var inst_30893 = cljs.core.nth.call(null,inst_30888,(0),null);
var inst_30894__$1 = cljs.core.nth.call(null,inst_30888,(1),null);
var state_30922__$1 = (function (){var statearr_30936 = state_30922;
(statearr_30936[(10)] = inst_30893);

(statearr_30936[(11)] = inst_30894__$1);

return statearr_30936;
})();
if(cljs.core.truth_(inst_30894__$1)){
var statearr_30937_30961 = state_30922__$1;
(statearr_30937_30961[(1)] = (8));

} else {
var statearr_30938_30962 = state_30922__$1;
(statearr_30938_30962[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (14))){
var inst_30893 = (state_30922[(10)]);
var inst_30903 = (state_30922[(9)]);
var inst_30901 = (state_30922[(2)]);
var inst_30902 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30903__$1 = cljs.core.get.call(null,inst_30902,inst_30893);
var state_30922__$1 = (function (){var statearr_30939 = state_30922;
(statearr_30939[(8)] = inst_30901);

(statearr_30939[(9)] = inst_30903__$1);

return statearr_30939;
})();
if(cljs.core.truth_(inst_30903__$1)){
var statearr_30940_30963 = state_30922__$1;
(statearr_30940_30963[(1)] = (15));

} else {
var statearr_30941_30964 = state_30922__$1;
(statearr_30941_30964[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (16))){
var inst_30901 = (state_30922[(8)]);
var inst_30907 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30901);
var state_30922__$1 = state_30922;
var statearr_30942_30965 = state_30922__$1;
(statearr_30942_30965[(2)] = inst_30907);

(statearr_30942_30965[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (10))){
var inst_30914 = (state_30922[(2)]);
var state_30922__$1 = (function (){var statearr_30943 = state_30922;
(statearr_30943[(12)] = inst_30914);

return statearr_30943;
})();
var statearr_30944_30966 = state_30922__$1;
(statearr_30944_30966[(2)] = null);

(statearr_30944_30966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (8))){
var inst_30894 = (state_30922[(11)]);
var inst_30896 = eval(inst_30894);
var state_30922__$1 = state_30922;
var statearr_30945_30967 = state_30922__$1;
(statearr_30945_30967[(2)] = inst_30896);

(statearr_30945_30967[(1)] = (10));


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
});})(c__25046__auto__))
;
return ((function (switch__22049__auto__,c__25046__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__22050__auto__ = null;
var figwheel$client$file_reloading$state_machine__22050__auto____0 = (function (){
var statearr_30946 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30946[(0)] = figwheel$client$file_reloading$state_machine__22050__auto__);

(statearr_30946[(1)] = (1));

return statearr_30946;
});
var figwheel$client$file_reloading$state_machine__22050__auto____1 = (function (state_30922){
while(true){
var ret_value__22051__auto__ = (function (){try{while(true){
var result__22052__auto__ = switch__22049__auto__.call(null,state_30922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22052__auto__;
}
break;
}
}catch (e30947){if((e30947 instanceof Object)){
var ex__22053__auto__ = e30947;
var statearr_30948_30968 = state_30922;
(statearr_30948_30968[(5)] = ex__22053__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30947;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30969 = state_30922;
state_30922 = G__30969;
continue;
} else {
return ret_value__22051__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__22050__auto__ = function(state_30922){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__22050__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__22050__auto____1.call(this,state_30922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__22050__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__22050__auto____0;
figwheel$client$file_reloading$state_machine__22050__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__22050__auto____1;
return figwheel$client$file_reloading$state_machine__22050__auto__;
})()
;})(switch__22049__auto__,c__25046__auto__))
})();
var state__25048__auto__ = (function (){var statearr_30949 = f__25047__auto__.call(null);
(statearr_30949[(6)] = c__25046__auto__);

return statearr_30949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25048__auto__);
});})(c__25046__auto__))
);

return c__25046__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__30971 = arguments.length;
switch (G__30971) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30973,callback){
var map__30974 = p__30973;
var map__30974__$1 = (((((!((map__30974 == null))))?(((((map__30974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30974):map__30974);
var file_msg = map__30974__$1;
var namespace = cljs.core.get.call(null,map__30974__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__30974,map__30974__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__30974,map__30974__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__30976){
var map__30977 = p__30976;
var map__30977__$1 = (((((!((map__30977 == null))))?(((((map__30977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30977.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30977):map__30977);
var file_msg = map__30977__$1;
var namespace = cljs.core.get.call(null,map__30977__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30979){
var map__30980 = p__30979;
var map__30980__$1 = (((((!((map__30980 == null))))?(((((map__30980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30980.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30980):map__30980);
var file_msg = map__30980__$1;
var namespace = cljs.core.get.call(null,map__30980__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4120__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4120__auto__){
var or__4131__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4120__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30982,callback){
var map__30983 = p__30982;
var map__30983__$1 = (((((!((map__30983 == null))))?(((((map__30983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30983.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30983):map__30983);
var file_msg = map__30983__$1;
var request_url = cljs.core.get.call(null,map__30983__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30983__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__25046__auto___31033 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25046__auto___31033,out){
return (function (){
var f__25047__auto__ = (function (){var switch__22049__auto__ = ((function (c__25046__auto___31033,out){
return (function (state_31018){
var state_val_31019 = (state_31018[(1)]);
if((state_val_31019 === (1))){
var inst_30992 = cljs.core.seq.call(null,files);
var inst_30993 = cljs.core.first.call(null,inst_30992);
var inst_30994 = cljs.core.next.call(null,inst_30992);
var inst_30995 = files;
var state_31018__$1 = (function (){var statearr_31020 = state_31018;
(statearr_31020[(7)] = inst_30994);

(statearr_31020[(8)] = inst_30995);

(statearr_31020[(9)] = inst_30993);

return statearr_31020;
})();
var statearr_31021_31034 = state_31018__$1;
(statearr_31021_31034[(2)] = null);

(statearr_31021_31034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (2))){
var inst_30995 = (state_31018[(8)]);
var inst_31001 = (state_31018[(10)]);
var inst_31000 = cljs.core.seq.call(null,inst_30995);
var inst_31001__$1 = cljs.core.first.call(null,inst_31000);
var inst_31002 = cljs.core.next.call(null,inst_31000);
var inst_31003 = (inst_31001__$1 == null);
var inst_31004 = cljs.core.not.call(null,inst_31003);
var state_31018__$1 = (function (){var statearr_31022 = state_31018;
(statearr_31022[(11)] = inst_31002);

(statearr_31022[(10)] = inst_31001__$1);

return statearr_31022;
})();
if(inst_31004){
var statearr_31023_31035 = state_31018__$1;
(statearr_31023_31035[(1)] = (4));

} else {
var statearr_31024_31036 = state_31018__$1;
(statearr_31024_31036[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (3))){
var inst_31016 = (state_31018[(2)]);
var state_31018__$1 = state_31018;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31018__$1,inst_31016);
} else {
if((state_val_31019 === (4))){
var inst_31001 = (state_31018[(10)]);
var inst_31006 = figwheel.client.file_reloading.reload_js_file.call(null,inst_31001);
var state_31018__$1 = state_31018;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31018__$1,(7),inst_31006);
} else {
if((state_val_31019 === (5))){
var inst_31012 = cljs.core.async.close_BANG_.call(null,out);
var state_31018__$1 = state_31018;
var statearr_31025_31037 = state_31018__$1;
(statearr_31025_31037[(2)] = inst_31012);

(statearr_31025_31037[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (6))){
var inst_31014 = (state_31018[(2)]);
var state_31018__$1 = state_31018;
var statearr_31026_31038 = state_31018__$1;
(statearr_31026_31038[(2)] = inst_31014);

(statearr_31026_31038[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (7))){
var inst_31002 = (state_31018[(11)]);
var inst_31008 = (state_31018[(2)]);
var inst_31009 = cljs.core.async.put_BANG_.call(null,out,inst_31008);
var inst_30995 = inst_31002;
var state_31018__$1 = (function (){var statearr_31027 = state_31018;
(statearr_31027[(8)] = inst_30995);

(statearr_31027[(12)] = inst_31009);

return statearr_31027;
})();
var statearr_31028_31039 = state_31018__$1;
(statearr_31028_31039[(2)] = null);

(statearr_31028_31039[(1)] = (2));


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
});})(c__25046__auto___31033,out))
;
return ((function (switch__22049__auto__,c__25046__auto___31033,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22050__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22050__auto____0 = (function (){
var statearr_31029 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31029[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22050__auto__);

(statearr_31029[(1)] = (1));

return statearr_31029;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22050__auto____1 = (function (state_31018){
while(true){
var ret_value__22051__auto__ = (function (){try{while(true){
var result__22052__auto__ = switch__22049__auto__.call(null,state_31018);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22052__auto__;
}
break;
}
}catch (e31030){if((e31030 instanceof Object)){
var ex__22053__auto__ = e31030;
var statearr_31031_31040 = state_31018;
(statearr_31031_31040[(5)] = ex__22053__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31018);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31041 = state_31018;
state_31018 = G__31041;
continue;
} else {
return ret_value__22051__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22050__auto__ = function(state_31018){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22050__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22050__auto____1.call(this,state_31018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22050__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22050__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22050__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22050__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22050__auto__;
})()
;})(switch__22049__auto__,c__25046__auto___31033,out))
})();
var state__25048__auto__ = (function (){var statearr_31032 = f__25047__auto__.call(null);
(statearr_31032[(6)] = c__25046__auto___31033);

return statearr_31032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25048__auto__);
});})(c__25046__auto___31033,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__31042,opts){
var map__31043 = p__31042;
var map__31043__$1 = (((((!((map__31043 == null))))?(((((map__31043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31043):map__31043);
var eval_body = cljs.core.get.call(null,map__31043__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__31043__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4120__auto__ = eval_body;
if(cljs.core.truth_(and__4120__auto__)){
return typeof eval_body === 'string';
} else {
return and__4120__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e31045){var e = e31045;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__31046_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31046_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5718__auto__)){
var file_msg = temp__5718__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__31047){
var vec__31048 = p__31047;
var k = cljs.core.nth.call(null,vec__31048,(0),null);
var v = cljs.core.nth.call(null,vec__31048,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__31051){
var vec__31052 = p__31051;
var k = cljs.core.nth.call(null,vec__31052,(0),null);
var v = cljs.core.nth.call(null,vec__31052,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__31058,p__31059){
var map__31060 = p__31058;
var map__31060__$1 = (((((!((map__31060 == null))))?(((((map__31060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31060):map__31060);
var opts = map__31060__$1;
var before_jsload = cljs.core.get.call(null,map__31060__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__31060__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__31060__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__31061 = p__31059;
var map__31061__$1 = (((((!((map__31061 == null))))?(((((map__31061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31061.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31061):map__31061);
var msg = map__31061__$1;
var files = cljs.core.get.call(null,map__31061__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__31061__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__31061__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__25046__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25046__auto__,map__31060,map__31060__$1,opts,before_jsload,on_jsload,reload_dependents,map__31061,map__31061__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__25047__auto__ = (function (){var switch__22049__auto__ = ((function (c__25046__auto__,map__31060,map__31060__$1,opts,before_jsload,on_jsload,reload_dependents,map__31061,map__31061__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_31215){
var state_val_31216 = (state_31215[(1)]);
if((state_val_31216 === (7))){
var inst_31078 = (state_31215[(7)]);
var inst_31076 = (state_31215[(8)]);
var inst_31077 = (state_31215[(9)]);
var inst_31075 = (state_31215[(10)]);
var inst_31083 = cljs.core._nth.call(null,inst_31076,inst_31078);
var inst_31084 = figwheel.client.file_reloading.eval_body.call(null,inst_31083,opts);
var inst_31085 = (inst_31078 + (1));
var tmp31217 = inst_31076;
var tmp31218 = inst_31077;
var tmp31219 = inst_31075;
var inst_31075__$1 = tmp31219;
var inst_31076__$1 = tmp31217;
var inst_31077__$1 = tmp31218;
var inst_31078__$1 = inst_31085;
var state_31215__$1 = (function (){var statearr_31220 = state_31215;
(statearr_31220[(7)] = inst_31078__$1);

(statearr_31220[(11)] = inst_31084);

(statearr_31220[(8)] = inst_31076__$1);

(statearr_31220[(9)] = inst_31077__$1);

(statearr_31220[(10)] = inst_31075__$1);

return statearr_31220;
})();
var statearr_31221_31304 = state_31215__$1;
(statearr_31221_31304[(2)] = null);

(statearr_31221_31304[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (20))){
var inst_31118 = (state_31215[(12)]);
var inst_31126 = figwheel.client.file_reloading.sort_files.call(null,inst_31118);
var state_31215__$1 = state_31215;
var statearr_31222_31305 = state_31215__$1;
(statearr_31222_31305[(2)] = inst_31126);

(statearr_31222_31305[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (27))){
var state_31215__$1 = state_31215;
var statearr_31223_31306 = state_31215__$1;
(statearr_31223_31306[(2)] = null);

(statearr_31223_31306[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (1))){
var inst_31067 = (state_31215[(13)]);
var inst_31064 = before_jsload.call(null,files);
var inst_31065 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_31066 = (function (){return ((function (inst_31067,inst_31064,inst_31065,state_val_31216,c__25046__auto__,map__31060,map__31060__$1,opts,before_jsload,on_jsload,reload_dependents,map__31061,map__31061__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31055_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31055_SHARP_);
});
;})(inst_31067,inst_31064,inst_31065,state_val_31216,c__25046__auto__,map__31060,map__31060__$1,opts,before_jsload,on_jsload,reload_dependents,map__31061,map__31061__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31067__$1 = cljs.core.filter.call(null,inst_31066,files);
var inst_31068 = cljs.core.not_empty.call(null,inst_31067__$1);
var state_31215__$1 = (function (){var statearr_31224 = state_31215;
(statearr_31224[(14)] = inst_31064);

(statearr_31224[(13)] = inst_31067__$1);

(statearr_31224[(15)] = inst_31065);

return statearr_31224;
})();
if(cljs.core.truth_(inst_31068)){
var statearr_31225_31307 = state_31215__$1;
(statearr_31225_31307[(1)] = (2));

} else {
var statearr_31226_31308 = state_31215__$1;
(statearr_31226_31308[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (24))){
var state_31215__$1 = state_31215;
var statearr_31227_31309 = state_31215__$1;
(statearr_31227_31309[(2)] = null);

(statearr_31227_31309[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (39))){
var inst_31168 = (state_31215[(16)]);
var state_31215__$1 = state_31215;
var statearr_31228_31310 = state_31215__$1;
(statearr_31228_31310[(2)] = inst_31168);

(statearr_31228_31310[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (46))){
var inst_31210 = (state_31215[(2)]);
var state_31215__$1 = state_31215;
var statearr_31229_31311 = state_31215__$1;
(statearr_31229_31311[(2)] = inst_31210);

(statearr_31229_31311[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (4))){
var inst_31112 = (state_31215[(2)]);
var inst_31113 = cljs.core.List.EMPTY;
var inst_31114 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_31113);
var inst_31115 = (function (){return ((function (inst_31112,inst_31113,inst_31114,state_val_31216,c__25046__auto__,map__31060,map__31060__$1,opts,before_jsload,on_jsload,reload_dependents,map__31061,map__31061__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31056_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31056_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31056_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__31056_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_31112,inst_31113,inst_31114,state_val_31216,c__25046__auto__,map__31060,map__31060__$1,opts,before_jsload,on_jsload,reload_dependents,map__31061,map__31061__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31116 = cljs.core.filter.call(null,inst_31115,files);
var inst_31117 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_31118 = cljs.core.concat.call(null,inst_31116,inst_31117);
var state_31215__$1 = (function (){var statearr_31230 = state_31215;
(statearr_31230[(12)] = inst_31118);

(statearr_31230[(17)] = inst_31112);

(statearr_31230[(18)] = inst_31114);

return statearr_31230;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_31231_31312 = state_31215__$1;
(statearr_31231_31312[(1)] = (16));

} else {
var statearr_31232_31313 = state_31215__$1;
(statearr_31232_31313[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (15))){
var inst_31102 = (state_31215[(2)]);
var state_31215__$1 = state_31215;
var statearr_31233_31314 = state_31215__$1;
(statearr_31233_31314[(2)] = inst_31102);

(statearr_31233_31314[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (21))){
var inst_31128 = (state_31215[(19)]);
var inst_31128__$1 = (state_31215[(2)]);
var inst_31129 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_31128__$1);
var state_31215__$1 = (function (){var statearr_31234 = state_31215;
(statearr_31234[(19)] = inst_31128__$1);

return statearr_31234;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31215__$1,(22),inst_31129);
} else {
if((state_val_31216 === (31))){
var inst_31213 = (state_31215[(2)]);
var state_31215__$1 = state_31215;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31215__$1,inst_31213);
} else {
if((state_val_31216 === (32))){
var inst_31168 = (state_31215[(16)]);
var inst_31173 = inst_31168.cljs$lang$protocol_mask$partition0$;
var inst_31174 = (inst_31173 & (64));
var inst_31175 = inst_31168.cljs$core$ISeq$;
var inst_31176 = (cljs.core.PROTOCOL_SENTINEL === inst_31175);
var inst_31177 = ((inst_31174) || (inst_31176));
var state_31215__$1 = state_31215;
if(cljs.core.truth_(inst_31177)){
var statearr_31235_31315 = state_31215__$1;
(statearr_31235_31315[(1)] = (35));

} else {
var statearr_31236_31316 = state_31215__$1;
(statearr_31236_31316[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (40))){
var inst_31190 = (state_31215[(20)]);
var inst_31189 = (state_31215[(2)]);
var inst_31190__$1 = cljs.core.get.call(null,inst_31189,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_31191 = cljs.core.get.call(null,inst_31189,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_31192 = cljs.core.not_empty.call(null,inst_31190__$1);
var state_31215__$1 = (function (){var statearr_31237 = state_31215;
(statearr_31237[(20)] = inst_31190__$1);

(statearr_31237[(21)] = inst_31191);

return statearr_31237;
})();
if(cljs.core.truth_(inst_31192)){
var statearr_31238_31317 = state_31215__$1;
(statearr_31238_31317[(1)] = (41));

} else {
var statearr_31239_31318 = state_31215__$1;
(statearr_31239_31318[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (33))){
var state_31215__$1 = state_31215;
var statearr_31240_31319 = state_31215__$1;
(statearr_31240_31319[(2)] = false);

(statearr_31240_31319[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (13))){
var inst_31088 = (state_31215[(22)]);
var inst_31092 = cljs.core.chunk_first.call(null,inst_31088);
var inst_31093 = cljs.core.chunk_rest.call(null,inst_31088);
var inst_31094 = cljs.core.count.call(null,inst_31092);
var inst_31075 = inst_31093;
var inst_31076 = inst_31092;
var inst_31077 = inst_31094;
var inst_31078 = (0);
var state_31215__$1 = (function (){var statearr_31241 = state_31215;
(statearr_31241[(7)] = inst_31078);

(statearr_31241[(8)] = inst_31076);

(statearr_31241[(9)] = inst_31077);

(statearr_31241[(10)] = inst_31075);

return statearr_31241;
})();
var statearr_31242_31320 = state_31215__$1;
(statearr_31242_31320[(2)] = null);

(statearr_31242_31320[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (22))){
var inst_31128 = (state_31215[(19)]);
var inst_31136 = (state_31215[(23)]);
var inst_31132 = (state_31215[(24)]);
var inst_31131 = (state_31215[(25)]);
var inst_31131__$1 = (state_31215[(2)]);
var inst_31132__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31131__$1);
var inst_31133 = (function (){var all_files = inst_31128;
var res_SINGLEQUOTE_ = inst_31131__$1;
var res = inst_31132__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_31128,inst_31136,inst_31132,inst_31131,inst_31131__$1,inst_31132__$1,state_val_31216,c__25046__auto__,map__31060,map__31060__$1,opts,before_jsload,on_jsload,reload_dependents,map__31061,map__31061__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31057_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__31057_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_31128,inst_31136,inst_31132,inst_31131,inst_31131__$1,inst_31132__$1,state_val_31216,c__25046__auto__,map__31060,map__31060__$1,opts,before_jsload,on_jsload,reload_dependents,map__31061,map__31061__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31134 = cljs.core.filter.call(null,inst_31133,inst_31131__$1);
var inst_31135 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_31136__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31135);
var inst_31137 = cljs.core.not_empty.call(null,inst_31136__$1);
var state_31215__$1 = (function (){var statearr_31243 = state_31215;
(statearr_31243[(23)] = inst_31136__$1);

(statearr_31243[(24)] = inst_31132__$1);

(statearr_31243[(26)] = inst_31134);

(statearr_31243[(25)] = inst_31131__$1);

return statearr_31243;
})();
if(cljs.core.truth_(inst_31137)){
var statearr_31244_31321 = state_31215__$1;
(statearr_31244_31321[(1)] = (23));

} else {
var statearr_31245_31322 = state_31215__$1;
(statearr_31245_31322[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (36))){
var state_31215__$1 = state_31215;
var statearr_31246_31323 = state_31215__$1;
(statearr_31246_31323[(2)] = false);

(statearr_31246_31323[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (41))){
var inst_31190 = (state_31215[(20)]);
var inst_31194 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_31195 = cljs.core.map.call(null,inst_31194,inst_31190);
var inst_31196 = cljs.core.pr_str.call(null,inst_31195);
var inst_31197 = ["figwheel-no-load meta-data: ",inst_31196].join('');
var inst_31198 = figwheel.client.utils.log.call(null,inst_31197);
var state_31215__$1 = state_31215;
var statearr_31247_31324 = state_31215__$1;
(statearr_31247_31324[(2)] = inst_31198);

(statearr_31247_31324[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (43))){
var inst_31191 = (state_31215[(21)]);
var inst_31201 = (state_31215[(2)]);
var inst_31202 = cljs.core.not_empty.call(null,inst_31191);
var state_31215__$1 = (function (){var statearr_31248 = state_31215;
(statearr_31248[(27)] = inst_31201);

return statearr_31248;
})();
if(cljs.core.truth_(inst_31202)){
var statearr_31249_31325 = state_31215__$1;
(statearr_31249_31325[(1)] = (44));

} else {
var statearr_31250_31326 = state_31215__$1;
(statearr_31250_31326[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (29))){
var inst_31128 = (state_31215[(19)]);
var inst_31136 = (state_31215[(23)]);
var inst_31132 = (state_31215[(24)]);
var inst_31134 = (state_31215[(26)]);
var inst_31168 = (state_31215[(16)]);
var inst_31131 = (state_31215[(25)]);
var inst_31164 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_31167 = (function (){var all_files = inst_31128;
var res_SINGLEQUOTE_ = inst_31131;
var res = inst_31132;
var files_not_loaded = inst_31134;
var dependencies_that_loaded = inst_31136;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31128,inst_31136,inst_31132,inst_31134,inst_31168,inst_31131,inst_31164,state_val_31216,c__25046__auto__,map__31060,map__31060__$1,opts,before_jsload,on_jsload,reload_dependents,map__31061,map__31061__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31166){
var map__31251 = p__31166;
var map__31251__$1 = (((((!((map__31251 == null))))?(((((map__31251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31251):map__31251);
var namespace = cljs.core.get.call(null,map__31251__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31128,inst_31136,inst_31132,inst_31134,inst_31168,inst_31131,inst_31164,state_val_31216,c__25046__auto__,map__31060,map__31060__$1,opts,before_jsload,on_jsload,reload_dependents,map__31061,map__31061__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31168__$1 = cljs.core.group_by.call(null,inst_31167,inst_31134);
var inst_31170 = (inst_31168__$1 == null);
var inst_31171 = cljs.core.not.call(null,inst_31170);
var state_31215__$1 = (function (){var statearr_31253 = state_31215;
(statearr_31253[(16)] = inst_31168__$1);

(statearr_31253[(28)] = inst_31164);

return statearr_31253;
})();
if(inst_31171){
var statearr_31254_31327 = state_31215__$1;
(statearr_31254_31327[(1)] = (32));

} else {
var statearr_31255_31328 = state_31215__$1;
(statearr_31255_31328[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (44))){
var inst_31191 = (state_31215[(21)]);
var inst_31204 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31191);
var inst_31205 = cljs.core.pr_str.call(null,inst_31204);
var inst_31206 = ["not required: ",inst_31205].join('');
var inst_31207 = figwheel.client.utils.log.call(null,inst_31206);
var state_31215__$1 = state_31215;
var statearr_31256_31329 = state_31215__$1;
(statearr_31256_31329[(2)] = inst_31207);

(statearr_31256_31329[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (6))){
var inst_31109 = (state_31215[(2)]);
var state_31215__$1 = state_31215;
var statearr_31257_31330 = state_31215__$1;
(statearr_31257_31330[(2)] = inst_31109);

(statearr_31257_31330[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (28))){
var inst_31134 = (state_31215[(26)]);
var inst_31161 = (state_31215[(2)]);
var inst_31162 = cljs.core.not_empty.call(null,inst_31134);
var state_31215__$1 = (function (){var statearr_31258 = state_31215;
(statearr_31258[(29)] = inst_31161);

return statearr_31258;
})();
if(cljs.core.truth_(inst_31162)){
var statearr_31259_31331 = state_31215__$1;
(statearr_31259_31331[(1)] = (29));

} else {
var statearr_31260_31332 = state_31215__$1;
(statearr_31260_31332[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (25))){
var inst_31132 = (state_31215[(24)]);
var inst_31148 = (state_31215[(2)]);
var inst_31149 = cljs.core.not_empty.call(null,inst_31132);
var state_31215__$1 = (function (){var statearr_31261 = state_31215;
(statearr_31261[(30)] = inst_31148);

return statearr_31261;
})();
if(cljs.core.truth_(inst_31149)){
var statearr_31262_31333 = state_31215__$1;
(statearr_31262_31333[(1)] = (26));

} else {
var statearr_31263_31334 = state_31215__$1;
(statearr_31263_31334[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (34))){
var inst_31184 = (state_31215[(2)]);
var state_31215__$1 = state_31215;
if(cljs.core.truth_(inst_31184)){
var statearr_31264_31335 = state_31215__$1;
(statearr_31264_31335[(1)] = (38));

} else {
var statearr_31265_31336 = state_31215__$1;
(statearr_31265_31336[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (17))){
var state_31215__$1 = state_31215;
var statearr_31266_31337 = state_31215__$1;
(statearr_31266_31337[(2)] = recompile_dependents);

(statearr_31266_31337[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (3))){
var state_31215__$1 = state_31215;
var statearr_31267_31338 = state_31215__$1;
(statearr_31267_31338[(2)] = null);

(statearr_31267_31338[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (12))){
var inst_31105 = (state_31215[(2)]);
var state_31215__$1 = state_31215;
var statearr_31268_31339 = state_31215__$1;
(statearr_31268_31339[(2)] = inst_31105);

(statearr_31268_31339[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (2))){
var inst_31067 = (state_31215[(13)]);
var inst_31074 = cljs.core.seq.call(null,inst_31067);
var inst_31075 = inst_31074;
var inst_31076 = null;
var inst_31077 = (0);
var inst_31078 = (0);
var state_31215__$1 = (function (){var statearr_31269 = state_31215;
(statearr_31269[(7)] = inst_31078);

(statearr_31269[(8)] = inst_31076);

(statearr_31269[(9)] = inst_31077);

(statearr_31269[(10)] = inst_31075);

return statearr_31269;
})();
var statearr_31270_31340 = state_31215__$1;
(statearr_31270_31340[(2)] = null);

(statearr_31270_31340[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (23))){
var inst_31128 = (state_31215[(19)]);
var inst_31136 = (state_31215[(23)]);
var inst_31132 = (state_31215[(24)]);
var inst_31134 = (state_31215[(26)]);
var inst_31131 = (state_31215[(25)]);
var inst_31139 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_31141 = (function (){var all_files = inst_31128;
var res_SINGLEQUOTE_ = inst_31131;
var res = inst_31132;
var files_not_loaded = inst_31134;
var dependencies_that_loaded = inst_31136;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31128,inst_31136,inst_31132,inst_31134,inst_31131,inst_31139,state_val_31216,c__25046__auto__,map__31060,map__31060__$1,opts,before_jsload,on_jsload,reload_dependents,map__31061,map__31061__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31140){
var map__31271 = p__31140;
var map__31271__$1 = (((((!((map__31271 == null))))?(((((map__31271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31271):map__31271);
var request_url = cljs.core.get.call(null,map__31271__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31128,inst_31136,inst_31132,inst_31134,inst_31131,inst_31139,state_val_31216,c__25046__auto__,map__31060,map__31060__$1,opts,before_jsload,on_jsload,reload_dependents,map__31061,map__31061__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31142 = cljs.core.reverse.call(null,inst_31136);
var inst_31143 = cljs.core.map.call(null,inst_31141,inst_31142);
var inst_31144 = cljs.core.pr_str.call(null,inst_31143);
var inst_31145 = figwheel.client.utils.log.call(null,inst_31144);
var state_31215__$1 = (function (){var statearr_31273 = state_31215;
(statearr_31273[(31)] = inst_31139);

return statearr_31273;
})();
var statearr_31274_31341 = state_31215__$1;
(statearr_31274_31341[(2)] = inst_31145);

(statearr_31274_31341[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (35))){
var state_31215__$1 = state_31215;
var statearr_31275_31342 = state_31215__$1;
(statearr_31275_31342[(2)] = true);

(statearr_31275_31342[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (19))){
var inst_31118 = (state_31215[(12)]);
var inst_31124 = figwheel.client.file_reloading.expand_files.call(null,inst_31118);
var state_31215__$1 = state_31215;
var statearr_31276_31343 = state_31215__$1;
(statearr_31276_31343[(2)] = inst_31124);

(statearr_31276_31343[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (11))){
var state_31215__$1 = state_31215;
var statearr_31277_31344 = state_31215__$1;
(statearr_31277_31344[(2)] = null);

(statearr_31277_31344[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (9))){
var inst_31107 = (state_31215[(2)]);
var state_31215__$1 = state_31215;
var statearr_31278_31345 = state_31215__$1;
(statearr_31278_31345[(2)] = inst_31107);

(statearr_31278_31345[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (5))){
var inst_31078 = (state_31215[(7)]);
var inst_31077 = (state_31215[(9)]);
var inst_31080 = (inst_31078 < inst_31077);
var inst_31081 = inst_31080;
var state_31215__$1 = state_31215;
if(cljs.core.truth_(inst_31081)){
var statearr_31279_31346 = state_31215__$1;
(statearr_31279_31346[(1)] = (7));

} else {
var statearr_31280_31347 = state_31215__$1;
(statearr_31280_31347[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (14))){
var inst_31088 = (state_31215[(22)]);
var inst_31097 = cljs.core.first.call(null,inst_31088);
var inst_31098 = figwheel.client.file_reloading.eval_body.call(null,inst_31097,opts);
var inst_31099 = cljs.core.next.call(null,inst_31088);
var inst_31075 = inst_31099;
var inst_31076 = null;
var inst_31077 = (0);
var inst_31078 = (0);
var state_31215__$1 = (function (){var statearr_31281 = state_31215;
(statearr_31281[(7)] = inst_31078);

(statearr_31281[(8)] = inst_31076);

(statearr_31281[(9)] = inst_31077);

(statearr_31281[(32)] = inst_31098);

(statearr_31281[(10)] = inst_31075);

return statearr_31281;
})();
var statearr_31282_31348 = state_31215__$1;
(statearr_31282_31348[(2)] = null);

(statearr_31282_31348[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (45))){
var state_31215__$1 = state_31215;
var statearr_31283_31349 = state_31215__$1;
(statearr_31283_31349[(2)] = null);

(statearr_31283_31349[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (26))){
var inst_31128 = (state_31215[(19)]);
var inst_31136 = (state_31215[(23)]);
var inst_31132 = (state_31215[(24)]);
var inst_31134 = (state_31215[(26)]);
var inst_31131 = (state_31215[(25)]);
var inst_31151 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_31153 = (function (){var all_files = inst_31128;
var res_SINGLEQUOTE_ = inst_31131;
var res = inst_31132;
var files_not_loaded = inst_31134;
var dependencies_that_loaded = inst_31136;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31128,inst_31136,inst_31132,inst_31134,inst_31131,inst_31151,state_val_31216,c__25046__auto__,map__31060,map__31060__$1,opts,before_jsload,on_jsload,reload_dependents,map__31061,map__31061__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31152){
var map__31284 = p__31152;
var map__31284__$1 = (((((!((map__31284 == null))))?(((((map__31284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31284):map__31284);
var namespace = cljs.core.get.call(null,map__31284__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__31284__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31128,inst_31136,inst_31132,inst_31134,inst_31131,inst_31151,state_val_31216,c__25046__auto__,map__31060,map__31060__$1,opts,before_jsload,on_jsload,reload_dependents,map__31061,map__31061__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31154 = cljs.core.map.call(null,inst_31153,inst_31132);
var inst_31155 = cljs.core.pr_str.call(null,inst_31154);
var inst_31156 = figwheel.client.utils.log.call(null,inst_31155);
var inst_31157 = (function (){var all_files = inst_31128;
var res_SINGLEQUOTE_ = inst_31131;
var res = inst_31132;
var files_not_loaded = inst_31134;
var dependencies_that_loaded = inst_31136;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31128,inst_31136,inst_31132,inst_31134,inst_31131,inst_31151,inst_31153,inst_31154,inst_31155,inst_31156,state_val_31216,c__25046__auto__,map__31060,map__31060__$1,opts,before_jsload,on_jsload,reload_dependents,map__31061,map__31061__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31128,inst_31136,inst_31132,inst_31134,inst_31131,inst_31151,inst_31153,inst_31154,inst_31155,inst_31156,state_val_31216,c__25046__auto__,map__31060,map__31060__$1,opts,before_jsload,on_jsload,reload_dependents,map__31061,map__31061__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31158 = setTimeout(inst_31157,(10));
var state_31215__$1 = (function (){var statearr_31286 = state_31215;
(statearr_31286[(33)] = inst_31151);

(statearr_31286[(34)] = inst_31156);

return statearr_31286;
})();
var statearr_31287_31350 = state_31215__$1;
(statearr_31287_31350[(2)] = inst_31158);

(statearr_31287_31350[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (16))){
var state_31215__$1 = state_31215;
var statearr_31288_31351 = state_31215__$1;
(statearr_31288_31351[(2)] = reload_dependents);

(statearr_31288_31351[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (38))){
var inst_31168 = (state_31215[(16)]);
var inst_31186 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31168);
var state_31215__$1 = state_31215;
var statearr_31289_31352 = state_31215__$1;
(statearr_31289_31352[(2)] = inst_31186);

(statearr_31289_31352[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (30))){
var state_31215__$1 = state_31215;
var statearr_31290_31353 = state_31215__$1;
(statearr_31290_31353[(2)] = null);

(statearr_31290_31353[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (10))){
var inst_31088 = (state_31215[(22)]);
var inst_31090 = cljs.core.chunked_seq_QMARK_.call(null,inst_31088);
var state_31215__$1 = state_31215;
if(inst_31090){
var statearr_31291_31354 = state_31215__$1;
(statearr_31291_31354[(1)] = (13));

} else {
var statearr_31292_31355 = state_31215__$1;
(statearr_31292_31355[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (18))){
var inst_31122 = (state_31215[(2)]);
var state_31215__$1 = state_31215;
if(cljs.core.truth_(inst_31122)){
var statearr_31293_31356 = state_31215__$1;
(statearr_31293_31356[(1)] = (19));

} else {
var statearr_31294_31357 = state_31215__$1;
(statearr_31294_31357[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (42))){
var state_31215__$1 = state_31215;
var statearr_31295_31358 = state_31215__$1;
(statearr_31295_31358[(2)] = null);

(statearr_31295_31358[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (37))){
var inst_31181 = (state_31215[(2)]);
var state_31215__$1 = state_31215;
var statearr_31296_31359 = state_31215__$1;
(statearr_31296_31359[(2)] = inst_31181);

(statearr_31296_31359[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (8))){
var inst_31088 = (state_31215[(22)]);
var inst_31075 = (state_31215[(10)]);
var inst_31088__$1 = cljs.core.seq.call(null,inst_31075);
var state_31215__$1 = (function (){var statearr_31297 = state_31215;
(statearr_31297[(22)] = inst_31088__$1);

return statearr_31297;
})();
if(inst_31088__$1){
var statearr_31298_31360 = state_31215__$1;
(statearr_31298_31360[(1)] = (10));

} else {
var statearr_31299_31361 = state_31215__$1;
(statearr_31299_31361[(1)] = (11));

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
});})(c__25046__auto__,map__31060,map__31060__$1,opts,before_jsload,on_jsload,reload_dependents,map__31061,map__31061__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__22049__auto__,c__25046__auto__,map__31060,map__31060__$1,opts,before_jsload,on_jsload,reload_dependents,map__31061,map__31061__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22050__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22050__auto____0 = (function (){
var statearr_31300 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31300[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22050__auto__);

(statearr_31300[(1)] = (1));

return statearr_31300;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22050__auto____1 = (function (state_31215){
while(true){
var ret_value__22051__auto__ = (function (){try{while(true){
var result__22052__auto__ = switch__22049__auto__.call(null,state_31215);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22052__auto__;
}
break;
}
}catch (e31301){if((e31301 instanceof Object)){
var ex__22053__auto__ = e31301;
var statearr_31302_31362 = state_31215;
(statearr_31302_31362[(5)] = ex__22053__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31215);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31301;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31363 = state_31215;
state_31215 = G__31363;
continue;
} else {
return ret_value__22051__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22050__auto__ = function(state_31215){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22050__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22050__auto____1.call(this,state_31215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22050__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22050__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22050__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22050__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22050__auto__;
})()
;})(switch__22049__auto__,c__25046__auto__,map__31060,map__31060__$1,opts,before_jsload,on_jsload,reload_dependents,map__31061,map__31061__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__25048__auto__ = (function (){var statearr_31303 = f__25047__auto__.call(null);
(statearr_31303[(6)] = c__25046__auto__);

return statearr_31303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25048__auto__);
});})(c__25046__auto__,map__31060,map__31060__$1,opts,before_jsload,on_jsload,reload_dependents,map__31061,map__31061__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__25046__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__31366,link){
var map__31367 = p__31366;
var map__31367__$1 = (((((!((map__31367 == null))))?(((((map__31367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31367):map__31367);
var file = cljs.core.get.call(null,map__31367__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5720__auto__,map__31367,map__31367__$1,file){
return (function (p1__31364_SHARP_,p2__31365_SHARP_){
if(cljs.core._EQ_.call(null,p1__31364_SHARP_,p2__31365_SHARP_)){
return p1__31364_SHARP_;
} else {
return false;
}
});})(link_href,temp__5720__auto__,map__31367,map__31367__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31370){
var map__31371 = p__31370;
var map__31371__$1 = (((((!((map__31371 == null))))?(((((map__31371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31371):map__31371);
var match_length = cljs.core.get.call(null,map__31371__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__31371__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31369_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31369_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5720__auto__)){
var res = temp__5720__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__31373_SHARP_,p2__31374_SHARP_){
return cljs.core.assoc.call(null,p1__31373_SHARP_,cljs.core.get.call(null,p2__31374_SHARP_,key),p2__31374_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5718__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5718__auto__)){
var link = temp__5718__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5718__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5718__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_31375 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_31375);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_31375);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__31376,p__31377){
var map__31378 = p__31376;
var map__31378__$1 = (((((!((map__31378 == null))))?(((((map__31378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31378):map__31378);
var on_cssload = cljs.core.get.call(null,map__31378__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__31379 = p__31377;
var map__31379__$1 = (((((!((map__31379 == null))))?(((((map__31379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31379):map__31379);
var files_msg = map__31379__$1;
var files = cljs.core.get.call(null,map__31379__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5720__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5720__auto__)){
var f_datas = temp__5720__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1551004821371
