import React from 'react'
import Navigation from '../components/Navigation';
import Searchbar from '../components/Searchbar';

import "../index.css";

export const Home = () => {
    return (
      <>
        <div className="p-20 w-screen h-screen bg-bottom bg-[url('../public/assets/images/abstract.jpg')] bg-cover">
        <Navigation />

        <div className="p-10 text-5xl font-extrabold">
        <span class="p-10 bg-clip-text bg-gradient-to-r from-pink-500 to violet-500">
          WikiLearn </span> 

        <Searchbar />
        </div>
        </div>

        
        
        


        
      </>
        
  )
}

export default Home;