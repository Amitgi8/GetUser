import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/CreateUser');
  };

  const show = () => {
    navigate('/ShowUser');
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='space-x-4'>
        <button
          onClick={handleClick}
          className='rounded-md bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 transition-colors'
        >
          Create User
        </button>
        <button
          onClick={show}
          className='rounded-md bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 transition-colors'
        >
          Show User
        </button>
      </div>
    </div>
  );
};

export default Home;
