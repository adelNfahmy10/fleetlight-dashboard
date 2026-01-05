import{a as T}from"./chunk-6NBUXXQA.js";import{a as w}from"./chunk-Q7YZW75Y.js";import{a as x}from"./chunk-7A5NGOQG.js";import{b as v,c as E}from"./chunk-FQ5NNIZB.js";import{a as k}from"./chunk-H5QMWZQA.js";import"./chunk-E5DRCL7G.js";import"./chunk-LXLIJ5ZK.js";import"./chunk-FHTSEW43.js";import{k as C}from"./chunk-DR26E5HF.js";import{Ob as u,Pb as e,Qb as t,Rb as a,Vb as p,Wb as b,_b as s,bb as m,ob as _,oc as n,tb as h,yb as d}from"./chunk-DCDCP4BO.js";import{f as S,g}from"./chunk-GAL4ENT6.js";var f=S(T());function B(r,l){r&1&&(p(0),e(1,"pre"),n(2,"                        "),a(3,"code",37),n(4,`
`),t(),b())}function N(r,l){r&1&&(p(0),e(1,"pre"),n(2,"                        "),a(3,"code",38),n(4,`
`),t(),b())}function M(r,l){r&1&&(p(0),e(1,"pre"),n(2,"                        "),a(3,"code",39),n(4,`
`),t(),b())}function A(r,l){r&1&&(p(0),e(1,"pre"),n(2,"                        "),a(3,"code",40),n(4,`
`),t(),b())}function I(r,l){r&1&&(p(0),e(1,"pre"),n(2,"                        "),a(3,"code",41),n(4,`
`),t(),b())}function D(r,l){r&1&&(p(0),e(1,"pre"),n(2,"                        "),a(3,"code",42),n(4,`
`),t(),b())}var y=class r{constructor(l){this.storeData=l;this.initStore()}codeArr=[];toggleCode=l=>{this.codeArr.includes(l)?this.codeArr=this.codeArr.filter(c=>c!=l):this.codeArr.push(l)};store;initStore(){return g(this,null,function*(){this.storeData.select(l=>l.index).subscribe(l=>{this.store=l})})}showMessage(l="Example notification text.",c="bottom-start",i=!0,o=3e3){f.default.mixin({toast:!0,position:c||"bottom-start",showConfirmButton:!1,timer:o,showCloseButton:i}).fire({title:l})}clickCallable(){f.default.fire({toast:!0,position:"bottom-start",text:"Custom callback when action button is clicked.",showCloseButton:!0,showConfirmButton:!1}).then(l=>{f.default.fire({toast:!0,position:"bottom-start",text:"Thanks for clicking the Dismiss button!",showCloseButton:!0,showConfirmButton:!1})})}coloredToast(l){f.default.mixin({toast:!0,position:"bottom-start",showConfirmButton:!1,timer:3e3,showCloseButton:!0,customClass:{popup:`color-${l}`},target:document.getElementById(l+"-toast")||"body"}).fire({title:"Example notification text."})}static \u0275fac=function(c){return new(c||r)(_(k))};static \u0275cmp=h({type:r,selectors:[["ng-component"]],decls:132,vars:6,consts:[[1,"flex","space-x-2","rtl:space-x-reverse"],["href","javascript:;",1,"text-primary","hover:underline"],[1,"before:content-['/']","ltr:before:mr-2","rtl:before:ml-2"],[1,"space-y-8","pt-5"],[1,"panel","flex","items-center","overflow-x-auto","whitespace-nowrap","p-3","text-primary"],[1,"rounded-full","bg-primary","p-1.5","text-white","ring-2","ring-primary/30","ltr:mr-3","rtl:ml-3"],[1,"ltr:mr-3","rtl:ml-3"],["href","https://www.npmjs.com/package/sweetalert2","target","_blank",1,"block","hover:underline"],[1,"grid","grid-cols-1","gap-6","lg:grid-cols-2"],[1,"panel"],[1,"mb-5","flex","items-center","justify-between"],[1,"text-lg","font-semibold","dark:text-white-light"],["href","javascript:;",1,"font-semibold","hover:text-gray-400","dark:text-gray-400","dark:hover:text-gray-600",3,"click"],[1,"flex","items-center"],[1,"me-2"],[1,"mb-5"],[1,"flex","items-center","justify-center"],["type","button",1,"btn","btn-primary",3,"click"],[4,"ngIf"],[1,"panel","lg:row-span-2"],[1,"mb-3","text-center","text-base","font-semibold","dark:text-white-light"],[1,"mb-10","flex","items-center","justify-center","gap-2"],["type","button",1,"btn","btn-success",3,"click"],["type","button",1,"btn","btn-secondary",3,"click"],["type","button",1,"btn","btn-info",3,"click"],[1,"flex","items-center","justify-center","gap-2"],["type","button",1,"btn","btn-dark",3,"click"],[1,"panel","lg:col-span-2"],[1,"colored-toast","grid","grid-cols-2","items-center","justify-center","gap-2","sm:flex","sm:grid-cols-1"],["id","primary-toast"],["id","secondary-toast"],["id","success-toast"],["type","button",1,"btn","btn-danger",3,"click"],["id","danger-toast"],["type","button",1,"btn","btn-warning",3,"click"],["id","warning-toast"],["id","info-toast"],["highlightAuto",`<!-- basic -->
<button type="button" class="btn btn-primary" (click)="showMessage('Hello, world! This is a toast message.')">Open Toast</button>

<!-- script -->
showMessage(msg = 'Example notification text.', position = 'bottom-start', showCloseButton = true, closeButtonHtml = '', duration = 3000){
    const toast = Swal.mixin({
        toast: true,
        position: position || 'bottom-start',
        showConfirmButton: false,
        timer: duration,
        showCloseButton: showCloseButton,
    });
    toast.fire({
        title: msg,
    });
};`],["highlightAuto",`<!-- top left -->
<button type="button" class="btn btn-success" (click)="showMessage('Example notification text.',store.rtlClass === 'rtl' ? 'top-end' : 'top-start')">Top Left</button>

<!-- top center -->
<button type="button" class="btn btn-secondary" (click)="showMessage('Example notification text','top')">Top Center</button>

<!-- top right -->
<button type="button" class="btn btn-info" (click)="showMessage('Example notification text.', store.rtlClass === 'rtl' ? 'top-start' : 'top-end')">Top Right</button>

<!-- bottom left -->
<button type="button" class="btn btn-dark" (click)="showMessage('Example notification text.',store.rtlClass === 'rtl' ? 'bottom-end' : 'bottom-start')">Bottom Left</button>

<!-- bottom center -->
<button type="button" class="btn btn-primary" (click)="showMessage('Example notification text.','bottom')">Bottom Center</button>

<!-- bottom right -->
<button type="button" class="btn btn-secondary" (click)="showMessage('Example notification text.',store.rtlClass === 'rtl' ? 'bottom-start' : 'bottom-end')">Bottom Right</button>

<!-- script -->
showMessage(msg = 'Example notification text.', position = 'bottom-start', showCloseButton = true, closeButtonHtml = '', duration = 3000){
  const toast = Swal.mixin({
      toast: true,
      position: position || 'bottom-start',
      showConfirmButton: false,
      timer: duration,
      showCloseButton: showCloseButton,
  });
  toast.fire({
      title: msg,
  });
};`],["highlightAuto",`<!-- no action -->
<button type="button" class="btn btn-success" (click)="showMessage('Example notification text.', 'bottom-start',false)">No Action</button>

<!-- script -->
showMessage(msg = 'Example notification text.', position = 'bottom-start', showCloseButton = true, closeButtonHtml = '', duration = 3000){
    const toast = Swal.mixin({
        toast: true,
        position: position || 'bottom-start',
        showConfirmButton: false,
        timer: duration,
        showCloseButton: showCloseButton,
    });
    toast.fire({
        title: msg,
    });
};`],["highlightAuto",`<!-- click callback -->
<button type="button" class="btn btn-info" (click)="clickCallable()">Click Callback</button>

<!-- script -->
clickCallable(){
    Swal.fire({
        toast: true,
        position: 'bottom-start',
        text: "Custom callback when action button is clicked.",
        showCloseButton: true,
        showConfirmButton: false,
    }).then((result) => {
        Swal.fire({
            toast: true,
            position: 'bottom-start',
            text: 'Thanks for clicking the Dismiss button!',
            showCloseButton: true,
            showConfirmButton: false,
        });
    });
};`],["highlightAuto",`<!-- click callback -->
<button type="button" class="btn btn-dark" (click)="showMessage(msg='Example notification text.', position= 'bottom-start', duration=5000)">Duration</button>

<!-- script -->
showMessage(msg = 'Example notification text.', position = 'bottom-start', showCloseButton = true, closeButtonHtml = '', duration = 3000){
    const toast = Swal.mixin({
        toast: true,
        position: position || 'bottom-start',
        showConfirmButton: false,
        timer: duration,
        showCloseButton: showCloseButton,
    });
    toast.fire({
        title: msg,
    });
};`],["highlightAuto",`<!-- primary -->
<div>
    <button type="button" class="btn btn-primary" (click)="coloredToast('primary')">Primary</button>
    <div id="primary-toast"></div>
</div>

<!-- secondary -->
<div>
    <button type=" button" class="btn btn-secondary" (click)="coloredToast('secondary')">Secondary</button>
    <div id="secondary-toast"></div>
</div>

<!-- success -->
<div>
    <button type="button" class="btn btn-success" (click)="coloredToast('success')">Success</button>
    <div id="success-toast"></div>
</div>

<!-- danger -->
<div>
    <button type="button" class="btn btn-danger" (click)="coloredToast('danger')">Danger</button>
    <div id="danger-toast"></div>
</div>

<!-- warning -->
<div>
    <button type="button" class="btn btn-warning" (click)="coloredToast('warning')">Warning</button>
    <div id="warning-toast"></div>
</div>

<!-- info -->
<div>
    <button type="button" class="btn btn-info" (click)="coloredToast('info')">Info</button>
    <div id="info-toast"></div>
</div>

<!-- script -->
coloredToast(color){
    const toast = Swal.mixin({
        toast: true,
        position: 'bottom-start',
        showConfirmButton: false,
        timer: 3000,
        showCloseButton: true,
        customClass: {
            popup: \`color-\${color}\`
        },
        target: document.getElementById(color + '-toast')
    });
    toast.fire({
        title: 'Example notification text.',
    });
};`]],template:function(c,i){c&1&&(e(0,"div")(1,"ul",0)(2,"li")(3,"a",1),n(4,"Components"),t()(),e(5,"li",2)(6,"span"),n(7,"Notifications"),t()()(),e(8,"div",3)(9,"div",4)(10,"div",5),a(11,"icon-bell"),t(),e(12,"span",6),n(13,"Documentation: "),t(),e(14,"a",7),n(15,"https://www.npmjs.com/package/sweetalert2"),t()(),e(16,"div",8)(17,"div",9)(18,"div",10)(19,"h5",11),n(20,"Basic"),t(),e(21,"a",12),s("click",function(){return i.toggleCode("code1")}),e(22,"span",13),a(23,"icon-code",14),n(24," Code "),t()()(),e(25,"div",15)(26,"div",16)(27,"button",17),s("click",function(){return i.showMessage("Hello, world! This is a toast message.")}),n(28,"Open Toast"),t()()(),d(29,B,5,0,"ng-container",18),t(),e(30,"div",19)(31,"div",10)(32,"h5",11),n(33,"Position"),t(),e(34,"a",12),s("click",function(){return i.toggleCode("code2")}),e(35,"span",13),a(36,"icon-code",14),n(37," Code "),t()()(),e(38,"div",15)(39,"h6",20),n(40,"Top Position"),t(),e(41,"div",21)(42,"button",22),s("click",function(){return i.showMessage("Example notification text.",i.store.rtlClass==="rtl"?"top-end":"top-start")}),n(43," Top Left "),t(),e(44,"button",23),s("click",function(){return i.showMessage("Example notification text","top")}),n(45,"Top Center"),t(),e(46,"button",24),s("click",function(){return i.showMessage("Example notification text.",i.store.rtlClass==="rtl"?"top-start":"top-end")}),n(47," Top Right "),t()(),e(48,"h6",20),n(49,"Bottom Position"),t(),e(50,"div",25)(51,"button",26),s("click",function(){return i.showMessage("Example notification text.",i.store.rtlClass==="rtl"?"bottom-end":"bottom-start")}),n(52," Bottom Left "),t(),e(53,"button",17),s("click",function(){return i.showMessage("Example notification text.","bottom")}),n(54,"Bottom Center"),t(),e(55,"button",23),s("click",function(){return i.showMessage("Example notification text.",i.store.rtlClass==="rtl"?"bottom-start":"bottom-end")}),n(56," Bottom Right "),t()()(),d(57,N,5,0,"ng-container",18),t(),e(58,"div",9)(59,"div",10)(60,"h5",11),n(61,"No Action"),t(),e(62,"a",12),s("click",function(){return i.toggleCode("code3")}),e(63,"span",13),a(64,"icon-code",14),n(65," Code "),t()()(),e(66,"div",15)(67,"div",16)(68,"button",22),s("click",function(){return i.showMessage("Example notification text.","bottom-start",!1)}),n(69," No Action "),t()()(),d(70,M,5,0,"ng-container",18),t(),e(71,"div",9)(72,"div",10)(73,"h5",11),n(74,"Click Callback"),t(),e(75,"a",12),s("click",function(){return i.toggleCode("code4")}),e(76,"span",13),a(77,"icon-code",14),n(78," Code "),t()()(),e(79,"div",15)(80,"div",16)(81,"button",24),s("click",function(){return i.clickCallable()}),n(82,"Click Callback"),t()()(),d(83,A,5,0,"ng-container",18),t(),e(84,"div",9)(85,"div",10)(86,"h5",11),n(87,"Duration"),t(),e(88,"a",12),s("click",function(){return i.toggleCode("code5")}),e(89,"span",13),a(90,"icon-code",14),n(91," Code "),t()()(),e(92,"div",15)(93,"div",16)(94,"button",26),s("click",function(){return i.showMessage("Example notification text.","bottom-start",!0,5e3)}),n(95," Duration "),t()()(),d(96,I,5,0,"ng-container",18),t(),e(97,"div",27)(98,"div",10)(99,"h5",11),n(100,"Background Color"),t(),e(101,"a",12),s("click",function(){return i.toggleCode("code6")}),e(102,"span",13),a(103,"icon-code",14),n(104," Code "),t()()(),e(105,"div",15)(106,"div",28)(107,"div")(108,"button",17),s("click",function(){return i.coloredToast("primary")}),n(109,"Primary"),t(),a(110,"div",29),t(),e(111,"div")(112,"button",23),s("click",function(){return i.coloredToast("secondary")}),n(113,"Secondary"),t(),a(114,"div",30),t(),e(115,"div")(116,"button",22),s("click",function(){return i.coloredToast("success")}),n(117,"Success"),t(),a(118,"div",31),t(),e(119,"div")(120,"button",32),s("click",function(){return i.coloredToast("danger")}),n(121,"Danger"),t(),a(122,"div",33),t(),e(123,"div")(124,"button",34),s("click",function(){return i.coloredToast("warning")}),n(125,"Warning"),t(),a(126,"div",35),t(),e(127,"div")(128,"button",24),s("click",function(){return i.coloredToast("info")}),n(129,"Info"),t(),a(130,"div",36),t()()(),d(131,D,5,0,"ng-container",18),t()()()()),c&2&&(m(29),u("ngIf",i.codeArr.includes("code1")),m(28),u("ngIf",i.codeArr.includes("code2")),m(13),u("ngIf",i.codeArr.includes("code3")),m(13),u("ngIf",i.codeArr.includes("code4")),m(13),u("ngIf",i.codeArr.includes("code5")),m(35),u("ngIf",i.codeArr.includes("code6")))},dependencies:[C,E,v,x,w],encapsulation:2})};export{y as NotificationsComponent};
