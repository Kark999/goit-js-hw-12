import{S as u,i as m}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function a(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(r){if(r.ep)return;r.ep=!0;const t=a(r);fetch(r.href,t)}})();const g="/goit-js-hw-12/assets/octagon-9a0a5cbd.svg",p="/goit-js-hw-12/assets/close-22ff606a.svg",o={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),searchMore:document.querySelector(".search-more")};let i=new u(".gallery a");o.form.addEventListener("submit",h);o.searchMore.addEventListener("click",y);async function y(e){try{const s=e.target.elements.search.value.trim();o.loader.classList.remove("hidden"),o.gallery.innerHTML="";const a=await d(s);if(a.totalHits===0)return c(message);const n=f(a.hits);o.gallery.innerHTML=n,i.refresh()}catch{c()}o.loader.classList.add("hidden")}async function h(e){e.preventDefault();try{const s=e.target.elements.search.value.trim();o.loader.classList.remove("hidden"),o.gallery.innerHTML="";const a=await d(s);if(a.totalHits===0)return c(message);const n=f(a.hits);o.gallery.insertAdjacentHTML("beforeend",n),i.refresh()}catch{c()}o.loader.classList.add("hidden")}function d(e){const s="https://pixabay.com/api/",a="42141224-180b0a56c10fd436e302d680a",n=new URLSearchParams({key:a,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:15}),r=`${s}?${n}`;return fetch(r).then(t=>t.json()).catch(t=>{c()})}function L(e){return`<li class="gallery-card">
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
      </li>`}function f(e){return e.map(L).join("")}function c(e){m.error({message:"Sorry, there are no images matching <br/> your search query. Please try again!",position:"topRight",messageColor:"#ffffff",messageSize:"16px",backgroundColor:"#ef4040",iconColor:"#ffffff",iconUrl:g,timeout:5e3,close:!1,closeOnEscape:!0,buttons:[[`<button type="button" style="background-color: transparent" ><img src=${p}></button>`,function(s,a){s.hide({transitionOut:"fadeOut"},a)}]]})}
//# sourceMappingURL=commonHelpers.js.map
