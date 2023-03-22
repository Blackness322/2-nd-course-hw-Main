// Задание 1

let retSmallerNumber = (a, b) => {
    if (a >= b) {
        return b;
    } else {
        return a;
    }
};

console.log(retSmallerNumber(8, 4));

//Задание 2

let retEvenOrOdd = (number) => {
    if (number % 2 == 0) {
        return console.log("Число чётное");
    } else {
        return console.log("Число нечётное");
    }
};

retEvenOrOdd(5);

//Задание 3.1

const findSquare = (a) => a * a;

console.log(findSquare(5));

//Задание 3.2

const returnSquare = (b) => {
    return b * b;
};

console.log(returnSquare(6));

//Задание 4

("use strict");
let age = prompt("Сколько Вам лет?", 13);

if (age >= 13) {
    function printMessage() {
        console.log("Добро пожаловать!");
    }
} else if (age < 0) {
    function printMessage() {
        console.log("Вы ввели неправильное значение!");
    }
} else {
    function printMessage() {
        console.log("Привет, друг!");
    }
}

printMessage();

//Задание 5

const isNumValid = (a, b) => {
    if (!isNaN(a) && !isNaN(b)) {
        console.log(a * b);
    } else {
        console.log("Одно или оба значения не являются числом");
    }
};

isNumValid(5, 5);
isNumValid("five", 5);

//Задание 6

let userNum = prompt("Введите число");

const isNumValidCubed = (userNum) => {
    if (!isNaN(userNum)) {
        return(`${userNum} в кубе равняется ${userNum ** 3}`);
    } else {
        return(`Переданный параметр не является числом`);
    }
};

console.log(isNumValidCubed(userNum));

