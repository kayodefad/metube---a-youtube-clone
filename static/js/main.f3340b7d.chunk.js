(this["webpackJsonprandom-got-quote"]=this["webpackJsonprandom-got-quote"]||[]).push([[0],{109:function(e,t,a){e.exports=a(244)},117:function(e,t,a){},118:function(e,t,a){},217:function(e,t,a){},238:function(e,t,a){},239:function(e,t,a){},240:function(e,t,a){},241:function(e,t,a){},242:function(e,t,a){},243:function(e,t,a){},244:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(48),c=a.n(i),l=a(7),s=a(6),o=a(106),d=(a(117),a(27)),u=a(9),m=a(10),p=a(12),v=a(11),h=a(13),f=a(246),E=a(245),b=(a(118),a(17)),y=Object(b.a)(),O=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(i)))).renderInput=function(e){var t=e.input,a=e.label,n=e.type,i=e.meta,c=i.touched,l=i.error;return r.a.createElement("div",null,r.a.createElement("input",Object.assign({},t,{placeholder:a,type:n,autoComplete:"off"})),c&&l&&r.a.createElement("small",null,l))},a.onSubmit=function(e){a.props.onSubmit(e),y.push("/searchresults/".concat(e.searchTerm))},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.handleSubmit;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:e(this.onSubmit)},r.a.createElement(f.a,{name:"searchTerm",type:"text",component:this.renderInput,label:"Search"})))}}]),t}(r.a.Component),j=Object(E.a)({form:"videoform",validate:function(e){var t={};return e.searchTerm||(t.searchTerm=" "),t}})(O),N=(a(217),a(39)),V=a.n(N),g=a(71),D=a.n(g),S=function(e){return function(t){var a;return V.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,V.a.awrap(D.a.get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key=AIzaSyD8ngrp7DzWV6IMFJzsGYGpOJIrE8WqM9U&q=".concat(e)));case 2:a=n.sent,t({type:"ADD_VIDEOS",payload:a.data.items});case 4:case"end":return n.stop()}}))}},I=a(23),w=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){a.props.addVideos(e.searchTerm)},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Header"},r.a.createElement(I.a,{to:"/",style:{textDecoration:"none",color:"#000"}},r.a.createElement("div",null,r.a.createElement("i",{className:"fab fa-youtube"})," ",r.a.createElement("span",{style:{fontWeight:"bold"}},"MeTube"))),r.a.createElement(j,{onSubmit:this.onSubmit}))}}]),t}(r.a.Component),L=Object(l.b)(null,{addVideos:S})(w),k=(a(238),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(i)))).renderList=function(){return a.props.videos?a.props.videos.map((function(e){return r.a.createElement(I.a,{to:"/play/".concat(e.id.videoId),style:{textDecoration:"none"},key:e.id.videoId},r.a.createElement("div",{className:"VideoItem"},r.a.createElement("img",{src:e.snippet.thumbnails.medium.url,alt:e.snippet.title}),r.a.createElement("div",{className:"videoDesc"},r.a.createElement("div",{className:"vidtitle"},e.snippet.title),r.a.createElement("div",{className:"channel"},r.a.createElement("i",{className:"fas fa-circle"})," ",e.snippet.channelTitle))))})):r.a.createElement("div",null,"Loading...")},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.addVideos("2020 movie and tv series trailers")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(L,null),r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,"Recommended"),r.a.createElement("div",{className:"VideoList"},this.renderList())))}}]),t}(r.a.Component)),x=Object(l.b)((function(e){return{videos:Object.values(e.videos)}}),{addVideos:S})(k),C=(a(239),function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.video;if(!e)return r.a.createElement("div",null,"Loading...");var t="https://www.youtube.com/embed/".concat(e.id.videoId,"?autoplay=1");return r.a.createElement("div",{className:"VideoDetailsContainer"},r.a.createElement("div",null,r.a.createElement("iframe",{src:t,title:"video player",allowFullScreen:!0})),r.a.createElement("div",{className:"description"},r.a.createElement("h4",null,e.snippet.title),r.a.createElement("p",{className:"desc"},e.snippet.description),r.a.createElement("div",{className:"vidDetailsChannel"},r.a.createElement("i",{className:"fas fa-circle"})," ",e.snippet.channelTitle)))}}]),t}(r.a.Component)),T=(a(240),a(241),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(i)))).renderList=function(){return void 0===a.props.videos?r.a.createElement("div",null,"Loading..."):a.props.videos.filter((function(e){return e.id.videoId})).map((function(e){return r.a.createElement(I.a,{to:"/play/".concat(e.id.videoId),key:e.id.videoId,style:{textDecoration:"none",color:"#000"}},r.a.createElement("div",null,r.a.createElement("div",{className:"ImgDetails"},r.a.createElement("img",{src:e.snippet.thumbnails.medium.url,alt:e.snippet.title}),r.a.createElement("div",{className:"RelatedVideoDetails"},r.a.createElement("div",{className:"RelatedVideoSnippet"},e.snippet.title),r.a.createElement("div",{className:"RelatedChannelTitle"},r.a.createElement("i",{className:"fas fa-circle"})," ",e.snippet.channelTitle)))))}))},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.currentVid&&this.props.videos.length>4&&this.props.addVideos(this.props.currentVid)}},{key:"render",value:function(){return r.a.createElement("div",{className:"renderedVideoList"},r.a.createElement("h3",{style:{margin:"0",padding:"0"}},"Related Videos"),r.a.createElement("div",{className:"RelatedVideoList"},this.renderList()))}}]),t}(r.a.Component)),A=Object(l.b)((function(e){return{videos:Object.values(e.videos)}}),{addVideos:S})(T),_=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.playVideo(this.props.match.params.id)}},{key:"render",value:function(){var e;return this.props.video&&(e=this.props.video.snippet.title),r.a.createElement("div",null,r.a.createElement(L,null),r.a.createElement("div",{className:"VideoPlayerStyle"},r.a.createElement("div",{className:"VideoDetailStyle"},r.a.createElement(C,{video:this.props.video})),r.a.createElement("div",{className:"VideoItemStyle"},r.a.createElement(A,{currentVid:e}))))}}]),t}(r.a.Component),M=Object(l.b)((function(e,t){return{video:Object.values(e.videos).filter((function(e){return e.id.videoId===t.match.params.id}))[0]}}),{playVideo:function(e){return function(t){var a;return V.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,V.a.awrap(D.a.get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key=AIzaSyD8ngrp7DzWV6IMFJzsGYGpOJIrE8WqM9U&q=".concat(e)));case 2:a=n.sent,t({type:"PLAY_VIDEO",payload:a.data.items});case 4:case"end":return n.stop()}}))}}})(_),R=(a(242),a(248)),q=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(i)))).componentDidMount=function(){a.props.addVideos("davido")},a.renderList=function(){return a.props.videos.filter((function(e){return e.id.videoId})).map((function(e){return r.a.createElement(I.a,{to:"/play/".concat(e.id.videoId),key:e.id.videoId,style:{textDecoration:"none",color:"#000"}},r.a.createElement("div",null,r.a.createElement("div",{className:"SearchListItem"},r.a.createElement("img",{src:e.snippet.thumbnails.medium.url,alt:e.snippet.title}),r.a.createElement("div",{className:"SearchListDetails"},r.a.createElement("div",{className:"SearchListTitle"},e.snippet.title),r.a.createElement("p",{className:"SearchListDesc"},e.snippet.description),r.a.createElement("div",{className:"SearchListChannel"},r.a.createElement("i",{className:"fas fa-circle"})," ",e.snippet.channelTitle)))))}))},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(L,null),r.a.createElement("div",{className:"SearchListContainer"},r.a.createElement("h3",null,"Search Results"),r.a.createElement("div",{className:"SearchListItemsContainer"},this.renderList())))}}]),t}(r.a.Component),z=Object(l.b)((function(e){return{videos:Object.values(e.videos),formStates:Object(R.a)("videoform")(e)}}),{addVideos:S})(q);var J=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d.b,{history:y},r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/",exact:!0,component:x}),r.a.createElement(d.a,{path:"/play/:id",exact:!0,component:M}),r.a.createElement(d.a,{path:"/searchresults/:searchterm",exact:!0,component:z}))))},W=a(73),G=a(247),P=Object(s.c)({form:G.a,videos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_VIDEOS":case"PLAY_VIDEO":return Object(W.a)({},e,{},t.payload);default:return e}}}),Y=(a(243),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d),F=Object(s.e)(P,Y(Object(s.a)(o.a)));c.a.render(r.a.createElement(l.a,{store:F},r.a.createElement(J,null)),document.getElementById("root"))}},[[109,1,2]]]);
//# sourceMappingURL=main.f3340b7d.chunk.js.map