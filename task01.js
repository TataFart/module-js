const convertEuroinRubl = (price) => {
    let resultPrice = price;
    resultPrice = resultPrice * 1.2 * 73;
    return resultPrice;    
    }

console.log(convertEuroinRubl(20));

