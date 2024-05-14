const isPrime = (num) => {
    let i = 2;
    do {       
        if ((num < 2) || !(num % i)   ) {           
            return false;         
           } 
           i++
    } while (i < num )
         
        return true;
    }


for( let x = -10, count = 0 ; x <= 100; x++ )
    if(isPrime(x)){
    console.log(`${++count}. ${x}`);
}
