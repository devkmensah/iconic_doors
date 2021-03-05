/** @format */

'use strict';

// 1... Start Now Btn Smooth scroll effect
const startBtn = document.querySelector('.startBtn ');
const scheduleForm = document.querySelector('.consultation-form');

startBtn.addEventListener('click', function (e) {
  e.preventDefault();

  scheduleForm.scrollIntoView({ behavior: 'smooth' });
});

// 2... Arrow up Btn Smooth scroll effect
const arrowUP = document.querySelector('.arrow-up ');
const header = document.querySelector('#header');

arrowUP.addEventListener('click', function (e) {
  e.preventDefault();
  header.scrollIntoView({ behavior: 'smooth' });
});

// 3... Show arrow up btn
const consultation = document.querySelector('#consultation');
const arrowObserver = new IntersectionObserver(
  function (entries) {
    const [entry] = entries;
    // console.log(entry);

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
// intersecting means when the target being observed appears or touches the rootmargin of the entire page. The root margin is the head or top of the page. If a root margin of 90px is set, that'll be 90px margin from the top of the page to wherever it meets our target.

// 4... Reveal Sections on scroll for home page
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

// 5... Forms validation
