// Compiled by ClojureScript 0.0-2356
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
clustermap.components.full_report.overview.describe_selection = (function describe_selection(p__16574){var map__16579 = p__16574;var map__16579__$1 = ((cljs.core.seq_QMARK_.call(null,map__16579))?cljs.core.apply.call(null,cljs.core.hash_map,map__16579):map__16579);var value = cljs.core.get.call(null,map__16579__$1,new cljs.core.Keyword(null,"value","value",305978217));var type = cljs.core.get.call(null,map__16579__$1,new cljs.core.Keyword(null,"type","type",1174270348));var pred__16580 = cljs.core._EQ_;var expr__16581 = type;if(cljs.core.truth_(pred__16580.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),expr__16581)))
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Total",new cljs.core.Keyword(null,"description","description",-1428560544),"Totals for the selected Portfolio Company"], null),new cljs.core.Keyword(null,"averages","averages",-1747836978),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Mean",new cljs.core.Keyword(null,"description","description",-1428560544),"Mean for the selected Portfolio Company"], null),new cljs.core.Keyword(null,"benchmark","benchmark",667647056),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Benchmark",new cljs.core.Keyword(null,"description","description",-1428560544),"Mean over all UK Companies"], null)], null);
} else
{if(cljs.core.truth_(pred__16580.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",13706558),expr__16581)))
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Total",new cljs.core.Keyword(null,"description","description",-1428560544),"Totals for the Portfolio Companies of the selected Investor"], null),new cljs.core.Keyword(null,"averages","averages",-1747836978),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Mean",new cljs.core.Keyword(null,"description","description",-1428560544),"Mean over the Portfolio Companies of the selected Investor"], null),new cljs.core.Keyword(null,"benchmark","benchmark",667647056),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Benchmark",new cljs.core.Keyword(null,"description","description",-1428560544),"Mean over all UK Companies"], null)], null);
} else
{if(cljs.core.truth_(pred__16580.call(null,new cljs.core.Keyword(null,"constituency","constituency",1803637324),expr__16581)))
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Total",new cljs.core.Keyword(null,"description","description",-1428560544),"Totals for the selected Constituency"], null),new cljs.core.Keyword(null,"averages","averages",-1747836978),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Mean",new cljs.core.Keyword(null,"description","description",-1428560544),"Mean over the Portfolio Companies with sites in the selected Constituency"], null),new cljs.core.Keyword(null,"benchmark","benchmark",667647056),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Benchmark",new cljs.core.Keyword(null,"description","description",-1428560544),"Mean over all UK Companies"], null)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Total",new cljs.core.Keyword(null,"description","description",-1428560544),"Totals over all Portfolio Companies"], null),new cljs.core.Keyword(null,"averages","averages",-1747836978),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Mean",new cljs.core.Keyword(null,"description","description",-1428560544),"Mean over all Portfolio Companies"], null),new cljs.core.Keyword(null,"benchmark","benchmark",667647056),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Benchmark",new cljs.core.Keyword(null,"description","description",-1428560544),"Mean over all UK Companies"], null)], null);
}
}
}
});
clustermap.components.full_report.overview.overview_data = (function overview_data(p__16583){var map__16609 = p__16583;var map__16609__$1 = ((cljs.core.seq_QMARK_.call(null,map__16609))?cljs.core.apply.call(null,cljs.core.hash_map,map__16609):map__16609);var selection_investment_stats = cljs.core.get.call(null,map__16609__$1,new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",-1048685843));var selection = cljs.core.get.call(null,map__16609__$1,new cljs.core.Keyword(null,"selection","selection",975998651));var all_investment_stats = cljs.core.get.call(null,map__16609__$1,new cljs.core.Keyword(null,"all-investment-stats","all-investment-stats",1476039495));var sel_descrs = clustermap.components.full_report.overview.describe_selection.call(null,selection);var site_stats = (function (){var or__3637__auto__ = selection_investment_stats;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return all_investment_stats;
}
})();return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selection","selection",975998651),cljs.core.merge.call(null,new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"employee-count","employee-count",315351008),new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020),new cljs.core.Keyword(null,"turnover","turnover",-1778310555),new cljs.core.Keyword(null,"investor-companies","investor-companies",74375815),new cljs.core.Keyword(null,"employee-count-delta","employee-count-delta",1781159440),new cljs.core.Keyword(null,"turnover-delta-val","turnover-delta-val",-1004481897),new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",607601849),new cljs.core.Keyword(null,"turnover-delta","turnover-delta",547240062),new cljs.core.Keyword(null,"employee-count-delta-val","employee-count-delta-val",387778431)],[clustermap.formats.number.fnum.call(null,(function (){var G__16610 = site_stats;var G__16610__$1 = (((G__16610 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__16610));var G__16610__$2 = (((G__16610__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__16610__$1));return G__16610__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),clustermap.formats.number.fnum.call(null,(function (){var G__16611 = site_stats;var G__16611__$1 = (((G__16611 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",1998972271).cljs$core$IFn$_invoke$arity$1(G__16611));return G__16611__$1;
})(),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),clustermap.formats.money.fmoney.call(null,(function (){var G__16612 = site_stats;var G__16612__$1 = (((G__16612 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__16612));var G__16612__$2 = (((G__16612__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__16612__$1));return G__16612__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),clustermap.formats.number.fnum.call(null,(function (){var G__16613 = site_stats;var G__16613__$1 = (((G__16613 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",-2068624331).cljs$core$IFn$_invoke$arity$1(G__16613));return G__16613__$1;
})(),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),clustermap.formats.number.fnum.call(null,(function (){var G__16614 = site_stats;var G__16614__$1 = (((G__16614 == null))?null:new cljs.core.Keyword(null,"employee_count_delta","employee_count_delta",-1229648982).cljs$core$IFn$_invoke$arity$1(G__16614));var G__16614__$2 = (((G__16614__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__16614__$1));return G__16614__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),(function (){var G__16615 = site_stats;var G__16615__$1 = (((G__16615 == null))?null:new cljs.core.Keyword(null,"turnover_delta","turnover_delta",643085600).cljs$core$IFn$_invoke$arity$1(G__16615));var G__16615__$2 = (((G__16615__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__16615__$1));return G__16615__$2;
})(),clustermap.formats.number.fnum.call(null,(function (){var G__16616 = site_stats;var G__16616__$1 = (((G__16616 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",2089870686).cljs$core$IFn$_invoke$arity$1(G__16616));return G__16616__$1;
})(),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),clustermap.formats.money.fmoney.call(null,(function (){var G__16617 = site_stats;var G__16617__$1 = (((G__16617 == null))?null:new cljs.core.Keyword(null,"turnover_delta","turnover_delta",643085600).cljs$core$IFn$_invoke$arity$1(G__16617));var G__16617__$2 = (((G__16617__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__16617__$1));return G__16617__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),(function (){var G__16618 = site_stats;var G__16618__$1 = (((G__16618 == null))?null:new cljs.core.Keyword(null,"employee_count_delta","employee_count_delta",-1229648982).cljs$core$IFn$_invoke$arity$1(G__16618));var G__16618__$2 = (((G__16618__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__16618__$1));return G__16618__$2;
})()])),new cljs.core.Keyword(null,"averages","averages",-1747836978),cljs.core.merge.call(null,new cljs.core.Keyword(null,"averages","averages",-1747836978).cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"employee-count","employee-count",315351008),new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020),new cljs.core.Keyword(null,"turnover","turnover",-1778310555),new cljs.core.Keyword(null,"investor-companies","investor-companies",74375815),new cljs.core.Keyword(null,"employee-count-delta","employee-count-delta",1781159440),new cljs.core.Keyword(null,"turnover-delta-val","turnover-delta-val",-1004481897),new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",607601849),new cljs.core.Keyword(null,"turnover-delta","turnover-delta",547240062),new cljs.core.Keyword(null,"employee-count-delta-val","employee-count-delta-val",387778431)],[clustermap.formats.number.fnum.call(null,(function (){var G__16619 = site_stats;var G__16619__$1 = (((G__16619 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__16619));var G__16619__$2 = (((G__16619__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",-1359234715).cljs$core$IFn$_invoke$arity$1(G__16619__$1));return G__16619__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),"\u00A0",clustermap.formats.money.fmoney.call(null,(function (){var G__16620 = site_stats;var G__16620__$1 = (((G__16620 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__16620));var G__16620__$2 = (((G__16620__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",-1359234715).cljs$core$IFn$_invoke$arity$1(G__16620__$1));return G__16620__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),"\u00A0",clustermap.formats.number.fnum.call(null,(function (){var G__16621 = site_stats;var G__16621__$1 = (((G__16621 == null))?null:new cljs.core.Keyword(null,"employee_count_delta","employee_count_delta",-1229648982).cljs$core$IFn$_invoke$arity$1(G__16621));var G__16621__$2 = (((G__16621__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",-1359234715).cljs$core$IFn$_invoke$arity$1(G__16621__$1));return G__16621__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),(function (){var G__16622 = site_stats;var G__16622__$1 = (((G__16622 == null))?null:new cljs.core.Keyword(null,"turnover_delta","turnover_delta",643085600).cljs$core$IFn$_invoke$arity$1(G__16622));var G__16622__$2 = (((G__16622__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",-1359234715).cljs$core$IFn$_invoke$arity$1(G__16622__$1));return G__16622__$2;
})(),"\u00A0",clustermap.formats.money.fmoney.call(null,(function (){var G__16623 = site_stats;var G__16623__$1 = (((G__16623 == null))?null:new cljs.core.Keyword(null,"turnover_delta","turnover_delta",643085600).cljs$core$IFn$_invoke$arity$1(G__16623));var G__16623__$2 = (((G__16623__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",-1359234715).cljs$core$IFn$_invoke$arity$1(G__16623__$1));return G__16623__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),(function (){var G__16624 = site_stats;var G__16624__$1 = (((G__16624 == null))?null:new cljs.core.Keyword(null,"employee_count_delta","employee_count_delta",-1229648982).cljs$core$IFn$_invoke$arity$1(G__16624));var G__16624__$2 = (((G__16624__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",-1359234715).cljs$core$IFn$_invoke$arity$1(G__16624__$1));return G__16624__$2;
})()])),new cljs.core.Keyword(null,"benchmark","benchmark",667647056),cljs.core.merge.call(null,new cljs.core.Keyword(null,"benchmark","benchmark",667647056).cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"employee-count","employee-count",315351008),new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020),new cljs.core.Keyword(null,"turnover","turnover",-1778310555),new cljs.core.Keyword(null,"investor-companies","investor-companies",74375815),new cljs.core.Keyword(null,"employee-count-delta","employee-count-delta",1781159440),new cljs.core.Keyword(null,"turnover-delta-val","turnover-delta-val",-1004481897),new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",607601849),new cljs.core.Keyword(null,"turnover-delta","turnover-delta",547240062),new cljs.core.Keyword(null,"employee-count-delta-val","employee-count-delta-val",387778431)],[clustermap.formats.number.fnum.call(null,(function (){var G__16625 = all_investment_stats;var G__16625__$1 = (((G__16625 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__16625));var G__16625__$2 = (((G__16625__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",-1359234715).cljs$core$IFn$_invoke$arity$1(G__16625__$1));return G__16625__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),clustermap.formats.number.fnum.call(null,(function (){var G__16626 = all_investment_stats;var G__16626__$1 = (((G__16626 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",1998972271).cljs$core$IFn$_invoke$arity$1(G__16626));return G__16626__$1;
})(),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),clustermap.formats.money.fmoney.call(null,(function (){var G__16627 = all_investment_stats;var G__16627__$1 = (((G__16627 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__16627));var G__16627__$2 = (((G__16627__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",-1359234715).cljs$core$IFn$_invoke$arity$1(G__16627__$1));return G__16627__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),clustermap.formats.number.fnum.call(null,(function (){var G__16628 = all_investment_stats;var G__16628__$1 = (((G__16628 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",-2068624331).cljs$core$IFn$_invoke$arity$1(G__16628));return G__16628__$1;
})(),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),clustermap.formats.number.fnum.call(null,(function (){var G__16629 = all_investment_stats;var G__16629__$1 = (((G__16629 == null))?null:new cljs.core.Keyword(null,"employee_count_delta","employee_count_delta",-1229648982).cljs$core$IFn$_invoke$arity$1(G__16629));var G__16629__$2 = (((G__16629__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",-1359234715).cljs$core$IFn$_invoke$arity$1(G__16629__$1));return G__16629__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),(function (){var G__16630 = all_investment_stats;var G__16630__$1 = (((G__16630 == null))?null:new cljs.core.Keyword(null,"turnover_delta","turnover_delta",643085600).cljs$core$IFn$_invoke$arity$1(G__16630));var G__16630__$2 = (((G__16630__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__16630__$1));return G__16630__$2;
})(),clustermap.formats.number.fnum.call(null,(function (){var G__16631 = all_investment_stats;var G__16631__$1 = (((G__16631 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",2089870686).cljs$core$IFn$_invoke$arity$1(G__16631));return G__16631__$1;
})(),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),clustermap.formats.money.fmoney.call(null,(function (){var G__16632 = all_investment_stats;var G__16632__$1 = (((G__16632 == null))?null:new cljs.core.Keyword(null,"turnover_delta","turnover_delta",643085600).cljs$core$IFn$_invoke$arity$1(G__16632));var G__16632__$2 = (((G__16632__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",-1359234715).cljs$core$IFn$_invoke$arity$1(G__16632__$1));return G__16632__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-"),(function (){var G__16633 = all_investment_stats;var G__16633__$1 = (((G__16633 == null))?null:new cljs.core.Keyword(null,"employee_count_delta","employee_count_delta",-1229648982).cljs$core$IFn$_invoke$arity$1(G__16633));var G__16633__$2 = (((G__16633__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",-1359234715).cljs$core$IFn$_invoke$arity$1(G__16633__$1));return G__16633__$2;
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
{return null;

}
}
}
});
clustermap.components.full_report.overview.overview = (function overview(data){var map__16657 = clustermap.components.full_report.overview.overview_data.call(null,data);var map__16657__$1 = ((cljs.core.seq_QMARK_.call(null,map__16657))?cljs.core.apply.call(null,cljs.core.hash_map,map__16657):map__16657);var benchmark = cljs.core.get.call(null,map__16657__$1,new cljs.core.Keyword(null,"benchmark","benchmark",667647056));var averages = cljs.core.get.call(null,map__16657__$1,new cljs.core.Keyword(null,"averages","averages",-1747836978));var selection = cljs.core.get.call(null,map__16657__$1,new cljs.core.Keyword(null,"selection","selection",975998651));if(typeof clustermap.components.full_report.overview.t16658 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.overview.t16658 = (function (selection,averages,benchmark,map__16657,data,overview,meta16659){
this.selection = selection;
this.averages = averages;
this.benchmark = benchmark;
this.map__16657 = map__16657;
this.data = data;
this.overview = overview;
this.meta16659 = meta16659;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.overview.t16658.cljs$lang$type = true;
clustermap.components.full_report.overview.t16658.cljs$lang$ctorStr = "clustermap.components.full-report.overview/t16658";
clustermap.components.full_report.overview.t16658.cljs$lang$ctorPrWriter = ((function (map__16657,map__16657__$1,benchmark,averages,selection){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"clustermap.components.full-report.overview/t16658");
});})(map__16657,map__16657__$1,benchmark,averages,selection))
;
clustermap.components.full_report.overview.t16658.prototype.om$core$IRender$ = true;
clustermap.components.full_report.overview.t16658.prototype.om$core$IRender$render$arity$1 = ((function (map__16657,map__16657__$1,benchmark,averages,selection){
return (function (this__10071__auto__){var self__ = this;
var this__10071__auto____$1 = this;return React.DOM.div({"className": "full-report-overview"},React.DOM.h4(null,"Overview of latest filings",React.DOM.small(null,"\u00A0(may span years : see table below for details)")),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table-stats"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"\u00A0"),React.DOM.th(null,"Investor-backed companies"),React.DOM.th(null,"Investors"),React.DOM.th(null,"Constituencies"),React.DOM.th(null,"Revenue"),React.DOM.th({"colSpan": "2"},"Rev. change"),React.DOM.th(null,"Employees"))),React.DOM.tbody(null,React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": self__.selection.call(null,new cljs.core.Keyword(null,"description","description",-1428560544))}),sablono.interpreter.interpret.call(null,self__.selection.call(null,new cljs.core.Keyword(null,"name","name",1843675177)))),React.DOM.td(null,(function (){var attrs16665 = new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",607601849).cljs$core$IFn$_invoke$arity$1(self__.selection);return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs16665))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs16665)):{"className": "selection"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16665))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16665)], null))));
})()),React.DOM.td(null,(function (){var attrs16666 = new cljs.core.Keyword(null,"investor-companies","investor-companies",74375815).cljs$core$IFn$_invoke$arity$1(self__.selection);return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs16666))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs16666)):{"className": "selection"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16666))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16666)], null))));
})()),React.DOM.td(null,(function (){var attrs16667 = new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020).cljs$core$IFn$_invoke$arity$1(self__.selection);return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs16667))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs16667)):{"className": "selection"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16667))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16667)], null))));
})()),React.DOM.td(null,(function (){var attrs16668 = new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(self__.selection);return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs16668))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs16668)):{"className": "selection"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16668))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16668)], null))));
})()),React.DOM.td(null,(function (){var attrs16669 = clustermap.components.full_report.overview.pos_neg.call(null,new cljs.core.Keyword(null,"turnover-delta-val","turnover-delta-val",-1004481897).cljs$core$IFn$_invoke$arity$1(self__.selection));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs16669))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs16669)):{"className": "selection"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16669))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16669)], null))));
})()),React.DOM.td(null,(function (){var attrs16670 = new cljs.core.Keyword(null,"turnover-delta","turnover-delta",547240062).cljs$core$IFn$_invoke$arity$1(self__.selection);return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs16670))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs16670)):{"className": "selection"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16670))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16670)], null))));
})()),React.DOM.td(null,(function (){var attrs16671 = new cljs.core.Keyword(null,"employee-count","employee-count",315351008).cljs$core$IFn$_invoke$arity$1(self__.selection);return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs16671))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs16671)):{"className": "selection"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16671))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16671)], null))));
})()))))));
});})(map__16657,map__16657__$1,benchmark,averages,selection))
;
clustermap.components.full_report.overview.t16658.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__16657,map__16657__$1,benchmark,averages,selection){
return (function (_16660){var self__ = this;
var _16660__$1 = this;return self__.meta16659;
});})(map__16657,map__16657__$1,benchmark,averages,selection))
;
clustermap.components.full_report.overview.t16658.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__16657,map__16657__$1,benchmark,averages,selection){
return (function (_16660,meta16659__$1){var self__ = this;
var _16660__$1 = this;return (new clustermap.components.full_report.overview.t16658(self__.selection,self__.averages,self__.benchmark,self__.map__16657,self__.data,self__.overview,meta16659__$1));
});})(map__16657,map__16657__$1,benchmark,averages,selection))
;
clustermap.components.full_report.overview.__GT_t16658 = ((function (map__16657,map__16657__$1,benchmark,averages,selection){
return (function __GT_t16658(selection__$1,averages__$1,benchmark__$1,map__16657__$2,data__$1,overview__$1,meta16659){return (new clustermap.components.full_report.overview.t16658(selection__$1,averages__$1,benchmark__$1,map__16657__$2,data__$1,overview__$1,meta16659));
});})(map__16657,map__16657__$1,benchmark,averages,selection))
;
}
return (new clustermap.components.full_report.overview.t16658(selection,averages,benchmark,map__16657__$1,data,overview,null));
});
