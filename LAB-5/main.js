let display = document.getElementById("display");

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function addToMemory() {
  memory += parseFloat(display.value);
  clearDisplay();
}

function subtractFromMemory() {
  memory -= parseFloat(display.value);
  clearDisplay();
}

function recallMemory() {
  display.value += memory;
}

function clearMemory() {
  memory = 0;
}
