(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a.p+"static/media/resume.ecba53d7.pdf"},17:function(e,t,a){e.exports=a(32)},22:function(e,t,a){},24:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),i=a(9),c=a.n(i),s=(a(22),a(4)),r=a(5),l=a(7),m=a(6),u=a(8),p=(a(24),a(26),a(3)),d=(a(28),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).toggle=function(){a.setState({isOpen:!a.state.isOpen})},a.state={isOpen:!1},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(p.e,{className:"navbar-custom"},o.a.createElement(p.g,{onClick:this.toggle,className:"navbar-toggler"}),o.a.createElement(p.f,{className:"brand-custom"},o.a.createElement("i",{className:"fas fa-user-tie padding-right"}),"Filip Saulean"),o.a.createElement(p.a,{isOpen:this.state.isOpen,navbar:!0},o.a.createElement(p.b,{navbar:!0,className:"navbar-custom-container"},o.a.createElement(p.c,{className:"nav-item"},o.a.createElement(p.d,{href:"#resume-container",className:"resume nav-link"},"Resume")),o.a.createElement(p.c,null,o.a.createElement(p.d,{href:"https://github.com/f-s-plus-plus",className:"github nav-link"},"GitHub")),o.a.createElement(p.c,null,o.a.createElement(p.d,{href:"https://mithridatium.io:81/home",className:"notepad nav-link"},"Notepad"))))))}}]),t}(o.a.Component)),h=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).sendLink=function(){window.location.href="https://www.britannica.com/biography/Mithradates-VI-Eupator"},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"profile-box"},o.a.createElement("div",{className:"profile-pic",onClick:this.sendLink}),o.a.createElement("p",{style:{textAlign:"center",borderBottom:"4px solid #d76179"}},"Who Am I?"),o.a.createElement("p",{className:"profile-text"},this.props.bio))}}]),t}(o.a.Component),f=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"welcome-box"},o.a.createElement("div",{className:"header-1"},"Hello, there!")),o.a.createElement("div",{className:"font-box"},o.a.createElement("i",{className:"fas fa-long-arrow-alt-down size-big"})))}}]),t}(o.a.Component),b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).toggle=function(){a.state.isOpen?a.setState({isOpen:!1,accordionStatus:"accordion-close"}):a.setState({isOpen:!0,accordionStatus:"accordion-open"})},a.createAccordionContent=function(){var e=a.props.description,t=[];return Object.keys(e).forEach(function(n){var i;i=""===e[n].link?o.a.createElement("button",{className:"empty-anchor-custom"}," ",e[n].name," "):o.a.createElement("a",{className:"anchors-custom",href:e[n].link}," ",e[n].name," "),t.push(o.a.createElement("div",{className:a.state.isOpen?"accordion-open":"accordion-close",ref:a.accordion},i))}),t},a.state={isOpen:!1,accordionStatus:"accordion-close"},a.accordion=o.a.createRef(),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.setState({isOpen:!1,accordionStatus:"accordion-close"})}},{key:"render",value:function(){return o.a.createElement("div",{className:"post"},o.a.createElement("div",null,o.a.createElement("button",{className:"post-head",onClick:this.toggle},this.props.title,o.a.createElement("i",{className:"fas fa-caret-down padding-left"})),this.createAccordionContent(),o.a.createElement("div",{className:this.state.isOpen?"div-fill":"div-no-fill"})))}}]),t}(o.a.Component),g=a(16),v=a.n(g),E={python:{name:"Python",link:"https://github.com/f-s-plus-plus/power-set"},java:{name:"Java",link:"https://github.com/f-s-plus-plus/immigration-forms-auto-filler"},javascript:{name:"JavaScript",link:"https://github.com/f-s-plus-plus/web-scrapper"},csharp:{name:"C#",link:"https://github.com/f-s-plus-plus/unity-game"},php:{name:"PHP",link:"https://github.com/f-s-plus-plus/photography-website"}},w={django:{name:"Django",link:"https://github.com/f-s-plus-plus/django-project"},node:{name:"Node.js",link:"https://github.com/f-s-plus-plus/web-scrapper"},react:{name:"React",link:"https://github.com/f-s-plus-plus/accordion-react"},jquery:{name:"jQuery",link:"https://github.com/f-s-plus-plus/cs-fair"}},k={personal:{name:"fsaulean@gmail.com",link:""},school:{name:"fsaulean@uvm.edu",link:""},phone:{name:"808-315-5313",link:""}},y={mysql:{name:"MySQL",link:"https://github.com/f-s-plus-plus/photography-website"},sqlite3:{name:"SQLite3",link:""},mongo:{name:"MongoDB",link:"https://github.com/f-s-plus-plus/cs-fair"}},O=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.2.0/css/all.css",integrity:"sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ",crossOrigin:"anonymous"}),o.a.createElement(d,null),o.a.createElement("div",{className:"container"},o.a.createElement(f,null),o.a.createElement("a",{id:"resume-container",className:"anchor-custom"},o.a.createElement(h,{bio:"Hello there, my name is Filip Saulean. I can unequivocally say that I am focused and dedicated to seeing my goals brought to fruition. In addition, I can assure you that I am a fast learner so if you need me to learn a new library or language, I will do so in an expedient manner. My personal site was built with React and node.js. PS: I am also fascinated with antiquity, Roman culture, and Hellenism."})),o.a.createElement(b,{title:"Languages",description:E}),o.a.createElement(b,{title:"Frameworks/Libraries",description:w}),o.a.createElement(b,{title:"Database Experiences",description:y}),o.a.createElement(b,{title:"Contact Information",description:k})),o.a.createElement("div",{className:"container"},o.a.createElement("a",{href:v.a,download:!0,className:"download-anchor"}," Download Resume ")),o.a.createElement("div",{className:"bottom-bar"},o.a.createElement("div",{className:"p1"}," Filip Saulean "),o.a.createElement("div",{className:"vertical-bar"}),o.a.createElement("a",{href:"https://reactjs.org/",className:"react-link"},o.a.createElement("i",{className:"fab fa-react react-brand"}," ")," Powered by React")))}}]),t}(n.Component),j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(o.a.createElement(O,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");j?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):N(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):N(e)})}}()}},[[17,2,1]]]);
//# sourceMappingURL=main.636de628.chunk.js.map