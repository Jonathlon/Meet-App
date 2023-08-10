import React from "react";
import { useState } from "react";

const NumberOfEvents = ({ onEventNumberChange, setErrorAlert }) => {
  const [inputValue, setInputValue] = useState("32");
  const handleInputChanged = (e) => {
    const value = e.target.value;
    setInputValue(value);
    onEventNumberChange(value);

    let errorText;
    if (isNaN(e.target.value) === true) {
      errorText = "Number of events must contain only numbers";
    } else if (e.target.value <= 0) {
      errorText = "Number of events must be greater than 0";
    } else if (e.target.value > 50) {
      errorText = "The maximum number of events is 50";
    } else {
      errorText = "";
    }

    setErrorAlert(errorText);
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
