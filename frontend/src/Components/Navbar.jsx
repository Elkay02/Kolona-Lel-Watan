import React from "react";
import "./components.css";
import { Dropdown,Navbar,NavDropdown,Button,Form,FormControl,Nav,Collapse,Fade} from "react-bootstrap";
import { AiFillPrinter, AiOutlineSearch } from "react-icons/ai";
import Slideshow from "./Slideshow";
import logo from "../Images/logo1.png"


const SearchEntry = (props) => {
    const data = ["option1", "option2", "option3","option4","option5","option6","option7","option8","option9","option10"];

    return (<div className="p-2 ">
        {/* <label for="organization" className="fw-bolder">{props.title} </label> */}
            <div className="p-2 d-flex">
                <input list="searchbar" id="organization" name="organization" className="form-control w-100 searchbar-form" placeholder={props.title} />
                <datalist id="searchbar">
                    {
                        data.map((elem) => {
                            return <option >{elem}</option>
                            }
                            )
                        }
                </datalist>
                </div>
            </div>
        );
        
                }
const Searchbar = () =>{

    return(<div className="searchbar">
            <SearchEntry   title="Organization" />
            <SearchEntry   title="Location" />
            <SearchEntry   title="Date" />
            <button className="btn style-primary" style={{transform: "scale(1.5)"}} >
                <AiOutlineSearch/>
            </button>
            
        </div>
    );
}

const BootstrapNavbar = () => {
    return (
            <div className="p-0 m-0 mb-2">
                <Navbar bg="light" variant="light" expand="lg" sticky="top" className="style-primary p-0 m-0">

                    <Navbar.Brand href=" " className=" p-1 mx-5 brand fst-italic fs-3 ">
                        <img src={logo} className="img-fluid"/>
                        {/* Kolona Lel Watan */}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse align-content-end justify-content-end">
                    <Nav className="mr-auto nav-btns ">
                        <Nav.Link href="/" className="btn-light">Home</Nav.Link>
                        <Nav.Link href="/about-us" className="btn-light">Contact Us</Nav.Link>
                        <Nav.Link href="/contact-us" className="btn-light">About Us</Nav.Link>
                        <Nav.Link href="/register" className="btn-light style-primary-btn" >Register</Nav.Link>
                        <Nav.Link href="/login" className="btn-light style-primary-btn">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
                <Slideshow element= {<Searchbar></Searchbar>}/>
        </div>
    );
}

export default BootstrapNavbar;