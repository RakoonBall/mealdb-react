// import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({search, setSearch}) => {
   
    // console.log(search);
    return (
        <div>
            <div className="navbar bg-rose-400 drop-shadow-2xl">
  <div className="flex-1">
    <Link className="btn btn-ghost normal-case text-xl" href="">Meal <span className='bg-green-500 rounded-full p-1 text-white font-bold'>DB</span> </Link>
  </div>
  <div className="flex-none gap-2">
    <div className=''>
        <Link to="/" className='mr-4 font-semibold hover:bg-'>Home</Link>
        <Link to="/shop" className='mr-4 font-semibold hover:bg-'>Shop</Link>
        <Link to="/subscribe" className='mr-4 font-semibold hover:bg-'>Subscribe</Link>
        <Link to="/about" className='mr-4 font-semibold hover:bg-'>About</Link>
    </div>
    <div className="form-control">
      <input 
      onChange={(e)=> setSearch(e.target.value)}
      type="text" placeholder="Search" 
      className="input input-bordered" />
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://placeimg.com/80/80/people" alt="" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <Link className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><Link>Settings</Link></li>
        <li><Link>Logout</Link></li>
      </ul>
    </div>
  </div>
</div>
        </div>
    );
};

export default Navbar;