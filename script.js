function operate(operator, arg1, arg2) {
    let functions = {
        add: function (a, b){
            return a+b;
        },
        sub: function(a, b){
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

window.onload = myMain;

function myMain() {
  document.getElementById("buttons").onclick = buton;
}

function buton(e) {
  if (e.target.tagName == 'input') {
    console.log(e.target.value);
  }
}

let result = 0;


document.getElementById("result").value = result
console.log(result);

 