import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './compnents/Home';
import CreateUser from './compnents/CreateUser';

const App = () => {
  const [userArray, setUserArray] = useState([]);

  const addUser = (user) => {
    setUserArray([...userArray, user]);
  };

  return (
    <Routes>
      <Route path='/' element={<Home users={userArray} />} />
      <Route path='/CreateUser' element={<CreateUser addUser={addUser} />} />
    </Routes>
  );
};

export default App;
