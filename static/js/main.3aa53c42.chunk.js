(this["webpackJsonptodo-react"]=this["webpackJsonptodo-react"]||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(6),i=n.n(a),c=n(7),l=n(4),u=n(3);var s=function(e){var t=e.todo,n=e.onDelete,o=t.text;return r.a.createElement("li",null,r.a.createElement("button",{onClick:n},"Delete"),o)};function d(e,t){return{type:e,payload:t}}var f={todos:[],input:""},p="ADD_TODO",h="DELETE_TODO",v="CHANGE_INPUT",w=function(e){return d(p,e)},m=function(e){return d(h,e)},g=function(e){return d(v,e)};function E(e,t){switch(t.type){case p:var n=e.todos.map((function(e){return e.id})),o=Math.max.apply(Math,Object(u.a)(n).concat([0]))+1;return{todos:[].concat(Object(u.a)(e.todos),[{id:o,text:t.payload}]),input:e.input};case h:return{todos:e.todos.filter((function(e){return e.id!==t.payload})),input:e.input};case v:return Object(l.a)(Object(l.a)({},e),{},{input:t.payload});default:throw new Error}}var b=function(){var e=Object(o.useReducer)(E,f),t=Object(c.a)(e,2),n=t[0],a=t[1];return r.a.createElement("div",null,r.a.createElement("h2",null,"Todo List"),r.a.createElement("p",null,"Current input: ",n.input),r.a.createElement("input",{type:"text",placeholder:"new todo",value:n.input,onChange:function(e){return a(g(e.target.value))}}),r.a.createElement("button",{onClick:function(){a(w(n.input)),a(g(""))}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),r.a.createElement("ul",null,n.todos.map((function(e){return r.a.createElement(s,{key:e.id,todo:e,onDelete:function(){return a(m(e.id))}})}))))};var y=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Todo"),r.a.createElement(b,null))},k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/todo-react",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/todo-react","/service-worker.js");k?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):O(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):O(t,e)}))}}()},8:function(e,t,n){e.exports=n(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.3aa53c42.chunk.js.map