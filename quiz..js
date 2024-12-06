document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let score = 0;
    const answers = {
        q1: 'Jupiter',
        q2: 'Mars',
        q3: 'Mercure'
    };

    for (let question in answers) {
        const selected = document.querySelector(`input[name="${question}"]:checked`);
        if (selected && selected.value === answers[question]) {
            score++;
        }
    }

    document.getElementById('result').innerText = `Votre score est ${score} sur ${Object.keys(answers).length}.`;
});