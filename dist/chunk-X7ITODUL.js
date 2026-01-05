import{a as P,b as z}from"./chunk-KTANDBRE.js";import{a as q}from"./chunk-OKTFGNWQ.js";import{a as Y}from"./chunk-Q7YZW75Y.js";import{a as B}from"./chunk-7A5NGOQG.js";import{b as G,c as Z}from"./chunk-FQ5NNIZB.js";import"./chunk-LXLIJ5ZK.js";import"./chunk-FHTSEW43.js";import{k as R,r as H}from"./chunk-DR26E5HF.js";import{Ba as D,Ea as M,Ia as I,Ob as m,Pb as o,Qb as s,Rb as d,Vb as S,Wb as _,_b as C,bb as u,da as A,gb as j,hb as O,ob as w,oc as a,tb as T,ub as N,vb as L,yb as E,zc as h}from"./chunk-DCDCP4BO.js";import"./chunk-GAL4ENT6.js";var b=function(){return b=Object.assign||function(i){for(var e,n=1,r=arguments.length;n<r;n++)for(var t in e=arguments[n])Object.prototype.hasOwnProperty.call(e,t)&&(i[t]=e[t]);return i},b.apply(this,arguments)},K=(function(){function i(e,n,r){var t=this;this.endVal=n,this.options=r,this.version="2.9.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(l){t.startTime||(t.startTime=l);var p=l-t.startTime;t.remaining=t.duration-p,t.useEasing?t.countDown?t.frameVal=t.startVal-t.easingFn(p,0,t.startVal-t.endVal,t.duration):t.frameVal=t.easingFn(p,t.startVal,t.endVal-t.startVal,t.duration):t.frameVal=t.startVal+(t.endVal-t.startVal)*(p/t.duration);var c=t.countDown?t.frameVal<t.endVal:t.frameVal>t.endVal;t.frameVal=c?t.endVal:t.frameVal,t.frameVal=Number(t.frameVal.toFixed(t.options.decimalPlaces)),t.printValue(t.frameVal),p<t.duration?t.rAF=requestAnimationFrame(t.count):t.finalEndVal!==null?t.update(t.finalEndVal):t.options.onCompleteCallback&&t.options.onCompleteCallback()},this.formatNumber=function(l){var p,c,x,f,Q=l<0?"-":"";p=Math.abs(l).toFixed(t.options.decimalPlaces);var V=(p+="").split(".");if(c=V[0],x=V.length>1?t.options.decimal+V[1]:"",t.options.useGrouping){f="";for(var F=3,y=0,v=0,U=c.length;v<U;++v)t.options.useIndianSeparators&&v===4&&(F=2,y=1),v!==0&&y%F==0&&(f=t.options.separator+f),y++,f=c[U-v-1]+f;c=f}return t.options.numerals&&t.options.numerals.length&&(c=c.replace(/[0-9]/g,function(k){return t.options.numerals[+k]}),x=x.replace(/[0-9]/g,function(k){return t.options.numerals[+k]})),Q+t.options.prefix+c+x+t.options.suffix},this.easeOutExpo=function(l,p,c,x){return c*(1-Math.pow(2,-10*l/x))*1024/1023+p},this.options=b(b({},this.defaults),r),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.el=typeof e=="string"?document.getElementById(e):e,n=n??this.parse(this.el.innerHTML),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(n),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,this.options.separator===""&&(this.options.useGrouping=!1),this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined",typeof window<"u"&&this.options.enableScrollSpy&&(this.error?console.error(this.error,e):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push(function(){return t.handleScroll(t)}),window.onscroll=function(){window.onScrollFns.forEach(function(l){return l()})},this.handleScroll(this)))}return i.prototype.handleScroll=function(e){if(e&&window&&!e.once){var n=window.innerHeight+window.scrollY,r=e.el.getBoundingClientRect(),t=r.top+window.pageYOffset,l=r.top+r.height+window.pageYOffset;l<n&&l>window.scrollY&&e.paused?(e.paused=!1,setTimeout(function(){return e.start()},e.options.scrollSpyDelay),e.options.scrollSpyOnce&&(e.once=!0)):(window.scrollY>l||t>n)&&!e.paused&&e.reset()}},i.prototype.determineDirectionAndSmartEasing=function(){var e=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>e;var n=e-this.startVal;if(Math.abs(n)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=e;var r=this.countDown?1:-1;this.endVal=e+r*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=e,this.finalEndVal=null;this.finalEndVal!==null?this.useEasing=!1:this.useEasing=this.options.useEasing},i.prototype.start=function(e){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),e&&(this.options.onCompleteCallback=e),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},i.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},i.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},i.prototype.update=function(e){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(e),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal==null&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},i.prototype.printValue=function(e){var n;if(this.el){var r=this.formattingFn(e);!((n=this.options.plugin)===null||n===void 0)&&n.render?this.options.plugin.render(this.el,r):this.el.tagName==="INPUT"?this.el.value=r:this.el.tagName==="text"||this.el.tagName==="tspan"?this.el.textContent=r:this.el.innerHTML=r}},i.prototype.ensureNumber=function(e){return typeof e=="number"&&!isNaN(e)},i.prototype.validateValue=function(e){var n=Number(e);return this.ensureNumber(n)?n:(this.error="[CountUp] invalid start or end value: ".concat(e),null)},i.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},i.prototype.parse=function(e){var n=function(p){return p.replace(/([.,'  ])/g,"\\$1")},r=n(this.options.separator),t=n(this.options.decimal),l=e.replace(new RegExp(r,"g"),"").replace(new RegExp(t,"g"),".");return parseFloat(l)},i})();var W=(()=>{class i{constructor(n,r,t){this.el=n,this.zone=r,this.platformId=t,this.options={},this.reanimateOnClick=!0,this.complete=new j}onClick(){this.reanimateOnClick&&this.animate()}ngOnChanges(n){if(!H(this.platformId))return;let{options:r,endVal:t}=n;this.countUp?(r?.currentValue!==void 0||t?.currentValue!==void 0)&&(r?.currentValue!==void 0?this.initAndRun():(this.options.startVal||(this.options.startVal=this.countUp.frameVal),this.zone.runOutsideAngular(()=>{this.countUp.update(this.endVal)}))):this.initAndRun()}animate(){this.zone.runOutsideAngular(()=>{this.countUp.reset(),this.countUp.start(()=>{this.zone.run(()=>{this.complete.emit()})})})}initAndRun(){this.zone.runOutsideAngular(()=>{this.countUp=new K(this.el.nativeElement,this.endVal,this.options),this.options.enableScrollSpy||this.animate()})}}return i.\u0275fac=function(n){return new(n||i)(w(M),w(O),w(I))},i.\u0275dir=L({type:i,selectors:[["","countUp",""]],hostBindings:function(n,r){n&1&&C("click",function(){return r.onClick()})},inputs:{endVal:[0,"countUp","endVal"],options:"options",reanimateOnClick:"reanimateOnClick"},outputs:{complete:"complete"},standalone:!1,features:[D]}),i})(),$=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=N({type:i}),i.\u0275inj=A({imports:[[]]}),i})();var g=()=>({startVal:0,duration:7});function et(i,e){i&1&&(S(0),o(1,"pre"),a(2,"                        "),d(3,"code",22),a(4,`
`),s(),_())}function nt(i,e){i&1&&(S(0),o(1,"pre"),a(2,"                        "),d(3,"code",23),a(4,`
`),s(),_())}var J=class i{codeArr=[];toggleCode=e=>{this.codeArr.includes(e)?this.codeArr=this.codeArr.filter(n=>n!=e):this.codeArr.push(e)};constructor(){}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=T({type:i,selectors:[["ng-component"]],decls:70,vars:20,consts:[[1,"flex","space-x-2","rtl:space-x-reverse"],["href","javascript:;",1,"text-primary","hover:underline"],[1,"before:content-['/']","ltr:before:mr-2","rtl:before:ml-2"],[1,"space-y-8","pt-5"],[1,"panel","flex","items-center","overflow-x-auto","whitespace-nowrap","p-3","text-primary"],[1,"rounded-full","bg-primary","p-1.5","text-white","ring-2","ring-primary/30","ltr:mr-3","rtl:ml-3"],[1,"ltr:mr-3","rtl:ml-3"],["href","https://www.npmjs.com/package/ngx-countup","target","_blank",1,"block","hover:underline"],[1,"grid","grid-cols-1","gap-6","xl:grid-cols-2"],[1,"panel"],[1,"mb-5","flex","items-center","justify-between"],[1,"text-lg","font-semibold","dark:text-white-light"],["href","javascript:;",1,"font-semibold","hover:text-gray-400","dark:text-gray-400","dark:hover:text-gray-600",3,"click"],[1,"flex","items-center"],[1,"me-2"],[1,"mx-auto","mb-5","grid","max-w-[900px]","grid-cols-3","justify-items-center","gap-3"],[1,"flex","h-[70px]","w-[70px]","flex-col","justify-center","rounded","border","border-[#e0e6ed]","shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)]","dark:border-[#1b2e4b]","sm:h-[100px]","sm:w-[100px]"],[1,"text-center","text-xl","text-primary","sm:text-3xl",3,"countUp","options"],[1,"mt-4","text-center","text-xs","font-semibold","text-[#3b3f5c]","dark:text-white-dark","sm:text-[15px]"],[4,"ngIf"],[1,"flex","h-[70px]","w-[70px]","flex-col","justify-center","rounded-full","border","border-[#e0e6ed]","shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)]","dark:border-[#1b2e4b]","sm:h-[100px]","sm:w-[100px]"],[1,"mx-auto","mb-2","text-primary","sm:h-6","sm:w-6"],["highlightAuto",`<!-- hours -->
<div class="mx-auto mb-5 grid max-w-[900px] grid-cols-3 justify-items-center gap-3">
    <div>
        <div
            class="flex h-[70px] w-[70px] flex-col justify-center rounded border border-[#e0e6ed] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] dark:border-[#1b2e4b] sm:h-[100px] sm:w-[100px]"
        >
            <div
                class="text-center text-xl text-primary sm:text-3xl"
                [countUp]="710"
                [options]="{startVal :0 ,duration: 7}"
            ></div>
        </div>
        <h4 class="mt-4 text-center text-xs font-semibold text-[#3b3f5c] dark:text-white-dark sm:text-[15px]">HOURS</h4>
    </div>
    <div>
        <div
            class="flex h-[70px] w-[70px] flex-col justify-center rounded border border-[#e0e6ed] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] dark:border-[#1b2e4b] sm:h-[100px] sm:w-[100px]"
        >
            <div
                class="text-center text-xl text-primary sm:text-3xl"
                [countUp]="915"
                [options]="{startVal :0 ,duration: 7}"
            ></div>
        </div>
        <h4 class="mt-4 text-center text-xs font-semibold text-[#3b3f5c] dark:text-white-dark sm:text-[15px]">TICKETS</h4>
    </div>
    <div>
        <div
            class="flex h-[70px] w-[70px] flex-col justify-center rounded border border-[#e0e6ed] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] dark:border-[#1b2e4b] sm:h-[100px] sm:w-[100px]"
        >
            <div
                class="text-center text-xl text-primary sm:text-3xl"
                [countUp]="580"
                [options]="{startVal :0 ,duration: 7}"
            ></div>
        </div>
        <h4 class="mt-4 text-center text-xs font-semibold text-[#3b3f5c] dark:text-white-dark sm:text-[15px]">CUSTOMERS</h4>
    </div>
</div>`],["highlightAuto",`<!-- clients -->
<div class="mx-auto mb-5 grid max-w-[900px] grid-cols-3 justify-items-center gap-3">
    <div>
        <div
            class="flex h-[70px] w-[70px] flex-col justify-center rounded-full border border-[#e0e6ed] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] dark:border-[#1b2e4b] sm:h-[100px] sm:w-[100px]"
        >
            <div
                class="text-center text-xl text-primary sm:text-3xl"
                [countUp]="105"
                [options]="{startVal :0 ,duration: 7}"
            ></div>
        </div>
        <h4 class="mt-4 text-center text-xs font-semibold text-[#3b3f5c] dark:text-white-dark sm:text-[15px]">
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="mx-auto mb-2 h-5 w-5 text-primary sm:h-6 sm:w-6"
            >
                <circle cx="9" cy="6" r="4" stroke="currentColor" stroke-width="1.5" />
                <path
                    opacity="0.5"
                    d="M12.5 4.3411C13.0375 3.53275 13.9565 3 15 3C16.6569 3 18 4.34315 18 6C18 7.65685 16.6569 9 15 9C13.9565 9 13.0375 8.46725 12.5 7.6589"
                    stroke="currentColor"
                    stroke-width="1.5"
                />
                <ellipse cx="9" cy="17" rx="7" ry="4" stroke="currentColor" stroke-width="1.5" />
                <path
                    opacity="0.5"
                    d="M18 14C19.7542 14.3847 21 15.3589 21 16.5C21 17.5293 19.9863 18.4229 18.5 18.8704"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                />
            </svg>
            Clients
        </h4>
    </div>
    <div>
        <div
            class="flex h-[70px] w-[70px] flex-col justify-center rounded-full border border-[#e0e6ed] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] dark:border-[#1b2e4b] sm:h-[100px] sm:w-[100px]"
        >
            <div
                class="text-center text-xl text-primary sm:text-3xl"
                [countUp]="300"
                [options]="{startVal :0 ,duration: 7}"
            ></div>
        </div>
        <h4 class="mt-4 text-center text-xs font-semibold text-[#3b3f5c] dark:text-white-dark sm:text-[15px]">
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="mx-auto mb-2 h-5 w-5 text-primary sm:h-6 sm:w-6"
            >
                <path
                    opacity="0.5"
                    d="M6.28571 19C3.91878 19 2 17.1038 2 14.7647C2 12.4256 3.91878 10.5294 6.28571 10.5294C6.56983 10.5294 6.8475 10.5567 7.11616 10.6089M14.381 8.02721C14.9767 7.81911 15.6178 7.70588 16.2857 7.70588C16.9404 7.70588 17.5693 7.81468 18.1551 8.01498M7.11616 10.6089C6.88706 9.9978 6.7619 9.33687 6.7619 8.64706C6.7619 5.52827 9.32028 3 12.4762 3C15.4159 3 17.8371 5.19371 18.1551 8.01498M7.11616 10.6089C7.68059 10.7184 8.20528 10.9374 8.66667 11.2426M18.1551 8.01498C20.393 8.78024 22 10.8811 22 13.3529C22 16.0599 20.0726 18.3221 17.5 18.8722"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                />
                <path
                    d="M12 22V16M12 22L14 20M12 22L10 20"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
            Downloads
        </h4>
    </div>
    <div>
        <div
            class="flex h-[70px] w-[70px] flex-col justify-center rounded-full border border-[#e0e6ed] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] dark:border-[#1b2e4b] sm:h-[100px] sm:w-[100px]"
        >
            <div
                class="text-center text-xl text-primary sm:text-3xl"
                [countUp]="58"
                [options]="{startVal :0 ,duration: 7}"
            ></div>
        </div>
        <h4 class="mt-4 text-center text-xs font-semibold text-[#3b3f5c] dark:text-white-dark sm:text-[15px]">
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="mx-auto mb-2 h-5 w-5 text-primary sm:h-6 sm:w-6"
            >
                <path
                    opacity="0.5"
                    d="M11.1459 7.02251C11.5259 6.34084 11.7159 6 12 6C12.2841 6 12.4741 6.34084 12.8541 7.02251L12.9524 7.19887C13.0603 7.39258 13.1143 7.48944 13.1985 7.55334C13.2827 7.61725 13.3875 7.64097 13.5972 7.68841L13.7881 7.73161C14.526 7.89857 14.895 7.98205 14.9828 8.26432C15.0706 8.54659 14.819 8.84072 14.316 9.42898L14.1858 9.58117C14.0429 9.74833 13.9714 9.83191 13.9392 9.93531C13.9071 10.0387 13.9179 10.1502 13.9395 10.3733L13.9592 10.5763C14.0352 11.3612 14.0733 11.7536 13.8435 11.9281C13.6136 12.1025 13.2682 11.9435 12.5773 11.6254L12.3986 11.5431C12.2022 11.4527 12.1041 11.4075 12 11.4075C11.8959 11.4075 11.7978 11.4527 11.6014 11.5431L11.4227 11.6254C10.7318 11.9435 10.3864 12.1025 10.1565 11.9281C9.92674 11.7536 9.96476 11.3612 10.0408 10.5763L10.0605 10.3733C10.0821 10.1502 10.0929 10.0387 10.0608 9.93531C10.0286 9.83191 9.95713 9.74833 9.81418 9.58117L9.68403 9.42898C9.18097 8.84072 8.92945 8.54659 9.01723 8.26432C9.10501 7.98205 9.47396 7.89857 10.2119 7.73161L10.4028 7.68841C10.6125 7.64097 10.7173 7.61725 10.8015 7.55334C10.8857 7.48944 10.9397 7.39258 11.0476 7.19887L11.1459 7.02251Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                />
                <path
                    d="M19 9C19 12.866 15.866 16 12 16C8.13401 16 5 12.866 5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                />
                <path
                    opacity="0.5"
                    d="M7.35111 15L6.71424 17.323C6.0859 19.6148 5.77173 20.7607 6.19097 21.3881C6.3379 21.6079 6.535 21.7844 6.76372 21.9008C7.41635 22.2331 8.42401 21.7081 10.4393 20.658C11.1099 20.3086 11.4452 20.1339 11.8014 20.0959C11.9335 20.0818 12.0665 20.0818 12.1986 20.0959C12.5548 20.1339 12.8901 20.3086 13.5607 20.658C15.576 21.7081 16.5837 22.2331 17.2363 21.9008C17.465 21.7844 17.6621 21.6079 17.809 21.3881C18.2283 20.7607 17.9141 19.6148 17.2858 17.323L16.6489 15"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                />
            </svg>
            Awards
        </h4>
    </div>
</div>`]],template:function(n,r){n&1&&(o(0,"div")(1,"ul",0)(2,"li")(3,"a",1),a(4,"Components"),s()(),o(5,"li",2)(6,"span"),a(7,"Counter"),s()()(),o(8,"div",3)(9,"div",4)(10,"div",5),d(11,"icon-bell"),s(),o(12,"span",6),a(13,"Documentation: "),s(),o(14,"a",7),a(15,"https://www.npmjs.com/package/ngx-countup"),s()(),o(16,"div",8)(17,"div",9)(18,"div",10)(19,"h5",11),a(20,"Simple Counter"),s(),o(21,"a",12),C("click",function(){return r.toggleCode("code1")}),o(22,"span",13),d(23,"icon-code",14),a(24," Code "),s()()(),o(25,"div",15)(26,"div")(27,"div",16),d(28,"div",17),s(),o(29,"h4",18),a(30,"HOURS"),s()(),o(31,"div")(32,"div",16),d(33,"div",17),s(),o(34,"h4",18),a(35,"TICKETS"),s()(),o(36,"div")(37,"div",16),d(38,"div",17),s(),o(39,"h4",18),a(40,"CUSTOMERS"),s()()(),E(41,et,5,0,"ng-container",19),s(),o(42,"div",9)(43,"div",10)(44,"h5",11),a(45,"With Icon"),s(),o(46,"a",12),C("click",function(){return r.toggleCode("code2")}),o(47,"span",13),d(48,"icon-code",14),a(49," Code "),s()()(),o(50,"div",15)(51,"div")(52,"div",20),d(53,"div",17),s(),o(54,"h4",18),d(55,"icon-users",21),a(56," Clients "),s()(),o(57,"div")(58,"div",20),d(59,"div",17),s(),o(60,"h4",18),d(61,"icon-cloud-download",21),a(62," Downloads "),s()(),o(63,"div")(64,"div",20),d(65,"div",17),s(),o(66,"h4",18),d(67,"icon-award",21),a(68," Awards "),s()()(),E(69,nt,5,0,"ng-container",19),s()()()()),n&2&&(u(28),m("countUp",710)("options",h(14,g)),u(5),m("countUp",915)("options",h(15,g)),u(5),m("countUp",580)("options",h(16,g)),u(3),m("ngIf",r.codeArr.includes("code1")),u(12),m("countUp",105)("options",h(17,g)),u(6),m("countUp",300)("options",h(18,g)),u(6),m("countUp",58)("options",h(19,g)),u(4),m("ngIf",r.codeArr.includes("code2")))},dependencies:[R,Z,G,$,W,B,Y,q,z,P],encapsulation:2})};export{J as CounterComponent};
