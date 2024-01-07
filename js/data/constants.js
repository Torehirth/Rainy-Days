// Url................
export const URL = "https://api.noroff.dev/api/v1/rainy-days";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const productId = params.get("id");

// -----------Popular product slider

export const productSlider = document.querySelector(".popular_products_slider");
