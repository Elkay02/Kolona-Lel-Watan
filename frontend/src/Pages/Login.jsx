/*
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      alert("Login successful!");
      // Here you would redirect to another page
    }
  };

  return (
    <div className="login-page">
      <div className="form">
        <h2>Welcome!</h2>
        <br />
        <img
          className="logo"
          src="https://img.freepik.com/free-vector/charity-logo-template-no-profit-branding-design-vector_53876-140577.jpg"
          alt="Logo"
        />
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <button type="submit">Sign in</button>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
*/
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./pages.scss";
import logo from '../Images/logo.png';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      alert("Login successful!");
      // Here you would redirect to another page
    }
  };

  return (
    <div className="container container-register h-100">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="form-container border-0 shadow">
            <div className="card-body">
              <h2 className="text-center fw-bold fst-italic m-0 p-0">Welcome!</h2>
              <img
                className="logo d-block mx-auto mb-4"
                src={logo}
                alt="Logo"
              />
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
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
                    Password
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
                  <button type="submit" className="btn  style-primary-btn">
                    Sign in
                  </button>
                </div>
                <p className="text-center mt-3">
                  Don't have an account? <Link to="/register">Sign up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Login;
