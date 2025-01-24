const caculatorDisplay = document.querySelector("h1");
const inputBtns = document.querySelectorAll("button");
const clearBtn = document.getElementById("clear-btn");

let firstValue = 0;
let operatorValue = "";
let awaitingNextValue = false;

function sendNumberValue(number) {
  if (awaitingNextValue) {
    caculatorDisplay.textContent = number;
    awaitingNextValue = false;
  } else {
    const displayValue = caculatorDisplay.textContent;
    caculatorDisplay.textContent =
      displayValue === "0" ? number : displayValue + number;
  }
}

function addDecimal() {
  if (awaitingNextValue) return;
  if (!caculatorDisplay.textContent.includes(".")) {
    caculatorDisplay.textContent = `${caculatorDisplay.textContent}.`;
  }
}

function useOperator(operator) {
  const currentValue = Number(caculatorDisplay.textContent);
  if (!firstValue) {
    firstValue = currentValue;
  } else {
  }
  awaitingNextValue = true;
  operatorValue = operator;
}

inputBtns.forEach((inputBtn) => {
  if (inputBtn.classList.length === 0) {
    inputBtn.addEventListener("click", () => {
      sendNumberValue(inputBtn.value);
    });
  } else if (inputBtn.classList.contains("operator")) {
    inputBtn.addEventListener("click", () => {
      useOperator(inputBtn.value);
    });
  } else if (inputBtn.classList.contains("decimal")) {
    inputBtn.addEventListener("click", () => {
      addDecimal();
    });
  }
});

function restAll() {
  firstValue = 0;
  operatorValue = "";
  awaitingNextValue = false;
  caculatorDisplay.textContent = "0";
}

clearBtn.addEventListener("click", restAll);
