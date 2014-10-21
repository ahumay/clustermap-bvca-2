// Compiled by ClojureScript 0.0-2356
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.string');
goog.require('domina.support');
goog.require('goog.style');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('goog.dom.xml');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_90479 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_90480 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_90481 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_90481,opt_wrapper_90479,table_section_wrapper_90480,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_90479,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_90480,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_90480,cell_wrapper_90481,table_section_wrapper_90480,table_section_wrapper_90480]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3625__auto__ = div.firstChild;if(cljs.core.truth_(and__3625__auto__))
{return div.firstChild.childNodes;
} else
{return and__3625__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__90486 = cljs.core.seq.call(null,tbody);var chunk__90487 = null;var count__90488 = (0);var i__90489 = (0);while(true){
if((i__90489 < count__90488))
{var child = cljs.core._nth.call(null,chunk__90487,i__90489);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__90490 = seq__90486;
var G__90491 = chunk__90487;
var G__90492 = count__90488;
var G__90493 = (i__90489 + (1));
seq__90486 = G__90490;
chunk__90487 = G__90491;
count__90488 = G__90492;
i__90489 = G__90493;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__90486);if(temp__4126__auto__)
{var seq__90486__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__90486__$1))
{var c__4406__auto__ = cljs.core.chunk_first.call(null,seq__90486__$1);{
var G__90494 = cljs.core.chunk_rest.call(null,seq__90486__$1);
var G__90495 = c__4406__auto__;
var G__90496 = cljs.core.count.call(null,c__4406__auto__);
var G__90497 = (0);
seq__90486 = G__90494;
chunk__90487 = G__90495;
count__90488 = G__90496;
i__90489 = G__90497;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__90486__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__90498 = cljs.core.next.call(null,seq__90486__$1);
var G__90499 = null;
var G__90500 = (0);
var G__90501 = (0);
seq__90486 = G__90498;
chunk__90487 = G__90499;
count__90488 = G__90500;
i__90489 = G__90501;
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
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__90503 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__90503,(0),null);var start_wrap = cljs.core.nth.call(null,vec__90503,(1),null);var end_wrap = cljs.core.nth.call(null,vec__90503,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__90504 = wrapper.lastChild;
var G__90505 = (level - (1));
wrapper = G__90504;
level = G__90505;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3625__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3625__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3625__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj90507 = {};return obj90507;
})();
domina.nodes = (function nodes(content){if((function (){var and__3625__auto__ = content;if(and__3625__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3625__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4273__auto__ = (((content == null))?null:content);return (function (){var or__3637__auto__ = (domina.nodes[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (domina.nodes["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3625__auto__ = nodeseq;if(and__3625__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3625__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4273__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3637__auto__ = (domina.single_node[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (domina.single_node["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3625__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3625__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3625__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__90508){
var mesg = cljs.core.seq(arglist__90508);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__90509){
var mesg = cljs.core.seq(arglist__90509);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__90510){
var contents = cljs.core.seq(arglist__90510);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__90511_SHARP_){return p1__90511_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__90512_SHARP_,p2__90513_SHARP_){return goog.dom.insertChildAt(p1__90512_SHARP_,p2__90513_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,(0));
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__90515_SHARP_,p2__90514_SHARP_){return goog.dom.insertSiblingBefore(p2__90514_SHARP_,p1__90515_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__90517_SHARP_,p2__90516_SHARP_){return goog.dom.insertSiblingAfter(p2__90516_SHARP_,p1__90517_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__90519_SHARP_,p2__90518_SHARP_){return goog.dom.replaceNode(p2__90518_SHARP_,p1__90519_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__90524_90528 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__90525_90529 = null;var count__90526_90530 = (0);var i__90527_90531 = (0);while(true){
if((i__90527_90531 < count__90526_90530))
{var n_90532 = cljs.core._nth.call(null,chunk__90525_90529,i__90527_90531);goog.style.setStyle(n_90532,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__90533 = seq__90524_90528;
var G__90534 = chunk__90525_90529;
var G__90535 = count__90526_90530;
var G__90536 = (i__90527_90531 + (1));
seq__90524_90528 = G__90533;
chunk__90525_90529 = G__90534;
count__90526_90530 = G__90535;
i__90527_90531 = G__90536;
continue;
}
} else
{var temp__4126__auto___90537 = cljs.core.seq.call(null,seq__90524_90528);if(temp__4126__auto___90537)
{var seq__90524_90538__$1 = temp__4126__auto___90537;if(cljs.core.chunked_seq_QMARK_.call(null,seq__90524_90538__$1))
{var c__4406__auto___90539 = cljs.core.chunk_first.call(null,seq__90524_90538__$1);{
var G__90540 = cljs.core.chunk_rest.call(null,seq__90524_90538__$1);
var G__90541 = c__4406__auto___90539;
var G__90542 = cljs.core.count.call(null,c__4406__auto___90539);
var G__90543 = (0);
seq__90524_90528 = G__90540;
chunk__90525_90529 = G__90541;
count__90526_90530 = G__90542;
i__90527_90531 = G__90543;
continue;
}
} else
{var n_90544 = cljs.core.first.call(null,seq__90524_90538__$1);goog.style.setStyle(n_90544,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__90545 = cljs.core.next.call(null,seq__90524_90538__$1);
var G__90546 = null;
var G__90547 = (0);
var G__90548 = (0);
seq__90524_90528 = G__90545;
chunk__90525_90529 = G__90546;
count__90526_90530 = G__90547;
i__90527_90531 = G__90548;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__90549){
var content = cljs.core.first(arglist__90549);
arglist__90549 = cljs.core.next(arglist__90549);
var name = cljs.core.first(arglist__90549);
var value = cljs.core.rest(arglist__90549);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){var seq__90554_90558 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__90555_90559 = null;var count__90556_90560 = (0);var i__90557_90561 = (0);while(true){
if((i__90557_90561 < count__90556_90560))
{var n_90562 = cljs.core._nth.call(null,chunk__90555_90559,i__90557_90561);n_90562.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__90563 = seq__90554_90558;
var G__90564 = chunk__90555_90559;
var G__90565 = count__90556_90560;
var G__90566 = (i__90557_90561 + (1));
seq__90554_90558 = G__90563;
chunk__90555_90559 = G__90564;
count__90556_90560 = G__90565;
i__90557_90561 = G__90566;
continue;
}
} else
{var temp__4126__auto___90567 = cljs.core.seq.call(null,seq__90554_90558);if(temp__4126__auto___90567)
{var seq__90554_90568__$1 = temp__4126__auto___90567;if(cljs.core.chunked_seq_QMARK_.call(null,seq__90554_90568__$1))
{var c__4406__auto___90569 = cljs.core.chunk_first.call(null,seq__90554_90568__$1);{
var G__90570 = cljs.core.chunk_rest.call(null,seq__90554_90568__$1);
var G__90571 = c__4406__auto___90569;
var G__90572 = cljs.core.count.call(null,c__4406__auto___90569);
var G__90573 = (0);
seq__90554_90558 = G__90570;
chunk__90555_90559 = G__90571;
count__90556_90560 = G__90572;
i__90557_90561 = G__90573;
continue;
}
} else
{var n_90574 = cljs.core.first.call(null,seq__90554_90568__$1);n_90574.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__90575 = cljs.core.next.call(null,seq__90554_90568__$1);
var G__90576 = null;
var G__90577 = (0);
var G__90578 = (0);
seq__90554_90558 = G__90575;
chunk__90555_90559 = G__90576;
count__90556_90560 = G__90577;
i__90557_90561 = G__90578;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__90579){
var content = cljs.core.first(arglist__90579);
arglist__90579 = cljs.core.next(arglist__90579);
var name = cljs.core.first(arglist__90579);
var value = cljs.core.rest(arglist__90579);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__90584_90588 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__90585_90589 = null;var count__90586_90590 = (0);var i__90587_90591 = (0);while(true){
if((i__90587_90591 < count__90586_90590))
{var n_90592 = cljs.core._nth.call(null,chunk__90585_90589,i__90587_90591);n_90592.removeAttribute(cljs.core.name.call(null,name));
{
var G__90593 = seq__90584_90588;
var G__90594 = chunk__90585_90589;
var G__90595 = count__90586_90590;
var G__90596 = (i__90587_90591 + (1));
seq__90584_90588 = G__90593;
chunk__90585_90589 = G__90594;
count__90586_90590 = G__90595;
i__90587_90591 = G__90596;
continue;
}
} else
{var temp__4126__auto___90597 = cljs.core.seq.call(null,seq__90584_90588);if(temp__4126__auto___90597)
{var seq__90584_90598__$1 = temp__4126__auto___90597;if(cljs.core.chunked_seq_QMARK_.call(null,seq__90584_90598__$1))
{var c__4406__auto___90599 = cljs.core.chunk_first.call(null,seq__90584_90598__$1);{
var G__90600 = cljs.core.chunk_rest.call(null,seq__90584_90598__$1);
var G__90601 = c__4406__auto___90599;
var G__90602 = cljs.core.count.call(null,c__4406__auto___90599);
var G__90603 = (0);
seq__90584_90588 = G__90600;
chunk__90585_90589 = G__90601;
count__90586_90590 = G__90602;
i__90587_90591 = G__90603;
continue;
}
} else
{var n_90604 = cljs.core.first.call(null,seq__90584_90598__$1);n_90604.removeAttribute(cljs.core.name.call(null,name));
{
var G__90605 = cljs.core.next.call(null,seq__90584_90598__$1);
var G__90606 = null;
var G__90607 = (0);
var G__90608 = (0);
seq__90584_90588 = G__90605;
chunk__90585_90589 = G__90606;
count__90586_90590 = G__90607;
i__90587_90591 = G__90608;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__90610 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__90610,(0),null);var v = cljs.core.nth.call(null,vec__90610,(1),null);if(cljs.core.truth_((function (){var and__3625__auto__ = k;if(cljs.core.truth_(and__3625__auto__))
{return v;
} else
{return and__3625__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr.call(null,content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes.call(null,style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__90611_SHARP_){var attr = attrs__$1.item(p1__90611_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
});})(node,attrs__$1))
,cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__90618_90624 = cljs.core.seq.call(null,styles);var chunk__90619_90625 = null;var count__90620_90626 = (0);var i__90621_90627 = (0);while(true){
if((i__90621_90627 < count__90620_90626))
{var vec__90622_90628 = cljs.core._nth.call(null,chunk__90619_90625,i__90621_90627);var name_90629 = cljs.core.nth.call(null,vec__90622_90628,(0),null);var value_90630 = cljs.core.nth.call(null,vec__90622_90628,(1),null);domina.set_style_BANG_.call(null,content,name_90629,value_90630);
{
var G__90631 = seq__90618_90624;
var G__90632 = chunk__90619_90625;
var G__90633 = count__90620_90626;
var G__90634 = (i__90621_90627 + (1));
seq__90618_90624 = G__90631;
chunk__90619_90625 = G__90632;
count__90620_90626 = G__90633;
i__90621_90627 = G__90634;
continue;
}
} else
{var temp__4126__auto___90635 = cljs.core.seq.call(null,seq__90618_90624);if(temp__4126__auto___90635)
{var seq__90618_90636__$1 = temp__4126__auto___90635;if(cljs.core.chunked_seq_QMARK_.call(null,seq__90618_90636__$1))
{var c__4406__auto___90637 = cljs.core.chunk_first.call(null,seq__90618_90636__$1);{
var G__90638 = cljs.core.chunk_rest.call(null,seq__90618_90636__$1);
var G__90639 = c__4406__auto___90637;
var G__90640 = cljs.core.count.call(null,c__4406__auto___90637);
var G__90641 = (0);
seq__90618_90624 = G__90638;
chunk__90619_90625 = G__90639;
count__90620_90626 = G__90640;
i__90621_90627 = G__90641;
continue;
}
} else
{var vec__90623_90642 = cljs.core.first.call(null,seq__90618_90636__$1);var name_90643 = cljs.core.nth.call(null,vec__90623_90642,(0),null);var value_90644 = cljs.core.nth.call(null,vec__90623_90642,(1),null);domina.set_style_BANG_.call(null,content,name_90643,value_90644);
{
var G__90645 = cljs.core.next.call(null,seq__90618_90636__$1);
var G__90646 = null;
var G__90647 = (0);
var G__90648 = (0);
seq__90618_90624 = G__90645;
chunk__90619_90625 = G__90646;
count__90620_90626 = G__90647;
i__90621_90627 = G__90648;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__90655_90661 = cljs.core.seq.call(null,attrs);var chunk__90656_90662 = null;var count__90657_90663 = (0);var i__90658_90664 = (0);while(true){
if((i__90658_90664 < count__90657_90663))
{var vec__90659_90665 = cljs.core._nth.call(null,chunk__90656_90662,i__90658_90664);var name_90666 = cljs.core.nth.call(null,vec__90659_90665,(0),null);var value_90667 = cljs.core.nth.call(null,vec__90659_90665,(1),null);domina.set_attr_BANG_.call(null,content,name_90666,value_90667);
{
var G__90668 = seq__90655_90661;
var G__90669 = chunk__90656_90662;
var G__90670 = count__90657_90663;
var G__90671 = (i__90658_90664 + (1));
seq__90655_90661 = G__90668;
chunk__90656_90662 = G__90669;
count__90657_90663 = G__90670;
i__90658_90664 = G__90671;
continue;
}
} else
{var temp__4126__auto___90672 = cljs.core.seq.call(null,seq__90655_90661);if(temp__4126__auto___90672)
{var seq__90655_90673__$1 = temp__4126__auto___90672;if(cljs.core.chunked_seq_QMARK_.call(null,seq__90655_90673__$1))
{var c__4406__auto___90674 = cljs.core.chunk_first.call(null,seq__90655_90673__$1);{
var G__90675 = cljs.core.chunk_rest.call(null,seq__90655_90673__$1);
var G__90676 = c__4406__auto___90674;
var G__90677 = cljs.core.count.call(null,c__4406__auto___90674);
var G__90678 = (0);
seq__90655_90661 = G__90675;
chunk__90656_90662 = G__90676;
count__90657_90663 = G__90677;
i__90658_90664 = G__90678;
continue;
}
} else
{var vec__90660_90679 = cljs.core.first.call(null,seq__90655_90673__$1);var name_90680 = cljs.core.nth.call(null,vec__90660_90679,(0),null);var value_90681 = cljs.core.nth.call(null,vec__90660_90679,(1),null);domina.set_attr_BANG_.call(null,content,name_90680,value_90681);
{
var G__90682 = cljs.core.next.call(null,seq__90655_90673__$1);
var G__90683 = null;
var G__90684 = (0);
var G__90685 = (0);
seq__90655_90661 = G__90682;
chunk__90656_90662 = G__90683;
count__90657_90663 = G__90684;
i__90658_90664 = G__90685;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__90690_90694 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__90691_90695 = null;var count__90692_90696 = (0);var i__90693_90697 = (0);while(true){
if((i__90693_90697 < count__90692_90696))
{var node_90698 = cljs.core._nth.call(null,chunk__90691_90695,i__90693_90697);goog.dom.classes.add(node_90698,class$);
{
var G__90699 = seq__90690_90694;
var G__90700 = chunk__90691_90695;
var G__90701 = count__90692_90696;
var G__90702 = (i__90693_90697 + (1));
seq__90690_90694 = G__90699;
chunk__90691_90695 = G__90700;
count__90692_90696 = G__90701;
i__90693_90697 = G__90702;
continue;
}
} else
{var temp__4126__auto___90703 = cljs.core.seq.call(null,seq__90690_90694);if(temp__4126__auto___90703)
{var seq__90690_90704__$1 = temp__4126__auto___90703;if(cljs.core.chunked_seq_QMARK_.call(null,seq__90690_90704__$1))
{var c__4406__auto___90705 = cljs.core.chunk_first.call(null,seq__90690_90704__$1);{
var G__90706 = cljs.core.chunk_rest.call(null,seq__90690_90704__$1);
var G__90707 = c__4406__auto___90705;
var G__90708 = cljs.core.count.call(null,c__4406__auto___90705);
var G__90709 = (0);
seq__90690_90694 = G__90706;
chunk__90691_90695 = G__90707;
count__90692_90696 = G__90708;
i__90693_90697 = G__90709;
continue;
}
} else
{var node_90710 = cljs.core.first.call(null,seq__90690_90704__$1);goog.dom.classes.add(node_90710,class$);
{
var G__90711 = cljs.core.next.call(null,seq__90690_90704__$1);
var G__90712 = null;
var G__90713 = (0);
var G__90714 = (0);
seq__90690_90694 = G__90711;
chunk__90691_90695 = G__90712;
count__90692_90696 = G__90713;
i__90693_90697 = G__90714;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__90719_90723 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__90720_90724 = null;var count__90721_90725 = (0);var i__90722_90726 = (0);while(true){
if((i__90722_90726 < count__90721_90725))
{var node_90727 = cljs.core._nth.call(null,chunk__90720_90724,i__90722_90726);goog.dom.classes.remove(node_90727,class$);
{
var G__90728 = seq__90719_90723;
var G__90729 = chunk__90720_90724;
var G__90730 = count__90721_90725;
var G__90731 = (i__90722_90726 + (1));
seq__90719_90723 = G__90728;
chunk__90720_90724 = G__90729;
count__90721_90725 = G__90730;
i__90722_90726 = G__90731;
continue;
}
} else
{var temp__4126__auto___90732 = cljs.core.seq.call(null,seq__90719_90723);if(temp__4126__auto___90732)
{var seq__90719_90733__$1 = temp__4126__auto___90732;if(cljs.core.chunked_seq_QMARK_.call(null,seq__90719_90733__$1))
{var c__4406__auto___90734 = cljs.core.chunk_first.call(null,seq__90719_90733__$1);{
var G__90735 = cljs.core.chunk_rest.call(null,seq__90719_90733__$1);
var G__90736 = c__4406__auto___90734;
var G__90737 = cljs.core.count.call(null,c__4406__auto___90734);
var G__90738 = (0);
seq__90719_90723 = G__90735;
chunk__90720_90724 = G__90736;
count__90721_90725 = G__90737;
i__90722_90726 = G__90738;
continue;
}
} else
{var node_90739 = cljs.core.first.call(null,seq__90719_90733__$1);goog.dom.classes.remove(node_90739,class$);
{
var G__90740 = cljs.core.next.call(null,seq__90719_90733__$1);
var G__90741 = null;
var G__90742 = (0);
var G__90743 = (0);
seq__90719_90723 = G__90740;
chunk__90720_90724 = G__90741;
count__90721_90725 = G__90742;
i__90722_90726 = G__90743;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__90748_90752 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__90749_90753 = null;var count__90750_90754 = (0);var i__90751_90755 = (0);while(true){
if((i__90751_90755 < count__90750_90754))
{var node_90756 = cljs.core._nth.call(null,chunk__90749_90753,i__90751_90755);goog.dom.classes.toggle(node_90756,class$);
{
var G__90757 = seq__90748_90752;
var G__90758 = chunk__90749_90753;
var G__90759 = count__90750_90754;
var G__90760 = (i__90751_90755 + (1));
seq__90748_90752 = G__90757;
chunk__90749_90753 = G__90758;
count__90750_90754 = G__90759;
i__90751_90755 = G__90760;
continue;
}
} else
{var temp__4126__auto___90761 = cljs.core.seq.call(null,seq__90748_90752);if(temp__4126__auto___90761)
{var seq__90748_90762__$1 = temp__4126__auto___90761;if(cljs.core.chunked_seq_QMARK_.call(null,seq__90748_90762__$1))
{var c__4406__auto___90763 = cljs.core.chunk_first.call(null,seq__90748_90762__$1);{
var G__90764 = cljs.core.chunk_rest.call(null,seq__90748_90762__$1);
var G__90765 = c__4406__auto___90763;
var G__90766 = cljs.core.count.call(null,c__4406__auto___90763);
var G__90767 = (0);
seq__90748_90752 = G__90764;
chunk__90749_90753 = G__90765;
count__90750_90754 = G__90766;
i__90751_90755 = G__90767;
continue;
}
} else
{var node_90768 = cljs.core.first.call(null,seq__90748_90762__$1);goog.dom.classes.toggle(node_90768,class$);
{
var G__90769 = cljs.core.next.call(null,seq__90748_90762__$1);
var G__90770 = null;
var G__90771 = (0);
var G__90772 = (0);
seq__90748_90752 = G__90769;
chunk__90749_90753 = G__90770;
count__90750_90754 = G__90771;
i__90751_90755 = G__90772;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_90781__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__90777_90782 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__90778_90783 = null;var count__90779_90784 = (0);var i__90780_90785 = (0);while(true){
if((i__90780_90785 < count__90779_90784))
{var node_90786 = cljs.core._nth.call(null,chunk__90778_90783,i__90780_90785);goog.dom.classes.set(node_90786,classes_90781__$1);
{
var G__90787 = seq__90777_90782;
var G__90788 = chunk__90778_90783;
var G__90789 = count__90779_90784;
var G__90790 = (i__90780_90785 + (1));
seq__90777_90782 = G__90787;
chunk__90778_90783 = G__90788;
count__90779_90784 = G__90789;
i__90780_90785 = G__90790;
continue;
}
} else
{var temp__4126__auto___90791 = cljs.core.seq.call(null,seq__90777_90782);if(temp__4126__auto___90791)
{var seq__90777_90792__$1 = temp__4126__auto___90791;if(cljs.core.chunked_seq_QMARK_.call(null,seq__90777_90792__$1))
{var c__4406__auto___90793 = cljs.core.chunk_first.call(null,seq__90777_90792__$1);{
var G__90794 = cljs.core.chunk_rest.call(null,seq__90777_90792__$1);
var G__90795 = c__4406__auto___90793;
var G__90796 = cljs.core.count.call(null,c__4406__auto___90793);
var G__90797 = (0);
seq__90777_90782 = G__90794;
chunk__90778_90783 = G__90795;
count__90779_90784 = G__90796;
i__90780_90785 = G__90797;
continue;
}
} else
{var node_90798 = cljs.core.first.call(null,seq__90777_90792__$1);goog.dom.classes.set(node_90798,classes_90781__$1);
{
var G__90799 = cljs.core.next.call(null,seq__90777_90792__$1);
var G__90800 = null;
var G__90801 = (0);
var G__90802 = (0);
seq__90777_90782 = G__90799;
chunk__90778_90783 = G__90800;
count__90779_90784 = G__90801;
i__90780_90785 = G__90802;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__90807_90811 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__90808_90812 = null;var count__90809_90813 = (0);var i__90810_90814 = (0);while(true){
if((i__90810_90814 < count__90809_90813))
{var node_90815 = cljs.core._nth.call(null,chunk__90808_90812,i__90810_90814);goog.dom.setTextContent(node_90815,value);
{
var G__90816 = seq__90807_90811;
var G__90817 = chunk__90808_90812;
var G__90818 = count__90809_90813;
var G__90819 = (i__90810_90814 + (1));
seq__90807_90811 = G__90816;
chunk__90808_90812 = G__90817;
count__90809_90813 = G__90818;
i__90810_90814 = G__90819;
continue;
}
} else
{var temp__4126__auto___90820 = cljs.core.seq.call(null,seq__90807_90811);if(temp__4126__auto___90820)
{var seq__90807_90821__$1 = temp__4126__auto___90820;if(cljs.core.chunked_seq_QMARK_.call(null,seq__90807_90821__$1))
{var c__4406__auto___90822 = cljs.core.chunk_first.call(null,seq__90807_90821__$1);{
var G__90823 = cljs.core.chunk_rest.call(null,seq__90807_90821__$1);
var G__90824 = c__4406__auto___90822;
var G__90825 = cljs.core.count.call(null,c__4406__auto___90822);
var G__90826 = (0);
seq__90807_90811 = G__90823;
chunk__90808_90812 = G__90824;
count__90809_90813 = G__90825;
i__90810_90814 = G__90826;
continue;
}
} else
{var node_90827 = cljs.core.first.call(null,seq__90807_90821__$1);goog.dom.setTextContent(node_90827,value);
{
var G__90828 = cljs.core.next.call(null,seq__90807_90821__$1);
var G__90829 = null;
var G__90830 = (0);
var G__90831 = (0);
seq__90807_90811 = G__90828;
chunk__90808_90812 = G__90829;
count__90809_90813 = G__90830;
i__90810_90814 = G__90831;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__90836_90840 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__90837_90841 = null;var count__90838_90842 = (0);var i__90839_90843 = (0);while(true){
if((i__90839_90843 < count__90838_90842))
{var node_90844 = cljs.core._nth.call(null,chunk__90837_90841,i__90839_90843);goog.dom.forms.setValue(node_90844,value);
{
var G__90845 = seq__90836_90840;
var G__90846 = chunk__90837_90841;
var G__90847 = count__90838_90842;
var G__90848 = (i__90839_90843 + (1));
seq__90836_90840 = G__90845;
chunk__90837_90841 = G__90846;
count__90838_90842 = G__90847;
i__90839_90843 = G__90848;
continue;
}
} else
{var temp__4126__auto___90849 = cljs.core.seq.call(null,seq__90836_90840);if(temp__4126__auto___90849)
{var seq__90836_90850__$1 = temp__4126__auto___90849;if(cljs.core.chunked_seq_QMARK_.call(null,seq__90836_90850__$1))
{var c__4406__auto___90851 = cljs.core.chunk_first.call(null,seq__90836_90850__$1);{
var G__90852 = cljs.core.chunk_rest.call(null,seq__90836_90850__$1);
var G__90853 = c__4406__auto___90851;
var G__90854 = cljs.core.count.call(null,c__4406__auto___90851);
var G__90855 = (0);
seq__90836_90840 = G__90852;
chunk__90837_90841 = G__90853;
count__90838_90842 = G__90854;
i__90839_90843 = G__90855;
continue;
}
} else
{var node_90856 = cljs.core.first.call(null,seq__90836_90850__$1);goog.dom.forms.setValue(node_90856,value);
{
var G__90857 = cljs.core.next.call(null,seq__90836_90850__$1);
var G__90858 = null;
var G__90859 = (0);
var G__90860 = (0);
seq__90836_90840 = G__90857;
chunk__90837_90841 = G__90858;
count__90838_90842 = G__90859;
i__90839_90843 = G__90860;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3625__auto__ = allows_inner_html_QMARK_;if(and__3625__auto__)
{var and__3625__auto____$1 = (function (){var or__3637__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3625__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3625__auto____$1;
}
} else
{return and__3625__auto__;
}
})()))
{var value_90871 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__90867_90872 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__90868_90873 = null;var count__90869_90874 = (0);var i__90870_90875 = (0);while(true){
if((i__90870_90875 < count__90869_90874))
{var node_90876 = cljs.core._nth.call(null,chunk__90868_90873,i__90870_90875);node_90876.innerHTML = value_90871;
{
var G__90877 = seq__90867_90872;
var G__90878 = chunk__90868_90873;
var G__90879 = count__90869_90874;
var G__90880 = (i__90870_90875 + (1));
seq__90867_90872 = G__90877;
chunk__90868_90873 = G__90878;
count__90869_90874 = G__90879;
i__90870_90875 = G__90880;
continue;
}
} else
{var temp__4126__auto___90881 = cljs.core.seq.call(null,seq__90867_90872);if(temp__4126__auto___90881)
{var seq__90867_90882__$1 = temp__4126__auto___90881;if(cljs.core.chunked_seq_QMARK_.call(null,seq__90867_90882__$1))
{var c__4406__auto___90883 = cljs.core.chunk_first.call(null,seq__90867_90882__$1);{
var G__90884 = cljs.core.chunk_rest.call(null,seq__90867_90882__$1);
var G__90885 = c__4406__auto___90883;
var G__90886 = cljs.core.count.call(null,c__4406__auto___90883);
var G__90887 = (0);
seq__90867_90872 = G__90884;
chunk__90868_90873 = G__90885;
count__90869_90874 = G__90886;
i__90870_90875 = G__90887;
continue;
}
} else
{var node_90888 = cljs.core.first.call(null,seq__90867_90882__$1);node_90888.innerHTML = value_90871;
{
var G__90889 = cljs.core.next.call(null,seq__90867_90882__$1);
var G__90890 = null;
var G__90891 = (0);
var G__90892 = (0);
seq__90867_90872 = G__90889;
chunk__90868_90873 = G__90890;
count__90869_90874 = G__90891;
i__90870_90875 = G__90892;
continue;
}
}
} else
{}
}
break;
}
}catch (e90866){if((e90866 instanceof Error))
{var e_90893 = e90866;domina.replace_children_BANG_.call(null,content,value_90871);
} else
{throw e90866;

}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3625__auto__ = bubble;if(cljs.core.truth_(and__3625__auto__))
{return (value == null);
} else
{return and__3625__auto__;
}
})()))
{var temp__4126__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4126__auto__))
{var parent = temp__4126__auto__;return get_data.call(null,parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3637__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__90900_90904 = cljs.core.seq.call(null,children);var chunk__90901_90905 = null;var count__90902_90906 = (0);var i__90903_90907 = (0);while(true){
if((i__90903_90907 < count__90902_90906))
{var child_90908 = cljs.core._nth.call(null,chunk__90901_90905,i__90903_90907);frag.appendChild(child_90908);
{
var G__90909 = seq__90900_90904;
var G__90910 = chunk__90901_90905;
var G__90911 = count__90902_90906;
var G__90912 = (i__90903_90907 + (1));
seq__90900_90904 = G__90909;
chunk__90901_90905 = G__90910;
count__90902_90906 = G__90911;
i__90903_90907 = G__90912;
continue;
}
} else
{var temp__4126__auto___90913 = cljs.core.seq.call(null,seq__90900_90904);if(temp__4126__auto___90913)
{var seq__90900_90914__$1 = temp__4126__auto___90913;if(cljs.core.chunked_seq_QMARK_.call(null,seq__90900_90914__$1))
{var c__4406__auto___90915 = cljs.core.chunk_first.call(null,seq__90900_90914__$1);{
var G__90916 = cljs.core.chunk_rest.call(null,seq__90900_90914__$1);
var G__90917 = c__4406__auto___90915;
var G__90918 = cljs.core.count.call(null,c__4406__auto___90915);
var G__90919 = (0);
seq__90900_90904 = G__90916;
chunk__90901_90905 = G__90917;
count__90902_90906 = G__90918;
i__90903_90907 = G__90919;
continue;
}
} else
{var child_90920 = cljs.core.first.call(null,seq__90900_90914__$1);frag.appendChild(child_90920);
{
var G__90921 = cljs.core.next.call(null,seq__90900_90914__$1);
var G__90922 = null;
var G__90923 = (0);
var G__90924 = (0);
seq__90900_90904 = G__90921;
chunk__90901_90905 = G__90922;
count__90902_90906 = G__90923;
i__90903_90907 = G__90924;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__90894_SHARP_,p2__90895_SHARP_){return f.call(null,p1__90894_SHARP_,p2__90895_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,(0));
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + (1))));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,(0));
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + (1))));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3625__auto__ = obj;if(cljs.core.truth_(and__3625__auto__))
{var and__3625__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3625__auto____$1)
{return obj.length;
} else
{return and__3625__auto____$1;
}
} else
{return and__3625__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__90926 = list_thing;if(G__90926)
{var bit__4300__auto__ = (G__90926.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4300__auto__) || (G__90926.cljs$core$ISeqable$))
{return true;
} else
{if((!G__90926.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__90926);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__90926);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__90927 = content;if(G__90927)
{var bit__4300__auto__ = (G__90927.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4300__auto__) || (G__90927.cljs$core$ISeqable$))
{return true;
} else
{if((!G__90927.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__90927);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__90927);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__90928 = content;if(G__90928)
{var bit__4300__auto__ = (G__90928.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4300__auto__) || (G__90928.cljs$core$ISeqable$))
{return true;
} else
{if((!G__90928.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__90928);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__90928);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item((0));
} else
{return content;

}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist.call(null,coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}

//# sourceMappingURL=domina.js.map