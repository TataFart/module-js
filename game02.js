let min, max;
const interval = [];

while (interval.length < 2 && interval[interval.length - 1] !== null) {
    const answer = prompt(`Введите ${!interval.length ? "первое" : "второе"} число`);
   

    if (!isNaN(answer) && answer !== "" && !interval.includes(answer)){
        interval.push(answer);
    }   
}

[min, max] = interval.sort((a,b) => +a - +b)


if (min !== null) {
    console.log(`"min :" ${min}, "max :" ${max}`);
}






// let a = prompt("Введите первое число");

// if (a === "" || a === null) {
//     while (a === "" || a === null) {
//         a = prompt("Введите первое число");}
// }

// let b = prompt("Введите второе число");

// if (b === "" || b === null) {
//     while (b === "" || b === null) {
//         b = prompt("Введите второе число");}
// }

// const min = Math.min(a, b);
// const max = Math.max(a, b);
// const guessNums = [];
// let secretNumber = Math.floor(Math.random() * (max - min + 1) + min);
// console.log(secretNumber);
// let userNumber = "";

// const checkNum = (userNumber) => {        
//     switch (true) {
//         case userNumber === 0 :
//             alert("Чао");
//             break;
//         case +userNumber === secretNumber :
//             alert("В точку! Угаал!!!"); 
//             game = 0;
//             break;           
//         case userNumber > secretNumber :
//             alert(`Загаданное число меньше, чем  ${userNumber}`);
//             break;
//         case userNumber < secretNumber :
//             alert(`Загаданное число больше, чем  ${userNumber}`);
//             break;
//         default:
//             alert("Чао");               
//     }     
// }

// if(min === 50 && max === 100) {
//     let attempts = 15;
// } else {
//     attempts = Math.round((max-min + 1) * 0.3);
// }

// while (attempts > 0) { 
//     let userNumber = prompt(`Компьютер загадал число от ${min} до ${max}. Попробуй угадать его. У тебя ${attempts} попыток`);  
    
//     if (userNumber === "") {        
//         while (userNumber === "") {
//             userNumber = prompt("Вы ввели пустую строку. Введите число");            
//         }       
//     }
  
//    if ( userNumber === null) {
//         attempts = 0;
//         console.log("stop");     
//    } else {
//         switch (true) {
//             case guessNums.includes(userNumber) :
//                 while (guessNums.includes(userNumber)) {                              
//                     userNumber = prompt("Это число вы уже вводили.Введите новое");    
//                     if (userNumber === "") {        
//                         while (userNumber === "") {
//                             userNumber = prompt("Вы ввели пустую строку. Введите число"); 
//                             if (guessNums.includes(userNumber)) {
//                                 while (guessNums.includes(userNumber)) {                              
//                                     userNumber = prompt("Это число вы уже вводили.Введите новое"); }
//                             }                                                   
//                         }
//                     }                         
//                 }               
//                 if (userNumber === null) {
//                     attempts = 0;
//                     console.log("stop");     
//                 } else { guessNums.push(userNumber);
//                     attempts--;  
//                     console.log(guessNums); 
//                     console.log(attempts); 
//                     checkNum(userNumber); }      
//                     break;

//             case !(guessNums.includes(userNumber)) :
//                 guessNums.push(userNumber);
//                 attempts--;  
//                 console.log(guessNums); 
//                 console.log(attempts); 
//                 checkNum(userNumber); 
//                 break;               

//             default:   
//             attempts = 0;
//             console.log("stop");  
//         }
//     }
// }
