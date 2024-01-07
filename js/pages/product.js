import { message } from "../components/message.js";
import { URL } from "../data/constants.js";

// const queryString = document.location.search;
// const params = new URLSearchParams(queryString);
// const id = params.get("id");

// console.log(id);

const productSliderContainer = document.querySelector(".product-image-container");

async function displayJacket() {
  // const specificUrl = `${URL}/${id}`;

  try {
    const response = await fetch(URL);
    const jacketsJson = await response.json();

    // console.log(specificUrl);

    // productSliderContainer.innerHTML = "";

    displayJacketProduct(jacketsJson);
  } catch (error) {
    console.log(error);
    productSliderContainer.innerHTML = message("error", "oops! a minor bug in the machinery..");
  }
}
displayJacket();

function displayJacketProduct(jacketsJson) {
  for (let i = 0; i < jacketsJson.length; i++)
    productSliderContainer.innerHTML = `
                                        <div class="big-img-container">
                                          <img src="${jacketsJson[i].image}" alt="${jacketsJson[i].title}"/>
                                        </div>
                                       `;
}

// Popular product slider
import { fetchJackets } from "../components/productSlider.js";
fetchJackets();
