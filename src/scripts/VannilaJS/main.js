

const burger = document.querySelector('.burger');
// const menu = document.querySelector('.burgerMenu');

burger.addEventListener('click', function (e) {
	alert('veikia');
	// menu.classList.toggle('burgerMenu--display');
});

const topAdvert = document.querySelector('.topAdvert');
const xOff = document.querySelector('.xOff');

xOff.addEventListener('click', function (e) {
	e.preventDefault;
	topAdvert.classList.add('rm-block');
});