import { ESTADOS } from '../services/estados';

// Barra de filtros do mapa
function FiltroMapa({ filtro, setFiltro }) {
  const opcoes = ['todos', ...Object.keys(ESTADOS)];

  return (
    <div className="flex gap-2 overflow-x-auto border-b border-gray-200 bg-white px-5 py-3">
      {opcoes.map((codigo) => (
        <button
          key={codigo}
          onClick={() => setFiltro(codigo)}
          className={`shrink-0 rounded-lg border px-3 py-1.5 text-xs font-semibold ${
            filtro === codigo ? 'border-secundaria bg-blue-50 text-secundaria' : 'border-gray-200 text-gray-600'
          }`}
        >
          {codigo === 'todos' ? 'Todos' : ESTADOS[codigo].texto}
        </button>
      ))}
    </div>
  );
}

export default FiltroMapa;
