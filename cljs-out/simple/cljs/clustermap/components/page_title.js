// Compiled by ClojureScript 0.0-2227
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
clustermap.components.page_title.describe_type = (function describe_type(type){var pred__12866 = cljs.core._EQ_;var expr__12867 = type;if(cljs.core.truth_(pred__12866.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__12867)))
{return "Investor-backed company";
} else
{if(cljs.core.truth_(pred__12866.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__12867)))
{return "Investor";
} else
{if(cljs.core.truth_(pred__12866.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__12867)))
{return "Constituency";
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__12867))));
}
}
}
});
clustermap.components.page_title.page_title_component = (function page_title_component(p__12869,owner){var map__12880 = p__12869;var map__12880__$1 = ((cljs.core.seq_QMARK_.call(null,map__12880))?cljs.core.apply.call(null,cljs.core.hash_map,map__12880):map__12880);var selection = map__12880__$1;var value = cljs.core.get.call(null,map__12880__$1,new cljs.core.Keyword(null,"value","value",1125876963));var type = cljs.core.get.call(null,map__12880__$1,new cljs.core.Keyword(null,"type","type",1017479852));var map__12881 = om.core.get_shared.call(null,owner);var map__12881__$1 = ((cljs.core.seq_QMARK_.call(null,map__12881))?cljs.core.apply.call(null,cljs.core.hash_map,map__12881):map__12881);var view_path_fn = cljs.core.get.call(null,map__12881__$1,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",978272186));var path_fn = cljs.core.get.call(null,map__12881__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__12881__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var path_fn__$1 = cljs.core.partial.call(null,path_fn,new cljs.core.Keyword(null,"lists","lists",1116886791));var type_descr = (function (){var G__12882 = selection;var G__12882__$1 = (((G__12882 == null))?null:new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(G__12882));var G__12882__$2 = (((G__12882__$1 == null))?null:clustermap.components.page_title.describe_type.call(null,G__12882__$1));return G__12882__$2;
})();var name = (function (){var G__12883 = selection;var G__12883__$1 = (((G__12883 == null))?null:new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(G__12883));var G__12883__$2 = (((G__12883__$1 == null))?null:new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(G__12883__$1));return G__12883__$2;
})();var url = (function (){var G__12884 = selection;var G__12884__$1 = (((G__12884 == null))?null:new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(G__12884));var G__12884__$2 = (((G__12884__$1 == null))?null:new cljs.core.Keyword(null,"web_url","web_url",2237655414).cljs$core$IFn$_invoke$arity$1(G__12884__$1));return G__12884__$2;
})();if(typeof clustermap.components.page_title.t12885 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.page_title.t12885 = (function (selection,owner,path_fn,type_descr,map__12880,value,name,comm,page_title_component,type,view_path_fn,p__12869,map__12881,url,meta12886){
this.selection = selection;
this.owner = owner;
this.path_fn = path_fn;
this.type_descr = type_descr;
this.map__12880 = map__12880;
this.value = value;
this.name = name;
this.comm = comm;
this.page_title_component = page_title_component;
this.type = type;
this.view_path_fn = view_path_fn;
this.p__12869 = p__12869;
this.map__12881 = map__12881;
this.url = url;
this.meta12886 = meta12886;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.page_title.t12885.cljs$lang$type = true;
clustermap.components.page_title.t12885.cljs$lang$ctorStr = "clustermap.components.page-title/t12885";
clustermap.components.page_title.t12885.cljs$lang$ctorPrWriter = ((function (map__12881,map__12881__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__12880,map__12880__$1,selection,value,type){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"clustermap.components.page-title/t12885");
});})(map__12881,map__12881__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__12880,map__12880__$1,selection,value,type))
;
clustermap.components.page_title.t12885.prototype.om$core$IRender$ = true;
clustermap.components.page_title.t12885.prototype.om$core$IRender$render$arity$1 = ((function (map__12881,map__12881__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__12880,map__12880__$1,selection,value,type){
return (function (this__9410__auto__){var self__ = this;
var this__9410__auto____$1 = this;return React.DOM.div({"id": "page-title"},React.DOM.a({"className": "btn btn-link", "href": self__.view_path_fn.call(null,new cljs.core.Keyword(null,"map","map",1014012110))},"View on map"),sablono.interpreter.interpret.call(null,(cljs.core.truth_(self__.type_descr)?clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn):null)),(function (){var attrs12888 = (function (){var or__3539__auto__ = self__.type_descr;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return "All investor-backed companies";
}
})();return cljs.core.apply.call(null,React.DOM.h2,((cljs.core.map_QMARK_.call(null,attrs12888))?sablono.interpreter.attributes.call(null,attrs12888):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12888))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12888)], null))));
})(),(function (){var attrs12889 = (function (){var or__3539__auto__ = self__.name;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return "UK wide";
}
})();return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs12889))?sablono.interpreter.attributes.call(null,attrs12889):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12889))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,self__.type,new cljs.core.Keyword(null,"constituency","constituency",3902864696)))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",1123453049),"\u00A0(",new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.value),", ",new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12889),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,self__.type,new cljs.core.Keyword(null,"constituency","constituency",3902864696)))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",1123453049),"\u00A0(",new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.value),", ",new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null))], null))));
})(),(cljs.core.truth_(self__.url)?React.DOM.a({"href": self__.url, "target": "_blank"},sablono.interpreter.interpret.call(null,self__.url)):null));
});})(map__12881,map__12881__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__12880,map__12880__$1,selection,value,type))
;
clustermap.components.page_title.t12885.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__12881,map__12881__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__12880,map__12880__$1,selection,value,type){
return (function (_12887){var self__ = this;
var _12887__$1 = this;return self__.meta12886;
});})(map__12881,map__12881__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__12880,map__12880__$1,selection,value,type))
;
clustermap.components.page_title.t12885.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__12881,map__12881__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__12880,map__12880__$1,selection,value,type){
return (function (_12887,meta12886__$1){var self__ = this;
var _12887__$1 = this;return (new clustermap.components.page_title.t12885(self__.selection,self__.owner,self__.path_fn,self__.type_descr,self__.map__12880,self__.value,self__.name,self__.comm,self__.page_title_component,self__.type,self__.view_path_fn,self__.p__12869,self__.map__12881,self__.url,meta12886__$1));
});})(map__12881,map__12881__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__12880,map__12880__$1,selection,value,type))
;
clustermap.components.page_title.__GT_t12885 = ((function (map__12881,map__12881__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__12880,map__12880__$1,selection,value,type){
return (function __GT_t12885(selection__$1,owner__$1,path_fn__$2,type_descr__$1,map__12880__$2,value__$1,name__$1,comm__$1,page_title_component__$1,type__$1,view_path_fn__$1,p__12869__$1,map__12881__$2,url__$1,meta12886){return (new clustermap.components.page_title.t12885(selection__$1,owner__$1,path_fn__$2,type_descr__$1,map__12880__$2,value__$1,name__$1,comm__$1,page_title_component__$1,type__$1,view_path_fn__$1,p__12869__$1,map__12881__$2,url__$1,meta12886));
});})(map__12881,map__12881__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__12880,map__12880__$1,selection,value,type))
;
}
return (new clustermap.components.page_title.t12885(selection,owner,path_fn__$1,type_descr,map__12880__$1,value,name,comm,page_title_component,type,view_path_fn,p__12869,map__12881__$1,url,null));
});
clustermap.components.page_title.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.om.burrow.call(null,clustermap.components.page_title.page_title_component,new cljs.core.Keyword(null,"selection","selection",3592905982)),app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",4405305303),shared,new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById(elem_id)], null));
});
