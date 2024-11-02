const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubledNumbers = numbers.map(num => num * 2);
console.log("Doubled numbers:", doubledNumbers);

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log("Sum of numbers:", sum);
