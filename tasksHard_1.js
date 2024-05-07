const income = +prompt("Введите ваш доход");


switch (true) {
   
   

    case income > 50000:
        console.log(`Сумма налога на доход ${income} составила ${income * 0.3}`);
        break; 
  

    case income > 15000:
        console.log(`Сумма налога на доход ${income} составила ${income * 0.2}`);
        break; 

    case income > 0:
        
        console.log(`Сумма налога на доход ${income} составила  ${income * 0.13}`);
        break;    
    
    default: 
            console.log(`Сумма налога на доход ${income} составила  0}`);
            break;
}

  