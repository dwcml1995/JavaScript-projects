function Ride_Function() { // ternary operator to return a result
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function myFunc() { //keyword assignment
    var otherRides = "Other rides for our visitors below 52cm, check them out!";
    document.getElementById("New_And_This").innerHTML = "We do have " + otherRides + "For anyone unable to ride the rollercoaster!";
}

function nestFunc() { // nested function
    document.getElementById("Nested_Function").innerHTML = test();
    function test() {
        var message = "This is a nested function";
        function test1() {
            return "This is an even more nested function";
        }
        var test1Message = test1();
        return message + "<br>" + test1Message;
    }
}