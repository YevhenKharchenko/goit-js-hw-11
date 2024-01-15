import{i as y,s as b}from"./assets/vendor-87ec4f81.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const u=document.querySelector(".form"),l=document.querySelector(".form-input"),c=document.querySelector(".gallery"),n=document.createElement("div");n.classList.add("loader");u.addEventListener("submit",L);function L(s){s.preventDefault(),c.innerHTML="",u.after(n);const i=l.value;fetch(`https://pixabay.com/api/?key=41829663-a3becd9e4f80ae5dbcbf223ac&q=${i}&image_type=photo&orientation=horizontal&safesearch=true&per_page=30`).then(o=>{if(o.ok)return o.json();throw new Error(o.status)}).then(({hits:o})=>{o.length||y.show({message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight",color:"#EF4040",messageColor:"#FAFAFB",iconUrl:"../img/bi_x-octagon.svg"});const e=o.map(({webformatURL:r,largeImageURL:m,tags:f,likes:d,views:h,comments:p,downloads:g})=>`<li class="gallery-item">
              <a class="item-link" href="${m}">
                <img
                  src="${r}"
                  alt="${f}"
                  width="360"
                  height="200"
                />
              </a>
              <ul class="mini-list">
                <li class="mini-header">
                  <h3>Likes</h3>
                  <p>${d}</p>
                </li>
                <li class="mini-header">
                  <h3>Views</h3>
                  <p>${h}</p>
                </li>
                <li class="mini-header">
                  <h3>Comments</h3>
                  <p>${p}</p>
                </li>
                <li class="mini-header">
                  <h3>Downloads</h3>
                  <p>${g}</p>
                </li>
              </ul>
            </li>`).join("");n.remove(),l.value="",c.insertAdjacentHTML("beforeend",e),new b("li a",{captionsData:"alt",captionClass:"img-caption",captionDelay:250}).refresh()}).catch(o=>console.log(o))}
//# sourceMappingURL=commonHelpers.js.map
