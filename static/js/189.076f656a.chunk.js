"use strict";(self.webpackChunkreact_simple_movie=self.webpackChunkreact_simple_movie||[]).push([[189],{1189:function(e,s,t){t.r(s),t.d(s,{default:function(){return f}});var r=t(2791),i=t(4341),l=t(799),a=t(3197),n=t(7689),o=t(460),d=t(184),c=function(e){var s=e.item,t=s.title,r=s.poster_path,i=s.id,l=(0,n.s0)();return(0,d.jsxs)("div",{className:"relative w-full h-full rounded-lg",children:[(0,d.jsx)("div",{className:"overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"}),(0,d.jsx)("img",{src:a.Qo.imageOriginal(r),alt:"",className:"object-cover w-full h-full rounded-lg"}),(0,d.jsxs)("div",{className:"absolute w-full text-white left-5 bottom-5",children:[(0,d.jsx)("h2",{className:"mb-3 text-3xl font-bold",children:t}),(0,d.jsxs)("div",{className:"flex items-center mb-8 gap-x-3",children:[(0,d.jsx)("span",{className:"px-4 py-2 border border-white rounded-md",children:"Adventure"}),(0,d.jsx)("span",{className:"px-4 py-2 border border-white rounded-md",children:"Adventure"}),(0,d.jsx)("span",{className:"px-4 py-2 border border-white rounded-md",children:"Adventure"})]}),(0,d.jsx)(o.Z,{onClick:function(){return l("/movie/".concat(i))},children:"Watch now"})]})]})},x=t(7609),h=function(){return(0,d.jsxs)("div",{className:"relative w-full h-full rounded-lg",children:[(0,d.jsx)("div",{className:"overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"}),(0,d.jsx)(x.Z,{className:"object-cover w-full h-full rounded-lg"}),(0,d.jsxs)("div",{className:"absolute w-full text-white left-5 bottom-5",children:[(0,d.jsx)(x.Z,{className:"mb-3 text-3xl font-bold",width:"300px",height:"50px"}),(0,d.jsxs)("div",{className:"flex items-center mb-8 gap-x-3",children:[(0,d.jsx)(x.Z,{className:"px-4 py-2 border border-white rounded-md",width:"100px",height:"50px"}),(0,d.jsx)(x.Z,{className:"px-4 py-2 border border-white rounded-md",width:"100px",height:"50px"})]}),(0,d.jsx)(x.Z,{width:"100px",height:"50px",radius:"6px"})]})]})},u=function(){var e=(0,l.ZP)("https://api.themoviedb.org/3/movie/upcoming?api_key=6e1eb12ab3735cf3feb3ab8c6dc7b200",a._i),s=e.data,t=e.error,r=!s&&!t,n=(null===s||void 0===s?void 0:s.results)||[];return(0,d.jsx)("section",{className:"banner h-[500px] page-container mb-20 overflow-hidden",children:r?(0,d.jsx)(i.tq,{grabCursor:"true",slidesPerView:"auto",children:(0,d.jsx)(i.o5,{children:(0,d.jsx)(h,{})})}):(0,d.jsx)(i.tq,{grabCursor:"true",slidesPerView:"auto",children:n.length>0&&n.map((function(e){return(0,d.jsx)(i.o5,{children:(0,d.jsx)(c,{item:e})},e.id)}))})})},m=t(7470),p=t(1924),b=t(4867),j=t(4329),g=(0,m.withErrorBoundary)((function(e){var s=e.types,t=void 0===s?"now_playing":s,r=(0,l.ZP)(a.Qo.getMovieList(t),a._i),n=r.data,o=r.error,c=!n&&!o,x=(null===n||void 0===n?void 0:n.results)||[];return(0,d.jsx)("div",{children:(0,d.jsx)("div",{className:"movie-list",children:c?(0,d.jsxs)(i.tq,{grabCursor:"true",spaceBetween:27,slidesPerView:"auto",children:[(0,d.jsx)(i.o5,{children:(0,d.jsx)(j.Z,{})}),(0,d.jsx)(i.o5,{children:(0,d.jsx)(j.Z,{})}),(0,d.jsx)(i.o5,{children:(0,d.jsx)(j.Z,{})}),(0,d.jsx)(i.o5,{children:(0,d.jsx)(j.Z,{})})]}):(0,d.jsx)(i.tq,{grabCursor:"true",spaceBetween:27,slidesPerView:"auto",children:x.length>0&&x.map((function(e){return(0,d.jsx)(i.o5,{children:(0,d.jsx)(p.Z,{item:e})},e.id)}))})})})}),{FallbackComponent:b.Z}),f=function(){return(0,d.jsxs)(r.Fragment,{children:[(0,d.jsx)(u,{}),(0,d.jsxs)("section",{className:"pb-20 page-container",children:[(0,d.jsx)("h2",{className:"mb-10 text-3xl font-bold text-white capitalize",children:"Now playing"}),(0,d.jsx)(g,{types:"now_playing"})]}),(0,d.jsxs)("section",{className:"pb-20 page-container",children:[(0,d.jsx)("h2",{className:"mb-10 text-3xl font-bold text-white capitalize",children:"Top Rated"}),(0,d.jsx)(g,{types:"top_rated"})]}),(0,d.jsxs)("section",{className:"pb-20 page-container",children:[(0,d.jsx)("h2",{className:"mb-10 text-3xl font-bold text-white capitalize",children:"upcoming"}),(0,d.jsx)(g,{types:"upcoming"})]})]})}}}]);
//# sourceMappingURL=189.076f656a.chunk.js.map