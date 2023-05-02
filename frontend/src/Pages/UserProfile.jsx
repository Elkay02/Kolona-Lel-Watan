import {  Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import "./pages.scss";
import Profile from "../Components/Profile";
import Description from "../Components/Description"
import BootstrapNavbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import axios from "axios";
import UserEvents from "../Components/UserEvents";
// import Skills from "../Skills/Skills";
// import Courses from "../Skills/Courses";
// import Interests from "../Skills/Interests";

const UserProfile = (props) => {

  const [userInfo, setUserInfo] = useState({});

  const location = useLocation();

  const userId = location.pathname.split("/")[2];
  useEffect(() => {
    const fetchData = async () => {
      try {
        // get the data of the post posted on this page
        const res = await axios.get(`/accounts/user/${userId}`);
        setUserInfo(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();

  }, [userId]);

  return (
    <>
        <BootstrapNavbar />
        <Col className="home__wrap ">
        
            <Profile data={userInfo}/>
            <Description desc={userInfo.description}></Description>
            <UserEvents id={userId} title="Booked Events" width={1}/>
        </Col>
        <Footer />
    </>
  );
};
export default UserProfile;