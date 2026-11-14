import { useState } from 'react';
import { ESTADOS } from '../services/estados';
import { PLACAS } from '../services/acoes';

// Simulação da placa instalada na rua, para cada estado
function PlacaRua() {
  const [estado, setEstado] = useState('atencao');
  const cor = ESTADOS[estado].cor;

  return (
    <div className="flex flex-col gap-6 md:flex-row">
      <div className="flex flex-wrap gap-2 md:w-56 md:flex-col">
        {Object.keys(ESTADOS).map((codigo) => (
          <button
            key={codigo}
            onClick={() => setEstado(codigo)}
            className={`rounded-lg border bg-white p-3 text-left text-sm font-semibold ${
              estado === codigo ? 'border-secundaria text-secundaria' : 'border-gray-200 text-gray-600'
            }`}
          >
            {ESTADOS[codigo].texto}
          </button>
        ))}
      </div>

      <div className="flex-1 rounded-xl border-8 bg-white p-6" style={{ borderColor: cor }}>
        <p className="border-b-2 pb-3 text-sm font-bold" style={{ borderColor: cor, color: cor }}>
          DILUVIUM · AVISO DE ALAGAMENTO
        </p>
        <p className="py-6 text-2xl font-bold">{PLACAS[estado]}</p>
        <p className="text-xs text-gray-500">Córrego Moinho Velho · Rua das Juntas Provisórias · Emergência: 199</p>
      </div>
    </div>
  );
}

export default PlacaRua;
