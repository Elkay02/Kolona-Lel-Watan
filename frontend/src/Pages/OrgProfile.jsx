import { Container, Col, Card, Image, Row, Button } from "react-bootstrap";
import { useEffect } from "react";
import { useParams } from "react-router";
import "./pages.scss";
import Profile from "../Components/Profile";
import Description from "../Components/Description"
import BootstrapNavbar from "../Components/Navbar";
import Footer from "../Components/Footer";
// import Skills from "../Skills/Skills";
// import Courses from "../Skills/Courses";
// import Interests from "../Skills/Interests";

const OrgProfile = ({ userProfile, setUserProfile }) => {
  const params = useParams();

  useEffect(() => {}, [params]);
  return (
    <>
        <BootstrapNavbar />
      <Col className="home__wrap ">
        
        <Profile/>
        <Description></Description>
      </Col>
        <Footer />
    </>
  );
};
export default OrgProfile;