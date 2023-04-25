import { useState } from "react";
import { Container, Col, Card, Image, Row, Button } from "react-bootstrap";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { Link } from "react-router-dom";
import { Location } from "react-router-dom";

const Profile = (props) => {

  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <Card
        style={{
          borderRadius: "9px",
        }}
        className=" mb-4 px-2 w-75 "
      >
        <Container
          className=" pb-4  w-100 "
          style={{
            background: "#fff",
            borderRadius: "7px",
          }}
        >
        
          <Row className="profile__photo ml-1">
            <img className="img-fluid" 
            src={`../upload/${props.data?.profile_picture}`}
            />
          </Row>
          <hr />
          
          <Row className=" user__detail ">
            <Col xs={12} md={8}>
              <h4 className="name mb-0">
                {props.data.name}  
                </h4>
              <p className="my-0 occupation">
                {/* {userProfile.title} */}
                {props.data.type}
              </p>
              {/* <p className="my-0 location text-muted">
                Electronics and Communication Engineer & Frontend Developer •
              </p> */}
              <span className="contact-info ">
                <small className="text-muted">{props.data.location}</small>
              </span>
              
              <div className="d-flex justify-content-start w-100 mt-1">
                {
                  currentUser.OrganizationID === props.data.OrganizationID ?
                  <Link to={"/org_profile_settings/" + currentUser.OrganizationID}>
                    <button className=" btn style-primary-btn ">
                        Edit Profile 
                    </button>
                  </Link>
                  :
                  <>
                  </>


                }
                
              </div>
            </Col>
          </Row>
        </Container>
      </Card>
    </>
  );
};

export default Profile;