document.querySelector('.js-menu-button').addEventListener('click', () => {
  document.querySelector('.js-nav').style.display = 'flex';
  document.querySelector('.js-close-button').style.display = 'block';
  document.querySelector('.js-header__mehran').style.display = 'none';
});

document.querySelector('.js-close-button').addEventListener('click', () => {
  document.querySelector('.js-nav').style.display = 'none';
  document.querySelector('.js-close-button').style.display = 'none';
  document.querySelector('.js-header__mehran').style.display = 'block';
})