import { useContext, useState } from "react";
import { Route, Navigate, Routes, useNavigate } from "react-router-dom";
import { SearchContext } from "../Context/createContext";
import Search from "../ImageGallery/Search";

const PrivateRoutes = () => {
  const navigate = useNavigate();
  const { value7 } = useContext(SearchContext);
  const [isLoggedIn, setIsLoggedIn] = value7;
  return (
    <Routes>
      <Route
        path="/imageGallery"
        element={isLoggedIn.loggedIn ? <Search /> : <Navigate to="/" />}
      />
    </Routes>
  );
};

export default PrivateRoutes;

