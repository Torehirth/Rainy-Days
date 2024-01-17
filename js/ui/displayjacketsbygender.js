export function displayJacketsByGender(gender, jackets, container) {
  // if (!container) {
  //   console.warn("Container is null or undefined");
  //   document.location.href = "/";
  //   return;
  // }
  jackets.forEach((jacket) => {
    if (jacket.gender.toLowerCase() === gender) {
      container.innerHTML += `
      <div class="product_card_list">
      <a href="./product.html?id=${jacket.id}" class="outer_product_container">
      <div class="inner_product_container">
        <div class="slider_image_container">
          <img src="${jacket.image}" alt="${jacket.title}" class="img_supreme_alpine_Jacket_m" />
        </div>
        <div class="slider_text_container">
          <p>${jacket.title}</p>
          <p class="slider_price">$${jacket.price}</p>
        </div>
      </div>
    </a>
    </div>`;
    }
  });
}
