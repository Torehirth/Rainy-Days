import { URL, productSliderContainer } from "../data/constants.mjs";

import { message } from "../components/message.mjs";
import { getQueryParameter } from "../helper/getQueryparameter.mjs";

// fetching specific jacket and calling functions to render HTML
export async function fetchJacket() {
  const id = getQueryParameter("id");
  if (!id) {
    // if falsy redirect back to index.html.
    document.location.href = "/";
  }

  // adding the id as query parameter after the base URL (could've called the getQueryParameter function, with id as argument, inside fetch method also).
  const jacketUrl = `${URL}/${id}`;

  try {
    const response = await fetch(jacketUrl);

    if (!response.ok) {
      throw new Error("there was an error fetching the jackets");
    }
    if (response.status >= 400 && response.status < 500) {
      throw new Error("something wrong on the client side");
    }
    if (response.status >= 500 && response.status < 600) {
      throw new Error("something went wrong with the server");
    }

    const jacket = await response.json();

    return jacket;
  } catch (error) {
    console.error(error);
    productSliderContainer.innerHTML = message("error", "Something went wrong fetching the jacket.. Try again shortly!");
  }
}
