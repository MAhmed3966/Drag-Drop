import { useContext, useState } from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import { SearchContext } from "../Context/createContext";
import Search from "../ImageGallery/Search";

const PrivateRoutes = () => {
  const { value7 } = useContext(SearchContext);
  const [isLoggedIn, setIsLoggedIn] = value7;
  return (
    <Routes>
      {console.log(isLoggedIn)}
      {isLoggedIn ? (
        <Route path="/imageGallery" element={<Search />} />
      ) : (
        <Navigate to="/dashboard" replace={true} />
      )}
    </Routes>
  );
};

export default PrivateRoutes;
