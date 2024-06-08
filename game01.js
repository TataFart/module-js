

let secretNumber = Math.round(Math.random() * 100);
console.log(secretNumber);
let userNumber = "";

do {
    userNumber = +prompt("Компьютер загадал число от 1 до 100. Попробуй угадать его");

    switch (true) {
        case userNumber === 0 :
            alert("Чао");
            break;
        case userNumber === secretNumber :
            alert("В точку! Угаал!!!"); 
            break;           
        case userNumber > secretNumber :
            alert(`Загаданное число меньше, чем  ${userNumber}`);
            break;
        case userNumber < secretNumber :
            alert(`Загаданное число больше, чем  ${userNumber}`);
            break;
        default:
            alert("Чао");               
    }     
}

while (!(userNumber === 0))  



