
let container = document.querySelector('.img-container');
let line = document.querySelector('.line');
let icon = document.querySelector('.icon');

let width = container.offsetLeft;
let innerwidth = 0;
let inner_container =  document.querySelector('.inner-container');
container.addEventListener('mousemove',(e)=>{
    innerwidth= e.pageX-width;
    inner_container.style.width = innerwidth + "px";
    line.style.marginLeft = innerwidth + "px";
    icon.style.marginLeft = innerwidth-10 + "px";
    console.log(innerwidth);

   
});
