import{S as i,i as f}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const u="/goit-js-hw-12/assets/octagon-9a0a5cbd.svg",d="/goit-js-hw-12/assets/close-22ff606a.svg",n={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};let g=new i(".gallery a");n.form.addEventListener("submit",m);async function m(r){r.preventDefault();const s=r.target.elements.search.value.trim();n.loader.classList.remove("hidden"),n.gallery.innerHTML="",p(s).then(o=>{if(o.totalHits===0)return c(message);const a=h(o.hits);n.gallery.innerHTML=a,g.refresh()}).catch(o=>{c()}).finally(()=>{n.loader.classList.add("hidden")}),n.form.reset()}function p(r){const s="https://pixabay.com/api/",o="42141224-180b0a56c10fd436e302d680a",a=new URLSearchParams({key:o,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:15}),e=`${s}?${a}`;return fetch(e).then(t=>t.json()).catch(t=>{c()})}function y(r){return`<li class="gallery-card">
        <a href="${r.largeImageURL}"
          ><img
            class="gallery-image"
            src="${r.webformatURL}"
            alt="${r.tags}"
            title=""
          />
        </a>
        <div class="gallery-card-items">
          <p class="gallery-card-info">
            Likes
            <span class="gallery-card-data">${r.likes}</span>
          </p>

          <p class="gallery-card-info">
            Views
            <span class="gallery-card-data">${r.views}</span>
          </p>

          <p class="gallery-card-info">
            Comments
            <span class="gallery-card-data">${r.comments}</span>
          </p>

          <p class="gallery-card-info">
            Downloads
            <span class="gallery-card-data">${r.downloads}</span>
          </p>
        </div>
      </li>`}function h(r){return r.map(y).join("")}function c(r){f.error({message:"Sorry, there are no images matching <br/> your search query. Please try again!",position:"topRight",messageColor:"#ffffff",messageSize:"16px",backgroundColor:"#ef4040",iconColor:"#ffffff",iconUrl:u,timeout:5e3,close:!1,closeOnEscape:!0,buttons:[[`<button type="button" style="background-color: transparent" ><img src=${d}></button>`,function(s,o){s.hide({transitionOut:"fadeOut"},o)}]]})}
//# sourceMappingURL=commonHelpers.js.map
