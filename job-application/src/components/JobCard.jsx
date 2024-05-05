import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../../src/styles/JobCard.css';
import Logo from '../assets/images/GoogleLogo.png';

function JobCard() {
  return (
    
    <div className='jobCard'>
       <Card sx={{ minWidth: 275 }} className='cardContainer'>
      <CardContent>
        <div className='postedDate' gutterBottom>
          <p>⏳ Posted on 17 days ago </p>
        </div>
        
        <div >
            <div className='wrapinf'>
            <div className='imgStyle'>
            <img src={Logo} style={{width:"100%"}}/>
             </div>
             
            <div className='infoContainer'>
            <div className="MuiBox-root">narrative (yc w23)</div>
            <div className='JobName'>Founding Fullstack Engineer</div>
            <div className="cards-sub-text">India</div>
            </div>
            
            </div>
           </div>
       
        <Typography variant="body2" className='salaryClass'>
        Estimated Salary: ₹15 - 40 LPA ✅
        </Typography>
        <Typography className='companyWrap'>
            <div className='aboutCompany'>About Company:</div>
            <div className='aboutUs'>About us</div>
            <div className='description'>Google is making AI powered data tools for logistics.
                 We standardize and find errors in shipping invoice data for large companies.
                 whether it's through disaster relief, revitalizing community
                  spaces or providing essentials like winter jackets. 
                 Each year, Americans donate over $450 billion to nonprofits,
                  and cite trust and </div>
                 <div>Founder/Recruiter profiles:</div>
                 <div className='founderName'><a href="https://www.linkedin.com/in/dubeysuchit"><span style= {{fontWeight:400}}>Suchit Dubey</span></a></div>
        </Typography>
        <div className='viewWholeJob'><a href="https://pp.com">View job</a></div>
        <div className='exp-info-container'>
            <div>Minimum Experience</div>
            <div>3 years</div>
        </div>
      </CardContent>
      <CardActions className='cardActionbtn'>
        <button  className="buttonApply">⚡ Easy Apply</button>
      </CardActions>
    </Card>
    </div>
  )
}

export default JobCard
