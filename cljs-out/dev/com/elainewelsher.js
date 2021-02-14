// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('com.elainewelsher');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('com.elainewelsher.routing');
goog.require('goog.dom');
goog.require('rum.core');
/**
 * Set the hash portion of the url. This triggers a browser history
 *   event.
 * 
 *   See: configure-history-navigation
 */
com.elainewelsher.set_hash = (function com$elainewelsher$set_hash(hash){
return (window.location.hash = hash);
});
if((typeof com !== 'undefined') && (typeof com.elainewelsher !== 'undefined') && (typeof com.elainewelsher.app_state !== 'undefined')){
} else {
com.elainewelsher.app_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$projects_DASH_page,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$post_DASH_layout,false,cljs.core.cst$kw$focused_DASH_project_DASH_index,null], null),cljs.core.cst$kw$project_DASH_page,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$focused_DASH_image_DASH_index,null], null)], null));
}
/**
 * Given a year, return a string suitable for displaying to the user.
 */
com.elainewelsher.display_year = (function com$elainewelsher$display_year(year){
var year_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(year);
var vec__14254 = cljs.core.split_at((((year_str).length) - (2)),year_str);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14254,(0),null);
var last_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14254,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"'",last_2);
});
com.elainewelsher.project_title = rum.core.lazy_build(rum.core.build_defc,(function (project,display_year_QMARK_){
return daiquiri.interpreter.interpret(cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$kw$$project_DASH_title_DASH_container,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$kw$$project_DASH_title,null,(1),null)),(cljs.core.truth_(project)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$project_DASH_name,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(project)], null),(cljs.core.truth_(display_year_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$project_DASH_year,com.elainewelsher.display_year(cljs.core.cst$kw$year.cljs$core$IFn$_invoke$arity$1(project))], null):null)], null):null))))),null,(1),null)))))));
}),null,"com.elainewelsher/project-title");
com.elainewelsher.project_thumbnail = rum.core.lazy_build(rum.core.build_defc,(function (is_focused,index,thumbnail){
return daiquiri.core.create_element("div",{'style':{'opacity':(cljs.core.truth_(is_focused)?(1):0.2)},'className':"thumbnail"},[daiquiri.core.create_element("img",{'src':thumbnail},[])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key_DASH_fn,(function (_,index,___$1){
return index;
})], null)], null),"com.elainewelsher/project-thumbnail");
com.elainewelsher.on_project_hover = (function com$elainewelsher$on_project_hover(index){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(com.elainewelsher.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$projects_DASH_page,cljs.core.cst$kw$post_DASH_layout], null)))){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.elainewelsher.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$projects_DASH_page,cljs.core.cst$kw$focused_DASH_project_DASH_index], null),index);
}
});
com.elainewelsher.on_project_hover_out = (function com$elainewelsher$on_project_hover_out(index){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(com.elainewelsher.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$projects_DASH_page,cljs.core.cst$kw$post_DASH_layout], null)))){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.elainewelsher.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$projects_DASH_page,cljs.core.cst$kw$focused_DASH_project_DASH_index], null),null);
}
});
com.elainewelsher.on_project_click = (function com$elainewelsher$on_project_click(project){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.elainewelsher.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$projects_DASH_page,cljs.core.cst$kw$post_DASH_layout], null),true);

