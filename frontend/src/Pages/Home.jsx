import React from "react";
import BootstrapNavbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Events from "../Components/Events";
import Slideshow from "../Components/Slideshow";

const Home = () => {
    return (
        <>
        <BootstrapNavbar />
        <Slideshow />
        <Events title="Volunteering Events" />
        <Events title="Donation Events" />
        <Events title="Fundraiser Events" />

        <Footer />
        </>
    );
    }


export default Home;