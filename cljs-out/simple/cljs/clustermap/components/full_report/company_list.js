// Compiled by ClojureScript 0.0-2322
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
clustermap.components.full_report.company_list.render_many_links = (function render_many_links(link_fn,owner_path,type,objs){var first_obj = cljs.core.first.call(null,objs);var next_objs = cljs.core.next.call(null,objs);if(next_objs)
{var attrs29819 = link_fn.call(null,type,first_obj);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs29819))?sablono.interpreter.attributes.call(null,attrs29819):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29819))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.a({"href": owner_path},"\u00A0(more...)")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29819),React.DOM.a({"href": owner_path},"\u00A0(more...)")], null))));
} else
{return link_fn.call(null,type,first_obj);
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
{return null;

}
}
}
});
clustermap.components.full_report.company_list.portfolio_company = (function portfolio_company(company,owner,p__29828){var map__29841 = p__29828;var map__29841__$1 = ((cljs.core.seq_QMARK_.call(null,map__29841))?cljs.core.apply.call(null,cljs.core.hash_map,map__29841):map__29841);var opts = map__29841__$1;var path_fn = cljs.core.get.call(null,map__29841__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var link_fn = cljs.core.get.call(null,map__29841__$1,new cljs.core.Keyword(null,"link-fn","link-fn",-205760857));var company_path = path_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),company);if(typeof clustermap.components.full_report.company_list.t29842 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t29842 = (function (company_path,link_fn,path_fn,opts,map__29841,p__29828,owner,company,portfolio_company,meta29843){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__29841 = map__29841;
this.p__29828 = p__29828;
this.owner = owner;
this.company = company;
this.portfolio_company = portfolio_company;
this.meta29843 = meta29843;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t29842.cljs$lang$type = true;
clustermap.components.full_report.company_list.t29842.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t29842";
clustermap.components.full_report.company_list.t29842.cljs$lang$ctorPrWriter = ((function (company_path,map__29841,map__29841__$1,opts,path_fn,link_fn){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.full-report.company-list/t29842");
});})(company_path,map__29841,map__29841__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t29842.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t29842.prototype.om$core$IRender$render$arity$1 = ((function (company_path,map__29841,map__29841__$1,opts,path_fn,link_fn){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs29845 = self__.link_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),self__.company);return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs29845))?sablono.interpreter.attributes.call(null,attrs29845):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29845))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29845)], null))));
})(),(function (){var attrs29846 = clustermap.components.full_report.company_list.render_many_links.call(null,self__.link_fn,self__.company_path,new cljs.core.Keyword(null,"investor-company","investor-company",13706558),new cljs.core.Keyword(null,"investor_companies","investor_companies",493714407).cljs$core$IFn$_invoke$arity$1(self__.company));return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs29846))?sablono.interpreter.attributes.call(null,attrs29846):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29846))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29846)], null))));
})(),(function (){var attrs29847 = clustermap.components.full_report.company_list.render_many_links.call(null,self__.link_fn,self__.company_path,new cljs.core.Keyword(null,"constituency","constituency",1803637324),(function (){var G__29852 = self__.company;var G__29852__$1 = (((G__29852 == null))?null:new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708).cljs$core$IFn$_invoke$arity$1(G__29852));var G__29852__$2 = (((G__29852__$1 == null))?null:cljs.core.filter.call(null,((function (G__29852,G__29852__$1,this__9504__auto____$1,company_path,map__29841,map__29841__$1,opts,path_fn,link_fn){
return (function (bl){return cljs.core._EQ_.call(null,"uk_constituencies",new cljs.core.Keyword(null,"collection_id","collection_id",-1037933240).cljs$core$IFn$_invoke$arity$1(bl));
});})(G__29852,G__29852__$1,this__9504__auto____$1,company_path,map__29841,map__29841__$1,opts,path_fn,link_fn))
,G__29852__$1));return G__29852__$2;
})());return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs29847))?sablono.interpreter.attributes.call(null,attrs29847):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29847))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29847)], null))));
})(),(function (){var attrs29848 = clustermap.formats.money.fmoney.call(null,new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590).cljs$core$IFn$_invoke$arity$1(self__.company),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs29848))?sablono.interpreter.attributes.call(null,attrs29848):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29848))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,(function (){var or__3558__auto__ = clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",-1622918325).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "no info";
}
})()),")")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29848),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,(function (){var or__3558__auto__ = clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",-1622918325).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "no info";
}
})()),")")], null))));
})(),(function (){var attrs29849 = clustermap.components.full_report.company_list.pos_neg.call(null,new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",470467487).cljs$core$IFn$_invoke$arity$1(self__.company));return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs29849))?sablono.interpreter.attributes.call(null,attrs29849):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29849))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29849)], null))));
})(),(function (){var attrs29850 = clustermap.formats.money.fmoney.call(null,new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",470467487).cljs$core$IFn$_invoke$arity$1(self__.company),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs29850))?sablono.interpreter.attributes.call(null,attrs29850):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29850))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29850)], null))));
})(),(function (){var attrs29851 = clustermap.formats.number.fnum.call(null,new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",1463423589).cljs$core$IFn$_invoke$arity$1(self__.company),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs29851))?sablono.interpreter.attributes.call(null,attrs29851):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29851))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,(function (){var or__3558__auto__ = clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",-1622918325).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "no info";
}
})()),")")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29851),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,(function (){var or__3558__auto__ = clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",-1622918325).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "no info";
}
})()),")")], null))));
})());
});})(company_path,map__29841,map__29841__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t29842.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (company_path,map__29841,map__29841__$1,opts,path_fn,link_fn){
return (function (_29844){var self__ = this;
var _29844__$1 = this;return self__.meta29843;
});})(company_path,map__29841,map__29841__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t29842.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (company_path,map__29841,map__29841__$1,opts,path_fn,link_fn){
return (function (_29844,meta29843__$1){var self__ = this;
var _29844__$1 = this;return (new clustermap.components.full_report.company_list.t29842(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__29841,self__.p__29828,self__.owner,self__.company,self__.portfolio_company,meta29843__$1));
});})(company_path,map__29841,map__29841__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.__GT_t29842 = ((function (company_path,map__29841,map__29841__$1,opts,path_fn,link_fn){
return (function __GT_t29842(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__29841__$2,p__29828__$1,owner__$1,company__$1,portfolio_company__$1,meta29843){return (new clustermap.components.full_report.company_list.t29842(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__29841__$2,p__29828__$1,owner__$1,company__$1,portfolio_company__$1,meta29843));
});})(company_path,map__29841,map__29841__$1,opts,path_fn,link_fn))
;
}
return (new clustermap.components.full_report.company_list.t29842(company_path,link_fn,path_fn,opts,map__29841__$1,p__29828,owner,company,portfolio_company,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(companies,owner,opts){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",-1689770614));if(typeof clustermap.components.full_report.company_list.t29873 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t29873 = (function (comm,opts,owner,companies,company_list,meta29874){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.companies = companies;
this.company_list = company_list;
this.meta29874 = meta29874;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t29873.cljs$lang$type = true;
clustermap.components.full_report.company_list.t29873.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t29873";
clustermap.components.full_report.company_list.t29873.cljs$lang$ctorPrWriter = ((function (comm){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.full-report.company-list/t29873");
});})(comm))
;
clustermap.components.full_report.company_list.t29873.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t29873.prototype.om$core$IRender$render$arity$1 = ((function (comm){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;var attrs29876 = clustermap.components.table.paginate.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs29876))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs29876)):{"className": "full-report-list"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29876))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs29877 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193),"Investor-backed company",new cljs.core.Keyword(null,"name","name",1843675177));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs29877))?sablono.interpreter.attributes.call(null,attrs29877):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29877))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29877)], null))));
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs29882 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193),"Revenue",new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs29882))?sablono.interpreter.attributes.call(null,attrs29882):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29882))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29882)], null))));
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret.call(null,clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193),"Rev. change",new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",470467487)))),(function (){var attrs29883 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193),"Employees",new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",1463423589));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs29883))?sablono.interpreter.attributes.call(null,attrs29883):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29883))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29883)], null))));
})())),(function (){var attrs29884 = om.core.build_all.call(null,clustermap.components.full_report.company_list.portfolio_company,new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"company_no","company_no",1886326649),new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs29884))?sablono.interpreter.attributes.call(null,attrs29884):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29884))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29884)], null))));
})())),sablono.interpreter.interpret.call(null,clustermap.components.table.paginate.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29876),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs29885 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193),"Investor-backed company",new cljs.core.Keyword(null,"name","name",1843675177));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs29885))?sablono.interpreter.attributes.call(null,attrs29885):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29885))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29885)], null))));
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs29890 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193),"Revenue",new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs29890))?sablono.interpreter.attributes.call(null,attrs29890):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29890))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29890)], null))));
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret.call(null,clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193),"Rev. change",new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",470467487)))),(function (){var attrs29891 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193),"Employees",new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",1463423589));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs29891))?sablono.interpreter.attributes.call(null,attrs29891):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29891))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29891)], null))));
})())),(function (){var attrs29892 = om.core.build_all.call(null,clustermap.components.full_report.company_list.portfolio_company,new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"company_no","company_no",1886326649),new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs29892))?sablono.interpreter.attributes.call(null,attrs29892):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29892))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29892)], null))));
})())),sablono.interpreter.interpret.call(null,clustermap.components.table.paginate.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193)))], null))));
});})(comm))
;
clustermap.components.full_report.company_list.t29873.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm){
return (function (_29875){var self__ = this;
var _29875__$1 = this;return self__.meta29874;
});})(comm))
;
clustermap.components.full_report.company_list.t29873.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm){
return (function (_29875,meta29874__$1){var self__ = this;
var _29875__$1 = this;return (new clustermap.components.full_report.company_list.t29873(self__.comm,self__.opts,self__.owner,self__.companies,self__.company_list,meta29874__$1));
});})(comm))
;
clustermap.components.full_report.company_list.__GT_t29873 = ((function (comm){
return (function __GT_t29873(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta29874){return (new clustermap.components.full_report.company_list.t29873(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta29874));
});})(comm))
;
}
return (new clustermap.components.full_report.company_list.t29873(comm,opts,owner,companies,company_list,null));
});
