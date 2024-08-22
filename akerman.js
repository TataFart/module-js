// A(0,n)=n+1
// A(m,0)=A(m−1,1)
// A(m,n)=A(m−1,A(m,n−1))

 const akkerman = (m, n) => {

    if (n === 0 && m === 0) {
      return 1;
    }
       else {
        if ( m === 0) {
        return  n + 1;
     }
        else if ( n === 0) {
        return akkerman(m-1, 1);
    
      } else {
        return akkerman(m-1, akkerman(m, n-1))
      }       
       }
  }

  console.log(akkerman(2,5));

  // это нормально, что когда значение m больше 5,
  //  то выходит ошибка о максимальном размере стека?
    
   

