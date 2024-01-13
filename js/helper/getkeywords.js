import { desiredWords } from "../data/constants.js";

export function getKeywords(jacket, container) {
  const text = jacket.description;
  const words = text.split(" ");
  const filteredWords = words.filter((word) => desiredWords.includes(word));

  for (const word of filteredWords) {
    container.innerHTML += `
                            <div class="product_details_list">
                              <ul>
                                <li>${word}</li>
                              </ul>
                            </div>
                           `;
  }
}
