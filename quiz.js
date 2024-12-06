document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const answers = {
        question1: "Jupiter",
        question2: "8"
    };

    let score = 0;
    const formData = new FormData(event.target);

    for (const [question, answer] of formData.entries()) {
        if (answers[question] === answer) {
            score++;
        }
    }

    document.getElementById('quizForm').classList.add('hidden');
    const resultSection = document.getElementById('result');
    resultSection.classList.remove('hidden');

    const resultText = document.getElementById('resultText');
    resultText.textContent = `Vous avez obtenu ${score} sur 2 !`;
});

function restartQuiz() {
    document.getElementById('quizForm').reset();
    document.getElementById('quizForm').classList.remove('hidden');
    document.getElementById('result').classList.add('hidden');
}
