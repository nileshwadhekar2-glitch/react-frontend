import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function MapPage() {
  return (
    <MapContainer center={[18.5204, 73.8567]} zoom={13} style={{height:"500px"}}>
      
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[18.593, 73.738]}>
        <Popup>
          Garbage at Wakad
        </Popup>
      </Marker>

    </MapContainer>
  );
}

export default MapPage;