// import { MapContainer, TileLayer } from 'react-leaflet'
// import './map.scss'
// import "leaflet/dist/leaflet.css";
// import Pin from '../pin/Pin';

// function Map({items}){
//   return (
//     // <MapContainer center={items.length ===1 ? [items[0].latitude, items[0].longitude] : [52.4797, -1.90269] } zoom={7} scrollWheelZoom={false} className='map'>
//     <MapContainer
//   center={
//     items.length === 1 && items[0].latitude !== undefined && items[0].longitude !== undefined
//       ? [items[0].latitude, items[0].longitude]
//       : [52.4797, -1.90269] // default fallback
//   }
//   zoom={7}
//   scrollWheelZoom={false}
//   className="map"
// >

//     <TileLayer
//       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//     />
//     {items.map(item=>(
//       <Pin item={item} key={item.id}/>
//     ))}
//   </MapContainer>
//   )
// }

// export default Map

import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Pin from "../pin/Pin";
import "./map.scss";

// ✅ Fix missing default marker icon in Vite/React
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconUrl: new URL("leaflet/dist/images/marker-icon.png", import.meta.url).href,
  iconRetinaUrl: new URL("leaflet/dist/images/marker-icon-2x.png", import.meta.url).href,
  shadowUrl: new URL("leaflet/dist/images/marker-shadow.png", import.meta.url).href,
});

function Map({ items }) {
  return (
    <MapContainer
      center={
        items.length === 1 && items[0].latitude !== undefined && items[0].longitude !== undefined
          ? [items[0].latitude, items[0].longitude]
          : [52.4797, -1.90269] // default fallback
      }
      zoom={7}
      scrollWheelZoom={false}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map((item) => (
        <Pin item={item} key={item.id} />
      ))}
    </MapContainer>
  );
}

export default Map;
