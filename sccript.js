/*
? Напишіть функцію each(array, callback), яка першим параметром очікує масив, а другим - функцію, яка застосовується до кожного елемента масиву.
? Функція each повинна повернути новий масив, елементами якого будуть результати виклику колбека.
*/

// function multi (number) {
//     return number * 21;
// } 

function each (array, callback) {
let result = [];

for (let i = 0; i < array.length; i +=1) {
    const number = callback(array[i]);
    console.log(number);
    result.push(number);
}

return result;
}


const numbers = [1, 3, 4, 5];
console.log(each (numbers,  (number) => number * 21));