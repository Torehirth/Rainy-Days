import { fetchJackets } from "../api/fetchJackets.js";
import { productSliderContainer } from "../data/constants.js";
import { message } from "../components/message.js";
import { displayJacketsSlider } from "../ui/displayJacketSlider.js";

export async function handleJacketsSlider(container) {
  try {
    const jackets = await fetchJackets(container);

    container.innerHTML = "";

    displayJacketsSlider(jackets, productSliderContainer);
  } catch (error) {
    console.error(error);
    container.innerHTML = message("error", "Something went wrong displaying the jackets.. Try again shortly!");
  }
}
