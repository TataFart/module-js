const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];
const addPrefix = (arr, addition) => {

  let newArray = names.map((name) => addition + " " + name);
  return newArray;

} 

console.log(addPrefix(names, "Mr"));