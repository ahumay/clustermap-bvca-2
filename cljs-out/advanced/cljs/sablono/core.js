// Compiled by ClojureScript 0.0-2227
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
var G__39617__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__39616 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39616,0,null);var body = cljs.core.nthnext(vec__39616,1);if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__39617 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__39617__delegate.call(this,args);};
G__39617.cljs$lang$maxFixedArity = 0;
G__39617.cljs$lang$applyTo = (function (arglist__39618){
var args = cljs.core.seq(arglist__39618);
return G__39617__delegate(args);
});
G__39617.cljs$core$IFn$_invoke$arity$variadic = G__39617__delegate;
return G__39617;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4266__auto__ = (function iter__39623(s__39624){return (new cljs.core.LazySeq(null,(function (){var s__39624__$1 = s__39624;while(true){
var temp__4126__auto__ = cljs.core.seq(s__39624__$1);if(temp__4126__auto__)
{var s__39624__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__39624__$2))
{var c__4264__auto__ = cljs.core.chunk_first(s__39624__$2);var size__4265__auto__ = cljs.core.count(c__4264__auto__);var b__39626 = cljs.core.chunk_buffer(size__4265__auto__);if((function (){var i__39625 = 0;while(true){
if((i__39625 < size__4265__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4264__auto__,i__39625);cljs.core.chunk_append(b__39626,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__39627 = (i__39625 + 1);
i__39625 = G__39627;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__39626),iter__39623(cljs.core.chunk_rest(s__39624__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__39626),null);
}
} else
{var args = cljs.core.first(s__39624__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__39623(cljs.core.rest(s__39624__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4266__auto__(arglists);
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
var include_css__delegate = function (styles){var iter__4266__auto__ = (function iter__39632(s__39633){return (new cljs.core.LazySeq(null,(function (){var s__39633__$1 = s__39633;while(true){
var temp__4126__auto__ = cljs.core.seq(s__39633__$1);if(temp__4126__auto__)
{var s__39633__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__39633__$2))
{var c__4264__auto__ = cljs.core.chunk_first(s__39633__$2);var size__4265__auto__ = cljs.core.count(c__4264__auto__);var b__39635 = cljs.core.chunk_buffer(size__4265__auto__);if((function (){var i__39634 = 0;while(true){
if((i__39634 < size__4265__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4264__auto__,i__39634);cljs.core.chunk_append(b__39635,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$635,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$614,"text/css",cljs.core.constant$keyword$636,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$637,"stylesheet"], null)], null));
{
var G__39636 = (i__39634 + 1);
i__39634 = G__39636;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__39635),iter__39632(cljs.core.chunk_rest(s__39633__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__39635),null);
}
} else
{var style = cljs.core.first(s__39633__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$635,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$614,"text/css",cljs.core.constant$keyword$636,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$637,"stylesheet"], null)], null),iter__39632(cljs.core.rest(s__39633__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4266__auto__(styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__39637){
var styles = cljs.core.seq(arglist__39637);
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
sablono.core.include_react = (function include_react(){return sablono.core.include_js("http://fb.me/react-0.9.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to39638 = (function() { 
var link_to39638__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$638,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$636,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to39638 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to39638__delegate.call(this,url,content);};
link_to39638.cljs$lang$maxFixedArity = 1;
link_to39638.cljs$lang$applyTo = (function (arglist__39639){
var url = cljs.core.first(arglist__39639);
var content = cljs.core.rest(arglist__39639);
return link_to39638__delegate(url,content);
});
link_to39638.cljs$core$IFn$_invoke$arity$variadic = link_to39638__delegate;
return link_to39638;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to39638);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to39640 = (function() { 
var mail_to39640__delegate = function (e_mail,p__39641){var vec__39643 = p__39641;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39643,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$638,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$636,("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3541__auto__ = content;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to39640 = function (e_mail,var_args){
var p__39641 = null;if (arguments.length > 1) {
  p__39641 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to39640__delegate.call(this,e_mail,p__39641);};
mail_to39640.cljs$lang$maxFixedArity = 1;
mail_to39640.cljs$lang$applyTo = (function (arglist__39644){
var e_mail = cljs.core.first(arglist__39644);
var p__39641 = cljs.core.rest(arglist__39644);
return mail_to39640__delegate(e_mail,p__39641);
});
mail_to39640.cljs$core$IFn$_invoke$arity$variadic = mail_to39640__delegate;
return mail_to39640;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to39640);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list39645 = (function unordered_list39645(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$639,(function (){var iter__4266__auto__ = (function iter__39650(s__39651){return (new cljs.core.LazySeq(null,(function (){var s__39651__$1 = s__39651;while(true){
var temp__4126__auto__ = cljs.core.seq(s__39651__$1);if(temp__4126__auto__)
{var s__39651__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__39651__$2))
{var c__4264__auto__ = cljs.core.chunk_first(s__39651__$2);var size__4265__auto__ = cljs.core.count(c__4264__auto__);var b__39653 = cljs.core.chunk_buffer(size__4265__auto__);if((function (){var i__39652 = 0;while(true){
if((i__39652 < size__4265__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4264__auto__,i__39652);cljs.core.chunk_append(b__39653,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$640,x], null));
{
var G__39654 = (i__39652 + 1);
i__39652 = G__39654;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__39653),iter__39650(cljs.core.chunk_rest(s__39651__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__39653),null);
}
} else
{var x = cljs.core.first(s__39651__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$640,x], null),iter__39650(cljs.core.rest(s__39651__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4266__auto__(coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list39645);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list39655 = (function ordered_list39655(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$641,(function (){var iter__4266__auto__ = (function iter__39660(s__39661){return (new cljs.core.LazySeq(null,(function (){var s__39661__$1 = s__39661;while(true){
var temp__4126__auto__ = cljs.core.seq(s__39661__$1);if(temp__4126__auto__)
{var s__39661__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__39661__$2))
{var c__4264__auto__ = cljs.core.chunk_first(s__39661__$2);var size__4265__auto__ = cljs.core.count(c__4264__auto__);var b__39663 = cljs.core.chunk_buffer(size__4265__auto__);if((function (){var i__39662 = 0;while(true){
if((i__39662 < size__4265__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4264__auto__,i__39662);cljs.core.chunk_append(b__39663,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$640,x], null));
{
var G__39664 = (i__39662 + 1);
i__39662 = G__39664;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__39663),iter__39660(cljs.core.chunk_rest(s__39661__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__39663),null);
}
} else
{var x = cljs.core.first(s__39661__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$640,x], null),iter__39660(cljs.core.rest(s__39661__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4266__auto__(coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list39655);
/**
* Create an image element.
*/
sablono.core.image39665 = (function() {
var image39665 = null;
var image39665__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$642,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$643,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image39665__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$642,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$643,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$644,alt], null)], null);
});
image39665 = function(src,alt){
switch(arguments.length){
case 1:
return image39665__1.call(this,src);
case 2:
return image39665__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image39665.cljs$core$IFn$_invoke$arity$1 = image39665__1;
image39665.cljs$core$IFn$_invoke$arity$2 = image39665__2;
return image39665;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image39665);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__39666_SHARP_,p2__39667_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__39666_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__39667_SHARP_)+"]");
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__39668_SHARP_,p2__39669_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__39668_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__39669_SHARP_));
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$634,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$614,type,cljs.core.constant$keyword$645,sablono.core.make_name(name),cljs.core.constant$keyword$616,sablono.core.make_id(name),cljs.core.constant$keyword$585,value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field39670 = (function() {
var color_field39670 = null;
var color_field39670__1 = (function (name__10091__auto__){return color_field39670.cljs$core$IFn$_invoke$arity$2(name__10091__auto__,null);
});
var color_field39670__2 = (function (name__10091__auto__,value__10092__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1545688804,null))),name__10091__auto__,value__10092__auto__);
});
color_field39670 = function(name__10091__auto__,value__10092__auto__){
switch(arguments.length){
case 1:
return color_field39670__1.call(this,name__10091__auto__);
case 2:
return color_field39670__2.call(this,name__10091__auto__,value__10092__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field39670.cljs$core$IFn$_invoke$arity$1 = color_field39670__1;
color_field39670.cljs$core$IFn$_invoke$arity$2 = color_field39670__2;
return color_field39670;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field39670);
/**
* Creates a date input field.
*/
sablono.core.date_field39671 = (function() {
var date_field39671 = null;
var date_field39671__1 = (function (name__10091__auto__){return date_field39671.cljs$core$IFn$_invoke$arity$2(name__10091__auto__,null);
});
var date_field39671__2 = (function (name__10091__auto__,value__10092__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",-1637455513,null))),name__10091__auto__,value__10092__auto__);
});
date_field39671 = function(name__10091__auto__,value__10092__auto__){
switch(arguments.length){
case 1:
return date_field39671__1.call(this,name__10091__auto__);
case 2:
return date_field39671__2.call(this,name__10091__auto__,value__10092__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field39671.cljs$core$IFn$_invoke$arity$1 = date_field39671__1;
date_field39671.cljs$core$IFn$_invoke$arity$2 = date_field39671__2;
return date_field39671;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field39671);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field39672 = (function() {
var datetime_field39672 = null;
var datetime_field39672__1 = (function (name__10091__auto__){return datetime_field39672.cljs$core$IFn$_invoke$arity$2(name__10091__auto__,null);
});
var datetime_field39672__2 = (function (name__10091__auto__,value__10092__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",153171252,null))),name__10091__auto__,value__10092__auto__);
});
datetime_field39672 = function(name__10091__auto__,value__10092__auto__){
switch(arguments.length){
case 1:
return datetime_field39672__1.call(this,name__10091__auto__);
case 2:
return datetime_field39672__2.call(this,name__10091__auto__,value__10092__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field39672.cljs$core$IFn$_invoke$arity$1 = datetime_field39672__1;
datetime_field39672.cljs$core$IFn$_invoke$arity$2 = datetime_field39672__2;
return datetime_field39672;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field39672);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field39673 = (function() {
var datetime_local_field39673 = null;
var datetime_local_field39673__1 = (function (name__10091__auto__){return datetime_local_field39673.cljs$core$IFn$_invoke$arity$2(name__10091__auto__,null);
});
var datetime_local_field39673__2 = (function (name__10091__auto__,value__10092__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",1631019090,null))),name__10091__auto__,value__10092__auto__);
});
datetime_local_field39673 = function(name__10091__auto__,value__10092__auto__){
switch(arguments.length){
case 1:
return datetime_local_field39673__1.call(this,name__10091__auto__);
case 2:
return datetime_local_field39673__2.call(this,name__10091__auto__,value__10092__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field39673.cljs$core$IFn$_invoke$arity$1 = datetime_local_field39673__1;
datetime_local_field39673.cljs$core$IFn$_invoke$arity$2 = datetime_local_field39673__2;
return datetime_local_field39673;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field39673);
/**
* Creates a email input field.
*/
sablono.core.email_field39674 = (function() {
var email_field39674 = null;
var email_field39674__1 = (function (name__10091__auto__){return email_field39674.cljs$core$IFn$_invoke$arity$2(name__10091__auto__,null);
});
var email_field39674__2 = (function (name__10091__auto__,value__10092__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1543912107,null))),name__10091__auto__,value__10092__auto__);
});
email_field39674 = function(name__10091__auto__,value__10092__auto__){
switch(arguments.length){
case 1:
return email_field39674__1.call(this,name__10091__auto__);
case 2:
return email_field39674__2.call(this,name__10091__auto__,value__10092__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field39674.cljs$core$IFn$_invoke$arity$1 = email_field39674__1;
email_field39674.cljs$core$IFn$_invoke$arity$2 = email_field39674__2;
return email_field39674;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field39674);
/**
* Creates a file input field.
*/
sablono.core.file_field39675 = (function() {
var file_field39675 = null;
var file_field39675__1 = (function (name__10091__auto__){return file_field39675.cljs$core$IFn$_invoke$arity$2(name__10091__auto__,null);
});
var file_field39675__2 = (function (name__10091__auto__,value__10092__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",-1637388491,null))),name__10091__auto__,value__10092__auto__);
});
file_field39675 = function(name__10091__auto__,value__10092__auto__){
switch(arguments.length){
case 1:
return file_field39675__1.call(this,name__10091__auto__);
case 2:
return file_field39675__2.call(this,name__10091__auto__,value__10092__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field39675.cljs$core$IFn$_invoke$arity$1 = file_field39675__1;
file_field39675.cljs$core$IFn$_invoke$arity$2 = file_field39675__2;
return file_field39675;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field39675);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field39676 = (function() {
var hidden_field39676 = null;
var hidden_field39676__1 = (function (name__10091__auto__){return hidden_field39676.cljs$core$IFn$_invoke$arity$2(name__10091__auto__,null);
});
var hidden_field39676__2 = (function (name__10091__auto__,value__10092__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1436948323,null))),name__10091__auto__,value__10092__auto__);
});
hidden_field39676 = function(name__10091__auto__,value__10092__auto__){
switch(arguments.length){
case 1:
return hidden_field39676__1.call(this,name__10091__auto__);
case 2:
return hidden_field39676__2.call(this,name__10091__auto__,value__10092__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field39676.cljs$core$IFn$_invoke$arity$1 = hidden_field39676__1;
hidden_field39676.cljs$core$IFn$_invoke$arity$2 = hidden_field39676__2;
return hidden_field39676;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field39676);
/**
* Creates a month input field.
*/
sablono.core.month_field39677 = (function() {
var month_field39677 = null;
var month_field39677__1 = (function (name__10091__auto__){return month_field39677.cljs$core$IFn$_invoke$arity$2(name__10091__auto__,null);
});
var month_field39677__2 = (function (name__10091__auto__,value__10092__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-1536451527,null))),name__10091__auto__,value__10092__auto__);
});
month_field39677 = function(name__10091__auto__,value__10092__auto__){
switch(arguments.length){
case 1:
return month_field39677__1.call(this,name__10091__auto__);
case 2:
return month_field39677__2.call(this,name__10091__auto__,value__10092__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field39677.cljs$core$IFn$_invoke$arity$1 = month_field39677__1;
month_field39677.cljs$core$IFn$_invoke$arity$2 = month_field39677__2;
return month_field39677;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field39677);
/**
* Creates a number input field.
*/
sablono.core.number_field39678 = (function() {
var number_field39678 = null;
var number_field39678__1 = (function (name__10091__auto__){return number_field39678.cljs$core$IFn$_invoke$arity$2(name__10091__auto__,null);
});
var number_field39678__2 = (function (name__10091__auto__,value__10092__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",1620071682,null))),name__10091__auto__,value__10092__auto__);
});
number_field39678 = function(name__10091__auto__,value__10092__auto__){
switch(arguments.length){
case 1:
return number_field39678__1.call(this,name__10091__auto__);
case 2:
return number_field39678__2.call(this,name__10091__auto__,value__10092__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field39678.cljs$core$IFn$_invoke$arity$1 = number_field39678__1;
number_field39678.cljs$core$IFn$_invoke$arity$2 = number_field39678__2;
return number_field39678;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field39678);
/**
* Creates a password input field.
*/
sablono.core.password_field39679 = (function() {
var password_field39679 = null;
var password_field39679__1 = (function (name__10091__auto__){return password_field39679.cljs$core$IFn$_invoke$arity$2(name__10091__auto__,null);
});
var password_field39679__2 = (function (name__10091__auto__,value__10092__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",-423545772,null))),name__10091__auto__,value__10092__auto__);
});
password_field39679 = function(name__10091__auto__,value__10092__auto__){
switch(arguments.length){
case 1:
return password_field39679__1.call(this,name__10091__auto__);
case 2:
return password_field39679__2.call(this,name__10091__auto__,value__10092__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field39679.cljs$core$IFn$_invoke$arity$1 = password_field39679__1;
password_field39679.cljs$core$IFn$_invoke$arity$2 = password_field39679__2;
return password_field39679;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field39679);
/**
* Creates a range input field.
*/
sablono.core.range_field39680 = (function() {
var range_field39680 = null;
var range_field39680__1 = (function (name__10091__auto__){return range_field39680.cljs$core$IFn$_invoke$arity$2(name__10091__auto__,null);
});
var range_field39680__2 = (function (name__10091__auto__,value__10092__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1532251402,null))),name__10091__auto__,value__10092__auto__);
});
range_field39680 = function(name__10091__auto__,value__10092__auto__){
switch(arguments.length){
case 1:
return range_field39680__1.call(this,name__10091__auto__);
case 2:
return range_field39680__2.call(this,name__10091__auto__,value__10092__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field39680.cljs$core$IFn$_invoke$arity$1 = range_field39680__1;
range_field39680.cljs$core$IFn$_invoke$arity$2 = range_field39680__2;
return range_field39680;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field39680);
/**
* Creates a search input field.
*/
sablono.core.search_field39681 = (function() {
var search_field39681 = null;
var search_field39681__1 = (function (name__10091__auto__){return search_field39681.cljs$core$IFn$_invoke$arity$2(name__10091__auto__,null);
});
var search_field39681__2 = (function (name__10091__auto__,value__10092__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",1748098913,null))),name__10091__auto__,value__10092__auto__);
});
search_field39681 = function(name__10091__auto__,value__10092__auto__){
switch(arguments.length){
case 1:
return search_field39681__1.call(this,name__10091__auto__);
case 2:
return search_field39681__2.call(this,name__10091__auto__,value__10092__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field39681.cljs$core$IFn$_invoke$arity$1 = search_field39681__1;
search_field39681.cljs$core$IFn$_invoke$arity$2 = search_field39681__2;
return search_field39681;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field39681);
/**
* Creates a tel input field.
*/
sablono.core.tel_field39682 = (function() {
var tel_field39682 = null;
var tel_field39682__1 = (function (name__10091__auto__){return tel_field39682.cljs$core$IFn$_invoke$arity$2(name__10091__auto__,null);
});
var tel_field39682__2 = (function (name__10091__auto__,value__10092__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",-1640416812,null))),name__10091__auto__,value__10092__auto__);
});
tel_field39682 = function(name__10091__auto__,value__10092__auto__){
switch(arguments.length){
case 1:
return tel_field39682__1.call(this,name__10091__auto__);
case 2:
return tel_field39682__2.call(this,name__10091__auto__,value__10092__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field39682.cljs$core$IFn$_invoke$arity$1 = tel_field39682__1;
tel_field39682.cljs$core$IFn$_invoke$arity$2 = tel_field39682__2;
return tel_field39682;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field39682);
/**
* Creates a text input field.
*/
sablono.core.text_field39683 = (function() {
var text_field39683 = null;
var text_field39683__1 = (function (name__10091__auto__){return text_field39683.cljs$core$IFn$_invoke$arity$2(name__10091__auto__,null);
});
var text_field39683__2 = (function (name__10091__auto__,value__10092__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-1636974874,null))),name__10091__auto__,value__10092__auto__);
});
text_field39683 = function(name__10091__auto__,value__10092__auto__){
switch(arguments.length){
case 1:
return text_field39683__1.call(this,name__10091__auto__);
case 2:
return text_field39683__2.call(this,name__10091__auto__,value__10092__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field39683.cljs$core$IFn$_invoke$arity$1 = text_field39683__1;
text_field39683.cljs$core$IFn$_invoke$arity$2 = text_field39683__2;
return text_field39683;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field39683);
/**
* Creates a time input field.
*/
sablono.core.time_field39684 = (function() {
var time_field39684 = null;
var time_field39684__1 = (function (name__10091__auto__){return time_field39684.cljs$core$IFn$_invoke$arity$2(name__10091__auto__,null);
});
var time_field39684__2 = (function (name__10091__auto__,value__10092__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1636971386,null))),name__10091__auto__,value__10092__auto__);
});
time_field39684 = function(name__10091__auto__,value__10092__auto__){
switch(arguments.length){
case 1:
return time_field39684__1.call(this,name__10091__auto__);
case 2:
return time_field39684__2.call(this,name__10091__auto__,value__10092__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field39684.cljs$core$IFn$_invoke$arity$1 = time_field39684__1;
time_field39684.cljs$core$IFn$_invoke$arity$2 = time_field39684__2;
return time_field39684;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field39684);
/**
* Creates a url input field.
*/
sablono.core.url_field39685 = (function() {
var url_field39685 = null;
var url_field39685__1 = (function (name__10091__auto__){return url_field39685.cljs$core$IFn$_invoke$arity$2(name__10091__auto__,null);
});
var url_field39685__2 = (function (name__10091__auto__,value__10092__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",-1640415448,null))),name__10091__auto__,value__10092__auto__);
});
url_field39685 = function(name__10091__auto__,value__10092__auto__){
switch(arguments.length){
case 1:
return url_field39685__1.call(this,name__10091__auto__);
case 2:
return url_field39685__2.call(this,name__10091__auto__,value__10092__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field39685.cljs$core$IFn$_invoke$arity$1 = url_field39685__1;
url_field39685.cljs$core$IFn$_invoke$arity$2 = url_field39685__2;
return url_field39685;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field39685);
/**
* Creates a week input field.
*/
sablono.core.week_field39686 = (function() {
var week_field39686 = null;
var week_field39686__1 = (function (name__10091__auto__){return week_field39686.cljs$core$IFn$_invoke$arity$2(name__10091__auto__,null);
});
var week_field39686__2 = (function (name__10091__auto__,value__10092__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",-1636886099,null))),name__10091__auto__,value__10092__auto__);
});
week_field39686 = function(name__10091__auto__,value__10092__auto__){
switch(arguments.length){
case 1:
return week_field39686__1.call(this,name__10091__auto__);
case 2:
return week_field39686__2.call(this,name__10091__auto__,value__10092__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field39686.cljs$core$IFn$_invoke$arity$1 = week_field39686__1;
week_field39686.cljs$core$IFn$_invoke$arity$2 = week_field39686__2;
return week_field39686;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field39686);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box39687 = (function() {
var check_box39687 = null;
var check_box39687__1 = (function (name){return check_box39687.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box39687__2 = (function (name,checked_QMARK_){return check_box39687.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box39687__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$634,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$614,"checkbox",cljs.core.constant$keyword$645,sablono.core.make_name(name),cljs.core.constant$keyword$616,sablono.core.make_id(name),cljs.core.constant$keyword$585,value,cljs.core.constant$keyword$646,checked_QMARK_], null)], null);
});
check_box39687 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box39687__1.call(this,name);
case 2:
return check_box39687__2.call(this,name,checked_QMARK_);
case 3:
return check_box39687__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box39687.cljs$core$IFn$_invoke$arity$1 = check_box39687__1;
check_box39687.cljs$core$IFn$_invoke$arity$2 = check_box39687__2;
check_box39687.cljs$core$IFn$_invoke$arity$3 = check_box39687__3;
return check_box39687;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box39687);
/**
* Creates a radio button.
*/
sablono.core.radio_button39688 = (function() {
var radio_button39688 = null;
var radio_button39688__1 = (function (group){return radio_button39688.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button39688__2 = (function (group,checked_QMARK_){return radio_button39688.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button39688__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$634,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$614,"radio",cljs.core.constant$keyword$645,sablono.core.make_name(group),cljs.core.constant$keyword$616,sablono.core.make_id((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0))))),cljs.core.constant$keyword$585,value,cljs.core.constant$keyword$646,checked_QMARK_], null)], null);
});
radio_button39688 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button39688__1.call(this,group);
case 2:
return radio_button39688__2.call(this,group,checked_QMARK_);
case 3:
return radio_button39688__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button39688.cljs$core$IFn$_invoke$arity$1 = radio_button39688__1;
radio_button39688.cljs$core$IFn$_invoke$arity$2 = radio_button39688__2;
radio_button39688.cljs$core$IFn$_invoke$arity$3 = radio_button39688__3;
return radio_button39688;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button39688);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options39689 = (function() {
var select_options39689 = null;
var select_options39689__1 = (function (coll){return select_options39689.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options39689__2 = (function (coll,selected){var iter__4266__auto__ = (function iter__39698(s__39699){return (new cljs.core.LazySeq(null,(function (){var s__39699__$1 = s__39699;while(true){
var temp__4126__auto__ = cljs.core.seq(s__39699__$1);if(temp__4126__auto__)
{var s__39699__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__39699__$2))
{var c__4264__auto__ = cljs.core.chunk_first(s__39699__$2);var size__4265__auto__ = cljs.core.count(c__4264__auto__);var b__39701 = cljs.core.chunk_buffer(size__4265__auto__);if((function (){var i__39700 = 0;while(true){
if((i__39700 < size__4265__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4264__auto__,i__39700);cljs.core.chunk_append(b__39701,((cljs.core.sequential_QMARK_(x))?(function (){var vec__39704 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39704,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39704,1,null);var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39704,2,null);var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$647,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$648,text], null),select_options39689.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$649,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$585,val,cljs.core.constant$keyword$650,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$651,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$649,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$650,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__39706 = (i__39700 + 1);
i__39700 = G__39706;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__39701),iter__39698(cljs.core.chunk_rest(s__39699__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__39701),null);
}
} else
{var x = cljs.core.first(s__39699__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__39705 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39705,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39705,1,null);var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39705,2,null);var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$647,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$648,text], null),select_options39689.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$649,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$585,val,cljs.core.constant$keyword$650,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$651,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$649,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$650,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__39698(cljs.core.rest(s__39699__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4266__auto__(coll);
});
select_options39689 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options39689__1.call(this,coll);
case 2:
return select_options39689__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options39689.cljs$core$IFn$_invoke$arity$1 = select_options39689__1;
select_options39689.cljs$core$IFn$_invoke$arity$2 = select_options39689__2;
return select_options39689;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options39689);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down39707 = (function() {
var drop_down39707 = null;
var drop_down39707__2 = (function (name,options){return drop_down39707.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down39707__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$652,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$645,sablono.core.make_name(name),cljs.core.constant$keyword$616,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});
drop_down39707 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down39707__2.call(this,name,options);
case 3:
return drop_down39707__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down39707.cljs$core$IFn$_invoke$arity$2 = drop_down39707__2;
drop_down39707.cljs$core$IFn$_invoke$arity$3 = drop_down39707__3;
return drop_down39707;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down39707);
/**
* Creates a text area element.
*/
sablono.core.text_area39708 = (function() {
var text_area39708 = null;
var text_area39708__1 = (function (name){return text_area39708.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area39708__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$633,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$645,sablono.core.make_name(name),cljs.core.constant$keyword$616,sablono.core.make_id(name),cljs.core.constant$keyword$585,value], null)], null);
});
text_area39708 = function(name,value){
switch(arguments.length){
case 1:
return text_area39708__1.call(this,name);
case 2:
return text_area39708__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area39708.cljs$core$IFn$_invoke$arity$1 = text_area39708__1;
text_area39708.cljs$core$IFn$_invoke$arity$2 = text_area39708__2;
return text_area39708;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area39708);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label39709 = (function label39709(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$648,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$630,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label39709);
/**
* Creates a submit button.
*/
sablono.core.submit_button39710 = (function submit_button39710(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$634,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$614,"submit",cljs.core.constant$keyword$585,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button39710);
/**
* Creates a form reset button.
*/
sablono.core.reset_button39711 = (function reset_button39711(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$634,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$614,"reset",cljs.core.constant$keyword$585,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button39711);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to39712 = (function() { 
var form_to39712__delegate = function (p__39713,body){var vec__39715 = p__39713;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39715,0,null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39715,1,null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$653,null,cljs.core.constant$keyword$654,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$655,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$656,method_str,cljs.core.constant$keyword$657,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$655,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$656,"POST",cljs.core.constant$keyword$657,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
};
var form_to39712 = function (p__39713,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to39712__delegate.call(this,p__39713,body);};
form_to39712.cljs$lang$maxFixedArity = 1;
form_to39712.cljs$lang$applyTo = (function (arglist__39716){
var p__39713 = cljs.core.first(arglist__39716);
var body = cljs.core.rest(arglist__39716);
return form_to39712__delegate(p__39713,body);
});
form_to39712.cljs$core$IFn$_invoke$arity$variadic = form_to39712__delegate;
return form_to39712;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to39712);
