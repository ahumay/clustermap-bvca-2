// Compiled by ClojureScript 0.0-2227
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
clustermap.components.full_report.single_company_selection_QMARK_ = (function single_company_selection_QMARK_(selector){return (cljs.core._EQ_.call(null,1,cljs.core.count.call(null,selector))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),(function (){var G__12478 = selector;var G__12478__$1 = (((G__12478 == null))?null:cljs.core.keys.call(null,G__12478));var G__12478__$2 = (((G__12478__$1 == null))?null:cljs.core.first.call(null,G__12478__$1));return G__12478__$2;
})()));
});
clustermap.components.full_report.full_report_component = (function full_report_component(p__12479,owner){var map__12486 = p__12479;var map__12486__$1 = ((cljs.core.seq_QMARK_.call(null,map__12486))?cljs.core.apply.call(null,cljs.core.hash_map,map__12486):map__12486);var data = map__12486__$1;var all_portfolio_companies_summary = cljs.core.get.call(null,map__12486__$1,new cljs.core.Keyword(null,"all-portfolio-companies-summary","all-portfolio-companies-summary",3049476533));var selection = cljs.core.get.call(null,map__12486__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));var selector = cljs.core.get.call(null,map__12486__$1,new cljs.core.Keyword(null,"selector","selector",2205476689));var map__12487 = om.core.get_shared.call(null,owner);var map__12487__$1 = ((cljs.core.seq_QMARK_.call(null,map__12487))?cljs.core.apply.call(null,cljs.core.hash_map,map__12487):map__12487);var link_fn = cljs.core.get.call(null,map__12487__$1,new cljs.core.Keyword(null,"link-fn","link-fn",1190936301));var path_fn = cljs.core.get.call(null,map__12487__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__12487__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var path_fn__$1 = cljs.core.partial.call(null,path_fn,new cljs.core.Keyword(null,"lists","lists",1116886791));var link_fn__$1 = cljs.core.partial.call(null,link_fn,new cljs.core.Keyword(null,"lists","lists",1116886791));if(typeof clustermap.components.full_report.t12488 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.t12488 = (function (selection,owner,path_fn,data,p__12479,selector,map__12487,link_fn,full_report_component,comm,map__12486,all_portfolio_companies_summary,meta12489){
this.selection = selection;
this.owner = owner;
this.path_fn = path_fn;
this.data = data;
this.p__12479 = p__12479;
this.selector = selector;
this.map__12487 = map__12487;
this.link_fn = link_fn;
this.full_report_component = full_report_component;
this.comm = comm;
this.map__12486 = map__12486;
this.all_portfolio_companies_summary = all_portfolio_companies_summary;
this.meta12489 = meta12489;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.t12488.cljs$lang$type = true;
clustermap.components.full_report.t12488.cljs$lang$ctorStr = "clustermap.components.full-report/t12488";
clustermap.components.full_report.t12488.cljs$lang$ctorPrWriter = ((function (map__12487,map__12487__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__12486,map__12486__$1,data,all_portfolio_companies_summary,selection,selector){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"clustermap.components.full-report/t12488");
});})(map__12487,map__12487__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__12486,map__12486__$1,data,all_portfolio_companies_summary,selection,selector))
;
clustermap.components.full_report.t12488.prototype.om$core$IDidUpdate$ = true;
clustermap.components.full_report.t12488.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__12487,map__12487__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__12486,map__12486__$1,data,all_portfolio_companies_summary,selection,selector){
return (function (this$,prev_props,prev_state){var self__ = this;
var this$__$1 = this;var root_node = om.core.get_node.call(null,self__.owner);jayq.core.$.call(null,"[data-toggle='tooltip']",root_node).data("bs.tooltip",false);
return jayq.core.$.call(null,"[data-toggle='tooltip']",root_node).tooltip();
});})(map__12487,map__12487__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__12486,map__12486__$1,data,all_portfolio_companies_summary,selection,selector))
;
clustermap.components.full_report.t12488.prototype.om$core$IRender$ = true;
clustermap.components.full_report.t12488.prototype.om$core$IRender$render$arity$1 = ((function (map__12487,map__12487__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__12486,map__12486__$1,data,all_portfolio_companies_summary,selection,selector){
return (function (this$){var self__ = this;
var this$__$1 = this;var attrs12491 = om.core.build.call(null,clustermap.components.full_report.overview.overview,self__.data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm], null),new cljs.core.Keyword(null,"react-key","react-key",4184082563),"overview"], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs12491))?sablono.interpreter.attributes.call(null,attrs12491):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12491))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.full_report.charts.charts,self__.data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm], null),new cljs.core.Keyword(null,"react-key","react-key",4184082563),"details"], null))),((clustermap.components.full_report.single_company_selection_QMARK_.call(null,self__.selector))?sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"selection-investments","selection-investments",2385751217).cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.call(null,clustermap.components.full_report.company_site_list.company_site_list,new cljs.core.Keyword(null,"selection-investments","selection-investments",2385751217).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"link-fn","link-fn",1190936301),self__.link_fn,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"react-key","react-key",4184082563),"selection-investments"], null)):null)):sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"selection-investment-aggs","selection-investment-aggs",989474685).cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.call(null,clustermap.components.full_report.company_list.company_list,new cljs.core.Keyword(null,"selection-investment-aggs","selection-investment-aggs",989474685).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"link-fn","link-fn",1190936301),self__.link_fn,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"react-key","react-key",4184082563),"selection-investments-by-company"], null)):null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12491),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.full_report.charts.charts,self__.data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm], null),new cljs.core.Keyword(null,"react-key","react-key",4184082563),"details"], null))),((clustermap.components.full_report.single_company_selection_QMARK_.call(null,self__.selector))?sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"selection-investments","selection-investments",2385751217).cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.call(null,clustermap.components.full_report.company_site_list.company_site_list,new cljs.core.Keyword(null,"selection-investments","selection-investments",2385751217).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"link-fn","link-fn",1190936301),self__.link_fn,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"react-key","react-key",4184082563),"selection-investments"], null)):null)):sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"selection-investment-aggs","selection-investment-aggs",989474685).cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.call(null,clustermap.components.full_report.company_list.company_list,new cljs.core.Keyword(null,"selection-investment-aggs","selection-investment-aggs",989474685).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"link-fn","link-fn",1190936301),self__.link_fn,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"react-key","react-key",4184082563),"selection-investments-by-company"], null)):null)))], null))));
});})(map__12487,map__12487__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__12486,map__12486__$1,data,all_portfolio_companies_summary,selection,selector))
;
clustermap.components.full_report.t12488.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__12487,map__12487__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__12486,map__12486__$1,data,all_portfolio_companies_summary,selection,selector){
return (function (_12490){var self__ = this;
var _12490__$1 = this;return self__.meta12489;
});})(map__12487,map__12487__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__12486,map__12486__$1,data,all_portfolio_companies_summary,selection,selector))
;
clustermap.components.full_report.t12488.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__12487,map__12487__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__12486,map__12486__$1,data,all_portfolio_companies_summary,selection,selector){
return (function (_12490,meta12489__$1){var self__ = this;
var _12490__$1 = this;return (new clustermap.components.full_report.t12488(self__.selection,self__.owner,self__.path_fn,self__.data,self__.p__12479,self__.selector,self__.map__12487,self__.link_fn,self__.full_report_component,self__.comm,self__.map__12486,self__.all_portfolio_companies_summary,meta12489__$1));
});})(map__12487,map__12487__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__12486,map__12486__$1,data,all_portfolio_companies_summary,selection,selector))
;
clustermap.components.full_report.__GT_t12488 = ((function (map__12487,map__12487__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__12486,map__12486__$1,data,all_portfolio_companies_summary,selection,selector){
return (function __GT_t12488(selection__$1,owner__$1,path_fn__$2,data__$1,p__12479__$1,selector__$1,map__12487__$2,link_fn__$2,full_report_component__$1,comm__$1,map__12486__$2,all_portfolio_companies_summary__$1,meta12489){return (new clustermap.components.full_report.t12488(selection__$1,owner__$1,path_fn__$2,data__$1,p__12479__$1,selector__$1,map__12487__$2,link_fn__$2,full_report_component__$1,comm__$1,map__12486__$2,all_portfolio_companies_summary__$1,meta12489));
});})(map__12487,map__12487__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__12486,map__12486__$1,data,all_portfolio_companies_summary,selection,selector))
;
}
return (new clustermap.components.full_report.t12488(selection,owner,path_fn__$1,data,p__12479,selector,map__12487__$1,link_fn__$1,full_report_component,comm,map__12486__$1,all_portfolio_companies_summary,null));
});
clustermap.components.full_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.full_report.full_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById(elem_id),new cljs.core.Keyword(null,"shared","shared",4405305303),shared], null));
});
