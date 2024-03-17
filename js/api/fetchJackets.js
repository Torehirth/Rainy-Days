import { message } from "../components/message.js";
import { URL } from "../data/constants.js";

export async function fetchJackets(container) {
  try {
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error("there was an error fetching the jackets");
    }
    if (response.status >= 400 && response.status < 500) {
      throw new Error("something wrong on the client side");
    }
    if (response.status >= 500 && response.status < 600) {
      throw new Error("something went wrong with the server");
    }

    const jackets = await response.json();
    return jackets;
  } catch (error) {
    console.error(error);
    container.innerHTML = message("error", "Something went wrong displaying the jackets.. Try again shortly!");
  }
}
