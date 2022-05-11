import React from "react";
import "./issue-card.css";


export default function IssueCards() {
  return (
    <div className="issue-cards">
      <div className="issue-cards-column">
        <p>To Do "number of todo" issues</p>   {/*add  number */} 
        <div className="issue-card-section" data-tag="todo-section" >
          {/* 
             SHOW TODO LIST HERE             
          */}
        </div>
      </div>
      <div className="issue-cards-column">
        <p>In progress "number of inprogress" issues</p>  {/*add  number */} 
        <div className="issue-card-section" data-tag="inprogress-section">
        
        {/* 
          SHOW IN-PROGRESS SECTION HERE
        */}
        </div>
      </div>
      <div className="issue-cards-column">
        <p>Done "number of done" issues</p>  {/*add  number */} 
        <div className="issue-card-section" data-tag="done-section">
       {/* 
          SHOW DONE ISSUES HERE
       */}
        </div>
      </div>
      <div className="issue-cards-column">
        <p>Blocked "number of blocked" issues</p>  {/*add  number */} 
        <div className="issue-card-section" data-tag="blocked-section">
        {/* 
          SHOW BLOCKED LIST HERE
        */}
        </div>
      </div>
    </div>
  );
}
