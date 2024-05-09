
const modifyStr = (string) => {
    let newString = string.toLowerCase();
    let firstLetter = string.charAt(0);
    let restString = string.slice(1);
    newString = firstLetter.toUpperCase() + restString.toLowerCase();
    return newString;
}

console.log(modifyStr("hello World"));