webpackJsonp([7],{YWPe:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("TbkS"),a={name:"levelTwo",components:{},data:()=>({mainPic:"/static/image/products/levelTwo/",basePath:"/static/image/products/levelTwo/",baseJsPath:"/static/js/products/levelTwo/",imageMsgPath:"",content:[],smallPicArrNum:0,smallPicArr:[],sysPicArr:[{pic:""},{pic:""}]}),mounted(){this.operator()},methods:{getContent(){let t=this.baseJsPath+this.$route.query.name+"/"+this.$route.query.id+"/text.json";Object(i.a)(t).then(t=>{this.content=t.arr})},getImageMsg(){let t=this.basePath+this.$route.query.name+"/"+this.$route.query.id+"/imageMsg.json";Object(i.a)(t).then(t=>{this.smallPicArrNum=t.picNum,this.smallPicArr=[];for(let s=0;s<t.picNum;s++)this.smallPicArr.push({pic:""});this.smallPicArr.map((t,s)=>{t.pic=this.basePath+this.$route.query.name+"/"+this.$route.query.id+"/"+(s+1)+".png"})})},operator(t){this.getImageMsg(),this.mainPic=this.basePath+this.$route.query.name+"/"+this.$route.query.id+"/1.png",this.sysPicArr.map((t,s)=>{t.pic=this.basePath+this.$route.query.name+"/"+this.$route.query.id+"/sys/"+(s+1)+".png"}),this.getContent()},selectPic(t){this.mainPic=this.smallPicArr[t].pic}}},r={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"wrap"},[e("div",{staticClass:"container1"},[e("section",{staticClass:"left"},[e("div",{staticClass:"main_pic"},[e("img",{attrs:{src:t.mainPic}})]),t._v(" "),e("div",{staticClass:"small_pic"},[e("ul",t._l(t.smallPicArr,function(s,i){return e("li",{staticClass:"pointer",on:{click:function(s){t.selectPic(i)}}},[s.pic?e("img",{attrs:{src:s.pic}}):t._e()])}),0)])]),t._v(" "),e("section",{staticClass:"right"},[e("Collapse",{attrs:{accordion:""}},[e("Panel",[t._v("\n\t\t\t              System Diagram\n\t\t\t\t\t\t  "),e("div",{staticClass:"sysimg",attrs:{slot:"content"},slot:"content"},[e("img",{attrs:{src:t.sysPicArr[0].pic}})])]),t._v(" "),e("Panel",[t._v("\n\t\t\t                 Features\n\t\t\t\t\t\t\t "),e("div",{attrs:{slot:"content"},slot:"content"},t._l(t.content,function(s){return e("p",{staticClass:"content1"},[t._v("*  "+t._s(s))])}),0)]),t._v(" "),e("Panel",[t._v("\n\t\t\t               Parameter\n\t\t\t              "),e("div",{staticClass:"sysimg",attrs:{slot:"content"},slot:"content"},[e("img",{attrs:{src:t.sysPicArr[1].pic}})])]),t._v(" "),e("Panel",[t._v("\n\t\t\t\t\t       Installation\n\t\t\t\t\t      "),e("div",{attrs:{slot:"content"},slot:"content"},[e("p",[t._v("For installation details, please contact us for spec. for your ref.")])])])],1)],1)])])},staticRenderFns:[]};var n=e("VU/8")(a,r,!1,function(t){e("sL3h")},"data-v-42b17be6",null);s.default=n.exports},sL3h:function(t,s){}});
//# sourceMappingURL=7.1392e4f29a73838b3307.js.map