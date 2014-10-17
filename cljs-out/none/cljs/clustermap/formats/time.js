// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.formats.time');
goog.require('cljs.core');
goog.require('cljs_time.coerce');
goog.require('cljs_time.coerce');
goog.require('cljs_time.format');
goog.require('cljs_time.format');
clustermap.formats.time.get_year = (function get_year(t){var G__21988 = t;var G__21988__$1 = (((G__21988 == null))?null:(new Date(G__21988)));var G__21988__$2 = (((G__21988__$1 == null))?null:G__21988__$1.getYear());var G__21988__$3 = (((G__21988__$2 == null))?null:(G__21988__$2 + (1900)));return G__21988__$3;
});
clustermap.formats.time.date_formatter = cljs_time.format.formatters.call(null,new cljs.core.Keyword(null,"date","date",-1463434462));
clustermap.formats.time.format_date = (function format_date(t){var G__21990 = t;var G__21990__$1 = (((G__21990 == null))?null:cljs_time.coerce.from_string.call(null,G__21990));var G__21990__$2 = (((G__21990__$1 == null))?null:cljs_time.format.unparse.call(null,clustermap.formats.time.date_formatter,G__21990__$1));return G__21990__$2;
});

//# sourceMappingURL=time.js.map