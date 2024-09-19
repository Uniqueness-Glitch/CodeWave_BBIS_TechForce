// Array of solutions with rich text formatting
const solutions = [
    {
        title: 'Improve Study Habits',
        content: `
            <h2>Improve Study Habits</h2>
            <p>Enhancing your study habits can greatly improve your academic performance. Here are some actionable tips:</p>
            <ul>
                <li><strong>Set a Schedule:</strong> Create a study timetable and stick to it.</li>
                <li><strong>Reduce Distractions:</strong> Find a quiet study space and turn off your phone.</li>
                <li><strong>Active Learning:</strong> Use techniques like summarizing, questioning, and self-testing.</li>
                <li><strong>Seek Help:</strong> Don’t hesitate to ask for help from peers or tutors if needed.</li>
            </ul>
            <p>For more detailed strategies, visit <a href="https://example.com/improve-study-habits" target="_blank">this guide on improving study habits</a>.</p>
        `,
    },
    {
        title: 'Enhance Health and Well-being',
        content: `
            <h2>Enhance Health and Well-being</h2>
            <p>Maintaining good health is crucial for academic success. Follow these tips to enhance your well-being:</p>
            <ol>
                <li><strong>Balanced Diet:</strong> Eat nutritious foods and stay hydrated.</li>
                <li><strong>Regular Exercise:</strong> Engage in physical activity to keep your body fit.</li>
                <li><strong>Sleep Well:</strong> Aim for 7-9 hours of sleep each night.</li>
                <li><strong>Stress Management:</strong> Practice relaxation techniques like meditation or yoga.</li>
            </ol>
            <p>Explore more health tips for students at <a href="https://example.com/health-tips" target="_blank">this resource</a>.</p>
        `,
    },
    {
        title: 'Strengthen Social and Family Support',
        content: `
            <h2>Strengthen Social and Family Support</h2>
            <p>Having a strong support system is beneficial for academic success. Here’s how to build and maintain it:</p>
            <ul>
                <li><strong>Communicate:</strong> Keep in touch with family and friends regularly.</li>
                <li><strong>Join Study Groups:</strong> Collaborate with peers for mutual support.</li>
                <li><strong>Seek Guidance:</strong> Share your concerns and seek advice from your support network.</li>
                <li><strong>Participate in Family Activities:</strong> Engage in family activities to strengthen bonds.</li>
            </ul>
            <p>Read more about building a strong support network <a href="https://example.com/support-network" target="_blank">here</a>.</p>
        `,
    },
    {
        title: 'Balance Extracurricular Activities',
        content: `
            <h2>Balance Extracurricular Activities</h2>
            <p>While extracurricular activities are important, balance them with your academic responsibilities:</p>
            <ol>
                <li><strong>Prioritize Tasks:</strong> List out your tasks and prioritize them based on deadlines.</li>
                <li><strong>Set Boundaries:</strong> Allocate specific times for extracurricular activities.</li>
                <li><strong>Time Management:</strong> Use tools like planners or apps to manage your schedule.</li>
                <li><strong>Evaluate Commitments:</strong> Regularly review and adjust your commitments as needed.</li>
            </ol>
            <p>Learn how to balance your activities efficiently <a href="https://example.com/balance-eca" target="_blank">here</a>.</p>
        `,
    },
    {
        title: 'Manage Course Difficulty',
        content: `
            <h2>Manage Course Difficulty</h2>
            <p>Handling challenging courses effectively can make a significant difference. Consider the following:</p>
            <ul>
                <li><strong>Additional Resources:</strong> Utilize resources such as tutoring and study groups.</li>
                <li><strong>Effective Study Techniques:</strong> Implement study strategies tailored for difficult subjects.</li>
                <li><strong>Ask for Help:</strong> Don’t hesitate to seek help from professors or academic advisors.</li>
                <li><strong>Stay Organized:</strong> Keep track of assignments and exam dates to avoid last-minute cramming.</li>
            </ul>
            <p>Check out these <a href="https://example.com/learning-strategies" target="_blank">effective learning strategies</a> for difficult subjects.</p>
        `,
    },
];

let currentSolutionIndex = 0; // Keep track of which solution is currently being displayed

// Function to update the content of the solutions based on currentSolutionIndex
function updateSolution() {
    const solutionContent = document.getElementById('solution-content');
    const solution = solutions[currentSolutionIndex]; // Get current solution

    // Inject solution title, description, and link into the HTML
    solutionContent.innerHTML = solution.content;

    // Display/Hide navigation buttons
    document.getElementById('prevBtn').style.display = currentSolutionIndex > 0 ? 'inline-block' : 'none';
    document.getElementById('nextBtn').style.display = currentSolutionIndex < solutions.length - 1 ? 'inline-block' : 'none';
}

// Previous button click listener
document.getElementById('prevBtn').addEventListener('click', function () {
    if (currentSolutionIndex > 0) {
        currentSolutionIndex--;
        updateSolution(); // Update to show the previous solution
    }
});

// Next button click listener
document.getElementById('nextBtn').addEventListener('click', function () {
    if (currentSolutionIndex < solutions.length - 1) {
        currentSolutionIndex++;
        updateSolution(); // Update to show the next solution
    }
});

// Back to Calculator button click listener
document.getElementById('backToCalculatorBtn').addEventListener('click', function () {
    window.location.href = 'calculator.html.html'; // Redirect to the main calculator page
});

// Initialize with the first solution
updateSolution();
