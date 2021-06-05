import React, { useEffect } from "react";
import "./App.css";
import { MapContainer, GeoJSON, TileLayer } from "react-leaflet";
import agriculturalAreas from "./data/agriculture_turkey.json";
import "leaflet/dist/leaflet.css";

function App() {
   
   
    const totalArea = agriculturalAreas.features[0].properties

    console.log(totalArea);


  return (
    <>
      <header className="heading">
        <h2>Agricultural Areas in Turkey</h2>
      </header>

      <MapContainer center={[38, 32]} zoom={6} className="map-container">
        {agriculturalAreas && (
          <GeoJSON
            attribution="Agricultural Areas in Turkey"
            data={agriculturalAreas.features}
          />
        )}
        {/*<TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />*/}
      </MapContainer>
    </>
  );
}

export default App;
