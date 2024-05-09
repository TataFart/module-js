const calculate = (sum, amount, promo) => {
    let finalSum = sum;
    if (amount > 10) {
        finalSum -= finalSum *0.03;
        console.log("1skidra"+finalSum);
    }

    if (finalSum > 30000) {
        finalSum = finalSum - (finalSum - 30000) * 0.15;       
    }

    if (promo === "METHED") {
        finalSum -= finalSum * 0.1;        
    }
    
    if (promo === "G3H2Z1") {
        if (finalSum > 2000) {
            finalSum -= 500;           
        }
    }

    return finalSum;
}

console.log(calculate(40000, 11));
console.log(calculate(40000, 11,'METHED'));
console.log(calculate(40000, 11,'G3H2Z1'));