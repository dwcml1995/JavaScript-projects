function test() { //function to concatenating  two strings together
    var a = "this is a variable";
    var b ="so is this";
    var str = a + " " + b;
    document.getElementById("text").innerHTML = str;
}

function bing() { // concatenating using +=
    var sentence = "click the button";
    sentence += "see what happens";
    document.getElementById("bing").innerHTML = sentence;
}