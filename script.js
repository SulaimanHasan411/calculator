const display = document.querySelector(".display");
let val = "0";

let firstNum = null;
let secondNum = null;
let operator = null;

function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function negative(a) {
    return a * -1;
}

function percentage(a) {
    return round(a / 100);
}

function round(a) {
    return Math.round(a * 100000) / 100000;
}

function divide(a,b) {
    if (b === 0){
        alert("Cant divide by 0!");
        return "no";
    }
    return round(a/b);
}

function mod(a,b) {
    if (b === 0){
        alert("Cant divide by 0!");
        return "no";
    }
    return a % b;
}

function exp(a,b) {
    return a ** b;
}

function operate(num1, operator, num2) {
    switch(operator){
        case "+":
            return add(num1,num2);
            break;
        case "-":
            return subtract(num1,num2);
            break;
        case "*":
            return multiply(num1,num2);
            break;
        case "/":
            return divide(num1,num2);
            break;
        case "mod":
            return mod(num1,num2);
            break;
        case "^":
            return exp(num1,num2);
    }
}

function singleOperator(op){
    if (operator !== null){
        calculateResult();
    }
    num1 = Number(val);
    switch(op){
        case "+/-":
            val = negative(num1);
            display.textContent = val;
            break;
        case "%":
            val = percentage(num1);
            display.textContent = val;
            break;
    }
}


function updateDisplay() {
    if (val.length > 15){
        val = val.substring(0,15);
    }
    display.textContent = val;
}

function updateInput(num) {
    if (val === "0"){
        val = "";
        val += num;
    }
    else {
        val += num;
    }
}

function storeInput(op){
    if (operator !== null){
        calculateResult();
    }
    operator = op;
    firstNum = Number(val);
    val = "";
    display.textContent += op;
}

function calculateResult(){
    secondNum = Number(val);
    output = operate(firstNum,operator,secondNum);
    if (output === "no"){
        clearDisplay();
        return;
    }
    val = "";
    val += output;
    display.textContent = val;
    secondNum = null;
    operator = null;
    updateDisplay();
}

function clearDisplay() {
    val = "0";
    display.textContent = val;
    firstNum = null;
    operator = null;
    secondNum = null;
}

const buttons = document.querySelectorAll("button");

for (const btn of buttons){
    btn.addEventListener("click",function() {
        if (btn.classList.contains("num")){
            updateInput(btn.textContent);
            updateDisplay();
        }
        else if (btn.classList.contains("clear")){
            clearDisplay();
        }
        else if(btn.classList.contains("single")){
            singleOperator(btn.textContent);
        }
        else if(btn.classList.contains("operator")){
            storeInput(btn.textContent);
        }
        else if(btn.classList.contains("equals")){
            calculateResult();
        }
    });
}