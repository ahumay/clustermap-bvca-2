// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.map');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('jayq.core');
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
goog.require('jayq.core');
clustermap.components.map.locate_map = (function locate_map(m){return m.fitBounds(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [59.54,2.3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [49.29,-11.29], null)], null)),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, ["paddingTopLeft",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null),"paddingBottomRight",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null)], null)));
});
clustermap.components.map.create_map = (function create_map(id_or_el){var m = L.map.call(null,id_or_el,{"zoomControl": false});var tiles = L.mapbox.tileLayer.call(null,"mccraigmccraig.h4f921b9",{"detectRetina": true});var zoom = L.control.zoom.call(null,{"position": "bottomright"});m.addLayer(tiles);
m.addControl(zoom);
clustermap.components.map.locate_map.call(null,m);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"leaflet-map","leaflet-map",4353500414),m,new cljs.core.Keyword(null,"markers","markers",1853155051),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"paths","paths",1120343136),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY)], null);
});
/**
* return a single LatLngBounds object containing all
* given latlongs
*/
clustermap.components.map.geojson_point_bounds = (function geojson_point_bounds(longlats){var s = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.last,longlats));var w = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.first,longlats));var n = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.last,longlats));var e = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.first,longlats));if(cljs.core.truth_((function (){var and__3394__auto__ = s;if(cljs.core.truth_(and__3394__auto__))
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
{return L.latLngBounds(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,w], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,e], null)], null)));
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
clustermap.components.map.pan_to_show = (function() { 
var pan_to_show__delegate = function (m,all_bounds){var fb = cljs.core.first.call(null,all_bounds);var fb_copy = (new L.LatLngBounds(fb.getSouthWest(),fb.getNorthEast()));var super_bounds = cljs.core.reduce.call(null,((function (fb,fb_copy){
return (function (sb,bounds){return sb.extend(bounds);
});})(fb,fb_copy))
,fb_copy,cljs.core.rest.call(null,all_bounds));return m.fitBounds(super_bounds);
};
var pan_to_show = function (m,var_args){
var all_bounds = null;if (arguments.length > 1) {
  all_bounds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return pan_to_show__delegate.call(this,m,all_bounds);};
pan_to_show.cljs$lang$maxFixedArity = 1;
pan_to_show.cljs$lang$applyTo = (function (arglist__11182){
var m = cljs.core.first(arglist__11182);
var all_bounds = cljs.core.rest(arglist__11182);
return pan_to_show__delegate(m,all_bounds);
});
pan_to_show.cljs$core$IFn$_invoke$arity$variadic = pan_to_show__delegate;
return pan_to_show;
})()
;
clustermap.components.map.display_site = (function display_site(m,site){var location = cljs.core.clj__GT_js.call(null,cljs.core.reverse.call(null,(site["location"])));var options = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",1124275658),[cljs.core.str((site["name"])),cljs.core.str(", "),cljs.core.str((site["postcode"])),cljs.core.str(", "),cljs.core.str((site["company_no"]))].join('')], null));var marker = L.marker(location,options);return marker.addTo(m);
});
clustermap.components.map.display_sites = (function display_sites(m,sites){return (function (c){return casync.dorun_async.call(null,c,new cljs.core.Keyword(null,"delay","delay",1109372149),null);
}).call(null,casync.map_async.call(null,cljs.core.partial.call(null,clustermap.components.map.display_site,m),sites));
});
clustermap.components.map.marker_popup_content = (function marker_popup_content(location_sites){return [cljs.core.str(hiccups.runtime.render_html.call(null,cljs.core.map.call(null,(function (site){return [cljs.core.str((function (){var attrs11184 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(site);if(cljs.core.map_QMARK_.call(null,attrs11184))
{return [cljs.core.str("<p"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),null,new cljs.core.Keyword(null,"class","class",1108647146),null], null),attrs11184))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<p>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs11184)),cljs.core.str("</p>")].join('');
}
})())].join('');
}),location_sites)))].join('');
});
clustermap.components.map.create_marker = (function create_marker(leaflet_map,location_sites){var temp__4090__auto__ = (function (){var G__11186 = location_sites;var G__11186__$1 = (((G__11186 == null))?null:cljs.core.first.call(null,G__11186));var G__11186__$2 = (((G__11186__$1 == null))?null:new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(G__11186__$1));var G__11186__$3 = (((G__11186__$2 == null))?null:cljs.core.reverse.call(null,G__11186__$2));var G__11186__$4 = (((G__11186__$3 == null))?null:cljs.core.clj__GT_js.call(null,G__11186__$3));return G__11186__$4;
})();if(cljs.core.truth_(temp__4090__auto__))
{var latlong = temp__4090__auto__;var marker = L.marker(latlong);var popup_content = clustermap.components.map.marker_popup_content.call(null,location_sites);marker.bindPopup(popup_content);
marker.addTo(leaflet_map);
return marker;
} else
{return null;
}
});
clustermap.components.map.update_marker = (function update_marker(leaflet_map,marker,location){return marker.setPopupContent(clustermap.components.map.marker_popup_content.call(null,location));
});
clustermap.components.map.remove_marker = (function remove_marker(leaflet_map,marker){return leaflet_map.removeLayer(marker);
});
clustermap.components.map.update_markers = (function update_markers(leaflet_map,markers_atom,old_locations,new_locations){var markers = cljs.core.deref.call(null,markers_atom);var marker_keys = cljs.core.set.call(null,cljs.core.keys.call(null,markers));var location_keys = cljs.core.set.call(null,cljs.core.keys.call(null,new_locations));var update_marker_keys = clojure.set.intersection.call(null,marker_keys,location_keys);var new_marker_keys = clojure.set.difference.call(null,location_keys,marker_keys);var remove_marker_keys = clojure.set.difference.call(null,marker_keys,location_keys);var new_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_marker.call(null,leaflet_map,cljs.core.get.call(null,new_locations,k))], null);
});})(markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys))
,new_marker_keys));var updated_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_marker.call(null,leaflet_map,cljs.core.get.call(null,markers,k),cljs.core.get.call(null,new_locations,k))], null);
});})(markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers))
,update_marker_keys));var _ = (function (){var seq__11191 = cljs.core.seq.call(null,remove_marker_keys);var chunk__11192 = null;var count__11193 = 0;var i__11194 = 0;while(true){
if((i__11194 < count__11193))
{var k = cljs.core._nth.call(null,chunk__11192,i__11194);clustermap.components.map.remove_marker.call(null,leaflet_map,cljs.core.get.call(null,markers,k));
{
var G__11195 = seq__11191;
var G__11196 = chunk__11192;
var G__11197 = count__11193;
var G__11198 = (i__11194 + 1);
seq__11191 = G__11195;
chunk__11192 = G__11196;
count__11193 = G__11197;
i__11194 = G__11198;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__11191);if(temp__4092__auto__)
{var seq__11191__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11191__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__11191__$1);{
var G__11199 = cljs.core.chunk_rest.call(null,seq__11191__$1);
var G__11200 = c__4148__auto__;
var G__11201 = cljs.core.count.call(null,c__4148__auto__);
var G__11202 = 0;
seq__11191 = G__11199;
chunk__11192 = G__11200;
count__11193 = G__11201;
i__11194 = G__11202;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__11191__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,cljs.core.get.call(null,markers,k));
{
var G__11203 = cljs.core.next.call(null,seq__11191__$1);
var G__11204 = null;
var G__11205 = 0;
var G__11206 = 0;
seq__11191 = G__11203;
chunk__11192 = G__11204;
count__11193 = G__11205;
i__11194 = G__11206;
continue;
}
}
} else
{return null;
}
}
break;
}
})();return cljs.core.reset_BANG_.call(null,markers_atom,cljs.core.merge.call(null,updated_markers,new_markers));
});
/**
* turns a PostGIS envelope into a L.LatLngBounds
*/
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__11215 = cljs.core.js__GT_clj.call(null,envelope);var map__11215__$1 = ((cljs.core.seq_QMARK_.call(null,map__11215))?cljs.core.apply.call(null,cljs.core.hash_map,map__11215):map__11215);var clj_envelope = map__11215__$1;var vec__11216 = cljs.core.get.call(null,map__11215__$1,"coordinates");var vec__11217 = cljs.core.nth.call(null,vec__11216,0,null);var vec__11218 = cljs.core.nth.call(null,vec__11217,0,null);var miny0 = cljs.core.nth.call(null,vec__11218,0,null);var minx0 = cljs.core.nth.call(null,vec__11218,1,null);var vec__11219 = cljs.core.nth.call(null,vec__11217,1,null);var maxy1 = cljs.core.nth.call(null,vec__11219,0,null);var minx1 = cljs.core.nth.call(null,vec__11219,1,null);var vec__11220 = cljs.core.nth.call(null,vec__11217,2,null);var maxy2 = cljs.core.nth.call(null,vec__11220,0,null);var maxx2 = cljs.core.nth.call(null,vec__11220,1,null);var vec__11221 = cljs.core.nth.call(null,vec__11217,3,null);var miny3 = cljs.core.nth.call(null,vec__11221,0,null);var maxx3 = cljs.core.nth.call(null,vec__11221,1,null);var vec__11222 = cljs.core.nth.call(null,vec__11217,4,null);var miny4 = cljs.core.nth.call(null,vec__11222,0,null);var minx4 = cljs.core.nth.call(null,vec__11222,1,null);var inner = vec__11217;var coords = vec__11216;return L.latLngBounds(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null)));
});
clustermap.components.map.create_path = (function create_path(leaflet_map,uk_constituencies,boundaryline_id){var temp__4092__auto__ = (uk_constituencies[boundaryline_id]);if(cljs.core.truth_(temp__4092__auto__))
{var cons = temp__4092__auto__;var path = L.geoJson((cons["geojson"]));var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds.call(null,(cons["envelope"]));path.addTo(leaflet_map);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",1017337751),path,new cljs.core.Keyword(null,"bounds","bounds",3925666343),bounds], null);
} else
{return null;
}
});
clustermap.components.map.update_path = (function update_path(leaflet_map,uk_constituencies,path,boundaryline_id){return null;
});
clustermap.components.map.remove_path = (function remove_path(leaflet_map,path){var G__11224 = path;var G__11224__$1 = (((G__11224 == null))?null:new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(G__11224));var G__11224__$2 = (((G__11224__$1 == null))?null:leaflet_map.removeLayer(G__11224__$1));return G__11224__$2;
});
clustermap.components.map.update_paths = (function update_paths(leaflet_map,uk_constituencies,paths_atom,old_locations,new_locations){var paths = cljs.core.deref.call(null,paths_atom);var path_keys = cljs.core.set.call(null,cljs.core.keys.call(null,paths));var location_path_keys = cljs.core.set.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487),new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115)),cljs.core.apply.call(null,cljs.core.concat,cljs.core.vals.call(null,new_locations)))));var update_path_keys = clojure.set.intersection.call(null,path_keys,location_path_keys);var new_path_keys = clojure.set.difference.call(null,location_path_keys,path_keys);var remove_path_keys = clojure.set.difference.call(null,path_keys,location_path_keys);var new_paths = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_path.call(null,leaflet_map,uk_constituencies,k)], null);
});})(paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys))
,new_path_keys));var updated_paths = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys,new_paths){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_path.call(null,leaflet_map,uk_constituencies,cljs.core.get.call(null,paths,k),k)], null);
});})(paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys,new_paths))
,update_path_keys));var _ = (function (){var seq__11229 = cljs.core.seq.call(null,remove_path_keys);var chunk__11230 = null;var count__11231 = 0;var i__11232 = 0;while(true){
if((i__11232 < count__11231))
{var k = cljs.core._nth.call(null,chunk__11230,i__11232);clustermap.components.map.remove_path.call(null,leaflet_map,cljs.core.get.call(null,paths,k));
{
var G__11233 = seq__11229;
var G__11234 = chunk__11230;
var G__11235 = count__11231;
var G__11236 = (i__11232 + 1);
seq__11229 = G__11233;
chunk__11230 = G__11234;
count__11231 = G__11235;
i__11232 = G__11236;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__11229);if(temp__4092__auto__)
{var seq__11229__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11229__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__11229__$1);{
var G__11237 = cljs.core.chunk_rest.call(null,seq__11229__$1);
var G__11238 = c__4148__auto__;
var G__11239 = cljs.core.count.call(null,c__4148__auto__);
var G__11240 = 0;
seq__11229 = G__11237;
chunk__11230 = G__11238;
count__11231 = G__11239;
i__11232 = G__11240;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__11229__$1);clustermap.components.map.remove_path.call(null,leaflet_map,cljs.core.get.call(null,paths,k));
{
var G__11241 = cljs.core.next.call(null,seq__11229__$1);
var G__11242 = null;
var G__11243 = 0;
var G__11244 = 0;
seq__11229 = G__11241;
chunk__11230 = G__11242;
count__11231 = G__11243;
i__11232 = G__11244;
continue;
}
}
} else
{return null;
}
}
break;
}
})();return cljs.core.reset_BANG_.call(null,paths_atom,cljs.core.merge.call(null,updated_paths,new_paths));
});
clustermap.components.map.pan_to_selection = (function pan_to_selection(leaflet_map,paths){var bounds = (function (){var G__11246 = paths;var G__11246__$1 = (((G__11246 == null))?null:cljs.core.vals.call(null,G__11246));var G__11246__$2 = (((G__11246__$1 == null))?null:cljs.core.map.call(null,new cljs.core.Keyword(null,"bounds","bounds",3925666343),G__11246__$1));return G__11246__$2;
})();if(cljs.core.truth_(bounds))
{return cljs.core.apply.call(null,clustermap.components.map.pan_to_show,leaflet_map,bounds);
} else
{return null;
}
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__11247,owner){var map__11257 = p__11247;var map__11257__$1 = ((cljs.core.seq_QMARK_.call(null,map__11257))?cljs.core.apply.call(null,cljs.core.hash_map,map__11257):map__11257);var uk_constituencies = cljs.core.get.call(null,map__11257__$1,new cljs.core.Keyword(null,"uk-constituencies","uk-constituencies",2507232365));var selection_portfolio_company_locations = cljs.core.get.call(null,map__11257__$1,new cljs.core.Keyword(null,"selection-portfolio-company-locations","selection-portfolio-company-locations",1821239162));var selection_portfolio_company_sites = cljs.core.get.call(null,map__11257__$1,new cljs.core.Keyword(null,"selection-portfolio-company-sites","selection-portfolio-company-sites",3535568680));var selection = cljs.core.get.call(null,map__11257__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));if(typeof clustermap.components.map.t11258 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t11258 = (function (selection,selection_portfolio_company_sites,selection_portfolio_company_locations,uk_constituencies,map__11257,owner,p__11247,map_component,meta11259){
this.selection = selection;
this.selection_portfolio_company_sites = selection_portfolio_company_sites;
this.selection_portfolio_company_locations = selection_portfolio_company_locations;
this.uk_constituencies = uk_constituencies;
this.map__11257 = map__11257;
this.owner = owner;
this.p__11247 = p__11247;
this.map_component = map_component;
this.meta11259 = meta11259;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t11258.cljs$lang$type = true;
clustermap.components.map.t11258.cljs$lang$ctorStr = "clustermap.components.map/t11258";
clustermap.components.map.t11258.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map/t11258");
});
clustermap.components.map.t11258.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t11258.prototype.om$core$IDidMount$did_mount$arity$2 = (function (this$,node){var self__ = this;
var this$__$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"map","map",1014012110),clustermap.components.map.create_map.call(null,node));
});
clustermap.components.map.t11258.prototype.om$core$IRenderState$ = true;
clustermap.components.map.t11258.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__11261){var self__ = this;
var map__11262 = p__11261;var map__11262__$1 = ((cljs.core.seq_QMARK_.call(null,map__11262))?cljs.core.apply.call(null,cljs.core.hash_map,map__11262):map__11262);var map__11263 = cljs.core.get.call(null,map__11262__$1,new cljs.core.Keyword(null,"map","map",1014012110));var map__11263__$1 = ((cljs.core.seq_QMARK_.call(null,map__11263))?cljs.core.apply.call(null,cljs.core.hash_map,map__11263):map__11263);var paths = cljs.core.get.call(null,map__11263__$1,new cljs.core.Keyword(null,"paths","paths",1120343136));var markers = cljs.core.get.call(null,map__11263__$1,new cljs.core.Keyword(null,"markers","markers",1853155051));var leaflet_map = cljs.core.get.call(null,map__11263__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",4353500414));var locations = cljs.core.get.call(null,map__11262__$1,new cljs.core.Keyword(null,"locations","locations",4111682256));var this$__$1 = this;var new_locations_11266 = (cljs.core.truth_(self__.selection_portfolio_company_locations)?om.core.value.call(null,self__.selection_portfolio_company_locations):null);if((locations === new_locations_11266))
{} else
{clustermap.components.map.update_markers.call(null,leaflet_map,markers,locations,new_locations_11266);
clustermap.components.map.update_paths.call(null,leaflet_map,self__.uk_constituencies,paths,locations,new_locations_11266);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"locations","locations",4111682256),new_locations_11266);
clustermap.components.map.pan_to_selection.call(null,leaflet_map,cljs.core.deref.call(null,paths));
}
return React.DOM.div({"className": "map", "ref": "map"});
});
clustermap.components.map.t11258.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11260){var self__ = this;
var _11260__$1 = this;return self__.meta11259;
});
clustermap.components.map.t11258.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11260,meta11259__$1){var self__ = this;
var _11260__$1 = this;return (new clustermap.components.map.t11258(self__.selection,self__.selection_portfolio_company_sites,self__.selection_portfolio_company_locations,self__.uk_constituencies,self__.map__11257,self__.owner,self__.p__11247,self__.map_component,meta11259__$1));
});
clustermap.components.map.__GT_t11258 = (function __GT_t11258(selection__$1,selection_portfolio_company_sites__$1,selection_portfolio_company_locations__$1,uk_constituencies__$1,map__11257__$2,owner__$1,p__11247__$1,map_component__$1,meta11259){return (new clustermap.components.map.t11258(selection__$1,selection_portfolio_company_sites__$1,selection_portfolio_company_locations__$1,uk_constituencies__$1,map__11257__$2,owner__$1,p__11247__$1,map_component__$1,meta11259));
});
}
return (new clustermap.components.map.t11258(selection,selection_portfolio_company_sites,selection_portfolio_company_locations,uk_constituencies,map__11257__$1,owner,p__11247,map_component,null));
});
clustermap.components.map.mount = (function mount(app_state,elem_id,comm){return om.core.root.call(null,app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",1016963710),comm], null),clustermap.components.map.map_component,document.getElementById(elem_id));
});

//# sourceMappingURL=map.js.map