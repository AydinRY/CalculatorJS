const operator = prompt('Enter operator: ');
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));
let result;


switch (operator) {
    case '+':
        result = number1 + number2;
        break;
        case '-':
            result = number1 - number2;
            break;
            case '*':
                result = number1 * number2;
                break;
                case '/':
                    result = number1 / number2;
        break;
}

// if (operator == '+') {
//     result = number1 + number2;
// }
// else if (operator == '-') {
//     result = number1 - number2;
// }
// else if (operator == '*') {
//     result = number1 * number2;
// }
// else {
//     result = number1 / number2;
// }

console.log(`${number1} ${operator} ${number2} = ${result}`);

