import { useContext} from "react";
import { Route, Navigate, Routes} from "react-router-dom";
import { SearchContext } from "../Context/createContext";
import Search from "../ImageGallery/Search";
import React from "react";

const PrivateRoutes = () => {
  const { isLoggedIn } = useContext(SearchContext);
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
