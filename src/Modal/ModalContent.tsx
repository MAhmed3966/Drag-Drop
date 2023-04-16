import { useContext } from "react";
import { SearchContext } from "../Context/createContext";
import "./Modal.css";
import React from "react";
const ModalContent = () => {
  const { selectedFile, setSelectedFile, showModal, setShowModal } =
  useContext(SearchContext);

  const updateFileState = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log(showModal.currentFile);
    return selectedFile.map((info) => {
      if (info.imagSrc === showModal.currentFile) {
        if ((event.target as HTMLButtonElement).id === "buttonClick") {
          return { ...info, display: true };
        } else {
          return { ...info, [(event.target as HTMLButtonElement).name]: (event.target as HTMLButtonElement).value };
        }
      }
      return info;
    });
  };

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newInformation = updateFileState(event);
    console.log(newInformation);
    setSelectedFile(newInformation);
  };
  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    let currentFile = selectedFile.find(
      (file) => file.imagSrc === showModal.currentFile
    );
    console.log(currentFile, showModal.currentFile);
    if (
      currentFile.description === undefined &&
      currentFile.title === undefined
    ) {
      alert("Please enter All information");
    } else {
      alert("Information updated");
      setShowModal({ ...showModal, openState: false });
      // setShow
      setSelectedFile(updateFileState(event));
    }
  };

  const getDefaultValue = (name: string) => {
    let currentFile = selectedFile.find((file) => {
      if (file.imagSrc === showModal.currentFile) {
        return file;
      }
    });
    console.log(currentFile);
    return currentFile[name];
  };
  return (
    <div className="">
      <div className="modal-content-custom">
        <div className="modal-header">
          <div className="modal-title content-modal">Edit Image Content</div>
          <div
            onClick={() => {
              setShowModal({ ...showModal, openState: false });
            }}
          >
            <span className="close-button">x</span>
          </div>
        </div>
        <div className="modal-desc">
          <form>
            <div className="form-group">
              <label htmlFor="description" className="content-modal">
                Enter Image Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Enter Image Title"
                name="title"
                onChange={handleChange}
                defaultValue={getDefaultValue("title")}
              />
              <label htmlFor="description" className="content-modal">
                Enter Image Description
              </label>
              <input
                type="text"
                className="form-control"
                id=""
                placeholder="Description"
                name="description"
                onChange={handleChange}
                defaultValue={getDefaultValue("description")}
              />
              <label htmlFor="postTitle" className="content-modal">
                Enter Post Title
              </label>
              <input
                type="text"
                className="form-control"
                id="postTitle"
                placeholder="Enter Title"
                onChange={handleChange}
                name="postTitle"
                defaultValue={getDefaultValue("postTitle")}
              />
            </div>
            <div className="form-group">
              <label htmlFor="postDescription" className="content-modal">
                Enter Post Description
              </label>
              <textarea
                className="form-control"
                id="postDescription"
                placeholder="Description"
                name="postDescription"
                onChange={handleChange}
                defaultValue={getDefaultValue("postDescription")}
              />
            </div>
            <button
              className="btn btn-primary mt-5"
              id="buttonClick"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalContent;
