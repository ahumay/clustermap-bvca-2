// Compiled by ClojureScript 0.0-2322
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj37712 = {};return obj37712;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3546__auto__ = evt;if(and__3546__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3546__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4185__auto__ = (((evt == null))?null:evt);return (function (){var or__3558__auto__ = (domina.events.prevent_default[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.events.prevent_default["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3546__auto__ = evt;if(and__3546__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3546__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4185__auto__ = (((evt == null))?null:evt);return (function (){var or__3558__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3546__auto__ = evt;if(and__3546__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3546__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4185__auto__ = (((evt == null))?null:evt);return (function (){var or__3558__auto__ = (domina.events.target[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.events.target["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3546__auto__ = evt;if(and__3546__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3546__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4185__auto__ = (((evt == null))?null:evt);return (function (){var or__3558__auto__ = (domina.events.current_target[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.events.current_target["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3546__auto__ = evt;if(and__3546__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3546__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4185__auto__ = (((evt == null))?null:evt);return (function (){var or__3558__auto__ = (domina.events.event_type[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.events.event_type["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3546__auto__ = evt;if(and__3546__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3546__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4185__auto__ = (((evt == null))?null:evt);return (function (){var or__3558__auto__ = (domina.events.raw_event[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.events.raw_event["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t37716 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t37716 = (function (evt,f,create_listener_function,meta37717){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta37717 = meta37717;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t37716.cljs$lang$type = true;
domina.events.t37716.cljs$lang$ctorStr = "domina.events/t37716";
domina.events.t37716.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"domina.events/t37716");
});
domina.events.t37716.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t37716.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3558__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return not_found;
}
});
domina.events.t37716.prototype.domina$events$Event$ = true;
domina.events.t37716.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t37716.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t37716.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t37716.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t37716.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t37716.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t37716.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37718){var self__ = this;
var _37718__$1 = this;return self__.meta37717;
});
domina.events.t37716.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37718,meta37717__$1){var self__ = this;
var _37718__$1 = this;return (new domina.events.t37716(self__.evt,self__.f,self__.create_listener_function,meta37717__$1));
});
domina.events.__GT_t37716 = (function __GT_t37716(evt__$1,f__$1,create_listener_function__$1,meta37717){return (new domina.events.t37716(evt__$1,f__$1,create_listener_function__$1,meta37717));
});
}
return (new domina.events.t37716(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4283__auto__ = ((function (f,t){
return (function iter__37723(s__37724){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__37724__$1 = s__37724;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__37724__$1);if(temp__4126__auto__)
{var s__37724__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37724__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__37724__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__37726 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__37725 = (0);while(true){
if((i__37725 < size__4282__auto__))
{var node = cljs.core._nth.call(null,c__4281__auto__,i__37725);cljs.core.chunk_append.call(null,b__37726,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__37727 = (i__37725 + (1));
i__37725 = G__37727;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37726),iter__37723.call(null,cljs.core.chunk_rest.call(null,s__37724__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37726),null);
}
} else
{var node = cljs.core.first.call(null,s__37724__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__37723.call(null,cljs.core.rest.call(null,s__37724__$2)));
}
} else
{return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;return iter__4283__auto__.call(null,domina.nodes.call(null,content));
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
var unlisten_BANG___1 = (function (content){var seq__37736 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37737 = null;var count__37738 = (0);var i__37739 = (0);while(true){
if((i__37739 < count__37738))
{var node = cljs.core._nth.call(null,chunk__37737,i__37739);goog.events.removeAll(node);
{
var G__37744 = seq__37736;
var G__37745 = chunk__37737;
var G__37746 = count__37738;
var G__37747 = (i__37739 + (1));
seq__37736 = G__37744;
chunk__37737 = G__37745;
count__37738 = G__37746;
i__37739 = G__37747;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__37736);if(temp__4126__auto__)
{var seq__37736__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37736__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__37736__$1);{
var G__37748 = cljs.core.chunk_rest.call(null,seq__37736__$1);
var G__37749 = c__4314__auto__;
var G__37750 = cljs.core.count.call(null,c__4314__auto__);
var G__37751 = (0);
seq__37736 = G__37748;
chunk__37737 = G__37749;
count__37738 = G__37750;
i__37739 = G__37751;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__37736__$1);goog.events.removeAll(node);
{
var G__37752 = cljs.core.next.call(null,seq__37736__$1);
var G__37753 = null;
var G__37754 = (0);
var G__37755 = (0);
seq__37736 = G__37752;
chunk__37737 = G__37753;
count__37738 = G__37754;
i__37739 = G__37755;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__37740 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37741 = null;var count__37742 = (0);var i__37743 = (0);while(true){
if((i__37743 < count__37742))
{var node = cljs.core._nth.call(null,chunk__37741,i__37743);goog.events.removeAll(node,type__$1);
{
var G__37756 = seq__37740;
var G__37757 = chunk__37741;
var G__37758 = count__37742;
var G__37759 = (i__37743 + (1));
seq__37740 = G__37756;
chunk__37741 = G__37757;
count__37742 = G__37758;
i__37743 = G__37759;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__37740);if(temp__4126__auto__)
{var seq__37740__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37740__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__37740__$1);{
var G__37760 = cljs.core.chunk_rest.call(null,seq__37740__$1);
var G__37761 = c__4314__auto__;
var G__37762 = cljs.core.count.call(null,c__4314__auto__);
var G__37763 = (0);
seq__37740 = G__37760;
chunk__37741 = G__37761;
count__37742 = G__37762;
i__37743 = G__37763;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__37740__$1);goog.events.removeAll(node,type__$1);
{
var G__37764 = cljs.core.next.call(null,seq__37740__$1);
var G__37765 = null;
var G__37766 = (0);
var G__37767 = (0);
seq__37740 = G__37764;
chunk__37741 = G__37765;
count__37742 = G__37766;
i__37743 = G__37767;
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
var temp__4124__auto__ = n.parentNode;if(cljs.core.truth_(temp__4124__auto__))
{var parent = temp__4124__auto__;{
var G__37768 = parent;
var G__37769 = cljs.core.cons.call(null,parent,so_far);
n = G__37768;
so_far = G__37769;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__37778_37786 = cljs.core.seq.call(null,ancestors);var chunk__37779_37787 = null;var count__37780_37788 = (0);var i__37781_37789 = (0);while(true){
if((i__37781_37789 < count__37780_37788))
{var n_37790 = cljs.core._nth.call(null,chunk__37779_37787,i__37781_37789);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_37790;
goog.events.fireListeners(n_37790,evt.type,true,evt);
}
{
var G__37791 = seq__37778_37786;
var G__37792 = chunk__37779_37787;
var G__37793 = count__37780_37788;
var G__37794 = (i__37781_37789 + (1));
seq__37778_37786 = G__37791;
chunk__37779_37787 = G__37792;
count__37780_37788 = G__37793;
i__37781_37789 = G__37794;
continue;
}
} else
{var temp__4126__auto___37795 = cljs.core.seq.call(null,seq__37778_37786);if(temp__4126__auto___37795)
{var seq__37778_37796__$1 = temp__4126__auto___37795;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37778_37796__$1))
{var c__4314__auto___37797 = cljs.core.chunk_first.call(null,seq__37778_37796__$1);{
var G__37798 = cljs.core.chunk_rest.call(null,seq__37778_37796__$1);
var G__37799 = c__4314__auto___37797;
var G__37800 = cljs.core.count.call(null,c__4314__auto___37797);
var G__37801 = (0);
seq__37778_37786 = G__37798;
chunk__37779_37787 = G__37799;
count__37780_37788 = G__37800;
i__37781_37789 = G__37801;
continue;
}
} else
{var n_37802 = cljs.core.first.call(null,seq__37778_37796__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_37802;
goog.events.fireListeners(n_37802,evt.type,true,evt);
}
{
var G__37803 = cljs.core.next.call(null,seq__37778_37796__$1);
var G__37804 = null;
var G__37805 = (0);
var G__37806 = (0);
seq__37778_37786 = G__37803;
chunk__37779_37787 = G__37804;
count__37780_37788 = G__37805;
i__37781_37789 = G__37806;
continue;
}
}
} else
{}
}
break;
}
var seq__37782_37807 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__37783_37808 = null;var count__37784_37809 = (0);var i__37785_37810 = (0);while(true){
if((i__37785_37810 < count__37784_37809))
{var n_37811 = cljs.core._nth.call(null,chunk__37783_37808,i__37785_37810);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_37811;
goog.events.fireListeners(n_37811,evt.type,false,evt);
}
{
var G__37812 = seq__37782_37807;
var G__37813 = chunk__37783_37808;
var G__37814 = count__37784_37809;
var G__37815 = (i__37785_37810 + (1));
seq__37782_37807 = G__37812;
chunk__37783_37808 = G__37813;
count__37784_37809 = G__37814;
i__37785_37810 = G__37815;
continue;
}
} else
{var temp__4126__auto___37816 = cljs.core.seq.call(null,seq__37782_37807);if(temp__4126__auto___37816)
{var seq__37782_37817__$1 = temp__4126__auto___37816;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37782_37817__$1))
{var c__4314__auto___37818 = cljs.core.chunk_first.call(null,seq__37782_37817__$1);{
var G__37819 = cljs.core.chunk_rest.call(null,seq__37782_37817__$1);
var G__37820 = c__4314__auto___37818;
var G__37821 = cljs.core.count.call(null,c__4314__auto___37818);
var G__37822 = (0);
seq__37782_37807 = G__37819;
chunk__37783_37808 = G__37820;
count__37784_37809 = G__37821;
i__37785_37810 = G__37822;
continue;
}
} else
{var n_37823 = cljs.core.first.call(null,seq__37782_37817__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_37823;
goog.events.fireListeners(n_37823,evt.type,false,evt);
}
{
var G__37824 = cljs.core.next.call(null,seq__37782_37817__$1);
var G__37825 = null;
var G__37826 = (0);
var G__37827 = (0);
seq__37782_37807 = G__37824;
chunk__37783_37808 = G__37825;
count__37784_37809 = G__37826;
i__37785_37810 = G__37827;
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
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3546__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3546__auto__))
{return o.dispatchEvent;
} else
{return and__3546__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__37834_37840 = cljs.core.seq.call(null,evt_map);var chunk__37835_37841 = null;var count__37836_37842 = (0);var i__37837_37843 = (0);while(true){
if((i__37837_37843 < count__37836_37842))
{var vec__37838_37844 = cljs.core._nth.call(null,chunk__37835_37841,i__37837_37843);var k_37845 = cljs.core.nth.call(null,vec__37838_37844,(0),null);var v_37846 = cljs.core.nth.call(null,vec__37838_37844,(1),null);(evt[k_37845] = v_37846);
{
var G__37847 = seq__37834_37840;
var G__37848 = chunk__37835_37841;
var G__37849 = count__37836_37842;
var G__37850 = (i__37837_37843 + (1));
seq__37834_37840 = G__37847;
chunk__37835_37841 = G__37848;
count__37836_37842 = G__37849;
i__37837_37843 = G__37850;
continue;
}
} else
{var temp__4126__auto___37851 = cljs.core.seq.call(null,seq__37834_37840);if(temp__4126__auto___37851)
{var seq__37834_37852__$1 = temp__4126__auto___37851;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37834_37852__$1))
{var c__4314__auto___37853 = cljs.core.chunk_first.call(null,seq__37834_37852__$1);{
var G__37854 = cljs.core.chunk_rest.call(null,seq__37834_37852__$1);
var G__37855 = c__4314__auto___37853;
var G__37856 = cljs.core.count.call(null,c__4314__auto___37853);
var G__37857 = (0);
seq__37834_37840 = G__37854;
chunk__37835_37841 = G__37855;
count__37836_37842 = G__37856;
i__37837_37843 = G__37857;
continue;
}
} else
{var vec__37839_37858 = cljs.core.first.call(null,seq__37834_37852__$1);var k_37859 = cljs.core.nth.call(null,vec__37839_37858,(0),null);var v_37860 = cljs.core.nth.call(null,vec__37839_37858,(1),null);(evt[k_37859] = v_37860);
{
var G__37861 = cljs.core.next.call(null,seq__37834_37852__$1);
var G__37862 = null;
var G__37863 = (0);
var G__37864 = (0);
seq__37834_37840 = G__37861;
chunk__37835_37841 = G__37862;
count__37836_37842 = G__37863;
i__37837_37843 = G__37864;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,((function (type__$1){
return (function (p1__37865_SHARP_){return goog.events.getListeners(p1__37865_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
