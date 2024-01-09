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
    displayProductPrice(jacketJson);
    displayProductDetails(jacketJson);
  } catch (error) {
    console.log(error);
    imageContainer.innerHTML = message("error", "oops! Something went wrong fetching the jacket..");
  }
}

// render HTML

export const productTitleContainer = document.querySelector(".product_choises_headline");
export const productDescriptionContainer = document.querySelector(".product_choises_list");
export const productSizeContainer = document.querySelector(".size_option_container");
export const productPriceContainer = document.querySelector(".price-container");
export const productProductDetailsContainer = document.querySelector(".product_details");

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
                              <div class="size_option_container" id="size${size}" for="size_${size}">
                                <input type="radio" id="size_${size}" name="sizes" hidden /> 
                                <div class="sizes">
                                  <label class="size-button-container" id="size${size}" for="size_${size}">${size}</label>
                                </div>
                              </div>
                             `;
  }
}
function displayProductPrice(jacketJson) {
  productPriceContainer.innerHTML = `
                              <p>$${jacketJson.price}</p>
                             `;
}
function displayProductDetails(jacketJson) {
  productProductDetailsContainer.innerHTML = `
                              <p class="product_details">${jacketJson.description}</p>
                             `;
}
