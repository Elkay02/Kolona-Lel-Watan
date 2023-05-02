import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card , Col } from 'react-bootstrap';
import { useNavigate, useParams , useLocation } from 'react-router-dom';
import "./pages.scss";
import BootstrapNavbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Locations } from '../predefindData';
import { AuthContext } from '../context/authContext';
import { useContext } from 'react';
import moment from "moment";

const UserProfileSettings = () => {

    
    const location = useLocation();
    const userID = location.pathname.split("/")[2];
    const { currentUser } = useContext(AuthContext);
    const state = useLocation().state;
    

    const [first_name, setFirstname] = useState(state?.first_name||"");
    const [last_name, setLastname] = useState(state?.last_name||"");
    const [age, setAge] = useState(state?.age||0);
    const [gender, setGender] = useState(state?.gender||"");
    const [profession, setProfession] = useState(state?.profession||"");
    const [email_address, setEmail] = useState(state?.email_address||"");
    const [description, setDescription] = useState(state?.description||"");
   const [location2, setLocation] = useState(state?.location || "");
   const [file, setFile] = useState(null);
    
    const navigate = useNavigate();

    
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
            console.log([
                first_name ,
                last_name,
                age,
                gender,
                profession,
                email_address,
                description,
                location2,
                 file ? imgUrl : "",
              currentUser.userID ,
            ])

            axios.put('/accounts/update_user/'+userID, {
                first_name ,
                last_name,
                age,
                gender,
                profession,
                email_address,
                description,
                location2,
                img: file ? imgUrl : state.profile_picture,
                userid : currentUser.userID ,
              });
                    navigate("/") ;
        } catch (err) {
          console.log(err);
        }
      };




    // useEffect(()=>{
    //     axios.get('/accounts/user/'+userID).then(res => {
    //         setFirstname(res.data.first_name);
    //         setLastname(res.data.last_name);
    //         setAge(res.data.age);
    //         setGender(res.data.gender);
    //         setProfession(res.data.profession);
    //         setDescription(res.data.description);
    //         setEmail(res.data.email_address);
    //     })
    // })

    

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log([first_name, last_name, age, gender, profession, description, email_address])
    //     axios.put('/accounts/update_user/'+userID, {first_name, last_name, age, gender, profession, description, email_address})
    //     .then(res =>{
    //         if(res.data.updated){
    //             navigate('/')
    //         } else {
    //             alert("Not updated");
    //         }
    //     })
    // }

    return (
        <>
        <BootstrapNavbar/>
        <Col className='home__wrap'>

        <Card
        style={{
            borderRadius: "9px",
        }}
        className=" mb-4 px-2 w-75 ">

        <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
            <div className="col-md-3 border-right">
                <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5 profile-img-2" src={`../upload/${state?.profile_picture}`} width="90"/>
                <input
                    style={{ display: "none" }}
                    type="file"
                    id="file"
                    name=""
                    onChange={(e) => setFile(e.target.files[0])}
                    // value={file}
                    />
                <label className="file btn booking-cat " htmlFor="file"> Update Image </label>
                </div>
            </div>
            <div className="col-md-8 border-right">
                <div className="p-3 py-5">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h6 className="text-right fw-bold fs-2 fst-italic">Edit your profile</h6>
                    </div>
                    <div className="row mt-2">
                        <div className="col-md-6">
                            <label className="labels">First Name</label>
                            <input type="text" className="form-control" placeholder="first name" value={first_name} onChange={(e) => setFirstname(e.target.value)}/>
                            </div>
                        <div className="col-md-6">
                            <label className="labels">Last Name</label>
                            <input type="text" className="form-control"  value={last_name} 
                            onChange={(e) => setLastname(e.target.value)}
                            placeholder="last name"/>
                            </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-md-6">
                            <label className="labels">Gender</label>
                            <input type="text" className="form-control" placeholder="Gender" 
                            onChange={(e) => setGender(e.target.value)}
                            value={gender}/>
                            </div>
                        <div className="col-md-6">
                            <label className="labels">Age</label>
                            <input type="number" className="form-control" 
                            onChange={(e) => setAge(e.target.value)}
                            value={age} placeholder="Age" />
                            </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-12">
                            <label className="labels">Location</label>
                            <select  className="form-control" id="location" name="location"   required 
                            onChange={(e) => setLocation(e.target.value)}
                                 value={location2}>
                                    <option ></option>
                                {
                                    Locations.map((item, index) => (
                                    <option key={index}>{item}</option>
                                    ))
                                }
                                </select>
                            </div>
                        <div className="col-md-12">
                            <label className="labels">Email</label>
                            <input type="text" className="form-control" placeholder="Email" value={email_address}
                            onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                        <div className="col-md-12">
                            <label className="labels">Profession</label>
                            <input type="text" className="form-control"  value={profession}
                            onChange={(e) => setProfession(e.target.value)}/>
                            </div>

                            <div className="col-md-12">
                            <label className="labels">Description</label>
                            <textarea type="text" className="form-control"  value={description}
                            onChange={(e) => setDescription(e.target.value)}/>
                            </div>
                    </div>
                    {/* <div className="row mt-3">
                        <div className="col-md-6">
                            <label className="labels">Country</label><input type="text" className="form-control" placeholder="country" value="USA"/>
                            </div>
                        <div className="col-md-6">
                            <label className="labels">State/Region</label>
                            <input type="text" className="form-control" value="Boston" placeholder="state"/>
                            </div>
                    </div> */}
                    <div className="mt-5 text-center">
                        <button className="btn btn-primary profile-button w-50" type="button" onClick={handleClick}>Save Profile</button>
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