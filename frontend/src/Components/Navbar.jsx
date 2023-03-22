import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./components.css";
import { Dropdown,Navbar,NavDropdown,Button,Form,FormControl,Nav,Collapse,Fade} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AiFillPrinter, AiOutlineSearch } from "react-icons/ai";


const Searchbar = () =>{

    const [open, setOpen] = useState(false);

    return(<div className="d-flex">
        <Collapse in={open} dimension="width" timeout={2500}>
        <div id="example-collapse-text">
                
        <Form inline className="d-flex w-100 mx-2" >
            <NavDropdown title="Filter" id="basic-nav-dropdown" className="style-primary m-0 p-0 mx-1">
                <NavDropdown.Header>Location</NavDropdown.Header>
                <NavDropdown.Divider />
                <NavDropdown.Item href=" " className="style-primary-inverted">
                    <Form.Switch id="custom-switch" label="Beirut" onClick={()=>{}}/>
                </NavDropdown.Item>
                <NavDropdown.Item href=" " className="style-primary-inverted">Another action</NavDropdown.Item>
                <NavDropdown.Item href=" " className="style-primary-inverted">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Header>Event</NavDropdown.Header>
                <NavDropdown.Divider />
                <NavDropdown.Item href=" " className="style-primary-inverted">Separated link</NavDropdown.Item>
            </NavDropdown>
            <FormControl type="text" placeholder="Search" className="mr-sm-2 w-100 style-primary-2 mx-3" />
        </Form>
        
        </div>
            </Collapse>
            <Button className=" style-primary mx-1 m-0 p-0" style={{transform: "scale(1.5)"}} onClick={() => setOpen(!open)} aria-controls="example-collapse-searchbar" aria-expanded={open}>
                <AiOutlineSearch/>
            </Button>
            
            </div>
    );
}

const BootstrapNavbar = () => {
    return (
            <div className="p-0 m-0 mb-2">
                <Navbar bg="light" variant="light" expand="lg" sticky="top" className="style-primary p-0 m-0">
                    <Navbar.Brand href=" " className=" p-1 mx-5 style-primary fst-italic fs-3">
                        Kolona Lel Watan
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="navbar-nav navbar-collapse align-content-end justify-content-end">
                    <Nav className="mr-auto nav-btns ">
                        <Searchbar/>
                        <Nav.Link href="/" className="btn-light ">Home</Nav.Link>
                        <Nav.Link href="/about-us" className="btn-light">Contact Us</Nav.Link>
                        <Nav.Link href="/contact-us" className="btn-light">About Us</Nav.Link>
                        <Nav.Link href="/register" className="btn-light style-primary-btn" >Register</Nav.Link>
                        <Nav.Link href="/login" className="btn-light style-primary-btn">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
                <hr />

        </div>
    );
}

export default BootstrapNavbar;