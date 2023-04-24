import React  from "react";
import { useState , useEffect } from "react";
import BootstrapNavbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Events from "../Components/Events";
import Slideshow from "../Components/Slideshow";
import Searchbar from "../Components/Searchbar";
import axios from "axios";



const Home = () => {
    // const [backend, setBackend] = useState([{}]);
    



    const [posts, setPosts] = useState([]);

    

useEffect(() => {
    const fetchData = async () => {
      try {
        // get the data of the post posted on this page

        const res = await axios.get(`/posts/`);
        console.log(res.data);
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

  console.log(posts)
  
    return (
        <>
        <BootstrapNavbar />
        <Slideshow element= {<Searchbar data={posts}></Searchbar>}/>
        <Events title="Upcoming Events"  width={2} data={posts} />
        <Footer />
        </>
    );
    }


export default Home;