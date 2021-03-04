/** @format */

'use strict';

// 1. Start Now Btn Smooth scroll effect
const startBtn = document.querySelector('.startBtn ');
const scheduleForm = document.querySelector('.consultation-form');

startBtn.addEventListener('click', function (e) {
  e.preventDefault();
  scheduleForm.scrollIntoView({ behavior: 'smooth' });
});

// 2. Arrow up Btn Smooth scroll effect
const arrowUP = document.querySelector('.arrow-up ');
const header = document.querySelector('#header');

arrowUP.addEventListener('click', function (e) {
  e.preventDefault();
  header.scrollIntoView({ behavior: 'smooth' });
});
