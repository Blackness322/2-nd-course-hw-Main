//hw-2.5.2
function findSeason() {
    let userNum = prompt("Введите номер месяца");
    if ((userNum <= 2 && userNum >= 1) || userNum == 12) {
        alert("Зима!");
    } else if (userNum >= 3 && userNum <= 5) {
        alert("Весна!");
    } else if (userNum > 5 && userNum <= 8) {
        alert("Лето!");
    } else if (userNum >= 9 && userNum < 12) {
        alert("Осень!");
    } else if (isNaN(userNum)) {
        alert("Введенные вами данные не являются числом");
    } else if (userNum > 12 || userNum < 1) {
        alert("Введите число от 1 до 12");
    } else {
        confirm("Вы хотите выйти из игры?");
    }
}
//hw-2.7.11
function fruitsGame(params) {
    let fruitsArray = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    fruitsArray = fruitsArray.sort(() => Math.random() - 0.5);
    alert('Запомните первый и последний элемент массива:' + '\n' + '\n' + fruitsArray);
    let firstFruit = fruitsArray[0].toLowerCase();
    let lastFruit = fruitsArray[fruitsArray.length - 1].toLowerCase();
    let firstFruitInput = (String(prompt('Чему равнялся первый элемент массива?'))).toLowerCase();
    let lastFruitInput = (String(prompt('Чему равнялся последний элемент массива?'))).toLowerCase();
    if (firstFruitInput === firstFruit && lastFruitInput === lastFruit) {
        alert('Вы угадали!');
    } else
        if (firstFruitInput === firstFruit || lastFruitInput === lastFruit) {
            alert('Вы были близки к победе!');
        } else {
            alert('Вы ошиблись!');
        }
}
