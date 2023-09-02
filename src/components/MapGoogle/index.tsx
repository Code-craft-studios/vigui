'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import style from './style.module.css';
import 'leaflet/dist/leaflet.css';

const MapGoogle = () => {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={true}
      className={style.map}
    >
      <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
      <Marker position={[51.505, -0.09]}>
        <Popup>Texto que se va a mostrar al hacer click en el marcador</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapGoogle;
