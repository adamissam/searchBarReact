import React, { useEffect, useState } from 'react'

import PropTypes from 'prop-types';

export default function SearchBar(props) {
  const {handleChange,placeholder}= props;
    const [searchInformation, setSearchInformation] = useState("");
  
    const handleChangeInputValue = (value) => {
      if (value === undefined || value === null) {
        return null;
      }
      console.log("value => ", value);
      setSearchInformation(value);
      handleChange(value)
    };
    return (
      <div className="App">
        <input
          placeholder={placeholder?placeholder:"Entrer git name profil"}
          value={searchInformation}
          onChange={(event) => handleChangeInputValue(event.target.value)}
        />
      </div>
    );
}


SearchBar.propTypes= {
    handleChange:PropTypes.func,
    placeholder:PropTypes.string
};