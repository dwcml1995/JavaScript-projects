function Vehicle(Make, Model, Year, Color) { //function is an object constructor using this & new keywords
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year; 
    this.Vehicle_Color = Color;
}
    var Donavon = new Vehicle("Hyundai", "Elantra", 2017, "Blue");
    var Cora = new Vehicle("Acura", "ILX", 2017, "Red");
    var Kaytlyn = new Vehicle("Ford", "Fusion", 2010, "Aqua");
    function myFunction() {
        document.getElementById("Keywords_and_Constructors").innerHTML = 
        "Cora drives a " + Cora.Vehicle_Color + "-colored " + Cora.Vehicle_Model + " manufactured in " + Cora.Vehicle_Year;
    }