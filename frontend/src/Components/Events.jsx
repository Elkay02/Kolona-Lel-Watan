import React from "react";

// create eventcards using react-bootstrap
import { Card, Button, Container, Row, Col } from "react-bootstrap";

import {BsFillPersonFill , BsFillPeopleFill} from "react-icons/bs"

// import css file
import "./components.css";

import image from '../Images/event1.jpg';

const data = [
  {
    title: "Event 1",
    subtitle: "Subtitle 1",
    description: generateRandomDescription(),
  },
  {
    title: "Event 2",
    subtitle: "Subtitle 2",
    description: generateRandomDescription(),
  },
  {
    title: "Event 3",
    subtitle: "Subtitle 3",
    description: generateRandomDescription(),
  },
  {
    title: "Event 4",
    subtitle: "Subtitle 4",
    description: generateRandomDescription(),
  },
  {
    title: "Event 5",
    subtitle: "Subtitle 5",
    description: generateRandomDescription(),
  },
  {
    title: "Event 6",
    subtitle: "Subtitle 6",
    description: generateRandomDescription(),
  },
  {
    title: "Event 7",
    subtitle: "Subtitle 7",
    description: generateRandomDescription(),
  },
];

function generateRandomDescription() {
  const descriptions = [
    "This event is all about learning and networking with other professionals in the field.",
    "Join us for an exciting day filled with keynote speakers and hands-on workshops.",
    "Whether you're a seasoned professional or just starting out, this event has something for everyone.",
    "Don't miss out on this opportunity to connect with like-minded individuals and expand your knowledge.",
    "Discover new strategies and techniques to take your career to the next level.",
    "Get ready for a day of fun and inspiration, with top-notch speakers and engaging activities.",
    "Come and be a part of this dynamic community, where you'll learn, grow, and connect with others.",
  ];
  const randomIndex = Math.floor(Math.random() * descriptions.length);
  return descriptions[randomIndex];
}


const EventCard = (event) => {
    return (
    <div className="card">
  
    <div className="card-horizontal">
        <div className="img-square-wrapper">
            <img className="card-img" src={image} alt="Card image cap" />
        </div>
        <div className="card-body">
            <h4 className="card-title">{event.title}</h4>
            <div className="card-subtitle">
              <div className="d-flex">
                  <BsFillPersonFill className="card-icon"/> 
                  <p className="card-text">Organization</p>
              </div>
              <div className="d-flex">
                  <BsFillPeopleFill className="card-icon"/> 
                  <p className="card-text">10 / 20</p>
              </div>
            </div>
          
            <p className="card-text">{event.description}</p>
            <button className="btn style-primary-btn">Read more</button>
        </div>
        <div className="card-tag-shadow"> lol
        </div>
        <div className="card-tag">
          <p></p>
          <p>FEB</p>
          <p>20</p>
        </div>
    </div>
</div>
    );
}

// create body of events page
const Events = (props) => {
    return (
      <div className="m-1">
        <hr />
        <h2 className="text-center fw-bolder fs-italic">{props.title}</h2>
        <hr />
        <Row xs={1} md={2} className="g-4">
        {data.map((event) => (
          <Col>
            <EventCard title={event.title} description={event.description} />
          </Col>
        ))}
    </Row>
      </div>
    );
}


export default Events;
