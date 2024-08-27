let speech = new SpeechSynthesisUtterance();
let voices=[];
let selectrr = document.querySelector('.selectrr');
window.speechSynthesis.onvoiceschanged=()=>{
    voices = window.speechSynthesis.getVoices();
    speech.voice =voices[0];

    voices.forEach((voice,i) => (selectrr.options[i]=new Option(voice.name,i))) ;
}
selectrr.addEventListener('change',()=>{
    speech.voice =voices[selectrr.value];
});
document.querySelector('.play').addEventListener('click',()=>{
    let text = document.querySelector('.testts').value;
    speech.text =  text ;

    console.log(text);
    window.speechSynthesis.speak(speech);
});