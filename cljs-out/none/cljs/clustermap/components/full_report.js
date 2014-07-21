// Compiled by ClojureScript 0.0-2268
goog.provide('clustermap.components.full_report');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('clustermap.components.full_report.company_list');
goog.require('clustermap.components.full_report.charts');
goog.require('sablono.core');
goog.require('clustermap.components.full_report.company_site_list');
goog.require('sablono.core');
goog.require('clustermap.components.full_report.charts');
goog.require('jayq.core');
goog.require('clustermap.components.full_report.overview');
goog.require('clustermap.components.full_report.overview');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.components.full_report.company_site_list');
goog.require('clustermap.components.full_report.company_list');
clustermap.components.full_report.single_company_selection_QMARK_ = (function single_company_selection_QMARK_(selector){return (cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,selector))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),(function (){var G__51574 = selector;var G__51574__$1 = (((G__51574 == null))?null:cljs.core.keys.call(null,G__51574));var G__51574__$2 = (((G__51574__$1 == null))?null:cljs.core.first.call(null,G__51574__$1));return G__51574__$2;
})()));
});
clustermap.components.full_report.full_report_component = (function full_report_component(p__51575,owner){var map__51582 = p__51575;var map__51582__$1 = ((cljs.core.seq_QMARK_.call(null,map__51582))?cljs.core.apply.call(null,cljs.core.hash_map,map__51582):map__51582);var data = map__51582__$1;var all_portfolio_companies_summary = cljs.core.get.call(null,map__51582__$1,new cljs.core.Keyword(null,"all-portfolio-companies-summary","all-portfolio-companies-summary",1736783950));var selection = cljs.core.get.call(null,map__51582__$1,new cljs.core.Keyword(null,"selection","selection",975998651));var selector = cljs.core.get.call(null,map__51582__$1,new cljs.core.Keyword(null,"selector","selector",762528866));var map__51583 = om.core.get_shared.call(null,owner);var map__51583__$1 = ((cljs.core.seq_QMARK_.call(null,map__51583))?cljs.core.apply.call(null,cljs.core.hash_map,map__51583):map__51583);var link_fn = cljs.core.get.call(null,map__51583__$1,new cljs.core.Keyword(null,"link-fn","link-fn",-205760857));var path_fn = cljs.core.get.call(null,map__51583__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__51583__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var path_fn__$1 = cljs.core.partial.call(null,path_fn,new cljs.core.Keyword(null,"lists","lists",-884730684));var link_fn__$1 = cljs.core.partial.call(null,link_fn,new cljs.core.Keyword(null,"lists","lists",-884730684));if(typeof clustermap.components.full_report.t51584 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.t51584 = (function (selection,owner,path_fn,data,selector,map__51582,link_fn,full_report_component,comm,all_portfolio_companies_summary,map__51583,p__51575,meta51585){
this.selection = selection;
this.owner = owner;
this.path_fn = path_fn;
this.data = data;
this.selector = selector;
this.map__51582 = map__51582;
this.link_fn = link_fn;
this.full_report_component = full_report_component;
this.comm = comm;
this.all_portfolio_companies_summary = all_portfolio_companies_summary;
this.map__51583 = map__51583;
this.p__51575 = p__51575;
this.meta51585 = meta51585;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.t51584.cljs$lang$type = true;
clustermap.components.full_report.t51584.cljs$lang$ctorStr = "clustermap.components.full-report/t51584";
clustermap.components.full_report.t51584.cljs$lang$ctorPrWriter = ((function (map__51583,map__51583__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__51582,map__51582__$1,data,all_portfolio_companies_summary,selection,selector){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.full-report/t51584");
});})(map__51583,map__51583__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__51582,map__51582__$1,data,all_portfolio_companies_summary,selection,selector))
;
clustermap.components.full_report.t51584.prototype.om$core$IDidUpdate$ = true;
clustermap.components.full_report.t51584.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__51583,map__51583__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__51582,map__51582__$1,data,all_portfolio_companies_summary,selection,selector){
return (function (this$,prev_props,prev_state){var self__ = this;
var this$__$1 = this;var root_node = om.core.get_node.call(null,self__.owner);jayq.core.$.call(null,"[data-toggle='tooltip']",root_node).data("bs.tooltip",false);
return jayq.core.$.call(null,"[data-toggle='tooltip']",root_node).tooltip();
});})(map__51583,map__51583__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__51582,map__51582__$1,data,all_portfolio_companies_summary,selection,selector))
;
clustermap.components.full_report.t51584.prototype.om$core$IRender$ = true;
clustermap.components.full_report.t51584.prototype.om$core$IRender$render$arity$1 = ((function (map__51583,map__51583__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__51582,map__51582__$1,data,all_portfolio_companies_summary,selection,selector){
return (function (this$){var self__ = this;
var this$__$1 = this;var attrs51587 = om.core.build.call(null,clustermap.components.full_report.overview.overview,self__.data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm], null),new cljs.core.Keyword(null,"react-key","react-key",1337881348),"overview"], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs51587))?sablono.interpreter.attributes.call(null,attrs51587):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs51587))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.full_report.charts.charts,self__.data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm], null),new cljs.core.Keyword(null,"react-key","react-key",1337881348),"details"], null))),((clustermap.components.full_report.single_company_selection_QMARK_.call(null,self__.selector))?sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"selection-investments","selection-investments",-647516610).cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.call(null,clustermap.components.full_report.company_site_list.company_site_list,new cljs.core.Keyword(null,"selection-investments","selection-investments",-647516610).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"link-fn","link-fn",-205760857),self__.link_fn,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"react-key","react-key",1337881348),"selection-investments"], null)):null)):sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"selection-investment-aggs","selection-investment-aggs",-292421479).cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.call(null,clustermap.components.full_report.company_list.company_list,new cljs.core.Keyword(null,"selection-investment-aggs","selection-investment-aggs",-292421479).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"link-fn","link-fn",-205760857),self__.link_fn,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"react-key","react-key",1337881348),"selection-investments-by-company"], null)):null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51587),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.full_report.charts.charts,self__.data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm], null),new cljs.core.Keyword(null,"react-key","react-key",1337881348),"details"], null))),((clustermap.components.full_report.single_company_selection_QMARK_.call(null,self__.selector))?sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"selection-investments","selection-investments",-647516610).cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.call(null,clustermap.components.full_report.company_site_list.company_site_list,new cljs.core.Keyword(null,"selection-investments","selection-investments",-647516610).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"link-fn","link-fn",-205760857),self__.link_fn,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"react-key","react-key",1337881348),"selection-investments"], null)):null)):sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"selection-investment-aggs","selection-investment-aggs",-292421479).cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.call(null,clustermap.components.full_report.company_list.company_list,new cljs.core.Keyword(null,"selection-investment-aggs","selection-investment-aggs",-292421479).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"link-fn","link-fn",-205760857),self__.link_fn,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"react-key","react-key",1337881348),"selection-investments-by-company"], null)):null)))], null))));
});})(map__51583,map__51583__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__51582,map__51582__$1,data,all_portfolio_companies_summary,selection,selector))
;
clustermap.components.full_report.t51584.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__51583,map__51583__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__51582,map__51582__$1,data,all_portfolio_companies_summary,selection,selector){
return (function (_51586){var self__ = this;
var _51586__$1 = this;return self__.meta51585;
});})(map__51583,map__51583__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__51582,map__51582__$1,data,all_portfolio_companies_summary,selection,selector))
;
clustermap.components.full_report.t51584.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__51583,map__51583__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__51582,map__51582__$1,data,all_portfolio_companies_summary,selection,selector){
return (function (_51586,meta51585__$1){var self__ = this;
var _51586__$1 = this;return (new clustermap.components.full_report.t51584(self__.selection,self__.owner,self__.path_fn,self__.data,self__.selector,self__.map__51582,self__.link_fn,self__.full_report_component,self__.comm,self__.all_portfolio_companies_summary,self__.map__51583,self__.p__51575,meta51585__$1));
});})(map__51583,map__51583__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__51582,map__51582__$1,data,all_portfolio_companies_summary,selection,selector))
;
clustermap.components.full_report.__GT_t51584 = ((function (map__51583,map__51583__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__51582,map__51582__$1,data,all_portfolio_companies_summary,selection,selector){
return (function __GT_t51584(selection__$1,owner__$1,path_fn__$2,data__$1,selector__$1,map__51582__$2,link_fn__$2,full_report_component__$1,comm__$1,all_portfolio_companies_summary__$1,map__51583__$2,p__51575__$1,meta51585){return (new clustermap.components.full_report.t51584(selection__$1,owner__$1,path_fn__$2,data__$1,selector__$1,map__51582__$2,link_fn__$2,full_report_component__$1,comm__$1,all_portfolio_companies_summary__$1,map__51583__$2,p__51575__$1,meta51585));
});})(map__51583,map__51583__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__51582,map__51582__$1,data,all_portfolio_companies_summary,selection,selector))
;
}
return (new clustermap.components.full_report.t51584(selection,owner,path_fn__$1,data,selector,map__51582__$1,link_fn__$1,full_report_component,comm,all_portfolio_companies_summary,map__51583__$1,p__51575,null));
});
clustermap.components.full_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.full_report.full_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id),new cljs.core.Keyword(null,"shared","shared",-384145993),shared], null));
});

//# sourceMappingURL=full_report.js.map