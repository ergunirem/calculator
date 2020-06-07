// VARIABLES
let result = 0;
let operation = 'on'
let calculationList = [];
document.getElementById("display").value = result

// FUNCTIONS

function operate(operator, arg1, arg2) {
    let functions = {
        '+': function (a, b){
            return a+b;
        },
        '-': function(a, b){
            return a-b;
        },
        '*': function (a, b){
            return a*b;
        },
        '/': function(a, b) {
            return a / b;
        }
    };

    return functions[operator](arg1, arg2);
}


