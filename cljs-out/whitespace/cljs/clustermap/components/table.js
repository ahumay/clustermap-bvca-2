// Compiled by ClojureScript 0.0-2261
goog.provide('clustermap.components.table');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('cljs.core.async');
/**
* generate a table-ordering link for table-headers
*/
clustermap.components.table.order_col = (function order_col(comm,collection,view_update_key,title,col){var current_order = new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(collection);var current_order__$1 = ((cljs.core.sequential_QMARK_.call(null,current_order))?cljs.core.first.call(null,current_order):current_order);var current_order_key = cljs.core.first.call(null,cljs.core.keys.call(null,current_order__$1));var current_order_dir = cljs.core.first.call(null,cljs.core.vals.call(null,current_order__$1));return React.DOM.a({"href": "#", "onClick": ((function (current_order,current_order__$1,current_order_key,current_order_dir){
return (function (e){e.preventDefault();
var pred__13717 = cljs.core._EQ_;var expr__13718 = current_order_dir;if(cljs.core.truth_(pred__13717.call(null,"asc",expr__13718)))
{return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap.fromArray([col,new cljs.core.Keyword(null,"desc","desc",2093485764)], true, false)], null)], null));
} else
{if(cljs.core.truth_(pred__13717.call(null,"desc",expr__13718)))
{return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap.fromArray([col,new cljs.core.Keyword(null,"asc","asc",356854569)], true, false)], null)], null));
} else
{return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap.fromArray([col,new cljs.core.Keyword(null,"desc","desc",2093485764)], true, false)], null)], null));
}
}
});})(current_order,current_order__$1,current_order_key,current_order_dir))
},sablono.interpreter.interpret.call(null,title),((cljs.core._EQ_.call(null,current_order_key,col))?sablono.interpreter.interpret.call(null,(function (){var pred__13720 = cljs.core._EQ_;var expr__13721 = current_order_dir;if(cljs.core.truth_(pred__13720.call(null,"asc",expr__13721)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-asc","i.icon-asc",1318187620)], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-desc","i.icon-desc",-1647067651)], null);
}
})()):null));
});
/**
* generate a table pagination control
*/
clustermap.components.table.paginate = (function paginate(comm,p__13723,view_update_key){var map__13736 = p__13723;var map__13736__$1 = ((cljs.core.seq_QMARK_.call(null,map__13736))?cljs.core.apply.call(null,cljs.core.hash_map,map__13736):map__13736);var collection = map__13736__$1;var size = cljs.core.get.call(null,map__13736__$1,new cljs.core.Keyword(null,"size","size",1098693007));var from = cljs.core.get.call(null,map__13736__$1,new cljs.core.Keyword(null,"from","from",1815293044));var count = cljs.core.get.call(null,map__13736__$1,new cljs.core.Keyword(null,"count","count",2139924085));var attrs13737 = (((from > (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.prev","span.prev",1950349585),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__13736,map__13736__$1,collection,size,from,count){
return (function (e){e.preventDefault();
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),(function (){var x__3850__auto__ = (from - size);var y__3851__auto__ = (0);return ((x__3850__auto__ > y__3851__auto__) ? x__3850__auto__ : y__3851__auto__);
})()], null)], null));
});})(map__13736,map__13736__$1,collection,size,from,count))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-arrow-left","i.icon-arrow-left",1090541868)], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.prev","span.prev",1950349585),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-arrow-left","i.icon-arrow-left",1090541868)], null)], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs13737))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["paginate"], null)], null),attrs13737)):{"className": "paginate"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13737))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13738 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3857__auto__ = (from + size);var y__3858__auto__ = count;return ((x__3857__auto__ < y__3858__auto__) ? x__3857__auto__ : y__3858__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(count));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs13738))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs13738)):{"className": "page"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13738))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13738)], null))));
})(),((((from + size) < count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs13737,map__13736,map__13736__$1,collection,size,from,count){
return (function (e){e.preventDefault();
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),(from + size)], null)], null));
});})(attrs13737,map__13736,map__13736__$1,collection,size,from,count))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13737),(function (){var attrs13739 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3857__auto__ = (from + size);var y__3858__auto__ = count;return ((x__3857__auto__ < y__3858__auto__) ? x__3857__auto__ : y__3858__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(count));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs13739))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs13739)):{"className": "page"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13739))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13739)], null))));
})(),((((from + size) < count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs13737,map__13736,map__13736__$1,collection,size,from,count){
return (function (e){e.preventDefault();
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),(from + size)], null)], null));
});})(attrs13737,map__13736,map__13736__$1,collection,size,from,count))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null))));
});
