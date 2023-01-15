import React, { useState, useRef } from "react";

function Search() {
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

  return (
    <div className = "flex justify-center">
      <input type="text" ref={searchBar} className="rounded-full h-20 w-screen"/>
      <button type="button" onClick={getResult}>
        LEARN
      </button>
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
                src={"https://www.youtube.com/embed/"+videoId}
              ></iframe>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
