import React from "react";
import Navigation from "../components/Navigation";
import { TypeAnimation } from 'react-type-animation';

export const Explore = () => {
  return (
    <>
    <div className="wrapper">
    <div className="w-screen h-auto pb-20">
      <div className="h-600 bg-bottom bg-[url('../public/abstract.jpg')] bg-cover">
        <Navigation />
        <span className='flex justify-center mt-16 px-20' data-aos="zoom-in">
          <h1 className="p-0 text-8xl font-extrabold inline-block text-black">Wiki</h1>
          <h1 className="p-0 text-8xl font-extrabold inline-block text-blue">Learn</h1>
        </span>
        <div className="text-2x mx-20 flex justify-center rounded-full py-6 h-20 w-screentext-black focus:outline-0">

          <TypeAnimation
                sequence={[
              400,
              'Learning made easy.', // Types 'One'
              2000, // Waits 1s
              'Learning made fun.', // Deletes 'One' and types 'Two'
              2000, // Waits 2s
              'Learning made visual.',
              2000,
              'Learning made better.',
              2000
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
                style={{ fontSize: '2em', color: "#49423E", fontWeight: "bold" }}
          />
        </div>
        </div>

          <div className="rounded-full w-screen mx-20">
            <div className="rounded-full w-600 p-10 grid grid-cols-6 gap-5 bg-white h-auto drop-shadow-2xl" data-aos="slide-left">
          <img
            src="https://orientation.engsci.utoronto.ca/wp-content/uploads/2022/07/best-calculus-textbooks.png"
                alt=""
                className="rounded-full col-span-2 h-40 w-96 m-auto object-cover	"
          />
          <div className="col-span-4">
                <p className="rounded-full bg-blue px-3 py-1 w-min text-white">Math</p>
            <p className="font-extrabold text-3xl mt-3">Calculus</p>
            <p className="text-md mt-2 mb-6">
                  Calculus is a type of math that helps us understand how things change. It's like trying to figure out how fast a car is going and how far it has traveled. 
            </p>
                <a href="/" className="rounded-full font-bold col-span-2 px-3 py-2 bg-orange text-white mt-8 hover:bg-red-400 transition-all duration-150 drop-shadow-lg ">Learn more</a>
          </div>
            </div>
              <div className="rounded-full w-600 p-10 grid grid-cols-6 gap-5 bg-white h-auto drop-shadow-2xl mt-8" data-aos="slide-left">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/54/Knight_academy_lecture_%28Rosenborg_Palace%29.jpg"
                  alt=""
                className="rounded-full col-span-2 h-40 w-96 m-auto object-cover"
                />
                <div className="col-span-4">
                  <p className="rounded-full bg-blue px-3 whitespace-nowrap py-1 w-min text-white">Social science</p>
                  <p className="font-extrabold text-3xl mt-3">Rhetorics</p>
                  <p className="text-md mt-2 mb-6">
                    Rhetoric is a way of using words to try to convince someone or make them believe something. It's like when a person wants to make you want to buy something or make you agree with them.
                  </p>
                <a href="/" className="rounded-full font-bold col-span-2 px-3 py-2 bg-orange text-white mt-8 hover:bg-red-400 transition-all duration-150 drop-shadow-lg ">Learn more</a>
                </div>
            </div>
            
            <div className="rounded-full w-600 p-10 grid grid-cols-6 gap-5 bg-white h-auto drop-shadow-2xl mt-8" data-aos="slide-left">
              <img
                src="https://online.stanford.edu/sites/default/files/inline-images/1600X900-How-does-blockchain-work.jpg"
                alt=""
                className="rounded-full col-span-2 h-40 w-96 m-auto object-cover"
              />
              <div className="col-span-4">
                <p className="rounded-full bg-blue px-3 whitespace-nowrap py-1 w-min text-white">Technologies</p>
                <p className="font-extrabold text-3xl mt-3">Blockchain</p>
                <p className="text-md mt-2 mb-6">
                  A blockchain is like a special kind of computer book that keeps track of things. Each page is a "block" and it has a list of things that happened, like when someone buys or sells something. </p>
                <a href="/" className="rounded-full font-bold col-span-2 px-3 py-2 bg-orange text-white mt-8 hover:bg-red-400 transition-all duration-150 drop-shadow-lg ">Learn more</a>
              </div>
            </div>

            <div className="rounded-full w-600 p-10 grid grid-cols-6 gap-5 bg-white h-auto drop-shadow-2xl mt-8" data-aos="slide-left">
              <img
                src="https://magecomp.com/blog/wp-content/uploads/2020/12/How-to-get-order-details-using-REST-API-in-magento-2-950x500.jpeg"
                alt=""
                className="rounded-full col-span-2 h-40 w-96 m-auto object-cover"
              />
              <div className="col-span-4">
                <p className="rounded-full bg-blue px-3 whitespace-nowrap py-1 w-min text-white">Technologies</p>
                <p className="font-extrabold text-3xl mt-3">Representational state transfer</p>
                <p className="text-md mt-2 mb-6">
                  REST is a set of rules that makes sure that different computer programs can give and follow the same kind of instructions, even if they are on different computers or the internet. </p>
                <a href="/" className="rounded-full font-bold col-span-2 px-3 py-2 bg-orange text-white mt-8 hover:bg-red-400 transition-all duration-150 drop-shadow-lg ">Learn more</a>
              </div>
            </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Explore;
