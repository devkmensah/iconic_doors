/** @format */

'use strict';
// // 1... Reveal Sections on scroll for footer section
const footerSection = document.querySelector('.footer-section');
console.log(footerSection);

const footerObserver = new IntersectionObserver(
  function (entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('unreveal');
    observer.unobserve(entry.target);
  },
  {
    root: null,
    threshold: 0.14,
  }
);

footerObserver.observe(footerSection);
footerSection.classList.add('unreveal');
