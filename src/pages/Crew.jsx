import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import bgMobileImage from '../assets/crew/background-crew-tablet.jpg';
import bgDesktopImage from '../assets/crew/background-crew-desktop.jpg';
import { useWindowSize } from "@uidotdev/usehooks";
import pagedata from "../assets/constants/data.json";

const Crew = () => {

const crew = pagedata.crew;

const [selectedMember, setSelectedMember] = useState(crew[0]);

const handleMemberChange = (name) => {
  setSelectedMember(name);
}

const size = useWindowSize();

  return (
    <>
    <Navigation/>
    <main className='main'>
        {size.width >= 1024 ? (<img className='absolute top-0 right-0 w-full h-full z-0  max-w-full' src={bgDesktopImage} alt="bg-image" />) : (<img className='absolute top-0 right-0 w-full h-full z-0  max-w-full' src={bgMobileImage} alt="bg-image" />)}
        <section className='section gap-6 lg:justify-between justify-between md:py-[4rem] lg:py-[4rem]'>
          <div className='w-full'>
            <p className='h2 text-center md:text-left font-barlowcon uppercase text-color-3'><span className='text-color-3/50 mr-6'>02</span>Meet your crew</p>
          </div>
          <div className='w-full grid gap-8 text-center lg:text-left lg:grid-cols-2 lg:grow'>
            <div className='flex flex-col justify-between'> 
            <div className='flex flex-col gap-6'>
              <div className='w-full flex flex-col gap-2 font-ballefair lg:mt-20'>
                <p className='uppercase h5'>{selectedMember.role}</p>
                <h4 className='uppercase h4'>{selectedMember.name}</h4>
              </div>
              <p className='md:text-[16px] lg:text-[18px]'>{selectedMember.bio}</p>
              </div>
              <ul className='flex h-[10px] lg:h-[15px] justify-center gap-4 lg:justify-start lg:gap-10 mt-16 md:mt-8 lg:mt-auto lg:mb-2'>
                {crew.map((item, index) => (
                  <li key={index} onClick={() => handleMemberChange(item)} className={`cursor-pointer h-full w-[10px] lg:w-[15px] rounded-full  ${selectedMember.name === item.name ? 'bg-color-3/100' : 'bg-color-3/30'} ${selectedMember.name !== item.name ? 'hover:bg-color-3/60' : ''}`}></li>
                ))}
              </ul>
            </div>
              <div className='w-full h-[400px] md:h-full flex justify-center items-end relative z-20 '><img className='w-auto relative z-20 h-[340px] md:h-[450px] lg:h-[560px]' src={selectedMember.images.png} alt={crew.name} /></div>
          </div>
        </section>
    </main>
    </>
  )
}

export default Crew