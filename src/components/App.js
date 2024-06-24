import React from "react";
import SearchMenu from "./SearchMenu";
import ShowSearchResult from "./ShowSearchResults";
import "../App.css";

const App = () => {
  return (
    <div className="App">
      <h1>David's Dictionary App</h1>
      <SearchMenu />
    </div>
  );
};

export default App;