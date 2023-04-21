import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { icon } from 'leaflet'
import 'leaflet/dist/leaflet.css';

function Map() {
    const ICON = icon({
        iconUrl: "/location-pin.png",
        iconSize: [32, 32],
    })

    return (
        <MapContainer className='mapLayer' center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{ height: '500px' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; OpenStreetMap contributors" />
            <Marker position={[51.505, -0.09]} icon={ICON}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
}

export default Map;
