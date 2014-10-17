// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.components.map');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('cljs.core.async');
goog.require('clustermap.boundarylines');
goog.require('clustermap.data.colorchooser');
goog.require('clojure.set');
goog.require('om.dom');
goog.require('hiccups.runtime');
goog.require('sablono.core');
goog.require('om.dom');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('clojure.set');
goog.require('clustermap.ordered_resource');
goog.require('clustermap.boundarylines');
goog.require('jayq.core');
goog.require('clustermap.data.colorchooser');
goog.require('om.core');
goog.require('om.core');
goog.require('hiccups.runtime');
goog.require('clustermap.api');
goog.require('clustermap.ordered_resource');
clustermap.components.map.ticket = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));
clustermap.components.map.next_ticket = (function next_ticket(){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(clustermap.components.map.ticket,cljs.core.inc);
});
/**
* convert a Leaflet LatLngBounds object into nested-array form
*/
clustermap.components.map.bounds_array = (function bounds_array(bounds){if((bounds instanceof L.LatLngBounds))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bounds.getSouth(),bounds.getWest()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bounds.getNorth(),bounds.getEast()], null)], null);
} else
{return bounds;
}
});
/**
* return a single LatLngBounds object containing all
* given latlongs
*/
clustermap.components.map.geojson_point_bounds = (function geojson_point_bounds(longlats){var s = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,longlats));var w = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,longlats));var n = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,longlats));var e = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,longlats));if(cljs.core.truth_((function (){var and__3546__auto__ = s;if(cljs.core.truth_(and__3546__auto__))
{var and__3546__auto____$1 = w;if(cljs.core.truth_(and__3546__auto____$1))
{var and__3546__auto____$2 = n;if(cljs.core.truth_(and__3546__auto____$2))
{return e;
} else
{return and__3546__auto____$2;
}
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
}
})()))
{return L.latLngBounds(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,w], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,e], null)], null)));
} else
{return null;
}
});
clustermap.components.map.locate_map = (function locate_map(m,initial_bounds){return m.fitBounds(cljs.core.clj__GT_js(initial_bounds),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, ["paddingTopLeft",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),"paddingBottomRight",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null)));
});
clustermap.components.map.api_key = (function (){var or__3558__auto__ = (function (){var G__46774 = config;var G__46774__$1 = (((G__46774 == null))?null:G__46774.components);var G__46774__$2 = (((G__46774__$1 == null))?null:G__46774__$1.map);var G__46774__$3 = (((G__46774__$2 == null))?null:G__46774__$2.api_key);return G__46774__$3;
})();if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "mccraigmccraig.h4f921b9";
}
})();
clustermap.components.map.create_map = (function create_map(id_or_el,initial_bounds){var m = L.map.call(null,id_or_el,{"maxZoom": (19), "zoomControl": false});var tiles = L.mapbox.tileLayer.call(null,clustermap.components.map.api_key,{"detectRetina": cljs.core.not(config.repl)});var zoom = L.control.zoom.call(null,{"position": "bottomright"});m.addLayer(tiles);
m.addControl(zoom);
clustermap.components.map.locate_map(m,initial_bounds);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1527,m,cljs.core.constant$keyword$1528,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY) : cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)),cljs.core.constant$keyword$1512,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY) : cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)),cljs.core.constant$keyword$1529,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY) : cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY))], null);
});
/**
* @param {...*} var_args
*/
clustermap.components.map.pan_to_show = (function() { 
var pan_to_show__delegate = function (m,all_bounds){if(cljs.core.truth_(cljs.core.not_empty(all_bounds)))
{var fb = cljs.core.first(all_bounds);var fb_copy = (new L.LatLngBounds(fb.getSouthWest(),fb.getNorthEast()));var super_bounds = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fb,fb_copy){
return (function (sb,bounds){return sb.extend(bounds);
});})(fb,fb_copy))
,fb_copy,cljs.core.rest(all_bounds));return m.fitBounds(super_bounds);
} else
{return null;
}
};
var pan_to_show = function (m,var_args){
var all_bounds = null;if (arguments.length > 1) {
  all_bounds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return pan_to_show__delegate.call(this,m,all_bounds);};
pan_to_show.cljs$lang$maxFixedArity = 1;
pan_to_show.cljs$lang$applyTo = (function (arglist__46775){
var m = cljs.core.first(arglist__46775);
var all_bounds = cljs.core.rest(arglist__46775);
return pan_to_show__delegate(m,all_bounds);
});
pan_to_show.cljs$core$IFn$_invoke$arity$variadic = pan_to_show__delegate;
return pan_to_show;
})()
;
clustermap.components.map.marker_popup_content = (function marker_popup_content(path_fn,location_sites){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs46777 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (site){return ("<li><a"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1215,(path_fn.cljs$core$IFn$_invoke$arity$3 ? path_fn.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$1169,cljs.core.constant$keyword$1376,site) : path_fn.call(null,cljs.core.constant$keyword$1169,cljs.core.constant$keyword$1376,site)),cljs.core.constant$keyword$1137,null,cljs.core.constant$keyword$1207,null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(cljs.core.constant$keyword$1156.cljs$core$IFn$_invoke$arity$1(site)))+"</a></li>");
}),location_sites);if(cljs.core.map_QMARK_(attrs46777))
{return ("<ul"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1137,null,cljs.core.constant$keyword$1207,"map-marker-popup-location-list"], null),attrs46777], 0))))+"></ul>");
} else
{return ("<ul class=\"map-marker-popup-location-list\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(attrs46777))+"</ul>");
}
})()));
});
clustermap.components.map.create_marker = (function create_marker(path_fn,leaflet_map,location_sites){var temp__4124__auto__ = (function (){var G__46780 = location_sites;var G__46780__$1 = (((G__46780 == null))?null:cljs.core.first(G__46780));var G__46780__$2 = (((G__46780__$1 == null))?null:cljs.core.constant$keyword$1530.cljs$core$IFn$_invoke$arity$1(G__46780__$1));var G__46780__$3 = (((G__46780__$2 == null))?null:cljs.core.reverse(G__46780__$2));var G__46780__$4 = (((G__46780__$3 == null))?null:cljs.core.clj__GT_js(G__46780__$3));return G__46780__$4;
})();if(cljs.core.truth_(temp__4124__auto__))
{var latlong = temp__4124__auto__;var icon = L.divIcon(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1209,"map-marker",cljs.core.constant$keyword$1531,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(28)], null),cljs.core.constant$keyword$1532,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(14)], null),cljs.core.constant$keyword$1533,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null)], null)));var marker = L.marker(latlong,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1534,icon], null)));var popup_content = clustermap.components.map.marker_popup_content(path_fn,location_sites);marker.bindPopup(popup_content);
marker.addTo(leaflet_map);
return marker;
} else
{return console.log(("missing location: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4485__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_46781_46782 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_46781_46782,sb__4485__auto__,temp__4124__auto__){
return (function (x__4486__auto__){return sb__4485__auto__.append(x__4486__auto__);
});})(_STAR_print_fn_STAR_46781_46782,sb__4485__auto__,temp__4124__auto__))
;
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([location_sites], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_46781_46782;
}return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4485__auto__));
})())));
}
});
clustermap.components.map.update_marker = (function update_marker(path_fn,leaflet_map,marker,location){marker.setPopupContent(clustermap.components.map.marker_popup_content(path_fn,location));
return marker;
});
clustermap.components.map.remove_marker = (function remove_marker(leaflet_map,marker){return leaflet_map.removeLayer(marker);
});
clustermap.components.map.update_markers = (function update_markers(path_fn,leaflet_map,markers_atom,new_locations){var markers = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(markers_atom) : cljs.core.deref.call(null,markers_atom));var marker_keys = cljs.core.set(cljs.core.keys(markers));var location_keys = cljs.core.set(cljs.core.keys(new_locations));var _ = console.log(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(location_keys),location_keys], null)));var update_marker_keys = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(marker_keys,location_keys);var new_marker_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(location_keys,marker_keys);var remove_marker_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(marker_keys,location_keys);var new_markers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (markers,marker_keys,location_keys,_,update_marker_keys,new_marker_keys,remove_marker_keys){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_marker(path_fn,leaflet_map,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_locations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.constant$keyword$1387], null)))], null);
});})(markers,marker_keys,location_keys,_,update_marker_keys,new_marker_keys,remove_marker_keys))
,new_marker_keys));var updated_markers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (markers,marker_keys,location_keys,_,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_marker(path_fn,leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_locations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.constant$keyword$1387], null)))], null);
});})(markers,marker_keys,location_keys,_,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers))
,update_marker_keys));var ___$1 = (function (){var seq__46787 = cljs.core.seq(remove_marker_keys);var chunk__46788 = null;var count__46789 = (0);var i__46790 = (0);while(true){
if((i__46790 < count__46789))
{var k = chunk__46788.cljs$core$IIndexed$_nth$arity$2(null,i__46790);clustermap.components.map.remove_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k));
{
var G__46791 = seq__46787;
var G__46792 = chunk__46788;
var G__46793 = count__46789;
var G__46794 = (i__46790 + (1));
seq__46787 = G__46791;
chunk__46788 = G__46792;
count__46789 = G__46793;
i__46790 = G__46794;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__46787);if(temp__4126__auto__)
{var seq__46787__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__46787__$1))
{var c__4314__auto__ = cljs.core.chunk_first(seq__46787__$1);{
var G__46795 = cljs.core.chunk_rest(seq__46787__$1);
var G__46796 = c__4314__auto__;
var G__46797 = cljs.core.count(c__4314__auto__);
var G__46798 = (0);
seq__46787 = G__46795;
chunk__46788 = G__46796;
count__46789 = G__46797;
i__46790 = G__46798;
continue;
}
} else
{var k = cljs.core.first(seq__46787__$1);clustermap.components.map.remove_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k));
{
var G__46799 = cljs.core.next(seq__46787__$1);
var G__46800 = null;
var G__46801 = (0);
var G__46802 = (0);
seq__46787 = G__46799;
chunk__46788 = G__46800;
count__46789 = G__46801;
i__46790 = G__46802;
continue;
}
}
} else
{return null;
}
}
break;
}
})();return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(markers_atom,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([updated_markers,new_markers], 0))) : cljs.core.reset_BANG_.call(null,markers_atom,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([updated_markers,new_markers], 0))));
});
/**
* turns a PostGIS envelope into a L.LatLngBounds
*/
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__46811 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(envelope);var map__46811__$1 = ((cljs.core.seq_QMARK_(map__46811))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46811):map__46811);var clj_envelope = map__46811__$1;var vec__46812 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46811__$1,"coordinates");var vec__46813 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46812,(0),null);var vec__46814 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46813,(0),null);var miny0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46814,(0),null);var minx0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46814,(1),null);var vec__46815 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46813,(1),null);var maxy1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46815,(0),null);var minx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46815,(1),null);var vec__46816 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46813,(2),null);var maxy2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46816,(0),null);var maxx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46816,(1),null);var vec__46817 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46813,(3),null);var miny3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46817,(0),null);var maxx3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46817,(1),null);var vec__46818 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46813,(4),null);var miny4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46818,(0),null);var minx4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46818,(1),null);var inner = vec__46813;var coords = vec__46812;return L.latLngBounds(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null)));
});
clustermap.components.map.style_leaflet_path = (function style_leaflet_path(leaflet_path,p__46819){var map__46821 = p__46819;var map__46821__$1 = ((cljs.core.seq_QMARK_(map__46821))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46821):map__46821);var fill_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46821__$1,cljs.core.constant$keyword$1535);var highlighted = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46821__$1,cljs.core.constant$keyword$1536);var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46821__$1,cljs.core.constant$keyword$1227);if(cljs.core.truth_((function (){var and__3546__auto__ = selected;if(cljs.core.truth_(and__3546__auto__))
{return highlighted;
} else
{return and__3546__auto__;
}
})()))
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1537,"#000000",cljs.core.constant$keyword$1538,fill_color,cljs.core.constant$keyword$1539,(2),cljs.core.constant$keyword$1540,(1),cljs.core.constant$keyword$1541,true,cljs.core.constant$keyword$1542,0.6], null)));
} else
{if(cljs.core.truth_(selected))
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1537,"#8c2d04",cljs.core.constant$keyword$1538,fill_color,cljs.core.constant$keyword$1539,(1),cljs.core.constant$keyword$1540,(1),cljs.core.constant$keyword$1541,true,cljs.core.constant$keyword$1542,0.6], null)));
} else
{if(cljs.core.truth_(highlighted))
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1537,"#000000",cljs.core.constant$keyword$1538,fill_color,cljs.core.constant$keyword$1539,(2),cljs.core.constant$keyword$1540,(1),cljs.core.constant$keyword$1541,false], null)));
} else
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1537,"#8c2d04",cljs.core.constant$keyword$1538,fill_color,cljs.core.constant$keyword$1539,(1),cljs.core.constant$keyword$1540,(0),cljs.core.constant$keyword$1541,false,cljs.core.constant$keyword$1542,(0)], null)));

}
}
}
});
clustermap.components.map.create_path = (function create_path(comm,leaflet_map,boundaryline_id,js_boundaryline,p__46822){var map__46824 = p__46822;var map__46824__$1 = ((cljs.core.seq_QMARK_(map__46824))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46824):map__46824);var path_attrs = map__46824__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46824__$1,cljs.core.constant$keyword$1227);var tolerance = (js_boundaryline["tolerance"]);var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds((js_boundaryline["envelope"]));var leaflet_path = L.geoJson((js_boundaryline["geojson"]));clustermap.components.map.style_leaflet_path(leaflet_path,path_attrs);
leaflet_path.addTo(leaflet_map);
leaflet_path.on("click",((function (tolerance,bounds,leaflet_path,map__46824,map__46824__$1,path_attrs,selected){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1229,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1379,boundaryline_id], null)], null));
});})(tolerance,bounds,leaflet_path,map__46824,map__46824__$1,path_attrs,selected))
);
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1137,boundaryline_id,cljs.core.constant$keyword$1112,tolerance,cljs.core.constant$keyword$1227,selected,cljs.core.constant$keyword$1543,leaflet_path,cljs.core.constant$keyword$1114,bounds], null);
});
/**
* create leaflet paths for every boundaryline in boundaryline-index
*/
clustermap.components.map.fetch_create_path = (function fetch_create_path(comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs){return clustermap.components.map.create_path(comm,leaflet_map,boundaryline_id,js_boundaryline,path_attrs);
});
clustermap.components.map.replace_path = (function replace_path(comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs){leaflet_map.removeLayer(cljs.core.constant$keyword$1543.cljs$core$IFn$_invoke$arity$1(old_path));
return clustermap.components.map.create_path(comm,leaflet_map,cljs.core.constant$keyword$1137.cljs$core$IFn$_invoke$arity$1(old_path),js_boundaryline,path_attrs);
});
/**
* update a Leaflet path for a boundaryline
*/
clustermap.components.map.update_path = (function update_path(comm,leaflet_map,p__46825,tolerance,js_boundaryline,path_attrs){var map__46827 = p__46825;var map__46827__$1 = ((cljs.core.seq_QMARK_(map__46827))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46827):map__46827);var path = map__46827__$1;var boundaryline_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46827__$1,cljs.core.constant$keyword$1137);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tolerance,cljs.core.constant$keyword$1112.cljs$core$IFn$_invoke$arity$1(path)))
{return clustermap.components.map.replace_path(comm,leaflet_map,boundaryline_id,path,js_boundaryline,path_attrs);
} else
{clustermap.components.map.style_leaflet_path(cljs.core.constant$keyword$1543.cljs$core$IFn$_invoke$arity$1(path),path_attrs);
return path;
}
});
clustermap.components.map.delete_path = (function delete_path(leaflet_map,path){return leaflet_map.removeLayer(cljs.core.constant$keyword$1543.cljs$core$IFn$_invoke$arity$1(path));
});
clustermap.components.map.update_paths = (function update_paths(comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths){var paths = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(paths_atom) : cljs.core.deref.call(null,paths_atom));var path_keys = cljs.core.set(cljs.core.keys(paths));var old_selection_path_keys = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(path_selections_atom) : cljs.core.deref.call(null,path_selections_atom));var new_selection_path_keys = cljs.core.set(cljs.core.keys(new_selection_paths));var live_path_keys = clojure.set.union.cljs$core$IFn$_invoke$arity$2(new_selection_path_keys,new_path_highlights);var create_path_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(live_path_keys,path_keys);var delete_path_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(path_keys,live_path_keys);var update_path_keys = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(path_keys,live_path_keys);var _ = console.log(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1544,create_path_keys,cljs.core.constant$keyword$1545,delete_path_keys,cljs.core.constant$keyword$1546,update_path_keys], null)));var vec__46841 = (fetch_boundarylines_fn.cljs$core$IFn$_invoke$arity$4 ? fetch_boundarylines_fn.cljs$core$IFn$_invoke$arity$4(clustermap.components.map.bounds_array(leaflet_map.getBounds()),leaflet_map.getZoom(),cljs.core.constant$keyword$1113,live_path_keys) : fetch_boundarylines_fn.call(null,clustermap.components.map.bounds_array(leaflet_map.getBounds()),leaflet_map.getZoom(),cljs.core.constant$keyword$1113,live_path_keys));var tolerance_paths = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46841,(0),null);var notifychan = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46841,(1),null);var created_paths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__46841,tolerance_paths,notifychan){
return (function (p__46842){var vec__46843 = p__46842;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46843,(0),null);var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46843,(1),null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46843,(2),null);return clustermap.components.map.fetch_create_path(comm,leaflet_map,k,tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1227,cljs.core.contains_QMARK_(new_selection_path_keys,k),cljs.core.constant$keyword$1535,(new_selection_paths.cljs$core$IFn$_invoke$arity$1 ? new_selection_paths.cljs$core$IFn$_invoke$arity$1(k) : new_selection_paths.call(null,k)),cljs.core.constant$keyword$1536,cljs.core.contains_QMARK_(new_path_highlights,k)], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__46841,tolerance_paths,notifychan))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__46841,tolerance_paths,notifychan){
return (function (k){var vec__46844 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tolerance_paths,k);var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46844,(0),null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46844,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = k;if(cljs.core.truth_(and__3546__auto__))
{var and__3546__auto____$1 = tolerance;if(cljs.core.truth_(and__3546__auto____$1))
{return js_boundaryline;
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,tolerance,js_boundaryline], null);
} else
{return null;
}
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__46841,tolerance_paths,notifychan))
,create_path_keys)));var updated_paths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__46841,tolerance_paths,notifychan,created_paths){
return (function (p__46845){var vec__46846 = p__46845;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46846,(0),null);var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46846,(1),null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46846,(2),null);return clustermap.components.map.update_path(comm,leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k),tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1227,cljs.core.contains_QMARK_(new_selection_path_keys,k),cljs.core.constant$keyword$1535,(new_selection_paths.cljs$core$IFn$_invoke$arity$1 ? new_selection_paths.cljs$core$IFn$_invoke$arity$1(k) : new_selection_paths.call(null,k)),cljs.core.constant$keyword$1536,cljs.core.contains_QMARK_(new_path_highlights,k)], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__46841,tolerance_paths,notifychan,created_paths))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__46841,tolerance_paths,notifychan,created_paths){
return (function (k){var vec__46847 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tolerance_paths,k);var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46847,(0),null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46847,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = k;if(cljs.core.truth_(and__3546__auto__))
{var and__3546__auto____$1 = tolerance;if(cljs.core.truth_(and__3546__auto____$1))
{return js_boundaryline;
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,tolerance,js_boundaryline], null);
} else
{return null;
}
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__46841,tolerance_paths,notifychan,created_paths))
,update_path_keys)));var ___$1 = (function (){var seq__46848 = cljs.core.seq(delete_path_keys);var chunk__46849 = null;var count__46850 = (0);var i__46851 = (0);while(true){
if((i__46851 < count__46850))
{var k = chunk__46849.cljs$core$IIndexed$_nth$arity$2(null,i__46851);var temp__4124__auto___46854 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k);if(cljs.core.truth_(temp__4124__auto___46854))
{var path_46855 = temp__4124__auto___46854;clustermap.components.map.delete_path(leaflet_map,path_46855);
} else
{}
{
var G__46856 = seq__46848;
var G__46857 = chunk__46849;
var G__46858 = count__46850;
var G__46859 = (i__46851 + (1));
seq__46848 = G__46856;
chunk__46849 = G__46857;
count__46850 = G__46858;
i__46851 = G__46859;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__46848);if(temp__4126__auto__)
{var seq__46848__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__46848__$1))
{var c__4314__auto__ = cljs.core.chunk_first(seq__46848__$1);{
var G__46860 = cljs.core.chunk_rest(seq__46848__$1);
var G__46861 = c__4314__auto__;
var G__46862 = cljs.core.count(c__4314__auto__);
var G__46863 = (0);
seq__46848 = G__46860;
chunk__46849 = G__46861;
count__46850 = G__46862;
i__46851 = G__46863;
continue;
}
} else
{var k = cljs.core.first(seq__46848__$1);var temp__4124__auto___46864 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k);if(cljs.core.truth_(temp__4124__auto___46864))
{var path_46865 = temp__4124__auto___46864;clustermap.components.map.delete_path(leaflet_map,path_46865);
} else
{}
{
var G__46866 = cljs.core.next(seq__46848__$1);
var G__46867 = null;
var G__46868 = (0);
var G__46869 = (0);
seq__46848 = G__46866;
chunk__46849 = G__46867;
count__46850 = G__46868;
i__46851 = G__46869;
continue;
}
}
} else
{return null;
}
}
break;
}
})();var new_paths = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__46841,tolerance_paths,notifychan,created_paths,updated_paths,___$1){
return (function (m,p__46852){var map__46853 = p__46852;var map__46853__$1 = ((cljs.core.seq_QMARK_(map__46853))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46853):map__46853);var path = map__46853__$1;var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46853__$1,cljs.core.constant$keyword$1137);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,id,path);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__46841,tolerance_paths,notifychan,created_paths,updated_paths,___$1))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(created_paths,updated_paths)));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(path_selections_atom,new_selection_path_keys) : cljs.core.reset_BANG_.call(null,path_selections_atom,new_selection_path_keys));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(paths_atom,new_paths) : cljs.core.reset_BANG_.call(null,paths_atom,new_paths));
return notifychan;
});
clustermap.components.map.constituency_marker_popup_content = (function constituency_marker_popup_content(path_fn,constituency){var bl_id = cljs.core.constant$keyword$1137.cljs$core$IFn$_invoke$arity$1(constituency);var bl_name = cljs.core.constant$keyword$1139.cljs$core$IFn$_invoke$arity$1(constituency);return ("<a"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1215,(path_fn.cljs$core$IFn$_invoke$arity$3 ? path_fn.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$1169,cljs.core.constant$keyword$1379,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1138,bl_id,cljs.core.constant$keyword$1139,bl_name], null)) : path_fn.call(null,cljs.core.constant$keyword$1169,cljs.core.constant$keyword$1379,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1138,bl_id,cljs.core.constant$keyword$1139,bl_name], null))),cljs.core.constant$keyword$1137,null,cljs.core.constant$keyword$1207,null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs46871 = bl_name;if(cljs.core.map_QMARK_(attrs46871))
{return ("<span"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1137,null,cljs.core.constant$keyword$1207,"map-marker-constituency-name"], null),attrs46871], 0))))+"></span>");
} else
{return ("<span class=\"map-marker-constituency-name\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(attrs46871))+"</span>");
}
})())+"</a>");
});
clustermap.components.map.choose_boundaryline_collection = (function choose_boundaryline_collection(threshold_collections,zoom){return cljs.core.last(cljs.core.first(cljs.core.reverse(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__46874){var vec__46875 = p__46874;var tz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46875,(0),null);var collection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46875,(1),null);return (zoom >= tz);
}),threshold_collections))));
});
clustermap.components.map.request_aggregation_data = (function request_aggregation_data(resource,index,index_type,blcoll,variable,filter,bounds){return clustermap.ordered_resource.api_call.cljs$core$IFn$_invoke$arity$variadic(resource,clustermap.api.boundaryline_aggregation,cljs.core.array_seq([index,index_type,blcoll,variable,filter,bounds], 0));
});
clustermap.components.map.request_point_data = (function request_point_data(resource,index,index_type,filter,bounds){return clustermap.ordered_resource.api_call.cljs$core$IFn$_invoke$arity$variadic(resource,clustermap.api.location_lists,cljs.core.array_seq([index,index_type,"!postcode",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!name","!location","!latest_employee_count","!latest_turnover"], null),(1000),filter,bounds], 0));
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__46876,owner){var map__46915 = p__46876;var map__46915__$1 = ((cljs.core.seq_QMARK_(map__46915))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46915):map__46915);var cursor_data = map__46915__$1;var map__46916 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46915__$1,cljs.core.constant$keyword$1547);var map__46916__$1 = ((cljs.core.seq_QMARK_(map__46916))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46916):map__46916);var cursor = map__46916__$1;var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46916__$1,cljs.core.constant$keyword$1240);var point_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46916__$1,cljs.core.constant$keyword$1548);var boundaryline_collections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46916__$1,cljs.core.constant$keyword$1549);var map__46917 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46916__$1,cljs.core.constant$keyword$1267);var map__46917__$1 = ((cljs.core.seq_QMARK_(map__46917))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46917):map__46917);var threshold_colors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46917__$1,cljs.core.constant$keyword$1550);var boundaryline_agg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46917__$1,cljs.core.constant$keyword$1551);var colorchooser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46917__$1,cljs.core.constant$keyword$1552);var boundaryline_collection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46917__$1,cljs.core.constant$keyword$1553);var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46917__$1,cljs.core.constant$keyword$1554);var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46917__$1,cljs.core.constant$keyword$1114);var initial_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46917__$1,cljs.core.constant$keyword$1555);var filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46915__$1,cljs.core.constant$keyword$1115);if(typeof clustermap.components.map.t46918 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t46918 = (function (colorchooser,initial_bounds,p__46876,owner,data,zoom,map__46917,cursor_data,map_component,boundaryline_collections,cursor,threshold_colors,bounds,boundaryline_collection,map__46916,filter,map__46915,point_data,boundaryline_agg,meta46919){
this.colorchooser = colorchooser;
this.initial_bounds = initial_bounds;
this.p__46876 = p__46876;
this.owner = owner;
this.data = data;
this.zoom = zoom;
this.map__46917 = map__46917;
this.cursor_data = cursor_data;
this.map_component = map_component;
this.boundaryline_collections = boundaryline_collections;
this.cursor = cursor;
this.threshold_colors = threshold_colors;
this.bounds = bounds;
this.boundaryline_collection = boundaryline_collection;
this.map__46916 = map__46916;
this.filter = filter;
this.map__46915 = map__46915;
this.point_data = point_data;
this.boundaryline_agg = boundaryline_agg;
this.meta46919 = meta46919;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t46918.cljs$lang$type = true;
clustermap.components.map.t46918.cljs$lang$ctorStr = "clustermap.components.map/t46918";
clustermap.components.map.t46918.cljs$lang$ctorPrWriter = ((function (map__46915,map__46915__$1,cursor_data,map__46916,map__46916__$1,cursor,data,point_data,boundaryline_collections,map__46917,map__46917__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.map/t46918");
});})(map__46915,map__46915__$1,cursor_data,map__46916,map__46916__$1,cursor,data,point_data,boundaryline_collections,map__46917,map__46917__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
clustermap.components.map.t46918.prototype.om$core$IWillUnmount$ = true;
clustermap.components.map.t46918.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (map__46915,map__46915__$1,cursor_data,map__46916,map__46916__$1,cursor,data,point_data,boundaryline_collections,map__46917,map__46917__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;var map__46921 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__46921__$1 = ((cljs.core.seq_QMARK_(map__46921))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46921):map__46921);var point_data_resource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46921__$1,cljs.core.constant$keyword$1556);var aggregation_data_resource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46921__$1,cljs.core.constant$keyword$1557);clustermap.ordered_resource.close(aggregation_data_resource);
return clustermap.ordered_resource.close(point_data_resource);
});})(map__46915,map__46915__$1,cursor_data,map__46916,map__46916__$1,cursor,data,point_data,boundaryline_collections,map__46917,map__46917__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
clustermap.components.map.t46918.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map.t46918.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__46915,map__46915__$1,cursor_data,map__46916,map__46916__$1,cursor,data,point_data,boundaryline_collections,map__46917,map__46917__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (this$,p__46922,p__46923){var self__ = this;
var map__46924 = p__46922;var map__46924__$1 = ((cljs.core.seq_QMARK_(map__46924))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46924):map__46924);var next_cursor_data = map__46924__$1;var map__46925 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46924__$1,cljs.core.constant$keyword$1547);var map__46925__$1 = ((cljs.core.seq_QMARK_(map__46925))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46925):map__46925);var next_cursor = map__46925__$1;var next_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46925__$1,cljs.core.constant$keyword$1240);var next_point_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46925__$1,cljs.core.constant$keyword$1548);var next_boundaryline_collections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46925__$1,cljs.core.constant$keyword$1549);var map__46926 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46925__$1,cljs.core.constant$keyword$1267);var map__46926__$1 = ((cljs.core.seq_QMARK_(map__46926))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46926):map__46926);var next_zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46926__$1,cljs.core.constant$keyword$1554);var next_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46926__$1,cljs.core.constant$keyword$1114);var next_boundaryline_collection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46926__$1,cljs.core.constant$keyword$1553);var next_colorchooser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46926__$1,cljs.core.constant$keyword$1552);var next_boundaryline_agg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46926__$1,cljs.core.constant$keyword$1551);var next_threshold_colors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46926__$1,cljs.core.constant$keyword$1550);var next_filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46924__$1,cljs.core.constant$keyword$1115);var map__46927 = p__46923;var map__46927__$1 = ((cljs.core.seq_QMARK_(map__46927))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46927):map__46927);var map__46928 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46927__$1,cljs.core.constant$keyword$1169);var map__46928__$1 = ((cljs.core.seq_QMARK_(map__46928))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46928):map__46928);var next_markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46928__$1,cljs.core.constant$keyword$1528);var next_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46928__$1,cljs.core.constant$keyword$1512);var next_path_selections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46928__$1,cljs.core.constant$keyword$1529);var next_path_highlights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46927__$1,cljs.core.constant$keyword$1558);var next_aggregation_data_resource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46927__$1,cljs.core.constant$keyword$1557);var next_point_data_resource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46927__$1,cljs.core.constant$keyword$1556);var this$__$1 = this;var map__46929 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__46929__$1 = ((cljs.core.seq_QMARK_(map__46929))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46929):map__46929);var point_in_boundarylines_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46929__$1,cljs.core.constant$keyword$1559);var fetch_boundarylines_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46929__$1,cljs.core.constant$keyword$1560);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46929__$1,cljs.core.constant$keyword$1375);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46929__$1,cljs.core.constant$keyword$1374);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46929__$1,cljs.core.constant$keyword$1385);var map__46930 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__46930__$1 = ((cljs.core.seq_QMARK_(map__46930))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46930):map__46930);var map__46931 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46930__$1,cljs.core.constant$keyword$1169);var map__46931__$1 = ((cljs.core.seq_QMARK_(map__46931))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46931):map__46931);var path_selections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46931__$1,cljs.core.constant$keyword$1529);var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46931__$1,cljs.core.constant$keyword$1512);var markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46931__$1,cljs.core.constant$keyword$1528);var leaflet_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46931__$1,cljs.core.constant$keyword$1527);var pan_pending = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46930__$1,cljs.core.constant$keyword$1561);var path_highlights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46930__$1,cljs.core.constant$keyword$1558);if(cljs.core.truth_((function (){var and__3546__auto__ = leaflet_map;if(cljs.core.truth_(and__3546__auto__))
{var and__3546__auto____$1 = next_zoom;if(cljs.core.truth_(and__3546__auto____$1))
{return (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_zoom,self__.zoom)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_zoom,leaflet_map.getZoom()));
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
}
})()))
{leaflet_map.setZoom(next_zoom);
} else
{}
if(cljs.core.truth_((function (){var and__3546__auto__ = leaflet_map;if(cljs.core.truth_(and__3546__auto__))
{var and__3546__auto____$1 = next_bounds;if(cljs.core.truth_(and__3546__auto____$1))
{return (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_bounds,self__.bounds)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_bounds,clustermap.components.map.bounds_array(leaflet_map.getBounds())));
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
}
})()))
{leaflet_map.fitBounds(cljs.core.clj__GT_js(next_bounds));
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1267,cljs.core.constant$keyword$1114], null),clustermap.components.map.bounds_array(leaflet_map.getBounds()));
} else
{}
if(cljs.core.truth_((function (){var and__3546__auto__ = leaflet_map;if(cljs.core.truth_(and__3546__auto__))
{var and__3546__auto____$1 = self__.boundaryline_collections;if(cljs.core.truth_(and__3546__auto____$1))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_boundaryline_collection,clustermap.components.map.choose_boundaryline_collection(next_boundaryline_collections,leaflet_map.getZoom()));
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
}
})()))
{console.log(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["change-collection",clustermap.components.map.choose_boundaryline_collection(next_boundaryline_collections,leaflet_map.getZoom())], null)));
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1267,cljs.core.constant$keyword$1553], null),clustermap.components.map.choose_boundaryline_collection(next_boundaryline_collections,leaflet_map.getZoom()));
} else
{}
if(cljs.core.truth_((function (){var and__3546__auto__ = next_boundaryline_collection;if(cljs.core.truth_(and__3546__auto__))
{var or__3558__auto__ = (function (){var and__3546__auto____$1 = next_boundaryline_agg;if(cljs.core.truth_(and__3546__auto____$1))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_boundaryline_agg,self__.boundaryline_agg);
} else
{return and__3546__auto____$1;
}
})();if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_filter,self__.filter)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_bounds,self__.bounds));
}
} else
{return and__3546__auto__;
}
})()))
{var ticket_46953 = clustermap.components.map.next_ticket();om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1267,cljs.core.constant$keyword$1562], null),ticket_46953);
clustermap.components.map.request_aggregation_data(next_aggregation_data_resource,cljs.core.constant$keyword$1133.cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),cljs.core.constant$keyword$1268.cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),clustermap.components.map.choose_boundaryline_collection(next_boundaryline_collections,leaflet_map.getZoom()),cljs.core.constant$keyword$1563.cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),om.core._value(next_filter),clustermap.components.map.bounds_array(leaflet_map.getBounds()));
clustermap.components.map.request_point_data(next_point_data_resource,cljs.core.constant$keyword$1133.cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),cljs.core.constant$keyword$1268.cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),om.core._value(next_filter),clustermap.components.map.bounds_array(leaflet_map.getBounds()));
} else
{}
if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_data,self__.data)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_colorchooser,self__.colorchooser)))
{var vec__46932_46954 = clustermap.data.colorchooser.choose(cljs.core.constant$keyword$1564.cljs$core$IFn$_invoke$arity$1(next_colorchooser),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$1565.cljs$core$IFn$_invoke$arity$1(next_colorchooser)),cljs.core.constant$keyword$1138,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$1563.cljs$core$IFn$_invoke$arity$1(next_colorchooser)),cljs.core.constant$keyword$1387.cljs$core$IFn$_invoke$arity$1(next_data));var new_threshold_colors_46955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46932_46954,(0),null);var selection_path_colours_46956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46932_46954,(1),null);var update_paths_invocation_46957 = ((function (vec__46932_46954,new_threshold_colors_46955,selection_path_colours_46956,map__46929,map__46929__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__46930,map__46930__$1,map__46931,map__46931__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__46924,map__46924__$1,next_cursor_data,map__46925,map__46925__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__46926,map__46926__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__46927,map__46927__$1,map__46928,map__46928__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__46915,map__46915__$1,cursor_data,map__46916,map__46916__$1,cursor,data,point_data,boundaryline_collections,map__46917,map__46917__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (){return clustermap.components.map.update_paths(comm,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(fetch_boundarylines_fn,next_boundaryline_collection),leaflet_map,next_paths,next_path_selections,next_path_highlights,selection_path_colours_46956);
});})(vec__46932_46954,new_threshold_colors_46955,selection_path_colours_46956,map__46929,map__46929__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__46930,map__46930__$1,map__46931,map__46931__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__46924,map__46924__$1,next_cursor_data,map__46925,map__46925__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__46926,map__46926__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__46927,map__46927__$1,map__46928,map__46928__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__46915,map__46915__$1,cursor_data,map__46916,map__46916__$1,cursor,data,point_data,boundaryline_collections,map__46917,map__46917__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_threshold_colors_46955,next_threshold_colors))
{om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1267,cljs.core.constant$keyword$1550], null),new_threshold_colors_46955);
} else
{}
var temp__4126__auto___46958 = update_paths_invocation_46957();if(cljs.core.truth_(temp__4126__auto___46958))
{var notify_chan_46959 = temp__4126__auto___46958;var c__5708__auto___46960 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___46960,notify_chan_46959,temp__4126__auto___46958,vec__46932_46954,new_threshold_colors_46955,selection_path_colours_46956,update_paths_invocation_46957,map__46929,map__46929__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__46930,map__46930__$1,map__46931,map__46931__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__46924,map__46924__$1,next_cursor_data,map__46925,map__46925__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__46926,map__46926__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__46927,map__46927__$1,map__46928,map__46928__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__46915,map__46915__$1,cursor_data,map__46916,map__46916__$1,cursor,data,point_data,boundaryline_collections,map__46917,map__46917__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___46960,notify_chan_46959,temp__4126__auto___46958,vec__46932_46954,new_threshold_colors_46955,selection_path_colours_46956,update_paths_invocation_46957,map__46929,map__46929__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__46930,map__46930__$1,map__46931,map__46931__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__46924,map__46924__$1,next_cursor_data,map__46925,map__46925__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__46926,map__46926__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__46927,map__46927__$1,map__46928,map__46928__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__46915,map__46915__$1,cursor_data,map__46916,map__46916__$1,cursor,data,point_data,boundaryline_collections,map__46917,map__46917__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (state_46937){var state_val_46938 = (state_46937[(1)]);if((state_val_46938 === (2)))
{var inst_46934 = (state_46937[(2)]);var inst_46935 = update_paths_invocation_46957();var state_46937__$1 = (function (){var statearr_46939 = state_46937;(statearr_46939[(7)] = inst_46934);
return statearr_46939;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_46937__$1,inst_46935);
} else
{if((state_val_46938 === (1)))
{var state_46937__$1 = state_46937;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46937__$1,(2),notify_chan_46959);
} else
{return null;
}
}
});})(c__5708__auto___46960,notify_chan_46959,temp__4126__auto___46958,vec__46932_46954,new_threshold_colors_46955,selection_path_colours_46956,update_paths_invocation_46957,map__46929,map__46929__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__46930,map__46930__$1,map__46931,map__46931__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__46924,map__46924__$1,next_cursor_data,map__46925,map__46925__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__46926,map__46926__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__46927,map__46927__$1,map__46928,map__46928__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__46915,map__46915__$1,cursor_data,map__46916,map__46916__$1,cursor,data,point_data,boundaryline_collections,map__46917,map__46917__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;return ((function (switch__5693__auto__,c__5708__auto___46960,notify_chan_46959,temp__4126__auto___46958,vec__46932_46954,new_threshold_colors_46955,selection_path_colours_46956,update_paths_invocation_46957,map__46929,map__46929__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__46930,map__46930__$1,map__46931,map__46931__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__46924,map__46924__$1,next_cursor_data,map__46925,map__46925__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__46926,map__46926__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__46927,map__46927__$1,map__46928,map__46928__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__46915,map__46915__$1,cursor_data,map__46916,map__46916__$1,cursor,data,point_data,boundaryline_collections,map__46917,map__46917__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_46943 = [null,null,null,null,null,null,null,null];(statearr_46943[(0)] = state_machine__5694__auto__);
(statearr_46943[(1)] = (1));
return statearr_46943;
});
var state_machine__5694__auto____1 = (function (state_46937){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_46937);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1094))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e46944){if((e46944 instanceof Object))
{var ex__5697__auto__ = e46944;var statearr_46945_46961 = state_46937;(statearr_46945_46961[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_46937);
return cljs.core.constant$keyword$1094;
} else
{throw e46944;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1094))
{{
var G__46962 = state_46937;
state_46937 = G__46962;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_46937){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_46937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___46960,notify_chan_46959,temp__4126__auto___46958,vec__46932_46954,new_threshold_colors_46955,selection_path_colours_46956,update_paths_invocation_46957,map__46929,map__46929__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__46930,map__46930__$1,map__46931,map__46931__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__46924,map__46924__$1,next_cursor_data,map__46925,map__46925__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__46926,map__46926__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__46927,map__46927__$1,map__46928,map__46928__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__46915,map__46915__$1,cursor_data,map__46916,map__46916__$1,cursor,data,point_data,boundaryline_collections,map__46917,map__46917__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
})();var state__5710__auto__ = (function (){var statearr_46946 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_46946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___46960);
return statearr_46946;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___46960,notify_chan_46959,temp__4126__auto___46958,vec__46932_46954,new_threshold_colors_46955,selection_path_colours_46956,update_paths_invocation_46957,map__46929,map__46929__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__46930,map__46930__$1,map__46931,map__46931__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__46924,map__46924__$1,next_cursor_data,map__46925,map__46925__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__46926,map__46926__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__46927,map__46927__$1,map__46928,map__46928__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__46915,map__46915__$1,cursor_data,map__46916,map__46916__$1,cursor,data,point_data,boundaryline_collections,map__46917,map__46917__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
} else
{}
} else
{}
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_point_data,self__.point_data))
{return clustermap.components.map.update_markers(path_fn,leaflet_map,next_markers,cljs.core.constant$keyword$1387.cljs$core$IFn$_invoke$arity$1(next_point_data));
} else
{return null;
}
});})(map__46915,map__46915__$1,cursor_data,map__46916,map__46916__$1,cursor,data,point_data,boundaryline_collections,map__46917,map__46917__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
clustermap.components.map.t46918.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t46918.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__46915,map__46915__$1,cursor_data,map__46916,map__46916__$1,cursor,data,point_data,boundaryline_collections,map__46917,map__46917__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__46947 = clustermap.components.map.create_map(node,self__.initial_bounds);var map__46947__$1 = ((cljs.core.seq_QMARK_(map__46947))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46947):map__46947);var map = map__46947__$1;var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46947__$1,cljs.core.constant$keyword$1177);var markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46947__$1,cljs.core.constant$keyword$1528);var leaflet_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46947__$1,cljs.core.constant$keyword$1527);var map__46948 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__46948__$1 = ((cljs.core.seq_QMARK_(map__46948))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46948):map__46948);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46948__$1,cljs.core.constant$keyword$1374);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46948__$1,cljs.core.constant$keyword$1375);var point_in_boundarylines_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46948__$1,cljs.core.constant$keyword$1559);var fetch_boundarylines_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46948__$1,cljs.core.constant$keyword$1560);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46948__$1,cljs.core.constant$keyword$1385);om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1267,cljs.core.constant$keyword$1554], null),leaflet_map.getZoom());
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1267,cljs.core.constant$keyword$1114], null),clustermap.components.map.bounds_array(leaflet_map.getBounds()));
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1169,map);
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1558,cljs.core.PersistentHashSet.EMPTY);
leaflet_map.on("moveend",((function (node,map__46947,map__46947__$1,map,path,markers,leaflet_map,map__46948,map__46948__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__46915,map__46915__$1,cursor_data,map__46916,map__46916__$1,cursor,data,point_data,boundaryline_collections,map__46917,map__46917__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (e){console.log("moveend");
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1267,cljs.core.constant$keyword$1554], null),leaflet_map.getZoom());
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1267,cljs.core.constant$keyword$1114], null),clustermap.components.map.bounds_array(leaflet_map.getBounds()));
});})(node,map__46947,map__46947__$1,map,path,markers,leaflet_map,map__46948,map__46948__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__46915,map__46915__$1,cursor_data,map__46916,map__46916__$1,cursor,data,point_data,boundaryline_collections,map__46917,map__46917__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
leaflet_map.on("popupopen",((function (node,map__46947,map__46947__$1,map,path,markers,leaflet_map,map__46948,map__46948__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__46915,map__46915__$1,cursor_data,map__46916,map__46916__$1,cursor,data,point_data,boundaryline_collections,map__46917,map__46917__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (e){var popup_el = e.popup._container;var marker_popup_location_list_cnt = jayq.core.$.cljs$core$IFn$_invoke$arity$1(popup_el).find(".map-marker-popup-location-list").length;if((marker_popup_location_list_cnt > (0)))
{om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1566,true);
} else
{}
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(popup_el).on("mousemove",((function (popup_el,marker_popup_location_list_cnt,node,map__46947,map__46947__$1,map,path,markers,leaflet_map,map__46948,map__46948__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__46915,map__46915__$1,cursor_data,map__46916,map__46916__$1,cursor,data,point_data,boundaryline_collections,map__46917,map__46917__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (e__$1){e__$1.preventDefault();
return false;
});})(popup_el,marker_popup_location_list_cnt,node,map__46947,map__46947__$1,map,path,markers,leaflet_map,map__46948,map__46948__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__46915,map__46915__$1,cursor_data,map__46916,map__46916__$1,cursor,data,point_data,boundaryline_collections,map__46917,map__46917__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
});})(node,map__46947,map__46947__$1,map,path,markers,leaflet_map,map__46948,map__46948__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__46915,map__46915__$1,cursor_data,map__46916,map__46916__$1,cursor,data,point_data,boundaryline_collections,map__46917,map__46917__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
leaflet_map.on("popupclose",((function (node,map__46947,map__46947__$1,map,path,markers,leaflet_map,map__46948,map__46948__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__46915,map__46915__$1,cursor_data,map__46916,map__46916__$1,cursor,data,point_data,boundaryline_collections,map__46917,map__46917__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (e){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1566,null);
});})(node,map__46947,map__46947__$1,map,path,markers,leaflet_map,map__46948,map__46948__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__46915,map__46915__$1,cursor_data,map__46916,map__46916__$1,cursor,data,point_data,boundaryline_collections,map__46917,map__46917__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
leaflet_map.on("mousemove",((function (node,map__46947,map__46947__$1,map,path,markers,leaflet_map,map__46948,map__46948__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__46915,map__46915__$1,cursor_data,map__46916,map__46916__$1,cursor,data,point_data,boundaryline_collections,map__46917,map__46917__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (e){var lat = e.latlng.lat;var lng = e.latlng.lng;var hits = (point_in_boundarylines_fn.cljs$core$IFn$_invoke$arity$2 ? point_in_boundarylines_fn.cljs$core$IFn$_invoke$arity$2(lng,lat) : point_in_boundarylines_fn.call(null,lng,lat));var highlight_hit = cljs.core.first(hits);var highlight_path_id = cljs.core.constant$keyword$1137.cljs$core$IFn$_invoke$arity$1(highlight_hit);var highlight_path_ids = (cljs.core.truth_(highlight_path_id)?cljs.core.set(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [highlight_path_id], null)):null);var old_path_highlights = om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$1558);if(cljs.core.truth_((function (){var and__3546__auto__ = highlight_hit;if(cljs.core.truth_(and__3546__auto__))
{return (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_path_highlights,highlight_path_ids)) && (cljs.core.not(om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$1566)));
} else
{return and__3546__auto__;
}
})()))
{var G__46949_46963 = L.popup();G__46949_46963.setLatLng(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lng], null)));
G__46949_46963.setContent(clustermap.components.map.constituency_marker_popup_content(path_fn,highlight_hit));
G__46949_46963.openOn(leaflet_map);
} else
{}
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1558,highlight_path_ids);
});})(node,map__46947,map__46947__$1,map,path,markers,leaflet_map,map__46948,map__46948__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__46915,map__46915__$1,cursor_data,map__46916,map__46916__$1,cursor,data,point_data,boundaryline_collections,map__46917,map__46917__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
leaflet_map.on("click",((function (node,map__46947,map__46947__$1,map,path,markers,leaflet_map,map__46948,map__46948__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__46915,map__46915__$1,cursor_data,map__46916,map__46916__$1,cursor,data,point_data,boundaryline_collections,map__46917,map__46917__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (e){var hits = (point_in_boundarylines_fn.cljs$core$IFn$_invoke$arity$2 ? point_in_boundarylines_fn.cljs$core$IFn$_invoke$arity$2(e.latlng.lng,e.latlng.lat) : point_in_boundarylines_fn.call(null,e.latlng.lng,e.latlng.lat));var boundaryline_id = (function (){var G__46950 = hits;var G__46950__$1 = (((G__46950 == null))?null:cljs.core.first(G__46950));var G__46950__$2 = (((G__46950__$1 == null))?null:cljs.core.constant$keyword$1137.cljs$core$IFn$_invoke$arity$1(G__46950__$1));return G__46950__$2;
})();if(cljs.core.truth_(boundaryline_id))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1229,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1379,boundaryline_id], null)], null));
} else
{return null;
}
});})(node,map__46947,map__46947__$1,map,path,markers,leaflet_map,map__46948,map__46948__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__46915,map__46915__$1,cursor_data,map__46916,map__46916__$1,cursor,data,point_data,boundaryline_collections,map__46917,map__46917__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
var adr_46964 = clustermap.ordered_resource.make_discard_stale_resource("aggregation-data-resource");om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1557,adr_46964);
clustermap.ordered_resource.retrieve_responses(adr_46964,((function (adr_46964,node,map__46947,map__46947__$1,map,path,markers,leaflet_map,map__46948,map__46948__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__46915,map__46915__$1,cursor_data,map__46916,map__46916__$1,cursor,data,point_data,boundaryline_collections,map__46917,map__46917__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (data__$2){return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1240], null),data__$2);
});})(adr_46964,node,map__46947,map__46947__$1,map,path,markers,leaflet_map,map__46948,map__46948__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__46915,map__46915__$1,cursor_data,map__46916,map__46916__$1,cursor,data,point_data,boundaryline_collections,map__46917,map__46917__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
var pdr = clustermap.ordered_resource.make_discard_stale_resource("point-data-resource");om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1556,pdr);
return clustermap.ordered_resource.retrieve_responses(pdr,((function (pdr,node,map__46947,map__46947__$1,map,path,markers,leaflet_map,map__46948,map__46948__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__46915,map__46915__$1,cursor_data,map__46916,map__46916__$1,cursor,data,point_data,boundaryline_collections,map__46917,map__46917__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (point_data__$2){return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1548], null),point_data__$2);
});})(pdr,node,map__46947,map__46947__$1,map,path,markers,leaflet_map,map__46948,map__46948__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__46915,map__46915__$1,cursor_data,map__46916,map__46916__$1,cursor,data,point_data,boundaryline_collections,map__46917,map__46917__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
});})(map__46915,map__46915__$1,cursor_data,map__46916,map__46916__$1,cursor,data,point_data,boundaryline_collections,map__46917,map__46917__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
clustermap.components.map.t46918.prototype.om$core$IRender$ = true;
clustermap.components.map.t46918.prototype.om$core$IRender$render$arity$1 = ((function (map__46915,map__46915__$1,cursor_data,map__46916,map__46916__$1,cursor,data,point_data,boundaryline_collections,map__46917,map__46917__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "map", "ref": "map"});
});})(map__46915,map__46915__$1,cursor_data,map__46916,map__46916__$1,cursor,data,point_data,boundaryline_collections,map__46917,map__46917__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
clustermap.components.map.t46918.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__46915,map__46915__$1,cursor_data,map__46916,map__46916__$1,cursor,data,point_data,boundaryline_collections,map__46917,map__46917__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (_46920){var self__ = this;
var _46920__$1 = this;return self__.meta46919;
});})(map__46915,map__46915__$1,cursor_data,map__46916,map__46916__$1,cursor,data,point_data,boundaryline_collections,map__46917,map__46917__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
clustermap.components.map.t46918.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__46915,map__46915__$1,cursor_data,map__46916,map__46916__$1,cursor,data,point_data,boundaryline_collections,map__46917,map__46917__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (_46920,meta46919__$1){var self__ = this;
var _46920__$1 = this;return (new clustermap.components.map.t46918(self__.colorchooser,self__.initial_bounds,self__.p__46876,self__.owner,self__.data,self__.zoom,self__.map__46917,self__.cursor_data,self__.map_component,self__.boundaryline_collections,self__.cursor,self__.threshold_colors,self__.bounds,self__.boundaryline_collection,self__.map__46916,self__.filter,self__.map__46915,self__.point_data,self__.boundaryline_agg,meta46919__$1));
});})(map__46915,map__46915__$1,cursor_data,map__46916,map__46916__$1,cursor,data,point_data,boundaryline_collections,map__46917,map__46917__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
clustermap.components.map.__GT_t46918 = ((function (map__46915,map__46915__$1,cursor_data,map__46916,map__46916__$1,cursor,data,point_data,boundaryline_collections,map__46917,map__46917__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function __GT_t46918(colorchooser__$1,initial_bounds__$1,p__46876__$1,owner__$1,data__$1,zoom__$1,map__46917__$2,cursor_data__$1,map_component__$1,boundaryline_collections__$1,cursor__$1,threshold_colors__$1,bounds__$1,boundaryline_collection__$1,map__46916__$2,filter__$1,map__46915__$2,point_data__$1,boundaryline_agg__$1,meta46919){return (new clustermap.components.map.t46918(colorchooser__$1,initial_bounds__$1,p__46876__$1,owner__$1,data__$1,zoom__$1,map__46917__$2,cursor_data__$1,map_component__$1,boundaryline_collections__$1,cursor__$1,threshold_colors__$1,bounds__$1,boundaryline_collection__$1,map__46916__$2,filter__$1,map__46915__$2,point_data__$1,boundaryline_agg__$1,meta46919));
});})(map__46915,map__46915__$1,cursor_data,map__46916,map__46916__$1,cursor,data,point_data,boundaryline_collections,map__46917,map__46917__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
}
return (new clustermap.components.map.t46918(colorchooser,initial_bounds,p__46876,owner,data,zoom,map__46917__$1,cursor_data,map_component,boundaryline_collections,cursor,threshold_colors,bounds,boundaryline_collection,map__46916__$1,filter,map__46915__$1,point_data,boundaryline_agg,null));
});
