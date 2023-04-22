import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { icon } from 'leaflet'
import 'leaflet/dist/leaflet.css';

interface MapProps {
    x: number,
    y: number,
    z: number,
}

function Map({ x, y, z }: MapProps) {
    const ICON = icon({
        iconUrl: "/location-pin.png",
        iconSize: [32, 32],
    })

    return (
        <MapContainer className='mapLayer' center={{ lat: x, lng: y }} zoom={z} scrollWheelZoom={false} style={{ height: '500px' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; OpenStreetMap contributors" />
            <Marker position={{ lat: x, lng: y }} icon={ICON}>
                <Popup>
                    Four Seasons Resort Mauritius at Anahita,
                </Popup>
            </Marker>
        </MapContainer>
    );
}

export default Map;
