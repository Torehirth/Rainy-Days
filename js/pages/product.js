import { handleJacketsSlider } from "../handlers/handleJacketsSlider.js";
import { handleJacketInformation } from "../handlers/handleJacketInformation.js";
import { productSliderContainer, imageContainer } from "../data/constants.js";

handleJacketInformation(imageContainer);
handleJacketsSlider(productSliderContainer);
