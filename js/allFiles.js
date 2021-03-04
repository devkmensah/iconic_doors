/** @format */

'use strict';

// // 1... Arrow up Btn Smooth scroll effect
// const arrowUP = document.querySelector('.arrow-up ');
// const header = document.querySelector('#header');

// arrowUP.addEventListener('click', function (e) {
//   e.preventDefault();
//   header.scrollIntoView({ behavior: 'smooth' });
// });

// // 2... Show arrow up btn
// const consultation = document.querySelector('#consultation');
// const arrowObserver = new IntersectionObserver(
//   function (entries) {
//     const [entry] = entries;
//     // console.log(entry);

//     if (entry.isIntersecting) arrowUP.classList.add('hidden');
//     else arrowUP.classList.remove('hidden');
//   },
//   {
//     root: null,
//     threshold: 0,
//     rootMargin: `${0}px`,
//   }
// );
// arrowObserver.observe(consultation);
