import { message } from "../components/message.js";
import { URL, productSliderContainer } from "../data/constants.js";
import { displayJacketslider } from "../UI/displayJacketslider.js";

export async function fetchJackets() {
  try {
    const response = await fetch(URL);
    const jacketsJson = await response.json();

    productSliderContainer.innerHTML = "";

    displayJacketslider(jacketsJson, productSliderContainer);
  } catch (error) {
    console.log(error);
    productSliderContainer.innerHTML = message("error", "oops! Something went wrong fetching the products..");
  }
}
