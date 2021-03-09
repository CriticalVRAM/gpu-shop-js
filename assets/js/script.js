//* Type Checkbox Generator
$.ajax({
  url: "./assets/data/product.json",
  dataType: "json",
  success: function (data) {
    const uniqueType = []
    data.forEach(element => {
      if (!uniqueType.includes(element.type)) uniqueType.push(element.type)
    })

    const root = document.querySelector("#type")
    root.innerHTML = ""
    uniqueType.forEach(type => {
      let markup = `
      <div>
        <label for="${type}">${type}</label>
        <input type="checkbox" name="type" id="${type}" value="${type}">
      </div>
      `
      root.innerHTML += markup
    })
    document
      .querySelectorAll("input[name='type']")
      .forEach(e => e.addEventListener("change", renderProduct))
  },
  error: function (error) {
    handleError(error)
  },
})

//* Search and Filter functionality
$.ajax({
  url: "./assets/data/product.json",
  dataType: "json",
  success: function (data) {
    window["productData"] = data
    renderProduct()
  },
})

function handleError(error) {
  console.log(error)
  const errMarkup = `
  <h2 class="text-danger mt-5">Sorry! Our servers seem to be down at the moment. Try again later.</h2>
  <p class="small">${error.responseText}</p>
  `
  document.querySelector("#main").innerHTML = errMarkup
}

function renderProduct() {
  let filterData = productData

  filterData = searchFilter(filterData)
  filterData = orderSort(filterData)
  filterData = typeFilter(filterData)
  genProductMarkup(filterData)
}

//* Filter Functions
function searchFilter(data) {
  const searchValue = document.querySelector("#search").value.toUpperCase()
  return data.filter(item => item.name.includes(searchValue))
}
function orderSort(data) {
  const sortIndex = document.querySelector("#sort").selectedIndex
  if (sortIndex === 0) return data.sort((a, b) => (a.price < b.price ? 1 : -1))
  else return data.sort((a, b) => (a.price > b.price ? 1 : -1))
}
function typeFilter(data) {
  const checkedType = []
  document.querySelectorAll("input[name='type']").forEach(element => {
    if (element.checked) checkedType.push(element.value)
  })
  if (checkedType.length === 0) return data
  return data.filter(item => checkedType.includes(item.type))
}
function genProductMarkup(data) {
  const root = document.querySelector(".products")
  root.innerHTML = ""

  data.forEach(item => {
    let markup = `
    <div class="card">
      <img class="card-img-top product__img" src="${item.img}" alt="alt text">
      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text">${item.price}$</p>
        <p id=${item.productID} class="addToCart btn btn-primary">Add to Cart</p>
      </div>
    </div>
    `
    root.innerHTML += markup
  })
  document
    .querySelectorAll(".addToCart")
    .forEach(e => e.addEventListener("click", addToCart))
}

function addToCart() {
  console.log(this)
  // show message when item added to cart on top of page
}

//* Event Listeners
document.querySelector("#search").addEventListener("input", renderProduct)
document.querySelector("#sort").addEventListener("change", renderProduct)
