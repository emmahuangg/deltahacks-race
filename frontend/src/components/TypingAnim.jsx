import React from 'react'
import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';


export const TypingAnim = (props) => {
  const [style, setStyle] = useState("visible");
  const disappear = () => {
    setStyle("hidden");
  }

  return (<div onClick={disappear} className={`text-2xl absolute ml-40 rounded-full py-6 w-screen h-20 w-screentext-black p-8 focus:outline-0 ` + style}>

    <TypeAnimation
      sequence={[
        'Agriculture', // Types 'One'
        1000, // Waits 1s
        'Calculus', // Deletes 'One' and types 'Two'
        1000, // Waits 2s
        'University of Waterloo',
        1000,
        'University',
        1000
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '1.2em', color: "#0EACE3", fontWeight: "bold" }}
    />
  </div>
  )
}

export default TypingAnim;