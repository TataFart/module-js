const randNums3 = (length, n, m, parity="") => {
  const min = Math.min(n, m);
  const max = Math.max(n,m);
  const arr = [];  

  for (let len = 0; len < length; len++ ) {
    const random = Math.floor(Math.random() * (max - min + 1) + min);    
    
    if ((parity === "odd" && !(random % 2)) || (parity === 'even' && random % 2)) {
      len--;
    } else {
      arr.push(random)
    }    
  }    
  
  return arr;
}



console.log(randNums3(20, 3, -12,));
console.log(randNums3(20, 22, -10, "even"));
console.log(randNums3(20, 5, -12, "odd"));

