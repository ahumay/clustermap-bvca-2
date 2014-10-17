// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.formats.string');
goog.require('cljs.core');
/**
* @param {...*} var_args
*/
clustermap.formats.string.pluralize = (function() { 
var pluralize__delegate = function (n,word,p__21983){var vec__21985 = p__21983;var irreg = cljs.core.nth.call(null,vec__21985,(0),null);if((n === (1)))
{return word;
} else
{var or__7900__auto__ = irreg;if(cljs.core.truth_(or__7900__auto__))
{return or__7900__auto__;
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(word)+"s");
}
}
};
var pluralize = function (n,word,var_args){
var p__21983 = null;if (arguments.length > 2) {
  p__21983 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return pluralize__delegate.call(this,n,word,p__21983);};
pluralize.cljs$lang$maxFixedArity = 2;
pluralize.cljs$lang$applyTo = (function (arglist__21986){
var n = cljs.core.first(arglist__21986);
arglist__21986 = cljs.core.next(arglist__21986);
var word = cljs.core.first(arglist__21986);
var p__21983 = cljs.core.rest(arglist__21986);
return pluralize__delegate(n,word,p__21983);
});
pluralize.cljs$core$IFn$_invoke$arity$variadic = pluralize__delegate;
return pluralize;
})()
;

//# sourceMappingURL=string.js.map