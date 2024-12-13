import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { navLinks } from '../../public/images/constants/constants'; 
import { useWindowSize } from "@uidotdev/usehooks";
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
    

 const pathName = useLocation();
 const size = useWindowSize();
 let logoSize = 40;

 if (size.width >= 768) {
    logoSize = 48
 }

 const [navIsActive, setNavIsActive] = useState(false);

 const handleNavClose = () => {
    setNavIsActive(!navIsActive);
 }

  return (
    <nav className='container fixed left-0 top 0 py-[1.375rem] md:py-0 z-10 md:pr-0 lg:pl-16 lg:pt-8'>
        <div className='h-10 md:h-full flex justify-between items-center'>
        <div className='h-10 md:h-[96px] md:w-[88px] lg:w-[112px] flex items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width={logoSize} height={logoSize}><g fill="none" fillRule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF" transform={logoSize === 40 ? "scale(0.83333333333)" : "scale(1)"}/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z" transform={logoSize === 40 ? "scale(0.83333333333)" : "scale(1)"}/></g></svg>
            </div>
            <div className='md:h-[96px] md:grow lg:max-w-[700px] xl:max-w-[800px] '>
                <button className='md:hidden' onClick={() => setNavIsActive(!navIsActive)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fillRule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/></g></svg>
                </button>
                <ul className='hidden md:flex lg:relative z-20 text-center gap-12 bg-color-4 lg:bg-color-1/30 lg:backdrop-blur-2xl justify-end pr-10 lg:pr-16 lg:max-w-[700px] xl:max-w-[800px] before:hidden lg:before:block lg:before:absolute before:w-[20vw] before:border-b-[1px] before:border-color-3 before:-left-[25%] before:top-[50%] xl:before:w-[20vw] xl:before:-left-[30%] '>
                {navLinks.map((item, index) => (
                     <li className={`font-barlowcon uppercase text-color-3 tracking-[2px] h-[96px] flex items-center z-22 relative  ${item.link === pathName.pathname ? 'before:absolute before:block before:z-50 before:bg-color-3 before:bottom-0 before:left-0 before:h-1 before:w-full' : ''}`} key={index}><Link to={item.link} className={`h-full flex items-center hover:-translate-y-[4px] transition-all duration-300 ${item.link !== pathName.pathname ? 'before:opacity-0 before:absolute hover:before:opacity-100 before:bg-color-3/60 before:h-1 before:w-full before:-bottom-1 before:left-0 before:transition-all before:duration-300' : ''}`}><span className={`font-bold mr-1 tracking-[2.7px] ${index === 0 ? 'hidden' : ''} lg:inline`}>{item.num} </span>{item.text}</Link></li>
                ))}
                </ul>
            </div>
            
        </div>
        <Sidebar close={handleNavClose} className={navIsActive ? 'right-0' : ''}/>
    </nav>
  )
}

export default Navigation