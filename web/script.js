<script>
    let answerColor;
    let attempts = 0;

    function generateRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    function startNewGame() {
        answerColor = generateRandomColor();
        document.getElementById('colorBox').style.backgroundColor = answerColor;
        document.getElementById('guessInput').value = '';
        attempts = 0;
        updateScore();
    }

    function updateScore() {
        document.getElementById('score').textContent = `Attempts: ${attempts}`;
    }

    function checkGuess() {
        const userGuess = document.getElementById('guessInput').value.toLowerCase();
        attempts++;

        if (userGuess === answerColor) {
            document.getElementById('colorBox').style.backgroundColor = answerColor;
            alert(`Congratulations! You guessed it right in ${attempts} attempts.`);
            startNewGame();
        } else {
            updateScore();
        }
    }

    document.getElementById('guessButton').addEventListener('click', checkGuess);

    // Start a new game when the page loads
    document.addEventListener('DOMContentLoaded', startNewGame);
</script>
