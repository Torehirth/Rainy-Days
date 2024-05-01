import { message } from "../components/message.js";

// using a switch statement to render the HTML.
export function displayJacketInformation(type, jacket, container) {
  switch (type) {
    case "image":
      container.innerHTML = `
                              <img class="product-image-container" src="${jacket.images[0].src}" alt="${jacket.name}" ></img>
                            `;
      break;
    case "title":
      container.innerHTML = `
                              <h1>${jacket.name}</h1>
                            `;
      break;
    case "description":
      container.innerHTML = `
                              <p>${jacket.description}</p>
                             `;
      break;
    case "sizes":
      for (const size of jacket.attributes[0].terms) {
        const sizeName = size.name;
        container.innerHTML += `
                                  <div class="size_option_container" id="size${sizeName}" for="size_${sizeName}">
                                    <input type="radio" id="size_${sizeName}" name="sizes" hidden />
                                    <div class="sizes">
                                      <label class="size-button-container" id="size${sizeName}" for="size_${sizeName}">${sizeName}</label>
                                    </div>
                                  </div>
                                 `;
      }
      break;
    case "price":
      container.innerHTML = `
                              <p>$${jacket.prices.price}</p>
                             `;
      break;
    case "details":
      let detailHTML = "";
      for (const detail of jacket.attributes[2].terms) {
        const jacketSpec = detail.name;

        detailHTML += `
                    <p class="product_details">${jacketSpec}</p>
                `;
      }
      container.innerHTML = `<p class="product_details">${jacket.description}</p>` + `<br>` + detailHTML;

      break;
    default:
      container.innerHTML = message("error", `Cant't show the ${type} at the moment..`);
  }
}
