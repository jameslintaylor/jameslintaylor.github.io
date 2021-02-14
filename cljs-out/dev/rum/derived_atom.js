// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__13011 = arguments.length;
switch (G__13011) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4(refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
}));

(rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__13012 = opts;
var map__13012__$1 = (((((!((map__13012 == null))))?(((((map__13012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13012.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13012):map__13012);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13012__$1,cljs.core.cst$kw$ref);
var check_equals_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13012__$1,cljs.core.cst$kw$check_DASH_equals_QMARK_,true);
var recalc = (function (){var G__13014 = cljs.core.count(refs);
switch (G__13014) {
case (1):
var vec__13015 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13015,(0),null);
return (function (){
var G__13018 = cljs.core.deref(a);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13018) : f.call(null,G__13018));
});

break;
case (2):
var vec__13019 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13019,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13019,(1),null);
return (function (){
var G__13022 = cljs.core.deref(a);
var G__13023 = cljs.core.deref(b);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13022,G__13023) : f.call(null,G__13022,G__13023));
});

break;
case (3):
var vec__13024 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13024,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13024,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13024,(2),null);
return (function (){
var G__13027 = cljs.core.deref(a);
var G__13028 = cljs.core.deref(b);
var G__13029 = cljs.core.deref(c);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13027,G__13028,G__13029) : f.call(null,G__13027,G__13028,G__13029));
});

break;
default:
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,refs));
});

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__13030 = ref;
cljs.core.reset_BANG_(G__13030,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));

return G__13030;
})():cljs.core.atom.cljs$core$IFn$_invoke$arity$1((recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null))));
var watch = (cljs.core.truth_(check_equals_QMARK_)?(function (_,___$1,___$2,___$3){
var new_val = (recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sink),new_val)){
return cljs.core.reset_BANG_(sink,new_val);
} else {
return null;
}
}):(function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_(sink,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));
}));
var seq__13031_13037 = cljs.core.seq(refs);
var chunk__13032_13038 = null;
var count__13033_13039 = (0);
var i__13034_13040 = (0);
while(true){
if((i__13034_13040 < count__13033_13039)){
var ref_13041__$1 = chunk__13032_13038.cljs$core$IIndexed$_nth$arity$2(null,i__13034_13040);
cljs.core.add_watch(ref_13041__$1,key,watch);


var G__13042 = seq__13031_13037;
var G__13043 = chunk__13032_13038;
var G__13044 = count__13033_13039;
var G__13045 = (i__13034_13040 + (1));
seq__13031_13037 = G__13042;
chunk__13032_13038 = G__13043;
count__13033_13039 = G__13044;
i__13034_13040 = G__13045;
continue;
} else {
var temp__5720__auto___13046 = cljs.core.seq(seq__13031_13037);
if(temp__5720__auto___13046){
var seq__13031_13047__$1 = temp__5720__auto___13046;
if(cljs.core.chunked_seq_QMARK_(seq__13031_13047__$1)){
var c__4556__auto___13048 = cljs.core.chunk_first(seq__13031_13047__$1);
var G__13049 = cljs.core.chunk_rest(seq__13031_13047__$1);
var G__13050 = c__4556__auto___13048;
var G__13051 = cljs.core.count(c__4556__auto___13048);
var G__13052 = (0);
seq__13031_13037 = G__13049;
chunk__13032_13038 = G__13050;
count__13033_13039 = G__13051;
i__13034_13040 = G__13052;
continue;
} else {
var ref_13053__$1 = cljs.core.first(seq__13031_13047__$1);
cljs.core.add_watch(ref_13053__$1,key,watch);


var G__13054 = cljs.core.next(seq__13031_13047__$1);
var G__13055 = null;
var G__13056 = (0);
var G__13057 = (0);
seq__13031_13037 = G__13054;
chunk__13032_13038 = G__13055;
count__13033_13039 = G__13056;
i__13034_13040 = G__13057;
continue;
}
} else {
}
}
break;
}

return sink;
}));

(rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4);

