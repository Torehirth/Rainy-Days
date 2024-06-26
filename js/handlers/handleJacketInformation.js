import {
  imageContainer,
  productTitleContainer,
  productDescriptionContainer,
  productSizeContainer,
  productPriceContainer,
  productDetailsContainer,
} from "../data/constants.js";

import { message } from "../components/message.js";
import { fetchJacket } from "../api/fetchJacket.js";
import { displayJacketInformation } from "../ui/displayJacketInformation.js";

export async function handleJacketInformation(container) {
  const jacket = await fetchJacket();

  try {
    // calling the the displayProductInformation function with different arguments to display different info in different HTML-elements.
    displayJacketInformation("image", jacket, imageContainer);
    displayJacketInformation("title", jacket, productTitleContainer);
    displayJacketInformation("description", jacket, productDescriptionContainer);
    displayJacketInformation("sizes", jacket, productSizeContainer);
    displayJacketInformation("price", jacket, productPriceContainer);
    displayJacketInformation("details", jacket, productDetailsContainer);
    displayJacketInformation("details", jacket, productDetailsContainer);
  } catch (error) {
    console.error(error);
    container.innerHTML = message("error", "Something went wrong fetching the jacket.. Try again shortly!");
  }
}
