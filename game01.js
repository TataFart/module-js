

let secretNumber = Math.round(Math.random() * 100);
console.log(secretNumber);
let userNumber = "";
let game = true;


while (game){ 
    userNumber = prompt("Компьютер загадал число от 1 до 100. Попробуй угадать его");

    if (typeof userNumber === "object"){
        game = false;
        break;
    }

    switch (true) {
        case isNaN(+userNumber):
        case userNumber < 1 :
        case userNumber > 100 :        
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
                break; 
                  
    }     
}  console.log("конец");



