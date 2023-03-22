//Задание 1
let i = 1;

while (i <= 2) {
    console.log('Привет');
    i++;
}

//Задание 2
let f = 1;

while (f < 6) {
    console.log(f);
    f++;
}

//задание 3 
let c = 7;

while (c <= 22) {
    console.log(c);
    c++;
}

//Задание 4
const obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400'
};
for (let salary in obj) {
    console.log(`${salary} — зарплата ${obj[salary]} долларов`);
}
//Задание 5
let num = 0
for (let n = 1000; n > 50; n /= 2, num++) {
    console.log(num,n);
}

//Задание 6
for (let friday = 5; friday <= 31; friday += 7) {
    alert(`Сегодня пятница, ${friday}-е число. Необходимо подготовить отчёт.`);
}