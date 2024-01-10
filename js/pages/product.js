import { fetchJackets } from "../API/fetchJackets.js";
import { fetchJacket } from "../API/fetchJacket.js";
import { desiredWords } from "../data/constants.js";

fetchJackets();
fetchJacket();

export function getKeywords(JSON, container) {
  const text = JSON.description;
  const words = text.split(" ");
  const filteredWords = words.filter((word) => desiredWords.includes(word));

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

// render HTML

export function displayProductImage(JSON, container) {
  container.innerHTML = `
                              <img class="product-image-container" src="${JSON.image}" alt="${JSON.title}" ></img>
                             `;
}
export function displayProductTitle(JSON, container) {
  container.innerHTML = `
                              <h1>${JSON.title}</h1>
                             `;
}
export function displayProductDescription(JSON, container) {
  container.innerHTML = `
                              <p>${JSON.description}</p>
                             `;
}
export function displayProductSizes(JSON, container) {
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
export function displayProductPrice(JSON, container) {
  container.innerHTML = `
                              <p>$${JSON.price}</p>
                             `;
}
export function displayProductDetails(JSON, container) {
  container.innerHTML = `
                              <p class="product_details">${JSON.description}</p>
                             `;
}
