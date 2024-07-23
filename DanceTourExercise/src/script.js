window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  const sticky = navbar.offsetTop;

  if (window.scrollY > sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});

const checkbox = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.header-ul');
navLinks.addEventListener('click', (e) => {
  const navLinkClass = e.target.classList[0];
  if (navLinkClass === 'header-link') {
    checkbox.checked = false;
  }
})