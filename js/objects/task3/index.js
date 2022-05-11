//input: obj1, obj2
//output: boolean

//algo
//1. get keys, get values
//2. check keys length
//3. compare every key/value with .every method
//**  compare key/value with .some method, is some not equal - false
//====================1 option=========================
// function compareObjects(obj1, obj2) {
//   console.log(JSON.stringify(obj1));
//   return JSON.stringify(obj1) === JSON.stringify(obj2);
// }

//===========================Mykola=========================
//Norm
// function compareObjects(obj1, obj2) {
//   const arr = Object.keys(obj1);

//   if (arr.length !== Object.keys(obj2).length) {
//     return false;
//   }

//   return arr.every(el => obj1[el] === obj2[el]);
// }

//=============================Vlad===========================
//Bad
// function compareObjects(obj1, obj2) {
//     const result = Object.keys({ ...obj1, ...obj2 });
//     if (Object.keys(obj1).length != Object.keys(obj2).length) {
//       return false;
//     }
//     return result.every(key => obj1[key] === obj2[key]);
//   }

//==============================Liza============================
//Bad
// function compareObjects(obj1, obj2) {
//   const keys1 = Object.keys(obj1);
//   const keys2 = Object.keys(obj2);

//   const values1 = Object.values(obj1);
//   const values2 = Object.values(obj2);

//   const isKeysEqual = keys1.every((value, index) => value === keys2[index]);
//   const isValueEqual = values1.every((value, index) => value === values2[index]);

//   if (!isKeysEqual || !isValueEqual || keys1.length !== keys2.length) {
//     return false;
//   }

//   return true;
// }

//========================Yaroslav Sh====================
//Bad
// function compareObjects(obj1, obj2) {
//   const firstArrKeyVal = [...Object.keys(obj1), ...Object.values(obj1)];
//   const secondArrKeyVal = [...Object.keys(obj2), ...Object.values(obj2)];

//   if (!(firstArrKeyVal.length === secondArrKeyVal.length)) {
//     return false;
//   }

//   return firstArrKeyVal.every((key, index) => key === secondArrKeyVal[index]);
// }

//========================Valerii==========================
//Bad
// function compareObjects(obj1, obj2) {
//   const keys = Object.keys(obj1);

//   if (keys.length !== Object.keys(obj2).length) {
//     return false;
//   }

//   for (let key of keys1) {
//     if (obj1[key] !== obj2[key]) {
//       return false;
//     }
//   }

//   return true;
// }

//=========================Ira==============================
//Bad
// function compareObjects(obj1, obj2) {
//   const keys1 = Object.keys(obj1);
//   const values1 = Object.values(obj1);
//   const keys2 = Object.keys(obj2);
//   const values2 = Object.values(obj2);

//   if (keys1.length !== keys2.length) {
//     return false;
//   }

//   return keys.every(key => obj1[key] === obj2[key]);
//   return keys1.every((key, index) => key === keys2[index] && values1[index] === values2[index]);
// }

//=========================Oleg===========================
//Norm
// function compareObjects(obj1, obj2) {
//   const key1 = Object.keys(obj1);
//   const key2 = Object.keys(obj2);

//   if (key1 !== key2) {
//     return false;
//   }
//   return keys.every(key => obj1[key] === obj2[key]);
//   return !keys.some(key => obj1[key] !== obj2[key]);
//   return key1.reduce((acc, key) => {
//     return acc && obj1[key] === obj2[key];
//   }, true);
// }

//======================Valentina=========================
//Bad
// function compareObjects(obj1, obj2) {
//   const prop1 = Object.entries(obj1);
//   const prop2 = Object.entries(obj2);

//    if (prop1.length !== prop2.length) {
//      return false;
//    }

//   return _.isEqual(obj1, obj2);
// }

//=====================Alexander========================
// V2
//Good
// function compareObjects(obj1, obj2) {
//   return Object.keys({ ...obj1, ...obj2 }).every(element => obj1[element] === obj2[element]);
// }

// V3
//Bad
// function compareObjects4(obj1, obj2) {
//   let arr = Object.entries(obj1).join() === Object.entries(obj2).join();
//   return arr;
// }

//========================Vitaliy=========================
//Bad
// function compareObjects(obj1, obj2) {
//   if (!(Object.keys(obj1).length === Object.keys(obj2).length)) {
//     return false;
//   }
//   const objFirstKeys = Object.keys(obj1);
//   const objSecondKeys = Object.keys(obj2);
//   const objFirstValues = Object.values(obj1);
//   const objSecondValues = Object.values(obj2);

//   return objFirstKeys.every(
//     (key, index) =>
//       (key === objSecondKeys[index]) === (objFirstValues[index] === objSecondValues[index]),
//   );
// }

//=====================Yaroslav S==========================
//Norm
// function compareObjects(obj1, obj2) {
//   return (
//     Object.keys(obj1).length === Object.keys(obj2).length &&
//     Object.keys(obj1).every(key => obj1[key] === obj2[key])
//   );
// }

//========================Good==========================
// function compareObjects(obj1, obj2) {
//   const keys = Object.keys(obj1);

//   if (keys.length !== Object.keys(obj2).length) {
//     return false;
//   }

//   return keys.every(key => obj1[key] === obj2[key]);
// }

//=====================Mikhail=======================
//Bad
// function compareObjects(obj1, obj2) {
//   const arr1 = Object.entries(obj1);
//   const arr2 = Object.entries(obj2);

//   if (arr1.length != arr2.length) {
//     return false;
//   }

//   return !arr1.some((arr, index) => arr[0] != arr2[index][0] || arr[1] != arr2[index][1]);
// }

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
  last: 15,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};
const obj5 = {
  name: 'Tom',
  age: 17,
  last: 15,
};

console.log(compareObjects(obj1, obj2)); // ==> false
console.log(compareObjects(obj2, obj3)); // ==> false
console.log(compareObjects(obj1, obj4)); // ==> false
console.log(compareObjects(obj1, obj5)); // ==> true
