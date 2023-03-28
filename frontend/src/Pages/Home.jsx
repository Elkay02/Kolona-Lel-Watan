import React from "react";
import BootstrapNavbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Events from "../Components/Events";
import Slideshow from "../Components/Slideshow";

const Home = () => {
    return (
        <>
        <BootstrapNavbar />
        <Events title="Upcoming Events" />

        <Footer />
        </>
    );
    }


export default Home;