import React from "react";
import { AiFillPrinter, AiOutlineSearch } from "react-icons/ai";
import "./components.css";

const SearchEntry = (props) => {
    const data = ["option1", "option2", "option3","option4","option5","option6","option7","option8","option9","option10"];

    return (<div className="p-2 ">
        {/* <label for="organization" className="fw-bolder">{props.title} </label> */}
            <div className="p-2 d-flex">
                <input list="searchbar" id="organization" name="organization" className="form-control w-100 searchbar-form" placeholder={props.title} />
                <datalist id="searchbar">
                    {
                        data.map((elem) => {
                            return <option >{elem}</option>
                            }
                            )
                        }
                </datalist>
                </div>
            </div>
        );
        
                }
const Searchbar = () =>{

    return(<div className="searchbar">
            <SearchEntry   title="Organization" />
            <SearchEntry   title="Location" />
            <SearchEntry   title="Date" />
            <button className="btn style-primary" style={{transform: "scale(1.5)"}} >
                <AiOutlineSearch/>
            </button>
            
        </div>
    );
}

export default Searchbar;