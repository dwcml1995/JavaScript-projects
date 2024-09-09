function raidFunc() {
    var raidOutput;
    var raids = document.getElementById("raidChoice").value;
    var raidString = " is a good raid";
    var raidStr = " is a bad raid"
    switch(raids) {
        case "TOA":
            raidOutput = "Tombs of Amascut" + raidStr;
        break;
        case "COX":
            raidOutput = "Chambers of Xeric" + raidString;
        break;
        case "TOB":
            raidOutput = "Theatre of Blood" + raidString;
        break;
        default:
            raidOutput = "Please enter a raid exactly as written on the list";
    }
    document.getElementById("output").innerHTML = raidOutput;
}

function testing() {
    var z = document.getElementsByClassName("test");
    for (var i = 0; i < z.length; i++) {
    z[i].innerHTML = "CLICK ME";
    z[i].style.color = "blue";
    }
}

//body 

var canvas = document.getElementById("canvID");
var z = canvas.getContext("2d");
z.beginPath();
z.fillStyle = "RoyalBlue";
z.rect(300, 400, 400, 100);
z.fill();
z.closePath();

//wheels

z.beginPath();
z.fillStyle = "black";
z.arc(350, 500, 40, 0, 2 * Math.PI);
z.fill();
z.closePath();

z.beginPath();
z.fillStyle = "black";
z.arc(650, 500, 40, 0, 2 * Math.PI); 
z.fill();
z.closePath();

//cab 

z.beginPath();
z.fillStyle = "RoyalBlue";
z.rect(565, 320, 130, 80);
z.fill();
z.closePath();

//window
z.beginPath();
z.fillStyle = "SkyBlue";
z.rect(580, 330, 50, 40); 
z.fill();
z.closePath();

//door
z.beginPath();
z.fillStyle = "Grey"; 
z.rect(580, 375, 50, 80); 
z.fill();
z.closePath();


var gradient = z.createLinearGradient(0, 0, 0, 170);
gradient.addColorStop(0, 'lightblue'); 
gradient.addColorStop(1, 'FireBrick'); 
z.fillStyle = gradient;
z.fillRect(20,20,150,100); 
