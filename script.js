import {pokemonArray} from "./data/pokemon.js";

const cardContainer = document.querySelector(".card-container");
const input = document.querySelector(".search")

let htmlCode = ``;

pokemonArray.forEach((pokemon) =>{

    const name = pokemon.name;
    const capitalName = name.charAt(0).toUpperCase() + name.slice(1);
 
    htmlCode = htmlCode + `
    <div class ="card">
    <img class="card__image" src="${pokemon.sprite}" alt="">
        <div class="card__content">
            <div class="card__heading">${capitalName}</div>
            <div class="card__text">${capitalName} (#${pokemon.id}) is a ${pokemon.types.join(" & ")} type pokemon</div>
        </div>
    </div>`;

    
})

cardContainer.innerHTML = htmlCode;



