import { Col} from "react-bootstrap";
import { useEffect, useState} from "react";
import "./pages.scss";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Profile from "../Components/Profile_Organization";
import Description from "../Components/Description"
import BootstrapNavbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import OrgEvents from "../Components/OrgEvents"
// import Skills from "../Skills/Skills";
// import Courses from "../Skills/Courses";
// import Interests from "../Skills/Interests";

const OrgProfile = (props) => {

  const [orgInfo, setOrgInfo] = useState({});

  const location = useLocation();

  const organizationID = location.pathname.split("/")[2];
  useEffect(() => {
    const fetchData = async () => {
      try {
        // get the data of the post posted on this page
        const res = await axios.get(`/accounts/organization/${organizationID}`);
        setOrgInfo(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();

  }, [organizationID]);

  return (
    <>
        <BootstrapNavbar />
      <Col className="home__wrap ">
        
        <Profile data={orgInfo}/>
        <Description desc={orgInfo.mission}/>
        <OrgEvents id={orgInfo.OrganizationID}   title="Events" width={1} />
      </Col>
        <Footer />
    </>
  );
};
export default OrgProfile;