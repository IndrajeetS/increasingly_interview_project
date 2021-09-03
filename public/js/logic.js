// Increase & decrease Product Quantity Start
document.getElementById("decrease").addEventListener("click", decreaseQty);
function decreaseQty() {
  var value = parseInt(document.getElementById("product_quantity").value, 10);
  value = isNaN(value) ? 1 : value;
  value < 1 ? (value = 1) : "";
  value--;
  document.getElementById("product_quantity").value = value;
}

document.getElementById("increase").addEventListener("click", increaseQty);
function increaseQty() {
  var value = parseInt(document.getElementById("product_quantity").value, 10);
  value = isNaN(value) ? 1 : value;
  value++;
  document.getElementById("product_quantity").value = value;
}
// Increase & decrease Product Quantity Ends

// Select all checkboxes with the type 'checkbox' using querySelectorAll.
let totalCount;
let checkAddonsProducts = [];
let checkboxPrice;

var checkboxes = document.querySelectorAll("input[type=checkbox]");
let totalNoProducts = document.getElementById("totalAddOnProduct");
let atc_BtnCount = document.getElementById("atc_Count");
let addonProducts_Price = document.getElementById("addonProductsPrice");
let mainProduct_price = document.getElementById("mainProductsPrice");
let totalCart_Price = document.getElementById("totalCartPrice");
var totalCartAmount;

let mainProductPriceWithoutDollar = `${mainProduct_price.innerHTML.replace(
  "$",
  ""
)}`;

checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
    checkAddonsProducts = Array.from(checkboxes)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.name);

    // Get total price of Addon Product, if checked
    function totalPrice(list) {
      return (
        (list.length && parseFloat(list[0]) + totalPrice(list.slice(1))) || 0
      );
    }
    checkboxPrice = totalPrice(checkAddonsProducts).toFixed(2);

    // get total length
    totalCount = checkAddonsProducts.length;
    // innerhtml for total add on product counts
    totalNoProducts.innerHTML = `${totalCount} add-ons selected`;
    // innerhtml for ATC button
    atc_BtnCount.innerHTML = `${totalCount + 1}`;
    // Update AddOns Price when add on Product checked
    addonProducts_Price.innerHTML = `+ $${checkboxPrice}`;

    totalCartAmount =
      +parseFloat(mainProductPriceWithoutDollar).toFixed(2) +
      +parseFloat(checkboxPrice).toFixed(2);

    let totalPriceWith2Digt = totalCartAmount.toFixed(2);

    totalCart_Price.innerHTML = `$${totalPriceWith2Digt}`;
  });
});

// Multiply the Quantity
// Get Quanity value
let quantityValue = document.getElementById("product_quantity").value.toFixed;
console.log(quantityValue);
