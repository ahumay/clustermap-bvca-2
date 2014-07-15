// Compiled by ClojureScript 0.0-2261
goog.provide('clustermap.app');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.boundarylines');
goog.require('clustermap.data.colorchooser');
goog.require('secretary.core');
goog.require('clustermap.components.map');
goog.require('clustermap.nav');
goog.require('om.dom');
goog.require('goog.history.EventType');
goog.require('clustermap.routes');
goog.require('om.dom');
goog.require('clustermap.api');
goog.require('clustermap.ganalytics');
goog.require('clustermap.components.full_report');
goog.require('cljs.core.async');
goog.require('goog.History');
goog.require('goog.events');
goog.require('clustermap.boundarylines');
goog.require('clustermap.ganalytics');
goog.require('clustermap.components.search');
goog.require('clustermap.components.map_report');
goog.require('clustermap.data.colorchooser');
goog.require('clustermap.components.map_report');
goog.require('clustermap.routes');
goog.require('clustermap.components.full_report');
goog.require('clustermap.components.search');
goog.require('om.core');
goog.require('om.core');
goog.require('secretary.core');
goog.require('clustermap.components.page_title');
goog.require('clustermap.nav');
goog.require('clojure.string');
goog.require('clustermap.components.page_title');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('clustermap.components.map');
goog.require('clustermap.api');
clustermap.app.state = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"uk-constituencies-rtree","uk-constituencies-rtree",-1849185402),new cljs.core.Keyword(null,"all-investment-stats","all-investment-stats",1476039495),new cljs.core.Keyword(null,"uk-constituencies","uk-constituencies",-685500855),new cljs.core.Keyword(null,"boundaryline-collections","boundaryline-collections",1750591980),new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",-1048685843),new cljs.core.Keyword(null,"selection-portfolio-company-locations","selection-portfolio-company-locations",-1948963855),new cljs.core.Keyword(null,"selection-investment-account-timelines","selection-investment-account-timelines",2127671062),new cljs.core.Keyword(null,"selection-investment-aggs-table-view","selection-investment-aggs-table-view",-1031011048),new cljs.core.Keyword(null,"all-portfolio-company-site-stats","all-portfolio-company-site-stats",1602114424),new cljs.core.Keyword(null,"selection-investment-aggs","selection-investment-aggs",-292421479),new cljs.core.Keyword(null,"selection-investments-table-view","selection-investments-table-view",1654650362),new cljs.core.Keyword(null,"search-results","search-results",306464634),new cljs.core.Keyword(null,"multiview","multiview",194694555),new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),new cljs.core.Keyword(null,"selection-investments","selection-investments",-647516610),new cljs.core.Keyword(null,"view","view",1247994814)],[null,null,null,null,null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"uk_boroughs","uk_boroughs",800727440),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),null,new cljs.core.Keyword(null,"rtree","rtree",-82448827),null,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"uk_wards","uk_wards",-1174115675),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),null,new cljs.core.Keyword(null,"rtree","rtree",-82448827),null,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),cljs.core.PersistentArrayMap.EMPTY], null)], null),null,null,null,null,null,null,null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"multiview","multiview",194694555),new cljs.core.Keyword(null,"filter","filter",-948537934),null,new cljs.core.Keyword(null,"views","views",1450155487),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"geoport","geoport",534549910),new cljs.core.Keyword(null,"datasource","datasource",-246060221),"companies",new cljs.core.Keyword(null,"boundaryline_collections","boundaryline_collections",1443548607),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"uk_regions"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),"uk_boroughs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),"uk_wards"], null)], null),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"initial-bounds","initial-bounds",-1404401542),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [59.54,2.3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [49.29,-11.29], null)], null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),null,new cljs.core.Keyword(null,"bounds","bounds",1691609455),null,new cljs.core.Keyword(null,"boundaryline-agg","boundaryline-agg",1246510775),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"key","key",-1516042587),"boundaryline_id",new cljs.core.Keyword(null,"variable","variable",-281346492),"!latest_employee_count",new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936),"uk_boroughs"], null),new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),clustermap.data.colorchooser.brewer_green,new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.Keyword(null,"log","log",-1595516004)], null)], null),new cljs.core.Keyword(null,"data","data",-232669377),null], null),new cljs.core.Keyword(null,"turnover_timeline","turnover_timeline",-2042271101),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"timeline","timeline",192903161),new cljs.core.Keyword(null,"datasource","datasource",-246060221),"company_accounts",new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variable","variable",-281346492),"accounts_date",new cljs.core.Keyword(null,"after","after",594996914),"2003-01-01",new cljs.core.Keyword(null,"before","before",-1633692388),"2012-01-01",new cljs.core.Keyword(null,"interval","interval",1708495417),"year"], null),new cljs.core.Keyword(null,"data","data",-232669377),null], null),new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"datasource","datasource",-246060221),"companies",new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"order","order",-1254677256),null,new cljs.core.Keyword(null,"offset","offset",296498311),(0),new cljs.core.Keyword(null,"limit","limit",-1355822363),(50),new cljs.core.Keyword(null,"variables","variables",1563680814),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!name","!postcode","!formation_date","!sic07","!latest_accounts_date","!latest_employee_count","!latest_turnover"], null)], null),new cljs.core.Keyword(null,"data","data",-232669377),null], null)], null)], null),null,null,null,new cljs.core.Keyword(null,"map","map",1371690461)]));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.call(null,(function (s,p__45657){var vec__45658 = p__45657;var key_or_path = cljs.core.nth.call(null,vec__45658,(0),null);var value_or_fn = cljs.core.nth.call(null,vec__45658,(1),null);var path = ((cljs.core.sequential_QMARK_.call(null,key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.call(null,s,path,((cljs.core.fn_QMARK_.call(null,value_or_fn))?value_or_fn:((function (path,vec__45658,key_or_path,value_or_fn){
return (function (ov){return value_or_fn;
});})(path,vec__45658,key_or_path,value_or_fn))
));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__45659){var map__45661 = p__45659;var map__45661__$1 = ((cljs.core.seq_QMARK_.call(null,map__45661))?cljs.core.apply.call(null,cljs.core.hash_map,map__45661):map__45661);var path_values = map__45661__$1;return cljs.core.swap_BANG_.call(null,clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__45659 = null;if (arguments.length > 0) {
  p__45659 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__45659);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__45662){
var p__45659 = cljs.core.seq(arglist__45662);
return set_state__delegate(p__45659);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.bl_collections = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uk_boroughs","uk_boroughs",800727440),new cljs.core.Keyword(null,"uk_wards","uk_wards",-1174115675)], null);
clustermap.app.load_boundaryline_collection_indexes = (function load_boundaryline_collection_indexes(){var seq__45667 = cljs.core.seq.call(null,clustermap.app.bl_collections);var chunk__45668 = null;var count__45669 = (0);var i__45670 = (0);while(true){
if((i__45670 < count__45669))
{var blcoll = cljs.core._nth.call(null,chunk__45668,i__45670);clustermap.boundarylines.fetch_boundaryline_collection_index.call(null,clustermap.app.state,new cljs.core.Keyword(null,"boundaryline-collections","boundaryline-collections",1750591980),blcoll);
{
var G__45671 = seq__45667;
var G__45672 = chunk__45668;
var G__45673 = count__45669;
var G__45674 = (i__45670 + (1));
seq__45667 = G__45671;
chunk__45668 = G__45672;
count__45669 = G__45673;
i__45670 = G__45674;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__45667);if(temp__4126__auto__)
{var seq__45667__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45667__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__45667__$1);{
var G__45675 = cljs.core.chunk_rest.call(null,seq__45667__$1);
var G__45676 = c__4299__auto__;
var G__45677 = cljs.core.count.call(null,c__4299__auto__);
var G__45678 = (0);
seq__45667 = G__45675;
chunk__45668 = G__45676;
count__45669 = G__45677;
i__45670 = G__45678;
continue;
}
} else
{var blcoll = cljs.core.first.call(null,seq__45667__$1);clustermap.boundarylines.fetch_boundaryline_collection_index.call(null,clustermap.app.state,new cljs.core.Keyword(null,"boundaryline-collections","boundaryline-collections",1750591980),blcoll);
{
var G__45679 = cljs.core.next.call(null,seq__45667__$1);
var G__45680 = null;
var G__45681 = (0);
var G__45682 = (0);
seq__45667 = G__45679;
chunk__45668 = G__45680;
count__45669 = G__45681;
i__45670 = G__45682;
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
clustermap.app.load_initial_aggregations = (function load_initial_aggregations(){var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_45706){var state_val_45707 = (state_45706[(1)]);if((state_val_45707 === (2)))
{var inst_45701 = (state_45706[(2)]);var inst_45702 = [new cljs.core.Keyword(null,"multiview","multiview",194694555),new cljs.core.Keyword(null,"views","views",1450155487),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"data","data",-232669377)];var inst_45703 = (new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_45702,null));var inst_45704 = clustermap.app.set_state.call(null,inst_45703,inst_45701);var state_45706__$1 = state_45706;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45706__$1,inst_45704);
} else
{if((state_val_45707 === (1)))
{var inst_45699 = clustermap.api.boundaryline_aggregation.call(null,"companies","company","uk_boroughs","!latest_employee_count");var state_45706__$1 = state_45706;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45706__$1,(2),inst_45699);
} else
{return null;
}
}
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_45711 = [null,null,null,null,null,null,null];(statearr_45711[(0)] = state_machine__5679__auto__);
(statearr_45711[(1)] = (1));
return statearr_45711;
});
var state_machine__5679__auto____1 = (function (state_45706){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_45706);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e45712){if((e45712 instanceof Object))
{var ex__5682__auto__ = e45712;var statearr_45713_45715 = state_45706;(statearr_45713_45715[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45706);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e45712;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__45716 = state_45706;
state_45706 = G__45716;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_45706){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_45706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_45714 = f__5694__auto__.call(null);(statearr_45714[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_45714;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
});
clustermap.app.load_all_investment_stats = (function load_all_investment_stats(){var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_45736){var state_val_45737 = (state_45736[(1)]);if((state_val_45737 === (2)))
{var inst_45733 = (state_45736[(2)]);var inst_45734 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-investment-stats","all-investment-stats",1476039495),inst_45733);var state_45736__$1 = state_45736;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45736__$1,inst_45734);
} else
{if((state_val_45737 === (1)))
{var inst_45731 = clustermap.api.investment_stats.call(null);var state_45736__$1 = state_45736;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45736__$1,(2),inst_45731);
} else
{return null;
}
}
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_45741 = [null,null,null,null,null,null,null];(statearr_45741[(0)] = state_machine__5679__auto__);
(statearr_45741[(1)] = (1));
return statearr_45741;
});
var state_machine__5679__auto____1 = (function (state_45736){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_45736);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e45742){if((e45742 instanceof Object))
{var ex__5682__auto__ = e45742;var statearr_45743_45745 = state_45736;(statearr_45743_45745[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45736);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e45742;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__45746 = state_45736;
state_45736 = G__45746;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_45736){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_45736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_45744 = f__5694__auto__.call(null);(statearr_45744[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_45744;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"search-results","search-results",306464634),cljs.core.js__GT_clj.call(null,results));
});
clustermap.app.process_selection = (function process_selection(p__45747,type){var vec__45749 = p__45747;var selection = cljs.core.nth.call(null,vec__45749,(0),null);var selection_investment_stats = cljs.core.nth.call(null,vec__45749,(1),null);var selection_investment_account_timelines = cljs.core.nth.call(null,vec__45749,(2),null);var selection_investment_aggs = cljs.core.nth.call(null,vec__45749,(3),null);var selection_investments = cljs.core.nth.call(null,vec__45749,(4),null);var selection_portfolio_company_locations = cljs.core.nth.call(null,vec__45749,(5),null);clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"value","value",305978217),selection], null),new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",-1048685843),selection_investment_stats,new cljs.core.Keyword(null,"selection-investment-account-timelines","selection-investment-account-timelines",2127671062),selection_investment_account_timelines,new cljs.core.Keyword(null,"selection-investment-aggs","selection-investment-aggs",-292421479),selection_investment_aggs,new cljs.core.Keyword(null,"selection-investments","selection-investments",-647516610),selection_investments,new cljs.core.Keyword(null,"selection-portfolio-company-locations","selection-portfolio-company-locations",-1948963855));
return selection_portfolio_company_locations;
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__45750){var vec__45755 = p__45750;var type = cljs.core.nth.call(null,vec__45755,(0),null);var id = cljs.core.nth.call(null,vec__45755,(1),null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);var old_selector = new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clustermap.app.state));if(cljs.core.not_EQ_.call(null,selector,old_selector))
{clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selector","selector",762528866),selector);
var pred__45756 = cljs.core._EQ_;var expr__45757 = type;if(cljs.core.truth_(pred__45756.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),expr__45757)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company.call(null,id),clustermap.api.investment_stats.call(null,selector),clustermap.api.investment_account_timelines.call(null,selector),clustermap.api.investment_aggs.call(null,selector),clustermap.api.investments.call(null,selector),clustermap.api.portfolio_company_locations.call(null,selector)], null),type], null);
} else
{if(cljs.core.truth_(pred__45756.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",13706558),expr__45757)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company.call(null,id),clustermap.api.investment_stats.call(null,selector),clustermap.api.investment_account_timelines.call(null,selector),clustermap.api.investment_aggs.call(null,selector),clustermap.api.investments.call(null,selector),clustermap.api.portfolio_company_locations.call(null,selector)], null),type], null);
} else
{if(cljs.core.truth_(pred__45756.call(null,new cljs.core.Keyword(null,"constituency","constituency",1803637324),expr__45757)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.constituency.call(null,id),clustermap.api.investment_stats.call(null,selector),clustermap.api.investment_account_timelines.call(null,selector),clustermap.api.investment_aggs.call(null,selector),clustermap.api.investments.call(null,selector),clustermap.api.portfolio_company_locations.call(null,selector)], null),type], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,clustermap.api.investment_stats.call(null,selector),clustermap.api.investment_account_timelines.call(null,selector),clustermap.api.investment_aggs.call(null,selector),clustermap.api.investments.call(null,selector),null], null),type], null);
}
}
}
} else
{return null;
}
});
clustermap.app.change_view = (function change_view(view){var view__$1 = cljs.core.keyword.call(null,view);if(cljs.core.not_EQ_.call(null,view__$1,new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clustermap.app.state))))
{clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"view","view",1247994814),view__$1);
return clustermap.nav.change_view.call(null,cljs.core.name.call(null,view__$1));
} else
{return null;
}
});
clustermap.app.history = (new goog.History());
clustermap.app.set_route = (function set_route(view,type,id){if(cljs.core.truth_((function (){var and__3531__auto__ = type;if(cljs.core.truth_(and__3531__auto__))
{return id;
} else
{return and__3531__auto__;
}
})()))
{return clustermap.app.history.setToken(("/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,(function (){var or__3543__auto__ = view;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "map";
}
})()))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,type))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,id))));
} else
{if(cljs.core.truth_(view))
{return clustermap.app.history.setToken(("/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,view))));
} else
{if(true)
{return clustermap.app.history.setToken((""));
} else
{return null;
}
}
}
});
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__45762 = cljs.core.re_matches.call(null,/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.call(null,vec__45762,(0),null);var view = cljs.core.nth.call(null,vec__45762,(1),null);var type = cljs.core.nth.call(null,vec__45762,(2),null);var id = cljs.core.nth.call(null,vec__45762,(3),null);var type__$1 = ((((function (){var G__45763 = type;var G__45763__$1 = (((G__45763 == null))?null:clojure.string.trim.call(null,G__45763));var G__45763__$2 = (((G__45763__$1 == null))?null:cljs.core.count.call(null,G__45763__$1));return G__45763__$2;
})() > (0)))?clojure.string.trim.call(null,type):null);var id__$1 = ((((function (){var G__45764 = id;var G__45764__$1 = (((G__45764 == null))?null:clojure.string.trim.call(null,G__45764));var G__45764__$2 = (((G__45764__$1 == null))?null:cljs.core.count.call(null,G__45764__$1));return G__45764__$2;
})() > (0)))?clojure.string.trim.call(null,id):null);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view","view",1247994814),view,new cljs.core.Keyword(null,"type","type",1174270348),type__$1,new cljs.core.Keyword(null,"id","id",-1388402092),id__$1], null);
});
clustermap.app.change_view_path = cljs.core.partial.call(null,clustermap.routes.path_for_view,clustermap.app.parse_route);
clustermap.app.set_selection_route = (function set_selection_route(p__45765){var vec__45768 = p__45765;var type = cljs.core.nth.call(null,vec__45768,(0),null);var id = cljs.core.nth.call(null,vec__45768,(1),null);var map__45769 = clustermap.app.parse_route.call(null);var map__45769__$1 = ((cljs.core.seq_QMARK_.call(null,map__45769))?cljs.core.apply.call(null,cljs.core.hash_map,map__45769):map__45769);var view = cljs.core.get.call(null,map__45769__$1,new cljs.core.Keyword(null,"view","view",1247994814));return clustermap.app.set_route.call(null,view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__45771 = clustermap.app.parse_route.call(null);var map__45771__$1 = ((cljs.core.seq_QMARK_.call(null,map__45771))?cljs.core.apply.call(null,cljs.core.hash_map,map__45771):map__45771);var id = cljs.core.get.call(null,map__45771__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var type = cljs.core.get.call(null,map__45771__$1,new cljs.core.Keyword(null,"type","type",1174270348));return clustermap.app.set_route.call(null,view,type,id);
});
clustermap.app.update_selection_investment_aggs_table_view = (function update_selection_investment_aggs_table_view(table_view){var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_45804){var state_val_45805 = (state_45804[(1)]);if((state_val_45805 === (2)))
{var inst_45795 = (state_45804[(7)]);var inst_45801 = (state_45804[(2)]);var inst_45802 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selection-investment-aggs-table-view","selection-investment-aggs-table-view",-1031011048),inst_45795,new cljs.core.Keyword(null,"selection-investment-aggs","selection-investment-aggs",-292421479),inst_45801);var state_45804__$1 = state_45804;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45804__$1,inst_45802);
} else
{if((state_val_45805 === (1)))
{var inst_45795 = (state_45804[(7)]);var inst_45793 = cljs.core.deref.call(null,clustermap.app.state);var inst_45794 = new cljs.core.Keyword(null,"selection-investment-aggs-table-view","selection-investment-aggs-table-view",-1031011048).cljs$core$IFn$_invoke$arity$1(inst_45793);var inst_45795__$1 = cljs.core.merge.call(null,inst_45794,table_view);var inst_45796 = cljs.core.deref.call(null,clustermap.app.state);var inst_45797 = new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(inst_45796);var inst_45798 = cljs.core.merge.call(null,inst_45797,inst_45795__$1);var inst_45799 = clustermap.api.investment_aggs.call(null,inst_45798);var state_45804__$1 = (function (){var statearr_45806 = state_45804;(statearr_45806[(7)] = inst_45795__$1);
return statearr_45806;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45804__$1,(2),inst_45799);
} else
{return null;
}
}
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_45810 = [null,null,null,null,null,null,null,null];(statearr_45810[(0)] = state_machine__5679__auto__);
(statearr_45810[(1)] = (1));
return statearr_45810;
});
var state_machine__5679__auto____1 = (function (state_45804){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_45804);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e45811){if((e45811 instanceof Object))
{var ex__5682__auto__ = e45811;var statearr_45812_45814 = state_45804;(statearr_45812_45814[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45804);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e45811;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__45815 = state_45804;
state_45804 = G__45815;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_45804){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_45804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_45813 = f__5694__auto__.call(null);(statearr_45813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_45813;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
});
clustermap.app.update_selection_investments_table_view = (function update_selection_investments_table_view(table_view){var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_45848){var state_val_45849 = (state_45848[(1)]);if((state_val_45849 === (2)))
{var inst_45839 = (state_45848[(7)]);var inst_45845 = (state_45848[(2)]);var inst_45846 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selection-investments-table-view","selection-investments-table-view",1654650362),inst_45839,new cljs.core.Keyword(null,"selection-investments","selection-investments",-647516610),inst_45845);var state_45848__$1 = state_45848;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45848__$1,inst_45846);
} else
{if((state_val_45849 === (1)))
{var inst_45839 = (state_45848[(7)]);var inst_45837 = cljs.core.deref.call(null,clustermap.app.state);var inst_45838 = new cljs.core.Keyword(null,"selection-investments-table-view","selection-investments-table-view",1654650362).cljs$core$IFn$_invoke$arity$1(inst_45837);var inst_45839__$1 = cljs.core.merge.call(null,inst_45838,table_view);var inst_45840 = cljs.core.deref.call(null,clustermap.app.state);var inst_45841 = new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(inst_45840);var inst_45842 = cljs.core.merge.call(null,inst_45841,inst_45839__$1);var inst_45843 = clustermap.api.investments.call(null,inst_45842);var state_45848__$1 = (function (){var statearr_45850 = state_45848;(statearr_45850[(7)] = inst_45839__$1);
return statearr_45850;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45848__$1,(2),inst_45843);
} else
{return null;
}
}
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_45854 = [null,null,null,null,null,null,null,null];(statearr_45854[(0)] = state_machine__5679__auto__);
(statearr_45854[(1)] = (1));
return statearr_45854;
});
var state_machine__5679__auto____1 = (function (state_45848){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_45848);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e45855){if((e45855 instanceof Object))
{var ex__5682__auto__ = e45855;var statearr_45856_45858 = state_45848;(statearr_45856_45858[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45848);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e45855;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__45859 = state_45848;
state_45848 = G__45859;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_45848){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_45848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_45857 = f__5694__auto__.call(null);(statearr_45857[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_45857;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
});
clustermap.app.event_handlers = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"search","search",1564939822),clustermap.api.ordered_api.call(null,clustermap.api.search,clustermap.app.process_search_results),new cljs.core.Keyword(null,"select","select",1147833503),clustermap.app.set_selection_route,new cljs.core.Keyword(null,"route-select","route-select",1501475360),clustermap.api.ordered_api.call(null,clustermap.app.make_selection,clustermap.app.process_selection),new cljs.core.Keyword(null,"change-view","change-view",-1206699831),clustermap.app.set_view_route,new cljs.core.Keyword(null,"route-change-view","route-change-view",-1825638950),clustermap.app.change_view,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193),clustermap.app.update_selection_investment_aggs_table_view,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",1261701637),clustermap.app.update_selection_investments_table_view], null);
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.call(null,clustermap.app.event_handlers,type);if(cljs.core.not.call(null,handler))
{throw (new Error(("no handler for event-type: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));
} else
{}
return handler.call(null,val);
});
clustermap.app.init_routes = (function init_routes(comm){var action__9471__auto___45876 = (function (params__9472__auto__){if(cljs.core.map_QMARK_.call(null,params__9472__auto__))
{var map__45868 = params__9472__auto__;var map__45868__$1 = ((cljs.core.seq_QMARK_.call(null,map__45868))?cljs.core.apply.call(null,cljs.core.hash_map,map__45868):map__45868);return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",1501475360),null], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__9472__auto__))
{var vec__45869 = params__9472__auto__;return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",1501475360),null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"",action__9471__auto___45876);
var action__9471__auto___45877 = (function (params__9472__auto__){if(cljs.core.map_QMARK_.call(null,params__9472__auto__))
{var map__45870 = params__9472__auto__;var map__45870__$1 = ((cljs.core.seq_QMARK_.call(null,map__45870))?cljs.core.apply.call(null,cljs.core.hash_map,map__45870):map__45870);return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",1501475360),null], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__9472__auto__))
{var vec__45871 = params__9472__auto__;return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",1501475360),null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/",action__9471__auto___45877);
var action__9471__auto___45878 = (function (params__9472__auto__){if(cljs.core.map_QMARK_.call(null,params__9472__auto__))
{var map__45872 = params__9472__auto__;var map__45872__$1 = ((cljs.core.seq_QMARK_.call(null,map__45872))?cljs.core.apply.call(null,cljs.core.hash_map,map__45872):map__45872);var view = cljs.core.get.call(null,map__45872__$1,new cljs.core.Keyword(null,"view","view",1247994814));cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",-1825638950),view], null));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",1501475360),null], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__9472__auto__))
{var vec__45873 = params__9472__auto__;var view = cljs.core.nth.call(null,vec__45873,(0),null);cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",-1825638950),view], null));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",1501475360),null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/:view",action__9471__auto___45878);
var action__9471__auto___45879 = (function (params__9472__auto__){if(cljs.core.map_QMARK_.call(null,params__9472__auto__))
{var map__45874 = params__9472__auto__;var map__45874__$1 = ((cljs.core.seq_QMARK_.call(null,map__45874))?cljs.core.apply.call(null,cljs.core.hash_map,map__45874):map__45874);var id = cljs.core.get.call(null,map__45874__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var type = cljs.core.get.call(null,map__45874__$1,new cljs.core.Keyword(null,"type","type",1174270348));var view = cljs.core.get.call(null,map__45874__$1,new cljs.core.Keyword(null,"view","view",1247994814));cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",-1825638950),view], null));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",1501475360),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,type),id], null)], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__9472__auto__))
{var vec__45875 = params__9472__auto__;var view = cljs.core.nth.call(null,vec__45875,(0),null);var type = cljs.core.nth.call(null,vec__45875,(1),null);var id = cljs.core.nth.call(null,vec__45875,(2),null);cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",-1825638950),view], null));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",1501475360),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,type),id], null)], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/:view/:type/:id",action__9471__auto___45879);
goog.events.listen(clustermap.app.history,goog.history.EventType.NAVIGATE,(function (e){var token = e.token;clustermap.ganalytics.send_pageview.call(null,token);
return secretary.core.dispatch_BANG_.call(null,token);
}));
return clustermap.app.history.setEnabled(true);
});
clustermap.app.init = (function init(){var comm = cljs.core.async.chan.call(null);var path_fn = clustermap.routes.path_for;var link_fn = clustermap.routes.link_for;var shared = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"comm","comm",-1689770614),comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),path_fn,new cljs.core.Keyword(null,"link-fn","link-fn",-205760857),link_fn,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",630487502),clustermap.app.change_view_path,new cljs.core.Keyword(null,"fetch-boundaryline-fn","fetch-boundaryline-fn",-1105464009),cljs.core.partial.call(null,clustermap.boundarylines.get_or_fetch_best_boundaryline,clustermap.app.state,new cljs.core.Keyword(null,"boundaryline-collections","boundaryline-collections",1750591980),new cljs.core.Keyword(null,"uk_boroughs","uk_boroughs",800727440)),new cljs.core.Keyword(null,"point-in-boundarylines-fn","point-in-boundarylines-fn",-1836497614),cljs.core.partial.call(null,clustermap.boundarylines.point_in_boundarylines,clustermap.app.state,new cljs.core.Keyword(null,"boundaryline-collections","boundaryline-collections",1750591980),new cljs.core.Keyword(null,"uk_boroughs","uk_boroughs",800727440))], null);clustermap.nav.init.call(null,comm);
clustermap.app.load_boundaryline_collection_indexes.call(null);
clustermap.app.load_initial_aggregations.call(null);
return clustermap.components.map.mount.call(null,clustermap.app.state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multiview","multiview",194694555),new cljs.core.Keyword(null,"views","views",1450155487),new cljs.core.Keyword(null,"map","map",1371690461)], null),"map-component",shared);
});

//# sourceMappingURL=app.js.map