// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.components.page_title');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.number');
goog.require('clustermap.om');
goog.require('om.dom');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('om.dom');
goog.require('clustermap.om');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.components.reset_selection_button');
goog.require('clustermap.components.reset_selection_button');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.money');
clustermap.components.page_title.describe_type = (function describe_type(type){var pred__40335 = cljs.core._EQ_;var expr__40336 = type;if(cljs.core.truth_((pred__40335.cljs$core$IFn$_invoke$arity$2 ? pred__40335.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1006,expr__40336) : pred__40335.call(null,cljs.core.constant$keyword$1006,expr__40336))))
{return "Investor-backed company";
} else
{if(cljs.core.truth_((pred__40335.cljs$core$IFn$_invoke$arity$2 ? pred__40335.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1007,expr__40336) : pred__40335.call(null,cljs.core.constant$keyword$1007,expr__40336))))
{return "Investor";
} else
{if(cljs.core.truth_((pred__40335.cljs$core$IFn$_invoke$arity$2 ? pred__40335.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1009,expr__40336) : pred__40335.call(null,cljs.core.constant$keyword$1009,expr__40336))))
{return "Constituency";
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__40336))));
}
}
}
});
clustermap.components.page_title.page_title_component = (function page_title_component(p__40338,owner){var map__40349 = p__40338;var map__40349__$1 = ((cljs.core.seq_QMARK_(map__40349))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40349):map__40349);var selection = map__40349__$1;var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40349__$1,cljs.core.constant$keyword$934);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40349__$1,cljs.core.constant$keyword$904);var map__40350 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__40350__$1 = ((cljs.core.seq_QMARK_(map__40350))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40350):map__40350);var view_path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40350__$1,cljs.core.constant$keyword$1112);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40350__$1,cljs.core.constant$keyword$1004);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40350__$1,cljs.core.constant$keyword$1015);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,cljs.core.constant$keyword$1092);var type_descr = (function (){var G__40351 = selection;var G__40351__$1 = (((G__40351 == null))?null:cljs.core.constant$keyword$904.cljs$core$IFn$_invoke$arity$1(G__40351));var G__40351__$2 = (((G__40351__$1 == null))?null:clustermap.components.page_title.describe_type(G__40351__$1));return G__40351__$2;
})();var name = (function (){var G__40352 = selection;var G__40352__$1 = (((G__40352 == null))?null:cljs.core.constant$keyword$934.cljs$core$IFn$_invoke$arity$1(G__40352));var G__40352__$2 = (((G__40352__$1 == null))?null:cljs.core.constant$keyword$933.cljs$core$IFn$_invoke$arity$1(G__40352__$1));return G__40352__$2;
})();var url = (function (){var G__40353 = selection;var G__40353__$1 = (((G__40353 == null))?null:cljs.core.constant$keyword$934.cljs$core$IFn$_invoke$arity$1(G__40353));var G__40353__$2 = (((G__40353__$1 == null))?null:cljs.core.constant$keyword$1179.cljs$core$IFn$_invoke$arity$1(G__40353__$1));return G__40353__$2;
})();if(typeof clustermap.components.page_title.t40354 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.page_title.t40354 = (function (selection,owner,path_fn,type_descr,value,name,comm,page_title_component,type,view_path_fn,p__40338,url,map__40350,map__40349,meta40355){
this.selection = selection;
this.owner = owner;
this.path_fn = path_fn;
this.type_descr = type_descr;
this.value = value;
this.name = name;
this.comm = comm;
this.page_title_component = page_title_component;
this.type = type;
this.view_path_fn = view_path_fn;
this.p__40338 = p__40338;
this.url = url;
this.map__40350 = map__40350;
this.map__40349 = map__40349;
this.meta40355 = meta40355;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.page_title.t40354.cljs$lang$type = true;
clustermap.components.page_title.t40354.cljs$lang$ctorStr = "clustermap.components.page-title/t40354";
clustermap.components.page_title.t40354.cljs$lang$ctorPrWriter = ((function (map__40350,map__40350__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__40349,map__40349__$1,selection,value,type){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.page-title/t40354");
});})(map__40350,map__40350__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__40349,map__40349__$1,selection,value,type))
;
clustermap.components.page_title.t40354.prototype.om$core$IRender$ = true;
clustermap.components.page_title.t40354.prototype.om$core$IRender$render$arity$1 = ((function (map__40350,map__40350__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__40349,map__40349__$1,selection,value,type){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;return React.DOM.div({"id": "page-title"},React.DOM.a({"className": "btn btn-link", "href": (self__.view_path_fn.cljs$core$IFn$_invoke$arity$1 ? self__.view_path_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$1180) : self__.view_path_fn.call(null,cljs.core.constant$keyword$1180))},"View on map"),sablono.interpreter.interpret((cljs.core.truth_(self__.type_descr)?clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn):null)),(function (){var attrs40357 = (function (){var or__3558__auto__ = self__.type_descr;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "All investor-backed companies";
}
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h2,((cljs.core.map_QMARK_(attrs40357))?sablono.interpreter.attributes(attrs40357):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs40357))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs40357)], null))));
})(),(function (){var attrs40358 = (function (){var or__3558__auto__ = self__.name;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "UK wide";
}
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs40358))?sablono.interpreter.attributes(attrs40358):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs40358))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,cljs.core.constant$keyword$1009))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1181,"\u00A0(",cljs.core.constant$keyword$1182.cljs$core$IFn$_invoke$arity$1(self__.value),", ",cljs.core.constant$keyword$1183.cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs40358),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,cljs.core.constant$keyword$1009))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1181,"\u00A0(",cljs.core.constant$keyword$1182.cljs$core$IFn$_invoke$arity$1(self__.value),", ",cljs.core.constant$keyword$1183.cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null))], null))));
})(),(cljs.core.truth_(self__.url)?React.DOM.a({"href": self__.url, "target": "_blank"},sablono.interpreter.interpret(self__.url)):null));
});})(map__40350,map__40350__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__40349,map__40349__$1,selection,value,type))
;
clustermap.components.page_title.t40354.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__40350,map__40350__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__40349,map__40349__$1,selection,value,type){
return (function (_40356){var self__ = this;
var _40356__$1 = this;return self__.meta40355;
});})(map__40350,map__40350__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__40349,map__40349__$1,selection,value,type))
;
clustermap.components.page_title.t40354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__40350,map__40350__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__40349,map__40349__$1,selection,value,type){
return (function (_40356,meta40355__$1){var self__ = this;
var _40356__$1 = this;return (new clustermap.components.page_title.t40354(self__.selection,self__.owner,self__.path_fn,self__.type_descr,self__.value,self__.name,self__.comm,self__.page_title_component,self__.type,self__.view_path_fn,self__.p__40338,self__.url,self__.map__40350,self__.map__40349,meta40355__$1));
});})(map__40350,map__40350__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__40349,map__40349__$1,selection,value,type))
;
clustermap.components.page_title.__GT_t40354 = ((function (map__40350,map__40350__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__40349,map__40349__$1,selection,value,type){
return (function __GT_t40354(selection__$1,owner__$1,path_fn__$2,type_descr__$1,value__$1,name__$1,comm__$1,page_title_component__$1,type__$1,view_path_fn__$1,p__40338__$1,url__$1,map__40350__$2,map__40349__$2,meta40355){return (new clustermap.components.page_title.t40354(selection__$1,owner__$1,path_fn__$2,type_descr__$1,value__$1,name__$1,comm__$1,page_title_component__$1,type__$1,view_path_fn__$1,p__40338__$1,url__$1,map__40350__$2,map__40349__$2,meta40355));
});})(map__40350,map__40350__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__40349,map__40349__$1,selection,value,type))
;
}
return (new clustermap.components.page_title.t40354(selection,owner,path_fn__$1,type_descr,value,name,comm,page_title_component,type,view_path_fn,p__40338,url,map__40350__$1,map__40349__$1,null));
});
clustermap.components.page_title.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.om.burrow(clustermap.components.page_title.page_title_component,cljs.core.constant$keyword$1070),app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$971,shared,cljs.core.constant$keyword$974,document.getElementById(elem_id)], null));
});
