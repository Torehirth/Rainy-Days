import {
  URL,
  imageContainer,
  productTitleContainer,
  productDescriptionContainer,
  productSizeContainer,
  productPriceContainer,
  productProductDetailsContainer as productDetailsContainer,
} from "../data/constants.js";
import { message } from "./message.js";
import { getQueryParameter } from "../helper/getQueryparameter.js";

//fetching each jackets id by calling the getQueryParameter function inside the template literal to get the object's id.
const jacketUrl = `${URL}/${getQueryParameter("id")}`;

// fetching specific jacket
export async function fetchJacket() {
  try {
    const response = await fetch(jacketUrl);
    const jacketJson = await response.json();

    displayProductImage(jacketJson, imageContainer);
    displayProductTitle(jacketJson, productTitleContainer);
    displayProductDescription(jacketJson, productDescriptionContainer);
    displayProductSizes(jacketJson, productSizeContainer);
    displayProductPrice(jacketJson, productPriceContainer);
    displayProductDetails(jacketJson, productDetailsContainer);
    getKeywords(jacketJson, wordContainer);
  } catch (error) {
    console.log(error);
    imageContainer.innerHTML = message("error", "oops! Something went wrong fetching the jacket..");
  }
}

// render HTML

function displayProductImage(JSON, container) {
  container.innerHTML = `
                              <img class="product-image-container" src="${JSON.image}" alt="${JSON.title}" ></img>
                             `;
}
function displayProductTitle(JSON, container) {
  container.innerHTML = `
                              <h1>${JSON.title}</h1>
                             `;
}
function displayProductDescription(JSON, container) {
  container.innerHTML = `
                              <p>${JSON.description}</p>
                             `;
}

function displayProductSizes(JSON, container) {
  for (const size of JSON.sizes) {
    container.innerHTML += `
                              <div class="size_option_container" id="size${size}" for="size_${size}">
                                <input type="radio" id="size_${size}" name="sizes" hidden /> 
                                <div class="sizes">
                                  <label class="size-button-container" id="size${size}" for="size_${size}">${size}</label>
                                </div>
                              </div>
                             `;
  }
}

function displayProductPrice(JSON, container) {
  container.innerHTML = `
                              <p>$${JSON.price}</p>
                             `;
}
function displayProductDetails(JSON, container) {
  container.innerHTML = `
                              <p class="product_details">${JSON.description}</p>
                             `;
}

// ----------------------

const wordContainer = document.querySelector(".product_details_list");

const desiredWords = [
  "breathable",
  "sustainable",
  "durable",
  "lightweight",
  "waterproof",
  "hiking",
  "stylish",
  "water-repellent",
  "outdoor adventure",
  "outdoor activities",
  "travel",
  "packable",
  "relaxed fit",
];

function getKeywords(JSON, container) {
  const text = JSON.description;
  const words = text.split(" ");
  const filteredWords = words.filter((word) => desiredWords.includes(word));

  console.log(filteredWords);

  for (const word of filteredWords) {
    container.innerHTML += `
                            <div class="product_details_list">
                              <ul>
                                <li>${word}</li>
                              </ul>
                            </div>
                           `;
  }
}
