import React from "react";
import "./components.css";
import { Dropdown,Navbar,NavDropdown,Button,Form,FormControl,Nav,Collapse,Fade} from "react-bootstrap";
import { AiFillPrinter, AiOutlineSearch } from "react-icons/ai";
import Slideshow from "./Slideshow";
import logo from "../Images/logo1.png"
import { useContext } from "react";
import { AuthContext} from "../context/authContext";
import { useLocation, useNavigate } from "react-router";



const BootstrapNavbar = () => {
    const {currentUser , logout} = useContext(AuthContext);
    // const {currentUser2} = useContext(AuthContext2);

    const navigate = useNavigate();
    const location = useLocation();
    
    return (
            <div className="p-0 m-0 ">
                <Navbar bg="light" variant="light" expand="lg" sticky="top" className="style-primary p-0 m-0">

                    <Navbar.Brand href=" " className=" p-1 mx-5 brand fst-italic fs-3 ">
                        <img src={logo} className="img-fluid"/>
                        Kolona Lel Watan
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse align-content-end justify-content-end">
                    <Nav className="mr-auto nav-btns ">
                        <Nav.Link href="/" className="btn-light">Home</Nav.Link>
                        <Nav.Link href="/contactus" className="btn-light">Contact us</Nav.Link>
                        <Nav.Link href="/aboutus" className="btn-light">About Us</Nav.Link>
                        {
                            currentUser ?
                            
                            currentUser.isOrg   ? <>
                            
                            <Nav.Link href={"/org_profile/"+currentUser.OrganizationID} className="btn-light">Profile</Nav.Link>
                            <Nav.Link href="/" className="btn-light" onClick={logout}>Logout</Nav.Link>
                            
                            </>:
                            <>
                                <Nav.Link href={"/user_profile/"+currentUser.userID} className="btn-light">Profile</Nav.Link>
                            <Nav.Link href="/" className="btn-light" onClick={logout}>Logout</Nav.Link>
                            </>
                            :
                            <>
                            <Nav.Link href="/login" className="btn-light" >Login</Nav.Link>
                            <Nav.Link href="/register" className="btn-light">Register</Nav.Link>
                                    
                            </>


                        }
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
        </div>
    );
}

export default BootstrapNavbar;