import bgMobileImage from '../../public/assets/home/background-home-mobile.jpg';
import bgDesktopImage from '../../public/assets/home/background-home-desktop.jpg';
import Navigation from '../components/Navigation';
import { useWindowSize } from "@uidotdev/usehooks";
import { Link } from 'react-router-dom';

function Homepage() {

  const size = useWindowSize();

  return (
    <>
      <Navigation/>
      <main className="main">
        {size.width >= 1024 ? (<img className='absolute top-0 right-0 w-full h-full z-0  max-w-full' src={bgDesktopImage} alt="bg-image" />) : (<img className='absolute top-0 right-0 w-full h-full z-0  max-w-full' src={bgMobileImage} alt="bg-image" />)}
        <section className='section lg:flex-row'>
          <article className='grid gap-6'>
          <p className='h2 text-center font-barlowcon uppercase lg:text-left'>So, you want to travel to</p>
          <h1 className='h1 text-color-3 font-ballefair text-center lg:text-left'>SPACE</h1>
          <p className='lg:text-left'>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
          </article>
          <div className='grow flex w-full justify-center items-center md:mt-12 uppercase md:h-full lg:justify-end lg:h-[343px] '>
          <Link className="text-[18px] md:text-[32px] font-ballefair uppercase w-[9rem] h-[9rem] md:w-[272px] md:h-[272px] text-color-1 rounded-full bg-white grid place-content-center hover:scale-90 hover:text-color-1/60 transition-all duration-700 relative before:absolute before:w-full before:h-full before:top-0 before:left-0 before:rounded-full before:bg-white before:bg-opacity-50 hover:before:scale-150 before:-z-[1] before:transition-all before:duration-700" to="/destination">
          explore
          </Link>
          </div>
        </section>
      </main>
      
    </>
  )
}

export default Homepage
