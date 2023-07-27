import React from "react";
import { useState } from "react";

const NumberOfEvents = ({ onEventNumberChange }) => {
  const [inputValue, setInputValue] = useState("32");
  const handleInputChanged = (e) => {
    const value = e.target.value;
    setInputValue(value);
    onEventNumberChange(value);
  };

  return (
    <div id="number-of-events">
      <input
        type="text"
        className="NumberOfEventsInput"
        placeholder="Enter a number"
        value={inputValue}
        onChange={handleInputChanged}
      />
    </div>
  );
};
export default NumberOfEvents;
