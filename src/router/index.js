import Vue from "vue"
import Router from "vue-router"
import AbHi from '../components/19-04-22/Test1.vue'
import lokEsh from '../components/19-04-22/Test2.vue'
import TablE1 from '../components/19-04-22/Test4.vue'
import TablE11 from '../components/19-04-22/btable.vue'
import FoO from '../components/20-04-2022/mytest9.vue'
import LooK from '../components/20-04-2022/mytest8.vue'
// import Black from '../components/20-04-2022/mytest5'
import LoOk1 from '../components/21-04-22/mytest3'
import BhanU from '../components/21-04-22/mytest7'
import GreeN from '../components/21-04-22/mytest1'
import foreach from '../components/21-04-22/foreach'
import filter from '../components/21-04-22/filter'
import map from '../components/21-04-22/map'
import create from '../components/22-04-22/promise'
import find from '../components/22-04-22/fetch'
import hello from '../components/22-04-22/axios'
import vue1 from '../components/22-04-22/promise1AX'
// import vue2 from '../components/22-04-22/promise2Ax'
import google1 from '../components/25-04-22/Assi1'
import google2 from '../components/25-04-22/Assi2'
import google3 from '../components/25-04-22/Assi6'
import google4 from '../components/25-04-22/Assi7'
import google5 from '../components/25-04-22/Assi8'
import google6 from '../components/25-04-22/Assi10'
import google7 from '../components/25-04-22/Assp4'
//import google8 from '../components/25-04-22/AchilB5'
import Hcl1 from '../components/26-04-22/test1Q'
import Hcl2 from '../components/26-04-22/test2Q'
import Hcl3 from '../components/26-04-22/test4Q'
import Hcl4 from '../components/26-04-22/test3Q'
import Hcl5 from '../components/26-04-22/test5Q'
import Hcl6 from '../components/26-04-22/test6Q'
import Try1 from '../components/27-04-22/stringify'
import Try2 from '../components/27-04-22/spliceslice'
import Try3 from '../components/27-04-22/foreach4'
import Try4 from '../components/28-04-22/axios00'
import Try5 from '../components/28-04-22/Qes1'
import Try6 from '../components/28-04-22/Qes2'
import Try7 from '../components/28-04-22/Qes3'
// import Try8 from '../components/02-05-22/Task9'
 import Task3 from '../components/02-05-22/Task3'
// import Try10 from '../components/02-05-22/Task5'
// import Try11 from '../components/02-05-22/Task6'
import Try12 from '../components/02-05-22/Task1'
import Try13 from '../components/02-05-22/Task2'
import Try14 from '../components/02-05-22/Task7'
import Try15 from '../components/04-05-22/crud'
import Try16 from '../components/02-05-22/Task10'
import Try17 from '../components/02-05-22/Task4'
import Try18 from '../components/02-05-22/Task8'
import Try19 from '../components/05-05-22/directives'
import Try20 from '../components/05-05-22/computed'
//import Try21 from '../components/05-05-22/scrollspy'
import Try22 from '../components/06-05-22/v-tab'
import Try23 from '../components/06-05-22/Emitparent'
// import Try24 from '../components/06-05-22/Propsparent'
// import Try25 from '../components/09-05-22/urlp1'
// import Try26 from '../components/09-05-22/urlp2'
// import Try27 from '../components/09-05-22/new'
import Try28 from '../components/09-05-22/array'
import Try29 from '../components/10-05-22/created'
import Try30 from '../components/10-05-22/btable21'
import Try31 from '../components/10-05-22/watch'
// import Try32 from '../components/11-05-22/str'
import Try33 from '../components/11-05-22/setTime'
import Try34 from'../components/11-05-22/str13'
import Try35 from'../components/11-05-22/backspace'
import Try36 from'../components/11-05-22/nextTick'
import Try37 from'../components/12-05-22/EmitP1'
import Try38 from '../components/12-05-22/pro'
import Try39 from '../components/12-05-22/value'
// import Try40 from '../components/13-05-22/reorder'
import json  from '../components/16-05-22/json'
import day1 from '../components/18-05-22/day1'
import day2 from '../components/18-05-22/day2'
import login1 from '../components/19-05-22/login1'
import login2 from '../components/19-05-22/login2'
import month from '../components/23-05-22/month'
import password from '../components/23-05-22/password'
import pEmit from '../components/26-05-22/pEmit'
import parentcard from '../components/27-05-22/parentcard'
// import card1 from '../components/27-05-22/card1'
import tabledata from '../components/29-05-22/tabledata'
import pproduct from '../components/02-06-22/pproduct'
import home from '../components/02-06-22/home'
import sideview from '../components/02-06-22/sideview'








