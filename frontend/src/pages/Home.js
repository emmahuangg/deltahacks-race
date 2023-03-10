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
    <>
    <div className='wrapper'>
    <div className="w-screen h-auto pb-20">
      <div className="w-screen h-600 bg-bottom bg-[url('../public/abstract.jpg')] bg-cover">
        <Navigation />
        <span className='flex justify-center mt-16 px-20' data-aos="zoom-in">
          <h1 className="p-0 text-8xl font-extrabold inline-block text-black">Wiki</h1>
          <h1 className="p-0 text-8xl font-extrabold inline-block text-blue">Learn</h1>
        </span>

      <Search handleClick={search} />
      </div>
      <Info searched={searched} />
    </div>
    </div>
    </>

  )
}

export default Home;