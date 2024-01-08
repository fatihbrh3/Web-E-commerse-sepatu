// UNTUK NAVBAR
// Toogle class active
// Ketika ditekan keluar menu
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#codesandbox").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Ketika ditekan keluar search
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// klik diluar elemen
const codesandbox = document.querySelector("#codesandbox");
const searchbutton = document.querySelector("#search-button");

document.addEventListener("click", function (e) {
  if (!codesandbox.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!searchbutton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});

// UNTUK FILTERING
// Buat fungsi untuk melakukan filtering berdasarkan kategori
function filterProduct(category) {
  const productCards = document.querySelectorAll(".Product-card");
  productCards.forEach((card) => {
    if (category === "All" || category === card.getAttribute("data-category")) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// Tambahkan event listener untuk tombol filter
document.querySelector("#buttons-filter").addEventListener("click", (event) => {
  if (event.target.classList.contains("filter-button")) {
    const category = event.target.textContent.trim();
    filterProduct(category);
  }
});

// UNTUK FORMATING
let time = document.getElementById("JAM");

setInterval(() => {
  let d = new Date();
  time.innerHTML = d.toLocaleTimeString();
}, 1000);
