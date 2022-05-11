import React, { useState } from "react";
import "./issue-card.css";
export default function IssueCard({ issue }) {
  const kary = [
    ["A", "Story"],
    ["B", "Task"],
    ["C", "Bug"],
    ["D", "Epic"],
  ];
  const map1 = new Map(kary);

  return (
    <div>
        <div className="card-container" data-tag="card-container">
          <div  className="issue-card">
            <div data-tag="issue-description">{issue.summary}</div>
            <div className="status-name" data-tag="assigned-to">
              <img src="man.png"></img> {issue.assigned_to}
            </div>
          </div>
          <p className="issue-type-chip">{map1.get(issue.type)}</p>
        </div>
    </div>
  );
}
