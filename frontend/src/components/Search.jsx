import React, { useState, useRef } from "react";
import { TypingAnim } from './TypingAnim';

function Search (props) {
  const [animStyle, setAnimStyle] = useState("visible");
  const searchBar = useRef();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState(false);
  const [searchImage, setSearchImage] = useState(false);
  const [searchVideosArray, setSearchVideosArray] = useState([]);

  const getResult = async () => {
    let term = searchBar.current.value.trim();
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
        props.handleClick();

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
  };

  const disappear = () => {
    setAnimStyle("hidden");
  }

  return (
    <div className="h-auto">
      <div className="flex justify-center mt-12 px-20 h-auto">
        <TypingAnim />
        <input type="text" ref={searchBar} className="text-2xl rounded-full h-20 w-screen text-black p-8 focus:outline-0"></input>
        <button type="button" onClick={getResult} className="text-white h-16 font-bold text-3xl px-8 mt-2 bg-orange rounded-full mx-4 outline outline-orange outline-8 drop-shadow-lg hover:bg-transparent hover:text-white hover:outline-white transition-all duration-300 " data-aos="zoom-out" >
          LEARN
        </button>
      </div>
      <div className="h-auto" >
        {searchTerm && <h1 className="font-extrabold text-7xl text-blue mt-20 px-20" data-aos="zoom-in">{searchTerm}</h1>}
        <p className="text-lg mt-4 px-20" data-aos="slide-down">{searchResult}</p>
        {searchImage && <img src={searchImage} alt={searchTerm} className="w-auto h-auto mx-auto my-20 rounded-full" data-aos="fade-up" />}
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
                className="mb-8 mt-0"
                data-aos="fade-down"
              ></iframe>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
