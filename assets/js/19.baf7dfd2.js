(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{346:function(e,t,r){"use strict";r.r(t);var a=r(3),v=Object(a.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"webpack-dev-server"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#webpack-dev-server","aria-hidden":"true"}},[e._v("#")]),e._v(" webpack-dev-server")]),e._v(" "),r("h2",{attrs:{id:"组成"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#组成","aria-hidden":"true"}},[e._v("#")]),e._v(" 组成")]),e._v(" "),r("ol",[r("li",[e._v("webpack: 负责编译代码")]),e._v(" "),r("li",[e._v("webpack-dev-middleware: 主要负责构建内存文件系统，把 webpack 的 OutputFileSystem 替换成 InMemoryFileSystem。同时作为 Express 的中间件拦截请求，从内存文件系统中把结果拿出来。")]),e._v(" "),r("li",[e._v("express：负责搭建请求路由服务。")])]),e._v(" "),r("h2",{attrs:{id:"简单的工作流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#简单的工作流程","aria-hidden":"true"}},[e._v("#")]),e._v(" 简单的工作流程")]),e._v(" "),r("ol",[r("li",[e._v("启动 dev-server，webpack 开始构建，在编译期间会向 entry 文件注入热更新代码；")]),e._v(" "),r("li",[e._v("Client 首次打开后，Server 和 Client 基于 Socket 建立通讯渠道；")]),e._v(" "),r("li",[e._v('修改文件，Server 端监听文件发送变动，webpack 开始编译，直到编译完成会触发"Done"事件；')]),e._v(" "),r("li",[e._v("Server 通过 socket 发送消息告知 Client；")]),e._v(" "),r("li",[e._v("Client 根据 Server 的消息（hash 值和 state 状态），通过 ajax 请求获取 Server 的 manifest 描述文件；")]),e._v(" "),r("li",[e._v("Client 对比当前 modules tree ，再次发请求到 Server 端获取新的 JS 模块；")]),e._v(" "),r("li",[e._v("Client 获取到新的 JS 模块后，会更新 modules tree 并替换掉现有的模块；")]),e._v(" "),r("li",[e._v("最后调用 module.hot.accept() 完成热更新；")])])])},[],!1,null,null,null);t.default=v.exports}}]);