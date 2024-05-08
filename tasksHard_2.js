let income = +prompt("Введите ваш доход");
let rest = income;
let tax = 0;


if (income > 50000) {
    rest = income - 50000;    
    tax = tax + rest * 0.3;   
    income = income - rest;
    console.log(rest);
    console.log(income);
    console.log(`Сумма налога на доход ${income} составила  ${tax}`);
    
}

if  (income > 15000) {
    rest =  income - 15000;    
    tax= tax + rest * 0.2;   
    rest = income - rest;   
    console.log(`Сумма налога на доход ${income} составила  ${tax}`);
  
}

if (income > 0) {
    tax = tax + rest * 0.13;
    console.log(`Сумма налога на доход ${income} составила  ${tax}`);
}







