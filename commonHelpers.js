import{S as u,a as f,i as m}from"./assets/vendor-5401a4b0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}})();const g="/goit-js-hw-12/assets/octagon-9a0a5cbd.svg",p="/goit-js-hw-12/assets/close-22ff606a.svg",o={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),searchMore:document.querySelector(".search-more")};new u(".gallery a");o.form.addEventListener("submit",h);o.searchMore.addEventListener("click",y);async function y(e){try{const t=e.target.elements.search.value.trim();o.loader.classList.remove("hidden"),o.gallery.innerHTML="";const s=await i(t);if(s.totalHits===0)return c(message);const n=d(s.hits);o.gallery.insertAdjacentHTML("beforeend",n)}catch{c()}o.loader.classList.add("hidden")}async function h(e){e.preventDefault();const t=e.target.elements.search.value.trim();o.loader.classList.remove("hidden"),o.gallery.innerHTML="";try{const s=await i(t);if(s.totalHits===0)return c(message);const n=d(s.hits);o.gallery.innerHTML=n}catch{c()}o.loader.classList.add("hidden")}async function i(e){const t="https://pixabay.com/api/";return(await f.get(t,{params:{key:"42141224-180b0a56c10fd436e302d680a",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:15}})).data}function L(e){return`<li class="gallery-card">
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
      </li>`}function d(e){return e.map(L).join("")}function c(e){m.error({message:"Sorry, there are no images matching <br/> your search query. Please try again!",position:"topRight",messageColor:"#ffffff",messageSize:"16px",backgroundColor:"#ef4040",iconColor:"#ffffff",iconUrl:g,timeout:5e3,close:!1,closeOnEscape:!0,buttons:[[`<button type="button" style="background-color: transparent" ><img src=${p}></button>`,function(t,s){t.hide({transitionOut:"fadeOut"},s)}]]})}
//# sourceMappingURL=commonHelpers.js.map
