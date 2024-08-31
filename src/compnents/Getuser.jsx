import React from 'react';

const Getuser = () => {
  return (
    <div>
      <nav>
      <h1 className='text-5xl font-bold'>Create User</h1>
      </nav>
      <div className='mt-[2%]'>
        <h2>User Information</h2>
        <div className="flex flex-wrap m-5">
        <label className="w-1/2 p-2">
              Title:
              <select id="title" className="border w-full p-1">
                <option value="Mr">Mr.</option>
                <option value="Mrs">Mrs.</option>
                <option value="Mrs">Other</option>
              </select>
            </label>
          <label className="block w-full">
            First Name:
            <input id="firstName" className="border w-full mb-2 p-1" type="text" />
          </label>

          <label className="block w-full">
            Middle Name:
            <input id="middleName" className="border w-full mb-2 p-1" type="text" />
          </label>

          <label className="block w-full">
            Last Name:
            <input id="lastName" className="border w-full mb-2 p-1" type="text" />
          </label>

          <label className="block w-full">
            Email:
            <input id="email" className="border w-full mb-2 p-1" type="email" />
          </label>

          <label className="block w-full">
            Phone Number:
            <input
              type="tel"
              id="phone"
              name="phone"
              className="border w-full mb-2 p-1"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="123-456-7890"
            />
          </label>

          <button className="mt-4 p-2 bg-blue-500 text-white" type="submit">
            Add User
          </button>
        </div>
      </div>
    </div>
  );
};

export default Getuser;
