import React from 'react';
import UsersList from './UsersList';

const users = [
  { id: 'id-0', name: 'Tom', age: 21 },
  { id: 'id-1', name: 'Vov', age: 31 },
  { id: 'id-2', name: 'Bob', age: 121 },
  { id: 'id-3', name: 'Max', age: 11 },
  { id: 'id-4', name: 'Tomy', age: 18 },
  { id: 'id-5', name: 'Tomas', age: 21 },
  { id: 'id-6', name: 'Mike', age: 221 },
  { id: 'id-7', name: 'Toma', age: 21 },
];

const App = () => {
  return (
    <div>
      <UsersList users={users} />
    </div>
  );
};

export default App;
