document.querySelector('.showbtn').addEventListener('click',()=>{
   let input = document.querySelector('.cardbtn');
   console.log(input.type);
   if(input.type==='password'){
    input.type='text';
   }else{
    input.type='password';
   }

});