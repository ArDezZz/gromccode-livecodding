'use strict';

//my bad
// function withdraw(clients, balances, client, amount) {
//   for (let i = 0; i < clients.length; i++) {
//     if (clients[i] === client && balances[i] >= amount) {
//       return (balances[i] -= amount);
//     }
//     if (clients[i] === client && balances[i] < amount) {
//       return -1;
//     }
//   }
// }

// Ira norm
// const withdraw = (clients, balances, client, amount) => {
//     const balance = balances[clients.indexOf(client)];
//     return balance > amount ? balance - amount : -1;
//   };

//vitalii - norm
// const withdraw = (clients, balances, client, amount) => {
//     const clientIndex = clients.indexOf(client);

//     if (amount > balances[indexClient]) {
//         return -1;
//     }
//     balances[clientIndex] -= amount;
//     return balances[indexClient] - amount;
// };
//test data
//   const users = ['ann', 'john']
//   const balances = [1400, 87, -6]
//   console.log(withdraw(users, balances, 'John', 50));
//   console.log(balances);

//bad Oleg
// function withdraw(clients, balances, client, amount) {
//   for (let i = 0; i < clients.length; i++) {
//     if (clients[i] === client && balances[i] >= amount) {
//       return (balances[i] -= amount);
//     } else if (clients[i] === client && balances[i] < amount) {
//       return -1;
//     }
//   }
// }

// Yaroslav norm
// const withdraw = (clients, balances, client, amount) => {
//   const indexClient = clients.indexOf(client);
//   return balances[indexClient] <= amount ? -1 : balances[indexClient] - amount;
// };

//Liza - norm
// function withdraw(clients, balances, client, amount) {
//   let index = clients.indexOf(client);

//   if (balances[index] >= amount) {
//     return -1;
//   }
//   return (balances[index] -= amount);
  
// }


//Alexandr bad
// const withdraw = (clients, balances, client, amount) => {
//   let result = 0;
//   clients.forEach(function (name, index) {
//     if (name.includes(client) && balances[index] >= amount) {
//       result = balances[index] - amount;
//     } else if (name.includes(client) && balances[index] < amount) {
//       result = -1;
//     }
//   });
//   return result;
// };
//good
function withdraw(clients, balances, client, amount) {
  //validate
}
