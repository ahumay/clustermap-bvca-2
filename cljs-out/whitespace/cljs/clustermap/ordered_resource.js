// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.ordered_resource');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.ordered_resource.IOrderedResource = (function (){var obj18012 = {};return obj18012;
})();
clustermap.ordered_resource.add_request = (function add_request(this$,ch){if((function (){var and__3546__auto__ = this$;if(and__3546__auto__)
{return this$.clustermap$ordered_resource$IOrderedResource$add_request$arity$2;
} else
{return and__3546__auto__;
}
})())
{return this$.clustermap$ordered_resource$IOrderedResource$add_request$arity$2(this$,ch);
} else
{var x__4185__auto__ = (((this$ == null))?null:this$);return (function (){var or__3558__auto__ = (clustermap.ordered_resource.add_request[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (clustermap.ordered_resource.add_request["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IOrderedResource.add-request",this$);
}
}
})().call(null,this$,ch);
}
});
clustermap.ordered_resource.get_response_chan = (function get_response_chan(this$){if((function (){var and__3546__auto__ = this$;if(and__3546__auto__)
{return this$.clustermap$ordered_resource$IOrderedResource$get_response_chan$arity$1;
} else
{return and__3546__auto__;
}
})())
{return this$.clustermap$ordered_resource$IOrderedResource$get_response_chan$arity$1(this$);
} else
{var x__4185__auto__ = (((this$ == null))?null:this$);return (function (){var or__3558__auto__ = (clustermap.ordered_resource.get_response_chan[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (clustermap.ordered_resource.get_response_chan["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IOrderedResource.get-response-chan",this$);
}
}
})().call(null,this$);
}
});
clustermap.ordered_resource.close = (function close(this$){if((function (){var and__3546__auto__ = this$;if(and__3546__auto__)
{return this$.clustermap$ordered_resource$IOrderedResource$close$arity$1;
} else
{return and__3546__auto__;
}
})())
{return this$.clustermap$ordered_resource$IOrderedResource$close$arity$1(this$);
} else
{var x__4185__auto__ = (((this$ == null))?null:this$);return (function (){var or__3558__auto__ = (clustermap.ordered_resource.close[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (clustermap.ordered_resource.close["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IOrderedResource.close",this$);
}
}
})().call(null,this$);
}
});

/**
* @constructor
*/
clustermap.ordered_resource.DiscardStaleResource = (function (name,ticket,response_chan){
this.name = name;
this.ticket = ticket;
this.response_chan = response_chan;
})
clustermap.ordered_resource.DiscardStaleResource.cljs$lang$type = true;
clustermap.ordered_resource.DiscardStaleResource.cljs$lang$ctorStr = "clustermap.ordered-resource/DiscardStaleResource";
clustermap.ordered_resource.DiscardStaleResource.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.ordered-resource/DiscardStaleResource");
});
clustermap.ordered_resource.DiscardStaleResource.prototype.clustermap$ordered_resource$IOrderedResource$ = true;
clustermap.ordered_resource.DiscardStaleResource.prototype.clustermap$ordered_resource$IOrderedResource$add_request$arity$2 = (function (this$,ch){var self__ = this;
var this$__$1 = this;var rq_ticket = cljs.core.swap_BANG_.call(null,self__.ticket,cljs.core.inc);var c__5708__auto___18041 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___18041,rq_ticket,this$__$1){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___18041,rq_ticket,this$__$1){
return (function (state_18027){var state_val_18028 = (state_18027[(1)]);if((state_val_18028 === (6)))
{var inst_18019 = (state_18027[(2)]);var state_18027__$1 = state_18027;var statearr_18029_18042 = state_18027__$1;(statearr_18029_18042[(2)] = inst_18019);
(statearr_18029_18042[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18028 === (5)))
{var inst_18025 = (state_18027[(2)]);var state_18027__$1 = state_18027;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18027__$1,inst_18025);
} else
{if((state_val_18028 === (4)))
{var inst_18021 = cljs.core.deref.call(null,self__.ticket);var inst_18022 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name)+": discarded result "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_18021));var inst_18023 = console.log(inst_18022);var state_18027__$1 = state_18027;var statearr_18030_18043 = state_18027__$1;(statearr_18030_18043[(2)] = inst_18023);
(statearr_18030_18043[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18028 === (3)))
{var inst_18014 = (state_18027[(7)]);var state_18027__$1 = state_18027;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18027__$1,(6),self__.response_chan,inst_18014);
} else
{if((state_val_18028 === (2)))
{var inst_18014 = (state_18027[(2)]);var inst_18015 = cljs.core.deref.call(null,self__.ticket);var inst_18016 = cljs.core._EQ_.call(null,rq_ticket,inst_18015);var state_18027__$1 = (function (){var statearr_18031 = state_18027;(statearr_18031[(7)] = inst_18014);
return statearr_18031;
})();if(inst_18016)
{var statearr_18032_18044 = state_18027__$1;(statearr_18032_18044[(1)] = (3));
} else
{var statearr_18033_18045 = state_18027__$1;(statearr_18033_18045[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18028 === (1)))
{var state_18027__$1 = state_18027;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18027__$1,(2),ch);
} else
{return null;
}
}
}
}
}
}
});})(c__5708__auto___18041,rq_ticket,this$__$1))
;return ((function (switch__5693__auto__,c__5708__auto___18041,rq_ticket,this$__$1){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_18037 = [null,null,null,null,null,null,null,null];(statearr_18037[(0)] = state_machine__5694__auto__);
(statearr_18037[(1)] = (1));
return statearr_18037;
});
var state_machine__5694__auto____1 = (function (state_18027){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_18027);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e18038){if((e18038 instanceof Object))
{var ex__5697__auto__ = e18038;var statearr_18039_18046 = state_18027;(statearr_18039_18046[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18027);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18038;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18047 = state_18027;
state_18027 = G__18047;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_18027){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_18027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___18041,rq_ticket,this$__$1))
})();var state__5710__auto__ = (function (){var statearr_18040 = f__5709__auto__.call(null);(statearr_18040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___18041);
return statearr_18040;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___18041,rq_ticket,this$__$1))
);
return null;
});
clustermap.ordered_resource.DiscardStaleResource.prototype.clustermap$ordered_resource$IOrderedResource$get_response_chan$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.response_chan;
});
clustermap.ordered_resource.DiscardStaleResource.prototype.clustermap$ordered_resource$IOrderedResource$close$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.async.close_BANG_.call(null,self__.response_chan);
});
clustermap.ordered_resource.__GT_DiscardStaleResource = (function __GT_DiscardStaleResource(name,ticket,response_chan){return (new clustermap.ordered_resource.DiscardStaleResource(name,ticket,response_chan));
});
/**
* creates an ordered-resource which will discard a response if
* a response to a later request has already been received
*/
clustermap.ordered_resource.make_discard_stale_resource = (function make_discard_stale_resource(name){return (new clustermap.ordered_resource.DiscardStaleResource(name,cljs.core.atom.call(null,(0)),cljs.core.async.chan.call(null)));
});
/**
* make an api call and put the result channel into an ordered-resource
* - ordered-resource : the ordered resources
* - api-fn : makes an api-call and returns a channel of a single result value
* - args : to be passed to the api-fn
* @param {...*} var_args
*/
clustermap.ordered_resource.api_call = (function() { 
var api_call__delegate = function (ordered_resource,api_fn,args){return clustermap.ordered_resource.add_request.call(null,ordered_resource,cljs.core.apply.call(null,api_fn,args));
};
var api_call = function (ordered_resource,api_fn,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return api_call__delegate.call(this,ordered_resource,api_fn,args);};
api_call.cljs$lang$maxFixedArity = 2;
api_call.cljs$lang$applyTo = (function (arglist__18048){
var ordered_resource = cljs.core.first(arglist__18048);
arglist__18048 = cljs.core.next(arglist__18048);
var api_fn = cljs.core.first(arglist__18048);
var args = cljs.core.rest(arglist__18048);
return api_call__delegate(ordered_resource,api_fn,args);
});
api_call.cljs$core$IFn$_invoke$arity$variadic = api_call__delegate;
return api_call;
})()
;
/**
* loop reading responses from the ordered-resource response channel
* and calling f with the response, for side-effects. stop when the
* response channel is closed
*/
clustermap.ordered_resource.retrieve_responses = (function retrieve_responses(ordered_resource,f){var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_18104){var state_val_18105 = (state_18104[(1)]);if((state_val_18105 === (7)))
{var inst_18095 = (state_18104[(2)]);var state_18104__$1 = state_18104;if(cljs.core.truth_(inst_18095))
{var statearr_18106_18125 = state_18104__$1;(statearr_18106_18125[(1)] = (8));
} else
{var statearr_18107_18126 = state_18104__$1;(statearr_18107_18126[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18105 === (1)))
{var state_18104__$1 = state_18104;var statearr_18108_18127 = state_18104__$1;(statearr_18108_18127[(2)] = null);
(statearr_18108_18127[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18105 === (4)))
{var inst_18090 = (state_18104[(7)]);var inst_18090__$1 = (state_18104[(2)]);var state_18104__$1 = (function (){var statearr_18109 = state_18104;(statearr_18109[(7)] = inst_18090__$1);
return statearr_18109;
})();if(cljs.core.truth_(inst_18090__$1))
{var statearr_18110_18128 = state_18104__$1;(statearr_18110_18128[(1)] = (5));
} else
{var statearr_18111_18129 = state_18104__$1;(statearr_18111_18129[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18105 === (6)))
{var state_18104__$1 = state_18104;var statearr_18112_18130 = state_18104__$1;(statearr_18112_18130[(2)] = null);
(statearr_18112_18130[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18105 === (3)))
{var inst_18102 = (state_18104[(2)]);var state_18104__$1 = state_18104;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18104__$1,inst_18102);
} else
{if((state_val_18105 === (2)))
{var inst_18088 = clustermap.ordered_resource.get_response_chan.call(null,ordered_resource);var state_18104__$1 = state_18104;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18104__$1,(4),inst_18088);
} else
{if((state_val_18105 === (9)))
{var state_18104__$1 = state_18104;var statearr_18113_18131 = state_18104__$1;(statearr_18113_18131[(2)] = null);
(statearr_18113_18131[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18105 === (5)))
{var inst_18090 = (state_18104[(7)]);var inst_18092 = f.call(null,inst_18090);var state_18104__$1 = (function (){var statearr_18114 = state_18104;(statearr_18114[(8)] = inst_18092);
return statearr_18114;
})();var statearr_18115_18132 = state_18104__$1;(statearr_18115_18132[(2)] = true);
(statearr_18115_18132[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18105 === (10)))
{var inst_18100 = (state_18104[(2)]);var state_18104__$1 = state_18104;var statearr_18116_18133 = state_18104__$1;(statearr_18116_18133[(2)] = inst_18100);
(statearr_18116_18133[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18105 === (8)))
{var state_18104__$1 = state_18104;var statearr_18117_18134 = state_18104__$1;(statearr_18117_18134[(2)] = null);
(statearr_18117_18134[(1)] = (2));
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
var state_machine__5694__auto____0 = (function (){var statearr_18121 = [null,null,null,null,null,null,null,null,null];(statearr_18121[(0)] = state_machine__5694__auto__);
(statearr_18121[(1)] = (1));
return statearr_18121;
});
var state_machine__5694__auto____1 = (function (state_18104){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_18104);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e18122){if((e18122 instanceof Object))
{var ex__5697__auto__ = e18122;var statearr_18123_18135 = state_18104;(statearr_18123_18135[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18104);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18122;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18136 = state_18104;
state_18104 = G__18136;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_18104){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_18104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_18124 = f__5709__auto__.call(null);(statearr_18124[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_18124;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});
