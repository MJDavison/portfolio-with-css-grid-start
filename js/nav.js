const navToggle = document.querySelector('.menu-button');
const nav = document.querySelector('.container-nav');
const toggleNav = _=>{document.body.classList.toggle('nav-is-open');}
navToggle.addEventListener('click', _ => {
   toggleNav();
});

nav.addEventListener('click', _ => {
    toggleNav();
})