const product = prompt("Введите наименование товара");
const category = prompt("Введите категорию товара");
const price =  +prompt("Введите количество товара");
const amount =  +prompt("Введите стоимость товара");

console.log("Название продукта:" , product);
console.log("Категория:" , category, ", тип данных:", typeof category)
console.log( "Цена: ", price, ", тип данных:", typeof price);
console.log("Количество: ", amount, ", тип данных:", typeof amount);
console.log(`На складе находится ${amount} единиц товара "${product}" на общую сумму ${price * amount} тугриков` );