/** @format */

'use strict';
/* ----------------------------------------------------------- */
// REVEAL EACH SECTION ON SCROLL FOR CONTACT PAGE
/* ----------------------------------------------------------- */
const contactSections = document.querySelectorAll('.contact-sections');
console.log(contactSections);

const contactsObserver = new IntersectionObserver(
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

contactSections.forEach(function (section) {
  contactsObserver.observe(section);
  section.classList.add('unreveal');
});
