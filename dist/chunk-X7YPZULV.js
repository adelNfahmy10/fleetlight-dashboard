import{a as G}from"./chunk-Q7YZW75Y.js";import{a as A}from"./chunk-7A5NGOQG.js";import{b as O,c as T}from"./chunk-FQ5NNIZB.js";import{a as W,b as k}from"./chunk-2YRFJEWR.js";import{g as E,j as v,z as w}from"./chunk-4BDKNRNN.js";import"./chunk-E5DRCL7G.js";import"./chunk-LXLIJ5ZK.js";import"./chunk-FHTSEW43.js";import{k as y,n as M}from"./chunk-DR26E5HF.js";import{Ob as o,Pb as n,Qb as t,Rb as m,Vb as d,Wb as g,_b as u,bb as r,oc as i,qc as b,rc as _,sc as h,tb as C,tc as f,yb as s}from"./chunk-DCDCP4BO.js";import"./chunk-GAL4ENT6.js";function x(a,p){a&1&&(d(0),n(1,"pre"),i(2," "),m(3,"code",24),i(4," "),t(),g())}function B(a,p){a&1&&(d(0),n(1,"pre"),i(2," "),m(3,"code",25),i(4," "),t(),g())}function I(a,p){a&1&&(d(0),n(1,"pre"),i(2," "),m(3,"code",26),i(4," "),t(),g())}function L(a,p){a&1&&(d(0),n(1,"pre"),i(2," "),m(3,"code",27),i(4," "),t(),g())}function N(a,p){a&1&&(d(0),n(1,"pre"),i(2," "),m(3,"code",28),i(4," "),t(),g())}function j(a,p){a&1&&(d(0),n(1,"pre"),i(2," "),m(3,"code",29),i(4," "),t(),g())}var P=class a{codeArr=[];toggleCode=p=>{this.codeArr.includes(p)?this.codeArr=this.codeArr.filter(S=>S!=p):this.codeArr.push(p)};constructor(){}options=["Orange","White","Purple"];input1="Orange";options2=[{name:"Orange",group_name:"Group 1"},{name:"White",group_name:"Group 1"},{name:"Purple",group_name:"Group 1"},{name:"Yellow",group_name:"Group 2"},{name:"Red",group_name:"Group 2"},{name:"Green",group_name:"Group 2"},{name:"Aqua",group_name:"Group 3"},{name:"Black",group_name:"Group 3"},{name:"Blue",group_name:"Group 3"}];input2="Orange";options3=[{name:"Orange"},{name:"White",disabled:!0},{name:"Purple"}];input3="Orange";input4;input5;input6=[];static \u0275fac=function(S){return new(S||a)};static \u0275cmp=C({type:a,selectors:[["ng-component"]],decls:83,vars:30,consts:[[1,"flex","space-x-2","rtl:space-x-reverse"],["href","javascript:;",1,"text-primary","hover:underline"],[1,"before:content-['/']","ltr:before:mr-2","rtl:before:ml-2"],[1,"space-y-8","pt-5"],[1,"panel","flex","items-center","overflow-x-auto","whitespace-nowrap","p-3","text-primary"],[1,"rounded-full","bg-primary","p-1.5","text-white","ring-2","ring-primary/30","ltr:mr-3","rtl:ml-3"],[1,"ltr:mr-3","rtl:ml-3"],["href","https://www.npmjs.com/package/@ng-select/ng-select","target","_blank",1,"block","hover:underline"],[1,"grid","grid-cols-1","gap-6","lg:grid-cols-2"],[1,"panel"],[1,"mb-5","flex","items-center","justify-between"],[1,"text-lg","font-semibold","dark:text-white-light"],["href","javascript:;",1,"font-semibold","hover:text-gray-400","dark:text-gray-400","dark:hover:text-gray-600",3,"click"],[1,"flex","items-center"],[1,"me-2"],[1,"mb-5"],[1,"custom-multiselect",3,"ngModelChange","items","ngModel","searchable","clearable"],[4,"ngIf"],["bindLabel","name","bindValue","name","placeholder","Select Option","groupBy","group_name",1,"custom-multiselect",3,"ngModelChange","items","ngModel","clearable","searchable"],["bindLabel","name","bindValue","name","placeholder","Select Option",1,"custom-multiselect",3,"ngModelChange","items","ngModel","clearable","searchable"],[1,"panel","lg:row-start-3"],["placeholder","Choose...",1,"custom-multiselect",3,"ngModelChange","items","ngModel","clearable","searchable"],["placeholder","Select an option",1,"custom-multiselect",3,"ngModelChange","items","ngModel","clearable"],["placeholder","Select an option",1,"custom-multiselect",3,"ngModelChange","items","ngModel","multiple","clearable"],["highlightAuto",`<!-- basic -->
<ng-select
    [items]="options"
    [(ngModel)]="input1"
    [searchable]="false"
    [clearable]="false"
    class="custom-multiselect"
>
</ng-select>

<!-- script -->
options = ['Orange', 'White', 'Purple'];
input1 = 'Orange';`],["highlightAuto",`<!-- nested -->
<ng-select
    [items]="options2"
    bindLabel="name"
    bindValue="name"
    [(ngModel)]="input2"
    [clearable]="false"
    [searchable]="false"
    placeholder="Select Option"
    groupBy="group_name"
    class="custom-multiselect"
>
</ng-select>

<!-- script -->
options2 = [
    { name: 'Orange', group_name: 'Group 1' },
    { name: 'White', group_name: 'Group 1' },
    { name: 'Purple', group_name: 'Group 1' },
    { name: 'Yellow', group_name: 'Group 2' },
    { name: 'Red', group_name: 'Group 2' },
    { name: 'Green', group_name: 'Group 2' },
    { name: 'Aqua', group_name: 'Group 3' },
    { name: 'Black', group_name: 'Group 3' },
    { name: 'Blue', group_name: 'Group 3' },
];
input2 =  'Orange';`],["highlightAuto",`<!-- disabling options -->
<ng-select
    [items]="options3"
    bindLabel="name"
    bindValue="name"
    [(ngModel)]="input3"
    [clearable]="false"
    [searchable]="false"
    placeholder="Select Option"
    class="custom-multiselect"
>
</ng-select>

<!-- script -->
options3 = [{ name: 'Orange' }, { name: 'White', disabled: true }, { name: 'Purple' }];
input3 = 'Orange';`],["highlightAuto",`<!-- placeholder -->
<ng-select
    [items]="options"
    [(ngModel)]="input4"
    [clearable]="false"
    [searchable]="false"
    placeholder="Choose..."
    class="custom-multiselect"
>
</ng-select>

<!-- script -->
options = ['Orange', 'White', 'Purple'];
input4 : string  | undefined;`],["highlightAuto",`<!-- searchable -->
<ng-select
    [items]="options"
    [(ngModel)]="input5"
    [clearable]="false"
    placeholder="Select an option"
    class="custom-multiselect"
>
</ng-select>

<!-- script -->
options = ['Orange', 'White', 'Purple'];
input5 : string  | undefined;`],["highlightAuto",`<!-- multiple -->
<ng-select
    [items]="options"
    [(ngModel)]="input6"
    [multiple]="true"
    [clearable]="false"
    placeholder="Select an option"
    class="custom-multiselect"
>
</ng-select>

<!-- script -->
options = ['Orange', 'White', 'Purple'];
input6 = [];`]],template:function(S,e){S&1&&(n(0,"div")(1,"ul",0)(2,"li")(3,"a",1),i(4,"Forms"),t()(),n(5,"li",2)(6,"span"),i(7,"Select2"),t()()(),n(8,"div",3)(9,"div",4)(10,"div",5),m(11,"icon-bell"),t(),n(12,"span",6),i(13,"Documentation: "),t(),n(14,"a",7),i(15),t()(),n(16,"div",8)(17,"div",9)(18,"div",10)(19,"h5",11),i(20,"Basic"),t(),n(21,"a",12),u("click",function(){return e.toggleCode("code1")}),n(22,"span",13),m(23,"icon-code",14),i(24," Code "),t()()(),n(25,"div",15)(26,"ng-select",16),f("ngModelChange",function(l){return h(e.input1,l)||(e.input1=l),l}),t()(),s(27,x,5,0,"ng-container",17),t(),n(28,"div",9)(29,"div",10)(30,"h5",11),i(31,"Nested"),t(),n(32,"a",12),u("click",function(){return e.toggleCode("code2")}),n(33,"span",13),m(34,"icon-code",14),i(35," Code "),t()()(),n(36,"div",15)(37,"ng-select",18),f("ngModelChange",function(l){return h(e.input2,l)||(e.input2=l),l}),t()(),s(38,B,5,0,"ng-container",17),t(),n(39,"div",9)(40,"div",10)(41,"h5",11),i(42,"Disabling options"),t(),n(43,"a",12),u("click",function(){return e.toggleCode("code3")}),n(44,"span",13),m(45,"icon-code",14),i(46," Code "),t()()(),n(47,"div",15)(48,"ng-select",19),f("ngModelChange",function(l){return h(e.input3,l)||(e.input3=l),l}),t()(),s(49,I,5,0,"ng-container",17),t(),n(50,"div",20)(51,"div",10)(52,"h5",11),i(53,"Placeholder"),t(),n(54,"a",12),u("click",function(){return e.toggleCode("code4")}),n(55,"span",13),m(56,"icon-code",14),i(57," Code "),t()()(),n(58,"div",15)(59,"ng-select",21),f("ngModelChange",function(l){return h(e.input4,l)||(e.input4=l),l}),t()(),s(60,L,5,0,"ng-container",17),t(),n(61,"div",9)(62,"div",10)(63,"h5",11),i(64,"Searchable"),t(),n(65,"a",12),u("click",function(){return e.toggleCode("code5")}),n(66,"span",13),m(67,"icon-code",14),i(68," Code "),t()()(),n(69,"div",15)(70,"ng-select",22),f("ngModelChange",function(l){return h(e.input5,l)||(e.input5=l),l}),t()(),s(71,N,5,0,"ng-container",17),t(),n(72,"div",9)(73,"div",10)(74,"h5",11),i(75,"Multiple select"),t(),n(76,"a",12),u("click",function(){return e.toggleCode("code6")}),n(77,"span",13),m(78,"icon-code",14),i(79," Code "),t()()(),n(80,"div",15)(81,"ng-select",23),f("ngModelChange",function(l){return h(e.input6,l)||(e.input6=l),l}),t()(),s(82,j,5,0,"ng-container",17),t()()()()),S&2&&(r(15),b(" ","https://www.npmjs.com/package/@ng-select/ng-select"," "),r(11),o("items",e.options),_("ngModel",e.input1),o("searchable",!1)("clearable",!1),r(),o("ngIf",e.codeArr.includes("code1")),r(10),o("items",e.options2),_("ngModel",e.input2),o("clearable",!1)("searchable",!1),r(),o("ngIf",e.codeArr.includes("code2")),r(10),o("items",e.options3),_("ngModel",e.input3),o("clearable",!1)("searchable",!1),r(),o("ngIf",e.codeArr.includes("code3")),r(10),o("items",e.options),_("ngModel",e.input4),o("clearable",!1)("searchable",!1),r(),o("ngIf",e.codeArr.includes("code4")),r(10),o("items",e.options),_("ngModel",e.input5),o("clearable",!1),r(),o("ngIf",e.codeArr.includes("code5")),r(10),o("items",e.options),_("ngModel",e.input6),o("multiple",!0)("clearable",!1),r(),o("ngIf",e.codeArr.includes("code6")))},dependencies:[M,y,w,E,v,T,O,A,G,k,W],encapsulation:2})};export{P as Select2Component};
