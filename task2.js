'use strict';

const arr = [];
    
const getArray = (arr) => {  

  if (arr.reduce((a, b)=> a + b, 0) < 50) {
   const number = Math.round(Math.random() * 10);
   arr.push(number);
   getArray(arr);
  } 
  
 return arr; 
}

console.log(getArray(arr));
