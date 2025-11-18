const mobileMenu = document.querySelector('.mobile-menu');
const menuBtnOpen = document.querySelector('.menu-btn-open');
const menuBtnClose = document.querySelector('.menu-btn-close');

// функция открытия/закрытия меню
const toggleMenu = () => mobileMenu.classList.toggle('is-open');

// функции открытия и закрытия (чтобы использовать на ссылках)
const openMenu = () => mobileMenu.classList.add('is-open');
const closeMenu = () => mobileMenu.classList.remove('is-open');

// кнопки
menuBtnOpen.addEventListener('click', openMenu);
menuBtnClose.addEventListener('click', closeMenu);

// ссылки внутри меню
const menuLinks = document.querySelectorAll('.mobile-menu__item');
menuLinks.forEach(link => {
  link.addEventListener('click', closeMenu); // теперь точно работает
});

/*const mobileMenu = document.querySelector(`.mobile-menu`);
const menuBtnOpen = document.querySelector(`.menu-btn-open`);
const menuBtnClose = document.querySelector(`.menu-btn-close`);

const toggleMenu = () => mobileMenu.classList.toggle(`is-open`);

menuBtnOpen.addEventListener(`click`, toggleMenu);
menuBtnClose.addEventListener(`click`, toggleMenu);*/
