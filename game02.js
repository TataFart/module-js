let a = prompt("Введите первое число");
let b = prompt("Введите второе число");
min = Math.min(a, b);
max = Math.max(a, b);

let secretNumber = Math.floor(Math.random() * (max - min + 1) + min);
const guessNums = [];

if(min === 50 && max === 100) {
    let attempts = 15;
} else {
    attempts = Math.round((max-min + 1) * 0.3);
}

let userNumber = prompt(`Компьютер загадал число от ${min} до ${max}. Попробуй угадать его. У тебя ${attempts} попыток`);

do { 
      
    if ( guessNums.includes(userNumber)) {
        userNumber = prompt("Это число вы уже вводили. Введите новое число");
    } else {
        guessNums.push(userNumber);
        attempts--;
        if (attempts === 0) {
            alert("Вы проиграли, попыток больше нет. В слдующий раз повезёт");
            break;
        }
       
        if (userNumber === null || userNumber === "") {
            alert("Чао")
        } else if(+userNumber === secretNumber) {
            alert(`В точку! Угаал!!! Ещё осталось ${attempts} попыток!!!`);
            break; 
        } else if (userNumber > secretNumber) {
        userNumber = prompt(`Загаданное число меньше, чем  ${userNumber}. Попробуйте ещё. У вас осталось ${attempts} попытки `)
       
        } else if (userNumber < secretNumber) {
        userNumber = prompt(`Загаданное число больше, чем  ${userNumber}. Попробуйте ещё.  У вас осталось ${attempts} попытки`)
        
        }     
      
        }
    } while (!(userNumber === null || userNumber === ""))


