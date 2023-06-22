let operand1 = "";// переменная для хранения первого операнда
let currentOperator = "";// переменная для хранения текущего оператора
let shouldClearDisplay = false;// флаг, указывающий, нужно ли очистить дисплей перед следующим вводом
let isOperatorEntered = false;// флаг, указывающий, был ли уже введен оператор
let isResultDisplayed = false;// флаг, указывающий, был ли уже выведен результат на дисплей

addToDisplay = (value) => { // объявление функции addToDisplay с параметром value
    if (shouldClearDisplay) { // проверка, нужно ли очистить дисплей перед вводом нового значения
        document.getElementById("result").value = "";// очистка дисплея
        shouldClearDisplay = false;//установка флага shouldClearDisplay в false
    }
    if (value >= 0 && value <= 9) { //проверка, является ли введенное значение цифрой
        if (isResultDisplayed) { //проверка, был ли уже выведен результат на дисплей
            clearDisplay(); //вызов функции очистки дисплея
            isResultDisplayed = false; // установка флага isResultDisplayed в false
        }
        isOperatorEntered = false; //установка флага isOperatorEntered в false
        if (document.getElementById("result").value === "0" && value === 0) { //проверка, является ли текущее значение дисплея равным нулю и был ли введен ноль
        } else {
            document.getElementById("result").value += value; //добавление введенного значения на дисплей
        }
    } else if (value === ".") { //проверка, является ли введенное значение точкой
        if (document.getElementById("result").value.indexOf('.') === -1) { //проверка, есть ли уже точка на дисплее
            document.getElementById("result").value += "."; //добавление точки на дисплей
        }
    }
    if (value === "+" || value === "-" || value === "*" || value === "/") {// проверка, является ли введенное значение оператором
        if (isOperatorEntered) { //проверка, был ли уже введен оператор
            currentOperator = value;
            return; //выход из функции
        }
        isOperatorEntered = true; //установка флага isOperatorEntered в true
        if (operand1 === "") {// проверка, было ли уже введено первое число
            if (document.getElementById("result").value === "") { //проверка, является ли текущее значение дисплея пустым
                operand1 = 0; //установка значения первого операнда в 0
            } else {
                operand1 = document.getElementById("result").value; //установка значения первого операнда в текущее значение дисплея
            }
        }
        if (currentOperator != null) { //проверка, был ли уже выбран оператор
            calculate(); // вызов функции calculate для выполнения операции с двумя операндами и оператором
        }
        currentOperator = value; //установка значения текущего оператора
        shouldClearDisplay = true; // установка флага shouldClearDisplay в true, чтобы очистить дисплей перед вводом следующего значения
    }
    if (currentOperator === "/" && document.getElementById("result").value === "0") { //является ли текущее значение дисплея равным нулю при делении на ноль
        document.getElementById("result").value = "нельзя делить на ноль"; // вывод сообщения об ошибке на дисплей
        operand1 = ""; // очистка значения первого операнда
        currentOperator = ""; // очистка значения текущего оператора
        shouldClearDisplay = true; //установка флага shouldClearDisplay в true, чтобы очистить дисплей перед вводом следующего значения
    }
}

calculate = () => { //объявление функции calculate
    const operand2 = document.getElementById("result").value; //получение значения второго операнда из дисплея
    // объявление переменной для результата вычислений
    let result;
    switch (currentOperator) { //проверка значения текущего оператора
        case "+": //если оператор сложение
            result = parseFloat(operand1) + parseFloat(operand2); //выполнение операции сложения и сохранение результата в переменную result
            break; //выход из switch
        case "-":
            result = parseFloat(operand1) - parseFloat(operand2);
            break;
        case "*":
            result = parseFloat(operand1) * parseFloat(operand2);
            break;
        case "/":
            result = parseFloat(operand1) / parseFloat(operand2);
            break;
        default: //если оператор не является ни одним из вышеперечисленных
            return // выход из функции
    }

    document.getElementById("result").value = result.toString(); //вывод результата на дисплей
    operand1 = result.toString(); //сохранение результата в первый операнд
    currentOperator = ""; // очистка значения текущего оператора
    //shouldClearDisplay = false;// установка флага shouldClearDisplay в false, чтобы не очищать дисплей перед вводом следующего значения
    // isOperatorEntered = false;// установка флага isOperatorEntered в false
    isResultDisplayed = false;// установка флага isResultDisplayed в true, чтобы помнить, что результат уже был выведен на дисплей
}

clearDisplay = () => { // объявление функции clearDisplay для очистки дисплея
    document.getElementById("result").value = ""; // очистка дисплея
    operand1 = ""; // очистка значения первого операнда
    currentOperator = ""; //очистка значения текущего оператора
    shouldClearDisplay = false;
    isOperatorEntered = false; // установка флага isOperatorEntered в false
    isResultDisplayed = false; // установка флага isResultDisplayed в false
}
