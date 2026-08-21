import{a as p,S as u,i as a}from"./assets/vendor-S2qh7U4E.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(r){if(r.ep)return;r.ep=!0;const t=o(r);fetch(r.href,t)}})();function h(s){return p.get("https://pixabay.com/api/",{params:{key:"57224426-952db717284ab9bb4c1fa857b",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(e=>e.data)}const c=document.querySelector(".gallery"),m=new u(".gallery a",{captionsData:"alt",captionDelay:250});function f(s){c.innerHTML=s.map(e=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${e.largeImageURL}">
                <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" 
                width="360" height="200" />
            </a>
            <div class="description">
            <div class="description-container">
            <p class="description-header">Likes</p>
            <p class="description-text">${e.likes}</p>
            </div>
            <div class="description-container">
            <p class="description-header">Views</p>
            <p class="description-text">${e.views}</p>
            </div>
            <div class="description-container">
            <p class="description-header">Comments</p>
            <p class="description-text">${e.comments}</p>
            </div>
            <div class="description-container">
            <p class="description-header">Downloads</p>
            <p class="description-text">${e.downloads}</p>
            </div>
            </div>
        </li>
            `).join(""),m.refresh()}function g(){c.innerHTML=""}const l=document.querySelector(".loader");function y(){l.classList.add("is-visible")}function b(){l.classList.remove("is-visible")}const d=document.querySelector(".form");d.addEventListener("submit",v);function v(s){s.preventDefault();const e=s.target.elements.search.value.trim();if(!e){a.show({message:"Please enter a search query!",backgroundColor:"red",messageColor:"white",progressBarColor:"white",position:"topRight",timeout:8e3,closeOnClick:!0});return}g(),y(),h(e).then(o=>{if(o.hits.length===0)return a.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red",messageColor:"white",progressBarColor:"white",position:"topRight",timeout:8e3,closeOnClick:!0});f(o.hits),d.reset()}).catch(o=>a.error({message:o.message,backgroundColor:"red",messageColor:"white",progressBarColor:"white",position:"topRight",timeout:8e3,closeOnClick:!0})).finally(()=>b())}
//# sourceMappingURL=index.js.map
