(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"74mu":function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return c}));const i=(t,e)=>null!==e.closest(t),o=(t,e)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,["ion-color-"+t]:!0},e):e,r=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},s=/^[a-z][a-z0-9+\-.]*:/,c=async(t,e,n,i)=>{if(null!=t&&"#"!==t[0]&&!s.test(t)){const o=document.querySelector("ion-router");if(o)return null!=e&&e.preventDefault(),o.push(t,n,i)}return!1}},acej:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r}));var i=n("1vRN");const o=async(t,e,n,o,r)=>{if(t)return t.attachViewToDom(e,n,r,o);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const s="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n;return o&&o.forEach(t=>s.classList.add(t)),r&&Object.assign(s,r),e.appendChild(s),await new Promise(t=>Object(i.c)(s,t)),s},r=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},h3R7:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));const i={bubbles:{dur:1e3,circles:9,fn:(t,e,n)=>{const i=t*e/n-t+"ms",o=2*Math.PI*e/n;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:(t,e,n)=>{const i=e/n,o=t*i-t+"ms",r=2*Math.PI*i;return{r:5,style:{top:9*Math.sin(r)+"px",left:9*Math.cos(r)+"px","animation-delay":o}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,e)=>({r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,e,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,e,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})}}},lGQG:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var i=n("mrSG"),o=n("AytR"),r=n("tk/3"),s=n("fXoL"),c=n("7okS"),a=n("TEn/"),l=n("XNiG");let u=(()=>{class t{constructor(){this.fooSubject=new l.a}publishSomeData(t){this.fooSubject.next(t)}getObservable(){return this.fooSubject}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=s.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var h=n("tyNb");let d=(()=>{class t{constructor(t,e,n,i,r){this.http=t,this.storage=e,this.toastController=n,this.Events=i,this.router=r,this.url=o.a.url,this.authorization="",this.tokenlocal="",this.pagina=0,this.checkLogin=!1,this._storage=null,this.init(),this.checklogin()}login(t){const e="json="+JSON.stringify(t),n=new r.c({"Content-Type":"application/x-www-form-urlencoded"});return this.http.post(this.url+"/login",e,{headers:n})}init(){return Object(i.a)(this,void 0,void 0,(function*(){const t=yield this.storage.create();this._storage=t}))}setToken(t){return Object(i.a)(this,void 0,void 0,(function*(){this.token||(this.token=t,yield this.storage.set("token",this.token),this.checkLogin=!0)}))}setUser(t){return Object(i.a)(this,void 0,void 0,(function*(){this.user||(this.user=t,yield this.storage.set("user",this.user),this.checkLogin=!0)}))}getToken(){return Object(i.a)(this,void 0,void 0,(function*(){return yield this.storage.get("token")}))}getUser(){return Object(i.a)(this,void 0,void 0,(function*(){return yield this.storage.get("user")}))}deleteUser(){return Object(i.a)(this,void 0,void 0,(function*(){this.token=null,this.user=null,this.checkLogin=!1,yield this.storage.remove("token"),yield this.storage.remove("user"),yield this.storage.clear(),this.loginEvent(),this.router.navigate(["/home"])}))}presentToast(t){return Object(i.a)(this,void 0,void 0,(function*(){(yield this.toastController.create({message:t,duration:5e3})).present()}))}loginEvent(){this.Events.publishSomeData({login:!1})}checklogin(){return Object(i.a)(this,void 0,void 0,(function*(){yield this.getToken().then(t=>{t?(this.checkLogin=!0,this.tokenlocal||(this.tokenlocal=t),this.getUser().then(t=>{t?(this.usuario||(this.usuario=t),this.checkLogin=!0):(this.deleteUser(),this.checkLogin=!1)})):(this.deleteUser(),this.checkLogin=!1)})}))}}return t.\u0275fac=function(e){return new(e||t)(s.Qb(r.a),s.Qb(c.a),s.Qb(a.M),s.Qb(u),s.Qb(h.g))},t.\u0275prov=s.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},pX2f:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("2atR"),o=n("iWo5"),r=n("qULd");const s=(t,e)=>{let n,s;const c=(t,i,o)=>{if("undefined"==typeof document)return;const r=document.elementFromPoint(t,i);r&&e(r)?r!==n&&(l(),a(r,o)):l()},a=(t,e)=>{n=t,s||(s=n);const o=n;Object(i.f)(()=>o.classList.add("ion-activated")),e()},l=(t=!1)=>{if(!n)return;const e=n;Object(i.f)(()=>e.classList.remove("ion-activated")),t&&s!==n&&n.click(),n=void 0};return Object(o.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>c(t.currentX,t.currentY,r.a),onMove:t=>c(t.currentX,t.currentY,r.b),onEnd:()=>{l(!0),Object(r.e)(),s=void 0}})}},qULd:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return c}));const i={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})},notification(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},o=()=>{i.selection()},r=()=>{i.selectionStart()},s=()=>{i.selectionChanged()},c=()=>{i.selectionEnd()},a=t=>{i.impact(t)}},s3jE:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n("fXoL");let o=(()=>{class t{constructor(){this.platillos=[]}setPlatillo(t){console.log(t.nombreplatillo),this.platillos.unshift(t),console.log("agregado")}getPlatillos(){return this.platillos}getLength(){return this.platillos.length}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=i.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);