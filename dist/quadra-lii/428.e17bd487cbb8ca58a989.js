"use strict";(self.webpackChunkquadra_lii=self.webpackChunkquadra_lii||[]).push([[428],{6428:(R,h,a)=>{a.r(h),a.d(h,{ProfileModule:()=>z});var p=a(8583),f=a(5855),l=a(665),d=a(9783),t=a(639),y=a(2340),_=a(1841);let b=(()=>{class o{constructor(e){this.http=e,this.uri=y.N.URI_API_FLATS}changePassword(e){return this.http.patch(this.uri,e)}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(_.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var c=a(5921),g=a(5787),r=a(7238);const T=["container"],O=function(o,i,e,s){return{"pi-info-circle":o,"pi-exclamation-triangle":i,"pi-times-circle":e,"pi-check":s}};function I(o,i){if(1&o&&(t.ynx(0),t._UZ(1,"span",6),t.TgZ(2,"div",7),t.TgZ(3,"div",8),t._uU(4),t.qZA(),t.TgZ(5,"div",9),t._uU(6),t.qZA(),t.qZA(),t.BQk()),2&o){const e=t.oxw();t.xp6(1),t.Tol("p-toast-message-icon pi"+(e.message.icon?" "+e.message.icon:"")),t.Q6J("ngClass",t.l5B(5,O,"info"==e.message.severity,"warn"==e.message.severity,"error"==e.message.severity,"success"==e.message.severity)),t.xp6(3),t.Oqu(e.message.summary),t.xp6(2),t.Oqu(e.message.detail)}}function A(o,i){1&o&&t.GkF(0)}function Z(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"button",10),t.NdJ("click",function(n){return t.CHM(e),t.oxw().onCloseIconClick(n)})("keydown.enter",function(n){return t.CHM(e),t.oxw().onCloseIconClick(n)}),t._UZ(1,"span",11),t.qZA()}}const x=function(o){return[o,"p-toast-message"]},P=function(o,i,e,s){return{showTransformParams:o,hideTransformParams:i,showTransitionParams:e,hideTransitionParams:s}},k=function(o){return{value:"visible",params:o}},M=function(o){return{$implicit:o}};function S(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"p-toastItem",3),t.NdJ("onClose",function(n){return t.CHM(e),t.oxw().onMessageClose(n)})("@toastAnimation.start",function(n){return t.CHM(e),t.oxw().onAnimationStart(n)})("@toastAnimation.done",function(n){return t.CHM(e),t.oxw().onAnimationEnd(n)}),t.qZA()}if(2&o){const e=i.$implicit,s=i.index,n=t.oxw();t.Q6J("message",e)("index",s)("template",n.template)("@toastAnimation",void 0)("showTransformOptions",n.showTransformOptions)("hideTransformOptions",n.hideTransformOptions)("showTransitionOptions",n.showTransitionOptions)("hideTransitionOptions",n.hideTransitionOptions)}}let q=(()=>{class o{constructor(e){this.zone=e,this.onClose=new t.vpe}ngAfterViewInit(){this.initTimeout()}initTimeout(){this.message.sticky||this.zone.runOutsideAngular(()=>{this.timeout=setTimeout(()=>{this.onClose.emit({index:this.index,message:this.message})},this.message.life||3e3)})}clearTimeout(){this.timeout&&(clearTimeout(this.timeout),this.timeout=null)}onMouseEnter(){this.clearTimeout()}onMouseLeave(){this.initTimeout()}onCloseIconClick(e){this.clearTimeout(),this.onClose.emit({index:this.index,message:this.message}),e.preventDefault()}ngOnDestroy(){this.clearTimeout()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(t.R0b))},o.\u0275cmp=t.Xpm({type:o,selectors:[["p-toastItem"]],viewQuery:function(e,s){if(1&e&&t.Gf(T,5),2&e){let n;t.iGM(n=t.CRH())&&(s.containerViewChild=n.first)}},hostAttrs:[1,"p-element"],inputs:{message:"message",index:"index",template:"template",showTransformOptions:"showTransformOptions",hideTransformOptions:"hideTransformOptions",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},outputs:{onClose:"onClose"},decls:6,vars:21,consts:[[3,"ngClass","mouseenter","mouseleave"],["container",""],["role","alert","aria-live","assertive","aria-atomic","true",1,"p-toast-message-content",3,"ngClass"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["type","button","class","p-toast-icon-close p-link","pRipple","",3,"click","keydown.enter",4,"ngIf"],[3,"ngClass"],[1,"p-toast-message-text"],[1,"p-toast-summary"],[1,"p-toast-detail"],["type","button","pRipple","",1,"p-toast-icon-close","p-link",3,"click","keydown.enter"],[1,"p-toast-icon-close-icon","pi","pi-times"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0,1),t.NdJ("mouseenter",function(){return s.onMouseEnter()})("mouseleave",function(){return s.onMouseLeave()}),t.TgZ(2,"div",2),t.YNc(3,I,7,10,"ng-container",3),t.YNc(4,A,1,0,"ng-container",4),t.YNc(5,Z,2,0,"button",5),t.qZA(),t.qZA()),2&e&&(t.Tol(s.message.styleClass),t.Q6J("ngClass",t.VKq(10,x,"p-toast-message-"+s.message.severity))("@messageState",t.VKq(17,k,t.l5B(12,P,s.showTransformOptions,s.hideTransformOptions,s.showTransitionOptions,s.hideTransitionOptions))),t.uIk("id",s.message.id),t.xp6(2),t.Q6J("ngClass",s.message.contentStyleClass),t.xp6(1),t.Q6J("ngIf",!s.template),t.xp6(1),t.Q6J("ngTemplateOutlet",s.template)("ngTemplateOutletContext",t.VKq(19,M,s.message)),t.xp6(1),t.Q6J("ngIf",!1!==s.message.closable))},directives:[p.mk,p.O5,p.tP,g.H],encapsulation:2,data:{animation:[(0,r.X$)("messageState",[(0,r.SB)("visible",(0,r.oB)({transform:"translateY(0)",opacity:1})),(0,r.eR)("void => *",[(0,r.oB)({transform:"{{showTransformParams}}",opacity:0}),(0,r.jt)("{{showTransitionParams}}")]),(0,r.eR)("* => void",[(0,r.jt)("{{hideTransitionParams}}",(0,r.oB)({height:0,opacity:0,transform:"{{hideTransformParams}}"}))])])]},changeDetection:0}),o})(),D=(()=>{class o{constructor(e,s,n){this.messageService=e,this.cd=s,this.config=n,this.autoZIndex=!0,this.baseZIndex=0,this.position="top-right",this.preventOpenDuplicates=!1,this.preventDuplicates=!1,this.showTransformOptions="translateY(100%)",this.hideTransformOptions="translateY(-100%)",this.showTransitionOptions="300ms ease-out",this.hideTransitionOptions="250ms ease-in",this.onClose=new t.vpe,this.id=(0,c.Th)()}ngOnInit(){this.messageSubscription=this.messageService.messageObserver.subscribe(e=>{if(e)if(e instanceof Array){const s=e.filter(n=>this.canAdd(n));this.add(s)}else this.canAdd(e)&&this.add([e])}),this.clearSubscription=this.messageService.clearObserver.subscribe(e=>{e?this.key===e&&(this.messages=null):this.messages=null,this.cd.markForCheck()})}ngAfterViewInit(){this.breakpoints&&this.createStyle()}add(e){this.messages=this.messages?[...this.messages,...e]:[...e],this.preventDuplicates&&(this.messagesArchieve=this.messagesArchieve?[...this.messagesArchieve,...e]:[...e]),this.cd.markForCheck()}canAdd(e){let s=this.key===e.key;return s&&this.preventOpenDuplicates&&(s=!this.containsMessage(this.messages,e)),s&&this.preventDuplicates&&(s=!this.containsMessage(this.messagesArchieve,e)),s}containsMessage(e,s){return!!e&&null!=e.find(n=>n.summary===s.summary&&n.detail==s.detail&&n.severity===s.severity)}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"message":default:this.template=e.template}})}onMessageClose(e){this.messages.splice(e.index,1),this.onClose.emit({message:e.message}),this.cd.detectChanges()}onAnimationStart(e){"void"===e.fromState&&(this.containerViewChild.nativeElement.setAttribute(this.id,""),this.autoZIndex&&c.P9.set("modal",this.containerViewChild.nativeElement,this.baseZIndex||this.config.zIndex.modal))}onAnimationEnd(e){"void"===e.toState&&this.autoZIndex&&c.gb.isEmpty(this.messages)&&c.P9.clear(this.containerViewChild.nativeElement)}createStyle(){if(!this.styleElement){this.styleElement=document.createElement("style"),this.styleElement.type="text/css",document.head.appendChild(this.styleElement);let e="";for(let s in this.breakpoints){let n="";for(let m in this.breakpoints[s])n+=m+":"+this.breakpoints[s][m]+" !important;";e+=`\n                    @media screen and (max-width: ${s}) {\n                        .p-toast[${this.id}] {\n                           ${n}\n                        }\n                    }\n                `}this.styleElement.innerHTML=e}}destroyStyle(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)}ngOnDestroy(){this.messageSubscription&&this.messageSubscription.unsubscribe(),this.containerViewChild&&this.autoZIndex&&c.P9.clear(this.containerViewChild.nativeElement),this.clearSubscription&&this.clearSubscription.unsubscribe(),this.destroyStyle()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(d.ez),t.Y36(t.sBO),t.Y36(d.b4))},o.\u0275cmp=t.Xpm({type:o,selectors:[["p-toast"]],contentQueries:function(e,s,n){if(1&e&&t.Suo(n,d.jx,4),2&e){let m;t.iGM(m=t.CRH())&&(s.templates=m)}},viewQuery:function(e,s){if(1&e&&t.Gf(T,5),2&e){let n;t.iGM(n=t.CRH())&&(s.containerViewChild=n.first)}},hostAttrs:[1,"p-element"],inputs:{key:"key",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",style:"style",styleClass:"styleClass",position:"position",preventOpenDuplicates:"preventOpenDuplicates",preventDuplicates:"preventDuplicates",showTransformOptions:"showTransformOptions",hideTransformOptions:"hideTransformOptions",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",breakpoints:"breakpoints"},outputs:{onClose:"onClose"},decls:3,vars:5,consts:[[3,"ngClass","ngStyle"],["container",""],[3,"message","index","template","showTransformOptions","hideTransformOptions","showTransitionOptions","hideTransitionOptions","onClose",4,"ngFor","ngForOf"],[3,"message","index","template","showTransformOptions","hideTransformOptions","showTransitionOptions","hideTransitionOptions","onClose"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0,1),t.YNc(2,S,1,8,"p-toastItem",2),t.qZA()),2&e&&(t.Tol(s.styleClass),t.Q6J("ngClass","p-toast p-component p-toast-"+s.position)("ngStyle",s.style),t.xp6(2),t.Q6J("ngForOf",s.messages))},directives:[p.mk,p.PC,p.sg,q],styles:[".p-toast{position:fixed;width:25rem}.p-toast-message{overflow:hidden}.p-toast-message-content{display:flex;align-items:flex-start}.p-toast-message-text{flex:1 1 auto}.p-toast-top-right{top:20px;right:20px}.p-toast-top-left{top:20px;left:20px}.p-toast-bottom-left{bottom:20px;left:20px}.p-toast-bottom-right{bottom:20px;right:20px}.p-toast-top-center{top:20px;left:50%;transform:translate(-50%)}.p-toast-bottom-center{bottom:20px;left:50%;transform:translate(-50%)}.p-toast-center{left:50%;top:50%;min-width:20vw;transform:translate(-50%,-50%)}.p-toast-icon-close{display:flex;align-items:center;justify-content:center;overflow:hidden;position:relative}.p-toast-icon-close.p-link{cursor:pointer}\n"],encapsulation:2,data:{animation:[(0,r.X$)("toastAnimation",[(0,r.eR)(":enter, :leave",[(0,r.IO)("@*",(0,r.pV)())])])]},changeDetection:0}),o})(),E=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[p.ez,g.T],d.m8]}),o})();var w=a(1075),v=a(1424),C=a(845);function J(o,i){1&o&&(t.TgZ(0,"small",12),t._uU(1," Debe seleccionar un departamento "),t.qZA())}function F(o,i){1&o&&(t.TgZ(0,"small",13),t._uU(1," Debe ingresar su contrase\xf1a anterior "),t.qZA())}function Q(o,i){1&o&&(t.TgZ(0,"small",13),t._uU(1," Nueva contrase\xf1a es requerida "),t.qZA())}function B(o,i){1&o&&(t.TgZ(0,"small",13),t._uU(1," Debe confirmar la contrase\xf1a "),t.qZA())}const Y=function(){return{width:"100px"}},u=function(o){return{"ng-invalid ng-dirty":o}},N=function(){return["dptos"]},U=[{path:"",children:[{path:"password",component:(()=>{class o{constructor(e,s,n){this.fb=e,this.flatService=s,this.messageService=n,this.form=e.group({flat:[null,[l.kI.required]],oldPassword:[null,[l.kI.required]],password1:[null,[l.kI.required]],password2:[null,[l.kI.required]]})}ngOnInit(){this.flats=[{floor:"1\xba",dptos:["1\xba A","1\xba B","1\xba C","1\xba D"]},{floor:"2\xba",dptos:["2\xba A","2\xba B","2\xba C","2\xba D"]},{floor:"3\xba",dptos:["3\xba A","3\xba B","3\xba C","3\xba D"]},{floor:"4\xba",dptos:["4\xba A","4\xba B","4\xba C","4\xba D"]},{floor:"5\xba",dptos:["5\xba A","5\xba B","5\xba C","5\xba D"]},{floor:"6\xba",dptos:["6\xba A","6\xba B","6\xba C","6\xba D"]}]}get flat(){return this.form.get("flat")}get oldPassword(){return this.form.get("oldPassword")}get password1(){return this.form.get("password1")}get password2(){return this.form.get("password2")}confirm(){this.form.invalid?this.form.markAllAsTouched():this.flatService.changePassword(this.form.value).subscribe({next:e=>{this.messageService.add(e.error?{severity:"error",summary:"Error",detail:e.error}:{severity:"success",summary:"\xc9xito",detail:"Se ha cambiado la contrase\xf1a correctamente"})},error:()=>{this.messageService.add({severity:"error",summary:"Error",detail:"Ocurri\xf3 un error al intentar cambiar la contrase\xf1a"})}})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(l.qu),t.Y36(b),t.Y36(d.ez))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-change-password"]],features:[t._Bn([d.ez])],decls:20,vars:23,consts:[[3,"formGroup"],[1,"field"],["formControlName","flat","aria-describedby","flat-help","optionGroupLabel","floor","placeholder","Dpto",3,"ngClass","options","optionGroupChildren"],["id","flat-help","class","p-error block",4,"ngIf"],["type","password","aria-describedby","password-help","pInputText","","placeholder","Contrase\xf1a","formControlName","oldPassword",3,"ngClass"],["id","password-help","class","p-error block",4,"ngIf"],["type","password","aria-describedby","password-help","pInputText","","placeholder","Contrase\xf1a","formControlName","password1",3,"ngClass"],["type","password","aria-describedby","password-help","pInputText","","placeholder","Contrase\xf1a","formControlName","password2",3,"ngClass"],[1,"form-buttons"],["label","Confirmar","icon","pi pi-check",3,"click"],[1,"info"],["href","mailto:lorenzo0895@gmail.com"],["id","flat-help",1,"p-error","block"],["id","password-help",1,"p-error","block"]],template:function(e,s){1&e&&(t._UZ(0,"p-toast"),t.TgZ(1,"form",0),t.TgZ(2,"div",1),t._UZ(3,"p-cascadeSelect",2),t.YNc(4,J,2,0,"small",3),t.qZA(),t.TgZ(5,"div",1),t._UZ(6,"input",4),t.YNc(7,F,2,0,"small",5),t.qZA(),t.TgZ(8,"div",1),t._UZ(9,"input",6),t.YNc(10,Q,2,0,"small",5),t.qZA(),t.TgZ(11,"div",1),t._UZ(12,"input",7),t.YNc(13,B,2,0,"small",5),t.qZA(),t.TgZ(14,"div",8),t.TgZ(15,"p-button",9),t.NdJ("click",function(){return s.confirm()}),t.qZA(),t.qZA(),t.TgZ(16,"small",10),t._uU(17," Por problemas en cambios de contrase\xf1as escribir a "),t.TgZ(18,"a",11),t._uU(19,"lorenzo0895@gmail.com"),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(1),t.Q6J("formGroup",s.form),t.xp6(2),t.Akn(t.DdM(13,Y)),t.Q6J("ngClass",t.VKq(14,u,(null==s.flat?null:s.flat.touched)&&(null==s.flat?null:s.flat.hasError("required"))))("options",s.flats)("optionGroupChildren",t.DdM(16,N)),t.xp6(1),t.Q6J("ngIf",(null==s.flat?null:s.flat.touched)&&(null==s.flat?null:s.flat.hasError("required"))),t.xp6(2),t.Q6J("ngClass",t.VKq(17,u,(null==s.oldPassword?null:s.oldPassword.touched)&&(null==s.oldPassword?null:s.oldPassword.hasError("required")))),t.xp6(1),t.Q6J("ngIf",(null==s.oldPassword?null:s.oldPassword.touched)&&(null==s.oldPassword?null:s.oldPassword.hasError("required"))),t.xp6(2),t.Q6J("ngClass",t.VKq(19,u,(null==s.password1?null:s.password1.touched)&&(null==s.password1?null:s.password1.hasError("required")))),t.xp6(1),t.Q6J("ngIf",(null==s.password1?null:s.password1.touched)&&(null==s.password1?null:s.password1.hasError("required"))),t.xp6(2),t.Q6J("ngClass",t.VKq(21,u,(null==s.password2?null:s.password2.touched)&&(null==s.password2?null:s.password2.hasError("required")))),t.xp6(1),t.Q6J("ngIf",(null==s.password2?null:s.password2.touched)&&(null==s.password2?null:s.password2.hasError("required"))))},directives:[D,l._Y,l.JL,l.sg,w.ZK,l.JJ,l.u,p.mk,p.O5,l.Fj,v.o,C.zx],styles:["form[_ngcontent-%COMP%]{width:400px;margin:auto;padding:50px;display:flex;flex-direction:column;align-items:center;justify-content:center}.field[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;margin-bottom:20px}.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%}.form-buttons[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center}.info[_ngcontent-%COMP%]{margin-top:30px;text-align:center}"]}),o})()},{path:"",redirectTo:"password",pathMatch:"full"}]}];let V=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[f.Bz.forChild(U)],f.Bz]}),o})(),z=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[p.ez,V,l.UX,C.hJ,v.j,w.XH,E]]}),o})()}}]);