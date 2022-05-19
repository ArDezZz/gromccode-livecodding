const formElem = document.querySelector('.login-form');

console.log(`form elem created`);

const serverUrl = `https://6272c6bfa6522e24ac3e537b.mockapi.io/v1/users`;

function createUserHandler(event) {
  event.preventDefault();
  console.log('test');

  //validate
  //read form

  const user = {
    email: 'Test@gmail.com',
    name: 'Vlad',
    password: '123',
  };

  console.log(JSON.stringify(user));

  //fetch
  //input: string, obj
  //output: promise
  const promise = fetch(serverUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  //then
  //input: callback, callback(optional)
  //output: promise

  //callback
  //input: result of prev promise
  //output: any - will be wrapped in the promise

  promise
    .then(res => {
      console.log('reponse is here');

      return res.json();
    })
    .then(body => {
      console.log('body is read');
      console.log(body);
    });
}
formElem.addEventListener('submit', createUserHandler);
