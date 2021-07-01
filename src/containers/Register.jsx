import React from "react";
import axios from "axios";
import "../styles/Register.css";
import {Link, Redirect} from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../store/user";
import Alert from "react-bootstrap/Alert";

const Register = () => {
  const dispatch = useDispatch();

  const [inputRegistro, setInputRegistro] = React.useState({});
  const [passwordValidator, setPasswordValidator] = React.useState(true);
  const [emailValidator, setEmailValidator] = React.useState(true);

  const handleChange = (e) => {
    e.preventDefault();
    const key = e.target.name;
    const value = e.target.value;
    setInputRegistro({ ...inputRegistro, [key]: value });
  };

  const handlerBlur = (e) => {    
    if (e.target.name === "email") {

      let result = /(?=.*@)(?=.*\.).{8,}/.test(e.target.value);
      setInputRegistro({ ...inputRegistro, email: e.target.value });
      if(result){setEmailValidator(true) }
      else{setEmailValidator(false)}
    }
    if (e.target.name === "password") {
      let result = /(^[A-Z])(?=.*\d).{6,}/.test(e.target.value);
      setInputRegistro({ ...inputRegistro, password: e.target.value });
      if(result){setPasswordValidator(true) }
      else{setPasswordValidator(false)}
    } 
  };

  const IsButtonDisable = (input) => {
    return !!Object.values(input).filter((item) => item.length < 2).length;
}

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRegistro);
    axios.post("/api/users/register", inputRegistro)
    .then((res) => {
      dispatch(setUser(res.data.user));
      localStorage.setItem("token", JSON.stringify(res.data.token)); 
      return <Redirect to="/"></Redirect>; 
    })
  };

  return (
    <div className="register">
      <div class="container-fluid" />
      <br />
      <h3>Welcome BookGuru !</h3> <br />
      <p>Please fill in this form to create an account</p>
      <form class="formulario container-fluid" onSubmit={handleSubmit}>
        <label for="">
          {" "}
          Name <br />{" "}
          <input
            className="formulario container-fluid"
            type="text"
            name="name"
            placeholder=""
            required
            onChange={handleChange}
          />
        </label>{" "}
        <br />
        <label for="">
          {" "}
          Last Name <br />{" "}
          <input
            className="formulario container-fluid"
            type="text"
            placeholder=""
            required
            name="lastname"
            onChange={handleChange}
          />
        </label>{" "}
        <br />
        <label for="">
          {" "}
          Address <br />{" "}
          <input
            className="formulario container-fluid"
            type="text"
            placeholder=""
            required
            name="address"
            onChange={handleChange}
          />
        </label>{" "}
        <br></br>
        <label for="">
          {" "}
          Username <br />{" "}
          <input
            className="formulario container-fluid"
            type="text"
            placeholder=""
            required
            name="username"
            onChange={handleChange}
          />
        </label>{" "}
        <br />
        <label for="">
          {" "}
          E-mail <br />{" "}
          <input
            className="formulario container-fluid"
            type="text"
            placeholder=""
            required
            name="email"
            onBlur={handlerBlur}
          />
        </label>{" "}
        <br />
        <label for="">
          {" "}
          Password <br />{" "}
          <input
            className="formulario container-fluid"
            type="password"
            placeholder=""
            required
            name="password"
            onBlur={handlerBlur}
          />
        </label>{" "}
        <br />
        <br />
        <input type="checkbox" />{" "}
        <h5> By creating an account you agree to our Terms & Privacy</h5> <br />{" "}
        <br />
        <button className="botonRegister" disabled={IsButtonDisable(inputRegistro)}> Submit</button>
        <br />
        <br />
      </form>
      <div>
      {passwordValidator ? null : <h5>"Password must contain 8 characters, 1 number and 1 capital letter"</h5>}
      </div>
      <div>
      {emailValidator ? null : <h5>"Wrong e-mail"</h5>}
      </div>
    </div>
  );
};

export default Register;
