(this["webpackJsonptake-a-quiz"]=this["webpackJsonptake-a-quiz"]||[]).push([[0],Array(28).concat([function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),i=n.n(s),a=n(20),o=n.n(a),c=(n(28),n(5)),r=n(6),l=n(8),j=n(7),d=n(2),u=(n(29),n(30),n(31),n(3)),h=n(0),A=function(e){var t=e.selection;return Object(h.jsxs)("div",{className:"home-nav-main",children:[t?Object(h.jsx)("h2",{children:"Pick Your Choice!"}):"",Object(h.jsx)("nav",{children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{className:"login",children:Object(h.jsx)(u.b,{to:"/login",children:"Login"})}),Object(h.jsx)("li",{className:"register",children:Object(h.jsx)(u.b,{to:"/register",children:"Register"})})]})})]})},p=(n(38),n.p+"static/media/man-illus.d2db7135.gif"),m=n.p+"static/media/woman-illus.d5b747de.gif",b=function(){return Object(h.jsxs)("div",{className:"main",children:[Object(h.jsx)("img",{id:"man",src:p,alt:"man-illus"}),Object(h.jsxs)("div",{className:"title",children:[Object(h.jsx)("h1",{className:"heading",children:"Take a Quiz..."}),Object(h.jsx)(u.b,{to:"/selection",children:Object(h.jsx)("button",{className:"do-button",children:"LET'S DO THIS"})})]}),Object(h.jsx)("img",{id:"woman",src:m,alt:"woman-illus"})]})},O=(n(39),function(){return Object(h.jsx)("footer",{children:Object(h.jsxs)("h3",{children:["Made with ",Object(h.jsx)("span",{style:{color:"red"},children:"\u2764"})," by stee1ix"]})})}),g=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"homepage-main",children:[Object(h.jsx)(A,{}),Object(h.jsx)(b,{}),Object(h.jsx)(O,{})]})}}]),n}(i.a.Component),x=n(12),v=(n(40),function(e){var t=e.name,n=(e.value,e.type),s=e.onChange;return Object(h.jsx)("div",{className:"credential-main",children:Object(h.jsxs)("div",{className:"form",children:[Object(h.jsx)("input",{required:!0,autoComplete:"off",spellCheck:"false",type:n,id:t,onChange:s}),Object(h.jsx)("label",{htmlFor:t,className:"label-name",children:Object(h.jsx)("span",{className:"content-name",children:t})})]})})}),f=(n(41),[{username:"stee1ix",password:"123",attempted:5,rank:1,total:23}]),w=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).handleUsernameChange=function(e){s.setState({username:e.target.value})},s.handlePasswordChange=function(e){s.setState({password:e.target.value})},s.handleSubmit=function(e){f.forEach((function(e){e.username===s.state.username&&e.password===s.state.password&&s.props.loadUser(e)})),e.preventDefault()},s.state={username:"",password:""},s.handleUsernameChange=s.handleUsernameChange.bind(Object(x.a)(s)),s.handlePasswordChange=s.handlePasswordChange.bind(Object(x.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(x.a)(s)),s}return Object(r.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"login-main",children:[Object(h.jsxs)("div",{className:"login-title",children:[Object(h.jsx)("h1",{className:"login",children:"Login"}),Object(h.jsx)("h3",{className:"dive-deep",children:"Dive deep into the sea of quizzes"})]}),Object(h.jsxs)("form",{children:[Object(h.jsx)(v,{name:"Username",type:"text",onChange:this.handleUsernameChange}),Object(h.jsx)(v,{name:"Password",type:"password",onChange:this.handlePasswordChange}),Object(h.jsx)("button",{onClick:this.handleSubmit,type:"submit",className:"login-button",children:"LOGIN"})]}),Object(h.jsxs)("h4",{className:"login-option",children:["Don't have an account!"," ",Object(h.jsx)(u.b,{to:"./register",children:Object(h.jsx)("span",{style:{color:"#13c7ee"},children:"Register"})})]})]})}}]),n}(i.a.Component),C=(n(42),n.p+"static/media/logout_astra.5ae007f6.jpg"),N=n.p+"static/media/arrow.9373140c.svg",z=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.props.logout()}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"logout-main",children:[Object(h.jsx)("div",{className:"logout-nav",children:Object(h.jsx)(u.b,{to:"/",children:Object(h.jsxs)("div",{className:"return-button",children:[Object(h.jsx)("h3",{className:"logout-nav-text",children:"Return to Home"}),Object(h.jsx)("img",{className:"return-arrow",src:N,alt:"Arrow"})]})})}),Object(h.jsxs)("div",{className:"logout-container",children:[Object(h.jsx)("div",{className:"logout-text",children:"Come back again to play more..."}),Object(h.jsx)("img",{src:C,alt:"LogoutAstra"})]}),Object(h.jsx)(O,{})]})}}]),n}(i.a.Component),S=(n(43),n(44),n.p+"static/media/001-man.4b684e29.svg"),I=function(e){var t=e.username,n=e.profile;return Object(h.jsx)("div",{className:"navbar-main",children:Object(h.jsxs)("nav",{className:"nav",children:[Object(h.jsx)("h2",{children:n?Object(h.jsx)(u.b,{to:"/selection",children:"Take a Quiz..."}):"Let's Do This!"}),Object(h.jsx)("div",{className:"options",children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(u.b,{to:"/profile",children:Object(h.jsx)("img",{className:n?"profileIcon hidden":"profileIcon",src:S,alt:""})})}),Object(h.jsx)("li",{children:Object(h.jsx)(u.b,{to:"/profile",children:t})}),Object(h.jsx)(u.b,{to:"/logout",children:Object(h.jsx)("li",{className:"logout",children:"Logout"})})]})})]})})},E=(n(45),function(e){var t=e.title,n=e.value;return Object(h.jsxs)("div",{className:"stat-main",children:[Object(h.jsx)("h3",{children:t}),Object(h.jsx)("hr",{}),Object(h.jsx)("h6",{children:n})]})}),U=function(e){var t=e.user,n=t.username,s=t.attempted,i=t.rank,a=t.total;return Object(h.jsxs)("div",{className:"profile-main",children:[Object(h.jsx)(I,{username:n,profile:!0}),Object(h.jsxs)("div",{className:"profile-content",children:[Object(h.jsxs)("div",{className:"profile-icon",children:[Object(h.jsx)("img",{src:S,alt:"profile icon"}),Object(h.jsx)("h3",{children:n})]}),Object(h.jsxs)("div",{className:"stats",children:[Object(h.jsx)(E,{className:"attempted",title:"Attempted",value:s}),Object(h.jsx)(E,{className:"rank",title:"Rank",value:i}),Object(h.jsx)(E,{className:"total",title:"Total Points",value:a})]})]}),Object(h.jsx)("div",{className:"footer",children:Object(h.jsx)(O,{})})]})},k=(n(46),function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).handleUsernameChange=function(e){s.setState({username:e.target.value})},s.handlePasswordChange=function(e){s.setState({password:e.target.value})},s.handleSubmit=function(e){s.props.registerUser(s.state).then((function(e){return s.props.loadUser(e)})),e.preventDefault()},s.state={username:"",password:""},s.handleUsernameChange=s.handleUsernameChange.bind(Object(x.a)(s)),s.handlePasswordChange=s.handlePasswordChange.bind(Object(x.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(x.a)(s)),s}return Object(r.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"register-main",children:[Object(h.jsxs)("div",{className:"register-title",children:[Object(h.jsx)("h1",{className:"register",children:"Register"}),Object(h.jsx)("h3",{className:"dive-deep",children:"Dive deep into the sea of questions"})]}),Object(h.jsxs)("form",{children:[Object(h.jsx)(v,{name:"Username",type:"text",onChange:this.handleUsernameChange}),Object(h.jsx)(v,{name:"Password",type:"password",onChange:this.handlePasswordChange}),Object(h.jsx)("button",{onClick:this.handleSubmit,className:"regsiter-button",children:"REGISTER"})]}),Object(h.jsxs)("h4",{className:"login-option",children:["Already have an account!"," ",Object(h.jsx)(u.b,{to:"./login",children:Object(h.jsx)("span",{style:{color:"#13c7ee"},children:"Login"})})]})]})}}]),n}(i.a.Component)),M=n(22),y=n(23),q=[{id:1,name:"Sports",routeName:"/sports",topics:[{id:1,name:"Football",imageUrl:"football",questions:[{id:1,question:"Which player scored the fastest hat-trick in the Premier League?",option1:"1. Sadio Mane ",option2:"2. Ronaldo",option3:"3. Rooney",option4:"4. Bale",correctOption:1},{id:2,question:"Which team won the first Premier League title?",option1:"1. Liverpool",option2:"2. Blackburn Rovers",option3:"3. Manchester United",option4:"4. Chelsea",correctOption:3},{id:3,question:"The fastest goal scored in Premier League history came in 7.69 seconds. Who scored it?",option1:"1. Roberto Firmino",option2:"2. Shane Long",option3:"3. Peter Crouch",option4:"4. Sergio Aguero",correctOption:2},{id:4,question:"Which country has won the most World Cups?",option1:"1. Germany",option2:"2. Brazil",option3:"3. France",option4:"4. Argentina",correctOption:2},{id:5,question:"The record number of World Cup goals is 16, scored by who?",option1:"1. Lionel Messi",option2:"2. Cristiano Ronadlo",option3:"3. Toni Kroos",option4:"4. Miroslav Klose",correctOption:4},{id:6,question:"Which Portuguese team did Ronaldo play for before signing for Manchester United?",option1:"1. Sporting Lisbon",option2:"2. Real Madrid",option3:"3. Malmo",option4:"4. PSG",correctOption:1},{id:7,question:"Which German multinational sportswear company is Messi an ambassador for?",option1:"1. Nike",option2:"2. Puma",option3:"3. Adidas",option4:"4. New Balance",correctOption:3},{id:8,question:"Ronaldo helped Portugal win the European Championship in which year?",option1:"1. 2016",option2:"2. 2005",option3:"3. 2012",option4:"4. 2017",correctOption:1},{id:9,question:"Which club has won the most Champions League titles?",option1:"1. Bayern Munich",option2:"2. Manchester United",option3:"3. Real Madrid",option4:"4. AC Milan",correctOption:3},{id:10,question:"In video game FIFA 20, team Piemonte Calcio represents which real-life club?",option1:"1. FC Barcelona",option2:"2. FC Porto",option3:"3. Inter Milan",option4:"4. Juventus",correctOption:4}]},{id:2,name:"Cricket",imageUrl:"cricket"},{id:3,name:"Basketball",imageUrl:"basketball"},{id:4,name:"Olympics",imageUrl:"olympic"}]},{id:2,name:"Programming",routeName:"/programming",topics:[{id:1,name:"C++",imageUrl:"cpp"},{id:2,name:"Python",imageUrl:"python"},{id:3,name:"Java",imageUrl:"java"},{id:4,name:"CSS",imageUrl:"css"},{id:5,name:"HTML",imageUrl:"html"}]}],L=(n(47),n(48),function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,i=new Array(s),a=0;a<s;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).option1Click=function(){1===e.props.correctOption?e.props.correctAnswer():e.props.onResponse()},e.option2Click=function(){2===e.props.correctOption?e.props.correctAnswer():e.props.onResponse()},e.option3Click=function(){3===e.props.correctOption?e.props.correctAnswer():e.props.onResponse()},e.option4Click=function(){4===e.props.correctOption?e.props.correctAnswer():e.props.onResponse()},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props,t=e.question,n=e.option1,s=e.option2,i=e.option3,a=e.option4;return Object(h.jsxs)("div",{className:"question-main",children:[Object(h.jsx)("div",{className:"question",children:Object(h.jsx)("h5",{children:t})}),Object(h.jsxs)("div",{className:"ques-options",children:[Object(h.jsx)("div",{onClick:this.option1Click,className:"option1",children:Object(h.jsx)("h5",{children:n})}),Object(h.jsx)("div",{onClick:this.option2Click,className:"option2",children:Object(h.jsx)("h5",{children:s})}),Object(h.jsx)("div",{onClick:this.option3Click,className:"option3",children:Object(h.jsx)("h5",{children:i})}),Object(h.jsx)("div",{onClick:this.option4Click,className:"option4",children:Object(h.jsx)("h5",{children:a})})]})]})}}]),n}(i.a.Component)),Q={score:0,currentQuestion:0},B=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).onResponse=function(){s.setState({currentQuestion:s.state.currentQuestion+1})},s.correctAnswer=function(){s.setState({score:s.state.score+1,currentQuestion:s.state.currentQuestion+1})},s.state=Q,s}return Object(r.a)(n,[{key:"render",value:function(){console.log(this.state);var e=this.state,t=e.currentQuestion,n=e.score,s=this.props.questions;return Object(h.jsx)("div",{className:"playing-main",children:t<s.length?Object(h.jsx)(L,{question:s[t].question,option1:s[t].option1,option2:s[t].option2,option3:s[t].option3,option4:s[t].option4,correctAnswer:this.correctAnswer,correctOption:s[t].correctOption,onResponse:this.onResponse},s[t].id):Object(h.jsxs)("div",{className:"result-main",children:[Object(h.jsx)("h1",{className:"result-message",children:"Well Done !"}),Object(h.jsx)("hr",{}),Object(h.jsxs)("div",{className:"score-img",children:[Object(h.jsx)("img",{src:"data:image/jpeg;base64,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",alt:""}),Object(h.jsxs)("div",{className:"score",children:[Object(h.jsx)("h2",{children:"You're score is"}),Object(h.jsxs)("h1",{children:[n,"/",Object(h.jsx)("span",{className:"total-score",children:s.length})]})]})]})]})})}}]),n}(i.a.Component),D=(n(49),n(50),n.p+"static/media/football.308d7d5e.jpg"),R=n.p+"static/media/cricket.43494f86.jpg",P=n.p+"static/media/basketball.0b648307.jpg",W=n.p+"static/media/olympic.3e2b18b2.svg",V=n.p+"static/media/c++.2441702d.svg",Y=n.p+"static/media/python.063da199.svg",F=n.p+"static/media/java.3c5854fc.svg",J=n.p+"static/media/css.5da907d7.svg",T=n.p+"static/media/html.aff8a9cb.svg",K=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,i=new Array(s),a=0;a<s;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).openQuizTrigger=function(t){e.props.openQuiz(e.props.questions),t.preventDefault()},e.imageName=function(e){switch(e){case"football":return D;case"cricket":return R;case"basketball":return P;case"olympic":return W;case"cpp":return V;case"python":return Y;case"java":return F;case"html":return T;case"css":return J}},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.isSignedIn,s=e.imageUrl;return Object(h.jsxs)("div",{className:"topic-item",children:[Object(h.jsx)("div",{className:"image",children:n?Object(h.jsx)("img",{onClick:this.openQuizTrigger,src:this.imageName(s),alt:""}):Object(h.jsx)(u.b,{to:"/login",children:Object(h.jsx)("img",{src:this.imageName(s),alt:""})})}),Object(h.jsx)("h4",{children:t})]})}}]),n}(i.a.Component),Z=function(e){var t=e.name,n=e.topics,s=e.openQuiz,i=e.isSignedIn;return Object(h.jsxs)("div",{className:"selection-group-main",children:[Object(h.jsxs)("div",{className:"group-title",children:[Object(h.jsx)("h3",{children:t}),Object(h.jsx)("hr",{})]}),Object(h.jsx)("div",{className:"topics-section",children:n.map((function(e){return Object(h.jsx)(K,{name:e.name,imageUrl:e.imageUrl,questions:e.questions,openQuiz:s,isSignedIn:i},e.id)}))}),Object(h.jsx)("div",{className:"arrow",children:Object(h.jsx)("img",{src:N,alt:"Arrow"})})]})},G=(n(51),function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).openQuiz=function(e){s.setState({isOn:!0,questions:e})},s.state={groups:q,isOn:!1,questions:[]},s}return Object(r.a)(n,[{key:"render",value:function(){var e=this;console.log(this.state.questions);var t=this.state.groups;return Object(h.jsx)("div",{className:"quiz-main",children:this.state.isOn?Object(h.jsx)(B,{questions:this.state.questions}):Object(h.jsx)("div",{className:"selection-category-main",children:t.map((function(t){var n=t.id,s=Object(y.a)(t,["id"]);return Object(h.jsx)(Z,Object(M.a)({openQuiz:e.openQuiz,isSignedIn:e.props.isSignedIn},s),n)}))})})}}]),n}(i.a.Component)),H=(n(52),function(e){var t=e.username,n=e.isSignedIn;return Object(h.jsxs)("div",{className:"selection-main",children:[t?Object(h.jsx)(I,{username:t}):Object(h.jsx)(A,{selection:!0}),Object(h.jsx)(G,{isSignedIn:n}),Object(h.jsx)(O,{})]})}),X={isSignedIn:!1,user:{username:"",attempted:0,rank:0,total:0}},$=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).loadUser=function(t){e.setState({isSignedIn:!0,user:{username:t.username,attempted:t.attempted,rank:t.rank,total:t.total}})},e.logout=function(){e.setState(X)},e.registerUser=function(e){var t=e.username,n=e.password;return new Promise((function(e,s){f.push({username:t,password:n,attempted:0,rank:0,total:0}),console.log(f),e({username:t,password:n,attempted:0,rank:0,total:0})}))},e.state=X,e}return Object(r.a)(n,[{key:"render",value:function(){return console.log(this.state),Object(h.jsx)("div",{className:"app",children:Object(h.jsxs)(d.d,{children:[Object(h.jsx)(d.b,{exact:!0,path:"/",component:g}),Object(h.jsx)(d.b,{exact:!0,path:"/login",children:this.state.isSignedIn?Object(h.jsx)(d.a,{exact:!0,to:"/selection"}):Object(h.jsx)(w,{loadUser:this.loadUser,routeChange:this.routeChange})}),Object(h.jsx)(d.b,{exact:!0,path:"/register",children:this.state.isSignedIn?Object(h.jsx)(d.a,{to:"/selection"}):Object(h.jsx)(k,{registerUser:this.registerUser,loadUser:this.loadUser,routeChange:this.routeChange})}),Object(h.jsx)(d.b,{path:"/selection",children:Object(h.jsx)(H,{username:this.state.user.username,openQuiz:this.openQuiz,isSignedIn:this.state.isSignedIn})}),Object(h.jsx)(d.b,{path:"/profile",children:Object(h.jsx)(U,{user:this.state.user})}),Object(h.jsx)(d.b,{path:"/logout",children:Object(h.jsx)(z,{logout:this.logout})})]})})}}]),n}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),s(e),i(e),a(e),o(e)}))};o.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(u.a,{basename:"/take-a-quiz",children:Object(h.jsx)($,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),_()}]),[[53,1,2]]]);
//# sourceMappingURL=main.423593e0.chunk.js.map