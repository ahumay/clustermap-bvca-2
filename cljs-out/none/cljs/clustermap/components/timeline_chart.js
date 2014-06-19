// Compiled by ClojureScript 0.0-2227
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
clustermap.components.timeline_chart.create_chart = (function create_chart(data,node,p__24161){var map__24163 = p__24161;var map__24163__$1 = ((cljs.core.seq_QMARK_.call(null,map__24163))?cljs.core.apply.call(null,cljs.core.hash_map,map__24163):map__24163);var opts = map__24163__$1;var y1_title = cljs.core.get.call(null,map__24163__$1,new cljs.core.Keyword(null,"y1-title","y1-title",3377247893));var y0_title = cljs.core.get.call(null,map__24163__$1,new cljs.core.Keyword(null,"y0-title","y0-title",2489744212));var x_labels = cljs.core.map.call(null,new cljs.core.Keyword(null,"date","date",1016980256),data);var stats = cljs.core.map.call(null,new cljs.core.Keyword(null,"stats","stats",1123661841),data);var y_median = cljs.core.map.call(null,cljs.core.comp.call(null,((function (x_labels,stats,map__24163,map__24163__$1,opts,y1_title,y0_title){
return (function (p1__24155_SHARP_){return clustermap.formats.number.round_decimal.call(null,p1__24155_SHARP_,0);
});})(x_labels,stats,map__24163,map__24163__$1,opts,y1_title,y0_title))
,((function (x_labels,stats,map__24163,map__24163__$1,opts,y1_title,y0_title){
return (function (p1__24156_SHARP_){return cljs.core.get_in.call(null,p1__24156_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stats","stats",1123661841),new cljs.core.Keyword(null,"median","median",4230840444)], null));
});})(x_labels,stats,map__24163,map__24163__$1,opts,y1_title,y0_title))
),data);var y_mean = cljs.core.map.call(null,cljs.core.comp.call(null,((function (x_labels,stats,y_median,map__24163,map__24163__$1,opts,y1_title,y0_title){
return (function (p1__24157_SHARP_){return clustermap.formats.number.round_decimal.call(null,p1__24157_SHARP_,0);
});})(x_labels,stats,y_median,map__24163,map__24163__$1,opts,y1_title,y0_title))
,((function (x_labels,stats,y_median,map__24163,map__24163__$1,opts,y1_title,y0_title){
return (function (p1__24158_SHARP_){return cljs.core.get_in.call(null,p1__24158_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stats","stats",1123661841),new cljs.core.Keyword(null,"mean","mean",1017251639)], null));
});})(x_labels,stats,y_median,map__24163,map__24163__$1,opts,y1_title,y0_title))
),data);var y_total = cljs.core.map.call(null,cljs.core.comp.call(null,((function (x_labels,stats,y_median,y_mean,map__24163,map__24163__$1,opts,y1_title,y0_title){
return (function (p1__24159_SHARP_){return clustermap.formats.number.round_decimal.call(null,p1__24159_SHARP_,0);
});})(x_labels,stats,y_median,y_mean,map__24163,map__24163__$1,opts,y1_title,y0_title))
,((function (x_labels,stats,y_median,y_mean,map__24163,map__24163__$1,opts,y1_title,y0_title){
return (function (p1__24160_SHARP_){return cljs.core.get_in.call(null,p1__24160_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stats","stats",1123661841),new cljs.core.Keyword(null,"total","total",1124454070)], null));
});})(x_labels,stats,y_median,y_mean,map__24163,map__24163__$1,opts,y1_title,y0_title))
),data);return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"chart","chart",1108527952),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",1127031096),null,new cljs.core.Keyword(null,"height","height",4087841945),300], null),new cljs.core.Keyword(null,"title","title",1124275658),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",1017460895),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1126781867),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"categories","categories",2310420878),x_labels,new cljs.core.Keyword(null,"labels","labels",4198454129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotation","rotation",973603568),270], null)], null),new cljs.core.Keyword(null,"yAxis","yAxis",1127705388),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",1124275658),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",1017460895),y0_title], null),new cljs.core.Keyword(null,"min","min",1014012356),0,new cljs.core.Keyword(null,"labels","labels",4198454129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",2825495612),((function (x_labels,stats,y_median,y_mean,y_total,map__24163,map__24163__$1,opts,y1_title,y0_title){
return (function (){var this$ = this;return clustermap.formats.money.readable.call(null,this$.value,new cljs.core.Keyword(null,"curr","curr",1016969636),"");
});})(x_labels,stats,y_median,y_mean,y_total,map__24163,map__24163__$1,opts,y1_title,y0_title))
], null)], null)], null),new cljs.core.Keyword(null,"series","series",4403032553),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1017277949),("Total "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(y0_title)),new cljs.core.Keyword(null,"type","type",1017479852),"line",new cljs.core.Keyword(null,"yAxis","yAxis",1127705388),0,new cljs.core.Keyword(null,"data","data",1016980252),y_total], null)], null)], null)));
});
clustermap.components.timeline_chart.timeline_chart = (function timeline_chart(data,owner,p__24164){var map__24169 = p__24164;var map__24169__$1 = ((cljs.core.seq_QMARK_.call(null,map__24169))?cljs.core.apply.call(null,cljs.core.hash_map,map__24169):map__24169);var opts = map__24169__$1;var id = cljs.core.get.call(null,map__24169__$1,new cljs.core.Keyword(null,"id","id",1013907597));if(typeof clustermap.components.timeline_chart.t24170 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.timeline_chart.t24170 = (function (id,opts,map__24169,p__24164,owner,data,timeline_chart,meta24171){
this.id = id;
this.opts = opts;
this.map__24169 = map__24169;
this.p__24164 = p__24164;
this.owner = owner;
this.data = data;
this.timeline_chart = timeline_chart;
this.meta24171 = meta24171;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.timeline_chart.t24170.cljs$lang$type = true;
clustermap.components.timeline_chart.t24170.cljs$lang$ctorStr = "clustermap.components.timeline-chart/t24170";
clustermap.components.timeline_chart.t24170.cljs$lang$ctorPrWriter = ((function (map__24169,map__24169__$1,opts,id){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"clustermap.components.timeline-chart/t24170");
});})(map__24169,map__24169__$1,opts,id))
;
clustermap.components.timeline_chart.t24170.prototype.om$core$IDidUpdate$ = true;
clustermap.components.timeline_chart.t24170.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__24169,map__24169__$1,opts,id){
return (function (this$,prev_props,prev_state){var self__ = this;
var this$__$1 = this;var root_node = om.core.get_node.call(null,self__.owner);return clustermap.components.timeline_chart.create_chart.call(null,self__.data,om.core.get_node.call(null,self__.owner,"chart"),self__.opts);
});})(map__24169,map__24169__$1,opts,id))
;
clustermap.components.timeline_chart.t24170.prototype.om$core$IDidMount$ = true;
clustermap.components.timeline_chart.t24170.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__24169,map__24169__$1,opts,id){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.call(null,self__.owner);clustermap.components.timeline_chart.create_chart.call(null,self__.data,om.core.get_node.call(null,self__.owner,"chart"),self__.opts);
return jayq.core.$.call(null,document).on("clustermap-change-view",((function (node,this$__$1,map__24169,map__24169__$1,opts,id){
return (function (e){var chart = jayq.core.$.call(null,om.core.get_node.call(null,self__.owner,"chart"));if(cljs.core.truth_(chart.is(":visible")))
{return chart.highcharts().reflow();
} else
{return null;
}
});})(node,this$__$1,map__24169,map__24169__$1,opts,id))
);
});})(map__24169,map__24169__$1,opts,id))
;
clustermap.components.timeline_chart.t24170.prototype.om$core$IRender$ = true;
clustermap.components.timeline_chart.t24170.prototype.om$core$IRender$render$arity$1 = ((function (map__24169,map__24169__$1,opts,id){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "timeline-chart", "id": self__.id, "ref": "chart"});
});})(map__24169,map__24169__$1,opts,id))
;
clustermap.components.timeline_chart.t24170.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__24169,map__24169__$1,opts,id){
return (function (_24172){var self__ = this;
var _24172__$1 = this;return self__.meta24171;
});})(map__24169,map__24169__$1,opts,id))
;
clustermap.components.timeline_chart.t24170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__24169,map__24169__$1,opts,id){
return (function (_24172,meta24171__$1){var self__ = this;
var _24172__$1 = this;return (new clustermap.components.timeline_chart.t24170(self__.id,self__.opts,self__.map__24169,self__.p__24164,self__.owner,self__.data,self__.timeline_chart,meta24171__$1));
});})(map__24169,map__24169__$1,opts,id))
;
clustermap.components.timeline_chart.__GT_t24170 = ((function (map__24169,map__24169__$1,opts,id){
return (function __GT_t24170(id__$1,opts__$1,map__24169__$2,p__24164__$1,owner__$1,data__$1,timeline_chart__$1,meta24171){return (new clustermap.components.timeline_chart.t24170(id__$1,opts__$1,map__24169__$2,p__24164__$1,owner__$1,data__$1,timeline_chart__$1,meta24171));
});})(map__24169,map__24169__$1,opts,id))
;
}
return (new clustermap.components.timeline_chart.t24170(id,opts,map__24169__$1,p__24164,owner,data,timeline_chart,null));
});

//# sourceMappingURL=timeline_chart.js.map