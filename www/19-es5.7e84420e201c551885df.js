function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,e){for(var o=0;o<e.length;o++){var t=e[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function _createClass(n,e,o){return e&&_defineProperties(n.prototype,e),o&&_defineProperties(n,o),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{GJn7:function(n,e,o){"use strict";o.r(e),o.d(e,"FoodPageModule",(function(){return v}));var t=o("ofXK"),i=o("3Pt+"),r=o("TEn/"),c=o("tyNb"),a=o("fXoL"),l=o("s3jE");function s(n,e){if(1&n&&(a.Mb(0,"ion-item"),a.Mb(1,"ion-label"),a.hc(2),a.Lb(),a.Lb()),2&n){var o=e.$implicit;a.zb(2),a.jc(" ",o.nombreplatillo," ")}}function b(n,e){if(1&n&&(a.Mb(0,"ion-list"),a.gc(1,s,3,1,"ion-item",4),a.Lb()),2&n){var o=a.Wb();a.zb(1),a.Zb("ngForOf",o.localService.platillos)}}var f,u,p,d=[{path:"",component:(f=function(){function n(e){_classCallCheck(this,n),this.localService=e}return _createClass(n,[{key:"ngOnInit",value:function(){}}]),n}(),f.\u0275fac=function(n){return new(n||f)(a.Jb(l.a))},f.\u0275cmp=a.Db({type:f,selectors:[["app-food"]],decls:6,vars:1,consts:[[1,"ion-no-border"],["slot","start"],["icon","chevron-back","defaultHref","/"],[4,"ngIf"],[4,"ngFor","ngForOf"]],template:function(n,e){1&n&&(a.Mb(0,"ion-header",0),a.Mb(1,"ion-toolbar"),a.Mb(2,"ion-buttons",1),a.Kb(3,"ion-back-button",2),a.Lb(),a.Lb(),a.Lb(),a.Mb(4,"ion-content"),a.gc(5,b,2,1,"ion-list",3),a.Lb()),2&n&&(a.zb(5),a.Zb("ngIf",e.localService.platillos))},directives:[r.s,r.F,r.h,r.d,r.e,r.o,t.i,r.y,t.h,r.w,r.x],styles:[""]}),f)}],h=((p=function n(){_classCallCheck(this,n)}).\u0275mod=a.Hb({type:p}),p.\u0275inj=a.Gb({factory:function(n){return new(n||p)},imports:[[c.i.forChild(d)],c.i]}),p),v=((u=function n(){_classCallCheck(this,n)}).\u0275mod=a.Hb({type:u}),u.\u0275inj=a.Gb({factory:function(n){return new(n||u)},imports:[[t.b,i.a,r.G,h]]}),u)}}]);