import React, { useState, useEffect } from "react";
import JobCard from "./JobCard";
import "../styles/FetchCard.css";
import JobFilter from "./JobFilter";


 

function FetchCard() {
 
    
  
  return (
    <div className="container-fluid">
      <div>
        <JobFilter />
      </div>
      <div className="row">
        <div className="colStyle">
          <JobCard />
        </div>
      </div>
    </div>
  );
}

export default FetchCard;
