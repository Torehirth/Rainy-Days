import { fetchJackets } from "../api/fetchJackets.js";
import { fetchJacket } from "../api/fetchJacket.js";
import { productSliderContainer } from "../data/constants.js";

fetchJackets(productSliderContainer, productSliderContainer);
fetchJacket();
