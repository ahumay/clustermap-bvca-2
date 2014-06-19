// Compiled by ClojureScript 0.0-2227
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
var opt_wrapper_17890 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_17891 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_17892 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",2558708147),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_17892,opt_wrapper_17890,table_section_wrapper_17891,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),opt_wrapper_17890,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),table_section_wrapper_17891,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_17891,cell_wrapper_17892,table_section_wrapper_17891,table_section_wrapper_17891]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3527__auto__ = div.firstChild;if(cljs.core.truth_(and__3527__auto__))
{return div.firstChild.childNodes;
} else
{return and__3527__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__17897 = cljs.core.seq.call(null,tbody);var chunk__17898 = null;var count__17899 = 0;var i__17900 = 0;while(true){
if((i__17900 < count__17899))
{var child = cljs.core._nth.call(null,chunk__17898,i__17900);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__17901 = seq__17897;
var G__17902 = chunk__17898;
var G__17903 = count__17899;
var G__17904 = (i__17900 + 1);
seq__17897 = G__17901;
chunk__17898 = G__17902;
count__17899 = G__17903;
i__17900 = G__17904;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__17897);if(temp__4126__auto__)
{var seq__17897__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17897__$1))
{var c__4295__auto__ = cljs.core.chunk_first.call(null,seq__17897__$1);{
var G__17905 = cljs.core.chunk_rest.call(null,seq__17897__$1);
var G__17906 = c__4295__auto__;
var G__17907 = cljs.core.count.call(null,c__4295__auto__);
var G__17908 = 0;
seq__17897 = G__17905;
chunk__17898 = G__17906;
count__17899 = G__17907;
i__17900 = G__17908;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__17897__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__17909 = cljs.core.next.call(null,seq__17897__$1);
var G__17910 = null;
var G__17911 = 0;
var G__17912 = 0;
seq__17897 = G__17909;
chunk__17898 = G__17910;
count__17899 = G__17911;
i__17900 = G__17912;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__17914 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__17914,0,null);var start_wrap = cljs.core.nth.call(null,vec__17914,1,null);var end_wrap = cljs.core.nth.call(null,vec__17914,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__17915 = wrapper.lastChild;
var G__17916 = (level - 1);
wrapper = G__17915;
level = G__17916;
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
if(cljs.core.truth_((function (){var and__3527__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3527__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3527__auto__;
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
domina.DomContent = (function (){var obj17918 = {};return obj17918;
})();
domina.nodes = (function nodes(content){if((function (){var and__3527__auto__ = content;if(and__3527__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3527__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4166__auto__ = (((content == null))?null:content);return (function (){var or__3539__auto__ = (domina.nodes[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (domina.nodes["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3527__auto__ = nodeseq;if(and__3527__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3527__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4166__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3539__auto__ = (domina.single_node[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (domina.single_node["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3527__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3527__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3527__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__17919){
var mesg = cljs.core.seq(arglist__17919);
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
log.cljs$lang$applyTo = (function (arglist__17920){
var mesg = cljs.core.seq(arglist__17920);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__17921){
var contents = cljs.core.seq(arglist__17921);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__17922_SHARP_){return p1__17922_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__17923_SHARP_,p2__17924_SHARP_){return goog.dom.insertChildAt(p1__17923_SHARP_,p2__17924_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__17926_SHARP_,p2__17925_SHARP_){return goog.dom.insertSiblingBefore(p2__17925_SHARP_,p1__17926_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__17928_SHARP_,p2__17927_SHARP_){return goog.dom.insertSiblingAfter(p2__17927_SHARP_,p1__17928_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__17930_SHARP_,p2__17929_SHARP_){return goog.dom.replaceNode(p2__17929_SHARP_,p1__17930_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__17935_17939 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17936_17940 = null;var count__17937_17941 = 0;var i__17938_17942 = 0;while(true){
if((i__17938_17942 < count__17937_17941))
{var n_17943 = cljs.core._nth.call(null,chunk__17936_17940,i__17938_17942);goog.style.setStyle(n_17943,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17944 = seq__17935_17939;
var G__17945 = chunk__17936_17940;
var G__17946 = count__17937_17941;
var G__17947 = (i__17938_17942 + 1);
seq__17935_17939 = G__17944;
chunk__17936_17940 = G__17945;
count__17937_17941 = G__17946;
i__17938_17942 = G__17947;
continue;
}
} else
{var temp__4126__auto___17948 = cljs.core.seq.call(null,seq__17935_17939);if(temp__4126__auto___17948)
{var seq__17935_17949__$1 = temp__4126__auto___17948;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17935_17949__$1))
{var c__4295__auto___17950 = cljs.core.chunk_first.call(null,seq__17935_17949__$1);{
var G__17951 = cljs.core.chunk_rest.call(null,seq__17935_17949__$1);
var G__17952 = c__4295__auto___17950;
var G__17953 = cljs.core.count.call(null,c__4295__auto___17950);
var G__17954 = 0;
seq__17935_17939 = G__17951;
chunk__17936_17940 = G__17952;
count__17937_17941 = G__17953;
i__17938_17942 = G__17954;
continue;
}
} else
{var n_17955 = cljs.core.first.call(null,seq__17935_17949__$1);goog.style.setStyle(n_17955,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17956 = cljs.core.next.call(null,seq__17935_17949__$1);
var G__17957 = null;
var G__17958 = 0;
var G__17959 = 0;
seq__17935_17939 = G__17956;
chunk__17936_17940 = G__17957;
count__17937_17941 = G__17958;
i__17938_17942 = G__17959;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__17960){
var content = cljs.core.first(arglist__17960);
arglist__17960 = cljs.core.next(arglist__17960);
var name = cljs.core.first(arglist__17960);
var value = cljs.core.rest(arglist__17960);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__17965_17969 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17966_17970 = null;var count__17967_17971 = 0;var i__17968_17972 = 0;while(true){
if((i__17968_17972 < count__17967_17971))
{var n_17973 = cljs.core._nth.call(null,chunk__17966_17970,i__17968_17972);n_17973.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17974 = seq__17965_17969;
var G__17975 = chunk__17966_17970;
var G__17976 = count__17967_17971;
var G__17977 = (i__17968_17972 + 1);
seq__17965_17969 = G__17974;
chunk__17966_17970 = G__17975;
count__17967_17971 = G__17976;
i__17968_17972 = G__17977;
continue;
}
} else
{var temp__4126__auto___17978 = cljs.core.seq.call(null,seq__17965_17969);if(temp__4126__auto___17978)
{var seq__17965_17979__$1 = temp__4126__auto___17978;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17965_17979__$1))
{var c__4295__auto___17980 = cljs.core.chunk_first.call(null,seq__17965_17979__$1);{
var G__17981 = cljs.core.chunk_rest.call(null,seq__17965_17979__$1);
var G__17982 = c__4295__auto___17980;
var G__17983 = cljs.core.count.call(null,c__4295__auto___17980);
var G__17984 = 0;
seq__17965_17969 = G__17981;
chunk__17966_17970 = G__17982;
count__17967_17971 = G__17983;
i__17968_17972 = G__17984;
continue;
}
} else
{var n_17985 = cljs.core.first.call(null,seq__17965_17979__$1);n_17985.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17986 = cljs.core.next.call(null,seq__17965_17979__$1);
var G__17987 = null;
var G__17988 = 0;
var G__17989 = 0;
seq__17965_17969 = G__17986;
chunk__17966_17970 = G__17987;
count__17967_17971 = G__17988;
i__17968_17972 = G__17989;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__17990){
var content = cljs.core.first(arglist__17990);
arglist__17990 = cljs.core.next(arglist__17990);
var name = cljs.core.first(arglist__17990);
var value = cljs.core.rest(arglist__17990);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__17995_17999 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17996_18000 = null;var count__17997_18001 = 0;var i__17998_18002 = 0;while(true){
if((i__17998_18002 < count__17997_18001))
{var n_18003 = cljs.core._nth.call(null,chunk__17996_18000,i__17998_18002);n_18003.removeAttribute(cljs.core.name.call(null,name));
{
var G__18004 = seq__17995_17999;
var G__18005 = chunk__17996_18000;
var G__18006 = count__17997_18001;
var G__18007 = (i__17998_18002 + 1);
seq__17995_17999 = G__18004;
chunk__17996_18000 = G__18005;
count__17997_18001 = G__18006;
i__17998_18002 = G__18007;
continue;
}
} else
{var temp__4126__auto___18008 = cljs.core.seq.call(null,seq__17995_17999);if(temp__4126__auto___18008)
{var seq__17995_18009__$1 = temp__4126__auto___18008;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17995_18009__$1))
{var c__4295__auto___18010 = cljs.core.chunk_first.call(null,seq__17995_18009__$1);{
var G__18011 = cljs.core.chunk_rest.call(null,seq__17995_18009__$1);
var G__18012 = c__4295__auto___18010;
var G__18013 = cljs.core.count.call(null,c__4295__auto___18010);
var G__18014 = 0;
seq__17995_17999 = G__18011;
chunk__17996_18000 = G__18012;
count__17997_18001 = G__18013;
i__17998_18002 = G__18014;
continue;
}
} else
{var n_18015 = cljs.core.first.call(null,seq__17995_18009__$1);n_18015.removeAttribute(cljs.core.name.call(null,name));
{
var G__18016 = cljs.core.next.call(null,seq__17995_18009__$1);
var G__18017 = null;
var G__18018 = 0;
var G__18019 = 0;
seq__17995_17999 = G__18016;
chunk__17996_18000 = G__18017;
count__17997_18001 = G__18018;
i__17998_18002 = G__18019;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__18021 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__18021,0,null);var v = cljs.core.nth.call(null,vec__18021,1,null);if(cljs.core.truth_((function (){var and__3527__auto__ = k;if(cljs.core.truth_(and__3527__auto__))
{return v;
} else
{return and__3527__auto__;
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__18022_SHARP_){var attr = attrs__$1.item(p1__18022_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__18029_18035 = cljs.core.seq.call(null,styles);var chunk__18030_18036 = null;var count__18031_18037 = 0;var i__18032_18038 = 0;while(true){
if((i__18032_18038 < count__18031_18037))
{var vec__18033_18039 = cljs.core._nth.call(null,chunk__18030_18036,i__18032_18038);var name_18040 = cljs.core.nth.call(null,vec__18033_18039,0,null);var value_18041 = cljs.core.nth.call(null,vec__18033_18039,1,null);domina.set_style_BANG_.call(null,content,name_18040,value_18041);
{
var G__18042 = seq__18029_18035;
var G__18043 = chunk__18030_18036;
var G__18044 = count__18031_18037;
var G__18045 = (i__18032_18038 + 1);
seq__18029_18035 = G__18042;
chunk__18030_18036 = G__18043;
count__18031_18037 = G__18044;
i__18032_18038 = G__18045;
continue;
}
} else
{var temp__4126__auto___18046 = cljs.core.seq.call(null,seq__18029_18035);if(temp__4126__auto___18046)
{var seq__18029_18047__$1 = temp__4126__auto___18046;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18029_18047__$1))
{var c__4295__auto___18048 = cljs.core.chunk_first.call(null,seq__18029_18047__$1);{
var G__18049 = cljs.core.chunk_rest.call(null,seq__18029_18047__$1);
var G__18050 = c__4295__auto___18048;
var G__18051 = cljs.core.count.call(null,c__4295__auto___18048);
var G__18052 = 0;
seq__18029_18035 = G__18049;
chunk__18030_18036 = G__18050;
count__18031_18037 = G__18051;
i__18032_18038 = G__18052;
continue;
}
} else
{var vec__18034_18053 = cljs.core.first.call(null,seq__18029_18047__$1);var name_18054 = cljs.core.nth.call(null,vec__18034_18053,0,null);var value_18055 = cljs.core.nth.call(null,vec__18034_18053,1,null);domina.set_style_BANG_.call(null,content,name_18054,value_18055);
{
var G__18056 = cljs.core.next.call(null,seq__18029_18047__$1);
var G__18057 = null;
var G__18058 = 0;
var G__18059 = 0;
seq__18029_18035 = G__18056;
chunk__18030_18036 = G__18057;
count__18031_18037 = G__18058;
i__18032_18038 = G__18059;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__18066_18072 = cljs.core.seq.call(null,attrs);var chunk__18067_18073 = null;var count__18068_18074 = 0;var i__18069_18075 = 0;while(true){
if((i__18069_18075 < count__18068_18074))
{var vec__18070_18076 = cljs.core._nth.call(null,chunk__18067_18073,i__18069_18075);var name_18077 = cljs.core.nth.call(null,vec__18070_18076,0,null);var value_18078 = cljs.core.nth.call(null,vec__18070_18076,1,null);domina.set_attr_BANG_.call(null,content,name_18077,value_18078);
{
var G__18079 = seq__18066_18072;
var G__18080 = chunk__18067_18073;
var G__18081 = count__18068_18074;
var G__18082 = (i__18069_18075 + 1);
seq__18066_18072 = G__18079;
chunk__18067_18073 = G__18080;
count__18068_18074 = G__18081;
i__18069_18075 = G__18082;
continue;
}
} else
{var temp__4126__auto___18083 = cljs.core.seq.call(null,seq__18066_18072);if(temp__4126__auto___18083)
{var seq__18066_18084__$1 = temp__4126__auto___18083;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18066_18084__$1))
{var c__4295__auto___18085 = cljs.core.chunk_first.call(null,seq__18066_18084__$1);{
var G__18086 = cljs.core.chunk_rest.call(null,seq__18066_18084__$1);
var G__18087 = c__4295__auto___18085;
var G__18088 = cljs.core.count.call(null,c__4295__auto___18085);
var G__18089 = 0;
seq__18066_18072 = G__18086;
chunk__18067_18073 = G__18087;
count__18068_18074 = G__18088;
i__18069_18075 = G__18089;
continue;
}
} else
{var vec__18071_18090 = cljs.core.first.call(null,seq__18066_18084__$1);var name_18091 = cljs.core.nth.call(null,vec__18071_18090,0,null);var value_18092 = cljs.core.nth.call(null,vec__18071_18090,1,null);domina.set_attr_BANG_.call(null,content,name_18091,value_18092);
{
var G__18093 = cljs.core.next.call(null,seq__18066_18084__$1);
var G__18094 = null;
var G__18095 = 0;
var G__18096 = 0;
seq__18066_18072 = G__18093;
chunk__18067_18073 = G__18094;
count__18068_18074 = G__18095;
i__18069_18075 = G__18096;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__18101_18105 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18102_18106 = null;var count__18103_18107 = 0;var i__18104_18108 = 0;while(true){
if((i__18104_18108 < count__18103_18107))
{var node_18109 = cljs.core._nth.call(null,chunk__18102_18106,i__18104_18108);goog.dom.classes.add(node_18109,class$);
{
var G__18110 = seq__18101_18105;
var G__18111 = chunk__18102_18106;
var G__18112 = count__18103_18107;
var G__18113 = (i__18104_18108 + 1);
seq__18101_18105 = G__18110;
chunk__18102_18106 = G__18111;
count__18103_18107 = G__18112;
i__18104_18108 = G__18113;
continue;
}
} else
{var temp__4126__auto___18114 = cljs.core.seq.call(null,seq__18101_18105);if(temp__4126__auto___18114)
{var seq__18101_18115__$1 = temp__4126__auto___18114;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18101_18115__$1))
{var c__4295__auto___18116 = cljs.core.chunk_first.call(null,seq__18101_18115__$1);{
var G__18117 = cljs.core.chunk_rest.call(null,seq__18101_18115__$1);
var G__18118 = c__4295__auto___18116;
var G__18119 = cljs.core.count.call(null,c__4295__auto___18116);
var G__18120 = 0;
seq__18101_18105 = G__18117;
chunk__18102_18106 = G__18118;
count__18103_18107 = G__18119;
i__18104_18108 = G__18120;
continue;
}
} else
{var node_18121 = cljs.core.first.call(null,seq__18101_18115__$1);goog.dom.classes.add(node_18121,class$);
{
var G__18122 = cljs.core.next.call(null,seq__18101_18115__$1);
var G__18123 = null;
var G__18124 = 0;
var G__18125 = 0;
seq__18101_18105 = G__18122;
chunk__18102_18106 = G__18123;
count__18103_18107 = G__18124;
i__18104_18108 = G__18125;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__18130_18134 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18131_18135 = null;var count__18132_18136 = 0;var i__18133_18137 = 0;while(true){
if((i__18133_18137 < count__18132_18136))
{var node_18138 = cljs.core._nth.call(null,chunk__18131_18135,i__18133_18137);goog.dom.classes.remove(node_18138,class$);
{
var G__18139 = seq__18130_18134;
var G__18140 = chunk__18131_18135;
var G__18141 = count__18132_18136;
var G__18142 = (i__18133_18137 + 1);
seq__18130_18134 = G__18139;
chunk__18131_18135 = G__18140;
count__18132_18136 = G__18141;
i__18133_18137 = G__18142;
continue;
}
} else
{var temp__4126__auto___18143 = cljs.core.seq.call(null,seq__18130_18134);if(temp__4126__auto___18143)
{var seq__18130_18144__$1 = temp__4126__auto___18143;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18130_18144__$1))
{var c__4295__auto___18145 = cljs.core.chunk_first.call(null,seq__18130_18144__$1);{
var G__18146 = cljs.core.chunk_rest.call(null,seq__18130_18144__$1);
var G__18147 = c__4295__auto___18145;
var G__18148 = cljs.core.count.call(null,c__4295__auto___18145);
var G__18149 = 0;
seq__18130_18134 = G__18146;
chunk__18131_18135 = G__18147;
count__18132_18136 = G__18148;
i__18133_18137 = G__18149;
continue;
}
} else
{var node_18150 = cljs.core.first.call(null,seq__18130_18144__$1);goog.dom.classes.remove(node_18150,class$);
{
var G__18151 = cljs.core.next.call(null,seq__18130_18144__$1);
var G__18152 = null;
var G__18153 = 0;
var G__18154 = 0;
seq__18130_18134 = G__18151;
chunk__18131_18135 = G__18152;
count__18132_18136 = G__18153;
i__18133_18137 = G__18154;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__18159_18163 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18160_18164 = null;var count__18161_18165 = 0;var i__18162_18166 = 0;while(true){
if((i__18162_18166 < count__18161_18165))
{var node_18167 = cljs.core._nth.call(null,chunk__18160_18164,i__18162_18166);goog.dom.classes.toggle(node_18167,class$);
{
var G__18168 = seq__18159_18163;
var G__18169 = chunk__18160_18164;
var G__18170 = count__18161_18165;
var G__18171 = (i__18162_18166 + 1);
seq__18159_18163 = G__18168;
chunk__18160_18164 = G__18169;
count__18161_18165 = G__18170;
i__18162_18166 = G__18171;
continue;
}
} else
{var temp__4126__auto___18172 = cljs.core.seq.call(null,seq__18159_18163);if(temp__4126__auto___18172)
{var seq__18159_18173__$1 = temp__4126__auto___18172;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18159_18173__$1))
{var c__4295__auto___18174 = cljs.core.chunk_first.call(null,seq__18159_18173__$1);{
var G__18175 = cljs.core.chunk_rest.call(null,seq__18159_18173__$1);
var G__18176 = c__4295__auto___18174;
var G__18177 = cljs.core.count.call(null,c__4295__auto___18174);
var G__18178 = 0;
seq__18159_18163 = G__18175;
chunk__18160_18164 = G__18176;
count__18161_18165 = G__18177;
i__18162_18166 = G__18178;
continue;
}
} else
{var node_18179 = cljs.core.first.call(null,seq__18159_18173__$1);goog.dom.classes.toggle(node_18179,class$);
{
var G__18180 = cljs.core.next.call(null,seq__18159_18173__$1);
var G__18181 = null;
var G__18182 = 0;
var G__18183 = 0;
seq__18159_18163 = G__18180;
chunk__18160_18164 = G__18181;
count__18161_18165 = G__18182;
i__18162_18166 = G__18183;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_18192__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__18188_18193 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18189_18194 = null;var count__18190_18195 = 0;var i__18191_18196 = 0;while(true){
if((i__18191_18196 < count__18190_18195))
{var node_18197 = cljs.core._nth.call(null,chunk__18189_18194,i__18191_18196);goog.dom.classes.set(node_18197,classes_18192__$1);
{
var G__18198 = seq__18188_18193;
var G__18199 = chunk__18189_18194;
var G__18200 = count__18190_18195;
var G__18201 = (i__18191_18196 + 1);
seq__18188_18193 = G__18198;
chunk__18189_18194 = G__18199;
count__18190_18195 = G__18200;
i__18191_18196 = G__18201;
continue;
}
} else
{var temp__4126__auto___18202 = cljs.core.seq.call(null,seq__18188_18193);if(temp__4126__auto___18202)
{var seq__18188_18203__$1 = temp__4126__auto___18202;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18188_18203__$1))
{var c__4295__auto___18204 = cljs.core.chunk_first.call(null,seq__18188_18203__$1);{
var G__18205 = cljs.core.chunk_rest.call(null,seq__18188_18203__$1);
var G__18206 = c__4295__auto___18204;
var G__18207 = cljs.core.count.call(null,c__4295__auto___18204);
var G__18208 = 0;
seq__18188_18193 = G__18205;
chunk__18189_18194 = G__18206;
count__18190_18195 = G__18207;
i__18191_18196 = G__18208;
continue;
}
} else
{var node_18209 = cljs.core.first.call(null,seq__18188_18203__$1);goog.dom.classes.set(node_18209,classes_18192__$1);
{
var G__18210 = cljs.core.next.call(null,seq__18188_18203__$1);
var G__18211 = null;
var G__18212 = 0;
var G__18213 = 0;
seq__18188_18193 = G__18210;
chunk__18189_18194 = G__18211;
count__18190_18195 = G__18212;
i__18191_18196 = G__18213;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__18218_18222 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18219_18223 = null;var count__18220_18224 = 0;var i__18221_18225 = 0;while(true){
if((i__18221_18225 < count__18220_18224))
{var node_18226 = cljs.core._nth.call(null,chunk__18219_18223,i__18221_18225);goog.dom.setTextContent(node_18226,value);
{
var G__18227 = seq__18218_18222;
var G__18228 = chunk__18219_18223;
var G__18229 = count__18220_18224;
var G__18230 = (i__18221_18225 + 1);
seq__18218_18222 = G__18227;
chunk__18219_18223 = G__18228;
count__18220_18224 = G__18229;
i__18221_18225 = G__18230;
continue;
}
} else
{var temp__4126__auto___18231 = cljs.core.seq.call(null,seq__18218_18222);if(temp__4126__auto___18231)
{var seq__18218_18232__$1 = temp__4126__auto___18231;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18218_18232__$1))
{var c__4295__auto___18233 = cljs.core.chunk_first.call(null,seq__18218_18232__$1);{
var G__18234 = cljs.core.chunk_rest.call(null,seq__18218_18232__$1);
var G__18235 = c__4295__auto___18233;
var G__18236 = cljs.core.count.call(null,c__4295__auto___18233);
var G__18237 = 0;
seq__18218_18222 = G__18234;
chunk__18219_18223 = G__18235;
count__18220_18224 = G__18236;
i__18221_18225 = G__18237;
continue;
}
} else
{var node_18238 = cljs.core.first.call(null,seq__18218_18232__$1);goog.dom.setTextContent(node_18238,value);
{
var G__18239 = cljs.core.next.call(null,seq__18218_18232__$1);
var G__18240 = null;
var G__18241 = 0;
var G__18242 = 0;
seq__18218_18222 = G__18239;
chunk__18219_18223 = G__18240;
count__18220_18224 = G__18241;
i__18221_18225 = G__18242;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__18247_18251 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18248_18252 = null;var count__18249_18253 = 0;var i__18250_18254 = 0;while(true){
if((i__18250_18254 < count__18249_18253))
{var node_18255 = cljs.core._nth.call(null,chunk__18248_18252,i__18250_18254);goog.dom.forms.setValue(node_18255,value);
{
var G__18256 = seq__18247_18251;
var G__18257 = chunk__18248_18252;
var G__18258 = count__18249_18253;
var G__18259 = (i__18250_18254 + 1);
seq__18247_18251 = G__18256;
chunk__18248_18252 = G__18257;
count__18249_18253 = G__18258;
i__18250_18254 = G__18259;
continue;
}
} else
{var temp__4126__auto___18260 = cljs.core.seq.call(null,seq__18247_18251);if(temp__4126__auto___18260)
{var seq__18247_18261__$1 = temp__4126__auto___18260;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18247_18261__$1))
{var c__4295__auto___18262 = cljs.core.chunk_first.call(null,seq__18247_18261__$1);{
var G__18263 = cljs.core.chunk_rest.call(null,seq__18247_18261__$1);
var G__18264 = c__4295__auto___18262;
var G__18265 = cljs.core.count.call(null,c__4295__auto___18262);
var G__18266 = 0;
seq__18247_18251 = G__18263;
chunk__18248_18252 = G__18264;
count__18249_18253 = G__18265;
i__18250_18254 = G__18266;
continue;
}
} else
{var node_18267 = cljs.core.first.call(null,seq__18247_18261__$1);goog.dom.forms.setValue(node_18267,value);
{
var G__18268 = cljs.core.next.call(null,seq__18247_18261__$1);
var G__18269 = null;
var G__18270 = 0;
var G__18271 = 0;
seq__18247_18251 = G__18268;
chunk__18248_18252 = G__18269;
count__18249_18253 = G__18270;
i__18250_18254 = G__18271;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3527__auto__ = allows_inner_html_QMARK_;if(and__3527__auto__)
{var and__3527__auto____$1 = (function (){var or__3539__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3527__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3527__auto____$1;
}
} else
{return and__3527__auto__;
}
})()))
{var value_18282 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__18278_18283 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18279_18284 = null;var count__18280_18285 = 0;var i__18281_18286 = 0;while(true){
if((i__18281_18286 < count__18280_18285))
{var node_18287 = cljs.core._nth.call(null,chunk__18279_18284,i__18281_18286);node_18287.innerHTML = value_18282;
{
var G__18288 = seq__18278_18283;
var G__18289 = chunk__18279_18284;
var G__18290 = count__18280_18285;
var G__18291 = (i__18281_18286 + 1);
seq__18278_18283 = G__18288;
chunk__18279_18284 = G__18289;
count__18280_18285 = G__18290;
i__18281_18286 = G__18291;
continue;
}
} else
{var temp__4126__auto___18292 = cljs.core.seq.call(null,seq__18278_18283);if(temp__4126__auto___18292)
{var seq__18278_18293__$1 = temp__4126__auto___18292;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18278_18293__$1))
{var c__4295__auto___18294 = cljs.core.chunk_first.call(null,seq__18278_18293__$1);{
var G__18295 = cljs.core.chunk_rest.call(null,seq__18278_18293__$1);
var G__18296 = c__4295__auto___18294;
var G__18297 = cljs.core.count.call(null,c__4295__auto___18294);
var G__18298 = 0;
seq__18278_18283 = G__18295;
chunk__18279_18284 = G__18296;
count__18280_18285 = G__18297;
i__18281_18286 = G__18298;
continue;
}
} else
{var node_18299 = cljs.core.first.call(null,seq__18278_18293__$1);node_18299.innerHTML = value_18282;
{
var G__18300 = cljs.core.next.call(null,seq__18278_18293__$1);
var G__18301 = null;
var G__18302 = 0;
var G__18303 = 0;
seq__18278_18283 = G__18300;
chunk__18279_18284 = G__18301;
count__18280_18285 = G__18302;
i__18281_18286 = G__18303;
continue;
}
}
} else
{}
}
break;
}
}catch (e18277){if((e18277 instanceof Error))
{var e_18304 = e18277;domina.replace_children_BANG_.call(null,content,value_18282);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18277;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3527__auto__ = bubble;if(cljs.core.truth_(and__3527__auto__))
{return (value == null);
} else
{return and__3527__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3539__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__18311_18315 = cljs.core.seq.call(null,children);var chunk__18312_18316 = null;var count__18313_18317 = 0;var i__18314_18318 = 0;while(true){
if((i__18314_18318 < count__18313_18317))
{var child_18319 = cljs.core._nth.call(null,chunk__18312_18316,i__18314_18318);frag.appendChild(child_18319);
{
var G__18320 = seq__18311_18315;
var G__18321 = chunk__18312_18316;
var G__18322 = count__18313_18317;
var G__18323 = (i__18314_18318 + 1);
seq__18311_18315 = G__18320;
chunk__18312_18316 = G__18321;
count__18313_18317 = G__18322;
i__18314_18318 = G__18323;
continue;
}
} else
{var temp__4126__auto___18324 = cljs.core.seq.call(null,seq__18311_18315);if(temp__4126__auto___18324)
{var seq__18311_18325__$1 = temp__4126__auto___18324;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18311_18325__$1))
{var c__4295__auto___18326 = cljs.core.chunk_first.call(null,seq__18311_18325__$1);{
var G__18327 = cljs.core.chunk_rest.call(null,seq__18311_18325__$1);
var G__18328 = c__4295__auto___18326;
var G__18329 = cljs.core.count.call(null,c__4295__auto___18326);
var G__18330 = 0;
seq__18311_18315 = G__18327;
chunk__18312_18316 = G__18328;
count__18313_18317 = G__18329;
i__18314_18318 = G__18330;
continue;
}
} else
{var child_18331 = cljs.core.first.call(null,seq__18311_18325__$1);frag.appendChild(child_18331);
{
var G__18332 = cljs.core.next.call(null,seq__18311_18325__$1);
var G__18333 = null;
var G__18334 = 0;
var G__18335 = 0;
seq__18311_18315 = G__18332;
chunk__18312_18316 = G__18333;
count__18313_18317 = G__18334;
i__18314_18318 = G__18335;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__18305_SHARP_,p2__18306_SHARP_){return f.call(null,p1__18305_SHARP_,p2__18306_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3527__auto__ = obj;if(cljs.core.truth_(and__3527__auto__))
{var and__3527__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3527__auto____$1)
{return obj.length;
} else
{return and__3527__auto____$1;
}
} else
{return and__3527__auto__;
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
{if((function (){var G__18337 = list_thing;if(G__18337)
{var bit__4189__auto__ = (G__18337.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4189__auto__) || (G__18337.cljs$core$ISeqable$))
{return true;
} else
{if((!G__18337.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__18337);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__18337);
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
{if((function (){var G__18338 = content;if(G__18338)
{var bit__4189__auto__ = (G__18338.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4189__auto__) || (G__18338.cljs$core$ISeqable$))
{return true;
} else
{if((!G__18338.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__18338);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__18338);
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
{if((function (){var G__18339 = content;if(G__18339)
{var bit__4189__auto__ = (G__18339.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4189__auto__) || (G__18339.cljs$core$ISeqable$))
{return true;
} else
{if((!G__18339.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__18339);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__18339);
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
