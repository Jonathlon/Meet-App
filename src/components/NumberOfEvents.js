import React from "react";

const NumberOfEvents = ({ eventNumber, onEventNumberChange }) => {
  const handleInputChanged = (value) => {
    onEventNumberChange(value);
  };

  return (
    <div id="number-of-events">
      <input
        type="text"
        className="textbox"
        placeholder="Enter a number"
        value={eventNumber}
        onChange={handleInputChanged}
      />
    </div>
  );
};
export default NumberOfEvents;
