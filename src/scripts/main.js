require("../styles/styles.scss");

const burger = document.querySelector(".burger");
const menu = document.querySelector(".burgerMenu");

burger.addEventListener("click", function(e) {
	menu.classList.toggle("burgerMenu--display");
});
