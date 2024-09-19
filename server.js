const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const simulations = 2000;
const semesters = 8;
const graduation_gpa_threshold = 2.0;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from the 'public' folder

// Serve index1.html on the root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index1.html'));
});

// Serve calculator.html on a separate path
app.get('/calculator', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'calculator.html'));
});
// Function to simulate GPA for each semester
function simulateStudentGraduation(studentFactors) {
    let totalGpa = 0;
    for (let semester = 0; semester < semesters; semester++) {
        let studyHabits = Math.max(0, Math.min(1, studentFactors.Study_Habits + Math.random() * 0.1 - 0.05));
        let socialLife = Math.max(0, Math.min(1, studentFactors.Social_Life + Math.random() * 0.1 - 0.05));
        let health = Math.max(0, Math.min(1, studentFactors.Health + Math.random() * 0.1 - 0.05));
        let extracurricular = Math.max(0, Math.min(1, studentFactors.Extracurricular + Math.random() * 0.1 - 0.05));
        let familySupport = Math.max(0, Math.min(1, studentFactors.Family_Support + Math.random() * 0.1 - 0.05));
        let courseDifficulty = Math.max(0, Math.min(1, studentFactors.Course_Difficulty + Math.random() * 0.1 - 0.05));

        let semesterGpa = 3.0 * (studyHabits + health + familySupport) / 3.0 - 0.5 * courseDifficulty - 0.3*socialLife;
        semesterGpa = Math.max(0, Math.min(4, semesterGpa));

        totalGpa += semesterGpa;
    }

    let finalGpa = totalGpa / semesters;
    return finalGpa >= graduation_gpa_threshold ? 1 : 0;
}

// POST route to calculate graduation probability and give suggestions
app.post('/calculate', (req, res) => {
    const studentFactors = req.body;
    const results = Array.from({ length: simulations }, () => simulateStudentGraduation(studentFactors));
    const graduationProbability = (results.reduce((a, b) => a + b, 0) / simulations) * 100;

    res.json({ graduation_probability: graduationProbability, factors: studentFactors });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
