import { useContext} from "react";
import { SearchContext } from "../Context/createContext";
import "./auth.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate()
  const { value7 } = useContext(SearchContext);
  const [isLoggedIn, setIsLoggedIn] = value7;
  const handleChange = () => {};
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = document.forms[0];
    let text = "";
    const currentObject = {};
    for (let i = 0; i < form.length; i++) {
      if (form.elements[i].name !== "") {
        currentObject[form.elements[i].name] = form.elements[i].value;
      }
    }
    let isNull = localStorage.getItem(currentObject["email"]);
    if (isNull) {
      navigate("/login");
    } else {
      localStorage.setItem(currentObject.email, JSON.stringify(currentObject));
      setIsLoggedIn({
        ...isLoggedIn,
        loggedIn: true,
        loggedInUser: form.elements[0].value,
      });
      navigate("/");
    }
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4" id="register">
          <form id="login" onSubmit={handleSubmit}>
            <h1>Register Form</h1>
            <div class="form-group">
              <label htmlFor="title">Enter Name</label>
              <input
                type="text"
                class="form-control"
                id="title"
                aria-describedby="emailHelp"
                placeholder="Enter Email"
                defaultValue={""}
                name="name"
                onChange={handleChange}
              />
            </div>
            <div class="form-group">
              <label htmlFor="title">Enter Email</label>
              <input
                type="email"
                class="form-control"
                id="title"
                aria-describedby="emailHelp"
                placeholder="Enter Email"
                defaultValue={""}
                name="email"
                onChange={handleChange}
              />
            </div>
            <div class="form-group">
              <label for="description">Enter Password</label>
              <input
                type="password"
                class="form-control"
                id="description"
                placeholder="Enter Password"
                defaultValue={""}
                name="password"
                onChange={handleChange}
              />
            </div>
            <button class="btn btn-primary mt-3" id="buttonClick">
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
