let items=document.querySelectorAll('.item');
let left_box=document.querySelector('.left-box');
let right_box=document.querySelector('.right-box');

items.forEach(e=>{
e.addEventListener('dragstart',(event)=>{
let select=event.target;

right_box.addEventListener('dragover',(event)=>{
    event.preventDefault();
});
right_box.addEventListener('drop',(event)=>{
    right_box.appendChild(select);
    select ='';
});
left_box.addEventListener('dragover',(event)=>{
    event.preventDefault();
});
left_box.addEventListener('drop',(event)=>{
    left_box.appendChild(select);
    select ='';
});
});
});