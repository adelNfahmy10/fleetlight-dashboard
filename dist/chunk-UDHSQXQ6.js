import{a as v}from"./chunk-Q7YZW75Y.js";import{b as w,c as g}from"./chunk-FQ5NNIZB.js";import"./chunk-LXLIJ5ZK.js";import"./chunk-FHTSEW43.js";import{k as b}from"./chunk-DR26E5HF.js";import{Ob as c,Pb as e,Qb as t,Rb as m,Vb as h,Wb as p,_b as u,bb as o,oc as n,pc as s,tb as f,yb as x}from"./chunk-DCDCP4BO.js";import"./chunk-GAL4ENT6.js";function y(a,r){a&1&&(h(0),e(1,"pre"),n(2,"                    "),m(3,"code",16),n(4,`
                `),t(),p())}function D(a,r){a&1&&(h(0),e(1,"pre"),n(2,"                    "),m(3,"code",17),n(4,`
                `),t(),p())}var _=class a{codeArr=[];toggleCode=r=>{this.codeArr.includes(r)?this.codeArr=this.codeArr.filter(l=>l!=r):this.codeArr.push(r)};constructor(){}timer1=null;demo1={days:null,hours:null,minutes:null,seconds:null};timer2=null;demo2={days:null,hours:null,minutes:null,seconds:null};ngAfterViewInit(){this.setTimerDemo1(),this.setTimerDemo2()}setTimerDemo1(){let r=new Date;r.setDate(r.getDate()+3);let l=r.getTime();this.timer1=setInterval(()=>{let i=new Date().getTime(),d=l-i;this.demo1.days=Math.floor(d/(1e3*60*60*24)),this.demo1.hours=Math.floor(d%(1e3*60*60*24)/(1e3*60*60)),this.demo1.minutes=Math.floor(d%(1e3*60*60)/(1e3*60)),this.demo1.seconds=Math.floor(d%(1e3*60)/1e3),d<0&&clearInterval(this.timer1)},500)}setTimerDemo2(){let r=new Date;r.setFullYear(r.getFullYear()+1);let l=r.getTime();this.timer2=setInterval(()=>{let i=new Date().getTime(),d=l-i;this.demo2.days=Math.floor(d/(1e3*60*60*24)),this.demo2.hours=Math.floor(d%(1e3*60*60*24)/(1e3*60*60)),this.demo2.minutes=Math.floor(d%(1e3*60*60)/(1e3*60)),this.demo2.seconds=Math.floor(d%(1e3*60)/1e3),d<0&&clearInterval(this.timer2)},500)}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=f({type:a,selectors:[["ng-component"]],decls:77,vars:10,consts:[[1,"flex","space-x-2","rtl:space-x-reverse"],["href","javascript:;",1,"text-primary","hover:underline"],[1,"before:content-['/']","ltr:before:mr-2","rtl:before:ml-2"],[1,"grid","grid-cols-1","gap-6","pt-5","xl:grid-cols-2"],[1,"panel"],[1,"mb-5","flex","items-center","justify-between"],[1,"text-lg","font-semibold","dark:text-white-light"],["href","javascript:;",1,"font-semibold","hover:text-gray-400","dark:text-gray-400","dark:hover:text-gray-600",3,"click"],[1,"flex","items-center"],[1,"me-2"],[1,"mb-5","grid","grid-cols-4","justify-items-center","gap-3"],[1,"flex","h-16","w-16","flex-col","justify-center","rounded","border","border-[#e0e6ed]","shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)]","dark:border-[#1b2e4b]","sm:h-[100px]","sm:w-[100px]"],[1,"text-center","text-xl","text-primary","sm:text-3xl"],[1,"mt-4","text-center","text-[15px]","font-semibold","text-[#3b3f5c]","dark:text-white-dark"],[4,"ngIf"],[1,"flex","h-16","w-16","flex-col","justify-center","rounded-full","border","border-[#e0e6ed]","shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)]","dark:border-[#1b2e4b]","sm:h-[100px]","sm:w-[100px]"],["highlightAuto",`<!-- simple countdown -->
<div class="mb-5 grid grid-cols-4 justify-items-center gap-3">
  <div>
    <div class="w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-[#e0e6ed] dark:border-[#1b2e4b] flex justify-center flex-col">
      <h1 class="text-primary sm:text-3xl text-xl text-center"> demo1.days </h1>
    </div>
    <h4 class="text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold">Days</h4>
  </div>
  <div>
    <div class="w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-[#e0e6ed] dark:border-[#1b2e4b] flex justify-center flex-col">
      <h1 class="text-primary sm:text-3xl text-xl text-center"> demo1.hours </h1>
    </div>
    <h4 class="text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold">Hours</h4>
  </div>
  <div>
    <div class="w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-[#e0e6ed] dark:border-[#1b2e4b] flex justify-center flex-col">
      <h1 class="text-primary sm:text-3xl text-xl text-center"> demo1.minutes </h1>
    </div>
    <h4 class="text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold">Mins</h4>
  </div>
  <div>
    <div class="w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-[#e0e6ed] dark:border-[#1b2e4b] flex justify-center flex-col">
      <h1 class="text-primary sm:text-3xl text-xl text-center"> demo1.seconds </h1>
    </div>
    <h4 class="text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold">Sec</h4>
  </div>
</div>

<!-- script -->
    timer1: any = null;
    demo1: any = {
        days: null,
        hours: null,
        minutes: null,
        seconds: null,
    };

    ngAfterViewInit() {
        this.setTimerDemo1();
    }

    setTimerDemo1() {
        let date = new Date();
        date.setDate(date.getDate() + 3);
        let countDownDate = date.getTime();

        this.timer1 = setInterval(() => {
            let now = new Date().getTime();

            let distance = countDownDate - now;

            this.demo1.days = Math.floor(distance / (1000 * 60 * 60 * 24));
            this.demo1.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            this.demo1.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            this.demo1.seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(this.timer1);
            }
        }, 500);
    }`],["highlightAuto",`
<!-- circle countdown -->
<div class="mb-5 grid grid-cols-4 justify-items-center gap-3">
  <div>
    <div class="w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded-full border border-[#e0e6ed] dark:border-[#1b2e4b] flex justify-center flex-col">
      <h1 class="text-primary sm:text-3xl text-xl text-center"> demo2.days </h1>
    </div>
    <h4 class="text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold">Days</h4>
  </div>
  <div>
    <div class="w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded-full border border-[#e0e6ed] dark:border-[#1b2e4b] flex justify-center flex-col">
      <h1 class="text-primary sm:text-3xl text-xl text-center"> demo2.hours </h1>
    </div>
    <h4 class="text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold">Hours</h4>
  </div>
  <div>
    <div class="w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded-full border border-[#e0e6ed] dark:border-[#1b2e4b] flex justify-center flex-col">
      <h1 class="text-primary sm:text-3xl text-xl text-center"> demo2.minutes </h1>
    </div>
    <h4 class="text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold">Mins</h4>
  </div>
  <div>
    <div class="w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded-full border border-[#e0e6ed] dark:border-[#1b2e4b] flex justify-center flex-col">
      <h1 class="text-primary sm:text-3xl text-xl text-center"> demo2.seconds </h1>
    </div>
    <h4 class="text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold">Sec</h4>
  </div>
</div>

<!-- script -->
    timer2: any = null;
    demo2: any = {
        days: null,
        hours: null,
        minutes: null,
        seconds: null,
    };

    ngAfterViewInit() {
        this.setTimerDemo2();
    }

    setTimerDemo2() {
        let date = new Date();
        date.setFullYear(date.getFullYear() + 1);
        let countDownDate = date.getTime();

        this.timer2 = setInterval(() => {
            let now = new Date().getTime();

            let distance = countDownDate - now;

            this.demo2.days = Math.floor(distance / (1000 * 60 * 60 * 24));
            this.demo2.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            this.demo2.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            this.demo2.seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(this.timer2);
            }
        }, 500);
    }`]],template:function(l,i){l&1&&(e(0,"div")(1,"ul",0)(2,"li")(3,"a",1),n(4,"Components"),t()(),e(5,"li",2)(6,"span"),n(7,"Countdown"),t()()(),e(8,"div",3)(9,"div",4)(10,"div",5)(11,"h5",6),n(12,"Simple Countdown"),t(),e(13,"a",7),u("click",function(){return i.toggleCode("code1")}),e(14,"span",8),m(15,"icon-code",9),n(16," Code "),t()()(),e(17,"div",10)(18,"div")(19,"div",11)(20,"h1",12),n(21),t()(),e(22,"h4",13),n(23,"Days"),t()(),e(24,"div")(25,"div",11)(26,"h1",12),n(27),t()(),e(28,"h4",13),n(29,"Hours"),t()(),e(30,"div")(31,"div",11)(32,"h1",12),n(33),t()(),e(34,"h4",13),n(35,"Mins"),t()(),e(36,"div")(37,"div",11)(38,"h1",12),n(39),t()(),e(40,"h4",13),n(41,"Sec"),t()()(),x(42,y,5,0,"ng-container",14),t(),e(43,"div",4)(44,"div",5)(45,"h5",6),n(46,"Circle Countdown"),t(),e(47,"a",7),u("click",function(){return i.toggleCode("code2")}),e(48,"span",8),m(49,"icon-code",9),n(50," Code "),t()()(),e(51,"div",10)(52,"div")(53,"div",15)(54,"h1",12),n(55),t()(),e(56,"h4",13),n(57,"Days"),t()(),e(58,"div")(59,"div",15)(60,"h1",12),n(61),t()(),e(62,"h4",13),n(63,"Hours"),t()(),e(64,"div")(65,"div",15)(66,"h1",12),n(67),t()(),e(68,"h4",13),n(69,"Mins"),t()(),e(70,"div")(71,"div",15)(72,"h1",12),n(73),t()(),e(74,"h4",13),n(75,"Sec"),t()()(),x(76,D,5,0,"ng-container",14),t()()()),l&2&&(o(21),s(i.demo1.days),o(6),s(i.demo1.hours),o(6),s(i.demo1.minutes),o(6),s(i.demo1.seconds),o(3),c("ngIf",i.codeArr.includes("code1")),o(13),s(i.demo2.days),o(6),s(i.demo2.hours),o(6),s(i.demo2.minutes),o(6),s(i.demo2.seconds),o(3),c("ngIf",i.codeArr.includes("code2")))},dependencies:[b,g,w,v],encapsulation:2})};export{_ as CountdownComponent};
