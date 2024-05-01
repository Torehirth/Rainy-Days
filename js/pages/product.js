import { handleJacketsSlider } from "../handlers/handleJacketsSlider.js";
import { handleJacketInformation } from "../handlers/handleJacketInformation.js";
import { productSliderContainer, imageContainer, wordContainer } from "../data/constants.js";
// import { displayWords } from "../ui/displayWords.js";

handleJacketInformation(imageContainer);
handleJacketsSlider(productSliderContainer);
// displayWords(wordContainer);
