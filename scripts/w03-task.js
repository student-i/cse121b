/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add(number1, number2) {
    return number1 + number2;
}

function addNumbers(){
    let number1 = Number(document.querySelector("#add1").value);
    let number2 = Number(document.querySelector("#add2").value);
    document.querySelector("#sum").value = add(number1, number2);
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);
/* Function Expression - Subtract Numbers */
let subtract = function(number1, number2) {
    return number1 - number2;
}

let subtractNumbers = function(){
    let number1 = Number(document.querySelector("#subtract1").value);
    let number2 = Number(document.querySelector("#subtract2").value);
    document.querySelector("#difference").value = subtract(number1, number2);
}

document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */

let multiply = (number1, number2) => {
    return number1 * number2;
}

let multiplyNumbers = () => {
    let number1 = Number(document.querySelector("#factor1").value);
    let number2 = Number(document.querySelector("#factor2").value);
    document.querySelector("#product").value = multiply(number1, number2);
}

document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */

let divide = (number1, number2) => {
    return number1 / number2;
}

let divideNumbers = () => {
    let number1 = Number(document.querySelector("#dividend").value);
    let number2 = Number(document.querySelector("#divisor").value);
    document.querySelector("#quotient").value = divide(number1, number2);
}

document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */


function GetTotalDue() {
    
    let subtotal = Number(document.querySelector("#subtotal").value);
    
    let isMember = document.querySelector("#member").checked;
    
    if (isMember) {
        subtotal *= 0.8;
    }

    document.querySelector("#total").textContent = `$${subtotal.toFixed(2)}`;
};

document.querySelector("#getTotal").addEventListener("click", GetTotalDue);

/* ARRAY METHODS - Functional Programming */

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
/* Output Source Array */

const arrayElement = document.querySelector("#array");
arrayElement.innerHTML = numbers.join(", ");

/* Output Odds Only Array */

document.querySelector("#odds").innerHTML = numbers.filter((number) => number % 2 === 1).join(",");

/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = numbers.filter((number) => number % 2 === 0).join(",");
/* Output Sum of Org. Array */

document.querySelector("#sumOfArray").innerHTML = numbers.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */

document.querySelector("#multiplied").innerHTML = numbers.map((number) => number * 2).join(",");
/* Output Sum of Multiplied by 2 Array */

document.querySelector("#sumOfMultiplied").innerHTML = numbers.map((number) => number * 2).reduce((sum, number) => sum + number);