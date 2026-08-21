'use strict'

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import getImagesByQuery from './js/pixabay-api.js';

import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions';

// Code

const form = document.querySelector('.form');

form.addEventListener('submit', searchImages)

function searchImages(evt) {
    evt.preventDefault();

    const query = evt.target.elements.search.value.trim();

    if (!query) {
        iziToast.show({
            message: 'Please enter a search query!',
            backgroundColor: 'red',
            messageColor: 'white',
            progressBarColor: 'white',
            position: 'topRight',
            timeout: 8000,
            closeOnClick: true
        });
        
        return;
    }

    clearGallery();
    showLoader();

    getImagesByQuery(query)
        .then(data => {
            console.log(data)
        
            if (data.hits.length === 0) {
                return iziToast.show({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    backgroundColor: 'red',
                    messageColor: 'white',
                    progressBarColor: 'white',
                    position: 'topRight',
                    timeout: 8000,
                    closeOnClick: true
                });
            }

            createGallery(data.hits);
        })
        .catch(error => {
            console.log(error);
        })
        .finally(() => hideLoader());
    
    form.reset();
}