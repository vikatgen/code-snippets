// Valin terve menüü konteineri.
let menu = document.querySelector(".menu");
// Valin menuu nupu, mis hakkab näitama menüü contenti.
let button = document.querySelector(".menu-button");

// Uus asi minu jaoks, toggle-funktsioon.
// Siin hetkel ta vahetab css klassi nimega "open".
// Klass "open" on mul enne CSSis ära stiilitud vastavat.
// Open vastutab selle eest, et menüü content oleks olemas ja nähtab peale vajutades.
toggleMenu = () => {
  menu.classList.toggle("open");
};

// Lisame meie nupule eventlisteneri, mis käivitab funktsiooni
// funktsioon käivitab meie eesloodud toggleMenu funktsiooni
button.addEventListener("click", function() {
  toggleMenu();
});
