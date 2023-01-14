import React, { useState, useRef } from "react";

function Search() {
  const searchBar = useRef();

  const getResult = () => {};

  return (
    <>
      <div>Welp! CSS DNE on this page</div>
      <input type="text" ref={searchBar} />
      <button type="button" onCLick={getResult} />
    </>
  );
}

export default Search;
