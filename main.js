// sticky navbar
window.addEventListener('scroll',function(){
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
})

// navbar for smaller screen 
function toggleMenu(){
    const menuIcon = document.querySelector('.menuIcon');
    const navigation = document.querySelector('.navigation');
    menuIcon.classList.toggle('active');
    navigation.classList.toggle('active');
}