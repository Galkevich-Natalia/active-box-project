const sidebar = document.querySelector(".sidebar");
const header__burger = document.querySelector(".header__burger");
const banner__title = document.querySelector(".banner__title");
const banner__description = document.querySelector(".banner__description");
const banner__btn = document.querySelector(".banner__btn");


const onBurgerClick = () => {
    sidebar.classList.toggle("sidebar_active")
    header__burger.classList.toggle("header__burger_active")
    banner__title.classList.toggle("banner__title_active")
    banner__description.classList.toggle("banner__description_active")
    banner__btn.classList.toggle("banner__btn_active")
}