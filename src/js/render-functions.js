'use strict'

import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

const lightbox = new SimpleLightbox('.gallery a', {
                captionsData: 'alt',
                captionDelay: 250
});
            
export function createGallery(images) {
    gallery.innerHTML = images
        .map(image => `
        <li class="gallery-item">
            <a class="gallery-link" href="${image.largeImageURL}">
                <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}" 
                width="360" height="200" />
            </a>
            <div class="description">
            <div class="description-container">
            <p class="description-header">Likes</p>
            <p class="description-text">${image.likes}</p>
            </div>
            <div class="description-container">
            <p class="description-header">Views</p>
            <p class="description-text">${image.views}</p>
            </div>
            <div class="description-container">
            <pv class="description-header">Comments</pv>
            <p class="description-text">${image.comments}</p>
            </div>
            <div class="description-container">
            <p class="description-header">Downloads</p>
            <p class="description-text">${image.downloads}</p>
            </div>
            </div>
        </li>
            `)
        .join('');
    
    lightbox.refresh();
}

export function clearGallery() {
    gallery.innerHTML = '';
}

const loader = document.querySelector('.loader');

export function showLoader() {
     loader.classList.add('is-visible');
}

export function hideLoader() {
     loader.classList.remove('is-visible');
}