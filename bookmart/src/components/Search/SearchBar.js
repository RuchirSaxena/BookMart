import React,{useState} from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from '@mui/icons-material/Close';

const data = [
  {
    title: "Things Fall Apart",
    author: "Chinua Achene",
    year: 1958,
  },
  {
    title: "Fairy Tales",
    author: "Hans Christian Anderson",
    year: 1836,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
  },
  {
    title: "Game of Thrones",
    author: "Jane Austen",
    year: 1813,
  },
  {
    title: "Dragon Tales",
    author: "Chinua Achene",
    year: 1958,
  },
  {
    title: "Love Story",
    author: "Hans Christian Anderson",
    year: 1836,
  },
  {
    title: "The Truth that Lies Beyond",
    author: "Jane Austen",
    year: 1813,
  },
  {
    title: "Money in the Bank",
    author: "Jane Austen",
    year: 1813,
  },
  {
    title: "One Man In The Sea",
    author: "Jane Austen",
    year: 1813,
  },
  {
    title: "Poems",
    author: "Jane Austen",
    year: 1813,
  },
  {
    title: "Diary of a Madman",
    author: "Jane Austen",
    year: 1813,
  },
  {
    title: "Children of Gebelawi",
    author: "Chinua Achene",
    year: 1958,
  },
  {
    title: "The Magic Mountain",
    author: "Hans Christian Anderson",
    year: 1836,
  },
];
const SearchBar = ({ placeholder}) => {
    const [filteredData,setFilteredData]= useState([]);
    const [wordEntered,setWordEntered]= useState("");
    const handleFilter = (event) => {
     const searchWord  = event.target.value;
     setWordEntered(searchWord)
     const  newFilter = data.filter((value) => {
        return value.title.toLowerCase().includes(searchWord.toLowerCase());
     });

     if(searchWord === ""){
        setFilteredData([])
     }else{
        setFilteredData(newFilter);
     }
    };
    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    }
  return (
    <div className="search">
      <div className="searchInputs">
        <input type="text" placeholder={placeholder} value={wordEntered} onChange= {handleFilter}/>
        <div className="searchIcon">
            {wordEntered.length === 0?    <SearchIcon />: <CloseIcon id="clearBtn" onClick={clearInput}/> }
       
        </div>
      </div>
      {filteredData.length !==0 && (
      <div className="dataResult">
        {filteredData.slice(0,15).map((value, key) => {
          return (
            <div className="dataItem">
            <p>{value.title}</p>
            </div>
          );
        })}
      </div>
)}
    </div>
  );
};

export default SearchBar;
