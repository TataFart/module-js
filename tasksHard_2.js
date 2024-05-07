const income = +prompt("Введите ваш доход");
let rest = income;
tax = 0;

if (rest > 50000) {
    rest = income - 50000; 
    
    tax = tax + rest * 0.3;
    rest = income - rest;
    console.log(`Сумма налога на доход ${income} составила  ${tax}`);
    
}

if  (rest > 15000) {
    rest = income - 15000;
    tax= tax + rest * 0.2;
    rest = income - rest;
    console.log(`Сумма налога на доход ${income} составила  ${tax}`);
  
}

if (rest > 0) {
    tax = tax + rest * 0.13;
    console.log(`Сумма налога на доход ${income} составила  ${tax}`);
}







