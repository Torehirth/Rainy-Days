import { fetchJackets } from "../api/fetchJackets.mjs";
import { productSliderContainer } from "../data/constants.mjs";
import { message } from "../components/message.mjs";
import { displayJacketsSlider } from "../ui/displayJacketSlider.mjs";

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
