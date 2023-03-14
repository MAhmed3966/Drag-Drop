import { useState } from "react";
import { SearchContext } from "./Context/createContext";
import Search from "./ImageGallery/Search";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
function App() {
  const [selectedFile, setSelectedFile] = useState([]);
  const [query, setQuery] = useState("Mountain");
  const [image, setImage] = useState([]);
  const [result, setResult] = useState(false);
  const [information, setInformation] = useState({
    title: "",
    description: "",
  });
  return (
    <div className="App">
      {/* <DndProvider backend={HTML5Backend}> */}
      <SearchContext.Provider
        value={{
          value1: [query, setQuery],
          value2: [image, setImage],
          value3: [selectedFile, setSelectedFile],
          value4: [information, setInformation],
          value5: [result, setResult],
        }}
      >
        {/* <Uploader /> */}
        <Search></Search>
      </SearchContext.Provider>
      {/* </DndProvider> */}
    </div>
  );
}

export default App;
