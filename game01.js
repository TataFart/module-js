let userNumber = "";
let game = true;

const secretNumber = Math.round(Math.random() * 100);

// while (userNumber !== nul  && +userNumber!== secretNumber)
while (game){ 
    userNumber = prompt("Компьютер загадал число от 1 до 100. Попробуй угадать его");


    switch (true) {
        case userNumber === null:
            game = false;
            break;
        case isNaN(+userNumber):
        case +userNumber < 1 :
        case +userNumber > 100 :        
            alert("Некорректный ввод");
            break;        

        case userNumber > secretNumber :
            alert(`Загаданное число меньше, чем  ${userNumber}`);
            break;
            
        case userNumber < secretNumber :
            alert(`Загаданное число больше, чем  ${userNumber}`);
            break;

        default:
            alert("В точку! Угаал!!!"); 
            game = false
                  
    }     
}  
console.log("конец");



