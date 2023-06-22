let operand1 = "";
let currentOperator = "";
let shouldClearDisplay = false;
let isOperatorEntered = false;
let isResultDisplayed = false;

addToDisplay = (value) => {
    if (shouldClearDisplay) {
        document.getElementById("result").value = "";
        shouldClearDisplay = false;
    }
    if (value >= 0 && value <= 9) {
        if (isResultDisplayed) {
            clearAfterResultDisplayed ();
            isResultDisplayed = false;
        }
        isOperatorEntered = false;
        if (document.getElementById("result").value === "0" && value === 0) {
        } else {
            document.getElementById("result").value += value;
        }
    } else if (value === ".") { //проверка, является ли введенное значение точкой
        if (document.getElementById("result").value.indexOf('.') === -1) {
            document.getElementById("result").value += ".";
        }
    }
    if (value === "+" || value === "-" || value === "*" || value === "/") {
        if (isResultDisplayed) {
            clearAfterResultDisplayed ();
            isResultDisplayed = false;
        }
        if (isOperatorEntered) {
            currentOperator = value;
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
        document.getElementById("result").value = "нельзя делить на ноль";
        operand1 = "";
        currentOperator = "";
        shouldClearDisplay = true;
    }
}

calculate = () => {
    let operand2 = document.getElementById("result").value;

    if(operand2 === '') operand2 = operand1;
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
    isOperatorEntered = false;
    isResultDisplayed = true;
}

clearDisplay = () => {
    document.getElementById("result").value = "";
    operand1 = "";
    currentOperator = "";
    shouldClearDisplay = false;
    isOperatorEntered = false;
    isResultDisplayed = false;
}

clearAfterResultDisplayed = () => {
    currentOperator = "";
    shouldClearDisplay = false;
    isOperatorEntered = false;
    isResultDisplayed = false;
}