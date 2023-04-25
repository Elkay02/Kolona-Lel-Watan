import React, { useState } from "react";
import { AiFillPrinter, AiOutlineSearch } from "react-icons/ai";
import "./components.css";
import { Locations, Categories } from "../predefindData";
import { Link } from "react-router-dom";

const Searchbar = (props) => {

  return (<div className="searchbar ">
    <div className="p-2 ">
      <div className="p-2 d-flex ">
        <input list="searchbar" id="organization" name="organization" className="form-control w-100 searchbar-form" placeholder="Organization"
          onChange={
            (e) => {
              props.setFilters((prev) => ({
                ...prev,
                organization: e.target.value
              }
              ))
            }
          } />
        <datalist id="searchbar">

          {
            Array.isArray(props.data) ?
              [... new Set(props.data.map((item) => (
                item.name
              )))].map((elem, index) => (
                <option key={index} >{elem}</option>
              ))
              :
              <option > </option>

          }
        </datalist>
      </div>
    </div>



    <div className="p-2 ">
      {/* <label for="organization" className="fw-bolder">{props.title} </label> */}
      <div className="p-2 d-flex ">
        <input list="searchbar1" id="location" name="location" className="form-control w-100 searchbar-form" placeholder="Location" onChange={
          (e) => {
            props.setFilters((prev) => ({
              ...prev,
              location: e.target.value
            }
            ))
          }
        } />
        <datalist id="searchbar1">
          {
            Locations.map((item, index) => (
              <option key={index}>{item}</option>
            ))


          }
        </datalist>
      </div>
    </div>


    <div className="p-2 ">
      {/* <label for="organization" className="fw-bolder">{props.title} </label> */}
      <div className="p-2 d-flex ">
        <input list="searchbar2" id="date" name="date" className="form-control w-100 searchbar-form" placeholder="Date"
          onChange={
            (e) => {
              props.setFilters((prev) => ({
                ...prev,
                date: e.target.value
              }
              ))
            }
          } />
        <datalist id="searchbar2">
          {
            Array.isArray(props.data) ?
              [... new Set(props.data.map((item) => (
                item.event_date
              )))].map((elem, index) => (
                <option key={index} >{elem}</option>
              ))
              :
              <option > </option>

          }
        </datalist>
      </div>
    </div>


    <div className="p-2 ">
      {/* <label for="organization" className="fw-bolder">{props.title} </label> */}
      <div className="p-2 d-flex ">
        <input list="searchbar3" id="category" name="category" className="form-control w-100 searchbar-form" placeholder="Category"
          onChange={
            (e) => {
              props.setFilters((prev) => ({
                ...prev,
                category: e.target.value
              }
              ))
            }
          } />
        <datalist id="searchbar3">
          {
            Categories.map((item, index) => (
              <option key={index} >{item}</option>
            ))

          }
        </datalist>
      </div>

    </div>
    {/* <Link to={"/?filter=2"} state={filters}>

      <button className="btn style-primary" style={{ transform: "scale(1.5)" }} >
        <AiOutlineSearch />
      </button>
    </Link> */}

  </div>

  );
}

export default Searchbar;