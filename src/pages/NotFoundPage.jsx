import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  window.location.replace("/space-tourism-website");
  return (
    <>
    <main className='h-[100vh] w-full bg-color-1 flex flex-col justify-between p-[6rem]'>
        <div>
            <h1 className='h1 mb-7'>404</h1><br/>
            <p className='h2'>The page you were looking for does not exist</p>
        </div>
        <div className='h-30'>
            <p className='h2 '>Take me back to <Link to='/' className='underline hover:text-color-3 hover:-translate-y-1 duration-300 transition-all'>space-trourism-website</Link></p>
        </div>
    </main>
    
    </>
  )
}

export default NotFoundPage