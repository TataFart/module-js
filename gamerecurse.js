
'use strict';


const gamebot = (secretNumber) =>{

    const  userNumber = prompt("Компьютер загадал число от 1 до 100. Попробуй угадать его");
   
    switch (true) {
        case userNumber === null:                  
                    break;
        case isNaN(+userNumber):
        case +userNumber < 1 :
        case +userNumber > 100 :        
                    alert("Некорректный ввод");
                    gamebot(secretNumber);   
                    break;      
        case userNumber > secretNumber :
                    alert(`Загаданное число меньше, чем  ${userNumber}`);
                    gamebot(secretNumber);  
                    break;                 
        case userNumber < secretNumber :
            alert(`Загаданное число больше, чем  ${userNumber}`);
            gamebot(secretNumber);   
            break;
        
        default:
                    alert("В точку! Угаал!!!"); 
                    console.log("fine");
                   break;
    }      
}

gamebot(Math.round(Math.random() * 100));

