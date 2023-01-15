import React from 'react'
import { useState } from 'react';
import Navigation from '../components/Navigation';
import Search from '../components/Search';
import Info from '../components/Info';

import "../index.css";

export const Home = () => {
  const [searched, setSearched] = useState(false);
  const search = () => { 
    setSearched(true);
  }
  return (
    <div className="w-screen h-auto pb-20">
      <div className="w-screen h-screen bg-bottom bg-[url('../public/abstract.jpg')] bg-cover">
        <Navigation />
        <span className='flex justify-center mt-16 px-20'>
          <h1 className="p-0 text-8xl font-extrabold inline-block text-black">Wiki</h1>
          <h1 className="p-0 text-8xl font-extrabold inline-block text-blue">Learn</h1>
        </span>

      <Search handleClick={search} />
      </div>
      <Info searched={searched} />
    </div>

  )
}

export default Home;