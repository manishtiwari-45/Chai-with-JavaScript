const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const h = parseFloat(document.querySelector('#height').value);
    const w = parseFloat(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    const feedback = document.querySelector('#feedback');

    // Clear previous results
    // results.textContent = '';
    // feedback.textContent = '';

    if (isNaN(h) || h <= 0) {
        results.textContent = `Height is not valid`;
    } else if (isNaN(w) || w <= 0) {
        results.textContent = `Weight is not valid`;
    } else {
        const bmi = (w / ((h * h) / 10000)).toFixed(2);
        results.innerHTML = `<span>Your BMI is: ${bmi}</span>`;

        const bmiVal = parseFloat(bmi);

        if (bmiVal < 18.6) {
            feedback.innerHTML = `You are underweight`;
        } else if (bmiVal >= 18.6 && bmiVal <= 24.9) {
            feedback.innerHTML = `You are in the normal range`;
        } else {
            feedback.innerHTML = `You are overweight`;
        }
    }
});
