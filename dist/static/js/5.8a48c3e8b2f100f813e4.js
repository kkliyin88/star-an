webpackJsonp([5],{ooTo:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=t("TbkS"),n={name:"applications",data:()=>({picArr:[{piclink:"/static/image/services/1.png"},{piclink:"/static/image/services/2.png"},{piclink:"/static/image/services/3.png"},{piclink:"/static/image/services/4.png"},{piclink:"/static/image/services/5.png"},{piclink:"/static/image/services/6.png"}],title:" Smart Lighting Service Delivered",content:"Star-An is a company focused on providing commercial and industrial clients with comprehensive, value-added smart lighting solutions. As a vertically-integrated manufacturer, our clientele save more money and enjoy the benefits of a streamlined process when implementing energy-efficient projects."}),mounted(){},methods:{getImageMsg(){let e=this.basePath+this.$route.query.name+"/"+this.$route.query.id+"/imageMsg.json";Object(s.a)(e).then(e=>{this.smallPicArrNum=e.picNum,this.smallPicArr=[];for(let i=0;i<e.picNum;i++)this.smallPicArr.push({pic:""});this.smallPicArr.map((e,i)=>{e.pic=this.basePath+this.$route.query.name+"/"+this.$route.query.id+"/"+(i+1)+".png"})})}}},a={render:function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"wrap"},[t("section",{staticClass:"content"},[t("p",{staticClass:"title"},[e._v(e._s(e.title))]),e._v(" "),t("p",[e._v(e._s(e.content))])]),e._v(" "),t("section",{staticClass:"pic"},[t("ul",e._l(e.picArr,function(i,s){return t("li",{staticClass:"pointer",on:{click:function(i){e.goLevelOne(s)}}},[t("div",{staticClass:"img-pic"},[t("img",{attrs:{src:i.piclink}})])])}),0)])])},staticRenderFns:[]};var c=t("VU/8")(n,a,!1,function(e){t("wdDt")},"data-v-5846453c",null);i.default=c.exports},wdDt:function(e,i){}});
//# sourceMappingURL=5.8a48c3e8b2f100f813e4.js.map