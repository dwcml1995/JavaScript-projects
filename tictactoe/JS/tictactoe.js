let activePlayer = 'X'; // variable to keep track of whose turn it is 
let selectedSquares = [];  // array to store moves & determine winning squares

//function to place x or o in a given square
function placeXOrO(squareNumber) {
    //checks if square is already occupied
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //variable to hold html element of selected square
        let select = document.getElementById(squareNumber);
        //determines active player and places icon 
        if (activePlayer === 'X') {
            select.style.backgroundImage = 'url("img/x.png")';
    } else {
        select.style.backgroundImage = 'url("img/o.png")';
    }
    //adds square number and player to array
    selectedSquares.push(squareNumber + activePlayer);
    //calls function to check win conditions
    checkWinConditions();
    //changes active player
    if (activePlayer === 'X') {
        activePlayer = 'O';
    } else { 
        activePlayer = 'X'; 
    }
    //function to play placement sound
    audio('media/place.mp3.wav')
    //checks if its computers turn
    if (activePlayer === 'O') {
        disableClick();
        setTimeout(function () { computersTurn(); }, 1000);
    }
    //returning true is needed for the function for the computers turn
        return true;
    }
    function computersTurn() {
        let success = false;
        let pickASquare;
        while (!success) {
            pickASquare = String(Math.floor(Math.random() * 9));
            if (placeXOrO(pickASquare)) {
                placeXOrO(pickASquare);
                success = true;
            };
        }
    }
}


//function parses through array and checks a player has won, drawline will be called upon if a win condition has been met

function checkWinConditions() {
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 508) }
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) }
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 508) }
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) } // checks for a tie
    else if (selectedSquares.length >= 9) {
        Audio('media/tie.mp3.wav');
        setTimeout(function () { resetGame(); }, 500); //resets game after tie
    }
    function arrayIncludes(squareA, squareB, squareC) { //checks for win conditions 
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        if (a === true && b === true && c === true) {return true; }
    }
}

function resetGame() { // clears board to reset game
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i));
        square.style.backgroundImage = '';
    }
    selectedSquares = [];
}

function audio(audioURL) { //plays audio
    let audio = new Audio(audioURL);
    audio.play();
}

function drawWinLine(coordX1, coordY1, coordX2, coordY2) { //function to draw the line
    const canvas = document.getElementById('win-lines');
    const c = canvas.getContext('2d');
    let x1 = coordX1;
    y1 = coordY1;
    x2 = coordX2;
    y2 = coordY2;
    x = x1;
    y = y1;

    function animateLineDrawing() { //draws line with animation
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        c.clearRect(0, 0, 608, 608);
        c.beginPath();
        c.moveTo(x1, y1);
        c.lineTo(x, y);
        c.lineWidth = 10;
        c.strokeStyle = 'rgba (70, 255, 33, .8)';
        c.stroke();
        if (x1 <= x2 && y1 <= y2) {
            if (x < x2) { x += 10; }
            if (y < y2) { y += 10; }
            if (x >= x2 && y >= y2) {cancelAnimationFrame(animationLoop);}
        }
        if (x1< x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }

            }
        }

        function clear() { //clears board after drawline animation
            const animationLoop = requestAnimationFrame(clear);
            c.clearRect(0, 0, 608, 608);
            cancelAnimationFrame(animationLoop);
        }
        disableClick(); 
        audio('media/winGame.mp3.wav');
        animateLineDrawing();
        setTimeout(function () { clear(); resetGame(); }, 1000);
    }

function disableClick() { 
    body.style.pointerEvents = 'none';
    setTimeout(function () { body.style.pointerEvents = 'auto'; }, 1000);
}

