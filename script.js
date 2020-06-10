// VARIABLES & SELECTORS
//To save and display the result of several operations
let result = 0;
document.getElementById("display").value = result

//To check if a new number is entered 
let operation = 'on'

//To check if the following numbers are decimal points 
let floatinPoint = 'on'

//To save user's several operations
let calculationList = [];


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
    }
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

//Does the remaining of the calculations and adjusts the list accordingly
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
    if(calculationList[calculationList.length - 1] == '/' && number == 0) {
        alert('Division by zero is undefined');
    }
    else if (operation == 'on') {
        calculationList.push(number); 
        operation = 'off';  
        document.getElementById("display").value = calculationList.join(" ");
    }
    else if (operation == 'off') {
        calculationList[calculationList.length - 1] = Number(('' + calculationList[calculationList.length - 1]) + ('' + number));
        document.getElementById("display").value = calculationList.join(" "); 
    }   
}

function floatingPoint() {
    if (operation == 'off' && floatinPoint == 'on') {
        calculationList[calculationList.length - 1] = (('' + calculationList[calculationList.length - 1]) + '.');
        document.getElementById("display").value = calculationList.join(" "); 
        floatinPoint = 'off'
    }
}

function operationClick(argument) { 
    if (operation == 'off' && calculationList.length > 0) {
        calculationList.push(argument);
        operation = 'on';
        floatinPoint = 'on';
        document.getElementById("display").value = calculationList.join(" ");
    }   
}

function solve() {
    if(operation == 'off') {
        solveOperationOrder(calculationList);
        calculate(calculationList);
        result = parseFloat(calculationList[0].toFixed(7));
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

//Deletes the last element if user wishes to undo the last input
function backspace() {
    calculationList.pop();
    document.getElementById("display").value = calculationList.join(" ");
}


//Adding keyboard support
window.addEventListener("keypress", (e) => {
    //for numbers in keyboard
    if(e.keyCode > 47 && e.keyCode < 58) {
        numberClick(e.key)
    }

    //for operators in keyboard
    if (e.key == '+') {
        operationClick('+');
    }
    if (e.key == '-') {
        operationClick('-');
    }
    if (e.key == '*' ) {
        operationClick('*');
    }
    if (e.key == '/' ) {
        operationClick('/');
    }
    if (e.key == '=' ) {
        solve();
    }
    if (e.key == '.' ) {
        floatingPoint();
    }
});
