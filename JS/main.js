function Call_Loop() { // function for a loop to start counting from 0-18
    var i = "";
    var x = 1;
    while (x < 19) {
        i += "<br>" + x;
        x++;
    }
    document.getElementById("loop").innerHTML = i;
}

function testLoop() {  //loop that prints the length of a string
    var z = "This is a string";
    var w = z.length;
    document.getElementById("test").innerHTML = w;
}


//loop that displays nhl players with 1500+ pts, first we have the array of names, then it will use content to initialize an empty string, y is the loops variable, the function will loop through the array and display each players name 
var players = ["Wayne Gretzky", "Jaromir Jagr", "Mark Messier", "Gordie Howe", "Ron Francis", "Marcel Dionne", "Steve Yzerman", "Mario Lemieux", "Joe Sakic", "Sidney Crosby", "Phil Esposito", "Raymond Bourque", "Alex Ovechkin", "Joe Thornton", "Mark Recchi", "Paul Coffey"];
var Content = "";
var y;
function forLoop() {
    Content = "";  
    for (y = 0; y < players.length; y++) {
        Content += players[y] + "<br>";
    }
    document.getElementById("players1").innerHTML = Content;
}

function arrayFunction() { // an array function to display elements 
    var testing1 = [];
    testing1[0] = "Alex Ovechkin";
    testing1[1] = "Nick Backstrom";
    testing1[2] = "TJ Oshie";
    testing1[3] = "Michael Kempny";
    testing1[4] = "John Carlson";
    testing1[5] = "Braden Holtby";
    var array1 = document.getElementById("array").innerHTML = "the starting goaltender in the lineup is " + testing1[5] + ".";
}

function constFunction() { // using const to create an object, added properties to values, changed the name of the weapon type + printed a string 
    const raidWep = {type:"twisted bow ", style:"ranged", raid:"chambers"};
    raidWep.owned = "no";
    raidWep.price = "1.7b";
    raidWep.type = "Scythe of vitur "
    document.getElementById("constant").innerHTML = "Do I own this item: " + raidWep.type + "unfortunately, " + raidWep.owned + ".";
}

function testLet () { // demonstrating the difference between var/let while having let in block scope
    var x = 25;
    document.write("<br>" + x)
    {
        let x = 44;
        document.write("<br>" + x)
    }
    document.write("<br>" + x)
}


function addTest() { // using return for an addition function 
    var x = 14;
    var y = 19;
    var z = x + y;
    document.getElementById("add1").innerHTML = "14 + 19 = " + z;
    return z;
}

let skates = { // created an object using let as keyword, with properties and method - then calling function and printing results 
    brand: "ccm ",
    model: "tacks ",
    size: "senior ",
    cost: "$1299.99 ",
    description : function() {
        return "The skates are made by " + this.brand + this.model + "cost " + this.cost + "for" + this.size;
    }
};
document.getElementById("skateTest").innerHTML = skates.description(); // break statement in a loop 

var skills = ["Herblore", "Farming", "Woodcutting", "Firemaking", "Fletching"]
var content = ""
function skillLoop() {
    for (let x = 0; x < skills.length; x++) {
        if (skills[x] === "Firemaking") {break; }
        content += skills[x] + "<br>";
    }
    document.getElementById("skill").innerHTML = content;
}

var skills1 = ["Mining", "Smithing", "Fishing", "Cooking", "Runecrafting"] // continue statement in a loop
var content1 = ""
function skillLoop1() {
for (let x = 0; x < skills1.length; x++) {
    if (skills1[x] === "Cooking") {continue; }
    content1 += skills1[x] + "<br>";
    }
    document.getElementById("content1").innerHTML = content1;
}