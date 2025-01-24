const caculatorDisplay = document.querySelector("h1");
const inputBtns = document.querySelectorAll("button");
const clearBtn = document.getElementById("clear-btn");

function sendNumberValue(number) {
  const displayValue = caculatorDisplay.textContent;
  caculatorDisplay.textContent =
    displayValue === "0" ? number : displayValue + number;
}

function addDecimal() {
  if (!caculatorDisplay.textContent.includes(".")) {
    caculatorDisplay.textContent = `${caculatorDisplay.textContent}.`;
  }
}

inputBtns.forEach((inputBtn) => {
  if (inputBtn.classList.length === 0) {
    inputBtn.addEventListener("click", () => {
      sendNumberValue(inputBtn.value);
    });
  } else if (inputBtn.classList.contains("operator")) {
    inputBtn.addEventListener("click", () => {
      sendNumberValue(inputBtn.value);
    });
  } else if (inputBtn.classList.contains("decimal")) {
    inputBtn.addEventListener("click", () => {
      addDecimal();
    });
  }
});

function restAll() {
  caculatorDisplay.textContent = "0";
}

clearBtn.addEventListener("click", restAll);
