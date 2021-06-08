import React, { useEffect } from "react";
import "./App.css";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import urfaJson from "./data/urfa.json";

const agriculturalAreas = require("./data/agriculture_turkey.json");

function App() {
  let arr = agriculturalAreas.features.map((item) => {
    return item.properties.Area;
  });

  let cityArea = urfaJson.features.map((item) => {
    return item.properties.Area;
  });

  let geo = agriculturalAreas.features.map((item) => {
    return item.geometry;
  });

  console.log(agriculturalAreas);
  console.log(geo);

  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const totalArea = arr.reduce(reducer) / 1000000; // square meters to square kilometers
  console.log(totalArea.toFixed(2));

  const cityAgriArea = cityArea.reduce(reducer) / 1000000; // square meters to square kilometers
  console.log(totalArea.toFixed(2));

  return (
    <>
      <header className="heading">
        <h2>Agricultural Areas in Turkey</h2>
        <br></br>
        <p>
          Total Agricultural area is {totalArea.toFixed(2)} square kilometers.
        </p>

        <p>
          Total Agricultural area of Urfa is {cityAgriArea.toFixed(2)} square kilometers.
        </p>
        <br></br>
      </header>

      <MapContainer center={[38, 32]} zoom={6}>
        <GeoJSON data={urfaJson} />

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </>
  );
}

export default App;
