(this["webpackJsonpcurrency-exchanger-v2"]=this["webpackJsonpcurrency-exchanger-v2"]||[]).push([[0],{19:function(e,n,t){},21:function(e,n,t){},25:function(e,n,t){"use strict";t.r(n);var r,c,a,i,u,o,s,l,b=t(0),h=t.n(b),f=t(11),d=t.n(f),j=(t(19),t(5)),m=t.n(j),O=t(8),g=t(4),p=t(3),x=(t.p,t(21),t(2)),v=t(1),y="18px",k="white",w=x.a.div(r||(r=Object(p.a)(["\n  margin: 1em auto;\n  background-color: #81f479;\n  border-radius: 0.125em;\n  padding: 0.5em;\n  box-shadow: 0.25em 0.25em 20px black;\n  display: flex;\n  align-items: center;\n\n  @media (max-width: 930px) {\n    flex-direction: column;\n  }\n"]))),S=x.a.div(c||(c=Object(p.a)(["\n  background-color: lightsteelblue;\n  display: flex;\n  flex-direction: column;\n  height: 4em;\n  \n\n"]))),A=x.a.select(a||(a=Object(p.a)(["\n  height: 4em;\n  background-color: #41a83f;\n  width: 100%;\n  border: none;\n  font-size: ",";\n  padding: 0.25em 0.5em;\n  :hover {\n    color: ","\n  }\n"])),y,k),C=x.a.option(i||(i=Object(p.a)(["\n  background-color: lightblue;\n"]))),I=x.a.button(u||(u=Object(p.a)(["\n  background-color: transparent;\n  margin: .25em .25em;\n  height: 100%;\n  border: none;\n  font-size: 60px;\n  line-height: 60px;\n  font-weight: 900;\n  :hover {\n    color: ","\n  }\n  ::after {\n    content: ' \u2b82 '\n  }\n\n  @media (max-width: 930px) {\n    ::after {\n      content: \"\u2b83\";\n    }\n  }\n"])),k),P=x.a.div(o||(o=Object(p.a)(["\n  height: 4em;\n  background-color: #6ac43d;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  \n"]))),N=x.a.input(s||(s=Object(p.a)(["\n  background-color: transparent;\n    border: none;\n    font-size: ",";\n    padding: 0.25em 0.5em;\n    outline: none;\n"])),y),T=x.a.div(l||(l=Object(p.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.2);\n  font-size: ",";\n  height: 100%;\n  color: black;\n  min-width: 3em;\n"])),y),z=function(e){var n=e.value,t=e.currency,r=e.setOtherValue,c=e.setCurrency,a=e.currencyData,i=e.currencySelectOrder,u=a[t]&&a[t].currencySymbol||t;return Object(v.jsxs)(S,{children:[Object(v.jsx)(A,{value:t,onChange:function(e){return c(e.target.value)},children:i&&i.map((function(e,n){var t=e,r=a[e].currencyName;return Object(v.jsxs)(C,{value:t,children:[r," - ",t]},n)}))}),Object(v.jsxs)(P,{children:[Object(v.jsx)(N,{value:n,onChange:function(e){return r(e.target.value)}}),Object(v.jsx)(T,{children:u||(t||"HMM")})]})]})};var D=function(){var e=Object(b.useState)("N/A"),n=Object(g.a)(e,2),t=n[0],r=n[1],c=Object(b.useState)(),a=Object(g.a)(c,2),i=a[0],u=a[1],o=Object(b.useState)("N/A"),s=Object(g.a)(o,2),l=s[0],h=s[1],f=Object(b.useState)("N/A"),d=Object(g.a)(f,2),j=d[0],p=d[1],x=Object(b.useState)(1),y=Object(g.a)(x,2),k=y[0],S=y[1],A=Object(b.useState)("N/A"),C=Object(g.a)(A,2),P=C[0],N=C[1],T=Object(b.useState)(2),D=Object(g.a)(T,2),E=D[0],F=D[1],q=Object(b.useState)(),M=Object(g.a)(q,2),V=M[0],B=M[1],J=function(){var e=Object(O.a)(m.a.mark((function e(){var n,t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://free.currconv.com/api/v7/currencies?&apiKey=87b4f9fb2be631bed0c8");case 2:if(!(n=e.sent)){e.next=13;break}if(n.ok){e.next=7;break}return B("Something went wrong with fetching from the API, likely due to free-limit reached. Try again in 30 minutes."),e.abrupt("return");case 7:return B("API fetch successful. This site uses a free API and has a limit of calls per hour, which may break down if you change currencies too frequently."),e.next=10,n.json();case 10:t=e.sent,r(t.results),K(t.results);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K=function(e){var n=Object.keys(e).sort();u(n),h(n[0]),p(n[1]),L()};Object(b.useEffect)((function(){J()}),[]);var L=function(){var e=Object(O.a)(m.a.mark((function e(){var n,t,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://free.currconv.com/api/v7/convert?q=".concat(l,"_").concat(j,"&compact=ultra&apiKey=87b4f9fb2be631bed0c8"));case 2:if(!(n=e.sent)){e.next=14;break}if(n.ok){e.next=7;break}return B("Something went wrong with fetching from the API, likely due to free-limit reached. Try again in 30 minutes."),e.abrupt("return");case 7:return B("API fetch successful. This site uses a free API to get currency rates and has a limit of calls per hour, which may break down if you change currencies too frequently."),e.next=10,n.json();case 10:t=e.sent,r=t["".concat(l,"_").concat(j)],F(r),N(k*r);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.useEffect)((function(){L(),N(k*E)}),[l,j]),Object(v.jsx)("div",{className:"App",children:Object(v.jsxs)("header",{className:"App-header",children:[Object(v.jsx)("h2",{children:"Currency Exchanger"}),Object(v.jsxs)(w,{children:[Object(v.jsx)(z,{value:k,currency:l,setOtherValue:function(e){return S(n=e),void N(n*E);var n},setCurrency:function(e){return h(e)},currencyData:t,currencySelectOrder:i}),Object(v.jsx)(I,{onClick:function(e){return function(){var e=l;h(j),p(e)}()}}),Object(v.jsx)(z,{value:P,currency:j,setOtherValue:function(e){return N(n=e),void S(n/E);var n},setCurrency:function(e){return p(e)},currencyData:t,currencySelectOrder:i})]}),Object(v.jsx)("h6",{children:V})]})})},E=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,26)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,a=n.getLCP,i=n.getTTFB;t(e),r(e),c(e),a(e),i(e)}))};d.a.render(Object(v.jsx)(h.a.StrictMode,{children:Object(v.jsx)(D,{})}),document.getElementById("root")),E()}},[[25,1,2]]]);
//# sourceMappingURL=main.743eb330.chunk.js.map