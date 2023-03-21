import { useContext } from "react";
import { SearchContext } from "../Context/createContext";

const SelectedImages = () => {
  const { value3, value5, value6 } = useContext(SearchContext);
  const [selectedFile, setSelectedFile] = value3;
  const [showModal, setShowModal] = value6;
  const [result, setResult] = value5;
  const handleOperation = (e, operation) => {
    e.preventDefault();
    if (operation === "edit") {
      console.log(e.target.href)
      try {
        setShowModal({
          ...showModal,
          currentFile: e.target.href,
          openState: true,
        });
        console.log(showModal)
        // setShowModal({ ...showModal, });
      } catch (e) {}
    } else {
      // setShowModal({
      //   ...showModal,
      //   currentFile: e.target.href,
      //   // openState: true,
      // });
      const filterArray = selectedFile.filter((file) => {
        console.log(file.imagSrc)
        console.log(e.target.href)
        return file.imagSrc !== e.target.href;
      });
      setSelectedFile(filterArray);
      // setSele
    }
  };
  return (
    <div>
      {selectedFile.map((images) => {
        if (images.description && images.title && images.display) {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <img src={images.imagSrc}></img>
              <div>{images.title}</div>
              <div>{images.description}</div>
              <a
                href={images.imagSrc}
                onClick={(e) => {
                  handleOperation(e, "edit");
                }}
              >
                Edit
              </a>
              <a
                href={images.imagSrc}
                onClick={(e) => {
                  handleOperation(e, "delete");
                }}
              >
                Delete
              </a>
              {/* {localStorage.getItem(images)[1]} */}
            </div>
          );
        }
      })}
    </div>
  );
};
{
  /* result &&
        selectedFile.length > 0 && */
}
export default SelectedImages;
