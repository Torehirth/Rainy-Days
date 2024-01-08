import { URL } from "../data/constants.js";
import { message } from "./message.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);

const imageContainer = document.querySelector(".product-image-container");

export const jacketUrl = `${URL}/${id}`;

export async function fetchJacket() {
  try {
    const response = await fetch(jacketUrl);
    const jacketJson = await response.json();

    console.log(jacketJson);

    imageContainer.innerHTML = `
                               <img class="product-image-container" src="${jacketJson.image}" ></img>
                               `;
  } catch (error) {
    console.log(error);
    imageContainer.innerHTML = message("error", "oops! a minor bug in the machinery..");
  }
}
