import { mensContainer } from "../data/constants.js";
import { fetchJackets } from "../api/fetchJackets.js";
// import { message } from "../components/message.js";

// const mensErrorContainer = document.querySelector(".jacket_page_content");
// const mensContainer = document.querySelector(".jackets-container");

// async function FetchCategoryJackets(container, errorContainer) {
//   try {
//     const response = await fetch(URL);
//     const mensJackets = await response.json();

//     container.innerHTML = "";

//     displayJacketsByGender("male", mensJackets, mensContainer);
//   } catch (error) {
//     console.error(error);
//     errorContainer.innerHTML = message("error", "Sorry! an error occurred when fetching the jackets");
//   }
// }
fetchJackets(mensContainer);
