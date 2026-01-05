import{a as w}from"./chunk-Q7YZW75Y.js";import{a as _}from"./chunk-7A5NGOQG.js";import{a as v}from"./chunk-MZKPUBTN.js";import{b as A,c as E}from"./chunk-FQ5NNIZB.js";import{e as S}from"./chunk-LIHCRBBD.js";import{a as y}from"./chunk-H5QMWZQA.js";import"./chunk-E5DRCL7G.js";import"./chunk-LXLIJ5ZK.js";import"./chunk-FHTSEW43.js";import{k,n as x}from"./chunk-DR26E5HF.js";import{Ob as d,Pb as t,Qb as n,Rb as i,Vb as m,Wb as c,_b as C,bb as s,ob as u,oc as r,tb as f,yb as p}from"./chunk-DCDCP4BO.js";import{g}from"./chunk-GAL4ENT6.js";function B(o,a){o&1&&(m(0),t(1,"pre"),r(2," "),i(3,"code",29),r(4," "),n(),c())}function z(o,a){o&1&&(m(0),t(1,"pre"),r(2," "),i(3,"code",30),r(4," "),n(),c())}function L(o,a){o&1&&(m(0),t(1,"pre"),r(2," "),i(3,"code",31),r(4," "),n(),c())}function R(o,a){o&1&&(m(0),t(1,"pre"),r(2," "),i(3,"code",32),r(4," "),n(),c())}function I(o,a){o&1&&(m(0),t(1,"pre"),r(2," "),i(3,"code",33),r(4," "),n(),c())}function J(o,a){o&1&&(m(0),t(1,"pre"),r(2," "),i(3,"code",34),r(4," "),n(),c())}function F(o,a){o&1&&(m(0),t(1,"pre"),r(2," "),i(3,"code",35),r(4," "),n(),c())}function G(o,a){o&1&&(m(0),t(1,"pre"),r(2," "),i(3,"code",36),r(4," "),n(),c())}function X(o,a){o&1&&(m(0),t(1,"pre"),r(2," "),i(3,"code",37),r(4," "),n(),c())}function P(o,a){o&1&&(m(0),t(1,"pre"),r(2," "),i(3,"code",38),r(4," "),n(),c())}function j(o,a){o&1&&(m(0),t(1,"pre"),r(2," "),i(3,"code",39),r(4," "),n(),c())}function N(o,a){o&1&&(m(0),t(1,"pre"),r(2," "),i(3,"code",40),r(4," "),n(),c())}var T=class o{constructor(a){this.storeData=a;this.initStore(),this.isLoading=!1}codeArr=[];toggleCode=a=>{this.codeArr.includes(a)?this.codeArr=this.codeArr.filter(l=>l!=a):this.codeArr.push(a)};store;lineChart;areaChart;columnChart;simpleColumnStacked;barChart;mixedChart;radarChart;pieChart;donutChart;polarAreaChart;radialBarChart;bubbleChart;isLoading=!0;initStore(){return g(this,null,function*(){this.storeData.select(a=>a.index).subscribe(a=>{let l=this.store?.theme!==a?.theme,e=this.store?.layout!==a?.layout,h=this.store?.menu!==a?.menu,b=this.store?.sidebar!==a?.sidebar;this.store=a,(l||e||h||b)&&(this.isLoading||l?this.initCharts():setTimeout(()=>{this.initCharts()},300))})})}initCharts(){let a=!!(this.store.theme==="dark"||this.store.isDarkMode),l=this.store.rtlClass==="rtl";this.lineChart={series:[{name:"Sales",data:[45,55,75,25,45,110]}],chart:{height:300,type:"line",toolbar:!1},colors:["#4361ee"],tooltip:{marker:!1,y:{formatter(e){return"$"+e}},theme:a?"dark":"light"},stroke:{width:2,curve:"smooth"},xaxis:{categories:["Jan","Feb","Mar","Apr","May","June"],axisBorder:{color:a?"#191e3a":"#e0e6ed"}},yaxis:{opposite:!!l,labels:{offsetX:l?-20:0}},grid:{borderColor:a?"#191e3a":"#e0e6ed"}},this.areaChart={series:[{name:"Income",data:[16800,16800,15500,17800,15500,17e3,19e3,16e3,15e3,17e3,14e3,17e3]}],chart:{type:"area",height:300,zoom:{enabled:!1},toolbar:{show:!1}},colors:["#805dca"],dataLabels:{enabled:!1},stroke:{width:2,curve:"smooth"},xaxis:{axisBorder:{color:a?"#191e3a":"#e0e6ed"}},yaxis:{opposite:!!l,labels:{offsetX:l?-40:0}},labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],legend:{horizontalAlign:"left"},grid:{borderColor:a?"#191e3a":"#e0e6ed"},tooltip:{theme:a?"dark":"light"}},this.columnChart={series:[{name:"Net Profit",data:[44,55,57,56,61,58,63,60,66]},{name:"Revenue",data:[76,85,101,98,87,105,91,114,94]}],chart:{height:300,type:"bar",zoom:{enabled:!1},toolbar:{show:!1}},colors:["#805dca","#e7515a"],dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},plotOptions:{bar:{horizontal:!1,columnWidth:"55%",endingShape:"rounded"}},grid:{borderColor:a?"#191e3a":"#e0e6ed"},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"],axisBorder:{color:a?"#191e3a":"#e0e6ed"}},yaxis:{opposite:!!l,labels:{offsetX:l?-10:0}},tooltip:{theme:a?"dark":"light",y:{formatter:function(e){return e}}}},this.simpleColumnStacked={series:[{name:"PRODUCT A",data:[44,55,41,67,22,43]},{name:"PRODUCT B",data:[13,23,20,8,13,27]}],chart:{height:300,type:"bar",stacked:!0,zoom:{enabled:!1},toolbar:{show:!1}},colors:["#2196f3","#3b3f5c"],responsive:[{breakpoint:480,options:{legend:{position:"bottom",offsetX:-10,offsetY:5}}}],plotOptions:{bar:{horizontal:!1}},xaxis:{type:"datetime",categories:["01/01/2011 GMT","01/02/2011 GMT","01/03/2011 GMT","01/04/2011 GMT","01/05/2011 GMT","01/06/2011 GMT"],axisBorder:{color:a?"#191e3a":"#e0e6ed"}},yaxis:{opposite:!!l,labels:{offsetX:l?-20:0}},grid:{borderColor:a?"#191e3a":"#e0e6ed"},legend:{position:"right",offsetY:40},tooltip:{theme:a?"dark":"light"},fill:{opacity:.8}},this.barChart={series:[{name:"Sales",data:[44,55,41,67,22,43,21,70]}],chart:{height:300,type:"bar",zoom:{enabled:!1},toolbar:{show:!1}},dataLabels:{enabled:!1},stroke:{show:!0,width:1},colors:["#4361ee"],xaxis:{categories:["Sun","Mon","Tue","Wed","Thur","Fri","Sat"],axisBorder:{color:a?"#191e3a":"#e0e6ed"}},yaxis:{opposite:!!l,reversed:!!l},grid:{borderColor:a?"#191e3a":"#e0e6ed"},plotOptions:{bar:{horizontal:!0}},fill:{opacity:.8}},this.mixedChart={series:[{name:"TEAM A",type:"column",data:[23,11,22,27,13,22,37,21,44,22,30]},{name:"TEAM B",type:"area",data:[44,55,41,67,22,43,21,41,56,27,43]},{name:"TEAM C",type:"line",data:[30,25,36,30,45,35,64,52,59,36,39]}],chart:{height:300,zoom:{enabled:!1},toolbar:{show:!1}},colors:["#2196f3","#00ab55","#4361ee"],stroke:{width:[0,2,2],curve:"smooth"},plotOptions:{bar:{columnWidth:"50%"}},fill:{opacity:[1,.25,1]},labels:["01/01/2022","02/01/2022","03/01/2022","04/01/2022","05/01/2022","06/01/2022","07/01/2022","08/01/2022","09/01/2022","10/01/2022","11/01/2022"],markers:{size:0},xaxis:{type:"datetime",axisBorder:{color:a?"#191e3a":"#e0e6ed"}},yaxis:{title:{text:"Points"},min:0,opposite:!!l,labels:{offsetX:l?-10:0}},grid:{borderColor:a?"#191e3a":"#e0e6ed"},tooltip:{shared:!0,intersect:!1,theme:a?"dark":"light",y:{formatter:e=>typeof e<"u"?e.toFixed(0)+" points":e}},legend:{itemMargin:{horizontal:4,vertical:8}}},this.radarChart={series:[{name:"Series 1",data:[80,50,30,40,100,20]}],chart:{height:300,type:"radar",zoom:{enabled:!1},toolbar:{show:!1}},colors:["#4361ee"],xaxis:{categories:["January","February","March","April","May","June"]},plotOptions:{radar:{polygons:{strokeColors:a?"#191e3a":"#e0e6ed",connectorColors:a?"#191e3a":"#e0e6ed"}}},tooltip:{theme:a?"dark":"light"}},this.pieChart={series:[44,55,13,43,22],chart:{height:300,type:"pie",zoom:{enabled:!1},toolbar:{show:!1}},labels:["Team A","Team B","Team C","Team D","Team E"],colors:["#4361ee","#805dca","#00ab55","#e7515a","#e2a03f"],responsive:[{breakpoint:480,options:{chart:{width:200}}}],stroke:{show:!1},legend:{position:"bottom"}},this.donutChart={series:[44,55,13],chart:{height:300,type:"donut",zoom:{enabled:!1},toolbar:{show:!1}},stroke:{show:!1},labels:["Team A","Team B","Team C"],colors:["#4361ee","#805dca","#e2a03f"],responsive:[{breakpoint:480,options:{chart:{width:200}}}],legend:{position:"bottom"}},this.polarAreaChart={series:[14,23,21,17,15,10,12,17,21],chart:{height:300,type:"polarArea",zoom:{enabled:!1},toolbar:{show:!1}},colors:["#4361ee","#805dca","#00ab55","#e7515a","#e2a03f","#2196f3","#3b3f5c"],stroke:{show:!1},responsive:[{breakpoint:480,options:{chart:{width:200}}}],plotOptions:{polarArea:{rings:{strokeColor:a?"#191e3a":"#e0e6ed"},spokes:{connectorColors:a?"#191e3a":"#e0e6ed"}}},legend:{position:"bottom"},fill:{opacity:.85}},this.radialBarChart={series:[44,55,41],chart:{height:300,type:"radialBar",zoom:{enabled:!1},toolbar:{show:!1}},colors:["#4361ee","#805dca","#e2a03f"],grid:{borderColor:a?"#191e3a":"#e0e6ed"},plotOptions:{radialBar:{dataLabels:{name:{fontSize:"22px"},value:{fontSize:"16px"},total:{show:!0,label:"Total",formatter:function(e){return 249}}}}},labels:["Apples","Oranges","Bananas"],fill:{opacity:.85}},this.bubbleChart={series:[{name:"Bubble1",data:this.generateData(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"Bubble2",data:this.generateData(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})}],chart:{height:300,type:"bubble",zoom:{enabled:!1},toolbar:{show:!1}},colors:["#4361ee","#00ab55"],dataLabels:{enabled:!1},xaxis:{tickAmount:12,type:"category",axisBorder:{color:a?"#191e3a":"#e0e6ed"}},yaxis:{max:70,opposite:!!l,labels:{offsetX:l?-10:0}},grid:{borderColor:a?"#191e3a":"#e0e6ed"},tooltip:{theme:a?"dark":"light"},stroke:{colors:a?["#191e3a"]:["#e0e6ed"]},fill:{opacity:.85}}}generateData(a,l,e){for(var h=0,b=[];h<l;){var D=Math.floor(Math.random()*750)+1,O=Math.floor(Math.random()*(e.max-e.min+1))+e.min,M=Math.floor(Math.random()*61)+15;b.push([D,O,M]),a+=864e5,h++}return b}static \u0275fac=function(l){return new(l||o)(u(y))};static \u0275cmp=f({type:o,selectors:[["ng-component"]],decls:148,vars:118,consts:[[1,"mb-6","flex","space-x-2","rtl:space-x-reverse"],["href","javascript:;",1,"text-primary","hover:underline"],[1,"before:content-['/']","ltr:before:mr-2","rtl:before:ml-2"],[1,"grid","grid-cols-1","gap-6","lg:grid-cols-2"],[1,"panel","flex","items-center","overflow-x-auto","whitespace-nowrap","p-3","text-primary","lg:col-span-2"],[1,"rounded-full","bg-primary","p-1.5","text-white","ring-2","ring-primary/30","ltr:mr-3","rtl:ml-3"],[1,"ltr:mr-3","rtl:ml-3"],["href","https://www.npmjs.com/package/ng-apexcharts","target","_blank",1,"block","hover:underline"],[1,"panel"],[1,"mb-5","flex","items-center","justify-between"],[1,"text-lg","font-semibold","dark:text-white-light"],["href","javascript:;",1,"font-semibold","hover:text-gray-400","dark:text-gray-400","dark:hover:text-gray-600",3,"click"],[1,"flex","items-center"],[1,"me-2"],[1,"mb-5","overflow-hidden"],[1,"rounded-lg","bg-white","dark:bg-black",3,"series","chart","colors","tooltip","stroke","xaxis","yaxis","grid"],[4,"ngIf"],[1,"text-lg","font-semibold","dark:text-white"],[1,"rounded-lg","bg-white","dark:bg-black",3,"series","chart","colors","dataLabels","stroke","xaxis","yaxis","labels","legend","grid","tooltip"],[1,"rounded-lg","bg-white","dark:bg-black",3,"series","chart","colors","dataLabels","stroke","plotOptions","grid","xaxis","yaxis","tooltip"],[1,"rounded-lg","bg-white","dark:bg-black",3,"series","chart","colors","plotOptions","xaxis","yaxis","grid","legend","tooltip","fill"],[1,"rounded-lg","bg-white","dark:bg-black",3,"series","chart","dataLabels","stroke","colors","xaxis","yaxis","grid","plotOptions","fill"],[1,"rounded-lg","bg-white","dark:bg-black",3,"series","chart","colors","stroke","plotOptions","fill","labels","markers","xaxis","yaxis","grid","tooltip","legend"],[1,"rounded-lg","bg-white","dark:bg-black",3,"series","chart","colors","xaxis","plotOptions","tooltip"],[1,"rounded-lg","bg-white","dark:bg-black",3,"series","chart","labels","colors","responsive","stroke","legend"],[1,"rounded-lg","bg-white","dark:bg-black",3,"series","chart","stroke","labels","colors","legend"],[1,"rounded-lg","bg-white","dark:bg-black",3,"series","chart","colors","stroke","responsive","plotOptions","legend","fill"],[1,"rounded-lg","bg-white","dark:bg-black",3,"series","chart","colors","grid","plotOptions","labels","fill"],[1,"rounded-lg","bg-white","dark:bg-black",3,"series","chart","colors","dataLabels","xaxis","yaxis","grid","tooltip","stroke","fill"],["highlightAuto",`<apx-chart
    [series]="lineChart.series"
    [chart]="lineChart.chart"
    [colors]="lineChart.colors"
    [tooltip]="lineChart.tooltip"
    [stroke]="lineChart.stroke"
    [xaxis]="lineChart.xaxis"
    [yaxis]="lineChart.yaxis"
    [grid]="lineChart.grid"
    class="rounded-lg bg-white dark:bg-black"
></apx-chart>

<!-- script -->
lineChart: any;
ngOnInit() {
    const isDark = this.store.theme === 'dark' || this.store.isDarkMode ? true : false;
    const isRtl = this.store.rtlClass === 'rtl' ? true : false;
    this.lineChart = {
        series: [
            {
                name: 'Sales',
                data: [45, 55, 75, 25, 45, 110],
            },
        ],
        chart: {
            height: 300,
            type: 'line',
            toolbar: false,
        },
        colors: ['#4361ee'],
        tooltip: {
            marker: false,
            y: {
                formatter(number: string) {
                    return '$' + number;
                },
            },
            theme: isDark ? 'dark' : 'light',
        },
        stroke: {
            width: 2,
            curve: 'smooth',
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
            axisBorder: {
                color: isDark ? '#191e3a' : '#e0e6ed',
            },
        },
        yaxis: {
            opposite: isRtl ? true : false,
            labels: {
                offsetX: isRtl ? -20 : 0,
            },
        },
        grid: {
            borderColor: isDark ? '#191e3a' : '#e0e6ed',
        },
    };
}`],["highlightAuto",`<apx-chart
    [series]="areaChart.series"
    [chart]="areaChart.chart"
    [colors]="areaChart.colors"
    [dataLabels]="areaChart.dataLabels"
    [stroke]="areaChart.stroke"
    [xaxis]="areaChart.xaxis"
    [yaxis]="areaChart.yaxis"
    [labels]="areaChart.labels"
    [legend]="areaChart.legend"
    [grid]="areaChart.grid"
    [tooltip]="areaChart.tooltip"
    class="rounded-lg bg-white dark:bg-black"
></apx-chart>

<!-- script -->
areaChart: any;
ngOnInit() {
    const isDark = this.store.theme === 'dark' || this.store.isDarkMode ? true : false;
    const isRtl = this.store.rtlClass === 'rtl' ? true : false;
    this.areaChart = {
        series: [
            {
                name: 'Income',
                data: [16800, 16800, 15500, 17800, 15500, 17000, 19000, 16000, 15000, 17000, 14000, 17000],
            },
        ],
        chart: {
            type: 'area',
            height: 300,
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        colors: ['#805dca'],
        dataLabels: {
            enabled: false,
        },
        stroke: {
            width: 2,
            curve: 'smooth',
        },
        xaxis: {
            axisBorder: {
                color: isDark ? '#191e3a' : '#e0e6ed',
            },
        },
        yaxis: {
            opposite: isRtl ? true : false,
            labels: {
                offsetX: isRtl ? -40 : 0,
            },
        },
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        legend: {
            horizontalAlign: 'left',
        },
        grid: {
            borderColor: isDark ? '#191e3a' : '#e0e6ed',
        },
        tooltip: {
            theme: isDark ? 'dark' : 'light',
        },
    };
}`],["highlightAuto",`<apx-chart
    [series]="columnChart.series"
    [chart]="columnChart.chart"
    [colors]="columnChart.colors"
    [dataLabels]="columnChart.dataLabels"
    [stroke]="columnChart.stroke"
    [plotOptions]="columnChart.plotOptions"
    [grid]="columnChart.grid"
    [xaxis]="columnChart.xaxis"
    [yaxis]="columnChart.yaxis"
    [tooltip]="columnChart.tooltip"
    class="rounded-lg bg-white dark:bg-black"
></apx-chart>

<!-- script -->
columnChart: any;
ngOnInit() {
    const isDark = this.store.theme === 'dark' || this.store.isDarkMode ? true : false;
    const isRtl = this.store.rtlClass === 'rtl' ? true : false;

    this.columnChart = {
        series: [
            {
                name: 'Net Profit',
                data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
            },
            {
                name: 'Revenue',
                data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
            },
        ],
        chart: {
            height: 300,
            type: 'bar',
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        colors: ['#805dca', '#e7515a'],
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent'],
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded',
            },
        },
        grid: {
            borderColor: isDark ? '#191e3a' : '#e0e6ed',
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            axisBorder: {
                color: isDark ? '#191e3a' : '#e0e6ed',
            },
        },
        yaxis: {
            opposite: isRtl ? true : false,
            labels: {
                offsetX: isRtl ? -10 : 0,
            },
        },
        tooltip: {
            theme: isDark ? 'dark' : 'light',
            y: {
                formatter: function (val: any) {
                    return val;
                },
            },
        },
    };
}`],["highlightAuto",`<apx-chart
    [series]="simpleColumnStacked.series"
    [chart]="simpleColumnStacked.chart"
    [colors]="simpleColumnStacked.colors"
    [plotOptions]="simpleColumnStacked.plotOptions"
    [xaxis]="simpleColumnStacked.xaxis"
    [yaxis]="simpleColumnStacked.yaxis"
    [grid]="simpleColumnStacked.grid"
    [legend]="simpleColumnStacked.legend"
    [tooltip]="simpleColumnStacked.tooltip"
    [fill]="simpleColumnStacked.fill"
    class="rounded-lg bg-white dark:bg-black"
></apx-chart>

<!-- script -->
simpleColumnStacked: any;
ngOnInit() {
    const isDark = this.store.theme === 'dark' || this.store.isDarkMode ? true : false;
    const isRtl = this.store.rtlClass === 'rtl' ? true : false;

    this.simpleColumnStacked = {
        series: [
            {
                name: 'PRODUCT A',
                data: [44, 55, 41, 67, 22, 43],
            },
            {
                name: 'PRODUCT B',
                data: [13, 23, 20, 8, 13, 27],
            },
        ],
        chart: {
            height: 300,
            type: 'bar',
            stacked: true,
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        colors: ['#2196f3', '#3b3f5c'],
        responsive: [
            {
                breakpoint: 480,
                options: {
                    legend: {
                        position: 'bottom',
                        offsetX: -10,
                        offsetY: 5,
                    },
                },
            },
        ],
        plotOptions: {
            bar: {
                horizontal: false,
            },
        },
        xaxis: {
            type: 'datetime',
            categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT', '01/05/2011 GMT', '01/06/2011 GMT'],
            axisBorder: {
                color: isDark ? '#191e3a' : '#e0e6ed',
            },
        },
        yaxis: {
            opposite: isRtl ? true : false,
            labels: {
                offsetX: isRtl ? -20 : 0,
            },
        },
        grid: {
            borderColor: isDark ? '#191e3a' : '#e0e6ed',
        },
        legend: {
            position: 'right',
            offsetY: 40,
        },
        tooltip: {
            theme: isDark ? 'dark' : 'light',
        },
        fill: {
            opacity: 0.8,
        },
    };
}`],["highlightAuto",`<apx-chart
    [series]="barChart.series"
    [chart]="barChart.chart"
    [dataLabels]="barChart.dataLabels"
    [stroke]="barChart.stroke"
    [colors]="barChart.colors"
    [xaxis]="barChart.xaxis"
    [yaxis]="barChart.yaxis"
    [grid]="barChart.grid"
    [plotOptions]="barChart.plotOptions"
    [fill]="barChart.fill"
    class="rounded-lg bg-white dark:bg-black"
></apx-chart>

<!-- script -->
barChart: any;
ngOnInit() {
    const isDark = this.store.theme === 'dark' || this.store.isDarkMode ? true : false;
    const isRtl = this.store.rtlClass === 'rtl' ? true : false;
    this.barChart = {
        series: [
            {
                name: 'Sales',
                data: [44, 55, 41, 67, 22, 43, 21, 70],
            },
        ],
        chart: {
            height: 300,
            type: 'bar',
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 1,
        },
        colors: ['#4361ee'],
        xaxis: {
            categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
            axisBorder: {
                color: isDark ? '#191e3a' : '#e0e6ed',
            },
        },
        yaxis: {
            opposite: isRtl ? true : false,
            reversed: isRtl ? true : false,
        },
        grid: {
            borderColor: isDark ? '#191e3a' : '#e0e6ed',
        },
        plotOptions: {
            bar: {
                horizontal: true,
            },
        },
        fill: {
            opacity: 0.8,
        },
    };
}`],["highlightAuto",`<apx-chart
    [series]="mixedChart.series"
    [chart]="mixedChart.chart"
    [colors]="mixedChart.colors"
    [stroke]="mixedChart.stroke"
    [plotOptions]="mixedChart.plotOptions"
    [fill]="mixedChart.fill"
    [labels]="mixedChart.labels"
    [markers]="mixedChart.markers"
    [xaxis]="mixedChart.xaxis"
    [yaxis]="mixedChart.yaxis"
    [grid]="mixedChart.grid"
    [tooltip]="mixedChart.tooltip"
    [legend]="mixedChart.legend"
    class="rounded-lg bg-white dark:bg-black"
></apx-chart>

<!-- script -->
mixedChart: any;
ngOnInit() {
    const isDark = this.store.theme === 'dark' || this.store.isDarkMode ? true : false;
    const isRtl = this.store.rtlClass === 'rtl' ? true : false;
    this.mixedChart = {
        series: [
            {
                name: 'TEAM A',
                type: 'column',
                data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
            },
            {
                name: 'TEAM B',
                type: 'area',
                data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
            },
            {
                name: 'TEAM C',
                type: 'line',
                data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
            },
        ],
        chart: {
            height: 300,
            // stacked: false,
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        colors: ['#2196f3', '#00ab55', '#4361ee'],
        stroke: {
            width: [0, 2, 2],
            curve: 'smooth',
        },
        plotOptions: {
            bar: {
                columnWidth: '50%',
            },
        },
        fill: {
            opacity: [1, 0.25, 1],
        },

        labels: [
            '01/01/2022',
            '02/01/2022',
            '03/01/2022',
            '04/01/2022',
            '05/01/2022',
            '06/01/2022',
            '07/01/2022',
            '08/01/2022',
            '09/01/2022',
            '10/01/2022',
            '11/01/2022',
        ],
        markers: {
            size: 0,
        },
        xaxis: {
            type: 'datetime',
            axisBorder: {
                color: isDark ? '#191e3a' : '#e0e6ed',
            },
        },
        yaxis: {
            title: {
                text: 'Points',
            },
            min: 0,
            opposite: isRtl ? true : false,
            labels: {
                offsetX: isRtl ? -10 : 0,
            },
        },
        grid: {
            borderColor: isDark ? '#191e3a' : '#e0e6ed',
        },
        tooltip: {
            shared: true,
            intersect: false,
            theme: isDark ? 'dark' : 'light',
            y: {
                formatter: (y: number) => {
                    if (typeof y !== 'undefined') {
                        return y.toFixed(0) + ' points';
                    }
                    return y;
                },
            },
        },
        legend: {
            itemMargin: {
                horizontal: 4,
                vertical: 8,
            },
        },
    };
}`],["highlightAuto",`<apx-chart
    [series]="radarChart.series"
    [chart]="radarChart.chart"
    [colors]="radarChart.colors"
    [xaxis]="radarChart.xaxis"
    [plotOptions]="radarChart.plotOptions"
    [tooltip]="radarChart.tooltip"
    class="rounded-lg bg-white dark:bg-black"
></apx-chart>

<!-- script -->
radarChart: any;
ngOnInit() {
    const isDark = this.store.theme === 'dark' || this.store.isDarkMode ? true : false;
    const isRtl = this.store.rtlClass === 'rtl' ? true : false;
    this.radarChart = {
        series: [
            {
                name: 'Series 1',
                data: [80, 50, 30, 40, 100, 20],
            },
        ],
        chart: {
            height: 300,
            type: 'radar',
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        colors: ['#4361ee'],
        xaxis: {
            categories: ['January', 'February', 'March', 'April', 'May', 'June'],
        },
        plotOptions: {
            radar: {
                polygons: {
                    strokeColors: isDark ? '#191e3a' : '#e0e6ed',
                    connectorColors: isDark ? '#191e3a' : '#e0e6ed',
                },
            },
        },
        tooltip: {
            theme: isDark ? 'dark' : 'light',
        },
    };
}`],["highlightAuto",`<apx-chart
    [series]="pieChart.series"
    [chart]="pieChart.chart"
    [labels]="pieChart.labels"
    [colors]="pieChart.colors"
    [responsive]="pieChart.responsive"
    [stroke]="pieChart.stroke"
    [legend]="pieChart.legend"
    class="rounded-lg bg-white dark:bg-black"
></apx-chart>

<!-- script -->
pieChart: any;
ngOnInit() {
    const isDark = this.store.theme === 'dark' || this.store.isDarkMode ? true : false;
    const isRtl = this.store.rtlClass === 'rtl' ? true : false;
    this.pieChart = {
        series: [44, 55, 13, 43, 22],
        chart: {
            height: 300,
            type: 'pie',
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        colors: ['#4361ee', '#805dca', '#00ab55', '#e7515a', '#e2a03f'],
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200,
                    },
                },
            },
        ],
        stroke: {
            show: false,
        },
        legend: {
            position: 'bottom',
        },
    };
}`],["highlightAuto",`<apx-chart
    [series]="donutChart.series"
    [chart]="donutChart.chart"
    [stroke]="donutChart.stroke"
    [labels]="donutChart.labels"
    [colors]="donutChart.colors"
    [legend]="donutChart.legend"
    class="rounded-lg bg-white dark:bg-black"
></apx-chart>

<!-- script -->
donutChart: any;
ngOnInit() {
    const isDark = this.store.theme === 'dark' || this.store.isDarkMode ? true : false;
    const isRtl = this.store.rtlClass === 'rtl' ? true : false;
    this.donutChart = {
        series: [44, 55, 13],
        chart: {
            height: 300,
            type: 'donut',
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        stroke: {
            show: false,
        },
        labels: ['Team A', 'Team B', 'Team C'],
        colors: ['#4361ee', '#805dca', '#e2a03f'],
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200,
                    },
                },
            },
        ],
        legend: {
            position: 'bottom',
        },
    };
}`],["highlightAuto",`<apx-chart
    [series]="polarAreaChart.series"
    [chart]="polarAreaChart.chart"
    [colors]="polarAreaChart.colors"
    [stroke]="polarAreaChart.stroke"
    [responsive]="polarAreaChart.responsive"
    [plotOptions]="polarAreaChart.plotOptions"
    [legend]="polarAreaChart.legend"
    [fill]="polarAreaChart.fill"
    class="rounded-lg bg-white dark:bg-black"
