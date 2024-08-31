import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateUser = ({ addUser }) => {
  const [inputValue, setInputValue] = useState({
    title: '',
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setInputValue({ ...inputValue, [event.target.name]: event.target.value });
  };

  const show = (event) => {
    event.preventDefault();
    addUser(inputValue);
    navigate('/ShowUser');
  };

  return (
    <div>
      <h1 className='text-5xl font-bold'>Create User</h1>
      <form onSubmit={show} className="flex mt-[2%] flex-wrap m-5">
        <label className="w-1/2 p-2">
          Title:
          <select value={inputValue.title} onChange={handleChange} name="title" className="border w-full p-1">
            <option value="">Select</option>
            <option value="Mr">Mr.</option>
            <option value="Mrs">Mrs.</option>
          </select>
        </label>
        <label className="w-1/2 p-2">
          First Name:
          <input name="firstName" value={inputValue.firstName} onChange={handleChange} placeholder='First Name' className="border w-full p-1" />
        </label>
        <label className="w-1/2 p-2">
          Middle Name:
          <input name="middleName" value={inputValue.middleName} onChange={handleChange} placeholder='Middle Name' className="border w-full p-1" />
        </label>
        <label className="w-1/2 p-2">
          Last Name:
          <input name="lastName" value={inputValue.lastName} onChange={handleChange} placeholder='Last Name' className="border w-full p-1" />
        </label>
        <label className="w-1/2 p-2">
          Email:
          <input name="email" value={inputValue.email} onChange={handleChange} type="email" placeholder='Email' className="border w-full p-1" />
        </label>
        <label className="w-1/2 p-2">
          Phone Number:
          <input name="phone" value={inputValue.phone} onChange={handleChange} type="tel" placeholder='123-456-7890' className="border w-full p-1" />
        </label>
        <button type="submit" className="mt-4 p-2 rounded-md hover:bg-blue-600 bg-blue-500 text-white">
          Add User
        </button>
        <button type="button" onClick={() => navigate(-1)} className="mt-4 p-2 rounded-md hover:bg-blue-600 bg-blue-500 text-white">
          Go Back
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
