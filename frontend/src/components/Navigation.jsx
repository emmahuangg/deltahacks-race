import React from 'react'
import { useNavigate } from "react-router-dom";

export const Navigation = () => {
  let navigate = useNavigate();
  const routeChange = (path) => {
    navigate(path);
  }
  return (
    <div className='flex justify-end'>
      <button onClick={() => routeChange('/')} className="text-white font-bold px-4 py-2 bg-orange rounded-full mx-2 drop-shadow-lg">HOME</button>
      <button onClick={() => routeChange('/explore')} className="text-white font-bold px-4 py-2 bg-orange rounded-full mx-2 drop-shadow-lg">EXPLORE</button>
    </div>
  )
}

export default Navigation;