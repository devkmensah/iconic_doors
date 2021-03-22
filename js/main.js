/** @format */

'use strict';
/* ----------------------------------------------------------- */
// 1. START NOW BTN SMOOTH SCROLL EFFECT
/* ----------------------------------------------------------- */
const startBtn = document.querySelector('.startBtn ');
const scheduleForm = document.querySelector('.consultation-form');

startBtn.addEventListener('click', function (e) {
  e.preventDefault();

  scheduleForm.scrollIntoView({ behavior: 'smooth' });
});

/* ----------------------------------------------------------- */
// 2. ARROW UP BTN SMOOTH SCROLL EFFECT
/* ----------------------------------------------------------- */
const arrowUP = document.querySelector('.arrow-up ');
const header = document.querySelector('#header');

arrowUP.addEventListener('click', function (e) {
  e.preventDefault();
  header.scrollIntoView({ behavior: 'smooth' });
});

//
/* ----------------------------------------------------------- */
// 3. SHOW ARROW UP BTN
/* ----------------------------------------------------------- */
const consultation = document.querySelector('#consultation');
const arrowObserver = new IntersectionObserver(
  function (entries) {
    const [entry] = entries;

    if (entry.isIntersecting) arrowUP.classList.add('hidden');
    else arrowUP.classList.remove('hidden');
  },
  {
    root: null,
    threshold: 0,
    rootMargin: `${0}px`,
  }
);
arrowObserver.observe(consultation);

/* ----------------------------------------------------------- */
// 4. REVEAL SECTIONS ON SCROLL FOR HOME PAGE
/* ----------------------------------------------------------- */
const allSections = document.querySelectorAll('.reveal-section');

const sectionObserver = new IntersectionObserver(
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

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('unreveal');
});
