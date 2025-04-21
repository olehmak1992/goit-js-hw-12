import{S,a as M,i as u}from"./assets/vendor-BjRz3xa9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const f=document.querySelector(".gallery"),p=document.querySelector(".loader"),m=document.querySelector(".load-more-btn"),$=new S(".gallery a",{captionsData:"alt",captionDelay:250});function y(o){const t=o.map(({webformatURL:s,largeImageURL:a,tags:e,likes:r,views:n,comments:w,downloads:q})=>`<li class="gallery-item">
        <a class="gallery-link" href=${a}>
            <img
                class="gallery-image"
                src=${s} 
                alt="${e}"
            />
            <ul class="gallery-desc">
                <li>
                    <h2>Likes</h2><p>${r}</p>
                </li>
                <li>
                    <h2>Views</h2><p>${n}</p>
                </li>
                <li>
                    <h2>Comments</h2><p>${w}</p>
                </li>
                <li>
                    <h2>Downloads</h2><p>${q}</p>
                </li>
            </ul>
        </a>
    </li>`).join("");f.insertAdjacentHTML("beforeend",t),$.refresh()}function B(){f.innerHTML=""}function g(){p.classList.remove("hidden")}function d(){p.classList.add("hidden")}function L(){m.classList.remove("hidden")}function b(){m.classList.add("hidden")}async function v(o,t){g();try{return(await M.get("https://pixabay.com/api/",{params:{key:"49849891-12ae0f2235913a172a6db425e",q:`${o}`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}})).data}catch(s){console.error(s)}}const l=document.querySelector(".form"),O=document.querySelector('[name="search-text"]');let i=1,h,c;l.addEventListener("submit",P);m.addEventListener("click",x);async function P(o){if(o.preventDefault(),B(),c=O.value.trim(),i=1,!c){l.reset();return}try{const t=await v(c,i);if(h=Math.ceil(t.totalHits/t.hits.length),t.hits.length===0)return b(),d(),l.reset(),u.info({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});if(y(t.hits),d(),i>=h)return u.info({title:"Caution",message:"We're sorry, but you've reached the end of search results.",position:"topRight"});L()}catch(t){return console.log(t.message)}l.reset()}async function x(){b(),g(),i+=1;try{const o=await v(c,i);y(o.hits),d();const s=document.querySelector(".gallery-item").getBoundingClientRect().height;if(window.scrollBy({left:0,top:s*2,behavior:"smooth"}),i>=h)return u.info({title:"Caution",message:"We're sorry, but you've reached the end of search results.",position:"topRight"});L()}catch(o){return console.log(o.message)}}
//# sourceMappingURL=index.js.map
