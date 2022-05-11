import React from "react";
import "./expandedIssueCard.css";

export default function ExpandedIssueCard() {
  const kary = [
    ["A", "Todo"],
    ["B", "In Progress"],
    ["C", "Done"],
    ["D", "Blocked"],
  ];
  const map1 = new Map(kary);
  const typeary = [
    ["A", "Stroy"],
    ["B", "Task"],
    ["C", "Bug"],
    ["D", "Epic"],
  ];
  const map2 = new Map(typeary);

  const handleChange = (e) => {
     // complete it 
  };
 
  const toggle =()=>{
      // close expanded card on clicked 
  }

  return (
    <div className="expanded-card" data-tag="expanded-card">
      <h1>Issue Details </h1>
    
        <div>
          <div className="issue-card-table">
            <div className="issue-row">
              <div>
              {/* Project Name here */}
              </div>
              {/* Project type tag here */}
              <div>
            
              </div>
            </div>
            <div className="issue-row">
              <div class="dropdown">
                <div className="status-tag">Add Drop down</div>
                <select data-tag="drop-down" class="dropbtn" onChange={handleChange}>
                  <option value={""}>none</option>
                  <option value={"A"}>TO DO</option>
                  <option value={"B"}>In Progress</option>
                  <option value={"C"}>Done</option>
                  <option value={"D"}>Blocked</option>
                </select>
              </div>
              <div className="project-contributors-1">
               {/* Project lead name  */}
              </div>
              <div className="project-contributors-1">
              {/* Issue Assigned To  */}
              </div>
            </div>
          </div>
        </div>
    
      <button className="close-icon" data-tag="close-expanded"
     onClick={toggle}           
        >
        X
      </button>
    </div>
  );
}
