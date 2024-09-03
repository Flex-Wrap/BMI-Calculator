document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculate-btn');
    const clearBtn = document.getElementById('clear-btn');
    const weightInput = document.getElementById('weight-input');
    const heightInput = document.getElementById('height-input');
    const bmiResultLabel = document.getElementById('bmi-result-label');
    const conclusionLabel = document.getElementById('conclusion-label');
    const resultImg = document.getElementById('result-img');
    const resultDiv = document.getElementById('result-div');
    const calculatorDiv = document.getElementById('calculator-div');

    function showResultDiv(bmiCategory, imgSrc, backgroundColor) {
        conclusionLabel.textContent = bmiCategory;
        resultImg.src = imgSrc;
        resultDiv.style.backgroundColor = backgroundColor;
        resultDiv.style.visibility = 'visible';
        resultDiv.style.width = '70vw';
        resultDiv.style.height = 'auto';
        resultDiv.style.opacity = '1';
        calculatorDiv.style.visibility = 'hidden';
    }

    function resetResultDiv() {
        weightInput.value = '';
        heightInput.value = '';
        bmiResultLabel.textContent = '';
        resultImg.src = '';
        conclusionLabel.textContent = '';
        resultDiv.style.visibility = 'hidden';
        resultDiv.style.width = '0';
        resultDiv.style.height = '0';
        resultDiv.style.opacity = '0';
        calculatorDiv.style.visibility = 'visible';
        calculateBtn.disabled = true;
    }

    function validateInputs() {
        const weight = parseFloat(weightInput.value);
        const height = parseFloat(heightInput.value) / 100; // convert cm to meters
        if (weight >= 30 && height >= 1 && height <= 2.5) {
            calculateBtn.disabled = false;
        } else {
            calculateBtn.disabled = true;
        }
    }

    weightInput.addEventListener('input', validateInputs);
    heightInput.addEventListener('input', validateInputs);

    calculateBtn.addEventListener('click', function() {
        const weight = parseFloat(weightInput.value);
        const height = parseFloat(heightInput.value) / 100;
        const bmi = weight / (height * height);

        bmiResultLabel.textContent = `Your BMI: ${bmi.toFixed(2)}`;

        let bmiCategory = '', imgSrc = '', backgroundColor = '';
        if (bmi < 18.5) {
            bmiCategory = 'You are UNDERWEIGHT, eat more!';
            imgSrc = 'Resources/underweight.jpg';
            backgroundColor = 'rgba(255, 255, 0, 0.5)';
        } else if (bmi < 25) {
            bmiCategory = 'You have a PERFECT weight, but you are probably miserable';
            imgSrc = 'Resources/perfect.jpg';
            backgroundColor = 'rgba(0, 255, 0, 0.5)';
        } else if (bmi < 30) {
            bmiCategory = 'You are kinda CHUBBY, cut on the muffins';
            imgSrc = 'Resources/overweight.jpg';
            backgroundColor = 'rgba(255, 165, 0, 0.5)';
        } else {
            bmiCategory = 'You are a CHONKY one, make sure to establish dominance';
            imgSrc = 'Resources/overweight.jpg';
            backgroundColor = 'rgba(255, 0, 0, 0.5)';
        }

        showResultDiv(bmiCategory, imgSrc, backgroundColor);
    });

    clearBtn.addEventListener('click', resetResultDiv);

    // Initial state of the button
    calculateBtn.disabled = true;

    setTimeout(() => {
        calculatorDiv.classList.add('visible');
    }, 0);
});
