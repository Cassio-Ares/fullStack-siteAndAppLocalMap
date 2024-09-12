'use client'

import { LatLngExpression } from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Importar CSS do Leaflet
import L from 'leaflet';

// Importar os ícones manualmente
// import iconUrl from 'leaflet/dist/images/marker-icon.png';
// import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
// import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

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

L.Marker.prototype.options.icon = DefaultIcon;
export const Map = () => {
  return (
    <MapContainer
      center={[51.505, -0.09] as LatLngExpression}
      zoom={13}
      style={{ height: '100vh', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09] as LatLngExpression}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};


// import { MapContainer, Marker,TileLayer } from 'react-leaflet';
// import { LatLngExpression } from 'leaflet';

// export const Map = () => {
//   return (
//     <MapContainer
//       center={{ lat: 12, lng: 23 } as LatLngExpression}
//       zoom={13}
//       // whenCreated={}
//     >
//       <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <Marker position={[12, 23] as LatLngExpression}/>
//     </MapContainer>
//   );
// }


