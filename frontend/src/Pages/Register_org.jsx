import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./pages.scss";
import logo from '../Images/logo.png';
import axios from "axios";


function Register_org() {

  const [inputs, setInputs] = useState({
    org_name: "",
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
      const res = await axios.post("/auth2/register", inputs);
      console.log(res);
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
                  <label htmlFor="org_name" className="form-label">
                    Organization Name
                  </label>
                  <input
                    type="text"
                    placeholder="Organization Name"
                    name="org_name"
                    onChange={handleChange}
                    className="form-control reg-form"
                    list="org_list"
                    required
                  />
                  <datalist id="org_list">
                    <option value="Save Trees">Save Trees</option>
                  </datalist>
                </div>
                {/* <div className="mb-3">
                  <label htmlFor="org_Location" className="form-label">
                    Location
                  </label>
                  <input
                    type="text"
                    placeholder="Location"
                    name="org_location"
                    onChange={handleChange}
                    className="form-control reg-form"
                    required
                  />
                  <select name="org_location" id=""  className="form-control reg-form" onChange={handleChange} required>
                    <option value="Beirut">Beirut</option>
                    <option value="Zahle">Zahle</option>
                    <option value="Baalbeck">Baalbeck</option>
                    <option value="Saida">Saida</option>
                  </select>
                </div> */}
                <div className="mb-3">
                  <label htmlFor="email_address" className="form-label">
                    Organization Email
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

export default Register_org;
