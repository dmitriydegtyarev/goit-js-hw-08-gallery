(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{OPH6:function(o,i,t){},QfWi:function(o,i,t){"use strict";t.r(i);t("OPH6"),t("iPZ8"),t("kypl"),t("8cZI"),t("lmye"),t("fp7Y");var e,n=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}],a={gallery:document.querySelector(".js-gallery"),lightbox:document.querySelector(".js-lightbox"),lightboxImage:document.querySelector(".lightbox__image"),lightboxCloseBtn:document.querySelector(".lightbox__button")},p=a.gallery,c=a.lightbox,l=a.lightboxImage,r=a.lightboxCloseBtn,s=n.length-1,g=null;e=n.map((function(o,i){var t=o.preview,e=o.original;return'\n  <li class="gallery__item">\n      <a\n          class="gallery__link"\n          href='+e+'\n      >\n          <img\n              class="gallery__image"\n              data-id="'+i+'"\n              src="'+t+'"\n              data-source="'+e+'"\n              alt="'+o.description+'"\n          />\n      </a>\n  </li>\n'})).join(""),p.insertAdjacentHTML("beforeend",e);var d=function(o){var i=o.code;"Escape"===i&&_(),"ArrowRight"===i&&h(),"ArrowLeft"===i&&m()},h=function(){var o=n[g=s===g?0:g+1],i=o.original,t=o.description;l.src=i,l.alt=t,console.log(g)},m=function(){var o=n[g=0===g?s:g-1],i=o.original,t=o.description;l.src=i,l.alt=t,console.log(g)},u=function(o,i,t){window.addEventListener("keydown",d),g=t,c.classList.add("is-open"),l.src=o,l.alt=i,console.log("ADD EVENT LISTENER")},_=function(){window.removeEventListener("keydown",d),g=null,c.classList.remove("is-open"),l.src="",l.alt="",console.log("REMOVE EVENT LISTENER")};p.addEventListener("click",(function(o){o.preventDefault();var i=o.target,t=i.dataset,e=i.alt;if("IMG"===i.nodeName){var n=t.source,a=t.id;u(n,e,Number(a)),console.log(a)}})),r.addEventListener("click",_)}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.6c04a1880797462a4829.js.map