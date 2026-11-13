import { ESTADOS } from '../services/estados';

// Selo do estado: texto sempre junto da cor
function StatusBadge({ estado }) {
  const info = ESTADOS[estado];
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs font-bold"
      style={{ borderColor: info.cor, borderStyle: estado === 'relatado' ? 'dashed' : 'solid' }}
    >
      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: info.cor }}></span>
      {info.texto}
    </span>
  );
}

export default StatusBadge;
