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
            let temp = operate(list[i], list[i - 1], list[i + 1]);
            list.splice((i-1), 3, temp);
            i = 0;
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

// onClick functions
function numberClick(number) {
    if (operation == 'on') {
        calculationList.push(number); 
        operation = 'off';  
        document.getElementById("display").value = calculationList.join(" ");
    }
    else if (operation == 'off') {
        calculationList[calculationList.length - 1] = Number(('' + calculationList[calculationList.length - 1]) + ('' + number));
        document.getElementById("display").value = calculationList.join(" "); 
    }
    
}

function operationClick(argument) { 
    if (operation == 'off') {
        calculationList.push(argument);
        operation = 'on'
        document.getElementById("display").value = calculationList.join(" ");
        console.log(calculationList);
    }   
}

function solve() {
    if(operation == 'off') {
        solveOperationOrder(calculationList);
        calculate(calculationList);
        result = parseFloat((calculationList[0]).toFixed(7));
        // result = calculationList[0];
        document.getElementById("display").value = result;
    }
}

//Clears the calculationList and resets the result to zero
function clr() {
    result = 0;
    document.getElementById("display").value = result;
    operation = 'on';
    calculationList.splice(0,calculationList.length);
}

