const isPrime = (num) => {
    for (i = 2; i < num; i++) {
        if (!(num % i)) {           
           return false;         
       }         
   }
   return true;
}

console.log(isPrime(151));

