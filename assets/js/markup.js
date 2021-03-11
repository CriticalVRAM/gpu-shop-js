if (document.querySelector("#nav")) {
  const navMarkup = `
        <nav class="navbar navbar-dark bg-dark mb-4">
            <a href="index.html"><img class="navbar-brand" src="assets/img/logo_small.png" alt="logo"></a>
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link" href="index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="shop.html">Shop</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="cart.html">Cart</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact.html">Contact</a>
              </li>
            </ul>
        </nav>
        `
  document.querySelector("#nav").innerHTML = navMarkup
}
if (document.querySelector("#footer")) {
  let footerMarkup = `
        <hr class="mt-5">
        <div class="gridCenter">
        <a href="sitemap.txt">Sitemap</a>
        <a download="" href="wp2-docs.pdf">Docs</a>
        <a href="author.html">Author</a>
        </div>
        `
  document.querySelector("#footer").innerHTML = footerMarkup
}
