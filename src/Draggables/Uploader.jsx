import { useContext, useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import { useDropzone } from "react-dropzone";
import { SearchContext } from "../Context/createContext";
import "./Draggables.css";
import {
  getLocalStorageValue,
  setLocalStorageValue,
} from "../Helpers/localStorage";
// import { handleChange, handleSubmit } from "../HelpersFunctions/FileContent";

const Uploader = ({ loader, setLoader }) => {
  const { value3, value4, value5, value7, value6 } = useContext(SearchContext);
  const [isLoggedIn, setIsLoggedIn] = value7;
  const key = "content@" + isLoggedIn.loggedInUser;
  const files = "";
  useEffect(() => {}, [files]);
  const [selectedFile, setSelectedFile] = value3;
  const [information, setInformation] = value4;
  const [result, setResult] = value5;
  const [showModal, setShowModal] = value6;

  useEffect(() => {
    if (getLocalStorageValue(key) !== null) {
      const imageContent = getLocalStorageValue(
        "content@" + isLoggedIn.loggedInUser
      );
      console.log(imageContent);
      if (imageContent.hasOwnProperty(isLoggedIn.loggedInUser)) {
        setSelectedFile(imageContent[isLoggedIn.loggedInUser]);
      }
    }
  }, []);
  useEffect(() => {
    if (
      selectedFile.length > 0 &&
      selectedFile[selectedFile.length - 1].display
    ) {
      let localValue = localStorage.getItem(key)
        ? localStorage.getItem(key)
        : {};
      if (Object.keys(localValue).length === 0) {
        localValue = { [isLoggedIn.loggedInUser]: selectedFile };
      } else {
        localValue = { [isLoggedIn.loggedInUser]: selectedFile };
      }
      setLocalStorageValue(key, localValue);
      console.log(getLocalStorageValue(key));
    }
  }, [selectedFile]);

  const handleDragEnter = (event) => {
    event.preventDefault();
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
  };
  const insertImageInformation = (data) => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      const imageObject = selectedFile;
      imageObject.push({
        imagSrc: data,
        postTitle: "",
        description: "",
        title: "",
        postDescription: "",
        display: false,
      });
      setSelectedFile(imageObject);
      setLocalStorageValue(key, [{ [isLoggedIn.loggedInUser]: selectedFile }]);
      const res = getLocalStorageValue(key);
    }, 1000);
  };
  const handleImageContent = (src) => {
    setShowModal({ ...showModal, openState: true, currentFile: src });
  };
  const handleDrop = (event) => {
    try {
      event.preventDefault();
      let alreayExist = 0;
      const data = event.dataTransfer.getData("text/plain");
      if (selectedFile.length > 0) {
        selectedFile.map((file) => {
          if (file.imagSrc === data) {
            alreayExist++;
          }
        });
        if (alreayExist <= 0) {
          insertImageInformation(data);
        }
      } else {
        insertImageInformation(data);
      }
    } catch (e) {}
  };
  const updateFileState = (event) => {
    return selectedFile.map((info) => {
      if (info.imagSrc == selectedFile[selectedFile.length - 1].imagSrc) {
        if (event.target.id === "buttonClick") {
          return { ...info, display: true };
        } else if (event.target.name === "title") {
          return { ...info, title: event.target.value };
        } else {
          return { ...info, description: event.target.value };
        }
      }
      return info;
    });
  };
  
  return (
    <div className="container" style={{ display: loader ? "none" : "block" }}>
      <div
        style={{ height: "1000px" }}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        Drag image here
        {console.log(selectedFile)}
        {selectedFile.length > 0 && (
          <div style={{ color: "black" }}>
            {selectedFile.map((images) => {
              return (
                <img
                  src={images.imagSrc}
                  onClick={() => {
                    console.log("checking if work");
                    handleImageContent(images.imagSrc);
                  }}
                  alt="Alternative Content"
                ></img>
              );
            })}
          </div>
        )}
      </div>
      <div></div>
    </div>
  );
};

export default Uploader;
