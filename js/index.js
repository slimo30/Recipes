
import { recettesDB } from "./recettesDB.js";

function getRandomRecipeIndexes(recipes) {
  const indexes = [];
  while (indexes.length < 3) {
    const randomIndex = Math.floor(Math.random() * recipes.length - 1 ) + 1;
    if (!indexes.includes(randomIndex)) {
      indexes.push(randomIndex);
    }
  }
  return indexes;
}

var tableRandom = getRandomRecipeIndexes(recettesDB);


var continer = document.getElementsByClassName("big_recette")[0];

function default_recipe() {
  continer.innerHTML = ``;
  for (let index = 0; index < tableRandom.length; index++) {
    let random = Math.floor(Math.random() * 4) + 1;

    let s = 0;
    for (let j = 0; j < recettesDB[tableRandom[index]].comments.length; j++) {
      s += recettesDB[tableRandom[index]].comments[j].rating;
    }

    let ratingValue = s / recettesDB[tableRandom[index]].comments.length;
    let filledStars = Math.round(ratingValue);

    let emptyStars = 5 - filledStars;

    let ratingHtml = `<div class="stars">
  <span class="filled-stars">${"<i class='fa-solid fa-star'></i>".repeat(
    filledStars
  )}</span>
  <span>${"<i class='fa-solid fa-star'></i>".repeat(emptyStars)}</span>
</div>`;

    continer.innerHTML += `
    
    <div class="recette_container">
            <img src="../assets/recettes/${
              tableRandom[index] + 1
            }/${random}.png" alt="recettes_${tableRandom[index] + 1}" />
            <div class="rank">
              <p>
              ${ratingHtml}
              </p>
            </div>
            <div class="titel">
            <a href="details.html?id=${tableRandom[index] + 1}"> ${
      recettesDB[tableRandom[index]].name
    }</a>
            </div>
          </div>`;
  }
}

default_recipe();
