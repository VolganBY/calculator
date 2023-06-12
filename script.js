let operand1 = "";
let currentOperator = "";
let shouldClearDisplay = false;
let isOperatorEntered = false;
function addToDisplay(value) {
    if (shouldClearDisplay) {
        document.getElementById("result").value = "";
        shouldClearDisplay = false;
    }
    if (value >= 0 && value <= 9) {
        isOperatorEntered = false;
        if (document.getElementById("result").value === "0" && value === 0) {
        } else {
            document.getElementById("result").value += value;
        }
    } else if (value === ".") {
        if (document.getElementById("result").value.indexOf('.') === -1) {
            document.getElementById("result").value += ".";
        }
    } else if (value === "+" || value === "-" || value === "*" || value === "/") {
        if (isOperatorEntered) {
            return;
        }
        isOperatorEntered = true;
        if (operand1 === "") {
            if (document.getElementById("result").value === "") {
                operand1 = 0;
            } else {
                operand1 = document.getElementById("result").value;
            }
        }
        if (currentOperator != null) {
            calculate();
        }
        currentOperator = value;
        shouldClearDisplay = true;
    }
    if (currentOperator === "/" && document.getElementById("result").value === "0") {
        document.getElementById("result").value = "Nelzya delit na nol";
        operand1 = "";
        currentOperator = "";
        shouldClearDisplay = true;
    }
}

function calculate() {
    const operand2 = document.getElementById("result").value;
    let result;
    switch (currentOperator) {
        case "+":
            result = parseFloat(operand1) + parseFloat(operand2);
            break;
        case "-":
            result = parseFloat(operand1) - parseFloat(operand2);
            break;
        case "*":
            result = parseFloat(operand1) * parseFloat(operand2);
            break;
        case "/":
            result = parseFloat(operand1) / parseFloat(operand2);
            break;
        default:
            return
    }

    document.getElementById("result").value = result.toString();
    operand1 = result.toString();
    currentOperator = "";
    shouldClearDisplay = false;
}

clearDisplay = () => {
    document.getElementById("result").value = "";
    operand1 = "";
    currentOperator = "";
}
