const a = +prompt("Введите число");
const b = +prompt("Введите второе число");

const findMin = (a,b) => {
    const min = a < b ? `${a} - минимальное` : `${b} - минимальное`;
    return min;
}


console.log(findMin(a,b));