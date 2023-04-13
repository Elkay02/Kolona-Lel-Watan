import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./pages.scss";
import logo from '../Images/logo.png';
import axios from "axios";
//import { useContext } from "react";

function Login() {

  const [inputs, setInputs] = useState({
    email_address: "",
    password: "",
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();

//  const { login } = useContext(AuthContext);


  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/login", inputs);
      console.log(res);   
      navigate("/");
    } catch (err) {
      setError(err.response.data);
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
                  <button type="submit" className="btn  style-primary-btn" onClick={handleSubmit}>
                    Sign in
                  </button>
                  {err && <p>{err}</p>}
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
