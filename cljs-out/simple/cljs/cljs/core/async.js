// Compiled by ClojureScript 0.0-2322
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t34083 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34083 = (function (f,fn_handler,meta34084){
this.f = f;
this.fn_handler = fn_handler;
this.meta34084 = meta34084;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34083.cljs$lang$type = true;
cljs.core.async.t34083.cljs$lang$ctorStr = "cljs.core.async/t34083";
cljs.core.async.t34083.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t34083");
});
cljs.core.async.t34083.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34083.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t34083.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t34083.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34085){var self__ = this;
var _34085__$1 = this;return self__.meta34084;
});
cljs.core.async.t34083.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34085,meta34084__$1){var self__ = this;
var _34085__$1 = this;return (new cljs.core.async.t34083(self__.f,self__.fn_handler,meta34084__$1));
});
cljs.core.async.__GT_t34083 = (function __GT_t34083(f__$1,fn_handler__$1,meta34084){return (new cljs.core.async.t34083(f__$1,fn_handler__$1,meta34084));
});
}
return (new cljs.core.async.t34083(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__34087 = buff;if(G__34087)
{var bit__4208__auto__ = null;if(cljs.core.truth_((function (){var or__3558__auto__ = bit__4208__auto__;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return G__34087.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__34087.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__34087);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__34087);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_34088 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_34088);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_34088,ret){
return (function (){return fn1.call(null,val_34088);
});})(val_34088,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3546__auto__ = ret;if(cljs.core.truth_(and__3546__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3546__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4414__auto___34089 = n;var x_34090 = (0);while(true){
if((x_34090 < n__4414__auto___34089))
{(a[x_34090] = (0));
{
var G__34091 = (x_34090 + (1));
x_34090 = G__34091;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__34092 = (i + (1));
i = G__34092;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t34096 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34096 = (function (flag,alt_flag,meta34097){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta34097 = meta34097;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34096.cljs$lang$type = true;
cljs.core.async.t34096.cljs$lang$ctorStr = "cljs.core.async/t34096";
cljs.core.async.t34096.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t34096");
});})(flag))
;
cljs.core.async.t34096.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34096.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t34096.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t34096.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_34098){var self__ = this;
var _34098__$1 = this;return self__.meta34097;
});})(flag))
;
cljs.core.async.t34096.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_34098,meta34097__$1){var self__ = this;
var _34098__$1 = this;return (new cljs.core.async.t34096(self__.flag,self__.alt_flag,meta34097__$1));
});})(flag))
;
cljs.core.async.__GT_t34096 = ((function (flag){
return (function __GT_t34096(flag__$1,alt_flag__$1,meta34097){return (new cljs.core.async.t34096(flag__$1,alt_flag__$1,meta34097));
});})(flag))
;
}
return (new cljs.core.async.t34096(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t34102 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34102 = (function (cb,flag,alt_handler,meta34103){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta34103 = meta34103;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34102.cljs$lang$type = true;
cljs.core.async.t34102.cljs$lang$ctorStr = "cljs.core.async/t34102";
cljs.core.async.t34102.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t34102");
});
cljs.core.async.t34102.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34102.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t34102.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t34102.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34104){var self__ = this;
var _34104__$1 = this;return self__.meta34103;
});
cljs.core.async.t34102.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34104,meta34103__$1){var self__ = this;
var _34104__$1 = this;return (new cljs.core.async.t34102(self__.cb,self__.flag,self__.alt_handler,meta34103__$1));
});
cljs.core.async.__GT_t34102 = (function __GT_t34102(cb__$1,flag__$1,alt_handler__$1,meta34103){return (new cljs.core.async.t34102(cb__$1,flag__$1,alt_handler__$1,meta34103));
});
}
return (new cljs.core.async.t34102(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34105_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34105_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3558__auto__ = wport;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__34106 = (i + (1));
i = G__34106;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3558__auto__ = ret;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3546__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3546__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3546__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__34107){var map__34109 = p__34107;var map__34109__$1 = ((cljs.core.seq_QMARK_.call(null,map__34109))?cljs.core.apply.call(null,cljs.core.hash_map,map__34109):map__34109);var opts = map__34109__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__34107 = null;if (arguments.length > 1) {
  p__34107 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__34107);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__34110){
var ports = cljs.core.first(arglist__34110);
var p__34107 = cljs.core.rest(arglist__34110);
return alts_BANG___delegate(ports,p__34107);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t34118 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34118 = (function (ch,f,map_LT_,meta34119){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta34119 = meta34119;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34118.cljs$lang$type = true;
cljs.core.async.t34118.cljs$lang$ctorStr = "cljs.core.async/t34118";
cljs.core.async.t34118.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t34118");
});
cljs.core.async.t34118.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t34118.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t34118.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t34118.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t34121 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34121 = (function (fn1,_,meta34119,ch,f,map_LT_,meta34122){
this.fn1 = fn1;
this._ = _;
this.meta34119 = meta34119;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta34122 = meta34122;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34121.cljs$lang$type = true;
cljs.core.async.t34121.cljs$lang$ctorStr = "cljs.core.async/t34121";
cljs.core.async.t34121.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t34121");
});})(___$1))
;
cljs.core.async.t34121.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34121.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t34121.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t34121.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__34111_SHARP_){return f1.call(null,(((p1__34111_SHARP_ == null))?null:self__.f.call(null,p1__34111_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t34121.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34123){var self__ = this;
var _34123__$1 = this;return self__.meta34122;
});})(___$1))
;
cljs.core.async.t34121.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34123,meta34122__$1){var self__ = this;
var _34123__$1 = this;return (new cljs.core.async.t34121(self__.fn1,self__._,self__.meta34119,self__.ch,self__.f,self__.map_LT_,meta34122__$1));
});})(___$1))
;
cljs.core.async.__GT_t34121 = ((function (___$1){
return (function __GT_t34121(fn1__$1,___$2,meta34119__$1,ch__$2,f__$2,map_LT___$2,meta34122){return (new cljs.core.async.t34121(fn1__$1,___$2,meta34119__$1,ch__$2,f__$2,map_LT___$2,meta34122));
});})(___$1))
;
}
return (new cljs.core.async.t34121(fn1,___$1,self__.meta34119,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3546__auto__ = ret;if(cljs.core.truth_(and__3546__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3546__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t34118.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t34118.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t34118.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34120){var self__ = this;
var _34120__$1 = this;return self__.meta34119;
});
cljs.core.async.t34118.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34120,meta34119__$1){var self__ = this;
var _34120__$1 = this;return (new cljs.core.async.t34118(self__.ch,self__.f,self__.map_LT_,meta34119__$1));
});
cljs.core.async.__GT_t34118 = (function __GT_t34118(ch__$1,f__$1,map_LT___$1,meta34119){return (new cljs.core.async.t34118(ch__$1,f__$1,map_LT___$1,meta34119));
});
}
return (new cljs.core.async.t34118(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t34127 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34127 = (function (ch,f,map_GT_,meta34128){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta34128 = meta34128;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34127.cljs$lang$type = true;
cljs.core.async.t34127.cljs$lang$ctorStr = "cljs.core.async/t34127";
cljs.core.async.t34127.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t34127");
});
cljs.core.async.t34127.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t34127.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t34127.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t34127.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t34127.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t34127.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t34127.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34129){var self__ = this;
var _34129__$1 = this;return self__.meta34128;
});
cljs.core.async.t34127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34129,meta34128__$1){var self__ = this;
var _34129__$1 = this;return (new cljs.core.async.t34127(self__.ch,self__.f,self__.map_GT_,meta34128__$1));
});
cljs.core.async.__GT_t34127 = (function __GT_t34127(ch__$1,f__$1,map_GT___$1,meta34128){return (new cljs.core.async.t34127(ch__$1,f__$1,map_GT___$1,meta34128));
});
}
return (new cljs.core.async.t34127(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t34133 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34133 = (function (ch,p,filter_GT_,meta34134){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta34134 = meta34134;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34133.cljs$lang$type = true;
cljs.core.async.t34133.cljs$lang$ctorStr = "cljs.core.async/t34133";
cljs.core.async.t34133.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t34133");
});
cljs.core.async.t34133.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t34133.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t34133.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t34133.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t34133.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t34133.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t34133.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34135){var self__ = this;
var _34135__$1 = this;return self__.meta34134;
});
cljs.core.async.t34133.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34135,meta34134__$1){var self__ = this;
var _34135__$1 = this;return (new cljs.core.async.t34133(self__.ch,self__.p,self__.filter_GT_,meta34134__$1));
});
cljs.core.async.__GT_t34133 = (function __GT_t34133(ch__$1,p__$1,filter_GT___$1,meta34134){return (new cljs.core.async.t34133(ch__$1,p__$1,filter_GT___$1,meta34134));
});
}
return (new cljs.core.async.t34133(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___34218 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___34218,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___34218,out){
return (function (state_34197){var state_val_34198 = (state_34197[(1)]);if((state_val_34198 === (7)))
{var inst_34193 = (state_34197[(2)]);var state_34197__$1 = state_34197;var statearr_34199_34219 = state_34197__$1;(statearr_34199_34219[(2)] = inst_34193);
(statearr_34199_34219[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34198 === (1)))
{var state_34197__$1 = state_34197;var statearr_34200_34220 = state_34197__$1;(statearr_34200_34220[(2)] = null);
(statearr_34200_34220[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34198 === (4)))
{var inst_34179 = (state_34197[(7)]);var inst_34179__$1 = (state_34197[(2)]);var inst_34180 = (inst_34179__$1 == null);var state_34197__$1 = (function (){var statearr_34201 = state_34197;(statearr_34201[(7)] = inst_34179__$1);
return statearr_34201;
})();if(cljs.core.truth_(inst_34180))
{var statearr_34202_34221 = state_34197__$1;(statearr_34202_34221[(1)] = (5));
} else
{var statearr_34203_34222 = state_34197__$1;(statearr_34203_34222[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34198 === (6)))
{var inst_34179 = (state_34197[(7)]);var inst_34184 = p.call(null,inst_34179);var state_34197__$1 = state_34197;if(cljs.core.truth_(inst_34184))
{var statearr_34204_34223 = state_34197__$1;(statearr_34204_34223[(1)] = (8));
} else
{var statearr_34205_34224 = state_34197__$1;(statearr_34205_34224[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34198 === (3)))
{var inst_34195 = (state_34197[(2)]);var state_34197__$1 = state_34197;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34197__$1,inst_34195);
} else
{if((state_val_34198 === (2)))
{var state_34197__$1 = state_34197;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34197__$1,(4),ch);
} else
{if((state_val_34198 === (11)))
{var inst_34187 = (state_34197[(2)]);var state_34197__$1 = state_34197;var statearr_34206_34225 = state_34197__$1;(statearr_34206_34225[(2)] = inst_34187);
(statearr_34206_34225[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34198 === (9)))
{var state_34197__$1 = state_34197;var statearr_34207_34226 = state_34197__$1;(statearr_34207_34226[(2)] = null);
(statearr_34207_34226[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34198 === (5)))
{var inst_34182 = cljs.core.async.close_BANG_.call(null,out);var state_34197__$1 = state_34197;var statearr_34208_34227 = state_34197__$1;(statearr_34208_34227[(2)] = inst_34182);
(statearr_34208_34227[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34198 === (10)))
{var inst_34190 = (state_34197[(2)]);var state_34197__$1 = (function (){var statearr_34209 = state_34197;(statearr_34209[(8)] = inst_34190);
return statearr_34209;
})();var statearr_34210_34228 = state_34197__$1;(statearr_34210_34228[(2)] = null);
(statearr_34210_34228[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34198 === (8)))
{var inst_34179 = (state_34197[(7)]);var state_34197__$1 = state_34197;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34197__$1,(11),out,inst_34179);
} else
{return null;
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
});})(c__5708__auto___34218,out))
;return ((function (switch__5693__auto__,c__5708__auto___34218,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_34214 = [null,null,null,null,null,null,null,null,null];(statearr_34214[(0)] = state_machine__5694__auto__);
(statearr_34214[(1)] = (1));
return statearr_34214;
});
var state_machine__5694__auto____1 = (function (state_34197){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_34197);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e34215){if((e34215 instanceof Object))
{var ex__5697__auto__ = e34215;var statearr_34216_34229 = state_34197;(statearr_34216_34229[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34197);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e34215;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34230 = state_34197;
state_34197 = G__34230;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_34197){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_34197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___34218,out))
})();var state__5710__auto__ = (function (){var statearr_34217 = f__5709__auto__.call(null);(statearr_34217[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___34218);
return statearr_34217;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___34218,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_34382){var state_val_34383 = (state_34382[(1)]);if((state_val_34383 === (7)))
{var inst_34378 = (state_34382[(2)]);var state_34382__$1 = state_34382;var statearr_34384_34421 = state_34382__$1;(statearr_34384_34421[(2)] = inst_34378);
(statearr_34384_34421[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34383 === (20)))
{var inst_34353 = (state_34382[(7)]);var inst_34364 = (state_34382[(2)]);var inst_34365 = cljs.core.next.call(null,inst_34353);var inst_34339 = inst_34365;var inst_34340 = null;var inst_34341 = (0);var inst_34342 = (0);var state_34382__$1 = (function (){var statearr_34385 = state_34382;(statearr_34385[(8)] = inst_34364);
(statearr_34385[(9)] = inst_34341);
(statearr_34385[(10)] = inst_34339);
(statearr_34385[(11)] = inst_34340);
(statearr_34385[(12)] = inst_34342);
return statearr_34385;
})();var statearr_34386_34422 = state_34382__$1;(statearr_34386_34422[(2)] = null);
(statearr_34386_34422[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34383 === (1)))
{var state_34382__$1 = state_34382;var statearr_34387_34423 = state_34382__$1;(statearr_34387_34423[(2)] = null);
(statearr_34387_34423[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34383 === (4)))
{var inst_34328 = (state_34382[(13)]);var inst_34328__$1 = (state_34382[(2)]);var inst_34329 = (inst_34328__$1 == null);var state_34382__$1 = (function (){var statearr_34391 = state_34382;(statearr_34391[(13)] = inst_34328__$1);
return statearr_34391;
})();if(cljs.core.truth_(inst_34329))
{var statearr_34392_34424 = state_34382__$1;(statearr_34392_34424[(1)] = (5));
} else
{var statearr_34393_34425 = state_34382__$1;(statearr_34393_34425[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34383 === (15)))
{var state_34382__$1 = state_34382;var statearr_34394_34426 = state_34382__$1;(statearr_34394_34426[(2)] = null);
(statearr_34394_34426[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34383 === (13)))
{var inst_34341 = (state_34382[(9)]);var inst_34339 = (state_34382[(10)]);var inst_34340 = (state_34382[(11)]);var inst_34342 = (state_34382[(12)]);var inst_34349 = (state_34382[(2)]);var inst_34350 = (inst_34342 + (1));var tmp34388 = inst_34341;var tmp34389 = inst_34339;var tmp34390 = inst_34340;var inst_34339__$1 = tmp34389;var inst_34340__$1 = tmp34390;var inst_34341__$1 = tmp34388;var inst_34342__$1 = inst_34350;var state_34382__$1 = (function (){var statearr_34395 = state_34382;(statearr_34395[(14)] = inst_34349);
(statearr_34395[(9)] = inst_34341__$1);
(statearr_34395[(10)] = inst_34339__$1);
(statearr_34395[(11)] = inst_34340__$1);
(statearr_34395[(12)] = inst_34342__$1);
return statearr_34395;
})();var statearr_34396_34427 = state_34382__$1;(statearr_34396_34427[(2)] = null);
(statearr_34396_34427[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34383 === (6)))
{var inst_34328 = (state_34382[(13)]);var inst_34333 = f.call(null,inst_34328);var inst_34338 = cljs.core.seq.call(null,inst_34333);var inst_34339 = inst_34338;var inst_34340 = null;var inst_34341 = (0);var inst_34342 = (0);var state_34382__$1 = (function (){var statearr_34397 = state_34382;(statearr_34397[(9)] = inst_34341);
(statearr_34397[(10)] = inst_34339);
(statearr_34397[(11)] = inst_34340);
(statearr_34397[(12)] = inst_34342);
return statearr_34397;
})();var statearr_34398_34428 = state_34382__$1;(statearr_34398_34428[(2)] = null);
(statearr_34398_34428[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34383 === (17)))
{var inst_34353 = (state_34382[(7)]);var inst_34357 = cljs.core.chunk_first.call(null,inst_34353);var inst_34358 = cljs.core.chunk_rest.call(null,inst_34353);var inst_34359 = cljs.core.count.call(null,inst_34357);var inst_34339 = inst_34358;var inst_34340 = inst_34357;var inst_34341 = inst_34359;var inst_34342 = (0);var state_34382__$1 = (function (){var statearr_34399 = state_34382;(statearr_34399[(9)] = inst_34341);
(statearr_34399[(10)] = inst_34339);
(statearr_34399[(11)] = inst_34340);
(statearr_34399[(12)] = inst_34342);
return statearr_34399;
})();var statearr_34400_34429 = state_34382__$1;(statearr_34400_34429[(2)] = null);
(statearr_34400_34429[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34383 === (3)))
{var inst_34380 = (state_34382[(2)]);var state_34382__$1 = state_34382;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34382__$1,inst_34380);
} else
{if((state_val_34383 === (12)))
{var inst_34373 = (state_34382[(2)]);var state_34382__$1 = state_34382;var statearr_34401_34430 = state_34382__$1;(statearr_34401_34430[(2)] = inst_34373);
(statearr_34401_34430[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34383 === (2)))
{var state_34382__$1 = state_34382;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34382__$1,(4),in$);
} else
{if((state_val_34383 === (19)))
{var inst_34368 = (state_34382[(2)]);var state_34382__$1 = state_34382;var statearr_34402_34431 = state_34382__$1;(statearr_34402_34431[(2)] = inst_34368);
(statearr_34402_34431[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34383 === (11)))
{var inst_34353 = (state_34382[(7)]);var inst_34339 = (state_34382[(10)]);var inst_34353__$1 = cljs.core.seq.call(null,inst_34339);var state_34382__$1 = (function (){var statearr_34403 = state_34382;(statearr_34403[(7)] = inst_34353__$1);
return statearr_34403;
})();if(inst_34353__$1)
{var statearr_34404_34432 = state_34382__$1;(statearr_34404_34432[(1)] = (14));
} else
{var statearr_34405_34433 = state_34382__$1;(statearr_34405_34433[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34383 === (9)))
{var inst_34375 = (state_34382[(2)]);var state_34382__$1 = (function (){var statearr_34406 = state_34382;(statearr_34406[(15)] = inst_34375);
return statearr_34406;
})();var statearr_34407_34434 = state_34382__$1;(statearr_34407_34434[(2)] = null);
(statearr_34407_34434[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34383 === (5)))
{var inst_34331 = cljs.core.async.close_BANG_.call(null,out);var state_34382__$1 = state_34382;var statearr_34408_34435 = state_34382__$1;(statearr_34408_34435[(2)] = inst_34331);
(statearr_34408_34435[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34383 === (14)))
{var inst_34353 = (state_34382[(7)]);var inst_34355 = cljs.core.chunked_seq_QMARK_.call(null,inst_34353);var state_34382__$1 = state_34382;if(inst_34355)
{var statearr_34409_34436 = state_34382__$1;(statearr_34409_34436[(1)] = (17));
} else
{var statearr_34410_34437 = state_34382__$1;(statearr_34410_34437[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34383 === (16)))
{var inst_34371 = (state_34382[(2)]);var state_34382__$1 = state_34382;var statearr_34411_34438 = state_34382__$1;(statearr_34411_34438[(2)] = inst_34371);
(statearr_34411_34438[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34383 === (10)))
{var inst_34340 = (state_34382[(11)]);var inst_34342 = (state_34382[(12)]);var inst_34347 = cljs.core._nth.call(null,inst_34340,inst_34342);var state_34382__$1 = state_34382;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34382__$1,(13),out,inst_34347);
} else
{if((state_val_34383 === (18)))
{var inst_34353 = (state_34382[(7)]);var inst_34362 = cljs.core.first.call(null,inst_34353);var state_34382__$1 = state_34382;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34382__$1,(20),out,inst_34362);
} else
{if((state_val_34383 === (8)))
{var inst_34341 = (state_34382[(9)]);var inst_34342 = (state_34382[(12)]);var inst_34344 = (inst_34342 < inst_34341);var inst_34345 = inst_34344;var state_34382__$1 = state_34382;if(cljs.core.truth_(inst_34345))
{var statearr_34412_34439 = state_34382__$1;(statearr_34412_34439[(1)] = (10));
} else
{var statearr_34413_34440 = state_34382__$1;(statearr_34413_34440[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_34417 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34417[(0)] = state_machine__5694__auto__);
(statearr_34417[(1)] = (1));
return statearr_34417;
});
var state_machine__5694__auto____1 = (function (state_34382){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_34382);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e34418){if((e34418 instanceof Object))
{var ex__5697__auto__ = e34418;var statearr_34419_34441 = state_34382;(statearr_34419_34441[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34382);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e34418;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34442 = state_34382;
state_34382 = G__34442;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_34382){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_34382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_34420 = f__5709__auto__.call(null);(statearr_34420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_34420;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5708__auto___34523 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___34523){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___34523){
return (function (state_34502){var state_val_34503 = (state_34502[(1)]);if((state_val_34503 === (7)))
{var inst_34498 = (state_34502[(2)]);var state_34502__$1 = state_34502;var statearr_34504_34524 = state_34502__$1;(statearr_34504_34524[(2)] = inst_34498);
(statearr_34504_34524[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34503 === (1)))
{var state_34502__$1 = state_34502;var statearr_34505_34525 = state_34502__$1;(statearr_34505_34525[(2)] = null);
(statearr_34505_34525[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34503 === (4)))
{var inst_34485 = (state_34502[(7)]);var inst_34485__$1 = (state_34502[(2)]);var inst_34486 = (inst_34485__$1 == null);var state_34502__$1 = (function (){var statearr_34506 = state_34502;(statearr_34506[(7)] = inst_34485__$1);
return statearr_34506;
})();if(cljs.core.truth_(inst_34486))
{var statearr_34507_34526 = state_34502__$1;(statearr_34507_34526[(1)] = (5));
} else
{var statearr_34508_34527 = state_34502__$1;(statearr_34508_34527[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34503 === (6)))
{var inst_34485 = (state_34502[(7)]);var state_34502__$1 = state_34502;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34502__$1,(11),to,inst_34485);
} else
{if((state_val_34503 === (3)))
{var inst_34500 = (state_34502[(2)]);var state_34502__$1 = state_34502;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34502__$1,inst_34500);
} else
{if((state_val_34503 === (2)))
{var state_34502__$1 = state_34502;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34502__$1,(4),from);
} else
{if((state_val_34503 === (11)))
{var inst_34495 = (state_34502[(2)]);var state_34502__$1 = (function (){var statearr_34509 = state_34502;(statearr_34509[(8)] = inst_34495);
return statearr_34509;
})();var statearr_34510_34528 = state_34502__$1;(statearr_34510_34528[(2)] = null);
(statearr_34510_34528[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34503 === (9)))
{var state_34502__$1 = state_34502;var statearr_34511_34529 = state_34502__$1;(statearr_34511_34529[(2)] = null);
(statearr_34511_34529[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34503 === (5)))
{var state_34502__$1 = state_34502;if(cljs.core.truth_(close_QMARK_))
{var statearr_34512_34530 = state_34502__$1;(statearr_34512_34530[(1)] = (8));
} else
{var statearr_34513_34531 = state_34502__$1;(statearr_34513_34531[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34503 === (10)))
{var inst_34492 = (state_34502[(2)]);var state_34502__$1 = state_34502;var statearr_34514_34532 = state_34502__$1;(statearr_34514_34532[(2)] = inst_34492);
(statearr_34514_34532[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34503 === (8)))
{var inst_34489 = cljs.core.async.close_BANG_.call(null,to);var state_34502__$1 = state_34502;var statearr_34515_34533 = state_34502__$1;(statearr_34515_34533[(2)] = inst_34489);
(statearr_34515_34533[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__5708__auto___34523))
;return ((function (switch__5693__auto__,c__5708__auto___34523){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_34519 = [null,null,null,null,null,null,null,null,null];(statearr_34519[(0)] = state_machine__5694__auto__);
(statearr_34519[(1)] = (1));
return statearr_34519;
});
var state_machine__5694__auto____1 = (function (state_34502){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_34502);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e34520){if((e34520 instanceof Object))
{var ex__5697__auto__ = e34520;var statearr_34521_34534 = state_34502;(statearr_34521_34534[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34502);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e34520;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34535 = state_34502;
state_34502 = G__34535;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_34502){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_34502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___34523))
})();var state__5710__auto__ = (function (){var statearr_34522 = f__5709__auto__.call(null);(statearr_34522[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___34523);
return statearr_34522;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___34523))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5708__auto___34622 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___34622,tc,fc){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___34622,tc,fc){
return (function (state_34600){var state_val_34601 = (state_34600[(1)]);if((state_val_34601 === (7)))
{var inst_34596 = (state_34600[(2)]);var state_34600__$1 = state_34600;var statearr_34602_34623 = state_34600__$1;(statearr_34602_34623[(2)] = inst_34596);
(statearr_34602_34623[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34601 === (1)))
{var state_34600__$1 = state_34600;var statearr_34603_34624 = state_34600__$1;(statearr_34603_34624[(2)] = null);
(statearr_34603_34624[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34601 === (4)))
{var inst_34581 = (state_34600[(7)]);var inst_34581__$1 = (state_34600[(2)]);var inst_34582 = (inst_34581__$1 == null);var state_34600__$1 = (function (){var statearr_34604 = state_34600;(statearr_34604[(7)] = inst_34581__$1);
return statearr_34604;
})();if(cljs.core.truth_(inst_34582))
{var statearr_34605_34625 = state_34600__$1;(statearr_34605_34625[(1)] = (5));
} else
{var statearr_34606_34626 = state_34600__$1;(statearr_34606_34626[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34601 === (6)))
{var inst_34581 = (state_34600[(7)]);var inst_34587 = p.call(null,inst_34581);var state_34600__$1 = state_34600;if(cljs.core.truth_(inst_34587))
{var statearr_34607_34627 = state_34600__$1;(statearr_34607_34627[(1)] = (9));
} else
{var statearr_34608_34628 = state_34600__$1;(statearr_34608_34628[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34601 === (3)))
{var inst_34598 = (state_34600[(2)]);var state_34600__$1 = state_34600;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34600__$1,inst_34598);
} else
{if((state_val_34601 === (2)))
{var state_34600__$1 = state_34600;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34600__$1,(4),ch);
} else
{if((state_val_34601 === (11)))
{var inst_34581 = (state_34600[(7)]);var inst_34591 = (state_34600[(2)]);var state_34600__$1 = state_34600;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34600__$1,(8),inst_34591,inst_34581);
} else
{if((state_val_34601 === (9)))
{var state_34600__$1 = state_34600;var statearr_34609_34629 = state_34600__$1;(statearr_34609_34629[(2)] = tc);
(statearr_34609_34629[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34601 === (5)))
{var inst_34584 = cljs.core.async.close_BANG_.call(null,tc);var inst_34585 = cljs.core.async.close_BANG_.call(null,fc);var state_34600__$1 = (function (){var statearr_34610 = state_34600;(statearr_34610[(8)] = inst_34584);
return statearr_34610;
})();var statearr_34611_34630 = state_34600__$1;(statearr_34611_34630[(2)] = inst_34585);
(statearr_34611_34630[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34601 === (10)))
{var state_34600__$1 = state_34600;var statearr_34612_34631 = state_34600__$1;(statearr_34612_34631[(2)] = fc);
(statearr_34612_34631[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34601 === (8)))
{var inst_34593 = (state_34600[(2)]);var state_34600__$1 = (function (){var statearr_34613 = state_34600;(statearr_34613[(9)] = inst_34593);
return statearr_34613;
})();var statearr_34614_34632 = state_34600__$1;(statearr_34614_34632[(2)] = null);
(statearr_34614_34632[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__5708__auto___34622,tc,fc))
;return ((function (switch__5693__auto__,c__5708__auto___34622,tc,fc){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_34618 = [null,null,null,null,null,null,null,null,null,null];(statearr_34618[(0)] = state_machine__5694__auto__);
(statearr_34618[(1)] = (1));
return statearr_34618;
});
var state_machine__5694__auto____1 = (function (state_34600){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_34600);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e34619){if((e34619 instanceof Object))
{var ex__5697__auto__ = e34619;var statearr_34620_34633 = state_34600;(statearr_34620_34633[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34600);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e34619;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34634 = state_34600;
state_34600 = G__34634;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_34600){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_34600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___34622,tc,fc))
})();var state__5710__auto__ = (function (){var statearr_34621 = f__5709__auto__.call(null);(statearr_34621[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___34622);
return statearr_34621;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___34622,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_34681){var state_val_34682 = (state_34681[(1)]);if((state_val_34682 === (7)))
{var inst_34677 = (state_34681[(2)]);var state_34681__$1 = state_34681;var statearr_34683_34699 = state_34681__$1;(statearr_34683_34699[(2)] = inst_34677);
(statearr_34683_34699[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34682 === (6)))
{var inst_34667 = (state_34681[(7)]);var inst_34670 = (state_34681[(8)]);var inst_34674 = f.call(null,inst_34667,inst_34670);var inst_34667__$1 = inst_34674;var state_34681__$1 = (function (){var statearr_34684 = state_34681;(statearr_34684[(7)] = inst_34667__$1);
return statearr_34684;
})();var statearr_34685_34700 = state_34681__$1;(statearr_34685_34700[(2)] = null);
(statearr_34685_34700[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34682 === (5)))
{var inst_34667 = (state_34681[(7)]);var state_34681__$1 = state_34681;var statearr_34686_34701 = state_34681__$1;(statearr_34686_34701[(2)] = inst_34667);
(statearr_34686_34701[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34682 === (4)))
{var inst_34670 = (state_34681[(8)]);var inst_34670__$1 = (state_34681[(2)]);var inst_34671 = (inst_34670__$1 == null);var state_34681__$1 = (function (){var statearr_34687 = state_34681;(statearr_34687[(8)] = inst_34670__$1);
return statearr_34687;
})();if(cljs.core.truth_(inst_34671))
{var statearr_34688_34702 = state_34681__$1;(statearr_34688_34702[(1)] = (5));
} else
{var statearr_34689_34703 = state_34681__$1;(statearr_34689_34703[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34682 === (3)))
{var inst_34679 = (state_34681[(2)]);var state_34681__$1 = state_34681;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34681__$1,inst_34679);
} else
{if((state_val_34682 === (2)))
{var state_34681__$1 = state_34681;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34681__$1,(4),ch);
} else
{if((state_val_34682 === (1)))
{var inst_34667 = init;var state_34681__$1 = (function (){var statearr_34690 = state_34681;(statearr_34690[(7)] = inst_34667);
return statearr_34690;
})();var statearr_34691_34704 = state_34681__$1;(statearr_34691_34704[(2)] = null);
(statearr_34691_34704[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_34695 = [null,null,null,null,null,null,null,null,null];(statearr_34695[(0)] = state_machine__5694__auto__);
(statearr_34695[(1)] = (1));
return statearr_34695;
});
var state_machine__5694__auto____1 = (function (state_34681){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_34681);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e34696){if((e34696 instanceof Object))
{var ex__5697__auto__ = e34696;var statearr_34697_34705 = state_34681;(statearr_34697_34705[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34681);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e34696;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34706 = state_34681;
state_34681 = G__34706;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_34681){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_34681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_34698 = f__5709__auto__.call(null);(statearr_34698[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_34698;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_34768){var state_val_34769 = (state_34768[(1)]);if((state_val_34769 === (7)))
{var inst_34749 = (state_34768[(7)]);var inst_34754 = (state_34768[(2)]);var inst_34755 = cljs.core.next.call(null,inst_34749);var inst_34749__$1 = inst_34755;var state_34768__$1 = (function (){var statearr_34770 = state_34768;(statearr_34770[(8)] = inst_34754);
(statearr_34770[(7)] = inst_34749__$1);
return statearr_34770;
})();var statearr_34771_34789 = state_34768__$1;(statearr_34771_34789[(2)] = null);
(statearr_34771_34789[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34769 === (1)))
{var inst_34748 = cljs.core.seq.call(null,coll);var inst_34749 = inst_34748;var state_34768__$1 = (function (){var statearr_34772 = state_34768;(statearr_34772[(7)] = inst_34749);
return statearr_34772;
})();var statearr_34773_34790 = state_34768__$1;(statearr_34773_34790[(2)] = null);
(statearr_34773_34790[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34769 === (4)))
{var inst_34749 = (state_34768[(7)]);var inst_34752 = cljs.core.first.call(null,inst_34749);var state_34768__$1 = state_34768;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34768__$1,(7),ch,inst_34752);
} else
{if((state_val_34769 === (6)))
{var inst_34764 = (state_34768[(2)]);var state_34768__$1 = state_34768;var statearr_34774_34791 = state_34768__$1;(statearr_34774_34791[(2)] = inst_34764);
(statearr_34774_34791[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34769 === (3)))
{var inst_34766 = (state_34768[(2)]);var state_34768__$1 = state_34768;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34768__$1,inst_34766);
} else
{if((state_val_34769 === (2)))
{var inst_34749 = (state_34768[(7)]);var state_34768__$1 = state_34768;if(cljs.core.truth_(inst_34749))
{var statearr_34775_34792 = state_34768__$1;(statearr_34775_34792[(1)] = (4));
} else
{var statearr_34776_34793 = state_34768__$1;(statearr_34776_34793[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34769 === (9)))
{var state_34768__$1 = state_34768;var statearr_34777_34794 = state_34768__$1;(statearr_34777_34794[(2)] = null);
(statearr_34777_34794[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34769 === (5)))
{var state_34768__$1 = state_34768;if(cljs.core.truth_(close_QMARK_))
{var statearr_34778_34795 = state_34768__$1;(statearr_34778_34795[(1)] = (8));
} else
{var statearr_34779_34796 = state_34768__$1;(statearr_34779_34796[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34769 === (10)))
{var inst_34762 = (state_34768[(2)]);var state_34768__$1 = state_34768;var statearr_34780_34797 = state_34768__$1;(statearr_34780_34797[(2)] = inst_34762);
(statearr_34780_34797[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34769 === (8)))
{var inst_34759 = cljs.core.async.close_BANG_.call(null,ch);var state_34768__$1 = state_34768;var statearr_34781_34798 = state_34768__$1;(statearr_34781_34798[(2)] = inst_34759);
(statearr_34781_34798[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_34785 = [null,null,null,null,null,null,null,null,null];(statearr_34785[(0)] = state_machine__5694__auto__);
(statearr_34785[(1)] = (1));
return statearr_34785;
});
var state_machine__5694__auto____1 = (function (state_34768){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_34768);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e34786){if((e34786 instanceof Object))
{var ex__5697__auto__ = e34786;var statearr_34787_34799 = state_34768;(statearr_34787_34799[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34768);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e34786;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34800 = state_34768;
state_34768 = G__34800;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_34768){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_34768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_34788 = f__5709__auto__.call(null);(statearr_34788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_34788;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj34802 = {};return obj34802;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3546__auto__ = _;if(and__3546__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3546__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4185__auto__ = (((_ == null))?null:_);return (function (){var or__3558__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj34804 = {};return obj34804;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t35028 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35028 = (function (cs,ch,mult,meta35029){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta35029 = meta35029;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35028.cljs$lang$type = true;
cljs.core.async.t35028.cljs$lang$ctorStr = "cljs.core.async/t35028";
cljs.core.async.t35028.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t35028");
});})(cs))
;
cljs.core.async.t35028.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t35028.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t35028.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t35028.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t35028.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t35028.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t35028.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_35030){var self__ = this;
var _35030__$1 = this;return self__.meta35029;
});})(cs))
;
cljs.core.async.t35028.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_35030,meta35029__$1){var self__ = this;
var _35030__$1 = this;return (new cljs.core.async.t35028(self__.cs,self__.ch,self__.mult,meta35029__$1));
});})(cs))
;
cljs.core.async.__GT_t35028 = ((function (cs){
return (function __GT_t35028(cs__$1,ch__$1,mult__$1,meta35029){return (new cljs.core.async.t35028(cs__$1,ch__$1,mult__$1,meta35029));
});})(cs))
;
}
return (new cljs.core.async.t35028(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5708__auto___35251 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___35251,cs,m,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___35251,cs,m,dchan,dctr,done){
return (function (state_35165){var state_val_35166 = (state_35165[(1)]);if((state_val_35166 === (7)))
{var inst_35161 = (state_35165[(2)]);var state_35165__$1 = state_35165;var statearr_35167_35252 = state_35165__$1;(statearr_35167_35252[(2)] = inst_35161);
(statearr_35167_35252[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35166 === (20)))
{var inst_35062 = (state_35165[(7)]);var inst_35072 = cljs.core.first.call(null,inst_35062);var inst_35073 = cljs.core.nth.call(null,inst_35072,(0),null);var inst_35074 = cljs.core.nth.call(null,inst_35072,(1),null);var state_35165__$1 = (function (){var statearr_35168 = state_35165;(statearr_35168[(8)] = inst_35073);
return statearr_35168;
})();if(cljs.core.truth_(inst_35074))
{var statearr_35169_35253 = state_35165__$1;(statearr_35169_35253[(1)] = (22));
} else
{var statearr_35170_35254 = state_35165__$1;(statearr_35170_35254[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35166 === (27)))
{var inst_35102 = (state_35165[(9)]);var inst_35104 = (state_35165[(10)]);var inst_35109 = cljs.core._nth.call(null,inst_35102,inst_35104);var state_35165__$1 = (function (){var statearr_35171 = state_35165;(statearr_35171[(11)] = inst_35109);
return statearr_35171;
})();var statearr_35172_35255 = state_35165__$1;(statearr_35172_35255[(2)] = null);
(statearr_35172_35255[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35166 === (1)))
{var state_35165__$1 = state_35165;var statearr_35173_35256 = state_35165__$1;(statearr_35173_35256[(2)] = null);
(statearr_35173_35256[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35166 === (24)))
{var inst_35062 = (state_35165[(7)]);var inst_35079 = (state_35165[(2)]);var inst_35080 = cljs.core.next.call(null,inst_35062);var inst_35042 = inst_35080;var inst_35043 = null;var inst_35044 = (0);var inst_35045 = (0);var state_35165__$1 = (function (){var statearr_35174 = state_35165;(statearr_35174[(12)] = inst_35044);
(statearr_35174[(13)] = inst_35042);
(statearr_35174[(14)] = inst_35043);
(statearr_35174[(15)] = inst_35079);
(statearr_35174[(16)] = inst_35045);
return statearr_35174;
})();var statearr_35175_35257 = state_35165__$1;(statearr_35175_35257[(2)] = null);
(statearr_35175_35257[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35166 === (39)))
{var inst_35122 = (state_35165[(17)]);var inst_35140 = (state_35165[(2)]);var inst_35141 = cljs.core.next.call(null,inst_35122);var inst_35101 = inst_35141;var inst_35102 = null;var inst_35103 = (0);var inst_35104 = (0);var state_35165__$1 = (function (){var statearr_35179 = state_35165;(statearr_35179[(18)] = inst_35103);
(statearr_35179[(9)] = inst_35102);
(statearr_35179[(10)] = inst_35104);
(statearr_35179[(19)] = inst_35140);
(statearr_35179[(20)] = inst_35101);
return statearr_35179;
})();var statearr_35180_35258 = state_35165__$1;(statearr_35180_35258[(2)] = null);
(statearr_35180_35258[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35166 === (4)))
{var inst_35033 = (state_35165[(21)]);var inst_35033__$1 = (state_35165[(2)]);var inst_35034 = (inst_35033__$1 == null);var state_35165__$1 = (function (){var statearr_35181 = state_35165;(statearr_35181[(21)] = inst_35033__$1);
return statearr_35181;
})();if(cljs.core.truth_(inst_35034))
{var statearr_35182_35259 = state_35165__$1;(statearr_35182_35259[(1)] = (5));
} else
{var statearr_35183_35260 = state_35165__$1;(statearr_35183_35260[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35166 === (15)))
{var inst_35044 = (state_35165[(12)]);var inst_35042 = (state_35165[(13)]);var inst_35043 = (state_35165[(14)]);var inst_35045 = (state_35165[(16)]);var inst_35058 = (state_35165[(2)]);var inst_35059 = (inst_35045 + (1));var tmp35176 = inst_35044;var tmp35177 = inst_35042;var tmp35178 = inst_35043;var inst_35042__$1 = tmp35177;var inst_35043__$1 = tmp35178;var inst_35044__$1 = tmp35176;var inst_35045__$1 = inst_35059;var state_35165__$1 = (function (){var statearr_35184 = state_35165;(statearr_35184[(12)] = inst_35044__$1);
(statearr_35184[(13)] = inst_35042__$1);
(statearr_35184[(22)] = inst_35058);
(statearr_35184[(14)] = inst_35043__$1);
(statearr_35184[(16)] = inst_35045__$1);
return statearr_35184;
})();var statearr_35185_35261 = state_35165__$1;(statearr_35185_35261[(2)] = null);
(statearr_35185_35261[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35166 === (21)))
{var inst_35083 = (state_35165[(2)]);var state_35165__$1 = state_35165;var statearr_35186_35262 = state_35165__$1;(statearr_35186_35262[(2)] = inst_35083);
(statearr_35186_35262[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35166 === (31)))
{var inst_35109 = (state_35165[(11)]);var inst_35110 = (state_35165[(2)]);var inst_35111 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_35112 = cljs.core.async.untap_STAR_.call(null,m,inst_35109);var state_35165__$1 = (function (){var statearr_35187 = state_35165;(statearr_35187[(23)] = inst_35110);
(statearr_35187[(24)] = inst_35111);
return statearr_35187;
})();var statearr_35188_35263 = state_35165__$1;(statearr_35188_35263[(2)] = inst_35112);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35165__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35166 === (32)))
{var inst_35109 = (state_35165[(11)]);var inst_35033 = (state_35165[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35165,(31),Object,null,(30));var inst_35116 = cljs.core.async.put_BANG_.call(null,inst_35109,inst_35033,done);var state_35165__$1 = state_35165;var statearr_35189_35264 = state_35165__$1;(statearr_35189_35264[(2)] = inst_35116);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35165__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35166 === (40)))
{var inst_35131 = (state_35165[(25)]);var inst_35132 = (state_35165[(2)]);var inst_35133 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_35134 = cljs.core.async.untap_STAR_.call(null,m,inst_35131);var state_35165__$1 = (function (){var statearr_35190 = state_35165;(statearr_35190[(26)] = inst_35133);
(statearr_35190[(27)] = inst_35132);
return statearr_35190;
})();var statearr_35191_35265 = state_35165__$1;(statearr_35191_35265[(2)] = inst_35134);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35165__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35166 === (33)))
{var inst_35122 = (state_35165[(17)]);var inst_35124 = cljs.core.chunked_seq_QMARK_.call(null,inst_35122);var state_35165__$1 = state_35165;if(inst_35124)
{var statearr_35192_35266 = state_35165__$1;(statearr_35192_35266[(1)] = (36));
} else
{var statearr_35193_35267 = state_35165__$1;(statearr_35193_35267[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35166 === (13)))
{var inst_35052 = (state_35165[(28)]);var inst_35055 = cljs.core.async.close_BANG_.call(null,inst_35052);var state_35165__$1 = state_35165;var statearr_35194_35268 = state_35165__$1;(statearr_35194_35268[(2)] = inst_35055);
(statearr_35194_35268[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35166 === (22)))
{var inst_35073 = (state_35165[(8)]);var inst_35076 = cljs.core.async.close_BANG_.call(null,inst_35073);var state_35165__$1 = state_35165;var statearr_35195_35269 = state_35165__$1;(statearr_35195_35269[(2)] = inst_35076);
(statearr_35195_35269[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35166 === (36)))
{var inst_35122 = (state_35165[(17)]);var inst_35126 = cljs.core.chunk_first.call(null,inst_35122);var inst_35127 = cljs.core.chunk_rest.call(null,inst_35122);var inst_35128 = cljs.core.count.call(null,inst_35126);var inst_35101 = inst_35127;var inst_35102 = inst_35126;var inst_35103 = inst_35128;var inst_35104 = (0);var state_35165__$1 = (function (){var statearr_35196 = state_35165;(statearr_35196[(18)] = inst_35103);
(statearr_35196[(9)] = inst_35102);
(statearr_35196[(10)] = inst_35104);
(statearr_35196[(20)] = inst_35101);
return statearr_35196;
})();var statearr_35197_35270 = state_35165__$1;(statearr_35197_35270[(2)] = null);
(statearr_35197_35270[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35166 === (41)))
{var inst_35131 = (state_35165[(25)]);var inst_35033 = (state_35165[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35165,(40),Object,null,(39));var inst_35138 = cljs.core.async.put_BANG_.call(null,inst_35131,inst_35033,done);var state_35165__$1 = state_35165;var statearr_35198_35271 = state_35165__$1;(statearr_35198_35271[(2)] = inst_35138);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35165__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35166 === (43)))
{var state_35165__$1 = state_35165;var statearr_35199_35272 = state_35165__$1;(statearr_35199_35272[(2)] = null);
(statearr_35199_35272[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35166 === (29)))
{var inst_35149 = (state_35165[(2)]);var state_35165__$1 = state_35165;var statearr_35200_35273 = state_35165__$1;(statearr_35200_35273[(2)] = inst_35149);
(statearr_35200_35273[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35166 === (44)))
{var inst_35158 = (state_35165[(2)]);var state_35165__$1 = (function (){var statearr_35201 = state_35165;(statearr_35201[(29)] = inst_35158);
return statearr_35201;
})();var statearr_35202_35274 = state_35165__$1;(statearr_35202_35274[(2)] = null);
(statearr_35202_35274[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35166 === (6)))
{var inst_35093 = (state_35165[(30)]);var inst_35092 = cljs.core.deref.call(null,cs);var inst_35093__$1 = cljs.core.keys.call(null,inst_35092);var inst_35094 = cljs.core.count.call(null,inst_35093__$1);var inst_35095 = cljs.core.reset_BANG_.call(null,dctr,inst_35094);var inst_35100 = cljs.core.seq.call(null,inst_35093__$1);var inst_35101 = inst_35100;var inst_35102 = null;var inst_35103 = (0);var inst_35104 = (0);var state_35165__$1 = (function (){var statearr_35203 = state_35165;(statearr_35203[(18)] = inst_35103);
(statearr_35203[(9)] = inst_35102);
(statearr_35203[(31)] = inst_35095);
(statearr_35203[(10)] = inst_35104);
(statearr_35203[(30)] = inst_35093__$1);
(statearr_35203[(20)] = inst_35101);
return statearr_35203;
})();var statearr_35204_35275 = state_35165__$1;(statearr_35204_35275[(2)] = null);
(statearr_35204_35275[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35166 === (28)))
{var inst_35122 = (state_35165[(17)]);var inst_35101 = (state_35165[(20)]);var inst_35122__$1 = cljs.core.seq.call(null,inst_35101);var state_35165__$1 = (function (){var statearr_35205 = state_35165;(statearr_35205[(17)] = inst_35122__$1);
return statearr_35205;
})();if(inst_35122__$1)
{var statearr_35206_35276 = state_35165__$1;(statearr_35206_35276[(1)] = (33));
} else
{var statearr_35207_35277 = state_35165__$1;(statearr_35207_35277[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35166 === (25)))
{var inst_35103 = (state_35165[(18)]);var inst_35104 = (state_35165[(10)]);var inst_35106 = (inst_35104 < inst_35103);var inst_35107 = inst_35106;var state_35165__$1 = state_35165;if(cljs.core.truth_(inst_35107))
{var statearr_35208_35278 = state_35165__$1;(statearr_35208_35278[(1)] = (27));
} else
{var statearr_35209_35279 = state_35165__$1;(statearr_35209_35279[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35166 === (34)))
{var state_35165__$1 = state_35165;var statearr_35210_35280 = state_35165__$1;(statearr_35210_35280[(2)] = null);
(statearr_35210_35280[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35166 === (17)))
{var state_35165__$1 = state_35165;var statearr_35211_35281 = state_35165__$1;(statearr_35211_35281[(2)] = null);
(statearr_35211_35281[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35166 === (3)))
{var inst_35163 = (state_35165[(2)]);var state_35165__$1 = state_35165;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35165__$1,inst_35163);
} else
{if((state_val_35166 === (12)))
{var inst_35088 = (state_35165[(2)]);var state_35165__$1 = state_35165;var statearr_35212_35282 = state_35165__$1;(statearr_35212_35282[(2)] = inst_35088);
(statearr_35212_35282[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35166 === (2)))
{var state_35165__$1 = state_35165;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35165__$1,(4),ch);
} else
{if((state_val_35166 === (23)))
{var state_35165__$1 = state_35165;var statearr_35213_35283 = state_35165__$1;(statearr_35213_35283[(2)] = null);
(statearr_35213_35283[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35166 === (35)))
{var inst_35147 = (state_35165[(2)]);var state_35165__$1 = state_35165;var statearr_35214_35284 = state_35165__$1;(statearr_35214_35284[(2)] = inst_35147);
(statearr_35214_35284[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35166 === (19)))
{var inst_35062 = (state_35165[(7)]);var inst_35066 = cljs.core.chunk_first.call(null,inst_35062);var inst_35067 = cljs.core.chunk_rest.call(null,inst_35062);var inst_35068 = cljs.core.count.call(null,inst_35066);var inst_35042 = inst_35067;var inst_35043 = inst_35066;var inst_35044 = inst_35068;var inst_35045 = (0);var state_35165__$1 = (function (){var statearr_35215 = state_35165;(statearr_35215[(12)] = inst_35044);
(statearr_35215[(13)] = inst_35042);
(statearr_35215[(14)] = inst_35043);
(statearr_35215[(16)] = inst_35045);
return statearr_35215;
})();var statearr_35216_35285 = state_35165__$1;(statearr_35216_35285[(2)] = null);
(statearr_35216_35285[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35166 === (11)))
{var inst_35042 = (state_35165[(13)]);var inst_35062 = (state_35165[(7)]);var inst_35062__$1 = cljs.core.seq.call(null,inst_35042);var state_35165__$1 = (function (){var statearr_35217 = state_35165;(statearr_35217[(7)] = inst_35062__$1);
return statearr_35217;
})();if(inst_35062__$1)
{var statearr_35218_35286 = state_35165__$1;(statearr_35218_35286[(1)] = (16));
} else
{var statearr_35219_35287 = state_35165__$1;(statearr_35219_35287[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35166 === (9)))
{var inst_35090 = (state_35165[(2)]);var state_35165__$1 = state_35165;var statearr_35220_35288 = state_35165__$1;(statearr_35220_35288[(2)] = inst_35090);
(statearr_35220_35288[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35166 === (5)))
{var inst_35040 = cljs.core.deref.call(null,cs);var inst_35041 = cljs.core.seq.call(null,inst_35040);var inst_35042 = inst_35041;var inst_35043 = null;var inst_35044 = (0);var inst_35045 = (0);var state_35165__$1 = (function (){var statearr_35221 = state_35165;(statearr_35221[(12)] = inst_35044);
(statearr_35221[(13)] = inst_35042);
(statearr_35221[(14)] = inst_35043);
(statearr_35221[(16)] = inst_35045);
return statearr_35221;
})();var statearr_35222_35289 = state_35165__$1;(statearr_35222_35289[(2)] = null);
(statearr_35222_35289[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35166 === (14)))
{var state_35165__$1 = state_35165;var statearr_35223_35290 = state_35165__$1;(statearr_35223_35290[(2)] = null);
(statearr_35223_35290[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35166 === (45)))
{var inst_35155 = (state_35165[(2)]);var state_35165__$1 = state_35165;var statearr_35224_35291 = state_35165__$1;(statearr_35224_35291[(2)] = inst_35155);
(statearr_35224_35291[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35166 === (26)))
{var inst_35093 = (state_35165[(30)]);var inst_35151 = (state_35165[(2)]);var inst_35152 = cljs.core.seq.call(null,inst_35093);var state_35165__$1 = (function (){var statearr_35225 = state_35165;(statearr_35225[(32)] = inst_35151);
return statearr_35225;
})();if(inst_35152)
{var statearr_35226_35292 = state_35165__$1;(statearr_35226_35292[(1)] = (42));
} else
{var statearr_35227_35293 = state_35165__$1;(statearr_35227_35293[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35166 === (16)))
{var inst_35062 = (state_35165[(7)]);var inst_35064 = cljs.core.chunked_seq_QMARK_.call(null,inst_35062);var state_35165__$1 = state_35165;if(inst_35064)
{var statearr_35231_35294 = state_35165__$1;(statearr_35231_35294[(1)] = (19));
} else
{var statearr_35232_35295 = state_35165__$1;(statearr_35232_35295[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35166 === (38)))
{var inst_35144 = (state_35165[(2)]);var state_35165__$1 = state_35165;var statearr_35233_35296 = state_35165__$1;(statearr_35233_35296[(2)] = inst_35144);
(statearr_35233_35296[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35166 === (30)))
{var inst_35103 = (state_35165[(18)]);var inst_35102 = (state_35165[(9)]);var inst_35104 = (state_35165[(10)]);var inst_35101 = (state_35165[(20)]);var inst_35118 = (state_35165[(2)]);var inst_35119 = (inst_35104 + (1));var tmp35228 = inst_35103;var tmp35229 = inst_35102;var tmp35230 = inst_35101;var inst_35101__$1 = tmp35230;var inst_35102__$1 = tmp35229;var inst_35103__$1 = tmp35228;var inst_35104__$1 = inst_35119;var state_35165__$1 = (function (){var statearr_35234 = state_35165;(statearr_35234[(18)] = inst_35103__$1);
(statearr_35234[(9)] = inst_35102__$1);
(statearr_35234[(10)] = inst_35104__$1);
(statearr_35234[(33)] = inst_35118);
(statearr_35234[(20)] = inst_35101__$1);
return statearr_35234;
})();var statearr_35235_35297 = state_35165__$1;(statearr_35235_35297[(2)] = null);
(statearr_35235_35297[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35166 === (10)))
{var inst_35043 = (state_35165[(14)]);var inst_35045 = (state_35165[(16)]);var inst_35051 = cljs.core._nth.call(null,inst_35043,inst_35045);var inst_35052 = cljs.core.nth.call(null,inst_35051,(0),null);var inst_35053 = cljs.core.nth.call(null,inst_35051,(1),null);var state_35165__$1 = (function (){var statearr_35236 = state_35165;(statearr_35236[(28)] = inst_35052);
return statearr_35236;
})();if(cljs.core.truth_(inst_35053))
{var statearr_35237_35298 = state_35165__$1;(statearr_35237_35298[(1)] = (13));
} else
{var statearr_35238_35299 = state_35165__$1;(statearr_35238_35299[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35166 === (18)))
{var inst_35086 = (state_35165[(2)]);var state_35165__$1 = state_35165;var statearr_35239_35300 = state_35165__$1;(statearr_35239_35300[(2)] = inst_35086);
(statearr_35239_35300[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35166 === (42)))
{var state_35165__$1 = state_35165;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35165__$1,(45),dchan);
} else
{if((state_val_35166 === (37)))
{var inst_35122 = (state_35165[(17)]);var inst_35131 = cljs.core.first.call(null,inst_35122);var state_35165__$1 = (function (){var statearr_35240 = state_35165;(statearr_35240[(25)] = inst_35131);
return statearr_35240;
})();var statearr_35241_35301 = state_35165__$1;(statearr_35241_35301[(2)] = null);
(statearr_35241_35301[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35166 === (8)))
{var inst_35044 = (state_35165[(12)]);var inst_35045 = (state_35165[(16)]);var inst_35047 = (inst_35045 < inst_35044);var inst_35048 = inst_35047;var state_35165__$1 = state_35165;if(cljs.core.truth_(inst_35048))
{var statearr_35242_35302 = state_35165__$1;(statearr_35242_35302[(1)] = (10));
} else
{var statearr_35243_35303 = state_35165__$1;(statearr_35243_35303[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__5708__auto___35251,cs,m,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___35251,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_35247 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35247[(0)] = state_machine__5694__auto__);
(statearr_35247[(1)] = (1));
return statearr_35247;
});
var state_machine__5694__auto____1 = (function (state_35165){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_35165);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e35248){if((e35248 instanceof Object))
{var ex__5697__auto__ = e35248;var statearr_35249_35304 = state_35165;(statearr_35249_35304[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35165);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e35248;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__35305 = state_35165;
state_35165 = G__35305;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_35165){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_35165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___35251,cs,m,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_35250 = f__5709__auto__.call(null);(statearr_35250[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___35251);
return statearr_35250;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___35251,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj35307 = {};return obj35307;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t35417 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35417 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35418){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35418 = meta35418;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35417.cljs$lang$type = true;
cljs.core.async.t35417.cljs$lang$ctorStr = "cljs.core.async/t35417";
cljs.core.async.t35417.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t35417");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35417.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t35417.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35417.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35417.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35417.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35417.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35417.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t35417.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35417.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35419){var self__ = this;
var _35419__$1 = this;return self__.meta35418;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35417.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35419,meta35418__$1){var self__ = this;
var _35419__$1 = this;return (new cljs.core.async.t35417(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35418__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t35417 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t35417(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35418){return (new cljs.core.async.t35417(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35418));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t35417(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5708__auto___35526 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___35526,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___35526,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_35484){var state_val_35485 = (state_35484[(1)]);if((state_val_35485 === (7)))
{var inst_35433 = (state_35484[(7)]);var inst_35438 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35433);var state_35484__$1 = state_35484;var statearr_35486_35527 = state_35484__$1;(statearr_35486_35527[(2)] = inst_35438);
(statearr_35486_35527[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35485 === (20)))
{var inst_35448 = (state_35484[(8)]);var state_35484__$1 = state_35484;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35484__$1,(23),out,inst_35448);
} else
{if((state_val_35485 === (1)))
{var inst_35423 = (state_35484[(9)]);var inst_35423__$1 = calc_state.call(null);var inst_35424 = cljs.core.seq_QMARK_.call(null,inst_35423__$1);var state_35484__$1 = (function (){var statearr_35487 = state_35484;(statearr_35487[(9)] = inst_35423__$1);
return statearr_35487;
})();if(inst_35424)
{var statearr_35488_35528 = state_35484__$1;(statearr_35488_35528[(1)] = (2));
} else
{var statearr_35489_35529 = state_35484__$1;(statearr_35489_35529[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35485 === (4)))
{var inst_35423 = (state_35484[(9)]);var inst_35429 = (state_35484[(2)]);var inst_35430 = cljs.core.get.call(null,inst_35429,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_35431 = cljs.core.get.call(null,inst_35429,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_35432 = cljs.core.get.call(null,inst_35429,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_35433 = inst_35423;var state_35484__$1 = (function (){var statearr_35490 = state_35484;(statearr_35490[(10)] = inst_35431);
(statearr_35490[(11)] = inst_35430);
(statearr_35490[(12)] = inst_35432);
(statearr_35490[(7)] = inst_35433);
return statearr_35490;
})();var statearr_35491_35530 = state_35484__$1;(statearr_35491_35530[(2)] = null);
(statearr_35491_35530[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35485 === (15)))
{var state_35484__$1 = state_35484;var statearr_35492_35531 = state_35484__$1;(statearr_35492_35531[(2)] = null);
(statearr_35492_35531[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35485 === (21)))
{var state_35484__$1 = state_35484;var statearr_35493_35532 = state_35484__$1;(statearr_35493_35532[(2)] = null);
(statearr_35493_35532[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35485 === (13)))
{var inst_35480 = (state_35484[(2)]);var state_35484__$1 = state_35484;var statearr_35494_35533 = state_35484__$1;(statearr_35494_35533[(2)] = inst_35480);
(statearr_35494_35533[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35485 === (22)))
{var inst_35441 = (state_35484[(13)]);var inst_35477 = (state_35484[(2)]);var inst_35433 = inst_35441;var state_35484__$1 = (function (){var statearr_35495 = state_35484;(statearr_35495[(14)] = inst_35477);
(statearr_35495[(7)] = inst_35433);
return statearr_35495;
})();var statearr_35496_35534 = state_35484__$1;(statearr_35496_35534[(2)] = null);
(statearr_35496_35534[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35485 === (6)))
{var inst_35482 = (state_35484[(2)]);var state_35484__$1 = state_35484;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35484__$1,inst_35482);
} else
{if((state_val_35485 === (17)))
{var inst_35463 = (state_35484[(15)]);var state_35484__$1 = state_35484;var statearr_35497_35535 = state_35484__$1;(statearr_35497_35535[(2)] = inst_35463);
(statearr_35497_35535[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35485 === (3)))
{var inst_35423 = (state_35484[(9)]);var state_35484__$1 = state_35484;var statearr_35498_35536 = state_35484__$1;(statearr_35498_35536[(2)] = inst_35423);
(statearr_35498_35536[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35485 === (12)))
{var inst_35444 = (state_35484[(16)]);var inst_35449 = (state_35484[(17)]);var inst_35463 = (state_35484[(15)]);var inst_35463__$1 = inst_35444.call(null,inst_35449);var state_35484__$1 = (function (){var statearr_35499 = state_35484;(statearr_35499[(15)] = inst_35463__$1);
return statearr_35499;
})();if(cljs.core.truth_(inst_35463__$1))
{var statearr_35500_35537 = state_35484__$1;(statearr_35500_35537[(1)] = (17));
} else
{var statearr_35501_35538 = state_35484__$1;(statearr_35501_35538[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35485 === (2)))
{var inst_35423 = (state_35484[(9)]);var inst_35426 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35423);var state_35484__$1 = state_35484;var statearr_35502_35539 = state_35484__$1;(statearr_35502_35539[(2)] = inst_35426);
(statearr_35502_35539[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35485 === (23)))
{var inst_35474 = (state_35484[(2)]);var state_35484__$1 = state_35484;var statearr_35503_35540 = state_35484__$1;(statearr_35503_35540[(2)] = inst_35474);
(statearr_35503_35540[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35485 === (19)))
{var inst_35471 = (state_35484[(2)]);var state_35484__$1 = state_35484;if(cljs.core.truth_(inst_35471))
{var statearr_35504_35541 = state_35484__$1;(statearr_35504_35541[(1)] = (20));
} else
{var statearr_35505_35542 = state_35484__$1;(statearr_35505_35542[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35485 === (11)))
{var inst_35448 = (state_35484[(8)]);var inst_35454 = (inst_35448 == null);var state_35484__$1 = state_35484;if(cljs.core.truth_(inst_35454))
{var statearr_35506_35543 = state_35484__$1;(statearr_35506_35543[(1)] = (14));
} else
{var statearr_35507_35544 = state_35484__$1;(statearr_35507_35544[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35485 === (9)))
{var inst_35441 = (state_35484[(13)]);var inst_35441__$1 = (state_35484[(2)]);var inst_35442 = cljs.core.get.call(null,inst_35441__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_35443 = cljs.core.get.call(null,inst_35441__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_35444 = cljs.core.get.call(null,inst_35441__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_35484__$1 = (function (){var statearr_35508 = state_35484;(statearr_35508[(16)] = inst_35444);
(statearr_35508[(13)] = inst_35441__$1);
(statearr_35508[(18)] = inst_35443);
return statearr_35508;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_35484__$1,(10),inst_35442);
} else
{if((state_val_35485 === (5)))
{var inst_35433 = (state_35484[(7)]);var inst_35436 = cljs.core.seq_QMARK_.call(null,inst_35433);var state_35484__$1 = state_35484;if(inst_35436)
{var statearr_35509_35545 = state_35484__$1;(statearr_35509_35545[(1)] = (7));
} else
{var statearr_35510_35546 = state_35484__$1;(statearr_35510_35546[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35485 === (14)))
{var inst_35449 = (state_35484[(17)]);var inst_35456 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_35449);var state_35484__$1 = state_35484;var statearr_35511_35547 = state_35484__$1;(statearr_35511_35547[(2)] = inst_35456);
(statearr_35511_35547[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35485 === (16)))
{var inst_35459 = (state_35484[(2)]);var inst_35460 = calc_state.call(null);var inst_35433 = inst_35460;var state_35484__$1 = (function (){var statearr_35512 = state_35484;(statearr_35512[(19)] = inst_35459);
(statearr_35512[(7)] = inst_35433);
return statearr_35512;
})();var statearr_35513_35548 = state_35484__$1;(statearr_35513_35548[(2)] = null);
(statearr_35513_35548[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35485 === (10)))
{var inst_35449 = (state_35484[(17)]);var inst_35448 = (state_35484[(8)]);var inst_35447 = (state_35484[(2)]);var inst_35448__$1 = cljs.core.nth.call(null,inst_35447,(0),null);var inst_35449__$1 = cljs.core.nth.call(null,inst_35447,(1),null);var inst_35450 = (inst_35448__$1 == null);var inst_35451 = cljs.core._EQ_.call(null,inst_35449__$1,change);var inst_35452 = (inst_35450) || (inst_35451);var state_35484__$1 = (function (){var statearr_35514 = state_35484;(statearr_35514[(17)] = inst_35449__$1);
(statearr_35514[(8)] = inst_35448__$1);
return statearr_35514;
})();if(cljs.core.truth_(inst_35452))
{var statearr_35515_35549 = state_35484__$1;(statearr_35515_35549[(1)] = (11));
} else
{var statearr_35516_35550 = state_35484__$1;(statearr_35516_35550[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35485 === (18)))
{var inst_35444 = (state_35484[(16)]);var inst_35449 = (state_35484[(17)]);var inst_35443 = (state_35484[(18)]);var inst_35466 = cljs.core.empty_QMARK_.call(null,inst_35444);var inst_35467 = inst_35443.call(null,inst_35449);var inst_35468 = cljs.core.not.call(null,inst_35467);var inst_35469 = (inst_35466) && (inst_35468);var state_35484__$1 = state_35484;var statearr_35517_35551 = state_35484__$1;(statearr_35517_35551[(2)] = inst_35469);
(statearr_35517_35551[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35485 === (8)))
{var inst_35433 = (state_35484[(7)]);var state_35484__$1 = state_35484;var statearr_35518_35552 = state_35484__$1;(statearr_35518_35552[(2)] = inst_35433);
(statearr_35518_35552[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__5708__auto___35526,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5693__auto__,c__5708__auto___35526,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_35522 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35522[(0)] = state_machine__5694__auto__);
(statearr_35522[(1)] = (1));
return statearr_35522;
});
var state_machine__5694__auto____1 = (function (state_35484){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_35484);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e35523){if((e35523 instanceof Object))
{var ex__5697__auto__ = e35523;var statearr_35524_35553 = state_35484;(statearr_35524_35553[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35484);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e35523;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__35554 = state_35484;
state_35484 = G__35554;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_35484){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_35484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___35526,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5710__auto__ = (function (){var statearr_35525 = f__5709__auto__.call(null);(statearr_35525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___35526);
return statearr_35525;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___35526,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj35556 = {};return obj35556;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3546__auto__ = p;if(and__3546__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3546__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4185__auto__ = (((p == null))?null:p);return (function (){var or__3558__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3546__auto__ = p;if(and__3546__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3546__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4185__auto__ = (((p == null))?null:p);return (function (){var or__3558__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3546__auto__ = p;if(and__3546__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3546__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4185__auto__ = (((p == null))?null:p);return (function (){var or__3558__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3546__auto__ = p;if(and__3546__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4185__auto__ = (((p == null))?null:p);return (function (){var or__3558__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3558__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3558__auto__,mults){
return (function (p1__35557_SHARP_){if(cljs.core.truth_(p1__35557_SHARP_.call(null,topic)))
{return p1__35557_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__35557_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3558__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t35682 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35682 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta35683){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta35683 = meta35683;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35682.cljs$lang$type = true;
cljs.core.async.t35682.cljs$lang$ctorStr = "cljs.core.async/t35682";
cljs.core.async.t35682.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t35682");
});})(mults,ensure_mult))
;
cljs.core.async.t35682.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t35682.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t35682.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t35682.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t35682.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t35682.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t35682.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t35682.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35684){var self__ = this;
var _35684__$1 = this;return self__.meta35683;
});})(mults,ensure_mult))
;
cljs.core.async.t35682.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35684,meta35683__$1){var self__ = this;
var _35684__$1 = this;return (new cljs.core.async.t35682(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta35683__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t35682 = ((function (mults,ensure_mult){
return (function __GT_t35682(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta35683){return (new cljs.core.async.t35682(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta35683));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t35682(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5708__auto___35806 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___35806,mults,ensure_mult,p){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___35806,mults,ensure_mult,p){
return (function (state_35758){var state_val_35759 = (state_35758[(1)]);if((state_val_35759 === (7)))
{var inst_35754 = (state_35758[(2)]);var state_35758__$1 = state_35758;var statearr_35760_35807 = state_35758__$1;(statearr_35760_35807[(2)] = inst_35754);
(statearr_35760_35807[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35759 === (20)))
{var state_35758__$1 = state_35758;var statearr_35761_35808 = state_35758__$1;(statearr_35761_35808[(2)] = null);
(statearr_35761_35808[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35759 === (1)))
{var state_35758__$1 = state_35758;var statearr_35762_35809 = state_35758__$1;(statearr_35762_35809[(2)] = null);
(statearr_35762_35809[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35759 === (24)))
{var inst_35737 = (state_35758[(7)]);var inst_35687 = (state_35758[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35758,(23),Object,null,(22));var inst_35744 = cljs.core.async.muxch_STAR_.call(null,inst_35737);var state_35758__$1 = state_35758;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35758__$1,(25),inst_35744,inst_35687);
} else
{if((state_val_35759 === (4)))
{var inst_35687 = (state_35758[(8)]);var inst_35687__$1 = (state_35758[(2)]);var inst_35688 = (inst_35687__$1 == null);var state_35758__$1 = (function (){var statearr_35763 = state_35758;(statearr_35763[(8)] = inst_35687__$1);
return statearr_35763;
})();if(cljs.core.truth_(inst_35688))
{var statearr_35764_35810 = state_35758__$1;(statearr_35764_35810[(1)] = (5));
} else
{var statearr_35765_35811 = state_35758__$1;(statearr_35765_35811[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35759 === (15)))
{var inst_35729 = (state_35758[(2)]);var state_35758__$1 = state_35758;var statearr_35766_35812 = state_35758__$1;(statearr_35766_35812[(2)] = inst_35729);
(statearr_35766_35812[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35759 === (21)))
{var inst_35751 = (state_35758[(2)]);var state_35758__$1 = (function (){var statearr_35767 = state_35758;(statearr_35767[(9)] = inst_35751);
return statearr_35767;
})();var statearr_35768_35813 = state_35758__$1;(statearr_35768_35813[(2)] = null);
(statearr_35768_35813[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35759 === (13)))
{var inst_35711 = (state_35758[(10)]);var inst_35713 = cljs.core.chunked_seq_QMARK_.call(null,inst_35711);var state_35758__$1 = state_35758;if(inst_35713)
{var statearr_35769_35814 = state_35758__$1;(statearr_35769_35814[(1)] = (16));
} else
{var statearr_35770_35815 = state_35758__$1;(statearr_35770_35815[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35759 === (22)))
{var inst_35748 = (state_35758[(2)]);var state_35758__$1 = state_35758;var statearr_35771_35816 = state_35758__$1;(statearr_35771_35816[(2)] = inst_35748);
(statearr_35771_35816[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35759 === (6)))
{var inst_35737 = (state_35758[(7)]);var inst_35735 = (state_35758[(11)]);var inst_35687 = (state_35758[(8)]);var inst_35735__$1 = topic_fn.call(null,inst_35687);var inst_35736 = cljs.core.deref.call(null,mults);var inst_35737__$1 = cljs.core.get.call(null,inst_35736,inst_35735__$1);var state_35758__$1 = (function (){var statearr_35772 = state_35758;(statearr_35772[(7)] = inst_35737__$1);
(statearr_35772[(11)] = inst_35735__$1);
return statearr_35772;
})();if(cljs.core.truth_(inst_35737__$1))
{var statearr_35773_35817 = state_35758__$1;(statearr_35773_35817[(1)] = (19));
} else
{var statearr_35774_35818 = state_35758__$1;(statearr_35774_35818[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35759 === (25)))
{var inst_35746 = (state_35758[(2)]);var state_35758__$1 = state_35758;var statearr_35775_35819 = state_35758__$1;(statearr_35775_35819[(2)] = inst_35746);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35758__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35759 === (17)))
{var inst_35711 = (state_35758[(10)]);var inst_35720 = cljs.core.first.call(null,inst_35711);var inst_35721 = cljs.core.async.muxch_STAR_.call(null,inst_35720);var inst_35722 = cljs.core.async.close_BANG_.call(null,inst_35721);var inst_35723 = cljs.core.next.call(null,inst_35711);var inst_35697 = inst_35723;var inst_35698 = null;var inst_35699 = (0);var inst_35700 = (0);var state_35758__$1 = (function (){var statearr_35776 = state_35758;(statearr_35776[(12)] = inst_35700);
(statearr_35776[(13)] = inst_35699);
(statearr_35776[(14)] = inst_35722);
(statearr_35776[(15)] = inst_35698);
(statearr_35776[(16)] = inst_35697);
return statearr_35776;
})();var statearr_35777_35820 = state_35758__$1;(statearr_35777_35820[(2)] = null);
(statearr_35777_35820[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35759 === (3)))
{var inst_35756 = (state_35758[(2)]);var state_35758__$1 = state_35758;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35758__$1,inst_35756);
} else
{if((state_val_35759 === (12)))
{var inst_35731 = (state_35758[(2)]);var state_35758__$1 = state_35758;var statearr_35778_35821 = state_35758__$1;(statearr_35778_35821[(2)] = inst_35731);
(statearr_35778_35821[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35759 === (2)))
{var state_35758__$1 = state_35758;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35758__$1,(4),ch);
} else
{if((state_val_35759 === (23)))
{var inst_35735 = (state_35758[(11)]);var inst_35739 = (state_35758[(2)]);var inst_35740 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35735);var state_35758__$1 = (function (){var statearr_35779 = state_35758;(statearr_35779[(17)] = inst_35739);
return statearr_35779;
})();var statearr_35780_35822 = state_35758__$1;(statearr_35780_35822[(2)] = inst_35740);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35758__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35759 === (19)))
{var state_35758__$1 = state_35758;var statearr_35781_35823 = state_35758__$1;(statearr_35781_35823[(2)] = null);
(statearr_35781_35823[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35759 === (11)))
{var inst_35711 = (state_35758[(10)]);var inst_35697 = (state_35758[(16)]);var inst_35711__$1 = cljs.core.seq.call(null,inst_35697);var state_35758__$1 = (function (){var statearr_35782 = state_35758;(statearr_35782[(10)] = inst_35711__$1);
return statearr_35782;
})();if(inst_35711__$1)
{var statearr_35783_35824 = state_35758__$1;(statearr_35783_35824[(1)] = (13));
} else
{var statearr_35784_35825 = state_35758__$1;(statearr_35784_35825[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35759 === (9)))
{var inst_35733 = (state_35758[(2)]);var state_35758__$1 = state_35758;var statearr_35785_35826 = state_35758__$1;(statearr_35785_35826[(2)] = inst_35733);
(statearr_35785_35826[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35759 === (5)))
{var inst_35694 = cljs.core.deref.call(null,mults);var inst_35695 = cljs.core.vals.call(null,inst_35694);var inst_35696 = cljs.core.seq.call(null,inst_35695);var inst_35697 = inst_35696;var inst_35698 = null;var inst_35699 = (0);var inst_35700 = (0);var state_35758__$1 = (function (){var statearr_35786 = state_35758;(statearr_35786[(12)] = inst_35700);
(statearr_35786[(13)] = inst_35699);
(statearr_35786[(15)] = inst_35698);
(statearr_35786[(16)] = inst_35697);
return statearr_35786;
})();var statearr_35787_35827 = state_35758__$1;(statearr_35787_35827[(2)] = null);
(statearr_35787_35827[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35759 === (14)))
{var state_35758__$1 = state_35758;var statearr_35791_35828 = state_35758__$1;(statearr_35791_35828[(2)] = null);
(statearr_35791_35828[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35759 === (16)))
{var inst_35711 = (state_35758[(10)]);var inst_35715 = cljs.core.chunk_first.call(null,inst_35711);var inst_35716 = cljs.core.chunk_rest.call(null,inst_35711);var inst_35717 = cljs.core.count.call(null,inst_35715);var inst_35697 = inst_35716;var inst_35698 = inst_35715;var inst_35699 = inst_35717;var inst_35700 = (0);var state_35758__$1 = (function (){var statearr_35792 = state_35758;(statearr_35792[(12)] = inst_35700);
(statearr_35792[(13)] = inst_35699);
(statearr_35792[(15)] = inst_35698);
(statearr_35792[(16)] = inst_35697);
return statearr_35792;
})();var statearr_35793_35829 = state_35758__$1;(statearr_35793_35829[(2)] = null);
(statearr_35793_35829[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35759 === (10)))
{var inst_35700 = (state_35758[(12)]);var inst_35699 = (state_35758[(13)]);var inst_35698 = (state_35758[(15)]);var inst_35697 = (state_35758[(16)]);var inst_35705 = cljs.core._nth.call(null,inst_35698,inst_35700);var inst_35706 = cljs.core.async.muxch_STAR_.call(null,inst_35705);var inst_35707 = cljs.core.async.close_BANG_.call(null,inst_35706);var inst_35708 = (inst_35700 + (1));var tmp35788 = inst_35699;var tmp35789 = inst_35698;var tmp35790 = inst_35697;var inst_35697__$1 = tmp35790;var inst_35698__$1 = tmp35789;var inst_35699__$1 = tmp35788;var inst_35700__$1 = inst_35708;var state_35758__$1 = (function (){var statearr_35794 = state_35758;(statearr_35794[(12)] = inst_35700__$1);
(statearr_35794[(13)] = inst_35699__$1);
(statearr_35794[(15)] = inst_35698__$1);
(statearr_35794[(16)] = inst_35697__$1);
(statearr_35794[(18)] = inst_35707);
return statearr_35794;
})();var statearr_35795_35830 = state_35758__$1;(statearr_35795_35830[(2)] = null);
(statearr_35795_35830[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35759 === (18)))
{var inst_35726 = (state_35758[(2)]);var state_35758__$1 = state_35758;var statearr_35796_35831 = state_35758__$1;(statearr_35796_35831[(2)] = inst_35726);
(statearr_35796_35831[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35759 === (8)))
{var inst_35700 = (state_35758[(12)]);var inst_35699 = (state_35758[(13)]);var inst_35702 = (inst_35700 < inst_35699);var inst_35703 = inst_35702;var state_35758__$1 = state_35758;if(cljs.core.truth_(inst_35703))
{var statearr_35797_35832 = state_35758__$1;(statearr_35797_35832[(1)] = (10));
} else
{var statearr_35798_35833 = state_35758__$1;(statearr_35798_35833[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__5708__auto___35806,mults,ensure_mult,p))
;return ((function (switch__5693__auto__,c__5708__auto___35806,mults,ensure_mult,p){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_35802 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35802[(0)] = state_machine__5694__auto__);
(statearr_35802[(1)] = (1));
return statearr_35802;
});
var state_machine__5694__auto____1 = (function (state_35758){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_35758);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e35803){if((e35803 instanceof Object))
{var ex__5697__auto__ = e35803;var statearr_35804_35834 = state_35758;(statearr_35804_35834[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35758);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e35803;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__35835 = state_35758;
state_35758 = G__35835;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_35758){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_35758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___35806,mults,ensure_mult,p))
})();var state__5710__auto__ = (function (){var statearr_35805 = f__5709__auto__.call(null);(statearr_35805[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___35806);
return statearr_35805;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___35806,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__5708__auto___35972 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___35972,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___35972,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_35942){var state_val_35943 = (state_35942[(1)]);if((state_val_35943 === (7)))
{var state_35942__$1 = state_35942;var statearr_35944_35973 = state_35942__$1;(statearr_35944_35973[(2)] = null);
(statearr_35944_35973[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35943 === (1)))
{var state_35942__$1 = state_35942;var statearr_35945_35974 = state_35942__$1;(statearr_35945_35974[(2)] = null);
(statearr_35945_35974[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35943 === (4)))
{var inst_35906 = (state_35942[(7)]);var inst_35908 = (inst_35906 < cnt);var state_35942__$1 = state_35942;if(cljs.core.truth_(inst_35908))
{var statearr_35946_35975 = state_35942__$1;(statearr_35946_35975[(1)] = (6));
} else
{var statearr_35947_35976 = state_35942__$1;(statearr_35947_35976[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35943 === (15)))
{var inst_35938 = (state_35942[(2)]);var state_35942__$1 = state_35942;var statearr_35948_35977 = state_35942__$1;(statearr_35948_35977[(2)] = inst_35938);
(statearr_35948_35977[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35943 === (13)))
{var inst_35931 = cljs.core.async.close_BANG_.call(null,out);var state_35942__$1 = state_35942;var statearr_35949_35978 = state_35942__$1;(statearr_35949_35978[(2)] = inst_35931);
(statearr_35949_35978[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35943 === (6)))
{var state_35942__$1 = state_35942;var statearr_35950_35979 = state_35942__$1;(statearr_35950_35979[(2)] = null);
(statearr_35950_35979[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35943 === (3)))
{var inst_35940 = (state_35942[(2)]);var state_35942__$1 = state_35942;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35942__$1,inst_35940);
} else
{if((state_val_35943 === (12)))
{var inst_35928 = (state_35942[(8)]);var inst_35928__$1 = (state_35942[(2)]);var inst_35929 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_35928__$1);var state_35942__$1 = (function (){var statearr_35951 = state_35942;(statearr_35951[(8)] = inst_35928__$1);
return statearr_35951;
})();if(cljs.core.truth_(inst_35929))
{var statearr_35952_35980 = state_35942__$1;(statearr_35952_35980[(1)] = (13));
} else
{var statearr_35953_35981 = state_35942__$1;(statearr_35953_35981[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35943 === (2)))
{var inst_35905 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_35906 = (0);var state_35942__$1 = (function (){var statearr_35954 = state_35942;(statearr_35954[(7)] = inst_35906);
(statearr_35954[(9)] = inst_35905);
return statearr_35954;
})();var statearr_35955_35982 = state_35942__$1;(statearr_35955_35982[(2)] = null);
(statearr_35955_35982[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35943 === (11)))
{var inst_35906 = (state_35942[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35942,(10),Object,null,(9));var inst_35915 = chs__$1.call(null,inst_35906);var inst_35916 = done.call(null,inst_35906);var inst_35917 = cljs.core.async.take_BANG_.call(null,inst_35915,inst_35916);var state_35942__$1 = state_35942;var statearr_35956_35983 = state_35942__$1;(statearr_35956_35983[(2)] = inst_35917);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35942__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35943 === (9)))
{var inst_35906 = (state_35942[(7)]);var inst_35919 = (state_35942[(2)]);var inst_35920 = (inst_35906 + (1));var inst_35906__$1 = inst_35920;var state_35942__$1 = (function (){var statearr_35957 = state_35942;(statearr_35957[(7)] = inst_35906__$1);
(statearr_35957[(10)] = inst_35919);
return statearr_35957;
})();var statearr_35958_35984 = state_35942__$1;(statearr_35958_35984[(2)] = null);
(statearr_35958_35984[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35943 === (5)))
{var inst_35926 = (state_35942[(2)]);var state_35942__$1 = (function (){var statearr_35959 = state_35942;(statearr_35959[(11)] = inst_35926);
return statearr_35959;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35942__$1,(12),dchan);
} else
{if((state_val_35943 === (14)))
{var inst_35928 = (state_35942[(8)]);var inst_35933 = cljs.core.apply.call(null,f,inst_35928);var state_35942__$1 = state_35942;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35942__$1,(16),out,inst_35933);
} else
{if((state_val_35943 === (16)))
{var inst_35935 = (state_35942[(2)]);var state_35942__$1 = (function (){var statearr_35960 = state_35942;(statearr_35960[(12)] = inst_35935);
return statearr_35960;
})();var statearr_35961_35985 = state_35942__$1;(statearr_35961_35985[(2)] = null);
(statearr_35961_35985[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35943 === (10)))
{var inst_35910 = (state_35942[(2)]);var inst_35911 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_35942__$1 = (function (){var statearr_35962 = state_35942;(statearr_35962[(13)] = inst_35910);
return statearr_35962;
})();var statearr_35963_35986 = state_35942__$1;(statearr_35963_35986[(2)] = inst_35911);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35942__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35943 === (8)))
{var inst_35924 = (state_35942[(2)]);var state_35942__$1 = state_35942;var statearr_35964_35987 = state_35942__$1;(statearr_35964_35987[(2)] = inst_35924);
(statearr_35964_35987[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__5708__auto___35972,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___35972,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_35968 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35968[(0)] = state_machine__5694__auto__);
(statearr_35968[(1)] = (1));
return statearr_35968;
});
var state_machine__5694__auto____1 = (function (state_35942){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_35942);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e35969){if((e35969 instanceof Object))
{var ex__5697__auto__ = e35969;var statearr_35970_35988 = state_35942;(statearr_35970_35988[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35942);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e35969;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__35989 = state_35942;
state_35942 = G__35989;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_35942){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_35942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___35972,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_35971 = f__5709__auto__.call(null);(statearr_35971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___35972);
return statearr_35971;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___35972,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___36097 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___36097,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___36097,out){
return (function (state_36073){var state_val_36074 = (state_36073[(1)]);if((state_val_36074 === (7)))
{var inst_36052 = (state_36073[(7)]);var inst_36053 = (state_36073[(8)]);var inst_36052__$1 = (state_36073[(2)]);var inst_36053__$1 = cljs.core.nth.call(null,inst_36052__$1,(0),null);var inst_36054 = cljs.core.nth.call(null,inst_36052__$1,(1),null);var inst_36055 = (inst_36053__$1 == null);var state_36073__$1 = (function (){var statearr_36075 = state_36073;(statearr_36075[(9)] = inst_36054);
(statearr_36075[(7)] = inst_36052__$1);
(statearr_36075[(8)] = inst_36053__$1);
return statearr_36075;
})();if(cljs.core.truth_(inst_36055))
{var statearr_36076_36098 = state_36073__$1;(statearr_36076_36098[(1)] = (8));
} else
{var statearr_36077_36099 = state_36073__$1;(statearr_36077_36099[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36074 === (1)))
{var inst_36044 = cljs.core.vec.call(null,chs);var inst_36045 = inst_36044;var state_36073__$1 = (function (){var statearr_36078 = state_36073;(statearr_36078[(10)] = inst_36045);
return statearr_36078;
})();var statearr_36079_36100 = state_36073__$1;(statearr_36079_36100[(2)] = null);
(statearr_36079_36100[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36074 === (4)))
{var inst_36045 = (state_36073[(10)]);var state_36073__$1 = state_36073;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_36073__$1,(7),inst_36045);
} else
{if((state_val_36074 === (6)))
{var inst_36069 = (state_36073[(2)]);var state_36073__$1 = state_36073;var statearr_36080_36101 = state_36073__$1;(statearr_36080_36101[(2)] = inst_36069);
(statearr_36080_36101[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36074 === (3)))
{var inst_36071 = (state_36073[(2)]);var state_36073__$1 = state_36073;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36073__$1,inst_36071);
} else
{if((state_val_36074 === (2)))
{var inst_36045 = (state_36073[(10)]);var inst_36047 = cljs.core.count.call(null,inst_36045);var inst_36048 = (inst_36047 > (0));var state_36073__$1 = state_36073;if(cljs.core.truth_(inst_36048))
{var statearr_36082_36102 = state_36073__$1;(statearr_36082_36102[(1)] = (4));
} else
{var statearr_36083_36103 = state_36073__$1;(statearr_36083_36103[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36074 === (11)))
{var inst_36045 = (state_36073[(10)]);var inst_36062 = (state_36073[(2)]);var tmp36081 = inst_36045;var inst_36045__$1 = tmp36081;var state_36073__$1 = (function (){var statearr_36084 = state_36073;(statearr_36084[(11)] = inst_36062);
(statearr_36084[(10)] = inst_36045__$1);
return statearr_36084;
})();var statearr_36085_36104 = state_36073__$1;(statearr_36085_36104[(2)] = null);
(statearr_36085_36104[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36074 === (9)))
{var inst_36053 = (state_36073[(8)]);var state_36073__$1 = state_36073;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36073__$1,(11),out,inst_36053);
} else
{if((state_val_36074 === (5)))
{var inst_36067 = cljs.core.async.close_BANG_.call(null,out);var state_36073__$1 = state_36073;var statearr_36086_36105 = state_36073__$1;(statearr_36086_36105[(2)] = inst_36067);
(statearr_36086_36105[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36074 === (10)))
{var inst_36065 = (state_36073[(2)]);var state_36073__$1 = state_36073;var statearr_36087_36106 = state_36073__$1;(statearr_36087_36106[(2)] = inst_36065);
(statearr_36087_36106[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36074 === (8)))
{var inst_36054 = (state_36073[(9)]);var inst_36052 = (state_36073[(7)]);var inst_36053 = (state_36073[(8)]);var inst_36045 = (state_36073[(10)]);var inst_36057 = (function (){var c = inst_36054;var v = inst_36053;var vec__36050 = inst_36052;var cs = inst_36045;return ((function (c,v,vec__36050,cs,inst_36054,inst_36052,inst_36053,inst_36045,state_val_36074,c__5708__auto___36097,out){
return (function (p1__35990_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__35990_SHARP_);
});
;})(c,v,vec__36050,cs,inst_36054,inst_36052,inst_36053,inst_36045,state_val_36074,c__5708__auto___36097,out))
})();var inst_36058 = cljs.core.filterv.call(null,inst_36057,inst_36045);var inst_36045__$1 = inst_36058;var state_36073__$1 = (function (){var statearr_36088 = state_36073;(statearr_36088[(10)] = inst_36045__$1);
return statearr_36088;
})();var statearr_36089_36107 = state_36073__$1;(statearr_36089_36107[(2)] = null);
(statearr_36089_36107[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__5708__auto___36097,out))
;return ((function (switch__5693__auto__,c__5708__auto___36097,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_36093 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36093[(0)] = state_machine__5694__auto__);
(statearr_36093[(1)] = (1));
return statearr_36093;
});
var state_machine__5694__auto____1 = (function (state_36073){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_36073);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e36094){if((e36094 instanceof Object))
{var ex__5697__auto__ = e36094;var statearr_36095_36108 = state_36073;(statearr_36095_36108[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36073);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e36094;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__36109 = state_36073;
state_36073 = G__36109;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_36073){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_36073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___36097,out))
})();var state__5710__auto__ = (function (){var statearr_36096 = f__5709__auto__.call(null);(statearr_36096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___36097);
return statearr_36096;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___36097,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___36202 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___36202,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___36202,out){
return (function (state_36179){var state_val_36180 = (state_36179[(1)]);if((state_val_36180 === (7)))
{var inst_36161 = (state_36179[(7)]);var inst_36161__$1 = (state_36179[(2)]);var inst_36162 = (inst_36161__$1 == null);var inst_36163 = cljs.core.not.call(null,inst_36162);var state_36179__$1 = (function (){var statearr_36181 = state_36179;(statearr_36181[(7)] = inst_36161__$1);
return statearr_36181;
})();if(inst_36163)
{var statearr_36182_36203 = state_36179__$1;(statearr_36182_36203[(1)] = (8));
} else
{var statearr_36183_36204 = state_36179__$1;(statearr_36183_36204[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36180 === (1)))
{var inst_36156 = (0);var state_36179__$1 = (function (){var statearr_36184 = state_36179;(statearr_36184[(8)] = inst_36156);
return statearr_36184;
})();var statearr_36185_36205 = state_36179__$1;(statearr_36185_36205[(2)] = null);
(statearr_36185_36205[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36180 === (4)))
{var state_36179__$1 = state_36179;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36179__$1,(7),ch);
} else
{if((state_val_36180 === (6)))
{var inst_36174 = (state_36179[(2)]);var state_36179__$1 = state_36179;var statearr_36186_36206 = state_36179__$1;(statearr_36186_36206[(2)] = inst_36174);
(statearr_36186_36206[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36180 === (3)))
{var inst_36176 = (state_36179[(2)]);var inst_36177 = cljs.core.async.close_BANG_.call(null,out);var state_36179__$1 = (function (){var statearr_36187 = state_36179;(statearr_36187[(9)] = inst_36176);
return statearr_36187;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36179__$1,inst_36177);
} else
{if((state_val_36180 === (2)))
{var inst_36156 = (state_36179[(8)]);var inst_36158 = (inst_36156 < n);var state_36179__$1 = state_36179;if(cljs.core.truth_(inst_36158))
{var statearr_36188_36207 = state_36179__$1;(statearr_36188_36207[(1)] = (4));
} else
{var statearr_36189_36208 = state_36179__$1;(statearr_36189_36208[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36180 === (11)))
{var inst_36156 = (state_36179[(8)]);var inst_36166 = (state_36179[(2)]);var inst_36167 = (inst_36156 + (1));var inst_36156__$1 = inst_36167;var state_36179__$1 = (function (){var statearr_36190 = state_36179;(statearr_36190[(10)] = inst_36166);
(statearr_36190[(8)] = inst_36156__$1);
return statearr_36190;
})();var statearr_36191_36209 = state_36179__$1;(statearr_36191_36209[(2)] = null);
(statearr_36191_36209[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36180 === (9)))
{var state_36179__$1 = state_36179;var statearr_36192_36210 = state_36179__$1;(statearr_36192_36210[(2)] = null);
(statearr_36192_36210[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36180 === (5)))
{var state_36179__$1 = state_36179;var statearr_36193_36211 = state_36179__$1;(statearr_36193_36211[(2)] = null);
(statearr_36193_36211[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36180 === (10)))
{var inst_36171 = (state_36179[(2)]);var state_36179__$1 = state_36179;var statearr_36194_36212 = state_36179__$1;(statearr_36194_36212[(2)] = inst_36171);
(statearr_36194_36212[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36180 === (8)))
{var inst_36161 = (state_36179[(7)]);var state_36179__$1 = state_36179;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36179__$1,(11),out,inst_36161);
} else
{return null;
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
});})(c__5708__auto___36202,out))
;return ((function (switch__5693__auto__,c__5708__auto___36202,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_36198 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_36198[(0)] = state_machine__5694__auto__);
(statearr_36198[(1)] = (1));
return statearr_36198;
});
var state_machine__5694__auto____1 = (function (state_36179){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_36179);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e36199){if((e36199 instanceof Object))
{var ex__5697__auto__ = e36199;var statearr_36200_36213 = state_36179;(statearr_36200_36213[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36179);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e36199;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__36214 = state_36179;
state_36179 = G__36214;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_36179){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_36179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___36202,out))
})();var state__5710__auto__ = (function (){var statearr_36201 = f__5709__auto__.call(null);(statearr_36201[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___36202);
return statearr_36201;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___36202,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___36311 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___36311,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___36311,out){
return (function (state_36286){var state_val_36287 = (state_36286[(1)]);if((state_val_36287 === (7)))
{var inst_36281 = (state_36286[(2)]);var state_36286__$1 = state_36286;var statearr_36288_36312 = state_36286__$1;(statearr_36288_36312[(2)] = inst_36281);
(statearr_36288_36312[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36287 === (1)))
{var inst_36263 = null;var state_36286__$1 = (function (){var statearr_36289 = state_36286;(statearr_36289[(7)] = inst_36263);
return statearr_36289;
})();var statearr_36290_36313 = state_36286__$1;(statearr_36290_36313[(2)] = null);
(statearr_36290_36313[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36287 === (4)))
{var inst_36266 = (state_36286[(8)]);var inst_36266__$1 = (state_36286[(2)]);var inst_36267 = (inst_36266__$1 == null);var inst_36268 = cljs.core.not.call(null,inst_36267);var state_36286__$1 = (function (){var statearr_36291 = state_36286;(statearr_36291[(8)] = inst_36266__$1);
return statearr_36291;
})();if(inst_36268)
{var statearr_36292_36314 = state_36286__$1;(statearr_36292_36314[(1)] = (5));
} else
{var statearr_36293_36315 = state_36286__$1;(statearr_36293_36315[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36287 === (6)))
{var state_36286__$1 = state_36286;var statearr_36294_36316 = state_36286__$1;(statearr_36294_36316[(2)] = null);
(statearr_36294_36316[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36287 === (3)))
{var inst_36283 = (state_36286[(2)]);var inst_36284 = cljs.core.async.close_BANG_.call(null,out);var state_36286__$1 = (function (){var statearr_36295 = state_36286;(statearr_36295[(9)] = inst_36283);
return statearr_36295;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36286__$1,inst_36284);
} else
{if((state_val_36287 === (2)))
{var state_36286__$1 = state_36286;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36286__$1,(4),ch);
} else
{if((state_val_36287 === (11)))
{var inst_36266 = (state_36286[(8)]);var inst_36275 = (state_36286[(2)]);var inst_36263 = inst_36266;var state_36286__$1 = (function (){var statearr_36296 = state_36286;(statearr_36296[(7)] = inst_36263);
(statearr_36296[(10)] = inst_36275);
return statearr_36296;
})();var statearr_36297_36317 = state_36286__$1;(statearr_36297_36317[(2)] = null);
(statearr_36297_36317[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36287 === (9)))
{var inst_36266 = (state_36286[(8)]);var state_36286__$1 = state_36286;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36286__$1,(11),out,inst_36266);
} else
{if((state_val_36287 === (5)))
{var inst_36263 = (state_36286[(7)]);var inst_36266 = (state_36286[(8)]);var inst_36270 = cljs.core._EQ_.call(null,inst_36266,inst_36263);var state_36286__$1 = state_36286;if(inst_36270)
{var statearr_36299_36318 = state_36286__$1;(statearr_36299_36318[(1)] = (8));
} else
{var statearr_36300_36319 = state_36286__$1;(statearr_36300_36319[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36287 === (10)))
{var inst_36278 = (state_36286[(2)]);var state_36286__$1 = state_36286;var statearr_36301_36320 = state_36286__$1;(statearr_36301_36320[(2)] = inst_36278);
(statearr_36301_36320[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36287 === (8)))
{var inst_36263 = (state_36286[(7)]);var tmp36298 = inst_36263;var inst_36263__$1 = tmp36298;var state_36286__$1 = (function (){var statearr_36302 = state_36286;(statearr_36302[(7)] = inst_36263__$1);
return statearr_36302;
})();var statearr_36303_36321 = state_36286__$1;(statearr_36303_36321[(2)] = null);
(statearr_36303_36321[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__5708__auto___36311,out))
;return ((function (switch__5693__auto__,c__5708__auto___36311,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_36307 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_36307[(0)] = state_machine__5694__auto__);
(statearr_36307[(1)] = (1));
return statearr_36307;
});
var state_machine__5694__auto____1 = (function (state_36286){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_36286);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e36308){if((e36308 instanceof Object))
{var ex__5697__auto__ = e36308;var statearr_36309_36322 = state_36286;(statearr_36309_36322[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36286);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e36308;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__36323 = state_36286;
state_36286 = G__36323;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_36286){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_36286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___36311,out))
})();var state__5710__auto__ = (function (){var statearr_36310 = f__5709__auto__.call(null);(statearr_36310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___36311);
return statearr_36310;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___36311,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___36458 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___36458,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___36458,out){
return (function (state_36428){var state_val_36429 = (state_36428[(1)]);if((state_val_36429 === (7)))
{var inst_36424 = (state_36428[(2)]);var state_36428__$1 = state_36428;var statearr_36430_36459 = state_36428__$1;(statearr_36430_36459[(2)] = inst_36424);
(statearr_36430_36459[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36429 === (1)))
{var inst_36391 = (new Array(n));var inst_36392 = inst_36391;var inst_36393 = (0);var state_36428__$1 = (function (){var statearr_36431 = state_36428;(statearr_36431[(7)] = inst_36392);
(statearr_36431[(8)] = inst_36393);
return statearr_36431;
})();var statearr_36432_36460 = state_36428__$1;(statearr_36432_36460[(2)] = null);
(statearr_36432_36460[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36429 === (4)))
{var inst_36396 = (state_36428[(9)]);var inst_36396__$1 = (state_36428[(2)]);var inst_36397 = (inst_36396__$1 == null);var inst_36398 = cljs.core.not.call(null,inst_36397);var state_36428__$1 = (function (){var statearr_36433 = state_36428;(statearr_36433[(9)] = inst_36396__$1);
return statearr_36433;
})();if(inst_36398)
{var statearr_36434_36461 = state_36428__$1;(statearr_36434_36461[(1)] = (5));
} else
{var statearr_36435_36462 = state_36428__$1;(statearr_36435_36462[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36429 === (15)))
{var inst_36418 = (state_36428[(2)]);var state_36428__$1 = state_36428;var statearr_36436_36463 = state_36428__$1;(statearr_36436_36463[(2)] = inst_36418);
(statearr_36436_36463[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36429 === (13)))
{var state_36428__$1 = state_36428;var statearr_36437_36464 = state_36428__$1;(statearr_36437_36464[(2)] = null);
(statearr_36437_36464[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36429 === (6)))
{var inst_36393 = (state_36428[(8)]);var inst_36414 = (inst_36393 > (0));var state_36428__$1 = state_36428;if(cljs.core.truth_(inst_36414))
{var statearr_36438_36465 = state_36428__$1;(statearr_36438_36465[(1)] = (12));
} else
{var statearr_36439_36466 = state_36428__$1;(statearr_36439_36466[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36429 === (3)))
{var inst_36426 = (state_36428[(2)]);var state_36428__$1 = state_36428;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36428__$1,inst_36426);
} else
{if((state_val_36429 === (12)))
{var inst_36392 = (state_36428[(7)]);var inst_36416 = cljs.core.vec.call(null,inst_36392);var state_36428__$1 = state_36428;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36428__$1,(15),out,inst_36416);
} else
{if((state_val_36429 === (2)))
{var state_36428__$1 = state_36428;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36428__$1,(4),ch);
} else
{if((state_val_36429 === (11)))
{var inst_36408 = (state_36428[(2)]);var inst_36409 = (new Array(n));var inst_36392 = inst_36409;var inst_36393 = (0);var state_36428__$1 = (function (){var statearr_36440 = state_36428;(statearr_36440[(10)] = inst_36408);
(statearr_36440[(7)] = inst_36392);
(statearr_36440[(8)] = inst_36393);
return statearr_36440;
})();var statearr_36441_36467 = state_36428__$1;(statearr_36441_36467[(2)] = null);
(statearr_36441_36467[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36429 === (9)))
{var inst_36392 = (state_36428[(7)]);var inst_36406 = cljs.core.vec.call(null,inst_36392);var state_36428__$1 = state_36428;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36428__$1,(11),out,inst_36406);
} else
{if((state_val_36429 === (5)))
{var inst_36396 = (state_36428[(9)]);var inst_36392 = (state_36428[(7)]);var inst_36393 = (state_36428[(8)]);var inst_36401 = (state_36428[(11)]);var inst_36400 = (inst_36392[inst_36393] = inst_36396);var inst_36401__$1 = (inst_36393 + (1));var inst_36402 = (inst_36401__$1 < n);var state_36428__$1 = (function (){var statearr_36442 = state_36428;(statearr_36442[(12)] = inst_36400);
(statearr_36442[(11)] = inst_36401__$1);
return statearr_36442;
})();if(cljs.core.truth_(inst_36402))
{var statearr_36443_36468 = state_36428__$1;(statearr_36443_36468[(1)] = (8));
} else
{var statearr_36444_36469 = state_36428__$1;(statearr_36444_36469[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36429 === (14)))
{var inst_36421 = (state_36428[(2)]);var inst_36422 = cljs.core.async.close_BANG_.call(null,out);var state_36428__$1 = (function (){var statearr_36446 = state_36428;(statearr_36446[(13)] = inst_36421);
return statearr_36446;
})();var statearr_36447_36470 = state_36428__$1;(statearr_36447_36470[(2)] = inst_36422);
(statearr_36447_36470[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36429 === (10)))
{var inst_36412 = (state_36428[(2)]);var state_36428__$1 = state_36428;var statearr_36448_36471 = state_36428__$1;(statearr_36448_36471[(2)] = inst_36412);
(statearr_36448_36471[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36429 === (8)))
{var inst_36392 = (state_36428[(7)]);var inst_36401 = (state_36428[(11)]);var tmp36445 = inst_36392;var inst_36392__$1 = tmp36445;var inst_36393 = inst_36401;var state_36428__$1 = (function (){var statearr_36449 = state_36428;(statearr_36449[(7)] = inst_36392__$1);
(statearr_36449[(8)] = inst_36393);
return statearr_36449;
})();var statearr_36450_36472 = state_36428__$1;(statearr_36450_36472[(2)] = null);
(statearr_36450_36472[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__5708__auto___36458,out))
;return ((function (switch__5693__auto__,c__5708__auto___36458,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_36454 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36454[(0)] = state_machine__5694__auto__);
(statearr_36454[(1)] = (1));
return statearr_36454;
});
var state_machine__5694__auto____1 = (function (state_36428){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_36428);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e36455){if((e36455 instanceof Object))
{var ex__5697__auto__ = e36455;var statearr_36456_36473 = state_36428;(statearr_36456_36473[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36428);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e36455;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__36474 = state_36428;
state_36428 = G__36474;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_36428){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_36428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___36458,out))
})();var state__5710__auto__ = (function (){var statearr_36457 = f__5709__auto__.call(null);(statearr_36457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___36458);
return statearr_36457;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___36458,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___36617 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___36617,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___36617,out){
return (function (state_36587){var state_val_36588 = (state_36587[(1)]);if((state_val_36588 === (7)))
{var inst_36583 = (state_36587[(2)]);var state_36587__$1 = state_36587;var statearr_36589_36618 = state_36587__$1;(statearr_36589_36618[(2)] = inst_36583);
(statearr_36589_36618[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36588 === (1)))
{var inst_36546 = [];var inst_36547 = inst_36546;var inst_36548 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_36587__$1 = (function (){var statearr_36590 = state_36587;(statearr_36590[(7)] = inst_36547);
(statearr_36590[(8)] = inst_36548);
return statearr_36590;
})();var statearr_36591_36619 = state_36587__$1;(statearr_36591_36619[(2)] = null);
(statearr_36591_36619[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36588 === (4)))
{var inst_36551 = (state_36587[(9)]);var inst_36551__$1 = (state_36587[(2)]);var inst_36552 = (inst_36551__$1 == null);var inst_36553 = cljs.core.not.call(null,inst_36552);var state_36587__$1 = (function (){var statearr_36592 = state_36587;(statearr_36592[(9)] = inst_36551__$1);
return statearr_36592;
})();if(inst_36553)
{var statearr_36593_36620 = state_36587__$1;(statearr_36593_36620[(1)] = (5));
} else
{var statearr_36594_36621 = state_36587__$1;(statearr_36594_36621[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36588 === (15)))
{var inst_36577 = (state_36587[(2)]);var state_36587__$1 = state_36587;var statearr_36595_36622 = state_36587__$1;(statearr_36595_36622[(2)] = inst_36577);
(statearr_36595_36622[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36588 === (13)))
{var state_36587__$1 = state_36587;var statearr_36596_36623 = state_36587__$1;(statearr_36596_36623[(2)] = null);
(statearr_36596_36623[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36588 === (6)))
{var inst_36547 = (state_36587[(7)]);var inst_36572 = inst_36547.length;var inst_36573 = (inst_36572 > (0));var state_36587__$1 = state_36587;if(cljs.core.truth_(inst_36573))
{var statearr_36597_36624 = state_36587__$1;(statearr_36597_36624[(1)] = (12));
} else
{var statearr_36598_36625 = state_36587__$1;(statearr_36598_36625[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36588 === (3)))
{var inst_36585 = (state_36587[(2)]);var state_36587__$1 = state_36587;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36587__$1,inst_36585);
} else
{if((state_val_36588 === (12)))
{var inst_36547 = (state_36587[(7)]);var inst_36575 = cljs.core.vec.call(null,inst_36547);var state_36587__$1 = state_36587;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36587__$1,(15),out,inst_36575);
} else
{if((state_val_36588 === (2)))
{var state_36587__$1 = state_36587;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36587__$1,(4),ch);
} else
{if((state_val_36588 === (11)))
{var inst_36551 = (state_36587[(9)]);var inst_36555 = (state_36587[(10)]);var inst_36565 = (state_36587[(2)]);var inst_36566 = [];var inst_36567 = inst_36566.push(inst_36551);var inst_36547 = inst_36566;var inst_36548 = inst_36555;var state_36587__$1 = (function (){var statearr_36599 = state_36587;(statearr_36599[(7)] = inst_36547);
(statearr_36599[(8)] = inst_36548);
(statearr_36599[(11)] = inst_36565);
(statearr_36599[(12)] = inst_36567);
return statearr_36599;
})();var statearr_36600_36626 = state_36587__$1;(statearr_36600_36626[(2)] = null);
(statearr_36600_36626[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36588 === (9)))
{var inst_36547 = (state_36587[(7)]);var inst_36563 = cljs.core.vec.call(null,inst_36547);var state_36587__$1 = state_36587;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36587__$1,(11),out,inst_36563);
} else
{if((state_val_36588 === (5)))
{var inst_36551 = (state_36587[(9)]);var inst_36548 = (state_36587[(8)]);var inst_36555 = (state_36587[(10)]);var inst_36555__$1 = f.call(null,inst_36551);var inst_36556 = cljs.core._EQ_.call(null,inst_36555__$1,inst_36548);var inst_36557 = cljs.core.keyword_identical_QMARK_.call(null,inst_36548,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_36558 = (inst_36556) || (inst_36557);var state_36587__$1 = (function (){var statearr_36601 = state_36587;(statearr_36601[(10)] = inst_36555__$1);
return statearr_36601;
})();if(cljs.core.truth_(inst_36558))
{var statearr_36602_36627 = state_36587__$1;(statearr_36602_36627[(1)] = (8));
} else
{var statearr_36603_36628 = state_36587__$1;(statearr_36603_36628[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36588 === (14)))
{var inst_36580 = (state_36587[(2)]);var inst_36581 = cljs.core.async.close_BANG_.call(null,out);var state_36587__$1 = (function (){var statearr_36605 = state_36587;(statearr_36605[(13)] = inst_36580);
return statearr_36605;
})();var statearr_36606_36629 = state_36587__$1;(statearr_36606_36629[(2)] = inst_36581);
(statearr_36606_36629[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36588 === (10)))
{var inst_36570 = (state_36587[(2)]);var state_36587__$1 = state_36587;var statearr_36607_36630 = state_36587__$1;(statearr_36607_36630[(2)] = inst_36570);
(statearr_36607_36630[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36588 === (8)))
{var inst_36547 = (state_36587[(7)]);var inst_36551 = (state_36587[(9)]);var inst_36555 = (state_36587[(10)]);var inst_36560 = inst_36547.push(inst_36551);var tmp36604 = inst_36547;var inst_36547__$1 = tmp36604;var inst_36548 = inst_36555;var state_36587__$1 = (function (){var statearr_36608 = state_36587;(statearr_36608[(7)] = inst_36547__$1);
(statearr_36608[(14)] = inst_36560);
(statearr_36608[(8)] = inst_36548);
return statearr_36608;
})();var statearr_36609_36631 = state_36587__$1;(statearr_36609_36631[(2)] = null);
(statearr_36609_36631[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__5708__auto___36617,out))
;return ((function (switch__5693__auto__,c__5708__auto___36617,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_36613 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36613[(0)] = state_machine__5694__auto__);
(statearr_36613[(1)] = (1));
return statearr_36613;
});
var state_machine__5694__auto____1 = (function (state_36587){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_36587);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e36614){if((e36614 instanceof Object))
{var ex__5697__auto__ = e36614;var statearr_36615_36632 = state_36587;(statearr_36615_36632[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36587);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e36614;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__36633 = state_36587;
state_36587 = G__36633;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_36587){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_36587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___36617,out))
})();var state__5710__auto__ = (function (){var statearr_36616 = f__5709__auto__.call(null);(statearr_36616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___36617);
return statearr_36616;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___36617,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
