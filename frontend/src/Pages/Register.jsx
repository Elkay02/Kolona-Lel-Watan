import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./pages.scss";
import logo from '../Images/logo.png';
import axios from "axios";


function Register() {
<<<<<<< HEAD
  // const [firstName, setFirstName] = useState("");
  // const [last_Name, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const handleFirstNameChange = (event) => {
  //   setFirstName(event.target.value);
  // };

  // const handleLastNameChange = (event) => {
  //   setLastName(event.target.value);
  // };

  // const handleEmailChange = (event) => {
  //   setEmail(event.target.value);
  // };

  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const emailRegex = /\S+@\S+\.\S+/;
  //   const isValidEmail = emailRegex.test(email);
  //   const isValidPassword = password.length >= 8;
  //   if (!isValidEmail) {
  //     alert("Please enter a valid email address");
  //   } else if (!isValidPassword) {
  //     alert("Password must be at least 8 characters long");
  //   } else {
  //     alert("Registration successful!");
  //     // Here you would redirect to another page
  //   }
  // };
=======
>>>>>>> d3d7312f2c4947744547adaea6e9fa7ff6cff34b

  const [inputs, setInputs] = useState({
    first_name: "",
    last_name: "",
    email_address: "",
    password: "",
  });

  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/register", inputs);
      console.log(res)
      navigate("/login");
    } catch (err) {
      setError(err.response.data);
    }
  };

  //console.log(inputs)

  return (
    <div className="container container-register">
        <div className="col-12 col-md-6 col-lg-4">
            <div className="form-container ">
              <h2 className="text-center fw-bold fst-italic m-0 p-0">Sign up</h2>
              <img
                className="logo d-block m-0"
                src={logo}
                alt="Logo"
              />
              <form>
                <div className="mb-3">
                  <label htmlFor="first_Name" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="first name"
                    name="first_name"
                    onChange={handleChange}
                    className="form-control reg-form"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="last_Name" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="last name"
                    name="last_name"
                    onChange={handleChange}
                    className="form-control reg-form"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email_address" className="form-label">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="email address"
                    name="email_address"
                    onChange={handleChange}
                    className="form-control reg-form"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    onChange={handleChange}
                    className="form-control reg-form"
                    required
                  />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn style-primary-btn" onClick={handleSubmit}>
                    Sign up
                  </button>
                  {err && <p>{err}</p>}
                </div>
                <p className="text-center mt-3">
                  Already have an account? <Link to="/login">Log in</Link>
                  </p>
              </form>
            </div>
          </div>
    </div>
  );
}

export default Register;
