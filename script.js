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
let operation = ''
document.getElementById("result").value = result

function numberClick(number) {
    if (operation == '') {
        result = number;
        document.getElementById("result").value = result
        console.log(result);
    } else {
        result = operate(operation, result, number);
        document.getElementById("result").value = result
        console.log(result);
    }
}

function operationClick(argument) {
    operation = argument;
    console.log(operation);
}

function solve() {
    console.log(result);
}