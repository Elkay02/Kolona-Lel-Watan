//import React from 'react';
import './pages.scss';
import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import { AuthContext2 } from '../context/authContext';
import { useContext } from 'react';
import BootstrapNavbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Locations , Categories } from '../predefindData';

const CreateEvent = () => {
    // new code
  //   useEffect(() => {
  //       const inputs = document.querySelectorAll('input, textarea');
  //       inputs.forEach((input) => {
  //         input.addEventListener('invalid', (e) => {
  //           e.preventDefault();
  //           input.dataset.validationMessage = input.validationMessage;
  //         });
  //       });
  //     }, []);
  //     //
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission logic here
  // };
   const { currentUser } = useContext(AuthContext2);

  const state = useLocation().state;
  // {
  //   id: 1,
  //   title: "title",
  //   desc: "desc",
  //   cat: "cat",
  //   img: "img",
  //   eventdate: "eventdate",
  //   location: "location",
  //   numParticipants: "numParticipants",

  // };
  console.log(state)
  const [desc, setDesc] = useState(state?.post_text || "");
  const [title, setTitle] = useState(state?.title || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.category || "");
  const [numParticipants, setNumParticipants] = useState(state?.goalNbrParticipants || 0);
  const [date, setDate] = useState(state?.event_date || "");
  const [location, setLocation] = useState(state?.location || "");

  const navigate = useNavigate()

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();

    try {

      // console.log({
      //   title,
      //   desc,
      //   cat,
      //   img: file ? imgUrl : " ",
      //   eventdate: date,
      //   location,
      //   numParticipants,
      //   userid : currentUser.OrganizationID,
      // });


      state
        ? await axios.put(`/posts/${state.postID}`, {
            title,
            desc,
            cat,
            img: file ? imgUrl : state.media,
            eventdate: date,
            location,
            numParticipants,
            userid : currentUser.OrganizationID,
          })
        :
        await axios.post(`/posts/`, {
            title,
            desc,
            cat,
            img: file ? imgUrl : "",
            eventdate: moment(date).format("YYYY-MM-DD"),
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
            location,
            numParticipants,
            userid : currentUser.OrganizationID,
          });
      console.log("here 2");
          
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
    <BootstrapNavbar />

    <div className=" bg-img">
    <div class="container pt-5 pb-5">
  <div class="row justify-content-center">
    <div class="col-md-8">
      <div class="card shadow-lg p-5">{

      
        !state?
          <h1 class="text-center mb-5 fw-bold">Create Event</h1>
        
        :
          <h1 class="text-center mb-5 fw-bold">Update Event</h1>
        }
        <form class="create-event-form" >
          <div class="form-group">
            <label for="event-name" class="form-label">Name of the event</label>
            <input type="text" class="form-control" id="event-name" name="enventType" required
            onChange={(e) => setTitle(e.target.value)} value={title}/>
          </div>
          <div class="form-group">
            <label for="event-date" class="form-label">Date of the event</label>
            <input type="date" class="form-control" id="event-date" name="eventDate" required
            onChange={(e) => setDate(e.target.value)} value={date}
            />
          </div>
          <div class="form-group">
            <label for="location" class="form-label">Location</label>
            {/* <input type="text" class="form-control" id="location" name="location" list='location-list'  required
            onChange={(e) => setLocation(e.target.value)} value={location}
            /> */}
            <select  class="form-control" id="location" name="location"   required
            onChange={(e) => setLocation(e.target.value)} value={location}>
              {
                Locations.map((item, index) => (
                  <option key={index}>{item}</option>
                ))
              }
            </select>
          </div>
          <div class="form-group">
            <label for="desc" class="form-label">Description</label>
            <textarea class="form-control" id="desc" name="desc" rows="4" required
            onChange={(e) => setDesc(e.target.value)}
            value={desc}></textarea>
          </div>
          <div class="form-group">
            <label for="cat" class="form-label">Category</label>
            {/* <input type="text" class="form-control" id="cat" name="cat" required
            onChange={(e) => setCat(e.target.value)} value={cat}/> */}
             <select  class="form-control" id="location" name="location" required
            onChange={(e) => setCat(e.target.value)} value={cat}>
              {
                Categories.map((item, index) => (
                  <option key={index}>{item}</option>
                ))
              }
            </select>
          </div>

          <div class="form-group">
            <label for="numParticipants" class="form-label">Number of Participants</label>
            <input type="number" class="form-control" id="numParticipants" name="numParticipants" required
            onChange={(e) => setNumParticipants(e.target.value)} value={numParticipants}/>
          </div>
          <div class="form-group ">

          <p className='file' >Upload Image :</p>

          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            name=""
            onChange={(e) => setFile(e.target.files[0])}
            // value={file}
            />
          <label className="file btn booking-cat w-100" htmlFor="file">
            Choose File
          </label>
          </div>
          {!state?
          <button type="submit" class="btn  style-primary-btn mt-4"
          onClick={handleClick}>Create Event</button>
         :
            <button type="submit" class="btn  style-primary-btn mt-4"
            onClick={handleClick}>Update Event</button>
          }
        </form>
      </div>
    </div>
  </div>
</div>
    </div>
    <Footer />
          </>
  );
};

export default CreateEvent;
