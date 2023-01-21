const correctAnswers = ["B", "B", "A", "A", "B"];
let form = document.querySelector(".quiz-form");
const resultContainer = document.querySelector('.result');
form.addEventListener("submit", notReload => {
    notReload.preventDefault(); //Avoid page reload on click submit
    let score = 0;
    const userAnswers = [
        form.q1.value,
        form.q2.value,
        form.q3.value,
        form.q4.value,
        form.q5.value
    ]
    // Check answer
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25;
        }
    });
    console.log(score)

    //  show score on page
    const div = document.querySelector(".div");
    let finalScore = document.querySelector(".score");
    // Delete class 'div' to display score
    div.classList.remove("div");
    //Display the result
    finalScore.textContent = `${score}%`;

})

