import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "../../src/styles/JobCard.css";
import UserPic from "../assets/images/UserPic.jpeg";

// import { useDispatch } from 'react-redux';
// import { setData } from './Redux/TaskActions';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataSuccess , filterDataSuccess} from '../Redux/TaskActions';
import store from '../Redux/Store';

function JobCard() {
  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [fetching, setFetching] = React.useState(false);
  const dispatch = useDispatch();
  React.useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const body = JSON.stringify({
      limit: 10,
      offset: 0,
    });
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };
    const fetchData = async () => {
      try {
        setFetching(true);
        const response = await fetch(
          "https://api.weekday.technology/adhoc/getSampleJdJSON",
          requestOptions
        );
        const result = await response.json();
         dispatch(fetchDataSuccess(result.jdList));
         dispatch(filterDataSuccess(result.jdList))
        // for (let i = 0; i < result.jdList.length; i++) {
        // console.log("Fetched data:", result.jdList[i]);
        // // console.log("company name",result.jdList[0].companyName);
        // let PriyaData=result.jdList[i];
        // console.log("hahah", PriyaData.companyName);
        // setData(PriyaData);
        // }
        console.log(result.jdList);
        // setData(result.jdList);
        setData((prevData) => [...prevData, ...result.jdList]);
        setPage((prevPage) => prevPage + 1);
        setFetching(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setFetching(false);
      }
    };

    fetchData();
  }, [page]);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
        if (!fetching) {
          setPage((prevPage) => prevPage + 1);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [fetching]);

  const Filterdata = useSelector(state => state.data);
  return (
    <>
      {data && (
        <div className="jobCard">
          {data.map((item, index) => (
            <Card sx={{ minWidth: 275 }} className="cardContainer" key={index}>
              <CardContent>
                <div className="postedDate" gutterBottom>
                  <p>⏳ Posted on 17 days ago </p>
                </div>

                <div>
                  <div className="wrapinf">
                    <div className="imgStyle">
                      <img src={item.logoUrl} style={{ width: "100%" }} />
                    </div>

                    <div className="infoContainer">
                      <div className="MuiBox-root">{item.companyName}</div>
                      <div className="JobName">{item.jobRole}</div>
                      <div className="cards-sub-text">{item.location}</div>
                    </div>
                  </div>
                </div>

                <Typography variant="body2" className="salaryClass">
                  Estimated Salary: ₹15 - 40 LPA ✅
                </Typography>
                <Typography className="companyWrap">
                  <div className="aboutCompany">About Company:</div>
                  <div className="aboutUs">About us</div>
                  <div className="description">
                    {item.jobDetailsFromCompany}
                  </div>
                  <div>Founder/Recruiter profiles:</div>
                  <div className="founderName">
                    <a href="https://www.linkedin.com/in/dubeysuchit">
                      <span style={{ fontWeight: 400 }}>Suchit Dubey</span>
                    </a>
                  </div>
                </Typography>
                <div className="viewWholeJob">
                  <a href="https://pp.com">View job</a>
                </div>
                <div className="exp-info-container">
                  <div>Minimum Experience</div>
                  <div>{item.minExp} years</div>
                </div>
              </CardContent>
              <CardActions className="cardActionbtn">
                <button className="buttonApply">⚡ Easy Apply</button>
                <button className="buttonRefrral">
                  <div style={{ width: "10%" }}>
                    <img src={UserPic} className="userPicStyle" />
                  </div>
                  <div className="userRefer">Ask for referral</div>
                </button>
              </CardActions>
            </Card>
          ))}
        </div>
      )}
    </>
  );
}

export default JobCard;
