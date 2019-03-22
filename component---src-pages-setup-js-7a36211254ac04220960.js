(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{152:function(e,t,a){"use strict";a.r(t);a(169);var n=a(0),i=a.n(n),r=a(1),s=a.n(r),l=a(155),o=a(212),m=a(163),c=function(e){var t=e.to,a=e.href,n=e.icon,r=e.iconClass,s=e.headingClass,o=e.title,c=e.children;return i.a.createElement(m.a,{to:t,href:a,className:"col-12 col-6-ns col-4-l pa8 tdn middarkgrey setup-box-min-height",radius:"4"},i.a.createElement(m.b,{name:n,className:r}),i.a.createElement("h4",{className:l.a.h4+" darkgrey "+s},o),i.a.createElement("div",{className:l.a.small+" mt1 midgrey"},c))};c.propTypes={children:s.a.node.isRequired,icon:s.a.string.isRequired,title:s.a.string.isRequired,to:s.a.string,href:s.a.string,iconClass:s.a.string,headingClass:s.a.string};var d=c,p=a(177);a.d(t,"pageQuery",function(){return u});var g=function(e){var t=e.data,a=e.location,n=Object(p.b)();return i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{data:t,location:a,type:"website",title:"How To Install Ghost: Setup & Configuration - Open Source Publishing",description:"All the tools you need to get started with Ghost 👉Self-hosted install & setup, local install guide for development, contribution guidelines & premium hosted services!",image:n}),i.a.createElement(o.a,{mainClass:"bg-whitegrey-l2 pb-vw3",bodyClass:"bg-white"},i.a.createElement("section",{className:"bg-setup"},i.a.createElement("div",{className:l.a.page.xl+" tc-ns pt-vw6 pt-vw5-ns pb-vw5 white"},i.a.createElement("h1",{className:l.a.sectionHeading+" gh-integration-header-shadow"},"Setup Guide"),i.a.createElement("p",{className:l.a.sectionSubHeading},"The easiest way to get started is to use ",i.a.createElement("strong",null,"Ghost(Pro)"),". If you prefer to self-host, we strongly recommend an Ubuntu server with at least 1GB of memory to run Ghost."))),i.a.createElement("div",{className:l.a.page.xl+" mt-vw3"},i.a.createElement("section",{className:"grid-12 gutter-row-20 gutter-20-ns gutter-36-l"},i.a.createElement(d,{href:"https://ghost.org/pricing/",title:"Ghost(Pro)",icon:"ghost-pro-logo",iconClass:"w9 h9",headingClass:"mt2"},i.a.createElement("strong",null,"Fully managed PaaS")," with 1-click deployment, worldwide CDN, backups, upgrades & security"),i.a.createElement(d,{to:"/install/ubuntu/",title:"Ubuntu",icon:"ubuntu-logo",iconClass:"w8 h8",headingClass:"mt2"},i.a.createElement("p",{className:l.a.small+" mw70"},"A full guide for installing Ghost on Ubuntu ",i.a.createElement("strong",null,"16.04 LTS")," and ",i.a.createElement("strong",null,"18.04 LTS")," ",i.a.createElement("em",null,"(Recommended)"))),i.a.createElement(d,{href:"https://hub.docker.com/_/ghost/",title:"Docker",icon:"docker-logo",iconClass:"w10 h10",headingClass:"mt1"},i.a.createElement("p",{className:l.a.small+" mw70"},i.a.createElement("strong",null,"Unofficial community package")," for running Ghost inside a Docker container")),i.a.createElement(d,{to:"/install/local/",title:"Local install",icon:"terminal",iconClass:"fill-midlightgrey w8 h8",headingClass:"mt2"},i.a.createElement("p",{className:l.a.small+" mw70"},i.a.createElement("strong",null,"Fast-track")," local install for running Ghost on your computer or doing theme development")),i.a.createElement(d,{to:"/install/source/",title:"Install from Source",icon:"github-outline",iconClass:"fill-darkgrey w8 h8",headingClass:"mt2"},i.a.createElement("p",{className:l.a.small+" mw70"},i.a.createElement("strong",null,"Advanced developer guide")," for working directly on Ghost Core and Ghost Admin"))))))};g.propTypes={data:s.a.shape({site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired}).isRequired}).isRequired}).isRequired,location:s.a.shape({pathname:s.a.string.isRequired}).isRequired};t.default=g;var u="1531574144"},177:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(1),s=a.n(r),l=a(164),o=a.n(l),m=(a(165),a(154)),c=a.n(m),d=a(157),p=a.n(d),g=a(238),u=function(e,t){var a=[];return t?a.push(e.website?e.website:null,e.twitter?"https://twitter.com/"+p.a.trimStart(e.twitter,"@")+"/":null,e.facebook?"https://www.facebook.com/"+e.facebook+"/":null):a.push("https://ghost.org/","https://twitter.com/ghost/","https://www.facebook.com/ghost/"),a=p.a.compact(a),{name:t?e.name:"Ghost",sameAsArray:a.length?'["'+p.a.join(a,'", "')+'"]':null,image:t?e.profile_image:null}};u.defaultProps={fetchAuthorData:!1},u.PropTypes={primaryAuthor:s.a.shape({name:s.a.string.isRequired,profile_image:s.a.string,website:s.a.string,twitter:s.a.string,facebook:s.a.string}).isRequired,fetchAuthorData:s.a.bool.isRequired};var h=u,w=function(e){var t=e.image;return i.a.createElement(c.a,null,i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.a.createElement("meta",{name:"twitter:image",content:t}),i.a.createElement("meta",{property:"og:image",content:t}),i.a.createElement("meta",{property:"og:image:width",content:"1000"}),i.a.createElement("meta",{property:"og:image:height",content:"523"}))};w.propTypes={image:s.a.string.isRequired};var y=w,E=function(e){var t=e.data,a=e.canonical,n=e.fetchAuthorData,r=e.title,s=e.overwriteDefaultImage,l=e.image,o=t.ghostPost,m=t.site.siteMetadata,d=h(o.primary_author,n),u=p.a.map(Object(g.a)(o,{visibility:"public",fn:function(e){return e}}),"name"),w=u[0]||{name:"General",slug:"general"},E=s&&o.feature_image?o.feature_image:l;return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,null,i.a.createElement("title",null,o.meta_title||r||o.title),i.a.createElement("meta",{name:"description",content:o.meta_description||o.excerpt}),i.a.createElement("link",{rel:"canonical",href:a}),i.a.createElement("meta",{property:"og:site_name",content:m.title}),i.a.createElement("meta",{name:"og:type",content:"article"}),i.a.createElement("meta",{name:"og:title",content:o.og_title||r||o.meta_title||o.title}),i.a.createElement("meta",{name:"og:description",content:o.og_description||o.excerpt||o.meta_description}),i.a.createElement("meta",{property:"og:url",content:a}),i.a.createElement("meta",{property:"article:published_time",content:o.published_at}),i.a.createElement("meta",{property:"article:modified_time",content:o.updated_at}),u.map(function(e,t){return i.a.createElement("meta",{property:"article:tag",content:e,key:t})}),i.a.createElement("meta",{property:"article:author",content:"https://www.facebook.com/ghost/"}),i.a.createElement("meta",{name:"twitter:title",content:o.twitter_title||r||o.meta_title||o.title}),i.a.createElement("meta",{name:"twitter:description",content:o.twitter_description||o.excerpt||o.meta_description}),i.a.createElement("meta",{name:"twitter:url",content:a}),i.a.createElement("meta",{name:"twitter:label1",content:"Written by"}),i.a.createElement("meta",{name:"twitter:data1",content:d.name}),i.a.createElement("meta",{name:"twitter:label2",content:"Filed under"}),i.a.createElement("meta",{name:"twitter:data2",content:w}),i.a.createElement("meta",{name:"twitter:site",content:"@tryghost"}),i.a.createElement("meta",{name:"twitter:creator",content:"@tryghost"}),i.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": "Article",\n                        "author": {\n                            "@type": "Person",\n                            "name": "'+d.name+'",\n                            '+(d.image?d.sameAsArray?'"image": "'+d.image+'",':'"image": "'+d.image+'"':"")+"\n                            "+(d.sameAsArray?'"sameAs": '+d.sameAsArray:"")+"\n                        },\n                        "+(u.length?'"keywords": "'+p.a.join(u,", ")+'",':"")+'\n                        "headline": "'+(o.meta_title||r||o.title)+'",\n                        "url": "'+a+'",\n                        "datePublished": "'+o.published_at+'",\n                        "dateModified": "'+o.updated_at+'",\n                        "image": {\n                            "@type": "ImageObject",\n                            "url": "'+E+'",\n                            "width": 1000,\n                            "height": 563\n                        },\n                        "description": "'+(o.meta_description||o.excerpt)+'",\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+m.siteUrl+'"\n                        }\n                    }\n                ')),i.a.createElement(y,{image:E}))};E.defaultProps={fetchAuthorData:!1},E.propTypes={data:s.a.shape({ghostPost:s.a.shape({title:s.a.string.isRequired,published_at:s.a.string.isRequired,updated_at:s.a.string.isRequired,excerpt:s.a.string.isRequired,meta_title:s.a.string,meta_description:s.a.string,primary_author:s.a.object.isRequired,feature_image:s.a.string,tags:s.a.arrayOf(s.a.shape({name:s.a.string,slug:s.a.string,visibility:s.a.string})),primaryTag:s.a.shape({name:s.a.string}),og_title:s.a.string,og_description:s.a.string,twitter_title:s.a.string,twitter_description:s.a.string}).isRequired,site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired}).isRequired}).isRequired}).isRequired,canonical:s.a.string.isRequired,image:s.a.string.isRequired,fetchAuthorData:s.a.bool,title:s.a.string,overwriteDefaultImage:s.a.bool};var f=function(e){var t=e.data,a=e.canonical,n=t.markdownRemark,r=n.frontmatter,s=t.site.siteMetadata,l=r.date?new Date(r.date).toISOString():new Date("2018-10-15").toISOString(),o=r.keywords&&r.keywords.length?r.keywords[0]:null,m=G();return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,null,i.a.createElement("title",null,r.meta_title||r.title),i.a.createElement("meta",{name:"description",content:r.meta_description||n.excerpt}),i.a.createElement("link",{rel:"canonical",href:a}),i.a.createElement("meta",{property:"og:site_name",content:s.title}),i.a.createElement("meta",{name:"og:type",content:"article"}),i.a.createElement("meta",{name:"og:title",content:r.meta_title||r.title}),i.a.createElement("meta",{name:"og:description",content:r.meta_description||n.excerpt}),i.a.createElement("meta",{property:"og:url",content:a}),i.a.createElement("meta",{property:"article:published_time",content:l}),r.keywords&&r.keywords.length?r.keywords.map(function(e,t){return i.a.createElement("meta",{property:"article:tag",content:e,key:t})}):null,i.a.createElement("meta",{property:"article:author",content:"https://www.facebook.com/ghost/"}),i.a.createElement("meta",{name:"twitter:title",content:r.meta_title||r.title}),i.a.createElement("meta",{name:"twitter:description",content:r.meta_description||n.excerpt}),i.a.createElement("meta",{name:"twitter:url",content:a}),i.a.createElement("meta",{name:"twitter.label1",content:"Reading time"}),i.a.createElement("meta",{name:"twitter:data1",content:n.timeToRead+" min read"}),o?i.a.createElement("meta",{name:"twitter:label2",content:"Filed under"}):null,o?i.a.createElement("meta",{name:"twitter:data2",content:o}):null,i.a.createElement("meta",{name:"twitter:site",content:"@tryghost"}),i.a.createElement("meta",{name:"twitter:creator",content:"@tryghost"}),i.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": "Article",\n                        "author": {\n                            "@type": "Person",\n                            "name": "Ghost",\n                            "sameAs": [\n                                "https://ghost.org/",\n                                "https://www.facebook.com/ghost/",\n                                "https://twitter.com/tryghost/"\n                            ]\n                        },\n                        '+(r.keywords&&r.keywords.length?'"keywords": "'+p.a.join(r.keywords,", ")+'",':"")+'\n                        "headline": "'+(r.meta_title||r.title)+'",\n                        "url": "'+a+'",\n                        "datePublished": "'+l+'",\n                        "image": {\n                            "@type": "ImageObject",\n                            "url": "'+m+'",\n                            "width": 1000,\n                            "height": 563\n                        },\n                        "description": "'+(r.meta_description||n.excerpt)+'",\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+s.siteUrl+'"\n                        }\n                    }\n                ')),i.a.createElement(y,{image:m}))};f.propTypes={data:s.a.shape({markdownRemark:s.a.shape({frontmatter:s.a.shape({title:s.a.string.isRequired,keywords:s.a.arrayOf(s.a.string),meta_title:s.a.string,meta_description:s.a.string,date:s.a.string}).isRequired,excerpt:s.a.string.isRequired,timeToRead:s.a.number}).isRequired,site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired}).isRequired}).isRequired}).isRequired,canonical:s.a.string.isRequired};var b=f,R=function(e){var t=e.data,a=e.canonical,n=e.title,r=e.description,s=e.image,l=e.type;return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,null,i.a.createElement("title",null,n),i.a.createElement("meta",{name:"description",content:r}),i.a.createElement("link",{rel:"canonical",href:a}),i.a.createElement("meta",{property:"og:site_name",content:t.site.siteMetadata.title}),i.a.createElement("meta",{property:"og:type",content:"website"}),i.a.createElement("meta",{property:"og:title",content:n}),i.a.createElement("meta",{property:"og:description",content:r}),i.a.createElement("meta",{property:"og:url",content:a}),i.a.createElement("meta",{name:"twitter:title",content:n}),i.a.createElement("meta",{name:"twitter:description",content:r}),i.a.createElement("meta",{name:"twitter:url",content:a}),i.a.createElement("meta",{name:"twitter:site",content:"@tryghost"}),i.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": '+(l&&"series"===l?'"Series"':'"WebSite"')+',\n                        "url": "'+a+'",\n                        "image": {\n                            "@type": "ImageObject",\n                            "url": "'+s+'",\n                            "width": 1000,\n                            "height": 563\n                        },\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+t.site.siteMetadata.siteUrl+'"\n                        },\n                        "description": "'+r+'"\n                    }\n                ')),i.a.createElement(y,{image:s}))};R.propTypes={data:s.a.shape({site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired}).isRequired}).isRequired}).isRequired,canonical:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired,image:s.a.string.isRequired,type:s.a.oneOf(["website","series"]).isRequired};var q=R,_=function(e){var t=e.data,a=e.type,n=e.title,r=e.description,s=e.image,l=(e.fetchAuthorData,e.overwriteDefaultImage,e.location),m=(t||{}).markdownRemark,c=t.site.siteMetadata,d=o.a.resolve(c.siteUrl,l.pathname,"/");if("article"===a){if(m)return i.a.createElement(b,{data:t,canonical:d})}else if("website"===a||"series"===a)return i.a.createElement(q,{data:t,canonical:d,title:n,description:r,image:s,type:a});return null};_.propTypes={data:s.a.shape({site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired}).isRequired}).isRequired,markdownRemark:s.a.object}).isRequired,location:s.a.shape({pathname:s.a.string.isRequired}).isRequired,type:s.a.oneOf(["website","series","article"]).isRequired,title:s.a.string,description:s.a.string,image:s.a.string,fetchAuthorData:s.a.bool,overwriteDefaultImage:s.a.bool};var k=_,v="http://wwfalcon.github.io",A={faq:o.a.resolve(v,"/images/meta/Ghost-FAQ.jpg"),integrations:o.a.resolve(v,"/images/meta/Ghost-Integrations.jpg"),tutorials:o.a.resolve(v,"/images/meta/Ghost-Tutorials.jpg"),default:o.a.resolve(v,"/images/meta/Ghost-Docs.jpg")},C=function(e){return A[e=e||"default"]};C.proptypes={section:s.a.string.isRequired};var G=C;a.d(t,"a",function(){return k}),a.d(t,"b",function(){return G})}}]);
//# sourceMappingURL=component---src-pages-setup-js-7a36211254ac04220960.js.map