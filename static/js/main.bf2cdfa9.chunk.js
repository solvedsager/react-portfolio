(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,a,t){e.exports=t(27)},23:function(e,a,t){},27:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(15),s=t.n(r),c=(t(23),t(3)),i=t(4),m=t(6),o=t(5),u=t(7),p=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"sun"}),l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},"What can I do for you?"),l.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},e.name,". Dedicated ",e.role,".",e.roleDescription),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("i",{className:e.className})))})))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component),h=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:"images/profilepic.jpg",alt:""})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,e.aboutme),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e.name),l.a.createElement("br",null),l.a.createElement("span",null,e.address),l.a.createElement("br",null),l.a.createElement("span",null,e.email)))))))}}]),a}(n.Component),d=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.UniversityName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing)),l.a.createElement("p",null,e.Achievements)))}))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.CompanyName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfLeaving," ",e.YearOfLeaving)),l.a.createElement("p",null,e.Achievements)))}))),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("div",{className:"bars"},l.a.createElement("ul",{className:"skills"},e.skills&&e.skills.map(function(e){return l.a.createElement("li",null,l.a.createElement("span",{className:"bar-expand ".concat(e.skillname.toLowerCase())}),l.a.createElement("em",null,e.skillname))}))))))}}]),a}(n.Component),E=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Check Out Some of My Works."),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e.portfolio&&e.portfolio.map(function(e){return l.a.createElement("div",{className:"columns portfolio-item"},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("img",{src:"".concat(e.imgurl),className:"item-img"}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,e.name),l.a.createElement("p",null,e.description)))),l.a.createElement("a",{href:"".concat(e.location),target:"_blank"},l.a.createElement("div",{className:"linkButton"},"Check me out")))})))))}}]),a}(n.Component),f=t(13),v=t(16),b=t(17),g=t(29),N=t(30),w=t(31),k=t(32),O=function(e){var a=Object(n.useState)({name:"",email:"",subject:"",message:""}),t=Object(b.a)(a,2),r=t[0],s=t[1],c=r.name,i=r.email,m=r.subject,o=r.message,u=function(e){return s(Object(v.a)({},r,Object(f.a)({},e.target.name,e.target.value)))};return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"ten columns"},l.a.createElement(g.a,{className:"contactForm push",onSubmit:function(e){e.preventDefault()}},l.a.createElement("h2",{className:"header"},"Contact Me"),l.a.createElement(N.a,{className:"stretch"},l.a.createElement(w.a,{type:"name",name:"name",id:"exampleName",value:c,onChange:function(e){return u(e)},placeholder:"Name"})),l.a.createElement(N.a,null,l.a.createElement(w.a,{type:"email",name:"email",id:"exampleEmail",value:i,onChange:function(e){return u(e)},placeholder:"Email"})),l.a.createElement(N.a,null,l.a.createElement(w.a,{type:"subject",name:"subject",id:"exampleSubject",value:m,onChange:function(e){return u(e)},placeholder:"Subject"})),l.a.createElement(N.a,null,l.a.createElement(w.a,{type:"textarea",name:"message",value:o,onChange:function(e){return u(e)},id:"exampleMessage",placeholder:"Message"})),l.a.createElement(k.a,{className:"blue"},"Submit")))))},y=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",null,l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),j={imagebaseurl:"https://solvedsager.github.io/",name:"Sager Brown",role:"Full Stack Developer",linkedinId:"https://www.linkedin.com/in/sager-brown-7736a5138/",skypeid:"Your skypeid",roleDescription:" I enjoy helping companies communicate diverse sets of data effectively. ",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/sager-brown-7736a5138/",className:"fa fa-linkedin"},{name:"github",url:"http://github.com/solvedsager",className:"fa fa-github"},{name:"skype",url:"http://twitter.com/sager_brown",className:"fa fa-twitter"}],aboutme:"I am a web developer and designer with freelance experience. I'm intested in all forms of development, but my major focus is on improving UI for web, mobile, and tablet interfaces. I have the most experience using the MERN stack. ",address:"Austin, TX",email:"sager.brown@gmail.com",education:[{UniversityName:"The University of Texas at Austin",specialization:"Bachelors of Science in Biology",MonthOfPassing:"Dec",YearOfPassing:"2017",Achievements:"Minor in Psychology"},{specialization:"Certificate in Health IT and Informatics",MonthOfPassing:"Apr",YearOfPassing:"2018",Achievements:"9-week program working with hospitals to improve EHR(Electronic Health Records) UX and interoperability between platforms"}],work:[{CompanyName:"TORCH(Texas Organization of Rural and Community Hospitals)",specialization:"Front-End Developer",MonthOfLeaving:"Sept",YearOfLeaving:"2018",Achievements:"helped pilot a web dashboard for hospitals to share and analyze statistics"},{CompanyName:"Imperial Solutions",specialization:"Safety Consultant",MonthOfLeaving:"Oct",YearOfLeaving:"2018-",Achievements:"oversaw safety procedures at $100 million Westlake property"}],skillsDescription:"Web Development Skills",skills:[{skillname:"HTML5"},{skillname:"CSS"},{skillname:"React"},{skillname:"Javascript"},{skillname:"PHP"}],portfolio:[{name:"TORCH Dashboard",description:"dashboard for hospitals to share and analyze data",imgurl:"images/portfolio/torch.png",location:"https://blooming-mesa-07205.herokuapp.com/"},{name:"Imperial Solutions",description:"landing page",imgurl:"images/portfolio/imp.png",location:"https://solvedsager.github.io/imperialtraffic/"},{name:"Weather",description:"weather app using the React framework",imgurl:"images/portfolio/weather.png",location:"https://solvedsager.github.io/react-weather/"},{name:"Hacker News",description:"frontend for the Hacker News API",imgurl:"images/portfolio/hn.png",location:"https://solvedsager.github.io/hacker-news/"}],testimonials:[{description:"This is a sample testimonial",name:"Some technical guy"},{description:"This is a sample testimonial",name:"Some technical guy"}]},C=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p,{resumeData:j}),l.a.createElement(h,{resumeData:j}),l.a.createElement(d,{resumeData:j}),l.a.createElement(E,{resumeData:j}),l.a.createElement(O,{resumeData:j}),l.a.createElement(y,{resumeData:j}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,2,1]]]);
//# sourceMappingURL=main.bf2cdfa9.chunk.js.map