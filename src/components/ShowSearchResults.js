import React from "react";
import { useState } from "react";
import "../App.css";
import { FcSpeaker } from "react-icons/fc";

function ShowSearchResult(props) {
  const data = props.result;
  function playAudio() {
    if (data.phonetics[0].audio) {
      let audio = new Audio(data.phonetics[0].audio);
      audio.play();
    } else {
      window.alert("No audio Found for " + data.word);
    }
  }

  return (
    <>
      {data && (
        <div className="showResults">
          <h2>
            {data.word}{" "}
            <button
              onClick={() => {
                playAudio();
              }}
            >
              <FcSpeaker size="26px" />
            </button>
          </h2>
          <h4>Parts of speech:</h4>
          <p>{data.meanings[0].partOfSpeech}</p>

          <h4>Definition:</h4>
          <p>{data.meanings[0].definitions[0].definition}</p>

          <h4>Example:</h4>
          <p>{data.meanings[0].definitions[0].example}</p>
        </div>
      )}
    </>
  );
}

export default ShowSearchResult;
