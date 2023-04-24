import React from "react";
import { AiFillPrinter, AiOutlineSearch } from "react-icons/ai";
import "./components.css";
import { Locations , Categories } from "../predefindData";

const Searchbar = (props) =>{

    

    return(<div className="searchbar ">
            <div className="p-2 ">
        {/* <label for="organization" className="fw-bolder">{props.title} </label> */}
            <div className="p-2 d-flex ">
                <input list="searchbar" id="organization" name="organization" className="form-control w-100 searchbar-form" placeholder="Organization" />
                <datalist id="searchbar">

            {
         Array.isArray(props.data)?
         [... new Set(props.data.map((item) => (
            item.name
          )))] .map((elem) => (
            <option >{elem}</option>
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
                <input list="searchbar1" id="location" name="location" className="form-control w-100 searchbar-form" placeholder="Location" />
                <datalist id="searchbar1">
                {
          Locations.map((item) => (
            <option >{item}</option>
          ))
          
      
          }
                </datalist>
                </div>
            </div>


            <div className="p-2 ">
        {/* <label for="organization" className="fw-bolder">{props.title} </label> */}
            <div className="p-2 d-flex ">
                <input list="searchbar2" id="date" name="date" className="form-control w-100 searchbar-form" placeholder="Date" />
                <datalist id="searchbar2">
                {
         Array.isArray(props.data)?
         [... new Set(props.data.map((item) => (
            item.event_date
          )))] .map((elem) => (
            <option >{elem}</option>
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
                <input list="searchbar3" id="category" name="category" className="form-control w-100 searchbar-form" placeholder="Category" />
                <datalist id="searchbar3">
                {
          Categories.map((item) => (
            <option >{item}</option>
          ))
      
          }
                </datalist>
                </div>

            </div>
            <button className="btn style-primary" style={{transform: "scale(1.5)"}} >
                <AiOutlineSearch/>
            </button>
            
        </div>

    );
}

export default Searchbar;