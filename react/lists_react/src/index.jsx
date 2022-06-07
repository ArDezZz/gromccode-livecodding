import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UsersList from './UsersList.jsx';

const rootElement = document.querySelector('#root');

const users = [
  //   { id: 3433, name: 'Tom', age: 20 },
  //   { id: 34132, name: 'Bob', age: 100 },
  //   { id: 3421, name: 'Rob', age: 32 },
  //   { id: 32234, name: 'Rim', age: 45 },
  //   { id: 3432, name: 'Skin', age: 27 },
  //   { id: 34234, name: 'Bobby', age: 26 },
  //   { id: 3453, name: 'Jack', age: 19 },
  //   { id: 34546, name: 'Bom', age: 21 },
  //   { id: 3445664, name: 'DOM', age: 22 },
  //   { id: 3445634, name: 'Toretto', age: 60 },
];

ReactDOM.render(<UsersList users={users} />, rootElement);
