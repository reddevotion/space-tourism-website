import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import bgMobileImage from '../../public/images/destination/background-destination-tablet.jpg';
import bgDesktopImage from '../../public/images/destination/background-destination-desktop.jpg';
import { useWindowSize } from "@uidotdev/usehooks";
import pagedata from "../../public/images/constants/data.json";

const Destination = () => {

  const destinations = pagedata.destinations;

  const size = useWindowSize();

  const [selectedPlanet, setSelectedPlanet] = useState(destinations[0]);

  const handlePlanetChange = (name) => {
    setSelectedPlanet(name);
  }

  return (
    <>
    <Navigation/>
    <main className='main'>
    {size.width >= 1024 ? (<img className='absolute top-0 right-0 w-full h-full z-0  max-w-full' src={bgDesktopImage} alt="bg-image" />) : (<img className='absolute top-0 right-0 w-full h-full z-0  max-w-full' src={bgMobileImage} alt="bg-image" />)}
    <section className='section gap-6 lg:justify-between md:py-[4rem] lg:py-[4rem]'>
    <div className='w-full'>
      <p className='h2 text-center md:text-left font-barlowcon uppercase text-color-3'><span className='text-color-3/50 mr-6'>01</span>Pick your destination</p>
    </div>
    <div className='grid gap-8 w-full lg:grid-cols-2'>
      <div className='flex justify-center items-center lg:justify-start'>
        <img className='h-[150px] w-[150px] md:h-[300px] md:w-[300px] lg:h-[480px] lg:w-[480px] transition-all duration-700' src={selectedPlanet.images.png} alt={destinations[0].name} />
      </div>
      <div className='flex flex-col gap-6'>
        <ul className='flex w-full gap-8 justify-center lg:justify-start'>
          {destinations.map((item, index) => (
            <li className={`h-8 text-[14px] text-colot-2 font-barlowcon tracking-[0.15em] uppercase flex items-start relative ${selectedPlanet.name === item.name ? 'text-color-3 before:absolute before:bg-color-3 before:h-[3px] before:w-full before:bottom-0 before:left-0' : ''}`} key={index}><a className={`w-full h-full text-center relative hover:text-color-3 transition-all duration-300 cursor-pointer ${selectedPlanet.name !== item.name ? 'before:opacity-0 before:absolute hover:before:opacity-100 before:bg-color-3/60 before:h-[3px] before:w-full before:bottom-0 before:left-0 before:transition-all before:duration-300' : ''}`} onClick={() => handlePlanetChange(item)}>{item.name}</a></li>
          ))}
        </ul>
        
        <div className='flex flex-col gap-4'>
          <h1 className='planet uppercase text-color-3 font-ballefair text-center lg:text-left'>{selectedPlanet.name}</h1>
          <p className='lg:text-left md:text-[16p] lg:text-[18px]'>{selectedPlanet.description}</p>
        </div>
        <div className='w-full h-[1px] bg-color-3/40'/>
        <div className='flex font-barlowcon flex-col gap-6 md:flex-row uppercase w-full text-[14px] tracking-[2px] lg:text-left'>
          <div className='w-full md:w-1/2 flex flex-col gap-3'>
            <p>Avg. Distance</p>
            <span className='text-[28px] font-ballefair tracking-[0px] text-color-3'>{selectedPlanet.distance}</span>
          </div>
          <div className='w-full md:w-1/2 flex flex-col gap-3'>
            <p>Est. Travel Time</p>
            <span className='text-[28px] font-ballefair tracking-[0px] text-color-3'>{selectedPlanet.travel}</span>
          </div>
        </div>
      </div>
    </div>
    </section>
    </main>
    </>
  )
}

export default Destination