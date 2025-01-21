document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz-container');
    const questionContainer = document.getElementById('question-container');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const explanationDiv = document.getElementById('explanation');
    const nextBtn = document.getElementById('next-btn');
    const backBtn = document.getElementById('back-btn');
    const quizTitle = document.getElementById('quiz-title');
    
    let currentQuiz = null;
    let currentQuestionIndex = 0;
    let currentQuestions = [];
  
    // Add click event listeners to quiz links
    document.querySelectorAll('.quiz-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const quizType = e.target.dataset.quiz;
            startQuiz(quizType);
        });
    });
  
    function startQuiz(quizType) {
        currentQuiz = quizData[quizType];
        currentQuestions = currentQuiz.questions.basic;
        currentQuestionIndex = 0;
        
        // Show quiz container and hide category grid
        document.querySelector('.grid').classList.add('hidden');
        quizContainer.classList.remove('hidden');
        
        // Set quiz title
        quizTitle.textContent = currentQuiz.title + " Quiz";
        
        // Load first question
        loadQuestion();
    }
  
    function loadQuestion() {
        const question = currentQuestions[currentQuestionIndex];
        questionText.textContent = question.question;
        
        // Clear previous options
        optionsContainer.innerHTML = '';
        explanationDiv.classList.add('hidden');
        
        // Create new option elements
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.textContent = option;
            optionElement.addEventListener('click', () => checkAnswer(index));
            optionsContainer.appendChild(optionElement);
        });
        
        // Update next button state
        nextBtn.style.display = currentQuestionIndex < currentQuestions.length - 1 ? 'inline-block' : 'none';
    }
  
    function checkAnswer(selectedIndex) {
        const question = currentQuestions[currentQuestionIndex];
        const options = optionsContainer.children;
        
        // Disable all options
        Array.from(options).forEach(option => {
            option.style.pointerEvents = 'none';
        });
        
        // Show correct/incorrect
        options[selectedIndex].classList.add(
            selectedIndex === question.correctAnswer ? 'correct' : 'incorrect'
        );
        options[question.correctAnswer].classList.add('correct');
        
        // Show explanation
        explanationDiv.textContent = question.explanation;
        explanationDiv.classList.remove('hidden');
    }
  
    // Next question button
    nextBtn.addEventListener('click', () => {
        if (currentQuestionIndex < currentQuestions.length - 1) {
            currentQuestionIndex++;
            loadQuestion();
        }
    });
  
    // Back to categories button
    backBtn.addEventListener('click', () => {
        document.querySelector('.grid').classList.remove('hidden');
        quizContainer.classList.add('hidden');
        currentQuiz = null;
        currentQuestionIndex = 0;
    });
  });