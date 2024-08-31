function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    if (b === 0){
        return null;
    }
    return a/b;
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