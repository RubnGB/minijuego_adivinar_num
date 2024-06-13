let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    const guess = document.getElementById('guess').value;
    const result = document.getElementById('result');
    if (guess == randomNumber) {
        result.textContent = "¡Felicidades! Adivinaste el número.";
    } else if (guess > randomNumber) {
        result.textContent = "Demasiado alto. Intenta de nuevo.";
    } else {
        result.textContent = "Demasiado bajo. Intenta de nuevo.";
    }
}