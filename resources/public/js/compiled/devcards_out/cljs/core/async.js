// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__25106 = arguments.length;
switch (G__25106) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25107 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25107 = (function (f,blockable,meta25108){
this.f = f;
this.blockable = blockable;
this.meta25108 = meta25108;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25107.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25109,meta25108__$1){
var self__ = this;
var _25109__$1 = this;
return (new cljs.core.async.t_cljs$core$async25107(self__.f,self__.blockable,meta25108__$1));
});

cljs.core.async.t_cljs$core$async25107.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25109){
var self__ = this;
var _25109__$1 = this;
return self__.meta25108;
});

cljs.core.async.t_cljs$core$async25107.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25107.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25107.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async25107.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async25107.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta25108","meta25108",-821056365,null)], null);
});

cljs.core.async.t_cljs$core$async25107.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25107.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25107";

cljs.core.async.t_cljs$core$async25107.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25107");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25107.
 */
cljs.core.async.__GT_t_cljs$core$async25107 = (function cljs$core$async$__GT_t_cljs$core$async25107(f__$1,blockable__$1,meta25108){
return (new cljs.core.async.t_cljs$core$async25107(f__$1,blockable__$1,meta25108));
});

}

return (new cljs.core.async.t_cljs$core$async25107(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__25113 = arguments.length;
switch (G__25113) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__25116 = arguments.length;
switch (G__25116) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__25119 = arguments.length;
switch (G__25119) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_25121 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25121);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_25121,ret){
return (function (){
return fn1.call(null,val_25121);
});})(val_25121,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__25123 = arguments.length;
switch (G__25123) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5718__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___25125 = n;
var x_25126 = (0);
while(true){
if((x_25126 < n__4607__auto___25125)){
(a[x_25126] = (0));

var G__25127 = (x_25126 + (1));
x_25126 = G__25127;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__25128 = (i + (1));
i = G__25128;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25129 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25129 = (function (flag,meta25130){
this.flag = flag;
this.meta25130 = meta25130;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25131,meta25130__$1){
var self__ = this;
var _25131__$1 = this;
return (new cljs.core.async.t_cljs$core$async25129(self__.flag,meta25130__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async25129.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25131){
var self__ = this;
var _25131__$1 = this;
return self__.meta25130;
});})(flag))
;

cljs.core.async.t_cljs$core$async25129.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25129.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async25129.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25129.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25129.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta25130","meta25130",519405823,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async25129.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25129.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25129";

cljs.core.async.t_cljs$core$async25129.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25129");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25129.
 */
cljs.core.async.__GT_t_cljs$core$async25129 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async25129(flag__$1,meta25130){
return (new cljs.core.async.t_cljs$core$async25129(flag__$1,meta25130));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async25129(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25132 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25132 = (function (flag,cb,meta25133){
this.flag = flag;
this.cb = cb;
this.meta25133 = meta25133;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25132.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25134,meta25133__$1){
var self__ = this;
var _25134__$1 = this;
return (new cljs.core.async.t_cljs$core$async25132(self__.flag,self__.cb,meta25133__$1));
});

cljs.core.async.t_cljs$core$async25132.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25134){
var self__ = this;
var _25134__$1 = this;
return self__.meta25133;
});

cljs.core.async.t_cljs$core$async25132.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25132.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async25132.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25132.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async25132.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta25133","meta25133",-947729399,null)], null);
});

cljs.core.async.t_cljs$core$async25132.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25132.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25132";

cljs.core.async.t_cljs$core$async25132.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25132");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25132.
 */
cljs.core.async.__GT_t_cljs$core$async25132 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async25132(flag__$1,cb__$1,meta25133){
return (new cljs.core.async.t_cljs$core$async25132(flag__$1,cb__$1,meta25133));
});

}

