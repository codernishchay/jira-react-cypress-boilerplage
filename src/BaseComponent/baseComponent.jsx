import React from "react";
import "./baseComponent.css";
import IssueCards from "../issue-card/issue-cards"
import Header from "../header/header"
export default function BaseComponent() {
  // TODO : If project is undefined, show project form 
 // TODO : IF project !== undefined, show project details page
  return (
    <div className="base-component">
        {/* if project undefined ,  show project form here */}
        <div className="issue-section">
          <Header></Header>
          <IssueCards/>
         </div>
     </div>
  );
}
