import React from "react";

function Search({ search, setsearch }) {
  const handleSearch = (e) => {
    setsearch(e.target.value);
  };

  return (
    <div className="searchbar">
      <label htmlFor="search"></label>
      <input
        type="text"
        id="search"
        placeholder="  Search"
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
