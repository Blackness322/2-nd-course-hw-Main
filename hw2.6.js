//Задание 1

const numbs = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbs.length; i++) {
  if (numbs[i] == 0) break;
  console.log(numbs[i]);
}

//Задание 2

const nums = [1, 5, 4, 10, 0, 3];

nums.forEach((el, index) => {
  console.log(`${index}: ${el}`);
});

//Задание 3

let numbers = [1, 3, 5, 10, 20];

numbers = numbers.join(" ");
console.log(numbers);

//Задание 4

let arr4 = [];

for (let i = 0; i < 3; i++) {
  arr4[i] = [];

  for (let j = 1; j <= 3; j+=1) {
    arr4[i].push(1);
  }
}

console.log(arr4);

//Задание 5

const arrnum = [1, 1, 1];

arrnum.push(2, 2, 2);
console.log(arrnum);

//Задание 6

let arr6 = [9, 8, 7, "a", 6, 5];
console.log(arr6.filter(item => !isNaN(item)));

//Задание 7

let usernumb = prompt("Введите число");
const arr7 = [9, 8, 7, 6, 5];
let search = arr7.includes(Number(usernumb));
console.log(search);

//Задание 8

let letters = 'abcdef';
letters = letters.split('').reverse().join('')
console.log(letters);

//Задание 9

let arr9 = [[1, 2, 3,],[4, 5, 6]];
var result = [].concat(arr9[0],arr9[1]);
console.log(result);

//Задание 10

let arr10 = [4, 8, 1, 7, 2, 6];
let f = 0;
while (arr10[f + 1] !== undefined) {
  console.log(arr10[f] + arr10[f + 1]);
  f++;
}
console.log(arr10[f]);
