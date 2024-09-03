'use strict';

const ack = (n, m) => {
   if (n === 0) {
    return m + 1;
   } else  if (m === 0) {
        return ack (n - 1, 1);
    } else   
    return ack(n - 1, ack (n, m - 1));
}
console.log(ack(2,4));