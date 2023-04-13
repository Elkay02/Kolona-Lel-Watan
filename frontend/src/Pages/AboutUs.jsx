import React from 'react';

import './pages.scss';
const image1 = 'https://thumbs.dreamstime.com/b/charity-word-cloud-heart-concept-56405290.jpg';
const image2 = 'https://www.volunteering.org.au/wp-content/uploads/elementor/thumbs/14907252_1057660434356497_8226374644697837841_n-ncx1esbaekuw5t2j1vl96l7lloano88a4qq01icmu8.jpg';
const image3 = 'https://static.dw.com/image/64636750_604.jpg';

const AboutUs = () => {
  return (
    <div className="container about-us">
      <div className="row">
        <div className="col-md-6">
          <h2>Our Goal</h2>
          <p>Creating a world where giving is easy and enjoyable, fostering a culture of compassion and generosity by connecting individuals with meaningful charity events.</p>
        </div>
        <div className="col-md-6">
          <img src={image1} alt="Our Goal" className="img-fluid" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <img src={image2} alt="Our Approach" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>Our Approach</h2>
          <p>We focus on simplicity, accessibility, and community, offering an intuitive platform to easily find and book seats at charity events that resonate with persons' values.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h2>Our Process</h2>
          <p>Our process involves three key steps: Discover, Book, and Donate, making it easy for users to find and participate in charity events and make a positive impact.</p>
        </div>
        <div className="col-md-6">
          <img src={image3} alt="Our Process" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
