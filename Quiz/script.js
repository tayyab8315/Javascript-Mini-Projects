
document.addEventListener('DOMContentLoaded', function() {
    Quizstart();
});

const question = [
    // Original 6 questions...
    {
        question1: "Which is the largest animal on this planet?",
        answers: [
            { option: "Elephant", true: "no" },
            { option: "Giraffe", true: "no" },
            { option: "Whale", true: "yes" },
            { option: "Hippo", true: "no" }
        ]
    },
    {
        question1: "Which is the fastest land animal?",
        answers: [
            { option: "Cheetah", true: "yes" },
            { option: "Lion", true: "no" },
            { option: "Horse", true: "no" },
            { option: "Kangaroo", true: "no" }
        ]
    },
    {
        question1: "Which planet is known as the Red Planet?",
        answers: [
            { option: "Mars", true: "yes" },
            { option: "Earth", true: "no" },
            { option: "Jupiter", true: "no" },
            { option: "Venus", true: "no" }
        ]
    },
    {
        question1: "What is the tallest mountain in the world?",
        answers: [
            { option: "Mount Everest", true: "yes" },
            { option: "K2", true: "no" },
            { option: "Kangchenjunga", true: "no" },
            { option: "Makalu", true: "no" }
        ]
    },
    {
        question1: "Which ocean is the largest by surface area?",
        answers: [
            { option: "Pacific Ocean", true: "yes" },
            { option: "Atlantic Ocean", true: "no" },
            { option: "Indian Ocean", true: "no" },
            { option: "Southern Ocean", true: "no" }
        ]
    },
    {
        question1: "Which is the smallest country in the world by land area?",
        answers: [
            { option: "Vatican City", true: "yes" },
            { option: "Monaco", true: "no" },
            { option: "Nauru", true: "no" },
            { option: "San Marino", true: "no" }
        ]
    },
    // 15 additional questions...
    {
        question1: "Which is the largest desert in the world?",
        answers: [
            { option: "Sahara Desert", true: "yes" },
            { option: "Arabian Desert", true: "no" },
            { option: "Gobi Desert", true: "no" },
            { option: "Kalahari Desert", true: "no" }
        ]
    },
    {
        question1: "Which continent is known as the 'Dark Continent'?",
        answers: [
            { option: "Africa", true: "yes" },
            { option: "Asia", true: "no" },
            { option: "South America", true: "no" },
            { option: "Australia", true: "no" }
        ]
    },
    {
        question1: "What is the chemical symbol for gold?",
        answers: [
            { option: "Au", true: "yes" },
            { option: "Ag", true: "no" },
            { option: "Pb", true: "no" },
            { option: "Fe", true: "no" }
        ]
    },
    {
        question1: "Who wrote 'Romeo and Juliet'?",
        answers: [
            { option: "William Shakespeare", true: "yes" },
            { option: "Charles Dickens", true: "no" },
            { option: "Mark Twain", true: "no" },
            { option: "Leo Tolstoy", true: "no" }
        ]
    },
    {
        question1: "Which is the largest planet in our solar system?",
        answers: [
            { option: "Jupiter", true: "yes" },
            { option: "Saturn", true: "no" },
            { option: "Neptune", true: "no" },
            { option: "Earth", true: "no" }
        ]
    },
    {
        question1: "Which organ in the human body is primarily responsible for detoxification?",
        answers: [
            { option: "Liver", true: "yes" },
            { option: "Kidney", true: "no" },
            { option: "Lungs", true: "no" },
            { option: "Heart", true: "no" }
        ]
    },
    {
        question1: "What is the longest river in the world?",
        answers: [
            { option: "Nile River", true: "yes" },
            { option: "Amazon River", true: "no" },
            { option: "Yangtze River", true: "no" },
            { option: "Mississippi River", true: "no" }
        ]
    },
    {
        question1: "Which is the most spoken language in the world?",
        answers: [
            { option: "Mandarin Chinese", true: "yes" },
            { option: "English", true: "no" },
            { option: "Spanish", true: "no" },
            { option: "Hindi", true: "no" }
        ]
    },
    {
        question1: "Which country hosted the first modern Olympic Games in 1896?",
        answers: [
            { option: "Greece", true: "yes" },
            { option: "France", true: "no" },
            { option: "USA", true: "no" },
            { option: "UK", true: "no" }
        ]
    },
    {
        question1: "Which element has the atomic number 1?",
        answers: [
            { option: "Hydrogen", true: "yes" },
            { option: "Helium", true: "no" },
            { option: "Oxygen", true: "no" },
            { option: "Carbon", true: "no" }
        ]
    },
    {
        question1: "Who was the first person to walk on the moon?",
        answers: [
            { option: "Neil Armstrong", true: "yes" },
            { option: "Buzz Aldrin", true: "no" },
            { option: "Yuri Gagarin", true: "no" },
            { option: "Michael Collins", true: "no" }
        ]
    },
    {
        question1: "Which country is known as the Land of the Rising Sun?",
        answers: [
            { option: "Japan", true: "yes" },
            { option: "China", true: "no" },
            { option: "South Korea", true: "no" },
            { option: "Thailand", true: "no" }
        ]
    },
    {
        question1: "Which mammal is known to have the most powerful bite in the animal kingdom?",
        answers: [
            { option: "Hippopotamus", true: "yes" },
            { option: "Lion", true: "no" },
            { option: "Crocodile", true: "no" },
            { option: "Shark", true: "no" }
        ]
    },
    {
        question1: "Which metal is the most conductive of electricity?",
        answers: [
            { option: "Silver", true: "yes" },
            { option: "Copper", true: "no" },
            { option: "Gold", true: "no" },
            { option: "Aluminum", true: "no" }
        ]
    },
    {
        question1: "Which war was fought between the North and South regions in the United States?",
        answers: [
            { option: "American Civil War", true: "yes" },
            { option: "World War I", true: "no" },
            { option: "World War II", true: "no" },
            { option: "Vietnam War", true: "no" }
        ]
    }
];

