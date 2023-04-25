import { useState } from "react";
import { Container, Col, Card, Image, Row, Button } from "react-bootstrap";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { Link } from "react-router-dom";

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
            <img className="img-fluid profile-img" 
            src={`../upload/${props.data?.profile_picture}`}
            />
          </Row>
          <hr />
          
          <Row className=" user__detail ">
            <Col xs={12} md={8}>
              <h4 className="name mb-0">
                {props.data.first_name} {props.data.last_name}  
                </h4>
                <small
                  style={{ fontSize: "small" }}
                  className="text-muted ml-5"
                >
                  {props.data.gender}
                </small>
              <p className="my-0 occupation">
                {/* {userProfile.title} */}
                {props.data.profession}
              </p>
              {/* <p className="my-0 location text-muted">
                Electronics and Communication Engineer & Frontend Developer •
              </p> */}
              <span className="contact-info ">
                <small className="text-muted">{props.data.location}</small>
              </span>
              
              <div className="d-flex justify-content-start w-100 mt-1">
                {
                  currentUser.userID === props.data.userID ?
                  <Link to={"/user_profile_settings/" + currentUser.userID} state={props.data}>
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