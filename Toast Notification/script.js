let toast = document.querySelectorAll('.tost');
let btn_success = document.querySelector('.btn-success');
let btn_warning = document.querySelector('.btn-warning');
let btn_danger = document.querySelector('.btn-danger');
let progres = document.querySelectorAll('.progres');
btn_success.addEventListener('click',()=>{
    toast[0].classList.remove('hide');
    progres[0].classList.add('animated1');
    toast[0].classList.add('show');
    setTimeout(()=>{
        toast[0].classList.remove('show');
        progres[0].classList.remove('animated1');
        toast[0].classList.add('hide');
    }, 3000)
})
btn_warning.addEventListener('click',()=>{
    toast[1].classList.remove('hide');
    progres[1].classList.add('animated2');
    toast[1].classList.add('show');
    setTimeout(()=>{
        toast[1].classList.remove('show');
        progres[1].classList.remove('animated2');
        toast[1].classList.add('hide');
    }, 3000)
})
btn_danger.addEventListener('click',()=>{
    toast[2].classList.remove('hide');
    progres[2].classList.add('animated3');
    toast[2].classList.add('show');
    setTimeout(()=>{
        toast[2].classList.remove('show');
        progres[2].classList.remove('animated3');
        toast[2].classList.add('hide');
    }, 3000)
    
})
