/* eslint-disable prefer-const */
// open
let burger = document.querySelectorAll('.navbar-burger');
let menu = document.querySelectorAll('.navbar-menu');

if (burger.length && menu.length) {
  for (let i = 0; i < burger.length; i += 1) {
    burger[i].addEventListener('click', () => {
      for (let j = 0; j < menu.length; j += 1) {
        menu[j].classList.toggle('hidden');
      }
    });
  }
}

// close
let close = document.querySelectorAll('.navbar-close');
let backdrop = document.querySelectorAll('.navbar-backdrop');

if (close.length) {
  for (let i = 0; i < close.length; i += 1) {
    close[i].addEventListener('click', () => {
      for (let j = 0; j < menu.length; j += 1) {
        menu[j].classList.toggle('hidden');
      }
    });
  }
}

if (backdrop.length) {
  for (let i = 0; i < backdrop.length; i += 1) {
    backdrop[i].addEventListener('click', () => {
      for (let j = 0; j < menu.length; j += 1) {
        menu[j].classList.toggle('hidden');
      }
    });
  }
}
