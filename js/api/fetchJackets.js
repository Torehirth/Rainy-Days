import { message } from "../components/message.js";
import { URL, productSliderContainer, mensContainer } from "../data/constants.js";
import { displayJacketSlider } from "../ui/displayJacketSlider.js";
import { displayJacketsByGender } from "../ui/displayjacketsbygender.js";

export async function fetchJackets(container, errorContainer) {
  try {
    const response = await fetch(URL);
    const jacketsJson = await response.json();

    container.innerHTML = "";

    console.log("Calling displayJacketSlider");
    await displayJacketSlider(jacketsJson, productSliderContainer);

    await displayJacketsByGender("male", jacketsJson, mensContainer);
    console.log("Calling displayJacketsByGender");
  } catch (error) {
    console.log(error);

    errorContainer.innerHTML = message("error", "Something went wrong fetching the jackets.. We'll fix it shortly!");
  }
}
