const root = document.querySelector(".products")
const cartItems = []

$.ajax({
  url: "./assets/data/product.json",
  dataType: "json",
  success: function (data) {
    window["productData"] = data
    for (let index = 0; index < localStorage.length; index++) {
      const productID = localStorage.key(index)
      cartItems.push([productID, localStorage.getItem(productID)])
    }
    genProductMarkup()
  },
})

function genProductMarkup() {
  root.innerHTML = ""
  if (!cartItems.length) {
    root.innerHTML = "<p id='empty'>Cart is empty.</p>"
  }

  cartItems.forEach(cartItem => {
    const item = productData.find(itemData => itemData.productID == cartItem[0])
    let markup = `
      <div class="card">
        <img class="card-img-top product__img" src="${item.img}" alt="alt text">
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">${item.price}$</p>
          <p>${cartItem[1]}</p>
        </div>
      </div>
      `
    root.innerHTML += markup
  })
}

document.querySelector("#clear").addEventListener("click", () => {
  localStorage.clear()
  root.innerHTML = "<p id='empty'>Cart is empty.</p>"
})
