document.getElementById('factorsForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const studyHabits = parseFloat(document.getElementById('study_habits').value);
    const socialLife = parseFloat(document.getElementById('social_life').value);
    const health = parseFloat(document.getElementById('health').value);
    const extracurricular = parseFloat(document.getElementById('extracurricular').value);
    const familySupport = parseFloat(document.getElementById('family_support').value);
    const courseDifficulty = parseFloat(document.getElementById('course_difficulty').value);

    const studentFactors = {
        Study_Habits: studyHabits,
        Social_Life: socialLife,
        Health: health,
        Extracurricular: extracurricular,
        Family_Support: familySupport,
        Course_Difficulty: courseDifficulty
    };

    // script.js

    document.getElementById('back-to-home').addEventListener('click', function () {
        window.location.href = '/';
    });


    fetch('/calculate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(studentFactors),
    })
    .then(response => response.json())
    .then(data => {
        const graduationProbability = data.graduation_probability;

        // Display the result
        document.getElementById('result').innerHTML = `Your graduation probability is ${graduationProbability.toFixed(2)}%`;

        // Save the probability in localStorage for use in the solutions page
        localStorage.setItem('graduationProbability', graduationProbability);

        // Show the 'Show Solutions' button if the probability is less than 70%
        if (graduationProbability < 70) {
            document.getElementById('showSolutionsButton').style.display = 'block';
        }

        // Add event listener to the "Show Solutions" button to navigate to the solutions page
        document.getElementById('showSolutionsButton').addEventListener('click', function () {
            window.location.href = 'solutions.html';
        });

        
    })
    .catch(error => {
        console.error('Error:', error);
    });

});
