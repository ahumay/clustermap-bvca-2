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
clustermap.components.full_report.overview.describe_selection = (function describe_selection(p__13173){var map__13178 = p__13173;var map__13178__$1 = ((cljs.core.seq_QMARK_.call(null,map__13178))?cljs.core.apply.call(null,cljs.core.hash_map,map__13178):map__13178);var value = cljs.core.get.call(null,map__13178__$1,new cljs.core.Keyword(null,"value","value",305978217));var type = cljs.core.get.call(null,map__13178__$1,new cljs.core.Keyword(null,"type","type",1174270348));var pred__13179 = cljs.core._EQ_;var expr__13180 = type;if(cljs.core.truth_(pred__13179.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),expr__13180)))
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Total",new cljs.core.Keyword(null,"description","description",-1428560544),"Totals for the selected Portfolio Company"], null),new cljs.core.Keyword(null,"averages","averages",-1747836978),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Mean",new cljs.core.Keyword(null,"description","description",-1428560544),"Mean for the selected Portfolio Company"], null),new cljs.core.Keyword(null,"benchmark","benchmark",667647056),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Benchmark",new cljs.core.Keyword(null,"description","description",-1428560544),"Mean over all UK Companies"], null)], null);
} else
{if(cljs.core.truth_(pred__13179.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",13706558),expr__13180)))
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Total",new cljs.core.Keyword(null,"description","description",-1428560544),"Totals for the Portfolio Companies of the selected Investor"], null),new cljs.core.Keyword(null,"averages","averages",-1747836978),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Mean",new cljs.core.Keyword(null,"description","description",-1428560544),"Mean over the Portfolio Companies of the selected Investor"], null),new cljs.core.Keyword(null,"benchmark","benchmark",667647056),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Benchmark",new cljs.core.Keyword(null,"description","description",-1428560544),"Mean over all UK Companies"], null)], null);
} else
{if(cljs.core.truth_(pred__13179.call(null,new cljs.core.Keyword(null,"constituency","constituency",1803637324),expr__13180)))
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Total",new cljs.core.Keyword(null,"description","description",-1428560544),"Totals for the selected Constituency"], null),new cljs.core.Keyword(null,"averages","averages",-1747836978),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Mean",new cljs.core.Keyword(null,"description","description",-1428560544),"Mean over the Portfolio Companies with sites in the selected Constituency"], null),new cljs.core.Keyword(null,"benchmark","benchmark",667647056),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Benchmark",new cljs.core.Keyword(null,"description","description",-1428560544),"Mean over all UK Companies"], null)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Total",new cljs.core.Keyword(null,"description","description",-1428560544),"Totals over all Portfolio Companies"], null),new cljs.core.Keyword(null,"averages","averages",-1747836978),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Mean",new cljs.core.Keyword(null,"description","description",-1428560544),"Mean over all Portfolio Companies"], null),new cljs.core.Keyword(null,"benchmark","benchmark",667647056),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Benchmark",new cljs.core.Keyword(null,"description","description",-1428560544),"Mean over all UK Companies"], null)], null);
}
}
}
});
clustermap.components.full_report.overview.overview_data = (function overview_data(p__13182){var map__13208 = p__13182;var map__13208__$1 = ((cljs.core.seq_QMARK_.call(null,map__13208))?cljs.core.apply.call(null,cljs.core.hash_map,map__13208):map__13208);var selection_investment_stats = cljs.core.get.call(null,map__13208__$1,new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",-1048685843));var selection = cljs.core.get.call(null,map__13208__$1,new cljs.core.Keyword(null,"selection","selection",975998651));var all_investment_stats = cljs.core.get.call(null,map__13208__$1,new cljs.core.Keyword(null,"all-investment-stats","all-investment-stats",1476039495));var sel_descrs = clustermap.components.full_report.overview.describe_selection.call(null,selection);var site_stats = (function (){var or__3543__auto__ = selection_investment_stats;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return all_investment_stats;
}
})();return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selection","selection",975998651),cljs.core.merge.call(null,new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"employee-count","employee-count",315351008),new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020),new cljs.core.Keyword(null,"turnover","turnover",-1778310555),new cljs.core.Keyword(null,"investor-companies","investor-companies",74375815),new cljs.core.Keyword(null,"employee-count-delta","employee-count-delta",1781159440),new cljs.core.Keyword(null,"turnover-delta-val","turnover-delta-val",-1004481897),new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",607601849),new cljs.core.Keyword(null,"turnover-delta","turnover-delta",547240062),new cljs.core.Keyword(null,"employee-count-delta-val","employee-count-delta-val",387778431)],[clustermap.formats.number.fnum.call(null,(function (){var G__13209 = site_stats;var G__13209__$1 = (((G__13209 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__13209));var G__13209__$2 = (((G__13209__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13209__$1));return G__13209__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),clustermap.formats.number.fnum.call(null,(function (){var G__13210 = site_stats;var G__13210__$1 = (((G__13210 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",1998972271).cljs$core$IFn$_invoke$arity$1(G__13210));return G__13210__$1;
})(),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),clustermap.formats.money.fmoney.call(null,(function (){var G__13211 = site_stats;var G__13211__$1 = (((G__13211 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__13211));var G__13211__$2 = (((G__13211__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13211__$1));return G__13211__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),clustermap.formats.number.fnum.call(null,(function (){var G__13212 = site_stats;var G__13212__$1 = (((G__13212 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",-2068624331).cljs$core$IFn$_invoke$arity$1(G__13212));return G__13212__$1;
})(),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),clustermap.formats.number.fnum.call(null,(function (){var G__13213 = site_stats;var G__13213__$1 = (((G__13213 == null))?null:new cljs.core.Keyword(null,"employee_count_delta","employee_count_delta",-1229648982).cljs$core$IFn$_invoke$arity$1(G__13213));var G__13213__$2 = (((G__13213__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13213__$1));return G__13213__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),(function (){var G__13214 = site_stats;var G__13214__$1 = (((G__13214 == null))?null:new cljs.core.Keyword(null,"turnover_delta","turnover_delta",643085600).cljs$core$IFn$_invoke$arity$1(G__13214));var G__13214__$2 = (((G__13214__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13214__$1));return G__13214__$2;
})(),clustermap.formats.number.fnum.call(null,(function (){var G__13215 = site_stats;var G__13215__$1 = (((G__13215 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",2089870686).cljs$core$IFn$_invoke$arity$1(G__13215));return G__13215__$1;
})(),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),clustermap.formats.money.fmoney.call(null,(function (){var G__13216 = site_stats;var G__13216__$1 = (((G__13216 == null))?null:new cljs.core.Keyword(null,"turnover_delta","turnover_delta",643085600).cljs$core$IFn$_invoke$arity$1(G__13216));var G__13216__$2 = (((G__13216__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13216__$1));return G__13216__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),(function (){var G__13217 = site_stats;var G__13217__$1 = (((G__13217 == null))?null:new cljs.core.Keyword(null,"employee_count_delta","employee_count_delta",-1229648982).cljs$core$IFn$_invoke$arity$1(G__13217));var G__13217__$2 = (((G__13217__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13217__$1));return G__13217__$2;
})()])),new cljs.core.Keyword(null,"averages","averages",-1747836978),cljs.core.merge.call(null,new cljs.core.Keyword(null,"averages","averages",-1747836978).cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"employee-count","employee-count",315351008),new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020),new cljs.core.Keyword(null,"turnover","turnover",-1778310555),new cljs.core.Keyword(null,"investor-companies","investor-companies",74375815),new cljs.core.Keyword(null,"employee-count-delta","employee-count-delta",1781159440),new cljs.core.Keyword(null,"turnover-delta-val","turnover-delta-val",-1004481897),new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",607601849),new cljs.core.Keyword(null,"turnover-delta","turnover-delta",547240062),new cljs.core.Keyword(null,"employee-count-delta-val","employee-count-delta-val",387778431)],[clustermap.formats.number.fnum.call(null,(function (){var G__13218 = site_stats;var G__13218__$1 = (((G__13218 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__13218));var G__13218__$2 = (((G__13218__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",-1359234715).cljs$core$IFn$_invoke$arity$1(G__13218__$1));return G__13218__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),"\u00A0",clustermap.formats.money.fmoney.call(null,(function (){var G__13219 = site_stats;var G__13219__$1 = (((G__13219 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__13219));var G__13219__$2 = (((G__13219__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",-1359234715).cljs$core$IFn$_invoke$arity$1(G__13219__$1));return G__13219__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),"\u00A0",clustermap.formats.number.fnum.call(null,(function (){var G__13220 = site_stats;var G__13220__$1 = (((G__13220 == null))?null:new cljs.core.Keyword(null,"employee_count_delta","employee_count_delta",-1229648982).cljs$core$IFn$_invoke$arity$1(G__13220));var G__13220__$2 = (((G__13220__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",-1359234715).cljs$core$IFn$_invoke$arity$1(G__13220__$1));return G__13220__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),(function (){var G__13221 = site_stats;var G__13221__$1 = (((G__13221 == null))?null:new cljs.core.Keyword(null,"turnover_delta","turnover_delta",643085600).cljs$core$IFn$_invoke$arity$1(G__13221));var G__13221__$2 = (((G__13221__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",-1359234715).cljs$core$IFn$_invoke$arity$1(G__13221__$1));return G__13221__$2;
})(),"\u00A0",clustermap.formats.money.fmoney.call(null,(function (){var G__13222 = site_stats;var G__13222__$1 = (((G__13222 == null))?null:new cljs.core.Keyword(null,"turnover_delta","turnover_delta",643085600).cljs$core$IFn$_invoke$arity$1(G__13222));var G__13222__$2 = (((G__13222__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",-1359234715).cljs$core$IFn$_invoke$arity$1(G__13222__$1));return G__13222__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),(function (){var G__13223 = site_stats;var G__13223__$1 = (((G__13223 == null))?null:new cljs.core.Keyword(null,"employee_count_delta","employee_count_delta",-1229648982).cljs$core$IFn$_invoke$arity$1(G__13223));var G__13223__$2 = (((G__13223__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",-1359234715).cljs$core$IFn$_invoke$arity$1(G__13223__$1));return G__13223__$2;
})()])),new cljs.core.Keyword(null,"benchmark","benchmark",667647056),cljs.core.merge.call(null,new cljs.core.Keyword(null,"benchmark","benchmark",667647056).cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"employee-count","employee-count",315351008),new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020),new cljs.core.Keyword(null,"turnover","turnover",-1778310555),new cljs.core.Keyword(null,"investor-companies","investor-companies",74375815),new cljs.core.Keyword(null,"employee-count-delta","employee-count-delta",1781159440),new cljs.core.Keyword(null,"turnover-delta-val","turnover-delta-val",-1004481897),new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",607601849),new cljs.core.Keyword(null,"turnover-delta","turnover-delta",547240062),new cljs.core.Keyword(null,"employee-count-delta-val","employee-count-delta-val",387778431)],[clustermap.formats.number.fnum.call(null,(function (){var G__13224 = all_investment_stats;var G__13224__$1 = (((G__13224 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__13224));var G__13224__$2 = (((G__13224__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",-1359234715).cljs$core$IFn$_invoke$arity$1(G__13224__$1));return G__13224__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),clustermap.formats.number.fnum.call(null,(function (){var G__13225 = all_investment_stats;var G__13225__$1 = (((G__13225 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",1998972271).cljs$core$IFn$_invoke$arity$1(G__13225));return G__13225__$1;
})(),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),clustermap.formats.money.fmoney.call(null,(function (){var G__13226 = all_investment_stats;var G__13226__$1 = (((G__13226 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__13226));var G__13226__$2 = (((G__13226__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",-1359234715).cljs$core$IFn$_invoke$arity$1(G__13226__$1));return G__13226__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),clustermap.formats.number.fnum.call(null,(function (){var G__13227 = all_investment_stats;var G__13227__$1 = (((G__13227 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",-2068624331).cljs$core$IFn$_invoke$arity$1(G__13227));return G__13227__$1;
})(),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),clustermap.formats.number.fnum.call(null,(function (){var G__13228 = all_investment_stats;var G__13228__$1 = (((G__13228 == null))?null:new cljs.core.Keyword(null,"employee_count_delta","employee_count_delta",-1229648982).cljs$core$IFn$_invoke$arity$1(G__13228));var G__13228__$2 = (((G__13228__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",-1359234715).cljs$core$IFn$_invoke$arity$1(G__13228__$1));return G__13228__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),(function (){var G__13229 = all_investment_stats;var G__13229__$1 = (((G__13229 == null))?null:new cljs.core.Keyword(null,"turnover_delta","turnover_delta",643085600).cljs$core$IFn$_invoke$arity$1(G__13229));var G__13229__$2 = (((G__13229__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13229__$1));return G__13229__$2;
})(),clustermap.formats.number.fnum.call(null,(function (){var G__13230 = all_investment_stats;var G__13230__$1 = (((G__13230 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",2089870686).cljs$core$IFn$_invoke$arity$1(G__13230));return G__13230__$1;
})(),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),clustermap.formats.money.fmoney.call(null,(function (){var G__13231 = all_investment_stats;var G__13231__$1 = (((G__13231 == null))?null:new cljs.core.Keyword(null,"turnover_delta","turnover_delta",643085600).cljs$core$IFn$_invoke$arity$1(G__13231));var G__13231__$2 = (((G__13231__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",-1359234715).cljs$core$IFn$_invoke$arity$1(G__13231__$1));return G__13231__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),(function (){var G__13232 = all_investment_stats;var G__13232__$1 = (((G__13232 == null))?null:new cljs.core.Keyword(null,"employee_count_delta","employee_count_delta",-1229648982).cljs$core$IFn$_invoke$arity$1(G__13232));var G__13232__$2 = (((G__13232__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",-1359234715).cljs$core$IFn$_invoke$arity$1(G__13232__$1));return G__13232__$2;
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
clustermap.components.full_report.overview.overview = (function overview(data){var map__13256 = clustermap.components.full_report.overview.overview_data.call(null,data);var map__13256__$1 = ((cljs.core.seq_QMARK_.call(null,map__13256))?cljs.core.apply.call(null,cljs.core.hash_map,map__13256):map__13256);var benchmark = cljs.core.get.call(null,map__13256__$1,new cljs.core.Keyword(null,"benchmark","benchmark",667647056));var averages = cljs.core.get.call(null,map__13256__$1,new cljs.core.Keyword(null,"averages","averages",-1747836978));var selection = cljs.core.get.call(null,map__13256__$1,new cljs.core.Keyword(null,"selection","selection",975998651));if(typeof clustermap.components.full_report.overview.t13257 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.overview.t13257 = (function (selection,averages,benchmark,map__13256,data,overview,meta13258){
this.selection = selection;
this.averages = averages;
this.benchmark = benchmark;
this.map__13256 = map__13256;
this.data = data;
this.overview = overview;
this.meta13258 = meta13258;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.overview.t13257.cljs$lang$type = true;
clustermap.components.full_report.overview.t13257.cljs$lang$ctorStr = "clustermap.components.full-report.overview/t13257";
clustermap.components.full_report.overview.t13257.cljs$lang$ctorPrWriter = ((function (map__13256,map__13256__$1,benchmark,averages,selection){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.full-report.overview/t13257");
});})(map__13256,map__13256__$1,benchmark,averages,selection))
;
clustermap.components.full_report.overview.t13257.prototype.om$core$IRender$ = true;
clustermap.components.full_report.overview.t13257.prototype.om$core$IRender$render$arity$1 = ((function (map__13256,map__13256__$1,benchmark,averages,selection){
return (function (this__9490__auto__){var self__ = this;
var this__9490__auto____$1 = this;return React.DOM.div({"className": "full-report-overview"},React.DOM.h4(null,"Overview of latest filings",React.DOM.small(null,"\u00A0(may span years : see table below for details)")),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table-stats"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"\u00A0"),React.DOM.th(null,"Investor-backed companies"),React.DOM.th(null,"Investors"),React.DOM.th(null,"Constituencies"),React.DOM.th(null,"Revenue"),React.DOM.th({"colSpan": "2"},"Rev. change"),React.DOM.th(null,"Employees"))),React.DOM.tbody(null,React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": self__.selection.call(null,new cljs.core.Keyword(null,"description","description",-1428560544))}),sablono.interpreter.interpret.call(null,self__.selection.call(null,new cljs.core.Keyword(null,"name","name",1843675177)))),React.DOM.td(null,(function (){var attrs13264 = new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",607601849).cljs$core$IFn$_invoke$arity$1(self__.selection);return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs13264))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs13264)):{"className": "selection"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13264))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13264)], null))));
})()),React.DOM.td(null,(function (){var attrs13265 = new cljs.core.Keyword(null,"investor-companies","investor-companies",74375815).cljs$core$IFn$_invoke$arity$1(self__.selection);return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs13265))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs13265)):{"className": "selection"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13265))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13265)], null))));
})()),React.DOM.td(null,(function (){var attrs13266 = new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020).cljs$core$IFn$_invoke$arity$1(self__.selection);return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs13266))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs13266)):{"className": "selection"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13266))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13266)], null))));
})()),React.DOM.td(null,(function (){var attrs13267 = new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(self__.selection);return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs13267))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs13267)):{"className": "selection"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13267))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13267)], null))));
})()),React.DOM.td(null,(function (){var attrs13268 = clustermap.components.full_report.overview.pos_neg.call(null,new cljs.core.Keyword(null,"turnover-delta-val","turnover-delta-val",-1004481897).cljs$core$IFn$_invoke$arity$1(self__.selection));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs13268))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs13268)):{"className": "selection"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13268))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13268)], null))));
})()),React.DOM.td(null,(function (){var attrs13269 = new cljs.core.Keyword(null,"turnover-delta","turnover-delta",547240062).cljs$core$IFn$_invoke$arity$1(self__.selection);return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs13269))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs13269)):{"className": "selection"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13269))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13269)], null))));
})()),React.DOM.td(null,(function (){var attrs13270 = new cljs.core.Keyword(null,"employee-count","employee-count",315351008).cljs$core$IFn$_invoke$arity$1(self__.selection);return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs13270))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs13270)):{"className": "selection"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13270))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13270)], null))));
})()))))));
});})(map__13256,map__13256__$1,benchmark,averages,selection))
;
clustermap.components.full_report.overview.t13257.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13256,map__13256__$1,benchmark,averages,selection){
return (function (_13259){var self__ = this;
var _13259__$1 = this;return self__.meta13258;
});})(map__13256,map__13256__$1,benchmark,averages,selection))
;
clustermap.components.full_report.overview.t13257.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13256,map__13256__$1,benchmark,averages,selection){
return (function (_13259,meta13258__$1){var self__ = this;
var _13259__$1 = this;return (new clustermap.components.full_report.overview.t13257(self__.selection,self__.averages,self__.benchmark,self__.map__13256,self__.data,self__.overview,meta13258__$1));
});})(map__13256,map__13256__$1,benchmark,averages,selection))
;
clustermap.components.full_report.overview.__GT_t13257 = ((function (map__13256,map__13256__$1,benchmark,averages,selection){
return (function __GT_t13257(selection__$1,averages__$1,benchmark__$1,map__13256__$2,data__$1,overview__$1,meta13258){return (new clustermap.components.full_report.overview.t13257(selection__$1,averages__$1,benchmark__$1,map__13256__$2,data__$1,overview__$1,meta13258));
});})(map__13256,map__13256__$1,benchmark,averages,selection))
;
}
return (new clustermap.components.full_report.overview.t13257(selection,averages,benchmark,map__13256__$1,data,overview,null));
});
