// require("../styles/styles.scss");

// const burger = document.querySelector('.burger');
// const menu = document.querySelector('.burgerMenu');

// burger.addEventListener('click', function (e) {
// 	menu.classList.toggle('burgerMenu--display');
// });

const xOff = document.querySelector('.xOff');

xOff.addEventListener('click', function (e) {
	xOff.classList.add('rmBlock');
	console.log(xOff);
});
