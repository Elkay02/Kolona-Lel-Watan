import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./pages.scss";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailRegex = /\S+@\S+\.\S+/;
    const isValidEmail = emailRegex.test(email);
    const isValidPassword = password.length >= 8;
    if (!isValidEmail) {
      alert("Please enter a valid email address");
    } else if (!isValidPassword) {
      alert("Password must be at least 8 characters long");
    } else {
      alert("Registration successful!");
      // Here you would redirect to another page
    }
  };

  return (
    <div className="container h-100 container-register">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card border-0 shadow">
            <div className="card-body">
              <h2 className="text-center text-primary mb-4">Sign up</h2>
              <img
                className="logo d-block mx-auto mb-4"
                src="https://img.freepik.com/free-vector/charity-logo-template-no-profit-branding-design-vector_53876-140577.jpg"
                alt="Logo"
              />
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label">
                    First Name:
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={handleFirstNameChange}
                    className="form-control reg-form"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">
                    Last Name:
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={handleLastNameChange}
                    className="form-control reg-form"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email:
                  </label>
                  <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    className="form-control reg-form"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password:
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="form-control reg-form"
                    required
                  />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Sign up
                  </button>
                </div>
                <p className="text-center mt-3">
                  Already have an account? <Link to="/login">Log in</Link>
                  </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
