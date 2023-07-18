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
        placeholder="Number of events"
        value={eventNumber}
        onChange={handleInputChanged}
      />
    </div>
  );
};
export default NumberOfEvents;
