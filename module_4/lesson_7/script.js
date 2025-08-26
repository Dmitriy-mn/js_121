/**
 * Напиши скрипт, який для об'єкта user, послідовно:
 * - додає поле mood зі значенням 'happy'
 * - замінює значення hobby на 'skydiving'
 * - замінює значення premium на false
 * - виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of
 */


// const user = {
//     name: "Alice",
//     age: 20,
//     hobby: "js",
//     premium: true
// }

// const user2 = {
//     name: "Yura",
//     age: 30,
//     hobby: "js",
//     premium: true
// }

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// const keys = Object.keys(user);

// for(const key of keys) {
//     console.log(`${key}: ${user[key]}`)
// }

// function foo(obj) {
//     obj.mood = 'happy'; // user2.mood = "happy"
//     obj.hobby = 'skydiving'; // user2.hobby = 'skydiving'
//     obj.premium = false; // user2.premium = false

//     const keys = Object.keys(obj); // Object.keys(user)

//     for(const key of keys) {
//         console.log(`${key}: ${obj[key]}`)
//     }
// }

// foo(user);
// foo(user2);







/**
 * У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
 * підсумовування всіх зарплат і збережіть результат у змінній sum.
 * Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.
 */

// const salaries = {
//     alice: 130,
//     petya: 100,
//     yura: 160
// }

// function summa(obj) {
//     let sum = 0;

//     const values = Object.values(obj);
    
//     for(const value of values) {
//         sum += value;
//     }
//     return sum;
// }

// console.log(summa(salaries));






