(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{146:function(e,t,a){"use strict";a.r(t);a(160);var n=a(7),i=a.n(n),r=a(0),o=a.n(r),l=a(200),s=a(164),c=a(149),m=a(156),p=a(158),d=a(159),u=a(157),f=function(e){var t=e.className,a=e.name;e.level;return o.a.createElement("div",{className:t},o.a.createElement("label",{htmlFor:a+"-bar"},a),o.a.createElement("div",{id:a+"-bar",className:"skill__bar"},o.a.createElement("div",{className:"skill__level"})))};f.displaName="SkillBar";var h=Object(c.default)(f).withConfig({displayName:"skill-bar",componentId:"sc-1nbplux-0"})([".skill__bar{height:10px;background-color:lightgrey;padding:1px;}.skill__level{background-color:#25303B;width:","%;height:8px;}"],function(e){return e.level||0}),g=a(161),b=a.n(g);function x(){var e=b()(["\n  .timeline__item div.inner {\n    width: 40%;\n    margin: 5px 0 0 0;\n  }\n\n  .timeline__item div.inner h2:after {\n    top: 20px;\n    left: unset;\n    right: -5px;\n  }\n  .timeline__item:nth-child(2n+2) div.inner h2:after {\n    left: -5px;\n  }\n\n  "]);return x=function(){return e},e}var y=[{company:"Conexos",begin:{month:"aug",year:"2018"},duration:"4 mos",occupation:"Back-end Web Developer",description:"Software Engineering activities and technologies, including but not limited to JAVA, Spring Boot, and Oracle PL/SQL."},{company:"Lynx Process",begin:{month:"nov",year:"2015"},duration:"1 yr 2 mos",occupation:"Constrol Systems Software Engineer",description:"Development of stockpile management and robotic control systems using C#/ Unity3D and MATLAB, including automation of stockyard machine operations for Vale SafeArray."},{company:"APPI Tecnologia",begin:{month:"set",year:"2014"},duration:"10 mos",occupation:"Platform Developer",description:"Development in C/C++ for embedded systems (POSes)."},{company:"PadTec",begin:{month:"apr",year:"2012"},duration:"1 yr 7 mos",occupation:"Intern",description:"Development in C/C++ for optical transport networks emulators, following the ITU-T recommendations for OTN technology."}],v=Object(c.default)(function(e){var t=e.className;return o.a.createElement("div",{className:t},o.a.createElement("h1",null,"Experiences"),y.map(function(e){return o.a.createElement("article",{key:e.begin.month+e.begin.year,className:"timeline__item"},o.a.createElement("div",{className:"inner"},o.a.createElement("span",{className:"timeline__date"},o.a.createElement("span",{className:"timeline__month"},e.begin.month),o.a.createElement("span",{className:"timeline__year"},e.begin.year)),o.a.createElement("h2",{className:"timeline__title"},e.occupation," at ",e.company," ",o.a.createElement("br",null),o.a.createElement("small",{className:"timeline__title--small"},"(",e.duration||"até o momento",")")),o.a.createElement("p",null,e.description)))}))}).withConfig({displayName:"timeline",componentId:"sc-1jstdm-0"})(["position:relative;:before{content:'';display:block;position:absolute;left:50%;top:0;margin:70px 0 0 -1px;width:1px;height:calc(100% - 70px);background:#25303b;}.timeline__item{width:100%;margin:0 0 20px 0;position:relative;}.timeline__item:after{content:'';display:block;clear:both;}.timeline__item div.inner{width:100%;float:left;margin:85px 0 0 0;border-radius:6px;border:1px solid #25303b;}.timeline__date{display:block;width:60px;padding:10px 5px;position:absolute;top:0;left:50%;margin:0 0 0 -30px;border-radius:100%;font-size:12px;font-weight:900;text-transform:uppercase;background:#25303b;color:#fff;box-shadow:0 0 0 7px #fff;}.timeline__date span{display:block;text-align:center;}.timeline__month{font-size:18px;padding-top:4px;}.timeline__year{font-size:10px;}.timeline__title{padding:15px;margin:0;color:#fff;font-size:20px;text-transform:uppercase;border-radius:3px 3px 0 0;position:relative;}.timeline__title:after{content:'';position:absolute;top:-5px;left:30%;width:10px;height:10px;transform:rotate(-45deg);}.timeline__item div.inner p{padding:15px;margin:0;font-size:14px;background:#fff;color:#656565;border-radius:0 0 6px 6px;}.timeline__item:nth-child(2n + 2) div.inner{float:right;}.timeline__title{background:#25303b;}.timeline__title:after{background:#25303b;}.timeline__title--small{font-size:10px;}",""],function(e){return Object(l.config)().media.sm(x())}),w=a(278),_=a.n(w),E=(a(201),a(280)),k=a.n(E),N=a(281),C=a.n(N),j=Object(c.default)(function(e){var t=e.className;return o.a.createElement("div",{className:t},o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null))}).withConfig({displayName:"loader",componentId:"sc-1oi7772-0"})(["display:inline-block;position:relative;width:64px;height:64px;margin:0 auto;div{box-sizing:border-box;display:block;position:absolute;width:51px;height:51px;margin:6px;border:6px solid #25303B;border-radius:50%;animation:lds-ring 1.2s cubic-bezier(0.5,0,0.5,1) infinite;border-color:#25303B transparent transparent transparent;}div:nth-child(1){animation-delay:-0.45s;}div:nth-child(2){animation-delay:-0.3s;}div:nth-child(3){animation-delay:-0.15s;}@keyframes lds-ring{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}"]),T=a(153),I=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={repos:[],status:"loading"},a}i()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=k()(_.a.mark(function e(){var t;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C()("https://api.github.com/users/thaylo/repos?type=owner&sort=updated&per_page=5&page=1");case 2:(t=e.sent).json&&t.json.length&&this.setState({repos:t.json,status:"ready"});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),a.render=function(){var e=this.state.status;return o.a.createElement("div",{className:this.props.className},o.a.createElement(T.d,{type:"h2"},"Últimos repositórios no Github"),"loading"===e&&o.a.createElement("div",{className:"repositories__loader"},o.a.createElement(j,null)),"ready"===e&&this.state.repos&&o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"repositories__content"},this.state.repos.map(function(e){return o.a.createElement(o.a.Fragment,{key:e.name},o.a.createElement("div",{className:"repositories__repo"},o.a.createElement("a",{href:e.html_url},o.a.createElement("strong",null,e.name)),o.a.createElement("div",null,e.description),o.a.createElement("div",{className:"repositories__repo-date"},"Updated: ",new Date(e.updated_at).toUTCString()),o.a.createElement("div",{className:"repositories__repo-star"},"★ ",e.stargazers_count)),o.a.createElement("hr",null))}))))},t}(o.a.Component),L=Object(c.default)(I).withConfig({displayName:"repositories",componentId:"sc-11dtcbw-0"})(["position:relative;.repositories__content{margin-bottom:40px;}.repositories__repo{position:relative;}.repositories__repo-date{color:#bbb;font-size:10px;}.repositories__repo-star{position:absolute;top:0;right:0;}.repositories__loader{display:flex;}hr{margin-top:16px;}"]),S={firstName:"Thaylo",lastName:"Freitas",occupation:"Computer Engineer and Software Developer",bio:"An auspicious engineer looking for a deeper understanding of social and technological transformations.",social:{twitter:"https://twitter.com/_Thaylo_",linkedin:"https://www.linkedin.com/in/thaylo-freitas-53461b32/en",github:"https://github.com/thaylo",email:"thayloxavier@gmail.com"},skills:[{name:"C/C++",level:85},{name:"Python",level:60},{name:"Java",level:50},{name:"SQL",level:50},{name:"Git",level:75},{name:"Docker",level:50},{name:"Kubernetes",level:35},{name:"Calculus",level:90},{name:"Robotics",level:70},{name:"MATLAB",level:70}]},z=c.default.hr.withConfig({displayName:"pages__Separator",componentId:"sc-12gtcyt-0"})(["margin-top:24px;margin-bottom:16px;"]),P=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e={title:"Hello! I'm Thaylo!",cover:{publicURL:"/images/home.jpeg"}};return o.a.createElement(m.a,{location:this.props.location},o.a.createElement(u.a,{title:e.title,path:"/",cover:e.cover&&e.cover.publicURL}),o.a.createElement(d.a,{heroImg:e.cover&&e.cover.publicURL,title:e.title}),o.a.createElement(p.a,{className:this.props.className},o.a.createElement(l.Container,{className:"page-content",fluid:!0},o.a.createElement(l.Row,null,o.a.createElement(l.Col,{xs:4,className:"avatar"},o.a.createElement("img",{className:"avatar__image",src:"https://avatars2.githubusercontent.com/u/567822?s=460&v=4",alt:""}),o.a.createElement("div",{className:"social"},S.social.github&&o.a.createElement("a",{className:"social-link github",href:S.social.github},o.a.createElement(s.b,{className:"social-icon",size:"32"})),S.social.linkedin&&o.a.createElement("a",{className:"social-link linkedin",href:S.social.linkedin},o.a.createElement(s.c,{className:"social-icon",size:"32"})),S.social.twitter&&o.a.createElement("a",{className:"social-link twitter",href:S.social.twitter},o.a.createElement(s.d,{className:"social-icon",size:"32"})),S.social.email&&o.a.createElement("a",{className:"social-link email",href:"mailto:"+S.social.email},o.a.createElement(s.a,{className:"social-icon",size:"32"}))))),o.a.createElement(l.Row,null,o.a.createElement(l.Col,{xs:4,sm:4},o.a.createElement(T.d,null,"About"),S.bio&&o.a.createElement(T.c,{dangerouslySetInnerHTML:{__html:S.bio}})),o.a.createElement(l.Col,{xs:4,sm:4},o.a.createElement(T.d,null,"Skills"),S.skills.map(function(e){return o.a.createElement(h,{key:e.name,name:e.name,level:e.level})}))),o.a.createElement(z,null),o.a.createElement(v,null),o.a.createElement(z,null),o.a.createElement(L,null))))},t}(o.a.Component);t.default=Object(c.default)(P).withConfig({displayName:"pages",componentId:"sc-12gtcyt-1"})([".page-content{max-width:100%;margin-bottom:40px;}.avatar{align-items:center;margin-bottom:24px;}.avatar__image{box-shadow:3px 3px 15px 0px rgba(0,0,0,0.75);max-width:200px;border-radius:100px;margin:0 auto 24px;}.social{margin-top:12px;margin-bottom:12px;}.social-link{padding:8px;color:#555;}a.social-link.twitter:hover{color:#1da1f2;}a.social-link.github:hover{color:#24292e;}a.social-link.linkedin:hover{color:#0077b5;}a.social-link.email:hover{color:#c23a2b;}"])},150:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return u});var n=a(0),i=a.n(n),r=a(4),o=a.n(r),l=a(151),s=a.n(l);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var c=a(154),m=a.n(c);a.d(t,"PageRenderer",function(){return m.a});var p=a(32);a.d(t,"parsePath",function(){return p.a});var d=i.a.createContext({}),u=function(e){return i.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},152:function(e,t){e.exports={siteTitle:"Thaylo Xavier",siteDescription:"Hey I'm Thaylo!",authorName:"Thaylo Freitas",twitterUsername:"_Thaylo_",authorAvatar:"/images/avatar.jpeg",multilangPosts:!0,authorDescription:"\n  Hi! I'm Thaylo! Computer Engineer and Software Developer.\n  ",siteUrl:"https://thaylo.github.io/",disqusSiteUrl:"https://thaylo.github.io/",pathPrefix:"/",siteCover:"/images/cover.jpeg",googleAnalyticsId:"UA-132909624-1",background_color:"#ffffff",theme_color:"#222222",display:"minimal-ui",icon:"src/assets/gatsby-icon.png",postsPerPage:6,disqusShortname:"thaylo",headerLinks:[{label:"Home",url:"/"},{label:"Blog",url:"/blog"}],websiteHost:{name:"GitHub",url:"https://github.com"},footerLinks:[["Explore",{label:"Blog",url:"/blog"}],["Follow the author",{label:"Github",url:"https://github.com/thaylo",iconClassName:"fa fa-github"},{label:"Website",url:"https://thaylo.github.io",iconClassName:"fa fa-globe"},{label:"Twitter",url:"https://twitter.com/_Thaylo_",iconClassName:"fa fa-twitter"}]]}},153:function(e,t,a){"use strict";var n=a(161),i=a.n(n),r=a(0),o=a.n(r),l=a(149),s=a(150);function c(){var e=i()(['\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: "Lato", sans-serif;\n  color: #25303Bcc;\n  background-color: #e8e8e8;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n  vertical-align: middle;\n  border: 0;\n}\n\na {\n  text-decoration: none;\n  color: rgba(34,34,34,0.8);\n}\n\nul,\nol {\n  padding-left: 2em;\n  margin: 1em 0 0 0;\n}\n']);return c=function(){return e},e}var m=Object(l.createGlobalStyle)(c()),p=Object(l.default)(s.Link).withConfig({displayName:"commons__StyledLink",componentId:"h5ypak-0"})(["border-bottom:1px dotted rgba(162,162,162,0.8);&:hover{border-bottom-style:solid;}"]),d=l.default.p.withConfig({displayName:"commons__Text",componentId:"h5ypak-1"})(["line-height:1.6;margin:1em 0 0 0;"]),u=Object(l.default)(function(e){var t=e.className,a=e.type,n=void 0===a?"h1":a,i=e.children,r=n;return o.a.createElement(r,{className:t},i)}).withConfig({displayName:"commons__Title",componentId:"h5ypak-2"})(["margin-bottom:24px;"]);a.d(t,"a",function(){return m}),a.d(t,"b",function(){return p}),a.d(t,"c",function(){return d}),a.d(t,"d",function(){return u})},154:function(e,t,a){var n;e.exports=(n=a(155))&&n.default||n},155:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),i=a.n(n),r=a(4),o=a.n(r),l=a(52),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},156:function(e,t,a){"use strict";var n=a(7),i=a.n(n),r=a(0),o=a.n(r),l=a(150),s=a(149),c=a(164),m=s.default.header.withConfig({displayName:"header__HeaderWrapper",componentId:"sc-119e64j-0"})(["position:fixed;top:0;left:0;margin:0 auto;display:block;width:100%;z-index:1000;background-color:#25303b;"]),p=s.default.nav.withConfig({displayName:"header__HeaderNav",componentId:"sc-119e64j-1"})(["margin-left:auto;margin-right:auto;height:60px;display:flex;flex-direction:row;max-width:1260px;z-index:1000;justify-content:flex-end;overflow-x:auto;overflow-y:hidden;background-color:#25303b;"]),d=Object(s.default)(l.Link).withConfig({displayName:"header__HeaderLink",componentId:"sc-119e64j-2"})(["position:relative;display:flex;align-items:center;color:#fff;border:0;margin:0;margin-right:0.5rem;padding-left:20px;padding-right:20px;min-width:42px;z-index:10;"]),u=Object(s.default)(function(e){var t=e.className;return o.a.createElement("a",{className:t,href:"https://github.com/thaylo",target:"_blank"},o.a.createElement(c.b,{size:32}))}).withConfig({displayName:"header__GithubLink",componentId:"sc-119e64j-3"})(["position:relative;display:flex;align-items:center;color:#fff;border:0;margin:0;margin-right:0.5rem;padding-left:20px;padding-right:20px;min-width:42px;z-index:10;"]),f=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.headerLinks;return o.a.createElement(m,null,o.a.createElement(p,null,e.map(function(e,t){return o.a.createElement(d,{to:e.url,key:"header-link-"+t},e.label)}),o.a.createElement(u,null)))},t}(o.a.Component),h=(a(160),a(167),s.default.footer.withConfig({displayName:"footer__FooterWrapper",componentId:"rfgcdh-0"})(["text-align:left;padding-top:30px;padding-bottom:50px;background-color:#25303B;color:#ffffff;padding-left:20px;padding-right:20px;margin:0 auto;& nav{display:flex;flex-flow:row wrap;align-items:flex-start;max-width:900px;margin:0 auto;.footer-col{flex:1 auto;display:inline-flex;flex-direction:column;margin-bottom:1em;padding-right:1em;}}& a{color:#ffffff;font-weight:bold;&:hover{color:#e8e8e8;border-bottom:1px dotted #e8e8e8;}}.footer-col > p{margin:0;}.footer-title{margin:0 0 1rem;}.footer-item{padding:0.25rem 0;color:#ffffff;}.footer-heart{color:red;}.footer-item-text{padding:0.1rem 0;color:#ffffff;}.footer-header{order:1;margin:0 0.25rem;margin-right:0.25rem;padding:0.25rem;}@media (max-width:564px){.footer-col:first-child{width:100%;}}"])),g=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.siteConfig,t=e.authorName,a=(e.footerLinks,e.websiteHost);return o.a.createElement(h,null,o.a.createElement("nav",null,o.a.createElement("div",{className:"footer-col"},o.a.createElement("h5",{className:"footer-title"},t," © 2018"),o.a.createElement("p",{className:"footer-item-text"},"Built with"," ",o.a.createElement("a",{className:"footer-link",href:"https://www.gatsbyjs.org"},"Gatsby"),"."),o.a.createElement("p",{className:"footer-item-text"},"Theme using"," ",o.a.createElement("a",{className:"footer-link",href:"https://github.com/maxpou/gatsby-starter-morning-dew"},"gatsby-starter-morning-dew"),"."),o.a.createElement("p",{className:"footer-item-text"},"Hosted with ",o.a.createElement("span",{className:"footer-heart"},"❤")," by"," ",o.a.createElement("a",{className:"footer-link",href:a.url},a.name),"."))))},t}(o.a.Component),b=a(152),x=a.n(b),y=(a(168),a(153)),v=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement(r.Fragment,null,o.a.createElement(y.a,null),o.a.createElement(f,{headerLinks:x.a.headerLinks}),o.a.createElement("div",null,e),o.a.createElement(g,{siteConfig:x.a}))},t}(o.a.Component);a.d(t,"a",function(){return v})},157:function(e,t,a){"use strict";var n=a(7),i=a.n(n),r=a(0),o=a.n(r),l=a(169),s=a.n(l),c=a(150),m=a(152),p=a.n(m),d=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.isBlogPost,a=e.path,n=void 0===a?"":a,i=e.lang,r=void 0===i?"en":i,l=this.props.title?this.props.title+" | "+p.a.siteTitle:p.a.siteTitle,m=p.a.siteUrl.substring(0,p.a.siteUrl.length-1),d=""+m+(this.props.imageFb||this.props.cover||Object(c.withPrefix)(p.a.siteCover)),u=""+m+(this.props.imageTw||this.props.cover||Object(c.withPrefix)(p.a.siteCover)),f=this.props.description||p.a.siteDescription;return o.a.createElement(s.a,{title:l},o.a.createElement("html",{lang:r}),o.a.createElement("meta",{name:"description",content:f}),o.a.createElement("meta",{property:"og:url",content:m+Object(c.withPrefix)(n)}),o.a.createElement("meta",{property:"og:type",content:t?"article":"website"}),o.a.createElement("meta",{property:"og:title",content:l}),o.a.createElement("meta",{property:"og:description",content:f}),o.a.createElement("meta",{property:"og:image",content:d}),o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),o.a.createElement("meta",{name:"twitter:creator",content:p.a.twitterUsername}),o.a.createElement("meta",{name:"twitter:title",content:l}),o.a.createElement("meta",{name:"twitter:description",content:f}),o.a.createElement("meta",{name:"twitter:image",content:u}))},t}(o.a.Component);a.d(t,"a",function(){return d})},158:function(e,t,a){"use strict";var n=a(149).default.main.attrs({role:"main"}).withConfig({displayName:"wrapper__Wrapper",componentId:"sc-19ch0i8-0"})(["position:relative;border-radius:3px;width:80%;max-width:900px;border-bottom:1px solid #ebf2f6;word-wrap:break-word;background-color:#fff;margin:0px auto 30px auto;top:-100px;padding:50px;box-shadow:0 0 0 0,0 6px 12px rgba(0,0,0,0.1);min-height:150px;@media (max-width:780px){width:90%;padding:25px;}"]);a.d(t,"a",function(){return n})},159:function(e,t,a){"use strict";var n=a(7),i=a.n(n),r=a(0),o=a.n(r),l=a(150),s=a(152),c=a.n(s),m=a(149),p=m.default.div.withConfig({displayName:"hero__HeroContainer",componentId:"nq6c76-0"})(["position:relative;display:table;width:100%;overflow:hidden;background-repeat:no-repeat;background-position:center;background-size:cover;"]),d=m.default.div.withConfig({displayName:"hero__TitleContainer",componentId:"nq6c76-1"})(["display:table-cell;vertical-align:middle;text-align:center;width:100%;"]),u=m.default.h1.withConfig({displayName:"hero__HeroTitle",componentId:"nq6c76-2"})(["font-weight:700;font-size:3rem;margin:10px 60px;color:#fff;text-shadow:1px 1px 4px rgba(34,34,34,0.6);"]),f=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.className;return o.a.createElement(p,{className:a},o.a.createElement(d,null,o.a.createElement(u,null,t)))},t}(o.a.Component),h=Object(m.default)(f).withConfig({displayName:"hero",componentId:"nq6c76-3"})([""," height:70vh;background-attachment:fixed;background-position:center;background-repeat:no-repeat;background-size:cover;"],function(e){return"background-image: url("+(e.heroImg||Object(l.withPrefix)(c.a.siteCover))+");"});a.d(t,"a",function(){return h})}}]);
//# sourceMappingURL=component---src-pages-index-js-d7ad389cdbac45f3262d.js.map