// Compiled by ClojureScript 0.0-2261
goog.provide('clustermap.nav');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('cljs.core.async');
goog.require('domina.css');
goog.require('domina');
goog.require('jayq.core');
goog.require('domina');
goog.require('cljs.core.async');
goog.require('domina.events');
goog.require('domina.events');
goog.require('jayq.core');
goog.require('domina.css');
goog.require('domina.xpath');
goog.require('domina.xpath');
clustermap.nav.init_bootstrap_tooltips = (function init_bootstrap_tooltips(){return jayq.core.$.call(null,"[data-toggle='tooltip']").tooltip();
});
clustermap.nav.handle_toggle_nav_search = (function handle_toggle_nav_search(){return domina.events.listen_BANG_.call(null,domina.css.sel.call(null,"#nav .search > a"),new cljs.core.Keyword(null,"click","click",1912301393),(function (e){var target = domina.events.target.call(null,e);var parent = domina.xpath.xpath.call(null,target,"..");domina.events.prevent_default.call(null,e);
domina.toggle_class_BANG_.call(null,parent,"open");
return jayq.core.$.call(null,cljs.core.first.call(null,domina.nodes.call(null,domina.css.sel.call(null,"#search")))).toggle();
}));
});
clustermap.nav.handle_hide_show_map_report = (function handle_hide_show_map_report(){return domina.events.listen_BANG_.call(null,domina.css.sel.call(null,"#map-report > a"),new cljs.core.Keyword(null,"click","click",1912301393),(function (e){var target = domina.events.target.call(null,e);var mr = domina.css.sel.call(null,"#map-report");domina.events.prevent_default.call(null,e);
if(cljs.core.truth_(domina.has_class_QMARK_.call(null,mr,"open")))
{domina.remove_class_BANG_.call(null,mr,"open");
return jayq.core.anim.call(null,jayq.core.$.call(null,cljs.core.first.call(null,domina.nodes.call(null,mr))),new cljs.core.PersistentArrayMap(null, 1, ["right","-270px"], null),(400));
} else
{if(true)
{domina.add_class_BANG_.call(null,mr,"open");
return jayq.core.anim.call(null,jayq.core.$.call(null,cljs.core.first.call(null,domina.nodes.call(null,mr))),new cljs.core.PersistentArrayMap(null, 1, ["right","0px"], null),(400));
} else
{return null;
}
}
}));
});
clustermap.nav.body_view_classes = new cljs.core.PersistentArrayMap(null, 2, ["map","view-map","lists","view-lists"], null);
/**
* do the DOM manip to change the view
*/
clustermap.nav.change_view = (function change_view(view){if(cljs.core.truth_(cljs.core.get.call(null,clustermap.nav.body_view_classes,view)))
{} else
{throw (new Error(("unknown view: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(view))));
}
var body = domina.css.sel.call(null,"body");var target_selector = ("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(view));var target_li = domina.css.sel.call(null,target_selector);var ul = domina.xpath.xpath.call(null,target_li,"..");var active_li = domina.css.sel.call(null,ul,"> .active");domina.remove_class_BANG_.call(null,active_li,"active");
domina.add_class_BANG_.call(null,target_li,"active");
var seq__13953_13959 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__13954_13960 = null;var count__13955_13961 = (0);var i__13956_13962 = (0);while(true){
if((i__13956_13962 < count__13955_13961))
{var vec__13957_13963 = cljs.core._nth.call(null,chunk__13954_13960,i__13956_13962);var v_13964 = cljs.core.nth.call(null,vec__13957_13963,(0),null);var body_class_13965 = cljs.core.nth.call(null,vec__13957_13963,(1),null);if(cljs.core._EQ_.call(null,v_13964,view))
{domina.add_class_BANG_.call(null,body,body_class_13965);
} else
{domina.remove_class_BANG_.call(null,body,body_class_13965);
}
{
var G__13966 = seq__13953_13959;
var G__13967 = chunk__13954_13960;
var G__13968 = count__13955_13961;
var G__13969 = (i__13956_13962 + (1));
seq__13953_13959 = G__13966;
chunk__13954_13960 = G__13967;
count__13955_13961 = G__13968;
i__13956_13962 = G__13969;
continue;
}
} else
{var temp__4126__auto___13970 = cljs.core.seq.call(null,seq__13953_13959);if(temp__4126__auto___13970)
{var seq__13953_13971__$1 = temp__4126__auto___13970;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13953_13971__$1))
{var c__4299__auto___13972 = cljs.core.chunk_first.call(null,seq__13953_13971__$1);{
var G__13973 = cljs.core.chunk_rest.call(null,seq__13953_13971__$1);
var G__13974 = c__4299__auto___13972;
var G__13975 = cljs.core.count.call(null,c__4299__auto___13972);
var G__13976 = (0);
seq__13953_13959 = G__13973;
chunk__13954_13960 = G__13974;
count__13955_13961 = G__13975;
i__13956_13962 = G__13976;
continue;
}
} else
{var vec__13958_13977 = cljs.core.first.call(null,seq__13953_13971__$1);var v_13978 = cljs.core.nth.call(null,vec__13958_13977,(0),null);var body_class_13979 = cljs.core.nth.call(null,vec__13958_13977,(1),null);if(cljs.core._EQ_.call(null,v_13978,view))
{domina.add_class_BANG_.call(null,body,body_class_13979);
} else
{domina.remove_class_BANG_.call(null,body,body_class_13979);
}
{
var G__13980 = cljs.core.next.call(null,seq__13953_13971__$1);
var G__13981 = null;
var G__13982 = (0);
var G__13983 = (0);
seq__13953_13959 = G__13980;
chunk__13954_13960 = G__13981;
count__13955_13961 = G__13982;
i__13956_13962 = G__13983;
continue;
}
}
} else
{}
}
break;
}
return jayq.core.$.call(null,document).trigger("clustermap-change-view");
});
/**
* sends [:change-view <view>] messages to the command channel
*/
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__13990 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__13991 = null;var count__13992 = (0);var i__13993 = (0);while(true){
if((i__13993 < count__13992))
{var vec__13994 = cljs.core._nth.call(null,chunk__13991,i__13993);var v = cljs.core.nth.call(null,vec__13994,(0),null);var _ = cljs.core.nth.call(null,vec__13994,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__13990,chunk__13991,count__13992,i__13993,vec__13994,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__13990,chunk__13991,count__13992,i__13993,vec__13994,v,_))
);
{
var G__13996 = seq__13990;
var G__13997 = chunk__13991;
var G__13998 = count__13992;
var G__13999 = (i__13993 + (1));
seq__13990 = G__13996;
chunk__13991 = G__13997;
count__13992 = G__13998;
i__13993 = G__13999;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__13990);if(temp__4126__auto__)
{var seq__13990__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13990__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__13990__$1);{
var G__14000 = cljs.core.chunk_rest.call(null,seq__13990__$1);
var G__14001 = c__4299__auto__;
var G__14002 = cljs.core.count.call(null,c__4299__auto__);
var G__14003 = (0);
seq__13990 = G__14000;
chunk__13991 = G__14001;
count__13992 = G__14002;
i__13993 = G__14003;
continue;
}
} else
{var vec__13995 = cljs.core.first.call(null,seq__13990__$1);var v = cljs.core.nth.call(null,vec__13995,(0),null);var _ = cljs.core.nth.call(null,vec__13995,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__13990,chunk__13991,count__13992,i__13993,vec__13995,v,_,seq__13990__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__13990,chunk__13991,count__13992,i__13993,vec__13995,v,_,seq__13990__$1,temp__4126__auto__))
);
{
var G__14004 = cljs.core.next.call(null,seq__13990__$1);
var G__14005 = null;
var G__14006 = (0);
var G__14007 = (0);
seq__13990 = G__14004;
chunk__13991 = G__14005;
count__13992 = G__14006;
i__13993 = G__14007;
continue;
}
}
} else
{return null;
}
}
break;
}
});
clustermap.nav.init = (function init(comm){clustermap.nav.init_bootstrap_tooltips.call(null);
clustermap.nav.handle_toggle_nav_search.call(null);
clustermap.nav.handle_hide_show_map_report.call(null);
return clustermap.nav.handle_view_switches.call(null,comm);
});
