// Function to append child next to each other
function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

// add class to body
document.body.classList.add("container-fluid");

// Navigation Bar Start
let navBar = document.createElement("div");
navBar.className = "navbar navbar-expand-lg navbar-light";
navBar.id = "customNavbar";
navBar.innerHTML =
  '<div class="container">' +
  '<a class="navbar-brand col-lg-2 col-sm-4 col-xs-9" href="/public/">Lorex</a>' +
  '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">' +
  '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">' +
  '<path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>' +
  "</svg>" +
  "</button>" +
  '<div class="collapse navbar-collapse" id="navbarSupportedContent">' +
  '<ul class="navbar-nav me-auto mb-2 mb-lg-0 col-lg-5 col-sm-8 col-xs-12">' +
  // 1st link
  '<li class="nav-item">' +
  '<a class="nav-link active" aria-current="page" href="#">' +
  "Store" +
  "</a>" +
  "</li>" +
  // 2nd link
  '<li class="nav-item">' +
  '<a class="nav-link" aria-current="page" href="#">' +
  "Deals" +
  "</a>" +
  "</li>" +
  // 3 link
  '<li class="nav-item">' +
  '<a class="nav-link" aria-current="page" href="#">' +
  "Solutions" +
  "</a>" +
  "</li>" +
  // 4 link
  '<li class="nav-item">' +
  '<a class="nav-link" aria-current="page" href="#">' +
  "Products" +
  "</a>" +
  "</li>" +
  // 1st link
  '<li class="nav-item">' +
  '<a class="nav-link" aria-current="page" href="#">' +
  "Solutions" +
  "</li>" +
  "</ul>" +
  // Search form
  '<form id="searchForm" class="col-lg-5 col-sm-12 col-xs-12">' +
  '<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">' +
  '<button class="btn btn-outline-success" type="submit">' +
  '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#004990" class="bi bi-search" viewBox="0 0 16 16">' +
  '<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>' +
  "</svg>" +
  "</button>" +
  "</form>" +
  "</div>" +
  "</div>";
document.body.prepend(navBar);
// Navigation Bar Ends

// Back Navigation bar Start
let secondaryNavbar = document.createElement("div");
secondaryNavbar.className = "back_nav container-fluid";
secondaryNavbar.id = "customSecondaryNavbar";
secondaryNavbar.innerHTML =
  '<div class="container">' +
  '<a class="nav-link" href="#">' +
  '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">' +
  '<path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="#004990"/>' +
  "</svg>" +
  "Back" +
  "</a>" +
  "</div>";

var navBarSection = document.getElementById("customNavbar");
insertAfter(navBarSection, secondaryNavbar);
// Back Navigation bar Ends

// Main section starts
let mainSection = document.createElement("div");
mainSection.className = "container-fluid";
mainSection.id = "product_main";
mainSection.innerHTML = `<div class="container">
  <div class="row">
  <div id="product_carouselId" class="col-md-12 col-lg-4 product_carousel text-sm-center pb-sm-10"></div>
  <div id="product_detailsId" class="col-md-12 col-lg-5"></div>
  <div id="product_totalsId" class="col-md-12 col-lg-3"></div>
  </div>
  </div>`;

var secondaryNavbarPart = document.getElementById("customSecondaryNavbar");
insertAfter(secondaryNavbar, mainSection);

// Inner Conponents
// Component 1
let product_carouselItem = `<img src="./assests/images/main_img.png" alt="Product image" />
<div class="product_carouselNav">
  <div>
    <img class="active" src="./assests/images/main_img.png" alt="Product image" />
  </div>
  <div>
    <img src="./assests/images/secondary_img.png" alt="Product image" />
  </div>
  <div >
    <img src="./assests/images/main_img.png" alt="Product image" />
  </div>
  <div>
    <img src="./assests/images/secondary_img.png" alt="Product image" />
  </div>
</div>`;

let product_carouselDiv = document.getElementById("product_carouselId");
product_carouselDiv.innerHTML = product_carouselItem;

// Component 2
let product_details = `<div>
  <h3 class="title">MPX HD 1080p Outdoor PTZ Camera, 4x Optical Zoom with Color Night Vision, Metal Camera</h3>

  <div class="ratings">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#006068" class="bi bi-star-fill" viewBox="0 0 16 16">
    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#006068" class="bi bi-star-fill" viewBox="0 0 16 16">
    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#006068" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#006068" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#006068" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
    <p>(12 Review)</p>
  </div>

  <div class="product_price">
    <p class="costPrice">Reg. $299.99</p>
    <div>
      <p class="salePrice">$199.99</p>
      <p class="savings">SAVE $70.00 (35%)</p>
    </div>
  </div>

  <div class="product_swatches">
    <p class="heading">Select Options</p>
    <div class="swatches_collection">
      <div class="swatch">
        SINGLE 
        $199.99
      </div>
      <div class="swatch">
        2-PACK 
        $699.99
      </div>
      <div class="swatch">
        4-PACK 
        $199.99
      </div>
    </div>
  </div>

  <div class="quantity">
    <button id="decrease" type="button">-</button> 
    <input value="1" id="product_quantity" />
    <button id="increase" type="button">+</button> 
  </div>

  <div class="addOns">
    <p class="heading">Add-ons Products</p>
    <div id="addOns_productsId" class="addOns_products">
    <div>
  </div>
</div>`;

