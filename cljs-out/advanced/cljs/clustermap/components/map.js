// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.map');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('jayq.core');
goog.require('clustermap.boundarylines');
goog.require('clustermap.boundarylines');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('hiccups.runtime');
goog.require('hiccups.runtime');
goog.require('clojure.set');
goog.require('om.dom');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('jayq.core');
clustermap.components.map.locate_map = (function locate_map(m){return m.fitBounds(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [59.54,2.3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [49.29,-11.29], null)], null)),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, ["paddingTopLeft",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null),"paddingBottomRight",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null)], null)));
});
clustermap.components.map.api_key = (function (){var or__3406__auto__ = (function (){var G__21803 = config;var G__21803__$1 = (((G__21803 == null))?null:G__21803.components);var G__21803__$2 = (((G__21803__$1 == null))?null:G__21803__$1.map);var G__21803__$3 = (((G__21803__$2 == null))?null:G__21803__$2.api_key);return G__21803__$3;
})();if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "mccraigmccraig.h4f921b9";
}
})();
clustermap.components.map.create_map = (function create_map(id_or_el){var m = L.map.call(null,id_or_el,{"zoomControl": false});var tiles = L.mapbox.tileLayer.call(null,clustermap.components.map.api_key,{"detectRetina": true});var zoom = L.control.zoom.call(null,{"position": "bottomright"});m.addLayer(tiles);
m.addControl(zoom);
clustermap.components.map.locate_map(m);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$373,m,cljs.core.constant$keyword$374,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.constant$keyword$375,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.constant$keyword$376,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)], null);
});
/**
* return a single LatLngBounds object containing all
* given latlongs
*/
clustermap.components.map.geojson_point_bounds = (function geojson_point_bounds(longlats){var s = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,longlats));var w = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,longlats));var n = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,longlats));var e = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,longlats));if(cljs.core.truth_((function (){var and__3394__auto__ = s;if(cljs.core.truth_(and__3394__auto__))
{var and__3394__auto____$1 = w;if(cljs.core.truth_(and__3394__auto____$1))
{var and__3394__auto____$2 = n;if(cljs.core.truth_(and__3394__auto____$2))
{return e;
} else
{return and__3394__auto____$2;
}
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
}
})()))
{return L.latLngBounds(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,w], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,e], null)], null)));
} else
{return null;
}
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
pan_to_show.cljs$lang$applyTo = (function (arglist__21804){
var m = cljs.core.first(arglist__21804);
var all_bounds = cljs.core.rest(arglist__21804);
return pan_to_show__delegate(m,all_bounds);
});
pan_to_show.cljs$core$IFn$_invoke$arity$variadic = pan_to_show__delegate;
return pan_to_show;
})()
;
clustermap.components.map.display_site = (function display_site(m,site){var location = cljs.core.clj__GT_js(cljs.core.reverse((site["location"])));var options = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$333,[cljs.core.str((site["name"])),cljs.core.str(", "),cljs.core.str((site["postcode"])),cljs.core.str(", "),cljs.core.str((site["company_no"]))].join('')], null));var marker = L.marker(location,options);return marker.addTo(m);
});
clustermap.components.map.display_sites = (function display_sites(m,sites){return (function (c){return (casync.dorun_async.cljs$core$IFn$_invoke$arity$3 ? casync.dorun_async.cljs$core$IFn$_invoke$arity$3(c,cljs.core.constant$keyword$377,null) : casync.dorun_async.call(null,c,cljs.core.constant$keyword$377,null));
}).call(null,(casync.map_async.cljs$core$IFn$_invoke$arity$2 ? casync.map_async.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.components.map.display_site,m),sites) : casync.map_async.call(null,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.components.map.display_site,m),sites)));
});
clustermap.components.map.marker_popup_content = (function marker_popup_content(path_fn,location_sites){return [cljs.core.str((function (){var attrs21806 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (site){return [cljs.core.str("<li"),cljs.core.str(""),cljs.core.str(">"),cljs.core.str("<a"),cljs.core.str(hiccups.runtime.render_attr_map(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$248,(path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$280,site) : path_fn.call(null,cljs.core.constant$keyword$280,site)),cljs.core.constant$keyword$243,null,cljs.core.constant$keyword$237,null], null))),cljs.core.str(">"),cljs.core.str(hiccups.runtime.render_html(cljs.core.constant$keyword$257.cljs$core$IFn$_invoke$arity$1(site))),cljs.core.str("</a>"),cljs.core.str("</li>")].join('');
}),location_sites);if(cljs.core.map_QMARK_(attrs21806))
{return [cljs.core.str("<ul"),cljs.core.str(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$243,null,cljs.core.constant$keyword$237,null], null),attrs21806], 0)))),cljs.core.str(">"),cljs.core.str("</ul>")].join('');
} else
{return [cljs.core.str("<ul>"),cljs.core.str(hiccups.runtime.render_html(attrs21806)),cljs.core.str("</ul>")].join('');
}
})())].join('');
});
clustermap.components.map.create_marker = (function create_marker(path_fn,leaflet_map,location_sites){var temp__4090__auto__ = (function (){var G__21809 = location_sites;var G__21809__$1 = (((G__21809 == null))?null:cljs.core.first(G__21809));var G__21809__$2 = (((G__21809__$1 == null))?null:cljs.core.constant$keyword$378.cljs$core$IFn$_invoke$arity$1(G__21809__$1));var G__21809__$3 = (((G__21809__$2 == null))?null:cljs.core.reverse(G__21809__$2));var G__21809__$4 = (((G__21809__$3 == null))?null:cljs.core.clj__GT_js(G__21809__$3));return G__21809__$4;
})();if(cljs.core.truth_(temp__4090__auto__))
{var latlong = temp__4090__auto__;var marker = L.marker(latlong);var popup_content = clustermap.components.map.marker_popup_content(path_fn,location_sites);marker.bindPopup(popup_content);
marker.addTo(leaflet_map);
return marker;
} else
{return console.log([cljs.core.str("missing location: "),cljs.core.str((function (){var sb__4298__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_21810_21811 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (x__4299__auto__){return sb__4298__auto__.append(x__4299__auto__);
});
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([location_sites], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_21810_21811;
}return [cljs.core.str(sb__4298__auto__)].join('');
})())].join(''));
}
});
clustermap.components.map.update_marker = (function update_marker(path_fn,leaflet_map,marker,location){marker.setPopupContent(clustermap.components.map.marker_popup_content(path_fn,location));
return marker;
});
clustermap.components.map.remove_marker = (function remove_marker(leaflet_map,marker){return leaflet_map.removeLayer(marker);
});
clustermap.components.map.update_markers = (function update_markers(path_fn,leaflet_map,markers_atom,new_locations){var markers = cljs.core.deref(markers_atom);var marker_keys = cljs.core.set(cljs.core.keys(markers));var location_keys = cljs.core.set(cljs.core.keys(new_locations));var update_marker_keys = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(marker_keys,location_keys);var new_marker_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(location_keys,marker_keys);var remove_marker_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(marker_keys,location_keys);var new_markers = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_marker(path_fn,leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_locations,k))], null);
});})(markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys))
,new_marker_keys));var updated_markers = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_marker(path_fn,leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k),cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_locations,k))], null);
});})(markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers))
,update_marker_keys));var _ = (function (){var seq__21816 = cljs.core.seq(remove_marker_keys);var chunk__21817 = null;var count__21818 = 0;var i__21819 = 0;while(true){
if((i__21819 < count__21818))
{var k = chunk__21817.cljs$core$IIndexed$_nth$arity$2(null,i__21819);clustermap.components.map.remove_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k));
{
var G__21820 = seq__21816;
var G__21821 = chunk__21817;
var G__21822 = count__21818;
var G__21823 = (i__21819 + 1);
seq__21816 = G__21820;
chunk__21817 = G__21821;
count__21818 = G__21822;
i__21819 = G__21823;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__21816);if(temp__4092__auto__)
{var seq__21816__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__21816__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__21816__$1);{
var G__21824 = cljs.core.chunk_rest(seq__21816__$1);
var G__21825 = c__4148__auto__;
var G__21826 = cljs.core.count(c__4148__auto__);
var G__21827 = 0;
seq__21816 = G__21824;
chunk__21817 = G__21825;
count__21818 = G__21826;
i__21819 = G__21827;
continue;
}
} else
{var k = cljs.core.first(seq__21816__$1);clustermap.components.map.remove_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k));
{
var G__21828 = cljs.core.next(seq__21816__$1);
var G__21829 = null;
var G__21830 = 0;
var G__21831 = 0;
seq__21816 = G__21828;
chunk__21817 = G__21829;
count__21818 = G__21830;
i__21819 = G__21831;
continue;
}
}
} else
{return null;
}
}
break;
}
})();return cljs.core.reset_BANG_(markers_atom,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([updated_markers,new_markers], 0)));
});
/**
* turns a PostGIS envelope into a L.LatLngBounds
*/
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__21840 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(envelope);var map__21840__$1 = ((cljs.core.seq_QMARK_(map__21840))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21840):map__21840);var clj_envelope = map__21840__$1;var vec__21841 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21840__$1,"coordinates");var vec__21842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21841,0,null);var vec__21843 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21842,0,null);var miny0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21843,0,null);var minx0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21843,1,null);var vec__21844 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21842,1,null);var maxy1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21844,0,null);var minx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21844,1,null);var vec__21845 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21842,2,null);var maxy2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21845,0,null);var maxx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21845,1,null);var vec__21846 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21842,3,null);var miny3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21846,0,null);var maxx3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21846,1,null);var vec__21847 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21842,4,null);var miny4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21847,0,null);var minx4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21847,1,null);var inner = vec__21842;var coords = vec__21841;return L.latLngBounds(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null)));
});
/**
* get the best cached boundaryline, async fetch a better one if required
*/
clustermap.components.map.tolerance_boundaryline = (function tolerance_boundaryline(fetch_boundaryline_fn,index,boundaryline_id,zoom){var default_bl = (cljs.core.truth_(index)?(index[boundaryline_id]):null);var default_tolerance = (cljs.core.truth_(default_bl)?(default_bl["tolerance"]):null);var default$ = (cljs.core.truth_(default_bl)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default_tolerance,default_bl], null):null);var or__3406__auto__ = (fetch_boundaryline_fn.cljs$core$IFn$_invoke$arity$4 ? fetch_boundaryline_fn.cljs$core$IFn$_invoke$arity$4(boundaryline_id,zoom,cljs.core.constant$keyword$236,7) : fetch_boundaryline_fn.call(null,boundaryline_id,zoom,cljs.core.constant$keyword$236,7));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return default$;
}
});
clustermap.components.map.style_leaflet_path = (function style_leaflet_path(path,p__21848){var map__21850 = p__21848;var map__21850__$1 = ((cljs.core.seq_QMARK_(map__21850))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21850):map__21850);var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21850__$1,cljs.core.constant$keyword$262);if(cljs.core.truth_(selected))
{return path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$331,"#0000ff",cljs.core.constant$keyword$379,3,cljs.core.constant$keyword$380,1,cljs.core.constant$keyword$381,0.3], null)));
} else
{return path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$331,"#ff0000",cljs.core.constant$keyword$379,3,cljs.core.constant$keyword$380,0,cljs.core.constant$keyword$381,0], null)));
}
});
clustermap.components.map.create_boundaryline_path = (function create_boundaryline_path(comm,boundaryline_id,leaflet_map,js_boundaryline,p__21851){var map__21853 = p__21851;var map__21853__$1 = ((cljs.core.seq_QMARK_(map__21853))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21853):map__21853);var path_attrs = map__21853__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21853__$1,cljs.core.constant$keyword$262);var tolerance = (js_boundaryline["tolerance"]);var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds((js_boundaryline["envelope"]));var leaflet_path = L.geoJson((js_boundaryline["geojson"]));clustermap.components.map.style_leaflet_path(leaflet_path,path_attrs);
leaflet_path.addTo(leaflet_map);
leaflet_path.on("click",(function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$263,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$282,boundaryline_id], null)], null));
}));
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$382,tolerance,cljs.core.constant$keyword$262,selected,cljs.core.constant$keyword$383,leaflet_path,cljs.core.constant$keyword$384,bounds], null);
});
/**
* create leaflet paths for every boundaryline in boundaryline-index
*/
clustermap.components.map.create_paths = (function create_paths(comm,js_boundaryline_index,leaflet_map,paths_atom){if(cljs.core.empty_QMARK_(cljs.core.deref(paths_atom)))
{var temp__4092__auto__ = cljs.core.not_empty(Object.keys(js_boundaryline_index));if(cljs.core.truth_(temp__4092__auto__))
{var keys = temp__4092__auto__;return cljs.core.reset_BANG_(paths_atom,cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (boundaryline_id){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id,clustermap.components.map.create_boundaryline_path(comm,boundaryline_id,leaflet_map,(js_boundaryline_index[boundaryline_id]),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$262,false], null))], null);
}),keys)));
} else
{return null;
}
} else
{return null;
}
});
clustermap.components.map.replace_boundaryline_path = (function replace_boundaryline_path(comm,boundaryline_id,leaflet_map,old_path,js_boundaryline,path_attrs){leaflet_map.removeLayer(cljs.core.constant$keyword$383.cljs$core$IFn$_invoke$arity$1(old_path));
return clustermap.components.map.create_boundaryline_path(comm,boundaryline_id,leaflet_map,js_boundaryline,path_attrs);
});
/**
* update a Leaflet path for a boundaryline
*/
clustermap.components.map.update_path = (function update_path(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,path,boundaryline_id,path_attrs){var temp__4090__auto__ = clustermap.components.map.tolerance_boundaryline(fetch_boundaryline_fn,js_boundaryline_index,boundaryline_id,leaflet_map.getZoom());if(cljs.core.truth_(temp__4090__auto__))
{var vec__21855 = temp__4090__auto__;var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21855,0,null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21855,1,null);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tolerance,cljs.core.constant$keyword$382.cljs$core$IFn$_invoke$arity$1(path)))
{return clustermap.components.map.replace_boundaryline_path(comm,boundaryline_id,leaflet_map,path,js_boundaryline,path_attrs);
} else
{clustermap.components.map.style_leaflet_path(cljs.core.constant$keyword$383.cljs$core$IFn$_invoke$arity$1(path),path_attrs);
return path;
}
} else
{return path;
}
});
clustermap.components.map.update_paths = (function update_paths(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,paths_atom,path_selections_atom,new_selection_locations){if(cljs.core.truth_(js_boundaryline_index))
{var paths = cljs.core.deref(paths_atom);var path_keys = cljs.core.set(cljs.core.keys(paths));var old_selection_path_keys = cljs.core.deref(path_selections_atom);var new_selection_path_keys = cljs.core.set(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$368,cljs.core.constant$keyword$367),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.vals(new_selection_locations)))));var select_path_keys = cljs.core.into(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(old_selection_path_keys,new_selection_path_keys),clojure.set.difference.cljs$core$IFn$_invoke$arity$2(new_selection_path_keys,old_selection_path_keys));var deselect_path_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(old_selection_path_keys,new_selection_path_keys);var selected_paths = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,select_path_keys,deselect_path_keys){
return (function (p__21860){var vec__21861 = p__21860;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21861,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21861,1,null);return cljs.core.identity(v);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,select_path_keys,deselect_path_keys))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,select_path_keys,deselect_path_keys){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_path(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k),k,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$262,true], null))], null);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,select_path_keys,deselect_path_keys))
,select_path_keys)));var deselected_paths = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,select_path_keys,deselect_path_keys,selected_paths){
return (function (p__21862){var vec__21863 = p__21862;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21863,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21863,1,null);return cljs.core.identity(v);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,select_path_keys,deselect_path_keys,selected_paths))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,select_path_keys,deselect_path_keys,selected_paths){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_path(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k),k,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$262,false], null))], null);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,select_path_keys,deselect_path_keys,selected_paths))
,deselect_path_keys)));cljs.core.reset_BANG_(path_selections_atom,new_selection_path_keys);
return cljs.core.reset_BANG_(paths_atom,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([paths,selected_paths,deselected_paths], 0)));
} else
{return null;
}
});
clustermap.components.map.pan_to_selection = (function pan_to_selection(owner,leaflet_map,paths_atom,path_selections_atom){var paths = cljs.core.deref(paths_atom);var path_selections = cljs.core.deref(path_selections_atom);if(cljs.core.empty_QMARK_(paths))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$385,true);
} else
{om.core.set_state_BANG_(owner,cljs.core.constant$keyword$385,false);
var temp__4092__auto__ = (function (){var G__21865 = cljs.core.select_keys(paths,path_selections);var G__21865__$1 = (((G__21865 == null))?null:cljs.core.vals(G__21865));var G__21865__$2 = (((G__21865__$1 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$384,G__21865__$1));return G__21865__$2;
})();if(cljs.core.truth_(temp__4092__auto__))
{var bounds = temp__4092__auto__;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.components.map.pan_to_show,leaflet_map,bounds);
} else
{return null;
}
}
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__21866,owner){var map__21881 = p__21866;var map__21881__$1 = ((cljs.core.seq_QMARK_(map__21881))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21881):map__21881);var app_state = map__21881__$1;var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21881__$1,cljs.core.constant$keyword$285);if(typeof clustermap.components.map.t21882 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t21882 = (function (selection,app_state,map__21881,owner,p__21866,map_component,meta21883){
this.selection = selection;
this.app_state = app_state;
this.map__21881 = map__21881;
this.owner = owner;
this.p__21866 = p__21866;
this.map_component = map_component;
this.meta21883 = meta21883;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t21882.cljs$lang$type = true;
clustermap.components.map.t21882.cljs$lang$ctorStr = "clustermap.components.map/t21882";
clustermap.components.map.t21882.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map/t21882");
});
clustermap.components.map.t21882.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map.t21882.prototype.om$core$IWillUpdate$will_update$arity$3 = (function (this$,p__21885,next_state){var self__ = this;
var map__21886 = p__21885;var map__21886__$1 = ((cljs.core.seq_QMARK_(map__21886))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21886):map__21886);var next_selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21886__$1,cljs.core.constant$keyword$285);var next_locations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21886__$1,cljs.core.constant$keyword$386);var next_uk_constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21886__$1,cljs.core.constant$keyword$387);var next_boundarylines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21886__$1,cljs.core.constant$keyword$305);var next_zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21886__$1,cljs.core.constant$keyword$388);var this$__$1 = this;var map__21887 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__21887__$1 = ((cljs.core.seq_QMARK_(map__21887))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21887):map__21887);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21887__$1,cljs.core.constant$keyword$302);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21887__$1,cljs.core.constant$keyword$303);var fetch_boundaryline_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21887__$1,cljs.core.constant$keyword$389);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21887__$1,cljs.core.constant$keyword$283);var map__21888 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__21888__$1 = ((cljs.core.seq_QMARK_(map__21888))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21888):map__21888);var map__21889 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21888__$1,cljs.core.constant$keyword$390);var map__21889__$1 = ((cljs.core.seq_QMARK_(map__21889))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21889):map__21889);var path_selections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21889__$1,cljs.core.constant$keyword$376);var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21889__$1,cljs.core.constant$keyword$375);var markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21889__$1,cljs.core.constant$keyword$374);var leaflet_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21889__$1,cljs.core.constant$keyword$373);var pan_pending = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21888__$1,cljs.core.constant$keyword$385);clustermap.components.map.update_markers(path_fn,leaflet_map,markers,next_locations);
if(cljs.core.truth_(next_uk_constituencies))
{clustermap.components.map.create_paths(comm,next_uk_constituencies,leaflet_map,paths);
clustermap.components.map.update_paths(comm,fetch_boundaryline_fn,next_uk_constituencies,leaflet_map,paths,path_selections,next_locations);
} else
{}
if(cljs.core.truth_((function (){var or__3406__auto__ = pan_pending;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_selection,self__.selection);
}
})()))
{return clustermap.components.map.pan_to_selection(self__.owner,leaflet_map,paths,path_selections);
} else
{return null;
}
});
clustermap.components.map.t21882.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t21882.prototype.om$core$IDidMount$did_mount$arity$2 = (function (this$,node){var self__ = this;
var this$__$1 = this;var map__21890 = clustermap.components.map.create_map(node);var map__21890__$1 = ((cljs.core.seq_QMARK_(map__21890))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21890):map__21890);var map = map__21890__$1;var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21890__$1,cljs.core.constant$keyword$391);var markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21890__$1,cljs.core.constant$keyword$374);var leaflet_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21890__$1,cljs.core.constant$keyword$373);om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$390,map);
leaflet_map.on("zoomend",(function (e){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_shared.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$392),cljs.core.assoc,cljs.core.constant$keyword$388,leaflet_map.getZoom());
}));
jayq.core.$.cljs$core$IFn$_invoke$arity$1(document).on("clustermap-change-view",(function (e){console.log("change-view");
var map__21891 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__21891__$1 = ((cljs.core.seq_QMARK_(map__21891))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21891):map__21891);var map__21892 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21891__$1,cljs.core.constant$keyword$390);var map__21892__$1 = ((cljs.core.seq_QMARK_(map__21892))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21892):map__21892);var path_selections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21892__$1,cljs.core.constant$keyword$376);var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21892__$1,cljs.core.constant$keyword$375);leaflet_map.invalidateSize();
return clustermap.components.map.pan_to_selection(self__.owner,leaflet_map,paths,path_selections);
}));
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4(self__.app_state,cljs.core.assoc,cljs.core.constant$keyword$388,leaflet_map.getZoom());
});
clustermap.components.map.t21882.prototype.om$core$IRender$ = true;
clustermap.components.map.t21882.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "map", "ref": "map"});
});
clustermap.components.map.t21882.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21884){var self__ = this;
var _21884__$1 = this;return self__.meta21883;
});
clustermap.components.map.t21882.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21884,meta21883__$1){var self__ = this;
var _21884__$1 = this;return (new clustermap.components.map.t21882(self__.selection,self__.app_state,self__.map__21881,self__.owner,self__.p__21866,self__.map_component,meta21883__$1));
});
clustermap.components.map.__GT_t21882 = (function __GT_t21882(selection__$1,app_state__$1,map__21881__$2,owner__$1,p__21866__$1,map_component__$1,meta21883){return (new clustermap.components.map.t21882(selection__$1,app_state__$1,map__21881__$2,owner__$1,p__21866__$1,map_component__$1,meta21883));
});
}
return (new clustermap.components.map.t21882(selection,app_state,map__21881__$1,owner,p__21866,map_component,null));
});
clustermap.components.map.mount = (function mount(app_state,elem_id,shared){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([shared,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$392,app_state,cljs.core.constant$keyword$389,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clustermap.boundarylines.get_or_fetch_best_boundaryline,app_state,cljs.core.constant$keyword$305)], null)], 0)),clustermap.components.map.map_component,document.getElementById(elem_id));
});
