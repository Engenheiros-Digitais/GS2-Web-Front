import StatusBadge from './StatusBadge';
import { ESTADOS, calcularPercentual, tempoAteTransbordar, vazaoEntrada, usoDrenagem } from '../services/estados';

// Detalhe do sensor: nível, velocidade, tempo até transbordar e drenagem
function PainelSensor({ sensor }) {
  const percentual = calcularPercentual(sensor);
  const tempo = tempoAteTransbordar(sensor);
  const uso = usoDrenagem(sensor);

  const dados = [
    { rotulo: 'Nível', valor: `${sensor.nivelCm} cm de ${sensor.cotaCm} cm (${percentual}%)` },
    { rotulo: 'Velocidade de subida', valor: `${sensor.velocidadeCmMin} cm/min` },
    { rotulo: 'Tempo até transbordar', valor: tempo > 0 ? `${tempo} min` : 'a água não está subindo' },
    { rotulo: 'Chuva', valor: `${sensor.chuvaMmH} mm/h` },
  ];

  return (
    <div>
      <p className="text-xs font-bold text-secundaria">DETALHE DO SENSOR (SIMULADO)</p>
      <h2 className="text-xl font-bold">{sensor.id}</h2>
      <p className="mb-3 text-sm text-gray-500">{sensor.rua} · Córrego {sensor.corrego}</p>
      <StatusBadge estado={sensor.estado} />

      <div className="mt-4 h-3 w-full rounded-full bg-gray-200">
        <div
          className="h-3 rounded-full"
          style={{ width: `${Math.min(percentual, 100)}%`, backgroundColor: ESTADOS[sensor.estado].cor }}
        ></div>
      </div>

      <dl className="mt-4 flex flex-col gap-2 text-sm">
        {dados.map((item) => (
          <div key={item.rotulo} className="flex justify-between gap-3 border-b border-gray-100 pb-2">
            <dt className="text-gray-500">{item.rotulo}</dt>
            <dd className="text-right font-semibold">{item.valor}</dd>
          </div>
        ))}
      </dl>

      <h3 className="mt-5 text-sm font-bold">Uso da drenagem</h3>
      <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
        <div className={`h-2 rounded-full ${uso >= 100 ? 'bg-critico' : 'bg-secundaria'}`} style={{ width: `${Math.min(uso, 100)}%` }}></div>
      </div>
      <p className="mt-1 text-xs text-gray-500">
        {vazaoEntrada(sensor)} L/s entrando de {sensor.capacidadeLs} L/s de capacidade ({uso}%). Valor ilustrativo.
      </p>
    </div>
  );
}

export default PainelSensor;
