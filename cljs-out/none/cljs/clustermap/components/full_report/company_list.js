// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.full_report.company_list');
goog.require('cljs.core');
goog.require('clustermap.formats.time');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.time');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
clustermap.components.full_report.company_list.render_many_links = (function render_many_links(link_fn,owner_path,type,objs){var first_obj = cljs.core.first.call(null,objs);var next_objs = cljs.core.next.call(null,objs);if(next_objs)
{var attrs18556 = link_fn.call(null,type,first_obj);if(cljs.core.map_QMARK_.call(null,attrs18556))
{return React.DOM.div(sablono.interpreter.attributes.call(null,attrs18556),React.DOM.a({"href": owner_path},"\u00A0(",sablono.interpreter.interpret.call(null,cljs.core.count.call(null,next_objs))," more...)"));
} else
{return React.DOM.div(null,sablono.interpreter.interpret.call(null,attrs18556),React.DOM.a({"href": owner_path},"\u00A0(",sablono.interpreter.interpret.call(null,cljs.core.count.call(null,next_objs))," more...)"));
}
} else
{return link_fn.call(null,type,first_obj);
}
});
clustermap.components.full_report.company_list.pos_neg = (function pos_neg(value){if((value == null))
{return null;
} else
{if((value > 0))
{return React.DOM.i({"className": "icon-positive"});
} else
{if((value < 0))
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
clustermap.components.full_report.company_list.portfolio_company_site = (function portfolio_company_site(site,owner,p__18565){var map__18580 = p__18565;var map__18580__$1 = ((cljs.core.seq_QMARK_.call(null,map__18580))?cljs.core.apply.call(null,cljs.core.hash_map,map__18580):map__18580);var opts = map__18580__$1;var path_fn = cljs.core.get.call(null,map__18580__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var link_fn = cljs.core.get.call(null,map__18580__$1,new cljs.core.Keyword(null,"link-fn","link-fn",1190936301));var company_path = path_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),site);if(typeof clustermap.components.full_report.company_list.t18581 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t18581 = (function (company_path,link_fn,path_fn,opts,map__18580,p__18565,owner,site,portfolio_company_site,meta18582){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__18580 = map__18580;
this.p__18565 = p__18565;
this.owner = owner;
this.site = site;
this.portfolio_company_site = portfolio_company_site;
this.meta18582 = meta18582;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t18581.cljs$lang$type = true;
clustermap.components.full_report.company_list.t18581.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t18581";
clustermap.components.full_report.company_list.t18581.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report.company-list/t18581");
});
clustermap.components.full_report.company_list.t18581.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t18581.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs18584 = self__.link_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),self__.site);if(cljs.core.map_QMARK_.call(null,attrs18584))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs18584),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs18584));
}
})(),(function (){var attrs18585 = clustermap.components.full_report.company_list.render_many_links.call(null,self__.link_fn,self__.company_path,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_.call(null,attrs18585))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs18585),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs18585));
}
})(),(function (){var attrs18586 = clustermap.components.full_report.company_list.render_many_links.call(null,self__.link_fn,self__.company_path,new cljs.core.Keyword(null,"constituency","constituency",3902864696),(function (){var G__18593 = self__.site;var G__18593__$1 = (((G__18593 == null))?null:new cljs.core.Keyword(null,"boundarylines","boundarylines",2397299847).cljs$core$IFn$_invoke$arity$1(G__18593));var G__18593__$2 = (((G__18593__$1 == null))?null:cljs.core.filter.call(null,((function (G__18593,G__18593__$1){
return (function (bl){return cljs.core._EQ_.call(null,"uk_constituencies",new cljs.core.Keyword(null,"collection_id","collection_id",4487629262).cljs$core$IFn$_invoke$arity$1(bl));
});})(G__18593,G__18593__$1))
,G__18593__$1));return G__18593__$2;
})());if(cljs.core.map_QMARK_.call(null,attrs18586))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs18586),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs18586));
}
})(),(function (){var attrs18587 = clustermap.formats.money.fmoney.call(null,new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451).cljs$core$IFn$_invoke$arity$1(self__.site),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs18587))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs18587),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs18587),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
}
})(),(function (){var attrs18588 = clustermap.components.full_report.company_list.pos_neg.call(null,new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",4599982068).cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_.call(null,attrs18588))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs18588),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs18588));
}
})(),(function (){var attrs18589 = clustermap.formats.money.fmoney.call(null,new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",4599982068).cljs$core$IFn$_invoke$arity$1(self__.site),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs18589))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs18589),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs18589));
}
})(),(function (){var attrs18590 = clustermap.formats.number.fnum.call(null,new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408).cljs$core$IFn$_invoke$arity$1(self__.site),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs18590))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs18590),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs18590),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
}
})(),(function (){var attrs18591 = clustermap.components.full_report.company_list.pos_neg.call(null,new cljs.core.Keyword(null,"latest_employee_count_delta","latest_employee_count_delta",1082401185).cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_.call(null,attrs18591))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs18591),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs18591));
}
})(),(function (){var attrs18592 = clustermap.formats.number.fnum.call(null,new cljs.core.Keyword(null,"latest_employee_count_delta","latest_employee_count_delta",1082401185).cljs$core$IFn$_invoke$arity$1(self__.site),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs18592))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs18592),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs18592));
}
})());
});
clustermap.components.full_report.company_list.t18581.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18583){var self__ = this;
var _18583__$1 = this;return self__.meta18582;
});
clustermap.components.full_report.company_list.t18581.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18583,meta18582__$1){var self__ = this;
var _18583__$1 = this;return (new clustermap.components.full_report.company_list.t18581(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__18580,self__.p__18565,self__.owner,self__.site,self__.portfolio_company_site,meta18582__$1));
});
clustermap.components.full_report.company_list.__GT_t18581 = (function __GT_t18581(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__18580__$2,p__18565__$1,owner__$1,site__$1,portfolio_company_site__$1,meta18582){return (new clustermap.components.full_report.company_list.t18581(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__18580__$2,p__18565__$1,owner__$1,site__$1,portfolio_company_site__$1,meta18582));
});
}
return (new clustermap.components.full_report.company_list.t18581(company_path,link_fn,path_fn,opts,map__18580__$1,p__18565,owner,site,portfolio_company_site,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(selection_portfolio_company_sites,owner,opts){if(typeof clustermap.components.full_report.company_list.t18600 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t18600 = (function (opts,owner,selection_portfolio_company_sites,company_list,meta18601){
this.opts = opts;
this.owner = owner;
this.selection_portfolio_company_sites = selection_portfolio_company_sites;
this.company_list = company_list;
this.meta18601 = meta18601;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t18600.cljs$lang$type = true;
clustermap.components.full_report.company_list.t18600.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t18600";
clustermap.components.full_report.company_list.t18600.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report.company-list/t18600");
});
clustermap.components.full_report.company_list.t18600.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t18600.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div({"className": "full-report-list"},React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"Portfolio Company"),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),React.DOM.th(null,"Revenue"),React.DOM.th({"colSpan": "2"},"Rev. change"),React.DOM.th(null,"Employees"),React.DOM.th({"colSpan": "2"},"Emp. change"))),(function (){var attrs18605 = om.core.build_all.call(null,clustermap.components.full_report.company_list.portfolio_company_site,new cljs.core.Keyword(null,"records","records",2096501172).cljs$core$IFn$_invoke$arity$1(self__.selection_portfolio_company_sites),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"portfolio_company_id","portfolio_company_id",771436262),new cljs.core.Keyword(null,"opts","opts",1017322386),self__.opts], null));if(cljs.core.map_QMARK_.call(null,attrs18605))
{return React.DOM.tbody(sablono.interpreter.attributes.call(null,attrs18605),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret.call(null,attrs18605));
}
})())));
});
clustermap.components.full_report.company_list.t18600.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18602){var self__ = this;
var _18602__$1 = this;return self__.meta18601;
});
clustermap.components.full_report.company_list.t18600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18602,meta18601__$1){var self__ = this;
var _18602__$1 = this;return (new clustermap.components.full_report.company_list.t18600(self__.opts,self__.owner,self__.selection_portfolio_company_sites,self__.company_list,meta18601__$1));
});
clustermap.components.full_report.company_list.__GT_t18600 = (function __GT_t18600(opts__$1,owner__$1,selection_portfolio_company_sites__$1,company_list__$1,meta18601){return (new clustermap.components.full_report.company_list.t18600(opts__$1,owner__$1,selection_portfolio_company_sites__$1,company_list__$1,meta18601));
});
}
return (new clustermap.components.full_report.company_list.t18600(opts,owner,selection_portfolio_company_sites,company_list,null));
});

//# sourceMappingURL=company_list.js.map