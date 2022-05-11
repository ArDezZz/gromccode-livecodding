function getSenseOfLife() {
    return 42;
}

// option1
const res = getSenseOfLife();
console.log(res);

// //option 2
// console.log(getSenseOfLIfe(55));

// function2
function getSquard(number) {
    return number * number;
}
console.log(getSquard(3));
// function3
function sum(firstNum, secondNum) {
    return firstNum + secondNum;
}
console.log(sum(3, 2));

const first = 8;
const second = 10;
console.log(sum(first, second));
// function4
function print(age) {
    console.log(`I am ${age} years old`);
    console.log(`Sense of life is ${getSenseOfLife()}`);
}
print(12);
// function arrow
// function1
// option1
const mult = (firstNum, secondNum) => firstNum * secondNum;
console.log(mult(2, 3));
// option2
// const mult = (firstNum, secondNum) => {
//     return firstNum * secondNum;
// };
// function2
const squareArrow = (num) => num * num;
// function3
const getMagicNumber = () => 17;