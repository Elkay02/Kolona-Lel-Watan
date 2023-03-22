import React from "react";

// create eventcards using react-bootstrap
import { Card, Button, Container, Row, Col } from "react-bootstrap";

// import css file
import "./components.css";


const EventCard = (props) => {
    return (
        <Card style={{ width: '100vw', minWidth:"max-content" ,overflow:"overlay !important"}} className="style-primary-inverted m-2">
        <Card.Body>
          <Card.Title>{props.Title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{props.Subtitle}</Card.Subtitle>
          <Card.Text>
            {props.Description}
          </Card.Text>
          <Card.Link href="#">
            <Button variant="primary" className="style-primary-btn">Go somewhere</Button>
          </Card.Link>
        </Card.Body>
      </Card>
    );
}

// create body of events page
const Events = (props) => {
    return (
      <div className="m-1">
        <hr />
        <h2 className="text-center style-primary">{props.title}</h2>
        <hr />
        <div style={{ overflowY:"scroll"}} className="w-100 p-0">
        <Container className=" d-flex flex-nowrap p-0 m-0 w-100" style={{overflowY:"visible"}}>
            <EventCard Title="Event 1" Subtitle="Subtitle 1" Description="Description 1"/>
            <EventCard Title="Event 2" Subtitle="Subtitle 2" Description="Description 2"/>
            <EventCard Title="Event 3" Subtitle="Subtitle 3" Description="Description 3"/>
            <EventCard Title="Event 4" Subtitle="Subtitle 4" Description="Description 4"/>
            <EventCard Title="Event 1" Subtitle="Subtitle 1" Description="Description 1"/>
            <EventCard Title="Event 2" Subtitle="Subtitle 2" Description="Description 2"/>
            <EventCard Title="Event 3" Subtitle="Subtitle 3" Description="Description 3"/>
            <EventCard Title="Event 4" Subtitle="Subtitle 4" Description="Description 4"/>
            <EventCard Title="Event 4" Subtitle="Subtitle 4" Description="Description 4"/>
            <EventCard Title="Event 1" Subtitle="Subtitle 1" Description="Description 1"/>
            <EventCard Title="Event 2" Subtitle="Subtitle 2" Description="Description 2"/>

        </Container>
        </div>
        <hr />
      </div>
    );
}

export default Events;
