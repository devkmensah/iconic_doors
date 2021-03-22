/** @format */

'use strict';
/* ----------------------------------------------------------- */
// 1. REVEAL FOOTER SECTION ON SCROLL FOR ABOUT PAGE
/* ----------------------------------------------------------- */
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

/* ----------------------------------------------------------- */
// 2. SATISFIED CUSTOMERS SCORE COUNT
/* ----------------------------------------------------------- */
const counting = document.querySelector('.counting');
let score = 0;
counting.textContent = `${100}+`;

(function () {
  window.addEventListener('scroll', function (e) {
    const timer = setInterval(() => {
      counting.textContent = score;
      if (score === 1000) {
        clearInterval(timer);
      } else {
        score += 1;
      }
    }, 1);
  });
})();
