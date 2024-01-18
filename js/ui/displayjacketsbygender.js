export function displayJacketsByGender(gender, jackets, container) {
  jackets.forEach((jacket) => {
    if (jacket.gender.toLowerCase() === gender) {
      // could have used innerHTML and template literals, this would have been less code, but wanted to use the createElement and append method.

      const productCard = document.createElement("div");
      productCard.classList.add("product_card_list");

      const productLink = document.createElement("a");
      productLink.classList.add("outer_product_container");
      //using href instead of setAttribute(name, value)
      productLink.href = `./product.html?id=${jacket.id}`;

      const innerProductContainer = document.createElement("div");
      innerProductContainer.classList.add("inner_product_container");

      const productCardImageContainer = document.createElement("div");
      productCardImageContainer.classList.add("slider_image_container");

      const productImage = document.createElement("img");
      productImage.classList.add("img_supreme_alpine_jacket_m");
      productImage.src = jacket.image;
      productImage.alt = jacket.title;

      const productTextContainer = document.createElement("div");
      productTextContainer.classList.add("slider_text_container");

      const productTitle = document.createElement("p");
      productTitle.textContent = jacket.title;

      const productPrice = document.createElement("p");
      productPrice.classList.add("slider_price");
      productPrice.textContent = `$${jacket.price}`;

      // append elements in hierarchy order the same way as the hard-coded html was written.
      // container (parameter) on top of hierarchy.
      container.appendChild(productCard);

      // productLink and innerProductContainer has same hierarchy as productCard.
      productCard.append(productLink);
      productLink.append(innerProductContainer);

      // productImage inside innerProductContainer.
      innerProductContainer.appendChild(productCardImageContainer);

      // productTextContainer inside innerProductContainer.
      innerProductContainer.appendChild(productTextContainer);
      productCardImageContainer.appendChild(productImage);

      // productTitle and productPrice inside productTextContainer.
      productTextContainer.appendChild(productTitle);
      productTextContainer.appendChild(productPrice);
    }
  });
}
