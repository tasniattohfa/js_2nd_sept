// 1
function turnOn() {
    var imgElement = document.getElementById('img1');

    // Change the image source to the lit bulb image
    imgElement.src = 'images/bulbon.png';


}

function turnOff() {
    var imgElement = document.getElementById('img1');

    // Change the image source to the lit bulb image
    imgElement.src = 'images/bulboff.png';


}
// 2
function seeTimeDate() {

    document.getElementById("demo").textContent = Date();
}
// 3
function changeBackgroundColor() {

    const amountElement = document.getElementById('amount');

    const userInput = parseFloat(prompt("Enter a number"));

    if (!isNaN(userInput)) {
        amountElement.textContent = userInput;
        amountElement.style.backgroundColor = userInput >= 0 ? "green" : "red";
    }
    else {
        alert("Invalid input!!! Enter a valid one plz");
    }

}
// 4
function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;

    let result;

    switch (operator) {
        case "add":
            result = num1 + num2;
            break;

        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            if (num2 !== 0) {
                result = num1 / num2;
            }
            else {
                result = "cant divide by zero";
            }
            break;
        default:
            result: "invalid input";
    }

    document.getElementById('result').textContent = "Result: " + result;
}
// 5
// Generate a random number between 1 and 100

const randomNumber = Math.floor(Math.random() * 100) + 1;
// just checking
console.log(randomNumber);
let attempts = 1;

function checkGuess() {
    // Get the user's guess
    const userGuess = parseInt(document.getElementById('guessInput').value);
    // Check if the guess is correct
    if (userGuess === randomNumber) {
        document.getElementById('message').textContent = `Congratulations! You guessed the correct number in ${attempts} attempts.`;
        document.getElementById('message').style.color = "green";
        document.getElementById('guessInput').disabled = true;
    }
    else if (userGuess < randomNumber) {
        document.getElementById('message').textContent = "Try a higher value."
        document.getElementById('message').style.color = "red";
    }
    else {
        document.getElementById("message").textContent = "Try a lower value.";
        document.getElementById("message").style.color = "red";
    }

    // Increment the number of attempts
    attempts++;
}
