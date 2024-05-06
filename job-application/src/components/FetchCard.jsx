import React, { useState,useEffect } from 'react';
import JobCard from './JobCard';
import '../styles/FetchCard.css';
import JobFilter from './JobFilter';


function FetchCard() {
    // const yourArray=[0,1,2,3,4,5,6,7,8,9]
    
 
    const fetchMoreData = () => {
        // Fetch the data and update the state
      };
    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
      // Function to handle the scroll event
      const handleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
           fetchMoreData();
        }
      };
    
  return (
    <div className='container-fluid'>
        <div><JobFilter/></div>
        <div className='row'>
          
   <div className='colStyle'><JobCard/></div> 

     
      </div>
    </div>
  )
}

export default FetchCard;
