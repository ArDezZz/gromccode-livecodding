'use strict';

/**
 * @param {string[]} keysList
 * @param {array} valuesList
 * @return {object}
 */

//ALGO:
//1.itterate array
//2.add key-value to the obj
//=====================1 option=============================
// function buildObject(keysList, valuesList) {
//   const resObj = {};
//   for (let index = 0; index < keysList.length; index += 1) {
//     resObj[keysList[index]] = valuesList[index];
//   }
//   return resObj;
// }

//=====================2 option=============================
// function buildObject(keysList, valuesList) {
//   return keysList.reduce((acc, key, index) => {
//     acc[key] = valuesList[index];
//     return acc;
//   }, {});
// }

//=====================3 option=============================
// function buildObject(keysList, valuesList) {
//   return keysList.reduce((acc, key, index) => {
//     return { ...acc, [key]: valuesList[index] };
//   }, {});
// }

//=====================4 option===========================
const buildObject = (keysList, valuesList) =>
  keysList.reduce((acc, key, index) => ({ ...acc, [key]: valuesList[index] }), {});

//if code doesn't work - split by steps

// examples
const keys = ['name', 'age'];
const values = ['Tom', '18'];
const result = buildObject(keys, values);
console.log(result);
