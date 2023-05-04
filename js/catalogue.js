import { recettesDB } from "./recettesDB.js";

var catalogue = document.getElementById("content");

function create_recipes() {
  for (let index = 0; index < recettesDB.length; index++) {
    let random = Math.floor(Math.random() * 4) + 1;
    let s = 0;
    for (let j = 0; j < recettesDB[index].comments.length; j++) {
      s += recettesDB[index].comments[j].rating;
    }
    let ratingValue = s / recettesDB[index].comments.length;
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
    catalogue.innerHTML += `<div class="item">
      <img src="../assets/recettes/${index + 1}/${random}.png" alt="recettes_${
      index + 1
    }" />
      <div class="rank">
        ${ratingHtml}
      </div>
      <div class="titel">
        <a href="details.html?id=${index + 1}"> ${recettesDB[index].name}</a>
      </div>
    </div>`;
  }
}
var srinp = document.getElementById("srinp");

function search() {
  srinp.addEventListener("input", () => {
    select.value = "all";
    catalogue.innerHTML = ``;

    for (let index = 0; index < recettesDB.length; index++) {
      if (
        recettesDB[index].name.toLowerCase().includes(srinp.value.toLowerCase())
      ) {
        let random = Math.floor(Math.random() * 4) + 1;
        let s = 0;
        for (let j = 0; j < recettesDB[index].comments.length; j++) {
          s += recettesDB[index].comments[j].rating;
        }
        let ratingValue = s / recettesDB[index].comments.length;
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
        catalogue.innerHTML += `<div class="item">
          <img src="../assets/recettes/${
            index + 1
          }/${random}.png" alt="recettes_${index + 1}" />
          <div class="rank">
            ${ratingHtml}
          </div>
          <div class="titel">
            <a href="details.html?id=${index + 1}"> ${
          recettesDB[index].name
        }</a>
          </div>
        </div>`;
      }
    }
  });
}
search();
var select = document.getElementById("filter-by");
function selectCategory() {
  select.addEventListener("change", () => {
    console.log(select.value);
    if (select.value === "all") {
      catalogue.innerHTML = ``;
      create_recipes();
    } else {
      catalogue.innerHTML = ``;
      for (let index = 0; index < recettesDB.length; index++) {
        if (recettesDB[index].category == select.value) {
          let random = Math.floor(Math.random() * 4) + 1;
          let s = 0;
          for (let j = 0; j < recettesDB[index].comments.length; j++) {
            s += recettesDB[index].comments[j].rating;
          }
          let ratingValue = s / recettesDB[index].comments.length;
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

          catalogue.innerHTML += `<div class="item">
          <img src="../assets/recettes/${
            index + 1
          }/${random}.png" alt="recettes_${index + 1}" />
          <div class="rank">
            ${ratingHtml}
          </div>
          <div class="titel">
            <a href="details.html?id=${index + 1}"> ${
            recettesDB[index].name
          }</a>
          </div>
        </div>`;
        }
      }
    }
  });
}
selectCategory();
create_recipes();
