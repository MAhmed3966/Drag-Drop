import { useContext, useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import { useDropzone } from "react-dropzone";
import { SearchContext } from "../Context/createContext";
import "./Draggables.css";
// import { handleChange, handleSubmit } from "../HelpersFunctions/FileContent";

const Uploader = ({ loader, setLoader }) => {
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({});
  const files = "";
  useEffect(() => {}, [files]);
  const { value3, value4, value5 } = useContext(SearchContext);
  const [selectedFile, setSelectedFile] = value3;
  const [information, setInformation] = value4;
  const [result, setResult] = value5;

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
        title: "",
        description: "",
        display: false,
      });
      setSelectedFile(imageObject);
    }, 1000);
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
          
        // } else {
        //   alert("image already added");
        // }
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
  const handleChange = (event) => {
    const newInformation = updateFileState(event);
    setSelectedFile(newInformation);
    // setInformation({ ...information, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !(
        selectedFile[selectedFile.length - 1].title &&
        selectedFile[selectedFile.length - 1].description
      )
    ) {
      alert("Please enter All information");
    } else {
      setSelectedFile(updateFileState(event));
    }
  };
  return (
    <div className="container" style={{ display: loader ? "none" : "block" }}>
      <div
        style={{ height: "1000px" }}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        Drag image here
        {selectedFile.length > 0 && (
          <div style={{ color: "black" }}>
            {selectedFile.map((images) => {
              return <img src={images.imagSrc} alt="Alternative Content"></img>;
            })}
            <div className="formImage mt-3">
              <form>
                <div class="form-group">
                  <label for="title">Enter Title</label>
                  <input
                    type="text"
                    class="form-control"
                    id="title"
                    keyval={selectedFile[selectedFile.length - 1].imagSrc}
                    aria-describedby="emailHelp"
                    placeholder="Enter Title"
                    defaultValue={""}
                    name="title"
                    onChange={handleChange}
                  />
                </div>
                <div class="form-group">
                  <label for="description">Description</label>
                  <input
                    type="text"
                    class="form-control"
                    id="description"
                    placeholder="Description"
                    name="description"
                    onChange={handleChange}
                    defaultValue={""}
                    keyval={selectedFile[selectedFile.length - 1].imagSrc}
                  />
                </div>
                <button
                  class="btn btn-primary mt-3"
                  id="buttonClick"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
      <div></div>
    </div>
  );
};

export default Uploader;
