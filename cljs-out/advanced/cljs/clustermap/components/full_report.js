// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.components.full_report');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('clustermap.components.full_report.company_site_list');
goog.require('sablono.core');
goog.require('clustermap.components.full_report.overview');
goog.require('sablono.core');
goog.require('clustermap.components.full_report.company_site_list');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.components.full_report.overview');
goog.require('clustermap.components.full_report.company_list');
goog.require('clustermap.components.full_report.company_list');
goog.require('clustermap.components.full_report.charts');
goog.require('clustermap.components.full_report.charts');
goog.require('jayq.core');
clustermap.components.full_report.single_company_selection_QMARK_ = (function single_company_selection_QMARK_(selector){return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(1,cljs.core.count(selector))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$629,(function (){var G__34261 = selector;var G__34261__$1 = (((G__34261 == null))?null:cljs.core.keys(G__34261));var G__34261__$2 = (((G__34261__$1 == null))?null:cljs.core.first(G__34261__$1));return G__34261__$2;
})()));
});
clustermap.components.full_report.full_report_component = (function full_report_component(p__34262,owner){var map__34269 = p__34262;var map__34269__$1 = ((cljs.core.seq_QMARK_(map__34269))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34269):map__34269);var data = map__34269__$1;var all_portfolio_companies_summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34269__$1,cljs.core.constant$keyword$730);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34269__$1,cljs.core.constant$keyword$639);var selector = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34269__$1,cljs.core.constant$keyword$731);var map__34270 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__34270__$1 = ((cljs.core.seq_QMARK_(map__34270))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34270):map__34270);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34270__$1,cljs.core.constant$keyword$649);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34270__$1,cljs.core.constant$keyword$632);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34270__$1,cljs.core.constant$keyword$633);if(typeof clustermap.components.full_report.t34271 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.t34271 = (function (map__34270,full_report_component,path_fn,data,all_portfolio_companies_summary,link_fn,selector,selection,comm,owner,p__34262,map__34269,meta34272){
this.map__34270 = map__34270;
this.full_report_component = full_report_component;
this.path_fn = path_fn;
this.data = data;
this.all_portfolio_companies_summary = all_portfolio_companies_summary;
this.link_fn = link_fn;
this.selector = selector;
this.selection = selection;
this.comm = comm;
this.owner = owner;
this.p__34262 = p__34262;
this.map__34269 = map__34269;
this.meta34272 = meta34272;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.t34271.cljs$lang$type = true;
clustermap.components.full_report.t34271.cljs$lang$ctorStr = "clustermap.components.full-report/t34271";
clustermap.components.full_report.t34271.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.full-report/t34271");
});
clustermap.components.full_report.t34271.prototype.om$core$IDidUpdate$ = true;
clustermap.components.full_report.t34271.prototype.om$core$IDidUpdate$did_update$arity$3 = (function (this$,prev_props,prev_state){var self__ = this;
var this$__$1 = this;var root_node = om.core.get_node.cljs$core$IFn$_invoke$arity$1(self__.owner);jayq.core.$.cljs$core$IFn$_invoke$arity$2("[data-toggle='tooltip']",root_node).data("bs.tooltip",false);
return jayq.core.$.cljs$core$IFn$_invoke$arity$2("[data-toggle='tooltip']",root_node).tooltip();
});
clustermap.components.full_report.t34271.prototype.om$core$IRender$ = true;
clustermap.components.full_report.t34271.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var attrs34274 = om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.overview.overview,self__.data,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$620,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$633,self__.comm], null),cljs.core.constant$keyword$615,"overview"], null));if(cljs.core.map_QMARK_(attrs34274))
{return React.DOM.div(sablono.interpreter.attributes(attrs34274),sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.charts.charts,self__.data,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$620,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$633,self__.comm], null),cljs.core.constant$keyword$615,"details"], null))),((clustermap.components.full_report.single_company_selection_QMARK_(self__.selector))?sablono.interpreter.interpret((cljs.core.truth_(cljs.core.constant$keyword$732.cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_site_list.company_site_list,cljs.core.constant$keyword$732.cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$620,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$633,self__.comm,cljs.core.constant$keyword$649,self__.link_fn,cljs.core.constant$keyword$632,self__.path_fn], null),cljs.core.constant$keyword$615,"selection-investments"], null)):null)):sablono.interpreter.interpret((cljs.core.truth_(cljs.core.constant$keyword$733.cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.company_list,cljs.core.constant$keyword$733.cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$620,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$633,self__.comm,cljs.core.constant$keyword$649,self__.link_fn,cljs.core.constant$keyword$632,self__.path_fn], null),cljs.core.constant$keyword$615,"selection-investments-by-company"], null)):null))));
} else
{return React.DOM.div(null,sablono.interpreter.interpret(attrs34274),sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.charts.charts,self__.data,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$620,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$633,self__.comm], null),cljs.core.constant$keyword$615,"details"], null))),((clustermap.components.full_report.single_company_selection_QMARK_(self__.selector))?sablono.interpreter.interpret((cljs.core.truth_(cljs.core.constant$keyword$732.cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_site_list.company_site_list,cljs.core.constant$keyword$732.cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$620,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$633,self__.comm,cljs.core.constant$keyword$649,self__.link_fn,cljs.core.constant$keyword$632,self__.path_fn], null),cljs.core.constant$keyword$615,"selection-investments"], null)):null)):sablono.interpreter.interpret((cljs.core.truth_(cljs.core.constant$keyword$733.cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.company_list,cljs.core.constant$keyword$733.cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$620,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$633,self__.comm,cljs.core.constant$keyword$649,self__.link_fn,cljs.core.constant$keyword$632,self__.path_fn], null),cljs.core.constant$keyword$615,"selection-investments-by-company"], null)):null))));
}
});
clustermap.components.full_report.t34271.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34273){var self__ = this;
var _34273__$1 = this;return self__.meta34272;
});
clustermap.components.full_report.t34271.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34273,meta34272__$1){var self__ = this;
var _34273__$1 = this;return (new clustermap.components.full_report.t34271(self__.map__34270,self__.full_report_component,self__.path_fn,self__.data,self__.all_portfolio_companies_summary,self__.link_fn,self__.selector,self__.selection,self__.comm,self__.owner,self__.p__34262,self__.map__34269,meta34272__$1));
});
clustermap.components.full_report.__GT_t34271 = (function __GT_t34271(map__34270__$2,full_report_component__$1,path_fn__$1,data__$1,all_portfolio_companies_summary__$1,link_fn__$1,selector__$1,selection__$1,comm__$1,owner__$1,p__34262__$1,map__34269__$2,meta34272){return (new clustermap.components.full_report.t34271(map__34270__$2,full_report_component__$1,path_fn__$1,data__$1,all_portfolio_companies_summary__$1,link_fn__$1,selector__$1,selection__$1,comm__$1,owner__$1,p__34262__$1,map__34269__$2,meta34272));
});
}
return (new clustermap.components.full_report.t34271(map__34270__$1,full_report_component,path_fn,data,all_portfolio_companies_summary,link_fn,selector,selection,comm,owner,p__34262,map__34269__$1,null));
});
clustermap.components.full_report.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.components.full_report.full_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$624,document.getElementById(elem_id),cljs.core.constant$keyword$619,shared], null));
});
