import { Container, Col, Card, Image, Row, Button } from "react-bootstrap";

const Description = ({ userProfile }) => {
  return (
    <>
      <Card
        style={{
          borderRadius: "9px",
        }}
        className=" mb-4 px-2 w-75 "
      >
        <h3 className="title__activity  fst-italic">About</h3>
        <hr />
        <div style={{ marginLeft: "12px" }}>
          
          <p>
            In the last 15 days I have spoken to about 50 international 🌏
            candidates for various positions that we are hiring for our clients.
            Among 50 candidates that I spoke with, few of them asked me why they
            should consider coming to Germany instea
          </p>
        </div>
      </Card>
    </>
  );
};

export default Description;