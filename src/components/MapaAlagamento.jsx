import { MapContainer, TileLayer, Polyline, CircleMarker, Popup } from 'react-leaflet';
import { ESTADOS } from '../services/estados';

const CENTRO = [-23.595, -46.6075];

// Mapa real (Leaflet + OpenStreetMap): cada trecho com a cor do estado
function MapaAlagamento({ sensores, filtro, onSelecionar }) {
  return (
    <MapContainer center={CENTRO} zoom={15} className="h-full w-full">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Trechos de rua */}
      {sensores.map((sensor) => (
        <Polyline
          key={sensor.id}
          positions={sensor.trecho}
          pathOptions={{
            color: ESTADOS[sensor.estadoTrecho].cor,
            weight: 9,
            opacity: filtro === 'todos' || filtro === sensor.estadoTrecho ? 1 : 0.15,
            dashArray: sensor.estadoTrecho === 'relatado' ? '6 10' : null,
          }}
          eventHandlers={{ click: () => onSelecionar({ tipo: 'trecho', id: sensor.id }) }}
        />
      ))}

      {/* Sensores */}
      {sensores.map((sensor) => (
        <CircleMarker
          key={'sensor-' + sensor.id}
          center={[sensor.lat, sensor.lon]}
          radius={8}
          pathOptions={{ color: '#2563EB', weight: 3, fillColor: '#FFFFFF', fillOpacity: 1 }}
          eventHandlers={{ click: () => onSelecionar({ tipo: 'sensor', id: sensor.id }) }}
        >
          <Popup>Sensor {sensor.id}</Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}

export default MapaAlagamento;
