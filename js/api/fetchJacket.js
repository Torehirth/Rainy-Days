import {
  URL,
  errorContainer,
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
import // displayProductImage,
// displayProductTitle,
// displayProductDescription,
// displayProductSizes,
// displayProductPrice,
// displayProductDetails,
// getKeywords,
"../pages/product.js";

import { displayProductInformation } from "../ui/displayproductinformation.js";
import { getKeywords } from "../helper/getkeywords.js";

// fetching specific jacket and calling functions to render HTML
export async function fetchJacket() {
  try {
    //fetching each jackets id by calling the getQueryParameter function inside the template literal to get the object's ID in the API call.
    const jacketUrl = `${URL}/${getQueryParameter("id")}`;
    const response = await fetch(jacketUrl);
    const jacketJson = await response.json();

    displayProductInformation("image", jacketJson, imageContainer);
    displayProductInformation("title", jacketJson, productTitleContainer);
    displayProductInformation("description", jacketJson, productDescriptionContainer);
    displayProductInformation("sizes", jacketJson, productSizeContainer);
    displayProductInformation("price", jacketJson, productPriceContainer);
    displayProductInformation("details", jacketJson, productDetailsContainer);
    displayProductInformation("details", jacketJson, productDetailsContainer);
    getKeywords(jacketJson, wordContainer);
  } catch (error) {
    console.log(error);
    errorContainer.innerHTML = message("error", "oops! Something went wrong fetching the jacket..");
  }
}
