const randNums3 = (length, n, m, parity="") => {
  let min = Math.min(n, m);
  let max = Math.max(n,m);
  const arr = [];  
    for(let len = 0; len < length; len++ ){
      let random = Math.floor(Math.random() * (max - min + 1) + min);     
      switch(parity) {

        case 'odd':
          if (random %2) {
            arr.push(random);        
            } else {
                len--;
          }
          break;

        case 'even':  
          if (!(random %2 ) && random != 0) {
            arr.push(random);         
            } else {
            len--;
          }
          break;

        default:
          arr.push(random);          
      }           
    
    }
  return arr;
}



console.log(randNums3(20, 3, -12, "jj"));
console.log(randNums3(20, 22, -10, "even"));
console.log(randNums3(20, 5, -12, "odd"));

