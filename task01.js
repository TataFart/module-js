
    
const randNums = (length) => (
    [...new Array(length)]
      .map(() => Math.round(Math.random() * 100))
  );



  console.log(randNums(3));