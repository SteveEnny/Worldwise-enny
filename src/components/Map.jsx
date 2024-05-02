import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvent,
} from "react-leaflet";
import { useEffect, useState } from "react";
import { useUrlPosition } from "../hooks/useUrlPosition";

const position = [51.505, -0.09];

function Map({ cities }) {
  // const navigate = useNavigate();
  // const { lat: defualtLat, lng: defualtLng } = cities[0].position;
  const [mapPosition, setPosition] = useState(position);
  const [mapLat, mapLng] = useUrlPosition();
  // let city = cities[0];
  // console.log(city.cityName);
  useEffect(
    function () {
      setPosition([mapLat, mapLng]);
      console.log(position);
    },
    [mapLat, mapLng]
  );

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker position={city.position} key={city.id}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        ))}
        <DectectClick />
      </MapContainer>
    </div>
  );
}

// function ChangeCenter({ position }) {
//   const map = useMap();
//   map.setView(position);
//   return null;
// }

function DectectClick() {
  const navigate = useNavigate();
  useMapEvent({
    click: (e) => {
      console.log(e);
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });
  // return null;
}
export default Map;
