function addition(arg1, arg2){
    return parseFloat(arg1) + parseFloat(arg2);
}
function subtraction(arg1, arg2){
    return parseFloat(arg1) - parseFloat(arg2);
}
function division(arg1, arg2){
    if(arg2 == 0){
        return "Division by 0, really?";
    }
    return parseFloat(arg1) / parseFloat(arg2);
}
function multiplication(arg1, arg2){
    return parseFloat(arg1) * parseFloat(arg2);
}

function operate(operator, arg1, arg2){
    switch(operator) {
        case `+`: 
            return addition(arg1, arg2);
        case `-`:
            return subtraction(arg1, arg2);
        case `/`:
            return division(arg1,arg2);
        case `*`: 
            return multiplication(arg1, arg2);
        default:
            return `Operator not found.`;
    }
}

const display = document.querySelector(`#display`);
const result = document.querySelector(`#result`);
const numbers = document.querySelectorAll(`.number`);
const operators = document.querySelectorAll(`.operator`);
const equal = document.querySelector(`.enter`);
const AC = document.querySelector(`#eraseAll`);
const C = document.querySelector(`#delete`);

let first_term = second_term = '';
let opp = '';

numbers.forEach(number => {
    number.addEventListener("click", function (event) {
        display.textContent += event.target.textContent;
      });
});
operators.forEach(operator => {
    operator.addEventListener("click", function (event){
        if (first_term === ''){
        first_term = display.textContent;
        result.textContent = first_term;
        display.textContent = '';
        opp = event.target.textContent;
        }
        else{
            second_term = display.textContent;
            display.textContent = '';
            first_term = (operate(opp, first_term, second_term));
            result.textContent = first_term;
            opp = event.target.textContent;
        }
    });
});
equal.addEventListener("click", function () {
    second_term = display.textContent;
    display.textContent = '';
    result.textContent = (operate(opp, first_term, second_term));
    first_term = result.textContent;
});

AC.addEventListener("click", () => document.location.reload())

C.addEventListener("click", function () {
    display.textContent = display.textContent.slice(0, display.textContent.length - 1);
})