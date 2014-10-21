// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.formats.number');
goog.require('clustermap.boundarylines');
goog.require('secretary.core');
goog.require('clustermap.components.map');
goog.require('clustermap.nav');
goog.require('clustermap.components.timeline_chart');
goog.require('weasel.repl');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.money');
goog.require('clustermap.routes');
goog.require('figwheel.client');
goog.require('clustermap.components.table');
goog.require('clustermap.components.table');
goog.require('clustermap.components.full_report');
goog.require('cljs.core.async');
goog.require('clustermap.components.select_chooser');
goog.require('clustermap.components.select_chooser');
goog.require('clustermap.boundarylines');
goog.require('clustermap.app');
goog.require('clustermap.components.color_scale');
goog.require('clustermap.formats.time');
goog.require('clustermap.components.search');
goog.require('clustermap.components.map_report');
goog.require('clustermap.components.filter');
goog.require('clustermap.components.map_report');
goog.require('figwheel.client');
goog.require('clustermap.routes');
goog.require('clustermap.components.full_report');
goog.require('clustermap.components.search');
goog.require('secretary.core');
goog.require('clustermap.components.page_title');
goog.require('clustermap.formats.time');
goog.require('clustermap.components.color_scale');
goog.require('clustermap.components.filter');
goog.require('clustermap.nav');
goog.require('clojure.string');
goog.require('clustermap.components.timeline_chart');
goog.require('clustermap.components.page_title');
goog.require('clojure.string');
goog.require('clustermap.app');
goog.require('clustermap.components.map');
goog.require('clustermap.formats.money');
goog.require('weasel.repl');
clustermap.core.initial_state = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"collections","collections",-2114643505),new cljs.core.PersistentArrayMap(null, 3, ["uk_boroughs",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),null,new cljs.core.Keyword(null,"rtree","rtree",-82448827),null,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),cljs.core.PersistentArrayMap.EMPTY], null),"uk_wards",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),null,new cljs.core.Keyword(null,"rtree","rtree",-82448827),null,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),cljs.core.PersistentArrayMap.EMPTY], null),"uk_regions",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),null,new cljs.core.Keyword(null,"rtree","rtree",-82448827),null,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),cljs.core.PersistentArrayMap.EMPTY], null)], null),new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"components","components",-1073188942),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255),false,new cljs.core.Keyword(null,"bounds","bounds",1691609455),null,new cljs.core.Keyword(null,"compiled","compiled",850043082),null], null),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"geoport","geoport",534549910),new cljs.core.Keyword(null,"datasource","datasource",-246060221),"companies",new cljs.core.Keyword(null,"boundaryline-collections","boundaryline-collections",1750591980),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"uk_regions"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),"uk_counties"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),"uk_boroughs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),"uk_wards"], null)], null),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"initial-bounds","initial-bounds",-1404401542),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [59.54,2.3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [49.29,-11.29], null)], null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),null,new cljs.core.Keyword(null,"bounds","bounds",1691609455),null,new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936),null,new cljs.core.Keyword(null,"boundaryline-agg","boundaryline-agg",1246510775),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"index","index",-1531685915),"companies",new cljs.core.Keyword(null,"index-type","index-type",500383962),"company",new cljs.core.Keyword(null,"key","key",-1516042587),"boundaryline_id",new cljs.core.Keyword(null,"variable","variable",-281346492),"!latest_employee_count"], null),new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"scheme","scheme",90199613),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Oranges","Oranges",1752319702),new cljs.core.Keyword(null,"9","9",1664767314)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.Keyword(null,"log","log",-1595516004),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"sum","sum",136986814)], null)], null),new cljs.core.Keyword(null,"data","data",-232669377),null], null),new cljs.core.Keyword(null,"map-report","map-report",-254073588),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),"companies",new cljs.core.Keyword(null,"index-type","index-type",500383962),"company",new cljs.core.Keyword(null,"variables","variables",1563680814),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_employee_count","!latest_turnover"], null)], null)], null),new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251),null], null),new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"index","index",-1531685915),"companies",new cljs.core.Keyword(null,"index-type","index-type",500383962),"company",new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),"desc"], null)], null),new cljs.core.Keyword(null,"from","from",1815293044),(0),new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"!name","!name",1164538490),"Name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"!postcode","!postcode",1728852280),"Postcode"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"!formation_date","!formation_date",-1967327335),"Formation date",(function (p1__79799_SHARP_){return clustermap.formats.time.format_date.call(null,p1__79799_SHARP_);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"!latest_accounts_date","!latest_accounts_date",-259857093),"Filing date",(function (p1__79800_SHARP_){return clustermap.formats.time.format_date.call(null,p1__79800_SHARP_);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"!latest_employee_count","!latest_employee_count",-1445524938),"Employees",(function (p1__79801_SHARP_){return clustermap.formats.number.readable.call(null,p1__79801_SHARP_,new cljs.core.Keyword(null,"dec","dec",1888433436),(0));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"Turnover",(function (p1__79802_SHARP_){return clustermap.formats.money.readable.call(null,p1__79802_SHARP_,new cljs.core.Keyword(null,"sf","sf",-1949491738),(3),new cljs.core.Keyword(null,"curr","curr",-1092372808),"");
})], null)], null)], null),new cljs.core.Keyword(null,"table-data","table-data",-1783738205),null], null),new cljs.core.Keyword(null,"turnover-timeline","turnover-timeline",905445027),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"timeline","timeline",192903161),new cljs.core.Keyword(null,"datasource","datasource",-246060221),"company_accounts",new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"index","index",-1531685915),"company-accounts",new cljs.core.Keyword(null,"index-type","index-type",500383962),"accounts",new cljs.core.Keyword(null,"time-variable","time-variable",-1643449307),"?accounts_date",new cljs.core.Keyword(null,"measure-variables","measure-variables",893431199),"!turnover",new cljs.core.Keyword(null,"interval","interval",1708495417),"year"], null),new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548),null], null),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"map","map",1371690461)], null);
clustermap.core.components = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"f","f",-1597136552),clustermap.components.map.map_component,new cljs.core.Keyword(null,"target","target",253001721),"map-component",new cljs.core.Keyword(null,"paths","paths",-1807389588),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"map-state","map-state",-1227493550),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461)], null),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.Keyword(null,"compiled","compiled",850043082)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"map-report","map-report",-254073588),new cljs.core.Keyword(null,"f","f",-1597136552),clustermap.components.map_report.map_report_component,new cljs.core.Keyword(null,"target","target",253001721),"map-report-component",new cljs.core.Keyword(null,"paths","paths",-1807389588),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null),new cljs.core.Keyword(null,"map-controls","map-controls",-1453318552),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"controls","controls",1340701452)], null),new cljs.core.Keyword(null,"map-report","map-report",-254073588),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-report","map-report",-254073588)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"f","f",-1597136552),clustermap.components.filter.filter_component,new cljs.core.Keyword(null,"target","target",253001721),"search-component",new cljs.core.Keyword(null,"paths","paths",-1807389588),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"var-select","var-select",-284006595),new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.partial.call(null,clustermap.components.select_chooser.select_chooser_component,"Variable",new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_employee_count","Employee count"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!latest_turnover","Turnover"], null)], null)),new cljs.core.Keyword(null,"target","target",253001721),"variable-selection-component",new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"boundaryline-agg","boundaryline-agg",1246510775)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"stat-select","stat-select",587769134),new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.partial.call(null,clustermap.components.select_chooser.select_chooser_component,"Statistic",new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sum","Sum"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["max","Maximum"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["avg","Mean"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["boundaryline_id_doc_count","Count"], null)], null)),new cljs.core.Keyword(null,"target","target",253001721),"stat-selection-component",new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"scale-select","scale-select",1690031490),new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.partial.call(null,clustermap.components.select_chooser.select_chooser_component,"Scale",new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["log","Log"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["linear","Linear"], null)], null)),new cljs.core.Keyword(null,"target","target",253001721),"scale-selection-component",new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"color-scale","color-scale",-2117745622),new cljs.core.Keyword(null,"f","f",-1597136552),clustermap.components.color_scale.color_scale_component,new cljs.core.Keyword(null,"target","target",253001721),"color-scale-component",new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"f","f",-1597136552),clustermap.components.table.table_component,new cljs.core.Keyword(null,"target","target",253001721),"full-report-table",new cljs.core.Keyword(null,"paths","paths",-1807389588),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"table-state","table-state",-1662785974),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036)], null),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"turnover-timeline","turnover-timeline",905445027),new cljs.core.Keyword(null,"f","f",-1597136552),clustermap.components.timeline_chart.timeline_chart,new cljs.core.Keyword(null,"target","target",253001721),"turnover-timeline",new cljs.core.Keyword(null,"paths","paths",-1807389588),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"turnover-timeline","turnover-timeline",905445027)], null),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null)], null)], null)], null);
clustermap.core.bl_collections = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["uk_regions","uk_counties","uk_boroughs","uk_wards"], null);
clustermap.core.load_boundaryline_collection_indexes = (function load_boundaryline_collection_indexes(state){var seq__79807 = cljs.core.seq.call(null,clustermap.core.bl_collections);var chunk__79808 = null;var count__79809 = (0);var i__79810 = (0);while(true){
if((i__79810 < count__79809))
{var blcoll = cljs.core._nth.call(null,chunk__79808,i__79810);clustermap.boundarylines.fetch_boundaryline_collection_index.call(null,state,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),blcoll);
{
var G__79811 = seq__79807;
var G__79812 = chunk__79808;
var G__79813 = count__79809;
var G__79814 = (i__79810 + (1));
seq__79807 = G__79811;
chunk__79808 = G__79812;
count__79809 = G__79813;
i__79810 = G__79814;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__79807);if(temp__4126__auto__)
{var seq__79807__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__79807__$1))
{var c__4406__auto__ = cljs.core.chunk_first.call(null,seq__79807__$1);{
var G__79815 = cljs.core.chunk_rest.call(null,seq__79807__$1);
var G__79816 = c__4406__auto__;
var G__79817 = cljs.core.count.call(null,c__4406__auto__);
var G__79818 = (0);
seq__79807 = G__79815;
chunk__79808 = G__79816;
count__79809 = G__79817;
i__79810 = G__79818;
continue;
}
} else
{var blcoll = cljs.core.first.call(null,seq__79807__$1);clustermap.boundarylines.fetch_boundaryline_collection_index.call(null,state,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),blcoll);
{
var G__79819 = cljs.core.next.call(null,seq__79807__$1);
var G__79820 = null;
var G__79821 = (0);
var G__79822 = (0);
seq__79807 = G__79819;
chunk__79808 = G__79820;
count__79809 = G__79821;
i__79810 = G__79822;
continue;
}
}
} else
{return null;
}
}
break;
}
});
clustermap.core.parse_route = (function parse_route(history){var fragment = history.getToken();var vec__79826 = cljs.core.re_matches.call(null,/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.call(null,vec__79826,(0),null);var view = cljs.core.nth.call(null,vec__79826,(1),null);var type = cljs.core.nth.call(null,vec__79826,(2),null);var id = cljs.core.nth.call(null,vec__79826,(3),null);var type__$1 = ((((function (){var G__79827 = type;var G__79827__$1 = (((G__79827 == null))?null:clojure.string.trim.call(null,G__79827));var G__79827__$2 = (((G__79827__$1 == null))?null:cljs.core.count.call(null,G__79827__$1));return G__79827__$2;
})() > (0)))?clojure.string.trim.call(null,type):null);var id__$1 = ((((function (){var G__79828 = id;var G__79828__$1 = (((G__79828 == null))?null:clojure.string.trim.call(null,G__79828));var G__79828__$2 = (((G__79828__$1 == null))?null:cljs.core.count.call(null,G__79828__$1));return G__79828__$2;
})() > (0)))?clojure.string.trim.call(null,id):null);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view","view",1247994814),view,new cljs.core.Keyword(null,"type","type",1174270348),type__$1,new cljs.core.Keyword(null,"id","id",-1388402092),id__$1], null);
});
clustermap.core.change_view = (function change_view(state,view){var view__$1 = cljs.core.keyword.call(null,view);if(cljs.core.not_EQ_.call(null,view__$1,new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))
{cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"view","view",1247994814),view__$1);
return clustermap.nav.change_view.call(null,cljs.core.name.call(null,view__$1));
} else
{return null;
}
});
clustermap.core.set_route = (function set_route(history,view,type,id){if(cljs.core.truth_((function (){var and__3625__auto__ = type;if(cljs.core.truth_(and__3625__auto__))
{return id;
} else
{return and__3625__auto__;
}
})()))
{return history.setToken(("/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,(function (){var or__3637__auto__ = view;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return "map";
}
})()))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,type))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,id))));
} else
{if(cljs.core.truth_(view))
{return history.setToken(("/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,view))));
} else
{return history.setToken((""));

}
}
});
clustermap.core.parse_route = (function parse_route(history){var fragment = history.getToken();var vec__79832 = cljs.core.re_matches.call(null,/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.call(null,vec__79832,(0),null);var view = cljs.core.nth.call(null,vec__79832,(1),null);var type = cljs.core.nth.call(null,vec__79832,(2),null);var id = cljs.core.nth.call(null,vec__79832,(3),null);var type__$1 = ((((function (){var G__79833 = type;var G__79833__$1 = (((G__79833 == null))?null:clojure.string.trim.call(null,G__79833));var G__79833__$2 = (((G__79833__$1 == null))?null:cljs.core.count.call(null,G__79833__$1));return G__79833__$2;
})() > (0)))?clojure.string.trim.call(null,type):null);var id__$1 = ((((function (){var G__79834 = id;var G__79834__$1 = (((G__79834 == null))?null:clojure.string.trim.call(null,G__79834));var G__79834__$2 = (((G__79834__$1 == null))?null:cljs.core.count.call(null,G__79834__$1));return G__79834__$2;
})() > (0)))?clojure.string.trim.call(null,id):null);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view","view",1247994814),view,new cljs.core.Keyword(null,"type","type",1174270348),type__$1,new cljs.core.Keyword(null,"id","id",-1388402092),id__$1], null);
});
clustermap.core.set_view_route = (function set_view_route(history,view){var map__79836 = clustermap.core.parse_route.call(null,history);var map__79836__$1 = ((cljs.core.seq_QMARK_.call(null,map__79836))?cljs.core.apply.call(null,cljs.core.hash_map,map__79836):map__79836);var id = cljs.core.get.call(null,map__79836__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var type = cljs.core.get.call(null,map__79836__$1,new cljs.core.Keyword(null,"type","type",1174270348));return clustermap.core.set_route.call(null,history,view,type,id);
});
clustermap.core.create_event_handlers_map = (function create_event_handlers_map(state,history){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),cljs.core.partial.call(null,clustermap.core.set_view_route,history),new cljs.core.Keyword(null,"route-change-view","route-change-view",-1825638950),cljs.core.partial.call(null,clustermap.core.change_view,state),new cljs.core.Keyword(null,"select","select",1147833503),(function (t,v){return console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [":select (ignored)",t,v], null)));
})], null);
});
clustermap.core.choose_event_handler = (function choose_event_handler(event_handlers_map,type,val){var handler = cljs.core.get.call(null,event_handlers_map,type);if(cljs.core.not.call(null,handler))
{throw (new Error(("no handler for event-type: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));
} else
{}
return handler.call(null,val);
});
clustermap.core.init_routes = (function init_routes(history,comm){var action__10098__auto___79853 = (function (params__10099__auto__){if(cljs.core.map_QMARK_.call(null,params__10099__auto__))
{var map__79845 = params__10099__auto__;var map__79845__$1 = ((cljs.core.seq_QMARK_.call(null,map__79845))?cljs.core.apply.call(null,cljs.core.hash_map,map__79845):map__79845);return null;
} else
{if(cljs.core.vector_QMARK_.call(null,params__10099__auto__))
{var vec__79846 = params__10099__auto__;return null;
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"",action__10098__auto___79853);
var action__10098__auto___79854 = (function (params__10099__auto__){if(cljs.core.map_QMARK_.call(null,params__10099__auto__))
{var map__79847 = params__10099__auto__;var map__79847__$1 = ((cljs.core.seq_QMARK_.call(null,map__79847))?cljs.core.apply.call(null,cljs.core.hash_map,map__79847):map__79847);return null;
} else
{if(cljs.core.vector_QMARK_.call(null,params__10099__auto__))
{var vec__79848 = params__10099__auto__;return null;
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/",action__10098__auto___79854);
var action__10098__auto___79855 = (function (params__10099__auto__){if(cljs.core.map_QMARK_.call(null,params__10099__auto__))
{var map__79849 = params__10099__auto__;var map__79849__$1 = ((cljs.core.seq_QMARK_.call(null,map__79849))?cljs.core.apply.call(null,cljs.core.hash_map,map__79849):map__79849);var view = cljs.core.get.call(null,map__79849__$1,new cljs.core.Keyword(null,"view","view",1247994814));return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",-1825638950),view], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__10099__auto__))
{var vec__79850 = params__10099__auto__;var view = cljs.core.nth.call(null,vec__79850,(0),null);return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",-1825638950),view], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/:view",action__10098__auto___79855);
var action__10098__auto__ = (function (params__10099__auto__){if(cljs.core.map_QMARK_.call(null,params__10099__auto__))
{var map__79851 = params__10099__auto__;var map__79851__$1 = ((cljs.core.seq_QMARK_.call(null,map__79851))?cljs.core.apply.call(null,cljs.core.hash_map,map__79851):map__79851);var id = cljs.core.get.call(null,map__79851__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var type = cljs.core.get.call(null,map__79851__$1,new cljs.core.Keyword(null,"type","type",1174270348));var view = cljs.core.get.call(null,map__79851__$1,new cljs.core.Keyword(null,"view","view",1247994814));return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",-1825638950),view], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__10099__auto__))
{var vec__79852 = params__10099__auto__;var view = cljs.core.nth.call(null,vec__79852,(0),null);var type = cljs.core.nth.call(null,vec__79852,(1),null);var id = cljs.core.nth.call(null,vec__79852,(2),null);return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",-1825638950),view], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/:view/:type/:id",action__10098__auto__);
return ((function (action__10098__auto__){
return (function() { 
var G__79856__delegate = function (args__10097__auto__){return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/:view/:type/:id",args__10097__auto__);
};
var G__79856 = function (var_args){
var args__10097__auto__ = null;if (arguments.length > 0) {
  args__10097__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__79856__delegate.call(this,args__10097__auto__);};
G__79856.cljs$lang$maxFixedArity = 0;
G__79856.cljs$lang$applyTo = (function (arglist__79857){
var args__10097__auto__ = cljs.core.seq(arglist__79857);
return G__79856__delegate(args__10097__auto__);
});
G__79856.cljs$core$IFn$_invoke$arity$variadic = G__79856__delegate;
return G__79856;
})()
;
;})(action__10098__auto__))
});
clustermap.core.create_app_service = (function create_app_service(){var event_handlers = cljs.core.atom.call(null,null);if(typeof clustermap.core.t79861 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.core.t79861 = (function (event_handlers,create_app_service,meta79862){
this.event_handlers = event_handlers;
this.create_app_service = create_app_service;
this.meta79862 = meta79862;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.core.t79861.cljs$lang$type = true;
clustermap.core.t79861.cljs$lang$ctorStr = "clustermap.core/t79861";
clustermap.core.t79861.cljs$lang$ctorPrWriter = ((function (event_handlers){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"clustermap.core/t79861");
});})(event_handlers))
;
clustermap.core.t79861.prototype.clustermap$app$IAppService$ = true;
clustermap.core.t79861.prototype.clustermap$app$IAppService$init$arity$2 = ((function (event_handlers){
return (function (this$,app){var self__ = this;
var this$__$1 = this;clustermap.nav.init.call(null,clustermap.app.get_comm.call(null,app));
clustermap.core.init_routes.call(null,clustermap.app.get_history.call(null,app),clustermap.app.get_comm.call(null,app));
clustermap.core.load_boundaryline_collection_indexes.call(null,clustermap.app.get_state.call(null,app));
cljs.core.reset_BANG_.call(null,self__.event_handlers,clustermap.core.create_event_handlers_map.call(null,clustermap.app.get_state.call(null,app),clustermap.app.get_history.call(null,app)));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),clustermap.routes.path_for,new cljs.core.Keyword(null,"link-fn","link-fn",-205760857),clustermap.routes.link_for,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",630487502),cljs.core.partial.call(null,clustermap.routes.path_for_view,cljs.core.partial.call(null,clustermap.core.parse_route,clustermap.app.get_history.call(null,app))),new cljs.core.Keyword(null,"fetch-boundarylines-fn","fetch-boundarylines-fn",1291845393),cljs.core.partial.call(null,clustermap.boundarylines.get_or_fetch_best_boundarylines,clustermap.app.get_state.call(null,app),new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)),new cljs.core.Keyword(null,"point-in-boundarylines-fn","point-in-boundarylines-fn",-1836497614),cljs.core.partial.call(null,clustermap.boundarylines.point_in_boundarylines,clustermap.app.get_state.call(null,app),new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),new cljs.core.Keyword(null,"uk_boroughs","uk_boroughs",800727440))], null);
});})(event_handlers))
;
clustermap.core.t79861.prototype.clustermap$app$IAppService$destroy$arity$2 = ((function (event_handlers){
return (function (this$,app){var self__ = this;
var this$__$1 = this;return null;
});})(event_handlers))
;
clustermap.core.t79861.prototype.clustermap$app$IAppService$handle_event$arity$4 = ((function (event_handlers){
return (function (this$,app,type,val){var self__ = this;
var this$__$1 = this;return clustermap.core.choose_event_handler.call(null,cljs.core.deref.call(null,self__.event_handlers),type,val);
});})(event_handlers))
;
clustermap.core.t79861.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (event_handlers){
return (function (_79863){var self__ = this;
var _79863__$1 = this;return self__.meta79862;
});})(event_handlers))
;
clustermap.core.t79861.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (event_handlers){
return (function (_79863,meta79862__$1){var self__ = this;
var _79863__$1 = this;return (new clustermap.core.t79861(self__.event_handlers,self__.create_app_service,meta79862__$1));
});})(event_handlers))
;
clustermap.core.__GT_t79861 = ((function (event_handlers){
return (function __GT_t79861(event_handlers__$1,create_app_service__$1,meta79862){return (new clustermap.core.t79861(event_handlers__$1,create_app_service__$1,meta79862));
});})(event_handlers))
;
}
return (new clustermap.core.t79861(event_handlers,create_app_service,null));
});
clustermap.core.app_instance = cljs.core.atom.call(null,null);
clustermap.core.init = (function init(){return clustermap.app.start_or_restart_app.call(null,clustermap.core.app_instance,clustermap.core.initial_state,clustermap.core.components,clustermap.core.create_app_service.call(null));
});
if(cljs.core.truth_(config.repl))
{weasel.repl.connect.call(null,"ws://localhost:9001",new cljs.core.Keyword(null,"verbose","verbose",1694226060),true);
figwheel.client.watch_and_reload.call(null,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),(function (){clustermap.core.init.call(null);
return console.log("restarted");
}));
clustermap.core.init.call(null);
} else
{clustermap.core.init.call(null);

}

//# sourceMappingURL=core.js.map