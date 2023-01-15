import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

export const Navigation = () => {
  let navigate = useNavigate();
  const routeChange = (path) => {
    navigate(path);
  }
  return (
    <div className='flex justify-end pt-20 pr-20'>
      <button onClick={() => routeChange('/')} className="text-white font-bold px-4 py-2 bg-orange rounded-full mx-2 drop-shadow-lg" data-aos="fade-left">HOME</button>
      <button onClick={() => routeChange('/explore')} className="text-white font-bold px-4 py-2 bg-orange rounded-full mx-2 drop-shadow-lg" data-aos="fade-left">EXPLORE</button>
    </div>
  )
}

export default Navigation;