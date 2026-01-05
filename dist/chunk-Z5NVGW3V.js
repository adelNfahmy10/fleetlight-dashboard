import{a as E}from"./chunk-6NBUXXQA.js";import{a as x}from"./chunk-Q7YZW75Y.js";import{a as S}from"./chunk-7A5NGOQG.js";import{b as v,c as A}from"./chunk-FQ5NNIZB.js";import"./chunk-LXLIJ5ZK.js";import"./chunk-FHTSEW43.js";import{k as C}from"./chunk-DR26E5HF.js";import{Ob as p,Pb as e,Qb as t,Rb as r,Vb as g,Wb as f,_b as a,bb as u,oc as n,tb as _,yb as d}from"./chunk-DCDCP4BO.js";import{f as y,g as b}from"./chunk-GAL4ENT6.js";var c=y(E());function T(s,l){s&1&&(g(0),e(1,"pre"),n(2,"                        "),r(3,"code",30),n(4,`
`),t(),f())}function B(s,l){s&1&&(g(0),e(1,"pre"),n(2,"                        "),r(3,"code",31),n(4,`
`),t(),f())}function I(s,l){s&1&&(g(0),e(1,"pre"),n(2,"                        "),r(3,"code",32),n(4,`
`),t(),f())}function M(s,l){s&1&&(g(0),e(1,"pre"),n(2,"                        "),r(3,"code",33),n(4,`
`),t(),f())}function Y(s,l){s&1&&(g(0),e(1,"pre"),n(2,"                        "),r(3,"code",34),n(4,`
`),t(),f())}function D(s,l){s&1&&(g(0),e(1,"pre"),n(2,"                        "),r(3,"code",35),n(4,`
`),t(),f())}function L(s,l){s&1&&(g(0),e(1,"pre"),n(2,"                        "),r(3,"code",36),n(4,`
`),t(),f())}function j(s,l){s&1&&(g(0),e(1,"pre"),n(2,"                        "),r(3,"code",37),n(4,`
`),t(),f())}function q(s,l){s&1&&(g(0),e(1,"pre"),n(2,"                        "),r(3,"code",38),n(4,`
`),t(),f())}function P(s,l){s&1&&(g(0),e(1,"pre"),n(2,"                        "),r(3,"code",39),n(4,`
`),t(),f())}function W(s,l){s&1&&(g(0),e(1,"pre"),n(2,"                        "),r(3,"code",40),n(4,`
`),t(),f())}function H(s,l){s&1&&(g(0),e(1,"pre"),n(2,"                        "),r(3,"code",41),n(4,`
`),t(),f())}function O(s,l){s&1&&(g(0),e(1,"pre"),n(2,"                        "),r(3,"code",42),n(4,`
`),t(),f())}function N(s,l){s&1&&(g(0),e(1,"pre"),n(2,"                        "),r(3,"code",43),n(4,`
`),t(),f())}function R(s,l){s&1&&(g(0),e(1,"pre"),n(2,"                        "),r(3,"code",44),n(4,`
`),t(),f())}var k=class s{codeArr=[];toggleCode=l=>{this.codeArr.includes(l)?this.codeArr=this.codeArr.filter(m=>m!=l):this.codeArr.push(l)};showAlert(l){return b(this,null,function*(){if(l===1)c.default.fire({title:"Saved succesfully",padding:"2em",customClass:{popup:"sweet-alerts"}});else if(l===2)c.default.fire({icon:"success",title:"Good job!",text:"You clicked the!",padding:"2em",customClass:{popup:"sweet-alerts"}});else if(l===3){let m="https://api.ipify.org?format=json";c.default.fire({title:"Your public IP",confirmButtonText:"Show my public IP",text:"Your public IP will be received via AJAX request",showLoaderOnConfirm:!0,customClass:{popup:"sweet-alerts"},preConfirm:()=>fetch(m).then(i=>i.json()).then(i=>{c.default.fire({title:i.ip,customClass:{popup:"sweet-alerts"}})}).catch(()=>{c.default.fire({icon:"error",title:"Unable to get your public IP",customClass:{popup:"sweet-alerts"}})})})}else if(l===4)c.default.fire({icon:"question",title:"The Internet?",text:"That thing is still around?",padding:"2em",customClass:{popup:"sweet-alerts"}});else if(l===5){let m=["1","2","3"],i=c.default.mixin({confirmButtonText:"Next \u2192",showCancelButton:!0,progressSteps:m,input:"text",inputAttributes:{required:"true"},validationMessage:"This field is required",padding:"2em",customClass:{popup:"sweet-alerts"}}),o=[],w;for(w=0;w<m.length;){let h=yield i.fire({title:`Question ${m[w]}`,text:w==0?"Chaining swal modals is easy.":"",inputValue:o[w]||"",showCancelButton:w>0,currentProgressStep:w,customClass:{popup:"sweet-alerts"}});if(h.value)o[w]=h.value,w++;else if(h.dismiss===c.default.DismissReason.cancel.toString())w--;else break}w===m.length&&c.default.fire({title:"All done!",padding:"2em",html:"Your answers: <pre>"+JSON.stringify(o)+"</pre>",confirmButtonText:"Lovely!",customClass:{popup:"sweet-alerts"}})}else if(l===6)c.default.fire({title:"Custom animation with Animate.css",showClass:{popup:"animate__animated animate__flip"},hideClass:{popup:"animate__animated animate__fadeOutUp"},padding:"2em",customClass:{popup:"sweet-alerts"}});else if(l===7){let m;c.default.fire({title:"Auto close alert!",html:"I will close in <b></b> milliseconds.",timer:2e3,timerProgressBar:!0,customClass:{popup:"sweet-alerts"},didOpen:()=>{c.default.showLoading();let i=c.default.getHtmlContainer()?.querySelector("b");m=setInterval(()=>{i.textContent=c.default.getTimerLeft()},100)},willClose:()=>{clearInterval(m)}}).then(i=>{i.dismiss===c.default.DismissReason.timer.toString()&&console.log("I was closed by the timer")})}else if(l===8)c.default.fire({title:"Sweet!",text:"Modal with a custom image.",imageUrl:"/assets/images/custom-swal.svg",imageWidth:224,imageHeight:"auto",imageAlt:"Custom image",padding:"2em",customClass:{popup:"sweet-alerts"}});else if(l===9)c.default.fire({icon:"info",title:"<i>HTML</i> <u>example</u>",html:'You can use <b>bold text</b>, <a href="//github.com">links</a> and other HTML tags',showCloseButton:!0,showCancelButton:!0,focusConfirm:!1,confirmButtonText:'<i class="flaticon-checked-1"></i> Great!',confirmButtonAriaLabel:"Thumbs up, great!",cancelButtonText:'<i class="flaticon-cancel-circle"></i> Cancel',cancelButtonAriaLabel:"Thumbs down",padding:"2em",customClass:{popup:"sweet-alerts"}});else if(l===10)c.default.fire({icon:"warning",title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonText:"Delete",padding:"2em",customClass:{popup:"sweet-alerts"}}).then(m=>{m.value&&c.default.fire({title:"Deleted!",text:"Your file has been deleted.",icon:"success",customClass:{popup:"sweet-alerts"}})});else if(l===11){let m=c.default.mixin({buttonsStyling:!1,customClass:{popup:"sweet-alerts",confirmButton:"btn btn-secondary",cancelButton:"btn btn-dark ltr:mr-3 rtl:ml-3"}});m.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",cancelButtonText:"No, cancel!",reverseButtons:!0,padding:"2em"}).then(i=>{i.value?m.fire("Deleted!","Your file has been deleted.","success"):i.dismiss===c.default.DismissReason.cancel.toString()&&m.fire("Cancelled","Your imaginary file is safe :)","error")})}else l===12?c.default.fire({title:"Custom width, padding, background.",width:600,padding:"7em",customClass:{popup:"background-modal sweet-alerts"},background:"#fff url(/assets/images/sweet-bg.jpg) no-repeat 100% 100%"}):l===13?c.default.fire({icon:"error",title:"Oops...",text:"Something went wrong!",footer:'<a href="javascript:;">Why do I have this issue?</a>',padding:"2em",customClass:{popup:"sweet-alerts"}}):l===14?c.default.fire({title:"\u0647\u0644 \u062A\u0631\u064A\u062F \u0627\u0644\u0627\u0633\u062A\u0645\u0631\u0627\u0631\u061F",confirmButtonText:"\u0646\u0639\u0645",cancelButtonText:"\u0644\u0627",showCancelButton:!0,showCloseButton:!0,padding:"2em",customClass:{popup:"sweet-alerts"}}):l===15&&c.default.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3}).fire({icon:"success",title:"Signed in successfully",padding:"10px 20px"})})}constructor(){}static \u0275fac=function(m){return new(m||s)};static \u0275cmp=_({type:s,selectors:[["ng-component"]],decls:218,vars:15,consts:[[1,"flex","space-x-2","rtl:space-x-reverse"],["href","javascript:;",1,"text-primary","hover:underline"],[1,"before:content-['/']","ltr:before:mr-2","rtl:before:ml-2"],[1,"sweet-alerts","space-y-8","pt-5"],[1,"panel","flex","items-center","overflow-x-auto","whitespace-nowrap","p-3","text-primary"],[1,"rounded-full","bg-primary","p-1.5","text-white","ring-2","ring-primary/30","ltr:mr-3","rtl:ml-3"],[1,"ltr:mr-3","rtl:ml-3"],["href","https://www.npmjs.com/package/sweetalert2","target","_blank",1,"block","hover:underline"],[1,"grid","grid-cols-1","gap-6","lg:grid-cols-2"],[1,"panel"],[1,"mb-5","flex","items-center","justify-between"],[1,"text-lg","font-semibold","dark:text-white-light"],["href","javascript:;",1,"font-semibold","hover:text-gray-400","dark:text-gray-400","dark:hover:text-gray-600",3,"click"],[1,"flex","items-center"],[1,"me-2"],[1,"mb-5"],[1,"flex","items-center","justify-center"],["type","button",1,"btn","btn-primary",3,"click"],[4,"ngIf"],["type","button",1,"btn","btn-secondary",3,"click"],["type","button",1,"btn","btn-success",3,"click"],["type","button",1,"btn","btn-danger",3,"click"],["type","button",1,"btn","btn-warning",3,"click"],["type","button",1,"btn","btn-info",3,"click"],[1,"fixed","inset-0","z-[999]","hidden","bg-[black]/60","px-4","transition-all","duration-300"],[1,"panel","absolute","left-1/2","top-1/2","w-11/12","-translate-x-1/2","-translate-y-1/2","text-center","sm:w-[480px]"],[1,"mb-5","text-2xl","font-bold","text-[#3b3f5c]","dark:text-white-light"],["type","button",1,"btn","btn-info"],["type","button",1,"btn","btn-dark",3,"click"],["id","rtl-container",1,"flex","items-center","justify-center"],["highlightAuto",`<!-- basic message -->
<button type="button" class="btn btn-primary" (click)="showAlert()">Basic message</button>

<!-- script -->
    async showAlert() {
        Swal.fire({
            title: 'Saved succesfully',
            padding: '2em',
            customClass: 'sweet-alerts',
        });
    }`],["highlightAuto",`<!-- success message -->
<button type="button" class="btn btn-secondary" (click)="showAlert()">Success message!</button>

<!-- script -->
    async showAlert() {
        Swal.fire({
            icon: 'success',
            title: 'Good job!',
            text: 'You clicked the!',
            padding: '2em',
            customClass: 'sweet-alerts',
        });
    }`],["highlightAuto",`<!-- dynamic queue -->
<button type="button" class="btn btn-success" (click)="showAlert()">Dynamic queue</button>

<!-- script -->
    async showAlert() {
        const ipAPI = 'https://api.ipify.org?format=json';
        Swal.fire({
            title: 'Your public IP',
            confirmButtonText: 'Show my public IP',
            text: 'Your public IP will be received ' + 'via AJAX request',
            showLoaderOnConfirm: true,
            customClass: 'sweet-alerts',
            preConfirm: () => {
                return fetch(ipAPI)
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {
                        Swal.fire({
                            title: data.ip,
                            customClass: 'sweet-alerts',
                        });
                    })
                    .catch(() => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Unable to get your public IP',
                            customClass: 'sweet-alerts',
                        });
                    });
            },
        });
    }`],["highlightAuto",`<!-- success message -->
