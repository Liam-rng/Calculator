function addition(arg1, arg2){
    return arg1 + arg2;
}
function subtraction(arg1, arg2){
    return arg1 - arg2;
}
function division(arg1, arg2){
    return arg1 / arg2;
}
function multiplication(arg1, arg2){
    return arg1 * arg2;
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

const digits = document.querySelectorAll(`.number, .operator`);
let display = document.getElementById(`display`);
display.textContent = ``;

digits.forEach(digit => {
    digit.addEventListener(`click`, function digitClicked(event){
        display.textContent += event.target.textContent;
    })
})
