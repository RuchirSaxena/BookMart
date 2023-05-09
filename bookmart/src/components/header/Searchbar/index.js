import React, { useState } from "react";
import "./index.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
const Searchbar = () => {
  const [wordEntered, setWordEntered] = useState("");
  const handleFilter = (e) => {
    setWordEntered(e.target.value);
  };
  const clearInput = () => {
    setWordEntered("");
  };
  return (
    <div className="input-box">
      <input
        type="text"
        placeholder="Search your book..."
        value={wordEntered}
        onChange={handleFilter}
      />
      <div className="searchIcon">
        {wordEntered.length === 0 ? (
          <SearchIcon />
        ) : (
          <CloseIcon id="clearBtn" onClick={clearInput} />
        )}
      </div>
    </div>
  );
};

export default Searchbar;
