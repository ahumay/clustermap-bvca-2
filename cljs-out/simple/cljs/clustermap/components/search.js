// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.components.search');
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
clustermap.components.search.ESCAPE_KEY = (27);
clustermap.components.search.ENTER_KEY = (13);
clustermap.components.search.LEFT_ARROW = (37);
clustermap.components.search.UP_ARROW = (38);
clustermap.components.search.RIGHT_ARROW = (39);
clustermap.components.search.DOWN_ARROW = (40);
clustermap.components.search.search_result_link = (function search_result_link(p__30409,owner,p__30410){var map__30419 = p__30409;var map__30419__$1 = ((cljs.core.seq_QMARK_.call(null,map__30419))?cljs.core.apply.call(null,cljs.core.hash_map,map__30419):map__30419);var search_result = map__30419__$1;var type = cljs.core.get.call(null,map__30419__$1,new cljs.core.Keyword(null,"type","type",1174270348));var name = cljs.core.get.call(null,map__30419__$1,new cljs.core.Keyword(null,"name","name",1843675177));var map__30420 = p__30410;var map__30420__$1 = ((cljs.core.seq_QMARK_.call(null,map__30420))?cljs.core.apply.call(null,cljs.core.hash_map,map__30420):map__30420);var opts = map__30420__$1;var path_fn = cljs.core.get.call(null,map__30420__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__30420__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));if(typeof clustermap.components.search.t30421 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t30421 = (function (map__30419,owner,path_fn,search_result_link,name,comm,search_result,type,map__30420,opts,p__30410,p__30409,meta30422){
this.map__30419 = map__30419;
this.owner = owner;
this.path_fn = path_fn;
this.search_result_link = search_result_link;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.type = type;
this.map__30420 = map__30420;
this.opts = opts;
this.p__30410 = p__30410;
this.p__30409 = p__30409;
this.meta30422 = meta30422;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t30421.cljs$lang$type = true;
clustermap.components.search.t30421.cljs$lang$ctorStr = "clustermap.components.search/t30421";
clustermap.components.search.t30421.cljs$lang$ctorPrWriter = ((function (map__30419,map__30419__$1,search_result,type,name,map__30420,map__30420__$1,opts,path_fn,comm){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.search/t30421");
});})(map__30419,map__30419__$1,search_result,type,name,map__30420,map__30420__$1,opts,path_fn,comm))
;
clustermap.components.search.t30421.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t30421.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__30419,map__30419__$1,search_result,type,name,map__30420,map__30420__$1,opts,path_fn,comm){
return (function (this$,p__30424){var self__ = this;
var map__30425 = p__30424;var map__30425__$1 = ((cljs.core.seq_QMARK_.call(null,map__30425))?cljs.core.apply.call(null,cljs.core.hash_map,map__30425):map__30425);var state = map__30425__$1;var selected = cljs.core.get.call(null,map__30425__$1,new cljs.core.Keyword(null,"selected","selected",574897764));var this$__$1 = this;var path = self__.path_fn.call(null,self__.type,self__.search_result);return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": ((function (path,this$__$1,map__30425,map__30425__$1,state,selected,map__30419,map__30419__$1,search_result,type,name,map__30420,map__30420__$1,opts,path_fn,comm){
return (function (e){var l = om.core.get_node.call(null,self__.owner,"link");var G__30426 = l;var G__30426__$1 = (((G__30426 == null))?null:jayq.core.$.call(null,G__30426));var G__30426__$2 = (((G__30426__$1 == null))?null:G__30426__$1.parents(".search-component"));var G__30426__$3 = (((G__30426__$2 == null))?null:G__30426__$2.toggle());return G__30426__$3;
});})(path,this$__$1,map__30425,map__30425__$1,state,selected,map__30419,map__30419__$1,search_result,type,name,map__30420,map__30420__$1,opts,path_fn,comm))
},sablono.interpreter.interpret.call(null,self__.name)));
});})(map__30419,map__30419__$1,search_result,type,name,map__30420,map__30420__$1,opts,path_fn,comm))
;
clustermap.components.search.t30421.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__30419,map__30419__$1,search_result,type,name,map__30420,map__30420__$1,opts,path_fn,comm){
return (function (_30423){var self__ = this;
var _30423__$1 = this;return self__.meta30422;
});})(map__30419,map__30419__$1,search_result,type,name,map__30420,map__30420__$1,opts,path_fn,comm))
;
clustermap.components.search.t30421.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__30419,map__30419__$1,search_result,type,name,map__30420,map__30420__$1,opts,path_fn,comm){
return (function (_30423,meta30422__$1){var self__ = this;
var _30423__$1 = this;return (new clustermap.components.search.t30421(self__.map__30419,self__.owner,self__.path_fn,self__.search_result_link,self__.name,self__.comm,self__.search_result,self__.type,self__.map__30420,self__.opts,self__.p__30410,self__.p__30409,meta30422__$1));
});})(map__30419,map__30419__$1,search_result,type,name,map__30420,map__30420__$1,opts,path_fn,comm))
;
clustermap.components.search.__GT_t30421 = ((function (map__30419,map__30419__$1,search_result,type,name,map__30420,map__30420__$1,opts,path_fn,comm){
return (function __GT_t30421(map__30419__$2,owner__$1,path_fn__$1,search_result_link__$1,name__$1,comm__$1,search_result__$1,type__$1,map__30420__$2,opts__$1,p__30410__$1,p__30409__$1,meta30422){return (new clustermap.components.search.t30421(map__30419__$2,owner__$1,path_fn__$1,search_result_link__$1,name__$1,comm__$1,search_result__$1,type__$1,map__30420__$2,opts__$1,p__30410__$1,p__30409__$1,meta30422));
});})(map__30419,map__30419__$1,search_result,type,name,map__30420,map__30420__$1,opts,path_fn,comm))
;
}
return (new clustermap.components.search.t30421(map__30419__$1,owner,path_fn,search_result_link,name,comm,search_result,type,map__30420__$1,opts,p__30410,p__30409,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__30427,n){var map__30429 = p__30427;var map__30429__$1 = ((cljs.core.seq_QMARK_.call(null,map__30429))?cljs.core.apply.call(null,cljs.core.hash_map,map__30429):map__30429);var investor_companies = cljs.core.get.call(null,map__30429__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",493714407));var portfolio_companies = cljs.core.get.call(null,map__30429__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",1223322975));var constituencies = cljs.core.get.call(null,map__30429__$1,new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020));var cons = (function (){var or__3558__auto__ = constituencies;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();var pcs = (function (){var or__3558__auto__ = portfolio_companies;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();var invs = (function (){var or__3558__auto__ = investor_companies;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();if((n < cljs.core.count.call(null,cons)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"constituency","constituency",1803637324),cljs.core.get.call(null,constituencies,n)], null);
} else
{if((n < (cljs.core.count.call(null,cons) + cljs.core.count.call(null,pcs))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),cljs.core.get.call(null,pcs,(n - cljs.core.count.call(null,cons)))], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"investor-company","investor-company",13706558),cljs.core.get.call(null,invs,((n - cljs.core.count.call(null,cons)) - cljs.core.count.call(null,pcs)))], null);

}
}
});
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__30436 = cljs.core._EQ__EQ_;var expr__30437 = e.keyCode;if(cljs.core.truth_(pred__30436.call(null,clustermap.components.search.ESCAPE_KEY,expr__30437)))
{var G__30439 = om.core.get_node.call(null,owner,"search-component");var G__30439__$1 = (((G__30439 == null))?null:jayq.core.$.call(null,G__30439));var G__30439__$2 = (((G__30439__$1 == null))?null:G__30439__$1.toggle());return G__30439__$2;
} else
{if(cljs.core.truth_(pred__30436.call(null,clustermap.components.search.ENTER_KEY,expr__30437)))
{var vec__30440 = clustermap.components.search.nth_search_result.call(null,cljs.core.deref.call(null,search_results),(function (){var or__3558__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439));if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return (0);
}
})());var type = cljs.core.nth.call(null,vec__30440,(0),null);var res = cljs.core.nth.call(null,vec__30440,(1),null);var G__30441_30442 = om.core.get_node.call(null,owner,"search-component");var G__30441_30443__$1 = (((G__30441_30442 == null))?null:jayq.core.$.call(null,G__30441_30442));var G__30441_30444__$2 = (((G__30441_30443__$1 == null))?null:G__30441_30443__$1.toggle());return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id.call(null,type,res)], null)], null));
} else
{if(cljs.core.truth_(pred__30436.call(null,clustermap.components.search.UP_ARROW,expr__30437)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),((function (){var or__3558__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439));if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return (0);
}
})() - (1)));
} else
{if(cljs.core.truth_(pred__30436.call(null,clustermap.components.search.DOWN_ARROW,expr__30437)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),((function (){var or__3558__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439));if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return (0);
}
})() + (1)));
} else
{return null;
}
}
}
}
});
clustermap.components.search.search_component = (function search_component(p__30445,owner){var map__30477 = p__30445;var map__30477__$1 = ((cljs.core.seq_QMARK_.call(null,map__30477))?cljs.core.apply.call(null,cljs.core.hash_map,map__30477):map__30477);var map__30478 = cljs.core.get.call(null,map__30477__$1,new cljs.core.Keyword(null,"selection","selection",975998651));var map__30478__$1 = ((cljs.core.seq_QMARK_.call(null,map__30478))?cljs.core.apply.call(null,cljs.core.hash_map,map__30478):map__30478);var selection_type = cljs.core.get.call(null,map__30478__$1,new cljs.core.Keyword(null,"type","type",1174270348));var selection_value = cljs.core.get.call(null,map__30478__$1,new cljs.core.Keyword(null,"value","value",305978217));var view = cljs.core.get.call(null,map__30477__$1,new cljs.core.Keyword(null,"view","view",1247994814));var search_results = cljs.core.get.call(null,map__30477__$1,new cljs.core.Keyword(null,"search-results","search-results",306464634));var map__30479 = om.core.get_shared.call(null,owner);var map__30479__$1 = ((cljs.core.seq_QMARK_.call(null,map__30479))?cljs.core.apply.call(null,cljs.core.hash_map,map__30479):map__30479);var path_fn = cljs.core.get.call(null,map__30479__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__30479__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var path_fn__$1 = cljs.core.partial.call(null,path_fn,view);var map__30480 = search_results;var map__30480__$1 = ((cljs.core.seq_QMARK_.call(null,map__30480))?cljs.core.apply.call(null,cljs.core.hash_map,map__30480):map__30480);var investor_companies = cljs.core.get.call(null,map__30480__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",493714407));var portfolio_companies = cljs.core.get.call(null,map__30480__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",1223322975));var constituencies = cljs.core.get.call(null,map__30480__$1,new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020));if(typeof clustermap.components.search.t30481 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t30481 = (function (search_results,map__30478,search_component,owner,path_fn,view,portfolio_companies,map__30480,map__30479,constituencies,investor_companies,selection_value,comm,p__30445,selection_type,map__30477,meta30482){
this.search_results = search_results;
this.map__30478 = map__30478;
this.search_component = search_component;
this.owner = owner;
this.path_fn = path_fn;
this.view = view;
this.portfolio_companies = portfolio_companies;
this.map__30480 = map__30480;
this.map__30479 = map__30479;
this.constituencies = constituencies;
this.investor_companies = investor_companies;
this.selection_value = selection_value;
this.comm = comm;
this.p__30445 = p__30445;
this.selection_type = selection_type;
this.map__30477 = map__30477;
this.meta30482 = meta30482;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t30481.cljs$lang$type = true;
clustermap.components.search.t30481.cljs$lang$ctorStr = "clustermap.components.search/t30481";
clustermap.components.search.t30481.cljs$lang$ctorPrWriter = ((function (map__30479,map__30479__$1,path_fn,comm,path_fn__$1,map__30480,map__30480__$1,investor_companies,portfolio_companies,constituencies,map__30477,map__30477__$1,map__30478,map__30478__$1,selection_type,selection_value,view,search_results){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.search/t30481");
});})(map__30479,map__30479__$1,path_fn,comm,path_fn__$1,map__30480,map__30480__$1,investor_companies,portfolio_companies,constituencies,map__30477,map__30477__$1,map__30478,map__30478__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t30481.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t30481.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__30479,map__30479__$1,path_fn,comm,path_fn__$1,map__30480,map__30480__$1,investor_companies,portfolio_companies,constituencies,map__30477,map__30477__$1,map__30478,map__30478__$1,selection_type,selection_value,view,search_results){
return (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "search-component", "ref": "search-component", "id": "search", "onKeyDown": ((function (this$__$1,map__30479,map__30479__$1,path_fn,comm,path_fn__$1,map__30480,map__30480__$1,investor_companies,portfolio_companies,constituencies,map__30477,map__30477__$1,map__30478,map__30478__$1,selection_type,selection_value,view,search_results){
return (function (e){return clustermap.components.search.key_down.call(null,e,self__.search_results,self__.owner,self__.comm);
});})(this$__$1,map__30479,map__30479__$1,path_fn,comm,path_fn__$1,map__30480,map__30480__$1,investor_companies,portfolio_companies,constituencies,map__30477,map__30477__$1,map__30478,map__30478__$1,selection_type,selection_value,view,search_results))
},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__30479,map__30479__$1,path_fn,comm,path_fn__$1,map__30480,map__30480__$1,investor_companies,portfolio_companies,constituencies,map__30477,map__30477__$1,map__30478,map__30478__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),e.target.value], null));
});})(this$__$1,map__30479,map__30479__$1,path_fn,comm,path_fn__$1,map__30480,map__30480__$1,investor_companies,portfolio_companies,constituencies,map__30477,map__30477__$1,map__30478,map__30478__$1,selection_type,selection_value,view,search_results))
})),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": ((function (this$__$1,map__30479,map__30479__$1,path_fn,comm,path_fn__$1,map__30480,map__30480__$1,investor_companies,portfolio_companies,constituencies,map__30477,map__30477__$1,map__30478,map__30478__$1,selection_type,selection_value,view,search_results){
return (function (e){cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),""], null));
return om.core.get_node.call(null,self__.owner,"search-field").value = "";
});})(this$__$1,map__30479,map__30479__$1,path_fn,comm,path_fn__$1,map__30480,map__30480__$1,investor_companies,portfolio_companies,constituencies,map__30477,map__30477__$1,map__30478,map__30478__$1,selection_type,selection_value,view,search_results))
},"\u00D7"))),sablono.interpreter.interpret.call(null,(cljs.core.truth_((function (){var or__3558__auto__ = cljs.core.not_empty.call(null,self__.constituencies);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = cljs.core.not_empty.call(null,self__.portfolio_companies);if(cljs.core.truth_(or__3558__auto____$1))
{return or__3558__auto____$1;
} else
{return cljs.core.not_empty.call(null,self__.investor_companies);
}
}
})())?(function (){var idx_cons = cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(0)),self__.constituencies);var idx_pcs = cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,cljs.core.count.call(null,idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod.call(null,(function (){var or__3558__auto__ = new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439).cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return (0);
}
})(),((cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs)) + cljs.core.count.call(null,idx_invs)));var _ = ((cljs.core.not_EQ_.call(null,selected_idx,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439).cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Constituencies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?(function (){var iter__4283__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__30479,map__30479__$1,path_fn,comm,path_fn__$1,map__30480,map__30480__$1,investor_companies,portfolio_companies,constituencies,map__30477,map__30477__$1,map__30478,map__30478__$1,selection_type,selection_value,view,search_results){
return (function iter__30484(s__30485){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__30479,map__30479__$1,path_fn,comm,path_fn__$1,map__30480,map__30480__$1,investor_companies,portfolio_companies,constituencies,map__30477,map__30477__$1,map__30478,map__30478__$1,selection_type,selection_value,view,search_results){
return (function (){var s__30485__$1 = s__30485;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30485__$1);if(temp__4126__auto__)
{var s__30485__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30485__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__30485__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__30487 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__30486 = (0);while(true){
if((i__30486 < size__4282__auto__))
{var vec__30490 = cljs.core._nth.call(null,c__4281__auto__,i__30486);var idx = cljs.core.nth.call(null,vec__30490,(0),null);var con = cljs.core.nth.call(null,vec__30490,(1),null);cljs.core.chunk_append.call(null,b__30487,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__30486,vec__30490,idx,con,c__4281__auto__,size__4282__auto__,b__30487,s__30485__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__30479,map__30479__$1,path_fn,comm,path_fn__$1,map__30480,map__30480__$1,investor_companies,portfolio_companies,constituencies,map__30477,map__30477__$1,map__30478,map__30478__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"constituency","constituency",1803637324),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)))));
});})(i__30486,vec__30490,idx,con,c__4281__auto__,size__4282__auto__,b__30487,s__30485__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__30479,map__30479__$1,path_fn,comm,path_fn__$1,map__30480,map__30480__$1,investor_companies,portfolio_companies,constituencies,map__30477,map__30477__$1,map__30478,map__30478__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__30508 = (i__30486 + (1));
i__30486 = G__30508;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30487),iter__30484.call(null,cljs.core.chunk_rest.call(null,s__30485__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30487),null);
}
} else
{var vec__30491 = cljs.core.first.call(null,s__30485__$2);var idx = cljs.core.nth.call(null,vec__30491,(0),null);var con = cljs.core.nth.call(null,vec__30491,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__30491,idx,con,s__30485__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__30479,map__30479__$1,path_fn,comm,path_fn__$1,map__30480,map__30480__$1,investor_companies,portfolio_companies,constituencies,map__30477,map__30477__$1,map__30478,map__30478__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"constituency","constituency",1803637324),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)))));
});})(vec__30491,idx,con,s__30485__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__30479,map__30479__$1,path_fn,comm,path_fn__$1,map__30480,map__30480__$1,investor_companies,portfolio_companies,constituencies,map__30477,map__30477__$1,map__30478,map__30478__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__30484.call(null,cljs.core.rest.call(null,s__30485__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__30479,map__30479__$1,path_fn,comm,path_fn__$1,map__30480,map__30480__$1,investor_companies,portfolio_companies,constituencies,map__30477,map__30477__$1,map__30478,map__30478__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__30479,map__30479__$1,path_fn,comm,path_fn__$1,map__30480,map__30480__$1,investor_companies,portfolio_companies,constituencies,map__30477,map__30477__$1,map__30478,map__30478__$1,selection_type,selection_value,view,search_results))
;return iter__4283__auto__.call(null,idx_cons);
})():null),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Investor-backed companies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?(function (){var iter__4283__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__30479,map__30479__$1,path_fn,comm,path_fn__$1,map__30480,map__30480__$1,investor_companies,portfolio_companies,constituencies,map__30477,map__30477__$1,map__30478,map__30478__$1,selection_type,selection_value,view,search_results){
return (function iter__30492(s__30493){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__30479,map__30479__$1,path_fn,comm,path_fn__$1,map__30480,map__30480__$1,investor_companies,portfolio_companies,constituencies,map__30477,map__30477__$1,map__30478,map__30478__$1,selection_type,selection_value,view,search_results){
return (function (){var s__30493__$1 = s__30493;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30493__$1);if(temp__4126__auto__)
{var s__30493__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30493__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__30493__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__30495 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__30494 = (0);while(true){
if((i__30494 < size__4282__auto__))
{var vec__30498 = cljs.core._nth.call(null,c__4281__auto__,i__30494);var idx = cljs.core.nth.call(null,vec__30498,(0),null);var pc = cljs.core.nth.call(null,vec__30498,(1),null);cljs.core.chunk_append.call(null,b__30495,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__30494,vec__30498,idx,pc,c__4281__auto__,size__4282__auto__,b__30495,s__30493__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__30479,map__30479__$1,path_fn,comm,path_fn__$1,map__30480,map__30480__$1,investor_companies,portfolio_companies,constituencies,map__30477,map__30477__$1,map__30478,map__30478__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)))));
});})(i__30494,vec__30498,idx,pc,c__4281__auto__,size__4282__auto__,b__30495,s__30493__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__30479,map__30479__$1,path_fn,comm,path_fn__$1,map__30480,map__30480__$1,investor_companies,portfolio_companies,constituencies,map__30477,map__30477__$1,map__30478,map__30478__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__30509 = (i__30494 + (1));
i__30494 = G__30509;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30495),iter__30492.call(null,cljs.core.chunk_rest.call(null,s__30493__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30495),null);
}
} else
{var vec__30499 = cljs.core.first.call(null,s__30493__$2);var idx = cljs.core.nth.call(null,vec__30499,(0),null);var pc = cljs.core.nth.call(null,vec__30499,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__30499,idx,pc,s__30493__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__30479,map__30479__$1,path_fn,comm,path_fn__$1,map__30480,map__30480__$1,investor_companies,portfolio_companies,constituencies,map__30477,map__30477__$1,map__30478,map__30478__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)))));
});})(vec__30499,idx,pc,s__30493__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__30479,map__30479__$1,path_fn,comm,path_fn__$1,map__30480,map__30480__$1,investor_companies,portfolio_companies,constituencies,map__30477,map__30477__$1,map__30478,map__30478__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__30492.call(null,cljs.core.rest.call(null,s__30493__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__30479,map__30479__$1,path_fn,comm,path_fn__$1,map__30480,map__30480__$1,investor_companies,portfolio_companies,constituencies,map__30477,map__30477__$1,map__30478,map__30478__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__30479,map__30479__$1,path_fn,comm,path_fn__$1,map__30480,map__30480__$1,investor_companies,portfolio_companies,constituencies,map__30477,map__30477__$1,map__30478,map__30478__$1,selection_type,selection_value,view,search_results))
;return iter__4283__auto__.call(null,idx_pcs);
})():null),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Investors"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?(function (){var iter__4283__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__30479,map__30479__$1,path_fn,comm,path_fn__$1,map__30480,map__30480__$1,investor_companies,portfolio_companies,constituencies,map__30477,map__30477__$1,map__30478,map__30478__$1,selection_type,selection_value,view,search_results){
return (function iter__30500(s__30501){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__30479,map__30479__$1,path_fn,comm,path_fn__$1,map__30480,map__30480__$1,investor_companies,portfolio_companies,constituencies,map__30477,map__30477__$1,map__30478,map__30478__$1,selection_type,selection_value,view,search_results){
return (function (){var s__30501__$1 = s__30501;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30501__$1);if(temp__4126__auto__)
{var s__30501__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30501__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__30501__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__30503 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__30502 = (0);while(true){
if((i__30502 < size__4282__auto__))
{var vec__30506 = cljs.core._nth.call(null,c__4281__auto__,i__30502);var idx = cljs.core.nth.call(null,vec__30506,(0),null);var inv = cljs.core.nth.call(null,vec__30506,(1),null);cljs.core.chunk_append.call(null,b__30503,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__30502,vec__30506,idx,inv,c__4281__auto__,size__4282__auto__,b__30503,s__30501__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__30479,map__30479__$1,path_fn,comm,path_fn__$1,map__30480,map__30480__$1,investor_companies,portfolio_companies,constituencies,map__30477,map__30477__$1,map__30478,map__30478__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"investor-company","investor-company",13706558),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)))));
});})(i__30502,vec__30506,idx,inv,c__4281__auto__,size__4282__auto__,b__30503,s__30501__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__30479,map__30479__$1,path_fn,comm,path_fn__$1,map__30480,map__30480__$1,investor_companies,portfolio_companies,constituencies,map__30477,map__30477__$1,map__30478,map__30478__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__30510 = (i__30502 + (1));
i__30502 = G__30510;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30503),iter__30500.call(null,cljs.core.chunk_rest.call(null,s__30501__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30503),null);
}
} else
{var vec__30507 = cljs.core.first.call(null,s__30501__$2);var idx = cljs.core.nth.call(null,vec__30507,(0),null);var inv = cljs.core.nth.call(null,vec__30507,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__30507,idx,inv,s__30501__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__30479,map__30479__$1,path_fn,comm,path_fn__$1,map__30480,map__30480__$1,investor_companies,portfolio_companies,constituencies,map__30477,map__30477__$1,map__30478,map__30478__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"investor-company","investor-company",13706558),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)))));
});})(vec__30507,idx,inv,s__30501__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__30479,map__30479__$1,path_fn,comm,path_fn__$1,map__30480,map__30480__$1,investor_companies,portfolio_companies,constituencies,map__30477,map__30477__$1,map__30478,map__30478__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__30500.call(null,cljs.core.rest.call(null,s__30501__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__30479,map__30479__$1,path_fn,comm,path_fn__$1,map__30480,map__30480__$1,investor_companies,portfolio_companies,constituencies,map__30477,map__30477__$1,map__30478,map__30478__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__30479,map__30479__$1,path_fn,comm,path_fn__$1,map__30480,map__30480__$1,investor_companies,portfolio_companies,constituencies,map__30477,map__30477__$1,map__30478,map__30478__$1,selection_type,selection_value,view,search_results))
;return iter__4283__auto__.call(null,idx_invs);
})():null)], null)], null);
})():null)));
});})(map__30479,map__30479__$1,path_fn,comm,path_fn__$1,map__30480,map__30480__$1,investor_companies,portfolio_companies,constituencies,map__30477,map__30477__$1,map__30478,map__30478__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t30481.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__30479,map__30479__$1,path_fn,comm,path_fn__$1,map__30480,map__30480__$1,investor_companies,portfolio_companies,constituencies,map__30477,map__30477__$1,map__30478,map__30478__$1,selection_type,selection_value,view,search_results){
return (function (_30483){var self__ = this;
var _30483__$1 = this;return self__.meta30482;
});})(map__30479,map__30479__$1,path_fn,comm,path_fn__$1,map__30480,map__30480__$1,investor_companies,portfolio_companies,constituencies,map__30477,map__30477__$1,map__30478,map__30478__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t30481.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__30479,map__30479__$1,path_fn,comm,path_fn__$1,map__30480,map__30480__$1,investor_companies,portfolio_companies,constituencies,map__30477,map__30477__$1,map__30478,map__30478__$1,selection_type,selection_value,view,search_results){
return (function (_30483,meta30482__$1){var self__ = this;
var _30483__$1 = this;return (new clustermap.components.search.t30481(self__.search_results,self__.map__30478,self__.search_component,self__.owner,self__.path_fn,self__.view,self__.portfolio_companies,self__.map__30480,self__.map__30479,self__.constituencies,self__.investor_companies,self__.selection_value,self__.comm,self__.p__30445,self__.selection_type,self__.map__30477,meta30482__$1));
});})(map__30479,map__30479__$1,path_fn,comm,path_fn__$1,map__30480,map__30480__$1,investor_companies,portfolio_companies,constituencies,map__30477,map__30477__$1,map__30478,map__30478__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.__GT_t30481 = ((function (map__30479,map__30479__$1,path_fn,comm,path_fn__$1,map__30480,map__30480__$1,investor_companies,portfolio_companies,constituencies,map__30477,map__30477__$1,map__30478,map__30478__$1,selection_type,selection_value,view,search_results){
return (function __GT_t30481(search_results__$1,map__30478__$2,search_component__$1,owner__$1,path_fn__$2,view__$1,portfolio_companies__$1,map__30480__$2,map__30479__$2,constituencies__$1,investor_companies__$1,selection_value__$1,comm__$1,p__30445__$1,selection_type__$1,map__30477__$2,meta30482){return (new clustermap.components.search.t30481(search_results__$1,map__30478__$2,search_component__$1,owner__$1,path_fn__$2,view__$1,portfolio_companies__$1,map__30480__$2,map__30479__$2,constituencies__$1,investor_companies__$1,selection_value__$1,comm__$1,p__30445__$1,selection_type__$1,map__30477__$2,meta30482));
});})(map__30479,map__30479__$1,path_fn,comm,path_fn__$1,map__30480,map__30480__$1,investor_companies,portfolio_companies,constituencies,map__30477,map__30477__$1,map__30478,map__30478__$1,selection_type,selection_value,view,search_results))
;
}
return (new clustermap.components.search.t30481(search_results,map__30478__$1,search_component,owner,path_fn__$1,view,portfolio_companies,map__30480__$1,map__30479__$1,constituencies,investor_companies,selection_value,comm,p__30445,selection_type,map__30477__$1,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id)], null));
});
