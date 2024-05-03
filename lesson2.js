
const price =  +prompt("Введите стоимость товара");

if (!Number.isNaN(price) ){
    console.log( "Цена: ", price, ", тип данных:", typeof price);
} else {
    console.log("Вы ввели некорректные данные");
}


// if (parseInt(price) > 0 || parseInt(price) <= 0  ){
//     console.log( "Цена: ", price, ", тип данных:", typeof price);
// } else {
//     console.log("Вы ввели некорректные данные");
// }

