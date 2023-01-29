import React, { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import "./map.css";

function Map(props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyB5tDOZ1iMxanJAQoNK5-iB1DZID5d92Lw",
  });

  const center = useMemo(() => ({ lat: 23.594183, lng: 56.510109 }), []);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="map-container">
      <div className="progress-panel-title">موقع المشروع</div>
      <GoogleMap zoom={15} center={center} mapContainerClassName="map">
        <MarkerF position={center} />
      </GoogleMap>
    </div>
  );
}

export default Map;
