import React from 'react';

//input: obj({onLogout: callback})
//output: jsx
const Logout = ({ onLogout }) => {
  return (
    <button className="logout btn" onClick={onLogout}>
      Logout
    </button>
  );
};
export default Logout;
