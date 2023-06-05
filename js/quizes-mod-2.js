// СКРИПТ, ДЛЯ ПОДСЧЕТА ОБЩЕЙ СУММЫ ПОКУПОК В КОРЗИНЕ

// const cart = [54, 22, 76, 87, 32, 60, 100];
// // перебрать массив
// const lastIndex = cart.length -1;
// // сделать пременную тотал до цикла
// let total = 0;
// for(let i =0; i <= lastIndex; i +=1){
//     console.log(cart[i]);
//     //  каждій єлемент приплюсовать к тоталу
//     total += cart[i];
// }

// // --------ЛУЧШИЙ ВАРИАНТ-----
// for (const value of cart) {
//     total += value;
//     };
//     console.log(`Total`, total);




// СКРИПТ, ДЛЯ ПОДСЧЕТА СУММЫ ВСЕХ ЧЕТНЫХ ЧИСЕЛ В МАССИВЕ
// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// let total = 0;
// for (const number of numbers) {
//     if (number % 2 !== 0) {
//         continue;
//     }
//     total +=number;
//     };
// console.log(`Total`, total);



// СКРИПТ, ПОИСКА ЛОГИНА
// const logins = [`m4ngoDoge`, `k1widab3st`, `poly1scute`, `aj4xth3m4n`];
// const loginToFind = `poly1scute`;
// const message = logins.includes(loginToFind) 
// ? `Пользователь ${loginToFind} найден` 
// : `Пользователь ${loginToFind} не найден`;
// console.log(message);



// СКРИПТ, ПОИСКА САМОГО МАЛЕНЬКОГО ЧИСЛА В МАССИВЕ
// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallNumber = numbers[0];
// for (const number of numbers) {
//     if (smallNumber >  number) {
//         smallNumber = number;
//             }
//         };
// console.log(smallNumber);



// СКРИПТ, ПОИСКА САМОГО БОЛЬШОГО ЧИСЛА В МАССИВЕ
// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let bigNumber = numbers[0];
// for (const number of numbers) {
//     if (bigNumber <  number) {
//         bigNumber = number;
//             }
//         };
// console.log(bigNumber);



// СКРИПТ, КОТОРЫЙ ОБЪЕДИНЯЕТ ВСЕ ЭЛЕМЕНТЫ МАССИВА В ОДНОСТРОКОВОЕ ЗНАЧЕНИЕ
// лучше делать через join
// const friends = [`Mango`, `Kiwi`, `Poly`, `Ajax`];
// let string = ``;
// for (const friend of friends) {
//     string += friend + `,`;
// }
// string = string.slice(0, string.length - 1);
// console.log(string);




// СКРИПТ, КОТОРЫЙ ЗАМЕНЯЕТ РЕГИСТР КАЖДОГО СИМВОЛА В СТРОКЕ
// const string = `JavaScript`;
// // old school решение
// const letters = string.split(``);
// let invertedString = ``;
// console.log(letters);
// for (const letter of letters) {
//     // console.log(letter);
    
//     // if (letter === letter.toLowerCase()) {
//     //     invertedString += letter.toUpperCase();
//     // } else {
//     //     invertedString += letter.toLowerCase();
//     // }


//     const isEqual = letter === letter.toLowerCase();
//     invertedString += isEqual ? letter.toUpperCase() : letter.toLowerCase();
// }

// console.log("invertedString", invertedString);




// СКРИПТ, КОТОРЫЙ ДЕЛАЕТ SLUG В URL ИЗ НАЗВАНИЯ СТАТЬИ
// const title = `Top 10 benefits of React framework`;
// const normalizeTitle = title.toLowerCase().split(``).join(`-`);
// console.log(normalizeTitle);



// СКРИПТ, КОТОРЫЙ СЧИТАЕТ СУММУ ДВУХ МАССИВОВ
// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let sum = 0;

// const numbers = array1.concat(array2);
// for (const number of numbers) {
//     sum += number;
// }
// console.log(sum);