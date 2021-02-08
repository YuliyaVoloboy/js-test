"use strict";

/*  While Do-while For */

let num = 50;

/*
while (num < 55) {
    console.log(num);
    num++;
}
*/
/*
do {
    console.log(num);
    num++;
} 
while (num < 55);
*/

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        // break;
        continue;
    }
    console.log(i);
}


/*  If-else Switch */
/*
const num = 50;

if (num < 50) {
    console.log('Error');
} else if (num > 100) {
    console.log('Много');
} else {
    console.log('Ok');
}

if(4 == 9) {
    console.log('Ok!');
} else {
    console.log('Error');
}

(num == 50) ? console.log('Ok') : console.log('Error'); // тернарный оператор
*/

/*
const num = 49;

switch (num) {
    case 49:
        console.log('Неверно..');
        break;
    case 100:
        console.log('Неверно..');
        break;
    case 50:
        console.log('Вот теперь правильно!');
        break;
    default: 
        console.log('Не в этот раз..');
}
*/

let number = 5;
const leftBorderWidth = 1;

number = 10;

console.log(number);

const obj = {
    name: "Yulia",
    age: 41,
    happy: true,
};

//console.log(obj.age);

// получаем символ по имени
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// получаем имя по символу
//alert( Symbol.keyFor(sym) ); // name
//alert( Symbol.keyFor(sym2) ); // id

// ИНТЕРПОЛЯЦИЯ

let category = 'toys';

console.log(`https://someurl.com/${category}/5`);

const user = 'Иван';

alert(`Привет, ${user}`);

// ОПЕРАТОРЫ

let incr = 10,
    decr = 10;

console.log(incr++);
console.log(--decr);

console.log(5%2); // остаток

console.log(2*4 == '8'); //сравнение по значению - результат true
console.log(2*4 === '8'); //строгое сравнение - результат false
console.log(2*4 === 8); //строгое сравнение - результат true

const isChecked = false,
    isClose = true;

console.log(!isChecked && !isClose);
//console.log(isChecked || isClose);