Vue.use(Router)
const routes = [

    { path: '/form', name: "form", component: AbHi },
    { path: '/frnd', name: "frnd", component: lokEsh },
    { path: '/fun', name: "fun", component: TablE1 },
    { path: '/fun1', name: "fun", component: TablE11 },
    { path: '/mytest9', name: "mytest9", component: FoO },
    { path: '/mytest8', name: "mytest8", component: LooK },
    { path: '/mytest3', name: "mytest3", component: LoOk1 },
    { path: '/mytest7', name: 'mytest7', component: BhanU },
    { path: '/mytest1', name: 'mytest1', component: GreeN },
    { path: '/foreach', name: 'foreach', component: foreach },
    { path: '/filter', name: 'filter', component: filter },
    { path: '/map', name: 'map', component: map },
    { path: '/promise', name: 'promise', component: create },
    { path: '/fetch', name: 'fetch', component: find },
    { path: '/axios', name: 'axios', component: hello },
    { path: '/pro1A', name: 'pro1A', component: vue1 },
    // {path:'/pro2A',name:'pro2A',component:vue2},
    { path: '/Assi1', name: 'Abhi', component: google1 },
    { path: '/Assi2', name: "Assi2", component: google2 },
    { path: '/Assi6', name: "Assi6", component: google3 },
    { path: '/Assi7', res: "Assi7 ", component: google4 },
    { path: '/Assi8', name: 'Assi8', component: google5 },
    { path: '/Assi10', name: 'Assi10', component: google6 },
    { path: '/Assp4', name: 'Assp4', component: google7 },
    // { path: '/AchilB5', name: 'AchilB5', component: google8 },
    { path: '/test1Q', name: 'test1Q', component: Hcl1 },
    { path: '/test2Q', name: 'test2Q', component: Hcl2 },
    { path: '/test4Q', name: 'test4Q', component: Hcl3 },
    { path: '/test3Q', name: 'test3Q', component: Hcl4 },
    { path: '/test5Q', name: 'test5Q', component: Hcl5 },
    { path: '/test6Q', name: 'test6Q', component: Hcl6 },
    { path: '/stringify', name: 'stringify', component: Try1 },
    { path: '/spliceslice', name: "spliceslice", component: Try2 },
    { path: '/foreach4', name: "mapfilterfind", component: Try3 },
    { path: '/axios00', name: "promise", component: Try4 },
    { path: '/Qes1', name: "axios1", component: Try5 },
    { path: '/Qes2', name: "axios2", component: Try6 },
    { path: '/Qes3', name: " axios3", component: Try7 },
    { path: '/Task9', name: "a",component:Try12},
    { path:'/Task2', name:"try1", component:Try13},
    { path: '/Task7', name:"try2", component:Try14},
    { path: '/crud', name:"try3",component:Try15},
    { path:'/Task10',name:"try4",component:Try16},
    { path:'/TasK3',name:"Task3",component:Task3},
    { path:'/Task4',name:"try5",component:Try17},
    { path:'/Task8',name:"try6",component:Try18},
    { path:'/directives',name:"try7",component:Try19},
    { path:'/computed',name:"try8",component:Try20},
    //{ path:'/scrollspy',name:"try9",component:Try21},
    { path:'/v-tab',name:"try10",component:Try22},
    { path:'/Emitparent',name:"try11",component:Try23},
    // { path:'/Propsparent',name:"try12",component:Try24},
    // { path:'/urlp1',name:"try13",component:Try25},
    // { path:'/urlp2',name:"try14",component:Try26},
    // { path:'/new',name:"try15",component:Try27},
    { path:'/array',name:"try16",component:Try28},
    { path:'/created',name:"try17",component:Try29},
    { path:'/btable21',name:"try18",component:Try30},
    { path:'/watch',name:"try19",component:Try31},
    // { path:'/str',name:"try20",component:Try32},
    { path:'/setTime',name:"try21",component:Try33},
    { path:'/str13',name:'try21',component:Try34},
    { path:'/backspace',name:'try22',component:Try35},
    { path:'/nextTick',name:'try23',component:Try36},
     { path:'/Emit1',name:'try24',component:Try37},
    { path:'/pro',name:'try25',component:Try38},
    { path:'/value',name:'try26',component:Try39},
    // { path:'/reorder',name:'try27',component:Try40},
    { path:'/json',name:'json',component:json},
    { path:'/day1',name:'day1',component:day1},
    { path:'/day2', name:'day2',component:day2},
    { path:'/login1',name:'login1',component:login1},
    { path:'/login2', name:'login2', component:login2},
    { path:'/password', name:'password',component:password},
    { path:'/month', name:'month',component:month},
    { path:'/pEmit', name:'pEmit',component:pEmit},
    { path:'/parentcard', name:'parentcard' ,component:parentcard},
    { path:'/tabledata', name:'tabledata',component:tabledata},
    { path: '/pproduct',name:'pproduct', component:pproduct},
    { path:'/home', name:'home', component:home},
    { path:'/sideview', name:'sideview', component:sideview}
   
    

    
]
let router = new Router({ routes })
export default router
