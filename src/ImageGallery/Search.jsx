import axios from "axios";
import { useContext, useEffect } from "react";
import { SearchContext } from "../Context/createContext";
import "./Generic.css";
import ImageGallery from "./Image";
import RecommendedSearch from "./RecommendSearches";
const Search = () => {
  const { value1, value2 } = useContext(SearchContext);
  const [query, setQuery] = value1;
  const [image, setImage] = value2;
  const onSubmit = (event) => {
    event.preventDefault();
    const apiKey = "65d530e2249159669eb881d2f3883031";
    const api_link = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=50&format=json&nojsoncallback=1
`;
    const response = axios.get(api_link).then((data) => {
      if (data) {
        setImage(data.data.photos.photo);
      }
    });
  };
  useEffect(() => {
    const apiKey = "65d530e2249159669eb881d2f3883031";
    const api_link = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1
`;
    const response = axios.get(api_link).then((data) => {
      if (data) {
        setImage(data.data.photos.photo);
      }
    });
  }, [query]);
  return (
    <div className="container">
      <div
        key={query}
        style={{ marginLeft: "40%", marginBottom: "100px", marginTop: "50px" }}
      >
        <form onSubmit={onSubmit}>
          <input
            type="search"
            name="search"
            defaultValue={query}
            // value={query}
            onBlur={(e) => {
              if (e.target.value !== "undefined") {
                setQuery(e.target.value);
              }
            }}
          ></input>
          <button
            type="submit"
            name="search"
            disabled={query === "" ? true : ""}
          >
            Search
          </button>
        </form>
      </div>
      <div>
        <RecommendedSearch />
      </div>
      <ImageGallery />
    </div>
  );
};

export default Search;
