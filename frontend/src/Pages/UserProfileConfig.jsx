import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card , Col } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import "./pages.scss";
import BootstrapNavbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Locations } from '../predefindData';

const UserProfileSettings = () => {

    const location = useLocation();
    // const {userID} = useParams();
    const userID = location.pathname.split("/")[2];

    const state = useLocation().state;

    const [first_name, setFirstname] = useState(state?.first_name||'');
    const [last_name, setLastname] = useState(state?.last_name||'');
    const [age, setAge] = useState(state?.age||0);
    const [gender, setGender] = useState(state?.gender||'');
    const [profession, setProfession] = useState(state?.profession||'');
    const [email_address, setEmail] = useState(state?.email_address||'');
    const [description, setDescription] = useState(state?.description||'');

    console.log(userID)
    useEffect(()=>{
        axios.get('/accounts/user/'+userID).then(res => {
            setFirstname(res.data.first_name);
            setLastname(res.data.last_name);
            setAge(res.data.age);
            setGender(res.data.gender);
            setProfession(res.data.profession);
            setDescription(res.data.description);
            setEmail(res.data.email_address);
        })
    })

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log([first_name, last_name, age, gender, profession, description, email_address])
        axios.put('/accounts/update_user/'+userID, {first_name, last_name, age, gender, profession, description, email_address})
        .then(res =>{
            if(res.data.updated){
                navigate('/')
            } else {
                alert("Not updated");
            }
        })
    }

    return (
        <>
        <BootstrapNavbar/>
        <Col className='home__wrap'>

        <Card
        style={{
            borderRadius: "9px",
        }}
        className=" mb-4 px-2 w-75 ">

        <div class="container rounded bg-white mt-5 mb-5">
        <div class="row">
            <div class="col-md-3 border-right">
                <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" src="https://i.imgur.com/O1RmJXT.jpg" width="90"/>
                <span class="font-weight-bold">John Doe</span>
                <span class="text-black-50">john_doe12@bbb.com</span>
                <span>United States</span>
                </div>
            </div>
            <div class="col-md-8 border-right">
                <div class="p-3 py-5">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <h6 class="text-right">Edit your profile</h6>
                    </div>
                    <div class="row mt-2">
                        <div class="col-md-6">
                            <label class="labels">First Name</label>
                            <input type="text" class="form-control" placeholder="first name" value={first_name}/>
                            </div>
                        <div class="col-md-6">
                            <label class="labels">Last Name</label>
                            <input type="text" class="form-control" value={last_name} placeholder="Doe"/>
                            </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-md-6">
                            <label class="labels">Gender</label>
                            <input type="text" class="form-control" placeholder="first name" value={gender}/>
                            </div>
                        <div class="col-md-6">
                            <label class="labels">Age</label>
                            <input type="number" class="form-control" value={age} placeholder="Doe" />
                            </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-12">
                            <label class="labels">Location</label>
                            <select  class="form-control" id="location" name="location"   required 
                                 value={location}>
                                    <option ></option>
                                {
                                    Locations.map((item, index) => (
                                    <option key={index}>{item}</option>
                                    ))
                                }
                                </select>
                            </div>
                        <div class="col-md-12">
                            <label class="labels">Email</label>
                            <input type="text" class="form-control" placeholder="headline" value={email_address}/>
                            </div>
                        <div class="col-md-12">
                            <label class="labels">Profession</label>
                            <input type="text" class="form-control" placeholder="education" value={profession}/>
                            </div>
                    </div>
                    {/* <div class="row mt-3">
                        <div class="col-md-6">
                            <label class="labels">Country</label><input type="text" class="form-control" placeholder="country" value="USA"/>
                            </div>
                        <div class="col-md-6">
                            <label class="labels">State/Region</label>
                            <input type="text" class="form-control" value="Boston" placeholder="state"/>
                            </div>
                    </div> */}
                    <div class="mt-5 text-center">
                        <button class="btn btn-primary profile-button w-50" type="button">Save Profile</button>
                        </div>
                </div>
            </div>
           
        </div>
    </div>
        </Card>
              </Col>
    <Footer/>
            </>
    );
};


export default UserProfileSettings;