document.querySelector('.cardbtn').addEventListener('click',()=>{
  
var RandomRGB = '#' + Math.floor(Math.random() * 16777215).toString(16);
document.querySelector('.contianer-fluid').style.backgroundColor=RandomRGB ;
document.querySelector('#colorCode').innerText=RandomRGB ;
});