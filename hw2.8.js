// Задание 1

const arrOfNums = [1, 2, 3, 4];
const sumOfNums = arrOfNums.reduce((acc, number) => acc + number);
const multOfNums = arrOfNums.reduce((acc, number) => acc * number);
console.log(sumOfNums);
console.log(multOfNums);

//Задание 2

function compareUser(a, b) {
    return a.age - b.age;
    }

function sort(arr, compareFunction) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            const condition = compareFunction
                ? compareFunction(arr[i], arr[j]) > 0
                : arr[i].toString() > arr[j].toString();
            if (condition) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

const listUsers = [
    { name: 'Jon', age: 22 },
    { name: 'Richard', age: 18 },
    { name: 'Anton', age: 32 },
    { name: 'Lida', age: 23 },
    { name: 'Bob', age: 44 }
];
listUsers.sort(compareUser);
console.log(listUsers);

//Задание 3



function each(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}

// Переворачивание массива
let reversArr = (arr) => {
    return arr.reverse();
}

// Преобразование всех элементов к числу с удалением NaN
function toNumberArr(element, index, array) {
    const number = Number(element);
    if (!isNaN(number)) {
        array[index] = number;
    } else {
        array.splice(index, 1);
        // Уменьшаем индекс, чтобы не пропустить следующий элемент
        index--;
    }
}

const arr1 = [1, '4', 9, 'two'];
const reversedArr1 = reversArr(arr1);
console.log(reversedArr1); // ['two', 9, '4', 1]

const arr2 = [1, '4', false, 9, 'two'];
each(arr2, toNumberArr);
console.log(arr2); // [1, 4, 0, 9]




//Задание 4


function printCurrentDate() {
    const date = new Date();
    console.log(date);
}


const intervalId = setInterval(printCurrentDate, 3000);


setTimeout(() => {
    clearInterval(intervalId);
    console.log("30 секунд прошло");
}, 30000);


//Задание 5

function calling() {
    console.log('Звоню!');
}

function beeps() {
    setTimeout(() => {
        console.log('Идут гудки...');
        talk(); // вызываем функцию talk() после завершения задержки
    }, 1000);
}

function talk() {
    console.log('Разговор');
}

calling();
beeps();
