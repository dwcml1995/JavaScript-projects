function getReceipt() {
    //initializes string to pass from function to function, growing line by line into a full receipt
    var text1="<h3>You Ordered:</h3>"; //string to show what was ordered
    var runningTotal = 0; //starts at 0 - will display cost
    var sizeTotal = 0; //tracks size 
    var sizeArray = document.getElementsByClassName("size"); //targets size class to create an array
    for (var i = 0; i < sizeArray.length; i++) { //loops through sizes, when the index of the checked size is met, the variable selected size will show the value and display what was ordered when calling text1 
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    } 
    //assigns a price to sizeTotal depending on size selected
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    }
    else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize+" = $"+sizeTotal+"0.00");
    console.log("size text1: "+text1);
    console.log("subtotal: $" +runningTotal+".00");
    //variables passed to each function
    getTopping(runningTotal,text1); //calls get topping with updated total and text
    getVeg(runningTotal, text1); //calls veggie toppings with updated total/text
};


//function to get toppings, will create an array and loop through to check which are selected, adds the selected toppings to the order and displays on the receipt 
function getTopping(runningTotal, text1) { 
    var toppingTotal = 0; //initializes at 0
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("Selected topping item: (" + toppingArray[j].value + ")");
            text1 += toppingArray[j].value + "<br>";
        }
    } 
    var toppingCount = selectedTopping.length; //total toppings, subtracts one for the free topping
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }

    //updates the running total, then added to topping total and displayed on screen with the order
    runningTotal = (runningTotal + toppingTotal);
    console.log("total selected topping items: " + toppingCount);
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+"0.00");
    console.log("topping text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+"0.00");
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal+".00"+"</strong></h3>";
}


//function to get veggie toppings, will create an array and loop through to check which are selected, adds the selected toppings to the order and displays on the receipt
function getVeg(runningTotal, text1) {
    var vegTotal = 0; //initializes @ 0 
    var selectedVeg = [];
    var vegArray = document.getElementsByClassName("toppings1");
    for (var z = 0; z < vegArray.length; z++) {
        if (vegArray[z].checked) {
            selectedVeg.push(vegArray[z].value);
            console.log("Selected topping item: (" + vegArray[z].value + ")");
            text1 += vegArray[z].value + "<br>";
        }
    }
    var vegCount = selectedVeg.length; //total veggie toppings, subtracts one for the free topping
    if (vegCount > 1) {
        vegTotal = (vegCount - 1);
    } else {
        vegTotal = 0;
    }

    //updates the running total, then added to veggie topping total and displayed on screen with the order
    runningTotal = (runningTotal + vegTotal);
        console.log("total selected veggie toppings: " + vegCount);
        console.log(vegCount+" topping - 1 free topping = "+"$"+vegTotal+"0.00");
        console.log("toppings text1: "+text1);
        console.log("Purchase Total: "+"$"+runningTotal+"0.00");
        document.getElementById("showText").innerHTML = text1;
        document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal+".00"+"</strong></h3>";
};

