import {
  URL,
  productSliderContainer,
  imageContainer,
  productTitleContainer,
  productDescriptionContainer,
  productSizeContainer,
  productPriceContainer,
  productDetailsContainer,
  wordContainer,
} from "../data/constants.js";

import { message } from "../components/message.js";
import { getQueryParameter } from "../helper/getQueryParameter.js";

import { displayProductInformation } from "../ui/displayproductinformation.js";
import { getKeywords } from "../helper/getkeywords.js";

// fetching specific jacket and calling functions to render HTML
export async function fetchJacket() {
  try {
    //fetching each jackets id by calling the getQueryParameter function inside the template literal to get the object's ID in the API call.
    const jacketUrl = `${URL}/${getQueryParameter("id")}`;
    const response = await fetch(jacketUrl);
    const jacket = await response.json();

    displayProductInformation("image", jacket, imageContainer);
    displayProductInformation("title", jacket, productTitleContainer);
    displayProductInformation("description", jacket, productDescriptionContainer);
    displayProductInformation("sizes", jacket, productSizeContainer);
    displayProductInformation("price", jacket, productPriceContainer);
    displayProductInformation("details", jacket, productDetailsContainer);
    displayProductInformation("details", jacket, productDetailsContainer);
    getKeywords(jacket, wordContainer);
  } catch (error) {
    console.log(error);
    productSliderContainer.innerHTML = message("error", "Something went wrong fetching the jacket.. We'll fix it shortly!");
  }
}
