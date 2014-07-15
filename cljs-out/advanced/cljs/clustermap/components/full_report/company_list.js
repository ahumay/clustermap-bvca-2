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
{var attrs34917 = (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs34917))?sablono.interpreter.attributes(attrs34917):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34917))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.a({"href": owner_path},"\u00A0(more...)")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34917),React.DOM.a({"href": owner_path},"\u00A0(more...)")], null))));
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
clustermap.components.full_report.company_list.portfolio_company = (function portfolio_company(company,owner,p__34926){var map__34939 = p__34926;var map__34939__$1 = ((cljs.core.seq_QMARK_(map__34939))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34939):map__34939);var opts = map__34939__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34939__$1,cljs.core.constant$keyword$764);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34939__$1,cljs.core.constant$keyword$765);var company_path = (path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$766,company) : path_fn.call(null,cljs.core.constant$keyword$766,company));if(typeof clustermap.components.full_report.company_list.t34940 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t34940 = (function (company_path,link_fn,path_fn,opts,map__34939,p__34926,owner,company,portfolio_company,meta34941){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__34939 = map__34939;
this.p__34926 = p__34926;
this.owner = owner;
this.company = company;
this.portfolio_company = portfolio_company;
this.meta34941 = meta34941;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t34940.cljs$lang$type = true;
clustermap.components.full_report.company_list.t34940.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t34940";
clustermap.components.full_report.company_list.t34940.cljs$lang$ctorPrWriter = ((function (company_path,map__34939,map__34939__$1,opts,path_fn,link_fn){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.full-report.company-list/t34940");
});})(company_path,map__34939,map__34939__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t34940.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t34940.prototype.om$core$IRender$render$arity$1 = ((function (company_path,map__34939,map__34939__$1,opts,path_fn,link_fn){
return (function (this__9438__auto__){var self__ = this;
var this__9438__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs34943 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$766,self__.company) : self__.link_fn.call(null,cljs.core.constant$keyword$766,self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs34943))?sablono.interpreter.attributes(attrs34943):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34943))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34943)], null))));
})(),(function (){var attrs34944 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$767,cljs.core.constant$keyword$768.cljs$core$IFn$_invoke$arity$1(self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs34944))?sablono.interpreter.attributes(attrs34944):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34944))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34944)], null))));
})(),(function (){var attrs34945 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$769,(function (){var G__34950 = self__.company;var G__34950__$1 = (((G__34950 == null))?null:cljs.core.constant$keyword$677.cljs$core$IFn$_invoke$arity$1(G__34950));var G__34950__$2 = (((G__34950__$1 == null))?null:cljs.core.filter(((function (G__34950,G__34950__$1,this__9438__auto____$1,company_path,map__34939,map__34939__$1,opts,path_fn,link_fn){
return (function (bl){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("uk_constituencies",cljs.core.constant$keyword$770.cljs$core$IFn$_invoke$arity$1(bl));
});})(G__34950,G__34950__$1,this__9438__auto____$1,company_path,map__34939,map__34939__$1,opts,path_fn,link_fn))
,G__34950__$1));return G__34950__$2;
})());return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs34945))?sablono.interpreter.attributes(attrs34945):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34945))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34945)], null))));
})(),(function (){var attrs34946 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$672.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$689,(2),cljs.core.constant$keyword$645,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$672.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$689,(2),cljs.core.constant$keyword$645,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs34946))?sablono.interpreter.attributes(attrs34946):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34946))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3543__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$771.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "no info";
}
})()),")")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34946),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3543__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$771.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "no info";
}
})()),")")], null))));
})(),(function (){var attrs34947 = clustermap.components.full_report.company_list.pos_neg(cljs.core.constant$keyword$772.cljs$core$IFn$_invoke$arity$1(self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs34947))?sablono.interpreter.attributes(attrs34947):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34947))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34947)], null))));
})(),(function (){var attrs34948 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$772.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$689,(2),cljs.core.constant$keyword$645,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$772.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$689,(2),cljs.core.constant$keyword$645,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs34948))?sablono.interpreter.attributes(attrs34948):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34948))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34948)], null))));
})(),(function (){var attrs34949 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$773.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$691,(0),cljs.core.constant$keyword$645,"-") : clustermap.formats.number.fnum.call(null,cljs.core.constant$keyword$773.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$691,(0),cljs.core.constant$keyword$645,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs34949))?sablono.interpreter.attributes(attrs34949):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34949))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3543__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$771.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "no info";
}
})()),")")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34949),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3543__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$771.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "no info";
}
})()),")")], null))));
})());
});})(company_path,map__34939,map__34939__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t34940.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (company_path,map__34939,map__34939__$1,opts,path_fn,link_fn){
return (function (_34942){var self__ = this;
var _34942__$1 = this;return self__.meta34941;
});})(company_path,map__34939,map__34939__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t34940.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (company_path,map__34939,map__34939__$1,opts,path_fn,link_fn){
return (function (_34942,meta34941__$1){var self__ = this;
var _34942__$1 = this;return (new clustermap.components.full_report.company_list.t34940(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__34939,self__.p__34926,self__.owner,self__.company,self__.portfolio_company,meta34941__$1));
});})(company_path,map__34939,map__34939__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.__GT_t34940 = ((function (company_path,map__34939,map__34939__$1,opts,path_fn,link_fn){
return (function __GT_t34940(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__34939__$2,p__34926__$1,owner__$1,company__$1,portfolio_company__$1,meta34941){return (new clustermap.components.full_report.company_list.t34940(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__34939__$2,p__34926__$1,owner__$1,company__$1,portfolio_company__$1,meta34941));
});})(company_path,map__34939,map__34939__$1,opts,path_fn,link_fn))
;
}
return (new clustermap.components.full_report.company_list.t34940(company_path,link_fn,path_fn,opts,map__34939__$1,p__34926,owner,company,portfolio_company,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(companies,owner,opts){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$774);if(typeof clustermap.components.full_report.company_list.t34971 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t34971 = (function (comm,opts,owner,companies,company_list,meta34972){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.companies = companies;
this.company_list = company_list;
this.meta34972 = meta34972;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t34971.cljs$lang$type = true;
clustermap.components.full_report.company_list.t34971.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t34971";
clustermap.components.full_report.company_list.t34971.cljs$lang$ctorPrWriter = ((function (comm){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.full-report.company-list/t34971");
});})(comm))
;
clustermap.components.full_report.company_list.t34971.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t34971.prototype.om$core$IRender$render$arity$1 = ((function (comm){
return (function (this__9438__auto__){var self__ = this;
var this__9438__auto____$1 = this;var attrs34974 = clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$775);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs34974))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$692,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs34974], 0))):{"className": "full-report-list"}),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34974))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs34975 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$775,"Investor-backed company",cljs.core.constant$keyword$710);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs34975))?sablono.interpreter.attributes(attrs34975):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34975))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34975)], null))));
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs34980 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$775,"Revenue",cljs.core.constant$keyword$672);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs34980))?sablono.interpreter.attributes(attrs34980):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34980))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34980)], null))));
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret(clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$775,"Rev. change",cljs.core.constant$keyword$772))),(function (){var attrs34981 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$775,"Employees",cljs.core.constant$keyword$773);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs34981))?sablono.interpreter.attributes(attrs34981):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34981))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34981)], null))));
})())),(function (){var attrs34982 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company,cljs.core.constant$keyword$776.cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$754,cljs.core.constant$keyword$777,cljs.core.constant$keyword$757,self__.opts], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs34982))?sablono.interpreter.attributes(attrs34982):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34982))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34982)], null))));
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$775))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34974),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs34983 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$775,"Investor-backed company",cljs.core.constant$keyword$710);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs34983))?sablono.interpreter.attributes(attrs34983):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34983))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34983)], null))));
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs34988 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$775,"Revenue",cljs.core.constant$keyword$672);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs34988))?sablono.interpreter.attributes(attrs34988):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34988))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34988)], null))));
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret(clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$775,"Rev. change",cljs.core.constant$keyword$772))),(function (){var attrs34989 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$775,"Employees",cljs.core.constant$keyword$773);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs34989))?sablono.interpreter.attributes(attrs34989):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34989))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34989)], null))));
})())),(function (){var attrs34990 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company,cljs.core.constant$keyword$776.cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$754,cljs.core.constant$keyword$777,cljs.core.constant$keyword$757,self__.opts], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs34990))?sablono.interpreter.attributes(attrs34990):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34990))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34990)], null))));
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$775))], null))));
});})(comm))
;
clustermap.components.full_report.company_list.t34971.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm){
return (function (_34973){var self__ = this;
var _34973__$1 = this;return self__.meta34972;
});})(comm))
;
clustermap.components.full_report.company_list.t34971.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm){
return (function (_34973,meta34972__$1){var self__ = this;
var _34973__$1 = this;return (new clustermap.components.full_report.company_list.t34971(self__.comm,self__.opts,self__.owner,self__.companies,self__.company_list,meta34972__$1));
});})(comm))
;
clustermap.components.full_report.company_list.__GT_t34971 = ((function (comm){
return (function __GT_t34971(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta34972){return (new clustermap.components.full_report.company_list.t34971(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta34972));
});})(comm))
;
}
return (new clustermap.components.full_report.company_list.t34971(comm,opts,owner,companies,company_list,null));
});
