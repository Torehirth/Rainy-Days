import { message } from "../components/message.js";
import { URL } from "../data/constants.js";

export async function fetchJackets(container) {
  try {
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error("there was an error fetching the jackets");
    }

    const jackets = await response.json();
    return jackets;
  } catch (error) {
    container.innerHTML = message("error", "Something went wrong displaying the jackets.. We'll fix it shortly!");
  }
}
