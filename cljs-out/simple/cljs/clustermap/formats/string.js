// Compiled by ClojureScript 0.0-2268
goog.provide('clustermap.formats.string');
goog.require('cljs.core');
/**
* @param {...*} var_args
*/
clustermap.formats.string.pluralize = (function() { 
var pluralize__delegate = function (n,word,p__26349){var vec__26351 = p__26349;var irreg = cljs.core.nth.call(null,vec__26351,(0),null);if((n === (1)))
{return word;
} else
{var or__3543__auto__ = irreg;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(word)+"s");
}
}
};
var pluralize = function (n,word,var_args){
var p__26349 = null;if (arguments.length > 2) {
  p__26349 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return pluralize__delegate.call(this,n,word,p__26349);};
pluralize.cljs$lang$maxFixedArity = 2;
pluralize.cljs$lang$applyTo = (function (arglist__26352){
var n = cljs.core.first(arglist__26352);
arglist__26352 = cljs.core.next(arglist__26352);
var word = cljs.core.first(arglist__26352);
var p__26349 = cljs.core.rest(arglist__26352);
return pluralize__delegate(n,word,p__26349);
});
pluralize.cljs$core$IFn$_invoke$arity$variadic = pluralize__delegate;
return pluralize;
})()
;
