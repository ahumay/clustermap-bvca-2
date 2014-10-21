// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.formats.money');
goog.require('cljs.core');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.number');
clustermap.formats.money.money_suffixes = new cljs.core.PersistentArrayMap(null, 5, [(0),"",(3),"k",(6),"m",(9),"bn",(12),"tn"], null);
/**
* take an exponent and return a suffix
*/
clustermap.formats.money.money_suffix = (function money_suffix(exp){var or__3637__auto__ = (function (){var G__57342 = exp;return (clustermap.formats.money.money_suffixes.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.money.money_suffixes.cljs$core$IFn$_invoke$arity$1(G__57342) : clustermap.formats.money.money_suffixes.call(null,G__57342));
})();if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return ("x10^"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(exp));
}
});
/**
* format human readable money amount
* :sf - number of significant figures
* :curr - currency symbol
* :plus? - use a plus prefix for +ve amounts
* :default - default result when (nil? n)
* @param {...*} var_args
*/
clustermap.formats.money.readable = (function() { 
var readable__delegate = function (n,p__57343){var map__57347 = p__57343;var map__57347__$1 = ((cljs.core.seq_QMARK_(map__57347))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57347):map__57347);var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57347__$1,cljs.core.constant$keyword$1111);var plus_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57347__$1,cljs.core.constant$keyword$1316);var curr = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57347__$1,cljs.core.constant$keyword$1318,"\u00A3");var sf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57347__$1,cljs.core.constant$keyword$1315);if(cljs.core.truth_(n))
{var vec__57348 = clustermap.formats.number.eng_notation.cljs$core$IFn$_invoke$arity$variadic(n,cljs.core.array_seq([cljs.core.constant$keyword$1315,sf], 0));var sig = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57348,(0),null);var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57348,(1),null);var abs_sig = (function (){var G__57349 = sig;return Math.abs(G__57349);
})();var suffix = clustermap.formats.money.money_suffix(exp);return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var and__3625__auto__ = plus_QMARK_;if(cljs.core.truth_(and__3625__auto__))
{return (sig > (0));
} else
{return and__3625__auto__;
}
})())?"+":(((sig < (0)))?"-":null)),curr,abs_sig,suffix], null)));
} else
{return default$;
}
};
var readable = function (n,var_args){
var p__57343 = null;if (arguments.length > 1) {
  p__57343 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return readable__delegate.call(this,n,p__57343);};
readable.cljs$lang$maxFixedArity = 1;
readable.cljs$lang$applyTo = (function (arglist__57350){
var n = cljs.core.first(arglist__57350);
var p__57343 = cljs.core.rest(arglist__57350);
return readable__delegate(n,p__57343);
});
readable.cljs$core$IFn$_invoke$arity$variadic = readable__delegate;
return readable;
})()
;
clustermap.formats.money.fmoney = clustermap.formats.money.readable;
