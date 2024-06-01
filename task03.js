const randNums3 = (length, n, m, parity) => {
  let min = Math.min(n, m);
  let max = Math.max(n,m);
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

  if (parity === "odd"){
    min = min + !(min % 2);
    max = max - !(max % 2);
    return  [...new Array(length)]
    .map(() =>min + random(0, (max - min) / 2) * 2)
    

  } else if (parity === "even"){
    min = min + (min % 2);
    max = max - (max % 2);
    return [...new Array(length)]
    .map(() => min + random(0, (max - min) / 2) * 2)
  }

 
}


console.log(randNums3(5, 3, -10, "even"));
console.log(randNums3(5, 3, -10, "odd"));