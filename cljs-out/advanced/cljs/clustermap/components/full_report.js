// Compiled by ClojureScript 0.0-2322
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
clustermap.components.full_report.single_company_selection_QMARK_ = (function single_company_selection_QMARK_(selector){return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(selector))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1137,(function (){var G__46195 = selector;var G__46195__$1 = (((G__46195 == null))?null:cljs.core.keys(G__46195));var G__46195__$2 = (((G__46195__$1 == null))?null:cljs.core.first(G__46195__$1));return G__46195__$2;
})()));
});
clustermap.components.full_report.full_report_component = (function full_report_component(p__46196,owner){var map__46203 = p__46196;var map__46203__$1 = ((cljs.core.seq_QMARK_(map__46203))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46203):map__46203);var data = map__46203__$1;var all_portfolio_companies_summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46203__$1,cljs.core.constant$keyword$1191);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46203__$1,cljs.core.constant$keyword$1170);var selector = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46203__$1,cljs.core.constant$keyword$1192);var map__46204 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__46204__$1 = ((cljs.core.seq_QMARK_(map__46204))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46204):map__46204);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46204__$1,cljs.core.constant$keyword$1136);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46204__$1,cljs.core.constant$keyword$1135);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46204__$1,cljs.core.constant$keyword$1146);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,cljs.core.constant$keyword$1193);var link_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(link_fn,cljs.core.constant$keyword$1193);if(typeof clustermap.components.full_report.t46205 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.t46205 = (function (selection,owner,path_fn,map__46204,data,map__46203,selector,link_fn,full_report_component,comm,p__46196,all_portfolio_companies_summary,meta46206){
this.selection = selection;
this.owner = owner;
this.path_fn = path_fn;
this.map__46204 = map__46204;
this.data = data;
this.map__46203 = map__46203;
this.selector = selector;
this.link_fn = link_fn;
this.full_report_component = full_report_component;
this.comm = comm;
this.p__46196 = p__46196;
this.all_portfolio_companies_summary = all_portfolio_companies_summary;
this.meta46206 = meta46206;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.t46205.cljs$lang$type = true;
clustermap.components.full_report.t46205.cljs$lang$ctorStr = "clustermap.components.full-report/t46205";
clustermap.components.full_report.t46205.cljs$lang$ctorPrWriter = ((function (map__46204,map__46204__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__46203,map__46203__$1,data,all_portfolio_companies_summary,selection,selector){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.full-report/t46205");
});})(map__46204,map__46204__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__46203,map__46203__$1,data,all_portfolio_companies_summary,selection,selector))
;
clustermap.components.full_report.t46205.prototype.om$core$IDidUpdate$ = true;
clustermap.components.full_report.t46205.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__46204,map__46204__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__46203,map__46203__$1,data,all_portfolio_companies_summary,selection,selector){
return (function (this$,prev_props,prev_state){var self__ = this;
var this$__$1 = this;var root_node = om.core.get_node.cljs$core$IFn$_invoke$arity$1(self__.owner);jayq.core.$.cljs$core$IFn$_invoke$arity$2("[data-toggle='tooltip']",root_node).data("bs.tooltip",false);
return jayq.core.$.cljs$core$IFn$_invoke$arity$2("[data-toggle='tooltip']",root_node).tooltip();
});})(map__46204,map__46204__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__46203,map__46203__$1,data,all_portfolio_companies_summary,selection,selector))
;
clustermap.components.full_report.t46205.prototype.om$core$IRender$ = true;
clustermap.components.full_report.t46205.prototype.om$core$IRender$render$arity$1 = ((function (map__46204,map__46204__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__46203,map__46203__$1,data,all_portfolio_companies_summary,selection,selector){
return (function (this$){var self__ = this;
var this$__$1 = this;var attrs46208 = om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.overview.overview,self__.data,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1042,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1146,self__.comm], null),cljs.core.constant$keyword$1039,"overview"], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs46208))?sablono.interpreter.attributes(attrs46208):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs46208))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.charts.charts,self__.data,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1042,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1146,self__.comm], null),cljs.core.constant$keyword$1039,"details"], null))),((clustermap.components.full_report.single_company_selection_QMARK_(self__.selector))?sablono.interpreter.interpret((cljs.core.truth_(cljs.core.constant$keyword$1194.cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_site_list.company_site_list,cljs.core.constant$keyword$1194.cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1042,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1146,self__.comm,cljs.core.constant$keyword$1136,self__.link_fn,cljs.core.constant$keyword$1135,self__.path_fn], null),cljs.core.constant$keyword$1039,"selection-investments"], null)):null)):sablono.interpreter.interpret((cljs.core.truth_(cljs.core.constant$keyword$1195.cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.company_list,cljs.core.constant$keyword$1195.cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1042,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1146,self__.comm,cljs.core.constant$keyword$1136,self__.link_fn,cljs.core.constant$keyword$1135,self__.path_fn], null),cljs.core.constant$keyword$1039,"selection-investments-by-company"], null)):null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs46208),sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.charts.charts,self__.data,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1042,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1146,self__.comm], null),cljs.core.constant$keyword$1039,"details"], null))),((clustermap.components.full_report.single_company_selection_QMARK_(self__.selector))?sablono.interpreter.interpret((cljs.core.truth_(cljs.core.constant$keyword$1194.cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_site_list.company_site_list,cljs.core.constant$keyword$1194.cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1042,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1146,self__.comm,cljs.core.constant$keyword$1136,self__.link_fn,cljs.core.constant$keyword$1135,self__.path_fn], null),cljs.core.constant$keyword$1039,"selection-investments"], null)):null)):sablono.interpreter.interpret((cljs.core.truth_(cljs.core.constant$keyword$1195.cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.company_list,cljs.core.constant$keyword$1195.cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1042,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1146,self__.comm,cljs.core.constant$keyword$1136,self__.link_fn,cljs.core.constant$keyword$1135,self__.path_fn], null),cljs.core.constant$keyword$1039,"selection-investments-by-company"], null)):null)))], null))));
});})(map__46204,map__46204__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__46203,map__46203__$1,data,all_portfolio_companies_summary,selection,selector))
;
clustermap.components.full_report.t46205.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__46204,map__46204__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__46203,map__46203__$1,data,all_portfolio_companies_summary,selection,selector){
return (function (_46207){var self__ = this;
var _46207__$1 = this;return self__.meta46206;
});})(map__46204,map__46204__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__46203,map__46203__$1,data,all_portfolio_companies_summary,selection,selector))
;
clustermap.components.full_report.t46205.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__46204,map__46204__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__46203,map__46203__$1,data,all_portfolio_companies_summary,selection,selector){
return (function (_46207,meta46206__$1){var self__ = this;
var _46207__$1 = this;return (new clustermap.components.full_report.t46205(self__.selection,self__.owner,self__.path_fn,self__.map__46204,self__.data,self__.map__46203,self__.selector,self__.link_fn,self__.full_report_component,self__.comm,self__.p__46196,self__.all_portfolio_companies_summary,meta46206__$1));
});})(map__46204,map__46204__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__46203,map__46203__$1,data,all_portfolio_companies_summary,selection,selector))
;
clustermap.components.full_report.__GT_t46205 = ((function (map__46204,map__46204__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__46203,map__46203__$1,data,all_portfolio_companies_summary,selection,selector){
return (function __GT_t46205(selection__$1,owner__$1,path_fn__$2,map__46204__$2,data__$1,map__46203__$2,selector__$1,link_fn__$2,full_report_component__$1,comm__$1,p__46196__$1,all_portfolio_companies_summary__$1,meta46206){return (new clustermap.components.full_report.t46205(selection__$1,owner__$1,path_fn__$2,map__46204__$2,data__$1,map__46203__$2,selector__$1,link_fn__$2,full_report_component__$1,comm__$1,p__46196__$1,all_portfolio_companies_summary__$1,meta46206));
});})(map__46204,map__46204__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__46203,map__46203__$1,data,all_portfolio_companies_summary,selection,selector))
;
}
return (new clustermap.components.full_report.t46205(selection,owner,path_fn__$1,map__46204__$1,data,map__46203__$1,selector,link_fn__$1,full_report_component,comm,p__46196,all_portfolio_companies_summary,null));
});
clustermap.components.full_report.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.components.full_report.full_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1047,document.getElementById(elem_id),cljs.core.constant$keyword$1044,shared], null));
});
