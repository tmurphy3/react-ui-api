(this["webpackJsonpreact-ui-api"]=this["webpackJsonpreact-ui-api"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(5),r=a.n(c),i=(a(12),a(13),a(1)),l=(a(14),a(15),function(e){var t=e.date,a=Object(n.useState)(""),c=Object(i.a)(a,2),r=c[0],l=c[1],u=Object(n.useState)(""),s=Object(i.a)(u,2),m=s[0],f=s[1],d=Object(n.useState)(""),v=Object(i.a)(d,2),E=v[0],p=v[1];return Object(n.useEffect)((function(){fetch("https://api.nasa.gov/planetary/apod?api_key=oKwdbMT2N85wHNYQKRlSpik1Ek8aSgQHfwv8IY0J&date=".concat(t)).then((function(e){return e.json()})).then((function(e){l(e.title),f(e.explanation),p(e.url)}))}),[t]),o.a.createElement("div",{className:"modalViewItemContainer"},o.a.createElement("div",{className:"modalViewItem",style:{background:"url(".concat(E,")")}}),o.a.createElement("div",null,o.a.createElement("div",{className:"title"},r),o.a.createElement("div",null,t),o.a.createElement("div",{className:"explanation"},m)))}),u=function(){var e=o.a.useState(""),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)("2020-02-02"),u=Object(i.a)(r,2),s=u[0],m=u[1],f=Object(n.useState)("hidden"),d=Object(i.a)(f,2),v=d[0],E=d[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"filter"},o.a.createElement("form",{className:"form",onSubmit:function(e){a&&m(a),e.preventDefault(),setTimeout((function(){E("visible")}),200)}},o.a.createElement("input",{type:"text",className:"input",value:a,placeholder:"YYYY-MM-DD",onChange:function(e){c(e.target.value)}}),o.a.createElement("button",{className:"searchButton"},"Search")),o.a.createElement("div",{id:v,className:"picWords",onClick:function(){E("hidden")}},o.a.createElement("div",{className:"picWordsHolder"},o.a.createElement(l,{date:s})))))},s=a(6),m=(a(16),a(17),function(e){var t=e.background;return o.a.createElement("div",null,o.a.createElement("div",{className:"modalItem",style:{background:"url(".concat(t,")"),backgroundSize:"cover"}}))}),f=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),u=Object(i.a)(r,2),f=u[0],d=u[1],v=Object(n.useState)("hidden"),E=Object(i.a)(v,2),p=E[0],b=E[1];Object(n.useEffect)((function(){for(var e=4;e<6;e++){var t=e.toString();1===t.length&&(t="0"+t,console.log(t));for(var a=5;a<10;a++){var n=a.toString();1===n.length&&(n="0"+n);var o="https://api.nasa.gov/planetary/apod?api_key=oKwdbMT2N85wHNYQKRlSpik1Ek8aSgQHfwv8IY0J&date=2020-".concat(t,"-").concat(n);fetch(o).then((function(e){return e.json()})).then((function(e){var t=e;c((function(e){return[].concat(Object(s.a)(e),[t])}))}))}}}),[]);return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"modalContainer"},a.map((function(e,t){return o.a.createElement("div",{key:t,onClick:function(){return t=e.date,d(t),void setTimeout((function(){b("visible")}),200);var t}},o.a.createElement(m,{background:e.url,date:e.date}))}))),o.a.createElement("div",{id:p,className:"picWords",onClick:function(){b("hidden")}},o.a.createElement("div",{className:"picWordsHolder"},o.a.createElement(l,{date:f}))))};var d=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"intro"},"NASA APOD"),o.a.createElement(u,null),o.a.createElement(f,null),o.a.createElement("div",{className:"footer"},"footer footer footer footer footer footer footer footer footer footer footer footer footer footer footer footer footer footer footer footer footer"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.c650c840.chunk.js.map