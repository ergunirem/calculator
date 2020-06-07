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

//Does the calculations with operation precedence and adjusts the list accordingly
function solveOperationOrder(list) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] == "*" || list[i] == "/") {
            let temp = operate(list[i], list[i + 1], list[i - 1]);
            list.splice((i-1), 3, temp);
        }
    }
}

//Does the remaining of the calculations 
function calculate(list) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] == "+" || list[i] == "-") {
            let temp = operate(list[i], list[i - 1], list[i + 1]);
            list.splice((i-1), 3, temp);
            i = 0;
        }
    }
}

