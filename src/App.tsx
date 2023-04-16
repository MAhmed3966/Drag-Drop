import "./index.css";
import { useEffect, useState } from "react";
import { SearchContext } from './Context/createContext';
import Search from "./ImageGallery/Search";

import Modal from "react-overlays/Modal";
import ModalContent from "./Modal/ModalContent";
import Navbar from "./Navbar";
import RouterSetup from "./Routes/Routes";
import PrivateRoutes from "./Routes/PrivateRoutes";
import { Navigate } from "react-router-dom";
import React from "react";
const renderBackdrop = () => {
  return (
    <div className="backdrop">
      <ModalContent />
    </div>
  );
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState({
    loggedIn: false,
    loggedInUser: "",
  });
  const [selectedFile, setSelectedFile] = useState<any[]>([]);
  const [query, setQuery] = useState("Mountain");
  const [image, setImage] = useState<any[]>([]);
  const [result, setResult] = useState(false);
  const [information, setInformation] = useState({
    title: "",
    description: "",
  });
  const [showModal, setShowModal] = useState({
    openState: false,
    currentFile: "",
  });
  useEffect(() => {}, []);

  const handleClose = () => {
    setShowModal({ ...showModal, openState: false });
  };

  const handleShow = () => {
    return showModal.openState;
  };

  // const

  return (
    <div className="App">
      <SearchContext.Provider
        value={{
          isLoggedIn,
          selectedFile,
          query,
          image,
          result,
          information,
          showModal,
          setIsLoggedIn,
          setSelectedFile,
          setQuery,
          setImage,
          setResult,
          setInformation,
          setShowModal,
        }}
      >
        <Navbar />
        <RouterSetup />

        <PrivateRoutes />
        <Modal
          className="modal"
          show={showModal.openState}
          onHide={handleClose}
          renderBackdrop={renderBackdrop}
        >
          <h1>hello</h1>
        </Modal>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
