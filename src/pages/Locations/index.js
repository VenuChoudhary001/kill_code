import React from "react";
import Navbar from "../../Components/Navbar";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const LOCATIONS = () => {
  
  const data = [
    {
      name: "Wakanda",
      Latitude: 61.05654,
      Longitude: -64.75786,
    },
    {
      name: "Sokovia",
      Latitude: 7.72751,
      Longitude: 13.00909,
    },
    {
      name: "Asgard",
      Latitude: 65.65881, Longitude: 25.28571,
    },
    {
      name: "Queens",
      Latitude: 51.80406,
      Longitude: -73.21521,
    },
    {
      name: "Kamar-Taj",
      Latitude: 45.301,
      Longitude: 21.4536,
    },
    {
      name: "Svartalfheim",
      Latitude: 11.7513,
      Longitude: 96.0991,
    },
    {
      name: "Tonesburg",
      Latitude: 8.28037,
      Longitude: -144.33455,
    },
    {
      name: "Alfheim",
      Latitude: 80.62089,
      Longitude: 124.04041,
    },
    {
      name: "Morag",
      Latitude: -3.92118,
      Longitude: 103.90839,
    },
    {
      name: "Ta Lao",
      Latitude: -12.30682,
      Longitude: -83.82595,
    },
    {
      name: "Muspelheim",
      Latitude: 67.65881, Longitude: 60.28571,
    },
    {
      name: "Titan",
      Latitude: 11.58501,
      Longitude: -79.12818,
    },
  ];
  
 
  return (
    <>
      <Navbar />
      <section className="map-container">
       
<MapContainer center={[51.505, -0.09]} style={{height:500,zIndex:-1}} zoom={3} scrollWheelZoom={true}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  {data.map(item=><Marker position={[item.Latitude, item.Longitude]}>
    <Popup>
      {item.name}
    </Popup>
  </Marker>)}
</MapContainer>
      </section>
    </>
  );
};

export default LOCATIONS;
