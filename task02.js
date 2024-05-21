const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = arr => {

    return Math.floor(arr.reduce((currentSum, currentNumber) => (currentSum + currentNumber)) / arr.length);
}
console.log("Cредний чек за день:", getAverageValue(allCashbox));