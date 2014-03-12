// Compiled by ClojureScript 0.0-2173
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj17359 = {};return obj17359;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3429__auto__ = evt;if(and__3429__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3429__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4068__auto__ = (((evt == null))?null:evt);return (function (){var or__3441__auto__ = (domina.events.prevent_default[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.events.prevent_default["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3429__auto__ = evt;if(and__3429__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3429__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4068__auto__ = (((evt == null))?null:evt);return (function (){var or__3441__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3429__auto__ = evt;if(and__3429__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3429__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4068__auto__ = (((evt == null))?null:evt);return (function (){var or__3441__auto__ = (domina.events.target[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.events.target["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3429__auto__ = evt;if(and__3429__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3429__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4068__auto__ = (((evt == null))?null:evt);return (function (){var or__3441__auto__ = (domina.events.current_target[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.events.current_target["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3429__auto__ = evt;if(and__3429__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3429__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4068__auto__ = (((evt == null))?null:evt);return (function (){var or__3441__auto__ = (domina.events.event_type[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.events.event_type["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3429__auto__ = evt;if(and__3429__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3429__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4068__auto__ = (((evt == null))?null:evt);return (function (){var or__3441__auto__ = (domina.events.raw_event[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.events.raw_event["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t17363 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t17363 = (function (evt,f,create_listener_function,meta17364){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta17364 = meta17364;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t17363.cljs$lang$type = true;
domina.events.t17363.cljs$lang$ctorStr = "domina.events/t17363";
domina.events.t17363.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"domina.events/t17363");
});
domina.events.t17363.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t17363.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3441__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return not_found;
}
});
domina.events.t17363.prototype.domina$events$Event$ = true;
domina.events.t17363.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t17363.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t17363.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t17363.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t17363.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t17363.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t17363.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17365){var self__ = this;
var _17365__$1 = this;return self__.meta17364;
});
domina.events.t17363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17365,meta17364__$1){var self__ = this;
var _17365__$1 = this;return (new domina.events.t17363(self__.evt,self__.f,self__.create_listener_function,meta17364__$1));
});
domina.events.__GT_t17363 = (function __GT_t17363(evt__$1,f__$1,create_listener_function__$1,meta17364){return (new domina.events.t17363(evt__$1,f__$1,create_listener_function__$1,meta17364));
});
}
return (new domina.events.t17363(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4158__auto__ = (function iter__17370(s__17371){return (new cljs.core.LazySeq(null,(function (){var s__17371__$1 = s__17371;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__17371__$1);if(temp__4092__auto__)
{var s__17371__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17371__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__17371__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__17373 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__17372 = 0;while(true){
if((i__17372 < size__4157__auto__))
{var node = cljs.core._nth.call(null,c__4156__auto__,i__17372);cljs.core.chunk_append.call(null,b__17373,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__17374 = (i__17372 + 1);
i__17372 = G__17374;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17373),iter__17370.call(null,cljs.core.chunk_rest.call(null,s__17371__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17373),null);
}
} else
{var node = cljs.core.first.call(null,s__17371__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__17370.call(null,cljs.core.rest.call(null,s__17371__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,domina.nodes.call(null,content));
})());
});
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_BANG_ = (function() {
var listen_BANG_ = null;
var listen_BANG___2 = (function (type,listener){return listen_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,false);
});
listen_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_BANG___2.call(this,content,type);
case 3:
return listen_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_BANG___2;
listen_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_BANG___3;
return listen_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_BANG_ = (function() {
var capture_BANG_ = null;
var capture_BANG___2 = (function (type,listener){return capture_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,false);
});
capture_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_BANG___2.call(this,content,type);
case 3:
return capture_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
capture_BANG_.cljs$core$IFn$_invoke$arity$2 = capture_BANG___2;
capture_BANG_.cljs$core$IFn$_invoke$arity$3 = capture_BANG___3;
return capture_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_once_BANG_ = (function() {
var listen_once_BANG_ = null;
var listen_once_BANG___2 = (function (type,listener){return listen_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_once_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,true);
});
listen_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_once_BANG___2.call(this,content,type);
case 3:
return listen_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_once_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_once_BANG___2;
listen_once_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_once_BANG___3;
return listen_once_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_once_BANG_ = (function() {
var capture_once_BANG_ = null;
var capture_once_BANG___2 = (function (type,listener){return capture_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_once_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,true);
});
capture_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_once_BANG___2.call(this,content,type);
case 3:
return capture_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
capture_once_BANG_.cljs$core$IFn$_invoke$arity$2 = capture_once_BANG___2;
capture_once_BANG_.cljs$core$IFn$_invoke$arity$3 = capture_once_BANG___3;
return capture_once_BANG_;
})()
;
/**
* Removes event listeners from each node in the content. If a listener type is supplied, removes only listeners of that type. If content is omitted, it will remove listeners from the document's root element.
*/
domina.events.unlisten_BANG_ = (function() {
var unlisten_BANG_ = null;
var unlisten_BANG___0 = (function (){return unlisten_BANG_.call(null,domina.events.root_element);
});
var unlisten_BANG___1 = (function (content){var seq__17383 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17384 = null;var count__17385 = 0;var i__17386 = 0;while(true){
if((i__17386 < count__17385))
{var node = cljs.core._nth.call(null,chunk__17384,i__17386);goog.events.removeAll(node);
{
var G__17391 = seq__17383;
var G__17392 = chunk__17384;
var G__17393 = count__17385;
var G__17394 = (i__17386 + 1);
seq__17383 = G__17391;
chunk__17384 = G__17392;
count__17385 = G__17393;
i__17386 = G__17394;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17383);if(temp__4092__auto__)
{var seq__17383__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17383__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__17383__$1);{
var G__17395 = cljs.core.chunk_rest.call(null,seq__17383__$1);
var G__17396 = c__4189__auto__;
var G__17397 = cljs.core.count.call(null,c__4189__auto__);
var G__17398 = 0;
seq__17383 = G__17395;
chunk__17384 = G__17396;
count__17385 = G__17397;
i__17386 = G__17398;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__17383__$1);goog.events.removeAll(node);
{
var G__17399 = cljs.core.next.call(null,seq__17383__$1);
var G__17400 = null;
var G__17401 = 0;
var G__17402 = 0;
seq__17383 = G__17399;
chunk__17384 = G__17400;
count__17385 = G__17401;
i__17386 = G__17402;
continue;
}
}
} else
{return null;
}
}
break;
}
});
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__17387 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17388 = null;var count__17389 = 0;var i__17390 = 0;while(true){
if((i__17390 < count__17389))
{var node = cljs.core._nth.call(null,chunk__17388,i__17390);goog.events.removeAll(node,type__$1);
{
var G__17403 = seq__17387;
var G__17404 = chunk__17388;
var G__17405 = count__17389;
var G__17406 = (i__17390 + 1);
seq__17387 = G__17403;
chunk__17388 = G__17404;
count__17389 = G__17405;
i__17390 = G__17406;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17387);if(temp__4092__auto__)
{var seq__17387__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17387__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__17387__$1);{
var G__17407 = cljs.core.chunk_rest.call(null,seq__17387__$1);
var G__17408 = c__4189__auto__;
var G__17409 = cljs.core.count.call(null,c__4189__auto__);
var G__17410 = 0;
seq__17387 = G__17407;
chunk__17388 = G__17408;
count__17389 = G__17409;
i__17390 = G__17410;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__17387__$1);goog.events.removeAll(node,type__$1);
{
var G__17411 = cljs.core.next.call(null,seq__17387__$1);
var G__17412 = null;
var G__17413 = 0;
var G__17414 = 0;
seq__17387 = G__17411;
chunk__17388 = G__17412;
count__17389 = G__17413;
i__17390 = G__17414;
continue;
}
}
} else
{return null;
}
}
break;
}
});
unlisten_BANG_ = function(content,type){
switch(arguments.length){
case 0:
return unlisten_BANG___0.call(this);
case 1:
return unlisten_BANG___1.call(this,content);
case 2:
return unlisten_BANG___2.call(this,content,type);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unlisten_BANG_.cljs$core$IFn$_invoke$arity$0 = unlisten_BANG___0;
unlisten_BANG_.cljs$core$IFn$_invoke$arity$1 = unlisten_BANG___1;
unlisten_BANG_.cljs$core$IFn$_invoke$arity$2 = unlisten_BANG___2;
return unlisten_BANG_;
})()
;
/**
* Returns a seq of a node and its ancestors, starting with the document root.
*/
domina.events.ancestor_nodes = (function() {
var ancestor_nodes = null;
var ancestor_nodes__1 = (function (n){return ancestor_nodes.call(null,n,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null));
});
var ancestor_nodes__2 = (function (n,so_far){while(true){
var temp__4090__auto__ = n.parentNode;if(cljs.core.truth_(temp__4090__auto__))
{var parent = temp__4090__auto__;{
var G__17415 = parent;
var G__17416 = cljs.core.cons.call(null,parent,so_far);
n = G__17415;
so_far = G__17416;
continue;
}
} else
{return so_far;
}
break;
}
});
ancestor_nodes = function(n,so_far){
switch(arguments.length){
case 1:
return ancestor_nodes__1.call(this,n);
case 2:
return ancestor_nodes__2.call(this,n,so_far);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ancestor_nodes.cljs$core$IFn$_invoke$arity$1 = ancestor_nodes__1;
ancestor_nodes.cljs$core$IFn$_invoke$arity$2 = ancestor_nodes__2;
return ancestor_nodes;
})()
;
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event as a simulated browser event from the given source node. Emulates capture/bubble behavior. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__17425_17433 = cljs.core.seq.call(null,ancestors);var chunk__17426_17434 = null;var count__17427_17435 = 0;var i__17428_17436 = 0;while(true){
if((i__17428_17436 < count__17427_17435))
{var n_17437 = cljs.core._nth.call(null,chunk__17426_17434,i__17428_17436);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_17437;
goog.events.fireListeners(n_17437,evt.type,true,evt);
}
{
var G__17438 = seq__17425_17433;
var G__17439 = chunk__17426_17434;
var G__17440 = count__17427_17435;
var G__17441 = (i__17428_17436 + 1);
seq__17425_17433 = G__17438;
chunk__17426_17434 = G__17439;
count__17427_17435 = G__17440;
i__17428_17436 = G__17441;
continue;
}
} else
{var temp__4092__auto___17442 = cljs.core.seq.call(null,seq__17425_17433);if(temp__4092__auto___17442)
{var seq__17425_17443__$1 = temp__4092__auto___17442;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17425_17443__$1))
{var c__4189__auto___17444 = cljs.core.chunk_first.call(null,seq__17425_17443__$1);{
var G__17445 = cljs.core.chunk_rest.call(null,seq__17425_17443__$1);
var G__17446 = c__4189__auto___17444;
var G__17447 = cljs.core.count.call(null,c__4189__auto___17444);
var G__17448 = 0;
seq__17425_17433 = G__17445;
chunk__17426_17434 = G__17446;
count__17427_17435 = G__17447;
i__17428_17436 = G__17448;
continue;
}
} else
{var n_17449 = cljs.core.first.call(null,seq__17425_17443__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_17449;
goog.events.fireListeners(n_17449,evt.type,true,evt);
}
{
var G__17450 = cljs.core.next.call(null,seq__17425_17443__$1);
var G__17451 = null;
var G__17452 = 0;
var G__17453 = 0;
seq__17425_17433 = G__17450;
chunk__17426_17434 = G__17451;
count__17427_17435 = G__17452;
i__17428_17436 = G__17453;
continue;
}
}
} else
{}
}
break;
}
var seq__17429_17454 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__17430_17455 = null;var count__17431_17456 = 0;var i__17432_17457 = 0;while(true){
if((i__17432_17457 < count__17431_17456))
{var n_17458 = cljs.core._nth.call(null,chunk__17430_17455,i__17432_17457);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_17458;
goog.events.fireListeners(n_17458,evt.type,false,evt);
}
{
var G__17459 = seq__17429_17454;
var G__17460 = chunk__17430_17455;
var G__17461 = count__17431_17456;
var G__17462 = (i__17432_17457 + 1);
seq__17429_17454 = G__17459;
chunk__17430_17455 = G__17460;
count__17431_17456 = G__17461;
i__17432_17457 = G__17462;
continue;
}
} else
{var temp__4092__auto___17463 = cljs.core.seq.call(null,seq__17429_17454);if(temp__4092__auto___17463)
{var seq__17429_17464__$1 = temp__4092__auto___17463;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17429_17464__$1))
{var c__4189__auto___17465 = cljs.core.chunk_first.call(null,seq__17429_17464__$1);{
var G__17466 = cljs.core.chunk_rest.call(null,seq__17429_17464__$1);
var G__17467 = c__4189__auto___17465;
var G__17468 = cljs.core.count.call(null,c__4189__auto___17465);
var G__17469 = 0;
seq__17429_17454 = G__17466;
chunk__17430_17455 = G__17467;
count__17431_17456 = G__17468;
i__17432_17457 = G__17469;
continue;
}
} else
{var n_17470 = cljs.core.first.call(null,seq__17429_17464__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_17470;
goog.events.fireListeners(n_17470,evt.type,false,evt);
}
{
var G__17471 = cljs.core.next.call(null,seq__17429_17464__$1);
var G__17472 = null;
var G__17473 = 0;
var G__17474 = 0;
seq__17429_17454 = G__17471;
chunk__17430_17455 = G__17472;
count__17431_17456 = G__17473;
i__17432_17457 = G__17474;
continue;
}
}
} else
{}
}
break;
}
return evt.returnValue_;
});
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event using GClosure's event handling. The event source must extend goog.event.EventTarget
*/
domina.events.dispatch_event_target_BANG_ = (function dispatch_event_target_BANG_(source,evt){return goog.events.dispatchEvent(source,evt);
});
/**
* Tests whether the object is a goog.event.EventTarget
*/
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3429__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3429__auto__))
{return o.dispatchEvent;
} else
{return and__3429__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__17481_17487 = cljs.core.seq.call(null,evt_map);var chunk__17482_17488 = null;var count__17483_17489 = 0;var i__17484_17490 = 0;while(true){
if((i__17484_17490 < count__17483_17489))
{var vec__17485_17491 = cljs.core._nth.call(null,chunk__17482_17488,i__17484_17490);var k_17492 = cljs.core.nth.call(null,vec__17485_17491,0,null);var v_17493 = cljs.core.nth.call(null,vec__17485_17491,1,null);(evt[k_17492] = v_17493);
{
var G__17494 = seq__17481_17487;
var G__17495 = chunk__17482_17488;
var G__17496 = count__17483_17489;
var G__17497 = (i__17484_17490 + 1);
seq__17481_17487 = G__17494;
chunk__17482_17488 = G__17495;
count__17483_17489 = G__17496;
i__17484_17490 = G__17497;
continue;
}
} else
{var temp__4092__auto___17498 = cljs.core.seq.call(null,seq__17481_17487);if(temp__4092__auto___17498)
{var seq__17481_17499__$1 = temp__4092__auto___17498;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17481_17499__$1))
{var c__4189__auto___17500 = cljs.core.chunk_first.call(null,seq__17481_17499__$1);{
var G__17501 = cljs.core.chunk_rest.call(null,seq__17481_17499__$1);
var G__17502 = c__4189__auto___17500;
var G__17503 = cljs.core.count.call(null,c__4189__auto___17500);
var G__17504 = 0;
seq__17481_17487 = G__17501;
chunk__17482_17488 = G__17502;
count__17483_17489 = G__17503;
i__17484_17490 = G__17504;
continue;
}
} else
{var vec__17486_17505 = cljs.core.first.call(null,seq__17481_17499__$1);var k_17506 = cljs.core.nth.call(null,vec__17486_17505,0,null);var v_17507 = cljs.core.nth.call(null,vec__17486_17505,1,null);(evt[k_17506] = v_17507);
{
var G__17508 = cljs.core.next.call(null,seq__17481_17499__$1);
var G__17509 = null;
var G__17510 = 0;
var G__17511 = 0;
seq__17481_17487 = G__17508;
chunk__17482_17488 = G__17509;
count__17483_17489 = G__17510;
i__17484_17490 = G__17511;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(domina.events.is_event_target_QMARK_.call(null,source)))
{return domina.events.dispatch_event_target_BANG_.call(null,source,evt);
} else
{return domina.events.dispatch_browser_BANG_.call(null,source,evt);
}
});
dispatch_BANG_ = function(source,type,evt_map){
switch(arguments.length){
case 2:
return dispatch_BANG___2.call(this,source,type);
case 3:
return dispatch_BANG___3.call(this,source,type,evt_map);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 = dispatch_BANG___2;
dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 = dispatch_BANG___3;
return dispatch_BANG_;
})()
;
/**
* Given a listener key, removes the listener.
*/
domina.events.unlisten_by_key_BANG_ = (function unlisten_by_key_BANG_(key){return goog.events.unlistenByKey(key);
});
/**
* Returns a sequence of event listeners for all the nodes in the
* content of a given type.
*/
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__17512_SHARP_){return goog.events.getListeners(p1__17512_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});
