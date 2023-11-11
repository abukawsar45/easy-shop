import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavLink from '.NavLink';

const Navbar = () => {
  return (
    <nav className='navbar sticky top-0 z-10 bg-slate-200 shadow-lg dark:bg-slate-900 lg:pr-3 '>
      <div className='flex-1'>
        <Link hrer='/' >Easy Shop</Link>
      </div>
      
      <div className='absolute left-0 top-[4.5rem] flex w-full flex-col bg-slate-200 pb-3 pt-2  '>
        <ul className='menu menu-horizontal flex flex-col lg:flex-row px-1' >
          { [].map(({ path, title })=>(
          <li key={ path } className='mx-auto'>
            <NavLink href={ path } activeClassName='text-blue-500' >
              {title}
            </NavLink>
          </li>
          ) )}
        </ul>
        <div className='dropdown-end dropdown lg:mr-2' ></div>

      </div>

      navbar
    </nav>
  );
};

export default Navbar;