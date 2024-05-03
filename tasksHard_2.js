const income = +prompt("Введите ваш доход");

switch (true) {

    case income < 15000:        
        console.log(`Сумма налога на доход ${income} составила  ${income * 0.13}`);
        break;

    case  income >= 15000 && income <= 50000:            
        console.log(`Сумма налога на доход ${income} составила ${(income - 15000)*0.2 + 15000*0.13}`);
        break;  

    case income1 > 50000:
        console.log(`Сумма налога на доход ${income} составила ${(income-50000) * 0.3 + 15000*0.13 + 35000*0.2}`);
        break;  
}

