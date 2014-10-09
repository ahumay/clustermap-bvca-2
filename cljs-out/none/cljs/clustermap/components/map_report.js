// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.components.map_report');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.formats.string');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.number');
goog.require('om.dom');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('om.dom');
goog.require('clustermap.api');
goog.require('clustermap.formats.string');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('domina.events');
goog.require('domina.events');
goog.require('clustermap.ordered_resource');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.string');
goog.require('clustermap.components.reset_selection_button');
goog.require('clustermap.components.reset_selection_button');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.api');
goog.require('clustermap.ordered_resource');
clustermap.components.map_report.full_report_button = (function full_report_button(comm,view_path_fn){return React.DOM.a({"className": "btn btn-link", "href": view_path_fn.call(null,new cljs.core.Keyword(null,"lists","lists",-884730684))},React.DOM.i({"className": "icon-lists-sm"}),"Full report");
});
clustermap.components.map_report.summary_stats_report = (function summary_stats_report(map_report_data,comm,view_path_fn,p__53431){var map__53453 = p__53431;var map__53453__$1 = ((cljs.core.seq_QMARK_.call(null,map__53453))?cljs.core.apply.call(null,cljs.core.hash_map,map__53453):map__53453);var summary_stats_data = map__53453__$1;var map__53454 = cljs.core.get.call(null,map__53453__$1,new cljs.core.Keyword(null,"data","data",-232669377));var map__53454__$1 = ((cljs.core.seq_QMARK_.call(null,map__53454))?cljs.core.apply.call(null,cljs.core.hash_map,map__53454):map__53454);var data = map__53454__$1;var map__53455 = cljs.core.get.call(null,map__53454__$1,new cljs.core.Keyword(null,"!latest_employee_count","!latest_employee_count",-1445524938));var map__53455__$1 = ((cljs.core.seq_QMARK_.call(null,map__53455))?cljs.core.apply.call(null,cljs.core.hash_map,map__53455):map__53455);var sum_employee_count = cljs.core.get.call(null,map__53455__$1,new cljs.core.Keyword(null,"sum","sum",136986814));var count = cljs.core.get.call(null,map__53455__$1,new cljs.core.Keyword(null,"viewfilter_doc_count","viewfilter_doc_count",231005032));var map__53456 = cljs.core.get.call(null,map__53454__$1,new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972));var map__53456__$1 = ((cljs.core.seq_QMARK_.call(null,map__53456))?cljs.core.apply.call(null,cljs.core.hash_map,map__53456):map__53456);var sum_turnover = cljs.core.get.call(null,map__53456__$1,new cljs.core.Keyword(null,"sum","sum",136986814));return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Summary stats")),React.DOM.ul(null,(function (){var attrs53459 = clustermap.formats.number.fnum.call(null,count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs53459))?sablono.interpreter.attributes.call(null,attrs53459):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs53459))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs53459),React.DOM.small(null,"Companies")], null))));
})(),(function (){var attrs53464 = clustermap.formats.money.fmoney.call(null,sum_turnover,new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs53464))?sablono.interpreter.attributes.call(null,attrs53464):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs53464))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs53464),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs53469 = clustermap.formats.number.fnum.call(null,sum_employee_count,new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs53469))?sablono.interpreter.attributes.call(null,attrs53469):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs53469))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs53469),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,comm,view_path_fn)));
});
clustermap.components.map_report.request_summary_stats = (function request_summary_stats(resource,index,index_type,attrs,filter,bounds){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.summary_stats,index,index_type,attrs,filter,bounds);
});
clustermap.components.map_report.map_report_component = (function map_report_component(p__53474,owner){var map__53494 = p__53474;var map__53494__$1 = ((cljs.core.seq_QMARK_.call(null,map__53494))?cljs.core.apply.call(null,cljs.core.hash_map,map__53494):map__53494);var data = map__53494__$1;var map__53495 = cljs.core.get.call(null,map__53494__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__53495__$1 = ((cljs.core.seq_QMARK_.call(null,map__53495))?cljs.core.apply.call(null,cljs.core.hash_map,map__53495):map__53495);var filter_by_view = cljs.core.get.call(null,map__53495__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var filt = cljs.core.get.call(null,map__53495__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var map__53496 = cljs.core.get.call(null,map__53494__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__53496__$1 = ((cljs.core.seq_QMARK_.call(null,map__53496))?cljs.core.apply.call(null,cljs.core.hash_map,map__53496):map__53496);var map_report = map__53496__$1;var map__53497 = cljs.core.get.call(null,map__53496__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__53497__$1 = ((cljs.core.seq_QMARK_.call(null,map__53497))?cljs.core.apply.call(null,cljs.core.hash_map,map__53497):map__53497);var controls = map__53497__$1;var map__53498 = cljs.core.get.call(null,map__53497__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__53498__$1 = ((cljs.core.seq_QMARK_.call(null,map__53498))?cljs.core.apply.call(null,cljs.core.hash_map,map__53498):map__53498);var summary_stats = map__53498__$1;var variables = cljs.core.get.call(null,map__53498__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var index_type = cljs.core.get.call(null,map__53498__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var index = cljs.core.get.call(null,map__53498__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var summary_stats_data = cljs.core.get.call(null,map__53496__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));var map__53499 = cljs.core.get.call(null,map__53494__$1,new cljs.core.Keyword(null,"map-controls","map-controls",-1453318552));var map__53499__$1 = ((cljs.core.seq_QMARK_.call(null,map__53499))?cljs.core.apply.call(null,cljs.core.hash_map,map__53499):map__53499);var bounds = cljs.core.get.call(null,map__53499__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));if(typeof clustermap.components.map_report.t53500 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t53500 = (function (filt,index_type,owner,map__53495,filter_by_view,data,index,p__53474,map__53494,map__53496,map__53499,controls,summary_stats_data,map_report,summary_stats,map_report_component,variables,bounds,map__53498,map__53497,meta53501){
this.filt = filt;
this.index_type = index_type;
this.owner = owner;
this.map__53495 = map__53495;
this.filter_by_view = filter_by_view;
this.data = data;
this.index = index;
this.p__53474 = p__53474;
this.map__53494 = map__53494;
this.map__53496 = map__53496;
this.map__53499 = map__53499;
this.controls = controls;
this.summary_stats_data = summary_stats_data;
this.map_report = map_report;
this.summary_stats = summary_stats;
this.map_report_component = map_report_component;
this.variables = variables;
this.bounds = bounds;
this.map__53498 = map__53498;
this.map__53497 = map__53497;
this.meta53501 = meta53501;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t53500.cljs$lang$type = true;
clustermap.components.map_report.t53500.cljs$lang$ctorStr = "clustermap.components.map-report/t53500";
clustermap.components.map_report.t53500.cljs$lang$ctorPrWriter = ((function (map__53494,map__53494__$1,data,map__53495,map__53495__$1,filter_by_view,filt,map__53496,map__53496__$1,map_report,map__53497,map__53497__$1,controls,map__53498,map__53498__$1,summary_stats,variables,index_type,index,summary_stats_data,map__53499,map__53499__$1,bounds){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.map-report/t53500");
});})(map__53494,map__53494__$1,data,map__53495,map__53495__$1,filter_by_view,filt,map__53496,map__53496__$1,map_report,map__53497,map__53497__$1,controls,map__53498,map__53498__$1,summary_stats,variables,index_type,index,summary_stats_data,map__53499,map__53499__$1,bounds))
;
clustermap.components.map_report.t53500.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map_report.t53500.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__53494,map__53494__$1,data,map__53495,map__53495__$1,filter_by_view,filt,map__53496,map__53496__$1,map_report,map__53497,map__53497__$1,controls,map__53498,map__53498__$1,summary_stats,variables,index_type,index,summary_stats_data,map__53499,map__53499__$1,bounds){
return (function (_,p__53503,p__53504){var self__ = this;
var map__53505 = p__53503;var map__53505__$1 = ((cljs.core.seq_QMARK_.call(null,map__53505))?cljs.core.apply.call(null,cljs.core.hash_map,map__53505):map__53505);var next_data = map__53505__$1;var map__53506 = cljs.core.get.call(null,map__53505__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__53506__$1 = ((cljs.core.seq_QMARK_.call(null,map__53506))?cljs.core.apply.call(null,cljs.core.hash_map,map__53506):map__53506);var next_filter_by_view = cljs.core.get.call(null,map__53506__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var next_filt = cljs.core.get.call(null,map__53506__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var map__53507 = cljs.core.get.call(null,map__53505__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__53507__$1 = ((cljs.core.seq_QMARK_.call(null,map__53507))?cljs.core.apply.call(null,cljs.core.hash_map,map__53507):map__53507);var next_map_report = map__53507__$1;var map__53508 = cljs.core.get.call(null,map__53507__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__53508__$1 = ((cljs.core.seq_QMARK_.call(null,map__53508))?cljs.core.apply.call(null,cljs.core.hash_map,map__53508):map__53508);var next_controls = map__53508__$1;var map__53509 = cljs.core.get.call(null,map__53508__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__53509__$1 = ((cljs.core.seq_QMARK_.call(null,map__53509))?cljs.core.apply.call(null,cljs.core.hash_map,map__53509):map__53509);var next_summary_stats = map__53509__$1;var next_index = cljs.core.get.call(null,map__53509__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__53509__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_variables = cljs.core.get.call(null,map__53509__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var next_summary_stats_data = cljs.core.get.call(null,map__53507__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));var map__53510 = cljs.core.get.call(null,map__53505__$1,new cljs.core.Keyword(null,"map-controls","map-controls",-1453318552));var map__53510__$1 = ((cljs.core.seq_QMARK_.call(null,map__53510))?cljs.core.apply.call(null,cljs.core.hash_map,map__53510):map__53510);var map_controls = map__53510__$1;var next_bounds = cljs.core.get.call(null,map__53510__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var map__53511 = p__53504;var map__53511__$1 = ((cljs.core.seq_QMARK_.call(null,map__53511))?cljs.core.apply.call(null,cljs.core.hash_map,map__53511):map__53511);var next_state = map__53511__$1;var summary_stats_resource = cljs.core.get.call(null,map__53511__$1,new cljs.core.Keyword(null,"summary-stats-resource","summary-stats-resource",-2107619160));var ___$1 = this;if(cljs.core.truth_((function (){var or__3558__auto__ = cljs.core.not.call(null,next_summary_stats_data);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = cljs.core.not_EQ_.call(null,next_filt,self__.filt);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{var or__3558__auto____$2 = cljs.core.not_EQ_.call(null,next_filter_by_view,self__.filter_by_view);if(or__3558__auto____$2)
{return or__3558__auto____$2;
} else
{var and__3546__auto__ = next_filter_by_view;if(cljs.core.truth_(and__3546__auto__))
{return cljs.core.not_EQ_.call(null,next_bounds,self__.bounds);
} else
{return and__3546__auto__;
}
}
}
}
})()))
{return clustermap.components.map_report.request_summary_stats.call(null,summary_stats_resource,next_index,next_index_type,next_variables,next_filt,(cljs.core.truth_(next_filter_by_view)?om.core._value.call(null,next_bounds):null));
} else
{return null;
}
});})(map__53494,map__53494__$1,data,map__53495,map__53495__$1,filter_by_view,filt,map__53496,map__53496__$1,map_report,map__53497,map__53497__$1,controls,map__53498,map__53498__$1,summary_stats,variables,index_type,index,summary_stats_data,map__53499,map__53499__$1,bounds))
;
clustermap.components.map_report.t53500.prototype.om$core$IRenderState$ = true;
clustermap.components.map_report.t53500.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__53494,map__53494__$1,data,map__53495,map__53495__$1,filter_by_view,filt,map__53496,map__53496__$1,map_report,map__53497,map__53497__$1,controls,map__53498,map__53498__$1,summary_stats,variables,index_type,index,summary_stats_data,map__53499,map__53499__$1,bounds){
return (function (_,state){var self__ = this;
var ___$1 = this;var map__53512 = om.core.get_shared.call(null,self__.owner);var map__53512__$1 = ((cljs.core.seq_QMARK_.call(null,map__53512))?cljs.core.apply.call(null,cljs.core.hash_map,map__53512):map__53512);var view_path_fn = cljs.core.get.call(null,map__53512__$1,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",630487502));var path_fn = cljs.core.get.call(null,map__53512__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__53512__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));return clustermap.components.map_report.summary_stats_report.call(null,self__.map_report,comm,view_path_fn,self__.summary_stats_data);
});})(map__53494,map__53494__$1,data,map__53495,map__53495__$1,filter_by_view,filt,map__53496,map__53496__$1,map_report,map__53497,map__53497__$1,controls,map__53498,map__53498__$1,summary_stats,variables,index_type,index,summary_stats_data,map__53499,map__53499__$1,bounds))
;
clustermap.components.map_report.t53500.prototype.om$core$IDidMount$ = true;
clustermap.components.map_report.t53500.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__53494,map__53494__$1,data,map__53495,map__53495__$1,filter_by_view,filt,map__53496,map__53496__$1,map_report,map__53497,map__53497__$1,controls,map__53498,map__53498__$1,summary_stats,variables,index_type,index,summary_stats_data,map__53499,map__53499__$1,bounds){
return (function (_){var self__ = this;
var ___$1 = this;var ssr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"summary-stats");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"summary-stats-resource","summary-stats-resource",-2107619160),ssr);
return clustermap.ordered_resource.retrieve_responses.call(null,ssr,((function (ssr,___$1,map__53494,map__53494__$1,data,map__53495,map__53495__$1,filter_by_view,filt,map__53496,map__53496__$1,map_report,map__53497,map__53497__$1,controls,map__53498,map__53498__$1,summary_stats,variables,index_type,index,summary_stats_data,map__53499,map__53499__$1,bounds){
return (function (ss){return om.core.update_BANG_.call(null,self__.map_report,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588)], null),ss);
});})(ssr,___$1,map__53494,map__53494__$1,data,map__53495,map__53495__$1,filter_by_view,filt,map__53496,map__53496__$1,map_report,map__53497,map__53497__$1,controls,map__53498,map__53498__$1,summary_stats,variables,index_type,index,summary_stats_data,map__53499,map__53499__$1,bounds))
);
});})(map__53494,map__53494__$1,data,map__53495,map__53495__$1,filter_by_view,filt,map__53496,map__53496__$1,map_report,map__53497,map__53497__$1,controls,map__53498,map__53498__$1,summary_stats,variables,index_type,index,summary_stats_data,map__53499,map__53499__$1,bounds))
;
clustermap.components.map_report.t53500.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__53494,map__53494__$1,data,map__53495,map__53495__$1,filter_by_view,filt,map__53496,map__53496__$1,map_report,map__53497,map__53497__$1,controls,map__53498,map__53498__$1,summary_stats,variables,index_type,index,summary_stats_data,map__53499,map__53499__$1,bounds){
return (function (_53502){var self__ = this;
var _53502__$1 = this;return self__.meta53501;
});})(map__53494,map__53494__$1,data,map__53495,map__53495__$1,filter_by_view,filt,map__53496,map__53496__$1,map_report,map__53497,map__53497__$1,controls,map__53498,map__53498__$1,summary_stats,variables,index_type,index,summary_stats_data,map__53499,map__53499__$1,bounds))
;
clustermap.components.map_report.t53500.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__53494,map__53494__$1,data,map__53495,map__53495__$1,filter_by_view,filt,map__53496,map__53496__$1,map_report,map__53497,map__53497__$1,controls,map__53498,map__53498__$1,summary_stats,variables,index_type,index,summary_stats_data,map__53499,map__53499__$1,bounds){
return (function (_53502,meta53501__$1){var self__ = this;
var _53502__$1 = this;return (new clustermap.components.map_report.t53500(self__.filt,self__.index_type,self__.owner,self__.map__53495,self__.filter_by_view,self__.data,self__.index,self__.p__53474,self__.map__53494,self__.map__53496,self__.map__53499,self__.controls,self__.summary_stats_data,self__.map_report,self__.summary_stats,self__.map_report_component,self__.variables,self__.bounds,self__.map__53498,self__.map__53497,meta53501__$1));
});})(map__53494,map__53494__$1,data,map__53495,map__53495__$1,filter_by_view,filt,map__53496,map__53496__$1,map_report,map__53497,map__53497__$1,controls,map__53498,map__53498__$1,summary_stats,variables,index_type,index,summary_stats_data,map__53499,map__53499__$1,bounds))
;
clustermap.components.map_report.__GT_t53500 = ((function (map__53494,map__53494__$1,data,map__53495,map__53495__$1,filter_by_view,filt,map__53496,map__53496__$1,map_report,map__53497,map__53497__$1,controls,map__53498,map__53498__$1,summary_stats,variables,index_type,index,summary_stats_data,map__53499,map__53499__$1,bounds){
return (function __GT_t53500(filt__$1,index_type__$1,owner__$1,map__53495__$2,filter_by_view__$1,data__$1,index__$1,p__53474__$1,map__53494__$2,map__53496__$2,map__53499__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,variables__$1,bounds__$1,map__53498__$2,map__53497__$2,meta53501){return (new clustermap.components.map_report.t53500(filt__$1,index_type__$1,owner__$1,map__53495__$2,filter_by_view__$1,data__$1,index__$1,p__53474__$1,map__53494__$2,map__53496__$2,map__53499__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,variables__$1,bounds__$1,map__53498__$2,map__53497__$2,meta53501));
});})(map__53494,map__53494__$1,data,map__53495,map__53495__$1,filter_by_view,filt,map__53496,map__53496__$1,map_report,map__53497,map__53497__$1,controls,map__53498,map__53498__$1,summary_stats,variables,index_type,index,summary_stats_data,map__53499,map__53499__$1,bounds))
;
}
return (new clustermap.components.map_report.t53500(filt,index_type,owner,map__53495__$1,filter_by_view,data,index,p__53474,map__53494__$1,map__53496__$1,map__53499__$1,controls,summary_stats_data,map_report,summary_stats,map_report_component,variables,bounds,map__53498__$1,map__53497__$1,null));
});

//# sourceMappingURL=map_report.js.map