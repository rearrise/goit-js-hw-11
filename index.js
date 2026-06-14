import{a as u,S as m,i as o}from"./assets/vendor-D_1dfqIW.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();const d="56294783-65626070dc64ec0f139760a6f";function g(e){return u.get("https://pixabay.com/api/",{params:{key:d,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>s.data)}const n=document.querySelector(".gallery"),c=document.querySelector(".loader"),p=new m(".gallery a"),f=e=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${e.largeImageURL}">
        <img
          class="gallery-image"
          src="${e.webformatURL}"
          alt="${e.tags}"
        />
      </a>
        <div class="gallery-data">
            <ul class="img-list">
                <li class="img-data">
                    <p class="img-text">Likes</p><p class="img-text">${e.likes}</p>
                </li>
                <li class="img-data">
                    <p class="img-text">Views</p><p class="img-text">${e.views}</p>
                </li>
                <li class="img-data">
                    <p class="img-text">Comments</p><p class="img-text">${e.comments}</p>
                </li>
                <li class="img-data">
                    <p class="img-text">Downloads</p><p class="img-text">${e.downloads}</p>
                </li>
            </ul>
        </div>
     </li>
  `;function y(){n.innerHTML=""}function h(){c.classList.remove("hidden")}function L(){c.classList.add("hidden")}function x(e){const s=e.map(f).join("");n.innerHTML=s,p.refresh()}const w=document.querySelector(".form");w.addEventListener("submit",e=>{e.preventDefault();const s=e.currentTarget.elements["search-text"].value.trim();s&&(y(),h(),g(s).then(i=>{if(i.hits.length===0){o.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}x(i.hits)}).catch(()=>{o.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{L()}))});
//# sourceMappingURL=index.js.map
