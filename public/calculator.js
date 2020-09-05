let runningTotal = 0;
let buffer = "0";
let previousOperator = null;
const screen = document.getElementById("screen");


document.querySelector(".calc-buttons").addEventListener("click", function(event) {
  buttonClick(event.target.innerText);
  console.log(event.target);
});

function buttonClick(value) {
  if (isNaN(parseFloat(value))) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
  rerender();
}

function handleNumber(value) {
  if (buffer === "0") {
    buffer = value;
  } else {
    buffer += value;
  }
}

function handleSymbol(value) {
  switch (value) {
    case "C":
      buffer = "0";
      runningTotal = 0;
      previousOperator = null;
      break;
    case "=":
      if (previousOperator === null) {
        backToZero();
      }
      flushOperation(parseFloat(buffer));
      previousOperator = null;
      buffer = "" + runningTotal;
      runningTotal = 0;
      break;
    case "<":
      if (buffer.length === 1) {
        buffer = "0";
      } else {
        buffer = buffer.substring(0, buffer.length - 1);
      } break;
    case ".":
      addDecimal();
      break;
    default:
      handleMath(value);
      break;
  }
}

function handleMath(value) {
  const intBuffer = parseFloat(buffer);
  if (runningTotal === 0) {
    runningTotal = intBuffer;
  } else {
    flushOperation(intBuffer);
  }

  previousOperator = value;

  buffer = "0";
}

function flushOperation(intBuffer) {
  if (previousOperator === "+") {
    runningTotal += intBuffer;
  } else if (previousOperator === "-") {
    runningTotal -= intBuffer;
  } else if (previousOperator === "X") {
    runningTotal *= intBuffer;
  } else if (previousOperator === "/") {
    runningTotal /= intBuffer;
  }
}

function rerender() {
  screen.innerText = buffer;
}

function backToZero() {
  buffer = "0";
}

function addDecimal() {                
  if ( buffer.length === 0) {    
   buffer= "0.";
  } else if (previousOperator === "=") {
    backToZero();
  } else {  
      if ( buffer.indexOf(".") === -1) {
         buffer = buffer + ".";
    };   
  };
}