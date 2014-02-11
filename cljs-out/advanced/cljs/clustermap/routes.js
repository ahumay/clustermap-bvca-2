// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.routes');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('sablono.core');
clustermap.routes.type_name_keys = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$275,cljs.core.constant$keyword$252,cljs.core.constant$keyword$276,cljs.core.constant$keyword$252,cljs.core.constant$keyword$277,cljs.core.constant$keyword$349], null);
clustermap.routes.name_for = (function name_for(type,obj){return cljs.core.get.cljs$core$IFn$_invoke$arity$2(obj,cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.routes.type_name_keys,type));
});
clustermap.routes.portfolio_company_path = (function portfolio_company_path(app_state,obj){return [cljs.core.str("#/"),cljs.core.str((function (){var G__22325 = app_state;var G__22325__$1 = (((G__22325 == null))?null:cljs.core.deref(G__22325));var G__22325__$2 = (((G__22325__$1 == null))?null:cljs.core.constant$keyword$350.cljs$core$IFn$_invoke$arity$1(G__22325__$1));var G__22325__$3 = (((G__22325__$2 == null))?null:cljs.core.name(G__22325__$2));return G__22325__$3;
})()),cljs.core.str("/portfolio-company/"),cljs.core.str(cljs.core.constant$keyword$351.cljs$core$IFn$_invoke$arity$1(obj))].join('');
});
clustermap.routes.investor_company_path = (function investor_company_path(app_state,obj){return [cljs.core.str("#/"),cljs.core.str((function (){var G__22327 = app_state;var G__22327__$1 = (((G__22327 == null))?null:cljs.core.deref(G__22327));var G__22327__$2 = (((G__22327__$1 == null))?null:cljs.core.constant$keyword$350.cljs$core$IFn$_invoke$arity$1(G__22327__$1));var G__22327__$3 = (((G__22327__$2 == null))?null:cljs.core.name(G__22327__$2));return G__22327__$3;
})()),cljs.core.str("/investor-company/"),cljs.core.str(cljs.core.constant$keyword$352.cljs$core$IFn$_invoke$arity$1(obj))].join('');
});
clustermap.routes.constituency_path = (function constituency_path(app_state,obj){return [cljs.core.str("#/"),cljs.core.str((function (){var G__22329 = app_state;var G__22329__$1 = (((G__22329 == null))?null:cljs.core.deref(G__22329));var G__22329__$2 = (((G__22329__$1 == null))?null:cljs.core.constant$keyword$350.cljs$core$IFn$_invoke$arity$1(G__22329__$1));var G__22329__$3 = (((G__22329__$2 == null))?null:cljs.core.name(G__22329__$2));return G__22329__$3;
})()),cljs.core.str("/constituency/"),cljs.core.str(cljs.core.constant$keyword$353.cljs$core$IFn$_invoke$arity$1(obj))].join('');
});
clustermap.routes.type_paths = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$275,clustermap.routes.portfolio_company_path,cljs.core.constant$keyword$276,clustermap.routes.investor_company_path,cljs.core.constant$keyword$277,clustermap.routes.constituency_path], null);
clustermap.routes.path_for = (function path_for(app_state,type,obj){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.routes.type_paths,type),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app_state,obj], null));
});
clustermap.routes.link_for = (function link_for(app_state,type,obj){return React.DOM.a({"href": clustermap.routes.path_for(app_state,type,obj)},sablono.interpreter.interpret(clustermap.routes.name_for(type,obj)));
});
