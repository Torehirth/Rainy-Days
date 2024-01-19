import { splitTextIntoWords } from "../helper/splitTextIntoWords.js";

export async function displayWords(container) {
  const words = await splitTextIntoWords(container);

  for (const word of words) {
    container.innerHTML += `
                           <div class="product_details_list">
                             <ul>
                               <li>${word}</li>
                             </ul>
                           </div>
                          `;
  }
}
