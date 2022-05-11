function sum(from, to, resolver) {
  let sum = 0;
  for (let index = from; index <= to; index += 1) {
    sum += index;
  }
  resolver(sum);
}

function printResult(res) {
  console.log('Result is ' + res);
}
sum(10, 16, printResult);

function alertResult(res) {
  alert('Result is ' + res);
}

sum(10, 16, alertResult);

function sendResult(res) {
  //sending email
}
