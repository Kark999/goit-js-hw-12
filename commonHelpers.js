import{S as y,a as h,i as L}from"./assets/vendor-5401a4b0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(t){if(t.ep)return;t.ep=!0;const a=o(t);fetch(t.href,a)}})();const b="/goit-js-hw-12/assets/octagon-9a0a5cbd.svg",v="/goit-js-hw-12/assets/close-22ff606a.svg",s={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),searchMore:document.querySelector(".search-more")};let d=new y(".gallery a"),u=null,l=null;const f=15;s.form.addEventListener("submit",S);s.searchMore.addEventListener("click",w);async function w(e){e.preventDefault(),l+=1,s.loader.classList.remove("hidden");try{const r=await g();if(r.totalHits===0)return n(message);const o=m(r.hits);s.gallery.insertAdjacentHTML("beforeend",o),d.refresh(),p(r)}catch(r){n(r)}s.loader.classList.add("hidden"),M()}async function S(e){e.preventDefault(),u=e.target.elements.search.value.trim(),l=1,s.loader.classList.remove("hidden"),s.gallery.innerHTML="";try{const r=await g();if(r.totalHits===0)return s.loader.classList.add("hidden"),n("Sorry, there are no images matching <br/> your search query. Please try again!");const o=m(r.hits);s.gallery.innerHTML=o,d.refresh(),p(r)}catch(r){n(r)}s.loader.classList.add("hidden"),s.form.reset()}async function g(){const e="https://pixabay.com/api/";return(await h.get(e,{params:{key:"42141224-180b0a56c10fd436e302d680a",q:u,image_type:"photo",orientation:"horizontal",safesearch:!0,page:l,per_page:f}})).data}function P(e){return`<li class="gallery-card">
        <a href="${e.largeImageURL}"
          ><img
            class="gallery-image"
            src="${e.webformatURL}"
            alt="${e.tags}"
            title=""
          />
        </a>
        <div class="gallery-card-items">
          <p class="gallery-card-info">
            Likes
            <span class="gallery-card-data">${e.likes}</span>
          </p>

          <p class="gallery-card-info">
            Views
            <span class="gallery-card-data">${e.views}</span>
          </p>

          <p class="gallery-card-info">
            Comments
            <span class="gallery-card-data">${e.comments}</span>
          </p>

          <p class="gallery-card-info">
            Downloads
            <span class="gallery-card-data">${e.downloads}</span>
          </p>
        </div>
      </li>`}function m(e){return e.map(P).join("")}function n(e){L.error({message:e,position:"topRight",messageColor:"#ffffff",messageSize:"16px",backgroundColor:"#ef4040",iconColor:"#ffffff",iconUrl:b,timeout:5e3,close:!1,closeOnEscape:!0,buttons:[[`<button type="button" style="background-color: transparent" ><img src=${v}></button>`,function(r,o){r.hide({transitionOut:"fadeOut"},o)}]]})}function p(e){Math.ceil(e.totalHits/f)===l?(s.searchMore.classList.add("hidden"),n("We're sorry, but you've reached the end of search results.")):s.searchMore.classList.remove("hidden")}function M(){const r=s.gallery.firstElementChild.getBoundingClientRect();scrollBy({behavior:"smooth",top:r.height*2})}
//# sourceMappingURL=commonHelpers.js.map
