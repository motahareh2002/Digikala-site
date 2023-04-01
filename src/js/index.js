"use strict"

// show / onshow allProduct
const allProducts = document.querySelector("#allProducts")
const show = document.querySelector(".show-menu")
// function showMenuAllProduct() {
//     show.classList.remove("hidden")
//     // allProducts.append(show)
// }
// function hiddenMenuAllProduct() {
//     show.classList.add("hidden")
// }
allProducts.addEventListener("mouseout", hiddenMenuAllProduct)
allProducts.addEventListener("mouseover", showMenuAllProduct)