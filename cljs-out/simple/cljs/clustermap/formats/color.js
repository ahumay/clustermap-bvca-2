// Compiled by ClojureScript 0.0-2268
goog.provide('clustermap.formats.color');
goog.require('cljs.core');
clustermap.formats.color.rgb = (function rgb(col){var vec__26533 = col;var _ = cljs.core.nth.call(null,vec__26533,(0),null);var r1 = cljs.core.nth.call(null,vec__26533,(1),null);var r2 = cljs.core.nth.call(null,vec__26533,(2),null);var g1 = cljs.core.nth.call(null,vec__26533,(3),null);var g2 = cljs.core.nth.call(null,vec__26533,(4),null);var b1 = cljs.core.nth.call(null,vec__26533,(5),null);var b2 = cljs.core.nth.call(null,vec__26533,(6),null);var r = Number.parseInt((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(r1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(r2)),(16));var g = Number.parseInt((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(g1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(g2)),(16));var b = Number.parseInt((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b2)),(16));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null);
});
/**
* returns true if the color is lighter than #808080
*/
clustermap.formats.color.is_light_color_QMARK_ = (function is_light_color_QMARK_(col){var vec__26535 = clustermap.formats.color.rgb.call(null,col);var r = cljs.core.nth.call(null,vec__26535,(0),null);var g = cljs.core.nth.call(null,vec__26535,(1),null);var b = cljs.core.nth.call(null,vec__26535,(2),null);return (((r + g) + b) > ((128) * (3)));
});
clustermap.formats.color.stand_out_color = (function stand_out_color(col){var vec__26537 = clustermap.formats.color.rgb.call(null,col);var r = cljs.core.nth.call(null,vec__26537,(0),null);var g = cljs.core.nth.call(null,vec__26537,(1),null);var b = cljs.core.nth.call(null,vec__26537,(2),null);var lightness = Math.ceil(Math.pow(Math.E,(Math.log(((r * g) * b)) / 3.0)));var standout = ((255) - lightness);var hex = (((standout < (16)))?("0"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(standout.toString((16)))):standout.toString((16)));return ("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex));
});