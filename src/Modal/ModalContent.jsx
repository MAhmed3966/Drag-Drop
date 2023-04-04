import { useContext } from "react";
import { SearchContext } from "../Context/createContext";
import "./Modal.css";
const ModalContent = () => {
  const { value3, value6 } = useContext(SearchContext);
  const [showModal, setShowModal] = value6;
  const [selectedFile, setSelectedFile] = value3;

  const updateFileState = (event) => {
    console.log(showModal.currentFile);
    return selectedFile.map((info) => {
      if (info.imagSrc == showModal.currentFile) {
        if (event.target.id === "buttonClick") {
          return { ...info, display: true };
        } else {
          return { ...info, [event.target.name]: event.target.value };
        }
      }
      return info;
    });
  };

  const handleChange = (event) => {
    const newInformation = updateFileState(event);
    console.log(newInformation);
    setSelectedFile(newInformation);

  };
  const handleSubmit = (event) => {
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

  const getDefaultValue = (name) => {
    let currentFile = selectedFile.find((file) => {
      if (file.imagSrc === showModal.currentFile) { 
         return file
      }
      
    });
    console.log(currentFile)
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
            <div class="form-group">
              <label htmlFor="description" className="content-modal">
                Enter Image Title
              </label>
              <input
                type="text"
                class="form-control"
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
                class="form-control"
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
                class="form-control"
                id="postTitle"
                keyval={selectedFile[selectedFile.length - 1].imagSrc}
                placeholder="Enter Title"
                onChange={handleChange}
                name="postTitle"
                defaultValue={getDefaultValue("postTitle")}
              />
            </div>
            <div class="form-group">
              <label htmlFor="postDescription" className="content-modal">
                Enter Post Description
              </label>
              <textarea
                type="text"
                class="form-control"
                id="postDescription"
                placeholder="Description"
                name="postDescription"
                onChange={handleChange}
                defaultValue={getDefaultValue("postDescription")}
              />
            </div>
            <button
              class="btn btn-primary mt-5"
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
