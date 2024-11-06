import React from 'react';
import { Link } from 'react-router-dom';
import { HiUserAdd, HiPhone, HiCog, HiHome } from 'react-icons/hi';


 const Sidebar = () => {
   return (
     <div className="sidebar absolute bg-[#F8FAFD] top-[0px] left-0 h-full w-64 text-black p-4 z-50"
     >
       <ul>
         <li className="py-2">
           <Link
             to="/create"
             className="flex items-center justify-center text-center rounded-[10px] bg-[#c2e7ff] text-black w-[168px] py-4 "
           >
             <svg
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 24 24"
               fill="currentColor"
               className="size-6"
             >
               <path
                 fillRule="evenodd"
                 d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                 clipRule="evenodd"
               />
             </svg>

             <span className="ml-2">Create contact</span>
           </Link>
         </li>
         <li className="py-2">
           <Link
             to="/"
             className="flex items-center hover:bg-blue-100 p-2 rounded transition duration-200"
           >
             <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="#000000"
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
             <span className="ml-2">Contacts</span>
           </Link>
         </li>
       </ul>
     </div>
   );
};

export default Sidebar;
