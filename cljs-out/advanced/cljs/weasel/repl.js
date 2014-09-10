// Compiled by ClojureScript 0.0-2268
goog.provide('weasel.repl');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.browser.event');
goog.require('weasel.impls.websocket');
goog.require('weasel.impls.websocket');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('clojure.browser.net');
goog.require('clojure.browser.net');
goog.require('clojure.browser.event');
goog.require('clojure.browser.event');
weasel.repl.ws_connection = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
weasel.repl.alive_QMARK_ = (function alive_QMARK_(){return !((cljs.core.deref(weasel.repl.ws_connection) == null));
});
weasel.repl.process_message = (function (){var method_table__4407__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4408__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var method_cache__4409__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4410__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4411__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$1065,cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("process-message",cljs.core.constant$keyword$1142,cljs.core.constant$keyword$779,hierarchy__4411__auto__,method_table__4407__auto__,prefer_table__4408__auto__,method_cache__4409__auto__,cached_hierarchy__4410__auto__));
})();
weasel.repl.process_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$1143,(function (message){return console.error(("Websocket REPL error "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$822.cljs$core$IFn$_invoke$arity$1(message))));
}));
weasel.repl.process_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$1144,(function (message){var code = cljs.core.constant$keyword$1145.cljs$core$IFn$_invoke$arity$1(message);return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1142,cljs.core.constant$keyword$1146,cljs.core.constant$keyword$853,(function (){try{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1147,cljs.core.constant$keyword$936,cljs.core.constant$keyword$853,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(eval(code)))], null);
}catch (e43697){if((e43697 instanceof Error))
{var e = e43697;return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1147,cljs.core.constant$keyword$1149,cljs.core.constant$keyword$853,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([e], 0)),cljs.core.constant$keyword$1148,(cljs.core.truth_(e.hasOwnProperty("stack"))?e.stack:"No stacktrace available.")], null);
} else
{if(cljs.core.constant$keyword$778)
{var e = e43697;return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1147,cljs.core.constant$keyword$1149,cljs.core.constant$keyword$853,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([e], 0)),cljs.core.constant$keyword$1148,"No stacktrace available."], null);
} else
{return null;
}
}
}})()], null);
}));
weasel.repl.repl_print = (function repl_print(x){var temp__4124__auto__ = cljs.core.deref(weasel.repl.ws_connection);if(cljs.core.truth_(temp__4124__auto__))
{var conn = temp__4124__auto__;return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(weasel.repl.ws_connection),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1142,cljs.core.constant$keyword$1150,cljs.core.constant$keyword$853,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0))], null));
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
weasel.repl.connect = (function() { 
var connect__delegate = function (repl_server_url,p__43698){var map__43701 = p__43698;var map__43701__$1 = ((cljs.core.seq_QMARK_(map__43701))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43701):map__43701);var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43701__$1,cljs.core.constant$keyword$1151);var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43701__$1,cljs.core.constant$keyword$1152);var on_open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43701__$1,cljs.core.constant$keyword$1153);var verbose = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43701__$1,cljs.core.constant$keyword$1154,true);var repl_connection = weasel.impls.websocket.websocket_connection.cljs$core$IFn$_invoke$arity$0();cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(weasel.repl.ws_connection,cljs.core.constantly(repl_connection));
clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.constant$keyword$1155,((function (repl_connection,map__43701,map__43701__$1,on_close,on_error,on_open,verbose){
return (function (evt){clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$2(repl_connection,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1142,cljs.core.constant$keyword$1156], null)], 0)));
if(cljs.core.truth_(verbose))
{console.info("Opened Websocket REPL connection");
} else
{}
if(cljs.core.fn_QMARK_(on_open))
{return (on_open.cljs$core$IFn$_invoke$arity$0 ? on_open.cljs$core$IFn$_invoke$arity$0() : on_open.call(null));
} else
{return null;
}
});})(repl_connection,map__43701,map__43701__$1,on_close,on_error,on_open,verbose))
);
clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.constant$keyword$1157,((function (repl_connection,map__43701,map__43701__$1,on_close,on_error,on_open,verbose){
return (function (evt){var map__43702 = cljs.reader.read_string(evt.message);var map__43702__$1 = ((cljs.core.seq_QMARK_(map__43702))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43702):map__43702);var message = map__43702__$1;var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43702__$1,cljs.core.constant$keyword$1142);var response = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(weasel.repl.process_message.cljs$core$IFn$_invoke$arity$1 ? weasel.repl.process_message.cljs$core$IFn$_invoke$arity$1(message) : weasel.repl.process_message.call(null,message))], 0));return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$2(repl_connection,response);
});})(repl_connection,map__43701,map__43701__$1,on_close,on_error,on_open,verbose))
);
clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.constant$keyword$1158,((function (repl_connection,map__43701,map__43701__$1,on_close,on_error,on_open,verbose){
return (function (evt){cljs.core.reset_BANG_(weasel.repl.ws_connection,null);
if(cljs.core.truth_(verbose))
{console.info("Closed Websocket REPL connection");
} else
{}
if(cljs.core.fn_QMARK_(on_close))
{return (on_close.cljs$core$IFn$_invoke$arity$0 ? on_close.cljs$core$IFn$_invoke$arity$0() : on_close.call(null));
} else
{return null;
}
});})(repl_connection,map__43701,map__43701__$1,on_close,on_error,on_open,verbose))
);
clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.constant$keyword$1143,((function (repl_connection,map__43701,map__43701__$1,on_close,on_error,on_open,verbose){
return (function (evt){if(cljs.core.truth_(verbose))
{console.error("WebSocket error",evt);
} else
{}
if(cljs.core.fn_QMARK_(on_error))
{return (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(evt) : on_error.call(null,evt));
} else
{return null;
}
});})(repl_connection,map__43701,map__43701__$1,on_close,on_error,on_open,verbose))
);
return clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$2(repl_connection,repl_server_url);
};
var connect = function (repl_server_url,var_args){
var p__43698 = null;if (arguments.length > 1) {
  p__43698 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return connect__delegate.call(this,repl_server_url,p__43698);};
connect.cljs$lang$maxFixedArity = 1;
connect.cljs$lang$applyTo = (function (arglist__43703){
var repl_server_url = cljs.core.first(arglist__43703);
var p__43698 = cljs.core.rest(arglist__43703);
return connect__delegate(repl_server_url,p__43698);
});
connect.cljs$core$IFn$_invoke$arity$variadic = connect__delegate;
return connect;
})()
;
