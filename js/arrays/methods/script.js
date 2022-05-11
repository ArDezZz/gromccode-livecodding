//===================filter================
const anotherNumbersList = [5, 0, 8, 10, -4, 50, 220];

//input: func, obj (optional)
//output: arr

//input: num, index (optonal), arr(optional)
//output: boolean

//option1
// function filterCallback(num) {
//   console.log('filterCallback is called ' + num);
//   return num > 500;
// }

// const filterRes = anotherNumbersList.filter(filterCallback);
// console.log(filterRes);

//option2
// const filterRes = anotherNumbersList.filter(function (num) {
//   return num > 500;
// });
// console.log(filterRes);

//option3
const filterRes = anotherNumbersList.filter(num => num > 5);
console.log(filterRes);

//======================map===================
const numbersList = [5, 0, 8, 10, -4, 50, 220];

//input: function callback, obj
//output: arr

//callback
//input: element
//ouput: mod element
const mapRes = numbersList.map(el => {
  if (el < 0) {
    return 'number is negative';
  }
  return el * el;
});
console.log(mapRes);

//======================find=================
const numbersList1 = [5, 0, 8, 10, -4, 50, 220];

//input: function callback
//output: elem

//callback
//input:elem
//output:boolean

//option1
// const findRes = numbersList.find(el => {
//   if (el % 2 === 1) {
//     return true;
//   } else {
//     return false;
//   }
// });

// console.log(findRes);

//option2
const findRes = numbersList.find(el => el % 2 === 1);

console.log(findRes);

//================some==============
//input:function callback
//output: boolean

//=================forEach==============
//input: function callback
//output: undefiend

//callback
//input:el
//output:undefiend
numbersList.forEach(el => {
  if (el < 0) {
    console.log(el);
  }
});
