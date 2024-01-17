import { desiredWords } from "../data/constants.js";

// export function getKeywords(jacket, container) {
//   const text = jacket.description.toLowerCase();
//   const words = text.split(" ");
//   const filteredWords = words.filter((word) => desiredWords.includes(word));

//   for (const word of filteredWords) {
//     container.innerHTML += `
//                             <div class="product_details_list">
//                               <ul>
//                                 <li>${word}</li>
//                               </ul>
//                             </div>
//                            `;
//   }
// }

// Function to split text into words
function splitTextIntoWords(text) {
  return text.split(" ");
}

// Function to filter desired words
function filterDesiredWords(words, desiredWords) {
  return words.filter(function (word) {
    return desiredWords.includes(word);
  });
}

// Function to generate HTML for each word
function generateHTMLForWord(word) {
  console.log(word);
  return `
    <div class="product_details_list">
      <ul>
        <li>${word}</li>
      </ul>
    </div>
  `;
}

// Function to append HTML to container
function appendHTMLToContainer(container, html) {
  container.innerHTML += html;
}

// Main function to get keywords and display them
export function getKeywords(jacket, container) {
  const text = jacket.description.toLowerCase();

  // Split text into words
  const words = splitTextIntoWords(text);

  // Filter desired words
  const filteredWords = filterDesiredWords(words, desiredWords);

  // Generate HTML for each word and append to container
  for (const word of filteredWords) {
    const html = generateHTMLForWord(word);
    appendHTMLToContainer(container, html);
  }
}
