import React from 'react'
import { useState, useEffect } from 'react'
import pic1 from '../resources/pic1.png'
import pic2 from '../resources/pic2.png'
import pic3 from '../resources/pic3.png'
import { BsStack } from 'react-icons/bs'
import reacticon from '../resources/reacticon.png'
import flaskicon from '../resources/flaskicon.png'
import pythonicon from '../resources/pythonicon.png'
import jsicon from '../resources/jsicon.png'
import resticon from '../resources/resticon.png'
import cyanMonkey from '../resources/cyanMonkey.PNG'
import pinkMonkey from '../resources/pinkMonkey.PNG'
import orangeMonkey from '../resources/orangeMonkey.PNG'
import purpleMonkey from '../resources/purpleMonkey.PNG'



export const Info = (props) => {
    const [display, setDisplay] = useState("visible");

    useEffect(() => {
        if(props.searched) {
            setDisplay("hidden");
        }
    }, [props.searched])
    return (
        <div className={display + ` h-auto`} >
            <div className='flex justify-center text-5xl font-extrabold text-black px-20'>
                <h1>Learning with Wiki</h1>
                <h1 className='text-blue'>Learn</h1>
            </div>
            <div className='grid grid-cols-3 gap-5 mx-20 mt-16 text-black px-20'>
                <span data-aos="slide-right"><img src={pic1} className='w-full' /><h1 className='text-2xl mt-5 text-center'>Learning for children <b>made easy</b></h1></span>
                <span data-aos="slide-up"><img src={pic2} className='w-full' /><h1 className='text-2xl mt-5 text-center'>Read any Wikipedia article, <b>simplified</b> for young readers</h1></span>
                <span data-aos="slide-left"><img src={pic3} className='w-full' /><h1 className='text-2xl mt-5 text-center'>Make reading fun through accompanying  <b>AI visuals</b></h1></span>
            </div>
            <div className="pt-20 bg-bottom w-screen h-800 bg-[url('../public/transparentBg.png')] bg-cover" data-aos="zoom-in">
                <div className='bg-orange w-fit p-8 ml-0 rounded-br-full rounded-tr-full flex justify-end gap-6'>
                    <BsStack className='text-5xl font-extrabold text-white w-auto inline-block' />
                    <h1 className='text-5xl font-extrabold text-white w-auto inline-block' data-aos="fade-right">Our Tech Stack</h1>
                </div>
                <div className="flex justify-start mb-96">
                    <img src={reacticon} className='w-56 mx-8 mt-12 ml-20 h-auto' data-aos="fade-left" title="React JS" />
                    <img src={pythonicon} className='w-36 mx-8 mt-12 ' data-aos="fade-left" title="Python" />
                    <img src={flaskicon} className='w-48 mx-8 mt-12 ' data-aos="fade-left" title="Flask" />
                    <img src={jsicon} className='w-36 mx-8 mt-12 ' data-aos="fade-left" title="JavaScript" />
                    <img src={resticon} className='w-36 mx-16 mt-12 ' data-aos="fade-left" title="RESTful APIs" />
                </div>
                <h1 className='text-right mr-32 font-extrabold text-6xl text-pink' data-aos="zoom-in-down">Team RACE</h1>
                <h2 className='text-right mr-32 mt-2 font-extrabold text-6xl text-black' data-aos="fade-left">DeltaHacks 9</h2>
                <div className='grid grid-cols-4 pl-80 mt-16'>
                    <span data-aos="zoom-in-left" data-aos-anchor-placement="bottom-bottom"><center><img alt="Richard Shuai" src={orangeMonkey} className='w-40 h-auto mb-0' /><p className='text-xl font-regular'>Richard</p><p className='text-xl font-extrabold'>Shuai</p></center></span>
                    <span data-aos="zoom-in-up" data-aos-anchor-placement="bottom-bottom"><center><img alt="Carolyn Zhang" src={cyanMonkey} className='w-40 h-auto mb-0' /><p className='text-xl font-regular'>Carolyn</p><p className='text-xl font-extrabold'>Zhang</p></center></span>
                    <span data-aos="zoom-in-right" data-aos-anchor-placement="bottom-bottom"><center><img alt="Emma Huang" src={purpleMonkey} className='w-40 h-auto mb-0' /><p className='text-xl font-regular'>Emma</p><p className='text-xl font-extrabold'>Huang</p></center></span>
                    <span data-aos="zoom-in-down" data-aos-anchor-placement="bottom-bottom"><center><img alt="Angela Xu" src={pinkMonkey} className='w-40 h-auto mb-0' /><p className='text-xl font-regular'>Angela</p><p className='text-xl font-extrabold'>Xu</p></center></span>
                </div>
            </div>
        </div>
    )
}

export default Info;