></apx-chart>

<!-- script -->
polarAreaChart: any;
ngOnInit() {
    const isDark = this.store.theme === 'dark' || this.store.isDarkMode ? true : false;
    const isRtl = this.store.rtlClass === 'rtl' ? true : false;
    this.polarAreaChart = {
        series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
        chart: {
            height: 300,
            type: 'polarArea',
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        colors: ['#4361ee', '#805dca', '#00ab55', '#e7515a', '#e2a03f', '#2196f3', '#3b3f5c'],
        stroke: {
            show: false,
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200,
                    },
                },
            },
        ],
        plotOptions: {
            polarArea: {
                rings: {
                    strokeColor: isDark ? '#191e3a' : '#e0e6ed',
                },
                spokes: {
                    connectorColors: isDark ? '#191e3a' : '#e0e6ed',
                },
            },
        },
        legend: {
            position: 'bottom',
        },
        fill: {
            opacity: 0.85,
        },
    };
}`],["highlightAuto",`<apx-chart
    [series]="radialBarChart.series"
    [chart]="radialBarChart.chart"
    [colors]="radialBarChart.colors"
    [grid]="radialBarChart.grid"
    [plotOptions]="radialBarChart.plotOptions"
    [labels]="radialBarChart.labels"
    [fill]="radialBarChart.fill"
    class="rounded-lg bg-white dark:bg-black"
