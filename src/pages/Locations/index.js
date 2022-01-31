import React, { useMemo, useState } from "react";
import Navbar from "../../Components/Navbar";
import ReactMapGL, { Marker, Popup} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
const LOCATIONS = () => {
  const [viewport, setViewport] = useState({
    latitude: 37.8,
    longitude: -122.4,
    zoom: 4,
    bearing: 0,
    pitch: 0,
    maxZoom: 10,
    dragPan: false,
  });

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
  const [current, setCurrent] = useState();
  /*eslint-disable */
  const markers = useMemo(() =>
    data.map((item, index) => (
      <Marker key={index} latitude={item.Latitude} longitude={item.Longitude}>
        <div>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setCurrent(item)}
          >
            <path
              d="M16 2C13.0837 2.00344 10.2878 3.16347 8.22564 5.22563C6.16348 7.28778 5.00345 10.0837 5.00001 13C4.99652 15.3832 5.77499 17.7018 7.21601 19.6C7.21601 19.6 7.51601 19.995 7.56501 20.052L16 30L24.439 20.047C24.483 19.994 24.784 19.6 24.784 19.6L24.785 19.597C26.2253 17.6996 27.0034 15.3821 27 13C26.9966 10.0837 25.8365 7.28778 23.7744 5.22563C21.7122 3.16347 18.9163 2.00344 16 2ZM16 17C15.2089 17 14.4355 16.7654 13.7777 16.3259C13.1199 15.8864 12.6072 15.2616 12.3045 14.5307C12.0017 13.7998 11.9225 12.9956 12.0769 12.2196C12.2312 11.4437 12.6122 10.731 13.1716 10.1716C13.731 9.61216 14.4437 9.2312 15.2197 9.07686C15.9956 8.92252 16.7998 9.00173 17.5307 9.30448C18.2616 9.60723 18.8864 10.1199 19.3259 10.7777C19.7654 11.4355 20 12.2089 20 13C19.9987 14.0605 19.5768 15.0771 18.827 15.827C18.0771 16.5768 17.0605 16.9987 16 17Z"
              fill="#F00000"
            />
          </svg>
          <div className="map-marker" style={{ color: "white" }}>
            {item.name}
          </div>
        </div>
      </Marker>
    ))
  );
  return (
    <>
      <Navbar />
      <section className="map-container">
        <ReactMapGL
          {...viewport}
          width="inherit"
          height="65vh"
          onViewportChange={(viewport) => setViewport(viewport)}
          mapStyle="mapbox://styles/venuchoudhary001/ckyzhd80j000s14o7wgqvc2nu"
          mapboxApiAccessToken="pk.eyJ1IjoidmVudWNob3VkaGFyeTAwMSIsImEiOiJja3l6ZjFhMDcwbngyMnd1b3V6MWxtYWFoIn0.OVlAI5C9lFQva_R9LSZKwg"
        >
          {/* <ScaleControl captureScroll={false} maxWidth={100} unit="metric" style={scaleControlStyle} /> */}
          {markers}
          {current && (
            <Popup
              latitude={current.Latitude}
              longitude={current.Longitude}
              onClose={() => setCurrent(null)}
            >
              <div>{current.name}</div>
            </Popup>
          )}
        </ReactMapGL>
      </section>
    </>
  );
};

export default LOCATIONS;
