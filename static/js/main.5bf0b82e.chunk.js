(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(15),o=c.n(n),i=(c(23),c(24),c(16)),r=c(2),l=c(13),d=c(18),j=c(0),b=function(e){var t=Object(a.useState)({activeObject:null,objects:[{id:1},{id:2},{id:3},{id:4}]}),c=Object(d.a)(t,2),s=c[0],n=c[1];function o(e){return s.objects[e]===s.activeObject?"nav-link active":"nav-link"}return Object(j.jsx)("div",{id:"nav-menu",ref:e.toggle,children:Object(j.jsx)("ul",{className:"nav-list",children:s.objects.map((function(t,c){return Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{href:"#".concat(e.links[c]),className:o(c),onClick:function(){!function(e){n(Object(l.a)(Object(l.a)({},s),{},{activeObject:s.objects[e]}))}(c),e.toggle.current.classList.toggle("show")},children:e.links[c]})},c)}))})})},p=function(){var e=Object(a.useRef)(),t=Object(a.useRef)();return Object(j.jsxs)("nav",{className:"nav body",children:[Object(j.jsx)("div",{children:Object(j.jsx)("a",{href:"#Home",className:"nav-header",children:"Ben Pauley"})}),Object(j.jsx)(b,{links:["Home","About","Projects","Contact"],toggle:t}),Object(j.jsx)("div",{id:"nav-toggle",ref:e,children:Object(j.jsx)("i",{className:"bx bx-menu",onClick:function(){t.current.classList.toggle("show")}})})]})},m=function(){return Object(j.jsx)("header",{children:Object(j.jsx)(p,{})})},h=c.p+"static/media/BenPauley_CV.c6214a4e.pdf",u=c.p+"static/media/benCropped4.c08effa7.png",x=function(){return Object(j.jsxs)("section",{className:"home body",id:"home",children:[Object(j.jsxs)("div",{className:"home-data",children:[Object(j.jsxs)("h1",{className:"home-title",children:["Hi, I'm ",Object(j.jsx)("span",{className:"home-title-color",children:"Ben"}),", ",Object(j.jsx)("br",{}),"a Full Stack ",Object(j.jsx)("br",{}),"Web Developer"]}),Object(j.jsx)("a",{href:h,target:"_blank",rel:"noreferrer noopener",className:"button",children:"View CV"})]}),Object(j.jsxs)("div",{className:"home-social",children:[Object(j.jsx)("a",{href:"https://github.com/ben-pauley",target:"_blank",rel:"noreferrer noopener",className:"home-social-icon",children:Object(j.jsx)("i",{className:"bx bxl-github"})}),Object(j.jsx)("a",{href:"https://www.linkedin.com/in/ben-pauley-dev/",target:"_blank",rel:"noreferrer noopener",className:"home-social-icon",children:Object(j.jsx)("i",{className:"bx bxl-linkedin"})})]}),Object(j.jsx)("div",{className:"home-img",children:Object(j.jsx)("img",{src:u,alt:"ben"})})]})},O=c.p+"static/media/ben.efeb4d55.jpg",g=function(){return Object(j.jsxs)("section",{className:"about section",id:"about",children:[Object(j.jsx)("h2",{className:"section-title",children:"About"}),Object(j.jsxs)("div",{className:"about-container body",children:[Object(j.jsx)("div",{className:"about-img",children:Object(j.jsx)("img",{src:O,alt:""})}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{className:"about-subtitle",children:"I'm Ben"}),Object(j.jsx)("p",{className:"about-text",children:"I am a 21 year old full stack web developer based in Worcestershire, UK with skills in HTML, CSS, CSS Frameworks including Bootstrap, JavaScript, jQuery, Node.js and mySQL. I'm currently studying at the University of Birmingham Coding Boot Camp and spend most of my down time exploring my love of film and music. My passion for these arts has led me into a love of physical media too, with my Blu-ray and record collections ever expanding. These passions occasionally seep into my work as well, which you may see below."})]})]})]})},f=function(e){return Object(j.jsx)("div",{className:"project-img",children:Object(j.jsxs)("a",{href:e.deployed,target:"_blank",rel:"noreferrer noopener",children:[Object(j.jsx)("img",{src:e.img,alt:e.alt}),Object(j.jsxs)("div",{className:"image-overlay",children:[Object(j.jsx)("div",{className:"overlay-title",children:e.title}),Object(j.jsxs)("p",{className:"overlay-desc",children:[e.descLn1,Object(j.jsx)("br",{}),e.descLn2]}),Object(j.jsx)("div",{className:"repo-btn",children:Object(j.jsx)("a",{href:e.repo,target:"_blank",rel:"noreferrer noopener",className:"home-social-icon",children:Object(j.jsx)("i",{className:"bx bxl-github"})})})]})]})})},y=[{id:1,repo:"https://github.com/ben-pauley/mouldy-potatoes",deployed:"https://mouldy-potatoes.herokuapp.com/",img:c.p+"static/media/mouldyPotatoes.75e49979.png",alt:"mouldy potatoes",title:"Mouldy Potatoes",descLn1:"Full-Stack Film Review",descLn2:"Group Project"},{id:2,repo:"https://github.com/ben-pauley/Popcornpedia-Project",deployed:"https://ben-pauley.github.io/Popcornpedia-Project/",img:c.p+"static/media/popcornpedia.a0632939.png",alt:"popcornpedia",title:"Popcornpedia",descLn1:"API-Based Film Search",descLn2:"Group Project"},{id:3,repo:"https://github.com/ben-pauley/express-note-taker",deployed:"https://bjp-note-taker.herokuapp.com/",img:c.p+"static/media/noteTaker.5e456d26.png",alt:"note taker",title:"Note Taker",descLn1:"Full-Stack Express Application",descLn2:""},{id:4,repo:"https://github.com/ben-pauley/weather-dashboard",deployed:"https://ben-pauley.github.io/weather-dashboard",img:c.p+"static/media/weatherDashboard.e4f94c5f.png",alt:"weather dashboard",title:"Weather Dashboard",descLn1:"Front-End API-Based Application",descLn2:""},{id:5,repo:"https://github.com/ben-pauley/employee-tracker",deployed:"https://github.com/ben-pauley/employee-tracker",img:c.p+"static/media/employeeTracker.75391a33.png",alt:"employee tracker",title:"Employee Tracker",descLn1:"Back-End CLI Application",descLn2:""},{id:6,repo:"https://github.com/ben-pauley/team-profile-generator",deployed:"https://github.com/ben-pauley/team-profile-generator",img:c.p+"static/media/teamProfileGen.8f2c19a9.png",alt:"team profile generator",title:"Team Profile Generator",descLn1:"Back-End CMS Application",descLn2:""}].map((function(e){return Object(j.jsx)(f,{repo:e.repo,deployed:e.deployed,img:e.img,alt:e.alt,title:e.title,descLn1:e.descLn1,descLn2:e.descLn2})})),N=function(){return Object(j.jsxs)("section",{className:"project section",id:"projects",children:[Object(j.jsx)("h2",{className:"section-title",children:"Projects"}),Object(j.jsx)("div",{className:"project-container body",children:y})]})},v=function(){return Object(j.jsxs)("section",{className:"contact section",id:"contact",children:[Object(j.jsx)("h2",{className:"section-title",children:"Contact"}),Object(j.jsx)("div",{className:"contact-container body",children:Object(j.jsxs)("form",{action:"",className:"contact-form",children:[Object(j.jsx)("input",{type:"text",placeholder:"Name",className:"contact-input"}),Object(j.jsx)("input",{type:"mail",placeholder:"Email",className:"contact-input"}),Object(j.jsx)("textarea",{cols:"0",rows:"10",className:"contact-input"}),Object(j.jsx)("input",{type:"button",value:"Send",className:"button",id:"contact-button"})]})})]})},k=function(){return Object(j.jsxs)("footer",{className:"footer",children:[Object(j.jsx)("p",{className:"footer-title",children:"Ben Pauley"}),Object(j.jsx)("p",{children:"pauleybj@gmail.com"}),Object(j.jsx)("p",{children:"07123 456789"}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"footer-social",children:[Object(j.jsx)("a",{href:"https://github.com/ben-pauley",target:"_blank",rel:"noreferrer noopener",className:"footer-icon",children:Object(j.jsx)("i",{className:"bx bxl-github"})}),Object(j.jsx)("a",{href:"https://www.linkedin.com/in/ben-pauley-dev/",target:"_blank",rel:"noreferrer noopener",className:"footer-icon",children:Object(j.jsx)("i",{className:"bx bxl-linkedin"})})]})]})};var w=function(){return Object(j.jsx)(i.a,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(m,{}),Object(j.jsxs)("main",{children:[Object(j.jsx)(r.a,{path:"/Home",exact:!0,component:x}),Object(j.jsx)(r.a,{path:"/",exact:!0,component:x}),Object(j.jsx)(r.a,{path:"/About",component:g}),Object(j.jsx)(r.a,{path:"/Projects",component:N}),Object(j.jsx)(r.a,{path:"/Contact",component:v})]}),Object(j.jsx)(k,{})]})})},L=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,32)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,o=t.getTTFB;c(e),a(e),s(e),n(e),o(e)}))};o.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root")),L()}},[[31,1,2]]]);
//# sourceMappingURL=main.5bf0b82e.chunk.js.map