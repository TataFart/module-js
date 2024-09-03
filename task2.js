'use strict';

    
const getArray = (arr) => {  
  const newArr = [...arr];
  const number = Math.round(Math.random() * 10);
  newArr.push(number);

  if (newArr.reduce((a, b)=> a + b, 0) < 50) { 
    return getArray(newArr);
  } 
 return newArr; 
}

console.log(getArray([]));
