import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/CreateUser');
  };
  const show= () => {
    navigate('/ShowUser');
  };
  return (
    <div className='flex justify-center  mt-[10%]'>
      <button onClick={handleClick}
      className='rounded-md bg-blue-500 '
      >Create user</button>

<button onClick={show}
      className='rounded-md bg-blue-500 '
      >Show User</button>
    </div>
  )
}
export default Home