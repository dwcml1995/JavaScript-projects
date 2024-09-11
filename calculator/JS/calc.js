//creating an object to keep track of values

const Calculator = {
    Display_Value: '0', //displays 0 on calc screen
    First_Operand: null, // holds first operand for expression
    Wait_Second_Operand: false, //checks whether second operand has been entered yet
    operator: null, //holds operator, set to null initially
};

//modifies values each time a button is clicked
function Input_Digit(digit) {
    const {Display_Value, Wait_Second_Operand } = Calculator;
    //checks if Wait_Second_Operand is true, then sets display value to selected digit
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        //overwrites display value with selected digit if display value is 0 - otherwise we will make it add on to it
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

//handles decimals 

function Input_Decimal(dot) {
    //ensures accidentally clicking decimal doesn't cause any sort of bugs
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        //we are saying that if display value doesn't include dot, then add it
        Calculator.Display_Value += dot;
    }
}

//handles operators
function Handle_Operator(Next_Operator) {
    const {First_Operand, Display_Value, operator} = Calculator;
    //converts selected operator key to current number, displays on screen to a number and stores result in first operand if it doesnt exist already
    const Value_of_Input = parseFloat(Display_Value); // checks if operator exists and if second operand is true - updates the operator and exits the function
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
}
if (First_Operand == null) {
    Calculator.First_Operand = Value_of_Input;
} else if (operator) //checks if operator exists 
{
 const Value_Now = First_Operand || 0;
 //if operator exists, property lookup is performed on  operator in perform calculation object and function that matches operator gets executed
 let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
 //added fixed amount of numbers after decimal points
 result = Number(result).toFixed (9);
 //removes any trailing zeros after decimal point
 result = (result *1).toString();
 Calculator.Display_Value = parseFloat(result);
 Calculator.First_Operand = parseFloat(result);
}
Calculator.Wait_Second_Operand = true;
Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};
function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

// updates calculator screen with contents of display value

function Update_Display() {
 //makes use of calculator-screen class to target input tag in html doc
 const display = document.querySelector('.calculator-screen');
 display.value = Calculator.Display_Value;
}

Update_Display();
//monitors button clicks

const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    //target variable is an obj that reps clicked element
    const { target } = event;
    //if element was clicked isnt button, exit func
    if (!target.matches('button')) {
        return;
    }
    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return
    }
    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    //ensures ac clears inputs from calc screen
    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display());
})
