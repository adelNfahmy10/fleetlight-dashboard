import{a as ne}from"./chunk-6NBUXXQA.js";import{a as G}from"./chunk-PHCYAVZQ.js";import{a as z}from"./chunk-Q7YZW75Y.js";import{a as U}from"./chunk-7A5NGOQG.js";import{a as q}from"./chunk-S3QFEXNN.js";import{b as Y,c as J}from"./chunk-FQ5NNIZB.js";import{A as B,d as N,g as F,h as P,i as H,j as W,k as Z,z as V}from"./chunk-4BDKNRNN.js";import"./chunk-LXLIJ5ZK.js";import"./chunk-FHTSEW43.js";import{k as R,n as L}from"./chunk-DR26E5HF.js";import{Ea as O,Ob as d,Pb as n,Qb as i,Rb as l,Vb as g,Wb as h,_b as m,bb as p,ca as E,da as T,f as _,fa as M,ga as C,gb as y,hb as v,nb as A,ob as b,oc as o,rc as S,sc as w,ta as I,tb as k,tc as x,ub as D,vb as j,yb as f}from"./chunk-DCDCP4BO.js";import{f as te}from"./chunk-GAL4ENT6.js";var ee=te(ne());var K=new M("WindowToken",typeof window<"u"&&window.document?{providedIn:"root",factory:()=>window}:{providedIn:"root",factory:()=>{}});var oe=(()=>{class r{constructor(e,t,s){this.ngZone=e,this.document=t,this.window=s,this.copySubject=new _,this.copyResponse$=this.copySubject.asObservable(),this.config={}}configure(e){this.config=e}copy(e){if(!this.isSupported||!e)return this.pushCopyResponse({isSuccess:!1,content:e});let t=this.copyFromContent(e);return t?this.pushCopyResponse({content:e,isSuccess:t}):this.pushCopyResponse({isSuccess:!1,content:e})}get isSupported(){return!!this.document.queryCommandSupported&&!!this.document.queryCommandSupported("copy")&&!!this.window}isTargetValid(e){if(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement){if(e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');return!0}throw new Error("Target should be input or textarea")}copyFromInputElement(e,t=!0){try{this.selectTarget(e);let s=this.copyText();return this.clearSelection(t?e:void 0,this.window),s&&this.isCopySuccessInIE11()}catch{return!1}}isCopySuccessInIE11(){let e=this.window.clipboardData;return!(e&&e.getData&&!e.getData("Text"))}copyFromContent(e,t=this.document.body){if(this.tempTextArea&&!t.contains(this.tempTextArea)&&this.destroy(this.tempTextArea.parentElement||void 0),!this.tempTextArea){this.tempTextArea=this.createTempTextArea(this.document,this.window);try{t.appendChild(this.tempTextArea)}catch{throw new Error("Container should be a Dom element")}}this.tempTextArea.value=e;let s=this.copyFromInputElement(this.tempTextArea,!1);return this.config.cleanUpAfterCopy&&this.destroy(this.tempTextArea.parentElement||void 0),s}destroy(e=this.document.body){this.tempTextArea&&(e.removeChild(this.tempTextArea),this.tempTextArea=void 0)}selectTarget(e){return e.select(),e.setSelectionRange(0,e.value.length),e.value.length}copyText(){return this.document.execCommand("copy")}clearSelection(e,t){e&&e.focus(),t.getSelection()?.removeAllRanges()}createTempTextArea(e,t){let s=e.documentElement.getAttribute("dir")==="rtl",a;a=e.createElement("textarea"),a.style.fontSize="12pt",a.style.border="0",a.style.padding="0",a.style.margin="0",a.style.position="absolute",a.style[s?"right":"left"]="-9999px";let u=t.pageYOffset||e.documentElement.scrollTop;return a.style.top=u+"px",a.setAttribute("readonly",""),a}pushCopyResponse(e){this.copySubject.observers.length>0&&this.ngZone.run(()=>{this.copySubject.next(e)})}pushCopyReponse(e){this.pushCopyResponse(e)}}return r.\u0275fac=function(e){return new(e||r)(C(v),C(I),C(K,8))},r.\u0275prov=E({token:r,factory:r.\u0275fac,providedIn:"root"}),r})(),Q=(()=>{class r{constructor(e,t,s,a){this.ngZone=e,this.host=t,this.renderer=s,this.clipboardSrv=a,this.cbOnSuccess=new y,this.cbOnError=new y,this.onClick=u=>{this.clipboardSrv.isSupported?this.targetElm&&this.clipboardSrv.isTargetValid(this.targetElm)?this.handleResult(this.clipboardSrv.copyFromInputElement(this.targetElm),this.targetElm.value,u):this.cbContent&&this.handleResult(this.clipboardSrv.copyFromContent(this.cbContent,this.container),this.cbContent,u):this.handleResult(!1,void 0,u)}}ngOnInit(){this.ngZone.runOutsideAngular(()=>{this.clickListener=this.renderer.listen(this.host.nativeElement,"click",this.onClick)})}ngOnDestroy(){this.clickListener&&this.clickListener(),this.clipboardSrv.destroy(this.container)}handleResult(e,t,s){let a={isSuccess:e,content:t,successMessage:this.cbSuccessMsg,event:s};e?this.cbOnSuccess.observed&&this.ngZone.run(()=>{this.cbOnSuccess.emit(a)}):this.cbOnError.observed&&this.ngZone.run(()=>{this.cbOnError.emit(a)}),this.clipboardSrv.pushCopyResponse(a)}}return r.\u0275fac=function(e){return new(e||r)(b(v),b(O),b(A),b(oe))},r.\u0275dir=j({type:r,selectors:[["","ngxClipboard",""]],inputs:{targetElm:[0,"ngxClipboard","targetElm"],container:"container",cbContent:"cbContent",cbSuccessMsg:"cbSuccessMsg"},outputs:{cbOnSuccess:"cbOnSuccess",cbOnError:"cbOnError"},standalone:!1}),r})();var X=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=D({type:r}),r.\u0275inj=T({imports:[L]}),r})();function se(r,c){r&1&&(g(0),n(1,"pre"),o(2," "),l(3,"code",29),o(4," "),i(),h())}function ae(r,c){r&1&&(g(0),n(1,"pre"),o(2," "),l(3,"code",30),o(4," "),i(),h())}function ce(r,c){r&1&&(g(0),n(1,"pre"),o(2," "),l(3,"code",31),o(4," "),i(),h())}function le(r,c){r&1&&(g(0),n(1,"pre"),o(2," "),l(3,"code",32),o(4," "),i(),h())}var $=class r{codeArr=[];toggleCode=c=>{this.codeArr.includes(c)?this.codeArr=this.codeArr.filter(e=>e!=c):this.codeArr.push(c)};constructor(){}message1="http://www.admin-dashboard.com";message2="Lorem ipsum dolor sit amet, consectetur adipiscing elit...";showMessage(c="",e="success"){ee.default.mixin({toast:!0,position:"top",showConfirmButton:!1,timer:3e3,customClass:{container:"toast"}}).fire({icon:e,title:c,padding:"10px 20px"})}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=k({type:r,selectors:[["ng-component"]],decls:106,vars:13,consts:[[1,"flex","space-x-2","rtl:space-x-reverse"],["href","javascript:;",1,"text-primary","hover:underline"],[1,"before:content-['/']","ltr:before:mr-2","rtl:before:ml-2"],[1,"space-y-8","pt-5"],[1,"panel","flex","items-center","overflow-x-auto","whitespace-nowrap","p-3","text-primary"],[1,"rounded-full","bg-primary","p-1.5","text-white","ring-2","ring-primary/30","ltr:mr-3","rtl:ml-3"],[1,"ltr:mr-3","rtl:ml-3"],["href","https://www.npmjs.com/package/ngx-clipboard","target","_blank",1,"block","hover:underline"],[1,"grid","grid-cols-1","gap-6","lg:grid-cols-2"],[1,"panel"],[1,"mb-5","flex","items-center","justify-between"],[1,"text-lg","font-semibold","dark:text-white-light"],["href","javascript:;",1,"font-semibold","hover:text-gray-400","dark:text-gray-400","dark:hover:text-gray-600",3,"click"],[1,"flex","items-center"],[1,"me-2"],[1,"mb-5"],[1,"rounded","bg-[#f1f2f3]","p-5","dark:bg-[#060818]"],["type","text","name","message1",1,"form-input",3,"ngModelChange","ngModel"],[1,"mt-5","flex","flex-wrap","gap-2"],["type","button","ngxClipboard","",1,"btn","btn-primary",3,"cbOnSuccess","cbContent"],[1,"ltr:mr-2","rtl:ml-2"],["type","button","ngxClipboard","",1,"btn","btn-dark",3,"cbOnSuccess","cbContent"],[4,"ngIf"],["rows","3","wrap","soft","name","message2",1,"form-textarea",3,"ngModelChange","ngModel"],[1,"mb-3","font-semibold"],["id","copyOTP",1,"text-2xl"],[1,"font-semibold"],["id","copyLink"],["id","copyHiddenCode",1,"absolute","opacity-0"],["highlightAuto",`<!-- copy from input -->
<form>
    <input type="text" class="form-input" [(ngModel)]="message1" name="message1" />
    <div class="mt-5 flex flex-wrap gap-2">
        <button
            type="button"
            class="btn btn-primary"
            ngxClipboard
            [cbContent]="message1"
            (cbOnSuccess)="showMessage('Copied successfully.')"
        >
            <svg> </svg>
            Copy from Input
        </button>
        <button
            type="button"
            class="btn btn-dark"
            ngxClipboard
            [cbContent]="message1"
            (cbOnSuccess)="showMessage('Cut successfully.');message1 = ''"
        >
            <svg> </svg>
            Cut from Input
        </button>
    </div>
</form>

<!-- script -->
message1 = 'http://www.admin-dashboard.com';
message2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...';`],["highlightAuto",`<!-- copy from textare -->
<form>
    <textarea rows="3" wrap="soft" class="form-textarea" [(ngModel)]="message2" name="message2"></textarea>
    <div class="mt-5 flex flex-wrap gap-2">
        <button
            type="button"
            class="btn btn-primary"
            ngxClipboard
            [cbContent]="message2"
            (cbOnSuccess)="showMessage('Copied successfully.')"
        >
            <svg> </svg>
            Copy from Input
        </button>
        <button
            type="button"
            class="btn btn-dark"
            ngxClipboard
            [cbContent]="message2"
            (cbOnSuccess)="showMessage('Cut successfully.');message2 = ''"
        >
            <svg> </svg>
            Cut from Input
        </button>
    </div>
</form>`],["highlightAuto",`<!-- copy from paragraph -->
<form>
    <p class="mb-3 font-semibold">Here is your OTP <span class="text-2xl" id="copyOTP">22991</span>.</p>
    <p class="font-semibold">Please do not share it to anyone</p>
    <div class="mt-5 flex flex-wrap gap-2">
        <button type="button" class="btn btn-primary" ngxClipboard [cbContent]="'22991'" (cbOnSuccess)="showMessage('Copied successfully.')">
            <svg> </svg>
            Copy from Paragraph
        </button>
    </div>
</form>`],["highlightAuto",`<!-- advanced -->
<form>
    <p class="mb-3 font-semibold"><span> Link -> </span> <span id="copyLink"> http://www.admin-dashboard.com/code</span></p>
    <span class="absolute opacity-0" id="copyHiddenCode">2291</span>
    <div class="mt-5 flex flex-wrap gap-2">
        <button type="button" class="btn btn-primary" ngxClipboard [cbContent]="'http://www.admin-dashboard.com/code'" (cbOnSuccess)="showMessage('Copied successfully.')">
            <svg> </svg>
            Copy Link
        </button>
        <button type="button" class="btn btn-dark" ngxClipboard [cbContent]="'2291'" (cbOnSuccess)="showMessage('Copied successfully.')">
            <svg> </svg>
            Copy Hidden Code
        </button>
    </div>
</form>`]],template:function(e,t){e&1&&(n(0,"div")(1,"ul",0)(2,"li")(3,"a",1),o(4,"Forms"),i()(),n(5,"li",2)(6,"span"),o(7,"Clipboard"),i()()(),n(8,"div",3)(9,"div",4)(10,"div",5),l(11,"icon-bell"),i(),n(12,"span",6),o(13,"Documentation: "),i(),n(14,"a",7),o(15,"https://www.npmjs.com/package/ngx-clipboard"),i()(),n(16,"div",8)(17,"div",9)(18,"div",10)(19,"h5",11),o(20,"Copy from input"),i(),n(21,"a",12),m("click",function(){return t.toggleCode("code1")}),n(22,"span",13),l(23,"icon-code",14),o(24," Code "),i()()(),n(25,"div",15)(26,"div",16)(27,"form")(28,"input",17),x("ngModelChange",function(a){return w(t.message1,a)||(t.message1=a),a}),i(),n(29,"div",18)(30,"button",19),m("cbOnSuccess",function(){return t.showMessage("Copied successfully.")}),l(31,"icon-copy",20),o(32," Copy from Input "),i(),n(33,"button",21),m("cbOnSuccess",function(){return t.showMessage("Cut successfully."),t.message1=""}),l(34,"icon-pencil",20),o(35," Cut from Input "),i()()()()(),f(36,se,5,0,"ng-container",22),i(),n(37,"div",9)(38,"div",10)(39,"h5",11),o(40,"Copy form Textarea"),i(),n(41,"a",12),m("click",function(){return t.toggleCode("code2")}),n(42,"span",13),l(43,"icon-code",14),o(44," Code "),i()()(),n(45,"div",15)(46,"div",16)(47,"form")(48,"textarea",23),x("ngModelChange",function(a){return w(t.message2,a)||(t.message2=a),a}),i(),n(49,"div",18)(50,"button",19),m("cbOnSuccess",function(){return t.showMessage("Copied successfully.")}),l(51,"icon-copy",20),o(52," Copy from Input "),i(),n(53,"button",21),m("cbOnSuccess",function(){return t.showMessage("Cut successfully."),t.message2=""}),l(54,"icon-pencil",20),o(55," Cut from Input "),i()()()()(),f(56,ae,5,0,"ng-container",22),i(),n(57,"div",9)(58,"div",10)(59,"h5",11),o(60,"Copy Text from Paragraph"),i(),n(61,"a",12),m("click",function(){return t.toggleCode("code3")}),n(62,"span",13),l(63,"icon-code",14),o(64," Code "),i()()(),n(65,"div",15)(66,"div",16)(67,"form")(68,"p",24),o(69,"Here is your OTP "),n(70,"span",25),o(71,"22991"),i(),o(72,"."),i(),n(73,"p",26),o(74,"Please do not share it to anyone"),i(),n(75,"div",18)(76,"button",19),m("cbOnSuccess",function(){return t.showMessage("Copied successfully.")}),l(77,"icon-copy",20),o(78," Copy from Paragraph "),i()()()()(),f(79,ce,5,0,"ng-container",22),i(),n(80,"div",9)(81,"div",10)(82,"h5",11),o(83,"Copy Hidden Text (Advanced)"),i(),n(84,"a",12),m("click",function(){return t.toggleCode("code4")}),n(85,"span",13),l(86,"icon-code",14),o(87," Code "),i()()(),n(88,"div",15)(89,"div",16)(90,"form")(91,"p",24)(92,"span"),o(93," Link -> "),i(),n(94,"span",27),o(95," http://www.admin-dashboard.com/code"),i()(),n(96,"span",28),o(97,"2291"),i(),n(98,"div",18)(99,"button",19),m("cbOnSuccess",function(){return t.showMessage("Copied successfully.")}),l(100,"icon-copy",20),o(101," Copy Link "),i(),n(102,"button",21),m("cbOnSuccess",function(){return t.showMessage("Copied successfully.")}),l(103,"icon-copy",20),o(104," Copy Hidden Code "),i()()()()(),f(105,le,5,0,"ng-container",22),i()()()()),e&2&&(p(28),S("ngModel",t.message1),p(2),d("cbContent",t.message1),p(3),d("cbContent",t.message1),p(3),d("ngIf",t.codeArr.includes("code1")),p(12),S("ngModel",t.message2),p(2),d("cbContent",t.message2),p(3),d("cbContent",t.message2),p(3),d("ngIf",t.codeArr.includes("code2")),p(20),d("cbContent","22991"),p(3),d("ngIf",t.codeArr.includes("code3")),p(20),d("cbContent","http://www.admin-dashboard.com/code"),p(3),d("cbContent","2291"),p(3),d("ngIf",t.codeArr.includes("code4")))},dependencies:[R,J,Y,V,Z,N,F,P,W,H,B,X,Q,z,U,q,G],encapsulation:2})};export{$ as ClipboardComponent};
