// Compiled by ClojureScript 0.0-2356
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
clustermap.components.search.search_result_link = (function search_result_link(p__84513,owner,p__84514){var map__84523 = p__84513;var map__84523__$1 = ((cljs.core.seq_QMARK_.call(null,map__84523))?cljs.core.apply.call(null,cljs.core.hash_map,map__84523):map__84523);var search_result = map__84523__$1;var type = cljs.core.get.call(null,map__84523__$1,new cljs.core.Keyword(null,"type","type",1174270348));var name = cljs.core.get.call(null,map__84523__$1,new cljs.core.Keyword(null,"name","name",1843675177));var map__84524 = p__84514;var map__84524__$1 = ((cljs.core.seq_QMARK_.call(null,map__84524))?cljs.core.apply.call(null,cljs.core.hash_map,map__84524):map__84524);var opts = map__84524__$1;var path_fn = cljs.core.get.call(null,map__84524__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__84524__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));if(typeof clustermap.components.search.t84525 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t84525 = (function (p__84513,owner,path_fn,search_result_link,map__84523,name,comm,search_result,type,map__84524,p__84514,opts,meta84526){
this.p__84513 = p__84513;
this.owner = owner;
this.path_fn = path_fn;
this.search_result_link = search_result_link;
this.map__84523 = map__84523;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.type = type;
this.map__84524 = map__84524;
this.p__84514 = p__84514;
this.opts = opts;
this.meta84526 = meta84526;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t84525.cljs$lang$type = true;
clustermap.components.search.t84525.cljs$lang$ctorStr = "clustermap.components.search/t84525";
clustermap.components.search.t84525.cljs$lang$ctorPrWriter = ((function (map__84523,map__84523__$1,search_result,type,name,map__84524,map__84524__$1,opts,path_fn,comm){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"clustermap.components.search/t84525");
});})(map__84523,map__84523__$1,search_result,type,name,map__84524,map__84524__$1,opts,path_fn,comm))
;
clustermap.components.search.t84525.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t84525.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__84523,map__84523__$1,search_result,type,name,map__84524,map__84524__$1,opts,path_fn,comm){
return (function (this$,p__84528){var self__ = this;
var map__84529 = p__84528;var map__84529__$1 = ((cljs.core.seq_QMARK_.call(null,map__84529))?cljs.core.apply.call(null,cljs.core.hash_map,map__84529):map__84529);var state = map__84529__$1;var selected = cljs.core.get.call(null,map__84529__$1,new cljs.core.Keyword(null,"selected","selected",574897764));var this$__$1 = this;var path = self__.path_fn.call(null,self__.type,self__.search_result);return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": ((function (path,this$__$1,map__84529,map__84529__$1,state,selected,map__84523,map__84523__$1,search_result,type,name,map__84524,map__84524__$1,opts,path_fn,comm){
return (function (e){var l = om.core.get_node.call(null,self__.owner,"link");var G__84530 = l;var G__84530__$1 = (((G__84530 == null))?null:jayq.core.$.call(null,G__84530));var G__84530__$2 = (((G__84530__$1 == null))?null:G__84530__$1.parents(".search-component"));var G__84530__$3 = (((G__84530__$2 == null))?null:G__84530__$2.toggle());return G__84530__$3;
});})(path,this$__$1,map__84529,map__84529__$1,state,selected,map__84523,map__84523__$1,search_result,type,name,map__84524,map__84524__$1,opts,path_fn,comm))
},sablono.interpreter.interpret.call(null,self__.name)));
});})(map__84523,map__84523__$1,search_result,type,name,map__84524,map__84524__$1,opts,path_fn,comm))
;
clustermap.components.search.t84525.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__84523,map__84523__$1,search_result,type,name,map__84524,map__84524__$1,opts,path_fn,comm){
return (function (_84527){var self__ = this;
var _84527__$1 = this;return self__.meta84526;
});})(map__84523,map__84523__$1,search_result,type,name,map__84524,map__84524__$1,opts,path_fn,comm))
;
clustermap.components.search.t84525.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__84523,map__84523__$1,search_result,type,name,map__84524,map__84524__$1,opts,path_fn,comm){
return (function (_84527,meta84526__$1){var self__ = this;
var _84527__$1 = this;return (new clustermap.components.search.t84525(self__.p__84513,self__.owner,self__.path_fn,self__.search_result_link,self__.map__84523,self__.name,self__.comm,self__.search_result,self__.type,self__.map__84524,self__.p__84514,self__.opts,meta84526__$1));
});})(map__84523,map__84523__$1,search_result,type,name,map__84524,map__84524__$1,opts,path_fn,comm))
;
clustermap.components.search.__GT_t84525 = ((function (map__84523,map__84523__$1,search_result,type,name,map__84524,map__84524__$1,opts,path_fn,comm){
return (function __GT_t84525(p__84513__$1,owner__$1,path_fn__$1,search_result_link__$1,map__84523__$2,name__$1,comm__$1,search_result__$1,type__$1,map__84524__$2,p__84514__$1,opts__$1,meta84526){return (new clustermap.components.search.t84525(p__84513__$1,owner__$1,path_fn__$1,search_result_link__$1,map__84523__$2,name__$1,comm__$1,search_result__$1,type__$1,map__84524__$2,p__84514__$1,opts__$1,meta84526));
});})(map__84523,map__84523__$1,search_result,type,name,map__84524,map__84524__$1,opts,path_fn,comm))
;
}
return (new clustermap.components.search.t84525(p__84513,owner,path_fn,search_result_link,map__84523__$1,name,comm,search_result,type,map__84524__$1,p__84514,opts,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__84531,n){var map__84533 = p__84531;var map__84533__$1 = ((cljs.core.seq_QMARK_.call(null,map__84533))?cljs.core.apply.call(null,cljs.core.hash_map,map__84533):map__84533);var investor_companies = cljs.core.get.call(null,map__84533__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",493714407));var portfolio_companies = cljs.core.get.call(null,map__84533__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",1223322975));var constituencies = cljs.core.get.call(null,map__84533__$1,new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020));var cons = (function (){var or__3637__auto__ = constituencies;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();var pcs = (function (){var or__3637__auto__ = portfolio_companies;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();var invs = (function (){var or__3637__auto__ = investor_companies;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
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
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__84540 = cljs.core._EQ__EQ_;var expr__84541 = e.keyCode;if(cljs.core.truth_(pred__84540.call(null,clustermap.components.search.ESCAPE_KEY,expr__84541)))
{var G__84543 = om.core.get_node.call(null,owner,"search-component");var G__84543__$1 = (((G__84543 == null))?null:jayq.core.$.call(null,G__84543));var G__84543__$2 = (((G__84543__$1 == null))?null:G__84543__$1.toggle());return G__84543__$2;
} else
{if(cljs.core.truth_(pred__84540.call(null,clustermap.components.search.ENTER_KEY,expr__84541)))
{var vec__84544 = clustermap.components.search.nth_search_result.call(null,cljs.core.deref.call(null,search_results),(function (){var or__3637__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439));if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return (0);
}
})());var type = cljs.core.nth.call(null,vec__84544,(0),null);var res = cljs.core.nth.call(null,vec__84544,(1),null);var G__84545_84546 = om.core.get_node.call(null,owner,"search-component");var G__84545_84547__$1 = (((G__84545_84546 == null))?null:jayq.core.$.call(null,G__84545_84546));var G__84545_84548__$2 = (((G__84545_84547__$1 == null))?null:G__84545_84547__$1.toggle());return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id.call(null,type,res)], null)], null));
} else
{if(cljs.core.truth_(pred__84540.call(null,clustermap.components.search.UP_ARROW,expr__84541)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),((function (){var or__3637__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439));if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return (0);
}
})() - (1)));
} else
{if(cljs.core.truth_(pred__84540.call(null,clustermap.components.search.DOWN_ARROW,expr__84541)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),((function (){var or__3637__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439));if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
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
clustermap.components.search.search_component = (function search_component(p__84549,owner){var map__84581 = p__84549;var map__84581__$1 = ((cljs.core.seq_QMARK_.call(null,map__84581))?cljs.core.apply.call(null,cljs.core.hash_map,map__84581):map__84581);var map__84582 = cljs.core.get.call(null,map__84581__$1,new cljs.core.Keyword(null,"selection","selection",975998651));var map__84582__$1 = ((cljs.core.seq_QMARK_.call(null,map__84582))?cljs.core.apply.call(null,cljs.core.hash_map,map__84582):map__84582);var selection_type = cljs.core.get.call(null,map__84582__$1,new cljs.core.Keyword(null,"type","type",1174270348));var selection_value = cljs.core.get.call(null,map__84582__$1,new cljs.core.Keyword(null,"value","value",305978217));var view = cljs.core.get.call(null,map__84581__$1,new cljs.core.Keyword(null,"view","view",1247994814));var search_results = cljs.core.get.call(null,map__84581__$1,new cljs.core.Keyword(null,"search-results","search-results",306464634));var map__84583 = om.core.get_shared.call(null,owner);var map__84583__$1 = ((cljs.core.seq_QMARK_.call(null,map__84583))?cljs.core.apply.call(null,cljs.core.hash_map,map__84583):map__84583);var path_fn = cljs.core.get.call(null,map__84583__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__84583__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var path_fn__$1 = cljs.core.partial.call(null,path_fn,view);var map__84584 = search_results;var map__84584__$1 = ((cljs.core.seq_QMARK_.call(null,map__84584))?cljs.core.apply.call(null,cljs.core.hash_map,map__84584):map__84584);var investor_companies = cljs.core.get.call(null,map__84584__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",493714407));var portfolio_companies = cljs.core.get.call(null,map__84584__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",1223322975));var constituencies = cljs.core.get.call(null,map__84584__$1,new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020));if(typeof clustermap.components.search.t84585 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t84585 = (function (search_results,search_component,owner,p__84549,path_fn,view,portfolio_companies,constituencies,investor_companies,selection_value,comm,map__84583,map__84581,selection_type,map__84584,map__84582,meta84586){
this.search_results = search_results;
this.search_component = search_component;
this.owner = owner;
this.p__84549 = p__84549;
this.path_fn = path_fn;
this.view = view;
this.portfolio_companies = portfolio_companies;
this.constituencies = constituencies;
this.investor_companies = investor_companies;
this.selection_value = selection_value;
this.comm = comm;
this.map__84583 = map__84583;
this.map__84581 = map__84581;
this.selection_type = selection_type;
this.map__84584 = map__84584;
this.map__84582 = map__84582;
this.meta84586 = meta84586;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t84585.cljs$lang$type = true;
clustermap.components.search.t84585.cljs$lang$ctorStr = "clustermap.components.search/t84585";
clustermap.components.search.t84585.cljs$lang$ctorPrWriter = ((function (map__84583,map__84583__$1,path_fn,comm,path_fn__$1,map__84584,map__84584__$1,investor_companies,portfolio_companies,constituencies,map__84581,map__84581__$1,map__84582,map__84582__$1,selection_type,selection_value,view,search_results){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"clustermap.components.search/t84585");
});})(map__84583,map__84583__$1,path_fn,comm,path_fn__$1,map__84584,map__84584__$1,investor_companies,portfolio_companies,constituencies,map__84581,map__84581__$1,map__84582,map__84582__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t84585.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t84585.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__84583,map__84583__$1,path_fn,comm,path_fn__$1,map__84584,map__84584__$1,investor_companies,portfolio_companies,constituencies,map__84581,map__84581__$1,map__84582,map__84582__$1,selection_type,selection_value,view,search_results){
return (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "search-component", "ref": "search-component", "id": "search", "onKeyDown": ((function (this$__$1,map__84583,map__84583__$1,path_fn,comm,path_fn__$1,map__84584,map__84584__$1,investor_companies,portfolio_companies,constituencies,map__84581,map__84581__$1,map__84582,map__84582__$1,selection_type,selection_value,view,search_results){
return (function (e){return clustermap.components.search.key_down.call(null,e,self__.search_results,self__.owner,self__.comm);
});})(this$__$1,map__84583,map__84583__$1,path_fn,comm,path_fn__$1,map__84584,map__84584__$1,investor_companies,portfolio_companies,constituencies,map__84581,map__84581__$1,map__84582,map__84582__$1,selection_type,selection_value,view,search_results))
},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__84583,map__84583__$1,path_fn,comm,path_fn__$1,map__84584,map__84584__$1,investor_companies,portfolio_companies,constituencies,map__84581,map__84581__$1,map__84582,map__84582__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),e.target.value], null));
});})(this$__$1,map__84583,map__84583__$1,path_fn,comm,path_fn__$1,map__84584,map__84584__$1,investor_companies,portfolio_companies,constituencies,map__84581,map__84581__$1,map__84582,map__84582__$1,selection_type,selection_value,view,search_results))
})),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": ((function (this$__$1,map__84583,map__84583__$1,path_fn,comm,path_fn__$1,map__84584,map__84584__$1,investor_companies,portfolio_companies,constituencies,map__84581,map__84581__$1,map__84582,map__84582__$1,selection_type,selection_value,view,search_results){
return (function (e){cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),""], null));
return om.core.get_node.call(null,self__.owner,"search-field").value = "";
});})(this$__$1,map__84583,map__84583__$1,path_fn,comm,path_fn__$1,map__84584,map__84584__$1,investor_companies,portfolio_companies,constituencies,map__84581,map__84581__$1,map__84582,map__84582__$1,selection_type,selection_value,view,search_results))
},"\u00D7"))),sablono.interpreter.interpret.call(null,(cljs.core.truth_((function (){var or__3637__auto__ = cljs.core.not_empty.call(null,self__.constituencies);if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = cljs.core.not_empty.call(null,self__.portfolio_companies);if(cljs.core.truth_(or__3637__auto____$1))
{return or__3637__auto____$1;
} else
{return cljs.core.not_empty.call(null,self__.investor_companies);
}
}
})())?(function (){var idx_cons = cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(0)),self__.constituencies);var idx_pcs = cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,cljs.core.count.call(null,idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod.call(null,(function (){var or__3637__auto__ = new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439).cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return (0);
}
})(),((cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs)) + cljs.core.count.call(null,idx_invs)));var _ = ((cljs.core.not_EQ_.call(null,selected_idx,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439).cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Constituencies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?(function (){var iter__4375__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__84583,map__84583__$1,path_fn,comm,path_fn__$1,map__84584,map__84584__$1,investor_companies,portfolio_companies,constituencies,map__84581,map__84581__$1,map__84582,map__84582__$1,selection_type,selection_value,view,search_results){
return (function iter__84588(s__84589){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__84583,map__84583__$1,path_fn,comm,path_fn__$1,map__84584,map__84584__$1,investor_companies,portfolio_companies,constituencies,map__84581,map__84581__$1,map__84582,map__84582__$1,selection_type,selection_value,view,search_results){
return (function (){var s__84589__$1 = s__84589;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__84589__$1);if(temp__4126__auto__)
{var s__84589__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__84589__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__84589__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__84591 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__84590 = (0);while(true){
if((i__84590 < size__4374__auto__))
{var vec__84594 = cljs.core._nth.call(null,c__4373__auto__,i__84590);var idx = cljs.core.nth.call(null,vec__84594,(0),null);var con = cljs.core.nth.call(null,vec__84594,(1),null);cljs.core.chunk_append.call(null,b__84591,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__84590,vec__84594,idx,con,c__4373__auto__,size__4374__auto__,b__84591,s__84589__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__84583,map__84583__$1,path_fn,comm,path_fn__$1,map__84584,map__84584__$1,investor_companies,portfolio_companies,constituencies,map__84581,map__84581__$1,map__84582,map__84582__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"constituency","constituency",1803637324),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)))));
});})(i__84590,vec__84594,idx,con,c__4373__auto__,size__4374__auto__,b__84591,s__84589__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__84583,map__84583__$1,path_fn,comm,path_fn__$1,map__84584,map__84584__$1,investor_companies,portfolio_companies,constituencies,map__84581,map__84581__$1,map__84582,map__84582__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__84612 = (i__84590 + (1));
i__84590 = G__84612;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84591),iter__84588.call(null,cljs.core.chunk_rest.call(null,s__84589__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84591),null);
}
} else
{var vec__84595 = cljs.core.first.call(null,s__84589__$2);var idx = cljs.core.nth.call(null,vec__84595,(0),null);var con = cljs.core.nth.call(null,vec__84595,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__84595,idx,con,s__84589__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__84583,map__84583__$1,path_fn,comm,path_fn__$1,map__84584,map__84584__$1,investor_companies,portfolio_companies,constituencies,map__84581,map__84581__$1,map__84582,map__84582__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"constituency","constituency",1803637324),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)))));
});})(vec__84595,idx,con,s__84589__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__84583,map__84583__$1,path_fn,comm,path_fn__$1,map__84584,map__84584__$1,investor_companies,portfolio_companies,constituencies,map__84581,map__84581__$1,map__84582,map__84582__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__84588.call(null,cljs.core.rest.call(null,s__84589__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__84583,map__84583__$1,path_fn,comm,path_fn__$1,map__84584,map__84584__$1,investor_companies,portfolio_companies,constituencies,map__84581,map__84581__$1,map__84582,map__84582__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__84583,map__84583__$1,path_fn,comm,path_fn__$1,map__84584,map__84584__$1,investor_companies,portfolio_companies,constituencies,map__84581,map__84581__$1,map__84582,map__84582__$1,selection_type,selection_value,view,search_results))
;return iter__4375__auto__.call(null,idx_cons);
})():null),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Investor-backed companies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?(function (){var iter__4375__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__84583,map__84583__$1,path_fn,comm,path_fn__$1,map__84584,map__84584__$1,investor_companies,portfolio_companies,constituencies,map__84581,map__84581__$1,map__84582,map__84582__$1,selection_type,selection_value,view,search_results){
return (function iter__84596(s__84597){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__84583,map__84583__$1,path_fn,comm,path_fn__$1,map__84584,map__84584__$1,investor_companies,portfolio_companies,constituencies,map__84581,map__84581__$1,map__84582,map__84582__$1,selection_type,selection_value,view,search_results){
return (function (){var s__84597__$1 = s__84597;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__84597__$1);if(temp__4126__auto__)
{var s__84597__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__84597__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__84597__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__84599 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__84598 = (0);while(true){
if((i__84598 < size__4374__auto__))
{var vec__84602 = cljs.core._nth.call(null,c__4373__auto__,i__84598);var idx = cljs.core.nth.call(null,vec__84602,(0),null);var pc = cljs.core.nth.call(null,vec__84602,(1),null);cljs.core.chunk_append.call(null,b__84599,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__84598,vec__84602,idx,pc,c__4373__auto__,size__4374__auto__,b__84599,s__84597__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__84583,map__84583__$1,path_fn,comm,path_fn__$1,map__84584,map__84584__$1,investor_companies,portfolio_companies,constituencies,map__84581,map__84581__$1,map__84582,map__84582__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)))));
});})(i__84598,vec__84602,idx,pc,c__4373__auto__,size__4374__auto__,b__84599,s__84597__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__84583,map__84583__$1,path_fn,comm,path_fn__$1,map__84584,map__84584__$1,investor_companies,portfolio_companies,constituencies,map__84581,map__84581__$1,map__84582,map__84582__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__84613 = (i__84598 + (1));
i__84598 = G__84613;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84599),iter__84596.call(null,cljs.core.chunk_rest.call(null,s__84597__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84599),null);
}
} else
{var vec__84603 = cljs.core.first.call(null,s__84597__$2);var idx = cljs.core.nth.call(null,vec__84603,(0),null);var pc = cljs.core.nth.call(null,vec__84603,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__84603,idx,pc,s__84597__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__84583,map__84583__$1,path_fn,comm,path_fn__$1,map__84584,map__84584__$1,investor_companies,portfolio_companies,constituencies,map__84581,map__84581__$1,map__84582,map__84582__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)))));
});})(vec__84603,idx,pc,s__84597__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__84583,map__84583__$1,path_fn,comm,path_fn__$1,map__84584,map__84584__$1,investor_companies,portfolio_companies,constituencies,map__84581,map__84581__$1,map__84582,map__84582__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__84596.call(null,cljs.core.rest.call(null,s__84597__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__84583,map__84583__$1,path_fn,comm,path_fn__$1,map__84584,map__84584__$1,investor_companies,portfolio_companies,constituencies,map__84581,map__84581__$1,map__84582,map__84582__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__84583,map__84583__$1,path_fn,comm,path_fn__$1,map__84584,map__84584__$1,investor_companies,portfolio_companies,constituencies,map__84581,map__84581__$1,map__84582,map__84582__$1,selection_type,selection_value,view,search_results))
;return iter__4375__auto__.call(null,idx_pcs);
})():null),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Investors"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?(function (){var iter__4375__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__84583,map__84583__$1,path_fn,comm,path_fn__$1,map__84584,map__84584__$1,investor_companies,portfolio_companies,constituencies,map__84581,map__84581__$1,map__84582,map__84582__$1,selection_type,selection_value,view,search_results){
return (function iter__84604(s__84605){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__84583,map__84583__$1,path_fn,comm,path_fn__$1,map__84584,map__84584__$1,investor_companies,portfolio_companies,constituencies,map__84581,map__84581__$1,map__84582,map__84582__$1,selection_type,selection_value,view,search_results){
return (function (){var s__84605__$1 = s__84605;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__84605__$1);if(temp__4126__auto__)
{var s__84605__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__84605__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__84605__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__84607 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__84606 = (0);while(true){
if((i__84606 < size__4374__auto__))
{var vec__84610 = cljs.core._nth.call(null,c__4373__auto__,i__84606);var idx = cljs.core.nth.call(null,vec__84610,(0),null);var inv = cljs.core.nth.call(null,vec__84610,(1),null);cljs.core.chunk_append.call(null,b__84607,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__84606,vec__84610,idx,inv,c__4373__auto__,size__4374__auto__,b__84607,s__84605__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__84583,map__84583__$1,path_fn,comm,path_fn__$1,map__84584,map__84584__$1,investor_companies,portfolio_companies,constituencies,map__84581,map__84581__$1,map__84582,map__84582__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"investor-company","investor-company",13706558),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)))));
});})(i__84606,vec__84610,idx,inv,c__4373__auto__,size__4374__auto__,b__84607,s__84605__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__84583,map__84583__$1,path_fn,comm,path_fn__$1,map__84584,map__84584__$1,investor_companies,portfolio_companies,constituencies,map__84581,map__84581__$1,map__84582,map__84582__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__84614 = (i__84606 + (1));
i__84606 = G__84614;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84607),iter__84604.call(null,cljs.core.chunk_rest.call(null,s__84605__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84607),null);
}
} else
{var vec__84611 = cljs.core.first.call(null,s__84605__$2);var idx = cljs.core.nth.call(null,vec__84611,(0),null);var inv = cljs.core.nth.call(null,vec__84611,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__84611,idx,inv,s__84605__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__84583,map__84583__$1,path_fn,comm,path_fn__$1,map__84584,map__84584__$1,investor_companies,portfolio_companies,constituencies,map__84581,map__84581__$1,map__84582,map__84582__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"investor-company","investor-company",13706558),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)))));
});})(vec__84611,idx,inv,s__84605__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__84583,map__84583__$1,path_fn,comm,path_fn__$1,map__84584,map__84584__$1,investor_companies,portfolio_companies,constituencies,map__84581,map__84581__$1,map__84582,map__84582__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__84604.call(null,cljs.core.rest.call(null,s__84605__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__84583,map__84583__$1,path_fn,comm,path_fn__$1,map__84584,map__84584__$1,investor_companies,portfolio_companies,constituencies,map__84581,map__84581__$1,map__84582,map__84582__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__84583,map__84583__$1,path_fn,comm,path_fn__$1,map__84584,map__84584__$1,investor_companies,portfolio_companies,constituencies,map__84581,map__84581__$1,map__84582,map__84582__$1,selection_type,selection_value,view,search_results))
;return iter__4375__auto__.call(null,idx_invs);
})():null)], null)], null);
})():null)));
});})(map__84583,map__84583__$1,path_fn,comm,path_fn__$1,map__84584,map__84584__$1,investor_companies,portfolio_companies,constituencies,map__84581,map__84581__$1,map__84582,map__84582__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t84585.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__84583,map__84583__$1,path_fn,comm,path_fn__$1,map__84584,map__84584__$1,investor_companies,portfolio_companies,constituencies,map__84581,map__84581__$1,map__84582,map__84582__$1,selection_type,selection_value,view,search_results){
return (function (_84587){var self__ = this;
var _84587__$1 = this;return self__.meta84586;
});})(map__84583,map__84583__$1,path_fn,comm,path_fn__$1,map__84584,map__84584__$1,investor_companies,portfolio_companies,constituencies,map__84581,map__84581__$1,map__84582,map__84582__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t84585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__84583,map__84583__$1,path_fn,comm,path_fn__$1,map__84584,map__84584__$1,investor_companies,portfolio_companies,constituencies,map__84581,map__84581__$1,map__84582,map__84582__$1,selection_type,selection_value,view,search_results){
return (function (_84587,meta84586__$1){var self__ = this;
var _84587__$1 = this;return (new clustermap.components.search.t84585(self__.search_results,self__.search_component,self__.owner,self__.p__84549,self__.path_fn,self__.view,self__.portfolio_companies,self__.constituencies,self__.investor_companies,self__.selection_value,self__.comm,self__.map__84583,self__.map__84581,self__.selection_type,self__.map__84584,self__.map__84582,meta84586__$1));
});})(map__84583,map__84583__$1,path_fn,comm,path_fn__$1,map__84584,map__84584__$1,investor_companies,portfolio_companies,constituencies,map__84581,map__84581__$1,map__84582,map__84582__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.__GT_t84585 = ((function (map__84583,map__84583__$1,path_fn,comm,path_fn__$1,map__84584,map__84584__$1,investor_companies,portfolio_companies,constituencies,map__84581,map__84581__$1,map__84582,map__84582__$1,selection_type,selection_value,view,search_results){
return (function __GT_t84585(search_results__$1,search_component__$1,owner__$1,p__84549__$1,path_fn__$2,view__$1,portfolio_companies__$1,constituencies__$1,investor_companies__$1,selection_value__$1,comm__$1,map__84583__$2,map__84581__$2,selection_type__$1,map__84584__$2,map__84582__$2,meta84586){return (new clustermap.components.search.t84585(search_results__$1,search_component__$1,owner__$1,p__84549__$1,path_fn__$2,view__$1,portfolio_companies__$1,constituencies__$1,investor_companies__$1,selection_value__$1,comm__$1,map__84583__$2,map__84581__$2,selection_type__$1,map__84584__$2,map__84582__$2,meta84586));
});})(map__84583,map__84583__$1,path_fn,comm,path_fn__$1,map__84584,map__84584__$1,investor_companies,portfolio_companies,constituencies,map__84581,map__84581__$1,map__84582,map__84582__$1,selection_type,selection_value,view,search_results))
;
}
return (new clustermap.components.search.t84585(search_results,search_component,owner,p__84549,path_fn__$1,view,portfolio_companies,constituencies,investor_companies,selection_value,comm,map__84583__$1,map__84581__$1,selection_type,map__84584__$1,map__84582__$1,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id)], null));
});

//# sourceMappingURL=search.js.map