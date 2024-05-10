
const modifyStr = (string) => {
    string = string.toLowerCase();
    string = string.trim();   
    const formString = string[0].toUpperCase() + string.slice(1);
    return formString;
}

console.log(modifyStr("   hellO World From ME  "));