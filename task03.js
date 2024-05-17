const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];
const addPrefix = (arr, addition) => {
  for (let i=0; i< arr.length; i++){
    arr[i] = addition + " " + arr[i];
  }
  return arr;

} 

console.log(addPrefix(names, "Mr"));