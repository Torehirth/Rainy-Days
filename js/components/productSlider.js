import { message } from "./message.js";
import { URL, productSlider } from "../data/constants.js";

export async function fetchJackets() {
  try {
    const response = await fetch(URL);
    const jacketsJson = await response.json();

    console.log(jacketsJson);

    productSlider.innerHTML = "";

    renderJacketsIndex(jacketsJson);
  } catch (error) {
    console.log(error);
    productSlider.innerHTML = message("error", "oops! a minor bug in the machinery..");
  }
}

function renderJacketsIndex(jacketsJson) {
  jacketsJson.forEach((jacket) => {
    productSlider.innerHTML += `
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
