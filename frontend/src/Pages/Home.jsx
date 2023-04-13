import React from "react";
import { useState , useEffect } from "react";
import BootstrapNavbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Events from "../Components/Events";
import Slideshow from "../Components/Slideshow";
import Searchbar from "../Components/Searchbar";

const Home = () => {
    const [backend, setBackend] = useState([{}]);
    
    useEffect(() => {
        fetch("http://localhost:5000/api/events")
        .then((res) => res.json())
        .then((data) => {
            setBackend(data);
        });
    }, []);
    return (
        <>
        <BootstrapNavbar />
        <Slideshow element= {<Searchbar></Searchbar>}/>
        <Events title="Upcoming Events"  width={2}/>

        <Footer />
        </>
    );
    }


export default Home;