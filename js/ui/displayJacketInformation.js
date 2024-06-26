import { message } from "../components/message.js";

// using a switch statement to render the HTML.
export function displayJacketInformation(type, jacket, container) {
  switch (type) {
    case "image":
      container.innerHTML = `
                              <img class="product-image-container" src="${jacket.image}" alt="${jacket.title}" ></img>
                            `;
      break;
    case "title":
      container.innerHTML = `
                              <h1>${jacket.title}</h1>
                            `;
      break;
    case "description":
      container.innerHTML = `
                              <p>${jacket.description}</p>
                             `;
      break;
    case "sizes":
      for (const size of jacket.sizes) {
        container.innerHTML += `
                                  <div class="size_option_container" id="size${size}" for="size_${size}">
                                    <input type="radio" id="size_${size}" name="sizes" hidden /> 
                                    <div class="sizes">
                                      <label class="size-button-container" id="size${size}" for="size_${size}">${size}</label>
                                    </div>
                                  </div>
                                 `;
      }
      break;
    case "price":
      container.innerHTML = `
                              <p>$${jacket.price}</p>
                             `;
      break;
    case "details":
      container.innerHTML = `
                              <p class="product_details">${jacket.description}</p>
                            `;
      break;
    default:
      container.innerHTML = message("error", `Cant't show the ${type} at the moment..`);
  }
}
