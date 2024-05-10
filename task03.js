const calculate = (sum, amount, promo) => {
    let finalSum = sum;
    if (amount > 10) {
        finalSum -= sum *0.03;      
    }

    if (sum > 30000) {
        finalSum -= (finalSum - 30000) * 0.15;       
    }

    if (promo === "METHED") {
        finalSum -= finalSum * 0.1;        
    }

    if (promo === "G3H2Z1" && finalSum > 2000 ) {        
        finalSum -= 500;       
    }

    return finalSum;
}

console.log(`Итоговая сумма покупки ${calculate(40000, 11)}`);
console.log(`Итоговая сумма покупки ${calculate(40000, 11, 'METHED')}`);
console.log(`Итоговая сумма покупки ${calculate(40000, 11, 'G3H2Z1')}`);