// ЗНАКОМСТВО С МАССИВАМИ
// const friends = [`Mango`, `Kiwi`, `Poly`, `Ajax`];
// console.table(friends);

// friends[2] = `Mango`;
// console.table(friends);



// ПРИМИТИВЫ И СЛОЖНЫЕ ТИПЫ
// ----------ПЕРЕДАЧА ПО ЗНАЧЕНИЮ (СТРОКИ, ЧИСЛА, БУЛИ)------СОЗДАЕТСЯ КОПИЯ В ПЕРЕМЕННОЙ b
// let a = 10;
// let b = a;
// console.log(a);
// console.log(b);
// a = 20;
// console.log(a);
// console.log(b);

// ----------ПЕРЕДАЧА ПО ССЫЛКЕ (СЛОЖНЫЕ ТИПЫ)------СОЗДАЕТСЯ КОПИЯ ССЫЛКИ В ПЕРЕМЕННОЙ b
// const a = [2, 3, 4, 6];
// const b = a;
// console.table(a);
// console.table(b);
// a[1] = 10;
// console.table(a);
// console.table(b);



// ПЕРЕБОР (ИТЕРАЦИЯ) МАССИВА
// ------------------ЕСЛИ НАДО ИЗМЕНИТЬ ЭЛЕМЕНТ МАССИВА ПОЛЬЗУЕМСЯ FOR-------------
// const friends = [`Mango`, `Kiwi`, `Poly`, `Ajax`];
// console.table(friends);
// const lastIndex = friends.length -1;
// for(let i =0; i <= lastIndex; i +=1){
//     console.log(friends[i]);
// }
// -------ЕСЛИ НЕ НУЖЕН ИНДЕКС, И НЕ НАДО ИЗМЕНЯТЬ ЭЛЕМЕНТ МАССИВА ПОЛЬЗУЕМСЯ FOR.....OF-------------
// for (const variable of iterable) {};
            // variable - локальная пременная, доступная только внутри скобок
            // iterable - то, что перебераем
    // const friends = [`Mango`, `Kiwi`, `Poly`, `Ajax`];
    // console.table(friends);
    // for (const friend of friends) {
    // };



// BREAK ПРЕРЫВАЕТ ПОЛНОСТЬЮ ЦИКЛ
// если есть BREAK, то else не нужен