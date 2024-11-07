import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { editContactData } from '../../Service/Action/contactAction';

const EditContact = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    // Access the contact from the location state
    const { contact } = location.state || {};

    const [fromdata, setFormData] = useState(contact || {
        fname: '',
        lname: '',
        company: '',
        jobtitle: '',
        email: '',
        phone: '',
        bday: '',
        bmonth: '',
        byear: '',
        notes: '',
    });

    // Update the form state when contact changes
    useEffect(() => {
        if (contact) {
            setFormData(contact);
        }
    }, [contact]);

    const handleFrom = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({ ...fromdata, [name]: value });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log(fromdata);
        
        // Pass the contact ID along with the updated data
        dispatch(editContactData(contact.id, fromdata));
        
        navigate('/');
    };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Create a New Contact</h2>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleUpdate}
      >
        <div className="flex gap-3 mb-5">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </label>
          <div className=" w-full">
            <div className="mb-4">
              <input
                type="text"
                id="firstName"
                name="fname"
                value={fromdata.fname}
                onChange={handleFrom}
                className="shadow appearance-none border-[1px] border-solid border-black rounded w-full block py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter Name"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="lastName"
                name="lname"
                value={fromdata.lname}
                onChange={handleFrom}
                className="shadow appearance-none border-[1px] border-solid border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter Last Name"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-3 mb-5">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="firstName"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
              />
            </svg>
          </label>
          <div className=" w-full">
            <div className="mb-4">
              <input
                type="text"
                id="company"
                name="company"
                value={fromdata.company}
                onChange={handleFrom}
                className="shadow appearance-none border-[1px] border-solid
                border-black rounded w-full py-2 px-3 text-gray-700 leading-tight
                focus:outline-none focus:shadow-outline"
                placeholder="Company"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="jobTitle"
                name="jobtitle"
                value={fromdata.jobtitle}
                onChange={handleFrom}
                className="shadow appearance-none border-[1px] border-solid border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Job Title"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-3 mb-5 items-center">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="firstName"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </label>
          <div className=" w-full">
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                value={fromdata.email}
                onChange={handleFrom}
                className="shadow appearance-none border-[1px] border-solid border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Email"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-3 mb-5 items-center">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={fromdata.phone}
            onChange={handleFrom}
            className="shadow appearance-none border-[1px] border-solid border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="(123) 456-7890"
          />
        </div>
        <div className="flex gap-3 mb-5 items-center">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z"
              />
            </svg>
          </label>
          <div className="flex space-x-2 w-full">
            <input
              type="number"
              placeholder="MM"
              name="bday"
              value={fromdata.bday}
              onChange={handleFrom}
              className="shadow appearance-none border-[1px] border-solid border-black rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              min="1"
              max="12"
            />
            <input
              type="number"
              placeholder="DD"
              name="bmonth"
              value={fromdata.bmonth}
              onChange={handleFrom}
              className="shadow appearance-none border-[1px] border-solid border-black rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              min="1"
              max="31"
            />
            <input
              type="number"
              placeholder="YYYY"
              name="byear"
              value={fromdata.byear}
              onChange={handleFrom}
              className="shadow appearance-none border-[1px] border-solid border-black rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              min="1900"
              max={new Date().getFullYear()}
            />
          </div>
        </div>
        <div className="flex gap-3 mb-5 ">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z"
              />
            </svg>
          </label>
          <textarea
            id="notes"
            name="notes"
            value={fromdata.notes}
            onChange={handleFrom}
            className="shadow appearance-none border-[1px] border-solid border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Additional notes..."
            rows="4"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditContact