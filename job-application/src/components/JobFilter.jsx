import React, { useState, useMemo } from "react";
import "../styles/JobFilter.css";
import SelectDropDown from "./SelectDropDown";
import { useDispatch, useSelector } from "react-redux";
import {
  roleOptions,
  noOfExpOptions,
  remoteOption,
  expOptions,
  MinBasePayOptions,
} from "./OptionStaticData";

function JobFilter() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.data);
  console.log("data", data);
  // const [filtered, setFiltered] = useState([]);
  const [query, setQuery] = useState("");
  // dispatch(filterData(filtered));

  const filterData = (e) => {
    let option = e.target;

    console.log(option, "hiiiii options");
  };

  return (
    <div className="jobFilter">
      <div className="jobVarient">
        <div>Applied jobs</div>
        <div className="searchJob">Search jobs</div>
        <div>Suggested jobs</div>
      </div>
      <div className="allFilterWrap">
        <div className="DropDown">
          <SelectDropDown
            placeholder={"Role"}
            options={roleOptions}
            label={roleOptions}
            // value={data.jobRole}
            onChange={(e) => filterData(e)}
          />
        </div>

        <div>
          <SelectDropDown
            placeholder={"No.of Employee"}
            options={expOptions}
            label={expOptions}
            onChange={(e) => filterData(e)}
          />
        </div>
        <div>
          {" "}
          <SelectDropDown
            placeholder={"Experience"}
            options={noOfExpOptions}
            label={noOfExpOptions}
            onChange={(e) => filterData(e)}
          />
        </div>
        <div>
          {" "}
          <SelectDropDown
            placeholder={"Remote"}
            options={remoteOption}
            label={remoteOption}
            onChange={(e) => filterData(e)}
          />
        </div>
        <div>
          {" "}
          <SelectDropDown
            placeholder={"Minimum Base Pay salary"}
            options={MinBasePayOptions}
            label={MinBasePayOptions}
            onChange={(e) => filterData(e)}
          />
        </div>

        <div className="input-box">
          <input
            type="search"
            name="search"
            id="search-form"
            className="search-input"
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Company Name"
          />
        </div>
      </div>
    </div>
  );
}

export default JobFilter;
