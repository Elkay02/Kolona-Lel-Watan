import React, { useEffect, useState } from "react";

// create eventcards using react-bootstrap
import { Card, Button, Container, Row, Col } from "react-bootstrap";

import { BsFillPersonFill, BsFillPeopleFill } from "react-icons/bs"
import { IoLocationSharp } from "react-icons/io5"
import { CgOrganisation } from "react-icons/cg"
import { MdOutlineCategory } from "react-icons/md"
import { Link } from "react-router-dom";

// import css file
import "./components.css";

import imagealt from '../Images/event1.jpg';



// const data = [
//   {
//     title: "Event 1",
//     subtitle: "Subtitle 1",
//     description: generateRandomDescription(),
//   },
//   {
//     title: "Event 2",
//     subtitle: "Subtitle 2",
//     description: generateRandomDescription(),
//   },
//   {
//     title: "Event 3",
//     subtitle: "Subtitle 3",
//     description: generateRandomDescription(),
//   },
//   {
//     title: "Event 4",
//     subtitle: "Subtitle 4",
//     description: generateRandomDescription(),
//   },
//   {
//     title: "Event 5",
//     subtitle: "Subtitle 5",
//     description: generateRandomDescription(),
//   },
//   {
//     title: "Event 6",
//     subtitle: "Subtitle 6",
//     description: generateRandomDescription(),
//   },
//   {
//     title: "Event 7",
//     subtitle: "Subtitle 7",
//     description: generateRandomDescription(),
//   },
// ];

// function generateRandomDescription() {
//   const descriptions = [
//     "This event is all about learning and networking with other professionals in the field.",
//     "Join us for an exciting day filled with keynote speakers and hands-on workshops.",
//     "Whether you're a seasoned professional or just starting out, this event has something for everyone.",
//     "Don't miss out on this opportunity to connect with like-minded individuals and expand your knowledge.",
//     "Discover new strategies and techniques to take your career to the next level.",
//     "Get ready for a day of fun and inspiration, with top-notch speakers and engaging activities.",
//     "Come and be a part of this dynamic community, where you'll learn, grow, and connect with others.",
//   ];
//   const randomIndex = Math.floor(Math.random() * descriptions.length);
//   return descriptions[randomIndex];
// }


export const EventCard = (event) => {
  // array of all months example Jan,Feb
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = event.date.split("-")[1];
  const day = event.date.split("-")[2];

  const monthName = months[month - 1];

  return (
    <div className="event-card rounded">

      <div className="card-horizontal">
        <div className="img-square-wrapper">
          <img className="card-img" src={`../upload/${event?.media}`} />
        </div>
        <div className="card-body px-2 ">
          <h4 className="card-title fw-bold">{event.title}</h4>
          <div className="card-subtitle color-6 d-block">
            <div className="d-flex">
              <div className="d-flex">
                {
                  event?.org_name ?
                  <>
                  
                <CgOrganisation className="card-icon" />
                
                <Link to={"/org_profile/" + event.orgId}>
                  <small className="card-text mx-1 ">{event?.org_name}</small>
                </Link>
                  </>:
                  <>
                  </>
              }                 
                
              </div>
              <div className="d-flex">
                <BsFillPeopleFill className="card-icon" />
                <small className="card-text mx-1">{event.numP} / {event.goalNumP}</small>
              </div>

            </div>


            <div className="d-flex">
              <IoLocationSharp className="card-icon" />
              <small className="card-text mx-1">{event.location}</small>
            </div>
            <div className="d-flex">
              <MdOutlineCategory className="card-icon" />
              <small className="card-text mx-1">{event.category}</small>
            </div>
          </div>

          <p className="card-text mx-1">{event.description}</p>
          <Link to={"/post/" + event.id}>

            <button className="btn style-primary-btn">Read more</button>
          </Link>
        </div>
        <div className="card-tag-shadow">
          lol
        </div>
        <div className="card-tag">
          <p></p>
          <p>{monthName}</p>
          <p>{day}</p>
        </div>
      </div>
    </div>
  );
}

// create body of events page
const Events = (props) => {
  console.log("rerendered");
  console.log(props.data);
  console.log(props.filters);
  const events = props.data
  .filter(item => item.category === props.filters.category 
    || item.location === props.filters.location
    || item.event_date === props.filters.date 
    || item.name === props.filters.organization )

  .map(item => (
    <Col key={item.postID}>
      <EventCard title={item.title} description={item.post_text} location={item.location}
        category={item.category} numP={item.nbrParticipants} goalNumP={item.goalNbrParticipants}
        date={item.event_date} media={item.media} org_name={item.name} id={item.postID} orgId={item.OrganizationID}
      />
    </Col>
  ))

  return (
    <div className="m-1">
      <hr />
      <h2 className="text-center fw-bolder fst-italic">{props.title}</h2>
      <hr />
      <Row xs={1} md={props.width} className="g-4">
        {
          (props.filters.category == "" &&
          props.filters.location == "" &&
          props.filters.date == "" &&
          props.filters.organization == "")?
          props.data.map(item => (
            <Col key={item.postID}>
              <EventCard title={item.title} description={item.post_text} location={item.location}
                category={item.category} numP={item.nbrParticipants} goalNumP={item.goalNbrParticipants}
                date={item.event_date} media={item.media} org_name={item.name} id={item.postID} orgId={item.OrganizationID}
              />
            </Col>
          ))
          :
          events
        }
      </Row>
    </div>
  );
}


export default Events;
