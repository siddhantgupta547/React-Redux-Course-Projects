import React from "react";

import "./Search.css";

function Search({ placeholder, handleSearch }) {
  return (
    <div class="search">
      <input type="text" placeholder={placeholder} onChange={handleSearch} />
    </div>
  );
}

export default Search;
