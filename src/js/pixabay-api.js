'use strict'

import axios from "axios";

export default function getImagesByQuery(query) {
    return axios
        .get('https://pixabay.com/api/', {
        params: {
            key: '57224426-952db717284ab9bb4c1fa857b',
            // твій унікальний ключ доступу до API.
            q: query,
            // слово для пошуку.Те, що буде вводити користувач.
            image_type: 'photo',
            // тип зображення.Потрібні тільки фотографії, тому постав значення photo.
            orientation: 'horizontal',
            // орієнтація фотографії.Постав значення horizontal.
            safesearch: true
            // фільтр за віком.Постав значення true.
        }
    })
        .then(response => response.data);
}
