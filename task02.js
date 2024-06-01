
    
const randNums1 = (length, n, m) => {
    
    let min = Math.min(n, m);
    let max = Math.max(n,m)
        return [...new Array(length)]
        .map(() => Math.floor(Math.random() * (max - min + 1) + min))
   
  }
 
 


  console.log(randNums1(5, 3, -5));