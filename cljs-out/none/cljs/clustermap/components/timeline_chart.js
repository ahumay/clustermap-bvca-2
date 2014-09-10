// Compiled by ClojureScript 0.0-2268
goog.provide('clustermap.components.timeline_chart');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('clustermap.formats.number');
goog.require('clojure.set');
goog.require('om.dom');
goog.require('hiccups.runtime');
goog.require('sablono.core');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.money');
goog.require('om.dom');
goog.require('sablono.core');
goog.require('clojure.set');
goog.require('jayq.core');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.money');
goog.require('hiccups.runtime');
clustermap.components.timeline_chart.create_chart = (function create_chart(data,node,p__51136){var map__51138 = p__51136;var map__51138__$1 = ((cljs.core.seq_QMARK_.call(null,map__51138))?cljs.core.apply.call(null,cljs.core.hash_map,map__51138):map__51138);var opts = map__51138__$1;var y1_title = cljs.core.get.call(null,map__51138__$1,new cljs.core.Keyword(null,"y1-title","y1-title",472065763));var y0_title = cljs.core.get.call(null,map__51138__$1,new cljs.core.Keyword(null,"y0-title","y0-title",-809800001));var x_labels = cljs.core.map.call(null,new cljs.core.Keyword(null,"date","date",-1463434462),data);var stats = cljs.core.map.call(null,new cljs.core.Keyword(null,"stats","stats",-85643011),data);var y_median = cljs.core.map.call(null,cljs.core.comp.call(null,((function (x_labels,stats,map__51138,map__51138__$1,opts,y1_title,y0_title){
return (function (p1__51130_SHARP_){return clustermap.formats.number.round_decimal.call(null,p1__51130_SHARP_,(0));
});})(x_labels,stats,map__51138,map__51138__$1,opts,y1_title,y0_title))
,((function (x_labels,stats,map__51138,map__51138__$1,opts,y1_title,y0_title){
return (function (p1__51131_SHARP_){return cljs.core.get_in.call(null,p1__51131_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"median","median",569566131)], null));
});})(x_labels,stats,map__51138,map__51138__$1,opts,y1_title,y0_title))
),data);var y_mean = cljs.core.map.call(null,cljs.core.comp.call(null,((function (x_labels,stats,y_median,map__51138,map__51138__$1,opts,y1_title,y0_title){
return (function (p1__51132_SHARP_){return clustermap.formats.number.round_decimal.call(null,p1__51132_SHARP_,(0));
});})(x_labels,stats,y_median,map__51138,map__51138__$1,opts,y1_title,y0_title))
,((function (x_labels,stats,y_median,map__51138,map__51138__$1,opts,y1_title,y0_title){
return (function (p1__51133_SHARP_){return cljs.core.get_in.call(null,p1__51133_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"mean","mean",-1359234715)], null));
});})(x_labels,stats,y_median,map__51138,map__51138__$1,opts,y1_title,y0_title))
),data);var y_total = cljs.core.map.call(null,cljs.core.comp.call(null,((function (x_labels,stats,y_median,y_mean,map__51138,map__51138__$1,opts,y1_title,y0_title){
return (function (p1__51134_SHARP_){return clustermap.formats.number.round_decimal.call(null,p1__51134_SHARP_,(0));
});})(x_labels,stats,y_median,y_mean,map__51138,map__51138__$1,opts,y1_title,y0_title))
,((function (x_labels,stats,y_median,y_mean,map__51138,map__51138__$1,opts,y1_title,y0_title){
return (function (p1__51135_SHARP_){return cljs.core.get_in.call(null,p1__51135_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"total","total",1916810418)], null));
});})(x_labels,stats,y_median,y_mean,map__51138,map__51138__$1,opts,y1_title,y0_title))
),data);return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),(300)], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"categories","categories",178386610),x_labels,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(270)], null)], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),y0_title], null),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),((function (x_labels,stats,y_median,y_mean,y_total,map__51138,map__51138__$1,opts,y1_title,y0_title){
return (function (){var this$ = this;return clustermap.formats.money.readable.call(null,this$.value,new cljs.core.Keyword(null,"curr","curr",-1092372808),"");
});})(x_labels,stats,y_median,y_mean,y_total,map__51138,map__51138__$1,opts,y1_title,y0_title))
], null)], null)], null),new cljs.core.Keyword(null,"series","series",600710694),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),("Total "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(y0_title)),new cljs.core.Keyword(null,"type","type",1174270348),"line",new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(0),new cljs.core.Keyword(null,"data","data",-232669377),y_total], null)], null)], null)));
});
clustermap.components.timeline_chart.timeline_chart = (function timeline_chart(data,owner,p__51139){var map__51144 = p__51139;var map__51144__$1 = ((cljs.core.seq_QMARK_.call(null,map__51144))?cljs.core.apply.call(null,cljs.core.hash_map,map__51144):map__51144);var opts = map__51144__$1;var id = cljs.core.get.call(null,map__51144__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof clustermap.components.timeline_chart.t51145 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.timeline_chart.t51145 = (function (id,opts,map__51144,p__51139,owner,data,timeline_chart,meta51146){
this.id = id;
this.opts = opts;
this.map__51144 = map__51144;
this.p__51139 = p__51139;
this.owner = owner;
this.data = data;
this.timeline_chart = timeline_chart;
this.meta51146 = meta51146;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.timeline_chart.t51145.cljs$lang$type = true;
clustermap.components.timeline_chart.t51145.cljs$lang$ctorStr = "clustermap.components.timeline-chart/t51145";
clustermap.components.timeline_chart.t51145.cljs$lang$ctorPrWriter = ((function (map__51144,map__51144__$1,opts,id){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"clustermap.components.timeline-chart/t51145");
});})(map__51144,map__51144__$1,opts,id))
;
clustermap.components.timeline_chart.t51145.prototype.om$core$IDidUpdate$ = true;
clustermap.components.timeline_chart.t51145.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__51144,map__51144__$1,opts,id){
return (function (this$,prev_props,prev_state){var self__ = this;
var this$__$1 = this;var root_node = om.core.get_node.call(null,self__.owner);return clustermap.components.timeline_chart.create_chart.call(null,self__.data,om.core.get_node.call(null,self__.owner,"chart"),self__.opts);
});})(map__51144,map__51144__$1,opts,id))
;
clustermap.components.timeline_chart.t51145.prototype.om$core$IDidMount$ = true;
clustermap.components.timeline_chart.t51145.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__51144,map__51144__$1,opts,id){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.call(null,self__.owner);clustermap.components.timeline_chart.create_chart.call(null,self__.data,om.core.get_node.call(null,self__.owner,"chart"),self__.opts);
return jayq.core.$.call(null,document).on("clustermap-change-view",((function (node,this$__$1,map__51144,map__51144__$1,opts,id){
return (function (e){var chart = jayq.core.$.call(null,om.core.get_node.call(null,self__.owner,"chart"));if(cljs.core.truth_(chart.is(":visible")))
{return chart.highcharts().reflow();
} else
{return null;
}
});})(node,this$__$1,map__51144,map__51144__$1,opts,id))
);
});})(map__51144,map__51144__$1,opts,id))
;
clustermap.components.timeline_chart.t51145.prototype.om$core$IRender$ = true;
clustermap.components.timeline_chart.t51145.prototype.om$core$IRender$render$arity$1 = ((function (map__51144,map__51144__$1,opts,id){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "timeline-chart", "id": self__.id, "ref": "chart"});
});})(map__51144,map__51144__$1,opts,id))
;
clustermap.components.timeline_chart.t51145.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__51144,map__51144__$1,opts,id){
return (function (_51147){var self__ = this;
var _51147__$1 = this;return self__.meta51146;
});})(map__51144,map__51144__$1,opts,id))
;
clustermap.components.timeline_chart.t51145.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__51144,map__51144__$1,opts,id){
return (function (_51147,meta51146__$1){var self__ = this;
var _51147__$1 = this;return (new clustermap.components.timeline_chart.t51145(self__.id,self__.opts,self__.map__51144,self__.p__51139,self__.owner,self__.data,self__.timeline_chart,meta51146__$1));
});})(map__51144,map__51144__$1,opts,id))
;
clustermap.components.timeline_chart.__GT_t51145 = ((function (map__51144,map__51144__$1,opts,id){
return (function __GT_t51145(id__$1,opts__$1,map__51144__$2,p__51139__$1,owner__$1,data__$1,timeline_chart__$1,meta51146){return (new clustermap.components.timeline_chart.t51145(id__$1,opts__$1,map__51144__$2,p__51139__$1,owner__$1,data__$1,timeline_chart__$1,meta51146));
});})(map__51144,map__51144__$1,opts,id))
;
}
return (new clustermap.components.timeline_chart.t51145(id,opts,map__51144__$1,p__51139,owner,data,timeline_chart,null));
});

//# sourceMappingURL=timeline_chart.js.map