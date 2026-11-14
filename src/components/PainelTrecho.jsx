import { useState } from 'react';
import StatusBadge from './StatusBadge';
import { ESTADOS, calcularPercentual } from '../services/estados';
import { ACOES } from '../services/acoes';

// Detalhe do trecho com a orientação para cada perfil
function PainelTrecho({ sensor, relatos }) {
  const [perfil, setPerfil] = useState('Morador');
  const estado = sensor.estadoTrecho;
  const quantidade = relatos.filter((relato) => relato.sensorId === sensor.id).length;

  return (
    <div>
      <p className="text-xs font-bold text-secundaria">TRECHO MONITORADO</p>
      <h2 className="text-xl font-bold">{sensor.rua}</h2>
      <p className="mb-3 text-sm text-gray-500">Córrego {sensor.corrego} · sensor {sensor.id}</p>
      <StatusBadge estado={estado} />

      <div className="my-4 grid grid-cols-2 gap-2 text-sm">
        <div className="rounded-lg border border-gray-200 p-3">
          <small className="block text-gray-500">Nível da água</small>
          <strong>{calcularPercentual(sensor)}% da cota</strong>
        </div>
        <div className="rounded-lg border border-gray-200 p-3">
          <small className="block text-gray-500">Relatos</small>
          <strong>{quantidade}</strong>
        </div>
      </div>

      <div className="flex gap-1 rounded-lg bg-gray-100 p-1">
        {Object.keys(ACOES).map((p) => (
          <button
            key={p}
            onClick={() => setPerfil(p)}
            className={`flex-1 rounded-md py-1.5 text-xs ${perfil === p ? 'bg-white font-bold text-secundaria shadow' : 'text-gray-500'}`}
          >
            {p}
          </button>
        ))}
      </div>

      <div className="mt-3 border-l-4 bg-gray-50 p-3" style={{ borderColor: ESTADOS[estado].cor }}>
        <small className="block text-xs text-gray-500">O que fazer agora</small>
        <strong className="text-sm">{ACOES[perfil][estado]}</strong>
      </div>
    </div>
  );
}

export default PainelTrecho;
