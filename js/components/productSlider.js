import { message } from "./message.js";
import { URL, productSliderContainer } from "../data/constants.js";

export async function fetchJackets() {
  try {
    const response = await fetch(URL);
    const jacketsJson = await response.json();

    productSliderContainer.innerHTML = "";

    displayJacketslider(jacketsJson);
  } catch (error) {
    console.log(error);
    productSliderContainer.innerHTML = message("error", "oops! Something went wrong fetching the products..");
  }
}

export function displayJacketslider(jacketsJson) {
  jacketsJson.forEach((jacket) => {
    productSliderContainer.innerHTML += `
    <div class="slider_group">
    <a href="product.html?id=${jacket.id}" class="outer_product_container">
    <div class="inner_product_container">
      <div class="slider_image_container">
        <img src="${jacket.image}" alt="${jacket.title}" class="img_supreme_alpine_Jacket_m" />
      </div>
      <div class="slider_text_container">
        <p>${jacket.title}</p>
        <p class="slider_price">$${jacket.price}</p>
      </div>
    </div>    
   </a>
  </div>
  `;
  });
}
