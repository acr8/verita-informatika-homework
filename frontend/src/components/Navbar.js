import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-500 p-4 mt-0 fixed w-full top-0 shadow">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="flex justify-start md:justify-start text-white font-bold">
          <div className="text-white no-underline">
            <Link to="/">
              <span className="text-3xl pl-2 absolute top-2">
                <img className='duration-300 hover:scale-105' width={115} src={require('../assets/gibox_digital.png')} alt='logo'/>
              </span>
            </Link>
          </div>
        </div>
        <div className="flex pt-2 content-center justify-evenly md:justify-evenly pl-56">
          <ul className="flex text-lg font-semibold">
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'inline-block py-2 px-4 text-white cursor-pointer hover:text-white duration-300 hover:scale-105 text-2xl' : 'text-2xl inline-block py-2 px-4 text-white cursor-pointer hover:text-white duration-300 hover:scale-105 opacity-80')}
                to="/"
              >
                Home
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}