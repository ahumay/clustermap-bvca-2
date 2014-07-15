// Compiled by ClojureScript 0.0-2261
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
clustermap.components.search.search_result_link = (function search_result_link(p__24292,owner,p__24293){var map__24302 = p__24292;var map__24302__$1 = ((cljs.core.seq_QMARK_.call(null,map__24302))?cljs.core.apply.call(null,cljs.core.hash_map,map__24302):map__24302);var search_result = map__24302__$1;var type = cljs.core.get.call(null,map__24302__$1,new cljs.core.Keyword(null,"type","type",1174270348));var name = cljs.core.get.call(null,map__24302__$1,new cljs.core.Keyword(null,"name","name",1843675177));var map__24303 = p__24293;var map__24303__$1 = ((cljs.core.seq_QMARK_.call(null,map__24303))?cljs.core.apply.call(null,cljs.core.hash_map,map__24303):map__24303);var opts = map__24303__$1;var path_fn = cljs.core.get.call(null,map__24303__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__24303__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));if(typeof clustermap.components.search.t24304 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t24304 = (function (map__24302,owner,path_fn,p__24293,search_result_link,name,map__24303,comm,search_result,type,p__24292,opts,meta24305){
this.map__24302 = map__24302;
this.owner = owner;
this.path_fn = path_fn;
this.p__24293 = p__24293;
this.search_result_link = search_result_link;
this.name = name;
this.map__24303 = map__24303;
this.comm = comm;
this.search_result = search_result;
this.type = type;
this.p__24292 = p__24292;
this.opts = opts;
this.meta24305 = meta24305;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t24304.cljs$lang$type = true;
clustermap.components.search.t24304.cljs$lang$ctorStr = "clustermap.components.search/t24304";
clustermap.components.search.t24304.cljs$lang$ctorPrWriter = ((function (map__24302,map__24302__$1,search_result,type,name,map__24303,map__24303__$1,opts,path_fn,comm){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.search/t24304");
});})(map__24302,map__24302__$1,search_result,type,name,map__24303,map__24303__$1,opts,path_fn,comm))
;
clustermap.components.search.t24304.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t24304.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__24302,map__24302__$1,search_result,type,name,map__24303,map__24303__$1,opts,path_fn,comm){
return (function (this$,p__24307){var self__ = this;
var map__24308 = p__24307;var map__24308__$1 = ((cljs.core.seq_QMARK_.call(null,map__24308))?cljs.core.apply.call(null,cljs.core.hash_map,map__24308):map__24308);var state = map__24308__$1;var selected = cljs.core.get.call(null,map__24308__$1,new cljs.core.Keyword(null,"selected","selected",574897764));var this$__$1 = this;var path = self__.path_fn.call(null,self__.type,self__.search_result);return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": ((function (path,this$__$1,map__24308,map__24308__$1,state,selected,map__24302,map__24302__$1,search_result,type,name,map__24303,map__24303__$1,opts,path_fn,comm){
return (function (e){var l = om.core.get_node.call(null,self__.owner,"link");var G__24309 = l;var G__24309__$1 = (((G__24309 == null))?null:jayq.core.$.call(null,G__24309));var G__24309__$2 = (((G__24309__$1 == null))?null:G__24309__$1.parents(".search-component"));var G__24309__$3 = (((G__24309__$2 == null))?null:G__24309__$2.toggle());return G__24309__$3;
});})(path,this$__$1,map__24308,map__24308__$1,state,selected,map__24302,map__24302__$1,search_result,type,name,map__24303,map__24303__$1,opts,path_fn,comm))
},sablono.interpreter.interpret.call(null,self__.name)));
});})(map__24302,map__24302__$1,search_result,type,name,map__24303,map__24303__$1,opts,path_fn,comm))
;
clustermap.components.search.t24304.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__24302,map__24302__$1,search_result,type,name,map__24303,map__24303__$1,opts,path_fn,comm){
return (function (_24306){var self__ = this;
var _24306__$1 = this;return self__.meta24305;
});})(map__24302,map__24302__$1,search_result,type,name,map__24303,map__24303__$1,opts,path_fn,comm))
;
clustermap.components.search.t24304.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__24302,map__24302__$1,search_result,type,name,map__24303,map__24303__$1,opts,path_fn,comm){
return (function (_24306,meta24305__$1){var self__ = this;
var _24306__$1 = this;return (new clustermap.components.search.t24304(self__.map__24302,self__.owner,self__.path_fn,self__.p__24293,self__.search_result_link,self__.name,self__.map__24303,self__.comm,self__.search_result,self__.type,self__.p__24292,self__.opts,meta24305__$1));
});})(map__24302,map__24302__$1,search_result,type,name,map__24303,map__24303__$1,opts,path_fn,comm))
;
clustermap.components.search.__GT_t24304 = ((function (map__24302,map__24302__$1,search_result,type,name,map__24303,map__24303__$1,opts,path_fn,comm){
return (function __GT_t24304(map__24302__$2,owner__$1,path_fn__$1,p__24293__$1,search_result_link__$1,name__$1,map__24303__$2,comm__$1,search_result__$1,type__$1,p__24292__$1,opts__$1,meta24305){return (new clustermap.components.search.t24304(map__24302__$2,owner__$1,path_fn__$1,p__24293__$1,search_result_link__$1,name__$1,map__24303__$2,comm__$1,search_result__$1,type__$1,p__24292__$1,opts__$1,meta24305));
});})(map__24302,map__24302__$1,search_result,type,name,map__24303,map__24303__$1,opts,path_fn,comm))
;
}
return (new clustermap.components.search.t24304(map__24302__$1,owner,path_fn,p__24293,search_result_link,name,map__24303__$1,comm,search_result,type,p__24292,opts,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__24310,n){var map__24312 = p__24310;var map__24312__$1 = ((cljs.core.seq_QMARK_.call(null,map__24312))?cljs.core.apply.call(null,cljs.core.hash_map,map__24312):map__24312);var investor_companies = cljs.core.get.call(null,map__24312__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",493714407));var portfolio_companies = cljs.core.get.call(null,map__24312__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",1223322975));var constituencies = cljs.core.get.call(null,map__24312__$1,new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020));var cons = (function (){var or__3543__auto__ = constituencies;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();var pcs = (function (){var or__3543__auto__ = portfolio_companies;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();var invs = (function (){var or__3543__auto__ = investor_companies;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();if((n < cljs.core.count.call(null,cons)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"constituency","constituency",1803637324),cljs.core.get.call(null,constituencies,n)], null);
} else
{if((n < (cljs.core.count.call(null,cons) + cljs.core.count.call(null,pcs))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),cljs.core.get.call(null,pcs,(n - cljs.core.count.call(null,cons)))], null);
} else
{if(true)
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"investor-company","investor-company",13706558),cljs.core.get.call(null,invs,((n - cljs.core.count.call(null,cons)) - cljs.core.count.call(null,pcs)))], null);
} else
{return null;
}
}
}
});
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__24319 = cljs.core._EQ__EQ_;var expr__24320 = e.keyCode;if(cljs.core.truth_(pred__24319.call(null,clustermap.components.search.ESCAPE_KEY,expr__24320)))
{var G__24322 = om.core.get_node.call(null,owner,"search-component");var G__24322__$1 = (((G__24322 == null))?null:jayq.core.$.call(null,G__24322));var G__24322__$2 = (((G__24322__$1 == null))?null:G__24322__$1.toggle());return G__24322__$2;
} else
{if(cljs.core.truth_(pred__24319.call(null,clustermap.components.search.ENTER_KEY,expr__24320)))
{var vec__24323 = clustermap.components.search.nth_search_result.call(null,cljs.core.deref.call(null,search_results),(function (){var or__3543__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439));if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return (0);
}
})());var type = cljs.core.nth.call(null,vec__24323,(0),null);var res = cljs.core.nth.call(null,vec__24323,(1),null);var G__24324_24325 = om.core.get_node.call(null,owner,"search-component");var G__24324_24326__$1 = (((G__24324_24325 == null))?null:jayq.core.$.call(null,G__24324_24325));var G__24324_24327__$2 = (((G__24324_24326__$1 == null))?null:G__24324_24326__$1.toggle());return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id.call(null,type,res)], null)], null));
} else
{if(cljs.core.truth_(pred__24319.call(null,clustermap.components.search.UP_ARROW,expr__24320)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),((function (){var or__3543__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439));if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return (0);
}
})() - (1)));
} else
{if(cljs.core.truth_(pred__24319.call(null,clustermap.components.search.DOWN_ARROW,expr__24320)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),((function (){var or__3543__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439));if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
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
clustermap.components.search.search_component = (function search_component(p__24328,owner){var map__24360 = p__24328;var map__24360__$1 = ((cljs.core.seq_QMARK_.call(null,map__24360))?cljs.core.apply.call(null,cljs.core.hash_map,map__24360):map__24360);var map__24361 = cljs.core.get.call(null,map__24360__$1,new cljs.core.Keyword(null,"selection","selection",975998651));var map__24361__$1 = ((cljs.core.seq_QMARK_.call(null,map__24361))?cljs.core.apply.call(null,cljs.core.hash_map,map__24361):map__24361);var selection_type = cljs.core.get.call(null,map__24361__$1,new cljs.core.Keyword(null,"type","type",1174270348));var selection_value = cljs.core.get.call(null,map__24361__$1,new cljs.core.Keyword(null,"value","value",305978217));var view = cljs.core.get.call(null,map__24360__$1,new cljs.core.Keyword(null,"view","view",1247994814));var search_results = cljs.core.get.call(null,map__24360__$1,new cljs.core.Keyword(null,"search-results","search-results",306464634));var map__24362 = om.core.get_shared.call(null,owner);var map__24362__$1 = ((cljs.core.seq_QMARK_.call(null,map__24362))?cljs.core.apply.call(null,cljs.core.hash_map,map__24362):map__24362);var path_fn = cljs.core.get.call(null,map__24362__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__24362__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var path_fn__$1 = cljs.core.partial.call(null,path_fn,view);var map__24363 = search_results;var map__24363__$1 = ((cljs.core.seq_QMARK_.call(null,map__24363))?cljs.core.apply.call(null,cljs.core.hash_map,map__24363):map__24363);var investor_companies = cljs.core.get.call(null,map__24363__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",493714407));var portfolio_companies = cljs.core.get.call(null,map__24363__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",1223322975));var constituencies = cljs.core.get.call(null,map__24363__$1,new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020));if(typeof clustermap.components.search.t24364 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t24364 = (function (search_results,search_component,map__24363,owner,path_fn,view,map__24360,portfolio_companies,map__24361,constituencies,investor_companies,p__24328,map__24362,selection_value,comm,selection_type,meta24365){
this.search_results = search_results;
this.search_component = search_component;
this.map__24363 = map__24363;
this.owner = owner;
this.path_fn = path_fn;
this.view = view;
this.map__24360 = map__24360;
this.portfolio_companies = portfolio_companies;
this.map__24361 = map__24361;
this.constituencies = constituencies;
this.investor_companies = investor_companies;
this.p__24328 = p__24328;
this.map__24362 = map__24362;
this.selection_value = selection_value;
this.comm = comm;
this.selection_type = selection_type;
this.meta24365 = meta24365;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t24364.cljs$lang$type = true;
clustermap.components.search.t24364.cljs$lang$ctorStr = "clustermap.components.search/t24364";
clustermap.components.search.t24364.cljs$lang$ctorPrWriter = ((function (map__24362,map__24362__$1,path_fn,comm,path_fn__$1,map__24363,map__24363__$1,investor_companies,portfolio_companies,constituencies,map__24360,map__24360__$1,map__24361,map__24361__$1,selection_type,selection_value,view,search_results){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.search/t24364");
});})(map__24362,map__24362__$1,path_fn,comm,path_fn__$1,map__24363,map__24363__$1,investor_companies,portfolio_companies,constituencies,map__24360,map__24360__$1,map__24361,map__24361__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t24364.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t24364.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__24362,map__24362__$1,path_fn,comm,path_fn__$1,map__24363,map__24363__$1,investor_companies,portfolio_companies,constituencies,map__24360,map__24360__$1,map__24361,map__24361__$1,selection_type,selection_value,view,search_results){
return (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"ref": "search-component", "className": "search-component", "id": "search", "onKeyDown": ((function (this$__$1,map__24362,map__24362__$1,path_fn,comm,path_fn__$1,map__24363,map__24363__$1,investor_companies,portfolio_companies,constituencies,map__24360,map__24360__$1,map__24361,map__24361__$1,selection_type,selection_value,view,search_results){
return (function (e){return clustermap.components.search.key_down.call(null,e,self__.search_results,self__.owner,self__.comm);
});})(this$__$1,map__24362,map__24362__$1,path_fn,comm,path_fn__$1,map__24363,map__24363__$1,investor_companies,portfolio_companies,constituencies,map__24360,map__24360__$1,map__24361,map__24361__$1,selection_type,selection_value,view,search_results))
},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__24362,map__24362__$1,path_fn,comm,path_fn__$1,map__24363,map__24363__$1,investor_companies,portfolio_companies,constituencies,map__24360,map__24360__$1,map__24361,map__24361__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),e.target.value], null));
});})(this$__$1,map__24362,map__24362__$1,path_fn,comm,path_fn__$1,map__24363,map__24363__$1,investor_companies,portfolio_companies,constituencies,map__24360,map__24360__$1,map__24361,map__24361__$1,selection_type,selection_value,view,search_results))
})),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": ((function (this$__$1,map__24362,map__24362__$1,path_fn,comm,path_fn__$1,map__24363,map__24363__$1,investor_companies,portfolio_companies,constituencies,map__24360,map__24360__$1,map__24361,map__24361__$1,selection_type,selection_value,view,search_results){
return (function (e){cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),""], null));
return om.core.get_node.call(null,self__.owner,"search-field").value = "";
});})(this$__$1,map__24362,map__24362__$1,path_fn,comm,path_fn__$1,map__24363,map__24363__$1,investor_companies,portfolio_companies,constituencies,map__24360,map__24360__$1,map__24361,map__24361__$1,selection_type,selection_value,view,search_results))
},"\u00D7"))),sablono.interpreter.interpret.call(null,(cljs.core.truth_((function (){var or__3543__auto__ = cljs.core.not_empty.call(null,self__.constituencies);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = cljs.core.not_empty.call(null,self__.portfolio_companies);if(cljs.core.truth_(or__3543__auto____$1))
{return or__3543__auto____$1;
} else
{return cljs.core.not_empty.call(null,self__.investor_companies);
}
}
})())?(function (){var idx_cons = cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(0)),self__.constituencies);var idx_pcs = cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,cljs.core.count.call(null,idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod.call(null,(function (){var or__3543__auto__ = new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439).cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return (0);
}
})(),((cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs)) + cljs.core.count.call(null,idx_invs)));var _ = ((cljs.core.not_EQ_.call(null,selected_idx,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439).cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Constituencies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?(function (){var iter__4268__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24362,map__24362__$1,path_fn,comm,path_fn__$1,map__24363,map__24363__$1,investor_companies,portfolio_companies,constituencies,map__24360,map__24360__$1,map__24361,map__24361__$1,selection_type,selection_value,view,search_results){
return (function iter__24367(s__24368){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24362,map__24362__$1,path_fn,comm,path_fn__$1,map__24363,map__24363__$1,investor_companies,portfolio_companies,constituencies,map__24360,map__24360__$1,map__24361,map__24361__$1,selection_type,selection_value,view,search_results){
return (function (){var s__24368__$1 = s__24368;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24368__$1);if(temp__4126__auto__)
{var s__24368__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24368__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__24368__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__24370 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__24369 = (0);while(true){
if((i__24369 < size__4267__auto__))
{var vec__24373 = cljs.core._nth.call(null,c__4266__auto__,i__24369);var idx = cljs.core.nth.call(null,vec__24373,(0),null);var con = cljs.core.nth.call(null,vec__24373,(1),null);cljs.core.chunk_append.call(null,b__24370,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__24369,vec__24373,idx,con,c__4266__auto__,size__4267__auto__,b__24370,s__24368__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24362,map__24362__$1,path_fn,comm,path_fn__$1,map__24363,map__24363__$1,investor_companies,portfolio_companies,constituencies,map__24360,map__24360__$1,map__24361,map__24361__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"constituency","constituency",1803637324),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)))));
});})(i__24369,vec__24373,idx,con,c__4266__auto__,size__4267__auto__,b__24370,s__24368__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24362,map__24362__$1,path_fn,comm,path_fn__$1,map__24363,map__24363__$1,investor_companies,portfolio_companies,constituencies,map__24360,map__24360__$1,map__24361,map__24361__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__24391 = (i__24369 + (1));
i__24369 = G__24391;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24370),iter__24367.call(null,cljs.core.chunk_rest.call(null,s__24368__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24370),null);
}
} else
{var vec__24374 = cljs.core.first.call(null,s__24368__$2);var idx = cljs.core.nth.call(null,vec__24374,(0),null);var con = cljs.core.nth.call(null,vec__24374,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__24374,idx,con,s__24368__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24362,map__24362__$1,path_fn,comm,path_fn__$1,map__24363,map__24363__$1,investor_companies,portfolio_companies,constituencies,map__24360,map__24360__$1,map__24361,map__24361__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"constituency","constituency",1803637324),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)))));
});})(vec__24374,idx,con,s__24368__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24362,map__24362__$1,path_fn,comm,path_fn__$1,map__24363,map__24363__$1,investor_companies,portfolio_companies,constituencies,map__24360,map__24360__$1,map__24361,map__24361__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__24367.call(null,cljs.core.rest.call(null,s__24368__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24362,map__24362__$1,path_fn,comm,path_fn__$1,map__24363,map__24363__$1,investor_companies,portfolio_companies,constituencies,map__24360,map__24360__$1,map__24361,map__24361__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24362,map__24362__$1,path_fn,comm,path_fn__$1,map__24363,map__24363__$1,investor_companies,portfolio_companies,constituencies,map__24360,map__24360__$1,map__24361,map__24361__$1,selection_type,selection_value,view,search_results))
;return iter__4268__auto__.call(null,idx_cons);
})():null),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Investor-backed companies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?(function (){var iter__4268__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24362,map__24362__$1,path_fn,comm,path_fn__$1,map__24363,map__24363__$1,investor_companies,portfolio_companies,constituencies,map__24360,map__24360__$1,map__24361,map__24361__$1,selection_type,selection_value,view,search_results){
return (function iter__24375(s__24376){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24362,map__24362__$1,path_fn,comm,path_fn__$1,map__24363,map__24363__$1,investor_companies,portfolio_companies,constituencies,map__24360,map__24360__$1,map__24361,map__24361__$1,selection_type,selection_value,view,search_results){
return (function (){var s__24376__$1 = s__24376;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24376__$1);if(temp__4126__auto__)
{var s__24376__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24376__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__24376__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__24378 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__24377 = (0);while(true){
if((i__24377 < size__4267__auto__))
{var vec__24381 = cljs.core._nth.call(null,c__4266__auto__,i__24377);var idx = cljs.core.nth.call(null,vec__24381,(0),null);var pc = cljs.core.nth.call(null,vec__24381,(1),null);cljs.core.chunk_append.call(null,b__24378,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__24377,vec__24381,idx,pc,c__4266__auto__,size__4267__auto__,b__24378,s__24376__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24362,map__24362__$1,path_fn,comm,path_fn__$1,map__24363,map__24363__$1,investor_companies,portfolio_companies,constituencies,map__24360,map__24360__$1,map__24361,map__24361__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)))));
});})(i__24377,vec__24381,idx,pc,c__4266__auto__,size__4267__auto__,b__24378,s__24376__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24362,map__24362__$1,path_fn,comm,path_fn__$1,map__24363,map__24363__$1,investor_companies,portfolio_companies,constituencies,map__24360,map__24360__$1,map__24361,map__24361__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__24392 = (i__24377 + (1));
i__24377 = G__24392;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24378),iter__24375.call(null,cljs.core.chunk_rest.call(null,s__24376__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24378),null);
}
} else
{var vec__24382 = cljs.core.first.call(null,s__24376__$2);var idx = cljs.core.nth.call(null,vec__24382,(0),null);var pc = cljs.core.nth.call(null,vec__24382,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__24382,idx,pc,s__24376__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24362,map__24362__$1,path_fn,comm,path_fn__$1,map__24363,map__24363__$1,investor_companies,portfolio_companies,constituencies,map__24360,map__24360__$1,map__24361,map__24361__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)))));
});})(vec__24382,idx,pc,s__24376__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24362,map__24362__$1,path_fn,comm,path_fn__$1,map__24363,map__24363__$1,investor_companies,portfolio_companies,constituencies,map__24360,map__24360__$1,map__24361,map__24361__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__24375.call(null,cljs.core.rest.call(null,s__24376__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24362,map__24362__$1,path_fn,comm,path_fn__$1,map__24363,map__24363__$1,investor_companies,portfolio_companies,constituencies,map__24360,map__24360__$1,map__24361,map__24361__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24362,map__24362__$1,path_fn,comm,path_fn__$1,map__24363,map__24363__$1,investor_companies,portfolio_companies,constituencies,map__24360,map__24360__$1,map__24361,map__24361__$1,selection_type,selection_value,view,search_results))
;return iter__4268__auto__.call(null,idx_pcs);
})():null),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Investors"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?(function (){var iter__4268__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24362,map__24362__$1,path_fn,comm,path_fn__$1,map__24363,map__24363__$1,investor_companies,portfolio_companies,constituencies,map__24360,map__24360__$1,map__24361,map__24361__$1,selection_type,selection_value,view,search_results){
return (function iter__24383(s__24384){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24362,map__24362__$1,path_fn,comm,path_fn__$1,map__24363,map__24363__$1,investor_companies,portfolio_companies,constituencies,map__24360,map__24360__$1,map__24361,map__24361__$1,selection_type,selection_value,view,search_results){
return (function (){var s__24384__$1 = s__24384;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24384__$1);if(temp__4126__auto__)
{var s__24384__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24384__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__24384__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__24386 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__24385 = (0);while(true){
if((i__24385 < size__4267__auto__))
{var vec__24389 = cljs.core._nth.call(null,c__4266__auto__,i__24385);var idx = cljs.core.nth.call(null,vec__24389,(0),null);var inv = cljs.core.nth.call(null,vec__24389,(1),null);cljs.core.chunk_append.call(null,b__24386,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__24385,vec__24389,idx,inv,c__4266__auto__,size__4267__auto__,b__24386,s__24384__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24362,map__24362__$1,path_fn,comm,path_fn__$1,map__24363,map__24363__$1,investor_companies,portfolio_companies,constituencies,map__24360,map__24360__$1,map__24361,map__24361__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"investor-company","investor-company",13706558),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)))));
});})(i__24385,vec__24389,idx,inv,c__4266__auto__,size__4267__auto__,b__24386,s__24384__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24362,map__24362__$1,path_fn,comm,path_fn__$1,map__24363,map__24363__$1,investor_companies,portfolio_companies,constituencies,map__24360,map__24360__$1,map__24361,map__24361__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__24393 = (i__24385 + (1));
i__24385 = G__24393;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24386),iter__24383.call(null,cljs.core.chunk_rest.call(null,s__24384__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24386),null);
}
} else
{var vec__24390 = cljs.core.first.call(null,s__24384__$2);var idx = cljs.core.nth.call(null,vec__24390,(0),null);var inv = cljs.core.nth.call(null,vec__24390,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__24390,idx,inv,s__24384__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24362,map__24362__$1,path_fn,comm,path_fn__$1,map__24363,map__24363__$1,investor_companies,portfolio_companies,constituencies,map__24360,map__24360__$1,map__24361,map__24361__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"investor-company","investor-company",13706558),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)))));
});})(vec__24390,idx,inv,s__24384__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24362,map__24362__$1,path_fn,comm,path_fn__$1,map__24363,map__24363__$1,investor_companies,portfolio_companies,constituencies,map__24360,map__24360__$1,map__24361,map__24361__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__24383.call(null,cljs.core.rest.call(null,s__24384__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24362,map__24362__$1,path_fn,comm,path_fn__$1,map__24363,map__24363__$1,investor_companies,portfolio_companies,constituencies,map__24360,map__24360__$1,map__24361,map__24361__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24362,map__24362__$1,path_fn,comm,path_fn__$1,map__24363,map__24363__$1,investor_companies,portfolio_companies,constituencies,map__24360,map__24360__$1,map__24361,map__24361__$1,selection_type,selection_value,view,search_results))
;return iter__4268__auto__.call(null,idx_invs);
})():null)], null)], null);
})():null)));
});})(map__24362,map__24362__$1,path_fn,comm,path_fn__$1,map__24363,map__24363__$1,investor_companies,portfolio_companies,constituencies,map__24360,map__24360__$1,map__24361,map__24361__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t24364.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__24362,map__24362__$1,path_fn,comm,path_fn__$1,map__24363,map__24363__$1,investor_companies,portfolio_companies,constituencies,map__24360,map__24360__$1,map__24361,map__24361__$1,selection_type,selection_value,view,search_results){
return (function (_24366){var self__ = this;
var _24366__$1 = this;return self__.meta24365;
});})(map__24362,map__24362__$1,path_fn,comm,path_fn__$1,map__24363,map__24363__$1,investor_companies,portfolio_companies,constituencies,map__24360,map__24360__$1,map__24361,map__24361__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t24364.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__24362,map__24362__$1,path_fn,comm,path_fn__$1,map__24363,map__24363__$1,investor_companies,portfolio_companies,constituencies,map__24360,map__24360__$1,map__24361,map__24361__$1,selection_type,selection_value,view,search_results){
return (function (_24366,meta24365__$1){var self__ = this;
var _24366__$1 = this;return (new clustermap.components.search.t24364(self__.search_results,self__.search_component,self__.map__24363,self__.owner,self__.path_fn,self__.view,self__.map__24360,self__.portfolio_companies,self__.map__24361,self__.constituencies,self__.investor_companies,self__.p__24328,self__.map__24362,self__.selection_value,self__.comm,self__.selection_type,meta24365__$1));
});})(map__24362,map__24362__$1,path_fn,comm,path_fn__$1,map__24363,map__24363__$1,investor_companies,portfolio_companies,constituencies,map__24360,map__24360__$1,map__24361,map__24361__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.__GT_t24364 = ((function (map__24362,map__24362__$1,path_fn,comm,path_fn__$1,map__24363,map__24363__$1,investor_companies,portfolio_companies,constituencies,map__24360,map__24360__$1,map__24361,map__24361__$1,selection_type,selection_value,view,search_results){
return (function __GT_t24364(search_results__$1,search_component__$1,map__24363__$2,owner__$1,path_fn__$2,view__$1,map__24360__$2,portfolio_companies__$1,map__24361__$2,constituencies__$1,investor_companies__$1,p__24328__$1,map__24362__$2,selection_value__$1,comm__$1,selection_type__$1,meta24365){return (new clustermap.components.search.t24364(search_results__$1,search_component__$1,map__24363__$2,owner__$1,path_fn__$2,view__$1,map__24360__$2,portfolio_companies__$1,map__24361__$2,constituencies__$1,investor_companies__$1,p__24328__$1,map__24362__$2,selection_value__$1,comm__$1,selection_type__$1,meta24365));
});})(map__24362,map__24362__$1,path_fn,comm,path_fn__$1,map__24363,map__24363__$1,investor_companies,portfolio_companies,constituencies,map__24360,map__24360__$1,map__24361,map__24361__$1,selection_type,selection_value,view,search_results))
;
}
return (new clustermap.components.search.t24364(search_results,search_component,map__24363__$1,owner,path_fn__$1,view,map__24360__$1,portfolio_companies,map__24361__$1,constituencies,investor_companies,p__24328,map__24362__$1,selection_value,comm,selection_type,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id)], null));
});
