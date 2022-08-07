const billInput = document.getElementById("bill-input");
const buttonPercentages = document.querySelectorAll(".button-percentages > *");
const tipP = document.getElementById("tip");
const numberOfPeople = document.getElementById("number-of-people");
const totalP = document.getElementById("total");
const customPercentage = document.getElementById("custom-percantage");
const billWarning = document.getElementById("bill-warning");
const resetBtn = document.getElementById("reset-btn");

billWarning.style.display = "none";

let tipAmount = 0;
let totalAmount = 0;

function displayWarning() {
  if (!(billInput && billInput.value)) {
    billWarning.style.display = "block";
  } else {
    billWarning.style.display = "none";
  }
}

console.log(buttonPercentages);

function calculateTotalAmountAndTipAmount(percent) {
  if (billInput && billInput.value) {
    tipAmount =
      ((percent / 100) * billInput.value) / parseInt(numberOfPeople.value);
    tipP.innerText = tipAmount;
    totalAmount =
      (parseInt(billInput.value) + (percent / 100) * billInput.value) /
      parseInt(numberOfPeople.value);
    totalP.innerText = totalAmount;
  }
  displayWarning();
}

for (let i = 0; i < buttonPercentages.length; i++) {
  buttonPercentages[i].addEventListener("click", (e) => {
    const percentageNumber = parseInt(e.target.value.replace("%", ""));
    calculateTotalAmountAndTipAmount(percentageNumber);
    customPercentage.value = "";
  });
}

customPercentage.addEventListener("input", (e) => {
  calculateTotalAmountAndTipAmount(e.target.value);
});

resetBtn.addEventListener("click", () => {
  customPercentage.value = "";
  billInput.value = "";
  numberOfPeople.value = "1";
  customPercentage.value = "";
  tipP.innerText = "";
  totalP.innerText = "";
});
