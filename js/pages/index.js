// Popular product slider
import { fetchJackets } from "../api/fetchJackets.js";
import { displayJacketSlider } from "../ui/displayJacketSlider.js";
import { productSliderContainer } from "../data/constants.js";

fetchJackets(displayJacketSlider, productSliderContainer);
