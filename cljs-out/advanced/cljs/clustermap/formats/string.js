// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.formats.string');
goog.require('cljs.core');
/**
* @param {...*} var_args
*/
clustermap.formats.string.pluralize = (function() { 
var pluralize__delegate = function (n,word,p__40462){var vec__40464 = p__40462;var irreg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40464,(0),null);if((n === (1)))
{return word;
} else
{var or__3558__auto__ = irreg;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(word)+"s");
}
}
};
var pluralize = function (n,word,var_args){
var p__40462 = null;if (arguments.length > 2) {
  p__40462 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return pluralize__delegate.call(this,n,word,p__40462);};
pluralize.cljs$lang$maxFixedArity = 2;
pluralize.cljs$lang$applyTo = (function (arglist__40465){
var n = cljs.core.first(arglist__40465);
arglist__40465 = cljs.core.next(arglist__40465);
var word = cljs.core.first(arglist__40465);
var p__40462 = cljs.core.rest(arglist__40465);
return pluralize__delegate(n,word,p__40462);
});
pluralize.cljs$core$IFn$_invoke$arity$variadic = pluralize__delegate;
return pluralize;
})()
;
