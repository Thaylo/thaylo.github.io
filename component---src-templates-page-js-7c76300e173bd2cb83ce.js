(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return f});var r=n(7),a=n.n(r),o=n(0),i=n.n(o),l=n(156),c=n(183),s=n(158),d=n(159),m=n(157),p=n(184),u=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark;return i.a.createElement(l.a,{location:this.props.location},i.a.createElement(m.a,{title:e.frontmatter.title,description:e.excerpt,path:e.frontmatter.slug,cover:e.frontmatter.cover&&e.frontmatter.cover.publicURL}),i.a.createElement(d.a,{heroImg:e.frontmatter.cover&&e.frontmatter.cover.publicURL,title:e.frontmatter.title}),i.a.createElement(s.a,null,i.a.createElement("article",null,i.a.createElement(c.a,{content:e.html,date:e.frontmatter.date}))),e.frontmatter.disqus&&i.a.createElement(s.a,null,i.a.createElement(p.a,{slug:e.frontmatter.slug,title:e.frontmatter.title})))},t}(i.a.Component);t.default=u;var f="1527863698"},150:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return u});var r=n(0),a=n.n(r),o=n(4),i=n.n(o),l=n(151),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(154),d=n.n(s);n.d(t,"PageRenderer",function(){return d.a});var m=n(32);n.d(t,"parsePath",function(){return m.a});var p=a.a.createContext({}),u=function(e){return a.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},152:function(e,t){e.exports={siteTitle:"Thaylo Xavier",siteDescription:"Hey I'm Thaylo!",authorName:"Thaylo Freitas",twitterUsername:"_Thaylo_",authorAvatar:"/images/avatar.jpeg",multilangPosts:!0,authorDescription:"\n  Hi! I'm Thaylo! Computer Engineer and Software Developer.\n  ",siteUrl:"https://thaylo.github.io",disqusSiteUrl:"https://thaylo.github.io",pathPrefix:"/",siteCover:"/images/cover.jpeg",googleAnalyticsId:"UA-132909624-1",background_color:"#ffffff",theme_color:"#222222",display:"minimal-ui",icon:"src/assets/gatsby-icon.png",postsPerPage:6,disqusShortname:"thaylo",headerLinks:[{label:"Home",url:"/"},{label:"Blog",url:"/blog"}],websiteHost:{name:"GitHub",url:"https://github.com"},footerLinks:[["Explore",{label:"Blog",url:"/blog"}],["Follow the author",{label:"Github",url:"https://github.com/thaylo",iconClassName:"fa fa-github"},{label:"Website",url:"https://thaylo.github.io",iconClassName:"fa fa-globe"},{label:"Twitter",url:"https://twitter.com/_Thaylo_",iconClassName:"fa fa-twitter"}]]}},153:function(e,t,n){"use strict";var r=n(161),a=n.n(r),o=n(0),i=n.n(o),l=n(149),c=n(150);function s(){var e=a()(['\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: "Lato", sans-serif;\n  color: #25303Bcc;\n  background-color: #e8e8e8;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n  vertical-align: middle;\n  border: 0;\n}\n\na {\n  text-decoration: none;\n  color: rgba(34,34,34,0.8);\n}\n\nul,\nol {\n  padding-left: 2em;\n  margin: 1em 0 0 0;\n}\n']);return s=function(){return e},e}var d=Object(l.createGlobalStyle)(s()),m=Object(l.default)(c.Link).withConfig({displayName:"commons__StyledLink",componentId:"h5ypak-0"})(["border-bottom:1px dotted rgba(162,162,162,0.8);&:hover{border-bottom-style:solid;}"]),p=l.default.p.withConfig({displayName:"commons__Text",componentId:"h5ypak-1"})(["line-height:1.6;margin:1em 0 0 0;"]),u=Object(l.default)(function(e){var t=e.className,n=e.type,r=void 0===n?"h1":n,a=e.children,o=r;return i.a.createElement(o,{className:t},a)}).withConfig({displayName:"commons__Title",componentId:"h5ypak-2"})(["margin-bottom:24px;"]);n.d(t,"a",function(){return d}),n.d(t,"b",function(){return m}),n.d(t,"c",function(){return p}),n.d(t,"d",function(){return u})},154:function(e,t,n){var r;e.exports=(r=n(155))&&r.default||r},155:function(e,t,n){"use strict";n.r(t);n(33);var r=n(0),a=n.n(r),o=n(4),i=n.n(o),l=n(52),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},156:function(e,t,n){"use strict";var r=n(7),a=n.n(r),o=n(0),i=n.n(o),l=n(150),c=n(149),s=n(164),d=c.default.header.withConfig({displayName:"header__HeaderWrapper",componentId:"sc-119e64j-0"})(["position:fixed;top:0;left:0;margin:0 auto;display:block;width:100%;z-index:1000;background-color:#25303b;"]),m=c.default.nav.withConfig({displayName:"header__HeaderNav",componentId:"sc-119e64j-1"})(["margin-left:auto;margin-right:auto;height:60px;display:flex;flex-direction:row;max-width:1260px;z-index:1000;justify-content:flex-end;overflow-x:auto;overflow-y:hidden;background-color:#25303b;"]),p=Object(c.default)(l.Link).withConfig({displayName:"header__HeaderLink",componentId:"sc-119e64j-2"})(["position:relative;display:flex;align-items:center;color:#fff;border:0;margin:0;margin-right:0.5rem;padding-left:20px;padding-right:20px;min-width:42px;z-index:10;"]),u=Object(c.default)(function(e){var t=e.className;return i.a.createElement("a",{className:t,href:"https://github.com/thaylo",target:"_blank"},i.a.createElement(s.b,{size:32}))}).withConfig({displayName:"header__GithubLink",componentId:"sc-119e64j-3"})(["position:relative;display:flex;align-items:center;color:#fff;border:0;margin:0;margin-right:0.5rem;padding-left:20px;padding-right:20px;min-width:42px;z-index:10;"]),f=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.headerLinks;return i.a.createElement(d,null,i.a.createElement(m,null,e.map(function(e,t){return i.a.createElement(p,{to:e.url,key:"header-link-"+t},e.label)}),i.a.createElement(u,null)))},t}(i.a.Component),g=(n(160),n(167),c.default.footer.withConfig({displayName:"footer__FooterWrapper",componentId:"rfgcdh-0"})(["text-align:left;padding-top:30px;padding-bottom:50px;background-color:#25303B;color:#ffffff;padding-left:20px;padding-right:20px;margin:0 auto;& nav{display:flex;flex-flow:row wrap;align-items:flex-start;max-width:900px;margin:0 auto;.footer-col{flex:1 auto;display:inline-flex;flex-direction:column;margin-bottom:1em;padding-right:1em;}}& a{color:#ffffff;font-weight:bold;&:hover{color:#e8e8e8;border-bottom:1px dotted #e8e8e8;}}.footer-col > p{margin:0;}.footer-title{margin:0 0 1rem;}.footer-item{padding:0.25rem 0;color:#ffffff;}.footer-heart{color:red;}.footer-item-text{padding:0.1rem 0;color:#ffffff;}.footer-header{order:1;margin:0 0.25rem;margin-right:0.25rem;padding:0.25rem;}@media (max-width:564px){.footer-col:first-child{width:100%;}}"])),h=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.siteConfig,t=e.authorName,n=(e.footerLinks,e.websiteHost);return i.a.createElement(g,null,i.a.createElement("nav",null,i.a.createElement("div",{className:"footer-col"},i.a.createElement("h5",{className:"footer-title"},t," © 2018"),i.a.createElement("p",{className:"footer-item-text"},"Built with"," ",i.a.createElement("a",{className:"footer-link",href:"https://www.gatsbyjs.org"},"Gatsby"),"."),i.a.createElement("p",{className:"footer-item-text"},"Theme using"," ",i.a.createElement("a",{className:"footer-link",href:"https://github.com/maxpou/gatsby-starter-morning-dew"},"gatsby-starter-morning-dew"),"."),i.a.createElement("p",{className:"footer-item-text"},"Hosted with ",i.a.createElement("span",{className:"footer-heart"},"❤")," by"," ",i.a.createElement("a",{className:"footer-link",href:n.url},n.name),"."))))},t}(i.a.Component),b=n(152),y=n.n(b),x=(n(168),n(153)),w=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.children;return i.a.createElement(o.Fragment,null,i.a.createElement(x.a,null),i.a.createElement(f,{headerLinks:y.a.headerLinks}),i.a.createElement("div",null,e),i.a.createElement(h,{siteConfig:y.a}))},t}(i.a.Component);n.d(t,"a",function(){return w})},157:function(e,t,n){"use strict";var r=n(7),a=n.n(r),o=n(0),i=n.n(o),l=n(169),c=n.n(l),s=n(150),d=n(152),m=n.n(d),p=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.isBlogPost,n=e.path,r=void 0===n?"":n,a=e.lang,o=void 0===a?"en":a,l=this.props.title?this.props.title+" | "+m.a.siteTitle:m.a.siteTitle,d=m.a.siteUrl.substring(0,m.a.siteUrl.length-1),p=""+d+(this.props.imageFb||this.props.cover||Object(s.withPrefix)(m.a.siteCover)),u=""+d+(this.props.imageTw||this.props.cover||Object(s.withPrefix)(m.a.siteCover)),f=this.props.description||m.a.siteDescription;return i.a.createElement(c.a,{title:l},i.a.createElement("html",{lang:o}),i.a.createElement("meta",{name:"description",content:f}),i.a.createElement("meta",{property:"og:url",content:d+Object(s.withPrefix)(r)}),i.a.createElement("meta",{property:"og:type",content:t?"article":"website"}),i.a.createElement("meta",{property:"og:title",content:l}),i.a.createElement("meta",{property:"og:description",content:f}),i.a.createElement("meta",{property:"og:image",content:p}),i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.a.createElement("meta",{name:"twitter:creator",content:m.a.twitterUsername}),i.a.createElement("meta",{name:"twitter:title",content:l}),i.a.createElement("meta",{name:"twitter:description",content:f}),i.a.createElement("meta",{name:"twitter:image",content:u}))},t}(i.a.Component);n.d(t,"a",function(){return p})},158:function(e,t,n){"use strict";var r=n(149).default.main.attrs({role:"main"}).withConfig({displayName:"wrapper__Wrapper",componentId:"sc-19ch0i8-0"})(["position:relative;border-radius:3px;width:80%;max-width:900px;border-bottom:1px solid #ebf2f6;word-wrap:break-word;background-color:#fff;margin:0px auto 30px auto;top:-100px;padding:50px;box-shadow:0 0 0 0,0 6px 12px rgba(0,0,0,0.1);min-height:150px;@media (max-width:780px){width:90%;padding:25px;}"]);n.d(t,"a",function(){return r})},159:function(e,t,n){"use strict";var r=n(7),a=n.n(r),o=n(0),i=n.n(o),l=n(150),c=n(152),s=n.n(c),d=n(149),m=d.default.div.withConfig({displayName:"hero__HeroContainer",componentId:"nq6c76-0"})(["position:relative;display:table;width:100%;overflow:hidden;background-repeat:no-repeat;background-position:center;background-size:cover;"]),p=d.default.div.withConfig({displayName:"hero__TitleContainer",componentId:"nq6c76-1"})(["display:table-cell;vertical-align:middle;text-align:center;width:100%;"]),u=d.default.h1.withConfig({displayName:"hero__HeroTitle",componentId:"nq6c76-2"})(["font-weight:700;font-size:3rem;margin:10px 60px;color:#fff;text-shadow:1px 1px 4px rgba(34,34,34,0.6);"]),f=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.className;return i.a.createElement(m,{className:n},i.a.createElement(p,null,i.a.createElement(u,null,t)))},t}(i.a.Component),g=Object(d.default)(f).withConfig({displayName:"hero",componentId:"nq6c76-3"})([""," height:70vh;background-attachment:fixed;background-position:center;background-repeat:no-repeat;background-size:cover;"],function(e){return"background-image: url("+(e.heroImg||Object(l.withPrefix)(s.a.siteCover))+");"});n.d(t,"a",function(){return g})},165:function(e,t,n){"use strict";var r=n(7),a=n.n(r),o=n(0),i=n.n(o),l=n(150),c=n(149),s=c.default.div.withConfig({displayName:"tag-list__ListContainer",componentId:"o3gel9-0"})(["display:inline;margin:0 0.5rem 0 0;color:#7f7e7e;"]),d=Object(c.default)(l.Link).withConfig({displayName:"tag-list__TagListItem",componentId:"o3gel9-1"})(["margin-left:0.3rem;color:#7f7e7e;&:hover{border-bottom:1px dotted #7f7e7e;}&:before{content:'#';}"]),m=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.tags,n=e.icon;return i.a.createElement(s,null,!0===n&&i.a.createElement(o.Fragment,null,"🏷 "),t.map(function(e,n){return i.a.createElement(o.Fragment,{key:"tag-list-"+n},i.a.createElement(d,{to:"tags/"+e},e),n<t.length-1?", ":"")}))},t}(i.a.Component);n.d(t,"a",function(){return m})},183:function(e,t,n){"use strict";var r=n(7),a=n.n(r),o=n(0),i=n.n(o),l=n(149),c=n(165),s=l.default.header.withConfig({displayName:"content-header__Header",componentId:"sc-2ubndt-0"})(["margin-bottom:2rem;color:#7f7e7e;"]),d=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.date,n=e.tags;return i.a.createElement(s,null,t&&i.a.createElement("time",null,t),Array.isArray(n)&&n.length>0&&i.a.createElement(o.Fragment,null,i.a.createElement("span",null," in"),i.a.createElement(c.a,{tags:n})))},t}(i.a.Component),m=l.default.div.withConfig({displayName:"content__ContentBody",componentId:"sc-7unljs-0"})(["line-height:1.6;& > h2{padding-top:3rem;margin-top:3rem;border-top:1px solid #ececec;}& > h3{padding-top:3rem;}& > p{margin:1em 0 0 0;}& a{border-bottom:1px dotted rgba(162,162,162,0.8);&:hover{border-bottom-style:solid;}&.anchor,&.gatsby-resp-image-link{border:none;}}& > blockquote{box-sizing:border-box;margin:1.75em 0 1.75em -2.2em;padding:0 0 0 1.75em;border-left:0.4em solid rgba(32,35,42,0.85);}& > blockquote p{margin:0.8em 0;font-style:italic;}& .gatsby-highlight{border-radius:5px;font-size:15px;line-height:1.7;background:#2d2d2d;color:#ffffff;border-radius:10px;overflow:auto;tab-size:1.5em;margin:1.5em 0em 1.5em 0;}& .gatsby-highlight > pre{border:0;margin:0;padding:1;}& .gatsby-highlight-code-line{background-color:#022a4b;display:block;margin-right:-1em;margin-left:-1em;padding-right:1em;padding-left:.75em;border-left:.25em solid #ffa7c4;}& p > code.language-text,& li > code.language-text{background:rgba(255,229,100,0.2);color:#222222cc;padding:0 3px;font-size:0.94em;border-radius:0.3rem;}"]),p=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.content,n=e.date,r=e.tags;return i.a.createElement("section",null,(r||n)&&i.a.createElement(d,{date:n,tags:r}),i.a.createElement(m,{dangerouslySetInnerHTML:{__html:t}}))},t}(i.a.Component);n.d(t,"a",function(){return p})},184:function(e,t,n){"use strict";var r=n(7),a=n.n(r),o=n(0),i=n.n(o),l=n(191),c=n.n(l),s=n(152),d=n.n(s),m=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=d.a.disqusShortname;if(!e)return null;var t={url:""+d.a.disqusSiteUrl+this.props.slug,title:this.props.title};return i.a.createElement(c.a.DiscussionEmbed,{shortname:e,config:t})},t}(i.a.Component);n.d(t,"a",function(){return m})}}]);
//# sourceMappingURL=component---src-templates-page-js-7c76300e173bd2cb83ce.js.map