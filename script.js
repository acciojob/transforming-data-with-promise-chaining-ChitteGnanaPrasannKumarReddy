//your JS code here. If required.

const inputField = document.getElementById("ip");
const button = document.getElementById("btn");
const outputDiv = document.getElementById("output");


const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


const updateOutput = (message) => {
  const resultDiv = document.createElement("div");
  resultDiv.textContent = message;
  outputDiv.appendChild(resultDiv);
};


const processInput = () => {
  // Clear previous results
  outputDiv.innerHTML = "";

  const inputValue = parseFloat(inputField.value);

  if (isNaN(inputValue)) {
    updateOutput("Please enter a valid number.");
    return;
  }

  // Promise chain
  Promise.resolve()
    .then(() => delay(2000).then(() => {
      updateOutput(`Result: ${inputValue}`);
      return inputValue;
    }))
    .then((value) => delay(2000).then(() => {
      const result = value * 2;
      updateOutput(`Result: ${result}`);
      return result;
    }))
    .then((value) => delay(1000).then(() => {
      const result = value - 3;
      updateOutput(`Result: ${result}`);
      return result;
    }))
    .then((value) => delay(1000).then(() => {
      const result = value / 2;
      updateOutput(`Result: ${result}`);
      return result;
    }))
    .then((value) => delay(1000).then(() => {
      const result = value + 10;
      updateOutput(`Final Result: ${result}`);
    }))
    .catch((error) => {
      updateOutput(`Error: ${error.message}`);
    });
};


button.addEventListener("click", processInput);
