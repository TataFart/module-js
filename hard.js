const allCash = [
    [12, 4500], 
    [7, 3210], 
    [4, 650], 
    [3, 1250], 
    [9, 7830], 
    [1, 990], 
    [6, 13900], 
    [1, 370]
  ];
 

 const getAveragePriceGoods = (arr) => {
    let sumPrice = 0;
    for (let i = 0; i < arr.length; i++) {      
        sumPrice += (arr[i][1] / arr[i][0]);
    }
    return sumPrice / arr.length;   
 }

console.log("Средняя стоимость одного товара: ", getAveragePriceGoods(allCash));