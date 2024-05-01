export function displayJacketsSlider(jackets, container) {
  jackets.forEach((jacket) => {
    container.innerHTML += `
    <div class="slider_group">
    <a href="../pages/product.html?id=${jacket.id}" class="outer_product_container">
    <div class="inner_product_container">
      <div class="slider_image_container">
        <img src="${jacket.images[0].thumbnail}" alt="${jacket.name}" class="img_supreme_alpine_Jacket_m" />
      </div>
      <div class="slider_text_container">
        <p>${jacket.name}</p>
        <p class="slider_price">$${jacket.prices.price}</p>
      </div>
    </div>    
   </a>
  </div>
  `;
  });
}
