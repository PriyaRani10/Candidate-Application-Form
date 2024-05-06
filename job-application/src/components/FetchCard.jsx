import React, { useState, useEffect } from "react";
import JobCard from "./JobCard";
import "../styles/FetchCard.css";
import JobFilter from "./JobFilter";

import { useDispatch, useSelector } from 'react-redux';
import { fetchDataSuccess } from '../Redux/TaskActions';
import store from '../Redux/Store';

function fetchData() {
  fetch("https://api.weekday.technology/adhoc/getSampleJdJSON")
    .then(response => response.json())
    .then(data => store.dispatch(fetchDataSuccess(data)))
    .catch(error => console.error('Error fetching data:', error));
}

function FetchCard() {
  function YourComponent() {
    useEffect(() => {
      fetchData();
    }, []);
  
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