<button type="button" class="btn btn-danger" (click)="showAlert()">Title & text</button>

<!-- script -->
    async showAlert() {
        Swal.fire({
            icon: 'question',
            title: 'The Internet?',
            text: 'That thing is still around?',
            padding: '2em',
            customClass: 'sweet-alerts',
        });
    }`],["highlightAuto",`<!-- success message -->
<button type="button" class="btn btn-warning" (click)="showAlert()">Chaining modals (queue)</button>

<!-- script -->
    async showAlert() {
        const steps = ['1', '2', '3'];
        const swalQueueStep = Swal.mixin({
            confirmButtonText: 'Next \u2192',
            showCancelButton: true,
            progressSteps: steps,
            input: 'text',
            inputAttributes: {
                required: true,
            },
            validationMessage: 'This field is required',
            padding: '2em',
            customClass: 'sweet-alerts',
        });

        const values = [];
        let currentStep;

        for (currentStep = 0; currentStep < steps.length;) {
            const result = await swalQueueStep.fire({
                title: \`Question \${steps[currentStep]}\`,
                text: currentStep == 0 ? 'Chaining swal modals is easy.' : '',
                inputValue: values[currentStep],
                showCancelButton: currentStep > 0,
                currentProgressStep: currentStep,
                customClass: 'sweet-alerts',
            });
            if (result.value) {
                values[currentStep] = result.value;
                currentStep++;
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                currentStep--;
            } else {
                break;
            }
        }

        if (currentStep === steps.length) {
            Swal.fire({
                title: 'All done!',
                padding: '2em',
                html: 'Your answers: <pre>' + JSON.stringify(values) + '</pre>',
                confirmButtonText: 'Lovely!',
                customClass: 'sweet-alerts',
            });
        }
    }`],["highlightAuto",`<!-- success message -->
<button type="button" class="btn btn-info" (click)="showAlert()">Custom animation</button>

<!-- script -->
    async showAlert() {
        Swal.fire({
            title: 'Custom animation with Animate.css',
            animation: false,
            showClass: {
                popup: 'animate__animated animate__flip'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            padding: '2em',
            customClass: 'sweet-alerts',
        });
    }`],["highlightAuto",`<!-- success message -->
<button type="button" class="btn btn-primary" (click)="showAlert()">Message timer</button>

<!-- script -->
    async showAlert() {
        let timerInterval;

        Swal.fire({
            title: 'Auto close alert!',
            html: 'I will close in <b></b> milliseconds.',
            timer: 2000,
            timerProgressBar: true,
            customClass: 'sweet-alerts',
            didOpen: () => {
                Swal.showLoading();
                const b = Swal.getHtmlContainer().querySelector('b');
                timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft();
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            },
        }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer');
            }
        });
    }`],["highlightAuto",`<!-- success message -->
<button type="button" class="btn btn-secondary" (click)="showAlert()">Message with custom image</button>

<!-- script -->
    async showAlert() {
        Swal.fire({
            title: 'Sweet!',
            text: 'Modal with a custom image.',
            imageUrl: ('/assets/images/thumbs-up.jpg'),
            imageWidth: 224,
            imageHeight: 200,
            imageAlt: 'Custom image',
            animation: false,
            padding: '2em',
            customClass: 'sweet-alerts',
        });
    }`],["highlightAuto",`<!-- success message -->
<button type="button" class="btn btn-danger" (click)="showAlert()">Custom Description & buttons</button>

<!-- script -->
    async showAlert() {
        Swal.fire({
            icon: 'info',
            title: '<i>HTML</i> <u>example</u>',
            html: 'You can use <b>bold text</b>, ' + '<a href="//github.com">links</a> ' + 'and other HTML tags',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: '<i class="flaticon-checked-1"></i> Great!',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            cancelButtonText: '<i class="flaticon-cancel-circle"></i> Cancel',
            cancelButtonAriaLabel: 'Thumbs down',
            padding: '2em',
            customClass: 'sweet-alerts',
        });
    }`],["highlightAuto",`<!-- success message -->
<button type="button" class="btn btn-success" (click)="showAlert()">Confirm</button>

<!-- script -->
    async showAlert() {
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: 'Delete',
            padding: '2em',
            customClass: 'sweet-alerts',
        }).then((result) => {
            if (result.value) {
                Swal.fire({ title: 'Deleted!', text: 'Your file has been deleted.', icon: 'success', customClass: 'sweet-alerts' });
            }
        });
    }`],["highlightAuto",`<!-- success message -->
<button type="button" class="btn btn-warning" (click)="showAlert()">Addition else for "Cancel".</button>

<!-- script -->
    async showAlert() {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                popup: 'sweet-alerts',
                confirmButton: 'btn btn-secondary',
                cancelButton: 'btn btn-dark ltr:mr-3 rtl:ml-3',
            },
            buttonsStyling: false,
        });
        swalWithBootstrapButtons
        .fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true,
            padding: '2em',
        })
        .then((result) => {
            if (result.value) {
                swalWithBootstrapButtons.fire('Deleted!', 'Your file has been deleted.', 'success');
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                swalWithBootstrapButtons.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
            }
        });
    }`],["highlightAuto",`<!-- success message -->
<button type="button" class="btn btn-info" (click)="showAlert()">Custom Message</button>

<!-- script -->
    async showAlert() {
        Swal.fire({
            title: 'Custom width, padding, background.',
            width: 600,
            padding: '7em',
            customClass: 'background-modal sweet-alerts',
            background: '#fff url(' + ('/assets/images/sweet-bg.jpg') + ') no-repeat 100% 100%',
        });
    }`],["highlightAuto",`<!-- success message -->
<button type="button" class="btn btn-dark" (click)="showAlert()">With Footer</button>

<!-- script -->
    async showAlert() {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="javascript:;">Why do I have this issue?</a>',
            padding: '2em',
            customClass: 'sweet-alerts',
        });
    }`],["highlightAuto",`<!-- success message -->
<button type="button" class="btn btn-primary" (click)="showAlert()">RTL</button>

<!-- script -->
    async showAlert() {
        Swal.fire({
            title: '\u0647\u0644 \u062A\u0631\u064A\u062F \u0627\u0644\u0627\u0633\u062A\u0645\u0631\u0627\u0631\u061F',
            confirmButtonText: '\u0646\u0639\u0645',
            cancelButtonText: '\u0644\u0627',
            showCancelButton: true,
            showCloseButton: true,
            padding: '2em',
            customClass: 'sweet-alerts',
        });
    }`],["highlightAuto",`<!-- success message -->
<button type="button" class="btn btn-secondary" (click)="showAlert()">Mixin</button>

<!-- script -->
    async showAlert() {
        const toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            padding: '2em',
            customClass: 'sweet-alerts',
        });
        toast.fire({
            icon: 'success',
            title: 'Signed in successfully',
            padding: '2em',
            customClass: 'sweet-alerts',
        });
    }`]],template:function(m,i){m&1&&(e(0,"div")(1,"ul",0)(2,"li")(3,"a",1),n(4,"Components"),t()(),e(5,"li",2)(6,"span"),n(7,"Sweet Alerts"),t()()(),e(8,"div",3)(9,"div",4)(10,"div",5),r(11,"icon-bell"),t(),e(12,"span",6),n(13,"Documentation: "),t(),e(14,"a",7),n(15,"https://www.npmjs.com/package/sweetalert2"),t()(),e(16,"div",8)(17,"div",9)(18,"div",10)(19,"h5",11),n(20,"Basic message"),t(),e(21,"a",12),a("click",function(){return i.toggleCode("code1")}),e(22,"span",13),r(23,"icon-code",14),n(24," Code "),t()()(),e(25,"div",15)(26,"div",16)(27,"button",17),a("click",function(){return i.showAlert(1)}),n(28,"Basic message"),t()()(),d(29,T,5,0,"ng-container",18),t(),e(30,"div",9)(31,"div",10)(32,"h5",11),n(33,"Success message"),t(),e(34,"a",12),a("click",function(){return i.toggleCode("code2")}),e(35,"span",13),r(36,"icon-code",14),n(37," Code "),t()()(),e(38,"div",15)(39,"div",16)(40,"button",19),a("click",function(){return i.showAlert(2)}),n(41,"Success message!"),t()()(),d(42,B,5,0,"ng-container",18),t(),e(43,"div",9)(44,"div",10)(45,"h5",11),n(46,"Dynamic queue"),t(),e(47,"a",12),a("click",function(){return i.toggleCode("code3")}),e(48,"span",13),r(49,"icon-code",14),n(50," Code "),t()()(),e(51,"div",15)(52,"div",16)(53,"button",20),a("click",function(){return i.showAlert(3)}),n(54,"Dynamic queue"),t()()(),d(55,I,5,0,"ng-container",18),t(),e(56,"div",9)(57,"div",10)(58,"h5",11),n(59,"A title with a text under"),t(),e(60,"a",12),a("click",function(){return i.toggleCode("code5")}),e(61,"span",13),r(62,"icon-code",14),n(63," Code "),t()()(),e(64,"div",15)(65,"div",16)(66,"button",21),a("click",function(){return i.showAlert(4)}),n(67,"Title & text"),t()()(),d(68,M,5,0,"ng-container",18),t(),e(69,"div",9)(70,"div",10)(71,"h5",11),n(72,"Chaining modals (queue)"),t(),e(73,"a",12),a("click",function(){return i.toggleCode("code6")}),e(74,"span",13),r(75,"icon-code",14),n(76," Code "),t()()(),e(77,"div",15)(78,"div",16)(79,"button",22),a("click",function(){return i.showAlert(5)}),n(80,"Chaining modals (queue)"),t()()(),d(81,Y,5,0,"ng-container",18),t(),e(82,"div",9)(83,"div",10)(84,"h5",11),n(85,"Custom animation"),t(),e(86,"a",12),a("click",function(){return i.toggleCode("code7")}),e(87,"span",13),r(88,"icon-code",14),n(89," Code "),t()()(),e(90,"div",15)(91,"div",16)(92,"button",23),a("click",function(){return i.showAlert(6)}),n(93,"Custom animation"),t()(),e(94,"div",24)(95,"div",25)(96,"h3",26),n(97,"Custom animation with Animate.css"),t(),e(98,"button",27),n(99,"Ok"),t()()()(),d(100,D,5,0,"ng-container",18),t(),e(101,"div",9)(102,"div",10)(103,"h5",11),n(104,"Message with auto close timer"),t(),e(105,"a",12),a("click",function(){return i.toggleCode("code8")}),e(106,"span",13),r(107,"icon-code",14),n(108," Code "),t()()(),e(109,"div",15)(110,"div",16)(111,"button",17),a("click",function(){return i.showAlert(7)}),n(112,"Message timer"),t()()(),d(113,L,5,0,"ng-container",18),t(),e(114,"div",9)(115,"div",10)(116,"h5",11),n(117,"Message with custom image"),t(),e(118,"a",12),a("click",function(){return i.toggleCode("code9")}),e(119,"span",13),r(120,"icon-code",14),n(121," Code "),t()()(),e(122,"div",15)(123,"div",16)(124,"button",19),a("click",function(){return i.showAlert(8)}),n(125,"Message with custom image"),t()()(),d(126,j,5,0,"ng-container",18),t(),e(127,"div",9)(128,"div",10)(129,"h5",11),n(130,"Custom HTML description and buttons"),t(),e(131,"a",12),a("click",function(){return i.toggleCode("code10")}),e(132,"span",13),r(133,"icon-code",14),n(134," Code "),t()()(),e(135,"div",15)(136,"div",16)(137,"button",21),a("click",function(){return i.showAlert(9)}),n(138,"Custom Description & buttons"),t()()(),d(139,q,5,0,"ng-container",18),t(),e(140,"div",9)(141,"div",10)(142,"h5",11),n(143,'Warning message, with "Confirm" button'),t(),e(144,"a",12),a("click",function(){return i.toggleCode("code11")}),e(145,"span",13),r(146,"icon-code",14),n(147," Code "),t()()(),e(148,"div",15)(149,"div",16)(150,"button",20),a("click",function(){return i.showAlert(10)}),n(151,"Confirm"),t()()(),d(152,P,5,0,"ng-container",18),t(),e(153,"div",9)(154,"div",10)(155,"h5",11),n(156,'Execute something else for "Cancel".'),t(),e(157,"a",12),a("click",function(){return i.toggleCode("code12")}),e(158,"span",13),r(159,"icon-code",14),n(160," Code "),t()()(),e(161,"div",15)(162,"div",16)(163,"button",22),a("click",function(){return i.showAlert(11)}),n(164,'Addition else for "Cancel".'),t()()(),d(165,W,5,0,"ng-container",18),t(),e(166,"div",9)(167,"div",10)(168,"h5",11),n(169,"A message with custom width, padding and background"),t(),e(170,"a",12),a("click",function(){return i.toggleCode("code13")}),e(171,"span",13),r(172,"icon-code",14),n(173," Code "),t()()(),e(174,"div",15)(175,"div",16)(176,"button",23),a("click",function(){return i.showAlert(12)}),n(177,"Custom Message"),t()()(),d(178,H,5,0,"ng-container",18),t(),e(179,"div",9)(180,"div",10)(181,"h5",11),n(182,"With Footer"),t(),e(183,"a",12),a("click",function(){return i.toggleCode("code14")}),e(184,"span",13),r(185,"icon-code",14),n(186," Code "),t()()(),e(187,"div",15)(188,"div",16)(189,"button",28),a("click",function(){return i.showAlert(13)}),n(190,"With Footer"),t()()(),d(191,O,5,0,"ng-container",18),t(),e(192,"div",9)(193,"div",10)(194,"h5",11),n(195,"RTL support"),t(),e(196,"a",12),a("click",function(){return i.toggleCode("code15")}),e(197,"span",13),r(198,"icon-code",14),n(199," Code "),t()()(),e(200,"div",15)(201,"div",29)(202,"button",17),a("click",function(){return i.showAlert(14)}),n(203,"RTL"),t()()(),d(204,N,5,0,"ng-container",18),t(),e(205,"div",9)(206,"div",10)(207,"h5",11),n(208,"Mixin"),t(),e(209,"a",12),a("click",function(){return i.toggleCode("code16")}),e(210,"span",13),r(211,"icon-code",14),n(212," Code "),t()()(),e(213,"div",15)(214,"div",16)(215,"button",19),a("click",function(){return i.showAlert(15)}),n(216,"Mixin"),t()()(),d(217,R,5,0,"ng-container",18),t()()()()),m&2&&(u(29),p("ngIf",i.codeArr.includes("code1")),u(13),p("ngIf",i.codeArr.includes("code2")),u(13),p("ngIf",i.codeArr.includes("code3")),u(13),p("ngIf",i.codeArr.includes("code5")),u(13),p("ngIf",i.codeArr.includes("code6")),u(19),p("ngIf",i.codeArr.includes("code7")),u(13),p("ngIf",i.codeArr.includes("code8")),u(13),p("ngIf",i.codeArr.includes("code9")),u(13),p("ngIf",i.codeArr.includes("code10")),u(13),p("ngIf",i.codeArr.includes("code11")),u(13),p("ngIf",i.codeArr.includes("code12")),u(13),p("ngIf",i.codeArr.includes("code13")),u(13),p("ngIf",i.codeArr.includes("code14")),u(13),p("ngIf",i.codeArr.includes("code15")),u(13),p("ngIf",i.codeArr.includes("code16")))},dependencies:[C,A,v,S,x],encapsulation:2})};export{k as SweetalertComponent};
