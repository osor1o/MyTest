(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[0],{102:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(33),s=a.n(c),i=(a(71),a(7)),o=a(27),l=a(65),u=a(6),m=a.n(u),d=a(10),h=a(22),p=a.n(h),E="https://geekmcz.com",v=window.localStorage;function f(){var e=v.getItem("token");return Boolean(e)}function b(){return v.getItem("token")}function g(e){v.setItem("token",e)}function j(){v.removeItem("token")}function x(e){return y.apply(this,arguments)}function y(){return(y=Object(d.a)(m.a.mark(function e(t){var a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.post("".concat(E,"/auth"),t);case 3:return a=e.sent,g(a.data.token),e.abrupt("return",!0);case 9:return e.prev=9,e.t0=e.catch(0),console.log(e.t0.response.data),j(),e.abrupt("return",!1);case 14:case"end":return e.stop()}},e,null,[[0,9]])}))).apply(this,arguments)}function O(){return j(),r.a.createElement(o.a,{to:"/"})}function k(){return w.apply(this,arguments)}function w(){return(w=Object(d.a)(m.a.mark(function e(){var t,a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=b(),a={Authorization:"Bearer ".concat(t)},e.next=5,p.a.get("http://geekmcz.com/user/active/mail",{headers:a});case 5:return e.abrupt("return",!0);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",!1);case 11:case"end":return e.stop()}},e,null,[[0,8]])}))).apply(this,arguments)}function C(){var e=b().split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),t=decodeURIComponent(atob(e).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(t)}var S=function(e){var t=e.component,a=Object(l.a)(e,["component"]);return r.a.createElement(o.b,Object.assign({},a,{render:function(e){return f()?r.a.createElement(t,e):r.a.createElement(o.a,{to:{pathname:"/",state:{from:e.location}}})}}))},L=a(14),N=a(15),I=a(17),A=a(16),D=a(18),M=function(e){return!!e.test&&e.children},B=a(104),H=a(62),U=function(e){function t(){return Object(L.a)(this,t),Object(I.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(D.a)(t,e),Object(N.a)(t,[{key:"componentDidMount",value:function(){document.title="Home"}},{key:"render",value:function(){return r.a.createElement(B.a,null,r.a.createElement(H.a,{xs:12},r.a.createElement("h2",null,"Bem Vindo!")),r.a.createElement(H.a,{xs:12},r.a.createElement("p",null,"Aplica\xe7\xe3o de teste para locadados, cadastre-se e ative sua conta")),r.a.createElement(M,{test:f()},r.a.createElement(o.a,{to:"/perfil"})))}}]),t}(n.Component),V=a(26),z=a(109),J=a(105),P=a(106),R=function(e){function t(e){var a;return Object(L.a)(this,t),(a=Object(I.a)(this,Object(A.a)(t).call(this,e))).state={title:"Entrar",alert:!1,isLoading:!1,data:{username:"",password:""}},a.handleChange=a.handleChange.bind(Object(V.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(V.a)(a)),a}return Object(D.a)(t,e),Object(N.a)(t,[{key:"componentDidMount",value:function(){document.title=this.state.title}},{key:"render",value:function(){var e=this.state.isLoading;return r.a.createElement(z.a,{onSubmit:this.handleSubmit},r.a.createElement(M,{test:f()},r.a.createElement(o.a,{to:"/perfil"})),r.a.createElement("h2",null,"Entrar"),this.renderInput("username","Nome de Usu\xe1rio ou Email"),this.renderInput("password","Senha","password"),e?r.a.createElement(J.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")):r.a.createElement(P.a,{type:"submit"},"Cadastrar"))}},{key:"renderInput",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text",n=this.state.isLoading,c=this.state.data[e];return r.a.createElement(z.a.Group,{controlId:e},r.a.createElement(z.a.Label,null,t),r.a.createElement(z.a.Control,{name:e,value:c,type:a,onChange:this.handleChange,disabled:n}))}},{key:"handleSubmit",value:function(){var e=Object(d.a)(m.a.mark(function e(t){var a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),this.setState({isLoading:!0}),a=this.state.data,e.next=6,x(a);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.response.data);case 11:return e.prev=11,this.setState({isLoading:!1}),e.finish(11);case 14:case"end":return e.stop()}},e,this,[[0,8,11,14]])}));return function(t){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){var t=this.state.data;t[e.target.name]=e.target.value,this.setState({data:t})}}]),t}(n.Component),T=function(e){function t(e){var a;return Object(L.a)(this,t),(a=Object(I.a)(this,Object(A.a)(t).call(this,e))).state={title:"Criar Conta",alert:!1,isLoading:!1,data:{name:"",email:"",username:"",password:"",password_confirmation:""}},a.handleChange=a.handleChange.bind(Object(V.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(V.a)(a)),a}return Object(D.a)(t,e),Object(N.a)(t,[{key:"componentDidMount",value:function(){document.title=this.state.title}},{key:"render",value:function(){var e=this.state.isLoading;return r.a.createElement(B.a,null,r.a.createElement(H.a,{xs:12},r.a.createElement("h2",null,this.state.title)),r.a.createElement(H.a,{xs:12},r.a.createElement(z.a,{onSubmit:this.handleSubmit},r.a.createElement(M,{test:f()},r.a.createElement(o.a,{to:"/perfil"})),this.renderInput("name","Nome Completo"),this.renderInput("email","Email","email"),this.renderInput("username","Nome de Usu\xe1rio"),this.renderInput("password","Senha","password"),this.renderInput("password_confirmation","Confirmar Senha","password"),e?r.a.createElement(J.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")):r.a.createElement(P.a,{type:"submit"},"Cadastrar"))))}},{key:"handleSubmit",value:function(){var e=Object(d.a)(m.a.mark(function e(t){var a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),this.setState({isLoading:!0}),a=this.state.data,e.next=6,p.a.post("".concat(E,"/user"),a);case 6:return e.next=8,x(a);case 8:return e.next=10,k();case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0.response.data);case 15:return e.prev=15,this.setState({isLoading:!1}),e.finish(15);case 18:case"end":return e.stop()}},e,this,[[0,12,15,18]])}));return function(t){return e.apply(this,arguments)}}()},{key:"renderInput",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text",n=this.state.isLoading,c=this.state.data[e];return r.a.createElement(z.a.Group,{controlId:e},r.a.createElement(z.a.Label,null,t),r.a.createElement(z.a.Control,{name:e,value:c,type:a,onChange:this.handleChange,disabled:n}))}},{key:"handleChange",value:function(e){var t=this.state.data;t[e.target.name]=e.target.value,this.setState({data:t})}}]),t}(n.Component),_=a(112),q=function(e){function t(){var e,a;Object(L.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(I.a)(this,(e=Object(A.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!0,title:"Ativa\xe7\xe3o",isValidHash:!0},a}return Object(D.a)(t,e),Object(N.a)(t,[{key:"componentDidMount",value:function(){var e=Object(d.a)(m.a.mark(function e(){var t,a,n,r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return document.title=this.state.title,this.setState({isLoading:!0}),e.prev=2,t=this.props.match.params,a=t.id,n=t.hash,e.next=6,p.a.get("".concat(E,"/user/active/").concat(a,"/").concat(n));case 6:r=e.sent,console.log(r.data),this.setState({isValidHash:!0}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),this.setState({isValidHash:!1});case 14:return e.prev=14,this.setState({isLoading:!1}),e.finish(14);case 17:case"end":return e.stop()}},e,this,[[2,11,14,17]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.isValidHash;return r.a.createElement(B.a,null,r.a.createElement(H.a,{xs:12},r.a.createElement("h2",null,this.state.title)),r.a.createElement(M,{test:!t},r.a.createElement(H.a,{xs:12},r.a.createElement(_.a,{variant:"success"},r.a.createElement("h3",null,"Usu\xe1rio Ativado!"),r.a.createElement("p",null,"Seu usu\xe1rio foi ativado com sucesso, todos os recursos agora est\xe3o dispon\xedveis."),r.a.createElement(i.b,{to:"/"},r.a.createElement(P.a,{variant:"success"},"Continue navegando"))))),r.a.createElement(M,{test:t},r.a.createElement(H.a,{xs:12,className:"text-center"},r.a.createElement(J.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))),r.a.createElement(M,{test:!a},r.a.createElement(o.a,{to:"/"})))}}]),t}(n.Component),G=a(107),F=a(113),K=a(63),Q=a.n(K),W=function(e){function t(){var e,a;Object(L.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(I.a)(this,(e=Object(A.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!1,sended:!1},a.sendEmail=Object(d.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({isLoading:!0}),e.next=3,k();case 3:a.setState({isLoading:!1,sended:!0});case 4:case"end":return e.stop()}},e)})),a}return Object(D.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.sended;return r.a.createElement(H.a,{xs:12},r.a.createElement(M,{test:!a},r.a.createElement(_.a,{variant:"warning"},r.a.createElement("h3",null,"Usu\xe1rio Inativo!"),r.a.createElement("p",null,"\xc9 necess\xe1rio entrar em seu email para confirmar o cadastro, caso n\xe3o tenha recebido verifique a caixa de spam ou tente reenviar clicando no bot\xe3o abaixo."),r.a.createElement(M,{test:!t},r.a.createElement(P.a,{variant:"warning",onClick:this.sendEmail},"Reenviar link de ativa\xe7\xe3o")),r.a.createElement(M,{test:t},r.a.createElement(J.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))))),r.a.createElement(M,{test:a},r.a.createElement(_.a,{variant:"success"},r.a.createElement("h3",null,"Reenviado com sucesso!"),r.a.createElement("p",null,"\xc9 necess\xe1rio entrar em seu email para confirmar o cadastro, caso n\xe3o tenha recebido verifique a caixa de spam."))))}}]),t}(n.Component),X=function(e){function t(){var e,a;Object(L.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(I.a)(this,(e=Object(A.a)(t)).call.apply(e,[this].concat(r)))).state={title:"Perfil",isLoading:!0,active:!0,data:{}},a}return Object(D.a)(t,e),Object(N.a)(t,[{key:"componentDidMount",value:function(){var e=Object(d.a)(m.a.mark(function e(){var t,a,n,r,c,s;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return document.title=this.state.title,e.prev=1,t=C(),a=t.sub,n=b(),r={Authorization:"Bearer ".concat(n)},e.next=7,p.a.get("".concat(E,"/user/").concat(a),{headers:r});case 7:c=e.sent,s=c.data,this.setState({data:s}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),409===e.t0.response.status?this.setState({active:!1}):O();case 16:return e.prev=16,this.setState({isLoading:!1}),e.finish(16);case 19:case"end":return e.stop()}},e,this,[[1,12,16,19]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.active,n=this.state.data,c=n.username,s=n.email,i=n.name;return r.a.createElement(B.a,{className:"justify-content-between"},r.a.createElement(M,{test:!t},r.a.createElement(H.a,{xs:12},r.a.createElement("h2",null,"Perfil")),r.a.createElement(M,{test:a},r.a.createElement(H.a,{md:3,sm:12,className:"text-center mt-3"},r.a.createElement(G.a,{src:Q.a,roundedCircle:!0,width:"150px",height:"150px"})),r.a.createElement(H.a,{md:9,sm:12,className:"mt-3"},r.a.createElement(F.a,null,r.a.createElement(F.a.Item,null,r.a.createElement("b",null,"Nome Completo"),": ",i),r.a.createElement(F.a.Item,null,r.a.createElement("b",null,"Email"),": ",s),r.a.createElement(F.a.Item,null,r.a.createElement("b",null,"Nome de Usu\xe1rio:"),": ",c)))),r.a.createElement(M,{test:!a},r.a.createElement(W,null))),r.a.createElement(M,{test:t},r.a.createElement(H.a,{xs:12,className:"text-center"},r.a.createElement(J.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))),r.a.createElement(M,{test:!f()},r.a.createElement(o.a,{to:"/"})))}}]),t}(n.Component),Y=function(){return r.a.createElement(o.d,null,r.a.createElement(o.b,{exact:!0,path:"/",component:U}),r.a.createElement(o.b,{path:"/entrar",component:R,title:"Entrar"}),r.a.createElement(o.b,{path:"/criarconta",component:T}),r.a.createElement(S,{path:"/ativacao/:id/:hash",component:q}),r.a.createElement(S,{path:"/perfil",component:X}),r.a.createElement(o.b,{path:"/sair",component:O}),r.a.createElement(o.a,{path:"*",to:"/"}))},Z=a(110),$=a(111),ee=function(e){return r.a.createElement($.a,{className:"mr-auto"},r.a.createElement(M,{test:f()},r.a.createElement(i.c,{to:"/perfil",className:"nav-link"},"Perfil"),r.a.createElement(i.c,{to:"/sair",className:"nav-link"},"Sair")),r.a.createElement(M,{test:!f()},r.a.createElement(i.c,{exact:!0,to:"/",className:"nav-link"},"Home"),r.a.createElement(i.c,{to:"/entrar",className:"nav-link"},"Entrar"),r.a.createElement(i.c,{to:"/criarconta",className:"nav-link"},"Criar Conta")))},te=Object(o.g)(function(e){return r.a.createElement(ee,e)}),ae=function(e){return r.a.createElement(Z.a,{bg:"light",expand:"lg"},r.a.createElement(Z.a.Brand,{href:"#home"},"My Test"),r.a.createElement(Z.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(Z.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(te,null)))},ne=a(108),re=function(e){return r.a.createElement(ne.a,{className:"mt-3 mb-3"},e.children)};s.a.render(r.a.createElement(function(e){return r.a.createElement(i.a,{basename:"/MyTest"},r.a.createElement(ae,null),r.a.createElement(re,null,r.a.createElement(Y,null)))},null),document.getElementById("root"))},63:function(e,t,a){e.exports=a.p+"static/media/avatar.9acfe78b.png"},66:function(e,t,a){e.exports=a(102)}},[[66,1,2]]]);
//# sourceMappingURL=main.a2d0735a.chunk.js.map