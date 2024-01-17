import { fetchJackets } from "../api/fetchJackets.js";
import { productSliderContainer } from "../data/constants.js";
import { message } from "../components/message.js";
import { displayJacketsSlider } from "../ui/displayJacketSlider.js";

export async function handleJacketsSlider(container) {
  try {
    const jackets = await fetchJackets(container);

    console.log(jackets);

    container.innerHTML = "";

    console.log("Calling displayJacketSlider");
    displayJacketsSlider(jackets, productSliderContainer);
  } catch (error) {
    console.log(error);
    container.innerHTML = message("error", "Something went wrong displaying the jackets.. We'll fix it shortly!");
  }
}
