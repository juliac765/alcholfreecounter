const resultText = document.querySelector(".result-txt");
let counterValue = 0;
resultText.innerHTML = counterValue;

function Increase(){
    counterValue ++;
    resultText.innerHTML  = counterValue;
}


function Decrease(){
    counterValue --;
    resultText.innerHTML = counterValue;

}


function Reset(){
    resultText.innerHTML="0";
}