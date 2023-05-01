import { recettesDB } from "./recettesDB.js";

const parmas = new URLSearchParams(window.location.search);
var id = parmas.get("id");
console.log(id);

var recipe = document.getElementsByClassName("recette_container")[0];

function setRecetteContainer() {
  let s = 0;
  for (let j = 0; j < recettesDB[id - 1].comments.length; j++) {
    s += recettesDB[id - 1].comments[j].rating;
  }
  let ratingValue = s / recettesDB[id - 1].comments.length;
  console.log(ratingValue);
  let filledStars = Math.round(ratingValue);
  console.log(filledStars);
  let emptyStars = 5 - filledStars;
  let ratingHtml = `<div class="stars">
  <span class="filled-stars">${"<i class='fa-solid fa-star'></i>".repeat(
    filledStars
  )}</span>
  <span>${"<i class='fa-solid fa-star'></i>".repeat(emptyStars)}</span>
</div>`;

  recipe.innerHTML = `
    <img src="../assets/recettes/${id}/1.png" alt="recette${id}" />
            <div class="rank">
            ${ratingHtml}
            </div>
            <div class="titel">
              <p>${recettesDB[id - 1].name}</p>
            </div>`;
}

setRecetteContainer();

function setIngredients() {
  let ingredientsHTML = recettesDB[id - 1].ingredients
    .map((ingredient) => `${ingredient} <br />`)
    .join("");
  document.querySelector(
    ".text_side"
  ).innerHTML = `<h2>Ingredients</h2><p>${ingredientsHTML}</p>`;
}

setIngredients();

function setInstructions() {
  let instructionsHTML = recettesDB[id - 1 ].instructions
    .map((instruction) => `${instruction} <br />`)
    .join("");
  document.querySelector(
    "#mid"
  ).innerHTML = `<h2>Instructions</h2><p>${instructionsHTML}</p>`;
}

setInstructions();

var images = document.getElementsByClassName("images")[0];
function setImages() {
  images.innerHTML = `
    <div class="img_container">
          <img src="../assets/recettes/${id}/2.png" alt="${id}" />
        </div>
        <div class="img_container">
          <img src="../assets/recettes/${id}/3.png" alt="${id}" />
        </div>
        <div class="img_container">
          <img src="../assets/recettes/${id}/4.png" alt="${id}" />
        </div>`;
}
setImages();

function updateRecipeInfo() {
    const recipe = recettesDB[id-1];
    
    document.getElementById("category").innerHTML = `category : ${recipe.category}`;
    document.getElementById("country").innerHTML = `country : ${recipe.country}`;
    document.getElementById("duration").innerHTML = `duration : ${recipe.duration}`;
  
    const opinions = document.getElementsByClassName("opinion");
    for (let i = 0; i < opinions.length; i++) {
      const opinionTitle = opinions[i].querySelector(`#opinion${i + 1}`);
      const opinionContent = opinionTitle.nextElementSibling;
      opinionTitle.innerHTML = recipe.comments[i].user;
      opinionContent.innerHTML = recipe.comments[i].content;
    }
  }
  

  updateRecipeInfo();
  