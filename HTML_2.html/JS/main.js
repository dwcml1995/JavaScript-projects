function valForm() { //function to validate that the correct data is input into the form before it can submit
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
    alert("field must be filled out!");
    return false;
    }
    let y = document.forms["myForm"]["lname"].value;
    if (y == "") {
        alert("field must be filled out!")
        return false;
    }
    let z = document.forms["myForm"]["pnum"].value;
    if (isNaN(z) || z < 1 || z > 10) {
        alert("enter a valid number");
        return false;
    }
    return true;
}

function thisPlayer(player) {
    var playerTeam = player.getAttribute("data-player");
    alert(playerTeam + " is on " + player.innerHTML);
}