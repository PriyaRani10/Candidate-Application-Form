import React from 'react';
import '../styles/JobFilter.css';
import Select from "react-select";
function SelectDropDown({ options, value,placeholder, onChange }) {
  return (
    <div>
      <Select 
       value={value}
       placeholder={placeholder}
       isMulti
       closeMenuOnSelect={false}
       options={options}
       onChange={onChange}
      />
    </div>
  )
}

export default SelectDropDown
