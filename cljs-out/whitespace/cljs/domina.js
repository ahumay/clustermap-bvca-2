// Compiled by ClojureScript 0.0-2173
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.string');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('goog.dom.xml');
goog.require('goog.style');
goog.require('goog.dom.forms');
goog.require('domina.support');
goog.require('goog.events');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_50516 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_50517 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_50518 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_50517,table_section_wrapper_50517,opt_wrapper_50516,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_50518,table_section_wrapper_50517,cell_wrapper_50518,opt_wrapper_50516,table_section_wrapper_50517,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_50517]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3429__auto__ = div.firstChild;if(cljs.core.truth_(and__3429__auto__))
{return div.firstChild.childNodes;
} else
{return and__3429__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__50523 = cljs.core.seq.call(null,tbody);var chunk__50524 = null;var count__50525 = 0;var i__50526 = 0;while(true){
if((i__50526 < count__50525))
{var child = cljs.core._nth.call(null,chunk__50524,i__50526);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__50527 = seq__50523;
var G__50528 = chunk__50524;
var G__50529 = count__50525;
var G__50530 = (i__50526 + 1);
seq__50523 = G__50527;
chunk__50524 = G__50528;
count__50525 = G__50529;
i__50526 = G__50530;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__50523);if(temp__4092__auto__)
{var seq__50523__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50523__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__50523__$1);{
var G__50531 = cljs.core.chunk_rest.call(null,seq__50523__$1);
var G__50532 = c__4189__auto__;
var G__50533 = cljs.core.count.call(null,c__4189__auto__);
var G__50534 = 0;
seq__50523 = G__50531;
chunk__50524 = G__50532;
count__50525 = G__50533;
i__50526 = G__50534;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__50523__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__50535 = cljs.core.next.call(null,seq__50523__$1);
var G__50536 = null;
var G__50537 = 0;
var G__50538 = 0;
seq__50523 = G__50535;
chunk__50524 = G__50536;
count__50525 = G__50537;
i__50526 = G__50538;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__50540 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__50540,0,null);var start_wrap = cljs.core.nth.call(null,vec__50540,1,null);var end_wrap = cljs.core.nth.call(null,vec__50540,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__50541 = wrapper.lastChild;
var G__50542 = (level - 1);
wrapper = G__50541;
level = G__50542;
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
if(cljs.core.truth_((function (){var and__3429__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3429__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3429__auto__;
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
domina.DomContent = (function (){var obj50544 = {};return obj50544;
})();
domina.nodes = (function nodes(content){if((function (){var and__3429__auto__ = content;if(and__3429__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3429__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4068__auto__ = (((content == null))?null:content);return (function (){var or__3441__auto__ = (domina.nodes[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.nodes["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3429__auto__ = nodeseq;if(and__3429__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3429__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4068__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3441__auto__ = (domina.single_node[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.single_node["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3429__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3429__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3429__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__50545){
var mesg = cljs.core.seq(arglist__50545);
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
log.cljs$lang$applyTo = (function (arglist__50546){
var mesg = cljs.core.seq(arglist__50546);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__50547){
var contents = cljs.core.seq(arglist__50547);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__50548_SHARP_){return p1__50548_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__50549_SHARP_,p2__50550_SHARP_){return goog.dom.insertChildAt(p1__50549_SHARP_,p2__50550_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__50552_SHARP_,p2__50551_SHARP_){return goog.dom.insertSiblingBefore(p2__50551_SHARP_,p1__50552_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__50554_SHARP_,p2__50553_SHARP_){return goog.dom.insertSiblingAfter(p2__50553_SHARP_,p1__50554_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__50556_SHARP_,p2__50555_SHARP_){return goog.dom.replaceNode(p2__50555_SHARP_,p1__50556_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__50561_50565 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50562_50566 = null;var count__50563_50567 = 0;var i__50564_50568 = 0;while(true){
if((i__50564_50568 < count__50563_50567))
{var n_50569 = cljs.core._nth.call(null,chunk__50562_50566,i__50564_50568);goog.style.setStyle(n_50569,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__50570 = seq__50561_50565;
var G__50571 = chunk__50562_50566;
var G__50572 = count__50563_50567;
var G__50573 = (i__50564_50568 + 1);
seq__50561_50565 = G__50570;
chunk__50562_50566 = G__50571;
count__50563_50567 = G__50572;
i__50564_50568 = G__50573;
continue;
}
} else
{var temp__4092__auto___50574 = cljs.core.seq.call(null,seq__50561_50565);if(temp__4092__auto___50574)
{var seq__50561_50575__$1 = temp__4092__auto___50574;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50561_50575__$1))
{var c__4189__auto___50576 = cljs.core.chunk_first.call(null,seq__50561_50575__$1);{
var G__50577 = cljs.core.chunk_rest.call(null,seq__50561_50575__$1);
var G__50578 = c__4189__auto___50576;
var G__50579 = cljs.core.count.call(null,c__4189__auto___50576);
var G__50580 = 0;
seq__50561_50565 = G__50577;
chunk__50562_50566 = G__50578;
count__50563_50567 = G__50579;
i__50564_50568 = G__50580;
continue;
}
} else
{var n_50581 = cljs.core.first.call(null,seq__50561_50575__$1);goog.style.setStyle(n_50581,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__50582 = cljs.core.next.call(null,seq__50561_50575__$1);
var G__50583 = null;
var G__50584 = 0;
var G__50585 = 0;
seq__50561_50565 = G__50582;
chunk__50562_50566 = G__50583;
count__50563_50567 = G__50584;
i__50564_50568 = G__50585;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__50586){
var content = cljs.core.first(arglist__50586);
arglist__50586 = cljs.core.next(arglist__50586);
var name = cljs.core.first(arglist__50586);
var value = cljs.core.rest(arglist__50586);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__50591_50595 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50592_50596 = null;var count__50593_50597 = 0;var i__50594_50598 = 0;while(true){
if((i__50594_50598 < count__50593_50597))
{var n_50599 = cljs.core._nth.call(null,chunk__50592_50596,i__50594_50598);n_50599.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__50600 = seq__50591_50595;
var G__50601 = chunk__50592_50596;
var G__50602 = count__50593_50597;
var G__50603 = (i__50594_50598 + 1);
seq__50591_50595 = G__50600;
chunk__50592_50596 = G__50601;
count__50593_50597 = G__50602;
i__50594_50598 = G__50603;
continue;
}
} else
{var temp__4092__auto___50604 = cljs.core.seq.call(null,seq__50591_50595);if(temp__4092__auto___50604)
{var seq__50591_50605__$1 = temp__4092__auto___50604;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50591_50605__$1))
{var c__4189__auto___50606 = cljs.core.chunk_first.call(null,seq__50591_50605__$1);{
var G__50607 = cljs.core.chunk_rest.call(null,seq__50591_50605__$1);
var G__50608 = c__4189__auto___50606;
var G__50609 = cljs.core.count.call(null,c__4189__auto___50606);
var G__50610 = 0;
seq__50591_50595 = G__50607;
chunk__50592_50596 = G__50608;
count__50593_50597 = G__50609;
i__50594_50598 = G__50610;
continue;
}
} else
{var n_50611 = cljs.core.first.call(null,seq__50591_50605__$1);n_50611.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__50612 = cljs.core.next.call(null,seq__50591_50605__$1);
var G__50613 = null;
var G__50614 = 0;
var G__50615 = 0;
seq__50591_50595 = G__50612;
chunk__50592_50596 = G__50613;
count__50593_50597 = G__50614;
i__50594_50598 = G__50615;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__50616){
var content = cljs.core.first(arglist__50616);
arglist__50616 = cljs.core.next(arglist__50616);
var name = cljs.core.first(arglist__50616);
var value = cljs.core.rest(arglist__50616);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__50621_50625 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50622_50626 = null;var count__50623_50627 = 0;var i__50624_50628 = 0;while(true){
if((i__50624_50628 < count__50623_50627))
{var n_50629 = cljs.core._nth.call(null,chunk__50622_50626,i__50624_50628);n_50629.removeAttribute(cljs.core.name.call(null,name));
{
var G__50630 = seq__50621_50625;
var G__50631 = chunk__50622_50626;
var G__50632 = count__50623_50627;
var G__50633 = (i__50624_50628 + 1);
seq__50621_50625 = G__50630;
chunk__50622_50626 = G__50631;
count__50623_50627 = G__50632;
i__50624_50628 = G__50633;
continue;
}
} else
{var temp__4092__auto___50634 = cljs.core.seq.call(null,seq__50621_50625);if(temp__4092__auto___50634)
{var seq__50621_50635__$1 = temp__4092__auto___50634;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50621_50635__$1))
{var c__4189__auto___50636 = cljs.core.chunk_first.call(null,seq__50621_50635__$1);{
var G__50637 = cljs.core.chunk_rest.call(null,seq__50621_50635__$1);
var G__50638 = c__4189__auto___50636;
var G__50639 = cljs.core.count.call(null,c__4189__auto___50636);
var G__50640 = 0;
seq__50621_50625 = G__50637;
chunk__50622_50626 = G__50638;
count__50623_50627 = G__50639;
i__50624_50628 = G__50640;
continue;
}
} else
{var n_50641 = cljs.core.first.call(null,seq__50621_50635__$1);n_50641.removeAttribute(cljs.core.name.call(null,name));
{
var G__50642 = cljs.core.next.call(null,seq__50621_50635__$1);
var G__50643 = null;
var G__50644 = 0;
var G__50645 = 0;
seq__50621_50625 = G__50642;
chunk__50622_50626 = G__50643;
count__50623_50627 = G__50644;
i__50624_50628 = G__50645;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__50647 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__50647,0,null);var v = cljs.core.nth.call(null,vec__50647,1,null);if(cljs.core.truth_((function (){var and__3429__auto__ = k;if(cljs.core.truth_(and__3429__auto__))
{return v;
} else
{return and__3429__auto__;
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
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return null;
}
}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__50648_SHARP_){var attr = attrs__$1.item(p1__50648_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__50655_50661 = cljs.core.seq.call(null,styles);var chunk__50656_50662 = null;var count__50657_50663 = 0;var i__50658_50664 = 0;while(true){
if((i__50658_50664 < count__50657_50663))
{var vec__50659_50665 = cljs.core._nth.call(null,chunk__50656_50662,i__50658_50664);var name_50666 = cljs.core.nth.call(null,vec__50659_50665,0,null);var value_50667 = cljs.core.nth.call(null,vec__50659_50665,1,null);domina.set_style_BANG_.call(null,content,name_50666,value_50667);
{
var G__50668 = seq__50655_50661;
var G__50669 = chunk__50656_50662;
var G__50670 = count__50657_50663;
var G__50671 = (i__50658_50664 + 1);
seq__50655_50661 = G__50668;
chunk__50656_50662 = G__50669;
count__50657_50663 = G__50670;
i__50658_50664 = G__50671;
continue;
}
} else
{var temp__4092__auto___50672 = cljs.core.seq.call(null,seq__50655_50661);if(temp__4092__auto___50672)
{var seq__50655_50673__$1 = temp__4092__auto___50672;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50655_50673__$1))
{var c__4189__auto___50674 = cljs.core.chunk_first.call(null,seq__50655_50673__$1);{
var G__50675 = cljs.core.chunk_rest.call(null,seq__50655_50673__$1);
var G__50676 = c__4189__auto___50674;
var G__50677 = cljs.core.count.call(null,c__4189__auto___50674);
var G__50678 = 0;
seq__50655_50661 = G__50675;
chunk__50656_50662 = G__50676;
count__50657_50663 = G__50677;
i__50658_50664 = G__50678;
continue;
}
} else
{var vec__50660_50679 = cljs.core.first.call(null,seq__50655_50673__$1);var name_50680 = cljs.core.nth.call(null,vec__50660_50679,0,null);var value_50681 = cljs.core.nth.call(null,vec__50660_50679,1,null);domina.set_style_BANG_.call(null,content,name_50680,value_50681);
{
var G__50682 = cljs.core.next.call(null,seq__50655_50673__$1);
var G__50683 = null;
var G__50684 = 0;
var G__50685 = 0;
seq__50655_50661 = G__50682;
chunk__50656_50662 = G__50683;
count__50657_50663 = G__50684;
i__50658_50664 = G__50685;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__50692_50698 = cljs.core.seq.call(null,attrs);var chunk__50693_50699 = null;var count__50694_50700 = 0;var i__50695_50701 = 0;while(true){
if((i__50695_50701 < count__50694_50700))
{var vec__50696_50702 = cljs.core._nth.call(null,chunk__50693_50699,i__50695_50701);var name_50703 = cljs.core.nth.call(null,vec__50696_50702,0,null);var value_50704 = cljs.core.nth.call(null,vec__50696_50702,1,null);domina.set_attr_BANG_.call(null,content,name_50703,value_50704);
{
var G__50705 = seq__50692_50698;
var G__50706 = chunk__50693_50699;
var G__50707 = count__50694_50700;
var G__50708 = (i__50695_50701 + 1);
seq__50692_50698 = G__50705;
chunk__50693_50699 = G__50706;
count__50694_50700 = G__50707;
i__50695_50701 = G__50708;
continue;
}
} else
{var temp__4092__auto___50709 = cljs.core.seq.call(null,seq__50692_50698);if(temp__4092__auto___50709)
{var seq__50692_50710__$1 = temp__4092__auto___50709;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50692_50710__$1))
{var c__4189__auto___50711 = cljs.core.chunk_first.call(null,seq__50692_50710__$1);{
var G__50712 = cljs.core.chunk_rest.call(null,seq__50692_50710__$1);
var G__50713 = c__4189__auto___50711;
var G__50714 = cljs.core.count.call(null,c__4189__auto___50711);
var G__50715 = 0;
seq__50692_50698 = G__50712;
chunk__50693_50699 = G__50713;
count__50694_50700 = G__50714;
i__50695_50701 = G__50715;
continue;
}
} else
{var vec__50697_50716 = cljs.core.first.call(null,seq__50692_50710__$1);var name_50717 = cljs.core.nth.call(null,vec__50697_50716,0,null);var value_50718 = cljs.core.nth.call(null,vec__50697_50716,1,null);domina.set_attr_BANG_.call(null,content,name_50717,value_50718);
{
var G__50719 = cljs.core.next.call(null,seq__50692_50710__$1);
var G__50720 = null;
var G__50721 = 0;
var G__50722 = 0;
seq__50692_50698 = G__50719;
chunk__50693_50699 = G__50720;
count__50694_50700 = G__50721;
i__50695_50701 = G__50722;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__50727_50731 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50728_50732 = null;var count__50729_50733 = 0;var i__50730_50734 = 0;while(true){
if((i__50730_50734 < count__50729_50733))
{var node_50735 = cljs.core._nth.call(null,chunk__50728_50732,i__50730_50734);goog.dom.classes.add(node_50735,class$);
{
var G__50736 = seq__50727_50731;
var G__50737 = chunk__50728_50732;
var G__50738 = count__50729_50733;
var G__50739 = (i__50730_50734 + 1);
seq__50727_50731 = G__50736;
chunk__50728_50732 = G__50737;
count__50729_50733 = G__50738;
i__50730_50734 = G__50739;
continue;
}
} else
{var temp__4092__auto___50740 = cljs.core.seq.call(null,seq__50727_50731);if(temp__4092__auto___50740)
{var seq__50727_50741__$1 = temp__4092__auto___50740;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50727_50741__$1))
{var c__4189__auto___50742 = cljs.core.chunk_first.call(null,seq__50727_50741__$1);{
var G__50743 = cljs.core.chunk_rest.call(null,seq__50727_50741__$1);
var G__50744 = c__4189__auto___50742;
var G__50745 = cljs.core.count.call(null,c__4189__auto___50742);
var G__50746 = 0;
seq__50727_50731 = G__50743;
chunk__50728_50732 = G__50744;
count__50729_50733 = G__50745;
i__50730_50734 = G__50746;
continue;
}
} else
{var node_50747 = cljs.core.first.call(null,seq__50727_50741__$1);goog.dom.classes.add(node_50747,class$);
{
var G__50748 = cljs.core.next.call(null,seq__50727_50741__$1);
var G__50749 = null;
var G__50750 = 0;
var G__50751 = 0;
seq__50727_50731 = G__50748;
chunk__50728_50732 = G__50749;
count__50729_50733 = G__50750;
i__50730_50734 = G__50751;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__50756_50760 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50757_50761 = null;var count__50758_50762 = 0;var i__50759_50763 = 0;while(true){
if((i__50759_50763 < count__50758_50762))
{var node_50764 = cljs.core._nth.call(null,chunk__50757_50761,i__50759_50763);goog.dom.classes.remove(node_50764,class$);
{
var G__50765 = seq__50756_50760;
var G__50766 = chunk__50757_50761;
var G__50767 = count__50758_50762;
var G__50768 = (i__50759_50763 + 1);
seq__50756_50760 = G__50765;
chunk__50757_50761 = G__50766;
count__50758_50762 = G__50767;
i__50759_50763 = G__50768;
continue;
}
} else
{var temp__4092__auto___50769 = cljs.core.seq.call(null,seq__50756_50760);if(temp__4092__auto___50769)
{var seq__50756_50770__$1 = temp__4092__auto___50769;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50756_50770__$1))
{var c__4189__auto___50771 = cljs.core.chunk_first.call(null,seq__50756_50770__$1);{
var G__50772 = cljs.core.chunk_rest.call(null,seq__50756_50770__$1);
var G__50773 = c__4189__auto___50771;
var G__50774 = cljs.core.count.call(null,c__4189__auto___50771);
var G__50775 = 0;
seq__50756_50760 = G__50772;
chunk__50757_50761 = G__50773;
count__50758_50762 = G__50774;
i__50759_50763 = G__50775;
continue;
}
} else
{var node_50776 = cljs.core.first.call(null,seq__50756_50770__$1);goog.dom.classes.remove(node_50776,class$);
{
var G__50777 = cljs.core.next.call(null,seq__50756_50770__$1);
var G__50778 = null;
var G__50779 = 0;
var G__50780 = 0;
seq__50756_50760 = G__50777;
chunk__50757_50761 = G__50778;
count__50758_50762 = G__50779;
i__50759_50763 = G__50780;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__50785_50789 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50786_50790 = null;var count__50787_50791 = 0;var i__50788_50792 = 0;while(true){
if((i__50788_50792 < count__50787_50791))
{var node_50793 = cljs.core._nth.call(null,chunk__50786_50790,i__50788_50792);goog.dom.classes.toggle(node_50793,class$);
{
var G__50794 = seq__50785_50789;
var G__50795 = chunk__50786_50790;
var G__50796 = count__50787_50791;
var G__50797 = (i__50788_50792 + 1);
seq__50785_50789 = G__50794;
chunk__50786_50790 = G__50795;
count__50787_50791 = G__50796;
i__50788_50792 = G__50797;
continue;
}
} else
{var temp__4092__auto___50798 = cljs.core.seq.call(null,seq__50785_50789);if(temp__4092__auto___50798)
{var seq__50785_50799__$1 = temp__4092__auto___50798;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50785_50799__$1))
{var c__4189__auto___50800 = cljs.core.chunk_first.call(null,seq__50785_50799__$1);{
var G__50801 = cljs.core.chunk_rest.call(null,seq__50785_50799__$1);
var G__50802 = c__4189__auto___50800;
var G__50803 = cljs.core.count.call(null,c__4189__auto___50800);
var G__50804 = 0;
seq__50785_50789 = G__50801;
chunk__50786_50790 = G__50802;
count__50787_50791 = G__50803;
i__50788_50792 = G__50804;
continue;
}
} else
{var node_50805 = cljs.core.first.call(null,seq__50785_50799__$1);goog.dom.classes.toggle(node_50805,class$);
{
var G__50806 = cljs.core.next.call(null,seq__50785_50799__$1);
var G__50807 = null;
var G__50808 = 0;
var G__50809 = 0;
seq__50785_50789 = G__50806;
chunk__50786_50790 = G__50807;
count__50787_50791 = G__50808;
i__50788_50792 = G__50809;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_50818__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__50814_50819 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50815_50820 = null;var count__50816_50821 = 0;var i__50817_50822 = 0;while(true){
if((i__50817_50822 < count__50816_50821))
{var node_50823 = cljs.core._nth.call(null,chunk__50815_50820,i__50817_50822);goog.dom.classes.set(node_50823,classes_50818__$1);
{
var G__50824 = seq__50814_50819;
var G__50825 = chunk__50815_50820;
var G__50826 = count__50816_50821;
var G__50827 = (i__50817_50822 + 1);
seq__50814_50819 = G__50824;
chunk__50815_50820 = G__50825;
count__50816_50821 = G__50826;
i__50817_50822 = G__50827;
continue;
}
} else
{var temp__4092__auto___50828 = cljs.core.seq.call(null,seq__50814_50819);if(temp__4092__auto___50828)
{var seq__50814_50829__$1 = temp__4092__auto___50828;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50814_50829__$1))
{var c__4189__auto___50830 = cljs.core.chunk_first.call(null,seq__50814_50829__$1);{
var G__50831 = cljs.core.chunk_rest.call(null,seq__50814_50829__$1);
var G__50832 = c__4189__auto___50830;
var G__50833 = cljs.core.count.call(null,c__4189__auto___50830);
var G__50834 = 0;
seq__50814_50819 = G__50831;
chunk__50815_50820 = G__50832;
count__50816_50821 = G__50833;
i__50817_50822 = G__50834;
continue;
}
} else
{var node_50835 = cljs.core.first.call(null,seq__50814_50829__$1);goog.dom.classes.set(node_50835,classes_50818__$1);
{
var G__50836 = cljs.core.next.call(null,seq__50814_50829__$1);
var G__50837 = null;
var G__50838 = 0;
var G__50839 = 0;
seq__50814_50819 = G__50836;
chunk__50815_50820 = G__50837;
count__50816_50821 = G__50838;
i__50817_50822 = G__50839;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__50844_50848 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50845_50849 = null;var count__50846_50850 = 0;var i__50847_50851 = 0;while(true){
if((i__50847_50851 < count__50846_50850))
{var node_50852 = cljs.core._nth.call(null,chunk__50845_50849,i__50847_50851);goog.dom.setTextContent(node_50852,value);
{
var G__50853 = seq__50844_50848;
var G__50854 = chunk__50845_50849;
var G__50855 = count__50846_50850;
var G__50856 = (i__50847_50851 + 1);
seq__50844_50848 = G__50853;
chunk__50845_50849 = G__50854;
count__50846_50850 = G__50855;
i__50847_50851 = G__50856;
continue;
}
} else
{var temp__4092__auto___50857 = cljs.core.seq.call(null,seq__50844_50848);if(temp__4092__auto___50857)
{var seq__50844_50858__$1 = temp__4092__auto___50857;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50844_50858__$1))
{var c__4189__auto___50859 = cljs.core.chunk_first.call(null,seq__50844_50858__$1);{
var G__50860 = cljs.core.chunk_rest.call(null,seq__50844_50858__$1);
var G__50861 = c__4189__auto___50859;
var G__50862 = cljs.core.count.call(null,c__4189__auto___50859);
var G__50863 = 0;
seq__50844_50848 = G__50860;
chunk__50845_50849 = G__50861;
count__50846_50850 = G__50862;
i__50847_50851 = G__50863;
continue;
}
} else
{var node_50864 = cljs.core.first.call(null,seq__50844_50858__$1);goog.dom.setTextContent(node_50864,value);
{
var G__50865 = cljs.core.next.call(null,seq__50844_50858__$1);
var G__50866 = null;
var G__50867 = 0;
var G__50868 = 0;
seq__50844_50848 = G__50865;
chunk__50845_50849 = G__50866;
count__50846_50850 = G__50867;
i__50847_50851 = G__50868;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__50873_50877 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50874_50878 = null;var count__50875_50879 = 0;var i__50876_50880 = 0;while(true){
if((i__50876_50880 < count__50875_50879))
{var node_50881 = cljs.core._nth.call(null,chunk__50874_50878,i__50876_50880);goog.dom.forms.setValue(node_50881,value);
{
var G__50882 = seq__50873_50877;
var G__50883 = chunk__50874_50878;
var G__50884 = count__50875_50879;
var G__50885 = (i__50876_50880 + 1);
seq__50873_50877 = G__50882;
chunk__50874_50878 = G__50883;
count__50875_50879 = G__50884;
i__50876_50880 = G__50885;
continue;
}
} else
{var temp__4092__auto___50886 = cljs.core.seq.call(null,seq__50873_50877);if(temp__4092__auto___50886)
{var seq__50873_50887__$1 = temp__4092__auto___50886;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50873_50887__$1))
{var c__4189__auto___50888 = cljs.core.chunk_first.call(null,seq__50873_50887__$1);{
var G__50889 = cljs.core.chunk_rest.call(null,seq__50873_50887__$1);
var G__50890 = c__4189__auto___50888;
var G__50891 = cljs.core.count.call(null,c__4189__auto___50888);
var G__50892 = 0;
seq__50873_50877 = G__50889;
chunk__50874_50878 = G__50890;
count__50875_50879 = G__50891;
i__50876_50880 = G__50892;
continue;
}
} else
{var node_50893 = cljs.core.first.call(null,seq__50873_50887__$1);goog.dom.forms.setValue(node_50893,value);
{
var G__50894 = cljs.core.next.call(null,seq__50873_50887__$1);
var G__50895 = null;
var G__50896 = 0;
var G__50897 = 0;
seq__50873_50877 = G__50894;
chunk__50874_50878 = G__50895;
count__50875_50879 = G__50896;
i__50876_50880 = G__50897;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3429__auto__ = allows_inner_html_QMARK_;if(and__3429__auto__)
{var and__3429__auto____$1 = (function (){var or__3441__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3429__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3429__auto____$1;
}
} else
{return and__3429__auto__;
}
})()))
{var value_50908 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__50904_50909 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50905_50910 = null;var count__50906_50911 = 0;var i__50907_50912 = 0;while(true){
if((i__50907_50912 < count__50906_50911))
{var node_50913 = cljs.core._nth.call(null,chunk__50905_50910,i__50907_50912);node_50913.innerHTML = value_50908;
{
var G__50914 = seq__50904_50909;
var G__50915 = chunk__50905_50910;
var G__50916 = count__50906_50911;
var G__50917 = (i__50907_50912 + 1);
seq__50904_50909 = G__50914;
chunk__50905_50910 = G__50915;
count__50906_50911 = G__50916;
i__50907_50912 = G__50917;
continue;
}
} else
{var temp__4092__auto___50918 = cljs.core.seq.call(null,seq__50904_50909);if(temp__4092__auto___50918)
{var seq__50904_50919__$1 = temp__4092__auto___50918;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50904_50919__$1))
{var c__4189__auto___50920 = cljs.core.chunk_first.call(null,seq__50904_50919__$1);{
var G__50921 = cljs.core.chunk_rest.call(null,seq__50904_50919__$1);
var G__50922 = c__4189__auto___50920;
var G__50923 = cljs.core.count.call(null,c__4189__auto___50920);
var G__50924 = 0;
seq__50904_50909 = G__50921;
chunk__50905_50910 = G__50922;
count__50906_50911 = G__50923;
i__50907_50912 = G__50924;
continue;
}
} else
{var node_50925 = cljs.core.first.call(null,seq__50904_50919__$1);node_50925.innerHTML = value_50908;
{
var G__50926 = cljs.core.next.call(null,seq__50904_50919__$1);
var G__50927 = null;
var G__50928 = 0;
var G__50929 = 0;
seq__50904_50909 = G__50926;
chunk__50905_50910 = G__50927;
count__50906_50911 = G__50928;
i__50907_50912 = G__50929;
continue;
}
}
} else
{}
}
break;
}
}catch (e50903){if((e50903 instanceof Error))
{var e_50930 = e50903;domina.replace_children_BANG_.call(null,content,value_50908);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e50903;
} else
{}
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3429__auto__ = bubble;if(cljs.core.truth_(and__3429__auto__))
{return (value == null);
} else
{return and__3429__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return get_data.call(null,parent,key,true);
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3441__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__50937_50941 = cljs.core.seq.call(null,children);var chunk__50938_50942 = null;var count__50939_50943 = 0;var i__50940_50944 = 0;while(true){
if((i__50940_50944 < count__50939_50943))
{var child_50945 = cljs.core._nth.call(null,chunk__50938_50942,i__50940_50944);frag.appendChild(child_50945);
{
var G__50946 = seq__50937_50941;
var G__50947 = chunk__50938_50942;
var G__50948 = count__50939_50943;
var G__50949 = (i__50940_50944 + 1);
seq__50937_50941 = G__50946;
chunk__50938_50942 = G__50947;
count__50939_50943 = G__50948;
i__50940_50944 = G__50949;
continue;
}
} else
{var temp__4092__auto___50950 = cljs.core.seq.call(null,seq__50937_50941);if(temp__4092__auto___50950)
{var seq__50937_50951__$1 = temp__4092__auto___50950;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50937_50951__$1))
{var c__4189__auto___50952 = cljs.core.chunk_first.call(null,seq__50937_50951__$1);{
var G__50953 = cljs.core.chunk_rest.call(null,seq__50937_50951__$1);
var G__50954 = c__4189__auto___50952;
var G__50955 = cljs.core.count.call(null,c__4189__auto___50952);
var G__50956 = 0;
seq__50937_50941 = G__50953;
chunk__50938_50942 = G__50954;
count__50939_50943 = G__50955;
i__50940_50944 = G__50956;
continue;
}
} else
{var child_50957 = cljs.core.first.call(null,seq__50937_50951__$1);frag.appendChild(child_50957);
{
var G__50958 = cljs.core.next.call(null,seq__50937_50951__$1);
var G__50959 = null;
var G__50960 = 0;
var G__50961 = 0;
seq__50937_50941 = G__50958;
chunk__50938_50942 = G__50959;
count__50939_50943 = G__50960;
i__50940_50944 = G__50961;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__50931_SHARP_,p2__50932_SHARP_){return f.call(null,p1__50931_SHARP_,p2__50932_SHARP_);
}),cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
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
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3429__auto__ = obj;if(cljs.core.truth_(and__3429__auto__))
{var and__3429__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3429__auto____$1)
{return obj.length;
} else
{return and__3429__auto____$1;
}
} else
{return and__3429__auto__;
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
{if((function (){var G__50963 = list_thing;if(G__50963)
{var bit__4091__auto__ = (G__50963.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__50963.cljs$core$ISeqable$))
{return true;
} else
{if((!G__50963.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__50963);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__50963);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__50964 = content;if(G__50964)
{var bit__4091__auto__ = (G__50964.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__50964.cljs$core$ISeqable$))
{return true;
} else
{if((!G__50964.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__50964);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__50964);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__50965 = content;if(G__50965)
{var bit__4091__auto__ = (G__50965.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__50965.cljs$core$ISeqable$))
{return true;
} else
{if((!G__50965.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__50965);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__50965);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return content;
} else
{return null;
}
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
