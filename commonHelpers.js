import{s as b,i as c}from"./assets/vendor-87ec4f81.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const L={pixabayApiKey:"41829663-a3becd9e4f80ae5dbcbf223ac"},u=document.querySelector(".form"),a=document.querySelector(".form-input"),m=document.querySelector(".gallery"),n=document.createElement("div");n.classList.add("loader");const v=new b("li a",{captionsData:"alt",captionClass:"img-caption",captionDelay:250});u.addEventListener("submit",$);function $(l){l.preventDefault(),m.innerHTML="",u.after(n);const o=a.value,s=L.pixabayApiKey,r=new URLSearchParams({key:`${s}`,q:`${o}`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:30});fetch(`https://pixabay.com/api/?${r}`).then(e=>{if(e.ok)return e.json();throw new Error(e.status)}).then(({hits:e})=>{e.length||c.show({message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight",color:"#EF4040",messageColor:"#FAFAFB",iconUrl:"./img/bi_x-octagon.svg"});const t=e.map(({webformatURL:i,largeImageURL:p,tags:f,likes:h,views:d,comments:g,downloads:y})=>`<li class="gallery-item">
              <a class="item-link" href="${p}">
                <img
                  src="${i}"
                  alt="${f}"
                  width="360"
                  height="200"
                />
              </a>
              <ul class="mini-list">
                <li class="mini-header">
                  <h3>Likes</h3>
                  <p>${h}</p>
                </li>
                <li class="mini-header">
                  <h3>Views</h3>
                  <p>${d}</p>
                </li>
                <li class="mini-header">
                  <h3>Comments</h3>
                  <p>${g}</p>
                </li>
                <li class="mini-header">
                  <h3>Downloads</h3>
                  <p>${y}</p>
                </li>
              </ul>
            </li>`).join("");n.remove(),m.insertAdjacentHTML("beforeend",t),a.value="",v.refresh()}).catch(e=>{n.remove(),c.show({message:`${e}`,position:"topRight",color:"#EF4040",messageColor:"#FAFAFB",iconUrl:"/img/bi_x-octagon.svg"}),a.value=""})}
//# sourceMappingURL=commonHelpers.js.map