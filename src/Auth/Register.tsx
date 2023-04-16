import { useContext } from "react";
import { SearchContext } from "../Context/createContext";
import "./auth.css";
import { useNavigate } from "react-router-dom";
import { FormValues } from "../Interfaces/interfaces";
import React from "react";
const Register = () => {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useContext(SearchContext);
  const handleChange = () => {};
  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    const currentObject: FormValues = {
    };
    event.preventDefault();
    const form = document.forms[0];
    let element = form.elements[0] as HTMLInputElement | HTMLSelectElement;
    for (let i = 0; i < form.length; i++) {
      element = form.elements[i] as HTMLInputElement | HTMLSelectElement;
      if (element.name !== "") {
        currentObject[element.name] = (element as HTMLInputElement).value;
      }
      if (element.name !== "") {
        currentObject[element.name] = element.value;
      }
    }
    let isNotNull: string = "";
    if (currentObject.email !== undefined) {
      const item = localStorage.getItem(currentObject.email as string);
      if (item !== null) {
        isNotNull = item;
      }
    }

    if (isNotNull) {
      navigate("/login");
    } else {
      if (currentObject) {
        localStorage.setItem(
          currentObject.email as string,
          JSON.stringify(currentObject)
        );
        setIsLoggedIn({
          ...isLoggedIn,
          loggedIn: true,
          loggedInUser: element.value,
        });
        navigate("/imageGallery");
      }
    }
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4" id="register">
          <form id="login" onSubmit={handleSubmit}>
            <h1>Register Form</h1>
            <div className="form-group">
              <label htmlFor="title">Enter Name</label>
              <input
                type="text"
                className="form-control"
                id="title"
                aria-describedby="emailHelp"
                placeholder="Enter Email"
                defaultValue={""}
                name="name"
                onChange={handleChange}
              />
            </div>
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
                onChange={handleChange}
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
                onChange={handleChange}
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

export default Register;
