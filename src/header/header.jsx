import React from "react";
import "./header.css";


export default function Header() {
  const handleSearch = (str) => {
    // TODO : show search based on summary of issue  
  };

  const setExpanded = ()=>{
      //TODO : Show Issue Form Popup, 
  }

  return (
    <div className="header" data-tag="header">
      <div className="bread-cr">Projects / "TODO : Show project name here"</div>
      <p>"TODO : Show Project name here "</p>

      <div className="lower-header">
        <div className="input-lower-header">
          <input data-tag="search-box"
           onChange={(e) =>handleSearch }
           
           ></input>{" "}
          <img src="search.png"></img>
          <div className="project-contributors">
            <img src="man.png"></img>
            "TODO : Show project lead name here"
          </div>
        </div>

        <div>
          <button data-tag="create-issue" 
           onClick={() => setExpanded}
          > + Create Issue </button>
        </div>
      </div>
    </div>
  );
}
