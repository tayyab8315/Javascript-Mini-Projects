const UpperCase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LowerCase ="abcdefghijklmnopqrstuvwxyz";
const number="0123456789"
const symbol="!@#$%^&*()-+|}{?><";
let allchars=UpperCase+LowerCase+number+symbol;
let passwordlength=12;
document.querySelector('.nextbtn').addEventListener('click',()=>{
let password = "";
password +=UpperCase[Math.floor(Math.random() * UpperCase.length)];
password +=LowerCase[Math.floor(Math.random() * LowerCase.length )];
password +=number[Math.floor(Math.random() * number.length )];
password +=symbol[Math.floor(Math.random() * symbol.length )];
while(password.length < passwordlength){
    password +=allchars[Math.floor(Math.random() * allchars.length )];
}
document.querySelector('#pwd').value=password;
});

document.querySelector('.copy').addEventListener('click',()=>{
    document.querySelector('#pwd').select();
    document.execCommand("copy");
});
