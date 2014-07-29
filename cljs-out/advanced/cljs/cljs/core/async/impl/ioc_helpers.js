// Compiled by ClojureScript 0.0-2268
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
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function finished_QMARK_(state_array){return cljs.core.keyword_identical_QMARK_((state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),cljs.core.constant$keyword$776);
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.impl.ioc_helpers.t42370 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t42370 = (function (f,fn_handler,meta42371){
this.f = f;
this.fn_handler = fn_handler;
this.meta42371 = meta42371;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t42370.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.t42370.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t42370";
cljs.core.async.impl.ioc_helpers.t42370.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async.impl.ioc-helpers/t42370");
});
cljs.core.async.impl.ioc_helpers.t42370.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.impl.ioc_helpers.t42370.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.impl.ioc_helpers.t42370.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.impl.ioc_helpers.t42370.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42372){var self__ = this;
var _42372__$1 = this;return self__.meta42371;
});
cljs.core.async.impl.ioc_helpers.t42370.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42372,meta42371__$1){var self__ = this;
var _42372__$1 = this;return (new cljs.core.async.impl.ioc_helpers.t42370(self__.f,self__.fn_handler,meta42371__$1));
});
cljs.core.async.impl.ioc_helpers.__GT_t42370 = (function __GT_t42370(f__$1,fn_handler__$1,meta42371){return (new cljs.core.async.impl.ioc_helpers.t42370(f__$1,fn_handler__$1,meta42371));
});
}
return (new cljs.core.async.impl.ioc_helpers.t42370(f,fn_handler,null));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){return cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e42374){if((e42374 instanceof Object))
{var ex = e42374;cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.USER_START_IDX).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);
throw ex;
} else
{if(cljs.core.constant$keyword$768)
{throw e42374;
} else
{return null;
}
}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){var temp__4124__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){var statearr_42377_42379 = state;(statearr_42377_42379[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);
(statearr_42377_42379[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));if(cljs.core.truth_(temp__4124__auto__))
{var cb = temp__4124__auto__;var statearr_42378_42380 = state;(statearr_42378_42380[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref(cb));
(statearr_42378_42380[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.constant$keyword$777;
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){var temp__4124__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (){var statearr_42383_42385 = state;(statearr_42383_42385[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = null);
(statearr_42383_42385[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));if(cljs.core.truth_(temp__4124__auto__))
{var cb = temp__4124__auto__;var statearr_42384_42386 = state;(statearr_42384_42386[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref(cb));
(statearr_42384_42386[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.constant$keyword$777;
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__42387){var map__42392 = p__42387;var map__42392__$1 = ((cljs.core.seq_QMARK_(map__42392))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42392):map__42392);var opts = map__42392__$1;var statearr_42393_42396 = state;(statearr_42393_42396[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__42392,map__42392__$1,opts){
return (function (val){var statearr_42394_42397 = state;(statearr_42394_42397[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__42392,map__42392__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_42395_42398 = state;(statearr_42395_42398[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref(cb));
return cljs.core.constant$keyword$777;
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__42387 = null;if (arguments.length > 3) {
  p__42387 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__42387);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__42399){
var state = cljs.core.first(arglist__42399);
arglist__42399 = cljs.core.next(arglist__42399);
var cont_block = cljs.core.first(arglist__42399);
arglist__42399 = cljs.core.next(arglist__42399);
var ports = cljs.core.first(arglist__42399);
var p__42387 = cljs.core.rest(arglist__42399);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__42387);
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
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4129__auto__,k__4130__auto__){var self__ = this;
var this__4129__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4129__auto____$1,k__4130__auto__,null);
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4131__auto__,k42401,else__4132__auto__){var self__ = this;
var this__4131__auto____$1 = this;var G__42403 = (((k42401 instanceof cljs.core.Keyword))?k42401.fqn:null);switch (G__42403) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k42401,else__4132__auto__);

}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4143__auto__,writer__4144__auto__,opts__4145__auto__){var self__ = this;
var this__4143__auto____$1 = this;var pr_pair__4146__auto__ = ((function (this__4143__auto____$1){
return (function (keyval__4147__auto__){return cljs.core.pr_sequential_writer(writer__4144__auto__,cljs.core.pr_writer,""," ","",opts__4145__auto__,keyval__4147__auto__);
});})(this__4143__auto____$1))
;return cljs.core.pr_sequential_writer(writer__4144__auto__,pr_pair__4146__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__4145__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$778,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$779,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$780,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$781,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$782,self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4127__auto__){var self__ = this;
var this__4127__auto____$1 = this;return self__.__meta;
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4123__auto__){var self__ = this;
var this__4123__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4133__auto__){var self__ = this;
var this__4133__auto____$1 = this;return (5 + cljs.core.count(self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4124__auto__){var self__ = this;
var this__4124__auto____$1 = this;var h__3954__auto__ = self__.__hash;if(!((h__3954__auto__ == null)))
{return h__3954__auto__;
} else
{var h__3954__auto____$1 = cljs.core.hash_imap(this__4124__auto____$1);self__.__hash = h__3954__auto____$1;
return h__3954__auto____$1;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4125__auto__,other__4126__auto__){var self__ = this;
var this__4125__auto____$1 = this;if(cljs.core.truth_((function (){var and__3531__auto__ = other__4126__auto__;if(cljs.core.truth_(and__3531__auto__))
{return ((this__4125__auto____$1.constructor === other__4126__auto__.constructor)) && (cljs.core.equiv_map(this__4125__auto____$1,other__4126__auto__));
} else
{return and__3531__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4138__auto__,k__4139__auto__){var self__ = this;
var this__4138__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$780,null,cljs.core.constant$keyword$778,null,cljs.core.constant$keyword$779,null,cljs.core.constant$keyword$782,null,cljs.core.constant$keyword$781,null], null), null),k__4139__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,this__4138__auto____$1),self__.__meta),k__4139__auto__);
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4139__auto__)),null));
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4136__auto__,k__4137__auto__,G__42400){var self__ = this;
var this__4136__auto____$1 = this;var pred__42404 = cljs.core.keyword_identical_QMARK_;var expr__42405 = k__4137__auto__;if(cljs.core.truth_((pred__42404.cljs$core$IFn$_invoke$arity$2 ? pred__42404.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$778,expr__42405) : pred__42404.call(null,cljs.core.constant$keyword$778,expr__42405))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__42400,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__42404.cljs$core$IFn$_invoke$arity$2 ? pred__42404.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$779,expr__42405) : pred__42404.call(null,cljs.core.constant$keyword$779,expr__42405))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__42400,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__42404.cljs$core$IFn$_invoke$arity$2 ? pred__42404.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$780,expr__42405) : pred__42404.call(null,cljs.core.constant$keyword$780,expr__42405))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__42400,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__42404.cljs$core$IFn$_invoke$arity$2 ? pred__42404.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$781,expr__42405) : pred__42404.call(null,cljs.core.constant$keyword$781,expr__42405))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__42400,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__42404.cljs$core$IFn$_invoke$arity$2 ? pred__42404.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$782,expr__42405) : pred__42404.call(null,cljs.core.constant$keyword$782,expr__42405))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__42400,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4137__auto__,G__42400),null));
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4141__auto__){var self__ = this;
var this__4141__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$778,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$779,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$780,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$781,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$782,self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4128__auto__,G__42400){var self__ = this;
var this__4128__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__42400,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4134__auto__,entry__4135__auto__){var self__ = this;
var this__4134__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__4135__auto__))
{return cljs.core._assoc(this__4134__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4135__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4135__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4134__auto____$1,entry__4135__auto__);
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__4163__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__4163__auto__,writer__4164__auto__){return cljs.core._write(writer__4164__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function __GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev));
});
cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__42402){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(cljs.core.constant$keyword$778.cljs$core$IFn$_invoke$arity$1(G__42402),cljs.core.constant$keyword$779.cljs$core$IFn$_invoke$arity$1(G__42402),cljs.core.constant$keyword$780.cljs$core$IFn$_invoke$arity$1(G__42402),cljs.core.constant$keyword$781.cljs$core$IFn$_invoke$arity$1(G__42402),cljs.core.constant$keyword$782.cljs$core$IFn$_invoke$arity$1(G__42402),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__42402,cljs.core.constant$keyword$778,cljs.core.array_seq([cljs.core.constant$keyword$779,cljs.core.constant$keyword$780,cljs.core.constant$keyword$781,cljs.core.constant$keyword$782], 0))));
});
cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){var statearr_42409 = state;(statearr_42409[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));
return statearr_42409;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);var catch_block = cljs.core.constant$keyword$778.cljs$core$IFn$_invoke$arity$1(exception_frame);var catch_exception = cljs.core.constant$keyword$779.cljs$core$IFn$_invoke$arity$1(exception_frame);var exception = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);if(cljs.core.truth_((function (){var and__3531__auto__ = exception;if(cljs.core.truth_(and__3531__auto__))
{return cljs.core.not(exception_frame);
} else
{return and__3531__auto__;
}
})()))
{throw exception;
} else
{if(cljs.core.truth_((function (){var and__3531__auto__ = exception;if(cljs.core.truth_(and__3531__auto__))
{var and__3531__auto____$1 = catch_block;if(cljs.core.truth_(and__3531__auto____$1))
{return (exception instanceof catch_exception);
} else
{return and__3531__auto____$1;
}
} else
{return and__3531__auto__;
}
})()))
{var statearr_42415 = state;(statearr_42415[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);
(statearr_42415[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);
(statearr_42415[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);
(statearr_42415[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(exception_frame,cljs.core.constant$keyword$778,null,cljs.core.array_seq([cljs.core.constant$keyword$779,null], 0)));
return statearr_42415;
} else
{if(cljs.core.truth_((function (){var and__3531__auto__ = exception;if(cljs.core.truth_(and__3531__auto__))
{return (cljs.core.not(catch_block)) && (cljs.core.not(cljs.core.constant$keyword$780.cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else
{return and__3531__auto__;
}
})()))
{var statearr_42416_42420 = state;(statearr_42416_42420[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$782.cljs$core$IFn$_invoke$arity$1(exception_frame));
{
var G__42421 = state;
state = G__42421;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3531__auto__ = exception;if(cljs.core.truth_(and__3531__auto__))
{var and__3531__auto____$1 = cljs.core.not(catch_block);if(and__3531__auto____$1)
{return cljs.core.constant$keyword$780.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__3531__auto____$1;
}
} else
{return and__3531__auto__;
}
})()))
{var statearr_42417 = state;(statearr_42417[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$780.cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_42417[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$780,null));
return statearr_42417;
} else
{if(cljs.core.truth_((function (){var and__3531__auto__ = cljs.core.not(exception);if(and__3531__auto__)
{return cljs.core.constant$keyword$780.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__3531__auto__;
}
})()))
{var statearr_42418 = state;(statearr_42418[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$780.cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_42418[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$780,null));
return statearr_42418;
} else
{if((cljs.core.not(exception)) && (cljs.core.not(cljs.core.constant$keyword$780.cljs$core$IFn$_invoke$arity$1(exception_frame))))
{var statearr_42419 = state;(statearr_42419[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$781.cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_42419[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$782.cljs$core$IFn$_invoke$arity$1(exception_frame));
return statearr_42419;
} else
{if(cljs.core.constant$keyword$768)
{if(false)
{return null;
} else
{throw (new Error(("Assert failed: No matching clause\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([false], 0))))));
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
