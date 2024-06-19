function calculate() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operator = document.getElementById("operator").value;
    let output = document.getElementById("output");
    let result;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;








                    case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                result = "Division by zero error.";
            } else {
                result = num1 / num2;
            }
            break;
        
    }

    output.innerHTML = result;
}
