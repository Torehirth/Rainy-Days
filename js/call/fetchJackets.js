import { message } from "../components/message.js";
import { URL, productSliderContainer } from "../data/constants.js";
import { displayJacketSlider } from "../ui/displayJacketSlider.js";

export async function fetchJackets() {
  try {
    const response = await fetch(URL);
    const jacketsJson = await response.json();

    productSliderContainer.innerHTML = "";

    displayJacketSlider(jacketsJson, productSliderContainer);
  } catch (error) {
    console.log(error);
    productSliderContainer.innerHTML = message("error", "oops! Something went wrong fetching the products..");
  }
}
