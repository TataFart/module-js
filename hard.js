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


  const getAveragePriceGoods = (products) => products
    .reduce(([totalAmount, totalSum], [amount, sum]) => [
      totalAmount + amount,
      totalSum + sum
    ])
    .reduce((totalAmount, totalSum) => (totalSum/ totalAmount).toFixed(2))

    
  //  let sum = products.reduce((acc, curr) => {return (acc + curr[1]);}, 0);
  //  let amount = products.reduce((acc, curr) => {return (acc + curr[0]);}, 0);
   
  //  return Math.floor(sum / amount) 


    
   

console.log("Средняя стоимость одного товара: ", getAveragePriceGoods(allCash));