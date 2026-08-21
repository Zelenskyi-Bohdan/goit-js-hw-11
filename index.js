import{a as p,S as u,i as n}from"./assets/vendor-S2qh7U4E.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();function h(s){return p.get("https://pixabay.com/api/",{params:{key:"57224426-952db717284ab9bb4c1fa857b",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(e=>e.data)}const c=document.querySelector(".gallery"),f=new u(".gallery a",{captionsData:"alt",captionDelay:250});function m(s){c.innerHTML=s.map(e=>`
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
            <pv class="description-header">Comments</pv>
            <p class="description-text">${e.comments}</p>
            </div>
            <div class="description-container">
            <p class="description-header">Downloads</p>
            <p class="description-text">${e.downloads}</p>
            </div>
            </div>
        </li>
            `).join(""),f.refresh()}function g(){c.innerHTML=""}const l=document.querySelector(".loader");function y(){l.classList.add("is-visible")}function v(){l.classList.remove("is-visible")}const d=document.querySelector(".form");d.addEventListener("submit",b);function b(s){s.preventDefault();const e=s.target.elements.search.value.trim();if(!e){n.show({message:"Please enter a search query!",backgroundColor:"red",messageColor:"white",progressBarColor:"white",position:"topRight",timeout:8e3,closeOnClick:!0});return}g(),y(),h(e).then(o=>{if(console.log(o),o.hits.length===0)return n.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red",messageColor:"white",progressBarColor:"white",position:"topRight",timeout:8e3,closeOnClick:!0});m(o.hits)}).catch(o=>{console.log(o)}).finally(()=>v()),d.reset()}
//# sourceMappingURL=index.js.map
