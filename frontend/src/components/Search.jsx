import React, { useState, useRef } from "react";
import { TypingAnim } from './TypingAnim';

function Search() {
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
    <div>
      <div className="flex justify-center mt-12 ">
        <TypingAnim />
        <input type="text" ref={searchBar} className="text-2xl rounded-full h-20 w-screen text-black p-8 focus:outline-0"></input>
        <button type="button" onClick={getResult} className="text-white h-16 font-bold text-3xl px-8 mt-2 bg-orange rounded-full mx-4 outline outline-orange outline-8 drop-shadow-lg hover:bg-transparent hover:text-white hover:outline-white transition-all duration-300 ">
          LEARN
        </button>
      </div>
      <div>
        {searchTerm && <h1>{searchTerm}</h1>}
        <p>{searchResult}</p>
        {searchImage && <img src={searchImage} alt={searchTerm} />}
        <div>
          {searchVideosArray.length > 0 &&
            searchVideosArray.map((videoId, i) => (
              <iframe
                title="Video"
                width="420"
                height="345"
                src={"https://www.youtube.com/embed/" + videoId}
              ></iframe>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
