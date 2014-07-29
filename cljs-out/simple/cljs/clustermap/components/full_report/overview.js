// Compiled by ClojureScript 0.0-2268
goog.provide('clustermap.components.full_report.overview');
goog.require('cljs.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
clustermap.components.full_report.overview.describe_selection = (function describe_selection(p__25360){var map__25365 = p__25360;var map__25365__$1 = ((cljs.core.seq_QMARK_.call(null,map__25365))?cljs.core.apply.call(null,cljs.core.hash_map,map__25365):map__25365);var value = cljs.core.get.call(null,map__25365__$1,new cljs.core.Keyword(null,"value","value",305978217));var type = cljs.core.get.call(null,map__25365__$1,new cljs.core.Keyword(null,"type","type",1174270348));var pred__25366 = cljs.core._EQ_;var expr__25367 = type;if(cljs.core.truth_(pred__25366.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),expr__25367)))
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Total",new cljs.core.Keyword(null,"description","description",-1428560544),"Totals for the selected Portfolio Company"], null),new cljs.core.Keyword(null,"averages","averages",-1747836978),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Mean",new cljs.core.Keyword(null,"description","description",-1428560544),"Mean for the selected Portfolio Company"], null),new cljs.core.Keyword(null,"benchmark","benchmark",667647056),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Benchmark",new cljs.core.Keyword(null,"description","description",-1428560544),"Mean over all UK Companies"], null)], null);
} else
{if(cljs.core.truth_(pred__25366.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",13706558),expr__25367)))
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Total",new cljs.core.Keyword(null,"description","description",-1428560544),"Totals for the Portfolio Companies of the selected Investor"], null),new cljs.core.Keyword(null,"averages","averages",-1747836978),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Mean",new cljs.core.Keyword(null,"description","description",-1428560544),"Mean over the Portfolio Companies of the selected Investor"], null),new cljs.core.Keyword(null,"benchmark","benchmark",667647056),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Benchmark",new cljs.core.Keyword(null,"description","description",-1428560544),"Mean over all UK Companies"], null)], null);
} else
{if(cljs.core.truth_(pred__25366.call(null,new cljs.core.Keyword(null,"constituency","constituency",1803637324),expr__25367)))
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Total",new cljs.core.Keyword(null,"description","description",-1428560544),"Totals for the selected Constituency"], null),new cljs.core.Keyword(null,"averages","averages",-1747836978),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Mean",new cljs.core.Keyword(null,"description","description",-1428560544),"Mean over the Portfolio Companies with sites in the selected Constituency"], null),new cljs.core.Keyword(null,"benchmark","benchmark",667647056),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Benchmark",new cljs.core.Keyword(null,"description","description",-1428560544),"Mean over all UK Companies"], null)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Total",new cljs.core.Keyword(null,"description","description",-1428560544),"Totals over all Portfolio Companies"], null),new cljs.core.Keyword(null,"averages","averages",-1747836978),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Mean",new cljs.core.Keyword(null,"description","description",-1428560544),"Mean over all Portfolio Companies"], null),new cljs.core.Keyword(null,"benchmark","benchmark",667647056),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Benchmark",new cljs.core.Keyword(null,"description","description",-1428560544),"Mean over all UK Companies"], null)], null);
}
}
}
});
clustermap.components.full_report.overview.overview_data = (function overview_data(p__25369){var map__25395 = p__25369;var map__25395__$1 = ((cljs.core.seq_QMARK_.call(null,map__25395))?cljs.core.apply.call(null,cljs.core.hash_map,map__25395):map__25395);var selection_investment_stats = cljs.core.get.call(null,map__25395__$1,new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",-1048685843));var selection = cljs.core.get.call(null,map__25395__$1,new cljs.core.Keyword(null,"selection","selection",975998651));var all_investment_stats = cljs.core.get.call(null,map__25395__$1,new cljs.core.Keyword(null,"all-investment-stats","all-investment-stats",1476039495));var sel_descrs = clustermap.components.full_report.overview.describe_selection.call(null,selection);var site_stats = (function (){var or__3543__auto__ = selection_investment_stats;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return all_investment_stats;
}
})();return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selection","selection",975998651),cljs.core.merge.call(null,new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"employee-count","employee-count",315351008),new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020),new cljs.core.Keyword(null,"turnover","turnover",-1778310555),new cljs.core.Keyword(null,"investor-companies","investor-companies",74375815),new cljs.core.Keyword(null,"employee-count-delta","employee-count-delta",1781159440),new cljs.core.Keyword(null,"turnover-delta-val","turnover-delta-val",-1004481897),new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",607601849),new cljs.core.Keyword(null,"turnover-delta","turnover-delta",547240062),new cljs.core.Keyword(null,"employee-count-delta-val","employee-count-delta-val",387778431)],[clustermap.formats.number.fnum.call(null,(function (){var G__25396 = site_stats;var G__25396__$1 = (((G__25396 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__25396));var G__25396__$2 = (((G__25396__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__25396__$1));return G__25396__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),clustermap.formats.number.fnum.call(null,(function (){var G__25397 = site_stats;var G__25397__$1 = (((G__25397 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",1998972271).cljs$core$IFn$_invoke$arity$1(G__25397));return G__25397__$1;
})(),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),clustermap.formats.money.fmoney.call(null,(function (){var G__25398 = site_stats;var G__25398__$1 = (((G__25398 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__25398));var G__25398__$2 = (((G__25398__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__25398__$1));return G__25398__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),clustermap.formats.number.fnum.call(null,(function (){var G__25399 = site_stats;var G__25399__$1 = (((G__25399 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",-2068624331).cljs$core$IFn$_invoke$arity$1(G__25399));return G__25399__$1;
})(),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),clustermap.formats.number.fnum.call(null,(function (){var G__25400 = site_stats;var G__25400__$1 = (((G__25400 == null))?null:new cljs.core.Keyword(null,"employee_count_delta","employee_count_delta",-1229648982).cljs$core$IFn$_invoke$arity$1(G__25400));var G__25400__$2 = (((G__25400__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__25400__$1));return G__25400__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),(function (){var G__25401 = site_stats;var G__25401__$1 = (((G__25401 == null))?null:new cljs.core.Keyword(null,"turnover_delta","turnover_delta",643085600).cljs$core$IFn$_invoke$arity$1(G__25401));var G__25401__$2 = (((G__25401__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__25401__$1));return G__25401__$2;
})(),clustermap.formats.number.fnum.call(null,(function (){var G__25402 = site_stats;var G__25402__$1 = (((G__25402 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",2089870686).cljs$core$IFn$_invoke$arity$1(G__25402));return G__25402__$1;
})(),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),clustermap.formats.money.fmoney.call(null,(function (){var G__25403 = site_stats;var G__25403__$1 = (((G__25403 == null))?null:new cljs.core.Keyword(null,"turnover_delta","turnover_delta",643085600).cljs$core$IFn$_invoke$arity$1(G__25403));var G__25403__$2 = (((G__25403__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__25403__$1));return G__25403__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),(function (){var G__25404 = site_stats;var G__25404__$1 = (((G__25404 == null))?null:new cljs.core.Keyword(null,"employee_count_delta","employee_count_delta",-1229648982).cljs$core$IFn$_invoke$arity$1(G__25404));var G__25404__$2 = (((G__25404__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__25404__$1));return G__25404__$2;
})()])),new cljs.core.Keyword(null,"averages","averages",-1747836978),cljs.core.merge.call(null,new cljs.core.Keyword(null,"averages","averages",-1747836978).cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"employee-count","employee-count",315351008),new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020),new cljs.core.Keyword(null,"turnover","turnover",-1778310555),new cljs.core.Keyword(null,"investor-companies","investor-companies",74375815),new cljs.core.Keyword(null,"employee-count-delta","employee-count-delta",1781159440),new cljs.core.Keyword(null,"turnover-delta-val","turnover-delta-val",-1004481897),new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",607601849),new cljs.core.Keyword(null,"turnover-delta","turnover-delta",547240062),new cljs.core.Keyword(null,"employee-count-delta-val","employee-count-delta-val",387778431)],[clustermap.formats.number.fnum.call(null,(function (){var G__25405 = site_stats;var G__25405__$1 = (((G__25405 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__25405));var G__25405__$2 = (((G__25405__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",-1359234715).cljs$core$IFn$_invoke$arity$1(G__25405__$1));return G__25405__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),"\u00A0",clustermap.formats.money.fmoney.call(null,(function (){var G__25406 = site_stats;var G__25406__$1 = (((G__25406 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__25406));var G__25406__$2 = (((G__25406__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",-1359234715).cljs$core$IFn$_invoke$arity$1(G__25406__$1));return G__25406__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),"\u00A0",clustermap.formats.number.fnum.call(null,(function (){var G__25407 = site_stats;var G__25407__$1 = (((G__25407 == null))?null:new cljs.core.Keyword(null,"employee_count_delta","employee_count_delta",-1229648982).cljs$core$IFn$_invoke$arity$1(G__25407));var G__25407__$2 = (((G__25407__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",-1359234715).cljs$core$IFn$_invoke$arity$1(G__25407__$1));return G__25407__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),(function (){var G__25408 = site_stats;var G__25408__$1 = (((G__25408 == null))?null:new cljs.core.Keyword(null,"turnover_delta","turnover_delta",643085600).cljs$core$IFn$_invoke$arity$1(G__25408));var G__25408__$2 = (((G__25408__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",-1359234715).cljs$core$IFn$_invoke$arity$1(G__25408__$1));return G__25408__$2;
})(),"\u00A0",clustermap.formats.money.fmoney.call(null,(function (){var G__25409 = site_stats;var G__25409__$1 = (((G__25409 == null))?null:new cljs.core.Keyword(null,"turnover_delta","turnover_delta",643085600).cljs$core$IFn$_invoke$arity$1(G__25409));var G__25409__$2 = (((G__25409__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",-1359234715).cljs$core$IFn$_invoke$arity$1(G__25409__$1));return G__25409__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),(function (){var G__25410 = site_stats;var G__25410__$1 = (((G__25410 == null))?null:new cljs.core.Keyword(null,"employee_count_delta","employee_count_delta",-1229648982).cljs$core$IFn$_invoke$arity$1(G__25410));var G__25410__$2 = (((G__25410__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",-1359234715).cljs$core$IFn$_invoke$arity$1(G__25410__$1));return G__25410__$2;
})()])),new cljs.core.Keyword(null,"benchmark","benchmark",667647056),cljs.core.merge.call(null,new cljs.core.Keyword(null,"benchmark","benchmark",667647056).cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"employee-count","employee-count",315351008),new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020),new cljs.core.Keyword(null,"turnover","turnover",-1778310555),new cljs.core.Keyword(null,"investor-companies","investor-companies",74375815),new cljs.core.Keyword(null,"employee-count-delta","employee-count-delta",1781159440),new cljs.core.Keyword(null,"turnover-delta-val","turnover-delta-val",-1004481897),new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",607601849),new cljs.core.Keyword(null,"turnover-delta","turnover-delta",547240062),new cljs.core.Keyword(null,"employee-count-delta-val","employee-count-delta-val",387778431)],[clustermap.formats.number.fnum.call(null,(function (){var G__25411 = all_investment_stats;var G__25411__$1 = (((G__25411 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__25411));var G__25411__$2 = (((G__25411__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",-1359234715).cljs$core$IFn$_invoke$arity$1(G__25411__$1));return G__25411__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),clustermap.formats.number.fnum.call(null,(function (){var G__25412 = all_investment_stats;var G__25412__$1 = (((G__25412 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",1998972271).cljs$core$IFn$_invoke$arity$1(G__25412));return G__25412__$1;
})(),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),clustermap.formats.money.fmoney.call(null,(function (){var G__25413 = all_investment_stats;var G__25413__$1 = (((G__25413 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__25413));var G__25413__$2 = (((G__25413__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",-1359234715).cljs$core$IFn$_invoke$arity$1(G__25413__$1));return G__25413__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),clustermap.formats.number.fnum.call(null,(function (){var G__25414 = all_investment_stats;var G__25414__$1 = (((G__25414 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",-2068624331).cljs$core$IFn$_invoke$arity$1(G__25414));return G__25414__$1;
})(),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),clustermap.formats.number.fnum.call(null,(function (){var G__25415 = all_investment_stats;var G__25415__$1 = (((G__25415 == null))?null:new cljs.core.Keyword(null,"employee_count_delta","employee_count_delta",-1229648982).cljs$core$IFn$_invoke$arity$1(G__25415));var G__25415__$2 = (((G__25415__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",-1359234715).cljs$core$IFn$_invoke$arity$1(G__25415__$1));return G__25415__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),(function (){var G__25416 = all_investment_stats;var G__25416__$1 = (((G__25416 == null))?null:new cljs.core.Keyword(null,"turnover_delta","turnover_delta",643085600).cljs$core$IFn$_invoke$arity$1(G__25416));var G__25416__$2 = (((G__25416__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__25416__$1));return G__25416__$2;
})(),clustermap.formats.number.fnum.call(null,(function (){var G__25417 = all_investment_stats;var G__25417__$1 = (((G__25417 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",2089870686).cljs$core$IFn$_invoke$arity$1(G__25417));return G__25417__$1;
})(),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),clustermap.formats.money.fmoney.call(null,(function (){var G__25418 = all_investment_stats;var G__25418__$1 = (((G__25418 == null))?null:new cljs.core.Keyword(null,"turnover_delta","turnover_delta",643085600).cljs$core$IFn$_invoke$arity$1(G__25418));var G__25418__$2 = (((G__25418__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",-1359234715).cljs$core$IFn$_invoke$arity$1(G__25418__$1));return G__25418__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),(function (){var G__25419 = all_investment_stats;var G__25419__$1 = (((G__25419 == null))?null:new cljs.core.Keyword(null,"employee_count_delta","employee_count_delta",-1229648982).cljs$core$IFn$_invoke$arity$1(G__25419));var G__25419__$2 = (((G__25419__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",-1359234715).cljs$core$IFn$_invoke$arity$1(G__25419__$1));return G__25419__$2;
})()]))], null);
});
clustermap.components.full_report.overview.pos_neg = (function pos_neg(value){if((value == null))
{return null;
} else
{if((value > (0)))
{return React.DOM.i({"className": "icon-positive"});
} else
{if((value < (0)))
{return React.DOM.i({"className": "icon-negative"});
} else
{if(true)
{return null;
} else
{return null;
}
}
}
}
});
clustermap.components.full_report.overview.overview = (function overview(data){var map__25443 = clustermap.components.full_report.overview.overview_data.call(null,data);var map__25443__$1 = ((cljs.core.seq_QMARK_.call(null,map__25443))?cljs.core.apply.call(null,cljs.core.hash_map,map__25443):map__25443);var benchmark = cljs.core.get.call(null,map__25443__$1,new cljs.core.Keyword(null,"benchmark","benchmark",667647056));var averages = cljs.core.get.call(null,map__25443__$1,new cljs.core.Keyword(null,"averages","averages",-1747836978));var selection = cljs.core.get.call(null,map__25443__$1,new cljs.core.Keyword(null,"selection","selection",975998651));if(typeof clustermap.components.full_report.overview.t25444 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.overview.t25444 = (function (selection,averages,benchmark,map__25443,data,overview,meta25445){
this.selection = selection;
this.averages = averages;
this.benchmark = benchmark;
this.map__25443 = map__25443;
this.data = data;
this.overview = overview;
this.meta25445 = meta25445;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.overview.t25444.cljs$lang$type = true;
clustermap.components.full_report.overview.t25444.cljs$lang$ctorStr = "clustermap.components.full-report.overview/t25444";
clustermap.components.full_report.overview.t25444.cljs$lang$ctorPrWriter = ((function (map__25443,map__25443__$1,benchmark,averages,selection){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.full-report.overview/t25444");
});})(map__25443,map__25443__$1,benchmark,averages,selection))
;
clustermap.components.full_report.overview.t25444.prototype.om$core$IRender$ = true;
clustermap.components.full_report.overview.t25444.prototype.om$core$IRender$render$arity$1 = ((function (map__25443,map__25443__$1,benchmark,averages,selection){
return (function (this__9490__auto__){var self__ = this;
var this__9490__auto____$1 = this;return React.DOM.div({"className": "full-report-overview"},React.DOM.h4(null,"Overview of latest filings",React.DOM.small(null,"\u00A0(may span years : see table below for details)")),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table-stats"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"\u00A0"),React.DOM.th(null,"Investor-backed companies"),React.DOM.th(null,"Investors"),React.DOM.th(null,"Constituencies"),React.DOM.th(null,"Revenue"),React.DOM.th({"colSpan": "2"},"Rev. change"),React.DOM.th(null,"Employees"))),React.DOM.tbody(null,React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": self__.selection.call(null,new cljs.core.Keyword(null,"description","description",-1428560544))}),sablono.interpreter.interpret.call(null,self__.selection.call(null,new cljs.core.Keyword(null,"name","name",1843675177)))),React.DOM.td(null,(function (){var attrs25451 = new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",607601849).cljs$core$IFn$_invoke$arity$1(self__.selection);return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs25451))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs25451)):{"className": "selection"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25451))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25451)], null))));
})()),React.DOM.td(null,(function (){var attrs25452 = new cljs.core.Keyword(null,"investor-companies","investor-companies",74375815).cljs$core$IFn$_invoke$arity$1(self__.selection);return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs25452))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs25452)):{"className": "selection"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25452))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25452)], null))));
})()),React.DOM.td(null,(function (){var attrs25453 = new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020).cljs$core$IFn$_invoke$arity$1(self__.selection);return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs25453))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs25453)):{"className": "selection"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25453))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25453)], null))));
})()),React.DOM.td(null,(function (){var attrs25454 = new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(self__.selection);return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs25454))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs25454)):{"className": "selection"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25454))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25454)], null))));
})()),React.DOM.td(null,(function (){var attrs25455 = clustermap.components.full_report.overview.pos_neg.call(null,new cljs.core.Keyword(null,"turnover-delta-val","turnover-delta-val",-1004481897).cljs$core$IFn$_invoke$arity$1(self__.selection));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs25455))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs25455)):{"className": "selection"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25455))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25455)], null))));
})()),React.DOM.td(null,(function (){var attrs25456 = new cljs.core.Keyword(null,"turnover-delta","turnover-delta",547240062).cljs$core$IFn$_invoke$arity$1(self__.selection);return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs25456))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs25456)):{"className": "selection"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25456))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25456)], null))));
})()),React.DOM.td(null,(function (){var attrs25457 = new cljs.core.Keyword(null,"employee-count","employee-count",315351008).cljs$core$IFn$_invoke$arity$1(self__.selection);return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs25457))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs25457)):{"className": "selection"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25457))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25457)], null))));
})()))))));
});})(map__25443,map__25443__$1,benchmark,averages,selection))
;
clustermap.components.full_report.overview.t25444.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__25443,map__25443__$1,benchmark,averages,selection){
return (function (_25446){var self__ = this;
var _25446__$1 = this;return self__.meta25445;
});})(map__25443,map__25443__$1,benchmark,averages,selection))
;
clustermap.components.full_report.overview.t25444.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__25443,map__25443__$1,benchmark,averages,selection){
return (function (_25446,meta25445__$1){var self__ = this;
var _25446__$1 = this;return (new clustermap.components.full_report.overview.t25444(self__.selection,self__.averages,self__.benchmark,self__.map__25443,self__.data,self__.overview,meta25445__$1));
});})(map__25443,map__25443__$1,benchmark,averages,selection))
;
clustermap.components.full_report.overview.__GT_t25444 = ((function (map__25443,map__25443__$1,benchmark,averages,selection){
return (function __GT_t25444(selection__$1,averages__$1,benchmark__$1,map__25443__$2,data__$1,overview__$1,meta25445){return (new clustermap.components.full_report.overview.t25444(selection__$1,averages__$1,benchmark__$1,map__25443__$2,data__$1,overview__$1,meta25445));
});})(map__25443,map__25443__$1,benchmark,averages,selection))
;
}
return (new clustermap.components.full_report.overview.t25444(selection,averages,benchmark,map__25443__$1,data,overview,null));
});
