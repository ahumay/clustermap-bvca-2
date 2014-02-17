// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.async');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
/**
* asynchronously maps a function over some colls
* @param {...*} var_args
*/
clustermap.async.map_async = (function() { 
var map_async__delegate = function (f,colls){var coll_chs = cljs.core.map.call(null,(function (coll){var ch = cljs.core.async.chan.call(null);cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
}),colls);return cljs.core.async.map.call(null,f,coll_chs);
};
var map_async = function (f,var_args){
var colls = null;if (arguments.length > 1) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return map_async__delegate.call(this,f,colls);};
map_async.cljs$lang$maxFixedArity = 1;
map_async.cljs$lang$applyTo = (function (arglist__32413){
var f = cljs.core.first(arglist__32413);
var colls = cljs.core.rest(arglist__32413);
return map_async__delegate(f,colls);
});
map_async.cljs$core$IFn$_invoke$arity$variadic = map_async__delegate;
return map_async;
})()
;
/**
* async consume all values from a channel
* @param {...*} var_args
*/
clustermap.async.dorun_async = (function() { 
var dorun_async__delegate = function (ch,p__32414){var map__32474 = p__32414;var map__32474__$1 = ((cljs.core.seq_QMARK_.call(null,map__32474))?cljs.core.apply.call(null,cljs.core.hash_map,map__32474):map__32474);var delay = cljs.core.get.call(null,map__32474__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__32474__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___32533 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32503){var state_val_32504 = (state_32503[1]);if((state_val_32504 === 1))
{var state_32503__$1 = state_32503;var statearr_32505_32534 = state_32503__$1;(statearr_32505_32534[2] = null);
(statearr_32505_32534[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32504 === 2))
{var state_32503__$1 = state_32503;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32503__$1,4,ch);
} else
{if((state_val_32504 === 3))
{var inst_32501 = (state_32503[2]);var state_32503__$1 = state_32503;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32503__$1,inst_32501);
} else
{if((state_val_32504 === 4))
{var inst_32477 = (state_32503[7]);var inst_32477__$1 = (state_32503[2]);var state_32503__$1 = (function (){var statearr_32506 = state_32503;(statearr_32506[7] = inst_32477__$1);
return statearr_32506;
})();if(cljs.core.truth_(inst_32477__$1))
{var statearr_32507_32535 = state_32503__$1;(statearr_32507_32535[1] = 5);
} else
{var statearr_32508_32536 = state_32503__$1;(statearr_32508_32536[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32504 === 5))
{var state_32503__$1 = state_32503;if(cljs.core.truth_(delay))
{var statearr_32509_32537 = state_32503__$1;(statearr_32509_32537[1] = 8);
} else
{var statearr_32510_32538 = state_32503__$1;(statearr_32510_32538[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32504 === 6))
{var state_32503__$1 = state_32503;var statearr_32511_32539 = state_32503__$1;(statearr_32511_32539[2] = null);
(statearr_32511_32539[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32504 === 7))
{var inst_32494 = (state_32503[2]);var state_32503__$1 = state_32503;if(cljs.core.truth_(inst_32494))
{var statearr_32512_32540 = state_32503__$1;(statearr_32512_32540[1] = 15);
} else
{var statearr_32513_32541 = state_32503__$1;(statearr_32513_32541[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32504 === 8))
{var inst_32480 = cljs.core.async.timeout.call(null,delay);var state_32503__$1 = state_32503;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32503__$1,11,inst_32480);
} else
{if((state_val_32504 === 9))
{var state_32503__$1 = state_32503;var statearr_32514_32542 = state_32503__$1;(statearr_32514_32542[2] = null);
(statearr_32514_32542[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32504 === 10))
{var inst_32485 = (state_32503[2]);var state_32503__$1 = (function (){var statearr_32515 = state_32503;(statearr_32515[8] = inst_32485);
return statearr_32515;
})();if(cljs.core.truth_(log))
{var statearr_32516_32543 = state_32503__$1;(statearr_32516_32543[1] = 12);
} else
{var statearr_32517_32544 = state_32503__$1;(statearr_32517_32544[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32504 === 11))
{var inst_32482 = (state_32503[2]);var state_32503__$1 = state_32503;var statearr_32518_32545 = state_32503__$1;(statearr_32518_32545[2] = inst_32482);
(statearr_32518_32545[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32504 === 12))
{var inst_32477 = (state_32503[7]);var inst_32487 = cljs.core.clj__GT_js.call(null,inst_32477);var inst_32488 = console.log(inst_32487);var state_32503__$1 = state_32503;var statearr_32519_32546 = state_32503__$1;(statearr_32519_32546[2] = inst_32488);
(statearr_32519_32546[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32504 === 13))
{var state_32503__$1 = state_32503;var statearr_32520_32547 = state_32503__$1;(statearr_32520_32547[2] = null);
(statearr_32520_32547[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32504 === 14))
{var inst_32477 = (state_32503[7]);var inst_32491 = (state_32503[2]);var state_32503__$1 = (function (){var statearr_32521 = state_32503;(statearr_32521[9] = inst_32491);
return statearr_32521;
})();var statearr_32522_32548 = state_32503__$1;(statearr_32522_32548[2] = inst_32477);
(statearr_32522_32548[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32504 === 15))
{var state_32503__$1 = state_32503;var statearr_32523_32549 = state_32503__$1;(statearr_32523_32549[2] = null);
(statearr_32523_32549[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32504 === 16))
{var state_32503__$1 = state_32503;var statearr_32524_32550 = state_32503__$1;(statearr_32524_32550[2] = null);
(statearr_32524_32550[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32504 === 17))
{var inst_32499 = (state_32503[2]);var state_32503__$1 = state_32503;var statearr_32525_32551 = state_32503__$1;(statearr_32525_32551[2] = inst_32499);
(statearr_32525_32551[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_32529 = [null,null,null,null,null,null,null,null,null,null];(statearr_32529[0] = state_machine__5507__auto__);
(statearr_32529[1] = 1);
return statearr_32529;
});
var state_machine__5507__auto____1 = (function (state_32503){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32503);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32530){if((e32530 instanceof Object))
{var ex__5510__auto__ = e32530;var statearr_32531_32552 = state_32503;(statearr_32531_32552[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32503);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32530;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32553 = state_32503;
state_32503 = G__32553;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32503){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32532 = f__5522__auto__.call(null);(statearr_32532[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___32533);
return statearr_32532;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__32414 = null;if (arguments.length > 1) {
  p__32414 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__32414);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__32554){
var ch = cljs.core.first(arglist__32554);
var p__32414 = cljs.core.rest(arglist__32554);
return dorun_async__delegate(ch,p__32414);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;
