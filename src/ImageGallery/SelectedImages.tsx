import { useContext } from "react";
import { SearchContext } from "../Context/createContext";
import React from "react";

const SelectedImages = () => {
  const {
    selectedFile,
    setSelectedFile,
    showModal,
    setShowModal,
    result,
    setResult,
  } = useContext(SearchContext);
  const handleOperation = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    operation: string
  ) => {
    e.preventDefault();
    if (operation === "edit") {
      try {
        const href = e.target as HTMLAnchorElement;
        if (href) {
          setShowModal({
            ...showModal,
            currentFile: href.href,
            openState: true,
          });
        }
        // setShowModal({ ...showModal, });
      } catch (e) {}
    } else {
      const href = e.target as HTMLAnchorElement;
      const filterArray = selectedFile.filter((file) => {
        return file.imagSrc !== href.href;
      });
      setSelectedFile(filterArray);
      // setSele
    }
  };
  return (
    <div>
      {selectedFile.map((images) => {
        {
          /* if (images.description && images.title && images.display) { */
        }
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <img src={images.imagSrc}></img>
            <div>{images.postTitle}</div>
            <div>{images.postDescription}</div>
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
        {
          /* } */
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
