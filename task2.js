'use strict';

const arr = [];

function countSum(arr) {
  let sum = 0;
  arr.forEach(function(num){
      sum += num;
  })
  return sum;
};
    
const foo = (arr) => {
  const number = Math.round(Math.random() * 10);
  arr.push(number);

  if (countSum(arr) < 100) {
    foo(arr)
  } ; 

 return arr;
 
}

console.log(foo(arr));
