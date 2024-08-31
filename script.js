function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    if (b === 0){
        alert("Cant divide by 0!");
        return;
    }
    return a * b;
}

function negative(a) {
    return a * -1;
}

function percentage(a) {
    return a / 100;
}

function round(a) {
    return Math.round(a * 1000) / 1000;
}

function divide(a,b) {
    if (b === 0){
        alert("Cant divide by 0!");
        return;
    }
    return a/b;
}

function mod(a,b) {
    return a % b;
}

function exp(a,b) {
    return a ** b;
}

let firstNum;
let secondNum;
let operator;

function operate(num1, operator, num2) {
    if (operator === "+"){
        return add(num1,num2);
    }
    else if (operator === "-"){
        return subtract(a,b);
    }
    else if (operator === "*"){
        return multiply(num1,num2);
    }
    else if (operator === "/"){
        return divide(num1,num2);
    }
}