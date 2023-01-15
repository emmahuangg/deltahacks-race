import React, { useEffect } from "react";
import Navigation from "../components/Navigation";
import { useState, useRef } from "react";
import { TypeAnimation } from 'react-type-animation';

export const Explore = () => {
  const [string, setString] = useState("");

  const [word, setWord] = useState("");
  const searchBar = useRef();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState(false);
  const [searchImage, setSearchImage] = useState(false);
  const [searchVideosArray, setSearchVideosArray] = useState([]);

  useEffect(() => {
    if (word) {
      let term = word;
      setSearchTerm(term);
      term = term.replaceAll(" ", "_"); // we need to do some data cleaning here

      fetch("/summary/" + term, {
        method: "GET",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setSearchResult(data.result);
        });

      fetch("/image/" + term, {
        method: "GET",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setSearchImage(data.result);
        });

      fetch("/video/" + term, {
        method: "GET",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setSearchVideosArray(data.result)
        });
    }
    window.scrollTo(0, 0)
  }, [word]);

  useEffect(() => {
    if (searchResult) {
      const jsonData = searchResult;
      fetch("/summarized/" + jsonData, {
        method: "GET",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setString(data.result.summary_text);
        }).catch(error => {
          console.log('Too many requests per minute for the summarization API. Please try again later.');
        });
    }
  }, [searchResult])

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

          <div className="h-auto">
            {searchTerm && <h1 className="font-extrabold text-7xl text-blue mt-0 px-20">{searchTerm}</h1>}
            <p className="text-lg mt-4 px-20">{searchResult}</p>
            {searchImage && <img src={searchImage} alt={searchTerm} className="w-auto h-auto mx-auto my-20 rounded-full" />}
            {searchResult && <div className='bg-orange w-fit ml-0 mb-8 rounded-br-full rounded-tr-full flex justify-end gap-6'><h1 className="px-20 py-8 font-bold text-3xl text-white">Videos to learn more about {searchTerm}</h1></div>}
            <div className="grid grid-cols-3 gap-0 mx-20">
              {searchVideosArray.length > 0 &&
                searchVideosArray.map((videoId, i) => (
                  <iframe
                    key={i}
                    title="Video"
                    width="400"
                    height="300"
                    src={"https://www.youtube.com/embed/" + videoId}
                    className="mb-8 mt-0 rounded-3xl"
                  ></iframe>
                ))}
            </div>
            {string && <h1 className="py-4 font-extrabold text-4xl text-orange mt-8 px-20 ">What did we learn?</h1>}
            {string && <p className="bg-orange py-6 rounded-full font-extrabold text-xl text-white px-20 ml-20 mr-20 ">{string}</p>}
            {string && <div className="h-16" />}
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
            <p className="text-md mt-2">
                  Calculus is a type of math that helps us understand how things change. It's like trying to figure out how fast a car is going and how far it has traveled. 
            </p>
                <button onClick={() => setWord('Calculus')} className="rounded-full font-bold col-span-2 px-3 py-2 bg-orange text-white mt-4 hover:bg-red-400 transition-all duration-150 drop-shadow-lg ">Learn more</button>
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
                  <p className="text-md mt-2">
                    Rhetoric is a way of using words to try to convince someone or make them believe something. It's like when a person wants to make you want to buy something or make you agree with them.
                  </p>
                <button onClick={() => setWord('Rhetoric')} className="rounded-full font-bold col-span-2 px-3 py-2 bg-orange text-white mt-4 hover:bg-red-400 transition-all duration-150 drop-shadow-lg ">Learn more</button>
                </div>
            </div>
            
            <div className="rounded-full w-600 p-10 grid grid-cols-6 gap-5 bg-white h-auto drop-shadow-2xl mt-8" data-aos="slide-left">
              <img
                src="https://thegivingblock.com/wp-content/uploads/2021/07/Learn-Crypto-The-Giving-Block.png"
                alt=""
                className="rounded-full col-span-2 h-40 w-96 m-auto object-cover"
              />
              <div className="col-span-4">
                <p className="rounded-full bg-blue px-3 whitespace-nowrap py-1 w-min text-white">Technologies</p>
                <p className="font-extrabold text-3xl mt-3">Cryptocurrency</p>
                <p className="text-md mt-2">
                  A cryptocurrency is a special kind of money that you can only use on the internet. It's like the money you have in your piggy bank, but it's on a computer. </p>
                <button onClick={() => setWord('Cryptocurrency')} className="rounded-full font-bold col-span-2 px-3 py-2 bg-orange text-white mt-4 hover:bg-red-400 transition-all duration-150 drop-shadow-lg ">Learn more</button>
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
                <p className="text-md mt-2">
                  REST is a set of rules that makes sure that different computer programs can give and follow the same kind of instructions, even if they are on different computers or the internet. </p>
                <button onClick={() => setWord('Representational state transfer')} className="rounded-full font-bold col-span-2 px-3 py-2 bg-orange text-white mt-4 hover:bg-red-400 transition-all duration-150 drop-shadow-lg ">Learn more</button>
              </div>
            </div>
          </div>
    </div>
    </div>
    </>
  );
};

export default Explore;
