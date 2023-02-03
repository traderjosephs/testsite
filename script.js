const productImages = document.querySelectorAll(".product-image");

productImages.forEach(function (productImage) {
  productImage.addEventListener("click", function () {
    productImage.classList.toggle("enlarged");
  });
});