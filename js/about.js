//Navigation bar effects on scroll
window.addEventListener('scroll', function(){
    const header=this.document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY>0);
});

//REsponsive navigation menu toggle

const menuBtn=document.querySelector('.nav_menu_btn');
const closeBtn=document.querySelector('.nav_close_btn');
const navigation=document.querySelector('.navigation');

menuBtn.addEventListener('click', ()=>{
    navigation.classList.add('active');
});

closeBtn.addEventListener('click',()=>{
    navigation.classList.remove('active');
});