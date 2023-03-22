//Задание 1

let str = 'js';
str = str.toUpperCase();
console.log(str);

//Задание 2

let resultArr = [];
function searchStart(arr, str) {
    arr.forEach(element => {
        if (element.toLowerCase().startsWith(str.toLowerCase())) {
            resultArr.push(element);
        }
    });
    console.log(resultArr);
}
searchStart(['Клан', 'Кран', 'Клад', 'Рог', 'Кладовщик'], 'Кла');

//Задание 3

let num = 32.58884;
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));

//Задание 4

let minNum = Math.min(52, 53, 49, 77, 21, 32);
let maxNum = Math.max(52, 53, 49, 77, 21, 32);
console.log(minNum, maxNum);

//Задание 5

function getRandomInt(minValue, maxValue) {
    return Math.random() * maxValue;
}

console.log(getRandomInt(1, 10));

//задание 6

let a = 10;
function randomNumbersArray(length = a / 2) {
    return Array.from(Array(length), () => Math.floor(Math.random() * a - 1) + 1);
}
const randomArr = randomNumbersArray();
console.log(randomArr);

//Задание 7

let seventhRandomValue = (maxValue, minValue) => {
    let seventhRandomResult = Math.round(Math.random() * (maxValue - minValue) + minValue);
    console.log(seventhRandomResult);
}
seventhRandomValue(Number(prompt('Введите любое число')), Number(prompt('Введите любое число, значение которого меньше, чем у первого числа')));

//Задание 8

let currentDate8 = new Date();
console.log(currentDate8);

//Задание 9

let currentDate = new Date("10 March 2023");
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

// Задание 10

let tenCurrentDate = new Date();
function dateOut(tenCurrentDate) {
    const days = [
        "Воскресенье",
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота",
    ];
    const months = [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
    ];
    let date =
        tenCurrentDate.getDate() +
        " " +
        months[tenCurrentDate.getMonth()] +
        " " +
        tenCurrentDate.getFullYear() +
        " " +
        days[tenCurrentDate.getDay()] +
        " " +
        tenCurrentDate.getHours() +
        ":" +
        tenCurrentDate.getMinutes() +
        ":" +
        tenCurrentDate.getSeconds();
    console.log(date);
}
dateOut(tenCurrentDate);
