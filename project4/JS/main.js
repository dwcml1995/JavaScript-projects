function test_dict() { //function for a dictonairy with kvp for a vehicle 
    var Car = {
        Make:"Hyundai",
        Model:"Elantra",
        Color:"Blue",
        Type:"Sedan",
        Tank:"2L",   
    };
    delete Car.Make //removes kvp before being displayed
    document.getElementById("Dictionairy").innerHTML = Car.Make;
}