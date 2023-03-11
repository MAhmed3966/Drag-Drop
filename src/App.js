import { useState } from "react";
import { SearchContext } from "./Context/createContext";
import FirstColumn from "./Drabbles/FirstColumn";
import SecondColumn from "./Drabbles/SecondColumn";
import Search from "./ImageGallery/Search";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import MovableItem from "./Drabbles/MoveableItem";
function App() {
  const [isFirstColumn, setIsFirstColumn] = useState(true);
  const Item = (
    <MovableItem
      isFirstColumn={isFirstColumn}
      setIsFirstColumn={setIsFirstColumn}
    />
  );
  const [query, setQuery] = useState("Mountain");
  const [image, setImage] = useState([]);
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "row",
        // justifyContent: "space-around",
      }}
    >
      {/* <SearchContext.Provider
        value={{
          value1: [query, setQuery],
          value2: [image, setImage],
        }}
      >
        <Search></Search>
      </SearchContext.Provider> */}

      <DndProvider backend={HTML5Backend}>
        <FirstColumn title="First Column" className="column first-column">
          {/* {
            <MovableItem
              isFirstColumn={isFirstColumn}
              setIsFirstColumn={setIsFirstColumn}
            />
          } */}
          { Item}
        </FirstColumn>
        <FirstColumn title="Second Column" className="column second-column">
          {!isFirstColumn && Item}
        </FirstColumn>
        {/* <SecondColumn /> */}
      </DndProvider>
    </div>
  );
}

export default App;
