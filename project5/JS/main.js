document.write("92" + 8 + "<br>"); // using coercion on the integers
document.write("The data type is: " + typeof 3 + "<br>"); //prints the data type

function test1() { // displays NaN
    document.getElementById("Test1").innerHTML = 0/0;
}

function test2() { //displays true
    document.getElementById("Test2").innerHTML = isNaN("This is a string");
}

function test() { //displays false
    document.getElementById("Test3").innerHTML = isNaN("8");
}

function inftest() { //displays infinity 
    document.getElementById("testing").innerHTML = 2E310; 
}

function neginf() { //displays -infinity
    document.getElementById("testt").innerHTML = -3E310; //negative infinity
} 

var i = 88 > 92; //boolean logic to display false
document.write("88 > 92 is: " + i + "<br>");

var z = 8 > 1; //boolean logic to display true
document.write("8 > 1 is: " + z);

console.log(8 * 19);

console.log(8==9);

var a = 88==88; //boolean logic to compare the integers and display true
document.write("88 == 88 is: " + a + "<br>");

var b = 8==43; //boolean logic to compare integers and display false
document.write("8 == 43 is: " + b + "<br>");

var q = 44; //verifying values and data type is equal 
var w = 44;
answer = (q === w);
document.write("does " + q + " equal " + w + "? " + answer + "<br>");

var e = 41; //displaying false with different data type & different value
var r = "44";
answer1 = (e === r);
document.write("does " + e + " equal " + r + "? " + answer1 + "<br>");

var t = 38; // returning flase with a different data type + same value
var y= "38";
answer2 = (t === y);
document.write("does " + t + " equal " + y + "? " + answer2 + "<br>");

var u = 41; // return false using same data type with different value 
var o = 39;
answer3 = (u === o);
document.write("does " + u + " equal " + o + "? " + answer3 + "<br>");

var p = 41 === 41; // using and to display true
var s = 8 > 2;   
var answer4 = (p && s); 
document.write(answer4 + "<br>");

var d = 41 === 40; //using and to display false
var f = 2 > 8;
answer5 = (d && f);
document.write(answer5 + "<br>"); 

var g = 4 > 1; // using or to display true
var h = 3 > 11;
answer6 = (g || h);
document.write(answer6 + "<br>"); //true

var j = 4 > 18; // using or to display false
var k = 1 > 2;
answer7 = (j || k);
document.write(answer7 + "<br>");

function nop() { // not operator to display true
    document.getElementById("not").innerHTML = !(11 < 8);
}

function nopp() { //not operator to display false
    document.getElementById("not1").innerHTML = !(11 > 8);
}