import React from "react";
import SearchMenu from "./SearchMenu";
import ShowSearchResult from "./ShowSearchResults";
import "../App.css";

const App = () => {
  return (
    <div className="App">
      <h1>David Smart Dictionary app</h1>
      <SearchMenu />
      <ShowSearchResult />
    </div>
  );
};

export default App;
