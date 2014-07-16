// Compiled by ClojureScript 0.0-2261
goog.provide('clustermap.components.filter');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('jayq.core');
goog.require('clustermap.om');
goog.require('om.dom');
goog.require('jayq.core');
goog.require('clustermap.model');
goog.require('sablono.core');
goog.require('clustermap.routes');
goog.require('om.dom');
goog.require('clustermap.om');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('clustermap.model');
goog.require('jayq.core');
goog.require('clustermap.routes');
goog.require('om.core');
goog.require('om.core');
clustermap.components.filter.filter_component = (function filter_component(p__36515,owner){var map__36607 = p__36515;var map__36607__$1 = ((cljs.core.seq_QMARK_(map__36607))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36607):map__36607);var cursor = map__36607__$1;if(typeof clustermap.components.filter.t36608 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filter.t36608 = (function (cursor,map__36607,owner,p__36515,filter_component,meta36609){
this.cursor = cursor;
this.map__36607 = map__36607;
this.owner = owner;
this.p__36515 = p__36515;
this.filter_component = filter_component;
this.meta36609 = meta36609;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filter.t36608.cljs$lang$type = true;
clustermap.components.filter.t36608.cljs$lang$ctorStr = "clustermap.components.filter/t36608";
clustermap.components.filter.t36608.cljs$lang$ctorPrWriter = ((function (map__36607,map__36607__$1,cursor){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.filter/t36608");
});})(map__36607,map__36607__$1,cursor))
;
clustermap.components.filter.t36608.prototype.om$core$IWillUpdate$ = true;
clustermap.components.filter.t36608.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__36607,map__36607__$1,cursor){
return (function (this$,p__36611,next_state){var self__ = this;
var map__36612 = p__36611;var map__36612__$1 = ((cljs.core.seq_QMARK_(map__36612))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36612):map__36612);var next_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36612__$1,cljs.core.constant$keyword$1029);var next_compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36612__$1,cljs.core.constant$keyword$1030);var this$__$1 = this;var map__36613 = om.core.get_props(self__.owner);var map__36613__$1 = ((cljs.core.seq_QMARK_(map__36613))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36613):map__36613);var components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36613__$1,cljs.core.constant$keyword$1029);var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36613__$1,cljs.core.constant$keyword$1030);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_components,components))
{return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1030], null),cljs.core.into(cljs.core.PersistentVector.EMPTY,cljs.core.filter(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2(om.core._value,cljs.core.vals(next_components)))));
} else
{return null;
}
});})(map__36607,map__36607__$1,cursor))
;
clustermap.components.filter.t36608.prototype.om$core$IRenderState$ = true;
clustermap.components.filter.t36608.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__36607,map__36607__$1,cursor){
return (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "filter-component"},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-row"},React.DOM.div({"className": "tbl-cell"},React.DOM.h3(null,"Filter"))),React.DOM.div({"className": "tbl-row"},React.DOM.div({"className": "tbl-cell"},"age"),React.DOM.div({"className": "tbl-cell"},React.DOM.select({"onChange": ((function (this$__$1,map__36607,map__36607__$1,cursor){
return (function (e){var val = e.target.value;console.log(val);
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1029,cljs.core.constant$keyword$1031], null),(function (){var pred__36686 = cljs.core._EQ_;var expr__36687 = val;if(cljs.core.truth_((pred__36686.cljs$core$IFn$_invoke$arity$2 ? pred__36686.cljs$core$IFn$_invoke$arity$2("new",expr__36687) : pred__36686.call(null,"new",expr__36687))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1032,new cljs.core.PersistentArrayMap(null, 1, ["!formation_date",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1033,"2009-01-01"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__36686.cljs$core$IFn$_invoke$arity$2 ? pred__36686.cljs$core$IFn$_invoke$arity$2("old",expr__36687) : pred__36686.call(null,"old",expr__36687))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1032,new cljs.core.PersistentArrayMap(null, 1, ["!formation_date",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1034,"2009-01-01"], null)], null)], null);
} else
{return null;
}
}
})());
});})(this$__$1,map__36607,map__36607__$1,cursor))
},React.DOM.option({"value": ""},"any"),React.DOM.option({"value": "new"},"< 5 years old"),React.DOM.option({"value": "old"},">= 5 years old")))),React.DOM.div({"className": "tbl-row"},React.DOM.div({"className": "tbl-cell"},"group ?"),React.DOM.div({"className": "tbl-cell"},React.DOM.select({"onChange": ((function (this$__$1,map__36607,map__36607__$1,cursor){
return (function (e){var val = e.target.value;console.log(val);
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1029,cljs.core.constant$keyword$1035], null),(function (){var pred__36689 = cljs.core._EQ_;var expr__36690 = val;if(cljs.core.truth_((pred__36689.cljs$core$IFn$_invoke$arity$2 ? pred__36689.cljs$core$IFn$_invoke$arity$2("group",expr__36690) : pred__36689.call(null,"group",expr__36690))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1036,new cljs.core.PersistentArrayMap(null, 1, ["!is_group",true], null)], null);
} else
{if(cljs.core.truth_((pred__36689.cljs$core$IFn$_invoke$arity$2 ? pred__36689.cljs$core$IFn$_invoke$arity$2("notgroup",expr__36690) : pred__36689.call(null,"notgroup",expr__36690))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1036,new cljs.core.PersistentArrayMap(null, 1, ["!is_group",false], null)], null);
} else
{return null;
}
}
})());
});})(this$__$1,map__36607,map__36607__$1,cursor))
},React.DOM.option({"value": ""},"any"),React.DOM.option({"value": "group"},"group"),React.DOM.option({"value": "notgroup"},"not group")))),React.DOM.div({"className": "tbl-row"},React.DOM.div({"className": "tbl-cell"},"turnover"),React.DOM.div({"className": "tbl-cell"},React.DOM.select({"onChange": ((function (this$__$1,map__36607,map__36607__$1,cursor){
return (function (e){var val = e.target.value;console.log(val);
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1029,cljs.core.constant$keyword$943], null),(function (){var pred__36692 = cljs.core._EQ_;var expr__36693 = val;if(cljs.core.truth_((pred__36692.cljs$core$IFn$_invoke$arity$2 ? pred__36692.cljs$core$IFn$_invoke$arity$2("low",expr__36693) : pred__36692.call(null,"low",expr__36693))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1032,new cljs.core.PersistentArrayMap(null, 1, ["!latest_turnover",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1034,(1000000)], null)], null)], null);
} else
{if(cljs.core.truth_((pred__36692.cljs$core$IFn$_invoke$arity$2 ? pred__36692.cljs$core$IFn$_invoke$arity$2("high",expr__36693) : pred__36692.call(null,"high",expr__36693))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1032,new cljs.core.PersistentArrayMap(null, 1, ["!latest_turnover",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1033,(1000000)], null)], null)], null);
} else
{return null;
}
}
})());
});})(this$__$1,map__36607,map__36607__$1,cursor))
},React.DOM.option({"value": ""},"any"),React.DOM.option({"value": "low"},"< \u00A31 million"),React.DOM.option({"value": "high"},">= \u00A31 million")))),React.DOM.div({"className": "tbl-row"},React.DOM.div({"className": "tbl-cell"},"SIC section"),React.DOM.div({"className": "tbl-cell"},React.DOM.select({"style": {"width": "100%"}, "onChange": ((function (this$__$1,map__36607,map__36607__$1,cursor){
return (function (e){var val = e.target.value;console.log(e.target.value);
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1029,cljs.core.constant$keyword$1037], null),(function (){var pred__36695 = cljs.core._EQ_;var expr__36696 = val;if(cljs.core.truth_((pred__36695.cljs$core$IFn$_invoke$arity$2 ? pred__36695.cljs$core$IFn$_invoke$arity$2("A",expr__36696) : pred__36695.call(null,"A",expr__36696))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1032,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1033,"01110",cljs.core.constant$keyword$1038,"03220"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__36695.cljs$core$IFn$_invoke$arity$2 ? pred__36695.cljs$core$IFn$_invoke$arity$2("B",expr__36696) : pred__36695.call(null,"B",expr__36696))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1032,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1033,"05101",cljs.core.constant$keyword$1038,"09900"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__36695.cljs$core$IFn$_invoke$arity$2 ? pred__36695.cljs$core$IFn$_invoke$arity$2("C",expr__36696) : pred__36695.call(null,"C",expr__36696))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1032,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1033,"10110",cljs.core.constant$keyword$1038,"33200"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__36695.cljs$core$IFn$_invoke$arity$2 ? pred__36695.cljs$core$IFn$_invoke$arity$2("D",expr__36696) : pred__36695.call(null,"D",expr__36696))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1032,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1033,"35110",cljs.core.constant$keyword$1038,"35300"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__36695.cljs$core$IFn$_invoke$arity$2 ? pred__36695.cljs$core$IFn$_invoke$arity$2("E",expr__36696) : pred__36695.call(null,"E",expr__36696))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1032,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1033,"36000",cljs.core.constant$keyword$1038,"39000"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__36695.cljs$core$IFn$_invoke$arity$2 ? pred__36695.cljs$core$IFn$_invoke$arity$2("F",expr__36696) : pred__36695.call(null,"F",expr__36696))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1032,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1033,"41100",cljs.core.constant$keyword$1038,"43999"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__36695.cljs$core$IFn$_invoke$arity$2 ? pred__36695.cljs$core$IFn$_invoke$arity$2("G",expr__36696) : pred__36695.call(null,"G",expr__36696))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1032,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1033,"45111",cljs.core.constant$keyword$1038,"47990"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__36695.cljs$core$IFn$_invoke$arity$2 ? pred__36695.cljs$core$IFn$_invoke$arity$2("H",expr__36696) : pred__36695.call(null,"H",expr__36696))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1032,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1033,"49100",cljs.core.constant$keyword$1038,"53202"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__36695.cljs$core$IFn$_invoke$arity$2 ? pred__36695.cljs$core$IFn$_invoke$arity$2("I",expr__36696) : pred__36695.call(null,"I",expr__36696))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1032,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1033,"55100",cljs.core.constant$keyword$1038,"56302"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__36695.cljs$core$IFn$_invoke$arity$2 ? pred__36695.cljs$core$IFn$_invoke$arity$2("J",expr__36696) : pred__36695.call(null,"J",expr__36696))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1032,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1033,"58110",cljs.core.constant$keyword$1038,"63990"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__36695.cljs$core$IFn$_invoke$arity$2 ? pred__36695.cljs$core$IFn$_invoke$arity$2("K",expr__36696) : pred__36695.call(null,"K",expr__36696))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1032,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1033,"64110",cljs.core.constant$keyword$1038,"66300"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__36695.cljs$core$IFn$_invoke$arity$2 ? pred__36695.cljs$core$IFn$_invoke$arity$2("L",expr__36696) : pred__36695.call(null,"L",expr__36696))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1032,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1033,"68100",cljs.core.constant$keyword$1038,"68320"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__36695.cljs$core$IFn$_invoke$arity$2 ? pred__36695.cljs$core$IFn$_invoke$arity$2("M",expr__36696) : pred__36695.call(null,"M",expr__36696))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1032,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1033,"69101",cljs.core.constant$keyword$1038,"75000"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__36695.cljs$core$IFn$_invoke$arity$2 ? pred__36695.cljs$core$IFn$_invoke$arity$2("N",expr__36696) : pred__36695.call(null,"N",expr__36696))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1032,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1033,"77110",cljs.core.constant$keyword$1038,"82990"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__36695.cljs$core$IFn$_invoke$arity$2 ? pred__36695.cljs$core$IFn$_invoke$arity$2("O",expr__36696) : pred__36695.call(null,"O",expr__36696))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1032,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1033,"84110",cljs.core.constant$keyword$1038,"84300"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__36695.cljs$core$IFn$_invoke$arity$2 ? pred__36695.cljs$core$IFn$_invoke$arity$2("P",expr__36696) : pred__36695.call(null,"P",expr__36696))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1032,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1033,"85100",cljs.core.constant$keyword$1038,"85600"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__36695.cljs$core$IFn$_invoke$arity$2 ? pred__36695.cljs$core$IFn$_invoke$arity$2("Q",expr__36696) : pred__36695.call(null,"Q",expr__36696))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1032,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1033,"86101",cljs.core.constant$keyword$1038,"88990"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__36695.cljs$core$IFn$_invoke$arity$2 ? pred__36695.cljs$core$IFn$_invoke$arity$2("R",expr__36696) : pred__36695.call(null,"R",expr__36696))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1032,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1033,"90010",cljs.core.constant$keyword$1038,"93290"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__36695.cljs$core$IFn$_invoke$arity$2 ? pred__36695.cljs$core$IFn$_invoke$arity$2("S",expr__36696) : pred__36695.call(null,"S",expr__36696))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1032,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1033,"94110",cljs.core.constant$keyword$1038,"96090"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__36695.cljs$core$IFn$_invoke$arity$2 ? pred__36695.cljs$core$IFn$_invoke$arity$2("T",expr__36696) : pred__36695.call(null,"T",expr__36696))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1032,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1033,"97000",cljs.core.constant$keyword$1038,"98200"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__36695.cljs$core$IFn$_invoke$arity$2 ? pred__36695.cljs$core$IFn$_invoke$arity$2("U",expr__36696) : pred__36695.call(null,"U",expr__36696))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1032,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1033,"99000",cljs.core.constant$keyword$1038,"99999"], null)], null)], null);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
})());
});})(this$__$1,map__36607,map__36607__$1,cursor))
},React.DOM.option({"value": ""},"all"),React.DOM.option({"value": "A"},"A : Agriculture, Forestry and Fishing"),React.DOM.option({"value": "B"},"B : Mining and Quarrying"),React.DOM.option({"value": "C"},"C : Manufacturing"),React.DOM.option({"value": "D"},"D : Electricity, gas, steam and air conditioning supply"),React.DOM.option({"value": "E"},"E : Water supply, sewerage, waste management and remediation activities"),React.DOM.option({"value": "F"},"F : Construction"),React.DOM.option({"value": "G"},"G : Wholesale and retail trade; repair of motor vehicles and motorcycles"),React.DOM.option({"value": "H"},"H : Transportation and storage"),React.DOM.option({"value": "I"},"I : Accommodation and food service activities"),React.DOM.option({"value": "J"},"J : Information and communication"),React.DOM.option({"value": "K"},"K : Financial and insurance activities"),React.DOM.option({"value": "L"},"L : Real estate activities"),React.DOM.option({"value": "M"},"M : Professional, scientific and technical activities"),React.DOM.option({"value": "N"},"N : Administrative and support service activities"),React.DOM.option({"value": "O"},"O : Public administration and defence; compulsory social security"),React.DOM.option({"value": "P"},"P : Education"),React.DOM.option({"value": "Q"},"Q : Human health and social work activities"),React.DOM.option({"value": "R"},"R : Arts, entertainment and recreation"),React.DOM.option({"value": "S"},"S : Other service activities"),React.DOM.option({"value": "T"},"T : Activities of households as employers"),React.DOM.option({"value": "U"},"U : Activities of extraterritorial organisations and bodies"))))));
});})(map__36607,map__36607__$1,cursor))
;
clustermap.components.filter.t36608.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__36607,map__36607__$1,cursor){
return (function (_36610){var self__ = this;
var _36610__$1 = this;return self__.meta36609;
});})(map__36607,map__36607__$1,cursor))
;
clustermap.components.filter.t36608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__36607,map__36607__$1,cursor){
return (function (_36610,meta36609__$1){var self__ = this;
var _36610__$1 = this;return (new clustermap.components.filter.t36608(self__.cursor,self__.map__36607,self__.owner,self__.p__36515,self__.filter_component,meta36609__$1));
});})(map__36607,map__36607__$1,cursor))
;
clustermap.components.filter.__GT_t36608 = ((function (map__36607,map__36607__$1,cursor){
return (function __GT_t36608(cursor__$1,map__36607__$2,owner__$1,p__36515__$1,filter_component__$1,meta36609){return (new clustermap.components.filter.t36608(cursor__$1,map__36607__$2,owner__$1,p__36515__$1,filter_component__$1,meta36609));
});})(map__36607,map__36607__$1,cursor))
;
}
return (new clustermap.components.filter.t36608(cursor,map__36607__$1,owner,p__36515,filter_component,null));
});
clustermap.components.filter.mount = (function mount(app_state,path,elem_id,shared){return om.core.root(clustermap.components.filter.filter_component,app_state,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$875,shared,cljs.core.constant$keyword$878,document.getElementById(elem_id),cljs.core.constant$keyword$850,path], null));
});
