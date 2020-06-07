function operate(operator, arg1, arg2) {
    let functions = {
        add: function (a, b){
            return a+b;
        },
        subtract: function(a, b){
            return a-b;
        },
        multiply: function (a, b){
            return a*b;
        },
        divide: function(a, b) {
            return a / b;
        }
    };

    return functions[operator](arg1, arg2);
}

let result = 0;
let operation = 'start'
document.getElementById("display").value = result

function numberClick(number) {
    if (operation == 'start') {
        result = number;
        document.getElementById("display").value = result
        console.log(result);
    } else {
        document.getElementById("display").value = number;
        result = operate(operation, result, number);
        console.log(result);
    }
}

function operationClick(argument) {
    //Displays the result of the previous calculation before a number for a new calculation is clicked
    document.getElementById("display").value = result

    //Saves the operator name to be used in operate() function
    operation = argument;
}

function solve() {
    document.getElementById("display").value = result;
}