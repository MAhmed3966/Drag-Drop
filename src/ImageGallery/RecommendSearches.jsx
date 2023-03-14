import axios from "axios";
import { useContext, useEffect } from "react";
import { SearchContext } from "../Context/createContext";
import './Generic.css';
const RecommendedSearch = () => {
  const { value1, value2 } = useContext(SearchContext);
  const [query, setQuery] = value1;

 

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      
      }}
    >
      <p className="searchMenu"  
        onClick={() => {
          setQuery("Mountain");
        }}
      >
        Mountain{" "}
      </p>
      <p className="searchMenu" 
        onClick={() => {
          setQuery("Beaches");
        }}
      >
        Beaches
      </p>
      <p className="searchMenu" 
        onClick={() => {
          setQuery("Birds");
        }}
      >
        Birds
      </p>
      <p className="searchMenu" 
        onClick={() => {
          setQuery("Food");
        }}
      >
        Food
      </p>
    </div>
  );
};

export default RecommendedSearch;
