let playbtn = document.querySelector('#play');
let restart = document.querySelector('#restart');
let stopbtn = document.querySelector('#stop');
let hour = document.querySelector('#hour');
let min = document.querySelector('#min');
let sec = document.querySelector('#sec');
let [hours,minutes,seconds]=[0,0,0];
let timer = null;
playbtn.addEventListener('click',interval);
stopbtn.addEventListener('click',stopinterval);
restart.addEventListener('click',clrinterval);
function interval(){
    if (timer === null) { 
        timer = setInterval(stopwatch, 1000); // Start the interval only if it's not already running
    }
}
function stopinterval(){
     if(timer!=null){
        clearInterval(timer);   
        timer = null;  
}
}


function clrinterval(){
    if(timer!=null){
clearInterval(timer);
[hours,minutes,seconds]=[0,0,0];
hour.innerHTML ="00";
min.innerHTML = "00";
sec.innerHTML = "00";
timer = null;  
interval();
    }

}



function stopwatch(){
    seconds++;
    if(seconds===61){
        seconds=0;
        minutes++;
    }
    if(minutes===61){
        minutes=0;
        hours++;
    }

    hour.innerHTML = hours.toString().padStart(2, '0');
    min.innerHTML = minutes.toString().padStart(2, '0');
    sec.innerHTML = seconds.toString().padStart(2, '0');

}




// function interval(seconds,minutes,minutes){
//     let [newsec,newmin,newhou]=[seconds,minutes,minutes]
//         setInterval(()=>{
//             stopwatch();
//         },1000);
    
    
//         function stopwatch(){
//             newsec++;
//             if(newsec===61){
//                 newsec=0;
//                 newmin++;
//             }
//             if(newmin===61){
//                 newmin=0;
//                 newhou++;
//             }
        
//             hour.innerHTML=newhou;
//             min.innerHTML=newmin;
//             sec.innerHTML=newsec;
        
//         }
//     }