let answers = document.querySelector('.answers');
let Qusetion = document.querySelector('.Qusetion');
let nextbtn = document.querySelector('.nextbtn');
let QusetionNumber = document.querySelector('.QusetionNumber'); 
console.log(answers);
console.log(Qusetion);
console.log(nextbtn);


let curretindex=0;
let curretscore=0;


function Quizstart(){
   
    nextbtn.innerHTML='Next';
    showQuestion(curretindex);

}
nextbtn.addEventListener('click',()=>{
    curretindex = curretindex+1;
    showQuestion(curretindex);
});

function showQuestion(curretindex){
    let currentquestion = question[curretindex];
    nextbtn.style.display='none';
    if (currentquestion === undefined || currentquestion === "") {
        var textcd = document.querySelector('.cd');
        var complete=`<h3 class="card-title dark">You Got  ${curretscore}  Out Of ${curretindex} </h3><br><br> <div class="text-end"><button class="Restartbtn">
                    Restart Quiz
                </button></div> `; 
        console.log(textcd);
        console.log(complete);

        // textcd.innerHTML ='';
        textcd.innerHTML = complete;
    } else {
        console.log("The index contains:", currentquestion);
    
    var optionhtml='';
    var optionnumber=0;

Qusetion.innerHTML= currentquestion.question1;
QusetionNumber.innerHTML=`Question ${curretindex+1}`;
currentquestion.answers.forEach(ans=>{
    optionnumber = optionnumber+1;
optionhtml+=`<button  class="w-100 border border-1 text-start p-2 rounded option mb-4 optionsbtn " data="${ans.true}"> <span class="optionnumber">${optionnumber})</span> <span class="ptionvalue">${ans.option}</span> </button>`;
})

answers.innerHTML='';
answers.innerHTML=optionhtml;
var optionsbtn = document.querySelectorAll('.optionsbtn');
optionsbtn.forEach(btn=>{

btn.addEventListener('click',()=>{
    var atrribute = btn.getAttribute('data');
    if(atrribute==='yes'){
        btn.classList.add('success','pointer');
        curretscore = curretscore+1;
    }else{
        btn.classList.add('danger','pointer');
    }
    clickoption()

})
});
}
document.querySelector('.Restartbtn').addEventListener('click', () => {
location.reload();
});
}
function clickoption(){
    var optionsbtn = document.querySelectorAll('.optionsbtn');
optionsbtn.forEach(btn=>{
 var atrribute = btn.getAttribute('data');
 if(atrribute==='yes'){
        btn.classList.add('success','pointer');
        nextbtn.style.display='block';
     }else{
        btn.classList.add('pointer');
        nextbtn.style.display='block';
       
     }
});
}