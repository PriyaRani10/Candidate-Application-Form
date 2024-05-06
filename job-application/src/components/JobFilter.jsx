import React, { useState } from "react";
import "../styles/JobFilter.css";
import Select from "react-select";
import SelectDropDown from "./SelectDropDown";
const data = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

function JobFilter() {
  const [filtered, setFiltered] = useState([]);
  const [query, setQuery] = useState("");
  // const [firstName, setFirstName] = useState("");
  const onFilteredChangeCustom = (value, accessor) => {
    console.log("typeof: " + typeof accessor);
    console.log("value: " + value);

    let insertNewFilter = 1;
    console.log(insertNewFilter);

    if (filtered.length) {
      filtered.forEach((filter, i) => {
        if (filter["id"] === accessor) {
          if (value === "" || !value.length) {
            filtered.splice(i, 1);
          } else {
            filter["value"] = value;
          }
          insertNewFilter = 0;
        }
      });
    }

    if (insertNewFilter) {
      var customFilter = [];
      customFilter.push({ id: accessor, value: value });
      console.log("CUSTOM FILTER:" + customFilter);
    }

    setFiltered({ customFilter: filtered });
    console.log("setFiltered: " + filtered);
  };

  return (
    <div className="jobFilter">
      <div className="jobVarient">
        <div>Applied jobs</div>
        <div className="searchJob">Search jobs</div>
        <div>Suggested jobs</div>
      </div>
      <div className="allFilterWrap">
      <div className='DropDown'>     
      <SelectDropDown
        placeholder={"Role"}
        options={data}
        onChange={onFilteredChangeCustom}
      />
      </div>
      
      <div>
        <SelectDropDown
          placeholder={"No.of Employee"}
          options={data}
          onChange={onFilteredChangeCustom}
        />
      </div>
      <div>
        {" "}
        <SelectDropDown
          placeholder={"Experience"}
          options={data}
          onChange={onFilteredChangeCustom}
        />
      </div>
      <div>
        {" "}
        <SelectDropDown
          placeholder={"Remote"}
          options={data}
          onChange={onFilteredChangeCustom}
        />
      </div>
      <div>
        {" "}
        <SelectDropDown
          placeholder={"Minimum Base Pay salary"}
          options={data}
          onChange={onFilteredChangeCustom}
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
