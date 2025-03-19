// Calculator Script

// Add
function add() {
    var num1 = parseFloat(document.getElementById("addnum1").value);
    var num2 = parseFloat(document.getElementById("addnum2").value);
    sum = num1 + num2;
    document.getElementById("sum").innerHTML = sum;
}

// Subtract
function sub() {
    var num1 = parseFloat(document.getElementById("subnum1").value);
    var num2 = parseFloat(document.getElementById("subnum2").value);
    diff = num1 - num2;
    document.getElementById("diff").innerHTML = diff;
}

// Multiply
function multi() {
    var num1 = parseFloat(document.getElementById("multinum1").value);
    var num2 = parseFloat(document.getElementById("multinum2").value);
    prod = num1 * num2;
    document.getElementById("prod").innerHTML = prod;
}

// Divide
function div() {
    var num1 = parseFloat(document.getElementById("divnum1").value);
    var num2 = parseFloat(document.getElementById("divnum2").value);
    quo = num1 / num2;
    document.getElementById("quo").innerHTML = quo;
}