let currentNumberWrapper = document.getElementById('currentNumber');
let currentNumber = 0;
let incrementButton = document.getElementById('increment');


function increment() {
    currentNumber++;
    currentNumberWrapper.innerHTML = currentNumber;
    if( currentNumber >= 10) {
        incrementButton.disabled = true;
    } else {
        incrementButton.disabled = false;
    }
}
    
function decrement() {
    currentNumber--;
    currentNumberWrapper.innerHTML = currentNumber;
  
}