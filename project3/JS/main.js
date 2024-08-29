window.alert(Math.random() * 40);

function addition() { // function to perform addition
    var result = 2 + 2; 
    document.getElementById("addition").innerHTML = "2 + 2 = " + result;
}

function subtraction() { // function to perform subtraction
    var result = 82 - 4;
    document.getElementById("subtraction").innerHTML = "82 - 4 = " + result;
}

function division() { // function to perform divison
    var result = 8 / 1;
    document.getElementById("division").innerHTML = "8 / 1 = " + result;
}

function multiplication() { // function to perform multiplication
    var result = 8 * 92;
    document.getElementById("multiplication").innerHTML = "8 * 92 = " + result;
}

function hi() { // function performing multiple operations
    var result = (1 + 8) * 14 / 2 - 3;
    document.getElementById("hi").innerHTML = "1 plus 8, multiplied by 14, divided in half and then subtracted by 3 equals " + result;
}

function Modulus_Operator() { // function to show the remainder of division using modulus operator
    var result = 92 % 4;
    document.getElementById("pk").innerHTML = "When you divided 92 by 4, you have a remainder of: " + result;
}

function negation_operator() { // function using negation operator
    var p = 22;
    document.getElementById("e").innerHTML = -p;
}

function incr() { // function to increment an integer
    var q = 14;
    q++; 
    document.getElementById("x").innerHTML = "Incremented value: " + q;
}

function decr() { // function to decrement an integer
    var n = 18;
    n--; 
    document.getElementById("i").innerHTML = "Decremented value: " + n; 
}

function mr() { //math rounding 
    var roundedNumber = Math.round(8.9);
    document.getElementById("m").innerHTML = "Rounded number is: " + roundedNumber;
}