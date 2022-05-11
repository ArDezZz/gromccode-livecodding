const transactions = [5, 0, 8, 10, -4, 50, 220, 1203, 556, 41];
//
//input: callback, init acc (optional)
//output: accamulator (num)

//callback
//input: accamulator, el optional(index, array)
//output: new accamulator
const res = transactions.reduce((acc, element) => acc + element);
console.log(res);

// ===============
//input: arr, callback
//output: arr

//callback
//el
//boolean

//algo
//1: itterate arr
//2: apply callback to arr
//3: if true - push to res arr
const filterArrayElements = (arr, callback) => {
  const res = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (callback(arr[index])) {
      res.push(arr[index]);
    }
  }
  return res;
};
// test data
const callback = el => el > 1;
const array = [1, 2, 3, 4, 5, 6];

console.log(filterArrayElements(array, callback));

//test data by Prof. Andrey
const arr = ['Oleg', 'Andrey', 'Vitalii', 'Vlad', 'Yaroslav'];
const callback1 = el => el.includes('a');

console.log(filterArrayElements(arr, callback1));

// --------
function sum(a, b) {
  console.log(arguments);
}
console.log(sum(5, 9));
