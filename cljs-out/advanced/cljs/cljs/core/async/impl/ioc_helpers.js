// Compiled by ClojureScript 0.0-2173
goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = 0;
cljs.core.async.impl.ioc_helpers.STATE_IDX = 1;
cljs.core.async.impl.ioc_helpers.VALUE_IDX = 2;
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = 3;
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = 4;
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = 5;
cljs.core.async.impl.ioc_helpers.USER_START_IDX = 6;
cljs.core.async.impl.ioc_helpers.aset_object = (function aset_object(arr,idx,o){return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function aget_object(arr,idx){return (arr[idx]);
});
/**
* Returns true if the machine is in a finished state
*/
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function finished_QMARK_(state_array){return cljs.core.keyword_identical_QMARK_((state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),cljs.core.constant$keyword$554);
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.impl.ioc_helpers.t38403 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t38403 = (function (f,fn_handler,meta38404){
this.f = f;
this.fn_handler = fn_handler;
this.meta38404 = meta38404;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t38403.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.t38403.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t38403";
cljs.core.async.impl.ioc_helpers.t38403.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"cljs.core.async.impl.ioc-helpers/t38403");
});
cljs.core.async.impl.ioc_helpers.t38403.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.impl.ioc_helpers.t38403.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.impl.ioc_helpers.t38403.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.impl.ioc_helpers.t38403.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38405){var self__ = this;
var _38405__$1 = this;return self__.meta38404;
});
cljs.core.async.impl.ioc_helpers.t38403.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38405,meta38404__$1){var self__ = this;
var _38405__$1 = this;return (new cljs.core.async.impl.ioc_helpers.t38403(self__.f,self__.fn_handler,meta38404__$1));
});
cljs.core.async.impl.ioc_helpers.__GT_t38403 = (function __GT_t38403(f__$1,fn_handler__$1,meta38404){return (new cljs.core.async.impl.ioc_helpers.t38403(f__$1,fn_handler__$1,meta38404));
});
}
return (new cljs.core.async.impl.ioc_helpers.t38403(f,fn_handler,null));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){return cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e38407){if((e38407 instanceof Object))
{var ex = e38407;cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.USER_START_IDX).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);
throw ex;
} else
{if(cljs.core.constant$keyword$544)
{throw e38407;
} else
{return null;
}
}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){var temp__4090__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){var statearr_38410_38412 = state;(statearr_38410_38412[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);
(statearr_38410_38412[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_38411_38413 = state;(statearr_38411_38413[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref(cb));
(statearr_38411_38413[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.constant$keyword$555;
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){var temp__4090__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (){var statearr_38416_38418 = state;(statearr_38416_38418[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = null);
(statearr_38416_38418[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_38417_38419 = state;(statearr_38417_38419[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref(cb));
(statearr_38417_38419[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.constant$keyword$555;
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__38420){var map__38425 = p__38420;var map__38425__$1 = ((cljs.core.seq_QMARK_(map__38425))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38425):map__38425);var opts = map__38425__$1;var statearr_38426_38429 = state;(statearr_38426_38429[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4092__auto__ = cljs.core.async.do_alts((function (val){var statearr_38427_38430 = state;(statearr_38427_38430[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);if(cljs.core.truth_(temp__4092__auto__))
{var cb = temp__4092__auto__;var statearr_38428_38431 = state;(statearr_38428_38431[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref(cb));
return cljs.core.constant$keyword$555;
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__38420 = null;if (arguments.length > 3) {
  p__38420 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__38420);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__38432){
var state = cljs.core.first(arglist__38432);
arglist__38432 = cljs.core.next(arglist__38432);
var cont_block = cljs.core.first(arglist__38432);
arglist__38432 = cljs.core.next(arglist__38432);
var ports = cljs.core.first(arglist__38432);
var p__38420 = cljs.core.rest(arglist__38432);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__38420);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
cljs.core.async.impl.ioc_helpers.return_chan = (function return_chan(state,value){var c = (state[cljs.core.async.impl.ioc_helpers.USER_START_IDX]);if((value == null))
{} else
{c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,value,cljs.core.async.impl.ioc_helpers.fn_handler((function (){return null;
})));
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
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4022__auto__){var self__ = this;
var this__4022__auto____$1 = this;var h__3852__auto__ = self__.__hash;if(!((h__3852__auto__ == null)))
{return h__3852__auto__;
} else
{var h__3852__auto____$1 = cljs.core.hash_imap(this__4022__auto____$1);self__.__hash = h__3852__auto____$1;
return h__3852__auto____$1;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4027__auto__,k__4028__auto__){var self__ = this;
var this__4027__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4027__auto____$1,k__4028__auto__,null);
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4029__auto__,k38434,else__4030__auto__){var self__ = this;
var this__4029__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_(k38434,cljs.core.constant$keyword$556))
{return self__.catch_block;
} else
{if(cljs.core.keyword_identical_QMARK_(k38434,cljs.core.constant$keyword$557))
{return self__.catch_exception;
} else
{if(cljs.core.keyword_identical_QMARK_(k38434,cljs.core.constant$keyword$558))
{return self__.finally_block;
} else
{if(cljs.core.keyword_identical_QMARK_(k38434,cljs.core.constant$keyword$559))
{return self__.continue_block;
} else
{if(cljs.core.keyword_identical_QMARK_(k38434,cljs.core.constant$keyword$560))
{return self__.prev;
} else
{if(cljs.core.constant$keyword$544)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k38434,else__4030__auto__);
} else
{return null;
}
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4034__auto__,k__4035__auto__,G__38433){var self__ = this;
var this__4034__auto____$1 = this;var pred__38436 = cljs.core.keyword_identical_QMARK_;var expr__38437 = k__4035__auto__;if(cljs.core.truth_((pred__38436.cljs$core$IFn$_invoke$arity$2 ? pred__38436.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$556,expr__38437) : pred__38436.call(null,cljs.core.constant$keyword$556,expr__38437))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__38433,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__38436.cljs$core$IFn$_invoke$arity$2 ? pred__38436.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$557,expr__38437) : pred__38436.call(null,cljs.core.constant$keyword$557,expr__38437))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__38433,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__38436.cljs$core$IFn$_invoke$arity$2 ? pred__38436.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$558,expr__38437) : pred__38436.call(null,cljs.core.constant$keyword$558,expr__38437))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__38433,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__38436.cljs$core$IFn$_invoke$arity$2 ? pred__38436.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$559,expr__38437) : pred__38436.call(null,cljs.core.constant$keyword$559,expr__38437))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__38433,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__38436.cljs$core$IFn$_invoke$arity$2 ? pred__38436.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$560,expr__38437) : pred__38436.call(null,cljs.core.constant$keyword$560,expr__38437))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__38433,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4035__auto__,G__38433),null));
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4041__auto__,writer__4042__auto__,opts__4043__auto__){var self__ = this;
var this__4041__auto____$1 = this;var pr_pair__4044__auto__ = (function (keyval__4045__auto__){return cljs.core.pr_sequential_writer(writer__4042__auto__,cljs.core.pr_writer,""," ","",opts__4043__auto__,keyval__4045__auto__);
});return cljs.core.pr_sequential_writer(writer__4042__auto__,pr_pair__4044__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__4043__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$556,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$557,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$558,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$559,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$560,self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4032__auto__,entry__4033__auto__){var self__ = this;
var this__4032__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__4033__auto__))
{return cljs.core._assoc(this__4032__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4033__auto__,0),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4033__auto__,1));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4032__auto____$1,entry__4033__auto__);
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4039__auto__){var self__ = this;
var this__4039__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$556,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$557,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$558,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$559,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$560,self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4031__auto__){var self__ = this;
var this__4031__auto____$1 = this;return (5 + cljs.core.count(self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4023__auto__,other__4024__auto__){var self__ = this;
var this__4023__auto____$1 = this;if(cljs.core.truth_((function (){var and__3429__auto__ = other__4024__auto__;if(cljs.core.truth_(and__3429__auto__))
{return ((this__4023__auto____$1.constructor === other__4024__auto__.constructor)) && (cljs.core.equiv_map(this__4023__auto____$1,other__4024__auto__));
} else
{return and__3429__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4026__auto__,G__38433){var self__ = this;
var this__4026__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__38433,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4021__auto__){var self__ = this;
var this__4021__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4025__auto__){var self__ = this;
var this__4025__auto____$1 = this;return self__.__meta;
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4036__auto__,k__4037__auto__){var self__ = this;
var this__4036__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$558,null,cljs.core.constant$keyword$556,null,cljs.core.constant$keyword$557,null,cljs.core.constant$keyword$559,null,cljs.core.constant$keyword$560,null], null), null),k__4037__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,this__4036__auto____$1),self__.__meta),k__4037__auto__);
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4037__auto__)),null));
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__4061__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__4061__auto__,writer__4062__auto__){return cljs.core._write(writer__4062__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function __GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev));
});
cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__38435){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(cljs.core.constant$keyword$556.cljs$core$IFn$_invoke$arity$1(G__38435),cljs.core.constant$keyword$557.cljs$core$IFn$_invoke$arity$1(G__38435),cljs.core.constant$keyword$558.cljs$core$IFn$_invoke$arity$1(G__38435),cljs.core.constant$keyword$559.cljs$core$IFn$_invoke$arity$1(G__38435),cljs.core.constant$keyword$560.cljs$core$IFn$_invoke$arity$1(G__38435),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__38435,cljs.core.constant$keyword$556,cljs.core.array_seq([cljs.core.constant$keyword$557,cljs.core.constant$keyword$558,cljs.core.constant$keyword$559,cljs.core.constant$keyword$560], 0))));
});
cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){var statearr_38440 = state;(statearr_38440[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));
return statearr_38440;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);var catch_block = cljs.core.constant$keyword$556.cljs$core$IFn$_invoke$arity$1(exception_frame);var catch_exception = cljs.core.constant$keyword$557.cljs$core$IFn$_invoke$arity$1(exception_frame);var exception = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);if(cljs.core.truth_((function (){var and__3429__auto__ = exception;if(cljs.core.truth_(and__3429__auto__))
{return cljs.core.not(exception_frame);
} else
{return and__3429__auto__;
}
})()))
{throw exception;
} else
{if(cljs.core.truth_((function (){var and__3429__auto__ = exception;if(cljs.core.truth_(and__3429__auto__))
{var and__3429__auto____$1 = catch_block;if(cljs.core.truth_(and__3429__auto____$1))
{return (exception instanceof catch_exception);
} else
{return and__3429__auto____$1;
}
} else
{return and__3429__auto__;
}
})()))
{var statearr_38446 = state;(statearr_38446[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);
(statearr_38446[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);
(statearr_38446[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);
(statearr_38446[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(exception_frame,cljs.core.constant$keyword$556,null,cljs.core.array_seq([cljs.core.constant$keyword$557,null], 0)));
return statearr_38446;
} else
{if(cljs.core.truth_((function (){var and__3429__auto__ = exception;if(cljs.core.truth_(and__3429__auto__))
{return (cljs.core.not(catch_block)) && (cljs.core.not(cljs.core.constant$keyword$558.cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else
{return and__3429__auto__;
}
})()))
{var statearr_38447_38451 = state;(statearr_38447_38451[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$560.cljs$core$IFn$_invoke$arity$1(exception_frame));
{
var G__38452 = state;
state = G__38452;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3429__auto__ = exception;if(cljs.core.truth_(and__3429__auto__))
{var and__3429__auto____$1 = cljs.core.not(catch_block);if(and__3429__auto____$1)
{return cljs.core.constant$keyword$558.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__3429__auto____$1;
}
} else
{return and__3429__auto__;
}
})()))
{var statearr_38448 = state;(statearr_38448[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$558.cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_38448[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$558,null));
return statearr_38448;
} else
{if(cljs.core.truth_((function (){var and__3429__auto__ = cljs.core.not(exception);if(and__3429__auto__)
{return cljs.core.constant$keyword$558.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__3429__auto__;
}
})()))
{var statearr_38449 = state;(statearr_38449[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$558.cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_38449[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$558,null));
return statearr_38449;
} else
{if((cljs.core.not(exception)) && (cljs.core.not(cljs.core.constant$keyword$558.cljs$core$IFn$_invoke$arity$1(exception_frame))))
{var statearr_38450 = state;(statearr_38450[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$559.cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_38450[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$560.cljs$core$IFn$_invoke$arity$1(exception_frame));
return statearr_38450;
} else
{if(cljs.core.constant$keyword$544)
{if(false)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No matching clause"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([false], 0)))].join('')));
}
} else
{return null;
}
}
}
}
}
}
}
break;
}
});
