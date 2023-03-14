import { useContext } from "react";
import { SearchContext } from "../Context/createContext";

const SelectedImages = () => {
  const { value3, value5 } = useContext(SearchContext);
  const [selectedFile, setSelectedFile] = value3;
  const [result, setResult] = value5;

  return (
    <div>
      { localStorage.getItem(selectedFile[selectedFile.length - 1]) && 
        selectedFile.map((images) => (
          <div style={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
            <img src={images}></img>
            <div>{localStorage.getItem(images).split(",")[0]}</div>
            <div>{localStorage.getItem(images).split(",")[1]}</div>
            {/* {localStorage.getItem(images)[1]} */}
          </div>
        ))}
    </div>
  );
};
{/* result &&
        selectedFile.length > 0 && */}
export default SelectedImages;
