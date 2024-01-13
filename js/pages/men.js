import { URL } from "../data/constants.js";
import { message } from "../components/message.js";

const mensErrorContainer = document.querySelector(".jacket_page_content");
const mensContainer = document.querySelector(".jackets-container");

async function FetchMensJackets() {
  try {
    const response = await fetch(URL);
    const mensJackets = await response.json();

    mensContainer.innerHTML = "";

    displayJacketsByGender(mensJackets, mensContainer);
  } catch (error) {
    console.error(error);
    mensErrorContainer.innerHTML = message("error", "Sorry! an error occurred when fetching the jackets");
  }
}

function displayJacketsByGender(jackets, container) {
  jackets.forEach((jacket) => {
    const mensGender = jacket.gender;
    if (mensGender.toLowerCase() === "male") {
      container.innerHTML += `
      <div class="jackets-container">
      <a href="./product.html?id=${jacket.id}" class="outer_product_container">
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
    </div>`;
    }
  });
}

FetchMensJackets();
