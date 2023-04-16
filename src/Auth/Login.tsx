import "./auth.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { SearchContext } from "../Context/createContext";
import React from "react";

const Login: React.FC<{}> = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(SearchContext);
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = document.forms[0];
    const email = form.elements[0] as HTMLInputElement;
    const password = form.elements[1] as HTMLInputElement;
    console.log(password, email);
    // if(password){
    //     console.log(password.value)
    // }
    let localValue = localStorage.getItem(email.value);
    if (localValue && email && password) {
      const credentials = JSON.parse(localValue);
      console.log(credentials.password, password.value);
      if (credentials.password === password.value) {
        setIsLoggedIn({
          ...isLoggedIn,
          loggedIn: true,
          loggedInUser: email.value,
        });
        navigate("/imageGallery");
      } else {
        // alert("Invalid credentials");
      }
    }
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4" id="login">
          <form id="login" onSubmit={handleSubmit}>
            <h1>Login Form</h1>
            <div className="form-group">
              <label htmlFor="title">Enter Email</label>
              <input
                type="email"
                className="form-control"
                id="title"
                aria-describedby="emailHelp"
                placeholder="Enter Email"
                defaultValue={""}
                name="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Enter Password</label>
              <input
                type="password"
                className="form-control"
                id="description"
                placeholder="Enter Password"
                defaultValue={""}
                name="password"
              />
            </div>
            <button className="btn btn-primary mt-3" id="buttonClick">
              Submit
            </button>
          </form>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default Login;
