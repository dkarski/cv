(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"8+s/":function(e,t,r){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var a=r("q1tI"),i=n(a),o=n(r("Gytx"));function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c,u=[];function d(){c=e(u.map((function(e){return e.props}))),f.canUseDOM?t(c):r&&(c=r(c))}var f=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,u=[],e};var l=a.prototype;return l.shouldComponentUpdate=function(e){return!o(e,this.props)},l.componentWillMount=function(){u.push(this),d()},l.componentDidUpdate=function(){d()},l.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),d()},l.render=function(){return i.createElement(n,this.props)},a}(a.Component);return l(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),l(f,"canUseDOM",s),f}}},"9eSz":function(e,t,r){"use strict";var n=r("TqRt");t.__esModule=!0,t.default=void 0;var a,i=n(r("PJYZ")),o=n(r("VbXa")),l=n(r("8OQS")),s=n(r("pVnL")),c=n(r("q1tI")),u=n(r("17x9")),d=function(e){var t=(0,s.default)({},e),r=t.resolutions,n=t.sizes,a=t.critical;return r&&(t.fixed=r,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),a&&(t.loading="eager"),t.fluid&&(t.fluid=A([].concat(t.fluid))),t.fixed&&(t.fixed=A([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(g&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,r=e.fixed,n=p(t||r||[]);return n&&n.src},p=function(e){if(g&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},E=Object.create({}),T=function(e){var t=d(e),r=m(t);return E[r]||!1},h="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,g="undefined"!=typeof window,b=g&&window.IntersectionObserver,y=new WeakMap;function S(e){return e.map((function(e){var t=e.src,r=e.srcSet,n=e.srcSetWebp,a=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},n&&c.default.createElement("source",{type:"image/webp",media:a,srcSet:n,sizes:i}),r&&c.default.createElement("source",{media:a,srcSet:r,sizes:i}))}))}function A(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function v(e){return e.map((function(e){var t=e.src,r=e.media,n=e.tracedSVG;return c.default.createElement("source",{key:t,media:r,srcSet:n})}))}function O(e){return e.map((function(e){var t=e.src,r=e.media,n=e.base64;return c.default.createElement("source",{key:t,media:r,srcSet:n})}))}function w(e,t){var r=e.srcSet,n=e.srcSetWebp,a=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(a?'media="'+a+'" ':"")+'srcset="'+(t?n:r)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var _=function(e,t){var r=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),a);return r&&(r.observe(e),y.set(e,t)),function(){r.unobserve(e),y.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?w(e,!0):"")+w(e)})).join("")+"<img "+c+o+l+r+n+t+i+a+s+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},P=c.default.forwardRef((function(e,t){var r=e.src,n=e.imageVariants,a=e.generateSources,i=e.spreadProps,o=e.ariaHidden,l=c.default.createElement(I,(0,s.default)({ref:t,src:r},i,{ariaHidden:o}));return n.length>1?c.default.createElement("picture",null,a(n),l):l})),I=c.default.forwardRef((function(e,t){var r=e.sizes,n=e.srcSet,a=e.src,i=e.style,o=e.onLoad,u=e.onError,d=e.loading,f=e.draggable,m=e.ariaHidden,p=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,s.default)({"aria-hidden":m,sizes:r,srcSet:n,src:a},p,{onLoad:o,onError:u,ref:t,loading:d,draggable:f,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));I.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var x=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=g&&T(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!h&&b&&!r.isCritical&&!r.seenBefore;var n=r.isCritical||g&&(h||!r.useIOSupport);return r.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn,isHydrated:!1},r.imageRef=c.default.createRef(),r.placeholderRef=t.placeholderRef||c.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,i.default)(r)),r.handleRef=r.handleRef.bind((0,i.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.setState({isHydrated:g}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:T(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=_(e,(function(){var e=T(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=d(e),(r=m(t))&&(E[r]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=d(this.props),t=e.title,r=e.alt,n=e.className,a=e.style,i=void 0===a?{}:a,o=e.imgStyle,l=void 0===o?{}:o,u=e.placeholderStyle,f=void 0===u?{}:u,m=e.placeholderClassName,E=e.fluid,T=e.fixed,h=e.backgroundColor,g=e.durationFadeIn,b=e.Tag,y=e.itemProp,A=e.loading,w=e.draggable,_=E||T;if(!_)return null;var x=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,L=(0,s.default)({opacity:x?1:0,transition:C?"opacity "+g+"ms":"none"},l),M="boolean"==typeof h?"lightgray":h,N={transitionDelay:g+"ms"},j=(0,s.default)({opacity:this.state.imgLoaded?0:1},C&&N,l,f),G={title:t,alt:this.state.isVisible?"":r,style:j,className:m,itemProp:y},k=this.state.isHydrated?p(_):_[0];if(E)return c.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden",maxWidth:k.maxWidth?k.maxWidth+"px":null,maxHeight:k.maxHeight?k.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(k.srcSet)},c.default.createElement(b,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/k.aspectRatio+"%"}}),M&&c.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:M,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&N)}),k.base64&&c.default.createElement(P,{ariaHidden:!0,ref:this.placeholderRef,src:k.base64,spreadProps:G,imageVariants:_,generateSources:O}),k.tracedSVG&&c.default.createElement(P,{ariaHidden:!0,ref:this.placeholderRef,src:k.tracedSVG,spreadProps:G,imageVariants:_,generateSources:v}),this.state.isVisible&&c.default.createElement("picture",null,S(_),c.default.createElement(I,{alt:r,title:t,sizes:k.sizes,src:k.src,crossOrigin:this.props.crossOrigin,srcSet:k.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:A,draggable:w})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,s.default)({alt:r,title:t,loading:A},k,{imageVariants:_}))}}));if(T){var H=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:k.width,height:k.height},i);return"inherit"===i.display&&delete H.display,c.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:H,ref:this.handleRef,key:"fixed-"+JSON.stringify(k.srcSet)},M&&c.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:M,width:k.width,opacity:this.state.imgLoaded?0:1,height:k.height},C&&N)}),k.base64&&c.default.createElement(P,{ariaHidden:!0,ref:this.placeholderRef,src:k.base64,spreadProps:G,imageVariants:_,generateSources:O}),k.tracedSVG&&c.default.createElement(P,{ariaHidden:!0,ref:this.placeholderRef,src:k.tracedSVG,spreadProps:G,imageVariants:_,generateSources:v}),this.state.isVisible&&c.default.createElement("picture",null,S(_),c.default.createElement(I,{alt:r,title:t,width:k.width,height:k.height,sizes:k.sizes,src:k.src,crossOrigin:this.props.crossOrigin,srcSet:k.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:A,draggable:w})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,s.default)({alt:r,title:t,loading:A},k,{imageVariants:_}))}}))}return null},t}(c.default.Component);x.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var C=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),L=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function M(e){return function(t,r,n){var a;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+n+"`, but their values are both `undefined`.");u.default.checkPropTypes(((a={})[r]=e,a),t,"prop",n)}}x.propTypes={resolutions:C,sizes:L,fixed:M(u.default.oneOfType([C,u.default.arrayOf(C)])),fluid:M(u.default.oneOfType([L,u.default.arrayOf(L)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var N=x;t.default=N},Gytx:function(e,t){e.exports=function(e,t,r,n){var a=r?r.call(n,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),o=Object.keys(t);if(i.length!==o.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<i.length;s++){var c=i[s];if(!l(c))return!1;var u=e[c],d=t[c];if(!1===(a=r?r.call(n,u,d,c):void 0)||void 0===a&&u!==d)return!1}return!0}},RXBc:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),a=r.n(n),i=r("TJpk"),o=r("Wbzz");var l=()=>{const{profileImage:e}=Object(o.useStaticQuery)(s);return a.a.createElement(i.Helmet,{defaultTitle:"Daniel Karski CV"},a.a.createElement("html",{lang:"en-US"}),a.a.createElement("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),a.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),a.a.createElement("meta",{name:"referrer",content:"origin"}),a.a.createElement("meta",{property:"og:site_name",content:"Daniel Karski CV"}),a.a.createElement("meta",{property:"og:locale",content:"en_US"}),a.a.createElement("meta",{property:"og:description",content:"Daniel Karski CV"}),a.a.createElement("meta",{name:"description",content:"Daniel Karski CV"}),a.a.createElement("meta",{name:"twitter:description",content:"Daniel Karski CV"}),a.a.createElement("meta",{property:"og:image",content:e.childImageSharp.fluid.src}),a.a.createElement("meta",{name:"twitter:image",content:e.childImageSharp.fluid.src}),a.a.createElement("meta",{property:"og:image:width",content:"250"}),a.a.createElement("meta",{property:"og:image:height",content:"250"}),a.a.createElement("meta",{property:"og:image:alt",content:"Daniel Karski CV"}),a.a.createElement("meta",{property:"og:type",content:"website"}),a.a.createElement("meta",{name:"author",content:"Daniel Karski"}))};const s="3494073517";var c=r("TBGL"),u=r("vOnD"),d=r("9eSz"),f=r.n(d),m=r("za5s"),p=r("/0Lw");const E=Object(u.d)(p.a)({display:"flex"},m.l,m.k,m.a,m.q),T=Object(u.d)(E)({flexDirection:"column"});E.displayName="Flex";const h=Object(u.d)("div")`
  ${m.E}
  ${m.y}
  ${m.v}
  ${m.t}
  ${m.B}
  ${m.n}
  ${m.o}
  ${m.g}
  ${m.A}
  ${m.h}
  ${m.D}
  ${m.s}
  ${m.r}
  ${m.m}
  ${m.p}
  ${m.d}
`,g=e=>{let{tag:t="div",children:r,...n}=e;const i=h.withComponent(t);return a.a.createElement(i,n,r)};g.defaultProps={tag:"div"};var b=g,y=r("9B59");const{heading:S,canon:A,trafalgar:v,bodyText:O,mediumText:w}=y.a.textStyles,_=e=>a.a.createElement(b,Object.assign({},S,e),e.children),R=e=>a.a.createElement(b,Object.assign({},v,e),e.children),P=e=>a.a.createElement(b,Object.assign({},O,e),e.children),I=u.d.span``,x=Object(u.d)(P)`
  position: relative;
  padding-left: 21px;

  ${I} {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`,C=Object(u.d)(x).attrs({as:"a"})``,L=e=>{let{href:t,iconClassName:r,...n}=e;return a.a.createElement(L.Link,Object.assign({href:t},n),a.a.createElement(I,{className:r}))};function M(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function N(){var e=M(["\n          @media (min-width: ",") {\n            ","\n          }\n        "]);return N=function(){return e},e}function j(){var e=M(["\n          @media (max-width: ",") {\n            ","\n          }\n        "]);return j=function(){return e},e}function G(){var e=M(["\n    @media (min-width: ",") and\n      (max-width: ",") {\n      ","\n    }\n  "]);return G=function(){return e},e}function k(){var e=M(["\n    @media (min-width: ",") {\n      ","\n    }\n  "]);return k=function(){return e},e}function H(){var e=M(["\n    @media (max-width: ",") {\n      ","\n    }\n  "]);return H=function(){return e},e}L.Link=u.d.a`
  text-decoration: none;
  font-size: 30.8px;

  transition: opacity 0.5s;

  &:hover {
    opacity: 0.8;
  }
`;var U={huge:"1440px",large:"1170px",medium:"768px",small:"450px"};function B(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t[e]?t[e]:parseInt(e)?e:(console.error("styled-media-query: No valid breakpoint or size specified for media."),"0")}function D(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=function(t){return function(){return Object(u.c)(H(),B(t,e),u.c.apply(void 0,arguments))}},r=function(t){return function(){return Object(u.c)(k(),B(t,e),u.c.apply(void 0,arguments))}},n=function(t,r){return function(){return Object(u.c)(G(),B(t,e),B(r,e),u.c.apply(void 0,arguments))}},a=Object.keys(e).reduce((function(t,r){var n=e[r];return t.to[r]=function(){return console.warn("styled-media-query: Use media.lessThan('".concat(r,"') instead of old media.to.").concat(r," (Probably we'll deprecate it)")),Object(u.c)(j(),n,u.c.apply(void 0,arguments))},t.from[r]=function(){return console.warn("styled-media-query: Use media.greaterThan('".concat(r,"') instead of old media.from.").concat(r," (Probably we'll deprecate it)")),Object(u.c)(N(),n,u.c.apply(void 0,arguments))},t}),{to:{},from:{}});return Object.assign({lessThan:t,greaterThan:r,between:n},a)}D();var V=D({mobile:y.b[0],tablet:y.b[1],desktop:y.b[2],wideDesktop:y.b[3]});const q=Object(u.d)(E)`
  flex-wrap: wrap;
`,z=Object(u.d)(p.a)`
  width: 100%;
  max-width: 250px;

  ${V.greaterThan("mobile")`
    margin-bottom: ${y.a.space.regular}px;
    margin-right: ${y.a.space.regular}px;
  `}
`,F=Object(u.d)(f.a)`
  width: 100%;
  max-width: 100%;

  ${V.greaterThan("mobile")`
    max-width: 250px;
  `}
`,$=Object(u.d)(p.a)`
  line-height: 1;

  a:not(:first-of-type) {
    margin-left: ${y.a.space.small}px;
  }
`;var W=()=>{const{profileImage:e,dataJson:{header:{name:t,position:r,location:n,email:i,phone:l,webistes:s}}}=Object(o.useStaticQuery)(Y);return a.a.createElement(q,{as:"section",mt:["regular","regular","regular","regular"]},a.a.createElement(z,null,a.a.createElement(F,{fluid:e.childImageSharp.fluid,alt:t})),a.a.createElement(T,null,a.a.createElement(_,null,t),a.a.createElement(R,{textStyle:"bold",as:"h2",mb:["small","small","small","small"]},r),a.a.createElement(T,{mb:["small","small","small","small"]},a.a.createElement(x,null,a.a.createElement(I,{className:"icon-location"}),n),a.a.createElement(C,{rel:"noopener noreferrer",target:"_blank",href:"mailto:"+i},a.a.createElement(I,{className:"icon-envelope"}),i),a.a.createElement(C,{rel:"noopener noreferrer",target:"_blank",href:"tel:"+l},a.a.createElement(I,{className:"icon-phone"}),l)),a.a.createElement($,null,s.map(e=>{let{icon:t,url:r}=e;return a.a.createElement(L,{rel:"noopener noreferrer",target:"_blank",href:r,iconClassName:t})}))))};const Y="4207442717";var K=Object(u.d)(e=>a.a.createElement(b,Object.assign({},A,e),e.children))`
  padding-bottom: 7px;
  margin-bottom: 21px;
  border-bottom: 1px solid ${y.a.colors.mainLight};
`;var J=()=>{const{dataJson:{summary:e}}=Object(o.useStaticQuery)(Q);return a.a.createElement(p.a,{as:"section"},a.a.createElement(K,null,"Summary"),a.a.createElement(p.a,{mb:["regular","regular","regular","regular"]},a.a.createElement(P,null,e)))};const Q="1748101253",X=Object(u.d)(p.a).attrs({as:"ul"})`
  margin-inline-start: 0;
  margin-inline-end: 0;
  padding-inline-start: 21px;
`;var Z=()=>{const{dataJson:{experiences:e}}=Object(o.useStaticQuery)(ee);return a.a.createElement(p.a,{as:"section"},a.a.createElement(K,null,"Professional Experience"),e.map(e=>{let{title:t,date:r,roles:n}=e;return a.a.createElement(p.a,{mb:["regular","regular","regular","regular"]},a.a.createElement(R,{textStyle:"bold",mb:["xsmall","xsmall","xsmall","xsmall"]},t),a.a.createElement(P,{className:"light",mb:["xsmall","xsmall","xsmall","xsmall"]},r),a.a.createElement(X,null,n.map(e=>a.a.createElement("li",null,e))))}))};const ee="1547751839",te=Object(u.d)(p.a).attrs({as:"ul"})`
  list-style: none;
  padding: 0;
`;var re=()=>{const{dataJson:{projects:e}}=Object(o.useStaticQuery)(ne);return a.a.createElement(p.a,{as:"section"},a.a.createElement(K,null,"Best Projects"),e.map(e=>{let{title:t,role:r,description:n,webistes:i,subprojects:o}=e;return a.a.createElement(p.a,{mb:["regular","regular","regular","regular"]},a.a.createElement(p.a,{mb:["small","small","small","small"]},a.a.createElement(R,{textStyle:"bold",mb:["xsmall","xsmall","xsmall","xsmall"]},t),a.a.createElement(P,{className:"light",mb:["xsmall","xsmall","xsmall","xsmall"]},r),a.a.createElement(P,null,n),a.a.createElement(te,{mt:["xsmall","xsmall","xsmall","xsmall"]},i.map(e=>{let{icon:t,url:r}=e;return a.a.createElement("li",null,a.a.createElement(C,{rel:"noopener noreferrer",target:"_blank",href:r},a.a.createElement(I,{className:t}),r))}))),o.map(e=>{let{title:t,description:r,webistes:n}=e;return a.a.createElement(p.a,{mb:["small","small","small","small"]},a.a.createElement(P,{as:"h4",textStyle:"bold",mb:["xsmall","xsmall","xsmall","xsmall"]},t),a.a.createElement(P,null,r),a.a.createElement(te,{mt:["xsmall","xsmall","xsmall","xsmall"]},n.map(e=>{let{icon:t,url:r}=e;return a.a.createElement("li",null,a.a.createElement(C,{rel:"noopener noreferrer",target:"_blank",href:r},a.a.createElement(I,{className:t}),r))})))}))}))};const ne="166999396",ae=Object(u.d)(T)`
  flex: 1 100%;

  ${V.greaterThan("mobile")`
    flex: 1;
  `}
`;var ie=()=>{const{dataJson:{skillGroups:{workingKnowledge:e,basicKnowledge:t}}}=Object(o.useStaticQuery)(oe);return a.a.createElement(p.a,{as:"section"},a.a.createElement(K,null,"Skills"),a.a.createElement(E,{flexWrap:"wrap",mb:["regular","regular","regular","regular"]},a.a.createElement(ae,{mb:["xsmall",null]},a.a.createElement(R,{textStyle:"bold",mb:["xsmall","xsmall","xsmall","xsmall"]},"Working knowledge"),a.a.createElement(X,null,e.map(e=>a.a.createElement("li",null,e)))),a.a.createElement(ae,null,a.a.createElement(R,{textStyle:"bold",mb:["xsmall","xsmall","xsmall","xsmall"]},"Basic knowledge"),a.a.createElement(X,null,t.map(e=>a.a.createElement("li",null,e))))))};const oe="2040442518",le=Object(u.d)(p.a).attrs({as:"footer"})`
  border-top: 1px solid ${y.a.colors.mainLight};
  text-align: center;
`;var se=()=>a.a.createElement(le,{py:["small","small","small","small"]},a.a.createElement(P,{className:"light"},"Made with ",a.a.createElement(I,{className:"icon-heart"})," by"," ",a.a.createElement("a",{href:"https://github.com/dkarski/minimal-resume-theme/"},"Daniel Karski")," ",a.a.createElement("span",{className:"print"},"| ",a.a.createElement("a",{href:"javascript:window.print()"},"PDF")," | ",a.a.createElement("a",{href:"#"},"Go to Up !"))));t.default=()=>a.a.createElement(c.a,null,a.a.createElement(l,null),a.a.createElement(W,null),a.a.createElement(J,null),a.a.createElement(Z,null),a.a.createElement(re,null),a.a.createElement(ie,null),a.a.createElement(se,null))},TJpk:function(e,t,r){t.__esModule=!0,t.Helmet=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=d(r("q1tI")),o=d(r("17x9")),l=d(r("8+s/")),s=d(r("bmMU")),c=r("v1p5"),u=r("hFT/");function d(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var E,T,h,g=(0,l.default)(c.reducePropsToState,c.handleClientStateChange,c.mapStateOnServer)((function(){return null})),b=(E=g,h=T=function(e){function t(){return m(this,t),p(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,s.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case u.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,a=e.arrayTypeChildren,i=e.newChildProps,o=e.nestedChildren;return n({},a,((t={})[r.type]=[].concat(a[r.type]||[],[n({},i,this.mapNestedChildrenToProps(r,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,a=e.child,i=e.newProps,o=e.newChildProps,l=e.nestedChildren;switch(a.type){case u.TAG_NAMES.TITLE:return n({},i,((t={})[a.type]=l,t.titleAttributes=n({},o),t));case u.TAG_NAMES.BODY:return n({},i,{bodyAttributes:n({},o)});case u.TAG_NAMES.HTML:return n({},i,{htmlAttributes:n({},o)})}return n({},i,((r={})[a.type]=n({},o),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=n({},t);return Object.keys(e).forEach((function(t){var a;r=n({},r,((a={})[t]=e[t],a))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return i.default.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=f(a,["children"]),l=(0,c.convertReactPropstoHtmlAttributes)(o);switch(r.warnOnInvalidChildren(e,i),e.type){case u.TAG_NAMES.LINK:case u.TAG_NAMES.META:case u.TAG_NAMES.NOSCRIPT:case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:l,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:l,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=f(e,["children"]),a=n({},r);return t&&(a=this.mapChildrenToProps(t,a)),i.default.createElement(E,a)},a(t,null,[{key:"canUseDOM",set:function(e){E.canUseDOM=e}}]),t}(i.default.Component),T.propTypes={base:o.default.object,bodyAttributes:o.default.object,children:o.default.oneOfType([o.default.arrayOf(o.default.node),o.default.node]),defaultTitle:o.default.string,defer:o.default.bool,encodeSpecialCharacters:o.default.bool,htmlAttributes:o.default.object,link:o.default.arrayOf(o.default.object),meta:o.default.arrayOf(o.default.object),noscript:o.default.arrayOf(o.default.object),onChangeClientState:o.default.func,script:o.default.arrayOf(o.default.object),style:o.default.arrayOf(o.default.object),title:o.default.string,titleAttributes:o.default.object,titleTemplate:o.default.string},T.defaultProps={defer:!0,encodeSpecialCharacters:!0},T.peek=E.peek,T.rewind=function(){var e=E.rewind();return e||(e=(0,c.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},h);b.renderStatic=b.rewind,t.Helmet=b,t.default=b},bmMU:function(e,t,r){"use strict";var n=Array.isArray,a=Object.keys,i=Object.prototype.hasOwnProperty,o="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){var l,s,c,u=n(t),d=n(r);if(u&&d){if((s=t.length)!=r.length)return!1;for(l=s;0!=l--;)if(!e(t[l],r[l]))return!1;return!0}if(u!=d)return!1;var f=t instanceof Date,m=r instanceof Date;if(f!=m)return!1;if(f&&m)return t.getTime()==r.getTime();var p=t instanceof RegExp,E=r instanceof RegExp;if(p!=E)return!1;if(p&&E)return t.toString()==r.toString();var T=a(t);if((s=T.length)!==a(r).length)return!1;for(l=s;0!=l--;)if(!i.call(r,T[l]))return!1;if(o&&t instanceof Element&&r instanceof Element)return t===r;for(l=s;0!=l--;)if(!("_owner"===(c=T[l])&&t.$$typeof||e(t[c],r[c])))return!1;return!0}return t!=t&&r!=r}(e,t)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||-2146828260===r.number)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}}},"hFT/":function(e,t){t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},n=(t.VALID_TAG_NAMES=Object.keys(r).map((function(e){return r[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(n).reduce((function(e,t){return e[n[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},v1p5:function(e,t,r){(function(e){t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=s(r("q1tI")),o=s(r("YVoz")),l=r("hFT/");function s(e){return e&&e.__esModule?e:{default:e}}var c,u=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},d=function(e){var t=T(e,l.TAG_NAMES.TITLE),r=T(e,l.HELMET_PROPS.TITLE_TEMPLATE);if(r&&t)return r.replace(/%s/g,(function(){return t}));var n=T(e,l.HELMET_PROPS.DEFAULT_TITLE);return t||n||void 0},f=function(e){return T(e,l.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},m=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return a({},e,t)}),{})},p=function(e,t){return t.filter((function(e){return void 0!==e[l.TAG_NAMES.BASE]})).map((function(e){return e[l.TAG_NAMES.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var i=n[a].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},E=function(e,t,r){var a={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&S("Helmet: "+e+' should be of type "Array". Instead found type "'+n(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var n={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),o=0;o<i.length;o++){var s=i[o],c=s.toLowerCase();-1===t.indexOf(c)||r===l.TAG_PROPERTIES.REL&&"canonical"===e[r].toLowerCase()||c===l.TAG_PROPERTIES.REL&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(s)||s!==l.TAG_PROPERTIES.INNER_HTML&&s!==l.TAG_PROPERTIES.CSS_TEXT&&s!==l.TAG_PROPERTIES.ITEM_PROP||(r=s)}if(!r||!e[r])return!1;var u=e[r].toLowerCase();return a[r]||(a[r]={}),n[r]||(n[r]={}),!a[r][u]&&(n[r][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(n),s=0;s<i.length;s++){var c=i[s],u=(0,o.default)({},a[c],n[c]);a[c]=u}return e}),[]).reverse()},T=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},h=(c=Date.now(),function(e){var t=Date.now();t-c>16?(c=t,e(t)):setTimeout((function(){h(e)}),0)}),g=function(e){return clearTimeout(e)},b="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||h:e.requestAnimationFrame||h,y="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||g:e.cancelAnimationFrame||g,S=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},A=null,v=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,s=e.noscriptTags,c=e.onChangeClientState,u=e.scriptTags,d=e.styleTags,f=e.title,m=e.titleAttributes;_(l.TAG_NAMES.BODY,n),_(l.TAG_NAMES.HTML,a),w(f,m);var p={baseTag:R(l.TAG_NAMES.BASE,r),linkTags:R(l.TAG_NAMES.LINK,i),metaTags:R(l.TAG_NAMES.META,o),noscriptTags:R(l.TAG_NAMES.NOSCRIPT,s),scriptTags:R(l.TAG_NAMES.SCRIPT,u),styleTags:R(l.TAG_NAMES.STYLE,d)},E={},T={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(E[e]=r),n.length&&(T[e]=p[e].oldTags)})),t&&t(),c(e,E,T)},O=function(e){return Array.isArray(e)?e.join(""):e},w=function(e,t){void 0!==e&&document.title!==e&&(document.title=O(e)),_(l.TAG_NAMES.TITLE,t)},_=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(l.HELMET_ATTRIBUTE),a=n?n.split(","):[],i=[].concat(a),o=Object.keys(t),s=0;s<o.length;s++){var c=o[s],u=t[c]||"";r.getAttribute(c)!==u&&r.setAttribute(c,u),-1===a.indexOf(c)&&a.push(c);var d=i.indexOf(c);-1!==d&&i.splice(d,1)}for(var f=i.length-1;f>=0;f--)r.removeAttribute(i[f]);a.length===i.length?r.removeAttribute(l.HELMET_ATTRIBUTE):r.getAttribute(l.HELMET_ATTRIBUTE)!==o.join(",")&&r.setAttribute(l.HELMET_ATTRIBUTE,o.join(","))}},R=function(e,t){var r=document.head||document.querySelector(l.TAG_NAMES.HEAD),n=r.querySelectorAll(e+"["+l.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(n),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===l.TAG_PROPERTIES.INNER_HTML)r.innerHTML=t.innerHTML;else if(n===l.TAG_PROPERTIES.CSS_TEXT)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[n]?"":t[n];r.setAttribute(n,s)}r.setAttribute(l.HELMET_ATTRIBUTE,"true"),a.some((function(e,t){return o=t,r.isEqualNode(e)}))?a.splice(o,1):i.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:i}},P=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},I=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[l.REACT_TAG_MAP[r]||r]=e[r],t}),t)},x=function(e,t,r){switch(e){case l.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[l.HELMET_ATTRIBUTE]=!0,a=I(r,n),[i.default.createElement(l.TAG_NAMES.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=P(r),i=O(t);return a?"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+a+">"+u(i,n)+"</"+e+">":"<"+e+" "+l.HELMET_ATTRIBUTE+'="true">'+u(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case l.ATTRIBUTE_NAMES.BODY:case l.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return I(t)},toString:function(){return P(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})[l.HELMET_ATTRIBUTE]=!0,n);return Object.keys(t).forEach((function(e){var r=l.REACT_TAG_MAP[e]||e;if(r===l.TAG_PROPERTIES.INNER_HTML||r===l.TAG_PROPERTIES.CSS_TEXT){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),i.default.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===l.TAG_PROPERTIES.INNER_HTML||e===l.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+u(n[t],r)+'"';return e?e+" "+a:a}),""),i=n.innerHTML||n.cssText||"",o=-1===l.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[l.HTML_TAG_MAP[r]||r]=e[r],t}),t)},t.handleClientStateChange=function(e){A&&y(A),e.defer?A=b((function(){v(e,(function(){A=null}))})):(v(e),A=null)},t.mapStateOnServer=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,s=e.noscriptTags,c=e.scriptTags,u=e.styleTags,d=e.title,f=void 0===d?"":d,m=e.titleAttributes;return{base:x(l.TAG_NAMES.BASE,t,n),bodyAttributes:x(l.ATTRIBUTE_NAMES.BODY,r,n),htmlAttributes:x(l.ATTRIBUTE_NAMES.HTML,a,n),link:x(l.TAG_NAMES.LINK,i,n),meta:x(l.TAG_NAMES.META,o,n),noscript:x(l.TAG_NAMES.NOSCRIPT,s,n),script:x(l.TAG_NAMES.SCRIPT,c,n),style:x(l.TAG_NAMES.STYLE,u,n),title:x(l.TAG_NAMES.TITLE,{title:f,titleAttributes:m},n)}},t.reducePropsToState=function(e){return{baseTag:p([l.TAG_PROPERTIES.HREF],e),bodyAttributes:m(l.ATTRIBUTE_NAMES.BODY,e),defer:T(e,l.HELMET_PROPS.DEFER),encode:T(e,l.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:m(l.ATTRIBUTE_NAMES.HTML,e),linkTags:E(l.TAG_NAMES.LINK,[l.TAG_PROPERTIES.REL,l.TAG_PROPERTIES.HREF],e),metaTags:E(l.TAG_NAMES.META,[l.TAG_PROPERTIES.NAME,l.TAG_PROPERTIES.CHARSET,l.TAG_PROPERTIES.HTTPEQUIV,l.TAG_PROPERTIES.PROPERTY,l.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:E(l.TAG_NAMES.NOSCRIPT,[l.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:f(e),scriptTags:E(l.TAG_NAMES.SCRIPT,[l.TAG_PROPERTIES.SRC,l.TAG_PROPERTIES.INNER_HTML],e),styleTags:E(l.TAG_NAMES.STYLE,[l.TAG_PROPERTIES.CSS_TEXT],e),title:d(e),titleAttributes:m(l.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=b,t.warn=S}).call(this,r("yLpj"))},yLpj:function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(n){"object"==typeof window&&(r=window)}e.exports=r}}]);
//# sourceMappingURL=component---src-pages-index-js-9ea336eb814135479cef.js.map