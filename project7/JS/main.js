function addNum() { //local variable
    var Y = 14;
    document.getElementById("test2").innerHTML = 22 + Y; // Use innerHTML instead of document.write
}


var X = 11;
function subNum() { //global variable
    document.getElementById("test2").innerHTML = 24 - X; // Use innerHTML instead of document.write
}


function test() { //error with debugging using console.log()
    console.log('Y is a local variable');
}

test();

function bing() {  // if statement
    if (3 < 8) {
        document.getElementById("hello").innerHTML = "The number 3 is less than the number 8.";
    }
}

function birthMonth() {
    var y = document.getElementById("test1").value; // Get the value from the element
    var x = ["January", "February", "March", "April", "May", "June",
             "July", "August", "September", "October", "November", "December"];
    var z = document.getElementById("test2");
    
    if (x.includes(y)) {
        z.innerHTML = y + " is a valid month"; // Display the result in the test2 element
    } else {
        z.innerHTML = y + " is not a valid month"; // Display the result in the test2 element
    }
}

function timeFunc() { // time function that displays a message based on the users time of day
    var Time = new Date().getHours();
    var Reply;
    
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time";
    } else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon";
    } else {
        Reply = "It is night time";
    }
    
    document.getElementById("tod").innerHTML = Reply;
}