import{a as m,i as p,S as y}from"./assets/vendor-483db976.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();async function d(r){const e="https://pixabay.com/api/";return(await m.get(e,{params:r})).data}const h="/goit-js-hw-12/assets/octagon-9a0a5cbd.svg",L="/goit-js-hw-12/assets/close-22ff606a.svg";function b(r){return`<li class="gallery-card">
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
      </li>`}function f(r){return r.map(b).join("")}function l(r){p.error({message:r,position:"topRight",messageColor:"#ffffff",messageSize:"16px",backgroundColor:"#ef4040",iconColor:"#ffffff",iconUrl:h,timeout:5e3,close:!1,closeOnEscape:!0,buttons:[[`<button type="button" style="background-color: transparent" ><img src=${L}></button>`,function(e,a){e.hide({transitionOut:"fadeOut"},a)}]]})}function g(r,e,a){Math.ceil(r.totalHits/e.per_page)===e.page?(a.classList.add("hidden"),l("We're sorry, but you've reached the end of search results.")):a.classList.remove("hidden")}function v(r){const a=r.getBoundingClientRect();scrollBy({behavior:"smooth",top:a.height*2})}const s={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),searchMore:document.querySelector(".search-more")},n={key:"42141224-180b0a56c10fd436e302d680a",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0,page:"",per_page:15};let u=new y(".gallery a");s.form.addEventListener("submit",S);s.searchMore.addEventListener("click",w);async function w(r){n.page+=1,s.loader.classList.remove("hidden");try{const e=await d(n);if(e.totalHits===0)return l(message);const a=f(e.hits);s.gallery.insertAdjacentHTML("beforeend",a),u.refresh(),g(e,n,s.searchMore)}catch(e){l(e)}s.loader.classList.add("hidden"),v(s.gallery.firstElementChild)}async function S(r){if(r.preventDefault(),n.q=r.target.elements.search.value,n.page=1,s.gallery.innerHTML="",s.searchMore.classList.add("hidden"),console.log(n.q.trim()),!n.q.trim())l("digital world is mess");else{s.loader.classList.remove("hidden");try{const e=await d(n);if(console.log(e.totalHits),e.totalHits===0){s.loader.classList.add("hidden"),l("Sorry, there are no images matching <br/> your search query. Please try again!");return}const a=f(e.hits);s.gallery.innerHTML=a,u.refresh(),g(e,n,s.searchMore)}catch(e){l(e),console.log(e)}s.loader.classList.add("hidden")}s.form.reset()}
//# sourceMappingURL=commonHelpers.js.map