import React from "react";
import "./App.css";
import SearchMenu from "./components/SearchMenu";
import ShowSearchResult from "./components/ShowSearchResults";

function App() {
  return (
    <div className="App">
      <h1>David Smart Dictionary</h1>
      <SearchMenu />
      <ShowSearchResult />
    </div>
  );
}

export default App;
