function Call_Loop() {
    var i = "";
    var x = 1;
    while (x < 19) {
        i += "<br>" + x;
        x++;
    }
    document.getElementById("loop").innerHTML = i;
}

function testLoop() {
    var z = "This is a string";
    var w = z.length;
    document.getElementById("test").innerHTML = w;
}

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

function arrayFunction() {
    var testing1 = [];
    testing1[0] = "Alex Ovechkin";
    testing1[1] = "Nick Backstrom";
    testing1[2] = "TJ Oshie";
    testing1[3] = "Michael Kempny";
    testing1[4] = "John Carlson";
    testing1[5] = "Braden Holtby";
    var array1 = document.getElementById("array").innerHTML = "the starting goaltender in the lineup is " + testing1[5] + ".";
}

function constFunction() {
    const raidWep = {type:"twisted bow ", style:"ranged", raid:"chambers"};
    raidWep.owned = "no";
    raidWep.price = "1.7b";
    raidWep.type = "Scythe of vitur "
    document.getElementById("constant").innerHTML = "Do I own this item: " + raidWep.type + "unfortunately, " + raidWep.owned + ".";
}

function testLet () {
    var x = 25;
    document.write("<br>" + x)
    {
        let x = 44;
        document.write("<br>" + x)
    }
    document.write("<br>" + x)
}


function addTest() {
    var x = 14;
    var y = 19;
    var z = x + y;
    document.getElementById("add1").innerHTML = "14 + 19 = " + z;
    return z;
}

let skates = {
    brand: "ccm ",
    model: "tacks ",
    size: "senior ",
    cost: "$1299.99 ",
    description : function() {
        return "The skates are made by " + this.brand + this.model + "cost " + this.cost + "for" + this.size;
    }
};
document.getElementById("skateTest").innerHTML = skates.description();

var skills = ["Herblore", "Farming", "Woodcutting", "Firemaking", "Fletching"]
var content = ""
function skillLoop() {
    for (let x = 0; x < skills.length; x++) {
        if (skills[x] === "Firemaking") {break; }
        content += skills[x] + "<br>";
    }
    document.getElementById("skill").innerHTML = content;
}

var skills1 = ["Mining", "Smithing", "Fishing", "Cooking", "Runecrafting"]
var content1 = ""
function skillLoop1() {
for (let x = 0; x < skills1.length; x++) {
    if (skills1[x] === "Cooking") {continue; }
    content1 += skills1[x] + "<br>";
    }
    document.getElementById("content1").innerHTML = content1;
}