(this.webpackJsonpstopwatch=this.webpackJsonpstopwatch||[]).push([[0],{29:function(t,e,c){},30:function(t,e,c){},32:function(t,e,c){},33:function(t,e,c){"use strict";c.r(e);var n=c(8),r=c.n(n),a=c(24),i=c.n(a),s=(c(29),c(23)),o=c(43),u=c(41),b=c(37),j=c(20),f=c(38),O=c(42),l=c(36),h=c(39),p=c(40),d=(c(30),c(2)),v=function(t){var e=t.toggleStart,c=t.reset,n=t.waitRef,r=t.active?"stop":"start";return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("button",{className:"btn",onClick:e,children:[r," "]}),Object(d.jsx)("button",{className:"btn",onClick:c,children:"reset"}),Object(d.jsx)("button",{className:"btn",ref:n,children:"wait"})]})},x=function(t){var e=t.time,c=function(t){return t>=0&&t<10?"0".concat(t):t},n=c(Math.floor(e/3600%24)),r=c(Math.floor(e/60%60)),a=c(Math.floor(e%60));return Object(d.jsxs)("div",{children:[n,":",r,":",a]})};c(32);var m=function(){var t=Object(n.useState)(0),e=Object(s.a)(t,2),c=e[0],r=e[1],a=Object(n.useState)(!1),i=Object(s.a)(a,2),m=i[0],w=i[1],g=Object(n.createRef)();return Object(n.useEffect)((function(){var t=new o.a,e=Object(u.a)(g.current,"click"),c=e.pipe(Object(l.a)(e.pipe(Object(b.a)(300))),Object(j.a)((function(t){return t.length})),Object(f.a)((function(t){return 2===t})),Object(h.a)((function(){return w(!1)}))),n=Object(O.a)(1e3).pipe(Object(p.a)(t),Object(p.a)(c)).subscribe((function(){if(m)return r((function(t){return t+1}))}));return function(){n.unsubscribe()}}),[m]),Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)(x,{time:c}),Object(d.jsx)(v,{active:m,waitRef:g,toggleStart:function(){m?(w(!1),r(0)):w(!0)},reset:function(){r(0)}})]})};i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.7b0e1e38.chunk.js.map