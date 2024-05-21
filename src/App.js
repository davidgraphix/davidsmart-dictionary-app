import React from "react";
import { useState } from "react";
import Axios from "axios";
import "./App.css";
import { FaSearch } from "react-icons/fa";
import { FcSpeaker } from "react-icons/fc";

function App() {
  const [data, setData] = useState("");
  const [searchWord, setSearchWord] = useState("");


  function getMeaning() {
    Axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchWord}`).then((response) =>{
      setData(response.data[0]);
    });
  }


  function playAudio(){
    let audio = new Audio(data.phonetics[0].audio);
    audio.play();
  }
}

export default App;