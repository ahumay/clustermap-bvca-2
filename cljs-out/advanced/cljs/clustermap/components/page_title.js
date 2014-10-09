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
clustermap.components.page_title.describe_type = (function describe_type(type){var pred__46522 = cljs.core._EQ_;var expr__46523 = type;if(cljs.core.truth_((pred__46522.cljs$core$IFn$_invoke$arity$2 ? pred__46522.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1137,expr__46523) : pred__46522.call(null,cljs.core.constant$keyword$1137,expr__46523))))
{return "Investor-backed company";
} else
{if(cljs.core.truth_((pred__46522.cljs$core$IFn$_invoke$arity$2 ? pred__46522.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1138,expr__46523) : pred__46522.call(null,cljs.core.constant$keyword$1138,expr__46523))))
{return "Investor";
} else
{if(cljs.core.truth_((pred__46522.cljs$core$IFn$_invoke$arity$2 ? pred__46522.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1140,expr__46523) : pred__46522.call(null,cljs.core.constant$keyword$1140,expr__46523))))
{return "Constituency";
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__46523))));
}
}
}
});
clustermap.components.page_title.page_title_component = (function page_title_component(p__46525,owner){var map__46536 = p__46525;var map__46536__$1 = ((cljs.core.seq_QMARK_(map__46536))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46536):map__46536);var selection = map__46536__$1;var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46536__$1,cljs.core.constant$keyword$989);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46536__$1,cljs.core.constant$keyword$974);var map__46537 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__46537__$1 = ((cljs.core.seq_QMARK_(map__46537))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46537):map__46537);var view_path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46537__$1,cljs.core.constant$keyword$1213);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46537__$1,cljs.core.constant$keyword$1135);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46537__$1,cljs.core.constant$keyword$1146);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,cljs.core.constant$keyword$1193);var type_descr = (function (){var G__46538 = selection;var G__46538__$1 = (((G__46538 == null))?null:cljs.core.constant$keyword$974.cljs$core$IFn$_invoke$arity$1(G__46538));var G__46538__$2 = (((G__46538__$1 == null))?null:clustermap.components.page_title.describe_type(G__46538__$1));return G__46538__$2;
})();var name = (function (){var G__46539 = selection;var G__46539__$1 = (((G__46539 == null))?null:cljs.core.constant$keyword$989.cljs$core$IFn$_invoke$arity$1(G__46539));var G__46539__$2 = (((G__46539__$1 == null))?null:cljs.core.constant$keyword$998.cljs$core$IFn$_invoke$arity$1(G__46539__$1));return G__46539__$2;
})();var url = (function (){var G__46540 = selection;var G__46540__$1 = (((G__46540 == null))?null:cljs.core.constant$keyword$989.cljs$core$IFn$_invoke$arity$1(G__46540));var G__46540__$2 = (((G__46540__$1 == null))?null:cljs.core.constant$keyword$1280.cljs$core$IFn$_invoke$arity$1(G__46540__$1));return G__46540__$2;
})();if(typeof clustermap.components.page_title.t46541 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.page_title.t46541 = (function (selection,owner,path_fn,type_descr,p__46525,map__46537,value,name,comm,page_title_component,type,view_path_fn,url,map__46536,meta46542){
this.selection = selection;
this.owner = owner;
this.path_fn = path_fn;
this.type_descr = type_descr;
this.p__46525 = p__46525;
this.map__46537 = map__46537;
this.value = value;
this.name = name;
this.comm = comm;
this.page_title_component = page_title_component;
this.type = type;
this.view_path_fn = view_path_fn;
this.url = url;
this.map__46536 = map__46536;
this.meta46542 = meta46542;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.page_title.t46541.cljs$lang$type = true;
clustermap.components.page_title.t46541.cljs$lang$ctorStr = "clustermap.components.page-title/t46541";
clustermap.components.page_title.t46541.cljs$lang$ctorPrWriter = ((function (map__46537,map__46537__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__46536,map__46536__$1,selection,value,type){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.page-title/t46541");
});})(map__46537,map__46537__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__46536,map__46536__$1,selection,value,type))
;
clustermap.components.page_title.t46541.prototype.om$core$IRender$ = true;
clustermap.components.page_title.t46541.prototype.om$core$IRender$render$arity$1 = ((function (map__46537,map__46537__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__46536,map__46536__$1,selection,value,type){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;return React.DOM.div({"id": "page-title"},React.DOM.a({"className": "btn btn-link", "href": (self__.view_path_fn.cljs$core$IFn$_invoke$arity$1 ? self__.view_path_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$1011) : self__.view_path_fn.call(null,cljs.core.constant$keyword$1011))},"View on map"),sablono.interpreter.interpret((cljs.core.truth_(self__.type_descr)?clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn):null)),(function (){var attrs46544 = (function (){var or__3558__auto__ = self__.type_descr;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "All investor-backed companies";
}
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h2,((cljs.core.map_QMARK_(attrs46544))?sablono.interpreter.attributes(attrs46544):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs46544))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs46544)], null))));
})(),(function (){var attrs46545 = (function (){var or__3558__auto__ = self__.name;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "UK wide";
}
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs46545))?sablono.interpreter.attributes(attrs46545):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs46545))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,cljs.core.constant$keyword$1140))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1281,"\u00A0(",cljs.core.constant$keyword$1282.cljs$core$IFn$_invoke$arity$1(self__.value),", ",cljs.core.constant$keyword$1283.cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs46545),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,cljs.core.constant$keyword$1140))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1281,"\u00A0(",cljs.core.constant$keyword$1282.cljs$core$IFn$_invoke$arity$1(self__.value),", ",cljs.core.constant$keyword$1283.cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null))], null))));
})(),(cljs.core.truth_(self__.url)?React.DOM.a({"href": self__.url, "target": "_blank"},sablono.interpreter.interpret(self__.url)):null));
});})(map__46537,map__46537__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__46536,map__46536__$1,selection,value,type))
;
clustermap.components.page_title.t46541.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__46537,map__46537__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__46536,map__46536__$1,selection,value,type){
return (function (_46543){var self__ = this;
var _46543__$1 = this;return self__.meta46542;
});})(map__46537,map__46537__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__46536,map__46536__$1,selection,value,type))
;
clustermap.components.page_title.t46541.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__46537,map__46537__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__46536,map__46536__$1,selection,value,type){
return (function (_46543,meta46542__$1){var self__ = this;
var _46543__$1 = this;return (new clustermap.components.page_title.t46541(self__.selection,self__.owner,self__.path_fn,self__.type_descr,self__.p__46525,self__.map__46537,self__.value,self__.name,self__.comm,self__.page_title_component,self__.type,self__.view_path_fn,self__.url,self__.map__46536,meta46542__$1));
});})(map__46537,map__46537__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__46536,map__46536__$1,selection,value,type))
;
clustermap.components.page_title.__GT_t46541 = ((function (map__46537,map__46537__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__46536,map__46536__$1,selection,value,type){
return (function __GT_t46541(selection__$1,owner__$1,path_fn__$2,type_descr__$1,p__46525__$1,map__46537__$2,value__$1,name__$1,comm__$1,page_title_component__$1,type__$1,view_path_fn__$1,url__$1,map__46536__$2,meta46542){return (new clustermap.components.page_title.t46541(selection__$1,owner__$1,path_fn__$2,type_descr__$1,p__46525__$1,map__46537__$2,value__$1,name__$1,comm__$1,page_title_component__$1,type__$1,view_path_fn__$1,url__$1,map__46536__$2,meta46542));
});})(map__46537,map__46537__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__46536,map__46536__$1,selection,value,type))
;
}
return (new clustermap.components.page_title.t46541(selection,owner,path_fn__$1,type_descr,p__46525,map__46537__$1,value,name,comm,page_title_component,type,view_path_fn,url,map__46536__$1,null));
});
clustermap.components.page_title.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.om.burrow(clustermap.components.page_title.page_title_component,cljs.core.constant$keyword$1170),app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1044,shared,cljs.core.constant$keyword$1047,document.getElementById(elem_id)], null));
});
