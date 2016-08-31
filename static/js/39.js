webpackJsonp([39,43],{20:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{title:String,describe:String,code:String},data:function(){return{open:!1}},ready:function(){var e=this,t=this._slotContents["default"].childNodes;this.code||(this.code=Array.prototype.map.call(t,function(e){return e.outerHTML.replace(/\t| {4}/g,"")}).join("\n")),this.$nextTick(function(){hljs.highlightBlock(e.$el.querySelector("pre code"))})},methods:{handleOpen:function(){this.open=!this.open}}}},21:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{head:{type:Array,required:!1,"default":function(){return["参数","说明","类型","默认值"]}},content:Array,apis:Array,title:{type:String,required:!1,"default":"API"}}}},22:function(e,t,o){t=e.exports=o(4)(),t.push([e.id,".markdown>table{border-collapse:collapse;border-spacing:0;empty-cells:show;border:1px solid #e9e9e9;width:100%;margin-bottom:24px}.markdown>table th{white-space:nowrap;color:#5c6b77;font-weight:600;background:#f7f7f7}.markdown>table td,.markdown>table th{border:1px solid #e9e9e9;padding:8px 16px;text-align:left}.markdown.api-container table{font-family:Consolas,Menlo,Courier,monospace;font-size:13px}",""])},23:function(e,t,o){t=e.exports=o(4)(),t.push([e.id,'.code-box{border:1px solid #e9e9e9;border-radius:6px;display:inline-block;width:100%;position:relative;margin:0 0 16px;-webkit-transition:all .2s ease;transition:all .2s ease}.code-box .collapse{position:absolute;right:16px;bottom:16px;cursor:pointer;width:18px;height:18px;font-size:18px;line-height:18px;opacity:.5;text-align:center;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-transition:all .3s ease;transition:all .3s ease;color:#999;background:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:100%}.code-box .collapse:hover{opacity:1}.code-box:hover{box-shadow:0 0 6px rgba(0,0,0,.15);position:relative;z-index:10;background:#fff}.code-box:hover .code-box-title{background:#fbfbfb;box-shadow:0 -1.2px 0 #e9e9e9}.code-box:hover .code-box-meta{background:#fbfbfb}.code-box .code-box-demo{border-bottom:1px solid #e9e9e9;padding:42px 20px 50px}.code-box .highlight-wrapper{max-height:0;opacity:0;overflow:auto;-webkit-transition:all .4s ease;transition:all .4s ease;border-radius:0 0 6px 6px}.code-box .highlight-wrapper-expand{max-height:500px;opacity:1}.code-box.expand .collapse{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.code-box.expand .code-box-meta{border-radius:0;border-bottom:1px dashed #e9e9e9}.code-box-meta{position:relative;padding:16px;border-radius:0 0 6px 6px;-webkit-transition:background-color .4s ease;transition:background-color .4s ease;width:100%;font-size:12px}.code-box-meta p{margin:0}.code-box-title{position:absolute;top:-14px;padding:1px 1.1em;color:#777;border-radius:6px;background:#fff;-webkit-transition:all .4s ease;transition:all .4s ease}.code-box-title:before{font-family:anticon;content:"\\E658";font-size:16px;vertical-align:middle;line-height:22px;position:relative;margin-right:8px;top:-2px;color:#ccc;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);display:inline-block}.code-box .code-box-title a,.code-box .code-box-title a:hover{color:#666;font-size:14px}.highlight{line-height:1.5}.highlight pre{margin:0;padding:0;background:#fff;width:auto}.highlight pre code{display:block;color:#666;line-height:1.7;border:1px solid #e9e9e9;padding:10px 15px;border-radius:6px;font-size:13px;border:none;background:#fff}.hljs{background:none}',""])},24:function(e,t,o){var r=o(22);"string"==typeof r&&(r=[[e.id,r,""]]);o(5)(r,{});r.locals&&(e.exports=r.locals)},25:function(e,t,o){var r=o(23);"string"==typeof r&&(r=[[e.id,r,""]]);o(5)(r,{});r.locals&&(e.exports=r.locals)},26:function(e,t){e.exports=' <section class="markdown api-container"> <h2>{{ title }}</h2> <slot></slot> <table> <thead> <tr> <th v-for="text in head" v-html=text></th> </tr> </thead> <tbody> <tr v-for="item in content"> <td v-for="text in item" v-html=text></td> </tr> <tr v-for="api in apis"> <td v-for="text in api" v-html=text></td> </tr> </tbody> </table> </section> '},27:function(e,t){e.exports=' <section class=code-box :class="{\'expand\': open}"> <section class=code-box-demo> <slot></slot> </section> <section class="code-box-meta markdown"> <div class=code-box-title><a>{{ title }}</a></div> <div><p>{{ describe }}</p></div> <span class="collapse anticon anticon-circle-o-right" @click=handleOpen></span> </section> <section class=highlight-wrapper :class="{\'highlight-wrapper-expand\': open}"> <div class=highlight> <pre><code class=html>{{ code }}</code></pre> </div> </section> </section> '},28:function(e,t,o){var r,a;o(24),r=o(21),a=o(26),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports["default"]),a&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=a)},29:function(e,t,o){var r,a;o(25),r=o(20),a=o(27),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports["default"]),a&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=a)},227:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=o(563),i=r(a);t["default"]=i["default"]},276:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{title:String,bordered:{type:Boolean,"default":!0},extra:String,bodyStyle:Object}}},318:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=o(227),i=r(a),n=o(29),d=r(n),s=o(28),p=r(s);t["default"]={data:function(){return{onClose:function(){console.log(this)},show:!0,num:5,apis:[{parameter:"title",explain:"卡片标题",type:"Sring","default":""},{parameter:"extra",explain:"卡片右上角的操作区域",type:"Sring","default":""},{parameter:"bordered",explain:"是否有边框",type:"boolean","default":"true"},{parameter:"bodyStyle",explain:"内容区域自定义样式",type:"Object","default":""}]}},components:{codeBox:d["default"],apiTable:p["default"],vCard:i["default"]}}},379:function(e,t,o){t=e.exports=o(4)(),t.push([e.id,".head-example{width:42px;height:42px;border-radius:6px;background:#eee;display:inline-block}.anticon-notification{width:16px;height:16px;line-height:16px;font-size:16px}.ant-badge{margin-right:16px}.custom-card{padding:10px 16px}",""])},420:function(e,t,o){var r=o(379);"string"==typeof r&&(r=[[e.id,r,""]]);o(5)(r,{});r.locals&&(e.exports=r.locals)},468:function(e,t){e.exports=" <div class=ant-card :class=\"{'ant-card-bordered': bordered}\"> <div class=ant-card-head v-if=title><h3 class=ant-card-head-title>{{title}}</h3></div> <div class=ant-card-extra v-if=extra>{{{extra}}}</div> <div class=ant-card-body :style=bodyStyle><slot></slot></div> </div> "},516:function(e,t){e.exports=' <div> <section class=markdown> <h1>Card 卡片</h1> <p> 通用卡片容器。 </p> <h2>何时使用</h2> <ul> <p>最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。</p> </ul> <h2>组件演示</h2> </section> <div class=ant-row style="margin-left: -8px; margin-right: -8px"> <div class="ant-col-lg-12 code-boxes-col-2-1"> <code-box title=典型卡片 describe=包含标题、内容、操作区域。 code=""> <v-card title="Card title" extra=\'<a href="/#!/components/card">More</a>\'> <p>Card content</p> <p>Card content</p> <p>Card content</p> </v-card> </code-box> <code-box title=简洁卡片 describe=只包含内容区域。 code=""> <v-card> <p>Card content</p> <p>Card content</p> <p>Card content</p> </v-card> </code-box> </div> <div class="ant-col-lg-12 code-boxes-col-2-1"> <code-box title=无边框 describe=在灰色背景上使用无边框的卡片。 code=""> <v-card title="Card title" :bordered=false> <p>Card content</p> <p>Card content</p> <p>Card content</p> </v-card> </code-box> <code-box title=更灵活的内容展示 describe=可以调整默认边距，设定宽度。 code=""> <v-card :body-style="{ padding: 0 }" style=width:240px> <div class=custom-image> <img alt=example width=100% src=https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png> </div> <div class=custom-card> <h3>Europe Street beat</h3> <p>www.instagram.com</p> </div> </v-card> </code-box> </div> <div class="ant-col-lg-24 code-boxes-col-2-1"> <code-box title=栅格卡片 describe=在系统概览页面常常和栅格进行配合。 code=""> <div class="ant-row-flex ant-row-flex-space-around"> <v-card title="Card title" style=width:240px> <p>Card content</p> <p>Card content</p> <p>Card content</p> </v-card> <v-card title="Card title" style=width:240px> <p>Card content</p> <p>Card content</p> <p>Card content</p> </v-card> <v-card title="Card title" style=width:240px> <p>Card content</p> <p>Card content</p> <p>Card content</p> </v-card> </div> </code-box> </div> </div> <api-table :apis=apis></api-table> </div> '},563:function(e,t,o){var r,a;r=o(276),a=o(468),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports["default"]),a&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=a)},608:function(e,t,o){var r,a;o(420),r=o(318),a=o(516),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports["default"]),a&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=a)}});