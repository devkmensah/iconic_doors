/** @format */

'use strict';

// 1. Start Now Btn Smooth scroll effect
const startBtn = document.querySelector('.startBtn ');
const scheduleForm = document.querySelector('.consultation-form');
console.log(startBtn, scheduleForm);

startBtn.addEventListener('click', function (e) {
  e.preventDefault();
  //   const schedule = scheduleForm.getBoundingClientRect();

  scheduleForm.scrollIntoView({ behavior: 'smooth' });
});
