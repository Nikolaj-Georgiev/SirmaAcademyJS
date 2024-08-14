
//////////////////////////////////////////////////////////////
// Make mobile navigation work
// const btnNavEl = document.querySelector('.btn-mobile-nav');
// const headerEl = document.querySelector('.header');
// btnNavEl.addEventListener('click', () => headerEl.classList.toggle('nav-open'));

//////////////////////////////////////////////////////////////
// smooth scrolling animation
// const allLinks = [...document.querySelectorAll('a:link')];
// allLinks.forEach((link) => link.addEventListener('click', (e) => {
//   e.preventDefault();
//   const href = link.getAttribute('href');

//   // Scroll back to top:
//   if (href === '#') {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth',
//     })
//   }

//   // Scroll to other links
//   if (href !== '#' && href.startsWith('#')) {
//     const sectionEl = document.querySelector(href);
//     sectionEl.scrollIntoView({ behavior: 'smooth' });
//   }

// // Close mobile navigation
// if (link.classList.contains('main-nav-link')) {
//   headerEl.classList.toggle('nav-open')
// }

// }))
const links = document.querySelectorAll('a[href^="#"]');
const header = document.querySelector('.header');
const offset = 5 * parseFloat(getComputedStyle(document.documentElement).fontSize); // 5rem

links.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    if (targetId === '') {
      // Скрол до върха, ако href="#"
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - offset,
          behavior: 'smooth'
        });
      }
    }
  });
});

////////////////////////////////////////////////////////////
// Sticky navigation
const sectionHeroEl = document.querySelector('.hero');

const observer = new IntersectionObserver(function (entries) {
  const ent = entries[0];
  if (!ent.isIntersecting) {
    console.log(ent);
    header.classList.add('sticky');
  }

  if (ent.isIntersecting) {
    header.classList.remove('sticky');
  }
}, {
  // In the viewport
  root: null,
  threshold: 0,
  rootMargin: '-71px',
});
observer.observe(sectionHeroEl);