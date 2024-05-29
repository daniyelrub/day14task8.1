

const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialchars = ["%", "/", "*", "-", "+", "="];
let output = "";

const calculate = (btnValue) => {
  display.focus();
  if (btnValue === "=" && output !== "") {
    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && specialchars.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});

window.addEventListener("keydown", function (event) {
  const key = event.key;
  if (/\d/.test(key) || ['+', '-', '/', '*', '%', '^', '.'].includes(key)) {
    output += key;
  } else if (key === 'Enter') {
    calculate('=');
  } else {
    alert('Only numbers and operators are allowed!');
  }
  display.value = output;
});






