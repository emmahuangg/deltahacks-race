import React from 'react'
import { useNavigate } from "react-router-dom";

export const Navigation = () => {
    const navButtons = [{ name: "Home", path: "/" }, { name: "Explore", path: "explore" }]
    let navigate = useNavigate();
    const routeChange = (item) => {
        navigate(item.path);
    }
  return (
    <div>
          {navButtons.map((button, idx) => { return <button key={idx} onClick={() => routeChange(button)}><p className="text-white font-bold"> {button.name} </p></button> })}
    </div>
  )
}

export default Navigation;