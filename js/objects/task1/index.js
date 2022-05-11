//Добавление свойств в объект
//input: obj, string, any
//output: obj

//===========================1 option==========================
// function addPropertyV1(obj, key, value) {
//   obj[key] = value;
//   return obj;
// }

//===========================2 option==========================
// function addPropertyV2(obj, key, value) {
//   //input: obj1 (в который мы записываем), obj2,obj3....
//   //output: obj
//   return Object.assign(obj, { [key]: value });
// }

//===========================3 option==========================
// function addPropertyV31(obj, key, value) {
//   const copyObj = { ...obj };
//   return Object.assign(copyObj, { [key]: value });
// }
// function addPropertyV32(obj, key, value) {
//   return Object.assign({}, obj, { [key]: value });
// }

//===========================4 option==========================
function addPropertyV4(obj, key, value) {
  return { ...obj, [key]: value };
}

// examples
const products = {
  value: 170,
  productName: 'Iphone',
  isFree: true,
};
console.log({ ...products });
// console.log(addPropertyV1(products, 'price', 250)); // ==> { value: 170, currency: 'USD' }
// console.log(addPropertyV2(products, 'price', 250));
// console.log(addPropertyV31(products, 'price', 250));
console.log(addPropertyV4(products, 'price', 250));

//rest operator
function sum(number, ...args) {
  console.log(args);
}
sum(1, 2, 3, 4, 5);

//...
