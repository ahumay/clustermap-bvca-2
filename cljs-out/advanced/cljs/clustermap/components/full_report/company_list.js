// Compiled by ClojureScript 0.0-2261
goog.provide('clustermap.components.full_report.company_list');
goog.require('cljs.core');
goog.require('clustermap.formats.time');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('clustermap.components.table');
goog.require('clustermap.components.table');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.time');
goog.require('clustermap.formats.money');
clustermap.components.full_report.company_list.render_many_links = (function render_many_links(link_fn,owner_path,type,objs){var first_obj = cljs.core.first(objs);var next_objs = cljs.core.next(objs);if(next_objs)
{var attrs36842 = (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs36842))?sablono.interpreter.attributes(attrs36842):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36842))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.a({"href": owner_path},"\u00A0(more...)")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36842),React.DOM.a({"href": owner_path},"\u00A0(more...)")], null))));
} else
{return (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));
}
});
clustermap.components.full_report.company_list.pos_neg = (function pos_neg(value){if((value == null))
{return null;
} else
{if((value > (0)))
{return React.DOM.i({"className": "icon-positive"});
} else
{if((value < (0)))
{return React.DOM.i({"className": "icon-negative"});
} else
{if(true)
{return null;
} else
{return null;
}
}
}
}
});
clustermap.components.full_report.company_list.portfolio_company = (function portfolio_company(company,owner,p__36851){var map__36864 = p__36851;var map__36864__$1 = ((cljs.core.seq_QMARK_(map__36864))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36864):map__36864);var opts = map__36864__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36864__$1,cljs.core.constant$keyword$884);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36864__$1,cljs.core.constant$keyword$885);var company_path = (path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$886,company) : path_fn.call(null,cljs.core.constant$keyword$886,company));if(typeof clustermap.components.full_report.company_list.t36865 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t36865 = (function (company_path,link_fn,path_fn,opts,map__36864,p__36851,owner,company,portfolio_company,meta36866){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__36864 = map__36864;
this.p__36851 = p__36851;
this.owner = owner;
this.company = company;
this.portfolio_company = portfolio_company;
this.meta36866 = meta36866;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t36865.cljs$lang$type = true;
clustermap.components.full_report.company_list.t36865.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t36865";
clustermap.components.full_report.company_list.t36865.cljs$lang$ctorPrWriter = ((function (company_path,map__36864,map__36864__$1,opts,path_fn,link_fn){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.full-report.company-list/t36865");
});})(company_path,map__36864,map__36864__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t36865.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t36865.prototype.om$core$IRender$render$arity$1 = ((function (company_path,map__36864,map__36864__$1,opts,path_fn,link_fn){
return (function (this__9454__auto__){var self__ = this;
var this__9454__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs36868 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$886,self__.company) : self__.link_fn.call(null,cljs.core.constant$keyword$886,self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs36868))?sablono.interpreter.attributes(attrs36868):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36868))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36868)], null))));
})(),(function (){var attrs36869 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$887,cljs.core.constant$keyword$888.cljs$core$IFn$_invoke$arity$1(self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs36869))?sablono.interpreter.attributes(attrs36869):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36869))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36869)], null))));
})(),(function (){var attrs36870 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$889,(function (){var G__36875 = self__.company;var G__36875__$1 = (((G__36875 == null))?null:cljs.core.constant$keyword$799.cljs$core$IFn$_invoke$arity$1(G__36875));var G__36875__$2 = (((G__36875__$1 == null))?null:cljs.core.filter(((function (G__36875,G__36875__$1,this__9454__auto____$1,company_path,map__36864,map__36864__$1,opts,path_fn,link_fn){
return (function (bl){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("uk_constituencies",cljs.core.constant$keyword$890.cljs$core$IFn$_invoke$arity$1(bl));
});})(G__36875,G__36875__$1,this__9454__auto____$1,company_path,map__36864,map__36864__$1,opts,path_fn,link_fn))
,G__36875__$1));return G__36875__$2;
})());return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs36870))?sablono.interpreter.attributes(attrs36870):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36870))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36870)], null))));
})(),(function (){var attrs36871 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$793.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$811,(2),cljs.core.constant$keyword$763,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$793.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$811,(2),cljs.core.constant$keyword$763,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs36871))?sablono.interpreter.attributes(attrs36871):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36871))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3543__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$891.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "no info";
}
})()),")")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36871),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3543__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$891.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "no info";
}
})()),")")], null))));
})(),(function (){var attrs36872 = clustermap.components.full_report.company_list.pos_neg(cljs.core.constant$keyword$892.cljs$core$IFn$_invoke$arity$1(self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs36872))?sablono.interpreter.attributes(attrs36872):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36872))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36872)], null))));
})(),(function (){var attrs36873 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$892.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$811,(2),cljs.core.constant$keyword$763,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$892.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$811,(2),cljs.core.constant$keyword$763,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs36873))?sablono.interpreter.attributes(attrs36873):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36873))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36873)], null))));
})(),(function (){var attrs36874 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$893.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$813,(0),cljs.core.constant$keyword$763,"-") : clustermap.formats.number.fnum.call(null,cljs.core.constant$keyword$893.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$813,(0),cljs.core.constant$keyword$763,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs36874))?sablono.interpreter.attributes(attrs36874):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36874))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3543__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$891.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "no info";
}
})()),")")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36874),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3543__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$891.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "no info";
}
})()),")")], null))));
})());
});})(company_path,map__36864,map__36864__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t36865.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (company_path,map__36864,map__36864__$1,opts,path_fn,link_fn){
return (function (_36867){var self__ = this;
var _36867__$1 = this;return self__.meta36866;
});})(company_path,map__36864,map__36864__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t36865.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (company_path,map__36864,map__36864__$1,opts,path_fn,link_fn){
return (function (_36867,meta36866__$1){var self__ = this;
var _36867__$1 = this;return (new clustermap.components.full_report.company_list.t36865(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__36864,self__.p__36851,self__.owner,self__.company,self__.portfolio_company,meta36866__$1));
});})(company_path,map__36864,map__36864__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.__GT_t36865 = ((function (company_path,map__36864,map__36864__$1,opts,path_fn,link_fn){
return (function __GT_t36865(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__36864__$2,p__36851__$1,owner__$1,company__$1,portfolio_company__$1,meta36866){return (new clustermap.components.full_report.company_list.t36865(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__36864__$2,p__36851__$1,owner__$1,company__$1,portfolio_company__$1,meta36866));
});})(company_path,map__36864,map__36864__$1,opts,path_fn,link_fn))
;
}
return (new clustermap.components.full_report.company_list.t36865(company_path,link_fn,path_fn,opts,map__36864__$1,p__36851,owner,company,portfolio_company,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(companies,owner,opts){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$894);if(typeof clustermap.components.full_report.company_list.t36896 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t36896 = (function (comm,opts,owner,companies,company_list,meta36897){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.companies = companies;
this.company_list = company_list;
this.meta36897 = meta36897;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t36896.cljs$lang$type = true;
clustermap.components.full_report.company_list.t36896.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t36896";
clustermap.components.full_report.company_list.t36896.cljs$lang$ctorPrWriter = ((function (comm){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.full-report.company-list/t36896");
});})(comm))
;
clustermap.components.full_report.company_list.t36896.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t36896.prototype.om$core$IRender$render$arity$1 = ((function (comm){
return (function (this__9454__auto__){var self__ = this;
var this__9454__auto____$1 = this;var attrs36899 = clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$895);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs36899))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$814,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs36899], 0))):{"className": "full-report-list"}),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36899))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs36900 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$895,"Investor-backed company",cljs.core.constant$keyword$831);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs36900))?sablono.interpreter.attributes(attrs36900):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36900))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36900)], null))));
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs36905 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$895,"Revenue",cljs.core.constant$keyword$793);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs36905))?sablono.interpreter.attributes(attrs36905):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36905))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36905)], null))));
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret(clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$895,"Rev. change",cljs.core.constant$keyword$892))),(function (){var attrs36906 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$895,"Employees",cljs.core.constant$keyword$893);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs36906))?sablono.interpreter.attributes(attrs36906):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36906))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36906)], null))));
})())),(function (){var attrs36907 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company,cljs.core.constant$keyword$896.cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$874,cljs.core.constant$keyword$897,cljs.core.constant$keyword$877,self__.opts], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs36907))?sablono.interpreter.attributes(attrs36907):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36907))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36907)], null))));
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$895))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36899),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs36908 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$895,"Investor-backed company",cljs.core.constant$keyword$831);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs36908))?sablono.interpreter.attributes(attrs36908):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36908))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36908)], null))));
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs36913 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$895,"Revenue",cljs.core.constant$keyword$793);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs36913))?sablono.interpreter.attributes(attrs36913):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36913))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36913)], null))));
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret(clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$895,"Rev. change",cljs.core.constant$keyword$892))),(function (){var attrs36914 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$895,"Employees",cljs.core.constant$keyword$893);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs36914))?sablono.interpreter.attributes(attrs36914):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36914))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36914)], null))));
})())),(function (){var attrs36915 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company,cljs.core.constant$keyword$896.cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$874,cljs.core.constant$keyword$897,cljs.core.constant$keyword$877,self__.opts], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs36915))?sablono.interpreter.attributes(attrs36915):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36915))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36915)], null))));
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$895))], null))));
});})(comm))
;
clustermap.components.full_report.company_list.t36896.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm){
return (function (_36898){var self__ = this;
var _36898__$1 = this;return self__.meta36897;
});})(comm))
;
clustermap.components.full_report.company_list.t36896.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm){
return (function (_36898,meta36897__$1){var self__ = this;
var _36898__$1 = this;return (new clustermap.components.full_report.company_list.t36896(self__.comm,self__.opts,self__.owner,self__.companies,self__.company_list,meta36897__$1));
});})(comm))
;
clustermap.components.full_report.company_list.__GT_t36896 = ((function (comm){
return (function __GT_t36896(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta36897){return (new clustermap.components.full_report.company_list.t36896(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta36897));
});})(comm))
;
}
return (new clustermap.components.full_report.company_list.t36896(comm,opts,owner,companies,company_list,null));
});
