let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = "";

let numButtons = document.getElementsByClassName("numButton");
    for (let i = 0; i<numButtons.length;i++){
            numButtons[i].addEventListener("click", function())
                if(operator == " ") {
                    firstNumber += this.textContent;
                    updateDisplay(firstNumber);
                } else {
                    secondNumber += this.textContent;
                    updateDisplay(secondNumber);
                }


                }

let OpButtons = document.getElementsByClassName("opButton");
                for(let i = 0; i<OpButtons.length;i++) {
                    opButtons[i].addEventListener("click",function()) {
                        operator = this.textContent;

                    }
                }
let eqButton = document.getElementsByClassName("eqButton")[0];
                eqButton.addEventListener("click",function() {
                    result = operate(operator,parseFloat(firstNumber),parseFloat(secondNumber));
                    updateDisplay(result);
                })

let clearButton = document.getElementsByClassName("clearButton")[0];
                clearButton.addEventListener("click",function(){
                    firstNumber = " ";
                    secondNumber = "";
                    operator = "";
                    result = "";
                    updateDisplay("");

                })



function add(a,b) {
    return a + b;

}

function substract(a, b) {
    return a - b;

}

function multiple(a,b) {

    return a * b;

}

function divide(a,b) {
    if(b == 0) {

            return 'Error! Division by zero is undefined';

    } else {

            return a / b;

    }
    
}

function operate(operator, a ,b) {
    switch(operator) {
        case '+' :
            return add(a, b);
        case '-' :
            return substract(a,b);
        case '*' :
            return multiple(a,b);
        case '/' :
            return divide(a,b);
        default: 
            return null;
    }

}