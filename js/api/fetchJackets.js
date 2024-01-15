import { message } from "../components/message.js";
import { URL, productSliderContainer, mensContainer, womensContainer } from "../data/constants.js";
import { displayJacketSlider } from "../ui/displayJacketSlider.js";
import { displayJacketsByGender } from "../ui/displayjacketsbygender.js";

export async function fetchJackets(container) {
  try {
    const response = await fetch(URL);
    const jacketsJson = await response.json();

    container.innerHTML = "";

    console.log("Calling displayJacketSlider");
    await displayJacketSlider(jacketsJson, productSliderContainer);

    console.log("Calling displayJacketsByGender");
    await displayJacketsByGender("male", jacketsJson, mensContainer);
    await displayJacketsByGender("female", jacketsJson, womensContainer);
  } catch (error) {
    console.log(error);

    container.innerHTML = message("error", "Something went wrong fetching the jackets.. We'll fix it shortly!");
  }
}
