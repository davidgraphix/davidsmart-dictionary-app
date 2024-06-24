import React from "react";
import "../App.css";
import { useState } from "react";
import Axios from "axios";
import { FaSearch } from "react-icons/fa";
import ShowSearchResult from "./ShowSearchResults";

function SearchMenu() {
  const [searchWord, setSearchWord] = useState("");
  const [data, setData] = useState("");

  function getMeaning() {
    Axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchWord}`
    ).then((response) => {
      setData(response.data[0]);
    });
  }

  return (
    <>
      <div className="searchBox">
        <input
          type="text"
          placeholder="Search Word..."
          onChange={(e) => {
            setSearchWord(e.target.value);
          }}
        />
        <button
          onClick={() => {
            getMeaning();
          }}
        >
          <FaSearch size="20px" />
        </button>
      </div>
      <ShowSearchResult result={data} />
    </>
  );
}

export default SearchMenu;