return setTimeout((function (){
com.elainewelsher.set_hash(["#projects/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(project))].join(''));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.elainewelsher.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$projects_DASH_page,cljs.core.cst$kw$post_DASH_layout], null),false);
}),(400));
});
com.elainewelsher.project_column = rum.core.lazy_build(rum.core.build_defc,(function (focused_project_index,index,project){
var is_focused = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,focused_project_index);
return daiquiri.core.create_element("div",{'onMouseEnter':cljs.core.partial.cljs$core$IFn$_invoke$arity$2(com.elainewelsher.on_project_hover,index),'onMouseLeave':cljs.core.partial.cljs$core$IFn$_invoke$arity$2(com.elainewelsher.on_project_hover_out,index),'onClick':cljs.core.partial.cljs$core$IFn$_invoke$arity$2(com.elainewelsher.on_project_click,project),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["project-column",((is_focused)?"focus":null)], null))},[daiquiri.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(com.elainewelsher.project_thumbnail,is_focused),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$thumbnail,cljs.core.cst$kw$images.cljs$core$IFn$_invoke$arity$1(project))))]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key_DASH_fn,(function (_,index,___$1){
return index;
})], null)], null),"com.elainewelsher/project-column");
com.elainewelsher.projects_table = rum.core.lazy_build(rum.core.build_defc,(function (focused_project_index,projects){
return daiquiri.core.create_element("div",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["projects-table",(cljs.core.truth_(focused_project_index)?"focus":null)], null))},[daiquiri.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(com.elainewelsher.project_column,focused_project_index),projects))]);
}),null,"com.elainewelsher/projects-table");
com.elainewelsher.projects_page = rum.core.lazy_build(rum.core.build_defc,(function (projects){
var map__14257 = cljs.core.cst$kw$projects_DASH_page.cljs$core$IFn$_invoke$arity$1(rum.core.react(com.elainewelsher.app_state));
var map__14257__$1 = (((((!((map__14257 == null))))?(((((map__14257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14257):map__14257);
var focused_project_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14257__$1,cljs.core.cst$kw$focused_DASH_project_DASH_index);
var post_layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14257__$1,cljs.core.cst$kw$post_DASH_layout);
var focused_project = cljs.core.get.cljs$core$IFn$_invoke$arity$2(projects,focused_project_index);
return daiquiri.core.create_element("div",{'id':"projects-page",'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(post_layout)?"post-layout":null)], null))},[(com.elainewelsher.project_title.cljs$core$IFn$_invoke$arity$2 ? com.elainewelsher.project_title.cljs$core$IFn$_invoke$arity$2(focused_project,true) : com.elainewelsher.project_title.call(null,focused_project,true)),(com.elainewelsher.projects_table.cljs$core$IFn$_invoke$arity$2 ? com.elainewelsher.projects_table.cljs$core$IFn$_invoke$arity$2(focused_project_index,projects) : com.elainewelsher.projects_table.call(null,focused_project_index,projects))]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"com.elainewelsher/projects-page");
com.elainewelsher.back_button = rum.core.lazy_build(rum.core.build_defc,(function (target_hash){
return daiquiri.core.create_element("img",{'src':"images/back-button.png",'onClick':(function (_){
return com.elainewelsher.set_hash("");
}),'className':"back-button"},[]);
}),null,"com.elainewelsher/back-button");
com.elainewelsher.on_image_click = (function com$elainewelsher$on_image_click(event){
var element = event.target;
var view_height = window.innerHeight;
var image_height = element.clientHeight;
var top_offset = ((view_height - image_height) / (2));
var top = ((element.getBoundingClientRect().top + window.pageYOffset) + (- top_offset));
return window.scrollTo(({"top": top, "behavior": "smooth"}));
});
com.elainewelsher.project_header = rum.core.lazy_build(rum.core.build_defc,(function (project){
return daiquiri.core.create_element("div",{'className':"project-header"},[(com.elainewelsher.back_button.cljs$core$IFn$_invoke$arity$1 ? com.elainewelsher.back_button.cljs$core$IFn$_invoke$arity$1("") : com.elainewelsher.back_button.call(null,"")),(com.elainewelsher.project_title.cljs$core$IFn$_invoke$arity$2 ? com.elainewelsher.project_title.cljs$core$IFn$_invoke$arity$2(project,false) : com.elainewelsher.project_title.call(null,project,false))]);
}),null,"com.elainewelsher/project-header");
com.elainewelsher.project_image = rum.core.lazy_build(rum.core.build_defc,(function (focused_image_index,index,image){
var is_focused_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,focused_image_index);
return daiquiri.core.create_element("div",{'data-index':index,'onClick':com.elainewelsher.on_image_click,'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["project-image",((is_focused_QMARK_)?"focus":null)], null))},[daiquiri.core.create_element("img",{'src':cljs.core.cst$kw$full.cljs$core$IFn$_invoke$arity$1(image),'className':"project-image-full"},[]),(function (){var attrs14259 = cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(image);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs14259))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["project-image-title"], null)], null),attrs14259], 0))):{'className':"project-image-title"}),((cljs.core.map_QMARK_(attrs14259))?null:[daiquiri.interpreter.interpret(attrs14259)]));
})()]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key_DASH_fn,(function (_,index,___$1){
return index;
})], null)], null),"com.elainewelsher/project-image");
com.elainewelsher.project_images = rum.core.lazy_build(rum.core.build_defc,(function (focused_image_index,images){
var attrs14260 = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(com.elainewelsher.project_image,focused_image_index),images);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs14260))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["project-images"], null)], null),attrs14260], 0))):{'className':"project-images"}),((cljs.core.map_QMARK_(attrs14260))?null:[daiquiri.interpreter.interpret(attrs14260)]));
}),null,"com.elainewelsher/project-images");
if((typeof com !== 'undefined') && (typeof com.elainewelsher !== 'undefined') && (typeof com.elainewelsher.intersection_observer !== 'undefined')){
} else {
com.elainewelsher.intersection_observer = (new IntersectionObserver((function (entries,_){
return goog.array.forEach(entries,(function (entry,___$1,___$2){
if(cljs.core.truth_(entry.isIntersecting)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.elainewelsher.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$project_DASH_page,cljs.core.cst$kw$focused_DASH_image_DASH_index], null),(entry.target.dataset.index | (0)));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.elainewelsher.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$project_DASH_page,cljs.core.cst$kw$focused_DASH_image_DASH_index], null),null);
}
}));
}),({"threshold": (1)})));
}
com.elainewelsher.observe_project_images = (function com$elainewelsher$observe_project_images(var_args){
var G__14262 = arguments.length;
switch (G__14262) {
case 0:
return com.elainewelsher.observe_project_images.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.elainewelsher.observe_project_images.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.elainewelsher.observe_project_images.cljs$core$IFn$_invoke$arity$0 = (function (){
return com.elainewelsher.observe_project_images.cljs$core$IFn$_invoke$arity$1(false);
}));

(com.elainewelsher.observe_project_images.cljs$core$IFn$_invoke$arity$1 = (function (unobserve_QMARK_){
return goog.array.forEach(document.getElementsByClassName("project-image"),(function (el,index,_){
if(cljs.core.truth_(unobserve_QMARK_)){
return com.elainewelsher.intersection_observer.unobserve(el);
} else {
return com.elainewelsher.intersection_observer.observe(el);
}
}));
}));

(com.elainewelsher.observe_project_images.cljs$lang$maxFixedArity = 1);

com.elainewelsher.observe_project_images_mixin = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$did_DASH_mount,(function (state){
com.elainewelsher.observe_project_images.cljs$core$IFn$_invoke$arity$1(false);

return state;
}),cljs.core.cst$kw$will_DASH_unmount,(function (state){
com.elainewelsher.observe_project_images.cljs$core$IFn$_invoke$arity$1(true);

return state;
})], null);
com.elainewelsher.project_body = rum.core.lazy_build(rum.core.build_defc,(function (focused_image_index,project){
return daiquiri.core.create_element("div",{'className':"project-body"},[daiquiri.core.create_element("div",{'className':"project-description"},[daiquiri.core.create_element("div",{'dangerouslySetInnerHTML':{'__html':cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(project)},'className':"description-html"},[])]),daiquiri.interpreter.interpret((function (){var G__14266 = focused_image_index;
var G__14267 = cljs.core.cst$kw$images.cljs$core$IFn$_invoke$arity$1(project);
return (com.elainewelsher.project_images.cljs$core$IFn$_invoke$arity$2 ? com.elainewelsher.project_images.cljs$core$IFn$_invoke$arity$2(G__14266,G__14267) : com.elainewelsher.project_images.call(null,G__14266,G__14267));
})())]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.elainewelsher.observe_project_images_mixin], null),"com.elainewelsher/project-body");
com.elainewelsher.project_page = rum.core.lazy_build(rum.core.build_defcs,(function (state,project){
var pre_layout = cljs.core.cst$kw$com$elainewelsher_SLASH_pre_DASH_layout.cljs$core$IFn$_invoke$arity$1(state);
var map__14268 = cljs.core.cst$kw$project_DASH_page.cljs$core$IFn$_invoke$arity$1(rum.core.react(com.elainewelsher.app_state));
var map__14268__$1 = (((((!((map__14268 == null))))?(((((map__14268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14268):map__14268);
var focused_image_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14268__$1,cljs.core.cst$kw$focused_DASH_image_DASH_index);
if(cljs.core.truth_(cljs.core.deref(pre_layout))){
setTimeout((function (){
return cljs.core.reset_BANG_(pre_layout,false);
}),(100));
} else {
}

return daiquiri.core.create_element("div",{'id':"project-page",'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.deref(pre_layout))?"pre-layout":null)], null))},[(com.elainewelsher.project_header.cljs$core$IFn$_invoke$arity$1 ? com.elainewelsher.project_header.cljs$core$IFn$_invoke$arity$1(project) : com.elainewelsher.project_header.call(null,project)),(com.elainewelsher.project_body.cljs$core$IFn$_invoke$arity$2 ? com.elainewelsher.project_body.cljs$core$IFn$_invoke$arity$2(focused_image_index,project) : com.elainewelsher.project_body.call(null,focused_image_index,project))]);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,rum.core.local.cljs$core$IFn$_invoke$arity$2(true,cljs.core.cst$kw$com$elainewelsher_SLASH_pre_DASH_layout)], null),"com.elainewelsher/project-page");
/**
 * Given a hash, returns the top level component for the website.
 */
com.elainewelsher.hash_component = (function com$elainewelsher$hash_component(hash){
var vec__14270 = com.elainewelsher.routing.hash_route(hash);
var route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14270,(0),null);
var route_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14270,(1),null);
var G__14273 = route;
var G__14273__$1 = (((G__14273 instanceof cljs.core.Keyword))?G__14273.fqn:null);
switch (G__14273__$1) {
case "project":
return (com.elainewelsher.project_page.cljs$core$IFn$_invoke$arity$1 ? com.elainewelsher.project_page.cljs$core$IFn$_invoke$arity$1(route_data) : com.elainewelsher.project_page.call(null,route_data));

break;
case "projects":
return (com.elainewelsher.projects_page.cljs$core$IFn$_invoke$arity$1 ? com.elainewelsher.projects_page.cljs$core$IFn$_invoke$arity$1(route_data) : com.elainewelsher.projects_page.call(null,route_data));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14273__$1)].join('')));

}
});
com.elainewelsher.page = rum.core.lazy_build(rum.core.build_defc,(function (){
var hash = window.location.hash;
var attrs14275 = com.elainewelsher.hash_component(hash);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs14275))?daiquiri.interpreter.attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"page"], null),attrs14275], 0))):{'id':"page"}),((cljs.core.map_QMARK_(attrs14275))?null:[daiquiri.interpreter.interpret(attrs14275)]));
}),null,"com.elainewelsher/page");
com.elainewelsher.mount = (function com$elainewelsher$mount(el){
return rum.core.mount((com.elainewelsher.page.cljs$core$IFn$_invoke$arity$0 ? com.elainewelsher.page.cljs$core$IFn$_invoke$arity$0() : com.elainewelsher.page.call(null)),el);
});
com.elainewelsher.app_element = (function com$elainewelsher$app_element(){
return goog.dom.getElement("app");
});
com.elainewelsher.mount_app_element = (function com$elainewelsher$mount_app_element(){
var G__14276 = com.elainewelsher.app_element();
if((G__14276 == null)){
return null;
} else {
return com.elainewelsher.mount(G__14276);
}
});
com.elainewelsher.mount_app_element();
com.elainewelsher.on_reload = (function com$elainewelsher$on_reload(){
return com.elainewelsher.mount_app_element();
});
com.elainewelsher.configure_history_navigation = (function com$elainewelsher$configure_history_navigation(){
return (window.onpopstate = (function (){
return com.elainewelsher.mount_app_element();
}));
});
com.elainewelsher.configure_history_navigation();
