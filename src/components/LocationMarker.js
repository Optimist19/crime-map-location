import { GiCrimeSceneTape } from "react-icons/gi";
import LocationInfo from "./LocationInfo";
import { useState } from "react";
function LocationMarker({ lat, lng, crime }) {
  const [toggle, setToggle] = useState(false);

  function toggleFtn() {
    setToggle(!toggle);
  }

  console.log(toggle);
  return (
    <div className="location-marker">
      <GiCrimeSceneTape className="location-icon" onClick={toggleFtn} />
      {toggle && <LocationInfo crime={crime} />}
    </div>
  );
}

export default LocationMarker;
