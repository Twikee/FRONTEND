'use strict';

const BASE_URL = 'https://api.thecatapi.com/v1/images/search';
const img = document.getElementById('imgCatsApi');


const loadImg = async() => {
    const responseData = await fetch(BASE_URL);
    const imgCats = await responseData.json();

    img.src = imgCats[0].url;
}


document.getElementById('btnChange').addEventListener('click', loadImg);