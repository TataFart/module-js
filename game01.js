

let secretNumber = Math.round(Math.random() * 100);
console.log(secretNumber);

let userNumber = prompt("Компьютер загадал число от 1 до 100. Попробуй угадать его");
if(userNumber === null || userNumber === ""){
    console.log("нуи не надо");
}

do {       
    if (userNumber === null || userNumber === "") {
        alert("Чао")
    } else if(+userNumber === secretNumber) {
        alert("В точку! Угаал!!!");
        break; 
    } else if (userNumber > secretNumber) {
     userNumber = prompt(`Загаданное число меньше, чем  ${userNumber}. Попробуйте ещё`)
     console.log(userNumber);
    } else if (userNumber < secretNumber) {
    userNumber = prompt(`Загаданное число больше, чем  ${userNumber}. Попробуйте ещё`)
    console.log(userNumber);
    } 
    }
 while (!(userNumber === null || userNumber === ""))
    console.log("цикл остановлен");

