import { useContext, useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import { useDropzone } from "react-dropzone";
import { SearchContext } from "../Context/createContext";
import "./Draggables.css";

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
    // console.log(event.target);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    try {
      event.preventDefault();
      const data = event.dataTransfer.getData("text/plain");
      if (!selectedFile.includes(data)) {
        setLoader(true);
        setTimeout(() => {
          setLoader(false);
          // const imageObject = 
          setSelectedFile([...selectedFile, data]);
        }, 1000);
      } else {
        alert("Image already added");
      }
    } catch (e) {
      console.log(e);
    }
    // const file = onImageEdit(data);
    // toDataURL(data)
    // const file = event.dataTransfer.file[0];
    // setSelectedFile(file);
    // const reader = new FileReader();
    // reader.onload = () => {
    //   setSelectedFile(reader.result);
    // };
    // reader.readAsDataURL(file);
    // const data = event.dataTransfer.getData("text/plain");
    // const imageElement = document.createElement("img");
    // imageElement.src  = data;
    // event.target.appendChild(imageElement);
  };

  const handleChange = (event) => {
    setInformation({ ...information, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!(information.title && information.description)) {
      alert("Please enter All information");
    } else {
      const title = information.title;
      const description = information.description;
      localStorage.setItem(selectedFile[selectedFile.length - 1], [
        title,
        description,
      ]);
      setResult(true);
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
            <img
              src={selectedFile[selectedFile.length - 1]}
              alt="Alternative Content"
            ></img>
            <div className="formImage mt-3">
              <form>
                <div class="form-group">
                  <label for="title">Enter Title</label>
                  <input
                    type="text"
                    class="form-control"
                    id="title"
                    aria-describedby="emailHelp"
                    placeholder="Enter Title"
                    // required
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
                    // required
                    name="description"
                    onChange={handleChange}
                  />
                </div>
                <button class="btn btn-primary mt-3" onClick={handleSubmit}>
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
