document.addEventListener("DOMContentLoaded", () => {
    const quizForm = document.getElementById("quizForm");
    const submitQuizButton = document.getElementById("submitQuiz");
    const quizResults = document.getElementById("quizResults");
    const scoreElement = document.getElementById("score");
    const correctAnswersElement = document.getElementById("correctAnswers");

    // Correct answers for the quiz
    const correctAnswers = {
        q1: "b", // Kotlin
        q2: "b", // O(log n)
        q3: "b", // CNN
        q4: "c", // Tracking changes in code
        q5: "a", // Continuous Integration/Continuous Deployment
        q6: "a", // Backpropagation
        q7: "c", // A model that performs well on training data but poorly on new data
        q8: "a", // Application Programming Interface
        q9: "b", // Decision Tree Classification
        q10: "d", // Relational
    };

    submitQuizButton.addEventListener("click", () => {
        let score = 0;
        const totalQuestions = Object.keys(correctAnswers).length;
        const userAnswers = new FormData(quizForm);
        const feedback = [];

        // Evaluate user answers
        for (const [question, correctAnswer] of Object.entries(correctAnswers)) {
            const userAnswer = userAnswers.get(question);

            if (userAnswer === correctAnswer) {
                score++;
            } else {
                feedback.push(
                    `<p><strong>Question ${question.slice(1)}:</strong> Correct answer is ${correctAnswer.toUpperCase()}</p>`
                );
            }
        }

        // Display results
        scoreElement.textContent = `You scored ${score} out of ${totalQuestions}.`;
        correctAnswersElement.innerHTML = feedback.join("");
        quizResults.style.display = "block";
    });
});


