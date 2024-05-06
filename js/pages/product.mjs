import { handleJacketsSlider } from "../handlers/handleJacketsSlider.mjs";
import { handleJacketInformation } from "../handlers/handleJacketInformation.mjs";
import { productSliderContainer, imageContainer, wordContainer } from "../data/constants.mjs";
// import { displayWords } from "../ui/displayWords.js";

handleJacketInformation(imageContainer);
handleJacketsSlider(productSliderContainer);
// displayWords(wordContainer);
