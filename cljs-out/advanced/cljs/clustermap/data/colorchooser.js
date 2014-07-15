// Compiled by ClojureScript 0.0-2261
goog.provide('clustermap.data.colorchooser');
goog.require('cljs.core');
goog.require('clustermap.data.picker');
goog.require('clustermap.data.picker');
clustermap.data.colorchooser.brewer_green = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#06d2c","#0441b"], null);
clustermap.data.colorchooser.linear_scale = (function linear_scale(min,max,steps){var step = ((max - min) / steps);return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (step){
return (function (i){return (min + (i * step));
});})(step))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),steps));
});
clustermap.data.colorchooser.log_scale = (function log_scale(min,max,steps){var log_min = (Math.log.cljs$core$IFn$_invoke$arity$1 ? Math.log.cljs$core$IFn$_invoke$arity$1(min) : Math.log.call(null,min));var log_max = (Math.log.cljs$core$IFn$_invoke$arity$1 ? Math.log.cljs$core$IFn$_invoke$arity$1(max) : Math.log.call(null,max));var log_linear_scale = clustermap.data.colorchooser.linear_scale(log_min,log_max,steps);return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (log_min,log_max,log_linear_scale){
return (function (n){return (Math.pow.cljs$core$IFn$_invoke$arity$2 ? Math.pow.cljs$core$IFn$_invoke$arity$2(Math.E,n) : Math.pow.call(null,Math.E,n));
});})(log_min,log_max,log_linear_scale))
,log_linear_scale);
});
clustermap.data.colorchooser.choose_from_scheme = (function choose_from_scheme(scheme,thresholds,value){var scheme_thresholds = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,thresholds,scheme);var chosen = cljs.core.last(cljs.core.first(cljs.core.filter(((function (scheme_thresholds){
return (function (p__35744){var vec__35745 = p__35744;var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35745,(0),null);var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35745,(1),null);return (value <= t);
});})(scheme_thresholds))
,scheme_thresholds)));var or__3543__auto__ = chosen;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.last(scheme);
}
});
/**
* return a map of {key-value => colours}
*/
clustermap.data.colorchooser.choose = (function choose(color_scheme,scale,key,variable,data){var col_count = cljs.core.count(color_scheme);var values = clustermap.data.picker.pick_variable(variable,data);var min_value = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,values);var max_value = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,values);var thresholds = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(scale,cljs.core.constant$keyword$867))?clustermap.data.colorchooser.log_scale(min_value,max_value,col_count):clustermap.data.colorchooser.linear_scale(min_value,max_value,col_count));var chooser = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clustermap.data.colorchooser.choose_from_scheme,color_scheme,thresholds);return cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (col_count,values,min_value,max_value,thresholds,chooser){
return (function (r){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,key),(chooser.cljs$core$IFn$_invoke$arity$1 ? chooser.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,variable)) : chooser.call(null,cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,variable)))], null);
});})(col_count,values,min_value,max_value,thresholds,chooser))
,data));
});
