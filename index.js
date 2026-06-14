import{a as n,S as m,i as d}from"./assets/vendor-D_1dfqIW.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const u="56294783-65626070dc64ec0f139760a6f";function p(t){return n.get("https://pixabay.com/api/",{params:{key:u,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const g=t=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${t.largeImageURL}">
        <img
          class="gallery-image"
          src="${t.webformatURL}"
          alt="${t.tags}"
        />
      </a>
        <div class="gallery-data">
            <ul class="img-list">
                <li class="img-data">
                    <p class="img-text">Likes</p><p class="img-text">${t.likes}</p>
                </li>
                <li class="img-data">
                    <p class="img-text">Views</p><p class="img-text">${t.views}</p>
                </li>
                <li class="img-data">
                    <p class="img-text">Comments</p><p class="img-text">${t.comments}</p>
                </li>
                <li class="img-data">
                    <p class="img-text">Downloads</p><p class="img-text">${t.downloads}</p>
                </li>
            </ul>
        </div>
     </li>
  `,f=document.querySelector(".form"),o=document.querySelector(".gallery"),y=new m(".gallery a"),c=document.querySelector(".loader");f.addEventListener("submit",t=>{t.preventDefault();const a=t.currentTarget.elements["search-text"].value.trim();o.innerHTML="",c.classList.remove("hidden"),p(a).then(r=>{if(r.data.hits.length===0){d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const i=r.data.hits.map(g).join("");o.innerHTML=i,y.refresh()}).catch(r=>{console.log(r)}).finally(()=>{c.classList.add("hidden")})});
//# sourceMappingURL=index.js.map
