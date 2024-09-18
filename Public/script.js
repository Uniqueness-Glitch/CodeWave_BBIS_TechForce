// /public/script.js

document.getElementById('factorsForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const data = {
        Study_Habits: parseFloat(document.getElementById('study_habits').value),
        Social_Life: parseFloat(document.getElementById('social_life').value),
        Health: parseFloat(document.getElementById('health').value),
        Extracurricular: parseFloat(document.getElementById('extracurricular').value),
        Family_Support: parseFloat(document.getElementById('family_support').value),
        Course_Difficulty: parseFloat(document.getElementById('course_difficulty').value)
    };

    fetch('/calculate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        let probability = result.graduation_probability;
        let displayText = probability < 1 ? "The probability of graduating is less than 1%" 
                                          : `The probability of graduating is ${probability.toFixed(2)}%`;

        document.getElementById('result').innerText = displayText;
    })
    .catch(error => console.error('Error:', error));
});
