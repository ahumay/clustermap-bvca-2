// Compiled by ClojureScript 0.0-2261
goog.provide('clustermap.ganalytics');
goog.require('cljs.core');
clustermap.ganalytics.send_pageview = (function send_pageview(path){var ua_code = (function (){var G__47521 = window;var G__47521__$1 = (((G__47521 == null))?null:G__47521.config);var G__47521__$2 = (((G__47521__$1 == null))?null:G__47521__$1.ua);var G__47521__$3 = (((G__47521__$2 == null))?null:G__47521__$2.code);return G__47521__$3;
})();if(cljs.core.truth_((function (){var and__3531__auto__ = window.ga;if(cljs.core.truth_(and__3531__auto__))
{return ua_code;
} else
{return and__3531__auto__;
}
})()))
{return ga("send","pageview",path);
} else
{return null;
}
});

//# sourceMappingURL=ganalytics.js.map