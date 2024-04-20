import React from 'react'
import  { Link } from "react-router-dom"

const Navbar = () => {
  return (
   <div className=' p-4 flex flex-wrap items-center justify-between mx-auto sm:border-lime-700 md:border-amber-400 lg:border-indigo-600'>
    {/*Logo */}
    <div className="Gymministore w-[151px] h-[27px] "><span className="text-yellow-400 text-xl  font-Poppins">Gym</span><span className="text-blue-700 text-xl font-Poppins">Mini</span><span className="text-yellow-400 text-xl font-Poppins">Store</span></div>
    
  < div class="flex flex-wrap hidden w-full md:block md:w-auto w-full block lg:flex lg:items-center lg:w-auto {{ isOpen ? 'block' : 'hidden' }}" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  ">
        <li>
          <a href="#" class=" lg:inline-block block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
   </div>
  
   
  )
};

export default Navbar
