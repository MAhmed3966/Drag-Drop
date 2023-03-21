import { useContext } from "react";
import { SearchContext } from "../Context/createContext";
import "./Modal.css";
const ModalContent = () => {

  const { value3, value6 } = useContext(SearchContext);
  const [showModal, setShowModal] = value6;
  const [selectedFile, setSelectedFile] = value3;
  const handleChange = (event) => {
    const newInformation = updateFileState(event);
    setSelectedFile(newInformation);

    // setInformation({ ...information, [event.target.name]: event.target.value });
  };
  const updateFileState = (event) => {
    console.log(showModal.selectedFile)
    return selectedFile.map((info) => {
      if (info.imagSrc == showModal.currentFile) {
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
      alert('Information updated')
      setShowModal({...showModal, openState:false})
      // setShow
      // setSelectedFile(updateFileState(event));
    }
  };
  return (
    <div className="">
      <div className="modal-content-custom">
        <div className="modal-header">
          <div className="modal-title content-modal">Edit Image Content</div>
          <div onClick={()=>{setShowModal({...showModal, openState:false})}}>
            <span className="close-button">x</span>
          </div>
        </div>
        <div className="modal-desc">
          <form>
            <div class="form-group">
              <label htmlFor="title" className="content-modal">
                Enter Title
              </label>
              <input
                type="text"
                class="form-control"
                id="title"
                keyval={selectedFile[selectedFile.length - 1].imagSrc}
                aria-describedby="emailHelp"
                placeholder="Enter Title"
                defaultValue={""}
                onChange={handleChange}
                name="title"
                //   onChange={handleChange}
              />
            </div>
            <div class="form-group">
              <label htmlFor="description" className="content-modal">
                Enter Description
              </label>
              <input
                type="text"
                class="form-control"
                id="description"
                placeholder="Description"
                name="description"
                onChange={handleChange}
                defaultValue={""}
                //   keyval={selectedFile[selectedFile.length - 1].imagSrc}
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
