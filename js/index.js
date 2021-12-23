const menuIcon = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('.mobile-navigaton');

const closeBtn = document.querySelector('.close-btn');

function show() {
  mobileMenu.classList.remove('hide');
  mobileMenu.classList.add('show');
}
function hide() {
  mobileMenu.classList.add('hide');
  mobileMenu.classList.remove('show');
}

menuIcon.addEventListener('click', show, true);
closeBtn.addEventListener('click', hide, true);
