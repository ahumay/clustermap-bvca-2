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
clustermap.components.search.search_result_link = (function search_result_link(p__13660,owner,p__13661){var map__13670 = p__13660;var map__13670__$1 = ((cljs.core.seq_QMARK_.call(null,map__13670))?cljs.core.apply.call(null,cljs.core.hash_map,map__13670):map__13670);var search_result = map__13670__$1;var type = cljs.core.get.call(null,map__13670__$1,new cljs.core.Keyword(null,"type","type",1174270348));var name = cljs.core.get.call(null,map__13670__$1,new cljs.core.Keyword(null,"name","name",1843675177));var map__13671 = p__13661;var map__13671__$1 = ((cljs.core.seq_QMARK_.call(null,map__13671))?cljs.core.apply.call(null,cljs.core.hash_map,map__13671):map__13671);var opts = map__13671__$1;var path_fn = cljs.core.get.call(null,map__13671__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__13671__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));if(typeof clustermap.components.search.t13672 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t13672 = (function (owner,path_fn,p__13661,map__13670,search_result_link,map__13671,name,p__13660,comm,search_result,type,opts,meta13673){
this.owner = owner;
this.path_fn = path_fn;
this.p__13661 = p__13661;
this.map__13670 = map__13670;
this.search_result_link = search_result_link;
this.map__13671 = map__13671;
this.name = name;
this.p__13660 = p__13660;
this.comm = comm;
this.search_result = search_result;
this.type = type;
this.opts = opts;
this.meta13673 = meta13673;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t13672.cljs$lang$type = true;
clustermap.components.search.t13672.cljs$lang$ctorStr = "clustermap.components.search/t13672";
clustermap.components.search.t13672.cljs$lang$ctorPrWriter = ((function (map__13670,map__13670__$1,search_result,type,name,map__13671,map__13671__$1,opts,path_fn,comm){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.search/t13672");
});})(map__13670,map__13670__$1,search_result,type,name,map__13671,map__13671__$1,opts,path_fn,comm))
;
clustermap.components.search.t13672.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t13672.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__13670,map__13670__$1,search_result,type,name,map__13671,map__13671__$1,opts,path_fn,comm){
return (function (this$,p__13675){var self__ = this;
var map__13676 = p__13675;var map__13676__$1 = ((cljs.core.seq_QMARK_.call(null,map__13676))?cljs.core.apply.call(null,cljs.core.hash_map,map__13676):map__13676);var state = map__13676__$1;var selected = cljs.core.get.call(null,map__13676__$1,new cljs.core.Keyword(null,"selected","selected",574897764));var this$__$1 = this;var path = self__.path_fn.call(null,self__.type,self__.search_result);return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": ((function (path,this$__$1,map__13676,map__13676__$1,state,selected,map__13670,map__13670__$1,search_result,type,name,map__13671,map__13671__$1,opts,path_fn,comm){
return (function (e){var l = om.core.get_node.call(null,self__.owner,"link");var G__13677 = l;var G__13677__$1 = (((G__13677 == null))?null:jayq.core.$.call(null,G__13677));var G__13677__$2 = (((G__13677__$1 == null))?null:G__13677__$1.parents(".search-component"));var G__13677__$3 = (((G__13677__$2 == null))?null:G__13677__$2.toggle());return G__13677__$3;
});})(path,this$__$1,map__13676,map__13676__$1,state,selected,map__13670,map__13670__$1,search_result,type,name,map__13671,map__13671__$1,opts,path_fn,comm))
},sablono.interpreter.interpret.call(null,self__.name)));
});})(map__13670,map__13670__$1,search_result,type,name,map__13671,map__13671__$1,opts,path_fn,comm))
;
clustermap.components.search.t13672.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13670,map__13670__$1,search_result,type,name,map__13671,map__13671__$1,opts,path_fn,comm){
return (function (_13674){var self__ = this;
var _13674__$1 = this;return self__.meta13673;
});})(map__13670,map__13670__$1,search_result,type,name,map__13671,map__13671__$1,opts,path_fn,comm))
;
clustermap.components.search.t13672.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13670,map__13670__$1,search_result,type,name,map__13671,map__13671__$1,opts,path_fn,comm){
return (function (_13674,meta13673__$1){var self__ = this;
var _13674__$1 = this;return (new clustermap.components.search.t13672(self__.owner,self__.path_fn,self__.p__13661,self__.map__13670,self__.search_result_link,self__.map__13671,self__.name,self__.p__13660,self__.comm,self__.search_result,self__.type,self__.opts,meta13673__$1));
});})(map__13670,map__13670__$1,search_result,type,name,map__13671,map__13671__$1,opts,path_fn,comm))
;
clustermap.components.search.__GT_t13672 = ((function (map__13670,map__13670__$1,search_result,type,name,map__13671,map__13671__$1,opts,path_fn,comm){
return (function __GT_t13672(owner__$1,path_fn__$1,p__13661__$1,map__13670__$2,search_result_link__$1,map__13671__$2,name__$1,p__13660__$1,comm__$1,search_result__$1,type__$1,opts__$1,meta13673){return (new clustermap.components.search.t13672(owner__$1,path_fn__$1,p__13661__$1,map__13670__$2,search_result_link__$1,map__13671__$2,name__$1,p__13660__$1,comm__$1,search_result__$1,type__$1,opts__$1,meta13673));
});})(map__13670,map__13670__$1,search_result,type,name,map__13671,map__13671__$1,opts,path_fn,comm))
;
}
return (new clustermap.components.search.t13672(owner,path_fn,p__13661,map__13670__$1,search_result_link,map__13671__$1,name,p__13660,comm,search_result,type,opts,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__13678,n){var map__13680 = p__13678;var map__13680__$1 = ((cljs.core.seq_QMARK_.call(null,map__13680))?cljs.core.apply.call(null,cljs.core.hash_map,map__13680):map__13680);var investor_companies = cljs.core.get.call(null,map__13680__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",493714407));var portfolio_companies = cljs.core.get.call(null,map__13680__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",1223322975));var constituencies = cljs.core.get.call(null,map__13680__$1,new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020));var cons = (function (){var or__3639__auto__ = constituencies;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();var pcs = (function (){var or__3639__auto__ = portfolio_companies;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();var invs = (function (){var or__3639__auto__ = investor_companies;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
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
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__13687 = cljs.core._EQ__EQ_;var expr__13688 = e.keyCode;if(cljs.core.truth_(pred__13687.call(null,clustermap.components.search.ESCAPE_KEY,expr__13688)))
{var G__13690 = om.core.get_node.call(null,owner,"search-component");var G__13690__$1 = (((G__13690 == null))?null:jayq.core.$.call(null,G__13690));var G__13690__$2 = (((G__13690__$1 == null))?null:G__13690__$1.toggle());return G__13690__$2;
} else
{if(cljs.core.truth_(pred__13687.call(null,clustermap.components.search.ENTER_KEY,expr__13688)))
{var vec__13691 = clustermap.components.search.nth_search_result.call(null,cljs.core.deref.call(null,search_results),(function (){var or__3639__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439));if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return (0);
}
})());var type = cljs.core.nth.call(null,vec__13691,(0),null);var res = cljs.core.nth.call(null,vec__13691,(1),null);var G__13692_13693 = om.core.get_node.call(null,owner,"search-component");var G__13692_13694__$1 = (((G__13692_13693 == null))?null:jayq.core.$.call(null,G__13692_13693));var G__13692_13695__$2 = (((G__13692_13694__$1 == null))?null:G__13692_13694__$1.toggle());return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id.call(null,type,res)], null)], null));
} else
{if(cljs.core.truth_(pred__13687.call(null,clustermap.components.search.UP_ARROW,expr__13688)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),((function (){var or__3639__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439));if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return (0);
}
})() - (1)));
} else
{if(cljs.core.truth_(pred__13687.call(null,clustermap.components.search.DOWN_ARROW,expr__13688)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),((function (){var or__3639__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439));if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
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
clustermap.components.search.search_component = (function search_component(p__13696,owner){var map__13728 = p__13696;var map__13728__$1 = ((cljs.core.seq_QMARK_.call(null,map__13728))?cljs.core.apply.call(null,cljs.core.hash_map,map__13728):map__13728);var map__13729 = cljs.core.get.call(null,map__13728__$1,new cljs.core.Keyword(null,"selection","selection",975998651));var map__13729__$1 = ((cljs.core.seq_QMARK_.call(null,map__13729))?cljs.core.apply.call(null,cljs.core.hash_map,map__13729):map__13729);var selection_type = cljs.core.get.call(null,map__13729__$1,new cljs.core.Keyword(null,"type","type",1174270348));var selection_value = cljs.core.get.call(null,map__13729__$1,new cljs.core.Keyword(null,"value","value",305978217));var view = cljs.core.get.call(null,map__13728__$1,new cljs.core.Keyword(null,"view","view",1247994814));var search_results = cljs.core.get.call(null,map__13728__$1,new cljs.core.Keyword(null,"search-results","search-results",306464634));var map__13730 = om.core.get_shared.call(null,owner);var map__13730__$1 = ((cljs.core.seq_QMARK_.call(null,map__13730))?cljs.core.apply.call(null,cljs.core.hash_map,map__13730):map__13730);var path_fn = cljs.core.get.call(null,map__13730__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__13730__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var path_fn__$1 = cljs.core.partial.call(null,path_fn,view);var map__13731 = search_results;var map__13731__$1 = ((cljs.core.seq_QMARK_.call(null,map__13731))?cljs.core.apply.call(null,cljs.core.hash_map,map__13731):map__13731);var investor_companies = cljs.core.get.call(null,map__13731__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",493714407));var portfolio_companies = cljs.core.get.call(null,map__13731__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",1223322975));var constituencies = cljs.core.get.call(null,map__13731__$1,new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020));if(typeof clustermap.components.search.t13732 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t13732 = (function (search_results,map__13729,p__13696,search_component,map__13730,owner,path_fn,view,map__13728,portfolio_companies,constituencies,investor_companies,selection_value,comm,selection_type,map__13731,meta13733){
this.search_results = search_results;
this.map__13729 = map__13729;
this.p__13696 = p__13696;
this.search_component = search_component;
this.map__13730 = map__13730;
this.owner = owner;
this.path_fn = path_fn;
this.view = view;
this.map__13728 = map__13728;
this.portfolio_companies = portfolio_companies;
this.constituencies = constituencies;
this.investor_companies = investor_companies;
this.selection_value = selection_value;
this.comm = comm;
this.selection_type = selection_type;
this.map__13731 = map__13731;
this.meta13733 = meta13733;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t13732.cljs$lang$type = true;
clustermap.components.search.t13732.cljs$lang$ctorStr = "clustermap.components.search/t13732";
clustermap.components.search.t13732.cljs$lang$ctorPrWriter = ((function (map__13730,map__13730__$1,path_fn,comm,path_fn__$1,map__13731,map__13731__$1,investor_companies,portfolio_companies,constituencies,map__13728,map__13728__$1,map__13729,map__13729__$1,selection_type,selection_value,view,search_results){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.search/t13732");
});})(map__13730,map__13730__$1,path_fn,comm,path_fn__$1,map__13731,map__13731__$1,investor_companies,portfolio_companies,constituencies,map__13728,map__13728__$1,map__13729,map__13729__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t13732.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t13732.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__13730,map__13730__$1,path_fn,comm,path_fn__$1,map__13731,map__13731__$1,investor_companies,portfolio_companies,constituencies,map__13728,map__13728__$1,map__13729,map__13729__$1,selection_type,selection_value,view,search_results){
return (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "search-component", "ref": "search-component", "id": "search", "onKeyDown": ((function (this$__$1,map__13730,map__13730__$1,path_fn,comm,path_fn__$1,map__13731,map__13731__$1,investor_companies,portfolio_companies,constituencies,map__13728,map__13728__$1,map__13729,map__13729__$1,selection_type,selection_value,view,search_results){
return (function (e){return clustermap.components.search.key_down.call(null,e,self__.search_results,self__.owner,self__.comm);
});})(this$__$1,map__13730,map__13730__$1,path_fn,comm,path_fn__$1,map__13731,map__13731__$1,investor_companies,portfolio_companies,constituencies,map__13728,map__13728__$1,map__13729,map__13729__$1,selection_type,selection_value,view,search_results))
},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__13730,map__13730__$1,path_fn,comm,path_fn__$1,map__13731,map__13731__$1,investor_companies,portfolio_companies,constituencies,map__13728,map__13728__$1,map__13729,map__13729__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),e.target.value], null));
});})(this$__$1,map__13730,map__13730__$1,path_fn,comm,path_fn__$1,map__13731,map__13731__$1,investor_companies,portfolio_companies,constituencies,map__13728,map__13728__$1,map__13729,map__13729__$1,selection_type,selection_value,view,search_results))
})),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": ((function (this$__$1,map__13730,map__13730__$1,path_fn,comm,path_fn__$1,map__13731,map__13731__$1,investor_companies,portfolio_companies,constituencies,map__13728,map__13728__$1,map__13729,map__13729__$1,selection_type,selection_value,view,search_results){
return (function (e){cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),""], null));
return om.core.get_node.call(null,self__.owner,"search-field").value = "";
});})(this$__$1,map__13730,map__13730__$1,path_fn,comm,path_fn__$1,map__13731,map__13731__$1,investor_companies,portfolio_companies,constituencies,map__13728,map__13728__$1,map__13729,map__13729__$1,selection_type,selection_value,view,search_results))
},"\u00D7"))),sablono.interpreter.interpret.call(null,(cljs.core.truth_((function (){var or__3639__auto__ = cljs.core.not_empty.call(null,self__.constituencies);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = cljs.core.not_empty.call(null,self__.portfolio_companies);if(cljs.core.truth_(or__3639__auto____$1))
{return or__3639__auto____$1;
} else
{return cljs.core.not_empty.call(null,self__.investor_companies);
}
}
})())?(function (){var idx_cons = cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(0)),self__.constituencies);var idx_pcs = cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,cljs.core.count.call(null,idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod.call(null,(function (){var or__3639__auto__ = new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439).cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return (0);
}
})(),((cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs)) + cljs.core.count.call(null,idx_invs)));var _ = ((cljs.core.not_EQ_.call(null,selected_idx,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439).cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Constituencies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?(function (){var iter__4377__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13730,map__13730__$1,path_fn,comm,path_fn__$1,map__13731,map__13731__$1,investor_companies,portfolio_companies,constituencies,map__13728,map__13728__$1,map__13729,map__13729__$1,selection_type,selection_value,view,search_results){
return (function iter__13735(s__13736){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13730,map__13730__$1,path_fn,comm,path_fn__$1,map__13731,map__13731__$1,investor_companies,portfolio_companies,constituencies,map__13728,map__13728__$1,map__13729,map__13729__$1,selection_type,selection_value,view,search_results){
return (function (){var s__13736__$1 = s__13736;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13736__$1);if(temp__4126__auto__)
{var s__13736__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13736__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__13736__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__13738 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__13737 = (0);while(true){
if((i__13737 < size__4376__auto__))
{var vec__13741 = cljs.core._nth.call(null,c__4375__auto__,i__13737);var idx = cljs.core.nth.call(null,vec__13741,(0),null);var con = cljs.core.nth.call(null,vec__13741,(1),null);cljs.core.chunk_append.call(null,b__13738,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__13737,vec__13741,idx,con,c__4375__auto__,size__4376__auto__,b__13738,s__13736__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13730,map__13730__$1,path_fn,comm,path_fn__$1,map__13731,map__13731__$1,investor_companies,portfolio_companies,constituencies,map__13728,map__13728__$1,map__13729,map__13729__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"constituency","constituency",1803637324),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)))));
});})(i__13737,vec__13741,idx,con,c__4375__auto__,size__4376__auto__,b__13738,s__13736__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13730,map__13730__$1,path_fn,comm,path_fn__$1,map__13731,map__13731__$1,investor_companies,portfolio_companies,constituencies,map__13728,map__13728__$1,map__13729,map__13729__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__13759 = (i__13737 + (1));
i__13737 = G__13759;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13738),iter__13735.call(null,cljs.core.chunk_rest.call(null,s__13736__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13738),null);
}
} else
{var vec__13742 = cljs.core.first.call(null,s__13736__$2);var idx = cljs.core.nth.call(null,vec__13742,(0),null);var con = cljs.core.nth.call(null,vec__13742,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__13742,idx,con,s__13736__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13730,map__13730__$1,path_fn,comm,path_fn__$1,map__13731,map__13731__$1,investor_companies,portfolio_companies,constituencies,map__13728,map__13728__$1,map__13729,map__13729__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"constituency","constituency",1803637324),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)))));
});})(vec__13742,idx,con,s__13736__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13730,map__13730__$1,path_fn,comm,path_fn__$1,map__13731,map__13731__$1,investor_companies,portfolio_companies,constituencies,map__13728,map__13728__$1,map__13729,map__13729__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__13735.call(null,cljs.core.rest.call(null,s__13736__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13730,map__13730__$1,path_fn,comm,path_fn__$1,map__13731,map__13731__$1,investor_companies,portfolio_companies,constituencies,map__13728,map__13728__$1,map__13729,map__13729__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13730,map__13730__$1,path_fn,comm,path_fn__$1,map__13731,map__13731__$1,investor_companies,portfolio_companies,constituencies,map__13728,map__13728__$1,map__13729,map__13729__$1,selection_type,selection_value,view,search_results))
;return iter__4377__auto__.call(null,idx_cons);
})():null),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Investor-backed companies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?(function (){var iter__4377__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13730,map__13730__$1,path_fn,comm,path_fn__$1,map__13731,map__13731__$1,investor_companies,portfolio_companies,constituencies,map__13728,map__13728__$1,map__13729,map__13729__$1,selection_type,selection_value,view,search_results){
return (function iter__13743(s__13744){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13730,map__13730__$1,path_fn,comm,path_fn__$1,map__13731,map__13731__$1,investor_companies,portfolio_companies,constituencies,map__13728,map__13728__$1,map__13729,map__13729__$1,selection_type,selection_value,view,search_results){
return (function (){var s__13744__$1 = s__13744;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13744__$1);if(temp__4126__auto__)
{var s__13744__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13744__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__13744__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__13746 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__13745 = (0);while(true){
if((i__13745 < size__4376__auto__))
{var vec__13749 = cljs.core._nth.call(null,c__4375__auto__,i__13745);var idx = cljs.core.nth.call(null,vec__13749,(0),null);var pc = cljs.core.nth.call(null,vec__13749,(1),null);cljs.core.chunk_append.call(null,b__13746,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__13745,vec__13749,idx,pc,c__4375__auto__,size__4376__auto__,b__13746,s__13744__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13730,map__13730__$1,path_fn,comm,path_fn__$1,map__13731,map__13731__$1,investor_companies,portfolio_companies,constituencies,map__13728,map__13728__$1,map__13729,map__13729__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)))));
});})(i__13745,vec__13749,idx,pc,c__4375__auto__,size__4376__auto__,b__13746,s__13744__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13730,map__13730__$1,path_fn,comm,path_fn__$1,map__13731,map__13731__$1,investor_companies,portfolio_companies,constituencies,map__13728,map__13728__$1,map__13729,map__13729__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__13760 = (i__13745 + (1));
i__13745 = G__13760;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13746),iter__13743.call(null,cljs.core.chunk_rest.call(null,s__13744__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13746),null);
}
} else
{var vec__13750 = cljs.core.first.call(null,s__13744__$2);var idx = cljs.core.nth.call(null,vec__13750,(0),null);var pc = cljs.core.nth.call(null,vec__13750,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__13750,idx,pc,s__13744__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13730,map__13730__$1,path_fn,comm,path_fn__$1,map__13731,map__13731__$1,investor_companies,portfolio_companies,constituencies,map__13728,map__13728__$1,map__13729,map__13729__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)))));
});})(vec__13750,idx,pc,s__13744__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13730,map__13730__$1,path_fn,comm,path_fn__$1,map__13731,map__13731__$1,investor_companies,portfolio_companies,constituencies,map__13728,map__13728__$1,map__13729,map__13729__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__13743.call(null,cljs.core.rest.call(null,s__13744__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13730,map__13730__$1,path_fn,comm,path_fn__$1,map__13731,map__13731__$1,investor_companies,portfolio_companies,constituencies,map__13728,map__13728__$1,map__13729,map__13729__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13730,map__13730__$1,path_fn,comm,path_fn__$1,map__13731,map__13731__$1,investor_companies,portfolio_companies,constituencies,map__13728,map__13728__$1,map__13729,map__13729__$1,selection_type,selection_value,view,search_results))
;return iter__4377__auto__.call(null,idx_pcs);
})():null),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Investors"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?(function (){var iter__4377__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13730,map__13730__$1,path_fn,comm,path_fn__$1,map__13731,map__13731__$1,investor_companies,portfolio_companies,constituencies,map__13728,map__13728__$1,map__13729,map__13729__$1,selection_type,selection_value,view,search_results){
return (function iter__13751(s__13752){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13730,map__13730__$1,path_fn,comm,path_fn__$1,map__13731,map__13731__$1,investor_companies,portfolio_companies,constituencies,map__13728,map__13728__$1,map__13729,map__13729__$1,selection_type,selection_value,view,search_results){
return (function (){var s__13752__$1 = s__13752;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13752__$1);if(temp__4126__auto__)
{var s__13752__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13752__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__13752__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__13754 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__13753 = (0);while(true){
if((i__13753 < size__4376__auto__))
{var vec__13757 = cljs.core._nth.call(null,c__4375__auto__,i__13753);var idx = cljs.core.nth.call(null,vec__13757,(0),null);var inv = cljs.core.nth.call(null,vec__13757,(1),null);cljs.core.chunk_append.call(null,b__13754,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__13753,vec__13757,idx,inv,c__4375__auto__,size__4376__auto__,b__13754,s__13752__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13730,map__13730__$1,path_fn,comm,path_fn__$1,map__13731,map__13731__$1,investor_companies,portfolio_companies,constituencies,map__13728,map__13728__$1,map__13729,map__13729__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"investor-company","investor-company",13706558),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)))));
});})(i__13753,vec__13757,idx,inv,c__4375__auto__,size__4376__auto__,b__13754,s__13752__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13730,map__13730__$1,path_fn,comm,path_fn__$1,map__13731,map__13731__$1,investor_companies,portfolio_companies,constituencies,map__13728,map__13728__$1,map__13729,map__13729__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__13761 = (i__13753 + (1));
i__13753 = G__13761;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13754),iter__13751.call(null,cljs.core.chunk_rest.call(null,s__13752__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13754),null);
}
} else
{var vec__13758 = cljs.core.first.call(null,s__13752__$2);var idx = cljs.core.nth.call(null,vec__13758,(0),null);var inv = cljs.core.nth.call(null,vec__13758,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__13758,idx,inv,s__13752__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13730,map__13730__$1,path_fn,comm,path_fn__$1,map__13731,map__13731__$1,investor_companies,portfolio_companies,constituencies,map__13728,map__13728__$1,map__13729,map__13729__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"investor-company","investor-company",13706558),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)))));
});})(vec__13758,idx,inv,s__13752__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13730,map__13730__$1,path_fn,comm,path_fn__$1,map__13731,map__13731__$1,investor_companies,portfolio_companies,constituencies,map__13728,map__13728__$1,map__13729,map__13729__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__13751.call(null,cljs.core.rest.call(null,s__13752__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13730,map__13730__$1,path_fn,comm,path_fn__$1,map__13731,map__13731__$1,investor_companies,portfolio_companies,constituencies,map__13728,map__13728__$1,map__13729,map__13729__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13730,map__13730__$1,path_fn,comm,path_fn__$1,map__13731,map__13731__$1,investor_companies,portfolio_companies,constituencies,map__13728,map__13728__$1,map__13729,map__13729__$1,selection_type,selection_value,view,search_results))
;return iter__4377__auto__.call(null,idx_invs);
})():null)], null)], null);
})():null)));
});})(map__13730,map__13730__$1,path_fn,comm,path_fn__$1,map__13731,map__13731__$1,investor_companies,portfolio_companies,constituencies,map__13728,map__13728__$1,map__13729,map__13729__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t13732.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13730,map__13730__$1,path_fn,comm,path_fn__$1,map__13731,map__13731__$1,investor_companies,portfolio_companies,constituencies,map__13728,map__13728__$1,map__13729,map__13729__$1,selection_type,selection_value,view,search_results){
return (function (_13734){var self__ = this;
var _13734__$1 = this;return self__.meta13733;
});})(map__13730,map__13730__$1,path_fn,comm,path_fn__$1,map__13731,map__13731__$1,investor_companies,portfolio_companies,constituencies,map__13728,map__13728__$1,map__13729,map__13729__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t13732.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13730,map__13730__$1,path_fn,comm,path_fn__$1,map__13731,map__13731__$1,investor_companies,portfolio_companies,constituencies,map__13728,map__13728__$1,map__13729,map__13729__$1,selection_type,selection_value,view,search_results){
return (function (_13734,meta13733__$1){var self__ = this;
var _13734__$1 = this;return (new clustermap.components.search.t13732(self__.search_results,self__.map__13729,self__.p__13696,self__.search_component,self__.map__13730,self__.owner,self__.path_fn,self__.view,self__.map__13728,self__.portfolio_companies,self__.constituencies,self__.investor_companies,self__.selection_value,self__.comm,self__.selection_type,self__.map__13731,meta13733__$1));
});})(map__13730,map__13730__$1,path_fn,comm,path_fn__$1,map__13731,map__13731__$1,investor_companies,portfolio_companies,constituencies,map__13728,map__13728__$1,map__13729,map__13729__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.__GT_t13732 = ((function (map__13730,map__13730__$1,path_fn,comm,path_fn__$1,map__13731,map__13731__$1,investor_companies,portfolio_companies,constituencies,map__13728,map__13728__$1,map__13729,map__13729__$1,selection_type,selection_value,view,search_results){
return (function __GT_t13732(search_results__$1,map__13729__$2,p__13696__$1,search_component__$1,map__13730__$2,owner__$1,path_fn__$2,view__$1,map__13728__$2,portfolio_companies__$1,constituencies__$1,investor_companies__$1,selection_value__$1,comm__$1,selection_type__$1,map__13731__$2,meta13733){return (new clustermap.components.search.t13732(search_results__$1,map__13729__$2,p__13696__$1,search_component__$1,map__13730__$2,owner__$1,path_fn__$2,view__$1,map__13728__$2,portfolio_companies__$1,constituencies__$1,investor_companies__$1,selection_value__$1,comm__$1,selection_type__$1,map__13731__$2,meta13733));
});})(map__13730,map__13730__$1,path_fn,comm,path_fn__$1,map__13731,map__13731__$1,investor_companies,portfolio_companies,constituencies,map__13728,map__13728__$1,map__13729,map__13729__$1,selection_type,selection_value,view,search_results))
;
}
return (new clustermap.components.search.t13732(search_results,map__13729__$1,p__13696,search_component,map__13730__$1,owner,path_fn__$1,view,map__13728__$1,portfolio_companies,constituencies,investor_companies,selection_value,comm,selection_type,map__13731__$1,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id)], null));
});
