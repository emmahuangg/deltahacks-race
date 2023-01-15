import React from 'react'
import pic1 from '../resources/pic1.png'
import pic2 from '../resources/pic2.png'
import pic3 from '../resources/pic3.png'
import { BsStack } from 'react-icons/bs'
import reacticon from '../resources/reacticon.png'
import flaskicon from '../resources/flaskicon.png'
import pythonicon from '../resources/pythonicon.png'



export const Info = () => {
    return (
        <div>
            <div className='flex justify-center mt-60 text-5xl font-extrabold text-black'>
                <h1>Learning with Wiki</h1>
                <h1 className='text-blue'>Learn</h1>
            </div>
            <div className='grid grid-cols-3 gap-5 mx-20 mt-16 text-black'>
                <span><img src={pic1} className='w-full' /><h1 className='text-2xl mt-5 text-center'>Learning for children <b>made easy</b></h1></span>
                <span><img src={pic2} className='w-full' /><h1 className='text-2xl mt-5 text-center'>Read any Wikipedia article, <b>simplified</b> for young readers</h1></span>
                <span><img src={pic3} className='w-full' /><h1 className='text-2xl mt-5 text-center'>Make reading fun through accompanying  <b>AI visuals</b></h1></span>
            </div>
            <div className='mt-20'>
                <div className='bg-orange w-fit p-8 ml-0 rounded-full flex justify-end gap-6'>
                    <BsStack className='text-5xl font-extrabold text-white w-auto inline-block' />
                    <h1 className='text-5xl font-extrabold text-white w-auto inline-block'>Our Tech Stack</h1>
                </div>
                <div className="flex justify-start bg-bottom bg-[url('../public/transparentBg.png')] bg-cover">
                    <img src={reacticon} className='w-44 mx-8 mt-12  ml-20' />
                    <img src={pythonicon} className='w-28 mx-8 mt-12 ' />
                    <img src={flaskicon} className='w-36 mx-8 mt-12 ' />
                </div>
            </div>
        </div>
    )
}

export default Info;