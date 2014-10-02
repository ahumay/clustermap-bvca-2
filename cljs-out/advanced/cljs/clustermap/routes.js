// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.routes');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('sablono.core');
goog.require('sablono.core');
clustermap.routes.type_name_keys = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1014,cljs.core.constant$keyword$941,cljs.core.constant$keyword$1015,cljs.core.constant$keyword$941,cljs.core.constant$keyword$1017,cljs.core.constant$keyword$916], null);
clustermap.routes.name_for = (function name_for(type,obj){return cljs.core.get.cljs$core$IFn$_invoke$arity$2(obj,cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.routes.type_name_keys,type));
});
clustermap.routes.portfolio_company_path = (function portfolio_company_path(view_id,obj){return ("#/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(view_id))+"/portfolio-company/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$1026.cljs$core$IFn$_invoke$arity$1(obj)));
});
clustermap.routes.investor_company_path = (function investor_company_path(view_id,obj){return ("#/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(view_id))+"/investor-company/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$1029.cljs$core$IFn$_invoke$arity$1(obj)));
});
clustermap.routes.constituency_path = (function constituency_path(view_id,obj){return ("#/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(view_id))+"/constituency/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$915.cljs$core$IFn$_invoke$arity$1(obj)));
});
clustermap.routes.no_selection_path = (function no_selection_path(view_id,_){return ("#/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(view_id)));
});
clustermap.routes.type_paths = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1014,clustermap.routes.portfolio_company_path,cljs.core.constant$keyword$1015,clustermap.routes.investor_company_path,cljs.core.constant$keyword$1017,clustermap.routes.constituency_path,null,clustermap.routes.no_selection_path], null);
clustermap.routes.path_for = (function path_for(view_id,type,obj){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.routes.type_paths,type),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_id,obj], null));
});
clustermap.routes.link_for = (function link_for(view_id,type,obj){return React.DOM.a({"href": clustermap.routes.path_for(view_id,type,obj)},sablono.interpreter.interpret(clustermap.routes.name_for(type,obj)));
});
clustermap.routes.path_for_view = (function path_for_view(current_route_fn,view_id){var r = (current_route_fn.cljs$core$IFn$_invoke$arity$0 ? current_route_fn.cljs$core$IFn$_invoke$arity$0() : current_route_fn.call(null));var comps = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#",cljs.core.name(view_id),cljs.core.constant$keyword$912.cljs$core$IFn$_invoke$arity$1(r),cljs.core.constant$keyword$914.cljs$core$IFn$_invoke$arity$1(r)], null);return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,comps));
});
