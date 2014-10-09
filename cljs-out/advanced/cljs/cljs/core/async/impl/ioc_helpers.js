// Compiled by ClojureScript 0.0-2322
goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = (0);
cljs.core.async.impl.ioc_helpers.STATE_IDX = (1);
cljs.core.async.impl.ioc_helpers.VALUE_IDX = (2);
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = (3);
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = (4);
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = (5);
cljs.core.async.impl.ioc_helpers.USER_START_IDX = (6);
cljs.core.async.impl.ioc_helpers.aset_object = (function aset_object(arr,idx,o){return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function aget_object(arr,idx){return (arr[idx]);
});
/**
* Returns true if the machine is in a finished state
*/
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function finished_QMARK_(state_array){return cljs.core.keyword_identical_QMARK_((state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),cljs.core.constant$keyword$871);
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.impl.ioc_helpers.t45093 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t45093 = (function (f,fn_handler,meta45094){
this.f = f;
this.fn_handler = fn_handler;
this.meta45094 = meta45094;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t45093.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.t45093.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t45093";
cljs.core.async.impl.ioc_helpers.t45093.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"cljs.core.async.impl.ioc-helpers/t45093");
});
cljs.core.async.impl.ioc_helpers.t45093.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.impl.ioc_helpers.t45093.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.impl.ioc_helpers.t45093.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.impl.ioc_helpers.t45093.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45095){var self__ = this;
var _45095__$1 = this;return self__.meta45094;
});
cljs.core.async.impl.ioc_helpers.t45093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45095,meta45094__$1){var self__ = this;
var _45095__$1 = this;return (new cljs.core.async.impl.ioc_helpers.t45093(self__.f,self__.fn_handler,meta45094__$1));
});
cljs.core.async.impl.ioc_helpers.__GT_t45093 = (function __GT_t45093(f__$1,fn_handler__$1,meta45094){return (new cljs.core.async.impl.ioc_helpers.t45093(f__$1,fn_handler__$1,meta45094));
});
}
return (new cljs.core.async.impl.ioc_helpers.t45093(f,fn_handler,null));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){return cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e45097){if((e45097 instanceof Object))
{var ex = e45097;cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.USER_START_IDX).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);
throw ex;
} else
{throw e45097;

}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){var temp__4124__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){var statearr_45100_45102 = state;(statearr_45100_45102[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);
(statearr_45100_45102[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));if(cljs.core.truth_(temp__4124__auto__))
{var cb = temp__4124__auto__;var statearr_45101_45103 = state;(statearr_45101_45103[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));
(statearr_45101_45103[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.constant$keyword$872;
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){var temp__4124__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (){var statearr_45106_45108 = state;(statearr_45106_45108[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = null);
(statearr_45106_45108[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));if(cljs.core.truth_(temp__4124__auto__))
{var cb = temp__4124__auto__;var statearr_45107_45109 = state;(statearr_45107_45109[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));
(statearr_45107_45109[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.constant$keyword$872;
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__45110){var map__45115 = p__45110;var map__45115__$1 = ((cljs.core.seq_QMARK_(map__45115))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45115):map__45115);var opts = map__45115__$1;var statearr_45116_45119 = state;(statearr_45116_45119[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__45115,map__45115__$1,opts){
return (function (val){var statearr_45117_45120 = state;(statearr_45117_45120[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__45115,map__45115__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_45118_45121 = state;(statearr_45118_45121[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));
return cljs.core.constant$keyword$872;
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__45110 = null;if (arguments.length > 3) {
  p__45110 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__45110);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__45122){
var state = cljs.core.first(arglist__45122);
arglist__45122 = cljs.core.next(arglist__45122);
var cont_block = cljs.core.first(arglist__45122);
arglist__45122 = cljs.core.next(arglist__45122);
var ports = cljs.core.first(arglist__45122);
var p__45110 = cljs.core.rest(arglist__45122);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__45110);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
cljs.core.async.impl.ioc_helpers.return_chan = (function return_chan(state,value){var c = (state[cljs.core.async.impl.ioc_helpers.USER_START_IDX]);if((value == null))
{} else
{c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,value,cljs.core.async.impl.ioc_helpers.fn_handler(((function (c){
return (function (){return null;
});})(c))
));
}
c.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);
return c;
});

/**
* @constructor
* @param {*} catch_block
* @param {*} catch_exception
* @param {*} finally_block
* @param {*} continue_block
* @param {*} prev
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
cljs.core.async.impl.ioc_helpers.ExceptionFrame = (function (catch_block,catch_exception,finally_block,continue_block,prev,__meta,__extmap){
this.catch_block = catch_block;
this.catch_exception = catch_exception;
this.finally_block = finally_block;
this.continue_block = continue_block;
this.prev = prev;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>5){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4144__auto__,k__4145__auto__){var self__ = this;
var this__4144__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4144__auto____$1,k__4145__auto__,null);
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4146__auto__,k45124,else__4147__auto__){var self__ = this;
var this__4146__auto____$1 = this;var G__45126 = (((k45124 instanceof cljs.core.Keyword))?k45124.fqn:null);switch (G__45126) {
case "prev":
return self__.prev;

break;
case "continue-block":
return self__.continue_block;

break;
case "finally-block":
return self__.finally_block;

break;
case "catch-exception":
return self__.catch_exception;

break;
case "catch-block":
return self__.catch_block;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k45124,else__4147__auto__);

}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4158__auto__,writer__4159__auto__,opts__4160__auto__){var self__ = this;
var this__4158__auto____$1 = this;var pr_pair__4161__auto__ = ((function (this__4158__auto____$1){
return (function (keyval__4162__auto__){return cljs.core.pr_sequential_writer(writer__4159__auto__,cljs.core.pr_writer,""," ","",opts__4160__auto__,keyval__4162__auto__);
});})(this__4158__auto____$1))
;return cljs.core.pr_sequential_writer(writer__4159__auto__,pr_pair__4161__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__4160__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$873,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$874,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$875,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$876,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$877,self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4142__auto__){var self__ = this;
var this__4142__auto____$1 = this;return self__.__meta;
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4138__auto__){var self__ = this;
var this__4138__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4148__auto__){var self__ = this;
var this__4148__auto____$1 = this;return (5 + cljs.core.count(self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4139__auto__){var self__ = this;
var this__4139__auto____$1 = this;var h__3969__auto__ = self__.__hash;if(!((h__3969__auto__ == null)))
{return h__3969__auto__;
} else
{var h__3969__auto____$1 = cljs.core.hash_imap(this__4139__auto____$1);self__.__hash = h__3969__auto____$1;
return h__3969__auto____$1;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4140__auto__,other__4141__auto__){var self__ = this;
var this__4140__auto____$1 = this;if(cljs.core.truth_((function (){var and__3546__auto__ = other__4141__auto__;if(cljs.core.truth_(and__3546__auto__))
{return ((this__4140__auto____$1.constructor === other__4141__auto__.constructor)) && (cljs.core.equiv_map(this__4140__auto____$1,other__4141__auto__));
} else
{return and__3546__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4153__auto__,k__4154__auto__){var self__ = this;
var this__4153__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$875,null,cljs.core.constant$keyword$873,null,cljs.core.constant$keyword$874,null,cljs.core.constant$keyword$877,null,cljs.core.constant$keyword$876,null], null), null),k__4154__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4153__auto____$1),self__.__meta),k__4154__auto__);
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4154__auto__)),null));
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4151__auto__,k__4152__auto__,G__45123){var self__ = this;
var this__4151__auto____$1 = this;var pred__45127 = cljs.core.keyword_identical_QMARK_;var expr__45128 = k__4152__auto__;if(cljs.core.truth_((pred__45127.cljs$core$IFn$_invoke$arity$2 ? pred__45127.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$873,expr__45128) : pred__45127.call(null,cljs.core.constant$keyword$873,expr__45128))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__45123,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__45127.cljs$core$IFn$_invoke$arity$2 ? pred__45127.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$874,expr__45128) : pred__45127.call(null,cljs.core.constant$keyword$874,expr__45128))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__45123,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__45127.cljs$core$IFn$_invoke$arity$2 ? pred__45127.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$875,expr__45128) : pred__45127.call(null,cljs.core.constant$keyword$875,expr__45128))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__45123,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__45127.cljs$core$IFn$_invoke$arity$2 ? pred__45127.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$876,expr__45128) : pred__45127.call(null,cljs.core.constant$keyword$876,expr__45128))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__45123,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__45127.cljs$core$IFn$_invoke$arity$2 ? pred__45127.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$877,expr__45128) : pred__45127.call(null,cljs.core.constant$keyword$877,expr__45128))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__45123,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4152__auto__,G__45123),null));
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4156__auto__){var self__ = this;
var this__4156__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$873,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$874,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$875,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$876,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$877,self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4143__auto__,G__45123){var self__ = this;
var this__4143__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__45123,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4149__auto__,entry__4150__auto__){var self__ = this;
var this__4149__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__4150__auto__))
{return cljs.core._assoc(this__4149__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4150__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4150__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4149__auto____$1,entry__4150__auto__);
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__4178__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__4178__auto__,writer__4179__auto__){return cljs.core._write(writer__4179__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function __GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev));
});
cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__45125){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(cljs.core.constant$keyword$873.cljs$core$IFn$_invoke$arity$1(G__45125),cljs.core.constant$keyword$874.cljs$core$IFn$_invoke$arity$1(G__45125),cljs.core.constant$keyword$875.cljs$core$IFn$_invoke$arity$1(G__45125),cljs.core.constant$keyword$876.cljs$core$IFn$_invoke$arity$1(G__45125),cljs.core.constant$keyword$877.cljs$core$IFn$_invoke$arity$1(G__45125),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__45125,cljs.core.constant$keyword$873,cljs.core.array_seq([cljs.core.constant$keyword$874,cljs.core.constant$keyword$875,cljs.core.constant$keyword$876,cljs.core.constant$keyword$877], 0))));
});
cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){var statearr_45132 = state;(statearr_45132[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));
return statearr_45132;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);var catch_block = cljs.core.constant$keyword$873.cljs$core$IFn$_invoke$arity$1(exception_frame);var catch_exception = cljs.core.constant$keyword$874.cljs$core$IFn$_invoke$arity$1(exception_frame);var exception = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);if(cljs.core.truth_((function (){var and__3546__auto__ = exception;if(cljs.core.truth_(and__3546__auto__))
{return cljs.core.not(exception_frame);
} else
{return and__3546__auto__;
}
})()))
{throw exception;
} else
{if(cljs.core.truth_((function (){var and__3546__auto__ = exception;if(cljs.core.truth_(and__3546__auto__))
{var and__3546__auto____$1 = catch_block;if(cljs.core.truth_(and__3546__auto____$1))
{return (exception instanceof catch_exception);
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
}
})()))
{var statearr_45138 = state;(statearr_45138[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);
(statearr_45138[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);
(statearr_45138[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);
(statearr_45138[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(exception_frame,cljs.core.constant$keyword$873,null,cljs.core.array_seq([cljs.core.constant$keyword$874,null], 0)));
return statearr_45138;
} else
{if(cljs.core.truth_((function (){var and__3546__auto__ = exception;if(cljs.core.truth_(and__3546__auto__))
{return (cljs.core.not(catch_block)) && (cljs.core.not(cljs.core.constant$keyword$875.cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else
{return and__3546__auto__;
}
})()))
{var statearr_45139_45143 = state;(statearr_45139_45143[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$877.cljs$core$IFn$_invoke$arity$1(exception_frame));
{
var G__45144 = state;
state = G__45144;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3546__auto__ = exception;if(cljs.core.truth_(and__3546__auto__))
{var and__3546__auto____$1 = cljs.core.not(catch_block);if(and__3546__auto____$1)
{return cljs.core.constant$keyword$875.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
}
})()))
{var statearr_45140 = state;(statearr_45140[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$875.cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_45140[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$875,null));
return statearr_45140;
} else
{if(cljs.core.truth_((function (){var and__3546__auto__ = cljs.core.not(exception);if(and__3546__auto__)
{return cljs.core.constant$keyword$875.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__3546__auto__;
}
})()))
{var statearr_45141 = state;(statearr_45141[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$875.cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_45141[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$875,null));
return statearr_45141;
} else
{if((cljs.core.not(exception)) && (cljs.core.not(cljs.core.constant$keyword$875.cljs$core$IFn$_invoke$arity$1(exception_frame))))
{var statearr_45142 = state;(statearr_45142[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$876.cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_45142[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$877.cljs$core$IFn$_invoke$arity$1(exception_frame));
return statearr_45142;
} else
{throw (new Error(("Assert failed: No matching clause\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([false], 0))))));


}
}
}
}
}
}
break;
}
});
