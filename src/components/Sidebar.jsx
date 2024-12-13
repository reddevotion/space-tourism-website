import React from 'react';
import { navLinks } from '../assets/constants/constants'; 
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({className, close}) => {

   const pathName = useLocation();

  return (
    <aside className={`pl-8 flex flex-col gap-[48px] backdrop-blur-2xl w-2/3 fixed ${className === '' ? '-right-full' : className} top-0 h-[100vh] bg-color-1/15 z-20 transition-all duration-[750ms]`}>
        <div className='py-8 h-[85px] pr-6 flex justify-end'>
            <button className='' onClick={() => close()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21"><g fill="#D0D6F9" fillRule="evenodd"><path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z"/><path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"/></g></svg>
            </button>
        </div>
        <ul className='text-start flex flex-col gap-8'>
            {navLinks.map((item, index) => (
                <li className={`font-barlowcon uppercase text-color-3 tracking-[2px] relative ${item.link === pathName.pathname ? 'before:absolute before:block before:z-50 before:bg-color-3 before:bottom-0 before:right-0 before:h-full before:w-1' : ''}`} key={index}><Link to={item.link}><span className='font-bold tracking-[2.7px]'>{item.num} </span>{item.text}</Link></li>
            ))}
        </ul>
    </aside>
  )
}

export default Sidebar 