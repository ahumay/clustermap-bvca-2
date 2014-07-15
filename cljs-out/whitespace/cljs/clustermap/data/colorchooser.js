// Compiled by ClojureScript 0.0-2261
goog.provide('clustermap.data.colorchooser');
goog.require('cljs.core');
goog.require('clustermap.data.picker');
goog.require('clustermap.data.picker');
clustermap.data.colorchooser.brewer_green = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#06d2c","#0441b"], null);
clustermap.data.colorchooser.linear_scale = (function linear_scale(min,max,steps){var step = ((max - min) / steps);return cljs.core.map.call(null,((function (step){
return (function (i){return (min + (i * step));
});})(step))
,cljs.core.range.call(null,(1),steps));
});
clustermap.data.colorchooser.log_scale = (function log_scale(min,max,steps){var log_min = Math.log.call(null,min);var log_max = Math.log.call(null,max);var log_linear_scale = clustermap.data.colorchooser.linear_scale.call(null,log_min,log_max,steps);return cljs.core.map.call(null,((function (log_min,log_max,log_linear_scale){
return (function (n){return Math.pow.call(null,Math.E,n);
});})(log_min,log_max,log_linear_scale))
,log_linear_scale);
});
clustermap.data.colorchooser.choose_from_scheme = (function choose_from_scheme(scheme,thresholds,value){var scheme_thresholds = cljs.core.map.call(null,cljs.core.vector,thresholds,scheme);var chosen = cljs.core.last.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,((function (scheme_thresholds){
return (function (p__13230){var vec__13231 = p__13230;var t = cljs.core.nth.call(null,vec__13231,(0),null);var i = cljs.core.nth.call(null,vec__13231,(1),null);return (value <= t);
});})(scheme_thresholds))
,scheme_thresholds)));var or__3543__auto__ = chosen;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.last.call(null,scheme);
}
});
/**
* return a map of {key-value => colours}
*/
clustermap.data.colorchooser.choose = (function choose(color_scheme,scale,key,variable,data){var col_count = cljs.core.count.call(null,color_scheme);var values = clustermap.data.picker.pick_variable.call(null,variable,data);var min_value = cljs.core.apply.call(null,cljs.core.min,values);var max_value = cljs.core.apply.call(null,cljs.core.max,values);var thresholds = ((cljs.core._EQ_.call(null,scale,new cljs.core.Keyword(null,"log","log",-1595516004)))?clustermap.data.colorchooser.log_scale.call(null,min_value,max_value,col_count):clustermap.data.colorchooser.linear_scale.call(null,min_value,max_value,col_count));var chooser = cljs.core.partial.call(null,clustermap.data.colorchooser.choose_from_scheme,color_scheme,thresholds);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (col_count,values,min_value,max_value,thresholds,chooser){
return (function (r){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,r,key),chooser.call(null,cljs.core.get.call(null,r,variable))], null);
});})(col_count,values,min_value,max_value,thresholds,chooser))
,data));
});