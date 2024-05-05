import React , {useState} from 'react';
import '../styles/JobFilter.css';
import Select from "react-select";
const data=[
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
]

function JobFilter() {
    const [filtered, setFiltered] = useState([]);
    const [firstName, setFirstName] = useState("");
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
    <div className='jobFilter'>
      <div className='jobVarient'>
        <div>Applied jobs</div>
        <div className='searchJob'>Search jobs</div>
        <div>Suggested jobs</div>
      </div>
      <Select
        onChange={(entry) => {
          setFirstName({ firstName: entry });
          console.log("entered:" + firstName);
          onFilteredChangeCustom(
            entry.map((o) => {
              return o.value;
            }),
            "firstName"
          );
        }}
        value={filtered.firstName}
        isMulti
        closeMenuOnSelect={false}
        options={data.map((o, i) => {
          return { id: i, value: o.firstName, label: o.firstName };
        })}
      />
    </div>
  )
}

export default JobFilter
