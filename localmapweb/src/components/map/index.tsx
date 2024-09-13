'use client'

import { LatLngExpression } from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Importar CSS do Leaflet
import L from 'leaflet';


// Substituindo o ícone padrão do Leaflet
const DefaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

interface Loc{
  lat:number | null,
  long:number | null,
}

L.Marker.prototype.options.icon = DefaultIcon;
export const Map = ({lat, long}:Loc) => {
  return (
    <MapContainer
      center={[lat, long] as LatLngExpression}
      zoom={13}
      style={{ height: '100vh', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, long] as LatLngExpression}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};


/**
 * whenCreated ={(map)=>{
 *  setFormValues((prev)=>({
 *   ...prev,
 *   coords:[event.latlng.lat, event.latlng.lng]
 * }))
 * }}
 */

