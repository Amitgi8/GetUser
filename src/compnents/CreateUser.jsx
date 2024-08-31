import React from 'react';

const Getuser = () => {
  return (
    <div>
      <h1 className='text-5xl font-bold'>Create User</h1>
      <form className="flex mt-[2%] flex-wrap m-5">
        <label className="w-1/2 p-2">
          Title:
          <select name="title" className="border w-full p-1">
            <option value="">Select</option>
            <option value="Mr">Mr.</option>
            <option value="Mrs">Mrs.</option>
          </select>
        </label>
        <label  className="w-1/2 p-2">
          First Name:
          <input name="firstName" type="text" placeholder='First Name'  className="border w-full p-1" />
        </label>
        <label className="w-1/2 p-2">
          Middle Name:
          <input name="middleName" type="text" placeholder='Middle Name' className="border w-full p-1" />
        </label>
        <label className="w-1/2 p-2">
          Last Name:
          <input name="lastName" type="text" placeholder='Last Name'  className="border w-full p-1" />
        </label>
        <label className="w-1/2 p-2">
          Email:
          <input name="email" type="email" placeholder='Email'  className="border w-full p-1" />
        </label>
        <label className="w-1/2 p-2">
          Phone Number:
          <input name="phone" type="tel" placeholder='123-456-7890' className="border w-full p-1" />
        </label>
        <button type="submit" className="mt-4 p-2 rounded-md hover:bg-blue-600 bg-blue-500 text-white">
          Add User
        </button>
        <button className="mt-4 p-2 rounded-md hover:bg-blue-600 bg-blue-500 text-white">
          Go Back
        </button>
      </form>
    </div>
  );
};

export default Getuser;
