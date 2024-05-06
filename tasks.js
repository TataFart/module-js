const rain = Math.random();

if (Math.round(rain) === 1) {
    console.log("Пошёл дождь. Возьмите зонт!");
} else {
    console.log("Дождя нет");
}

const examMath = +prompt("Введите кол-во баллов по математике");
const examRus = +prompt("Введите кол-во баллов по русскому языку");
const examInform = +prompt("Введите кол-во баллов по информатике");

if (examMath + examRus + examInform >= 265){
    console.log("Поздравляю, вы поступили на бюджет!");
    alert("Поздравляю, вы поступили на бюджет!");
 } else {
    console.log("Заплатят родители или иди служить");
 }

const sum = +prompt("Какую сумму хотите снять?");

if (sum % 100) {
    console.log("Введите сумму кратную 100");
} else {
    console.log("Насчитываем сумму, заберите деньги");
}