></apx-chart>

<!-- script -->
radialBarChart: any;
ngOnInit() {
    const isDark = this.store.theme === 'dark' || this.store.isDarkMode ? true : false;
    const isRtl = this.store.rtlClass === 'rtl' ? true : false;
    this.radialBarChart = {
        series: [44, 55, 41],
        chart: {
            height: 300,
            type: 'radialBar',
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        colors: ['#4361ee', '#805dca', '#e2a03f'],
        grid: {
            borderColor: isDark ? '#191e3a' : '#e0e6ed',
        },
        plotOptions: {
            radialBar: {
                dataLabels: {
                    name: {
                        fontSize: '22px',
                    },
                    value: {
                        fontSize: '16px',
                    },
                    total: {
                        show: true,
                        label: 'Total',
                        formatter: function (w: any) {
                            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                            return 249;
                        },
                    },
                },
            },
        },
        labels: ['Apples', 'Oranges', 'Bananas'],
        fill: {
            opacity: 0.85,
        },
    };
}`],["highlightAuto",`<apx-chart
    [series]="bubbleChart.series"
    [chart]="bubbleChart.chart"
    [colors]="bubbleChart.colors"
    [dataLabels]="bubbleChart.dataLabels"
    [xaxis]="bubbleChart.xaxis"
    [yaxis]="bubbleChart.yaxis"
    [grid]="bubbleChart.grid"
    [tooltip]="bubbleChart.tooltip"
    [stroke]="bubbleChart.stroke"
    [fill]="bubbleChart.fill"
    class="rounded-lg bg-white dark:bg-black"
></apx-chart>

<!-- script -->
bubbleChart: any;
ngOnInit() {
    const isDark = this.store.theme === 'dark' || this.store.isDarkMode ? true : false;
    const isRtl = this.store.rtlClass === 'rtl' ? true : false;
    this.bubbleChart = {
        series: [
            {
                name: 'Bubble1',
                data: this.generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                    min: 10,
                    max: 60,
                }),
            },
            {
                name: 'Bubble2',
                data: this.generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                    min: 10,
                    max: 60,
                }),
            },
        ],
        chart: {
            height: 300,
            type: 'bubble',
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        colors: ['#4361ee', '#00ab55'],
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            tickAmount: 12,
            type: 'category',
            axisBorder: {
                color: isDark ? '#191e3a' : '#e0e6ed',
            },
        },
        yaxis: {
            max: 70,
            opposite: isRtl ? true : false,
            labels: {
                offsetX: isRtl ? -10 : 0,
            },
        },
        grid: {
            borderColor: isDark ? '#191e3a' : '#e0e6ed',
        },
        tooltip: {
            theme: isDark ? 'dark' : 'light',
        },
        stroke: {
            colors: isDark ? ['#191e3a'] : ['#e0e6ed'],
        },
        fill: {
            opacity: 0.85,
        },
    };
}`]],template:function(l,e){l&1&&(t(0,"div")(1,"ul",0)(2,"li")(3,"a",1),r(4,"Dashboard"),n()(),t(5,"li",2)(6,"span"),r(7,"Charts"),n()()(),t(8,"div",3)(9,"div",4)(10,"div",5),i(11,"icon-bell"),n(),t(12,"span",6),r(13,"Documentation: "),n(),t(14,"a",7),r(15,"https://www.npmjs.com/package/ng-apexcharts"),n()(),t(16,"div",8)(17,"div",9)(18,"h5",10),r(19,"Simple Line"),n(),t(20,"a",11),C("click",function(){return e.toggleCode("code1")}),t(21,"span",12),i(22,"icon-code",13),r(23," Code "),n()()(),t(24,"div",14),i(25,"apx-chart",15),n(),p(26,B,5,0,"ng-container",16),n(),t(27,"div",8)(28,"div",9)(29,"h5",17),r(30,"Simple Area"),n(),t(31,"a",11),C("click",function(){return e.toggleCode("code2")}),t(32,"span",12),i(33,"icon-code",13),r(34," Code "),n()()(),t(35,"div",14),i(36,"apx-chart",18),n(),p(37,z,5,0,"ng-container",16),n(),t(38,"div",8)(39,"div",9)(40,"h5",17),r(41,"Simple Column"),n(),t(42,"a",11),C("click",function(){return e.toggleCode("code3")}),t(43,"span",12),i(44,"icon-code",13),r(45," Code "),n()()(),t(46,"div",14),i(47,"apx-chart",19),n(),p(48,L,5,0,"ng-container",16),n(),t(49,"div",8)(50,"div",9)(51,"h5",17),r(52,"Simple Column Stacked"),n(),t(53,"a",11),C("click",function(){return e.toggleCode("code4")}),t(54,"span",12),i(55,"icon-code",13),r(56," Code "),n()()(),t(57,"div",14),i(58,"apx-chart",20),n(),p(59,R,5,0,"ng-container",16),n(),t(60,"div",8)(61,"div",9)(62,"h5",17),r(63,"Simple Bar"),n(),t(64,"a",11),C("click",function(){return e.toggleCode("code5")}),t(65,"span",12),i(66,"icon-code",13),r(67," Code "),n()()(),t(68,"div",14),i(69,"apx-chart",21),n(),p(70,I,5,0,"ng-container",16),n(),t(71,"div",8)(72,"div",9)(73,"h5",17),r(74,"Mixed"),n(),t(75,"a",11),C("click",function(){return e.toggleCode("code6")}),t(76,"span",12),i(77,"icon-code",13),r(78," Code "),n()()(),t(79,"div",14),i(80,"apx-chart",22),n(),p(81,J,5,0,"ng-container",16),n(),t(82,"div",8)(83,"div",9)(84,"h5",17),r(85,"Basic Radar"),n(),t(86,"a",11),C("click",function(){return e.toggleCode("code7")}),t(87,"span",12),i(88,"icon-code",13),r(89," Code "),n()()(),t(90,"div",14),i(91,"apx-chart",23),n(),p(92,F,5,0,"ng-container",16),n(),t(93,"div",8)(94,"div",9)(95,"h5",17),r(96,"Basic Pie"),n(),t(97,"a",11),C("click",function(){return e.toggleCode("code8")}),t(98,"span",12),i(99,"icon-code",13),r(100," Code "),n()()(),t(101,"div",14),i(102,"apx-chart",24),n(),p(103,G,5,0,"ng-container",16),n(),t(104,"div",8)(105,"div",9)(106,"h5",17),r(107,"Basic Donut"),n(),t(108,"a",11),C("click",function(){return e.toggleCode("code9")}),t(109,"span",12),i(110,"icon-code",13),r(111," Code "),n()()(),t(112,"div",14),i(113,"apx-chart",25),n(),p(114,X,5,0,"ng-container",16),n(),t(115,"div",8)(116,"div",9)(117,"h5",17),r(118,"Basic Polar Area"),n(),t(119,"a",11),C("click",function(){return e.toggleCode("code10")}),t(120,"span",12),i(121,"icon-code",13),r(122," Code "),n()()(),t(123,"div",14),i(124,"apx-chart",26),n(),p(125,P,5,0,"ng-container",16),n(),t(126,"div",8)(127,"div",9)(128,"h5",17),r(129,"Radial Bar"),n(),t(130,"a",11),C("click",function(){return e.toggleCode("code11")}),t(131,"span",12),i(132,"icon-code",13),r(133," Code "),n()()(),t(134,"div",14),i(135,"apx-chart",27),n(),p(136,j,5,0,"ng-container",16),n(),t(137,"div",8)(138,"div",9)(139,"h5",17),r(140,"Bubble Chart"),n(),t(141,"a",11),C("click",function(){return e.toggleCode("code12")}),t(142,"span",12),i(143,"icon-code",13),r(144," Code "),n()()(),t(145,"div",14),i(146,"apx-chart",28),n(),p(147,N,5,0,"ng-container",16),n()()()),l&2&&(s(25),d("series",e.lineChart.series)("chart",e.lineChart.chart)("colors",e.lineChart.colors)("tooltip",e.lineChart.tooltip)("stroke",e.lineChart.stroke)("xaxis",e.lineChart.xaxis)("yaxis",e.lineChart.yaxis)("grid",e.lineChart.grid),s(),d("ngIf",e.codeArr.includes("code1")),s(10),d("series",e.areaChart.series)("chart",e.areaChart.chart)("colors",e.areaChart.colors)("dataLabels",e.areaChart.dataLabels)("stroke",e.areaChart.stroke)("xaxis",e.areaChart.xaxis)("yaxis",e.areaChart.yaxis)("labels",e.areaChart.labels)("legend",e.areaChart.legend)("grid",e.areaChart.grid)("tooltip",e.areaChart.tooltip),s(),d("ngIf",e.codeArr.includes("code2")),s(10),d("series",e.columnChart.series)("chart",e.columnChart.chart)("colors",e.columnChart.colors)("dataLabels",e.columnChart.dataLabels)("stroke",e.columnChart.stroke)("plotOptions",e.columnChart.plotOptions)("grid",e.columnChart.grid)("xaxis",e.columnChart.xaxis)("yaxis",e.columnChart.yaxis)("tooltip",e.columnChart.tooltip),s(),d("ngIf",e.codeArr.includes("code3")),s(10),d("series",e.simpleColumnStacked.series)("chart",e.simpleColumnStacked.chart)("colors",e.simpleColumnStacked.colors)("plotOptions",e.simpleColumnStacked.plotOptions)("xaxis",e.simpleColumnStacked.xaxis)("yaxis",e.simpleColumnStacked.yaxis)("grid",e.simpleColumnStacked.grid)("legend",e.simpleColumnStacked.legend)("tooltip",e.simpleColumnStacked.tooltip)("fill",e.simpleColumnStacked.fill),s(),d("ngIf",e.codeArr.includes("code4")),s(10),d("series",e.barChart.series)("chart",e.barChart.chart)("dataLabels",e.barChart.dataLabels)("stroke",e.barChart.stroke)("colors",e.barChart.colors)("xaxis",e.barChart.xaxis)("yaxis",e.barChart.yaxis)("grid",e.barChart.grid)("plotOptions",e.barChart.plotOptions)("fill",e.barChart.fill),s(),d("ngIf",e.codeArr.includes("code5")),s(10),d("series",e.mixedChart.series)("chart",e.mixedChart.chart)("colors",e.mixedChart.colors)("stroke",e.mixedChart.stroke)("plotOptions",e.mixedChart.plotOptions)("fill",e.mixedChart.fill)("labels",e.mixedChart.labels)("markers",e.mixedChart.markers)("xaxis",e.mixedChart.xaxis)("yaxis",e.mixedChart.yaxis)("grid",e.mixedChart.grid)("tooltip",e.mixedChart.tooltip)("legend",e.mixedChart.legend),s(),d("ngIf",e.codeArr.includes("code6")),s(10),d("series",e.radarChart.series)("chart",e.radarChart.chart)("colors",e.radarChart.colors)("xaxis",e.radarChart.xaxis)("plotOptions",e.radarChart.plotOptions)("tooltip",e.radarChart.tooltip),s(),d("ngIf",e.codeArr.includes("code7")),s(10),d("series",e.pieChart.series)("chart",e.pieChart.chart)("labels",e.pieChart.labels)("colors",e.pieChart.colors)("responsive",e.pieChart.responsive)("stroke",e.pieChart.stroke)("legend",e.pieChart.legend),s(),d("ngIf",e.codeArr.includes("code8")),s(10),d("series",e.donutChart.series)("chart",e.donutChart.chart)("stroke",e.donutChart.stroke)("labels",e.donutChart.labels)("colors",e.donutChart.colors)("legend",e.donutChart.legend),s(),d("ngIf",e.codeArr.includes("code9")),s(10),d("series",e.polarAreaChart.series)("chart",e.polarAreaChart.chart)("colors",e.polarAreaChart.colors)("stroke",e.polarAreaChart.stroke)("responsive",e.polarAreaChart.responsive)("plotOptions",e.polarAreaChart.plotOptions)("legend",e.polarAreaChart.legend)("fill",e.polarAreaChart.fill),s(),d("ngIf",e.codeArr.includes("code10")),s(10),d("series",e.radialBarChart.series)("chart",e.radialBarChart.chart)("colors",e.radialBarChart.colors)("grid",e.radialBarChart.grid)("plotOptions",e.radialBarChart.plotOptions)("labels",e.radialBarChart.labels)("fill",e.radialBarChart.fill),s(),d("ngIf",e.codeArr.includes("code11")),s(10),d("series",e.bubbleChart.series)("chart",e.bubbleChart.chart)("colors",e.bubbleChart.colors)("dataLabels",e.bubbleChart.dataLabels)("xaxis",e.bubbleChart.xaxis)("yaxis",e.bubbleChart.yaxis)("grid",e.bubbleChart.grid)("tooltip",e.bubbleChart.tooltip)("stroke",e.bubbleChart.stroke)("fill",e.bubbleChart.fill),s(),d("ngIf",e.codeArr.includes("code12")))},dependencies:[x,k,S,E,A,v,w,_],encapsulation:2})};export{T as ChartsComponent};
