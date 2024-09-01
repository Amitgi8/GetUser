import React from 'react';
import { useNavigate } from 'react-router-dom';
import ShowUser from './ShowUser';

const Home = ({users}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/CreateUser');
  };

  return (
    <div className='flex h-screen'>
      <div className='space-x-4'>
        <button
          onClick={handleClick}
          className='m-10 rounded-full bg-blue-500 px-2 py-2 text-white  hover:bg-blue-600 transition-colors'
        >
          Create User
        </button>
        <ShowUser users={users} />
      </div>
    </div>
  );
};

export default Home;
