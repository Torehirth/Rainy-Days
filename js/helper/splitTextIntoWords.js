import { desiredWords } from "../data/constants.js";
import { message } from "../components/message.js";
import { fetchJacket } from "../api/fetchJacket.js";

export async function splitTextIntoWords(container) {
  try {
    const jacket = await fetchJacket();

    const description = jacket.description;
    const words = description.split(" ");
    const filteredWords = words.filter((word) => desiredWords.includes(word.toLowerCase()));

    return filteredWords;
  } catch (error) {
    container.innerHTML = message("error", "can't extract filteredWords at the moment");
  }
}
