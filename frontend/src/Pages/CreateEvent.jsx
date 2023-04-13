//import React from 'react';
import './pages.scss';
import React, { useEffect } from 'react';

const CreateEvent = () => {
    // new code
    useEffect(() => {
        const inputs = document.querySelectorAll('input, textarea');
        inputs.forEach((input) => {
          input.addEventListener('invalid', (e) => {
            e.preventDefault();
            input.dataset.validationMessage = input.validationMessage;
          });
        });
      }, []);
      //
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="container rounded bg-white mt-5 mb-5 style-primary">
      <br />
        <h1 className="text-center mb-5 fw-bold">Create a Charity Event</h1>
        <hr />
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="">
            <div className="card-body">
              <form className="create-event-form h-100 form-container" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="charity-name">Name of the charity:</label>
                  <input type="text" id="charity-name" name="charityName" className="form-control" required />
                </div>

                <div className="form-group">
                  <label htmlFor="event-date">Date of the charity event:</label>
                  <input type="date" id="event-date" name="eventDate" className="form-control" required />
                </div>

                <div className="form-group">
                  <label htmlFor="location">Location:</label>
                  <input type="text" id="location" name="location" className="form-control" required />
                </div>

                <div className="form-group">
                  <label htmlFor="synopsis">Synopsis:</label>
                  <textarea id="synopsis" name="synopsis" className="form-control" required></textarea>
                </div>

                <div className="form-group">
                  <label htmlFor="host-photo">Photo URL of the host:</label>
                  <input type="url" id="host-photo" name="hostPhoto" className="form-control" required />
                </div>

                <div className="form-group">
                  <label htmlFor="host-name">Name of the host:</label>
                  <input type="text" id="host-name" name="hostName" className="form-control" required />
                </div>

                <button type="submit" className="btn btn-info my-5 py-2 w-100 fw-bold fs-5">Create Event</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
