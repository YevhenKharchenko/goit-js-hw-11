import{i as l,s as L}from"./assets/vendor-87ec4f81.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const u=document.querySelector(".form"),c=document.querySelector(".form-input"),m=document.querySelector(".gallery"),n=document.createElement("div");n.classList.add("loader");u.addEventListener("submit",v);function v(a){a.preventDefault(),m.innerHTML="",u.after(n);const o=c.value,s="41829663-a3becd9e4f80ae5dbcbf223ac",i=new URLSearchParams({key:`${s}`,q:`${o}`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:30});fetch(`https://pixabay.com/api/?${i}`).then(e=>{if(e.ok)return e.json();throw new Error(e.status)}).then(({hits:e})=>{e.length||l.show({message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight",color:"#EF4040",messageColor:"#FAFAFB",iconUrl:"/img/bi_x-octagon.svg"});const t=e.map(({webformatURL:h,largeImageURL:f,tags:d,likes:p,views:g,comments:y,downloads:b})=>`<li class="gallery-item">
              <a class="item-link" href="${f}">
                <img
                  src="${h}"
                  alt="${d}"
                  width="360"
                  height="200"
                />
              </a>
              <ul class="mini-list">
                <li class="mini-header">
                  <h3>Likes</h3>
                  <p>${p}</p>
                </li>
                <li class="mini-header">
                  <h3>Views</h3>
                  <p>${g}</p>
                </li>
                <li class="mini-header">
                  <h3>Comments</h3>
                  <p>${y}</p>
                </li>
                <li class="mini-header">
                  <h3>Downloads</h3>
                  <p>${b}</p>
                </li>
              </ul>
            </li>`).join("");n.remove(),m.insertAdjacentHTML("beforeend",t),c.value="",new L("li a",{captionsData:"alt",captionClass:"img-caption",captionDelay:250}).refresh()}).catch(e=>{n.remove(),l.show({message:`${e}`,position:"topRight",color:"#EF4040",messageColor:"#FAFAFB",iconUrl:"/img/bi_x-octagon.svg"})})}
//# sourceMappingURL=commonHelpers.js.map
