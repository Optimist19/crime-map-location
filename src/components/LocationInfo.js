import React from "react";

function LocationInfo({ crime }) {
	// console.log(crime)
  return (
    <div className="location-info">
      <h2>{crime}</h2>
    </div>
  );
}

export default LocationInfo;
