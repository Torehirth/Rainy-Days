import { handleJacketsSlider } from "../handlers/handleJacketsSlider.js";
import { fetchJacket } from "../api/fetchJacket.js";
import { productSliderContainer } from "../data/constants.js";

fetchJacket();
handleJacketsSlider(productSliderContainer);
