// Compiled by ClojureScript 0.0-2227
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [7,0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [9,0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [12,3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,0], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3539__auto__ = cljs.core.some.call(null,(function (p__12215){var vec__12216 = p__12215;var z = cljs.core.nth.call(null,vec__12216,0,null);var t = cljs.core.nth.call(null,vec__12216,1,null);if(cljs.core.truth_((function (){var and__3527__auto__ = z;if(cljs.core.truth_(and__3527__auto__))
{return (zoom <= z);
} else
{return and__3527__auto__;
}
})()))
{return t;
} else
{return null;
}
}),clustermap.boundarylines.zoom_tolerances);if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return 0;
}
});
clustermap.boundarylines.best_available_tolerance = (function best_available_tolerance(zoom,available_tolerances){var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var coarser = cljs.core.reverse.call(null,cljs.core.filter.call(null,((function (i_tol){
return (function (t){return (t > i_tol);
});})(i_tol))
,cljs.core.map.call(null,cljs.core.last,clustermap.boundarylines.zoom_tolerances)));var finer = cljs.core.filter.call(null,((function (i_tol,coarser){
return (function (t){return (t < i_tol);
});})(i_tol,coarser))
,cljs.core.map.call(null,cljs.core.last,clustermap.boundarylines.zoom_tolerances));var avail_set = cljs.core.set.call(null,available_tolerances);var or__3539__auto__ = cljs.core.get.call(null,avail_set,i_tol);if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = cljs.core.some.call(null,avail_set,finer);if(cljs.core.truth_(or__3539__auto____$1))
{return or__3539__auto____$1;
} else
{return cljs.core.some.call(null,avail_set,coarser);
}
}
});
/**
* fetch a boundaryline for a given tolerance and add it to the cache
*/
clustermap.boundarylines.fetch_boundaryline = (function fetch_boundaryline(app_state,korks,boundaryline_id,tolerance){var comm = clustermap.api.boundarylines.call(null,boundaryline_id,tolerance,new cljs.core.Keyword(null,"raw","raw",1014016922),true);var use_korks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));var path = cljs.core.concat.call(null,use_korks,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id,tolerance], null));var c__5689__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto__,comm,use_korks,path){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto__,comm,use_korks,path){
return (function (state_12236){var state_val_12237 = (state_12236[1]);if((state_val_12237 === 2))
{var inst_12232 = (state_12236[2]);var inst_12233 = (function (){var bl = inst_12232;return ((function (bl,inst_12232,state_val_12237,c__5689__auto__,comm,use_korks,path){
return (function (old){return bl;
});
;})(bl,inst_12232,state_val_12237,c__5689__auto__,comm,use_korks,path))
})();var inst_12234 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,path,inst_12233);var state_12236__$1 = state_12236;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12236__$1,inst_12234);
} else
{if((state_val_12237 === 1))
{var state_12236__$1 = state_12236;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12236__$1,2,comm);
} else
{return null;
}
}
});})(c__5689__auto__,comm,use_korks,path))
;return ((function (switch__5674__auto__,c__5689__auto__,comm,use_korks,path){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_12241 = [null,null,null,null,null,null,null];(statearr_12241[0] = state_machine__5675__auto__);
(statearr_12241[1] = 1);
return statearr_12241;
});
var state_machine__5675__auto____1 = (function (state_12236){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_12236);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e12242){if((e12242 instanceof Object))
{var ex__5678__auto__ = e12242;var statearr_12243_12245 = state_12236;(statearr_12243_12245[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12236);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12242;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12246 = state_12236;
state_12236 = G__12246;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_12236){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_12236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto__,comm,use_korks,path))
})();var state__5691__auto__ = (function (){var statearr_12244 = f__5690__auto__.call(null);(statearr_12244[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto__);
return statearr_12244;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto__,comm,use_korks,path))
);
return c__5689__auto__;
});
/**
* gets the best boundaryline version for a zoom level...
* if the best isn't available, fetches it async and immediately
* returns the next best available
* - default : default value to return if nothing currently available
* - min-zoom : if (<= zoom min-zoom) do nothing and return the default
* returns [tolerance, boundaryline] or default if nothing is available or
* (<= zoom min-zoom)
* @param {...*} var_args
*/
clustermap.boundarylines.get_or_fetch_best_boundaryline = (function() { 
var get_or_fetch_best_boundaryline__delegate = function (app_state,korks,boundaryline_id,zoom,p__12247){var map__12249 = p__12247;var map__12249__$1 = ((cljs.core.seq_QMARK_.call(null,map__12249))?cljs.core.apply.call(null,cljs.core.hash_map,map__12249):map__12249);var min_zoom = cljs.core.get.call(null,map__12249__$1,new cljs.core.Keyword(null,"min-zoom","min-zoom",3894785504));if(cljs.core.truth_((function (){var and__3527__auto__ = min_zoom;if(cljs.core.truth_(and__3527__auto__))
{return (zoom <= min_zoom);
} else
{return and__3527__auto__;
}
})()))
{return null;
} else
{var use_korks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));var boundarylines = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),use_korks);var bl_versions = cljs.core.get.call(null,boundarylines,boundaryline_id);var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var use_tol = clustermap.boundarylines.best_available_tolerance.call(null,zoom,cljs.core.keys.call(null,bl_versions));var use_bl = cljs.core.get_in.call(null,boundarylines,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id,use_tol], null));if(cljs.core.not_EQ_.call(null,i_tol,use_tol))
{clustermap.boundarylines.fetch_boundaryline.call(null,app_state,korks,boundaryline_id,i_tol);
} else
{}
if(cljs.core.truth_(use_bl))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [use_tol,use_bl], null);
} else
{return null;
}
}
};
var get_or_fetch_best_boundaryline = function (app_state,korks,boundaryline_id,zoom,var_args){
var p__12247 = null;if (arguments.length > 4) {
  p__12247 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return get_or_fetch_best_boundaryline__delegate.call(this,app_state,korks,boundaryline_id,zoom,p__12247);};
get_or_fetch_best_boundaryline.cljs$lang$maxFixedArity = 4;
get_or_fetch_best_boundaryline.cljs$lang$applyTo = (function (arglist__12250){
var app_state = cljs.core.first(arglist__12250);
arglist__12250 = cljs.core.next(arglist__12250);
var korks = cljs.core.first(arglist__12250);
arglist__12250 = cljs.core.next(arglist__12250);
var boundaryline_id = cljs.core.first(arglist__12250);
arglist__12250 = cljs.core.next(arglist__12250);
var zoom = cljs.core.first(arglist__12250);
var p__12247 = cljs.core.rest(arglist__12250);
return get_or_fetch_best_boundaryline__delegate(app_state,korks,boundaryline_id,zoom,p__12247);
});
get_or_fetch_best_boundaryline.cljs$core$IFn$_invoke$arity$variadic = get_or_fetch_best_boundaryline__delegate;
return get_or_fetch_best_boundaryline;
})()
;
