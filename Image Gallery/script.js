let gallery = document.querySelector('.gallery');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

gallery.addEventListener('wheel',(e)=>{

    e.preventDefault;
gallery.style.scrollBehavior='smooth';
    gallery.scrollLeft += e.deltaY;
});
prev.addEventListener('click',()=>{
    gallery.style.scrollBehavior='smooth';
    gallery.scrollLeft += 400;
});
next.addEventListener('click',()=>{
    gallery.style.scrollBehavior='smooth';
    gallery.scrollLeft -= 400;
});