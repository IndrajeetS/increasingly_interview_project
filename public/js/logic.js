// Increase & decrease Product Quantity Start
document.getElementById("decrease").addEventListener("click", decreaseQty);
function decreaseQty() {
  var value = parseInt(document.getElementById("product_quantity").value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? (value = 1) : "";
  value--;
  document.getElementById("product_quantity").value = value;
}

document.getElementById("increase").addEventListener("click", increaseQty);
function increaseQty() {
  var value = parseInt(document.getElementById("product_quantity").value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById("product_quantity").value = value;
}
// Increase & decrease Product Quantity Ends
