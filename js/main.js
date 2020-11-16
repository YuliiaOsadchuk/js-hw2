let firstNumber = +prompt("Введіть перше ціле число");
let secondNumber = +prompt("Введіть друге ціле число");
const isFirstNumber = Number.isInteger(firstNumber);
const isSecondNumber = Number.isInteger(secondNumber);

const isCountEven = confirm("Рахувати парні числа?");

let sum = 0;
for (let i = firstNumber; i <= secondNumber; i++) {
    if (!isFirstNumber || !isSecondNumber) break;
    if (!isCountEven && (i % 2 === 0)) continue;
    sum += i;
}

console.log(sum);