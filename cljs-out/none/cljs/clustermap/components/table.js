// Compiled by ClojureScript 0.0-2227
goog.provide('clustermap.components.table');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('cljs.core.async');
/**
* generate a table-ordering link for table-headers
*/
clustermap.components.table.order_col = (function order_col(comm,collection,view_update_key,title,col){var current_order = new cljs.core.Keyword(null,"order","order",1119910592).cljs$core$IFn$_invoke$arity$1(collection);var current_order__$1 = ((cljs.core.sequential_QMARK_.call(null,current_order))?cljs.core.first.call(null,current_order):current_order);var current_order_key = cljs.core.first.call(null,cljs.core.keys.call(null,current_order__$1));var current_order_dir = cljs.core.first.call(null,cljs.core.vals.call(null,current_order__$1));return React.DOM.a({"href": "#", "onClick": ((function (current_order,current_order__$1,current_order_key,current_order_dir){
return (function (e){e.preventDefault();
var pred__24140 = cljs.core._EQ_;var expr__24141 = current_order_dir;if(cljs.core.truth_(pred__24140.call(null,"asc",expr__24141)))
{return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",1119910592),new cljs.core.PersistentArrayMap.fromArray([col,new cljs.core.Keyword(null,"desc","desc",1016984067)], true, false)], null)], null));
} else
{if(cljs.core.truth_(pred__24140.call(null,"desc",expr__24141)))
{return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",1119910592),new cljs.core.PersistentArrayMap.fromArray([col,new cljs.core.Keyword(null,"asc","asc",1014001123)], true, false)], null)], null));
} else
{return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",1119910592),new cljs.core.PersistentArrayMap.fromArray([col,new cljs.core.Keyword(null,"desc","desc",1016984067)], true, false)], null)], null));
}
}
});})(current_order,current_order__$1,current_order_key,current_order_dir))
},sablono.interpreter.interpret.call(null,title),((cljs.core._EQ_.call(null,current_order_key,col))?sablono.interpreter.interpret.call(null,(function (){var pred__24143 = cljs.core._EQ_;var expr__24144 = current_order_dir;if(cljs.core.truth_(pred__24143.call(null,"asc",expr__24144)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-asc","i.icon-asc",3872166516)], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-desc","i.icon-desc",3720765330)], null);
}
})()):null));
});
/**
* generate a table pagination control
*/
clustermap.components.table.paginate = (function paginate(comm,p__24146,view_update_key){var map__24159 = p__24146;var map__24159__$1 = ((cljs.core.seq_QMARK_.call(null,map__24159))?cljs.core.apply.call(null,cljs.core.hash_map,map__24159):map__24159);var collection = map__24159__$1;var size = cljs.core.get.call(null,map__24159__$1,new cljs.core.Keyword(null,"size","size",1017434995));var from = cljs.core.get.call(null,map__24159__$1,new cljs.core.Keyword(null,"from","from",1017056028));var count = cljs.core.get.call(null,map__24159__$1,new cljs.core.Keyword(null,"count","count",1108755585));var attrs24160 = (((from > 0))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.prev","span.prev",4619949513),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",1017115293),"#",new cljs.core.Keyword(null,"onClick","onClick",3956969051),((function (map__24159,map__24159__$1,collection,size,from,count){
return (function (e){e.preventDefault();
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1017056028),(function (){var x__3846__auto__ = (from - size);var y__3847__auto__ = 0;return ((x__3846__auto__ > y__3847__auto__) ? x__3846__auto__ : y__3847__auto__);
})()], null)], null));
});})(map__24159,map__24159__$1,collection,size,from,count))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-arrow-left","i.icon-arrow-left",2307990796)], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.prev","span.prev",4619949513),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-arrow-left","i.icon-arrow-left",2307990796)], null)], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs24160))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["paginate"], null)], null),attrs24160)):{"className": "paginate"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24160))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs24161 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((from + 1))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3853__auto__ = (from + size);var y__3854__auto__ = count;return ((x__3853__auto__ < y__3854__auto__) ? x__3853__auto__ : y__3854__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(count));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs24161))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs24161)):{"className": "page"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24161))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24161)], null))));
})(),((((from + size) < count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs24160,map__24159,map__24159__$1,collection,size,from,count){
return (function (e){e.preventDefault();
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1017056028),(from + size)], null)], null));
});})(attrs24160,map__24159,map__24159__$1,collection,size,from,count))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24160),(function (){var attrs24162 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((from + 1))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3853__auto__ = (from + size);var y__3854__auto__ = count;return ((x__3853__auto__ < y__3854__auto__) ? x__3853__auto__ : y__3854__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(count));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs24162))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs24162)):{"className": "page"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24162))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24162)], null))));
})(),((((from + size) < count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs24160,map__24159,map__24159__$1,collection,size,from,count){
return (function (e){e.preventDefault();
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1017056028),(from + size)], null)], null));
});})(attrs24160,map__24159,map__24159__$1,collection,size,from,count))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null))));
});

//# sourceMappingURL=table.js.map