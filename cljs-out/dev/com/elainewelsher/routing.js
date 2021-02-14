// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('com.elainewelsher.routing');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('com.elainewelsher.content');
/**
 * Given a hash, return the specific project it points to, else nil.
 */
com.elainewelsher.routing.hash_project = (function com$elainewelsher$routing$hash_project(projects,hash){
var vec__14249 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(hash,/#projects\//);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14249,(0),null);
var project_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14249,(1),null);
if(cljs.core.truth_(project_id)){
return cljs.core.some((function (p1__14248_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(project_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__14248_SHARP_))){
return p1__14248_SHARP_;
} else {
return null;
}
}),projects);
} else {
return null;
}
});
/**
 * Given a hash, return a tagged tuple representing the route or nil if
 *   the hash does not resolve to a valid route.
 */
com.elainewelsher.routing.hash_route = (function com$elainewelsher$routing$hash_route(hash){
var temp__5718__auto__ = com.elainewelsher.routing.hash_project(com.elainewelsher.content.projects,hash);
if(cljs.core.truth_(temp__5718__auto__)){
var project = temp__5718__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$project,project], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$projects,com.elainewelsher.content.projects], null);
}
});
