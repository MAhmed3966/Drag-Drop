import { Routes, Route } from "react-router-dom";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Search from "../ImageGallery/Search";
import PrivateRoutes from "./PrivateRoutes";

const RouterSetup = () => {
  return (
    <Routes>
      <Route path="/" element = {(<div style={{display: 'flex', justifyContent:'center', alignItems: 'center',
       marginTop:"100px"
      }}>
          <h1>Welcome</h1>
      </div>)} />
     
      <Route path="/register" element={<Register />} />
      
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};


export default RouterSetup;