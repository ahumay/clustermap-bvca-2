// Compiled by ClojureScript 0.0-2322
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__59373,args){var map__59375 = p__59373;var map__59375__$1 = ((cljs.core.seq_QMARK_.call(null,map__59375))?cljs.core.apply.call(null,cljs.core.hash_map,map__59375):map__59375);var debug = cljs.core.get.call(null,map__59375__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__59373,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__59373,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__59376){
var p__59373 = cljs.core.first(arglist__59376);
var args = cljs.core.rest(arglist__59376);
return log__delegate(p__59373,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__59377){var map__59379 = p__59377;var map__59379__$1 = ((cljs.core.seq_QMARK_.call(null,map__59379))?cljs.core.apply.call(null,cljs.core.hash_map,map__59379):map__59379);var websocket_url = cljs.core.get.call(null,map__59379__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__59380,callback){var map__59382 = p__59380;var map__59382__$1 = ((cljs.core.seq_QMARK_.call(null,map__59382))?cljs.core.apply.call(null,cljs.core.hash_map,map__59382):map__59382);var msg = map__59382__$1;var dependency_file = cljs.core.get.call(null,map__59382__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__59382__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__59382__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3558__auto__ = dependency_file;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__59382,map__59382__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__59382,map__59382__$1,msg,dependency_file,namespace,request_url))
);
} else
{return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.call(null);figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.call(null,out,url);
return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__59383,p__59384){var map__59387 = p__59383;var map__59387__$1 = ((cljs.core.seq_QMARK_.call(null,map__59387))?cljs.core.apply.call(null,cljs.core.hash_map,map__59387):map__59387);var opts = map__59387__$1;var url_rewriter = cljs.core.get.call(null,map__59387__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__59388 = p__59384;var map__59388__$1 = ((cljs.core.seq_QMARK_.call(null,map__59388))?cljs.core.apply.call(null,cljs.core.hash_map,map__59388):map__59388);var d = map__59388__$1;var file = cljs.core.get.call(null,map__59388__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__59389,p__59390){var map__59432 = p__59389;var map__59432__$1 = ((cljs.core.seq_QMARK_.call(null,map__59432))?cljs.core.apply.call(null,cljs.core.hash_map,map__59432):map__59432);var opts = map__59432__$1;var on_jsload = cljs.core.get.call(null,map__59432__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__59432__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__59433 = p__59390;var map__59433__$1 = ((cljs.core.seq_QMARK_.call(null,map__59433))?cljs.core.apply.call(null,cljs.core.hash_map,map__59433):map__59433);var files = cljs.core.get.call(null,map__59433__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,map__59432,map__59432__$1,opts,on_jsload,before_jsload,map__59433,map__59433__$1,files){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,map__59432,map__59432__$1,opts,on_jsload,before_jsload,map__59433,map__59433__$1,files){
return (function (state_59456){var state_val_59457 = (state_59456[(1)]);if((state_val_59457 === (6)))
{var inst_59438 = (state_59456[(7)]);var inst_59447 = (state_59456[(2)]);var inst_59448 = cljs.core.PersistentVector.EMPTY_NODE;var inst_59449 = [inst_59438];var inst_59450 = (new cljs.core.PersistentVector(null,1,(5),inst_59448,inst_59449,null));var inst_59451 = cljs.core.apply.call(null,on_jsload,inst_59450);var state_59456__$1 = (function (){var statearr_59458 = state_59456;(statearr_59458[(8)] = inst_59447);
return statearr_59458;
})();var statearr_59459_59473 = state_59456__$1;(statearr_59459_59473[(2)] = inst_59451);
(statearr_59459_59473[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_59457 === (5)))
{var inst_59454 = (state_59456[(2)]);var state_59456__$1 = state_59456;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59456__$1,inst_59454);
} else
{if((state_val_59457 === (4)))
{var state_59456__$1 = state_59456;var statearr_59460_59474 = state_59456__$1;(statearr_59460_59474[(2)] = null);
(statearr_59460_59474[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_59457 === (3)))
{var inst_59438 = (state_59456[(7)]);var inst_59441 = console.debug("Figwheel: loaded these files");var inst_59442 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_59438);var inst_59443 = cljs.core.prn_str.call(null,inst_59442);var inst_59444 = console.log(inst_59443);var inst_59445 = cljs.core.async.timeout.call(null,(10));var state_59456__$1 = (function (){var statearr_59461 = state_59456;(statearr_59461[(9)] = inst_59444);
(statearr_59461[(10)] = inst_59441);
return statearr_59461;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59456__$1,(6),inst_59445);
} else
{if((state_val_59457 === (2)))
{var inst_59438 = (state_59456[(7)]);var inst_59438__$1 = (state_59456[(2)]);var inst_59439 = cljs.core.not_empty.call(null,inst_59438__$1);var state_59456__$1 = (function (){var statearr_59462 = state_59456;(statearr_59462[(7)] = inst_59438__$1);
return statearr_59462;
})();if(cljs.core.truth_(inst_59439))
{var statearr_59463_59475 = state_59456__$1;(statearr_59463_59475[(1)] = (3));
} else
{var statearr_59464_59476 = state_59456__$1;(statearr_59464_59476[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_59457 === (1)))
{var inst_59434 = before_jsload.call(null,files);var inst_59435 = figwheel.client.add_request_urls.call(null,opts,files);var inst_59436 = figwheel.client.load_all_js_files.call(null,inst_59435);var state_59456__$1 = (function (){var statearr_59465 = state_59456;(statearr_59465[(11)] = inst_59434);
return statearr_59465;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59456__$1,(2),inst_59436);
} else
{return null;
}
}
}
}
}
}
});})(c__5708__auto__,map__59432,map__59432__$1,opts,on_jsload,before_jsload,map__59433,map__59433__$1,files))
;return ((function (switch__5693__auto__,c__5708__auto__,map__59432,map__59432__$1,opts,on_jsload,before_jsload,map__59433,map__59433__$1,files){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_59469 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_59469[(0)] = state_machine__5694__auto__);
(statearr_59469[(1)] = (1));
return statearr_59469;
});
var state_machine__5694__auto____1 = (function (state_59456){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_59456);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e59470){if((e59470 instanceof Object))
{var ex__5697__auto__ = e59470;var statearr_59471_59477 = state_59456;(statearr_59471_59477[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59456);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e59470;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__59478 = state_59456;
state_59456 = G__59478;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_59456){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_59456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,map__59432,map__59432__$1,opts,on_jsload,before_jsload,map__59433,map__59433__$1,files))
})();var state__5710__auto__ = (function (){var statearr_59472 = f__5709__auto__.call(null);(statearr_59472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_59472;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,map__59432,map__59432__$1,opts,on_jsload,before_jsload,map__59433,map__59433__$1,files))
);
return c__5708__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__59479,link_href){var map__59481 = p__59479;var map__59481__$1 = ((cljs.core.seq_QMARK_.call(null,map__59481))?cljs.core.apply.call(null,cljs.core.hash_map,map__59481):map__59481);var request_url = cljs.core.get.call(null,map__59481__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__59481__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){return cljs.core.some.call(null,(function (l){if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster.call(null,url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster.call(null,url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.call(null,orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,parent){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,parent){
return (function (state_59502){var state_val_59503 = (state_59502[(1)]);if((state_val_59503 === (2)))
{var inst_59499 = (state_59502[(2)]);var inst_59500 = parent.removeChild(orig_link);var state_59502__$1 = (function (){var statearr_59504 = state_59502;(statearr_59504[(7)] = inst_59499);
return statearr_59504;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59502__$1,inst_59500);
} else
{if((state_val_59503 === (1)))
{var inst_59497 = cljs.core.async.timeout.call(null,(200));var state_59502__$1 = state_59502;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59502__$1,(2),inst_59497);
} else
{return null;
}
}
});})(c__5708__auto__,parent))
;return ((function (switch__5693__auto__,c__5708__auto__,parent){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_59508 = [null,null,null,null,null,null,null,null];(statearr_59508[(0)] = state_machine__5694__auto__);
(statearr_59508[(1)] = (1));
return statearr_59508;
});
var state_machine__5694__auto____1 = (function (state_59502){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_59502);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e59509){if((e59509 instanceof Object))
{var ex__5697__auto__ = e59509;var statearr_59510_59512 = state_59502;(statearr_59510_59512[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59502);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e59509;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__59513 = state_59502;
state_59502 = G__59513;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_59502){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_59502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,parent))
})();var state__5710__auto__ = (function (){var statearr_59511 = f__5709__auto__.call(null);(statearr_59511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_59511;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,parent))
);
return c__5708__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__59514){var map__59516 = p__59514;var map__59516__$1 = ((cljs.core.seq_QMARK_.call(null,map__59516))?cljs.core.apply.call(null,cljs.core.hash_map,map__59516):map__59516);var f_data = map__59516__$1;var request_url = cljs.core.get.call(null,map__59516__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__59516__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__59517,files_msg){var map__59539 = p__59517;var map__59539__$1 = ((cljs.core.seq_QMARK_.call(null,map__59539))?cljs.core.apply.call(null,cljs.core.hash_map,map__59539):map__59539);var opts = map__59539__$1;var on_cssload = cljs.core.get.call(null,map__59539__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__59540_59560 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__59541_59561 = null;var count__59542_59562 = (0);var i__59543_59563 = (0);while(true){
if((i__59543_59563 < count__59542_59562))
{var f_59564 = cljs.core._nth.call(null,chunk__59541_59561,i__59543_59563);figwheel.client.reload_css_file.call(null,f_59564);
{
var G__59565 = seq__59540_59560;
var G__59566 = chunk__59541_59561;
var G__59567 = count__59542_59562;
var G__59568 = (i__59543_59563 + (1));
seq__59540_59560 = G__59565;
chunk__59541_59561 = G__59566;
count__59542_59562 = G__59567;
i__59543_59563 = G__59568;
continue;
}
} else
{var temp__4126__auto___59569 = cljs.core.seq.call(null,seq__59540_59560);if(temp__4126__auto___59569)
{var seq__59540_59570__$1 = temp__4126__auto___59569;if(cljs.core.chunked_seq_QMARK_.call(null,seq__59540_59570__$1))
{var c__4314__auto___59571 = cljs.core.chunk_first.call(null,seq__59540_59570__$1);{
var G__59572 = cljs.core.chunk_rest.call(null,seq__59540_59570__$1);
var G__59573 = c__4314__auto___59571;
var G__59574 = cljs.core.count.call(null,c__4314__auto___59571);
var G__59575 = (0);
seq__59540_59560 = G__59572;
chunk__59541_59561 = G__59573;
count__59542_59562 = G__59574;
i__59543_59563 = G__59575;
continue;
}
} else
{var f_59576 = cljs.core.first.call(null,seq__59540_59570__$1);figwheel.client.reload_css_file.call(null,f_59576);
{
var G__59577 = cljs.core.next.call(null,seq__59540_59570__$1);
var G__59578 = null;
var G__59579 = (0);
var G__59580 = (0);
seq__59540_59560 = G__59577;
chunk__59541_59561 = G__59578;
count__59542_59562 = G__59579;
i__59543_59563 = G__59580;
continue;
}
}
} else
{}
}
break;
}
var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,map__59539,map__59539__$1,opts,on_cssload){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,map__59539,map__59539__$1,opts,on_cssload){
return (function (state_59550){var state_val_59551 = (state_59550[(1)]);if((state_val_59551 === (2)))
{var inst_59546 = (state_59550[(2)]);var inst_59547 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_59548 = on_cssload.call(null,inst_59547);var state_59550__$1 = (function (){var statearr_59552 = state_59550;(statearr_59552[(7)] = inst_59546);
return statearr_59552;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59550__$1,inst_59548);
} else
{if((state_val_59551 === (1)))
{var inst_59544 = cljs.core.async.timeout.call(null,(100));var state_59550__$1 = state_59550;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59550__$1,(2),inst_59544);
} else
{return null;
}
}
});})(c__5708__auto__,map__59539,map__59539__$1,opts,on_cssload))
;return ((function (switch__5693__auto__,c__5708__auto__,map__59539,map__59539__$1,opts,on_cssload){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_59556 = [null,null,null,null,null,null,null,null];(statearr_59556[(0)] = state_machine__5694__auto__);
(statearr_59556[(1)] = (1));
return statearr_59556;
});
var state_machine__5694__auto____1 = (function (state_59550){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_59550);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e59557){if((e59557 instanceof Object))
{var ex__5697__auto__ = e59557;var statearr_59558_59581 = state_59550;(statearr_59558_59581[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59550);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e59557;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__59582 = state_59550;
state_59550 = G__59582;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_59550){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_59550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,map__59539,map__59539__$1,opts,on_cssload))
})();var state__5710__auto__ = (function (){var statearr_59559 = f__5709__auto__.call(null);(statearr_59559[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_59559;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,map__59539,map__59539__$1,opts,on_cssload))
);
return c__5708__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__59583){var map__59588 = p__59583;var map__59588__$1 = ((cljs.core.seq_QMARK_.call(null,map__59588))?cljs.core.apply.call(null,cljs.core.hash_map,map__59588):map__59588);var opts = map__59588__$1;var on_compile_fail = cljs.core.get.call(null,map__59588__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__59588__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__59588__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__59588__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__59588,map__59588__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__59589 = cljs.core._EQ_;var expr__59590 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__59589.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__59590)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__59589.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__59590)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__59589.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__59590)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__59588,map__59588__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__59588,map__59588__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__59588,map__59588__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__59588,map__59588__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__59588,map__59588__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__59588,map__59588__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__59588,map__59588__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__59588,map__59588__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__59588,map__59588__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj59595 = {"detail":url};return obj59595;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__59596){var map__59598 = p__59596;var map__59598__$1 = ((cljs.core.seq_QMARK_.call(null,map__59598))?cljs.core.apply.call(null,cljs.core.hash_map,map__59598):map__59598);var class$ = cljs.core.get.call(null,map__59598__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__59598__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__59599){var map__59605 = p__59599;var map__59605__$1 = ((cljs.core.seq_QMARK_.call(null,map__59605))?cljs.core.apply.call(null,cljs.core.hash_map,map__59605):map__59605);var ed = map__59605__$1;var exception_data = cljs.core.get.call(null,map__59605__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__59605__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__59606_59610 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__59607_59611 = null;var count__59608_59612 = (0);var i__59609_59613 = (0);while(true){
if((i__59609_59613 < count__59608_59612))
{var msg_59614 = cljs.core._nth.call(null,chunk__59607_59611,i__59609_59613);console.log(msg_59614);
{
var G__59615 = seq__59606_59610;
var G__59616 = chunk__59607_59611;
var G__59617 = count__59608_59612;
var G__59618 = (i__59609_59613 + (1));
seq__59606_59610 = G__59615;
chunk__59607_59611 = G__59616;
count__59608_59612 = G__59617;
i__59609_59613 = G__59618;
continue;
}
} else
{var temp__4126__auto___59619 = cljs.core.seq.call(null,seq__59606_59610);if(temp__4126__auto___59619)
{var seq__59606_59620__$1 = temp__4126__auto___59619;if(cljs.core.chunked_seq_QMARK_.call(null,seq__59606_59620__$1))
{var c__4314__auto___59621 = cljs.core.chunk_first.call(null,seq__59606_59620__$1);{
var G__59622 = cljs.core.chunk_rest.call(null,seq__59606_59620__$1);
var G__59623 = c__4314__auto___59621;
var G__59624 = cljs.core.count.call(null,c__4314__auto___59621);
var G__59625 = (0);
seq__59606_59610 = G__59622;
chunk__59607_59611 = G__59623;
count__59608_59612 = G__59624;
i__59609_59613 = G__59625;
continue;
}
} else
{var msg_59626 = cljs.core.first.call(null,seq__59606_59620__$1);console.log(msg_59626);
{
var G__59627 = cljs.core.next.call(null,seq__59606_59620__$1);
var G__59628 = null;
var G__59629 = (0);
var G__59630 = (0);
seq__59606_59610 = G__59627;
chunk__59607_59611 = G__59628;
count__59608_59612 = G__59629;
i__59609_59613 = G__59630;
continue;
}
}
} else
{}
}
break;
}
return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){console.debug("Figwheel: loading files");
return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){console.debug("Figwheel: loaded CSS files");
console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__3558__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),("ws://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host)+"/figwheel-ws")], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__59631){var map__59633 = p__59631;var map__59633__$1 = ((cljs.core.seq_QMARK_.call(null,map__59633))?cljs.core.apply.call(null,cljs.core.hash_map,map__59633):map__59633);var opts = map__59633__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__59631 = null;if (arguments.length > 0) {
  p__59631 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__59631);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__59634){
var p__59631 = cljs.core.seq(arglist__59634);
return watch_and_reload__delegate(p__59631);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map