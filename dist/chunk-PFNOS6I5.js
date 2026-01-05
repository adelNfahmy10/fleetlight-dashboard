import{a as E,b as w}from"./chunk-KPFX54ZR.js";import{a as _}from"./chunk-Q7YZW75Y.js";import{a as S}from"./chunk-7A5NGOQG.js";import{b as T,c as C}from"./chunk-FQ5NNIZB.js";import{a as k}from"./chunk-H5QMWZQA.js";import"./chunk-E5DRCL7G.js";import"./chunk-LXLIJ5ZK.js";import"./chunk-FHTSEW43.js";import{k as h}from"./chunk-DR26E5HF.js";import{Ac as b,Ob as o,Pb as t,Qb as e,Rb as c,Vb as g,Wb as d,_b as y,bb as i,ob as P,oc as n,tb as x,yb as m,zc as r}from"./chunk-DCDCP4BO.js";import{g as f}from"./chunk-GAL4ENT6.js";var D=()=>({trigger:"click"}),A=()=>({trigger:"click",placement:"top"}),v=a=>({trigger:"click",placement:a}),I=()=>({trigger:"click",placement:"bottom"}),O=()=>({trigger:"mouseenter"}),j=()=>({trigger:"focus"}),N=()=>({trigger:"click",delay:1e3}),H=()=>({trigger:"click",animation:!1}),B=()=>({trigger:"click",theme:"primary"}),M=()=>({trigger:"click",theme:"success"}),W=()=>({trigger:"click",theme:"info"}),L=()=>({trigger:"click",theme:"danger"}),R=()=>({trigger:"click",theme:"warning"}),U=()=>({trigger:"click",theme:"secondary"}),q=()=>({trigger:"click",theme:"dark"});function z(a,p){a&1&&(g(0),t(1,"pre"),n(2,"                        "),c(3,"code",39),n(4,`
                    `),e(),d())}function G(a,p){a&1&&(g(0),t(1,"pre"),n(2,"                        "),c(3,"code",40),n(4,`
                    `),e(),d())}function J(a,p){a&1&&(g(0),t(1,"pre"),n(2,"                        "),c(3,"code",41),n(4,`
                    `),e(),d())}function K(a,p){a&1&&(g(0),t(1,"pre"),n(2,"                        "),c(3,"code",42),n(4,`
                    `),e(),d())}function Q(a,p){a&1&&(g(0),t(1,"pre"),n(2,"                        "),c(3,"code",43),n(4,`
                    `),e(),d())}var F=class a{constructor(p){this.storeData=p;this.initStore()}codeArr=[];toggleCode=p=>{this.codeArr.includes(p)?this.codeArr=this.codeArr.filter(s=>s!=p):this.codeArr.push(p)};store;initStore(){return f(this,null,function*(){this.storeData.select(p=>p.index).subscribe(p=>{this.store=p})})}static \u0275fac=function(s){return new(s||a)(P(k))};static \u0275cmp=x({type:a,selectors:[["ng-component"]],decls:108,vars:44,consts:[[1,"flex","space-x-2","rtl:space-x-reverse"],["href","javascript:;",1,"text-primary","hover:underline"],[1,"before:content-['/']","ltr:before:mr-2","rtl:before:ml-2"],[1,"space-y-8","pt-5"],[1,"panel","flex","items-center","overflow-x-auto","whitespace-nowrap","p-3","text-primary"],[1,"rounded-full","bg-primary","p-1.5","text-white","ring-2","ring-primary/30","ltr:mr-3","rtl:ml-3"],[1,"ltr:mr-3","rtl:ml-3"],["href","https://www.npmjs.com/package/ngx-tippy-wrapper","target","_blank",1,"block","hover:underline"],[1,"grid","grid-cols-1","gap-6","lg:grid-cols-2"],[1,"panel"],[1,"mb-5","flex","items-center","justify-between"],[1,"text-lg","font-semibold","dark:text-white-light"],["href","javascript:;",1,"font-semibold","hover:text-gray-400","dark:text-gray-400","dark:hover:text-gray-600",3,"click"],[1,"flex","items-center"],[1,"me-2"],[1,"mb-5"],[1,"flex","w-full","justify-center","gap-4"],["href","javascript:;","ngxTippy","Popover using ANCHOR tag",1,"btn","btn-primary","bg-primary",3,"tippyProps"],["type","button","ngxTippy","Popover using BUTTON tag",1,"btn","btn-success",3,"tippyProps"],[4,"ngIf"],[1,"flex","w-full","flex-wrap","justify-center","gap-4"],["type","button","ngxTippy","Popover on top",1,"btn","btn-info",3,"tippyProps"],["type","button","ngxTippy","Popover on left",1,"btn","btn-secondary",3,"tippyProps"],["type","button","ngxTippy","Popover on right",1,"btn","btn-danger",3,"tippyProps"],["type","button","ngxTippy","Popover on bottom",1,"btn","btn-warning",3,"tippyProps"],[1,"panel","lg:col-start-2","lg:row-start-1"],["type","button","ngxTippy","Popover on left",1,"btn","btn-dark",3,"tippyProps"],["type","button","ngxTippy","On hover",1,"btn","btn-primary",3,"tippyProps"],["type","button","ngxTippy","On focus",1,"btn","btn-secondary",3,"tippyProps"],["type","button","ngxTippy","Delay 1s",1,"btn","btn-info",3,"tippyProps"],["type","button","ngxTippy","Disabled animation",1,"btn","btn-dark",3,"tippyProps"],[1,"panel","lg:col-span-2"],["type","button","ngxTippy","Primary",1,"btn","btn-primary",3,"tippyProps"],["type","button","ngxTippy","Success",1,"btn","btn-success",3,"tippyProps"],["type","button","ngxTippy","Info",1,"btn","btn-info",3,"tippyProps"],["type","button","ngxTippy","Danger",1,"btn","btn-danger",3,"tippyProps"],["type","button","ngxTippy","Warning",1,"btn","btn-warning",3,"tippyProps"],["type","button","ngxTippy","Secondary",1,"btn","btn-secondary",3,"tippyProps"],["type","button","ngxTippy","Dark",1,"btn","btn-dark",3,"tippyProps"],["highlightAuto",`<!-- link -->
<a href="javascript:;" ngxTippy="Popover using ANCHOR tag" [tippyProps]="{trigger: 'click'}" class="btn btn-primary bg-primary">Link</a>

<!-- button -->
<button type="button" ngxTippy="Popover using BUTTON tag" [tippyProps]="{trigger: 'click'}" class="btn btn-success">Button</button>
`],["highlightAuto",`<!-- top -->
<button type="button" ngxTippy="Popover on top" [tippyProps]="{trigger: 'click', placement: 'top'}" class="btn btn-info">
    Popover on top
</button>

<!-- left -->
<button
    type="button"
    ngxTippy="Popover on left"
    [tippyProps]="{trigger: 'click', placement: store.rtlClass === 'rtl' ? 'right' : 'left'}"
    class="btn btn-secondary"
>
    Popover on left
</button>

<!-- right -->
<button
    type="button"
    ngxTippy="Popover on right"
    [tippyProps]="{trigger: 'click', placement: store.rtlClass === 'rtl' ? 'left' : 'right'}"
    class="btn btn-danger"
>
    Popover on right
</button>

<!-- bottom -->
<button type="button" ngxTippy="Popover on bottom" [tippyProps]="{trigger: 'click', placement: 'bottom'}" class="btn btn-warning">
    Popover on bottom
</button>`],["highlightAuto",`<!-- dismissible -->
<button
    type="button"
    ngxTippy="Popover on left"
    [tippyProps]="{trigger: 'click', placement: store.rtlClass === 'rtl' ? 'right' : 'left'}"
    class="btn btn-dark"
>
    Popover on left
</button>`],["highlightAuto",`<!-- hover -->
<button type="button" ngxTippy="On hover" [tippyProps]="{trigger: 'mouseenter'}" class="btn btn-primary">On Hover</button>

<!-- focus -->
<button type="button" ngxTippy="On focus" [tippyProps]="{trigger: 'focus'}" class="btn btn-secondary">On Focus</button>

<!-- delay -->
<button type="button" ngxTippy="Delay 1s" [tippyProps]="{trigger: 'click', delay:1000}" class="btn btn-info">Delay</button>

<!-- no animation -->
<button type="button" ngxTippy="Disabled animation" [tippyProps]="{trigger: 'click', animation: false}" class="btn btn-dark">
    Disabled Animation
</button>`],["highlightAuto",`<!-- primary -->
<button type="button" ngxTippy="Primary" [tippyProps]="{trigger: 'click',theme: 'primary'}" class="btn btn-primary">Primary</button>

<!-- success -->
<button type="button" ngxTippy="Success" [tippyProps]="{trigger: 'click',theme: 'success'}" class="btn btn-success">Success</button>

<!-- info -->
<button type="button" ngxTippy="Info" [tippyProps]="{trigger: 'click',theme: 'info'}" class="btn btn-info">Info</button>

<!-- danger -->
<button type="button" ngxTippy="Danger" [tippyProps]="{trigger: 'click',theme: 'danger'}" class="btn btn-danger">Danger</button>

<!-- warning -->
<button type="button" ngxTippy="Warning" [tippyProps]="{trigger: 'click',theme: 'warning'}" class="btn btn-warning">Warning</button>

<!-- secondary -->
<button type="button" ngxTippy="Secondary" [tippyProps]="{trigger: 'click',theme: 'secondary'}" class="btn btn-secondary">
    Secondary
</button>

<!-- dark -->
<button type="button" ngxTippy="Dark" [tippyProps]="{trigger: 'click',theme: 'dark'}" class="btn btn-dark">Dark</button>`]],template:function(s,l){s&1&&(t(0,"div")(1,"ul",0)(2,"li")(3,"a",1),n(4,"Elements"),e()(),t(5,"li",2)(6,"span"),n(7,"Popovers"),e()()(),t(8,"div",3)(9,"div",4)(10,"div",5),c(11,"icon-bell"),e(),t(12,"span",6),n(13,"Documentation: "),e(),t(14,"a",7),n(15,"https://www.npmjs.com/package/ngx-tippy-wrapper"),e()(),t(16,"div",8)(17,"div",9)(18,"div",10)(19,"h5",11),n(20,"Default"),e(),t(21,"a",12),y("click",function(){return l.toggleCode("code1")}),t(22,"span",13),c(23,"icon-code",14),n(24," Code "),e()()(),t(25,"div",15)(26,"div",16)(27,"a",17),n(28,"Link"),e(),t(29,"button",18),n(30,"Button"),e()()(),m(31,z,5,0,"ng-container",19),e(),t(32,"div",9)(33,"div",10)(34,"h5",11),n(35,"Placement"),e(),t(36,"a",12),y("click",function(){return l.toggleCode("code2")}),t(37,"span",13),c(38,"icon-code",14),n(39," Code "),e()()(),t(40,"div",15)(41,"div",20)(42,"button",21),n(43," Popover on top "),e(),t(44,"button",22),n(45," Popover on left "),e(),t(46,"button",23),n(47," Popover on right "),e(),t(48,"button",24),n(49," Popover on bottom "),e()()(),m(50,G,5,0,"ng-container",19),e(),t(51,"div",25)(52,"div",10)(53,"h5",11),n(54,"Dismissible popover"),e(),t(55,"a",12),y("click",function(){return l.toggleCode("code3")}),t(56,"span",13),c(57,"icon-code",14),n(58," Code "),e()()(),t(59,"div",15)(60,"div",16)(61,"button",26),n(62," Popover on left "),e()()(),m(63,J,5,0,"ng-container",19),e(),t(64,"div",9)(65,"div",10)(66,"h5",11),n(67,"Options"),e(),t(68,"a",12),y("click",function(){return l.toggleCode("code4")}),t(69,"span",13),c(70,"icon-code",14),n(71," Code "),e()()(),t(72,"div",15)(73,"div",20)(74,"button",27),n(75,"On Hover"),e(),t(76,"button",28),n(77,"On Focus"),e(),t(78,"button",29),n(79,"Delay"),e(),t(80,"button",30),n(81," Disabled Animation "),e()()(),m(82,K,5,0,"ng-container",19),e(),t(83,"div",31)(84,"div",10)(85,"h5",11),n(86,"Colors"),e(),t(87,"a",12),y("click",function(){return l.toggleCode("code5")}),t(88,"span",13),c(89,"icon-code",14),n(90," Code "),e()()(),t(91,"div",15)(92,"div",20)(93,"button",32),n(94,"Primary"),e(),t(95,"button",33),n(96,"Success"),e(),t(97,"button",34),n(98,"Info"),e(),t(99,"button",35),n(100,"Danger"),e(),t(101,"button",36),n(102,"Warning"),e(),t(103,"button",37),n(104," Secondary "),e(),t(105,"button",38),n(106,"Dark"),e()()(),m(107,Q,5,0,"ng-container",19),e()()()()),s&2&&(i(27),o("tippyProps",r(23,D)),i(2),o("tippyProps",r(24,D)),i(2),o("ngIf",l.codeArr.includes("code1")),i(11),o("tippyProps",r(25,A)),i(2),o("tippyProps",b(26,v,l.store.rtlClass==="rtl"?"right":"left")),i(2),o("tippyProps",b(28,v,l.store.rtlClass==="rtl"?"left":"right")),i(2),o("tippyProps",r(30,I)),i(2),o("ngIf",l.codeArr.includes("code2")),i(11),o("tippyProps",b(31,v,l.store.rtlClass==="rtl"?"right":"left")),i(2),o("ngIf",l.codeArr.includes("code3")),i(11),o("tippyProps",r(33,O)),i(2),o("tippyProps",r(34,j)),i(2),o("tippyProps",r(35,N)),i(2),o("tippyProps",r(36,H)),i(2),o("ngIf",l.codeArr.includes("code4")),i(11),o("tippyProps",r(37,B)),i(2),o("tippyProps",r(38,M)),i(2),o("tippyProps",r(39,W)),i(2),o("tippyProps",r(40,L)),i(2),o("tippyProps",r(41,R)),i(2),o("tippyProps",r(42,U)),i(2),o("tippyProps",r(43,q)),i(2),o("ngIf",l.codeArr.includes("code5")))},dependencies:[w,E,C,T,h,S,_],encapsulation:2})};export{F as PopoversComponent};
