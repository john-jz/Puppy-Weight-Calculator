// script.js

// Function to calculate the estimated weight
function calculateWeight() {
  // Get input values from the form
  const breedSize = document.getElementById('breedSize').value;
  const initialWeight = parseFloat(document.getElementById('initialWeight').value);
  const age = parseInt(document.getElementById('age').value);

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

  // Calculate estimated weight
  const estimatedWeight = initialWeight + growthRate * age;

  // Display the result
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `<p>Estimated Weight at ${age} weeks: ${estimatedWeight.toFixed(2)} lbs</p>`;
}
