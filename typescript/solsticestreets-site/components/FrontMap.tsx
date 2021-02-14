import React from "react";
import Link from "next/link";
import { MapContainer, Rectangle, TileLayer, Polyline } from "react-leaflet";
import type { City } from "./City";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

function ClickableRect2(props: { city: City; onClick }, ref) {
  const city = props.city;
  const bb = city.bb;
  return (
    <Rectangle
      key={city.key}
      bounds={[
        [bb[0][1], bb[0][0]],
        [bb[1][1], bb[1][0]],
      ]}
      eventHandlers={{ click: props.onClick }}
      ref={ref}
    />
  );
}

function Rect(props: { city: City }) {
  const city = props.city;
  const bb = city.bb;
  return (
    <Rectangle
      key={city.key}
      bounds={[
        [bb[0][1], bb[0][0]],
        [bb[1][1], bb[1][0]],
      ]}
      eventHandlers={{
        click: () => {
          window.location.href = `/cities/${city.key}`;
        },
      }}
    />
  );
}

const ClickableRect = React.forwardRef(ClickableRect2);
const FrontMap = (c: { cities: City[] }) => {
  //console.log(c.cities);
  const cityRects = c.cities.map((city: City) => {
    return <Rect city={city} />;
  });
  return (
    <MapContainer
      center={[30, 0]}
      zoom={2}
      scrollWheelZoom={true}
      style={{ height: "800px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        //url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
      />
      {cityRects}
    </MapContainer>
  );
};

export default FrontMap;
