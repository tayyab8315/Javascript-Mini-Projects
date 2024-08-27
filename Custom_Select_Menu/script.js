let btn =document.querySelector('#Secltbtn');
let body =document.querySelector('#Secltbody');
let fullbody =document.querySelector('body');
let chevron = document.querySelector('.chevron');
let items = document.querySelectorAll('.items');
btn.addEventListener('click',(event)=>{
    event.stopPropagation();
    body.classList.toggle('Secltbody');
    chevron.classList.toggle('icon');
});
fullbody.addEventListener('click',()=>{
    body.classList.add('Secltbody');
    chevron.classList.add('icon');
})

items.forEach((e) => {
    e.addEventListener('click', (event) => {
        event.stopPropagation();
        let text = e.querySelector('.daat').innerHTML;
        btn.querySelector('.selectcat').innerHTML =text;
        body.classList.add('Secltbody');
        chevron.classList.add('icon');

    });
});