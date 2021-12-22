let menuIcon = document.querySelector('.menu-icon');
let mobileMenu = document.querySelector('.mobile-navigaton');

let closeBtn = document.querySelector('.close-btn');

menuIcon.addEventListener('click', show, true);
closeBtn.addEventListener('click', hide, true);

function show() {
	mobileMenu.classList.remove('hide');
	mobileMenu.classList.add('show');
}
function hide() {
	mobileMenu.classList.add('hide');
	mobileMenu.classList.remove('show');
}
