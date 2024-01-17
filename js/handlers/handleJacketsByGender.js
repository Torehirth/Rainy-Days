import { fetchJackets } from "../api/fetchJackets.js";
import { mensContainer, womensContainer } from "../data/constants.js";
import { message } from "../components/message.js";
import { displayJacketsByGender } from "../ui/displayjacketsbygender.js";

export async function handleJacketsByGender(container) {
  try {
    const jackets = await fetchJackets(container);

    container.innerHTML = "";

    console.log("Calling displayJacketsByGender");
    displayJacketsByGender("male", jackets, mensContainer);
    displayJacketsByGender("female", jackets, womensContainer);
  } catch (error) {
    console.log(error);
    container.innerHTML = message("error", "Something went wrong displaying the jackets.. We'll fix it shortly!");
  }
}
