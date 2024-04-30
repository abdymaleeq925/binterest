import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdAdd, IoMdSearch } from 'react-icons/io';

const Navbar = () => {
  return (
    <div className="flex gap-2 md:gap-5 w-full mt-5">
      <div className="flex w-full justify-start items-center px-2 rounded-md bg-white border-none outline-none focus-within:shadow-sm">
        <IoMdSearch className="ml-1" fontSize={22} />
        <input className="p-2 w-full bg-white outline-none" type="text" placeholder="Search"/>
      </div>
      <div className="flex gap-3">
        <Link to="" className="md:block hidden">
          <img src="" alt="avatar" className="h-12 w-12 rounded-lg"/>
        </Link>
        <Link to="/create-pin" className="bg-black text-white rounded-lg w-12 h-12 flex items-center justify-center">
          <IoMdAdd/>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
