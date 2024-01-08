import { URL, imageContainer } from "../data/constants.js";
import { message } from "./message.js";
import { getQueryParameter } from "../helper/getQueryparameter.js";

//fetching each jackets id by calling the getQueryParameter function inside the template literal to get the object's id.
const jacketUrl = `${URL}/${getQueryParameter("id")}`;

// fetching specific jacket
export async function fetchJacket() {
  try {
    const response = await fetch(jacketUrl);
    const jacketJson = await response.json();

    displayProductImage(jacketJson);
    displayProductTitle(jacketJson);
    displayProductDescription(jacketJson);
    displayProductSizes(jacketJson);
  } catch (error) {
    console.log(error);
    imageContainer.innerHTML = message("error", "oops! Something went wrong fetching the jacket..");
  }
}

// render HTML

export const productTitleContainer = document.querySelector(".product_choises_headline");
export const productDescriptionContainer = document.querySelector(".product_choises_list");
export const productSizeContainer = document.querySelector(".sizes");

function displayProductImage(jacketJson) {
  imageContainer.innerHTML = `
                              <img class="product-image-container" src="${jacketJson.image}" ></img>
                             `;
}
function displayProductTitle(jacketJson) {
  productTitleContainer.innerHTML = `
                              <h1>${jacketJson.title}</h1>
                             `;
}
function displayProductDescription(jacketJson) {
  productDescriptionContainer.innerHTML = `
                              <p>${jacketJson.description}</p>
                             `;
}
function displayProductSizes(jacketJson) {
  for (const size of jacketJson.sizes) {
    productSizeContainer.innerHTML += `
                              <label class="size-button-container">${size}</label>
                             `;
  }
}
function displayProductPrice(jacketJson) {
  imageContainer.innerHTML = `
                              <div class="product-image-container" src="${jacketJson.image}" ></div>
                             `;
}
function displayProduct(jacketJson) {
  imageContainer.innerHTML = `
                              <div class="product-image-container" src="${jacketJson.image}" ></div>
                             `;
}
