/*
? Напишіть функцію each(array, callback), яка першим параметром очікує масив, а другим - функцію, яка застосовується до кожного елемента масиву.
? Функція each повинна повернути новий масив, елементами якого будуть результати виклику колбека.
*/

// function multi (number) {
//     return number * 21;
// }

// function each (array, callback) {
// let result = [];

// for (let i = 0; i < array.length; i +=1) {
//     const number = callback(array[i]);
//     console.log(number);
//     result.push(number);
// }

// return result;
// }

// const numbers = [1, 3, 4, 5];
// console.log(each (numbers,  (number) => number * 21));

// const vehicles = [
//     { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
//   { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
//   { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
//   { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
//   { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
//   { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
//   { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
//   { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
//   { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
// ]

//Реалізувати фільтр за якістю amount і отримати
// Тільки назва моделі

// const getAvailableCarNames = (vehicles, threshhold) => {
//     return vehicles.filter(({amount}) => amount > threshhold).map(({model}) => model);
// }

// console.table(getAvailableCarNames(vehicles, 12))

//Отримати машини на розпродажі і сортувати за зменшенням ціни

// const getCarsOnSale = (vehicles) => {
//     return vehicles.filter(vehicle => vehicle.onSale).sort((a,b) => a.price - b.price);
// }

// console.log(getCarsOnSale(vehicles));

// Призначити знижку 20% на фрукти в масиві,
//Присвоїти ID для кожного продукту

// const fruits = [
//   { name: "apple", price: 200 },
//   { name: "orange", price: 300 },
//   { name: "grapes", price: 750 },
// ];

// const sale = (fruits) => {
//   const newFruits = fruits.map((fruit) => ({
//     ...fruit,
//     id: Date.now(),
//     price: fruit.price * 0.8,
//   }));
//   console.log(newFruits);
// };

// sale(fruits);

// Дізнатись загальні роки практики в об'єкті workers

// const workers = [
//   { id: 10, name: "Mango", years: 14 },
//   { id: 2, name: "Poly", years: 19 },
//   { id: 41, name: "Ajax", years: 30 },
//   { id: 99, name: "Kiwi", years: 22 },
// ];

// const sum = (workers) => {
//   return workers.reduce(
//     (previousValue, worker) => (previousValue += worker.years),
//     0
//   );
// };

// console.log(sum(workers));
