import { useState } from "react";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  return (
    <li>
      <div className="event">
        <div className="name">{event.summary}</div>
        <div className="location">{event.location} </div>
        <div className="dateTime">
          {event && new Date(event.created).toUTCString()}
        </div>
        {/* <div className="dateCreated">{event.created}</div> */}

        {showDetails && <div className="details">{event.description}</div>}
        <button className="details-btn" onClick={toggleDetails}>
          {showDetails ? "hide details" : "show details"}
        </button>
      </div>
    </li>
  );
};

export default Event;
