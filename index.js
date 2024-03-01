// EXAMPLE 1 - Filter an Array with Multiple Conditions in JavaScript

const people = [
  {name: 'Adam', age: 30},
  {name: 'Bob', age: 40},
  {name: 'Carl', age: 30},
];

const results = people.filter(element => {
  // 👇️ using AND (&&) operator
  return element.age === 30 && element.name === 'Carl';
});

// 👉️ [ {name: 'Carl', age: 30} ]
console.log(results);

// ------------------------------------------------------------------

// // EXAMPLE 2 - Filter an array with multiple conditions where only one has to be met

// const people = [
//   {name: 'Adam', age: 30},
//   {name: 'Bob', age: 40},
//   {name: 'Carl', age: 30},
// ];

// const results = people.filter(element => {
//   // 👇️ using OR (||) operator
//   return element.age === 40 || element.name === 'Carl';
// });

// // 👉️ [{name: 'Bob', age: 40}, {name: 'Carl', age: 30}]
// console.log(results);

// ------------------------------------------------------------------

// // EXAMPLE 3 - Explicitly returning `true` or `false` from `filter`

// // ✅ both conditions have to be true
// const people = [
//   {name: 'Adam', age: 30},
//   {name: 'Bob', age: 40},
//   {name: 'Carl', age: 30},
// ];

// const results = people.filter(element => {
//   if (element.age === 30 && element.name === 'Carl') {
//     return true;
//   }

//   return false;
// });

// // 👉️ [ {name: 'Carl', age: 30} ]
// console.log(results);

// ------------------------------------------------------------------

// // EXAMPLE 4 - Filter an array with multiple conditions with a dynamic filter

// const people = [
//   {name: 'Adam', age: 30, country: 'Austria'},
//   {name: 'Bob', age: 40, country: 'Belgium'},
//   {name: 'Carl', age: 30, country: 'Canada'},
//   {name: 'Adam', age: 40, country: 'Austria'},
// ];

// const conditions = {
//   name: 'Adam',
//   country: 'Austria',
// };

// const results = people.filter(person => {
//   return Object.keys(conditions).every(key => {
//     return conditions[key] === person[key];
//   });
// });

// // [
// //   { name: 'Adam', age: 30, country: 'Austria' },
// //   { name: 'Adam', age: 40, country: 'Austria' }
// // ]
// console.log(results);
