// Compiled by ClojureScript 0.0-2322
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__22454__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__22453 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__22453,(0),null);var body = cljs.core.nthnext.call(null,vec__22453,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__22454 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__22454__delegate.call(this,args);};
G__22454.cljs$lang$maxFixedArity = 0;
G__22454.cljs$lang$applyTo = (function (arglist__22455){
var args = cljs.core.seq(arglist__22455);
return G__22454__delegate(args);
});
G__22454.cljs$core$IFn$_invoke$arity$variadic = G__22454__delegate;
return G__22454;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4283__auto__ = (function iter__22460(s__22461){return (new cljs.core.LazySeq(null,(function (){var s__22461__$1 = s__22461;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22461__$1);if(temp__4126__auto__)
{var s__22461__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22461__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__22461__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__22463 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__22462 = (0);while(true){
if((i__22462 < size__4282__auto__))
{var args = cljs.core._nth.call(null,c__4281__auto__,i__22462);cljs.core.chunk_append.call(null,b__22463,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__22464 = (i__22462 + (1));
i__22462 = G__22464;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22463),iter__22460.call(null,cljs.core.chunk_rest.call(null,s__22461__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22463),null);
}
} else
{var args = cljs.core.first.call(null,s__22461__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__22460.call(null,cljs.core.rest.call(null,s__22461__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){return React.renderComponentToString(component);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4283__auto__ = (function iter__22469(s__22470){return (new cljs.core.LazySeq(null,(function (){var s__22470__$1 = s__22470;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22470__$1);if(temp__4126__auto__)
{var s__22470__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22470__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__22470__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__22472 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__22471 = (0);while(true){
if((i__22471 < size__4282__auto__))
{var style = cljs.core._nth.call(null,c__4281__auto__,i__22471);cljs.core.chunk_append.call(null,b__22472,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__22473 = (i__22471 + (1));
i__22471 = G__22473;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22472),iter__22469.call(null,cljs.core.chunk_rest.call(null,s__22470__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22472),null);
}
} else
{var style = cljs.core.first.call(null,s__22470__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__22469.call(null,cljs.core.rest.call(null,s__22470__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__22474){
var styles = cljs.core.seq(arglist__22474);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){return sablono.core.include_js.call(null,"http://fb.me/react-0.9.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to22475 = (function() { 
var link_to22475__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to22475 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to22475__delegate.call(this,url,content);};
link_to22475.cljs$lang$maxFixedArity = 1;
link_to22475.cljs$lang$applyTo = (function (arglist__22476){
var url = cljs.core.first(arglist__22476);
var content = cljs.core.rest(arglist__22476);
return link_to22475__delegate(url,content);
});
link_to22475.cljs$core$IFn$_invoke$arity$variadic = link_to22475__delegate;
return link_to22475;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to22475);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to22477 = (function() { 
var mail_to22477__delegate = function (e_mail,p__22478){var vec__22480 = p__22478;var content = cljs.core.nth.call(null,vec__22480,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3558__auto__ = content;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to22477 = function (e_mail,var_args){
var p__22478 = null;if (arguments.length > 1) {
  p__22478 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to22477__delegate.call(this,e_mail,p__22478);};
mail_to22477.cljs$lang$maxFixedArity = 1;
mail_to22477.cljs$lang$applyTo = (function (arglist__22481){
var e_mail = cljs.core.first(arglist__22481);
var p__22478 = cljs.core.rest(arglist__22481);
return mail_to22477__delegate(e_mail,p__22478);
});
mail_to22477.cljs$core$IFn$_invoke$arity$variadic = mail_to22477__delegate;
return mail_to22477;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to22477);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list22482 = (function unordered_list22482(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4283__auto__ = (function iter__22487(s__22488){return (new cljs.core.LazySeq(null,(function (){var s__22488__$1 = s__22488;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22488__$1);if(temp__4126__auto__)
{var s__22488__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22488__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__22488__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__22490 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__22489 = (0);while(true){
if((i__22489 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__22489);cljs.core.chunk_append.call(null,b__22490,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__22491 = (i__22489 + (1));
i__22489 = G__22491;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22490),iter__22487.call(null,cljs.core.chunk_rest.call(null,s__22488__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22490),null);
}
} else
{var x = cljs.core.first.call(null,s__22488__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__22487.call(null,cljs.core.rest.call(null,s__22488__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list22482);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list22492 = (function ordered_list22492(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4283__auto__ = (function iter__22497(s__22498){return (new cljs.core.LazySeq(null,(function (){var s__22498__$1 = s__22498;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22498__$1);if(temp__4126__auto__)
{var s__22498__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22498__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__22498__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__22500 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__22499 = (0);while(true){
if((i__22499 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__22499);cljs.core.chunk_append.call(null,b__22500,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__22501 = (i__22499 + (1));
i__22499 = G__22501;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22500),iter__22497.call(null,cljs.core.chunk_rest.call(null,s__22498__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22500),null);
}
} else
{var x = cljs.core.first.call(null,s__22498__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__22497.call(null,cljs.core.rest.call(null,s__22498__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list22492);
/**
* Create an image element.
*/
sablono.core.image22502 = (function() {
var image22502 = null;
var image22502__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image22502__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image22502 = function(src,alt){
switch(arguments.length){
case 1:
return image22502__1.call(this,src);
case 2:
return image22502__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image22502.cljs$core$IFn$_invoke$arity$1 = image22502__1;
image22502.cljs$core$IFn$_invoke$arity$2 = image22502__2;
return image22502;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image22502);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__22503_SHARP_,p2__22504_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22503_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__22504_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__22505_SHARP_,p2__22506_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22505_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__22506_SHARP_));
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field22507 = (function() {
var color_field22507 = null;
var color_field22507__1 = (function (name__13522__auto__){return color_field22507.call(null,name__13522__auto__,null);
});
var color_field22507__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__13522__auto__,value__13523__auto__);
});
color_field22507 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return color_field22507__1.call(this,name__13522__auto__);
case 2:
return color_field22507__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field22507.cljs$core$IFn$_invoke$arity$1 = color_field22507__1;
color_field22507.cljs$core$IFn$_invoke$arity$2 = color_field22507__2;
return color_field22507;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field22507);
/**
* Creates a date input field.
*/
sablono.core.date_field22508 = (function() {
var date_field22508 = null;
var date_field22508__1 = (function (name__13522__auto__){return date_field22508.call(null,name__13522__auto__,null);
});
var date_field22508__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__13522__auto__,value__13523__auto__);
});
date_field22508 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return date_field22508__1.call(this,name__13522__auto__);
case 2:
return date_field22508__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field22508.cljs$core$IFn$_invoke$arity$1 = date_field22508__1;
date_field22508.cljs$core$IFn$_invoke$arity$2 = date_field22508__2;
return date_field22508;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field22508);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field22509 = (function() {
var datetime_field22509 = null;
var datetime_field22509__1 = (function (name__13522__auto__){return datetime_field22509.call(null,name__13522__auto__,null);
});
var datetime_field22509__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__13522__auto__,value__13523__auto__);
});
datetime_field22509 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return datetime_field22509__1.call(this,name__13522__auto__);
case 2:
return datetime_field22509__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field22509.cljs$core$IFn$_invoke$arity$1 = datetime_field22509__1;
datetime_field22509.cljs$core$IFn$_invoke$arity$2 = datetime_field22509__2;
return datetime_field22509;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field22509);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field22510 = (function() {
var datetime_local_field22510 = null;
var datetime_local_field22510__1 = (function (name__13522__auto__){return datetime_local_field22510.call(null,name__13522__auto__,null);
});
var datetime_local_field22510__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__13522__auto__,value__13523__auto__);
});
datetime_local_field22510 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return datetime_local_field22510__1.call(this,name__13522__auto__);
case 2:
return datetime_local_field22510__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field22510.cljs$core$IFn$_invoke$arity$1 = datetime_local_field22510__1;
datetime_local_field22510.cljs$core$IFn$_invoke$arity$2 = datetime_local_field22510__2;
return datetime_local_field22510;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field22510);
/**
* Creates a email input field.
*/
sablono.core.email_field22511 = (function() {
var email_field22511 = null;
var email_field22511__1 = (function (name__13522__auto__){return email_field22511.call(null,name__13522__auto__,null);
});
var email_field22511__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__13522__auto__,value__13523__auto__);
});
email_field22511 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return email_field22511__1.call(this,name__13522__auto__);
case 2:
return email_field22511__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field22511.cljs$core$IFn$_invoke$arity$1 = email_field22511__1;
email_field22511.cljs$core$IFn$_invoke$arity$2 = email_field22511__2;
return email_field22511;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field22511);
/**
* Creates a file input field.
*/
sablono.core.file_field22512 = (function() {
var file_field22512 = null;
var file_field22512__1 = (function (name__13522__auto__){return file_field22512.call(null,name__13522__auto__,null);
});
var file_field22512__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__13522__auto__,value__13523__auto__);
});
file_field22512 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return file_field22512__1.call(this,name__13522__auto__);
case 2:
return file_field22512__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field22512.cljs$core$IFn$_invoke$arity$1 = file_field22512__1;
file_field22512.cljs$core$IFn$_invoke$arity$2 = file_field22512__2;
return file_field22512;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field22512);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field22513 = (function() {
var hidden_field22513 = null;
var hidden_field22513__1 = (function (name__13522__auto__){return hidden_field22513.call(null,name__13522__auto__,null);
});
var hidden_field22513__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__13522__auto__,value__13523__auto__);
});
hidden_field22513 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return hidden_field22513__1.call(this,name__13522__auto__);
case 2:
return hidden_field22513__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field22513.cljs$core$IFn$_invoke$arity$1 = hidden_field22513__1;
hidden_field22513.cljs$core$IFn$_invoke$arity$2 = hidden_field22513__2;
return hidden_field22513;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field22513);
/**
* Creates a month input field.
*/
sablono.core.month_field22514 = (function() {
var month_field22514 = null;
var month_field22514__1 = (function (name__13522__auto__){return month_field22514.call(null,name__13522__auto__,null);
});
var month_field22514__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__13522__auto__,value__13523__auto__);
});
month_field22514 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return month_field22514__1.call(this,name__13522__auto__);
case 2:
return month_field22514__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field22514.cljs$core$IFn$_invoke$arity$1 = month_field22514__1;
month_field22514.cljs$core$IFn$_invoke$arity$2 = month_field22514__2;
return month_field22514;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field22514);
/**
* Creates a number input field.
*/
sablono.core.number_field22515 = (function() {
var number_field22515 = null;
var number_field22515__1 = (function (name__13522__auto__){return number_field22515.call(null,name__13522__auto__,null);
});
var number_field22515__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__13522__auto__,value__13523__auto__);
});
number_field22515 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return number_field22515__1.call(this,name__13522__auto__);
case 2:
return number_field22515__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field22515.cljs$core$IFn$_invoke$arity$1 = number_field22515__1;
number_field22515.cljs$core$IFn$_invoke$arity$2 = number_field22515__2;
return number_field22515;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field22515);
/**
* Creates a password input field.
*/
sablono.core.password_field22516 = (function() {
var password_field22516 = null;
var password_field22516__1 = (function (name__13522__auto__){return password_field22516.call(null,name__13522__auto__,null);
});
var password_field22516__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__13522__auto__,value__13523__auto__);
});
password_field22516 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return password_field22516__1.call(this,name__13522__auto__);
case 2:
return password_field22516__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field22516.cljs$core$IFn$_invoke$arity$1 = password_field22516__1;
password_field22516.cljs$core$IFn$_invoke$arity$2 = password_field22516__2;
return password_field22516;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field22516);
/**
* Creates a range input field.
*/
sablono.core.range_field22517 = (function() {
var range_field22517 = null;
var range_field22517__1 = (function (name__13522__auto__){return range_field22517.call(null,name__13522__auto__,null);
});
var range_field22517__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__13522__auto__,value__13523__auto__);
});
range_field22517 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return range_field22517__1.call(this,name__13522__auto__);
case 2:
return range_field22517__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field22517.cljs$core$IFn$_invoke$arity$1 = range_field22517__1;
range_field22517.cljs$core$IFn$_invoke$arity$2 = range_field22517__2;
return range_field22517;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field22517);
/**
* Creates a search input field.
*/
sablono.core.search_field22518 = (function() {
var search_field22518 = null;
var search_field22518__1 = (function (name__13522__auto__){return search_field22518.call(null,name__13522__auto__,null);
});
var search_field22518__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__13522__auto__,value__13523__auto__);
});
search_field22518 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return search_field22518__1.call(this,name__13522__auto__);
case 2:
return search_field22518__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field22518.cljs$core$IFn$_invoke$arity$1 = search_field22518__1;
search_field22518.cljs$core$IFn$_invoke$arity$2 = search_field22518__2;
return search_field22518;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field22518);
/**
* Creates a tel input field.
*/
sablono.core.tel_field22519 = (function() {
var tel_field22519 = null;
var tel_field22519__1 = (function (name__13522__auto__){return tel_field22519.call(null,name__13522__auto__,null);
});
var tel_field22519__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__13522__auto__,value__13523__auto__);
});
tel_field22519 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return tel_field22519__1.call(this,name__13522__auto__);
case 2:
return tel_field22519__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field22519.cljs$core$IFn$_invoke$arity$1 = tel_field22519__1;
tel_field22519.cljs$core$IFn$_invoke$arity$2 = tel_field22519__2;
return tel_field22519;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field22519);
/**
* Creates a text input field.
*/
sablono.core.text_field22520 = (function() {
var text_field22520 = null;
var text_field22520__1 = (function (name__13522__auto__){return text_field22520.call(null,name__13522__auto__,null);
});
var text_field22520__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__13522__auto__,value__13523__auto__);
});
text_field22520 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return text_field22520__1.call(this,name__13522__auto__);
case 2:
return text_field22520__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field22520.cljs$core$IFn$_invoke$arity$1 = text_field22520__1;
text_field22520.cljs$core$IFn$_invoke$arity$2 = text_field22520__2;
return text_field22520;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field22520);
/**
* Creates a time input field.
*/
sablono.core.time_field22521 = (function() {
var time_field22521 = null;
var time_field22521__1 = (function (name__13522__auto__){return time_field22521.call(null,name__13522__auto__,null);
});
var time_field22521__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__13522__auto__,value__13523__auto__);
});
time_field22521 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return time_field22521__1.call(this,name__13522__auto__);
case 2:
return time_field22521__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field22521.cljs$core$IFn$_invoke$arity$1 = time_field22521__1;
time_field22521.cljs$core$IFn$_invoke$arity$2 = time_field22521__2;
return time_field22521;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field22521);
/**
* Creates a url input field.
*/
sablono.core.url_field22522 = (function() {
var url_field22522 = null;
var url_field22522__1 = (function (name__13522__auto__){return url_field22522.call(null,name__13522__auto__,null);
});
var url_field22522__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__13522__auto__,value__13523__auto__);
});
url_field22522 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return url_field22522__1.call(this,name__13522__auto__);
case 2:
return url_field22522__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field22522.cljs$core$IFn$_invoke$arity$1 = url_field22522__1;
url_field22522.cljs$core$IFn$_invoke$arity$2 = url_field22522__2;
return url_field22522;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field22522);
/**
* Creates a week input field.
*/
sablono.core.week_field22523 = (function() {
var week_field22523 = null;
var week_field22523__1 = (function (name__13522__auto__){return week_field22523.call(null,name__13522__auto__,null);
});
var week_field22523__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__13522__auto__,value__13523__auto__);
});
week_field22523 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return week_field22523__1.call(this,name__13522__auto__);
case 2:
return week_field22523__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field22523.cljs$core$IFn$_invoke$arity$1 = week_field22523__1;
week_field22523.cljs$core$IFn$_invoke$arity$2 = week_field22523__2;
return week_field22523;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field22523);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box22524 = (function() {
var check_box22524 = null;
var check_box22524__1 = (function (name){return check_box22524.call(null,name,null);
});
var check_box22524__2 = (function (name,checked_QMARK_){return check_box22524.call(null,name,checked_QMARK_,"true");
});
var check_box22524__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box22524 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box22524__1.call(this,name);
case 2:
return check_box22524__2.call(this,name,checked_QMARK_);
case 3:
return check_box22524__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box22524.cljs$core$IFn$_invoke$arity$1 = check_box22524__1;
check_box22524.cljs$core$IFn$_invoke$arity$2 = check_box22524__2;
check_box22524.cljs$core$IFn$_invoke$arity$3 = check_box22524__3;
return check_box22524;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box22524);
/**
* Creates a radio button.
*/
sablono.core.radio_button22525 = (function() {
var radio_button22525 = null;
var radio_button22525__1 = (function (group){return radio_button22525.call(null,group,null);
});
var radio_button22525__2 = (function (group,checked_QMARK_){return radio_button22525.call(null,group,checked_QMARK_,"true");
});
var radio_button22525__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button22525 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button22525__1.call(this,group);
case 2:
return radio_button22525__2.call(this,group,checked_QMARK_);
case 3:
return radio_button22525__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button22525.cljs$core$IFn$_invoke$arity$1 = radio_button22525__1;
radio_button22525.cljs$core$IFn$_invoke$arity$2 = radio_button22525__2;
radio_button22525.cljs$core$IFn$_invoke$arity$3 = radio_button22525__3;
return radio_button22525;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button22525);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options22526 = (function() {
var select_options22526 = null;
var select_options22526__1 = (function (coll){return select_options22526.call(null,coll,null);
});
var select_options22526__2 = (function (coll,selected){var iter__4283__auto__ = (function iter__22535(s__22536){return (new cljs.core.LazySeq(null,(function (){var s__22536__$1 = s__22536;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22536__$1);if(temp__4126__auto__)
{var s__22536__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22536__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__22536__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__22538 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__22537 = (0);while(true){
if((i__22537 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__22537);cljs.core.chunk_append.call(null,b__22538,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__22541 = x;var text = cljs.core.nth.call(null,vec__22541,(0),null);var val = cljs.core.nth.call(null,vec__22541,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__22541,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options22526.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__22543 = (i__22537 + (1));
i__22537 = G__22543;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22538),iter__22535.call(null,cljs.core.chunk_rest.call(null,s__22536__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22538),null);
}
} else
{var x = cljs.core.first.call(null,s__22536__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__22542 = x;var text = cljs.core.nth.call(null,vec__22542,(0),null);var val = cljs.core.nth.call(null,vec__22542,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__22542,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options22526.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__22535.call(null,cljs.core.rest.call(null,s__22536__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,coll);
});
select_options22526 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options22526__1.call(this,coll);
case 2:
return select_options22526__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options22526.cljs$core$IFn$_invoke$arity$1 = select_options22526__1;
select_options22526.cljs$core$IFn$_invoke$arity$2 = select_options22526__2;
return select_options22526;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options22526);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down22544 = (function() {
var drop_down22544 = null;
var drop_down22544__2 = (function (name,options){return drop_down22544.call(null,name,options,null);
});
var drop_down22544__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down22544 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down22544__2.call(this,name,options);
case 3:
return drop_down22544__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down22544.cljs$core$IFn$_invoke$arity$2 = drop_down22544__2;
drop_down22544.cljs$core$IFn$_invoke$arity$3 = drop_down22544__3;
return drop_down22544;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down22544);
/**
* Creates a text area element.
*/
sablono.core.text_area22545 = (function() {
var text_area22545 = null;
var text_area22545__1 = (function (name){return text_area22545.call(null,name,null);
});
var text_area22545__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area22545 = function(name,value){
switch(arguments.length){
case 1:
return text_area22545__1.call(this,name);
case 2:
return text_area22545__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area22545.cljs$core$IFn$_invoke$arity$1 = text_area22545__1;
text_area22545.cljs$core$IFn$_invoke$arity$2 = text_area22545__2;
return text_area22545;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area22545);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label22546 = (function label22546(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label22546);
/**
* Creates a submit button.
*/
sablono.core.submit_button22547 = (function submit_button22547(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button22547);
/**
* Creates a form reset button.
*/
sablono.core.reset_button22548 = (function reset_button22548(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button22548);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to22549 = (function() { 
var form_to22549__delegate = function (p__22550,body){var vec__22552 = p__22550;var method = cljs.core.nth.call(null,vec__22552,(0),null);var action = cljs.core.nth.call(null,vec__22552,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to22549 = function (p__22550,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to22549__delegate.call(this,p__22550,body);};
form_to22549.cljs$lang$maxFixedArity = 1;
form_to22549.cljs$lang$applyTo = (function (arglist__22553){
var p__22550 = cljs.core.first(arglist__22553);
var body = cljs.core.rest(arglist__22553);
return form_to22549__delegate(p__22550,body);
});
form_to22549.cljs$core$IFn$_invoke$arity$variadic = form_to22549__delegate;
return form_to22549;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to22549);
