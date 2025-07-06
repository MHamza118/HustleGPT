// Quiz state
let currentQuestion = 1;
const totalQuestions = 4;
const userAnswers = {
    budget: '',
    time: '',
    skills: [],
    type: ''
};

// Sample hustle recommendations based on user inputs
const hustleRecommendations = {
    // Budget: 0, Time: few, Skills: writing, Type: passive
    '0_few_writing_passive': [
        {
            title: "Freelance Blogging",
            description: "Write blog posts for businesses and earn passive income through affiliate marketing",
            earnings: "$500 - $3,000/month",
            difficulty: "Easy",
            image: "assets/images/blogging.jpg"
        },
        {
            title: "Content Writing",
            description: "Create content for websites and earn money per article",
            earnings: "$300 - $2,000/month",
            difficulty: "Easy",
            image: "assets/images/content-writing.jpg"
        }
    ],
    // Budget: 100, Time: part, Skills: design, Type: active
    '100_part_design_active': [
        {
            title: "Print on Demand",
            description: "Design and sell custom products with no inventory",
            earnings: "$1,000 - $5,000/month",
            difficulty: "Medium",
            image: "assets/images/pod.jpg"
        },
        {
            title: "Freelance Design",
            description: "Create logos, graphics, and designs for clients",
            earnings: "$1,500 - $4,000/month",
            difficulty: "Medium",
            image: "assets/images/design.jpg"
        }
    ],
    // Add more combinations as needed
};

// DOM Elements
const progressBar = document.getElementById('progressBar');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const quizForm = document.getElementById('hustleQuiz');
const resultsSection = document.getElementById('resultsSection');
const resultsGrid = document.getElementById('resultsGrid');
const retakeQuizBtn = document.getElementById('retakeQuiz');
const getDetailedGuideBtn = document.getElementById('getDetailedGuide');

// Update progress bar
function updateProgress() {
    const progress = (currentQuestion / totalQuestions) * 100;
    progressBar.style.width = `${progress}%`;

    // Update progress steps
    document.querySelectorAll('.step').forEach((step, index) => {
        const stepNumber = parseInt(step.getAttribute('data-step'));
        if (stepNumber <= currentQuestion) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });
}

// Show current question
function showQuestion(questionNumber) {
    document.querySelectorAll('.question').forEach(question => {
        question.classList.remove('active');
    });
    document.getElementById(`question${questionNumber}`).classList.add('active');

    // Update navigation buttons
    prevBtn.disabled = questionNumber === 1;
    nextBtn.textContent = questionNumber === totalQuestions ? 'Get Results' : 'Next';
}

// Save user answers
function saveAnswers() {
    const currentQuestionElement = document.querySelector('.question.active');
    const inputs = currentQuestionElement.querySelectorAll('input');

    inputs.forEach(input => {
        if (input.type === 'radio' && input.checked) {
            userAnswers[input.name] = input.value;
        } else if (input.type === 'checkbox' && input.checked) {
            if (!userAnswers[input.name]) {
                userAnswers[input.name] = [];
            }
            userAnswers[input.name].push(input.value);
        }
    });
}

// Generate recommendations based on user answers
function generateRecommendations() {
    const key = `${userAnswers.budget}_${userAnswers.time}_${userAnswers.skills[0]}_${userAnswers.type}`;
    const recommendations = hustleRecommendations[key] || [
        {
            title: "Dropshipping Business",
            description: "Start an e-commerce store without holding inventory",
            earnings: "$1,000 - $10,000/month",
            difficulty: "Medium",
            image: "assets/images/dropshipping.jpg"
        },
        {
            title: "Online Tutoring",
            description: "Teach subjects you're passionate about",
            earnings: "$1,000 - $4,000/month",
            difficulty: "Medium",
            image: "assets/images/tutoring.jpg"
        }
    ];

    return recommendations;
}

// Display recommendations
function displayRecommendations() {
    const recommendations = generateRecommendations();

    resultsGrid.innerHTML = recommendations.map(hustle => `
        <div class="result-card">
            <img src="${hustle.image}" alt="${hustle.title}">
            <h3>${hustle.title}</h3>
            <p>${hustle.description}</p>
            <div class="meta">
                <span>${hustle.earnings}</span>
                <span>${hustle.difficulty}</span>
            </div>
        </div>
    `).join('');
}

// Event Listeners
nextBtn.addEventListener('click', () => {
    if (currentQuestion < totalQuestions) {
        saveAnswers();
        currentQuestion++;
        updateProgress();
        showQuestion(currentQuestion);
    } else {
        saveAnswers();
        quizForm.style.display = 'none';
        resultsSection.style.display = 'block';
        displayRecommendations();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentQuestion > 1) {
        currentQuestion--;
        updateProgress();
        showQuestion(currentQuestion);
    }
});

retakeQuizBtn.addEventListener('click', () => {
    currentQuestion = 1;
    userAnswers.budget = '';
    userAnswers.time = '';
    userAnswers.skills = [];
    userAnswers.type = '';

    quizForm.style.display = 'block';
    resultsSection.style.display = 'none';
    updateProgress();
    showQuestion(currentQuestion);

    // Reset form
    quizForm.reset();
});

getDetailedGuideBtn.addEventListener('click', () => {
    // Redirect to detailed guide page or show modal
    alert('Detailed guide feature coming soon!');
});

// Initialize quiz
updateProgress();
showQuestion(currentQuestion);