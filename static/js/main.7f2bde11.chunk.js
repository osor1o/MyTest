(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[0],{138:function(e,t,a){e.exports=a(271)},271:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(45),s=a.n(c),i=a(10),o=a(51),l=a(284),u=Object(i.b)({form:l.a}),m=(a(206),a(13)),d=a(38),p=a(137),h=a(12),E=a.n(h),v=a(24),f=a(32),b=a.n(f),g="https://geekmcz.com",y=window.localStorage;function x(){var e=j();return Boolean(e)}function j(){return y.getItem("token")}function O(e){y.setItem("token",e)}function k(){y.removeItem("token")}function w(e){return L.apply(this,arguments)}function L(){return(L=Object(v.a)(E.a.mark(function e(t){var a;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.post("".concat(g,"/auth"),t);case 3:return a=e.sent,O(a.data.token),e.abrupt("return",!0);case 9:return e.prev=9,e.t0=e.catch(0),k(),e.abrupt("return",!1);case 13:case"end":return e.stop()}},e,null,[[0,9]])}))).apply(this,arguments)}function S(){return k(),r.a.createElement(d.a,{to:"/"})}function N(){return C.apply(this,arguments)}function C(){return(C=Object(v.a)(E.a.mark(function e(){var t,a;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=j(),a={Authorization:"Bearer ".concat(t)},e.next=5,b.a.get("".concat(g,"/user/active/mail"),{headers:a});case 5:return e.abrupt("return",!0);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",!1);case 11:case"end":return e.stop()}},e,null,[[0,8]])}))).apply(this,arguments)}function A(){var e=j().split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),t=decodeURIComponent(atob(e).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(t)}var I=function(e){var t=e.component,a=Object(p.a)(e,["component"]);return r.a.createElement(d.b,Object.assign({},a,{render:function(e){return x()?r.a.createElement(t,e):r.a.createElement(d.a,{to:{pathname:"/",state:{from:e.location}}})}}))},U=a(16),D=a(17),M=a(19),z=a(18),B=a(20),H=function(e){return!!e.test&&e.children},V=a(273),_=a(135),Z=function(e){function t(){return Object(U.a)(this,t),Object(M.a)(this,Object(z.a)(t).apply(this,arguments))}return Object(B.a)(t,e),Object(D.a)(t,[{key:"componentDidMount",value:function(){document.title="Home"}},{key:"render",value:function(){return r.a.createElement(V.a,null,r.a.createElement(_.a,{xs:12},r.a.createElement("h2",null,"Bem Vindo!")),r.a.createElement(_.a,{xs:12},r.a.createElement("p",null,"Aplica\xe7\xe3o de teste para locadados, navegue pelo menu, cadastre-se e ative sua conta")),r.a.createElement(H,{test:x()},r.a.createElement(d.a,{to:"/perfil"})))}}]),t}(n.Component),F=a(280),J=a(278),P=function(e){return e?void 0:"Campo Obrigat\xf3rio."},R=function(e){return e&&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)?"Endere\xe7o de email inv\xe1lido.":void 0},T=function(e){return e&&!/^[a-z0-9]+$/gi.test(e)?"deve conter apenas letra e numero sem espa\xe7os.":void 0},$=function(e){return e&&!/^[a-z\xe1\xe0\xe2\xe3\xe9\xe8\xea\xed\xef\xf3\xf4\xf5\xf6\xfa\xe7\xf1 ]+ [a-z\xe1\xe0\xe2\xe3\xe9\xe8\xea\xed\xef\xf3\xf4\xf5\xf6\xfa\xe7\xf1 ]+$/i.test(e)?"nome completo e apenas com letras.":void 0},q=function(e){return/[0-9]/.test(e)&&/[A-Z]/.test(e)&&/[a-z]/.test(e)?void 0:"deve conter pelo menos uma letra min\xfascula, uma letra mai\xfascula e n\xfameros"},G=function(e,t){return e!==t.password_confirmation?"a senha e confirma\xe7\xe3o n\xe3o est\xe3o iguais.":void 0},K=a(279),Q=function(e){switch(e){case"name":return"Nome Completo";case"username":return"Nome de Usu\xe1rio";case"email":return"Email";case"password":return"Senha";case"password_confirmation":return"Confirmar Senha";default:return e}},W=function(e){var t=e.meta,a=t.touched,n=t.error,c=a&&n,s=e.label||Q(e.input.name);return r.a.createElement(K.a.Group,{controlId:e.input.name},r.a.createElement(K.a.Label,null,s),r.a.createElement(K.a.Control,Object.assign({disabled:e.disabled,placeholder:s},e.input,{type:e.type||"text",isInvalid:c})),r.a.createElement(K.a.Control.Feedback,{type:"invalid"},n))},X=a(274),Y=a(275),ee=function(e){var t=e.isLoading,a=e.text;return t?r.a.createElement(X.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")):r.a.createElement(Y.a,{type:"submit"},a)},te=a(282),ae=function(e){var t=e.data,a=e.status;return r.a.createElement(H,{test:t},r.a.createElement(te.a,{variant:"danger"},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(422===(arguments.length>1?arguments[1]:void 0))return function(e){var t=Object.keys(e);return r.a.createElement(r.a.Fragment,null,t.map(function(t){return r.a.createElement("div",{key:t},r.a.createElement("b",null,Q(t)),r.a.createElement("ul",{style:{margin:"0"}},e[t].map(function(e,t){return r.a.createElement("li",{key:t},e)})))}))}(e);return e.error||e}(t,a)))};var ne=function(e){function t(){var e,a;Object(U.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(M.a)(this,(e=Object(z.a)(t)).call.apply(e,[this].concat(r)))).state={title:"Entrar",isLoading:!1},a.submit=function(){var e=Object(v.a)(E.a.mark(function e(t){var n;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({isLoading:!0}),e.next=3,w(t);case 3:if(e.sent){e.next=7;break}"Usu\xe1rio ou senha inv\xe1lido.",n={data:"Usu\xe1rio ou senha inv\xe1lido."},a.setState({error:n});case 7:a.setState({isLoading:!1});case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(B.a)(t,e),Object(D.a)(t,[{key:"componentDidMount",value:function(){document.title=this.state.title}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.error,n=this.props.handleSubmit;return r.a.createElement(V.a,null,r.a.createElement(H,{test:x()},r.a.createElement(d.a,{to:"/perfil"})),r.a.createElement(_.a,{xs:12},r.a.createElement("h2",null,this.state.title)),r.a.createElement(_.a,{xs:12},r.a.createElement(ae,a)),r.a.createElement(_.a,{xs:12},r.a.createElement(K.a,{onSubmit:n(this.submit)},r.a.createElement(F.a,{name:"username",label:"Nome de Usu\xe1rio ou Email",type:"text",component:W,disabled:t,validate:P}),r.a.createElement(F.a,{name:"password",type:"password",component:W,disabled:t,validate:P}),r.a.createElement(ee,{text:"Entrar",isLoading:t}))))}}]),t}(n.Component),re=Object(J.a)({form:"signIn"})(ne),ce=function(e){function t(){var e,a;Object(U.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(M.a)(this,(e=Object(z.a)(t)).call.apply(e,[this].concat(r)))).state={title:"Criar Conta",isLoading:!1},a.submit=function(){var e=Object(v.a)(E.a.mark(function e(t){var n,r,c,s;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a.setState({isLoading:!0}),e.next=4,b.a.post("".concat(g,"/user"),t);case 4:return e.next=6,w(t);case 6:return e.next=8,N();case 8:e.next=15;break;case 10:e.prev=10,e.t0=e.catch(0),n=e.t0.response,r=n.data,c=n.status,s={data:r,status:c},a.setState({error:s});case 15:return e.prev=15,a.setState({isLoading:!1}),e.finish(15);case 18:case"end":return e.stop()}},e,null,[[0,10,15,18]])}));return function(t){return e.apply(this,arguments)}}(),a}return Object(B.a)(t,e),Object(D.a)(t,[{key:"componentDidMount",value:function(){document.title=this.state.title}},{key:"render",value:function(){var e,t=this.state,a=t.isLoading,n=t.error,c=this.props.handleSubmit;return r.a.createElement(V.a,null,r.a.createElement(H,{test:x()},r.a.createElement(d.a,{to:"/perfil"})),r.a.createElement(_.a,{xs:12},r.a.createElement("h2",null,this.state.title)),r.a.createElement(_.a,{xs:12},r.a.createElement(ae,n)),r.a.createElement(_.a,{xs:12},r.a.createElement(K.a,{onSubmit:c(this.submit)},r.a.createElement(F.a,{name:"name",type:"text",component:W,disabled:a,validate:[P,$]}),r.a.createElement(F.a,{name:"email",type:"email",component:W,disabled:a,validate:[P,R]}),r.a.createElement(F.a,{name:"username",type:"text",component:W,disabled:a,validate:[P,T]}),r.a.createElement(F.a,{name:"password",type:"password",component:W,disabled:a,validate:[P,q,(e=6,function(t){return t&&t.length<e?"M\xednimo de ".concat(e," caracteres."):void 0}),G]}),r.a.createElement(F.a,{name:"password_confirmation",type:"password",component:W,disabled:a,validate:P}),r.a.createElement(ee,{text:"Cadastrar",isLoading:a}))))}}]),t}(n.Component),se=Object(J.a)({form:"signUp"})(ce),ie=function(e){function t(){var e,a;Object(U.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(M.a)(this,(e=Object(z.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!0,title:"Ativa\xe7\xe3o",isValidHash:!0},a}return Object(B.a)(t,e),Object(D.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(E.a.mark(function e(){var t,a,n;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return document.title=this.state.title,this.setState({isLoading:!0}),e.prev=2,t=this.props.match.params,a=t.id,n=t.hash,e.next=6,b.a.get("".concat(g,"/user/active/").concat(a,"/").concat(n));case 6:this.setState({isValidHash:!0}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),this.setState({isValidHash:!1});case 12:return e.prev=12,this.setState({isLoading:!1}),e.finish(12);case 15:case"end":return e.stop()}},e,this,[[2,9,12,15]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.isValidHash;return r.a.createElement(V.a,null,r.a.createElement(_.a,{xs:12},r.a.createElement("h2",null,this.state.title)),r.a.createElement(H,{test:!t},r.a.createElement(_.a,{xs:12},r.a.createElement(te.a,{variant:"success"},r.a.createElement("h3",null,"Usu\xe1rio Ativado!"),r.a.createElement("p",null,"Seu usu\xe1rio foi ativado com sucesso, todos os recursos agora est\xe3o dispon\xedveis."),r.a.createElement(m.b,{to:"/"},r.a.createElement(Y.a,{variant:"success"},"Continue navegando"))))),r.a.createElement(H,{test:t},r.a.createElement(_.a,{xs:12,className:"text-center"},r.a.createElement(X.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))),r.a.createElement(H,{test:!a},r.a.createElement(d.a,{to:"/"})))}}]),t}(n.Component),oe=a(285),le=a(276),ue=a(95),me=a.n(ue),de=function(e){function t(){var e,a;Object(U.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(M.a)(this,(e=Object(z.a)(t)).call.apply(e,[this].concat(r)))).state={spinner:!0,avatar:!1,error:!1},a}return Object(B.a)(t,e),Object(D.a)(t,[{key:"render",value:function(){var e=this.setDisplay(this.state.avatar),t=this.setDisplay(this.state.spinner),a=this.state.error?me.a:this.props.src||me.a;return r.a.createElement(r.a.Fragment,null,r.a.createElement(le.a,{src:a,roundedCircle:!0,width:"150px",height:"150px",onLoad:this.handleImageLoaded.bind(this),onError:this.handleImageErrored.bind(this),className:e}),r.a.createElement(X.a,{animation:"border",role:"status",className:t},r.a.createElement("span",{className:"sr-only"},"Loading...")))}},{key:"setDisplay",value:function(e){return e?"d-inline":"d-none"}},{key:"handleImageLoaded",value:function(){this.setState({spinner:!1,avatar:!0})}},{key:"handleImageErrored",value:function(){this.setState({error:!0})}}]),t}(n.Component),pe=function(e){function t(){var e,a;Object(U.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(M.a)(this,(e=Object(z.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!1,sended:!1},a.sendEmail=Object(v.a)(E.a.mark(function e(){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({isLoading:!0}),e.next=3,N();case 3:a.setState({isLoading:!1,sended:!0});case 4:case"end":return e.stop()}},e)})),a}return Object(B.a)(t,e),Object(D.a)(t,[{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.sended;return r.a.createElement(_.a,{xs:12},r.a.createElement(H,{test:!a},r.a.createElement(te.a,{variant:"warning"},r.a.createElement("h3",null,"Usu\xe1rio Inativo!"),r.a.createElement("p",null,"\xc9 necess\xe1rio entrar em seu email para confirmar o cadastro, caso n\xe3o tenha recebido verifique a caixa de spam ou tente reenviar clicando no bot\xe3o abaixo."),r.a.createElement(H,{test:!t},r.a.createElement(Y.a,{variant:"warning",onClick:this.sendEmail},"Reenviar link de ativa\xe7\xe3o")),r.a.createElement(H,{test:t},r.a.createElement(X.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))))),r.a.createElement(H,{test:a},r.a.createElement(te.a,{variant:"success"},r.a.createElement("h3",null,"Reenviado com sucesso!"),r.a.createElement("p",null,"\xc9 necess\xe1rio entrar em seu email para confirmar o cadastro, caso n\xe3o tenha recebido verifique a caixa de spam."))))}}]),t}(n.Component),he=function(e){function t(){var e,a;Object(U.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(M.a)(this,(e=Object(z.a)(t)).call.apply(e,[this].concat(r)))).state={title:"Perfil",isLoading:!0,active:!0,data:{}},a}return Object(B.a)(t,e),Object(D.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(E.a.mark(function e(){var t,a,n,r,c,s;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return document.title=this.state.title,e.prev=1,t=A(),a=t.sub,n=j(),r={Authorization:"Bearer ".concat(n)},e.next=7,b.a.get("".concat(g,"/user/").concat(a),{headers:r});case 7:c=e.sent,s=c.data,this.setState({data:s}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),409===e.t0.response.status?this.setState({active:!1}):S();case 16:return e.prev=16,this.setState({isLoading:!1}),e.finish(16);case 19:case"end":return e.stop()}},e,this,[[1,12,16,19]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.active,n=this.state.data,c=n.username,s=n.email,i=n.name,o=n.gravatar;return r.a.createElement(V.a,{className:"justify-content-between"},r.a.createElement(H,{test:!t},r.a.createElement(_.a,{xs:12},r.a.createElement("h2",null,"Perfil")),r.a.createElement(H,{test:a},r.a.createElement(_.a,{md:3,sm:12,className:"text-center mt-3"},r.a.createElement(de,{src:o})),r.a.createElement(_.a,{md:9,sm:12,className:"mt-3"},r.a.createElement(oe.a,null,r.a.createElement(oe.a.Item,null,r.a.createElement("b",null,"Nome Completo"),": ",i),r.a.createElement(oe.a.Item,null,r.a.createElement("b",null,"Email"),": ",s),r.a.createElement(oe.a.Item,null,r.a.createElement("b",null,"Nome de Usu\xe1rio:"),": ",c)))),r.a.createElement(H,{test:!a},r.a.createElement(pe,null))),r.a.createElement(H,{test:t},r.a.createElement(_.a,{xs:12,className:"text-center"},r.a.createElement(X.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))),r.a.createElement(H,{test:!x()},r.a.createElement(d.a,{to:"/"})))}}]),t}(n.Component),Ee=function(){return r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/",component:Z}),r.a.createElement(d.b,{path:"/entrar",component:re,title:"Entrar"}),r.a.createElement(d.b,{path:"/criarconta",component:se}),r.a.createElement(d.b,{path:"/ativacao/:id/:hash",component:ie}),r.a.createElement(I,{path:"/perfil",component:he}),r.a.createElement(d.b,{path:"/sair",component:S}),r.a.createElement(d.a,{path:"*",to:"/"}))},ve=a(281),fe=a(283),be=function(e){return r.a.createElement(fe.a,{className:"mr-auto"},r.a.createElement(H,{test:x()},r.a.createElement(m.c,{to:"/perfil",className:"nav-link"},"Perfil"),r.a.createElement(m.c,{to:"/sair",className:"nav-link"},"Sair")),r.a.createElement(H,{test:!x()},r.a.createElement(m.c,{exact:!0,to:"/",className:"nav-link"},"Home"),r.a.createElement(m.c,{to:"/entrar",className:"nav-link"},"Entrar"),r.a.createElement(m.c,{to:"/criarconta",className:"nav-link"},"Criar Conta")))},ge=Object(d.g)(function(e){return r.a.createElement(be,e)}),ye=function(e){return r.a.createElement(ve.a,{bg:"light",expand:"lg"},r.a.createElement(ve.a.Brand,{href:"#home"},"My Test"),r.a.createElement(ve.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(ve.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(ge,null)))},xe=a(277),je=function(e){return r.a.createElement(xe.a,{className:"mt-3 mb-3"},e.children)},Oe=Object(i.c)(u);s.a.render(r.a.createElement(o.a,{store:Oe},r.a.createElement(function(e){return r.a.createElement(m.a,{basename:"/MyTest"},r.a.createElement(ye,null),r.a.createElement(je,null,r.a.createElement(Ee,null)))},null)),document.getElementById("root"))},95:function(e,t,a){e.exports=a.p+"static/media/avatar.9acfe78b.png"}},[[138,1,2]]]);
//# sourceMappingURL=main.7f2bde11.chunk.js.map