return (new cljs.core.async.t_cljs$core$async25132(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25135_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25135_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25136_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25136_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__25137 = (i + (1));
i = G__25137;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___25143 = arguments.length;
var i__4731__auto___25144 = (0);
while(true){
if((i__4731__auto___25144 < len__4730__auto___25143)){
args__4736__auto__.push((arguments[i__4731__auto___25144]));

var G__25145 = (i__4731__auto___25144 + (1));
i__4731__auto___25144 = G__25145;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25140){
var map__25141 = p__25140;
var map__25141__$1 = (((((!((map__25141 == null))))?(((((map__25141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25141):map__25141);
var opts = map__25141__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25138){
var G__25139 = cljs.core.first.call(null,seq25138);
var seq25138__$1 = cljs.core.next.call(null,seq25138);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25139,seq25138__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__25147 = arguments.length;
switch (G__25147) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__25046__auto___25193 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25046__auto___25193){
return (function (){
var f__25047__auto__ = (function (){var switch__22049__auto__ = ((function (c__25046__auto___25193){
return (function (state_25171){
var state_val_25172 = (state_25171[(1)]);
if((state_val_25172 === (7))){
var inst_25167 = (state_25171[(2)]);
var state_25171__$1 = state_25171;
var statearr_25173_25194 = state_25171__$1;
(statearr_25173_25194[(2)] = inst_25167);

(statearr_25173_25194[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25172 === (1))){
var state_25171__$1 = state_25171;
var statearr_25174_25195 = state_25171__$1;
(statearr_25174_25195[(2)] = null);

(statearr_25174_25195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25172 === (4))){
var inst_25150 = (state_25171[(7)]);
var inst_25150__$1 = (state_25171[(2)]);
var inst_25151 = (inst_25150__$1 == null);
var state_25171__$1 = (function (){var statearr_25175 = state_25171;
(statearr_25175[(7)] = inst_25150__$1);

return statearr_25175;
})();
if(cljs.core.truth_(inst_25151)){
var statearr_25176_25196 = state_25171__$1;
(statearr_25176_25196[(1)] = (5));

} else {
var statearr_25177_25197 = state_25171__$1;
(statearr_25177_25197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25172 === (13))){
var state_25171__$1 = state_25171;
var statearr_25178_25198 = state_25171__$1;
(statearr_25178_25198[(2)] = null);

(statearr_25178_25198[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25172 === (6))){
var inst_25150 = (state_25171[(7)]);
var state_25171__$1 = state_25171;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25171__$1,(11),to,inst_25150);
} else {
if((state_val_25172 === (3))){
var inst_25169 = (state_25171[(2)]);
var state_25171__$1 = state_25171;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25171__$1,inst_25169);
} else {
if((state_val_25172 === (12))){
var state_25171__$1 = state_25171;
var statearr_25179_25199 = state_25171__$1;
(statearr_25179_25199[(2)] = null);

(statearr_25179_25199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25172 === (2))){
var state_25171__$1 = state_25171;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25171__$1,(4),from);
} else {
if((state_val_25172 === (11))){
var inst_25160 = (state_25171[(2)]);
var state_25171__$1 = state_25171;
if(cljs.core.truth_(inst_25160)){
var statearr_25180_25200 = state_25171__$1;
(statearr_25180_25200[(1)] = (12));

} else {
var statearr_25181_25201 = state_25171__$1;
(statearr_25181_25201[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25172 === (9))){
var state_25171__$1 = state_25171;
var statearr_25182_25202 = state_25171__$1;
(statearr_25182_25202[(2)] = null);

(statearr_25182_25202[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25172 === (5))){
var state_25171__$1 = state_25171;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25183_25203 = state_25171__$1;
(statearr_25183_25203[(1)] = (8));

} else {
var statearr_25184_25204 = state_25171__$1;
(statearr_25184_25204[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25172 === (14))){
var inst_25165 = (state_25171[(2)]);
var state_25171__$1 = state_25171;
var statearr_25185_25205 = state_25171__$1;
(statearr_25185_25205[(2)] = inst_25165);

(statearr_25185_25205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25172 === (10))){
var inst_25157 = (state_25171[(2)]);
var state_25171__$1 = state_25171;
var statearr_25186_25206 = state_25171__$1;
(statearr_25186_25206[(2)] = inst_25157);

(statearr_25186_25206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25172 === (8))){
var inst_25154 = cljs.core.async.close_BANG_.call(null,to);
var state_25171__$1 = state_25171;
var statearr_25187_25207 = state_25171__$1;
(statearr_25187_25207[(2)] = inst_25154);

(statearr_25187_25207[(1)] = (10));


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
});})(c__25046__auto___25193))
;
return ((function (switch__22049__auto__,c__25046__auto___25193){
return (function() {
var cljs$core$async$state_machine__22050__auto__ = null;
var cljs$core$async$state_machine__22050__auto____0 = (function (){
var statearr_25188 = [null,null,null,null,null,null,null,null];
(statearr_25188[(0)] = cljs$core$async$state_machine__22050__auto__);

(statearr_25188[(1)] = (1));

return statearr_25188;
});
var cljs$core$async$state_machine__22050__auto____1 = (function (state_25171){
while(true){
var ret_value__22051__auto__ = (function (){try{while(true){
var result__22052__auto__ = switch__22049__auto__.call(null,state_25171);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22052__auto__;
}
break;
}
}catch (e25189){if((e25189 instanceof Object)){
var ex__22053__auto__ = e25189;
var statearr_25190_25208 = state_25171;
(statearr_25190_25208[(5)] = ex__22053__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25171);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25189;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25209 = state_25171;
state_25171 = G__25209;
continue;
} else {
return ret_value__22051__auto__;
}
break;
}
});
cljs$core$async$state_machine__22050__auto__ = function(state_25171){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22050__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22050__auto____1.call(this,state_25171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22050__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22050__auto____0;
cljs$core$async$state_machine__22050__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22050__auto____1;
return cljs$core$async$state_machine__22050__auto__;
})()
;})(switch__22049__auto__,c__25046__auto___25193))
})();
var state__25048__auto__ = (function (){var statearr_25191 = f__25047__auto__.call(null);
(statearr_25191[(6)] = c__25046__auto___25193);

return statearr_25191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25048__auto__);
});})(c__25046__auto___25193))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__25210){
var vec__25211 = p__25210;
var v = cljs.core.nth.call(null,vec__25211,(0),null);
var p = cljs.core.nth.call(null,vec__25211,(1),null);
var job = vec__25211;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__25046__auto___25382 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25046__auto___25382,res,vec__25211,v,p,job,jobs,results){
return (function (){
var f__25047__auto__ = (function (){var switch__22049__auto__ = ((function (c__25046__auto___25382,res,vec__25211,v,p,job,jobs,results){
return (function (state_25218){
var state_val_25219 = (state_25218[(1)]);
if((state_val_25219 === (1))){
var state_25218__$1 = state_25218;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25218__$1,(2),res,v);
} else {
if((state_val_25219 === (2))){
var inst_25215 = (state_25218[(2)]);
var inst_25216 = cljs.core.async.close_BANG_.call(null,res);
var state_25218__$1 = (function (){var statearr_25220 = state_25218;
(statearr_25220[(7)] = inst_25215);

return statearr_25220;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25218__$1,inst_25216);
} else {
return null;
}
}
});})(c__25046__auto___25382,res,vec__25211,v,p,job,jobs,results))
;
return ((function (switch__22049__auto__,c__25046__auto___25382,res,vec__25211,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22050__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22050__auto____0 = (function (){
var statearr_25221 = [null,null,null,null,null,null,null,null];
(statearr_25221[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22050__auto__);

(statearr_25221[(1)] = (1));

return statearr_25221;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22050__auto____1 = (function (state_25218){
while(true){
var ret_value__22051__auto__ = (function (){try{while(true){
var result__22052__auto__ = switch__22049__auto__.call(null,state_25218);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22052__auto__;
}
break;
}
}catch (e25222){if((e25222 instanceof Object)){
var ex__22053__auto__ = e25222;
var statearr_25223_25383 = state_25218;
(statearr_25223_25383[(5)] = ex__22053__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25218);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25222;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25384 = state_25218;
state_25218 = G__25384;
continue;
} else {
return ret_value__22051__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22050__auto__ = function(state_25218){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22050__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22050__auto____1.call(this,state_25218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22050__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22050__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22050__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22050__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22050__auto__;
})()
;})(switch__22049__auto__,c__25046__auto___25382,res,vec__25211,v,p,job,jobs,results))
})();
var state__25048__auto__ = (function (){var statearr_25224 = f__25047__auto__.call(null);
(statearr_25224[(6)] = c__25046__auto___25382);

return statearr_25224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25048__auto__);
});})(c__25046__auto___25382,res,vec__25211,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25225){
var vec__25226 = p__25225;
var v = cljs.core.nth.call(null,vec__25226,(0),null);
var p = cljs.core.nth.call(null,vec__25226,(1),null);
var job = vec__25226;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___25385 = n;
var __25386 = (0);
while(true){
if((__25386 < n__4607__auto___25385)){
var G__25229_25387 = type;
var G__25229_25388__$1 = (((G__25229_25387 instanceof cljs.core.Keyword))?G__25229_25387.fqn:null);
switch (G__25229_25388__$1) {
case "compute":
var c__25046__auto___25390 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25386,c__25046__auto___25390,G__25229_25387,G__25229_25388__$1,n__4607__auto___25385,jobs,results,process,async){
return (function (){
var f__25047__auto__ = (function (){var switch__22049__auto__ = ((function (__25386,c__25046__auto___25390,G__25229_25387,G__25229_25388__$1,n__4607__auto___25385,jobs,results,process,async){
return (function (state_25242){
var state_val_25243 = (state_25242[(1)]);
if((state_val_25243 === (1))){
var state_25242__$1 = state_25242;
var statearr_25244_25391 = state_25242__$1;
(statearr_25244_25391[(2)] = null);

(statearr_25244_25391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25243 === (2))){
var state_25242__$1 = state_25242;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25242__$1,(4),jobs);
} else {
if((state_val_25243 === (3))){
var inst_25240 = (state_25242[(2)]);
var state_25242__$1 = state_25242;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25242__$1,inst_25240);
} else {
if((state_val_25243 === (4))){
var inst_25232 = (state_25242[(2)]);
var inst_25233 = process.call(null,inst_25232);
var state_25242__$1 = state_25242;
if(cljs.core.truth_(inst_25233)){
var statearr_25245_25392 = state_25242__$1;
(statearr_25245_25392[(1)] = (5));

} else {
var statearr_25246_25393 = state_25242__$1;
(statearr_25246_25393[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25243 === (5))){
var state_25242__$1 = state_25242;
var statearr_25247_25394 = state_25242__$1;
(statearr_25247_25394[(2)] = null);

(statearr_25247_25394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25243 === (6))){
var state_25242__$1 = state_25242;
var statearr_25248_25395 = state_25242__$1;
(statearr_25248_25395[(2)] = null);

(statearr_25248_25395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25243 === (7))){
var inst_25238 = (state_25242[(2)]);
var state_25242__$1 = state_25242;
var statearr_25249_25396 = state_25242__$1;
(statearr_25249_25396[(2)] = inst_25238);

(statearr_25249_25396[(1)] = (3));


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
});})(__25386,c__25046__auto___25390,G__25229_25387,G__25229_25388__$1,n__4607__auto___25385,jobs,results,process,async))
;
return ((function (__25386,switch__22049__auto__,c__25046__auto___25390,G__25229_25387,G__25229_25388__$1,n__4607__auto___25385,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22050__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22050__auto____0 = (function (){
var statearr_25250 = [null,null,null,null,null,null,null];
(statearr_25250[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22050__auto__);

(statearr_25250[(1)] = (1));

return statearr_25250;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22050__auto____1 = (function (state_25242){
while(true){
var ret_value__22051__auto__ = (function (){try{while(true){
var result__22052__auto__ = switch__22049__auto__.call(null,state_25242);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22052__auto__;
}
break;
}
}catch (e25251){if((e25251 instanceof Object)){
var ex__22053__auto__ = e25251;
var statearr_25252_25397 = state_25242;
(statearr_25252_25397[(5)] = ex__22053__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25242);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25251;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25398 = state_25242;
state_25242 = G__25398;
continue;
} else {
return ret_value__22051__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22050__auto__ = function(state_25242){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22050__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22050__auto____1.call(this,state_25242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22050__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22050__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22050__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22050__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22050__auto__;
})()
;})(__25386,switch__22049__auto__,c__25046__auto___25390,G__25229_25387,G__25229_25388__$1,n__4607__auto___25385,jobs,results,process,async))
})();
var state__25048__auto__ = (function (){var statearr_25253 = f__25047__auto__.call(null);
(statearr_25253[(6)] = c__25046__auto___25390);

return statearr_25253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25048__auto__);
});})(__25386,c__25046__auto___25390,G__25229_25387,G__25229_25388__$1,n__4607__auto___25385,jobs,results,process,async))
);


break;
case "async":
var c__25046__auto___25399 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25386,c__25046__auto___25399,G__25229_25387,G__25229_25388__$1,n__4607__auto___25385,jobs,results,process,async){
return (function (){
var f__25047__auto__ = (function (){var switch__22049__auto__ = ((function (__25386,c__25046__auto___25399,G__25229_25387,G__25229_25388__$1,n__4607__auto___25385,jobs,results,process,async){
return (function (state_25266){
var state_val_25267 = (state_25266[(1)]);
if((state_val_25267 === (1))){
var state_25266__$1 = state_25266;
var statearr_25268_25400 = state_25266__$1;
(statearr_25268_25400[(2)] = null);

(statearr_25268_25400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25267 === (2))){
var state_25266__$1 = state_25266;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25266__$1,(4),jobs);
} else {
if((state_val_25267 === (3))){
var inst_25264 = (state_25266[(2)]);
var state_25266__$1 = state_25266;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25266__$1,inst_25264);
} else {
if((state_val_25267 === (4))){
var inst_25256 = (state_25266[(2)]);
var inst_25257 = async.call(null,inst_25256);
var state_25266__$1 = state_25266;
if(cljs.core.truth_(inst_25257)){
var statearr_25269_25401 = state_25266__$1;
(statearr_25269_25401[(1)] = (5));

} else {
var statearr_25270_25402 = state_25266__$1;
(statearr_25270_25402[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25267 === (5))){
var state_25266__$1 = state_25266;
var statearr_25271_25403 = state_25266__$1;
(statearr_25271_25403[(2)] = null);

(statearr_25271_25403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25267 === (6))){
var state_25266__$1 = state_25266;
var statearr_25272_25404 = state_25266__$1;
(statearr_25272_25404[(2)] = null);

(statearr_25272_25404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25267 === (7))){
var inst_25262 = (state_25266[(2)]);
var state_25266__$1 = state_25266;
var statearr_25273_25405 = state_25266__$1;
(statearr_25273_25405[(2)] = inst_25262);

(statearr_25273_25405[(1)] = (3));


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
});})(__25386,c__25046__auto___25399,G__25229_25387,G__25229_25388__$1,n__4607__auto___25385,jobs,results,process,async))
;
return ((function (__25386,switch__22049__auto__,c__25046__auto___25399,G__25229_25387,G__25229_25388__$1,n__4607__auto___25385,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22050__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22050__auto____0 = (function (){
var statearr_25274 = [null,null,null,null,null,null,null];
(statearr_25274[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22050__auto__);

(statearr_25274[(1)] = (1));

return statearr_25274;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22050__auto____1 = (function (state_25266){
while(true){
var ret_value__22051__auto__ = (function (){try{while(true){
var result__22052__auto__ = switch__22049__auto__.call(null,state_25266);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22052__auto__;
}
break;
}
}catch (e25275){if((e25275 instanceof Object)){
var ex__22053__auto__ = e25275;
var statearr_25276_25406 = state_25266;
(statearr_25276_25406[(5)] = ex__22053__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25266);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25275;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25407 = state_25266;
state_25266 = G__25407;
continue;
} else {
return ret_value__22051__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22050__auto__ = function(state_25266){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22050__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22050__auto____1.call(this,state_25266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22050__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22050__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22050__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22050__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22050__auto__;
})()
;})(__25386,switch__22049__auto__,c__25046__auto___25399,G__25229_25387,G__25229_25388__$1,n__4607__auto___25385,jobs,results,process,async))
})();
var state__25048__auto__ = (function (){var statearr_25277 = f__25047__auto__.call(null);
(statearr_25277[(6)] = c__25046__auto___25399);

return statearr_25277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25048__auto__);
});})(__25386,c__25046__auto___25399,G__25229_25387,G__25229_25388__$1,n__4607__auto___25385,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25229_25388__$1)].join('')));

}

var G__25408 = (__25386 + (1));
__25386 = G__25408;
continue;
} else {
}
break;
}

var c__25046__auto___25409 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25046__auto___25409,jobs,results,process,async){
return (function (){
var f__25047__auto__ = (function (){var switch__22049__auto__ = ((function (c__25046__auto___25409,jobs,results,process,async){
return (function (state_25299){
var state_val_25300 = (state_25299[(1)]);
if((state_val_25300 === (7))){
var inst_25295 = (state_25299[(2)]);
var state_25299__$1 = state_25299;
var statearr_25301_25410 = state_25299__$1;
(statearr_25301_25410[(2)] = inst_25295);

(statearr_25301_25410[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25300 === (1))){
var state_25299__$1 = state_25299;
var statearr_25302_25411 = state_25299__$1;
(statearr_25302_25411[(2)] = null);

(statearr_25302_25411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25300 === (4))){
var inst_25280 = (state_25299[(7)]);
var inst_25280__$1 = (state_25299[(2)]);
var inst_25281 = (inst_25280__$1 == null);
var state_25299__$1 = (function (){var statearr_25303 = state_25299;
(statearr_25303[(7)] = inst_25280__$1);

return statearr_25303;
})();
if(cljs.core.truth_(inst_25281)){
var statearr_25304_25412 = state_25299__$1;
(statearr_25304_25412[(1)] = (5));

} else {
var statearr_25305_25413 = state_25299__$1;
(statearr_25305_25413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25300 === (6))){
var inst_25280 = (state_25299[(7)]);
var inst_25285 = (state_25299[(8)]);
var inst_25285__$1 = cljs.core.async.chan.call(null,(1));
var inst_25286 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25287 = [inst_25280,inst_25285__$1];
var inst_25288 = (new cljs.core.PersistentVector(null,2,(5),inst_25286,inst_25287,null));
var state_25299__$1 = (function (){var statearr_25306 = state_25299;
(statearr_25306[(8)] = inst_25285__$1);

return statearr_25306;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25299__$1,(8),jobs,inst_25288);
} else {
if((state_val_25300 === (3))){
var inst_25297 = (state_25299[(2)]);
var state_25299__$1 = state_25299;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25299__$1,inst_25297);
} else {
if((state_val_25300 === (2))){
var state_25299__$1 = state_25299;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25299__$1,(4),from);
} else {
if((state_val_25300 === (9))){
var inst_25292 = (state_25299[(2)]);
var state_25299__$1 = (function (){var statearr_25307 = state_25299;
(statearr_25307[(9)] = inst_25292);

return statearr_25307;
})();
var statearr_25308_25414 = state_25299__$1;
(statearr_25308_25414[(2)] = null);

(statearr_25308_25414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25300 === (5))){
var inst_25283 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25299__$1 = state_25299;
var statearr_25309_25415 = state_25299__$1;
(statearr_25309_25415[(2)] = inst_25283);

(statearr_25309_25415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25300 === (8))){
var inst_25285 = (state_25299[(8)]);
var inst_25290 = (state_25299[(2)]);
var state_25299__$1 = (function (){var statearr_25310 = state_25299;
(statearr_25310[(10)] = inst_25290);

return statearr_25310;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25299__$1,(9),results,inst_25285);
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
});})(c__25046__auto___25409,jobs,results,process,async))
;
return ((function (switch__22049__auto__,c__25046__auto___25409,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22050__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22050__auto____0 = (function (){
var statearr_25311 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25311[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22050__auto__);

(statearr_25311[(1)] = (1));

return statearr_25311;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22050__auto____1 = (function (state_25299){
while(true){
var ret_value__22051__auto__ = (function (){try{while(true){
var result__22052__auto__ = switch__22049__auto__.call(null,state_25299);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22052__auto__;
}
break;
}
}catch (e25312){if((e25312 instanceof Object)){
var ex__22053__auto__ = e25312;
var statearr_25313_25416 = state_25299;
(statearr_25313_25416[(5)] = ex__22053__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25299);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25312;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25417 = state_25299;
state_25299 = G__25417;
continue;
} else {
return ret_value__22051__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22050__auto__ = function(state_25299){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22050__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22050__auto____1.call(this,state_25299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22050__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22050__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22050__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22050__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22050__auto__;
})()
;})(switch__22049__auto__,c__25046__auto___25409,jobs,results,process,async))
})();
var state__25048__auto__ = (function (){var statearr_25314 = f__25047__auto__.call(null);
(statearr_25314[(6)] = c__25046__auto___25409);

return statearr_25314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25048__auto__);
});})(c__25046__auto___25409,jobs,results,process,async))
);


var c__25046__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25046__auto__,jobs,results,process,async){
return (function (){
var f__25047__auto__ = (function (){var switch__22049__auto__ = ((function (c__25046__auto__,jobs,results,process,async){
return (function (state_25352){
var state_val_25353 = (state_25352[(1)]);
if((state_val_25353 === (7))){
var inst_25348 = (state_25352[(2)]);
var state_25352__$1 = state_25352;
var statearr_25354_25418 = state_25352__$1;
(statearr_25354_25418[(2)] = inst_25348);

(statearr_25354_25418[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25353 === (20))){
var state_25352__$1 = state_25352;
var statearr_25355_25419 = state_25352__$1;
(statearr_25355_25419[(2)] = null);

(statearr_25355_25419[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25353 === (1))){
var state_25352__$1 = state_25352;
var statearr_25356_25420 = state_25352__$1;
(statearr_25356_25420[(2)] = null);

(statearr_25356_25420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25353 === (4))){
var inst_25317 = (state_25352[(7)]);
var inst_25317__$1 = (state_25352[(2)]);
var inst_25318 = (inst_25317__$1 == null);
var state_25352__$1 = (function (){var statearr_25357 = state_25352;
(statearr_25357[(7)] = inst_25317__$1);

return statearr_25357;
})();
if(cljs.core.truth_(inst_25318)){
var statearr_25358_25421 = state_25352__$1;
(statearr_25358_25421[(1)] = (5));

} else {
var statearr_25359_25422 = state_25352__$1;
(statearr_25359_25422[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25353 === (15))){
var inst_25330 = (state_25352[(8)]);
var state_25352__$1 = state_25352;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25352__$1,(18),to,inst_25330);
} else {
if((state_val_25353 === (21))){
var inst_25343 = (state_25352[(2)]);
var state_25352__$1 = state_25352;
var statearr_25360_25423 = state_25352__$1;
(statearr_25360_25423[(2)] = inst_25343);

(statearr_25360_25423[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25353 === (13))){
var inst_25345 = (state_25352[(2)]);
var state_25352__$1 = (function (){var statearr_25361 = state_25352;
(statearr_25361[(9)] = inst_25345);

return statearr_25361;
})();
var statearr_25362_25424 = state_25352__$1;
(statearr_25362_25424[(2)] = null);

(statearr_25362_25424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25353 === (6))){
var inst_25317 = (state_25352[(7)]);
var state_25352__$1 = state_25352;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25352__$1,(11),inst_25317);
} else {
if((state_val_25353 === (17))){
var inst_25338 = (state_25352[(2)]);
var state_25352__$1 = state_25352;
if(cljs.core.truth_(inst_25338)){
var statearr_25363_25425 = state_25352__$1;
(statearr_25363_25425[(1)] = (19));

} else {
var statearr_25364_25426 = state_25352__$1;
(statearr_25364_25426[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25353 === (3))){
var inst_25350 = (state_25352[(2)]);
var state_25352__$1 = state_25352;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25352__$1,inst_25350);
} else {
if((state_val_25353 === (12))){
var inst_25327 = (state_25352[(10)]);
var state_25352__$1 = state_25352;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25352__$1,(14),inst_25327);
} else {
if((state_val_25353 === (2))){
var state_25352__$1 = state_25352;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25352__$1,(4),results);
} else {
if((state_val_25353 === (19))){
var state_25352__$1 = state_25352;
var statearr_25365_25427 = state_25352__$1;
(statearr_25365_25427[(2)] = null);

(statearr_25365_25427[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25353 === (11))){
var inst_25327 = (state_25352[(2)]);
var state_25352__$1 = (function (){var statearr_25366 = state_25352;
(statearr_25366[(10)] = inst_25327);

return statearr_25366;
})();
var statearr_25367_25428 = state_25352__$1;
(statearr_25367_25428[(2)] = null);

(statearr_25367_25428[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25353 === (9))){
var state_25352__$1 = state_25352;
var statearr_25368_25429 = state_25352__$1;
(statearr_25368_25429[(2)] = null);

(statearr_25368_25429[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25353 === (5))){
var state_25352__$1 = state_25352;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25369_25430 = state_25352__$1;
(statearr_25369_25430[(1)] = (8));

} else {
var statearr_25370_25431 = state_25352__$1;
(statearr_25370_25431[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25353 === (14))){
var inst_25332 = (state_25352[(11)]);
var inst_25330 = (state_25352[(8)]);
var inst_25330__$1 = (state_25352[(2)]);
var inst_25331 = (inst_25330__$1 == null);
var inst_25332__$1 = cljs.core.not.call(null,inst_25331);
var state_25352__$1 = (function (){var statearr_25371 = state_25352;
(statearr_25371[(11)] = inst_25332__$1);

(statearr_25371[(8)] = inst_25330__$1);

return statearr_25371;
})();
if(inst_25332__$1){
var statearr_25372_25432 = state_25352__$1;
(statearr_25372_25432[(1)] = (15));

} else {
var statearr_25373_25433 = state_25352__$1;
(statearr_25373_25433[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25353 === (16))){
var inst_25332 = (state_25352[(11)]);
var state_25352__$1 = state_25352;
var statearr_25374_25434 = state_25352__$1;
(statearr_25374_25434[(2)] = inst_25332);

(statearr_25374_25434[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25353 === (10))){
var inst_25324 = (state_25352[(2)]);
var state_25352__$1 = state_25352;
var statearr_25375_25435 = state_25352__$1;
(statearr_25375_25435[(2)] = inst_25324);

(statearr_25375_25435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25353 === (18))){
var inst_25335 = (state_25352[(2)]);
var state_25352__$1 = state_25352;
var statearr_25376_25436 = state_25352__$1;
(statearr_25376_25436[(2)] = inst_25335);

(statearr_25376_25436[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25353 === (8))){
var inst_25321 = cljs.core.async.close_BANG_.call(null,to);
var state_25352__$1 = state_25352;
var statearr_25377_25437 = state_25352__$1;
(statearr_25377_25437[(2)] = inst_25321);

(statearr_25377_25437[(1)] = (10));


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
});})(c__25046__auto__,jobs,results,process,async))
;
return ((function (switch__22049__auto__,c__25046__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22050__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22050__auto____0 = (function (){
var statearr_25378 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25378[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22050__auto__);

(statearr_25378[(1)] = (1));

return statearr_25378;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22050__auto____1 = (function (state_25352){
while(true){
var ret_value__22051__auto__ = (function (){try{while(true){
var result__22052__auto__ = switch__22049__auto__.call(null,state_25352);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22052__auto__;
}
break;
}
}catch (e25379){if((e25379 instanceof Object)){
var ex__22053__auto__ = e25379;
var statearr_25380_25438 = state_25352;
(statearr_25380_25438[(5)] = ex__22053__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25352);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25379;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25439 = state_25352;
state_25352 = G__25439;
continue;
} else {
return ret_value__22051__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22050__auto__ = function(state_25352){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22050__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22050__auto____1.call(this,state_25352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22050__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22050__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22050__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22050__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22050__auto__;
})()
;})(switch__22049__auto__,c__25046__auto__,jobs,results,process,async))
})();
var state__25048__auto__ = (function (){var statearr_25381 = f__25047__auto__.call(null);
(statearr_25381[(6)] = c__25046__auto__);

return statearr_25381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25048__auto__);
});})(c__25046__auto__,jobs,results,process,async))
);

return c__25046__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__25441 = arguments.length;
switch (G__25441) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__25444 = arguments.length;
switch (G__25444) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__25447 = arguments.length;
switch (G__25447) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__25046__auto___25496 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25046__auto___25496,tc,fc){
return (function (){
var f__25047__auto__ = (function (){var switch__22049__auto__ = ((function (c__25046__auto___25496,tc,fc){
return (function (state_25473){
var state_val_25474 = (state_25473[(1)]);
if((state_val_25474 === (7))){
var inst_25469 = (state_25473[(2)]);
var state_25473__$1 = state_25473;
var statearr_25475_25497 = state_25473__$1;
(statearr_25475_25497[(2)] = inst_25469);

(statearr_25475_25497[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25474 === (1))){
var state_25473__$1 = state_25473;
var statearr_25476_25498 = state_25473__$1;
(statearr_25476_25498[(2)] = null);

(statearr_25476_25498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25474 === (4))){
var inst_25450 = (state_25473[(7)]);
var inst_25450__$1 = (state_25473[(2)]);
var inst_25451 = (inst_25450__$1 == null);
var state_25473__$1 = (function (){var statearr_25477 = state_25473;
(statearr_25477[(7)] = inst_25450__$1);

return statearr_25477;
})();
if(cljs.core.truth_(inst_25451)){
var statearr_25478_25499 = state_25473__$1;
(statearr_25478_25499[(1)] = (5));

} else {
var statearr_25479_25500 = state_25473__$1;
(statearr_25479_25500[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25474 === (13))){
var state_25473__$1 = state_25473;
var statearr_25480_25501 = state_25473__$1;
(statearr_25480_25501[(2)] = null);

(statearr_25480_25501[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25474 === (6))){
var inst_25450 = (state_25473[(7)]);
var inst_25456 = p.call(null,inst_25450);
var state_25473__$1 = state_25473;
if(cljs.core.truth_(inst_25456)){
var statearr_25481_25502 = state_25473__$1;
(statearr_25481_25502[(1)] = (9));

} else {
var statearr_25482_25503 = state_25473__$1;
(statearr_25482_25503[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25474 === (3))){
var inst_25471 = (state_25473[(2)]);
var state_25473__$1 = state_25473;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25473__$1,inst_25471);
} else {
if((state_val_25474 === (12))){
var state_25473__$1 = state_25473;
var statearr_25483_25504 = state_25473__$1;
(statearr_25483_25504[(2)] = null);

(statearr_25483_25504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25474 === (2))){
var state_25473__$1 = state_25473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25473__$1,(4),ch);
} else {
if((state_val_25474 === (11))){
var inst_25450 = (state_25473[(7)]);
var inst_25460 = (state_25473[(2)]);
var state_25473__$1 = state_25473;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25473__$1,(8),inst_25460,inst_25450);
} else {
if((state_val_25474 === (9))){
var state_25473__$1 = state_25473;
var statearr_25484_25505 = state_25473__$1;
(statearr_25484_25505[(2)] = tc);

(statearr_25484_25505[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25474 === (5))){
var inst_25453 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25454 = cljs.core.async.close_BANG_.call(null,fc);
var state_25473__$1 = (function (){var statearr_25485 = state_25473;
(statearr_25485[(8)] = inst_25453);

return statearr_25485;
})();
var statearr_25486_25506 = state_25473__$1;
(statearr_25486_25506[(2)] = inst_25454);

(statearr_25486_25506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25474 === (14))){
var inst_25467 = (state_25473[(2)]);
var state_25473__$1 = state_25473;
var statearr_25487_25507 = state_25473__$1;
(statearr_25487_25507[(2)] = inst_25467);

(statearr_25487_25507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25474 === (10))){
var state_25473__$1 = state_25473;
var statearr_25488_25508 = state_25473__$1;
(statearr_25488_25508[(2)] = fc);

(statearr_25488_25508[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25474 === (8))){
var inst_25462 = (state_25473[(2)]);
var state_25473__$1 = state_25473;
if(cljs.core.truth_(inst_25462)){
var statearr_25489_25509 = state_25473__$1;
(statearr_25489_25509[(1)] = (12));

} else {
var statearr_25490_25510 = state_25473__$1;
(statearr_25490_25510[(1)] = (13));

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
});})(c__25046__auto___25496,tc,fc))
;
return ((function (switch__22049__auto__,c__25046__auto___25496,tc,fc){
return (function() {
var cljs$core$async$state_machine__22050__auto__ = null;
var cljs$core$async$state_machine__22050__auto____0 = (function (){
var statearr_25491 = [null,null,null,null,null,null,null,null,null];
(statearr_25491[(0)] = cljs$core$async$state_machine__22050__auto__);

(statearr_25491[(1)] = (1));

return statearr_25491;
});
var cljs$core$async$state_machine__22050__auto____1 = (function (state_25473){
while(true){
var ret_value__22051__auto__ = (function (){try{while(true){
var result__22052__auto__ = switch__22049__auto__.call(null,state_25473);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22052__auto__;
}
break;
}
}catch (e25492){if((e25492 instanceof Object)){
var ex__22053__auto__ = e25492;
var statearr_25493_25511 = state_25473;
(statearr_25493_25511[(5)] = ex__22053__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25473);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25492;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25512 = state_25473;
state_25473 = G__25512;
continue;
} else {
return ret_value__22051__auto__;
}
break;
}
});
cljs$core$async$state_machine__22050__auto__ = function(state_25473){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22050__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22050__auto____1.call(this,state_25473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22050__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22050__auto____0;
cljs$core$async$state_machine__22050__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22050__auto____1;
return cljs$core$async$state_machine__22050__auto__;
})()
;})(switch__22049__auto__,c__25046__auto___25496,tc,fc))
})();
var state__25048__auto__ = (function (){var statearr_25494 = f__25047__auto__.call(null);
(statearr_25494[(6)] = c__25046__auto___25496);

return statearr_25494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25048__auto__);
});})(c__25046__auto___25496,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__25046__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25046__auto__){
return (function (){
var f__25047__auto__ = (function (){var switch__22049__auto__ = ((function (c__25046__auto__){
return (function (state_25533){
var state_val_25534 = (state_25533[(1)]);
if((state_val_25534 === (7))){
var inst_25529 = (state_25533[(2)]);
var state_25533__$1 = state_25533;
var statearr_25535_25553 = state_25533__$1;
(statearr_25535_25553[(2)] = inst_25529);

(statearr_25535_25553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25534 === (1))){
var inst_25513 = init;
var state_25533__$1 = (function (){var statearr_25536 = state_25533;
(statearr_25536[(7)] = inst_25513);

return statearr_25536;
})();
var statearr_25537_25554 = state_25533__$1;
(statearr_25537_25554[(2)] = null);

(statearr_25537_25554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25534 === (4))){
var inst_25516 = (state_25533[(8)]);
var inst_25516__$1 = (state_25533[(2)]);
var inst_25517 = (inst_25516__$1 == null);
var state_25533__$1 = (function (){var statearr_25538 = state_25533;
(statearr_25538[(8)] = inst_25516__$1);

return statearr_25538;
})();
if(cljs.core.truth_(inst_25517)){
var statearr_25539_25555 = state_25533__$1;
(statearr_25539_25555[(1)] = (5));

} else {
var statearr_25540_25556 = state_25533__$1;
(statearr_25540_25556[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25534 === (6))){
var inst_25516 = (state_25533[(8)]);
var inst_25513 = (state_25533[(7)]);
var inst_25520 = (state_25533[(9)]);
var inst_25520__$1 = f.call(null,inst_25513,inst_25516);
var inst_25521 = cljs.core.reduced_QMARK_.call(null,inst_25520__$1);
var state_25533__$1 = (function (){var statearr_25541 = state_25533;
(statearr_25541[(9)] = inst_25520__$1);

return statearr_25541;
})();
if(inst_25521){
var statearr_25542_25557 = state_25533__$1;
(statearr_25542_25557[(1)] = (8));

} else {
var statearr_25543_25558 = state_25533__$1;
(statearr_25543_25558[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25534 === (3))){
var inst_25531 = (state_25533[(2)]);
var state_25533__$1 = state_25533;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25533__$1,inst_25531);
} else {
if((state_val_25534 === (2))){
var state_25533__$1 = state_25533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25533__$1,(4),ch);
} else {
if((state_val_25534 === (9))){
var inst_25520 = (state_25533[(9)]);
var inst_25513 = inst_25520;
var state_25533__$1 = (function (){var statearr_25544 = state_25533;
(statearr_25544[(7)] = inst_25513);

return statearr_25544;
})();
var statearr_25545_25559 = state_25533__$1;
(statearr_25545_25559[(2)] = null);

(statearr_25545_25559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25534 === (5))){
var inst_25513 = (state_25533[(7)]);
var state_25533__$1 = state_25533;
var statearr_25546_25560 = state_25533__$1;
(statearr_25546_25560[(2)] = inst_25513);

(statearr_25546_25560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25534 === (10))){
var inst_25527 = (state_25533[(2)]);
var state_25533__$1 = state_25533;
var statearr_25547_25561 = state_25533__$1;
(statearr_25547_25561[(2)] = inst_25527);

(statearr_25547_25561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25534 === (8))){
var inst_25520 = (state_25533[(9)]);
var inst_25523 = cljs.core.deref.call(null,inst_25520);
var state_25533__$1 = state_25533;
var statearr_25548_25562 = state_25533__$1;
(statearr_25548_25562[(2)] = inst_25523);

(statearr_25548_25562[(1)] = (10));


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
});})(c__25046__auto__))
;
return ((function (switch__22049__auto__,c__25046__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22050__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22050__auto____0 = (function (){
var statearr_25549 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25549[(0)] = cljs$core$async$reduce_$_state_machine__22050__auto__);

(statearr_25549[(1)] = (1));

return statearr_25549;
});
var cljs$core$async$reduce_$_state_machine__22050__auto____1 = (function (state_25533){
while(true){
var ret_value__22051__auto__ = (function (){try{while(true){
var result__22052__auto__ = switch__22049__auto__.call(null,state_25533);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22052__auto__;
}
break;
}
}catch (e25550){if((e25550 instanceof Object)){
var ex__22053__auto__ = e25550;
var statearr_25551_25563 = state_25533;
(statearr_25551_25563[(5)] = ex__22053__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25533);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25550;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25564 = state_25533;
state_25533 = G__25564;
continue;
} else {
return ret_value__22051__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22050__auto__ = function(state_25533){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22050__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22050__auto____1.call(this,state_25533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22050__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22050__auto____0;
cljs$core$async$reduce_$_state_machine__22050__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22050__auto____1;
return cljs$core$async$reduce_$_state_machine__22050__auto__;
})()
;})(switch__22049__auto__,c__25046__auto__))
})();
var state__25048__auto__ = (function (){var statearr_25552 = f__25047__auto__.call(null);
(statearr_25552[(6)] = c__25046__auto__);

return statearr_25552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25048__auto__);
});})(c__25046__auto__))
);

return c__25046__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__25046__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25046__auto__,f__$1){
return (function (){
var f__25047__auto__ = (function (){var switch__22049__auto__ = ((function (c__25046__auto__,f__$1){
return (function (state_25570){
var state_val_25571 = (state_25570[(1)]);
if((state_val_25571 === (1))){
var inst_25565 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_25570__$1 = state_25570;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25570__$1,(2),inst_25565);
} else {
if((state_val_25571 === (2))){
var inst_25567 = (state_25570[(2)]);
var inst_25568 = f__$1.call(null,inst_25567);
var state_25570__$1 = state_25570;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25570__$1,inst_25568);
} else {
return null;
}
}
});})(c__25046__auto__,f__$1))
;
return ((function (switch__22049__auto__,c__25046__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__22050__auto__ = null;
var cljs$core$async$transduce_$_state_machine__22050__auto____0 = (function (){
var statearr_25572 = [null,null,null,null,null,null,null];
(statearr_25572[(0)] = cljs$core$async$transduce_$_state_machine__22050__auto__);

(statearr_25572[(1)] = (1));

return statearr_25572;
});
var cljs$core$async$transduce_$_state_machine__22050__auto____1 = (function (state_25570){
while(true){
var ret_value__22051__auto__ = (function (){try{while(true){
var result__22052__auto__ = switch__22049__auto__.call(null,state_25570);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22052__auto__;
}
break;
}
}catch (e25573){if((e25573 instanceof Object)){
var ex__22053__auto__ = e25573;
var statearr_25574_25576 = state_25570;
(statearr_25574_25576[(5)] = ex__22053__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25570);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25573;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25577 = state_25570;
state_25570 = G__25577;
continue;
} else {
return ret_value__22051__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__22050__auto__ = function(state_25570){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__22050__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__22050__auto____1.call(this,state_25570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__22050__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__22050__auto____0;
cljs$core$async$transduce_$_state_machine__22050__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__22050__auto____1;
return cljs$core$async$transduce_$_state_machine__22050__auto__;
})()
;})(switch__22049__auto__,c__25046__auto__,f__$1))
})();
var state__25048__auto__ = (function (){var statearr_25575 = f__25047__auto__.call(null);
(statearr_25575[(6)] = c__25046__auto__);

return statearr_25575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25048__auto__);
});})(c__25046__auto__,f__$1))
);

return c__25046__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__25579 = arguments.length;
switch (G__25579) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__25046__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25046__auto__){
return (function (){
var f__25047__auto__ = (function (){var switch__22049__auto__ = ((function (c__25046__auto__){
return (function (state_25604){
var state_val_25605 = (state_25604[(1)]);
if((state_val_25605 === (7))){
var inst_25586 = (state_25604[(2)]);
var state_25604__$1 = state_25604;
var statearr_25606_25627 = state_25604__$1;
(statearr_25606_25627[(2)] = inst_25586);

(statearr_25606_25627[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25605 === (1))){
var inst_25580 = cljs.core.seq.call(null,coll);
var inst_25581 = inst_25580;
var state_25604__$1 = (function (){var statearr_25607 = state_25604;
(statearr_25607[(7)] = inst_25581);

return statearr_25607;
})();
var statearr_25608_25628 = state_25604__$1;
(statearr_25608_25628[(2)] = null);

(statearr_25608_25628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25605 === (4))){
var inst_25581 = (state_25604[(7)]);
var inst_25584 = cljs.core.first.call(null,inst_25581);
var state_25604__$1 = state_25604;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25604__$1,(7),ch,inst_25584);
} else {
if((state_val_25605 === (13))){
var inst_25598 = (state_25604[(2)]);
var state_25604__$1 = state_25604;
var statearr_25609_25629 = state_25604__$1;
(statearr_25609_25629[(2)] = inst_25598);

(statearr_25609_25629[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25605 === (6))){
var inst_25589 = (state_25604[(2)]);
var state_25604__$1 = state_25604;
if(cljs.core.truth_(inst_25589)){
var statearr_25610_25630 = state_25604__$1;
(statearr_25610_25630[(1)] = (8));

} else {
var statearr_25611_25631 = state_25604__$1;
(statearr_25611_25631[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25605 === (3))){
var inst_25602 = (state_25604[(2)]);
var state_25604__$1 = state_25604;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25604__$1,inst_25602);
} else {
if((state_val_25605 === (12))){
var state_25604__$1 = state_25604;
var statearr_25612_25632 = state_25604__$1;
(statearr_25612_25632[(2)] = null);

(statearr_25612_25632[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25605 === (2))){
var inst_25581 = (state_25604[(7)]);
var state_25604__$1 = state_25604;
if(cljs.core.truth_(inst_25581)){
var statearr_25613_25633 = state_25604__$1;
(statearr_25613_25633[(1)] = (4));

} else {
var statearr_25614_25634 = state_25604__$1;
(statearr_25614_25634[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25605 === (11))){
var inst_25595 = cljs.core.async.close_BANG_.call(null,ch);
var state_25604__$1 = state_25604;
var statearr_25615_25635 = state_25604__$1;
(statearr_25615_25635[(2)] = inst_25595);

(statearr_25615_25635[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25605 === (9))){
var state_25604__$1 = state_25604;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25616_25636 = state_25604__$1;
(statearr_25616_25636[(1)] = (11));

} else {
var statearr_25617_25637 = state_25604__$1;
(statearr_25617_25637[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25605 === (5))){
var inst_25581 = (state_25604[(7)]);
var state_25604__$1 = state_25604;
var statearr_25618_25638 = state_25604__$1;
(statearr_25618_25638[(2)] = inst_25581);

(statearr_25618_25638[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25605 === (10))){
var inst_25600 = (state_25604[(2)]);
var state_25604__$1 = state_25604;
var statearr_25619_25639 = state_25604__$1;
(statearr_25619_25639[(2)] = inst_25600);

(statearr_25619_25639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25605 === (8))){
var inst_25581 = (state_25604[(7)]);
var inst_25591 = cljs.core.next.call(null,inst_25581);
var inst_25581__$1 = inst_25591;
var state_25604__$1 = (function (){var statearr_25620 = state_25604;
(statearr_25620[(7)] = inst_25581__$1);

return statearr_25620;
})();
var statearr_25621_25640 = state_25604__$1;
(statearr_25621_25640[(2)] = null);

(statearr_25621_25640[(1)] = (2));


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
});})(c__25046__auto__))
;
return ((function (switch__22049__auto__,c__25046__auto__){
return (function() {
var cljs$core$async$state_machine__22050__auto__ = null;
var cljs$core$async$state_machine__22050__auto____0 = (function (){
var statearr_25622 = [null,null,null,null,null,null,null,null];
(statearr_25622[(0)] = cljs$core$async$state_machine__22050__auto__);

(statearr_25622[(1)] = (1));

return statearr_25622;
});
var cljs$core$async$state_machine__22050__auto____1 = (function (state_25604){
while(true){
var ret_value__22051__auto__ = (function (){try{while(true){
var result__22052__auto__ = switch__22049__auto__.call(null,state_25604);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22052__auto__;
}
break;
}
}catch (e25623){if((e25623 instanceof Object)){
var ex__22053__auto__ = e25623;
var statearr_25624_25641 = state_25604;
(statearr_25624_25641[(5)] = ex__22053__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25604);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25623;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25642 = state_25604;
state_25604 = G__25642;
continue;
} else {
return ret_value__22051__auto__;
}
break;
}
});
cljs$core$async$state_machine__22050__auto__ = function(state_25604){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22050__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22050__auto____1.call(this,state_25604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22050__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22050__auto____0;
cljs$core$async$state_machine__22050__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22050__auto____1;
return cljs$core$async$state_machine__22050__auto__;
})()
;})(switch__22049__auto__,c__25046__auto__))
})();
var state__25048__auto__ = (function (){var statearr_25625 = f__25047__auto__.call(null);
(statearr_25625[(6)] = c__25046__auto__);

return statearr_25625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25048__auto__);
});})(c__25046__auto__))
);

return c__25046__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25643 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25643 = (function (ch,cs,meta25644){
this.ch = ch;
this.cs = cs;
this.meta25644 = meta25644;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25643.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25645,meta25644__$1){
var self__ = this;
var _25645__$1 = this;
return (new cljs.core.async.t_cljs$core$async25643(self__.ch,self__.cs,meta25644__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25643.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25645){
var self__ = this;
var _25645__$1 = this;
return self__.meta25644;
});})(cs))
;

cljs.core.async.t_cljs$core$async25643.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25643.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25643.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25643.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25643.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25643.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25643.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25644","meta25644",629045800,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25643.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25643.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25643";

cljs.core.async.t_cljs$core$async25643.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25643");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25643.
 */
cljs.core.async.__GT_t_cljs$core$async25643 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25643(ch__$1,cs__$1,meta25644){
return (new cljs.core.async.t_cljs$core$async25643(ch__$1,cs__$1,meta25644));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25643(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__25046__auto___25865 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25046__auto___25865,cs,m,dchan,dctr,done){
return (function (){
var f__25047__auto__ = (function (){var switch__22049__auto__ = ((function (c__25046__auto___25865,cs,m,dchan,dctr,done){
return (function (state_25780){
var state_val_25781 = (state_25780[(1)]);
if((state_val_25781 === (7))){
var inst_25776 = (state_25780[(2)]);
var state_25780__$1 = state_25780;
var statearr_25782_25866 = state_25780__$1;
(statearr_25782_25866[(2)] = inst_25776);

(statearr_25782_25866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25781 === (20))){
var inst_25679 = (state_25780[(7)]);
var inst_25691 = cljs.core.first.call(null,inst_25679);
var inst_25692 = cljs.core.nth.call(null,inst_25691,(0),null);
var inst_25693 = cljs.core.nth.call(null,inst_25691,(1),null);
var state_25780__$1 = (function (){var statearr_25783 = state_25780;
(statearr_25783[(8)] = inst_25692);

return statearr_25783;
})();
if(cljs.core.truth_(inst_25693)){
var statearr_25784_25867 = state_25780__$1;
(statearr_25784_25867[(1)] = (22));

} else {
var statearr_25785_25868 = state_25780__$1;
(statearr_25785_25868[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25781 === (27))){
var inst_25728 = (state_25780[(9)]);
var inst_25648 = (state_25780[(10)]);
var inst_25721 = (state_25780[(11)]);
var inst_25723 = (state_25780[(12)]);
var inst_25728__$1 = cljs.core._nth.call(null,inst_25721,inst_25723);
var inst_25729 = cljs.core.async.put_BANG_.call(null,inst_25728__$1,inst_25648,done);
var state_25780__$1 = (function (){var statearr_25786 = state_25780;
(statearr_25786[(9)] = inst_25728__$1);

return statearr_25786;
})();
if(cljs.core.truth_(inst_25729)){
var statearr_25787_25869 = state_25780__$1;
(statearr_25787_25869[(1)] = (30));

} else {
var statearr_25788_25870 = state_25780__$1;
(statearr_25788_25870[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25781 === (1))){
var state_25780__$1 = state_25780;
var statearr_25789_25871 = state_25780__$1;
(statearr_25789_25871[(2)] = null);

(statearr_25789_25871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25781 === (24))){
var inst_25679 = (state_25780[(7)]);
var inst_25698 = (state_25780[(2)]);
var inst_25699 = cljs.core.next.call(null,inst_25679);
var inst_25657 = inst_25699;
var inst_25658 = null;
var inst_25659 = (0);
var inst_25660 = (0);
var state_25780__$1 = (function (){var statearr_25790 = state_25780;
(statearr_25790[(13)] = inst_25658);

(statearr_25790[(14)] = inst_25698);

(statearr_25790[(15)] = inst_25660);

(statearr_25790[(16)] = inst_25657);

(statearr_25790[(17)] = inst_25659);

return statearr_25790;
})();
var statearr_25791_25872 = state_25780__$1;
(statearr_25791_25872[(2)] = null);

(statearr_25791_25872[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25781 === (39))){
var state_25780__$1 = state_25780;
var statearr_25795_25873 = state_25780__$1;
(statearr_25795_25873[(2)] = null);

(statearr_25795_25873[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25781 === (4))){
var inst_25648 = (state_25780[(10)]);
var inst_25648__$1 = (state_25780[(2)]);
var inst_25649 = (inst_25648__$1 == null);
var state_25780__$1 = (function (){var statearr_25796 = state_25780;
(statearr_25796[(10)] = inst_25648__$1);

return statearr_25796;
})();
if(cljs.core.truth_(inst_25649)){
var statearr_25797_25874 = state_25780__$1;
(statearr_25797_25874[(1)] = (5));

} else {
var statearr_25798_25875 = state_25780__$1;
(statearr_25798_25875[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25781 === (15))){
var inst_25658 = (state_25780[(13)]);
var inst_25660 = (state_25780[(15)]);
var inst_25657 = (state_25780[(16)]);
var inst_25659 = (state_25780[(17)]);
var inst_25675 = (state_25780[(2)]);
var inst_25676 = (inst_25660 + (1));
var tmp25792 = inst_25658;
var tmp25793 = inst_25657;
var tmp25794 = inst_25659;
var inst_25657__$1 = tmp25793;
var inst_25658__$1 = tmp25792;
var inst_25659__$1 = tmp25794;
var inst_25660__$1 = inst_25676;
var state_25780__$1 = (function (){var statearr_25799 = state_25780;
(statearr_25799[(18)] = inst_25675);

(statearr_25799[(13)] = inst_25658__$1);

(statearr_25799[(15)] = inst_25660__$1);

(statearr_25799[(16)] = inst_25657__$1);

(statearr_25799[(17)] = inst_25659__$1);

return statearr_25799;
})();
var statearr_25800_25876 = state_25780__$1;
(statearr_25800_25876[(2)] = null);

(statearr_25800_25876[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25781 === (21))){
var inst_25702 = (state_25780[(2)]);
var state_25780__$1 = state_25780;
var statearr_25804_25877 = state_25780__$1;
(statearr_25804_25877[(2)] = inst_25702);

(statearr_25804_25877[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25781 === (31))){
var inst_25728 = (state_25780[(9)]);
var inst_25732 = done.call(null,null);
var inst_25733 = cljs.core.async.untap_STAR_.call(null,m,inst_25728);
var state_25780__$1 = (function (){var statearr_25805 = state_25780;
(statearr_25805[(19)] = inst_25732);

return statearr_25805;
})();
var statearr_25806_25878 = state_25780__$1;
(statearr_25806_25878[(2)] = inst_25733);

(statearr_25806_25878[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25781 === (32))){
var inst_25720 = (state_25780[(20)]);
var inst_25721 = (state_25780[(11)]);
var inst_25723 = (state_25780[(12)]);
var inst_25722 = (state_25780[(21)]);
var inst_25735 = (state_25780[(2)]);
var inst_25736 = (inst_25723 + (1));
var tmp25801 = inst_25720;
var tmp25802 = inst_25721;
var tmp25803 = inst_25722;
var inst_25720__$1 = tmp25801;
var inst_25721__$1 = tmp25802;
var inst_25722__$1 = tmp25803;
var inst_25723__$1 = inst_25736;
var state_25780__$1 = (function (){var statearr_25807 = state_25780;
(statearr_25807[(20)] = inst_25720__$1);

(statearr_25807[(22)] = inst_25735);

(statearr_25807[(11)] = inst_25721__$1);

(statearr_25807[(12)] = inst_25723__$1);

(statearr_25807[(21)] = inst_25722__$1);

return statearr_25807;
})();
var statearr_25808_25879 = state_25780__$1;
(statearr_25808_25879[(2)] = null);

(statearr_25808_25879[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25781 === (40))){
var inst_25748 = (state_25780[(23)]);
var inst_25752 = done.call(null,null);
var inst_25753 = cljs.core.async.untap_STAR_.call(null,m,inst_25748);
var state_25780__$1 = (function (){var statearr_25809 = state_25780;
(statearr_25809[(24)] = inst_25752);

return statearr_25809;
})();
var statearr_25810_25880 = state_25780__$1;
(statearr_25810_25880[(2)] = inst_25753);

(statearr_25810_25880[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25781 === (33))){
var inst_25739 = (state_25780[(25)]);
var inst_25741 = cljs.core.chunked_seq_QMARK_.call(null,inst_25739);
var state_25780__$1 = state_25780;
if(inst_25741){
var statearr_25811_25881 = state_25780__$1;
(statearr_25811_25881[(1)] = (36));

} else {
var statearr_25812_25882 = state_25780__$1;
(statearr_25812_25882[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25781 === (13))){
var inst_25669 = (state_25780[(26)]);
var inst_25672 = cljs.core.async.close_BANG_.call(null,inst_25669);
var state_25780__$1 = state_25780;
var statearr_25813_25883 = state_25780__$1;
(statearr_25813_25883[(2)] = inst_25672);

(statearr_25813_25883[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25781 === (22))){
var inst_25692 = (state_25780[(8)]);
var inst_25695 = cljs.core.async.close_BANG_.call(null,inst_25692);
var state_25780__$1 = state_25780;
var statearr_25814_25884 = state_25780__$1;
(statearr_25814_25884[(2)] = inst_25695);

(statearr_25814_25884[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25781 === (36))){
var inst_25739 = (state_25780[(25)]);
var inst_25743 = cljs.core.chunk_first.call(null,inst_25739);
var inst_25744 = cljs.core.chunk_rest.call(null,inst_25739);
var inst_25745 = cljs.core.count.call(null,inst_25743);
var inst_25720 = inst_25744;
var inst_25721 = inst_25743;
var inst_25722 = inst_25745;
var inst_25723 = (0);
var state_25780__$1 = (function (){var statearr_25815 = state_25780;
(statearr_25815[(20)] = inst_25720);

(statearr_25815[(11)] = inst_25721);

(statearr_25815[(12)] = inst_25723);

(statearr_25815[(21)] = inst_25722);

return statearr_25815;
})();
var statearr_25816_25885 = state_25780__$1;
(statearr_25816_25885[(2)] = null);

(statearr_25816_25885[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25781 === (41))){
var inst_25739 = (state_25780[(25)]);
var inst_25755 = (state_25780[(2)]);
var inst_25756 = cljs.core.next.call(null,inst_25739);
var inst_25720 = inst_25756;
var inst_25721 = null;
var inst_25722 = (0);
var inst_25723 = (0);
var state_25780__$1 = (function (){var statearr_25817 = state_25780;
(statearr_25817[(20)] = inst_25720);

(statearr_25817[(27)] = inst_25755);

(statearr_25817[(11)] = inst_25721);

(statearr_25817[(12)] = inst_25723);

(statearr_25817[(21)] = inst_25722);

return statearr_25817;
})();
var statearr_25818_25886 = state_25780__$1;
(statearr_25818_25886[(2)] = null);

(statearr_25818_25886[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25781 === (43))){
var state_25780__$1 = state_25780;
var statearr_25819_25887 = state_25780__$1;
(statearr_25819_25887[(2)] = null);

(statearr_25819_25887[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25781 === (29))){
var inst_25764 = (state_25780[(2)]);
var state_25780__$1 = state_25780;
var statearr_25820_25888 = state_25780__$1;
(statearr_25820_25888[(2)] = inst_25764);

(statearr_25820_25888[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25781 === (44))){
var inst_25773 = (state_25780[(2)]);
var state_25780__$1 = (function (){var statearr_25821 = state_25780;
(statearr_25821[(28)] = inst_25773);

return statearr_25821;
})();
var statearr_25822_25889 = state_25780__$1;
(statearr_25822_25889[(2)] = null);

(statearr_25822_25889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25781 === (6))){
var inst_25712 = (state_25780[(29)]);
var inst_25711 = cljs.core.deref.call(null,cs);
var inst_25712__$1 = cljs.core.keys.call(null,inst_25711);
var inst_25713 = cljs.core.count.call(null,inst_25712__$1);
var inst_25714 = cljs.core.reset_BANG_.call(null,dctr,inst_25713);
var inst_25719 = cljs.core.seq.call(null,inst_25712__$1);
var inst_25720 = inst_25719;
var inst_25721 = null;
var inst_25722 = (0);
var inst_25723 = (0);
var state_25780__$1 = (function (){var statearr_25823 = state_25780;
(statearr_25823[(20)] = inst_25720);

(statearr_25823[(30)] = inst_25714);

(statearr_25823[(29)] = inst_25712__$1);

(statearr_25823[(11)] = inst_25721);

(statearr_25823[(12)] = inst_25723);

(statearr_25823[(21)] = inst_25722);

return statearr_25823;
})();
var statearr_25824_25890 = state_25780__$1;
(statearr_25824_25890[(2)] = null);

(statearr_25824_25890[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25781 === (28))){
var inst_25720 = (state_25780[(20)]);
var inst_25739 = (state_25780[(25)]);
var inst_25739__$1 = cljs.core.seq.call(null,inst_25720);
var state_25780__$1 = (function (){var statearr_25825 = state_25780;
(statearr_25825[(25)] = inst_25739__$1);

return statearr_25825;
})();
if(inst_25739__$1){
var statearr_25826_25891 = state_25780__$1;
(statearr_25826_25891[(1)] = (33));

} else {
var statearr_25827_25892 = state_25780__$1;
(statearr_25827_25892[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25781 === (25))){
var inst_25723 = (state_25780[(12)]);
var inst_25722 = (state_25780[(21)]);
var inst_25725 = (inst_25723 < inst_25722);
var inst_25726 = inst_25725;
var state_25780__$1 = state_25780;
if(cljs.core.truth_(inst_25726)){
var statearr_25828_25893 = state_25780__$1;
(statearr_25828_25893[(1)] = (27));

} else {
var statearr_25829_25894 = state_25780__$1;
(statearr_25829_25894[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25781 === (34))){
var state_25780__$1 = state_25780;
var statearr_25830_25895 = state_25780__$1;
(statearr_25830_25895[(2)] = null);

(statearr_25830_25895[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25781 === (17))){
var state_25780__$1 = state_25780;
var statearr_25831_25896 = state_25780__$1;
(statearr_25831_25896[(2)] = null);

(statearr_25831_25896[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25781 === (3))){
var inst_25778 = (state_25780[(2)]);
var state_25780__$1 = state_25780;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25780__$1,inst_25778);
} else {
if((state_val_25781 === (12))){
var inst_25707 = (state_25780[(2)]);
var state_25780__$1 = state_25780;
var statearr_25832_25897 = state_25780__$1;
(statearr_25832_25897[(2)] = inst_25707);

(statearr_25832_25897[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25781 === (2))){
var state_25780__$1 = state_25780;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25780__$1,(4),ch);
} else {
if((state_val_25781 === (23))){
var state_25780__$1 = state_25780;
var statearr_25833_25898 = state_25780__$1;
(statearr_25833_25898[(2)] = null);

(statearr_25833_25898[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25781 === (35))){
var inst_25762 = (state_25780[(2)]);
var state_25780__$1 = state_25780;
var statearr_25834_25899 = state_25780__$1;
(statearr_25834_25899[(2)] = inst_25762);

(statearr_25834_25899[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25781 === (19))){
var inst_25679 = (state_25780[(7)]);
var inst_25683 = cljs.core.chunk_first.call(null,inst_25679);
var inst_25684 = cljs.core.chunk_rest.call(null,inst_25679);
var inst_25685 = cljs.core.count.call(null,inst_25683);
var inst_25657 = inst_25684;
var inst_25658 = inst_25683;
var inst_25659 = inst_25685;
var inst_25660 = (0);
var state_25780__$1 = (function (){var statearr_25835 = state_25780;
(statearr_25835[(13)] = inst_25658);

(statearr_25835[(15)] = inst_25660);

(statearr_25835[(16)] = inst_25657);

(statearr_25835[(17)] = inst_25659);

return statearr_25835;
})();
var statearr_25836_25900 = state_25780__$1;
(statearr_25836_25900[(2)] = null);

(statearr_25836_25900[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25781 === (11))){
var inst_25679 = (state_25780[(7)]);
var inst_25657 = (state_25780[(16)]);
var inst_25679__$1 = cljs.core.seq.call(null,inst_25657);
var state_25780__$1 = (function (){var statearr_25837 = state_25780;
(statearr_25837[(7)] = inst_25679__$1);

return statearr_25837;
})();
if(inst_25679__$1){
var statearr_25838_25901 = state_25780__$1;
(statearr_25838_25901[(1)] = (16));

} else {
var statearr_25839_25902 = state_25780__$1;
(statearr_25839_25902[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25781 === (9))){
var inst_25709 = (state_25780[(2)]);
var state_25780__$1 = state_25780;
var statearr_25840_25903 = state_25780__$1;
(statearr_25840_25903[(2)] = inst_25709);

(statearr_25840_25903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25781 === (5))){
var inst_25655 = cljs.core.deref.call(null,cs);
var inst_25656 = cljs.core.seq.call(null,inst_25655);
var inst_25657 = inst_25656;
var inst_25658 = null;
var inst_25659 = (0);
var inst_25660 = (0);
var state_25780__$1 = (function (){var statearr_25841 = state_25780;
(statearr_25841[(13)] = inst_25658);

(statearr_25841[(15)] = inst_25660);

(statearr_25841[(16)] = inst_25657);

(statearr_25841[(17)] = inst_25659);

return statearr_25841;
})();
var statearr_25842_25904 = state_25780__$1;
(statearr_25842_25904[(2)] = null);

(statearr_25842_25904[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25781 === (14))){
var state_25780__$1 = state_25780;
var statearr_25843_25905 = state_25780__$1;
(statearr_25843_25905[(2)] = null);

(statearr_25843_25905[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25781 === (45))){
var inst_25770 = (state_25780[(2)]);
var state_25780__$1 = state_25780;
var statearr_25844_25906 = state_25780__$1;
(statearr_25844_25906[(2)] = inst_25770);

(statearr_25844_25906[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25781 === (26))){
var inst_25712 = (state_25780[(29)]);
var inst_25766 = (state_25780[(2)]);
var inst_25767 = cljs.core.seq.call(null,inst_25712);
var state_25780__$1 = (function (){var statearr_25845 = state_25780;
(statearr_25845[(31)] = inst_25766);

return statearr_25845;
})();
if(inst_25767){
var statearr_25846_25907 = state_25780__$1;
(statearr_25846_25907[(1)] = (42));

} else {
var statearr_25847_25908 = state_25780__$1;
(statearr_25847_25908[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25781 === (16))){
var inst_25679 = (state_25780[(7)]);
var inst_25681 = cljs.core.chunked_seq_QMARK_.call(null,inst_25679);
var state_25780__$1 = state_25780;
if(inst_25681){
var statearr_25848_25909 = state_25780__$1;
(statearr_25848_25909[(1)] = (19));

} else {
var statearr_25849_25910 = state_25780__$1;
(statearr_25849_25910[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25781 === (38))){
var inst_25759 = (state_25780[(2)]);
var state_25780__$1 = state_25780;
var statearr_25850_25911 = state_25780__$1;
(statearr_25850_25911[(2)] = inst_25759);

(statearr_25850_25911[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25781 === (30))){
var state_25780__$1 = state_25780;
var statearr_25851_25912 = state_25780__$1;
(statearr_25851_25912[(2)] = null);

(statearr_25851_25912[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25781 === (10))){
var inst_25658 = (state_25780[(13)]);
var inst_25660 = (state_25780[(15)]);
var inst_25668 = cljs.core._nth.call(null,inst_25658,inst_25660);
var inst_25669 = cljs.core.nth.call(null,inst_25668,(0),null);
var inst_25670 = cljs.core.nth.call(null,inst_25668,(1),null);
var state_25780__$1 = (function (){var statearr_25852 = state_25780;
(statearr_25852[(26)] = inst_25669);

return statearr_25852;
})();
if(cljs.core.truth_(inst_25670)){
var statearr_25853_25913 = state_25780__$1;
(statearr_25853_25913[(1)] = (13));

} else {
var statearr_25854_25914 = state_25780__$1;
(statearr_25854_25914[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25781 === (18))){
var inst_25705 = (state_25780[(2)]);
var state_25780__$1 = state_25780;
var statearr_25855_25915 = state_25780__$1;
(statearr_25855_25915[(2)] = inst_25705);

(statearr_25855_25915[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25781 === (42))){
var state_25780__$1 = state_25780;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25780__$1,(45),dchan);
} else {
if((state_val_25781 === (37))){
var inst_25748 = (state_25780[(23)]);
var inst_25648 = (state_25780[(10)]);
var inst_25739 = (state_25780[(25)]);
var inst_25748__$1 = cljs.core.first.call(null,inst_25739);
var inst_25749 = cljs.core.async.put_BANG_.call(null,inst_25748__$1,inst_25648,done);
var state_25780__$1 = (function (){var statearr_25856 = state_25780;
(statearr_25856[(23)] = inst_25748__$1);

return statearr_25856;
})();
if(cljs.core.truth_(inst_25749)){
var statearr_25857_25916 = state_25780__$1;
(statearr_25857_25916[(1)] = (39));

} else {
var statearr_25858_25917 = state_25780__$1;
(statearr_25858_25917[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25781 === (8))){
var inst_25660 = (state_25780[(15)]);
var inst_25659 = (state_25780[(17)]);
var inst_25662 = (inst_25660 < inst_25659);
var inst_25663 = inst_25662;
var state_25780__$1 = state_25780;
if(cljs.core.truth_(inst_25663)){
var statearr_25859_25918 = state_25780__$1;
(statearr_25859_25918[(1)] = (10));

} else {
var statearr_25860_25919 = state_25780__$1;
(statearr_25860_25919[(1)] = (11));

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
});})(c__25046__auto___25865,cs,m,dchan,dctr,done))
;
return ((function (switch__22049__auto__,c__25046__auto___25865,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22050__auto__ = null;
var cljs$core$async$mult_$_state_machine__22050__auto____0 = (function (){
var statearr_25861 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25861[(0)] = cljs$core$async$mult_$_state_machine__22050__auto__);

(statearr_25861[(1)] = (1));

return statearr_25861;
});
var cljs$core$async$mult_$_state_machine__22050__auto____1 = (function (state_25780){
while(true){
var ret_value__22051__auto__ = (function (){try{while(true){
var result__22052__auto__ = switch__22049__auto__.call(null,state_25780);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22052__auto__;
}
break;
}
}catch (e25862){if((e25862 instanceof Object)){
var ex__22053__auto__ = e25862;
var statearr_25863_25920 = state_25780;
(statearr_25863_25920[(5)] = ex__22053__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25780);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25921 = state_25780;
state_25780 = G__25921;
continue;
} else {
return ret_value__22051__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22050__auto__ = function(state_25780){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22050__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22050__auto____1.call(this,state_25780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22050__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22050__auto____0;
cljs$core$async$mult_$_state_machine__22050__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22050__auto____1;
return cljs$core$async$mult_$_state_machine__22050__auto__;
})()
;})(switch__22049__auto__,c__25046__auto___25865,cs,m,dchan,dctr,done))
})();
var state__25048__auto__ = (function (){var statearr_25864 = f__25047__auto__.call(null);
(statearr_25864[(6)] = c__25046__auto___25865);

return statearr_25864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25048__auto__);
});})(c__25046__auto___25865,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__25923 = arguments.length;
switch (G__25923) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___25935 = arguments.length;
var i__4731__auto___25936 = (0);
while(true){
if((i__4731__auto___25936 < len__4730__auto___25935)){
args__4736__auto__.push((arguments[i__4731__auto___25936]));

var G__25937 = (i__4731__auto___25936 + (1));
i__4731__auto___25936 = G__25937;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25929){
var map__25930 = p__25929;
var map__25930__$1 = (((((!((map__25930 == null))))?(((((map__25930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25930):map__25930);
var opts = map__25930__$1;
var statearr_25932_25938 = state;
(statearr_25932_25938[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__25930,map__25930__$1,opts){
return (function (val){
var statearr_25933_25939 = state;
(statearr_25933_25939[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25930,map__25930__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_25934_25940 = state;
(statearr_25934_25940[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25925){
var G__25926 = cljs.core.first.call(null,seq25925);
var seq25925__$1 = cljs.core.next.call(null,seq25925);
var G__25927 = cljs.core.first.call(null,seq25925__$1);
var seq25925__$2 = cljs.core.next.call(null,seq25925__$1);
var G__25928 = cljs.core.first.call(null,seq25925__$2);
var seq25925__$3 = cljs.core.next.call(null,seq25925__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25926,G__25927,G__25928,seq25925__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25941 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25941 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25942){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta25942 = meta25942;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25941.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25943,meta25942__$1){
var self__ = this;
var _25943__$1 = this;
return (new cljs.core.async.t_cljs$core$async25941(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25942__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25941.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25943){
var self__ = this;
var _25943__$1 = this;
return self__.meta25942;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25941.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25941.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25941.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25941.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25941.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25941.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25941.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25941.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25941.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25942","meta25942",1416731031,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25941.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25941.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25941";

cljs.core.async.t_cljs$core$async25941.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25941");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25941.
 */
cljs.core.async.__GT_t_cljs$core$async25941 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25941(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25942){
return (new cljs.core.async.t_cljs$core$async25941(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25942));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25941(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25046__auto___26105 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25046__auto___26105,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__25047__auto__ = (function (){var switch__22049__auto__ = ((function (c__25046__auto___26105,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26045){
var state_val_26046 = (state_26045[(1)]);
if((state_val_26046 === (7))){
var inst_25960 = (state_26045[(2)]);
var state_26045__$1 = state_26045;
var statearr_26047_26106 = state_26045__$1;
(statearr_26047_26106[(2)] = inst_25960);

(statearr_26047_26106[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26046 === (20))){
var inst_25972 = (state_26045[(7)]);
var state_26045__$1 = state_26045;
var statearr_26048_26107 = state_26045__$1;
(statearr_26048_26107[(2)] = inst_25972);

(statearr_26048_26107[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26046 === (27))){
var state_26045__$1 = state_26045;
var statearr_26049_26108 = state_26045__$1;
(statearr_26049_26108[(2)] = null);

(statearr_26049_26108[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26046 === (1))){
var inst_25947 = (state_26045[(8)]);
var inst_25947__$1 = calc_state.call(null);
var inst_25949 = (inst_25947__$1 == null);
var inst_25950 = cljs.core.not.call(null,inst_25949);
var state_26045__$1 = (function (){var statearr_26050 = state_26045;
(statearr_26050[(8)] = inst_25947__$1);

return statearr_26050;
})();
if(inst_25950){
var statearr_26051_26109 = state_26045__$1;
(statearr_26051_26109[(1)] = (2));

} else {
var statearr_26052_26110 = state_26045__$1;
(statearr_26052_26110[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26046 === (24))){
var inst_26005 = (state_26045[(9)]);
var inst_26019 = (state_26045[(10)]);
var inst_25996 = (state_26045[(11)]);
var inst_26019__$1 = inst_25996.call(null,inst_26005);
var state_26045__$1 = (function (){var statearr_26053 = state_26045;
(statearr_26053[(10)] = inst_26019__$1);

return statearr_26053;
})();
if(cljs.core.truth_(inst_26019__$1)){
var statearr_26054_26111 = state_26045__$1;
(statearr_26054_26111[(1)] = (29));

} else {
var statearr_26055_26112 = state_26045__$1;
(statearr_26055_26112[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26046 === (4))){
var inst_25963 = (state_26045[(2)]);
var state_26045__$1 = state_26045;
if(cljs.core.truth_(inst_25963)){
var statearr_26056_26113 = state_26045__$1;
(statearr_26056_26113[(1)] = (8));

} else {
var statearr_26057_26114 = state_26045__$1;
(statearr_26057_26114[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26046 === (15))){
var inst_25990 = (state_26045[(2)]);
var state_26045__$1 = state_26045;
if(cljs.core.truth_(inst_25990)){
var statearr_26058_26115 = state_26045__$1;
(statearr_26058_26115[(1)] = (19));

} else {
var statearr_26059_26116 = state_26045__$1;
(statearr_26059_26116[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26046 === (21))){
var inst_25995 = (state_26045[(12)]);
var inst_25995__$1 = (state_26045[(2)]);
var inst_25996 = cljs.core.get.call(null,inst_25995__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25997 = cljs.core.get.call(null,inst_25995__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25998 = cljs.core.get.call(null,inst_25995__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26045__$1 = (function (){var statearr_26060 = state_26045;
(statearr_26060[(13)] = inst_25997);

(statearr_26060[(12)] = inst_25995__$1);

(statearr_26060[(11)] = inst_25996);

return statearr_26060;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26045__$1,(22),inst_25998);
} else {
if((state_val_26046 === (31))){
var inst_26027 = (state_26045[(2)]);
var state_26045__$1 = state_26045;
if(cljs.core.truth_(inst_26027)){
var statearr_26061_26117 = state_26045__$1;
(statearr_26061_26117[(1)] = (32));

} else {
var statearr_26062_26118 = state_26045__$1;
(statearr_26062_26118[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26046 === (32))){
var inst_26004 = (state_26045[(14)]);
var state_26045__$1 = state_26045;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26045__$1,(35),out,inst_26004);
} else {
if((state_val_26046 === (33))){
var inst_25995 = (state_26045[(12)]);
var inst_25972 = inst_25995;
var state_26045__$1 = (function (){var statearr_26063 = state_26045;
(statearr_26063[(7)] = inst_25972);

return statearr_26063;
})();
var statearr_26064_26119 = state_26045__$1;
(statearr_26064_26119[(2)] = null);

(statearr_26064_26119[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26046 === (13))){
var inst_25972 = (state_26045[(7)]);
var inst_25979 = inst_25972.cljs$lang$protocol_mask$partition0$;
var inst_25980 = (inst_25979 & (64));
var inst_25981 = inst_25972.cljs$core$ISeq$;
var inst_25982 = (cljs.core.PROTOCOL_SENTINEL === inst_25981);
var inst_25983 = ((inst_25980) || (inst_25982));
var state_26045__$1 = state_26045;
if(cljs.core.truth_(inst_25983)){
var statearr_26065_26120 = state_26045__$1;
(statearr_26065_26120[(1)] = (16));

} else {
var statearr_26066_26121 = state_26045__$1;
(statearr_26066_26121[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26046 === (22))){
var inst_26005 = (state_26045[(9)]);
var inst_26004 = (state_26045[(14)]);
var inst_26003 = (state_26045[(2)]);
var inst_26004__$1 = cljs.core.nth.call(null,inst_26003,(0),null);
var inst_26005__$1 = cljs.core.nth.call(null,inst_26003,(1),null);
var inst_26006 = (inst_26004__$1 == null);
var inst_26007 = cljs.core._EQ_.call(null,inst_26005__$1,change);
var inst_26008 = ((inst_26006) || (inst_26007));
var state_26045__$1 = (function (){var statearr_26067 = state_26045;
(statearr_26067[(9)] = inst_26005__$1);

(statearr_26067[(14)] = inst_26004__$1);

return statearr_26067;
})();
if(cljs.core.truth_(inst_26008)){
var statearr_26068_26122 = state_26045__$1;
(statearr_26068_26122[(1)] = (23));

} else {
var statearr_26069_26123 = state_26045__$1;
(statearr_26069_26123[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26046 === (36))){
var inst_25995 = (state_26045[(12)]);
var inst_25972 = inst_25995;
var state_26045__$1 = (function (){var statearr_26070 = state_26045;
(statearr_26070[(7)] = inst_25972);

return statearr_26070;
})();
var statearr_26071_26124 = state_26045__$1;
(statearr_26071_26124[(2)] = null);

(statearr_26071_26124[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26046 === (29))){
var inst_26019 = (state_26045[(10)]);
var state_26045__$1 = state_26045;
var statearr_26072_26125 = state_26045__$1;
(statearr_26072_26125[(2)] = inst_26019);

(statearr_26072_26125[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26046 === (6))){
var state_26045__$1 = state_26045;
var statearr_26073_26126 = state_26045__$1;
(statearr_26073_26126[(2)] = false);

(statearr_26073_26126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26046 === (28))){
var inst_26015 = (state_26045[(2)]);
var inst_26016 = calc_state.call(null);
var inst_25972 = inst_26016;
var state_26045__$1 = (function (){var statearr_26074 = state_26045;
(statearr_26074[(15)] = inst_26015);

(statearr_26074[(7)] = inst_25972);

return statearr_26074;
})();
var statearr_26075_26127 = state_26045__$1;
(statearr_26075_26127[(2)] = null);

(statearr_26075_26127[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26046 === (25))){
var inst_26041 = (state_26045[(2)]);
var state_26045__$1 = state_26045;
var statearr_26076_26128 = state_26045__$1;
(statearr_26076_26128[(2)] = inst_26041);

(statearr_26076_26128[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26046 === (34))){
var inst_26039 = (state_26045[(2)]);
var state_26045__$1 = state_26045;
var statearr_26077_26129 = state_26045__$1;
(statearr_26077_26129[(2)] = inst_26039);

(statearr_26077_26129[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26046 === (17))){
var state_26045__$1 = state_26045;
var statearr_26078_26130 = state_26045__$1;
(statearr_26078_26130[(2)] = false);

(statearr_26078_26130[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26046 === (3))){
var state_26045__$1 = state_26045;
var statearr_26079_26131 = state_26045__$1;
(statearr_26079_26131[(2)] = false);

(statearr_26079_26131[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26046 === (12))){
var inst_26043 = (state_26045[(2)]);
var state_26045__$1 = state_26045;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26045__$1,inst_26043);
} else {
if((state_val_26046 === (2))){
var inst_25947 = (state_26045[(8)]);
var inst_25952 = inst_25947.cljs$lang$protocol_mask$partition0$;
var inst_25953 = (inst_25952 & (64));
var inst_25954 = inst_25947.cljs$core$ISeq$;
var inst_25955 = (cljs.core.PROTOCOL_SENTINEL === inst_25954);
var inst_25956 = ((inst_25953) || (inst_25955));
var state_26045__$1 = state_26045;
if(cljs.core.truth_(inst_25956)){
var statearr_26080_26132 = state_26045__$1;
(statearr_26080_26132[(1)] = (5));

} else {
var statearr_26081_26133 = state_26045__$1;
(statearr_26081_26133[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26046 === (23))){
var inst_26004 = (state_26045[(14)]);
var inst_26010 = (inst_26004 == null);
var state_26045__$1 = state_26045;
if(cljs.core.truth_(inst_26010)){
var statearr_26082_26134 = state_26045__$1;
(statearr_26082_26134[(1)] = (26));

} else {
var statearr_26083_26135 = state_26045__$1;
(statearr_26083_26135[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26046 === (35))){
var inst_26030 = (state_26045[(2)]);
var state_26045__$1 = state_26045;
if(cljs.core.truth_(inst_26030)){
var statearr_26084_26136 = state_26045__$1;
(statearr_26084_26136[(1)] = (36));

} else {
var statearr_26085_26137 = state_26045__$1;
(statearr_26085_26137[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26046 === (19))){
var inst_25972 = (state_26045[(7)]);
var inst_25992 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25972);
var state_26045__$1 = state_26045;
var statearr_26086_26138 = state_26045__$1;
(statearr_26086_26138[(2)] = inst_25992);

(statearr_26086_26138[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26046 === (11))){
var inst_25972 = (state_26045[(7)]);
var inst_25976 = (inst_25972 == null);
var inst_25977 = cljs.core.not.call(null,inst_25976);
var state_26045__$1 = state_26045;
if(inst_25977){
var statearr_26087_26139 = state_26045__$1;
(statearr_26087_26139[(1)] = (13));

} else {
var statearr_26088_26140 = state_26045__$1;
(statearr_26088_26140[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26046 === (9))){
var inst_25947 = (state_26045[(8)]);
var state_26045__$1 = state_26045;
var statearr_26089_26141 = state_26045__$1;
(statearr_26089_26141[(2)] = inst_25947);

(statearr_26089_26141[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26046 === (5))){
var state_26045__$1 = state_26045;
var statearr_26090_26142 = state_26045__$1;
(statearr_26090_26142[(2)] = true);

(statearr_26090_26142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26046 === (14))){
var state_26045__$1 = state_26045;
var statearr_26091_26143 = state_26045__$1;
(statearr_26091_26143[(2)] = false);

(statearr_26091_26143[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26046 === (26))){
var inst_26005 = (state_26045[(9)]);
var inst_26012 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26005);
var state_26045__$1 = state_26045;
var statearr_26092_26144 = state_26045__$1;
(statearr_26092_26144[(2)] = inst_26012);

(statearr_26092_26144[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26046 === (16))){
var state_26045__$1 = state_26045;
var statearr_26093_26145 = state_26045__$1;
(statearr_26093_26145[(2)] = true);

(statearr_26093_26145[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26046 === (38))){
var inst_26035 = (state_26045[(2)]);
var state_26045__$1 = state_26045;
var statearr_26094_26146 = state_26045__$1;
(statearr_26094_26146[(2)] = inst_26035);

(statearr_26094_26146[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26046 === (30))){
var inst_26005 = (state_26045[(9)]);
var inst_25997 = (state_26045[(13)]);
var inst_25996 = (state_26045[(11)]);
var inst_26022 = cljs.core.empty_QMARK_.call(null,inst_25996);
var inst_26023 = inst_25997.call(null,inst_26005);
var inst_26024 = cljs.core.not.call(null,inst_26023);
var inst_26025 = ((inst_26022) && (inst_26024));
var state_26045__$1 = state_26045;
var statearr_26095_26147 = state_26045__$1;
(statearr_26095_26147[(2)] = inst_26025);

(statearr_26095_26147[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26046 === (10))){
var inst_25947 = (state_26045[(8)]);
var inst_25968 = (state_26045[(2)]);
var inst_25969 = cljs.core.get.call(null,inst_25968,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25970 = cljs.core.get.call(null,inst_25968,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25971 = cljs.core.get.call(null,inst_25968,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25972 = inst_25947;
var state_26045__$1 = (function (){var statearr_26096 = state_26045;
(statearr_26096[(16)] = inst_25969);

(statearr_26096[(17)] = inst_25970);

(statearr_26096[(7)] = inst_25972);

(statearr_26096[(18)] = inst_25971);

return statearr_26096;
})();
var statearr_26097_26148 = state_26045__$1;
(statearr_26097_26148[(2)] = null);

(statearr_26097_26148[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26046 === (18))){
var inst_25987 = (state_26045[(2)]);
var state_26045__$1 = state_26045;
var statearr_26098_26149 = state_26045__$1;
(statearr_26098_26149[(2)] = inst_25987);

(statearr_26098_26149[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26046 === (37))){
var state_26045__$1 = state_26045;
var statearr_26099_26150 = state_26045__$1;
(statearr_26099_26150[(2)] = null);

(statearr_26099_26150[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26046 === (8))){
var inst_25947 = (state_26045[(8)]);
var inst_25965 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25947);
var state_26045__$1 = state_26045;
var statearr_26100_26151 = state_26045__$1;
(statearr_26100_26151[(2)] = inst_25965);

(statearr_26100_26151[(1)] = (10));


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
});})(c__25046__auto___26105,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22049__auto__,c__25046__auto___26105,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22050__auto__ = null;
var cljs$core$async$mix_$_state_machine__22050__auto____0 = (function (){
var statearr_26101 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26101[(0)] = cljs$core$async$mix_$_state_machine__22050__auto__);

(statearr_26101[(1)] = (1));

return statearr_26101;
});
var cljs$core$async$mix_$_state_machine__22050__auto____1 = (function (state_26045){
while(true){
var ret_value__22051__auto__ = (function (){try{while(true){
var result__22052__auto__ = switch__22049__auto__.call(null,state_26045);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22052__auto__;
}
break;
}
}catch (e26102){if((e26102 instanceof Object)){
var ex__22053__auto__ = e26102;
var statearr_26103_26152 = state_26045;
(statearr_26103_26152[(5)] = ex__22053__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26102;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26153 = state_26045;
state_26045 = G__26153;
continue;
} else {
return ret_value__22051__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22050__auto__ = function(state_26045){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22050__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22050__auto____1.call(this,state_26045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22050__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22050__auto____0;
cljs$core$async$mix_$_state_machine__22050__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22050__auto____1;
return cljs$core$async$mix_$_state_machine__22050__auto__;
})()
;})(switch__22049__auto__,c__25046__auto___26105,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__25048__auto__ = (function (){var statearr_26104 = f__25047__auto__.call(null);
(statearr_26104[(6)] = c__25046__auto___26105);

return statearr_26104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25048__auto__);
});})(c__25046__auto___26105,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__26155 = arguments.length;
switch (G__26155) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__26159 = arguments.length;
switch (G__26159) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__26157_SHARP_){
if(cljs.core.truth_(p1__26157_SHARP_.call(null,topic))){
return p1__26157_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26157_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26160 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26160 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26161){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26161 = meta26161;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26160.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26162,meta26161__$1){
var self__ = this;
var _26162__$1 = this;
return (new cljs.core.async.t_cljs$core$async26160(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26161__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26160.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26162){
var self__ = this;
var _26162__$1 = this;
return self__.meta26161;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26160.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26160.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26160.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26160.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26160.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26160.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26160.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26160.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26161","meta26161",1037701941,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26160.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26160.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26160";

cljs.core.async.t_cljs$core$async26160.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26160");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26160.
 */
cljs.core.async.__GT_t_cljs$core$async26160 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async26160(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26161){
return (new cljs.core.async.t_cljs$core$async26160(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26161));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async26160(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25046__auto___26280 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25046__auto___26280,mults,ensure_mult,p){
return (function (){
var f__25047__auto__ = (function (){var switch__22049__auto__ = ((function (c__25046__auto___26280,mults,ensure_mult,p){
return (function (state_26234){
var state_val_26235 = (state_26234[(1)]);
if((state_val_26235 === (7))){
var inst_26230 = (state_26234[(2)]);
var state_26234__$1 = state_26234;
var statearr_26236_26281 = state_26234__$1;
(statearr_26236_26281[(2)] = inst_26230);

(statearr_26236_26281[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (20))){
var state_26234__$1 = state_26234;
var statearr_26237_26282 = state_26234__$1;
(statearr_26237_26282[(2)] = null);

(statearr_26237_26282[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (1))){
var state_26234__$1 = state_26234;
var statearr_26238_26283 = state_26234__$1;
(statearr_26238_26283[(2)] = null);

(statearr_26238_26283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (24))){
var inst_26213 = (state_26234[(7)]);
var inst_26222 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26213);
var state_26234__$1 = state_26234;
var statearr_26239_26284 = state_26234__$1;
(statearr_26239_26284[(2)] = inst_26222);

(statearr_26239_26284[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (4))){
var inst_26165 = (state_26234[(8)]);
var inst_26165__$1 = (state_26234[(2)]);
var inst_26166 = (inst_26165__$1 == null);
var state_26234__$1 = (function (){var statearr_26240 = state_26234;
(statearr_26240[(8)] = inst_26165__$1);

return statearr_26240;
})();
if(cljs.core.truth_(inst_26166)){
var statearr_26241_26285 = state_26234__$1;
(statearr_26241_26285[(1)] = (5));

} else {
var statearr_26242_26286 = state_26234__$1;
(statearr_26242_26286[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (15))){
var inst_26207 = (state_26234[(2)]);
var state_26234__$1 = state_26234;
var statearr_26243_26287 = state_26234__$1;
(statearr_26243_26287[(2)] = inst_26207);

(statearr_26243_26287[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (21))){
var inst_26227 = (state_26234[(2)]);
var state_26234__$1 = (function (){var statearr_26244 = state_26234;
(statearr_26244[(9)] = inst_26227);

return statearr_26244;
})();
var statearr_26245_26288 = state_26234__$1;
(statearr_26245_26288[(2)] = null);

(statearr_26245_26288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (13))){
var inst_26189 = (state_26234[(10)]);
var inst_26191 = cljs.core.chunked_seq_QMARK_.call(null,inst_26189);
var state_26234__$1 = state_26234;
if(inst_26191){
var statearr_26246_26289 = state_26234__$1;
(statearr_26246_26289[(1)] = (16));

} else {
var statearr_26247_26290 = state_26234__$1;
(statearr_26247_26290[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (22))){
var inst_26219 = (state_26234[(2)]);
var state_26234__$1 = state_26234;
if(cljs.core.truth_(inst_26219)){
var statearr_26248_26291 = state_26234__$1;
(statearr_26248_26291[(1)] = (23));

} else {
var statearr_26249_26292 = state_26234__$1;
(statearr_26249_26292[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (6))){
var inst_26215 = (state_26234[(11)]);
var inst_26165 = (state_26234[(8)]);
var inst_26213 = (state_26234[(7)]);
var inst_26213__$1 = topic_fn.call(null,inst_26165);
var inst_26214 = cljs.core.deref.call(null,mults);
var inst_26215__$1 = cljs.core.get.call(null,inst_26214,inst_26213__$1);
var state_26234__$1 = (function (){var statearr_26250 = state_26234;
(statearr_26250[(11)] = inst_26215__$1);

(statearr_26250[(7)] = inst_26213__$1);

return statearr_26250;
})();
if(cljs.core.truth_(inst_26215__$1)){
var statearr_26251_26293 = state_26234__$1;
(statearr_26251_26293[(1)] = (19));

} else {
var statearr_26252_26294 = state_26234__$1;
(statearr_26252_26294[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (25))){
var inst_26224 = (state_26234[(2)]);
var state_26234__$1 = state_26234;
var statearr_26253_26295 = state_26234__$1;
(statearr_26253_26295[(2)] = inst_26224);

(statearr_26253_26295[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (17))){
var inst_26189 = (state_26234[(10)]);
var inst_26198 = cljs.core.first.call(null,inst_26189);
var inst_26199 = cljs.core.async.muxch_STAR_.call(null,inst_26198);
var inst_26200 = cljs.core.async.close_BANG_.call(null,inst_26199);
var inst_26201 = cljs.core.next.call(null,inst_26189);
var inst_26175 = inst_26201;
var inst_26176 = null;
var inst_26177 = (0);
var inst_26178 = (0);
var state_26234__$1 = (function (){var statearr_26254 = state_26234;
(statearr_26254[(12)] = inst_26177);

(statearr_26254[(13)] = inst_26178);

(statearr_26254[(14)] = inst_26176);

(statearr_26254[(15)] = inst_26200);

(statearr_26254[(16)] = inst_26175);

return statearr_26254;
})();
var statearr_26255_26296 = state_26234__$1;
(statearr_26255_26296[(2)] = null);

(statearr_26255_26296[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (3))){
var inst_26232 = (state_26234[(2)]);
var state_26234__$1 = state_26234;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26234__$1,inst_26232);
} else {
if((state_val_26235 === (12))){
var inst_26209 = (state_26234[(2)]);
var state_26234__$1 = state_26234;
var statearr_26256_26297 = state_26234__$1;
(statearr_26256_26297[(2)] = inst_26209);

(statearr_26256_26297[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (2))){
var state_26234__$1 = state_26234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26234__$1,(4),ch);
} else {
if((state_val_26235 === (23))){
var state_26234__$1 = state_26234;
var statearr_26257_26298 = state_26234__$1;
(statearr_26257_26298[(2)] = null);

(statearr_26257_26298[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (19))){
var inst_26215 = (state_26234[(11)]);
var inst_26165 = (state_26234[(8)]);
var inst_26217 = cljs.core.async.muxch_STAR_.call(null,inst_26215);
var state_26234__$1 = state_26234;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26234__$1,(22),inst_26217,inst_26165);
} else {
if((state_val_26235 === (11))){
var inst_26189 = (state_26234[(10)]);
var inst_26175 = (state_26234[(16)]);
var inst_26189__$1 = cljs.core.seq.call(null,inst_26175);
var state_26234__$1 = (function (){var statearr_26258 = state_26234;
(statearr_26258[(10)] = inst_26189__$1);

return statearr_26258;
})();
if(inst_26189__$1){
var statearr_26259_26299 = state_26234__$1;
(statearr_26259_26299[(1)] = (13));

} else {
var statearr_26260_26300 = state_26234__$1;
(statearr_26260_26300[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (9))){
var inst_26211 = (state_26234[(2)]);
var state_26234__$1 = state_26234;
var statearr_26261_26301 = state_26234__$1;
(statearr_26261_26301[(2)] = inst_26211);

(statearr_26261_26301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (5))){
var inst_26172 = cljs.core.deref.call(null,mults);
var inst_26173 = cljs.core.vals.call(null,inst_26172);
var inst_26174 = cljs.core.seq.call(null,inst_26173);
var inst_26175 = inst_26174;
var inst_26176 = null;
var inst_26177 = (0);
var inst_26178 = (0);
var state_26234__$1 = (function (){var statearr_26262 = state_26234;
(statearr_26262[(12)] = inst_26177);

(statearr_26262[(13)] = inst_26178);

(statearr_26262[(14)] = inst_26176);

(statearr_26262[(16)] = inst_26175);

return statearr_26262;
})();
var statearr_26263_26302 = state_26234__$1;
(statearr_26263_26302[(2)] = null);

(statearr_26263_26302[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (14))){
var state_26234__$1 = state_26234;
var statearr_26267_26303 = state_26234__$1;
(statearr_26267_26303[(2)] = null);

(statearr_26267_26303[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (16))){
var inst_26189 = (state_26234[(10)]);
var inst_26193 = cljs.core.chunk_first.call(null,inst_26189);
var inst_26194 = cljs.core.chunk_rest.call(null,inst_26189);
var inst_26195 = cljs.core.count.call(null,inst_26193);
var inst_26175 = inst_26194;
var inst_26176 = inst_26193;
var inst_26177 = inst_26195;
var inst_26178 = (0);
var state_26234__$1 = (function (){var statearr_26268 = state_26234;
(statearr_26268[(12)] = inst_26177);

(statearr_26268[(13)] = inst_26178);

(statearr_26268[(14)] = inst_26176);

(statearr_26268[(16)] = inst_26175);

return statearr_26268;
})();
var statearr_26269_26304 = state_26234__$1;
(statearr_26269_26304[(2)] = null);

(statearr_26269_26304[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (10))){
var inst_26177 = (state_26234[(12)]);
var inst_26178 = (state_26234[(13)]);
var inst_26176 = (state_26234[(14)]);
var inst_26175 = (state_26234[(16)]);
var inst_26183 = cljs.core._nth.call(null,inst_26176,inst_26178);
var inst_26184 = cljs.core.async.muxch_STAR_.call(null,inst_26183);
var inst_26185 = cljs.core.async.close_BANG_.call(null,inst_26184);
var inst_26186 = (inst_26178 + (1));
var tmp26264 = inst_26177;
var tmp26265 = inst_26176;
var tmp26266 = inst_26175;
var inst_26175__$1 = tmp26266;
var inst_26176__$1 = tmp26265;
var inst_26177__$1 = tmp26264;
var inst_26178__$1 = inst_26186;
var state_26234__$1 = (function (){var statearr_26270 = state_26234;
(statearr_26270[(17)] = inst_26185);

(statearr_26270[(12)] = inst_26177__$1);

(statearr_26270[(13)] = inst_26178__$1);

(statearr_26270[(14)] = inst_26176__$1);

(statearr_26270[(16)] = inst_26175__$1);

return statearr_26270;
})();
var statearr_26271_26305 = state_26234__$1;
(statearr_26271_26305[(2)] = null);

(statearr_26271_26305[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (18))){
var inst_26204 = (state_26234[(2)]);
var state_26234__$1 = state_26234;
var statearr_26272_26306 = state_26234__$1;
(statearr_26272_26306[(2)] = inst_26204);

(statearr_26272_26306[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (8))){
var inst_26177 = (state_26234[(12)]);
var inst_26178 = (state_26234[(13)]);
var inst_26180 = (inst_26178 < inst_26177);
var inst_26181 = inst_26180;
var state_26234__$1 = state_26234;
if(cljs.core.truth_(inst_26181)){
var statearr_26273_26307 = state_26234__$1;
(statearr_26273_26307[(1)] = (10));

} else {
var statearr_26274_26308 = state_26234__$1;
(statearr_26274_26308[(1)] = (11));

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
});})(c__25046__auto___26280,mults,ensure_mult,p))
;
return ((function (switch__22049__auto__,c__25046__auto___26280,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22050__auto__ = null;
var cljs$core$async$state_machine__22050__auto____0 = (function (){
var statearr_26275 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26275[(0)] = cljs$core$async$state_machine__22050__auto__);

(statearr_26275[(1)] = (1));

return statearr_26275;
});
var cljs$core$async$state_machine__22050__auto____1 = (function (state_26234){
while(true){
var ret_value__22051__auto__ = (function (){try{while(true){
var result__22052__auto__ = switch__22049__auto__.call(null,state_26234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22052__auto__;
}
break;
}
}catch (e26276){if((e26276 instanceof Object)){
var ex__22053__auto__ = e26276;
var statearr_26277_26309 = state_26234;
(statearr_26277_26309[(5)] = ex__22053__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26276;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26310 = state_26234;
state_26234 = G__26310;
continue;
} else {
return ret_value__22051__auto__;
}
break;
}
});
cljs$core$async$state_machine__22050__auto__ = function(state_26234){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22050__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22050__auto____1.call(this,state_26234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22050__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22050__auto____0;
cljs$core$async$state_machine__22050__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22050__auto____1;
return cljs$core$async$state_machine__22050__auto__;
})()
;})(switch__22049__auto__,c__25046__auto___26280,mults,ensure_mult,p))
})();
var state__25048__auto__ = (function (){var statearr_26278 = f__25047__auto__.call(null);
(statearr_26278[(6)] = c__25046__auto___26280);

return statearr_26278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25048__auto__);
});})(c__25046__auto___26280,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__26312 = arguments.length;
switch (G__26312) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__26315 = arguments.length;
switch (G__26315) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__26318 = arguments.length;
switch (G__26318) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__25046__auto___26385 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25046__auto___26385,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__25047__auto__ = (function (){var switch__22049__auto__ = ((function (c__25046__auto___26385,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26357){
var state_val_26358 = (state_26357[(1)]);
if((state_val_26358 === (7))){
var state_26357__$1 = state_26357;
var statearr_26359_26386 = state_26357__$1;
(statearr_26359_26386[(2)] = null);

(statearr_26359_26386[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26358 === (1))){
var state_26357__$1 = state_26357;
var statearr_26360_26387 = state_26357__$1;
(statearr_26360_26387[(2)] = null);

(statearr_26360_26387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26358 === (4))){
var inst_26321 = (state_26357[(7)]);
var inst_26323 = (inst_26321 < cnt);
var state_26357__$1 = state_26357;
if(cljs.core.truth_(inst_26323)){
var statearr_26361_26388 = state_26357__$1;
(statearr_26361_26388[(1)] = (6));

} else {
var statearr_26362_26389 = state_26357__$1;
(statearr_26362_26389[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26358 === (15))){
var inst_26353 = (state_26357[(2)]);
var state_26357__$1 = state_26357;
var statearr_26363_26390 = state_26357__$1;
(statearr_26363_26390[(2)] = inst_26353);

(statearr_26363_26390[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26358 === (13))){
var inst_26346 = cljs.core.async.close_BANG_.call(null,out);
var state_26357__$1 = state_26357;
var statearr_26364_26391 = state_26357__$1;
(statearr_26364_26391[(2)] = inst_26346);

(statearr_26364_26391[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26358 === (6))){
var state_26357__$1 = state_26357;
var statearr_26365_26392 = state_26357__$1;
(statearr_26365_26392[(2)] = null);

(statearr_26365_26392[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26358 === (3))){
var inst_26355 = (state_26357[(2)]);
var state_26357__$1 = state_26357;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26357__$1,inst_26355);
} else {
if((state_val_26358 === (12))){
var inst_26343 = (state_26357[(8)]);
var inst_26343__$1 = (state_26357[(2)]);
var inst_26344 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26343__$1);
var state_26357__$1 = (function (){var statearr_26366 = state_26357;
(statearr_26366[(8)] = inst_26343__$1);

return statearr_26366;
})();
if(cljs.core.truth_(inst_26344)){
var statearr_26367_26393 = state_26357__$1;
(statearr_26367_26393[(1)] = (13));

} else {
var statearr_26368_26394 = state_26357__$1;
(statearr_26368_26394[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26358 === (2))){
var inst_26320 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26321 = (0);
var state_26357__$1 = (function (){var statearr_26369 = state_26357;
(statearr_26369[(9)] = inst_26320);

(statearr_26369[(7)] = inst_26321);

return statearr_26369;
})();
var statearr_26370_26395 = state_26357__$1;
(statearr_26370_26395[(2)] = null);

(statearr_26370_26395[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26358 === (11))){
var inst_26321 = (state_26357[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26357,(10),Object,null,(9));
var inst_26330 = chs__$1.call(null,inst_26321);
var inst_26331 = done.call(null,inst_26321);
var inst_26332 = cljs.core.async.take_BANG_.call(null,inst_26330,inst_26331);
var state_26357__$1 = state_26357;
var statearr_26371_26396 = state_26357__$1;
(statearr_26371_26396[(2)] = inst_26332);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26357__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26358 === (9))){
var inst_26321 = (state_26357[(7)]);
var inst_26334 = (state_26357[(2)]);
var inst_26335 = (inst_26321 + (1));
var inst_26321__$1 = inst_26335;
var state_26357__$1 = (function (){var statearr_26372 = state_26357;
(statearr_26372[(10)] = inst_26334);

(statearr_26372[(7)] = inst_26321__$1);

return statearr_26372;
})();
var statearr_26373_26397 = state_26357__$1;
(statearr_26373_26397[(2)] = null);

(statearr_26373_26397[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26358 === (5))){
var inst_26341 = (state_26357[(2)]);
var state_26357__$1 = (function (){var statearr_26374 = state_26357;
(statearr_26374[(11)] = inst_26341);

return statearr_26374;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26357__$1,(12),dchan);
} else {
if((state_val_26358 === (14))){
var inst_26343 = (state_26357[(8)]);
var inst_26348 = cljs.core.apply.call(null,f,inst_26343);
var state_26357__$1 = state_26357;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26357__$1,(16),out,inst_26348);
} else {
if((state_val_26358 === (16))){
var inst_26350 = (state_26357[(2)]);
var state_26357__$1 = (function (){var statearr_26375 = state_26357;
(statearr_26375[(12)] = inst_26350);

return statearr_26375;
})();
var statearr_26376_26398 = state_26357__$1;
(statearr_26376_26398[(2)] = null);

(statearr_26376_26398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26358 === (10))){
var inst_26325 = (state_26357[(2)]);
var inst_26326 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26357__$1 = (function (){var statearr_26377 = state_26357;
(statearr_26377[(13)] = inst_26325);

return statearr_26377;
})();
var statearr_26378_26399 = state_26357__$1;
(statearr_26378_26399[(2)] = inst_26326);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26357__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26358 === (8))){
var inst_26339 = (state_26357[(2)]);
var state_26357__$1 = state_26357;
var statearr_26379_26400 = state_26357__$1;
(statearr_26379_26400[(2)] = inst_26339);

(statearr_26379_26400[(1)] = (5));


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
});})(c__25046__auto___26385,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22049__auto__,c__25046__auto___26385,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22050__auto__ = null;
var cljs$core$async$state_machine__22050__auto____0 = (function (){
var statearr_26380 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26380[(0)] = cljs$core$async$state_machine__22050__auto__);

(statearr_26380[(1)] = (1));

return statearr_26380;
});
var cljs$core$async$state_machine__22050__auto____1 = (function (state_26357){
while(true){
var ret_value__22051__auto__ = (function (){try{while(true){
var result__22052__auto__ = switch__22049__auto__.call(null,state_26357);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22052__auto__;
}
break;
}
}catch (e26381){if((e26381 instanceof Object)){
var ex__22053__auto__ = e26381;
var statearr_26382_26401 = state_26357;
(statearr_26382_26401[(5)] = ex__22053__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26381;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26402 = state_26357;
state_26357 = G__26402;
continue;
} else {
return ret_value__22051__auto__;
}
break;
}
});
cljs$core$async$state_machine__22050__auto__ = function(state_26357){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22050__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22050__auto____1.call(this,state_26357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22050__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22050__auto____0;
cljs$core$async$state_machine__22050__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22050__auto____1;
return cljs$core$async$state_machine__22050__auto__;
})()
;})(switch__22049__auto__,c__25046__auto___26385,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__25048__auto__ = (function (){var statearr_26383 = f__25047__auto__.call(null);
(statearr_26383[(6)] = c__25046__auto___26385);

return statearr_26383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25048__auto__);
});})(c__25046__auto___26385,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__26405 = arguments.length;
switch (G__26405) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25046__auto___26459 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25046__auto___26459,out){
return (function (){
var f__25047__auto__ = (function (){var switch__22049__auto__ = ((function (c__25046__auto___26459,out){
return (function (state_26437){
var state_val_26438 = (state_26437[(1)]);
if((state_val_26438 === (7))){
var inst_26416 = (state_26437[(7)]);
var inst_26417 = (state_26437[(8)]);
var inst_26416__$1 = (state_26437[(2)]);
var inst_26417__$1 = cljs.core.nth.call(null,inst_26416__$1,(0),null);
var inst_26418 = cljs.core.nth.call(null,inst_26416__$1,(1),null);
var inst_26419 = (inst_26417__$1 == null);
var state_26437__$1 = (function (){var statearr_26439 = state_26437;
(statearr_26439[(9)] = inst_26418);

(statearr_26439[(7)] = inst_26416__$1);

(statearr_26439[(8)] = inst_26417__$1);

return statearr_26439;
})();
if(cljs.core.truth_(inst_26419)){
var statearr_26440_26460 = state_26437__$1;
(statearr_26440_26460[(1)] = (8));

} else {
var statearr_26441_26461 = state_26437__$1;
(statearr_26441_26461[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26438 === (1))){
var inst_26406 = cljs.core.vec.call(null,chs);
var inst_26407 = inst_26406;
var state_26437__$1 = (function (){var statearr_26442 = state_26437;
(statearr_26442[(10)] = inst_26407);

return statearr_26442;
})();
var statearr_26443_26462 = state_26437__$1;
(statearr_26443_26462[(2)] = null);

(statearr_26443_26462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26438 === (4))){
var inst_26407 = (state_26437[(10)]);
var state_26437__$1 = state_26437;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26437__$1,(7),inst_26407);
} else {
if((state_val_26438 === (6))){
var inst_26433 = (state_26437[(2)]);
var state_26437__$1 = state_26437;
var statearr_26444_26463 = state_26437__$1;
(statearr_26444_26463[(2)] = inst_26433);

(statearr_26444_26463[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26438 === (3))){
var inst_26435 = (state_26437[(2)]);
var state_26437__$1 = state_26437;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26437__$1,inst_26435);
} else {
if((state_val_26438 === (2))){
var inst_26407 = (state_26437[(10)]);
var inst_26409 = cljs.core.count.call(null,inst_26407);
var inst_26410 = (inst_26409 > (0));
var state_26437__$1 = state_26437;
if(cljs.core.truth_(inst_26410)){
var statearr_26446_26464 = state_26437__$1;
(statearr_26446_26464[(1)] = (4));

} else {
var statearr_26447_26465 = state_26437__$1;
(statearr_26447_26465[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26438 === (11))){
var inst_26407 = (state_26437[(10)]);
var inst_26426 = (state_26437[(2)]);
var tmp26445 = inst_26407;
var inst_26407__$1 = tmp26445;
var state_26437__$1 = (function (){var statearr_26448 = state_26437;
(statearr_26448[(11)] = inst_26426);

(statearr_26448[(10)] = inst_26407__$1);

return statearr_26448;
})();
var statearr_26449_26466 = state_26437__$1;
(statearr_26449_26466[(2)] = null);

(statearr_26449_26466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26438 === (9))){
var inst_26417 = (state_26437[(8)]);
var state_26437__$1 = state_26437;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26437__$1,(11),out,inst_26417);
} else {
if((state_val_26438 === (5))){
var inst_26431 = cljs.core.async.close_BANG_.call(null,out);
var state_26437__$1 = state_26437;
var statearr_26450_26467 = state_26437__$1;
(statearr_26450_26467[(2)] = inst_26431);

(statearr_26450_26467[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26438 === (10))){
var inst_26429 = (state_26437[(2)]);
var state_26437__$1 = state_26437;
var statearr_26451_26468 = state_26437__$1;
(statearr_26451_26468[(2)] = inst_26429);

(statearr_26451_26468[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26438 === (8))){
var inst_26418 = (state_26437[(9)]);
var inst_26407 = (state_26437[(10)]);
var inst_26416 = (state_26437[(7)]);
var inst_26417 = (state_26437[(8)]);
var inst_26421 = (function (){var cs = inst_26407;
var vec__26412 = inst_26416;
var v = inst_26417;
var c = inst_26418;
return ((function (cs,vec__26412,v,c,inst_26418,inst_26407,inst_26416,inst_26417,state_val_26438,c__25046__auto___26459,out){
return (function (p1__26403_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26403_SHARP_);
});
;})(cs,vec__26412,v,c,inst_26418,inst_26407,inst_26416,inst_26417,state_val_26438,c__25046__auto___26459,out))
})();
var inst_26422 = cljs.core.filterv.call(null,inst_26421,inst_26407);
var inst_26407__$1 = inst_26422;
var state_26437__$1 = (function (){var statearr_26452 = state_26437;
(statearr_26452[(10)] = inst_26407__$1);

return statearr_26452;
})();
var statearr_26453_26469 = state_26437__$1;
(statearr_26453_26469[(2)] = null);

(statearr_26453_26469[(1)] = (2));


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
});})(c__25046__auto___26459,out))
;
return ((function (switch__22049__auto__,c__25046__auto___26459,out){
return (function() {
var cljs$core$async$state_machine__22050__auto__ = null;
var cljs$core$async$state_machine__22050__auto____0 = (function (){
var statearr_26454 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26454[(0)] = cljs$core$async$state_machine__22050__auto__);

(statearr_26454[(1)] = (1));

return statearr_26454;
});
var cljs$core$async$state_machine__22050__auto____1 = (function (state_26437){
while(true){
var ret_value__22051__auto__ = (function (){try{while(true){
var result__22052__auto__ = switch__22049__auto__.call(null,state_26437);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22052__auto__;
}
break;
}
}catch (e26455){if((e26455 instanceof Object)){
var ex__22053__auto__ = e26455;
var statearr_26456_26470 = state_26437;
(statearr_26456_26470[(5)] = ex__22053__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26437);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26455;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26471 = state_26437;
state_26437 = G__26471;
continue;
} else {
return ret_value__22051__auto__;
}
break;
}
});
cljs$core$async$state_machine__22050__auto__ = function(state_26437){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22050__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22050__auto____1.call(this,state_26437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22050__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22050__auto____0;
cljs$core$async$state_machine__22050__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22050__auto____1;
return cljs$core$async$state_machine__22050__auto__;
})()
;})(switch__22049__auto__,c__25046__auto___26459,out))
})();
var state__25048__auto__ = (function (){var statearr_26457 = f__25047__auto__.call(null);
(statearr_26457[(6)] = c__25046__auto___26459);

return statearr_26457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25048__auto__);
});})(c__25046__auto___26459,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__26473 = arguments.length;
switch (G__26473) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25046__auto___26518 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25046__auto___26518,out){
return (function (){
var f__25047__auto__ = (function (){var switch__22049__auto__ = ((function (c__25046__auto___26518,out){
return (function (state_26497){
var state_val_26498 = (state_26497[(1)]);
if((state_val_26498 === (7))){
var inst_26479 = (state_26497[(7)]);
var inst_26479__$1 = (state_26497[(2)]);
var inst_26480 = (inst_26479__$1 == null);
var inst_26481 = cljs.core.not.call(null,inst_26480);
var state_26497__$1 = (function (){var statearr_26499 = state_26497;
(statearr_26499[(7)] = inst_26479__$1);

return statearr_26499;
})();
if(inst_26481){
var statearr_26500_26519 = state_26497__$1;
(statearr_26500_26519[(1)] = (8));

} else {
var statearr_26501_26520 = state_26497__$1;
(statearr_26501_26520[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26498 === (1))){
var inst_26474 = (0);
var state_26497__$1 = (function (){var statearr_26502 = state_26497;
(statearr_26502[(8)] = inst_26474);

return statearr_26502;
})();
var statearr_26503_26521 = state_26497__$1;
(statearr_26503_26521[(2)] = null);

(statearr_26503_26521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26498 === (4))){
var state_26497__$1 = state_26497;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26497__$1,(7),ch);
} else {
if((state_val_26498 === (6))){
var inst_26492 = (state_26497[(2)]);
var state_26497__$1 = state_26497;
var statearr_26504_26522 = state_26497__$1;
(statearr_26504_26522[(2)] = inst_26492);

(statearr_26504_26522[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26498 === (3))){
var inst_26494 = (state_26497[(2)]);
var inst_26495 = cljs.core.async.close_BANG_.call(null,out);
var state_26497__$1 = (function (){var statearr_26505 = state_26497;
(statearr_26505[(9)] = inst_26494);

return statearr_26505;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26497__$1,inst_26495);
} else {
if((state_val_26498 === (2))){
var inst_26474 = (state_26497[(8)]);
var inst_26476 = (inst_26474 < n);
var state_26497__$1 = state_26497;
if(cljs.core.truth_(inst_26476)){
var statearr_26506_26523 = state_26497__$1;
(statearr_26506_26523[(1)] = (4));

} else {
var statearr_26507_26524 = state_26497__$1;
(statearr_26507_26524[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26498 === (11))){
var inst_26474 = (state_26497[(8)]);
var inst_26484 = (state_26497[(2)]);
var inst_26485 = (inst_26474 + (1));
var inst_26474__$1 = inst_26485;
var state_26497__$1 = (function (){var statearr_26508 = state_26497;
(statearr_26508[(10)] = inst_26484);

(statearr_26508[(8)] = inst_26474__$1);

return statearr_26508;
})();
var statearr_26509_26525 = state_26497__$1;
(statearr_26509_26525[(2)] = null);

(statearr_26509_26525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26498 === (9))){
var state_26497__$1 = state_26497;
var statearr_26510_26526 = state_26497__$1;
(statearr_26510_26526[(2)] = null);

(statearr_26510_26526[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26498 === (5))){
var state_26497__$1 = state_26497;
var statearr_26511_26527 = state_26497__$1;
(statearr_26511_26527[(2)] = null);

(statearr_26511_26527[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26498 === (10))){
var inst_26489 = (state_26497[(2)]);
var state_26497__$1 = state_26497;
var statearr_26512_26528 = state_26497__$1;
(statearr_26512_26528[(2)] = inst_26489);

(statearr_26512_26528[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26498 === (8))){
var inst_26479 = (state_26497[(7)]);
var state_26497__$1 = state_26497;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26497__$1,(11),out,inst_26479);
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
});})(c__25046__auto___26518,out))
;
return ((function (switch__22049__auto__,c__25046__auto___26518,out){
return (function() {
var cljs$core$async$state_machine__22050__auto__ = null;
var cljs$core$async$state_machine__22050__auto____0 = (function (){
var statearr_26513 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26513[(0)] = cljs$core$async$state_machine__22050__auto__);

(statearr_26513[(1)] = (1));

return statearr_26513;
});
var cljs$core$async$state_machine__22050__auto____1 = (function (state_26497){
while(true){
var ret_value__22051__auto__ = (function (){try{while(true){
var result__22052__auto__ = switch__22049__auto__.call(null,state_26497);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22052__auto__;
}
break;
}
}catch (e26514){if((e26514 instanceof Object)){
var ex__22053__auto__ = e26514;
var statearr_26515_26529 = state_26497;
(statearr_26515_26529[(5)] = ex__22053__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26514;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26530 = state_26497;
state_26497 = G__26530;
continue;
} else {
return ret_value__22051__auto__;
}
break;
}
});
cljs$core$async$state_machine__22050__auto__ = function(state_26497){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22050__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22050__auto____1.call(this,state_26497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22050__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22050__auto____0;
cljs$core$async$state_machine__22050__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22050__auto____1;
return cljs$core$async$state_machine__22050__auto__;
})()
;})(switch__22049__auto__,c__25046__auto___26518,out))
})();
var state__25048__auto__ = (function (){var statearr_26516 = f__25047__auto__.call(null);
(statearr_26516[(6)] = c__25046__auto___26518);

return statearr_26516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25048__auto__);
});})(c__25046__auto___26518,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26532 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26532 = (function (f,ch,meta26533){
this.f = f;
this.ch = ch;
this.meta26533 = meta26533;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26532.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26534,meta26533__$1){
var self__ = this;
var _26534__$1 = this;
return (new cljs.core.async.t_cljs$core$async26532(self__.f,self__.ch,meta26533__$1));
});

cljs.core.async.t_cljs$core$async26532.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26534){
var self__ = this;
var _26534__$1 = this;
return self__.meta26533;
});

cljs.core.async.t_cljs$core$async26532.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26532.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26532.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26532.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26532.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26535 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26535 = (function (f,ch,meta26533,_,fn1,meta26536){
this.f = f;
this.ch = ch;
this.meta26533 = meta26533;
this._ = _;
this.fn1 = fn1;
this.meta26536 = meta26536;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26537,meta26536__$1){
var self__ = this;
var _26537__$1 = this;
return (new cljs.core.async.t_cljs$core$async26535(self__.f,self__.ch,self__.meta26533,self__._,self__.fn1,meta26536__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async26535.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26537){
var self__ = this;
var _26537__$1 = this;
return self__.meta26536;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26535.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26535.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26535.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26535.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26531_SHARP_){
return f1.call(null,(((p1__26531_SHARP_ == null))?null:self__.f.call(null,p1__26531_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26535.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26533","meta26533",-1895586358,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26532","cljs.core.async/t_cljs$core$async26532",1573918909,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26536","meta26536",-295074672,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26535.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26535.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26535";

cljs.core.async.t_cljs$core$async26535.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26535");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26535.
 */
cljs.core.async.__GT_t_cljs$core$async26535 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26535(f__$1,ch__$1,meta26533__$1,___$2,fn1__$1,meta26536){
return (new cljs.core.async.t_cljs$core$async26535(f__$1,ch__$1,meta26533__$1,___$2,fn1__$1,meta26536));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26535(self__.f,self__.ch,self__.meta26533,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async26532.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26532.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26532.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26533","meta26533",-1895586358,null)], null);
});

cljs.core.async.t_cljs$core$async26532.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26532.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26532";

cljs.core.async.t_cljs$core$async26532.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26532");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26532.
 */
cljs.core.async.__GT_t_cljs$core$async26532 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26532(f__$1,ch__$1,meta26533){
return (new cljs.core.async.t_cljs$core$async26532(f__$1,ch__$1,meta26533));
});

}

return (new cljs.core.async.t_cljs$core$async26532(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26538 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26538 = (function (f,ch,meta26539){
this.f = f;
this.ch = ch;
this.meta26539 = meta26539;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26538.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26540,meta26539__$1){
var self__ = this;
var _26540__$1 = this;
return (new cljs.core.async.t_cljs$core$async26538(self__.f,self__.ch,meta26539__$1));
});

cljs.core.async.t_cljs$core$async26538.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26540){
var self__ = this;
var _26540__$1 = this;
return self__.meta26539;
});

cljs.core.async.t_cljs$core$async26538.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26538.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26538.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26538.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26538.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26538.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async26538.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26539","meta26539",1642457799,null)], null);
});

cljs.core.async.t_cljs$core$async26538.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26538.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26538";

cljs.core.async.t_cljs$core$async26538.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26538");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26538.
 */
cljs.core.async.__GT_t_cljs$core$async26538 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26538(f__$1,ch__$1,meta26539){
return (new cljs.core.async.t_cljs$core$async26538(f__$1,ch__$1,meta26539));
});

}

return (new cljs.core.async.t_cljs$core$async26538(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26541 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26541 = (function (p,ch,meta26542){
this.p = p;
this.ch = ch;
this.meta26542 = meta26542;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26541.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26543,meta26542__$1){
var self__ = this;
var _26543__$1 = this;
return (new cljs.core.async.t_cljs$core$async26541(self__.p,self__.ch,meta26542__$1));
});

cljs.core.async.t_cljs$core$async26541.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26543){
var self__ = this;
var _26543__$1 = this;
return self__.meta26542;
});

cljs.core.async.t_cljs$core$async26541.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26541.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26541.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26541.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26541.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26541.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26541.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26541.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26542","meta26542",-1357375571,null)], null);
});

cljs.core.async.t_cljs$core$async26541.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26541.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26541";

cljs.core.async.t_cljs$core$async26541.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26541");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26541.
 */
cljs.core.async.__GT_t_cljs$core$async26541 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26541(p__$1,ch__$1,meta26542){
return (new cljs.core.async.t_cljs$core$async26541(p__$1,ch__$1,meta26542));
});

}

return (new cljs.core.async.t_cljs$core$async26541(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__26545 = arguments.length;
switch (G__26545) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25046__auto___26585 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25046__auto___26585,out){
return (function (){
var f__25047__auto__ = (function (){var switch__22049__auto__ = ((function (c__25046__auto___26585,out){
return (function (state_26566){
var state_val_26567 = (state_26566[(1)]);
if((state_val_26567 === (7))){
var inst_26562 = (state_26566[(2)]);
var state_26566__$1 = state_26566;
var statearr_26568_26586 = state_26566__$1;
(statearr_26568_26586[(2)] = inst_26562);

(statearr_26568_26586[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26567 === (1))){
var state_26566__$1 = state_26566;
var statearr_26569_26587 = state_26566__$1;
(statearr_26569_26587[(2)] = null);

(statearr_26569_26587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26567 === (4))){
var inst_26548 = (state_26566[(7)]);
var inst_26548__$1 = (state_26566[(2)]);
var inst_26549 = (inst_26548__$1 == null);
var state_26566__$1 = (function (){var statearr_26570 = state_26566;
(statearr_26570[(7)] = inst_26548__$1);

return statearr_26570;
})();
if(cljs.core.truth_(inst_26549)){
var statearr_26571_26588 = state_26566__$1;
(statearr_26571_26588[(1)] = (5));

} else {
var statearr_26572_26589 = state_26566__$1;
(statearr_26572_26589[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26567 === (6))){
var inst_26548 = (state_26566[(7)]);
var inst_26553 = p.call(null,inst_26548);
var state_26566__$1 = state_26566;
if(cljs.core.truth_(inst_26553)){
var statearr_26573_26590 = state_26566__$1;
(statearr_26573_26590[(1)] = (8));

} else {
var statearr_26574_26591 = state_26566__$1;
(statearr_26574_26591[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26567 === (3))){
var inst_26564 = (state_26566[(2)]);
var state_26566__$1 = state_26566;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26566__$1,inst_26564);
} else {
if((state_val_26567 === (2))){
var state_26566__$1 = state_26566;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26566__$1,(4),ch);
} else {
if((state_val_26567 === (11))){
var inst_26556 = (state_26566[(2)]);
var state_26566__$1 = state_26566;
var statearr_26575_26592 = state_26566__$1;
(statearr_26575_26592[(2)] = inst_26556);

(statearr_26575_26592[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26567 === (9))){
var state_26566__$1 = state_26566;
var statearr_26576_26593 = state_26566__$1;
(statearr_26576_26593[(2)] = null);

(statearr_26576_26593[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26567 === (5))){
var inst_26551 = cljs.core.async.close_BANG_.call(null,out);
var state_26566__$1 = state_26566;
var statearr_26577_26594 = state_26566__$1;
(statearr_26577_26594[(2)] = inst_26551);

(statearr_26577_26594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26567 === (10))){
var inst_26559 = (state_26566[(2)]);
var state_26566__$1 = (function (){var statearr_26578 = state_26566;
(statearr_26578[(8)] = inst_26559);

return statearr_26578;
})();
var statearr_26579_26595 = state_26566__$1;
(statearr_26579_26595[(2)] = null);

(statearr_26579_26595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26567 === (8))){
var inst_26548 = (state_26566[(7)]);
var state_26566__$1 = state_26566;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26566__$1,(11),out,inst_26548);
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
});})(c__25046__auto___26585,out))
;
return ((function (switch__22049__auto__,c__25046__auto___26585,out){
return (function() {
var cljs$core$async$state_machine__22050__auto__ = null;
var cljs$core$async$state_machine__22050__auto____0 = (function (){
var statearr_26580 = [null,null,null,null,null,null,null,null,null];
(statearr_26580[(0)] = cljs$core$async$state_machine__22050__auto__);

(statearr_26580[(1)] = (1));

return statearr_26580;
});
var cljs$core$async$state_machine__22050__auto____1 = (function (state_26566){
while(true){
var ret_value__22051__auto__ = (function (){try{while(true){
var result__22052__auto__ = switch__22049__auto__.call(null,state_26566);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22052__auto__;
}
break;
}
}catch (e26581){if((e26581 instanceof Object)){
var ex__22053__auto__ = e26581;
var statearr_26582_26596 = state_26566;
(statearr_26582_26596[(5)] = ex__22053__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26566);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26581;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26597 = state_26566;
state_26566 = G__26597;
continue;
} else {
return ret_value__22051__auto__;
}
break;
}
});
cljs$core$async$state_machine__22050__auto__ = function(state_26566){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22050__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22050__auto____1.call(this,state_26566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22050__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22050__auto____0;
cljs$core$async$state_machine__22050__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22050__auto____1;
return cljs$core$async$state_machine__22050__auto__;
})()
;})(switch__22049__auto__,c__25046__auto___26585,out))
})();
var state__25048__auto__ = (function (){var statearr_26583 = f__25047__auto__.call(null);
(statearr_26583[(6)] = c__25046__auto___26585);

return statearr_26583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25048__auto__);
});})(c__25046__auto___26585,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__26599 = arguments.length;
switch (G__26599) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__25046__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25046__auto__){
return (function (){
var f__25047__auto__ = (function (){var switch__22049__auto__ = ((function (c__25046__auto__){
return (function (state_26662){
var state_val_26663 = (state_26662[(1)]);
if((state_val_26663 === (7))){
var inst_26658 = (state_26662[(2)]);
var state_26662__$1 = state_26662;
var statearr_26664_26702 = state_26662__$1;
(statearr_26664_26702[(2)] = inst_26658);

(statearr_26664_26702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26663 === (20))){
var inst_26628 = (state_26662[(7)]);
var inst_26639 = (state_26662[(2)]);
var inst_26640 = cljs.core.next.call(null,inst_26628);
var inst_26614 = inst_26640;
var inst_26615 = null;
var inst_26616 = (0);
var inst_26617 = (0);
var state_26662__$1 = (function (){var statearr_26665 = state_26662;
(statearr_26665[(8)] = inst_26614);

(statearr_26665[(9)] = inst_26639);

(statearr_26665[(10)] = inst_26616);

(statearr_26665[(11)] = inst_26615);

(statearr_26665[(12)] = inst_26617);

return statearr_26665;
})();
var statearr_26666_26703 = state_26662__$1;
(statearr_26666_26703[(2)] = null);

(statearr_26666_26703[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26663 === (1))){
var state_26662__$1 = state_26662;
var statearr_26667_26704 = state_26662__$1;
(statearr_26667_26704[(2)] = null);

(statearr_26667_26704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26663 === (4))){
var inst_26603 = (state_26662[(13)]);
var inst_26603__$1 = (state_26662[(2)]);
var inst_26604 = (inst_26603__$1 == null);
var state_26662__$1 = (function (){var statearr_26668 = state_26662;
(statearr_26668[(13)] = inst_26603__$1);

return statearr_26668;
})();
if(cljs.core.truth_(inst_26604)){
var statearr_26669_26705 = state_26662__$1;
(statearr_26669_26705[(1)] = (5));

} else {
var statearr_26670_26706 = state_26662__$1;
(statearr_26670_26706[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26663 === (15))){
var state_26662__$1 = state_26662;
var statearr_26674_26707 = state_26662__$1;
(statearr_26674_26707[(2)] = null);

(statearr_26674_26707[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26663 === (21))){
var state_26662__$1 = state_26662;
var statearr_26675_26708 = state_26662__$1;
(statearr_26675_26708[(2)] = null);

(statearr_26675_26708[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26663 === (13))){
var inst_26614 = (state_26662[(8)]);
var inst_26616 = (state_26662[(10)]);
var inst_26615 = (state_26662[(11)]);
var inst_26617 = (state_26662[(12)]);
var inst_26624 = (state_26662[(2)]);
var inst_26625 = (inst_26617 + (1));
var tmp26671 = inst_26614;
var tmp26672 = inst_26616;
var tmp26673 = inst_26615;
var inst_26614__$1 = tmp26671;
var inst_26615__$1 = tmp26673;
var inst_26616__$1 = tmp26672;
var inst_26617__$1 = inst_26625;
var state_26662__$1 = (function (){var statearr_26676 = state_26662;
(statearr_26676[(8)] = inst_26614__$1);

(statearr_26676[(14)] = inst_26624);

(statearr_26676[(10)] = inst_26616__$1);

(statearr_26676[(11)] = inst_26615__$1);

(statearr_26676[(12)] = inst_26617__$1);

return statearr_26676;
})();
var statearr_26677_26709 = state_26662__$1;
(statearr_26677_26709[(2)] = null);

(statearr_26677_26709[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26663 === (22))){
var state_26662__$1 = state_26662;
var statearr_26678_26710 = state_26662__$1;
(statearr_26678_26710[(2)] = null);

(statearr_26678_26710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26663 === (6))){
var inst_26603 = (state_26662[(13)]);
var inst_26612 = f.call(null,inst_26603);
var inst_26613 = cljs.core.seq.call(null,inst_26612);
var inst_26614 = inst_26613;
var inst_26615 = null;
var inst_26616 = (0);
var inst_26617 = (0);
var state_26662__$1 = (function (){var statearr_26679 = state_26662;
(statearr_26679[(8)] = inst_26614);

(statearr_26679[(10)] = inst_26616);

(statearr_26679[(11)] = inst_26615);

(statearr_26679[(12)] = inst_26617);

return statearr_26679;
})();
var statearr_26680_26711 = state_26662__$1;
(statearr_26680_26711[(2)] = null);

(statearr_26680_26711[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26663 === (17))){
var inst_26628 = (state_26662[(7)]);
var inst_26632 = cljs.core.chunk_first.call(null,inst_26628);
var inst_26633 = cljs.core.chunk_rest.call(null,inst_26628);
var inst_26634 = cljs.core.count.call(null,inst_26632);
var inst_26614 = inst_26633;
var inst_26615 = inst_26632;
var inst_26616 = inst_26634;
var inst_26617 = (0);
var state_26662__$1 = (function (){var statearr_26681 = state_26662;
(statearr_26681[(8)] = inst_26614);

(statearr_26681[(10)] = inst_26616);

(statearr_26681[(11)] = inst_26615);

(statearr_26681[(12)] = inst_26617);

return statearr_26681;
})();
var statearr_26682_26712 = state_26662__$1;
(statearr_26682_26712[(2)] = null);

(statearr_26682_26712[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26663 === (3))){
var inst_26660 = (state_26662[(2)]);
var state_26662__$1 = state_26662;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26662__$1,inst_26660);
} else {
if((state_val_26663 === (12))){
var inst_26648 = (state_26662[(2)]);
var state_26662__$1 = state_26662;
var statearr_26683_26713 = state_26662__$1;
(statearr_26683_26713[(2)] = inst_26648);

(statearr_26683_26713[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26663 === (2))){
var state_26662__$1 = state_26662;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26662__$1,(4),in$);
} else {
if((state_val_26663 === (23))){
var inst_26656 = (state_26662[(2)]);
var state_26662__$1 = state_26662;
var statearr_26684_26714 = state_26662__$1;
(statearr_26684_26714[(2)] = inst_26656);

(statearr_26684_26714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26663 === (19))){
var inst_26643 = (state_26662[(2)]);
var state_26662__$1 = state_26662;
var statearr_26685_26715 = state_26662__$1;
(statearr_26685_26715[(2)] = inst_26643);

(statearr_26685_26715[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26663 === (11))){
var inst_26628 = (state_26662[(7)]);
var inst_26614 = (state_26662[(8)]);
var inst_26628__$1 = cljs.core.seq.call(null,inst_26614);
var state_26662__$1 = (function (){var statearr_26686 = state_26662;
(statearr_26686[(7)] = inst_26628__$1);

return statearr_26686;
})();
if(inst_26628__$1){
var statearr_26687_26716 = state_26662__$1;
(statearr_26687_26716[(1)] = (14));

} else {
var statearr_26688_26717 = state_26662__$1;
(statearr_26688_26717[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26663 === (9))){
var inst_26650 = (state_26662[(2)]);
var inst_26651 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26662__$1 = (function (){var statearr_26689 = state_26662;
(statearr_26689[(15)] = inst_26650);

return statearr_26689;
})();
if(cljs.core.truth_(inst_26651)){
var statearr_26690_26718 = state_26662__$1;
(statearr_26690_26718[(1)] = (21));

} else {
var statearr_26691_26719 = state_26662__$1;
(statearr_26691_26719[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26663 === (5))){
var inst_26606 = cljs.core.async.close_BANG_.call(null,out);
var state_26662__$1 = state_26662;
var statearr_26692_26720 = state_26662__$1;
(statearr_26692_26720[(2)] = inst_26606);

(statearr_26692_26720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26663 === (14))){
var inst_26628 = (state_26662[(7)]);
var inst_26630 = cljs.core.chunked_seq_QMARK_.call(null,inst_26628);
var state_26662__$1 = state_26662;
if(inst_26630){
var statearr_26693_26721 = state_26662__$1;
(statearr_26693_26721[(1)] = (17));

} else {
var statearr_26694_26722 = state_26662__$1;
(statearr_26694_26722[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26663 === (16))){
var inst_26646 = (state_26662[(2)]);
var state_26662__$1 = state_26662;
var statearr_26695_26723 = state_26662__$1;
(statearr_26695_26723[(2)] = inst_26646);

(statearr_26695_26723[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26663 === (10))){
var inst_26615 = (state_26662[(11)]);
var inst_26617 = (state_26662[(12)]);
var inst_26622 = cljs.core._nth.call(null,inst_26615,inst_26617);
var state_26662__$1 = state_26662;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26662__$1,(13),out,inst_26622);
} else {
if((state_val_26663 === (18))){
var inst_26628 = (state_26662[(7)]);
var inst_26637 = cljs.core.first.call(null,inst_26628);
var state_26662__$1 = state_26662;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26662__$1,(20),out,inst_26637);
} else {
if((state_val_26663 === (8))){
var inst_26616 = (state_26662[(10)]);
var inst_26617 = (state_26662[(12)]);
var inst_26619 = (inst_26617 < inst_26616);
var inst_26620 = inst_26619;
var state_26662__$1 = state_26662;
if(cljs.core.truth_(inst_26620)){
var statearr_26696_26724 = state_26662__$1;
(statearr_26696_26724[(1)] = (10));

} else {
var statearr_26697_26725 = state_26662__$1;
(statearr_26697_26725[(1)] = (11));

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
});})(c__25046__auto__))
;
return ((function (switch__22049__auto__,c__25046__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22050__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22050__auto____0 = (function (){
var statearr_26698 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26698[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22050__auto__);

(statearr_26698[(1)] = (1));

return statearr_26698;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22050__auto____1 = (function (state_26662){
while(true){
var ret_value__22051__auto__ = (function (){try{while(true){
var result__22052__auto__ = switch__22049__auto__.call(null,state_26662);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22052__auto__;
}
break;
}
}catch (e26699){if((e26699 instanceof Object)){
var ex__22053__auto__ = e26699;
var statearr_26700_26726 = state_26662;
(statearr_26700_26726[(5)] = ex__22053__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26662);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26699;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26727 = state_26662;
state_26662 = G__26727;
continue;
} else {
return ret_value__22051__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22050__auto__ = function(state_26662){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22050__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22050__auto____1.call(this,state_26662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22050__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22050__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22050__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22050__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22050__auto__;
})()
;})(switch__22049__auto__,c__25046__auto__))
})();
var state__25048__auto__ = (function (){var statearr_26701 = f__25047__auto__.call(null);
(statearr_26701[(6)] = c__25046__auto__);

return statearr_26701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25048__auto__);
});})(c__25046__auto__))
);

return c__25046__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__26729 = arguments.length;
switch (G__26729) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__26732 = arguments.length;
switch (G__26732) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__26735 = arguments.length;
switch (G__26735) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25046__auto___26782 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25046__auto___26782,out){
return (function (){
var f__25047__auto__ = (function (){var switch__22049__auto__ = ((function (c__25046__auto___26782,out){
return (function (state_26759){
var state_val_26760 = (state_26759[(1)]);
if((state_val_26760 === (7))){
var inst_26754 = (state_26759[(2)]);
var state_26759__$1 = state_26759;
var statearr_26761_26783 = state_26759__$1;
(statearr_26761_26783[(2)] = inst_26754);

(statearr_26761_26783[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (1))){
var inst_26736 = null;
var state_26759__$1 = (function (){var statearr_26762 = state_26759;
(statearr_26762[(7)] = inst_26736);

return statearr_26762;
})();
var statearr_26763_26784 = state_26759__$1;
(statearr_26763_26784[(2)] = null);

(statearr_26763_26784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (4))){
var inst_26739 = (state_26759[(8)]);
var inst_26739__$1 = (state_26759[(2)]);
var inst_26740 = (inst_26739__$1 == null);
var inst_26741 = cljs.core.not.call(null,inst_26740);
var state_26759__$1 = (function (){var statearr_26764 = state_26759;
(statearr_26764[(8)] = inst_26739__$1);

return statearr_26764;
})();
if(inst_26741){
var statearr_26765_26785 = state_26759__$1;
(statearr_26765_26785[(1)] = (5));

} else {
var statearr_26766_26786 = state_26759__$1;
(statearr_26766_26786[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (6))){
var state_26759__$1 = state_26759;
var statearr_26767_26787 = state_26759__$1;
(statearr_26767_26787[(2)] = null);

(statearr_26767_26787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (3))){
var inst_26756 = (state_26759[(2)]);
var inst_26757 = cljs.core.async.close_BANG_.call(null,out);
var state_26759__$1 = (function (){var statearr_26768 = state_26759;
(statearr_26768[(9)] = inst_26756);

return statearr_26768;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26759__$1,inst_26757);
} else {
if((state_val_26760 === (2))){
var state_26759__$1 = state_26759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26759__$1,(4),ch);
} else {
if((state_val_26760 === (11))){
var inst_26739 = (state_26759[(8)]);
var inst_26748 = (state_26759[(2)]);
var inst_26736 = inst_26739;
var state_26759__$1 = (function (){var statearr_26769 = state_26759;
(statearr_26769[(10)] = inst_26748);

(statearr_26769[(7)] = inst_26736);

return statearr_26769;
})();
var statearr_26770_26788 = state_26759__$1;
(statearr_26770_26788[(2)] = null);

(statearr_26770_26788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (9))){
var inst_26739 = (state_26759[(8)]);
var state_26759__$1 = state_26759;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26759__$1,(11),out,inst_26739);
} else {
if((state_val_26760 === (5))){
var inst_26739 = (state_26759[(8)]);
var inst_26736 = (state_26759[(7)]);
var inst_26743 = cljs.core._EQ_.call(null,inst_26739,inst_26736);
var state_26759__$1 = state_26759;
if(inst_26743){
var statearr_26772_26789 = state_26759__$1;
(statearr_26772_26789[(1)] = (8));

} else {
var statearr_26773_26790 = state_26759__$1;
(statearr_26773_26790[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (10))){
var inst_26751 = (state_26759[(2)]);
var state_26759__$1 = state_26759;
var statearr_26774_26791 = state_26759__$1;
(statearr_26774_26791[(2)] = inst_26751);

(statearr_26774_26791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26760 === (8))){
var inst_26736 = (state_26759[(7)]);
var tmp26771 = inst_26736;
var inst_26736__$1 = tmp26771;
var state_26759__$1 = (function (){var statearr_26775 = state_26759;
(statearr_26775[(7)] = inst_26736__$1);

return statearr_26775;
})();
var statearr_26776_26792 = state_26759__$1;
(statearr_26776_26792[(2)] = null);

(statearr_26776_26792[(1)] = (2));


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
});})(c__25046__auto___26782,out))
;
return ((function (switch__22049__auto__,c__25046__auto___26782,out){
return (function() {
var cljs$core$async$state_machine__22050__auto__ = null;
var cljs$core$async$state_machine__22050__auto____0 = (function (){
var statearr_26777 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26777[(0)] = cljs$core$async$state_machine__22050__auto__);

(statearr_26777[(1)] = (1));

return statearr_26777;
});
var cljs$core$async$state_machine__22050__auto____1 = (function (state_26759){
while(true){
var ret_value__22051__auto__ = (function (){try{while(true){
var result__22052__auto__ = switch__22049__auto__.call(null,state_26759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22052__auto__;
}
break;
}
}catch (e26778){if((e26778 instanceof Object)){
var ex__22053__auto__ = e26778;
var statearr_26779_26793 = state_26759;
(statearr_26779_26793[(5)] = ex__22053__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26778;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26794 = state_26759;
state_26759 = G__26794;
continue;
} else {
return ret_value__22051__auto__;
}
break;
}
});
cljs$core$async$state_machine__22050__auto__ = function(state_26759){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22050__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22050__auto____1.call(this,state_26759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22050__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22050__auto____0;
cljs$core$async$state_machine__22050__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22050__auto____1;
return cljs$core$async$state_machine__22050__auto__;
})()
;})(switch__22049__auto__,c__25046__auto___26782,out))
})();
var state__25048__auto__ = (function (){var statearr_26780 = f__25047__auto__.call(null);
(statearr_26780[(6)] = c__25046__auto___26782);

return statearr_26780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25048__auto__);
});})(c__25046__auto___26782,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__26796 = arguments.length;
switch (G__26796) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25046__auto___26862 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25046__auto___26862,out){
return (function (){
var f__25047__auto__ = (function (){var switch__22049__auto__ = ((function (c__25046__auto___26862,out){
return (function (state_26834){
var state_val_26835 = (state_26834[(1)]);
if((state_val_26835 === (7))){
var inst_26830 = (state_26834[(2)]);
var state_26834__$1 = state_26834;
var statearr_26836_26863 = state_26834__$1;
(statearr_26836_26863[(2)] = inst_26830);

(statearr_26836_26863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26835 === (1))){
var inst_26797 = (new Array(n));
var inst_26798 = inst_26797;
var inst_26799 = (0);
var state_26834__$1 = (function (){var statearr_26837 = state_26834;
(statearr_26837[(7)] = inst_26799);

(statearr_26837[(8)] = inst_26798);

return statearr_26837;
})();
var statearr_26838_26864 = state_26834__$1;
(statearr_26838_26864[(2)] = null);

(statearr_26838_26864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26835 === (4))){
var inst_26802 = (state_26834[(9)]);
var inst_26802__$1 = (state_26834[(2)]);
var inst_26803 = (inst_26802__$1 == null);
var inst_26804 = cljs.core.not.call(null,inst_26803);
var state_26834__$1 = (function (){var statearr_26839 = state_26834;
(statearr_26839[(9)] = inst_26802__$1);

return statearr_26839;
})();
if(inst_26804){
var statearr_26840_26865 = state_26834__$1;
(statearr_26840_26865[(1)] = (5));

} else {
var statearr_26841_26866 = state_26834__$1;
(statearr_26841_26866[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26835 === (15))){
var inst_26824 = (state_26834[(2)]);
var state_26834__$1 = state_26834;
var statearr_26842_26867 = state_26834__$1;
(statearr_26842_26867[(2)] = inst_26824);

(statearr_26842_26867[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26835 === (13))){
var state_26834__$1 = state_26834;
var statearr_26843_26868 = state_26834__$1;
(statearr_26843_26868[(2)] = null);

(statearr_26843_26868[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26835 === (6))){
var inst_26799 = (state_26834[(7)]);
var inst_26820 = (inst_26799 > (0));
var state_26834__$1 = state_26834;
if(cljs.core.truth_(inst_26820)){
var statearr_26844_26869 = state_26834__$1;
(statearr_26844_26869[(1)] = (12));

} else {
var statearr_26845_26870 = state_26834__$1;
(statearr_26845_26870[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26835 === (3))){
var inst_26832 = (state_26834[(2)]);
var state_26834__$1 = state_26834;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26834__$1,inst_26832);
} else {
if((state_val_26835 === (12))){
var inst_26798 = (state_26834[(8)]);
var inst_26822 = cljs.core.vec.call(null,inst_26798);
var state_26834__$1 = state_26834;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26834__$1,(15),out,inst_26822);
} else {
if((state_val_26835 === (2))){
var state_26834__$1 = state_26834;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26834__$1,(4),ch);
} else {
if((state_val_26835 === (11))){
var inst_26814 = (state_26834[(2)]);
var inst_26815 = (new Array(n));
var inst_26798 = inst_26815;
var inst_26799 = (0);
var state_26834__$1 = (function (){var statearr_26846 = state_26834;
(statearr_26846[(10)] = inst_26814);

(statearr_26846[(7)] = inst_26799);

(statearr_26846[(8)] = inst_26798);

return statearr_26846;
})();
var statearr_26847_26871 = state_26834__$1;
(statearr_26847_26871[(2)] = null);

(statearr_26847_26871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26835 === (9))){
var inst_26798 = (state_26834[(8)]);
var inst_26812 = cljs.core.vec.call(null,inst_26798);
var state_26834__$1 = state_26834;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26834__$1,(11),out,inst_26812);
} else {
if((state_val_26835 === (5))){
var inst_26807 = (state_26834[(11)]);
var inst_26799 = (state_26834[(7)]);
var inst_26798 = (state_26834[(8)]);
var inst_26802 = (state_26834[(9)]);
var inst_26806 = (inst_26798[inst_26799] = inst_26802);
var inst_26807__$1 = (inst_26799 + (1));
var inst_26808 = (inst_26807__$1 < n);
var state_26834__$1 = (function (){var statearr_26848 = state_26834;
(statearr_26848[(11)] = inst_26807__$1);

(statearr_26848[(12)] = inst_26806);

return statearr_26848;
})();
if(cljs.core.truth_(inst_26808)){
var statearr_26849_26872 = state_26834__$1;
(statearr_26849_26872[(1)] = (8));

} else {
var statearr_26850_26873 = state_26834__$1;
(statearr_26850_26873[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26835 === (14))){
var inst_26827 = (state_26834[(2)]);
var inst_26828 = cljs.core.async.close_BANG_.call(null,out);
var state_26834__$1 = (function (){var statearr_26852 = state_26834;
(statearr_26852[(13)] = inst_26827);

return statearr_26852;
})();
var statearr_26853_26874 = state_26834__$1;
(statearr_26853_26874[(2)] = inst_26828);

(statearr_26853_26874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26835 === (10))){
var inst_26818 = (state_26834[(2)]);
var state_26834__$1 = state_26834;
var statearr_26854_26875 = state_26834__$1;
(statearr_26854_26875[(2)] = inst_26818);

(statearr_26854_26875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26835 === (8))){
var inst_26807 = (state_26834[(11)]);
var inst_26798 = (state_26834[(8)]);
var tmp26851 = inst_26798;
var inst_26798__$1 = tmp26851;
var inst_26799 = inst_26807;
var state_26834__$1 = (function (){var statearr_26855 = state_26834;
(statearr_26855[(7)] = inst_26799);

(statearr_26855[(8)] = inst_26798__$1);

return statearr_26855;
})();
var statearr_26856_26876 = state_26834__$1;
(statearr_26856_26876[(2)] = null);

(statearr_26856_26876[(1)] = (2));


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
});})(c__25046__auto___26862,out))
;
return ((function (switch__22049__auto__,c__25046__auto___26862,out){
return (function() {
var cljs$core$async$state_machine__22050__auto__ = null;
var cljs$core$async$state_machine__22050__auto____0 = (function (){
var statearr_26857 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26857[(0)] = cljs$core$async$state_machine__22050__auto__);

(statearr_26857[(1)] = (1));

return statearr_26857;
});
var cljs$core$async$state_machine__22050__auto____1 = (function (state_26834){
while(true){
var ret_value__22051__auto__ = (function (){try{while(true){
var result__22052__auto__ = switch__22049__auto__.call(null,state_26834);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22052__auto__;
}
break;
}
}catch (e26858){if((e26858 instanceof Object)){
var ex__22053__auto__ = e26858;
var statearr_26859_26877 = state_26834;
(statearr_26859_26877[(5)] = ex__22053__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26834);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26858;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26878 = state_26834;
state_26834 = G__26878;
continue;
} else {
return ret_value__22051__auto__;
}
break;
}
});
cljs$core$async$state_machine__22050__auto__ = function(state_26834){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22050__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22050__auto____1.call(this,state_26834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22050__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22050__auto____0;
cljs$core$async$state_machine__22050__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22050__auto____1;
return cljs$core$async$state_machine__22050__auto__;
})()
;})(switch__22049__auto__,c__25046__auto___26862,out))
})();
var state__25048__auto__ = (function (){var statearr_26860 = f__25047__auto__.call(null);
(statearr_26860[(6)] = c__25046__auto___26862);

return statearr_26860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25048__auto__);
});})(c__25046__auto___26862,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__26880 = arguments.length;
switch (G__26880) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25046__auto___26950 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25046__auto___26950,out){
return (function (){
var f__25047__auto__ = (function (){var switch__22049__auto__ = ((function (c__25046__auto___26950,out){
return (function (state_26922){
var state_val_26923 = (state_26922[(1)]);
if((state_val_26923 === (7))){
var inst_26918 = (state_26922[(2)]);
var state_26922__$1 = state_26922;
var statearr_26924_26951 = state_26922__$1;
(statearr_26924_26951[(2)] = inst_26918);

(statearr_26924_26951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26923 === (1))){
var inst_26881 = [];
var inst_26882 = inst_26881;
var inst_26883 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26922__$1 = (function (){var statearr_26925 = state_26922;
(statearr_26925[(7)] = inst_26883);

(statearr_26925[(8)] = inst_26882);

return statearr_26925;
})();
var statearr_26926_26952 = state_26922__$1;
(statearr_26926_26952[(2)] = null);

(statearr_26926_26952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26923 === (4))){
var inst_26886 = (state_26922[(9)]);
var inst_26886__$1 = (state_26922[(2)]);
var inst_26887 = (inst_26886__$1 == null);
var inst_26888 = cljs.core.not.call(null,inst_26887);
var state_26922__$1 = (function (){var statearr_26927 = state_26922;
(statearr_26927[(9)] = inst_26886__$1);

return statearr_26927;
})();
if(inst_26888){
var statearr_26928_26953 = state_26922__$1;
(statearr_26928_26953[(1)] = (5));

} else {
var statearr_26929_26954 = state_26922__$1;
(statearr_26929_26954[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26923 === (15))){
var inst_26912 = (state_26922[(2)]);
var state_26922__$1 = state_26922;
var statearr_26930_26955 = state_26922__$1;
(statearr_26930_26955[(2)] = inst_26912);

(statearr_26930_26955[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26923 === (13))){
var state_26922__$1 = state_26922;
var statearr_26931_26956 = state_26922__$1;
(statearr_26931_26956[(2)] = null);

(statearr_26931_26956[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26923 === (6))){
var inst_26882 = (state_26922[(8)]);
var inst_26907 = inst_26882.length;
var inst_26908 = (inst_26907 > (0));
var state_26922__$1 = state_26922;
if(cljs.core.truth_(inst_26908)){
var statearr_26932_26957 = state_26922__$1;
(statearr_26932_26957[(1)] = (12));

} else {
var statearr_26933_26958 = state_26922__$1;
(statearr_26933_26958[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26923 === (3))){
var inst_26920 = (state_26922[(2)]);
var state_26922__$1 = state_26922;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26922__$1,inst_26920);
} else {
if((state_val_26923 === (12))){
var inst_26882 = (state_26922[(8)]);
var inst_26910 = cljs.core.vec.call(null,inst_26882);
var state_26922__$1 = state_26922;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26922__$1,(15),out,inst_26910);
} else {
if((state_val_26923 === (2))){
var state_26922__$1 = state_26922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26922__$1,(4),ch);
} else {
if((state_val_26923 === (11))){
var inst_26890 = (state_26922[(10)]);
var inst_26886 = (state_26922[(9)]);
var inst_26900 = (state_26922[(2)]);
var inst_26901 = [];
var inst_26902 = inst_26901.push(inst_26886);
var inst_26882 = inst_26901;
var inst_26883 = inst_26890;
var state_26922__$1 = (function (){var statearr_26934 = state_26922;
(statearr_26934[(7)] = inst_26883);

(statearr_26934[(8)] = inst_26882);

(statearr_26934[(11)] = inst_26902);

(statearr_26934[(12)] = inst_26900);

return statearr_26934;
})();
var statearr_26935_26959 = state_26922__$1;
(statearr_26935_26959[(2)] = null);

(statearr_26935_26959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26923 === (9))){
var inst_26882 = (state_26922[(8)]);
var inst_26898 = cljs.core.vec.call(null,inst_26882);
var state_26922__$1 = state_26922;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26922__$1,(11),out,inst_26898);
} else {
if((state_val_26923 === (5))){
var inst_26883 = (state_26922[(7)]);
var inst_26890 = (state_26922[(10)]);
var inst_26886 = (state_26922[(9)]);
var inst_26890__$1 = f.call(null,inst_26886);
var inst_26891 = cljs.core._EQ_.call(null,inst_26890__$1,inst_26883);
var inst_26892 = cljs.core.keyword_identical_QMARK_.call(null,inst_26883,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26893 = ((inst_26891) || (inst_26892));
var state_26922__$1 = (function (){var statearr_26936 = state_26922;
(statearr_26936[(10)] = inst_26890__$1);

return statearr_26936;
})();
if(cljs.core.truth_(inst_26893)){
var statearr_26937_26960 = state_26922__$1;
(statearr_26937_26960[(1)] = (8));

} else {
var statearr_26938_26961 = state_26922__$1;
(statearr_26938_26961[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26923 === (14))){
var inst_26915 = (state_26922[(2)]);
var inst_26916 = cljs.core.async.close_BANG_.call(null,out);
var state_26922__$1 = (function (){var statearr_26940 = state_26922;
(statearr_26940[(13)] = inst_26915);

return statearr_26940;
})();
var statearr_26941_26962 = state_26922__$1;
(statearr_26941_26962[(2)] = inst_26916);

(statearr_26941_26962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26923 === (10))){
var inst_26905 = (state_26922[(2)]);
var state_26922__$1 = state_26922;
var statearr_26942_26963 = state_26922__$1;
(statearr_26942_26963[(2)] = inst_26905);

(statearr_26942_26963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26923 === (8))){
var inst_26890 = (state_26922[(10)]);
var inst_26886 = (state_26922[(9)]);
var inst_26882 = (state_26922[(8)]);
var inst_26895 = inst_26882.push(inst_26886);
var tmp26939 = inst_26882;
var inst_26882__$1 = tmp26939;
var inst_26883 = inst_26890;
var state_26922__$1 = (function (){var statearr_26943 = state_26922;
(statearr_26943[(7)] = inst_26883);

(statearr_26943[(14)] = inst_26895);

(statearr_26943[(8)] = inst_26882__$1);

return statearr_26943;
})();
var statearr_26944_26964 = state_26922__$1;
(statearr_26944_26964[(2)] = null);

(statearr_26944_26964[(1)] = (2));


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
});})(c__25046__auto___26950,out))
;
return ((function (switch__22049__auto__,c__25046__auto___26950,out){
return (function() {
var cljs$core$async$state_machine__22050__auto__ = null;
var cljs$core$async$state_machine__22050__auto____0 = (function (){
var statearr_26945 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26945[(0)] = cljs$core$async$state_machine__22050__auto__);

(statearr_26945[(1)] = (1));

return statearr_26945;
});
var cljs$core$async$state_machine__22050__auto____1 = (function (state_26922){
while(true){
var ret_value__22051__auto__ = (function (){try{while(true){
var result__22052__auto__ = switch__22049__auto__.call(null,state_26922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22052__auto__;
}
break;
}
}catch (e26946){if((e26946 instanceof Object)){
var ex__22053__auto__ = e26946;
var statearr_26947_26965 = state_26922;
(statearr_26947_26965[(5)] = ex__22053__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26946;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26966 = state_26922;
state_26922 = G__26966;
continue;
} else {
return ret_value__22051__auto__;
}
break;
}
});
cljs$core$async$state_machine__22050__auto__ = function(state_26922){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22050__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22050__auto____1.call(this,state_26922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22050__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22050__auto____0;
cljs$core$async$state_machine__22050__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22050__auto____1;
return cljs$core$async$state_machine__22050__auto__;
})()
;})(switch__22049__auto__,c__25046__auto___26950,out))
})();
var state__25048__auto__ = (function (){var statearr_26948 = f__25047__auto__.call(null);
(statearr_26948[(6)] = c__25046__auto___26950);

return statearr_26948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25048__auto__);
});})(c__25046__auto___26950,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1551004818945
