import React from 'react';
import './pages.scss';
import image from '../Images/event.jpg';

const Booking = () => {
  return (
    <div className="booking container-fluid card m-2 p-4 ">
      <div className="row">
        <div className="booking-image col-md-5">
          <img src={image} alt="Charity Event" className="img-fluid rounded" />
        </div>
        <div className="booking-content col-md-7 " >
          <h2 className="charity-name mb-4">Event X</h2>
          <hr />
          <div className="event-details row align-items-center mb-4">
            <div className="col-sm-2 text-center">
              <img src="https://cdn-icons-png.flaticon.com/512/4781/4781427.png" alt="Date icon" className="img-fluid" />
            </div>
            <div className="col-sm-10">
              <span className="text-secondary">April 25, 2023</span>
            </div>
          </div>
          <div className="event-details row align-items-center mb-4">
            <div className="col-sm-2 text-center">
              <img src="https://i.pinimg.com/originals/6b/c3/97/6bc39791d238c93858fa6f0154d2db6b.jpg" alt="Location icon" className="img-fluid" />
            </div>
            <div className="col-sm-10">
              <span className="text-secondary">New York City</span>
            </div>
          </div>
          <hr />
          <p className="synopsis mb-4">
            Join us in our effort to support underprivileged children through education, healthcare, and resources.
            We believe every child deserves a chance to thrive. Come and be part of this amazing journey!
          </p>
          <hr />
          <div className="host d-flex align-items-center mb-4">
            <img src="https://i2-prod.mirror.co.uk/incoming/article6167884.ece/ALTERNATES/s1200c/Camila-Batmanghelidjh.jpg" alt="Host name" className="rounded-circle mr-3" width="50" height="50" />
            <span className="text-secondary">Hosted by Organization </span>
          </div>
          <hr />
          <button className="btn btn-primary w-100">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
