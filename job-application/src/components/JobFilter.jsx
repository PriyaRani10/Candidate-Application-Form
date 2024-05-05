import React from 'react';
import '../styles/JobFilter.css';

function JobFilter() {
  return (
    <div className='jobFilter'>
      <div className='jobVarient'>
        <div>Applied jobs</div>
        <div className='searchJob'>Search jobs</div>
        <div>Suggested jobs</div>
      </div>
    </div>
  )
}

export default JobFilter
