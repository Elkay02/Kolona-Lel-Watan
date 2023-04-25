import { Container, Col, Card, Image, Row, Button } from "react-bootstrap";

const Description = (props) => {
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
            {props.desc}
          </p>
        </div>
      </Card>
    </>
  );
};

export default Description;