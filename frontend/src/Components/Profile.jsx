import { Container, Col, Card, Image, Row, Button } from "react-bootstrap";

const Profile = ({ userProfile }) => {
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
            src="https://media.licdn.com/dms/image/C4E03AQGtMz7E_0xYZg/profile-displayphoto-shrink_100_100/0/1657103710267?e=1687996800&v=beta&t=eslhKnLyWngqqPPr58WitAOmfSve-oNUF9e_vsOQYWE"
            />
          </Row>
          <hr />
          
          <Row className=" user__detail ">
            <Col xs={12} md={8}>
              <h4 className="name mb-0">
                {/* {userProfile.name} {userProfile.surname} */}
                <small
                  style={{ fontSize: "medium" }}
                  className="text-muted ml-1"
                >
                  (She/her)
                </small>
              </h4>
              <p className="my-0 occupation">
                {/* {userProfile.title} */}
                Frontend Developer
              </p>
              <p className="my-0 location text-muted">
                Electronics and Communication Engineer & Frontend Developer •
              </p>
              <span className="contact-info ">
                <small className="text-muted">Berlin, Berlin, Germany •</small>
              </span>
              
              <div className="d-flex justify-content-start w-100 mt-1">
                <button className=" btn style-primary-btn ">
                  Edit Profile 
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </Card>
    </>
  );
};

export default Profile;