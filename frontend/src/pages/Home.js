import React from 'react'
import Navigation from '../components/Navigation';
import Search from '../components/Search';

import "../index.css";

export const Home = () => {
    return (
        <div className="p-20 w-screen h-screen bg-bottom bg-[url('../public/assets/images/abstract.jpg')] bg-cover">
        <Navigation />
        <span className='flex justify-center mt-16'>
        <h1 className="p-0 text-7xl font-extrabold inline-block text-black">Wiki</h1>
          <h1 className="p-0 text-7xl font-extrabold inline-block text-blue">Learn</h1> 
        </span>

        <Search />
        </div>
        
  )
}

export default Home;