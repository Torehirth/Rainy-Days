import { fetchJackets } from "../api/fetchJackets.js";
import { womenContainer } from "../data/constants.js";
import { message } from "../components/message.js";
import { displayJacketsByGender } from "../ui/displayjacketsbygender.js";

// tried to make a function for handle both women and men jackets, but I only got an error of that the container I made in the displayJacketsByGender function, this error only appeared when I called the function for both woman and men, not when calling one of them. The solution was to make separate functions for them.

export async function handleWomenJackets(container) {
  try {
    const jackets = await fetchJackets(container);

    container.innerHTML = "";

    displayJacketsByGender("women", jackets, womenContainer);
  } catch (error) {
    console.log(error);
    container.innerHTML = message("error", "Something went wrong displaying the jackets.. Try again shortly!");
  }
}