let product_detailsDiv = document.getElementById("product_detailsId");
product_detailsDiv.innerHTML = product_details;

let addOnProductsList = `<div class="product_row">
  <input class="checkBox col-2" type="checkbox" id="dvd" name="dvd" value="dvd">
  <label for="dvd">
    <div class="img">
      <img src="./assests/images/addOn-1.png" alt="DVD" />
    </div>
    <div class="details">
      <p class="title">DEAL OF THE DAY! 4K Ultra HD 8 Channel Security DVR with...</p>

      <div class="ratings">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#006068" class="bi bi-star-fill" viewBox="0 0 16 16">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#006068" class="bi bi-star-fill" viewBox="0 0 16 16">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#006068" class="bi bi-star-fill" viewBox="0 0 16 16">
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#006068" class="bi bi-star-fill" viewBox="0 0 16 16">
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#006068" class="bi bi-star-fill" viewBox="0 0 16 16">
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg>
        <p>(12 Review)</p>
      </div>

      <div class="product_price">
        <p class="costPrice">Reg. 199.99</p>
        <div>
          <p class="salePrice">$129.99</p>
          <p class="savings">SAVE $70.00 (35%)</p>
        </div>
      </div>

      <div class="editOption">
        <p class="title">Single</p>
        <p class="edit">Edit</p>
      </div>

    </div>
  </label>
</div>

<div class="product_row">
  <input class="checkBox col-2" type="checkbox" id="cable" name="cable" value="cable">
  <label for="cable">
    <div class="img">
      <img src="./assests/images/addOn-2.png" alt="cable" />
    </div>
    <div class="details">
      <p class="title">100ft (30m) Premium 4K RG59/Power Accessory Cable</p>

      <div class="ratings">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#006068" class="bi bi-star-fill" viewBox="0 0 16 16">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#006068" class="bi bi-star-fill" viewBox="0 0 16 16">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#006068" class="bi bi-star-fill" viewBox="0 0 16 16">
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#006068" class="bi bi-star-fill" viewBox="0 0 16 16">
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#006068" class="bi bi-star-fill" viewBox="0 0 16 16">
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg>
        <p>(12 Review)</p>
      </div>

      <div class="product_price">
        <div>
          <p class="salePrice">$49.99</p>
        </div>
      </div>

    </div>
  </label>
</div>

<div class="product_row">
  <input class="checkBox col-2" type="checkbox" id="card" name="card" value="card">
  <label for="card">
    <div class="img">
      <img src="./assests/images/addOn-3.png" alt="card" />
    </div>
    <div class="details">
      <p class="title">256GB Surveillance-grade microSD card</p>

      <div class="ratings">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#006068" class="bi bi-star-fill" viewBox="0 0 16 16">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#006068" class="bi bi-star-fill" viewBox="0 0 16 16">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#006068" class="bi bi-star-fill" viewBox="0 0 16 16">
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#006068" class="bi bi-star-fill" viewBox="0 0 16 16">
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#006068" class="bi bi-star-fill" viewBox="0 0 16 16">
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg>
        <p>(12 Review)</p>
      </div>

      <div class="product_price">
        <div>
          <p class="salePrice">$64.99</p>
          <p class="savings">SAVE $70.00 (35%)</p>
        </div>
      </div>

    </div>
  </label>
</div>
`;

let addOns_productsSec = document.getElementById("addOns_productsId");
addOns_productsSec.innerHTML = addOnProductsList;

// Main Section ends

// Cart section starts
let cartSectionList = `<div class="cart_section">
    <p class="title">Price Summary</p>
      <div class="cartTotals">
        <p>Main product<span>$199.99</span></p>
        <p>3 add-ons selected<span>+ $242.96</span></p>
      </div>
      <div class="cartTotalPrice">
        <div class="price">Total price 
          <div><p>$441.95</p> <p>SAVE $70.00 (35%)</p></div>
        </div>
      </div>
      <button type="button" class="addTo_cart">Add 4 items to cart</button>
  </div>`;

let cartSection = document.getElementById("product_totalsId");
cartSection.innerHTML = cartSectionList;
