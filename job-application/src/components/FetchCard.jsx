import React, { useState,useEffect } from 'react';
import JobCard from './JobCard';
import '../styles/FetchCard.css';
import JobFilter from './JobFilter';


function FetchCard() {
    const yourArray=[0,1,2,3,4,5,6,7,8,9]
    const [data, setData] = useState(null);
    
  React.useEffect(()=>{
    const myHeaders= new Headers();
    myHeaders.append("Content-Type","application/json");
    const body=JSON.stringify({
      "limit":10,
      "offset":0
    });
    const requestOptions={
      method:"POST",
      headers:myHeaders,
      body
    };
    fetch("https://api.weekday.technology/adhoc/getSampleJdJSON",requestOptions)
    .then(response => response.json())
    // .then(data => setData(data,"---------------------->>>>data"))
    .then((result)=>console.log(result,"-----------------------------result"))
    .catch((error)=>console.log(error))
    
  })
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
            
            {yourArray.map(( i) => (
   <div className='col-4  colStyle'><JobCard key={i} /></div> 
  ))}
     
      </div>
    </div>
  )
}

export default FetchCard;
