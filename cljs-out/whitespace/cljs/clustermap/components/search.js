// Compiled by ClojureScript 0.0-2268
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
clustermap.components.search.search_result_link = (function search_result_link(p__14272,owner,p__14273){var map__14282 = p__14272;var map__14282__$1 = ((cljs.core.seq_QMARK_.call(null,map__14282))?cljs.core.apply.call(null,cljs.core.hash_map,map__14282):map__14282);var search_result = map__14282__$1;var type = cljs.core.get.call(null,map__14282__$1,new cljs.core.Keyword(null,"type","type",1174270348));var name = cljs.core.get.call(null,map__14282__$1,new cljs.core.Keyword(null,"name","name",1843675177));var map__14283 = p__14273;var map__14283__$1 = ((cljs.core.seq_QMARK_.call(null,map__14283))?cljs.core.apply.call(null,cljs.core.hash_map,map__14283):map__14283);var opts = map__14283__$1;var path_fn = cljs.core.get.call(null,map__14283__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__14283__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));if(typeof clustermap.components.search.t14284 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t14284 = (function (owner,path_fn,map__14282,p__14273,search_result_link,p__14272,name,comm,map__14283,search_result,type,opts,meta14285){
this.owner = owner;
this.path_fn = path_fn;
this.map__14282 = map__14282;
this.p__14273 = p__14273;
this.search_result_link = search_result_link;
this.p__14272 = p__14272;
this.name = name;
this.comm = comm;
this.map__14283 = map__14283;
this.search_result = search_result;
this.type = type;
this.opts = opts;
this.meta14285 = meta14285;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t14284.cljs$lang$type = true;
clustermap.components.search.t14284.cljs$lang$ctorStr = "clustermap.components.search/t14284";
clustermap.components.search.t14284.cljs$lang$ctorPrWriter = ((function (map__14282,map__14282__$1,search_result,type,name,map__14283,map__14283__$1,opts,path_fn,comm){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.search/t14284");
});})(map__14282,map__14282__$1,search_result,type,name,map__14283,map__14283__$1,opts,path_fn,comm))
;
clustermap.components.search.t14284.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t14284.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__14282,map__14282__$1,search_result,type,name,map__14283,map__14283__$1,opts,path_fn,comm){
return (function (this$,p__14287){var self__ = this;
var map__14288 = p__14287;var map__14288__$1 = ((cljs.core.seq_QMARK_.call(null,map__14288))?cljs.core.apply.call(null,cljs.core.hash_map,map__14288):map__14288);var state = map__14288__$1;var selected = cljs.core.get.call(null,map__14288__$1,new cljs.core.Keyword(null,"selected","selected",574897764));var this$__$1 = this;var path = self__.path_fn.call(null,self__.type,self__.search_result);return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": ((function (path,this$__$1,map__14288,map__14288__$1,state,selected,map__14282,map__14282__$1,search_result,type,name,map__14283,map__14283__$1,opts,path_fn,comm){
return (function (e){var l = om.core.get_node.call(null,self__.owner,"link");var G__14289 = l;var G__14289__$1 = (((G__14289 == null))?null:jayq.core.$.call(null,G__14289));var G__14289__$2 = (((G__14289__$1 == null))?null:G__14289__$1.parents(".search-component"));var G__14289__$3 = (((G__14289__$2 == null))?null:G__14289__$2.toggle());return G__14289__$3;
});})(path,this$__$1,map__14288,map__14288__$1,state,selected,map__14282,map__14282__$1,search_result,type,name,map__14283,map__14283__$1,opts,path_fn,comm))
},sablono.interpreter.interpret.call(null,self__.name)));
});})(map__14282,map__14282__$1,search_result,type,name,map__14283,map__14283__$1,opts,path_fn,comm))
;
clustermap.components.search.t14284.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__14282,map__14282__$1,search_result,type,name,map__14283,map__14283__$1,opts,path_fn,comm){
return (function (_14286){var self__ = this;
var _14286__$1 = this;return self__.meta14285;
});})(map__14282,map__14282__$1,search_result,type,name,map__14283,map__14283__$1,opts,path_fn,comm))
;
clustermap.components.search.t14284.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__14282,map__14282__$1,search_result,type,name,map__14283,map__14283__$1,opts,path_fn,comm){
return (function (_14286,meta14285__$1){var self__ = this;
var _14286__$1 = this;return (new clustermap.components.search.t14284(self__.owner,self__.path_fn,self__.map__14282,self__.p__14273,self__.search_result_link,self__.p__14272,self__.name,self__.comm,self__.map__14283,self__.search_result,self__.type,self__.opts,meta14285__$1));
});})(map__14282,map__14282__$1,search_result,type,name,map__14283,map__14283__$1,opts,path_fn,comm))
;
clustermap.components.search.__GT_t14284 = ((function (map__14282,map__14282__$1,search_result,type,name,map__14283,map__14283__$1,opts,path_fn,comm){
return (function __GT_t14284(owner__$1,path_fn__$1,map__14282__$2,p__14273__$1,search_result_link__$1,p__14272__$1,name__$1,comm__$1,map__14283__$2,search_result__$1,type__$1,opts__$1,meta14285){return (new clustermap.components.search.t14284(owner__$1,path_fn__$1,map__14282__$2,p__14273__$1,search_result_link__$1,p__14272__$1,name__$1,comm__$1,map__14283__$2,search_result__$1,type__$1,opts__$1,meta14285));
});})(map__14282,map__14282__$1,search_result,type,name,map__14283,map__14283__$1,opts,path_fn,comm))
;
}
return (new clustermap.components.search.t14284(owner,path_fn,map__14282__$1,p__14273,search_result_link,p__14272,name,comm,map__14283__$1,search_result,type,opts,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__14290,n){var map__14292 = p__14290;var map__14292__$1 = ((cljs.core.seq_QMARK_.call(null,map__14292))?cljs.core.apply.call(null,cljs.core.hash_map,map__14292):map__14292);var investor_companies = cljs.core.get.call(null,map__14292__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",493714407));var portfolio_companies = cljs.core.get.call(null,map__14292__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",1223322975));var constituencies = cljs.core.get.call(null,map__14292__$1,new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020));var cons = (function (){var or__3543__auto__ = constituencies;if(cljs.core.truth_(or__3543__auto__))
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
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__14299 = cljs.core._EQ__EQ_;var expr__14300 = e.keyCode;if(cljs.core.truth_(pred__14299.call(null,clustermap.components.search.ESCAPE_KEY,expr__14300)))
{var G__14302 = om.core.get_node.call(null,owner,"search-component");var G__14302__$1 = (((G__14302 == null))?null:jayq.core.$.call(null,G__14302));var G__14302__$2 = (((G__14302__$1 == null))?null:G__14302__$1.toggle());return G__14302__$2;
} else
{if(cljs.core.truth_(pred__14299.call(null,clustermap.components.search.ENTER_KEY,expr__14300)))
{var vec__14303 = clustermap.components.search.nth_search_result.call(null,cljs.core.deref.call(null,search_results),(function (){var or__3543__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439));if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return (0);
}
})());var type = cljs.core.nth.call(null,vec__14303,(0),null);var res = cljs.core.nth.call(null,vec__14303,(1),null);var G__14304_14305 = om.core.get_node.call(null,owner,"search-component");var G__14304_14306__$1 = (((G__14304_14305 == null))?null:jayq.core.$.call(null,G__14304_14305));var G__14304_14307__$2 = (((G__14304_14306__$1 == null))?null:G__14304_14306__$1.toggle());return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id.call(null,type,res)], null)], null));
} else
{if(cljs.core.truth_(pred__14299.call(null,clustermap.components.search.UP_ARROW,expr__14300)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),((function (){var or__3543__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439));if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return (0);
}
})() - (1)));
} else
{if(cljs.core.truth_(pred__14299.call(null,clustermap.components.search.DOWN_ARROW,expr__14300)))
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
clustermap.components.search.search_component = (function search_component(p__14308,owner){var map__14340 = p__14308;var map__14340__$1 = ((cljs.core.seq_QMARK_.call(null,map__14340))?cljs.core.apply.call(null,cljs.core.hash_map,map__14340):map__14340);var map__14341 = cljs.core.get.call(null,map__14340__$1,new cljs.core.Keyword(null,"selection","selection",975998651));var map__14341__$1 = ((cljs.core.seq_QMARK_.call(null,map__14341))?cljs.core.apply.call(null,cljs.core.hash_map,map__14341):map__14341);var selection_type = cljs.core.get.call(null,map__14341__$1,new cljs.core.Keyword(null,"type","type",1174270348));var selection_value = cljs.core.get.call(null,map__14341__$1,new cljs.core.Keyword(null,"value","value",305978217));var view = cljs.core.get.call(null,map__14340__$1,new cljs.core.Keyword(null,"view","view",1247994814));var search_results = cljs.core.get.call(null,map__14340__$1,new cljs.core.Keyword(null,"search-results","search-results",306464634));var map__14342 = om.core.get_shared.call(null,owner);var map__14342__$1 = ((cljs.core.seq_QMARK_.call(null,map__14342))?cljs.core.apply.call(null,cljs.core.hash_map,map__14342):map__14342);var path_fn = cljs.core.get.call(null,map__14342__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__14342__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var path_fn__$1 = cljs.core.partial.call(null,path_fn,view);var map__14343 = search_results;var map__14343__$1 = ((cljs.core.seq_QMARK_.call(null,map__14343))?cljs.core.apply.call(null,cljs.core.hash_map,map__14343):map__14343);var investor_companies = cljs.core.get.call(null,map__14343__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",493714407));var portfolio_companies = cljs.core.get.call(null,map__14343__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",1223322975));var constituencies = cljs.core.get.call(null,map__14343__$1,new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020));if(typeof clustermap.components.search.t14344 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t14344 = (function (search_results,map__14340,search_component,owner,path_fn,view,portfolio_companies,constituencies,p__14308,investor_companies,map__14341,selection_value,comm,selection_type,map__14343,map__14342,meta14345){
this.search_results = search_results;
this.map__14340 = map__14340;
this.search_component = search_component;
this.owner = owner;
this.path_fn = path_fn;
this.view = view;
this.portfolio_companies = portfolio_companies;
this.constituencies = constituencies;
this.p__14308 = p__14308;
this.investor_companies = investor_companies;
this.map__14341 = map__14341;
this.selection_value = selection_value;
this.comm = comm;
this.selection_type = selection_type;
this.map__14343 = map__14343;
this.map__14342 = map__14342;
this.meta14345 = meta14345;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t14344.cljs$lang$type = true;
clustermap.components.search.t14344.cljs$lang$ctorStr = "clustermap.components.search/t14344";
clustermap.components.search.t14344.cljs$lang$ctorPrWriter = ((function (map__14342,map__14342__$1,path_fn,comm,path_fn__$1,map__14343,map__14343__$1,investor_companies,portfolio_companies,constituencies,map__14340,map__14340__$1,map__14341,map__14341__$1,selection_type,selection_value,view,search_results){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.search/t14344");
});})(map__14342,map__14342__$1,path_fn,comm,path_fn__$1,map__14343,map__14343__$1,investor_companies,portfolio_companies,constituencies,map__14340,map__14340__$1,map__14341,map__14341__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t14344.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t14344.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__14342,map__14342__$1,path_fn,comm,path_fn__$1,map__14343,map__14343__$1,investor_companies,portfolio_companies,constituencies,map__14340,map__14340__$1,map__14341,map__14341__$1,selection_type,selection_value,view,search_results){
return (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"ref": "search-component", "className": "search-component", "id": "search", "onKeyDown": ((function (this$__$1,map__14342,map__14342__$1,path_fn,comm,path_fn__$1,map__14343,map__14343__$1,investor_companies,portfolio_companies,constituencies,map__14340,map__14340__$1,map__14341,map__14341__$1,selection_type,selection_value,view,search_results){
return (function (e){return clustermap.components.search.key_down.call(null,e,self__.search_results,self__.owner,self__.comm);
});})(this$__$1,map__14342,map__14342__$1,path_fn,comm,path_fn__$1,map__14343,map__14343__$1,investor_companies,portfolio_companies,constituencies,map__14340,map__14340__$1,map__14341,map__14341__$1,selection_type,selection_value,view,search_results))
},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__14342,map__14342__$1,path_fn,comm,path_fn__$1,map__14343,map__14343__$1,investor_companies,portfolio_companies,constituencies,map__14340,map__14340__$1,map__14341,map__14341__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),e.target.value], null));
});})(this$__$1,map__14342,map__14342__$1,path_fn,comm,path_fn__$1,map__14343,map__14343__$1,investor_companies,portfolio_companies,constituencies,map__14340,map__14340__$1,map__14341,map__14341__$1,selection_type,selection_value,view,search_results))
})),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": ((function (this$__$1,map__14342,map__14342__$1,path_fn,comm,path_fn__$1,map__14343,map__14343__$1,investor_companies,portfolio_companies,constituencies,map__14340,map__14340__$1,map__14341,map__14341__$1,selection_type,selection_value,view,search_results){
return (function (e){cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),""], null));
return om.core.get_node.call(null,self__.owner,"search-field").value = "";
});})(this$__$1,map__14342,map__14342__$1,path_fn,comm,path_fn__$1,map__14343,map__14343__$1,investor_companies,portfolio_companies,constituencies,map__14340,map__14340__$1,map__14341,map__14341__$1,selection_type,selection_value,view,search_results))
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
})(),((cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs)) + cljs.core.count.call(null,idx_invs)));var _ = ((cljs.core.not_EQ_.call(null,selected_idx,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439).cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Constituencies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?(function (){var iter__4268__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__14342,map__14342__$1,path_fn,comm,path_fn__$1,map__14343,map__14343__$1,investor_companies,portfolio_companies,constituencies,map__14340,map__14340__$1,map__14341,map__14341__$1,selection_type,selection_value,view,search_results){
return (function iter__14347(s__14348){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__14342,map__14342__$1,path_fn,comm,path_fn__$1,map__14343,map__14343__$1,investor_companies,portfolio_companies,constituencies,map__14340,map__14340__$1,map__14341,map__14341__$1,selection_type,selection_value,view,search_results){
return (function (){var s__14348__$1 = s__14348;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14348__$1);if(temp__4126__auto__)
{var s__14348__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14348__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__14348__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__14350 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__14349 = (0);while(true){
if((i__14349 < size__4267__auto__))
{var vec__14353 = cljs.core._nth.call(null,c__4266__auto__,i__14349);var idx = cljs.core.nth.call(null,vec__14353,(0),null);var con = cljs.core.nth.call(null,vec__14353,(1),null);cljs.core.chunk_append.call(null,b__14350,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__14349,vec__14353,idx,con,c__4266__auto__,size__4267__auto__,b__14350,s__14348__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__14342,map__14342__$1,path_fn,comm,path_fn__$1,map__14343,map__14343__$1,investor_companies,portfolio_companies,constituencies,map__14340,map__14340__$1,map__14341,map__14341__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"constituency","constituency",1803637324),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)))));
});})(i__14349,vec__14353,idx,con,c__4266__auto__,size__4267__auto__,b__14350,s__14348__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__14342,map__14342__$1,path_fn,comm,path_fn__$1,map__14343,map__14343__$1,investor_companies,portfolio_companies,constituencies,map__14340,map__14340__$1,map__14341,map__14341__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__14371 = (i__14349 + (1));
i__14349 = G__14371;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14350),iter__14347.call(null,cljs.core.chunk_rest.call(null,s__14348__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14350),null);
}
} else
{var vec__14354 = cljs.core.first.call(null,s__14348__$2);var idx = cljs.core.nth.call(null,vec__14354,(0),null);var con = cljs.core.nth.call(null,vec__14354,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__14354,idx,con,s__14348__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__14342,map__14342__$1,path_fn,comm,path_fn__$1,map__14343,map__14343__$1,investor_companies,portfolio_companies,constituencies,map__14340,map__14340__$1,map__14341,map__14341__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"constituency","constituency",1803637324),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)))));
});})(vec__14354,idx,con,s__14348__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__14342,map__14342__$1,path_fn,comm,path_fn__$1,map__14343,map__14343__$1,investor_companies,portfolio_companies,constituencies,map__14340,map__14340__$1,map__14341,map__14341__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__14347.call(null,cljs.core.rest.call(null,s__14348__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__14342,map__14342__$1,path_fn,comm,path_fn__$1,map__14343,map__14343__$1,investor_companies,portfolio_companies,constituencies,map__14340,map__14340__$1,map__14341,map__14341__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__14342,map__14342__$1,path_fn,comm,path_fn__$1,map__14343,map__14343__$1,investor_companies,portfolio_companies,constituencies,map__14340,map__14340__$1,map__14341,map__14341__$1,selection_type,selection_value,view,search_results))
;return iter__4268__auto__.call(null,idx_cons);
})():null),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Investor-backed companies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?(function (){var iter__4268__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__14342,map__14342__$1,path_fn,comm,path_fn__$1,map__14343,map__14343__$1,investor_companies,portfolio_companies,constituencies,map__14340,map__14340__$1,map__14341,map__14341__$1,selection_type,selection_value,view,search_results){
return (function iter__14355(s__14356){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__14342,map__14342__$1,path_fn,comm,path_fn__$1,map__14343,map__14343__$1,investor_companies,portfolio_companies,constituencies,map__14340,map__14340__$1,map__14341,map__14341__$1,selection_type,selection_value,view,search_results){
return (function (){var s__14356__$1 = s__14356;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14356__$1);if(temp__4126__auto__)
{var s__14356__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14356__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__14356__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__14358 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__14357 = (0);while(true){
if((i__14357 < size__4267__auto__))
{var vec__14361 = cljs.core._nth.call(null,c__4266__auto__,i__14357);var idx = cljs.core.nth.call(null,vec__14361,(0),null);var pc = cljs.core.nth.call(null,vec__14361,(1),null);cljs.core.chunk_append.call(null,b__14358,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__14357,vec__14361,idx,pc,c__4266__auto__,size__4267__auto__,b__14358,s__14356__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__14342,map__14342__$1,path_fn,comm,path_fn__$1,map__14343,map__14343__$1,investor_companies,portfolio_companies,constituencies,map__14340,map__14340__$1,map__14341,map__14341__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)))));
});})(i__14357,vec__14361,idx,pc,c__4266__auto__,size__4267__auto__,b__14358,s__14356__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__14342,map__14342__$1,path_fn,comm,path_fn__$1,map__14343,map__14343__$1,investor_companies,portfolio_companies,constituencies,map__14340,map__14340__$1,map__14341,map__14341__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__14372 = (i__14357 + (1));
i__14357 = G__14372;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14358),iter__14355.call(null,cljs.core.chunk_rest.call(null,s__14356__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14358),null);
}
} else
{var vec__14362 = cljs.core.first.call(null,s__14356__$2);var idx = cljs.core.nth.call(null,vec__14362,(0),null);var pc = cljs.core.nth.call(null,vec__14362,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__14362,idx,pc,s__14356__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__14342,map__14342__$1,path_fn,comm,path_fn__$1,map__14343,map__14343__$1,investor_companies,portfolio_companies,constituencies,map__14340,map__14340__$1,map__14341,map__14341__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)))));
});})(vec__14362,idx,pc,s__14356__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__14342,map__14342__$1,path_fn,comm,path_fn__$1,map__14343,map__14343__$1,investor_companies,portfolio_companies,constituencies,map__14340,map__14340__$1,map__14341,map__14341__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__14355.call(null,cljs.core.rest.call(null,s__14356__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__14342,map__14342__$1,path_fn,comm,path_fn__$1,map__14343,map__14343__$1,investor_companies,portfolio_companies,constituencies,map__14340,map__14340__$1,map__14341,map__14341__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__14342,map__14342__$1,path_fn,comm,path_fn__$1,map__14343,map__14343__$1,investor_companies,portfolio_companies,constituencies,map__14340,map__14340__$1,map__14341,map__14341__$1,selection_type,selection_value,view,search_results))
;return iter__4268__auto__.call(null,idx_pcs);
})():null),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Investors"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?(function (){var iter__4268__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__14342,map__14342__$1,path_fn,comm,path_fn__$1,map__14343,map__14343__$1,investor_companies,portfolio_companies,constituencies,map__14340,map__14340__$1,map__14341,map__14341__$1,selection_type,selection_value,view,search_results){
return (function iter__14363(s__14364){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__14342,map__14342__$1,path_fn,comm,path_fn__$1,map__14343,map__14343__$1,investor_companies,portfolio_companies,constituencies,map__14340,map__14340__$1,map__14341,map__14341__$1,selection_type,selection_value,view,search_results){
return (function (){var s__14364__$1 = s__14364;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14364__$1);if(temp__4126__auto__)
{var s__14364__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14364__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__14364__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__14366 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__14365 = (0);while(true){
if((i__14365 < size__4267__auto__))
{var vec__14369 = cljs.core._nth.call(null,c__4266__auto__,i__14365);var idx = cljs.core.nth.call(null,vec__14369,(0),null);var inv = cljs.core.nth.call(null,vec__14369,(1),null);cljs.core.chunk_append.call(null,b__14366,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__14365,vec__14369,idx,inv,c__4266__auto__,size__4267__auto__,b__14366,s__14364__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__14342,map__14342__$1,path_fn,comm,path_fn__$1,map__14343,map__14343__$1,investor_companies,portfolio_companies,constituencies,map__14340,map__14340__$1,map__14341,map__14341__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"investor-company","investor-company",13706558),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)))));
});})(i__14365,vec__14369,idx,inv,c__4266__auto__,size__4267__auto__,b__14366,s__14364__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__14342,map__14342__$1,path_fn,comm,path_fn__$1,map__14343,map__14343__$1,investor_companies,portfolio_companies,constituencies,map__14340,map__14340__$1,map__14341,map__14341__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__14373 = (i__14365 + (1));
i__14365 = G__14373;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14366),iter__14363.call(null,cljs.core.chunk_rest.call(null,s__14364__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14366),null);
}
} else
{var vec__14370 = cljs.core.first.call(null,s__14364__$2);var idx = cljs.core.nth.call(null,vec__14370,(0),null);var inv = cljs.core.nth.call(null,vec__14370,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__14370,idx,inv,s__14364__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__14342,map__14342__$1,path_fn,comm,path_fn__$1,map__14343,map__14343__$1,investor_companies,portfolio_companies,constituencies,map__14340,map__14340__$1,map__14341,map__14341__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"investor-company","investor-company",13706558),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)))));
});})(vec__14370,idx,inv,s__14364__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__14342,map__14342__$1,path_fn,comm,path_fn__$1,map__14343,map__14343__$1,investor_companies,portfolio_companies,constituencies,map__14340,map__14340__$1,map__14341,map__14341__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__14363.call(null,cljs.core.rest.call(null,s__14364__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__14342,map__14342__$1,path_fn,comm,path_fn__$1,map__14343,map__14343__$1,investor_companies,portfolio_companies,constituencies,map__14340,map__14340__$1,map__14341,map__14341__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__14342,map__14342__$1,path_fn,comm,path_fn__$1,map__14343,map__14343__$1,investor_companies,portfolio_companies,constituencies,map__14340,map__14340__$1,map__14341,map__14341__$1,selection_type,selection_value,view,search_results))
;return iter__4268__auto__.call(null,idx_invs);
})():null)], null)], null);
})():null)));
});})(map__14342,map__14342__$1,path_fn,comm,path_fn__$1,map__14343,map__14343__$1,investor_companies,portfolio_companies,constituencies,map__14340,map__14340__$1,map__14341,map__14341__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t14344.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__14342,map__14342__$1,path_fn,comm,path_fn__$1,map__14343,map__14343__$1,investor_companies,portfolio_companies,constituencies,map__14340,map__14340__$1,map__14341,map__14341__$1,selection_type,selection_value,view,search_results){
return (function (_14346){var self__ = this;
var _14346__$1 = this;return self__.meta14345;
});})(map__14342,map__14342__$1,path_fn,comm,path_fn__$1,map__14343,map__14343__$1,investor_companies,portfolio_companies,constituencies,map__14340,map__14340__$1,map__14341,map__14341__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t14344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__14342,map__14342__$1,path_fn,comm,path_fn__$1,map__14343,map__14343__$1,investor_companies,portfolio_companies,constituencies,map__14340,map__14340__$1,map__14341,map__14341__$1,selection_type,selection_value,view,search_results){
return (function (_14346,meta14345__$1){var self__ = this;
var _14346__$1 = this;return (new clustermap.components.search.t14344(self__.search_results,self__.map__14340,self__.search_component,self__.owner,self__.path_fn,self__.view,self__.portfolio_companies,self__.constituencies,self__.p__14308,self__.investor_companies,self__.map__14341,self__.selection_value,self__.comm,self__.selection_type,self__.map__14343,self__.map__14342,meta14345__$1));
});})(map__14342,map__14342__$1,path_fn,comm,path_fn__$1,map__14343,map__14343__$1,investor_companies,portfolio_companies,constituencies,map__14340,map__14340__$1,map__14341,map__14341__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.__GT_t14344 = ((function (map__14342,map__14342__$1,path_fn,comm,path_fn__$1,map__14343,map__14343__$1,investor_companies,portfolio_companies,constituencies,map__14340,map__14340__$1,map__14341,map__14341__$1,selection_type,selection_value,view,search_results){
return (function __GT_t14344(search_results__$1,map__14340__$2,search_component__$1,owner__$1,path_fn__$2,view__$1,portfolio_companies__$1,constituencies__$1,p__14308__$1,investor_companies__$1,map__14341__$2,selection_value__$1,comm__$1,selection_type__$1,map__14343__$2,map__14342__$2,meta14345){return (new clustermap.components.search.t14344(search_results__$1,map__14340__$2,search_component__$1,owner__$1,path_fn__$2,view__$1,portfolio_companies__$1,constituencies__$1,p__14308__$1,investor_companies__$1,map__14341__$2,selection_value__$1,comm__$1,selection_type__$1,map__14343__$2,map__14342__$2,meta14345));
});})(map__14342,map__14342__$1,path_fn,comm,path_fn__$1,map__14343,map__14343__$1,investor_companies,portfolio_companies,constituencies,map__14340,map__14340__$1,map__14341,map__14341__$1,selection_type,selection_value,view,search_results))
;
}
return (new clustermap.components.search.t14344(search_results,map__14340__$1,search_component,owner,path_fn__$1,view,portfolio_companies,constituencies,p__14308,investor_companies,map__14341__$1,selection_value,comm,selection_type,map__14343__$1,map__14342__$1,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id)], null));
});
