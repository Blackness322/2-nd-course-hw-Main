//Задание 1
let a = 10;
alert(a);
a = 20;
alert(a);

//Задание 2
const releaseDate = 2007;
alert(releaseDate);

//задание 3
const jsCreatorName = "Brendan Eich";
alert(jsCreatorName);

//Задание 4
let num1 = 10;
let num2 = 2;
alert((num1 += num2));
alert((num1 -= num2));
alert((num1 *= num2));
alert((num1 /= num2));

//Задание 5
alert(num2 ** 5);

//Задание 6
a = 9;
let b = 2;
alert(a % b);

//Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num);

//Задание 8
let age = prompt("Сколько вам лет?");
alert(age);

//Задание 9
const user = {
  name: "John",
  age: 25,
  isAdmin: true,
};
//Задание 9.1
user["cityOfResidence"] = "Washington";

//Задание 9.2
user["age"] = 26;

//Задание 9.3
delete user["cityOfResidence"];

//Задание 9.4
let info = prompt("Что вы хотите узнать о пользователе?");
alert(user[info]);

//Задание 10
let userName = prompt("Как вас зовут?");
alert(userName + "!");
