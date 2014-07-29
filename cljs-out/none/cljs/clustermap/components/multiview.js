// Compiled by ClojureScript 0.0-2268
goog.provide('clustermap.components.multiview');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('jayq.core');
goog.require('clustermap.components.filter');
goog.require('clustermap.om');
goog.require('om.dom');
goog.require('jayq.core');
goog.require('clustermap.model');
goog.require('sablono.core');
goog.require('clustermap.routes');
goog.require('om.dom');
goog.require('clustermap.om');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('clustermap.model');
goog.require('jayq.core');
goog.require('clustermap.components.filter');
goog.require('clustermap.routes');
goog.require('om.core');
goog.require('om.core');
clustermap.components.multiview.multiview_component = (function multiview_component(p__50469,owner){var map__50484 = p__50469;var map__50484__$1 = ((cljs.core.seq_QMARK_.call(null,map__50484))?cljs.core.apply.call(null,cljs.core.hash_map,map__50484):map__50484);var cursor = map__50484__$1;var filter_spec = cljs.core.get.call(null,map__50484__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));if(typeof clustermap.components.multiview.t50485 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.multiview.t50485 = (function (filter_spec,cursor,map__50484,owner,p__50469,multiview_component,meta50486){
this.filter_spec = filter_spec;
this.cursor = cursor;
this.map__50484 = map__50484;
this.owner = owner;
this.p__50469 = p__50469;
this.multiview_component = multiview_component;
this.meta50486 = meta50486;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.multiview.t50485.cljs$lang$type = true;
clustermap.components.multiview.t50485.cljs$lang$ctorStr = "clustermap.components.multiview/t50485";
clustermap.components.multiview.t50485.cljs$lang$ctorPrWriter = ((function (map__50484,map__50484__$1,cursor,filter_spec){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.multiview/t50485");
});})(map__50484,map__50484__$1,cursor,filter_spec))
;
clustermap.components.multiview.t50485.prototype.om$core$IWillUpdate$ = true;
clustermap.components.multiview.t50485.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__50484,map__50484__$1,cursor,filter_spec){
return (function (this$,p__50488,next_state){var self__ = this;
var map__50489 = p__50488;var map__50489__$1 = ((cljs.core.seq_QMARK_.call(null,map__50489))?cljs.core.apply.call(null,cljs.core.hash_map,map__50489):map__50489);var map__50490 = cljs.core.get.call(null,map__50489__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__50490__$1 = ((cljs.core.seq_QMARK_.call(null,map__50490))?cljs.core.apply.call(null,cljs.core.hash_map,map__50490):map__50490);var next_compiled_filter = cljs.core.get.call(null,map__50490__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var next_views = cljs.core.get.call(null,map__50489__$1,new cljs.core.Keyword(null,"views","views",1450155487));var this$__$1 = this;var map__50491 = om.core.get_props.call(null,self__.owner);var map__50491__$1 = ((cljs.core.seq_QMARK_.call(null,map__50491))?cljs.core.apply.call(null,cljs.core.hash_map,map__50491):map__50491);var map__50492 = cljs.core.get.call(null,map__50491__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__50492__$1 = ((cljs.core.seq_QMARK_.call(null,map__50492))?cljs.core.apply.call(null,cljs.core.hash_map,map__50492):map__50492);var compiled_filter = cljs.core.get.call(null,map__50492__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var views = cljs.core.get.call(null,map__50491__$1,new cljs.core.Keyword(null,"views","views",1450155487));if(cljs.core.not_EQ_.call(null,next_compiled_filter,compiled_filter))
{var seq__50493 = cljs.core.seq.call(null,cljs.core.keys.call(null,next_views));var chunk__50494 = null;var count__50495 = (0);var i__50496 = (0);while(true){
if((i__50496 < count__50495))
{var view_key = cljs.core._nth.call(null,chunk__50494,i__50496);om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view_key,new cljs.core.Keyword(null,"filter","filter",-948537934)], null),next_compiled_filter);
{
var G__50498 = seq__50493;
var G__50499 = chunk__50494;
var G__50500 = count__50495;
var G__50501 = (i__50496 + (1));
seq__50493 = G__50498;
chunk__50494 = G__50499;
count__50495 = G__50500;
i__50496 = G__50501;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__50493);if(temp__4126__auto__)
{var seq__50493__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50493__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__50493__$1);{
var G__50502 = cljs.core.chunk_rest.call(null,seq__50493__$1);
var G__50503 = c__4299__auto__;
var G__50504 = cljs.core.count.call(null,c__4299__auto__);
var G__50505 = (0);
seq__50493 = G__50502;
chunk__50494 = G__50503;
count__50495 = G__50504;
i__50496 = G__50505;
continue;
}
} else
{var view_key = cljs.core.first.call(null,seq__50493__$1);om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view_key,new cljs.core.Keyword(null,"filter","filter",-948537934)], null),next_compiled_filter);
{
var G__50506 = cljs.core.next.call(null,seq__50493__$1);
var G__50507 = null;
var G__50508 = (0);
var G__50509 = (0);
seq__50493 = G__50506;
chunk__50494 = G__50507;
count__50495 = G__50508;
i__50496 = G__50509;
continue;
}
}
} else
{return null;
}
}
break;
}
} else
{return null;
}
});})(map__50484,map__50484__$1,cursor,filter_spec))
;
clustermap.components.multiview.t50485.prototype.om$core$IRenderState$ = true;
clustermap.components.multiview.t50485.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__50484,map__50484__$1,cursor,filter_spec){
return (function (this$,state){var self__ = this;
var this$__$1 = this;var attrs50497 = om.core.build.call(null,clustermap.components.filter.filter_component,self__.filter_spec);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs50497))?sablono.interpreter.attributes.call(null,attrs50497):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50497))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50497)], null))));
});})(map__50484,map__50484__$1,cursor,filter_spec))
;
clustermap.components.multiview.t50485.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__50484,map__50484__$1,cursor,filter_spec){
return (function (_50487){var self__ = this;
var _50487__$1 = this;return self__.meta50486;
});})(map__50484,map__50484__$1,cursor,filter_spec))
;
clustermap.components.multiview.t50485.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__50484,map__50484__$1,cursor,filter_spec){
return (function (_50487,meta50486__$1){var self__ = this;
var _50487__$1 = this;return (new clustermap.components.multiview.t50485(self__.filter_spec,self__.cursor,self__.map__50484,self__.owner,self__.p__50469,self__.multiview_component,meta50486__$1));
});})(map__50484,map__50484__$1,cursor,filter_spec))
;
clustermap.components.multiview.__GT_t50485 = ((function (map__50484,map__50484__$1,cursor,filter_spec){
return (function __GT_t50485(filter_spec__$1,cursor__$1,map__50484__$2,owner__$1,p__50469__$1,multiview_component__$1,meta50486){return (new clustermap.components.multiview.t50485(filter_spec__$1,cursor__$1,map__50484__$2,owner__$1,p__50469__$1,multiview_component__$1,meta50486));
});})(map__50484,map__50484__$1,cursor,filter_spec))
;
}
return (new clustermap.components.multiview.t50485(filter_spec,cursor,map__50484__$1,owner,p__50469,multiview_component,null));
});
clustermap.components.multiview.mount = (function mount(app_state,path,elem_id,shared){return om.core.root.call(null,clustermap.components.multiview.multiview_component,app_state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id),new cljs.core.Keyword(null,"path","path",-188191168),path], null));
});

//# sourceMappingURL=multiview.js.map