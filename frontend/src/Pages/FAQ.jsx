import React, { useState } from 'react';
import './pages.scss';

const FAQ = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  const handleClick1 = () => {
    setIsOpen1(!isOpen1);
  };

  const handleClick2 = () => {
    setIsOpen2(!isOpen2);
  };

  const handleClick3 = () => {
    setIsOpen3(!isOpen3);
  };

  const handleClick4 = () => {
    setIsOpen4(!isOpen4);
  };

  return (
    <div className="container">
      <h1 className="text-center mb-5">Frequently Asked Questions</h1>
      <div className="faq-item">
        <div className="faq-question" onClick={handleClick1}>
          What is the purpose of your platform?
          <span className={`arrow ${isOpen1 ? 'arrow-up' : 'arrow-down'}`}></span>
        </div>
        {isOpen1 && (
          <div className="faq-answer">
            Our platform aims to connect individuals with meaningful charity events, making it easy to find and participate in events that resonate with their values.
          </div>
        )}
      </div>

      <div className="faq-item">
        <div className="faq-question" onClick={handleClick2}>
          How can I find charity events on your platform?
          <span className={`arrow ${isOpen2 ? 'arrow-up' : 'arrow-down'}`}></span>
        </div>
        {isOpen2 && (
          <div className="faq-answer">
             You can search for events on our platform using our intuitive search functionality. Browse through events by category, date, or location to find one that resonates with your values.
          </div>
        )}
      </div>

      <div className="faq-item">
        <div className="faq-question" onClick={handleClick3}>
          How do I register for a charity event?
          <span className={`arrow ${isOpen3 ? 'arrow-up' : 'arrow-down'}`}></span>
        </div>
        {isOpen3 && (
          <div className="faq-answer">
            Once you find an event you'd like to attend, simply click the "Book a seat" button on the event page and follow the prompts to complete your registration.
          </div>
        )}
      </div>

      <div className="faq-item">
        <div className="faq-question" onClick={handleClick4}>
          Can I cancel my registration for an event?
          <span className={`arrow ${isOpen4 ? 'arrow-up' : 'arrow-down'}`}></span>
        </div>
        {isOpen4 && (
          <div className="faq-answer">
            Yes, you can cancel your registration for an event through our platform. Please check the cancellation policy for the specific event, as some events may have different requirements or deadlines.
          </div>
        )}
      </div>
      <p className="contact-email">For more questions, contact <a href="mailto:KollonaLilWatan@gmail.com">KollonaLilWatan@gmail.com</a></p>

    </div>
  );
};

export default FAQ;
