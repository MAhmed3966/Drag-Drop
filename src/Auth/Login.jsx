import "./auth.css";
import { useNavigate } from "react-router-dom";
import { useContext} from "react";
import { SearchContext } from "../Context/createContext";
const Login = () => {
  const { value7 } = useContext(SearchContext);
  const [isLoggedIn, setIsLoggedIn] = value7;
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = document.forms[0];
    const credentials = JSON.parse(localStorage.getItem(form.elements[0].value))
    console.log(form.elements[0].value, form.elements[1].value)
    console.log(form.elements[1].value)
    if(credentials.password === form.elements[1].value) {
      setIsLoggedIn({...isLoggedIn, loggedIn:true, loggedInUser:form.elements[0].value})
      console.log(setIsLoggedIn)
      navigate('/imageGallery')
    } else {
      alert("Invalid credentials")
    }
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4" id="login">
          
          <form id="login" onSubmit={handleSubmit}>
          <h1>Login Form</h1>
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

export default Login;
