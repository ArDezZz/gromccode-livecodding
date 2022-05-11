// How to work on tech tasks. Step by step guide

// 1. Learn requirement
// 2. Create step by step algo (& input/output for functions)
// 3. Write draft solution & testing
// 4. Refactoring & final testing -> final solution

//algo
// 1. iterate numbers from 2 to num
// 2.check if prim
//2.1 iterate all numbers from 2 to index
//2.2 if index / secondIndex ===0 - not price
// 3.if prime - console

//if i dont know algo
//9
// 2==> 2/2 === 0 - true
// 3==> 3/2 ===1, 3===3==0 - true
// 4==> 4/2 === 0, 4/3==1, 4/4==0 - false

//input:num
//return:undefined
function gerPrimes(num) {
    for (let index = 2; index <= num; index += 1) {
        let isPrime = true;
        for (let secondIndex = 2; secondIndex < index; secondIndex += 1) {
            if (index % secondIndex === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(index);
        }
    }
}
//text data
gerPrimes(10);