// Snake script

// Get restart button
const restartButton = document.getElementById("restartButton");

// Set board height and width
const board = document.getElementById("board");
const context = board.getContext("2d");
let blockSize = 20;
let totalRow = 50;
let totalCol = 30;
board.height = totalCol * blockSize;
board.width = totalRow * blockSize;

// Set colors
let snakeColor = "#fff"
let appleColor = "#fff"

// Initialize the snake position, movement, and length
let snakeX = Math.floor(totalRow / 2);
let snakeY = Math.floor(totalCol / 2);
let speedX = 0;
let speedY = 0;
let length = 1;
let snakeBody = [];

// Apple condition and position
let apple = false;
let appleX, appleY;

// Point count
let points = 0;

// Time between each game tick
let gameTick = 120;

// Apple calculations function
function appleCals() {
    // Check if apple is already on the board
    if (apple) {
        // Redraw apple
        context.fillStyle = appleColor;
        context.fillRect(appleX * blockSize, appleY * blockSize, blockSize, blockSize);

        // Check if snake touches apple
        if (snakeX == appleX && snakeY == appleY) {
            // Remove apple from the board
            apple = false;

            // Add points
            points++;

            // Add length
            length++;

            // Update points
            document.getElementById("points").innerHTML = "points: " + points;

            // Check if point is the highest score
            if (localStorage.getItem("highscore")) {
                if (localStorage.getItem("highscore") < points) {
                    // Save points
                    localStorage.setItem("highscore", points);
                }
            }
            else {
                // Save points
                localStorage.setItem("highscore", points);
            }
        }
    }

    // Check if apple is on the board
    else {
        // Generate random apple location
        appleX = Math.floor(Math.random() * totalRow);
        appleY = Math.floor(Math.random() * totalCol);

        // Check apple location
        badApple = false; // is that a touhou reference >w< | its been 6 months yes its a damn touhou reference
        for (let i = 0; i < snakeBody.length; i++) {
            if (snakeBody[i].x == appleX && snakeBody[i].y == appleY || snakeX == appleX && snakeY == appleY) {
                badApple = true;
            }
        }
        if (badApple) {
            appleCals();
        }
        else {
            // Draw apple
            context.fillStyle = appleColor;
            context.fillRect(appleX * blockSize, appleY * blockSize, blockSize, blockSize);

            apple = true;
        }
    }
}

// Update game function
function update() {
    // Win detection
    if (snakeBody.length == totalRow * totalCol) {
        // Win message
        document.getElementById("gameOver").innerHTML = "you win, go touch grass.";

        // End the game
        clearInterval(updateLoop);
    }

    // Collision detection and game over
    if (snakeX >= totalRow || snakeX < 0 || snakeY >= totalCol || snakeY < 0) {
        // Game over message
        document.getElementById("gameOver").innerHTML = "game over, you collided with the wall. highscore: " + localStorage.getItem("highscore");

        // End the game
        clearInterval(updateLoop);
    }

    // Check for self-collision
    for (let i = 0; i < snakeBody.length; i++) {
        if (i !== 0 && snakeX === snakeBody[i].x && snakeY === snakeBody[i].y) {
            // Game over message
            document.getElementById("gameOver").innerHTML = "game over, you collided with yourself. highscore: " + localStorage.getItem("highscore");

            // End the game
            clearInterval(updateLoop);
        }
    }

    // Clear board
    context.clearRect(0, 0, board.width, board.height);

    // Apple calculations
    appleCals();

    // Update the snake"s position
    snakeX += speedX;
    snakeY += speedY;

    // Draw the snake
    context.fillStyle = snakeColor;
    context.fillRect(snakeX * blockSize, snakeY * blockSize, blockSize, blockSize);

    // Add a new segment to the front of the snake"s body array
    snakeBody.unshift({ x: snakeX, y: snakeY });

    // Remove the last segment if the snake"s length exceeds its actual length
    if (snakeBody.length > length) {
        snakeBody.pop();
    }

    // Draw the snake"s body
    for (let i = 0; i < length; i++) {
        context.fillStyle = snakeColor;
        context.fillRect(snakeBody[i].x * blockSize, snakeBody[i].y * blockSize, blockSize, blockSize);
    }
}

// Keys
document.addEventListener("keydown", (event) => {
    if (event.code == "ArrowUp" && speedY !== 1 || event.code == "KeyW" && speedY !== 1) {
        speedX = 0;
        speedY = -1;
    }
    else if (event.code == "ArrowDown" && speedY !== -1 || event.code == "KeyS" && speedY !== -1) {
        speedX = 0;
        speedY = 1;
    }
    else if (event.code == "ArrowLeft" && speedX !== 1 || event.code == "KeyA" && speedX !== 1) {
        speedX = -1;
        speedY = 0;
    }
    else if (event.code == "ArrowRight" && speedX !== -1 || event.code == "KeyD" && speedX !== -1) {
        speedX = 1;
        speedY = 0;
    }
});

// Call the update function repeatedly to move the snake
let updateLoop = setInterval(update, gameTick);