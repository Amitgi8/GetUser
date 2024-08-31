import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './compnents/Home';
import CreateUser from './compnents/CreateUser';
import ShowUser from './compnents/ShowUser';

const App = () => {
  const [userArray, setUserArray] = useState([]);

  const addUser = (user) => {
    setUserArray([...userArray, user]);
  };

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/CreateUser' element={<CreateUser addUser={addUser} />} />
      <Route path='/ShowUser' element={<ShowUser users={userArray} />} />
    </Routes>
  );
};

export default App;
