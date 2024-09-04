function fSent () { //using .concat to join variables together
    var x = "Dany Heatley ";
    var y = "scored 50 goals ";
    var z = "in the year ";
    var q = "of 2006 ";
    var p = x.concat(y, z, q);
    document.getElementById("test").innerHTML = p;
}

function sliceMethod () { // slice method to show the range of chars, also utilitzed .search() & .toUpperCase()
    var Sentence = "He also had 50 goals in the year of 2007 "
    var d = Sentence.slice(0,42);
    document.getElementById("slice").innerHTML = d;
    var searchInd = Sentence.search("50 goals");
    document.getElementById('searchIndex').innerHTML = searchInd;
    var uCase = Sentence.toUpperCase();
    document.getElementById('upperCase').innerHTML = uCase; 
}

function tStr() { // .toString() to show 544 as a string 
    var m =544;
    document.getElementById("test1").innerHTML = m.toString();
}

function tPre () { // toPrecision() to format a number to a specified length
    var x = 89243.1970201064474;
    document.getElementById("test2").innerHTML = x.toPrecision(11); // formats the number to a string with 11 digits
    var q = 377474.2341234
    document.getElementById("test3").innerHTML = q.toFixed(6); // formats the number to a string with 6 decimal places
    var testing = "This is a string!";
    var z = testing.valueOf(); // returns primitive value of string 
}