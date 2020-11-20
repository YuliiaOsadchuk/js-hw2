let firstNumber = 0;
do {
    firstNumber = +prompt("Введіть перше ціле число");
} while (!(Number.isInteger(firstNumber)) || firstNumber === NaN);

let secondNumber = 0;
do {
    secondNumber = +prompt("Введіть друге ціле число");
} while (!(Number.isInteger(secondNumber)) || secondNumber === NaN)

const isCountEven = confirm("Рахувати парні числа?");

let sum = 0;
for (let i = firstNumber; i <= secondNumber; i++) {
    if (!isCountEven && (i % 2 === 0)) continue;
    sum += i;
}

console.log(sum);