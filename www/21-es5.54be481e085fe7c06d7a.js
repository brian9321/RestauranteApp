function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{F4UR:function(e,n,t){"use strict";t.r(n),t.d(n,"LoginPageModule",(function(){return p}));var o,r,i,s=t("ofXK"),a=t("3Pt+"),c=t("TEn/"),u=t("tyNb"),g=t("mrSG"),l=t("fXoL"),d=t("lGQG"),h=[{path:"",component:(o=function(){function e(n,t,o,r){_classCallCheck(this,e),this.authService=n,this.toastController=t,this.loadingController=o,this.router=r,this.UserLogin={email:"cliente@gmail.com",password:"holamundo",gethash:"true"}}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"ionViewWillEnter",value:function(){this.comprobarlogin()}},{key:"comprobarlogin",value:function(){return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=!0,e.next=3,this.authService.checkLogin;case 3:if(e.t1=e.sent,e.t2=e.t0===e.t1,!e.t2){e.next=7;break}this.router.navigate(["/home"]);case 7:case"end":return e.stop()}}),e,this)})))}},{key:"loginuser",value:function(){return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n,t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.presentLoading("Espere.."),n=this.UserLogin.email.trim(),this.UserLogin.email=n,console.log(this.UserLogin),e.next=6,this.authService.login(this.UserLogin).subscribe((function(e){return Object(g.a)(t,void 0,void 0,regeneratorRuntime.mark((function n(){var t=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:console.log(e),e<=1?(console.log(e),this.UserLogin.gethash="true",this.presentToast("Error en el servidor")):e.status||(this.user=e,this.UserLogin.gethash="",this.authService.login(this.UserLogin).subscribe((function(e){t.token=e,t.token.length<=0?t.presentToast("Error en el servidor"):(t.UserLogin.gethash="true",t.loading.dismiss(),t.CrearSesion())}),(function(e){t.errorMessage=e,null!=t.errorMessage&&(t.loading.dismiss(),t.UserLogin.gethash="true",t.presentToast("Error en el servidor"))})));case 1:case"end":return n.stop()}}),n,this)})))}),(function(e){}));case 6:case"end":return e.stop()}}),e,this)})))}},{key:"CrearSesion",value:function(){return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.authService.setUser(this.user);case 2:return e.next=4,this.authService.setToken(this.token);case 4:return e.next=6,this.comprobarlogin();case 6:case"end":return e.stop()}}),e,this)})))}},{key:"presentToast",value:function(e){return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.toastController.create({message:e,duration:5e3});case 2:n.sent.present();case 3:case"end":return n.stop()}}),n,this)})))}},{key:"presentLoading",value:function(e){return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.loadingController.create({message:e,translucent:!0,cssClass:"custom-class custom-loading",backdropDismiss:!0,mode:"ios"});case 2:return this.loading=n.sent,n.abrupt("return",this.loading.present());case 4:case"end":return n.stop()}}),n,this)})))}}]),e}(),o.\u0275fac=function(e){return new(e||o)(l.Jb(d.a),l.Jb(c.M),l.Jb(c.I),l.Jb(u.g))},o.\u0275cmp=l.Db({type:o,selectors:[["app-login"]],decls:23,vars:3,consts:[["mode","ios",1,"ion-no-border"],["slot","start"],["color","primary"],["icon","chevron-back","defaultHref","/"],["slot","end"],["color","primary","routerLink","/adduser"],["id","header"],["src","assets/logodx.png"],["id","form",3,"ngSubmit"],["form","ngForm"],[1,"ion-margin-bottom"],["slot","start","color","success","name","mail-outline"],["name","email","id","email","placeholder","Correo","type","Email","required","",3,"ngModel","ngModelChange"],["slot","start","color","success","name","keypad-outline"],["name","password","id","password","placeholder","Contrase\xf1a","type","password","required","",3,"ngModel","ngModelChange"],["color","success","expand","block","shape","round","type","submit",3,"disabled"]],template:function(e,n){if(1&e&&(l.Mb(0,"ion-header",0),l.Mb(1,"ion-toolbar"),l.Mb(2,"ion-buttons",1),l.Mb(3,"ion-button",2),l.Kb(4,"ion-back-button",3),l.Lb(),l.Lb(),l.Mb(5,"ion-buttons",4),l.Mb(6,"ion-button",5),l.hc(7,"Contactanos!"),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Mb(8,"ion-content"),l.Mb(9,"div",6),l.Mb(10,"h1"),l.hc(11,"Login"),l.Lb(),l.Kb(12,"img",7),l.Lb(),l.Mb(13,"form",8,9),l.Ub("ngSubmit",(function(){return n.loginuser()})),l.Mb(15,"ion-item",10),l.Kb(16,"ion-icon",11),l.Mb(17,"ion-input",12),l.Ub("ngModelChange",(function(e){return n.UserLogin.email=e})),l.Lb(),l.Lb(),l.Mb(18,"ion-item",10),l.Kb(19,"ion-icon",13),l.Mb(20,"ion-input",14),l.Ub("ngModelChange",(function(e){return n.UserLogin.password=e})),l.Lb(),l.Lb(),l.Mb(21,"ion-button",15),l.hc(22,"Login"),l.Lb(),l.Lb(),l.Lb()),2&e){var t=l.cc(14);l.zb(17),l.Zb("ngModel",n.UserLogin.email),l.zb(3),l.Zb("ngModel",n.UserLogin.password),l.zb(1),l.Zb("disabled",t.invalid)}},directives:[c.s,c.F,c.h,c.g,c.d,c.e,c.K,u.h,c.o,a.i,a.e,a.f,c.w,c.t,c.v,c.L,a.h,a.d,a.g],styles:["ion-toolbar[_ngcontent-%COMP%]{--background:#f8f8fa}ion-toolbar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{text-transform:none;font-size:17px}ion-content[_ngcontent-%COMP%]{--background:#f8f8fa}ion-content[_ngcontent-%COMP%]   #header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}ion-content[_ngcontent-%COMP%]   #header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-weight:700;font-size:26px;color:#010100;margin-bottom:15%}ion-content[_ngcontent-%COMP%]   #header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:125px;height:125px;border-radius:50%;border:8px solid #fff}ion-content[_ngcontent-%COMP%]   #form[_ngcontent-%COMP%]{margin-top:15%;padding-left:30px;padding-right:30px}ion-content[_ngcontent-%COMP%]   #form[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{margin-top:35px;height:48px;font-size:18px;text-transform:none;border-radius:50px;box-shadow:1px 8px 8px 0 rgba(0,0,0,.05);--box-shadow:none}ion-item[_ngcontent-%COMP%]{border-radius:50px;height:55px;box-shadow:1px 8px 8px 0 rgba(0,0,0,.08);--highlight-height:0px}ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{font-size:18px;--padding-top:20px;--padding-bottom:15px;--padding-start:5px}ion-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:17px;letter-spacing:.5px;text-decoration:none}"]}),o)}],b=((i=function e(){_classCallCheck(this,e)}).\u0275mod=l.Hb({type:i}),i.\u0275inj=l.Gb({factory:function(e){return new(e||i)},imports:[[u.i.forChild(h)],u.i]}),i),p=((r=function e(){_classCallCheck(this,e)}).\u0275mod=l.Hb({type:r}),r.\u0275inj=l.Gb({factory:function(e){return new(e||r)},imports:[[s.b,a.a,c.G,b]]}),r)}}]);