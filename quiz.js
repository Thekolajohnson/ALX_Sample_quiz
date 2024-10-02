// Step 1: Define the function named checkAnswer
function checkAnswer() {
    // Step 2: Declare correctAnswer and assign the value "4"
    const correctAnswer = "4";

    // Step 3: Retrieve the user’s selected answer using document.querySelector
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Step 4: Check if the user selected an option
    if (selectedOption) {
        const userAnswer = selectedOption.value; // Get the value of the selected radio button

        // Step 5: Compare the user’s answer with the correct answer
        const feedback = document.getElementById("feedback");
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
        }
    } else {
        // If no option is selected, provide a message
        document.getElementById("feedback").textContent = "Please select an answer!";
    }
}

// Step 6: Add event listener to the "Submit Answer" button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
