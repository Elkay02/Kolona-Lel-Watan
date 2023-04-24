import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import BootstrapNavbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import {BsFillPersonFill , BsFillPeopleFill} from "react-icons/bs"

import './pages.scss';
import image from '../Images/event.jpg';
import { Link, useLocation, useNavigate } from "react-router-dom";

import axios from "axios";
import moment from "moment";


import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { makeRequest } from "../axios";

import { useContext } from "react";
import { AuthContext } from "../context/authContext";



// 3 cases :

// 1- org accessing a post that doesn't belong to it --> no extra buttons , standard template , plain

// This plain template will have extra features in these two cases : 

// 2- ma fi hada logged in (no token ) && regular user --> single should have an extra button (BOOK) when it gets clicked bysir (UNBOOK)

// 3- Organization accessing a post that belongs to it --> two extra button ( edit and delete )


const Single = () => {


  const [post, setPost] = useState({});
  const [Booked , setBooked] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);
  

  //there are no posts with this id : 
  if(!post){
    navigate("/");
  }

 
  useEffect(() => {
    const fetchData = async () => {
      try {
        // get the data of the post posted on this page
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
    
  }, [postId]);

  //delete event post 
  const handleDelete = async ()=>{
    try {
      await axios.delete(`/posts/${postId}`);
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  }

  const { isLoading, error, data } = useQuery(["bookings", postId], () =>
    makeRequest.get("/bookings?postId=" + postId).then((res) => {
      return res.data;
    })
  );
  console.log(data)


  const queryClient = useQueryClient();

  const mutation = useMutation(
    (booked) => {
      if (booked) return makeRequest.delete("/bookings?postId=" + postId + "&userId=" +  currentUser.userID);

      return makeRequest.post("/bookings", { postId  , userId : currentUser.userID });
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["bookings"]);
      },
    }
  );



  const handleBook = () => {
    console.log("here")
    mutation.mutate(data.includes(currentUser.userID));
  };

  
  // const handleBooking = async ()=>{
  //   try {
  //     await axios.post(`/bookings/${postId}` , {
  //       userId : currentUser.userID
  //     });

  //   } catch (err) {
  //     console.log(err);
  //   }
  // }


  return (
    <>
      <BootstrapNavbar />
    <div class="container mt-5">
            <div class="row ">
                <div class="col-lg-8">
                    <article>
                        <header class="mb-4">
                            <h1 class="fw-bolder mb-1">{post.title}</h1>
                            <div class="text-muted fst-italic mb-2">Posted on {post.data_time} by <Link to={`/org_profile/${post?.OrganizationID}`} > {post.name} </Link></div>
                            
                            <a class="badge booking-cat text-decoration-none link-light m-1" href="#!">{post.category}</a>
                        </header>
                        <figure class="mb-4"><img class="img-fluid rounded" src={`../upload/${post?.media}`} alt="" /></figure>
                        
                        <section class="mb-5 fw-bold">
                            <p>
                              {post.post_text}
                            </p>
                        </section>
                    </article>
                </div>
                <div class="col-lg-4" style={{paddingTop:"131px"}}>
                   
                    <div class="card mb-4">
                        <div class="card-header">Event Information</div>
                        <div class="card-body">
                            <div class="row">
                                  <div className="d-flex">
                                        <p className="card-text">Location :  {post.location} </p>
                                  </div>
                                  <div className="d-flex">
                                      <p className="card-text">Date :  {post.event_date}</p>
                                  </div>
                                  <div className="d-flex">
                                      <p className="card-text">Participants :  
                                      {data?.length} / {post.goalNbrParticipants}
                                     {/* {
                                      isLoading ? (
                                        "loading"
                                      ) : data.includes(currentUser.userID) ? (
                                        {data.length} / {post.goalNbrParticipants}
                                      ) : (
                                        {data.length} / {post.goalNbrParticipants}
                                      )
                                    }  */}
                                      
                                      </p>
                                  </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-4">
                        <div class="card-header">About the Organization</div>
                        <div class="card-body">
                          {post.mission}
                        
                        </div>
                    </div>
                    <div class=" mb-4 d-flex flex-row justify-content-evenly">
                    {
                    currentUser ?
                            
                            currentUser.isOrg ? 
                            
                            currentUser.OrganizationID === post.OrganizationID ? <>
                            <Link to={"/create_event?edit=2"} state={post} className="btn style-primary-btn w-25">
                            {/* <button className="btn style-primary-btn w-25"> */}
                              Edit
                            
                            {/* </button> */}
                            </Link>
                            <button className="btn style-primary-btn w-25" onClick={handleDelete}>Delete</button>
                            
                            </>:
                            <>
                            
                            </>
                            
                            :
                            // we are handle booking and unbooking
                                      // !!Booked ?
                                      // <>
                                      //   <button className="btn style-primary-btn w-100" onClick={handleBook} >Book</button>
                                      // </>
                                      // :
                                      // <>
                                      //     <button className="btn style-primary-btn w-100">UnBook</button>
                                      // </>


                                    isLoading ? (
                                        "loading"
                                      ) : data.includes(currentUser.userID) ? (
                                        <button className="btn style-primary-btn w-100" style={{backgroundColor:"red !important"}} onClick={handleBook}>Unbook</button>
                                      ) : 
                                      data?.length < post.goalNbrParticipants ?
                                      (

                                        <button className="btn style-primary-btn w-100" onClick={handleBook}>Book</button>
                                      ):
                                      (
                                        <p className="fw-bold fst-italic single-msg"> Sorry, We have reached the maximum number of Participants </p>
                                      )
                            :

                            data?.length < post.goalNbrParticipants ?
                            (

                              <>
                            
                              <Link to={"/login"} className="w-100">
                              <button className="btn style-primary-btn w-100">Book</button>
                              </Link>
                                  
                              </>
                            ):
                            (
                              <p className="fw-bold fst-italic single-msg"> Sorry, We have reached the maximum number of Participants </p>
                            )
                            
                        }
                    </div>
                </div>
            </div>
        </div>
      <Footer />
    </>

  );
};

export default Single;
