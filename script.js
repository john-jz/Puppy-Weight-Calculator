// script.js

// Function to calculate the estimated weight
function calculateWeight() {
  // Get input values from the form
  const breedSize = document.getElementById('breedSize').value;
  const initialWeight = parseFloat(document.getElementById('initialWeight').value);
  const age = parseInt(document.getElementById('age').value);

  // Check if all input fields are filled
  if (breedSize !== '' && !isNaN(initialWeight) && !isNaN(age)) {
    // Set growth rate based on breed size
    let growthRate;

    switch (breedSize) {
      case 'small':
        growthRate = 0.5;
        break;
      case 'medium':
        growthRate = 1;
        break;
      case 'large':
        growthRate = 1.5;
        break;
      default:
        break;
    }

    // Prevent Zero or Negative Logic Error
    if (initialWeight > 0.00 && age >= 0.00) {
      // Calculate estimated weight
      const estimatedWeight = initialWeight + growthRate * age;

      // Display the result
      const resultDiv = document.getElementById('result');
      resultDiv.innerHTML = `<p>Estimated Weight at ${age} weeks: <b>${estimatedWeight.toFixed(2)} lbs</p></b>`;
    }
    
    // Report Zero or Negative Logic Error
  else {    
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = "<p>Can't have negative weight or age nor zero weight 🐶</p>";
  }
  }
}

// Attach input event listeners to each input field
document.getElementById('breedSize').addEventListener('input', calculateWeight);
document.getElementById('initialWeight').addEventListener('input', calculateWeight);
document.getElementById('age').addEventListener('input', calculateWeight);