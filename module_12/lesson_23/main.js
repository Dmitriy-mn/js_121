import axios from "axios";

import './style.css'

/**
 * Використовуємо https://pokeapi.co/ та створимо сторінку перегляду покемонів
 *
 */

// const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

// const form = document.querySelector(".search-form");
// const container = document.querySelector(".card-container");
// const loader = document.querySelector(".loader");

// form.addEventListener("submit", onSearch);

// async function fetchPokemon(pokemonName) {
//     const response = await axios(`${BASE_URL}${pokemonName}`);
//     return response.data;
// }

// async function onSearch(event) {
//     event.preventDefault();
//     loader.classList.remove("hidden");
//     const queryValue = event.currentTarget.elements.query.value.trim();

//     try {
//         const data = await fetchPokemon(queryValue);
//         container.innerHTML = renderPokemonCard(data);
        
//     } catch(error) {
//         onFetchError(error.message);
//     } finally {
//         event.target.reset();
//         loader.classList.add("hidden");
//     }
// }

// function renderPokemonCard({ name, weight, height, sprites, abilities }) {
//     const abilitiesList = abilities.map(({ ability }) => `
//         <li class="list-group-item">${ability.name}</li>
//     `).join("");

//     return `
//         <div class="card">
//             <div class="card-img-top">
//                 <img src="${sprites.front_default}" alt="${name}"/>
//             </div>
//             <div class="card-body">
//                 <h3 class="card-title">Ім'я: ${name}</h3>
//                 <p class="card-text">Вага: ${weight}</p>
//                 <p class="card-text">Зріст: ${height}</p>
//             </div>

//             <p class="card-text">
//                 <h4>Вміння:</h4>
//                 <ul>
//                     ${abilitiesList}
//                 </ul>
//             </p>
//         </div>
//     `

// }

// function onFetchError(str) {
//     alert(str);
// }







