import React from "react";
import { useState, useEffect } from "react";
import BootstrapNavbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Events from "../Components/Events";
import Slideshow from "../Components/Slideshow";
import Searchbar from "../Components/Searchbar";
import axios from "axios";
import { useLocation } from "react-router-dom";



const Home = () => {
  const [filters, setFilters] = useState({
    organization: "",
    location: "",
    date: "",
    category: ""
  })
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // get the data of the post posted on this page

        const res = await axios.get(`/posts/`);
        console.log(res.data);
        console.log("home")
        setPosts(res.data);

        // check if the user has booked this event or not
        // const res2 = await axios.get(`/bookings/${postId}` , {
        //   userId : currentUser.userID
        // });
        // setBooked(res2.data);


      } catch (err) {
        console.log(err);
      }
    };
    fetchData();

  }, []);


  // Get info from searchbar and filter the events (To Be Done)

  console.log("home: ", filters);

  return (
    <>
      <BootstrapNavbar />
      <Slideshow element={<Searchbar data={posts} setFilters={setFilters}></Searchbar>} />
      <Events title="Upcoming Events" width={1} data={posts} filters={filters} />
      <Footer />
    </>
  );
}


export default Home;