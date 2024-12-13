import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import bgMobileImage from '../../public/images/technology/background-technology-tablet.jpg';
import bgDesktopImage from '../../public/images/technology/background-technology-desktop.jpg';
import { useWindowSize } from "@uidotdev/usehooks";
import pagedata from "../../public/images/constants/data.json";

const Technology = () => {

  const technology = pagedata.technology;

  const [selectedTechnology, setSelectedTechnology] = useState(technology[1]);

  const handleTechnologyChange = (name) => {
    setSelectedTechnology(name);
  }

    const size = useWindowSize();

  return (
    <>
    <Navigation/>
    <main className='main'>
        {size.width >= 1023 ? (<img className='absolute top-0 right-0 w-full h-full z-0  max-w-full' src={bgDesktopImage} alt="bg-image" />) : (<img className='absolute top-0 right-0 w-full h-full z-0  max-w-full' src={bgMobileImage} alt="bg-image" />)}
        <section className='section gap-20 md:py-[40px] lg:py-[3rem] '>
          <div className='w-full'>
            <p className='h2 text-center md:text-left font-barlowcon uppercase text-color-3'><span className='text-color-3/50 mr-6'>03</span>Space launch 101</p>
          </div>
          <div className='flex flex-col w-full lg:flex-row-reverse gap-12'>
          <div className={`${size.width <= 1024 ? 'w-[100vw] max-h-[258px] md:max-h-[300px]' : ''} lg:h-full lg:w-full`}><img className='w-full max-h-[300px] lg:max-h-full' src={size.width <= 1024 ? selectedTechnology.images.landscape : selectedTechnology.images.portrait} alt={selectedTechnology.name} /></div>
            <div className='flex flex-col lg:flex-row gap-6 w-full justify-between'>
              <ul className='flex gap-4 lg:flex-col justify-center w-full lg:w-[80px] h5 font-ballefair text-color-3 mb-8 lg:mb-0'>
                {technology.map((item, index) => (
                  <li key={index}  className={`w-[40px] h-[40px] md:w-[56px] md:h-[56px] lg:w-[80px] lg:h-[80px] flex justify-center items-center rounded-full border-color-3/30 border-[1px] ${selectedTechnology.name === item.name ? 'border-none bg-color-3 text-color-1' : ''} ${selectedTechnology.name !== item.name ? 'hover:border-color-3/70' : ''}`}><a className='w-[40px] h-[40px] md:w-[56px] md:h-[56px] lg:w-[80px] lg:h-[80px] rounded-full cursor-pointer flex items-center justify-center' onClick={() => handleTechnologyChange(item)}>{index + 1}</a></li>
                ))}
              </ul>
              <div className='flex flex-col gap-4 lg:justify-center'>
                  <div className='w-full flex flex-col gap-4 font-ballefair'>
                    <p className='uppercase lg:text-left h5'>The terminology...</p>
                    <h4 className='uppercase lg:text-left h4'>{selectedTechnology.name}</h4>
                  </div>
                  <p className='text-[14px] lg:text-left md:text-[16px] font-barlow lg:text-[18px] text-color-2'>{selectedTechnology.description}</p>
                </div>
            </div>
          </div>
        </section>
    </main>
    </>
  )
}

export default Technology