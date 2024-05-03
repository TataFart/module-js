const income = +prompt("Введите ваш доход");

switch (true) {
    case income < 15000:
        
        console.log(`Сумма налога на доход ${income} составила  ${income * 0.13}`);
        break;
    case  15000 <= income < 50000:
        console.log(`Сумма налога на доход ${income} составила ${income * 0.2}`);
        break;  
    case income > 50000:
        console.log(`Сумма налога на доход ${income} составила ${income * 0.3}`);
        break;  
}

  