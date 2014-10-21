// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.formats.number');
goog.require('cljs.core');
goog.require('goog.string.format');
goog.require('goog.string');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.string');
clustermap.formats.number.round_decimal = (function round_decimal(n,dec_places){if(cljs.core.truth_(dec_places))
{return ((function (){var G__69306 = (n * (function (){var G__69307 = (10);var G__69308 = dec_places;return Math.pow(G__69307,G__69308);
})());return Math.round(G__69306);
})() / (function (){var G__69309 = (10);var G__69310 = dec_places;return Math.pow(G__69309,G__69310);
})());
} else
{return n;
}
});
clustermap.formats.number.prefix_sign = (function prefix_sign(n_str,n,plus_QMARK_){if((n < (0)))
{return ("-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_str));
} else
{if(cljs.core.truth_((function (){var and__3625__auto__ = plus_QMARK_;if(cljs.core.truth_(and__3625__auto__))
{return (n > (0));
} else
{return and__3625__auto__;
}
})()))
{return ("+"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_str));
} else
{return n_str;

}
}
});
clustermap.formats.number.split_thousands = (function split_thousands(n_str){return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__69311_SHARP_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__69311_SHARP_);
}),cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse,cljs.core.partition.cljs$core$IFn$_invoke$arity$4((3),(3),cljs.core.PersistentVector.EMPTY,cljs.core.reverse(n_str))))));
});
/**
* splits a number into a [coefficient, exponent] pair, where
* exponent is a multiple of 3
* :sf : # of significant figures
* @param {...*} var_args
*/
clustermap.formats.number.eng_notation = (function() { 
var eng_notation__delegate = function (n,p__69312){var map__69324 = p__69312;var map__69324__$1 = ((cljs.core.seq_QMARK_(map__69324))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69324):map__69324);var sf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69324__$1,cljs.core.constant$keyword$1315);if(cljs.core.truth_(n))
{var sign = (((n > (0)))?(1):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(0)))?(0):(((n < (0)))?(-1):null)));var abs_n = (function (){var G__69328 = n;return Math.abs(G__69328);
})();var vec__69325 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(abs_n)).split(".");var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69325,(0),null);var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69325,(1),null);var exp = (((abs_n >= (1)))?((3) * (((cljs.core.count(i) - (1)) / (3)) | (0))):(((abs_n > (0)))?((-3) * ((((3) + cljs.core.count(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (sign,abs_n,vec__69325,i,d,map__69324,map__69324__$1,sf){
return (function (c){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"0");
});})(sign,abs_n,vec__69325,i,d,map__69324,map__69324__$1,sf))
,d))) / (3)) | (0))):(0)
));var usig = (abs_n * (function (){var G__69329 = (10);var G__69330 = ((-1) * exp);return Math.pow(G__69329,G__69330);
})());var vec__69326 = (cljs.core.truth_(sf)?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(usig)).split("."):null);var usig_i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69326,(0),null);var usig_d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69326,(1),null);var sigmult = (cljs.core.truth_((function (){var and__3625__auto__ = sf;if(cljs.core.truth_(and__3625__auto__))
{return (usig > (0));
} else
{return and__3625__auto__;
}
})())?(function (){var G__69331 = (10);var G__69332 = (cljs.core.count(usig_i) - sf);return Math.pow(G__69331,G__69332);
})():null);var round_usig_str = (cljs.core.truth_(sigmult)?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((sigmult * (function (){var G__69333 = (usig / sigmult);return Math.round(G__69333);
})()))):null);var vec__69327 = (cljs.core.truth_(round_usig_str)?round_usig_str.split("."):null);var round_usig_i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69327,(0),null);var round_usig_d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69327,(1),null);var trunc_usig_str = (cljs.core.truth_(round_usig_str)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.flatten(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take.cljs$core$IFn$_invoke$arity$2(sf,round_usig_i),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.count(round_usig_i) - sf),"0"),(((cljs.core.count(round_usig_d) > (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".",cljs.core.take.cljs$core$IFn$_invoke$arity$2((sf - cljs.core.count(round_usig_i)),round_usig_d)], null):null)], null))))):null);var trunc_usig = (cljs.core.truth_(trunc_usig_str)?(function (){var G__69334 = trunc_usig_str;return parseFloat(G__69334);
})():null);var sig = (sign * (function (){var or__3637__auto__ = trunc_usig;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return usig;
}
})());return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig,exp], null);
} else
{return null;
}
};
var eng_notation = function (n,var_args){
var p__69312 = null;if (arguments.length > 1) {
  p__69312 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return eng_notation__delegate.call(this,n,p__69312);};
eng_notation.cljs$lang$maxFixedArity = 1;
eng_notation.cljs$lang$applyTo = (function (arglist__69335){
var n = cljs.core.first(arglist__69335);
var p__69312 = cljs.core.rest(arglist__69335);
return eng_notation__delegate(n,p__69312);
});
eng_notation.cljs$core$IFn$_invoke$arity$variadic = eng_notation__delegate;
return eng_notation;
})()
;
/**
* format a human readable number, with commas between groups of thousands
* :dec - number of decimal places
* :plus? - include a leading + for positive numbers
* :default - default result when (nil? n)
* @param {...*} var_args
*/
clustermap.formats.number.readable = (function() { 
var readable__delegate = function (n,p__69336){var map__69340 = p__69336;var map__69340__$1 = ((cljs.core.seq_QMARK_(map__69340))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69340):map__69340);var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69340__$1,cljs.core.constant$keyword$1111);var plus_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69340__$1,cljs.core.constant$keyword$1316);var dec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69340__$1,cljs.core.constant$keyword$1317);if(cljs.core.truth_(n))
{var abs_n = (function (){var G__69342 = n;return Math.abs(G__69342);
})();var round_n = clustermap.formats.number.round_decimal(abs_n,dec);var round_n_str = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(round_n));var vec__69341 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(round_n_str,/\./);var i_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69341,(0),null);var d_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69341,(1),null);var t_str = clustermap.formats.number.split_thousands(i_str);var t_dec_str = clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t_str,d_str], null)));return clustermap.formats.number.prefix_sign(t_dec_str,n,plus_QMARK_);
} else
{return default$;
}
};
var readable = function (n,var_args){
var p__69336 = null;if (arguments.length > 1) {
  p__69336 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return readable__delegate.call(this,n,p__69336);};
readable.cljs$lang$maxFixedArity = 1;
readable.cljs$lang$applyTo = (function (arglist__69343){
var n = cljs.core.first(arglist__69343);
var p__69336 = cljs.core.rest(arglist__69343);
return readable__delegate(n,p__69336);
});
readable.cljs$core$IFn$_invoke$arity$variadic = readable__delegate;
return readable;
})()
;
clustermap.formats.number.fnum = clustermap.formats.number.readable;
